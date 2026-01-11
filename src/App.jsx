import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MessageSquare, Loader2, X, PlayCircle, Pause, Layers, ScanEye, ArrowRight, ChevronDown, ChevronUp, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

/**
 * --- PLANETARY DATA ---
 */
// Using 'textures updated' folder from the repository
const REPO_URL = "https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/textures%20updated";

const SOLAR_DATA = [
  { 
    id: 'sun', name: "Sun", type: "Star", radius: 35, distance: 0, speed: 0, color: '#FFD700', textureType: 'star', 
    // Updated to Title Case: Sun.jpg
    textureUrl: `${REPO_URL}/Sun.jpg`,
    stats: { temp: '5,500°C', orbit: 'N/A', gravity: '274 m/s²', day: '25 Days' }, 
    comp: ['Hydrogen', 'Helium'], 
    desc: "The star at the center of our Solar System.", 
    narration: "The Sun is the colossal powerhouse at the center of our Solar System, a nearly perfect sphere of hot plasma that dictates the orbits of every planet. It accounts for a staggering 99.86% of the total mass of the entire system. Its core is a nuclear fusion reactor, converting 600 million tons of hydrogen into helium every single second.",
    facts: [ "Accounts for 99.86% of solar system mass.", "Light takes 8 mins to reach Earth.", "Core is ~15 million degrees Celsius.", "Will eventually become a Red Giant.", "Magnetic field flips every 11 years." ]
  },
  { 
    id: 'mercury', name: "Mercury", type: "Planet", radius: 2.8, distance: 55, speed: 0.015, color: '#999999', textureType: 'mercury',
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Mercury.jpg`,
    stats: { temp: '167°C', orbit: '88 Days', gravity: '3.7 m/s²', day: '59 Days' }, 
    comp: ['Iron', 'Sodium'], 
    desc: "The smallest planet in the Solar System.", 
    narration: "Mercury is the smallest planet in our solar system and the closest to the Sun. Despite its proximity, it is not the hottest planet. It possesses a dark, cratered surface reminiscent of Earth's Moon. Uniquely, Mercury has an enormous iron core making up 85% of its radius.",
    facts: [ "Shrinks as it cools, creating cliffs.", "Temp swings from 430°C to -180°C.", "No atmosphere to trap heat.", "Day lasts 176 Earth days.", "Most cratered planet." ] 
  },
  { 
    id: 'venus', name: "Venus", type: "Planet", radius: 6.5, distance: 80, speed: 0.012, color: '#E3BB76', textureType: 'venus', 
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Venus.jpg`,
    stats: { temp: '464°C', orbit: '225 Days', gravity: '8.87 m/s²', day: '243 Days' }, 
    comp: ['CO2', 'Nitrogen'], 
    desc: "Hottest planet due to greenhouse effect.", 
    narration: "Venus is often called Earth's twin due to similar size, but it is a hellish world with a thick, toxic atmosphere of carbon dioxide. This creates a runaway greenhouse effect, making it the hottest planet. Unusually, Venus rotates backwards, so the sun rises in the west.",
    facts: [ "Hottest planet in the solar system.", "Spins backwards (retrograde).", "Day is longer than its year.", "Pressure is 90x Earth's.", "Named after goddess of love." ] 
  },
  { 
    id: 'earth', name: "Earth", type: "Planet", radius: 7, distance: 110, speed: 0.01, color: '#1C4E80', textureType: 'earth',
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Earth.jpg`,
    stats: { temp: '15°C', orbit: '365 Days', gravity: '9.8 m/s²', day: '24 Hours' }, 
    comp: ['Nitrogen', 'Oxygen'], 
    desc: "The only known world to harbor life.", 
    narration: "Earth is our home and the only known celestial body confirmed to harbor life. Sitting in the 'Goldilocks zone,' it has liquid water covering 70% of the surface. Its magnetic field protects the atmosphere from solar radiation. Earth is dynamically active with tectonic plates.",
    facts: [ "Only place known to host life.", "Densest planet in the system.", "70% surface is water.", "Protected by magnetic field.", "Not a perfect sphere." ], 
    moons: [{ 
        name: "Moon", radius: 1.9, distance: 14, speed: 0.03, color: '#E0E0E0', type: 'rocky',
        // Updated to Title Case
        textureUrl: `${REPO_URL}/Moon.jpg`
    }] 
  },
  { 
    id: 'mars', name: "Mars", type: "Planet", radius: 3.8, distance: 150, speed: 0.008, color: '#D14A28', textureType: 'mars', 
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Mars.jpg`,
    stats: { temp: '-65°C', orbit: '687 Days', gravity: '3.71 m/s²', day: '24.6 Hours' }, 
    comp: ['CO2', 'Argon'], 
    desc: "The Red Planet.", 
    narration: "Mars, the Red Planet, gets its color from iron oxide rust. It is a dusty, cold desert world but holds geological wonders like Olympus Mons, the largest volcano in the solar system. Ancient river valleys suggest it was once warmer and wetter, potentially capable of supporting life.",
    facts: [ "Home to largest volcano, Olympus Mons.", "Has largest dust storms.", "Red color is rust.", "Has two small moons.", "Valles Marineris spans 4000km." ], 
    moons: [{ name: "Phobos", radius: 0.6, distance: 8, speed: 0.05, color: '#887766' }, { name: "Deimos", radius: 0.4, distance: 12, speed: 0.03, color: '#776655' }] 
  },
  { 
    id: 'jupiter', name: "Jupiter", type: "Gas Giant", radius: 22, distance: 220, speed: 0.004, color: '#C88B3A', textureType: 'jupiter', 
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Jupiter.jpg`,
    stats: { temp: '-110°C', orbit: '12 Years', gravity: '24.79 m/s²', day: '10 Hours' }, 
    comp: ['Hydrogen', 'Helium'], 
    desc: "The largest planet.", 
    narration: "Jupiter is a gas giant more massive than all other planets combined. Its iconic Great Red Spot is a storm larger than Earth raging for centuries. Jupiter acts as a cosmic vacuum cleaner, attracting debris with its gravity. It rotates incredibly fast, creating a day of only 10 hours.",
    facts: [ "Great Red Spot is a giant storm.", "Shortest day of all planets.", "Mass is 2.5x all others combined.", "Has faint rings.", "Strongest magnetic field." ], 
    moons: [{ name: "Io", radius: 1.8, distance: 30, speed: 0.04, color: '#F8F189' }, { name: "Europa", radius: 1.6, distance: 35, speed: 0.03, color: '#C6D2D8' }, { name: "Ganymede", radius: 2.6, distance: 42, speed: 0.02, color: '#968E84' }, { name: "Callisto", radius: 2.4, distance: 50, speed: 0.015, color: '#6E665A' }],
    rings: { inner: 22.8, outer: 23.5, color: 0xa08060, opacity: 0.1 } 
  },
  { 
    id: 'saturn', name: "Saturn", type: "Gas Giant", radius: 18, distance: 300, speed: 0.003, color: '#E4D5B6', textureType: 'saturn',
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Saturn.jpg`,
    rings: { inner: 24, outer: 42, color: 0xcfc3a3, opacity: 0.9 }, 
    stats: { temp: '-140°C', orbit: '29 Years', gravity: '10.44 m/s²', day: '10.7 Hours' }, 
    comp: ['Hydrogen', 'Helium'], 
    desc: "Famous for its rings.", 
    narration: "Saturn is the jewel of the solar system, known for its spectacular icy rings. It is the only planet less dense than water; it would float in a giant bathtub. A hexagonal storm persists at its north pole. Its moon Titan has a thick atmosphere and liquid methane lakes.",
    facts: [ "Rings are made of ice.", "Least dense planet (floats).", "Hexagonal storm at north pole.", "Titan has methane lakes.", "Most moons (146)." ], 
    moons: [{ name: "Titan", radius: 2.5, distance: 40, speed: 0.02, color: '#E8D586' }, { name: "Rhea", radius: 0.8, distance: 25, speed: 0.03, color: '#B0B0B0' }] 
  },
  { 
    id: 'uranus', name: "Uranus", type: "Ice Giant", radius: 12, distance: 380, speed: 0.002, color: '#93B8BE', textureType: 'uranus', tilt: Math.PI / 2,
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Uranus.jpg`,
    rings: { inner: 14, outer: 18, color: 0x88aabb, opacity: 0.2 },
    stats: { temp: '-195°C', orbit: '84 Years', gravity: '8.69 m/s²', day: '17 Hours' }, 
    comp: ['Hydrogen', 'Ices'], 
    desc: "Rotates on its side.", 
    narration: "Uranus is an ice giant that rotates on its side at a 98-degree angle, likely due to a massive collision. This causes extreme seasonal changes, with poles seeing 42 years of sunlight then darkness. Its atmosphere contains methane, giving it a pale blue-green color.",
    facts: [ "Rotates on its side.", "Coldest planetary atmosphere.", "Retrograde rotation.", "First planet found by telescope.", "Has 13 rings." ], 
    moons: [{ name: "Titania", radius: 0.9, distance: 20, speed: 0.03, color: '#D0C0B0' }] 
  },
  { 
    id: 'neptune', name: "Neptune", type: "Ice Giant", radius: 11.5, distance: 450, speed: 0.001, color: '#5B80ED', textureType: 'neptune', 
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Neptune.jpg`,
    stats: { temp: '-200°C', orbit: '165 Years', gravity: '11.15 m/s²', day: '16 Hours' }, 
    comp: ['Hydrogen', 'Ices'], 
    desc: "The windiest planet.", 
    narration: "Neptune is a dark, cold world whipped by supersonic winds reaching 2,000 km/h. It was the first planet predicted by mathematics before observation. Its moon Triton orbits backwards and spews nitrogen geysers, suggesting it was captured from the Kuiper Belt.",
    facts: [ "Supersonic winds (2000 km/h).", "Predicted by math first.", "165 Earth years per orbit.", "Blue color from methane.", "Great Dark Spot disappeared." ], 
    moons: [{ name: "Triton", radius: 1.4, distance: 18, speed: 0.03, color: '#E0D0C0' }] 
  },
  { 
    id: 'pluto', name: "Pluto", type: "Dwarf Planet", radius: 1.8, distance: 585, speed: 0.0008, color: '#D1C2A5', textureType: 'rocky',
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Pluto.jpg`,
    stats: { temp: '-229°C', orbit: '248 Years', gravity: '0.62 m/s²', day: '153 Hours' }, 
    comp: ['Nitrogen', 'Methane'], 
    desc: "The famous dwarf planet.", 
    narration: "Pluto, once considered the ninth planet, is a dwarf planet in the Kuiper belt. It has a heart-shaped glacier named Tombaugh Regio made of nitrogen ice. Pluto orbits the sun in a highly elliptical and tilted path, sometimes coming closer to the Sun than Neptune.",
    facts: [ "Reclassified as dwarf planet in 2006.", "Has a heart-shaped glacier.", "Moon Charon is half its size.", "Atmosphere freezes and falls as snow.", "One year is 248 Earth years." ],
    moons: [{ name: "Charon", radius: 0.9, distance: 5, speed: 0.01, color: '#A0A0A0' }]
  },
  { 
    id: 'haumea', name: "Haumea", type: "Dwarf Planet", radius: 2.0, distance: 645, speed: 0.0006, color: '#E0E0E0', textureType: 'rocky', 
    // Updated to Title Case
    textureUrl: `${REPO_URL}/Haumea.jpg`,
    scale: [1.9, 0.9, 0.5], 
    stats: { temp: '-241°C', orbit: '284 Years', gravity: '0.4 m/s²', day: '4 Hours' }, 
    comp: ['Rock', 'Ice'], 
    desc: "The egg-shaped spinner.", 
    narration: "Haumea is a unique dwarf planet that spins so fast—a day is only 4 hours long—that it has been pulled into the shape of a flattened egg or rugby ball. It is covered in crystalline water ice and has two moons and a ring system.",
    facts: [ "Spins once every 4 hours.", "Shaped like an egg (ellipsoid).", "Has two moons and a ring.", "Named after Hawaiian goddess.", "Covered in crystalline ice." ]
  },
  { 
    id: 'sedna', name: "Sedna", type: "Dwarf Planet", radius: 1.5, distance: 750, speed: 0.0004, color: '#CD5C5C', textureType: 'rocky', 
    // Updated to Title Case: Sedna.jpg
    textureUrl: `${REPO_URL}/Sedna.jpg`,
    stats: { temp: '-240°C', orbit: '11,400 Years', gravity: '0.4 m/s²', day: '10 Hours' }, 
    comp: ['Methane', 'Nitrogen'], 
    desc: "The distant wanderer.", 
    narration: "Sedna is a distant dwarf planet in the outer reaches of the Solar System. It has an exceptionally long and elongated orbit, taking over 11,000 years to circle the Sun. Its surface is one of the reddest in the solar system.",
    facts: [ "Takes 11,400 years to orbit the Sun.", "One of the reddest objects in the system.", "Extremely distant.", "Likely covered in hydrocarbon sludge.", "Named after Inuit sea goddess." ]
  }
];

// Audio URLs
const AUDIO_IDLE_URL = "https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_X01.mp3";
const AUDIO_TOUR_URL = "https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_journey_01.mp3"; 

export default function App() {
  const mountRef = useRef(null);
  
  // State
  const [loading, setLoading] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isTouring, setIsTouring] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [structureMode, setStructureMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Audio & Idle State
  const [isIdle, setIsIdle] = useState(true); 
  const idleTimerRef = useRef(null);
  const audioRef = useRef(null);
  
  // Refs for Three.js objects
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const objectsRef = useRef([]);
  const interactablesRef = useRef([]);
  const tourTimerRef = useRef(null);
  const tourIndexRef = useRef(-1);
  const isTouringRef = useRef(false); // Ref for immediate access in loop
  const activeTargetRef = useRef(null);
  
  // Raycaster for interactions
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  // --- HELPER FUNCTIONS (Declared before useEffects) ---

  const focusPlanet = (id, moonIndex) => {
      if (id < 0 || id >= SOLAR_DATA.length) return;
      
      setSelectedPlanet(SOLAR_DATA[id]);
      
      const obj = objectsRef.current[id];
      if (!obj) return;
      
      const targetMesh = (moonIndex !== undefined && obj.moons && obj.moons[moonIndex]) 
          ? obj.moons[moonIndex].mesh 
          : obj.mesh;
      const offset = (moonIndex !== undefined) ? 12 : obj.data.radius * 3 + 15;

      const v = new THREE.Vector3();
      targetMesh.getWorldPosition(v);

      if (controlsRef.current && cameraRef.current) {
          const camPos = v.clone().add(new THREE.Vector3(offset, offset*0.5, offset));
          cameraRef.current.position.copy(camPos);
          controlsRef.current.target.copy(v);
          controlsRef.current.update();
          
          activeTargetRef.current = {
              mesh: targetMesh,
              lastPos: v.clone()
          };
      }
  };

  const visitNextPlanet = (idx) => {
      // Access ref directly to avoid closure staleness if possible, but here we use state
      // We'll rely on the isTouringRef which we sync with state
      if(!isTouringRef.current) return;
      
      if(idx >= SOLAR_DATA.length) { 
          setIsTouring(false); 
          isTouringRef.current = false;
          return; 
      }
      
      tourIndexRef.current = idx;
      focusPlanet(idx);
      
      if(tourTimerRef.current) clearTimeout(tourTimerRef.current);
      tourTimerRef.current = setTimeout(() => {
          visitNextPlanet(idx + 1);
      }, 10000); // 10 seconds per planet
  };

  const resetView = () => {
      setSelectedPlanet(null);
      setIsTouring(false);
      isTouringRef.current = false;
      activeTargetRef.current = null;
      if (tourTimerRef.current) clearTimeout(tourTimerRef.current);
      
      if (controlsRef.current && cameraRef.current) {
          controlsRef.current.target.set(0,0,0);
          cameraRef.current.position.set(0, 150, 600);
          controlsRef.current.update();
      }
  };

  const startTour = () => {
      setIsTouring(true);
      isTouringRef.current = true;
      visitNextPlanet(0);
  };

  // --- AUDIO LOGIC ---
  const resetIdleTimer = () => {
      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
          setIsIdle(true);
      }, 10000); 
  };

  useEffect(() => {
      const events = ['mousemove', 'mousedown', 'keydown', 'touchstart'];
      events.forEach(e => window.addEventListener(e, resetIdleTimer));
      resetIdleTimer();
      return () => events.forEach(e => window.removeEventListener(e, resetIdleTimer));
  }, []);

  useEffect(() => {
      const unlockAudio = () => {
          if (audioRef.current && audioRef.current.paused && !isMuted) {
             const currentSrc = isTouring ? AUDIO_TOUR_URL : AUDIO_IDLE_URL;
             if (audioRef.current.src !== currentSrc) audioRef.current.src = currentSrc;
             audioRef.current.play().catch(() => {});
          }
      };
      window.addEventListener('click', unlockAudio);
      return () => window.removeEventListener('click', unlockAudio);
  }, [isMuted, isTouring]);

  useEffect(() => {
      if (!audioRef.current) {
          audioRef.current = new Audio();
          audioRef.current.loop = true;
          audioRef.current.volume = 0.8;
      }
      const audio = audioRef.current;
      if (isMuted) { audio.pause(); return; }

      const playAudio = (src) => {
          if (audio.src !== src) {
              audio.src = src;
              audio.play().catch(() => {});
          } else if (audio.paused) {
             audio.play().catch(() => {});
          }
      };

      if (isTouring) playAudio(AUDIO_TOUR_URL);
      else playAudio(AUDIO_IDLE_URL);
      
  }, [isTouring, isMuted]);

  // Fullscreen Logic
  const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
      } else {
          if (document.exitFullscreen) {
              document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
          }
      }
  };

  useEffect(() => {
      const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener('fullscreenchange', onFsChange);
      return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  // --- THREE.JS INITIALIZATION ---
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.0008);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 150, 600);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: false,
        logarithmicDepthBuffer: true,
        powerPreference: "high-performance" 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.2;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 20;
    controls.maxDistance = 4000;
    controlsRef.current = controls;

    // --- LIGHTING ---
    const hemiLight = new THREE.HemisphereLight(0xffffe0, 0x000000, 0.15); 
    scene.add(hemiLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.8); 
    scene.add(ambientLight);
    
    const sunLight = new THREE.PointLight(0xffffff, 10.0, 0, 0); 
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    // --- TEXTURES ---
    function generateTexture(type, colorHex, isRoughnessMap = false) {
        const isPlanetMap = ['earth', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'rocky', 'atmosphere', 'galaxy'].includes(type);
        const sizeW = 2048; 
        const sizeH = isPlanetMap ? 1024 : 2048; 
        const canvas = document.createElement('canvas');
        canvas.width = sizeW; canvas.height = sizeH;
        const ctx = canvas.getContext('2d');
        const w = sizeW; const h = sizeH;
        const baseColor = new THREE.Color(colorHex);
        
        const drawNoiseLayer = (scale, alpha, blendMode = 'source-over', color = null) => {
            const count = 300 * scale;
            ctx.globalCompositeOperation = blendMode;
            for(let i=0; i<count; i++) {
                const x = Math.random() * w;
                const y = Math.random() * h;
                const radius = (Math.random() * 50 + 20) / scale;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI*2);
                ctx.fillStyle = color || `rgba(255,255,255,${alpha})`;
                ctx.fill();
            }
            ctx.globalCompositeOperation = 'source-over';
        };

        if (type === 'earth') {
            ctx.fillStyle = '#0a1a33'; ctx.fillRect(0,0,w,h);
            return new THREE.CanvasTexture(canvas);
        }
        if (type === 'star') {
            const grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2); 
            grd.addColorStop(0, '#FFFFFF'); grd.addColorStop(0.3, '#FFFFAA'); grd.addColorStop(1, colorHex); 
            ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
            drawNoiseLayer(0.5, 0.2, 'overlay', '#ffaa00');
        }
        else if (type === 'glow') {
            const grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
            grd.addColorStop(0, '#FFFFFF'); grd.addColorStop(0.2, '#FFFFAA'); grd.addColorStop(0.5, colorHex); grd.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
        }
        else if (type === 'galaxy') {
            ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);
            for(let i=0; i<3; i++) {
                ctx.filter = `blur(${30 + i*10}px)`; ctx.globalCompositeOperation = 'screen';
                const hue = Math.random() * 60 + 200; 
                drawNoiseLayer(0.5, 0.1, 'screen', `hsl(${hue}, 60%, 40%)`);
            }
            ctx.filter = 'none';
        }
        else if (type === 'mercury' || type === 'rocky') {
            ctx.fillStyle = colorHex; ctx.fillRect(0,0,w,h);
            ctx.globalCompositeOperation = 'multiply';
            for(let i=0; i<8000; i++) {
                const shade = Math.random() * 80 + 100;
                ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
                ctx.globalAlpha = 0.3; ctx.fillRect(Math.random()*w, Math.random()*h, 2, 2);
            }
            ctx.globalAlpha = 1.0;
            ctx.globalCompositeOperation = 'source-over';
            const numCraters = 500;
            for(let i=0; i<numCraters; i++) {
                const x = Math.random()*w; const y = Math.random()*h;
                const r = Math.random() * 10 + 2;
                ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.arc(x+1, y+1, r, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.beginPath(); ctx.arc(x-1, y-1, r, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = 'rgba(120,120,120,0.8)'; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill();
            }
        }
        else if (type === 'venus') {
            ctx.fillStyle = colorHex; ctx.fillRect(0,0,w,h); 
            ctx.filter = 'blur(40px)'; ctx.globalCompositeOperation = 'overlay';
            for(let i=0; i<60; i++) {
                const x = Math.random()*w; const y = Math.random()*h;
                const rW = Math.random()*400 + 100; const rH = Math.random()*50 + 20; 
                ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#cc9966'; ctx.globalAlpha = 0.3;
                ctx.beginPath(); ctx.ellipse(x,y,rW,rH,0,0,Math.PI*2); ctx.fill();
            }
            ctx.globalAlpha = 1.0; ctx.filter = 'none';
        }
        else if (type === 'mars') {
            ctx.fillStyle = colorHex; ctx.fillRect(0,0,w,h); 
            ctx.filter = 'blur(4px)'; ctx.fillStyle = '#5e2a18'; ctx.globalAlpha = 0.6;
            for(let i=0; i<15; i++) {
                const x = Math.random()*w; const y = Math.random()*h * 0.7 + h*0.15; const r = Math.random()*150 + 50;
                ctx.beginPath(); 
                for(let j=0; j<10; j++) {
                    const ang = (j/10)*Math.PI*2; const rad = r + (Math.random()-0.5)*r*0.5;
                    const px = x + Math.cos(ang)*rad; const py = y + Math.sin(ang)*rad;
                    if(j===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
                }
                ctx.fill();
            }
            ctx.globalAlpha = 1.0; ctx.filter = 'none';
            const grdN = ctx.createLinearGradient(0, 0, 0, h*0.08);
            grdN.addColorStop(0, '#ffffff'); grdN.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = grdN; ctx.fillRect(0, 0, w, h*0.08);
            const grdS = ctx.createLinearGradient(0, h, 0, h*0.92);
            grdS.addColorStop(0, '#ffffff'); grdS.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = grdS; ctx.fillRect(0, h*0.92, w, h*0.08);
        }
        else if (type === 'jupiter') {
             const grd = ctx.createLinearGradient(0, 0, 0, h);
             const bands = 16;
             for(let i=0; i<=bands; i++) {
                 const t = i/bands; const isBelt = i % 2 === 0; const col = isBelt ? '#C88B3A' : '#E3DCCB'; 
                 grd.addColorStop(t, col);
             }
             ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
             ctx.globalCompositeOperation = 'overlay'; ctx.filter = 'blur(10px)'; 
             for(let i=0; i<50; i++) {
                 const x = Math.random()*w; const bandH = h/bands; const y = (Math.floor(Math.random()*bands) * bandH) + (Math.random()-0.5)*20;
                 const wR = Math.random()*200+50; const hR = Math.random()*20+5;
                 ctx.fillStyle = Math.random() > 0.5 ? '#ffffff' : '#8B4513'; ctx.globalAlpha = 0.2;
                 ctx.beginPath(); ctx.ellipse(x,y,wR,hR,0,0,Math.PI*2); ctx.fill();
             }
             ctx.filter = 'blur(5px)'; ctx.fillStyle = '#A65E44'; ctx.globalAlpha = 0.9;
             ctx.beginPath(); ctx.ellipse(w*0.7, h*0.65, 90, 50, 0, 0, Math.PI*2); ctx.fill();
             ctx.filter = 'none'; ctx.globalAlpha = 1.0;
        }
        else if (type === 'saturn') {
             const grd = ctx.createLinearGradient(0, 0, 0, h);
             const bands = 24; 
             for(let i=0; i<=bands; i++) {
                 const t = i/bands; const lOffset = Math.sin(t * Math.PI * 12) * 0.05; const hue = 40; const lit = 0.7 + lOffset;
                 grd.addColorStop(t, `hsl(${hue}, 60%, ${lit*100}%)`);
             }
             ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
        }
        else if (type === 'uranus') {
             const grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w);
             grd.addColorStop(0, '#D1F4F9'); grd.addColorStop(1, '#93B8BE'); 
             ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
        }
        else if (type === 'neptune') {
             const grd = ctx.createLinearGradient(0, 0, 0, h);
             grd.addColorStop(0, '#3655A0'); grd.addColorStop(0.5, '#5B80ED'); grd.addColorStop(1, '#3655A0');
             ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
             ctx.filter = 'blur(15px)'; ctx.fillStyle = '#ffffff'; ctx.globalAlpha = 0.3;
             for(let i=0; i<8; i++) {
                 const x = Math.random()*w; const y = Math.random()*h;
                 const wR = Math.random()*150+50; const hR = Math.random()*20+5;
                 ctx.beginPath(); ctx.ellipse(x,y,wR,hR,0,0,Math.PI*2); ctx.fill();
             }
             ctx.filter = 'blur(8px)'; ctx.fillStyle = '#1a2e5a'; ctx.globalAlpha = 0.6;
             ctx.beginPath(); ctx.ellipse(w*0.3, h*0.4, 60, 30, 0, 0, Math.PI*2); ctx.fill();
             ctx.filter = 'none'; ctx.globalAlpha = 1.0;
        }
        else if (type === 'ring') {
            ctx.fillStyle = '#00000000'; ctx.clearRect(0,0,w,h);
            const centerX = w/2; const centerY = h/2;
            const outerRadius = w * 0.5; const innerRadius = w * 0.2; 
            const grd = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius);
            const r = Math.floor(baseColor.r * 255); const g = Math.floor(baseColor.g * 255); const b = Math.floor(baseColor.b * 255);
            grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
            grd.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, 0.1)`); 
            grd.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.8)`); 
            grd.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, 0.1)`); 
            grd.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2); ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }
    
    // Sun Visuals
    const spriteMaterial = new THREE.SpriteMaterial({ 
        map: generateTexture('glow', '#FFD700'), color: 0xFFD700, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.5, depthWrite: false
    });
    const sunSprite = new THREE.Sprite(spriteMaterial);
    sunSprite.scale.set(150, 150, 1.0); 
    scene.add(sunSprite);
    
    const coronaMaterial = new THREE.SpriteMaterial({ 
        map: generateTexture('glow', '#ffaa00'), color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.2, depthWrite: false
    });
    const coronaSprite = new THREE.Sprite(coronaMaterial);
    coronaSprite.scale.set(300, 300, 1.0); 
    scene.add(coronaSprite);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(6000 * 3);
    for(let i=0; i<6000*3; i++) starPos[i] = (Math.random()-0.5) * 5000;
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({color: 0xffffff, size: 1.5, transparent: true, opacity: 0.8})));
    
    // Background Galaxy
    const bgGeo = new THREE.SphereGeometry(4000, 32, 32);
    const bgMat = new THREE.MeshBasicMaterial({ map: generateTexture('galaxy', '#000000'), side: THREE.BackSide, transparent: true, opacity: 0.3 });
    scene.add(new THREE.Mesh(bgGeo, bgMat));

    // Debris Belts
    const createDebrisBelt = (count, minRadius, maxRadius) => {
        const geometry = new THREE.DodecahedronGeometry(0.1, 0); 
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0.1, flatShading: true });
        const mesh = new THREE.InstancedMesh(geometry, material, count);
        const dummy = new THREE.Object3D();
        const col = new THREE.Color(0xb3b3b3);
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random() * (maxRadius**2 - minRadius**2) + minRadius**2);
            dummy.position.set(Math.cos(angle)*r, (Math.random()-0.5)*15*(1-(r-minRadius)/(maxRadius-minRadius)*0.5), Math.sin(angle)*r);
            dummy.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
            const s = Math.random() * 1.2 + 0.5; dummy.scale.set(s,s,s);
            dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix); mesh.setColorAt(i, col);
        }
        return mesh;
    };
    const kuiperBelt = createDebrisBelt(4000, 500, 850); scene.add(kuiperBelt);
    const asteroidBelt = createDebrisBelt(3000, 170, 210); scene.add(asteroidBelt);

    // Planets Setup
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    SOLAR_DATA.forEach((data, index) => {
        const group = new THREE.Group();
        const subMoons = [];

        let tex;
        if (data.textureUrl) {
            tex = loader.load(data.textureUrl);
            tex.colorSpace = THREE.SRGBColorSpace;
        } else {
            tex = generateTexture(data.textureType, data.color);
        }
        
        let mat;
        if (data.type === 'Star') {
            mat = new THREE.MeshBasicMaterial({ map: tex, color: 0xffffff }); 
        } else {
            const matConfig = { map: tex, roughness: 0.9, metalness: 0.1, emissive: 0x111111, emissiveIntensity: 0.1 };
            if (data.id === 'earth') {
                 matConfig.roughness = 0.6; matConfig.metalness = 0.1; matConfig.envMapIntensity = 1.0;
            } else if (data.type === 'Gas Giant' || data.type === 'Ice Giant') {
                matConfig.roughness = 0.5; matConfig.emissive = 0x222222; matConfig.emissiveIntensity = 0.15;
            } else if (data.id === 'venus') {
                 matConfig.emissive = 0x221100; matConfig.emissiveIntensity = 0.2;
            }
            mat = new THREE.MeshStandardMaterial(matConfig);
        }

        const mesh = new THREE.Mesh(new THREE.SphereGeometry(data.radius, 128, 128), mat);
        mesh.userData = { id: index, type: 'planet' };
        if (data.tilt) mesh.rotation.z = data.tilt;
        if (data.scale) mesh.scale.set(data.scale[0], data.scale[1], data.scale[2]);

        group.add(mesh);
        interactablesRef.current.push(mesh);

        // Core (Structure Mode)
        if (data.type !== 'Star') {
            const coreGeo = new THREE.SphereGeometry(data.radius * 0.4, 32, 32);
            let coreColor = (data.type === 'Gas Giant' || data.type === 'Ice Giant') ? 0x888888 : 0xff3300;
            const coreMat = new THREE.MeshStandardMaterial({ color: coreColor, emissive: coreColor, emissiveIntensity: 0.8 });
            const coreMesh = new THREE.Mesh(coreGeo, coreMat);
            coreMesh.visible = false;
            coreMesh.userData = { isCore: true };
            if (data.scale) coreMesh.scale.set(data.scale[0], data.scale[1], data.scale[2]);
            group.add(coreMesh);
        }

        // Moons
        if (data.moons) {
            data.moons.forEach((m, mIdx) => {
                const mGeo = new THREE.SphereGeometry(m.radius, 32, 32);
                let mTex = m.textureUrl ? loader.load(m.textureUrl) : generateTexture('rocky', m.color);
                if (m.textureUrl) mTex.colorSpace = THREE.SRGBColorSpace;
                const mMat = new THREE.MeshStandardMaterial({ map: mTex, roughness: 0.9 });
                const mMesh = new THREE.Mesh(mGeo, mMat);
                mMesh.userData = { id: index, moonIndex: mIdx, type: 'moon' };
                interactablesRef.current.push(mMesh);
                
                const mOrbit = new THREE.Group();
                mOrbit.add(mMesh);
                mMesh.position.x = m.distance;
                group.add(mOrbit);
                subMoons.push({ orbit: mOrbit, mesh: mMesh, speed: m.speed });
            });
        }

        // Rings
        if (data.rings) {
            const rGeo = new THREE.RingGeometry(data.rings.inner, data.rings.outer, 128);
            const rTex = generateTexture('ring', data.rings.color); 
            const rMat = new THREE.MeshStandardMaterial({ map: rTex, color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: data.rings.opacity || 0.8 });
            const rMesh = new THREE.Mesh(rGeo, rMat);
            if (data.id === 'uranus') { rMesh.rotation.y = Math.PI / 2; rMesh.rotation.x = 0; } 
            else { rMesh.rotation.x = Math.PI / 1.8; }
            group.add(rMesh);
        }

        group.position.x = data.distance;
        scene.add(group);

        // Orbit Line
        if (data.distance > 0) {
             const pts = [];
             for(let i=0; i<=256; i++) { 
                 const a = (i/256)*Math.PI*2;
                 pts.push(new THREE.Vector3(Math.cos(a)*data.distance, 0, Math.sin(a)*data.distance));
             }
             const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
             const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.1, transparent: true }));
             scene.add(line);
        }

        objectsRef.current.push({ type: 'planet', group, mesh, data: data, moons: subMoons, angle: Math.random()*Math.PI*2 });
    });

    setLoading(false);

    // --- ANIMATION LOOP ---
    let animationId;
    const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        if (controlsRef.current) controlsRef.current.update();

        const isPausedVal = renderer.domElement.dataset.paused === 'true';
        const isStructure = renderer.domElement.dataset.structure === 'true';

        if (!isPausedVal) {
            kuiperBelt.rotation.y += 0.00015; 
            asteroidBelt.rotation.y += 0.0005; 
        }

        objectsRef.current.forEach(obj => {
            if (!isPausedVal) {
                if (obj.type === 'planet') {
                    if (obj.data.tilt) obj.mesh.rotation.x += 0.003; else obj.mesh.rotation.y += 0.001;
                    if (obj.data.distance > 0) {
                        obj.angle += obj.data.speed * 0.3;
                        obj.group.position.x = Math.cos(obj.angle) * obj.data.distance;
                        obj.group.position.z = Math.sin(obj.angle) * obj.data.distance;
                    }
                    if (obj.moons) {
                        obj.moons.forEach(m => m.orbit.rotation.y += m.speed);
                    }
                }
            }
            if (obj.type === 'planet' && obj.data.type !== 'Star') {
                if (obj.mesh.material) {
                    obj.mesh.material.opacity = isStructure ? 0.15 : 1;
                    obj.mesh.material.transparent = isStructure;
                    obj.mesh.material.wireframe = isStructure;
                }
                const core = obj.group.children.find(c => c.userData && c.userData.isCore);
                if(core) core.visible = isStructure;
            }
        });

        if (activeTargetRef.current && !isPausedVal) {
             const target = activeTargetRef.current;
             const newPos = new THREE.Vector3();
             target.mesh.getWorldPosition(newPos);
             if (!newPos.equals(target.lastPos)) {
                 const delta = new THREE.Vector3().subVectors(newPos, target.lastPos);
                 camera.position.add(delta);
                 if(controlsRef.current) controlsRef.current.target.add(delta);
                 target.lastPos.copy(newPos);
             }
        }

        renderer.render(scene, camera);
    };
    animate();
    
    // Handle Window Resize
    const handleResize = () => {
        if (!cameraRef.current || !rendererRef.current) return;
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleCanvasClick = (event) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.current.setFromCamera(mouse.current, camera);
        const intersects = raycaster.current.intersectObjects(interactablesRef.current);
        if (intersects.length > 0) {
            const object = intersects[0].object;
            const userData = object.userData;
            if (userData.id !== undefined) {
                 focusPlanet(userData.id, userData.moonIndex);
            }
        }
    };
    renderer.domElement.addEventListener('dblclick', handleCanvasClick); 

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        if(mountRef.current && renderer.domElement) mountRef.current.removeChild(renderer.domElement);
    };
  }, []); // End of Three.js Effect

  // Sync React state to DOM for animation loop
  useEffect(() => {
     if(rendererRef.current) {
         rendererRef.current.domElement.dataset.paused = isPaused;
         rendererRef.current.domElement.dataset.structure = structureMode;
     }
  }, [isPaused, structureMode]);

  // Tour Logic
  useEffect(() => {
      if(isTouring) {
          if (tourIndexRef.current === -1) visitNextPlanet(0);
      } else {
          if(tourTimerRef.current) clearTimeout(tourTimerRef.current);
          tourIndexRef.current = -1;
      }
  }, [isTouring]);

  return (
    <div className="w-full h-screen bg-black relative text-slate-100 font-sans overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0 bg-black" style={{ pointerEvents: 'auto' }} />
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none z-10">
          <div className="flex items-center gap-4 cursor-pointer pointer-events-auto" onClick={resetView}>
               <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"><span className="text-2xl">🪐</span></div>
               <div><h1 className="font-bold text-2xl leading-none">COSMOS</h1><p className="text-[10px] uppercase text-indigo-400 font-bold">Explorer</p></div>
          </div>
          <div className="flex gap-2 pointer-events-auto bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
              <button onClick={() => setIsPaused(!isPaused)} className="p-2 hover:bg-white/10 rounded-lg">{isPaused ? <PlayCircle size={20}/> : <Pause size={20}/>}</button>
              <button onClick={() => setStructureMode(!structureMode)} className="p-2 hover:bg-white/10 rounded-lg"><Layers size={20}/></button>
              <button onClick={toggleFullscreen} className="p-2 hover:bg-white/10 rounded-lg">{isFullscreen ? <Minimize size={20}/> : <Maximize size={20}/>}</button>
              <button onClick={() => setIsMuted(!isMuted)} className={`p-2 hover:bg-white/10 rounded-lg ${isMuted ? 'text-red-400' : ''}`}>{isMuted ? <VolumeX size={20}/> : <Volume2 size={20}/>}</button>
          </div>
      </div>

      {/* Info Panel */}
      <div className={`absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-black/80 backdrop-blur-xl border-l border-white/10 z-20 p-8 overflow-y-auto transform transition-transform duration-500 ease-out pointer-events-auto ${selectedPlanet ? 'translate-x-0' : 'translate-x-full'}`}>
          {selectedPlanet && (
            <>
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">{selectedPlanet.name}</h2>
                        <p className="text-sm text-indigo-400 uppercase tracking-[0.2em] font-bold mt-2">{selectedPlanet.type}</p>
                    </div>
                    <button onClick={() => setSelectedPlanet(null)} className="p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors"><X size={24}/></button>
                </div>
                
                <div className="space-y-8">
                    <div className="p-6 bg-zinc-900/90 rounded-xl border border-white/10 text-md leading-relaxed text-zinc-300 shadow-xl">
                        {selectedPlanet.narration}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {Object.entries(selectedPlanet.stats).map(([k,v]) => (
                            <div key={k} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                                <div className="text-[10px] text-indigo-300 uppercase font-bold tracking-wider mb-1">{k}</div>
                                <div className="font-mono text-lg text-white">{v}</div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2"><MessageSquare size={14}/> Facts</h3>
                        <ul className="space-y-3">
                            {selectedPlanet.facts.map((f, i) => (
                                <li key={i} className="flex gap-3 text-sm text-zinc-400">
                                    <span className="text-indigo-500 mt-1"><ArrowRight size={14}/></span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
          )}
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end items-center pointer-events-none pb-4">
          <button 
              onClick={() => setIsNavOpen(!isNavOpen)} 
              className="pointer-events-auto mb-2 bg-white/10 backdrop-blur-md p-1 rounded-full text-indigo-200 hover:text-white hover:bg-white/20 transition-all"
          >
              {isNavOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>

          <div className={`pointer-events-auto max-w-full overflow-x-auto no-scrollbar fade-mask transition-all duration-300 ease-in-out ${isNavOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
             <div className="flex gap-2 items-center px-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 py-2 mx-4">
                 <button onClick={isTouring ? resetView : startTour} className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg transition-colors whitespace-nowrap font-semibold border text-xs ${isTouring ? 'bg-red-500/80 border-red-400/30' : 'bg-indigo-600/90 border-indigo-400/30'}`}>
                    {isTouring ? <X size={12}/> : <ScanEye size={12}/>} {isTouring ? "Stop" : "Tour"}
                 </button>
                 
                 <div className="h-6 w-px bg-white/10 mx-1"></div>

                 {SOLAR_DATA.map((d, i) => (
                     <button 
                      key={i} 
                      onClick={() => focusPlanet(i)} 
                      className={`flex flex-col items-center gap-1 min-w-[40px] group relative p-1 rounded-lg transition-all ${selectedPlanet?.id === d.id ? 'bg-white/10 ring-1 ring-indigo-500' : 'hover:bg-white/5'}`}
                     >
                         <div 
                            className="w-5 h-5 rounded-full shadow-lg transition-transform group-hover:scale-110 relative bg-cover bg-center" 
                            style={{
                                backgroundImage: `url(${d.textureUrl})`,
                                backgroundColor: d.color
                            }}
                         >
                              {selectedPlanet?.id === d.id && <div className="absolute inset-0 rounded-full ring-1 ring-white animate-pulse"></div>}
                         </div>
                         <span className={`text-[7px] font-bold uppercase tracking-wider transition-colors ${selectedPlanet?.id === d.id ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>{d.name}</span>
                     </button>
                 ))}
             </div>
          </div>
      </div>
      
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none">
            <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Initializing Cosmos...</span>
        </div>
      )}
    </div>
  );
}
