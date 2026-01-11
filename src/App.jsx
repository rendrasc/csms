import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { 
  MessageSquare, Loader2, X, PlayCircle, Pause, Layers, 
  ScanEye, ArrowRight, ChevronDown, ChevronUp, Volume2, VolumeX 
} from 'lucide-react';

/**
 * --- DATA & CONSTANTS ---
 */
const REPO_URL = "https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/textures";
const AUDIO_IDLE_URL = "https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_X01.mp3";
const AUDIO_TOUR_URL = "https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_journey_01.mp3";

const SOLAR_DATA = [
    { 
        id: 'sun', name: "Sun", type: "Star", radius: 35, distance: 0, speed: 0, color: '#FFD700', textureType: 'star', 
        textureUrl: `${REPO_URL}/sun.jpg`,
        stats: { temp: '5,500°C', orbit: 'N/A', gravity: '274 m/s²', day: '25 Days' }, 
        comp: ['Hydrogen', 'Helium'], 
        desc: "The star at the center of our Solar System.", 
        narration: "The Sun is the colossal powerhouse...",
        facts: [ "Accounts for 99.86% of solar system mass.", "Light takes 8 mins to reach Earth.", "Core is ~15 million degrees Celsius." ]
    },
    { 
        id: 'mercury', name: "Mercury", type: "Planet", radius: 2.8, distance: 55, speed: 0.015, color: '#999999', textureType: 'mercury',
        textureUrl: `${REPO_URL}/mercury.jpg`,
        stats: { temp: '167°C', orbit: '88 Days', gravity: '3.7 m/s²', day: '59 Days' }, 
        comp: ['Iron', 'Sodium'], 
        desc: "The smallest planet in the Solar System.", 
        narration: "Mercury is the smallest planet...",
        facts: [ "Shrinks as it cools.", "Temp swings from 430°C to -180°C.", "Most cratered planet." ] 
    },
    { 
        id: 'venus', name: "Venus", type: "Planet", radius: 6.5, distance: 80, speed: 0.012, color: '#E3BB76', textureType: 'venus', 
        textureUrl: `${REPO_URL}/venus.jpg`,
        stats: { temp: '464°C', orbit: '225 Days', gravity: '8.87 m/s²', day: '243 Days' }, 
        comp: ['CO2', 'Nitrogen'], 
        desc: "Hottest planet due to greenhouse effect.", 
        narration: "Venus is often called Earth's twin...",
        facts: [ "Hottest planet in the solar system.", "Spins backwards.", "Named after goddess of love." ] 
    },
    { 
        id: 'earth', name: "Earth", type: "Planet", radius: 7, distance: 110, speed: 0.01, color: '#1C4E80', textureType: 'earth',
        textureUrl: `${REPO_URL}/earth.jpg`,
        stats: { temp: '15°C', orbit: '365 Days', gravity: '9.8 m/s²', day: '24 Hours' }, 
        comp: ['Nitrogen', 'Oxygen'], 
        desc: "The only known world to harbor life.", 
        narration: "Earth is our home...",
        facts: [ "Only place known to host life.", "Densest planet.", "70% surface is water." ], 
        moons: [{ name: "Moon", radius: 1.9, distance: 14, speed: 0.03, color: '#E0E0E0', type: 'rocky', textureUrl: `${REPO_URL}/moon.jpg` }] 
    },
    { 
        id: 'mars', name: "Mars", type: "Planet", radius: 3.8, distance: 150, speed: 0.008, color: '#D14A28', textureType: 'mars', 
        textureUrl: `${REPO_URL}/mars.jpg`,
        stats: { temp: '-65°C', orbit: '687 Days', gravity: '3.71 m/s²', day: '24.6 Hours' }, 
        comp: ['CO2', 'Argon'], 
        desc: "The Red Planet.", 
        narration: "Mars, the Red Planet...",
        facts: [ "Home to Olympus Mons.", "Has largest dust storms.", "Red color is rust." ], 
        moons: [{ name: "Phobos", radius: 0.6, distance: 8, speed: 0.05, color: '#887766' }, { name: "Deimos", radius: 0.4, distance: 12, speed: 0.03, color: '#776655' }] 
    },
    { 
        id: 'jupiter', name: "Jupiter", type: "Gas Giant", radius: 22, distance: 220, speed: 0.004, color: '#C88B3A', textureType: 'jupiter', 
        textureUrl: `${REPO_URL}/jupiter.jpg`,
        stats: { temp: '-110°C', orbit: '12 Years', gravity: '24.79 m/s²', day: '10 Hours' }, 
        comp: ['Hydrogen', 'Helium'], 
        desc: "The largest planet.", 
        narration: "Jupiter is a gas giant...",
        facts: [ "Great Red Spot is a storm.", "Shortest day of all planets.", "Mass is 2.5x all others combined." ], 
        moons: [{ name: "Io", radius: 1.8, distance: 30, speed: 0.04, color: '#F8F189' }, { name: "Europa", radius: 1.6, distance: 35, speed: 0.03, color: '#C6D2D8' }, { name: "Ganymede", radius: 2.6, distance: 42, speed: 0.02, color: '#968E84' }, { name: "Callisto", radius: 2.4, distance: 50, speed: 0.015, color: '#6E665A' }],
        rings: { inner: 22.8, outer: 23.5, color: 0xa08060, opacity: 0.1 } 
    },
    { 
        id: 'saturn', name: "Saturn", type: "Gas Giant", radius: 18, distance: 300, speed: 0.003, color: '#E4D5B6', textureType: 'saturn',
        textureUrl: `${REPO_URL}/saturn.jpg`,
        rings: { inner: 24, outer: 42, color: 0xcfc3a3, opacity: 0.9 }, 
        stats: { temp: '-140°C', orbit: '29 Years', gravity: '10.44 m/s²', day: '10.7 Hours' }, 
        comp: ['Hydrogen', 'Helium'], 
        desc: "Famous for its rings.", 
        narration: "Saturn is the jewel...",
        facts: [ "Rings are made of ice.", "Least dense planet (floats).", "Most moons (146)." ], 
        moons: [{ name: "Titan", radius: 2.5, distance: 40, speed: 0.02, color: '#E8D586' }, { name: "Rhea", radius: 0.8, distance: 25, speed: 0.03, color: '#B0B0B0' }] 
    },
    { 
        id: 'uranus', name: "Uranus", type: "Ice Giant", radius: 12, distance: 380, speed: 0.002, color: '#93B8BE', textureType: 'uranus', tilt: Math.PI / 2,
        textureUrl: `${REPO_URL}/uranus.jpg`,
        rings: { inner: 14, outer: 18, color: 0x88aabb, opacity: 0.2 },
        stats: { temp: '-195°C', orbit: '84 Years', gravity: '8.69 m/s²', day: '17 Hours' }, 
        comp: ['Hydrogen', 'Ices'], 
        desc: "Rotates on its side.", 
        narration: "Uranus is an ice giant...",
        facts: [ "Rotates on its side.", "Coldest planetary atmosphere.", "Retrograde rotation." ], 
        moons: [{ name: "Titania", radius: 0.9, distance: 20, speed: 0.03, color: '#D0C0B0' }] 
    },
    { 
        id: 'neptune', name: "Neptune", type: "Ice Giant", radius: 11.5, distance: 450, speed: 0.001, color: '#5B80ED', textureType: 'neptune', 
        textureUrl: `${REPO_URL}/neptune.jpg`,
        stats: { temp: '-200°C', orbit: '165 Years', gravity: '11.15 m/s²', day: '16 Hours' }, 
        comp: ['Hydrogen', 'Ices'], 
        desc: "The windiest planet.", 
        narration: "Neptune is a dark...",
        facts: [ "Supersonic winds (2000 km/h).", "Predicted by math first.", "Blue color from methane." ], 
        moons: [{ name: "Triton", radius: 1.4, distance: 18, speed: 0.03, color: '#E0D0C0' }] 
    },
    { 
        id: 'pluto', name: "Pluto", type: "Dwarf Planet", radius: 1.8, distance: 585, speed: 0.0008, color: '#D1C2A5', textureType: 'rocky',
        textureUrl: `${REPO_URL}/pluto.jpg`,
        stats: { temp: '-229°C', orbit: '248 Years', gravity: '0.62 m/s²', day: '153 Hours' }, 
        comp: ['Nitrogen', 'Methane'], 
        desc: "The famous dwarf planet.", 
        narration: "Pluto, once considered...",
        facts: [ "Reclassified as dwarf planet.", "Has a heart-shaped glacier.", "Atmosphere freezes." ], 
        moons: [{ name: "Charon", radius: 0.9, distance: 5, speed: 0.01, color: '#A0A0A0' }]
    },
    { 
        id: 'haumea', name: "Haumea", type: "Dwarf Planet", radius: 2.0, distance: 645, speed: 0.0006, color: '#E0E0E0', textureType: 'rocky', 
        textureUrl: `${REPO_URL}/haumea.jpg`,
        scale: [1.9, 0.9, 0.5], 
        stats: { temp: '-241°C', orbit: '284 Years', gravity: '0.4 m/s²', day: '4 Hours' }, 
        comp: ['Rock', 'Ice'], 
        desc: "The egg-shaped spinner.", 
        narration: "Haumea is a unique...",
        facts: [ "Spins once every 4 hours.", "Shaped like an egg.", "Covered in crystalline ice." ]
    }
];

export default function App() {
    const mountRef = useRef(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [isTouring, setIsTouring] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    
    // --- FIX: Added structureMode state here ---
    const [structureMode, setStructureMode] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const [isIdle, setIsIdle] = useState(false);
    const idleTimerRef = useRef(null);
    const audioRef = useRef(null);
    
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const objectsRef = useRef([]);
    const interactablesRef = useRef([]); // Added missing ref initialization
    const activeTargetRef = useRef(null);

    // --- AUDIO & IDLE ---
    useEffect(() => {
        const resetIdle = () => {
            setIsIdle(false);
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
            idleTimerRef.current = setTimeout(() => setIsIdle(true), 10000);
        };
        window.addEventListener('mousemove', resetIdle);
        window.addEventListener('mousedown', resetIdle);
        window.addEventListener('keydown', resetIdle);
        resetIdle();
        return () => {
            window.removeEventListener('mousemove', resetIdle);
            window.removeEventListener('mousedown', resetIdle);
            window.removeEventListener('keydown', resetIdle);
            if(idleTimerRef.current) clearTimeout(idleTimerRef.current);
        };
    }, []);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio();
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
        }
        const audio = audioRef.current;
        if (isMuted) { audio.pause(); return; }

        const playSafe = (src) => {
            if (audio.src !== src) {
                audio.src = src;
                audio.play().catch(() => {});
            } else if (audio.paused) {
                audio.play().catch(() => {});
            }
        };

        if (isTouring) playSafe(AUDIO_TOUR_URL);
        else if (isIdle) playSafe(AUDIO_IDLE_URL);
        else audio.pause();
    }, [isIdle, isTouring, isMuted]);

    // --- WIREFRAME EFFECT (FIXED) ---
    useEffect(() => {
        objectsRef.current.forEach(obj => {
            if (obj.mesh && obj.mesh.material) {
                obj.mesh.material.wireframe = structureMode;
            }
        });
    }, [structureMode]);

    // --- 3D SCENE ---
    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        scene.fog = new THREE.FogExp2(0x000000, 0.0008);
        sceneRef.current = scene;
        
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.set(0, 150, 600);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, logarithmicDepthBuffer: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.8;
        
        if (mountRef.current) mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 20;
        controls.maxDistance = 3000;
        controlsRef.current = controls;

        // Lighting
        scene.add(new THREE.HemisphereLight(0xffffe0, 0x000000, 0.15));
        scene.add(new THREE.AmbientLight(0x404040, 0.8));
        const sunLight = new THREE.PointLight(0xffffff, 10.0, 0, 0);
        sunLight.position.set(0, 0, 0);
        scene.add(sunLight);

        // Texture Gen
        const generateTexture = (type, colorHex) => {
            const isPlanetMap = ['earth', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'rocky', 'atmosphere', 'galaxy'].includes(type);
            const sizeW = 2048; const sizeH = isPlanetMap ? 1024 : 2048;
            const cvs = document.createElement('canvas'); cvs.width = sizeW; cvs.height = sizeH;
            const ctx = cvs.getContext('2d');
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
                ctx.fillStyle = '#0a1a33';
                ctx.fillRect(0,0,w,h);
                return new THREE.CanvasTexture(cvs);
            }
            if (type === 'star') {
                const grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
                grd.addColorStop(0, '#FFFFFF'); grd.addColorStop(0.3, '#FFFFAA'); grd.addColorStop(1, colorHex); 
                ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
                drawNoiseLayer(0.5, 0.2, 'overlay', '#ffaa00');
            } else if (type === 'glow') {
                const grd = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, w/2);
                grd.addColorStop(0, '#FFFFFF'); grd.addColorStop(0.2, '#FFFFAA'); grd.addColorStop(0.5, colorHex); grd.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
            } else if (type === 'galaxy') {
                ctx.fillStyle = '#050510'; ctx.fillRect(0,0,w,h);
                for(let i=0; i<3; i++) {
                    ctx.filter = `blur(${30 + i*10}px)`; ctx.globalCompositeOperation = 'screen';
                    drawNoiseLayer(0.5, 0.1, 'screen', `hsl(${Math.random()*60+200}, 60%, 40%)`);
                }
                ctx.filter = 'none';
            } else if (type === 'ring') {
                 ctx.clearRect(0,0,w,h);
                 const grd = ctx.createRadialGradient(w/2, h/2, w*0.2, w/2, h/2, w*0.5);
                 const c = new THREE.Color(colorHex);
                 const r=Math.floor(c.r*255), g=Math.floor(c.g*255), b=Math.floor(c.b*255);
                 grd.addColorStop(0, `rgba(${r},${g},${b},0)`); grd.addColorStop(0.5, `rgba(${r},${g},${b},0.8)`); grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
                 ctx.fillStyle = grd; ctx.fillRect(0,0,w,h);
            } else {
                ctx.fillStyle = colorHex; ctx.fillRect(0,0,w,h);
                ctx.globalCompositeOperation = 'multiply';
                for(let i=0; i<3000; i++) {
                    ctx.fillStyle = `rgba(0,0,0,0.1)`; ctx.fillRect(Math.random()*w, Math.random()*h, 2, 2);
                }
                ctx.globalCompositeOperation = 'source-over';
            }
            return new THREE.CanvasTexture(cvs);
        };

        // Sun Glow
        const sm = new THREE.SpriteMaterial({ map: generateTexture('glow', '#FFD700'), color: 0xFFD700, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.5 });
        const sunSprite = new THREE.Sprite(sm); sunSprite.scale.set(150, 150, 1); scene.add(sunSprite);
        
        const cm = new THREE.SpriteMaterial({ map: generateTexture('glow', '#ffaa00'), color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.2 });
        const coronaSprite = new THREE.Sprite(cm); coronaSprite.scale.set(300, 300, 1); scene.add(coronaSprite);

        // Stars
        const sg = new THREE.BufferGeometry();
        const sp = new Float32Array(5000 * 3);
        for(let i=0; i<5000*3; i++) sp[i] = (Math.random()-0.5) * 5000;
        sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
        scene.add(new THREE.Points(sg, new THREE.PointsMaterial({color: 0xffffff, size: 1.5, transparent: true, opacity: 0.8})));

        // Belts
        const makeBelt = (cnt, minR, maxR) => {
            const geo = new THREE.DodecahedronGeometry(0.1, 0);
            const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true });
            const mesh = new THREE.InstancedMesh(geo, mat, cnt);
            const dum = new THREE.Object3D();
            const col = new THREE.Color(0xb3b3b3);
            for(let i=0; i<cnt; i++) {
                const ang = Math.random()*Math.PI*2; const r = Math.sqrt(Math.random()*(maxR**2 - minR**2) + minR**2);
                dum.position.set(Math.cos(ang)*r, (Math.random()-0.5)*10, Math.sin(ang)*r);
                dum.rotation.set(Math.random()*3, Math.random()*3, Math.random()*3);
                const s = Math.random()*1.2+0.5; dum.scale.set(s,s,s);
                dum.updateMatrix(); mesh.setMatrixAt(i, dum.matrix); mesh.setColorAt(i, col);
            }
            return mesh;
        };
        const kb = makeBelt(4000, 500, 850); scene.add(kb);
        const ab = makeBelt(3000, 170, 210); scene.add(ab);

        // Objects Init
        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');

        SOLAR_DATA.forEach((d, idx) => {
            const grp = new THREE.Group();
            let tex;
            if(d.textureUrl) {
                tex = loader.load(d.textureUrl);
                tex.colorSpace = THREE.SRGBColorSpace;
            } else {
                tex = generateTexture(d.textureType, d.color);
            }

            let mat;
            if (d.type === 'Star') mat = new THREE.MeshBasicMaterial({ map: tex, color: 0xffffff });
            else mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8, metalness: 0.1 });

            const mesh = new THREE.Mesh(new THREE.SphereGeometry(d.radius, 64, 64), mat);
            mesh.userData = { id: idx, type: 'planet' };
            if(d.tilt) mesh.rotation.z = d.tilt;
            if(d.scale) mesh.scale.set(d.scale[0], d.scale[1], d.scale[2]);
            
            grp.add(mesh);
            interactablesRef.current.push(mesh);

            // Moons
            const moons = [];
            if(d.moons) {
                d.moons.forEach(m => {
                    const mG = new THREE.SphereGeometry(m.radius, 32, 32);
                    const mM = new THREE.MeshStandardMaterial({ map: m.textureUrl ? loader.load(m.textureUrl) : generateTexture('rocky', m.color) });
                    const mMesh = new THREE.Mesh(mG, mM);
                    const mOrb = new THREE.Group();
                    mOrb.add(mMesh);
                    mMesh.position.x = m.distance;
                    grp.add(mOrb);
                    moons.push({ orb: mOrb, speed: m.speed });
                });
            }

            // Rings
            if(d.rings) {
                const rGeo = new THREE.RingGeometry(d.rings.inner, d.rings.outer, 128);
                const rTex = generateTexture('ring', d.rings.color);
                const rMat = new THREE.MeshStandardMaterial({ map: rTex, side: THREE.DoubleSide, transparent: true, opacity: d.rings.opacity });
                const rMesh = new THREE.Mesh(rGeo, rMat);
                rMesh.rotation.x = (d.id === 'uranus') ? 0 : Math.PI/1.8;
                if(d.id === 'uranus') rMesh.rotation.y = Math.PI/2;
                grp.add(rMesh);
            }

            grp.position.x = d.distance;
            scene.add(grp);

            if(d.distance > 0) {
                 const pts = [];
                 for(let j=0; j<=128; j++) {
                     const ang = (j/128)*Math.PI*2;
                     pts.push(new THREE.Vector3(Math.cos(ang)*d.distance, 0, Math.sin(ang)*d.distance));
                 }
                 const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.1, transparent: true }));
                 scene.add(ln);
            }

            objectsRef.current.push({ type: 'planet', group: grp, mesh, data: d, angle: Math.random()*Math.PI*2, moons });
        });

        setLoading(false);

        let frameId;
        const loop = () => {
            frameId = requestAnimationFrame(loop);
            const isPaused = renderer.domElement.dataset.paused === 'true';

            if (!isPaused) {
                kb.rotation.y += 0.0001; ab.rotation.y += 0.0003;
                objectsRef.current.forEach(o => {
                    if(o.type === 'planet') {
                        if(o.data.id !== 'sun') o.angle += o.data.speed * 0.2;
                        o.group.position.x = Math.cos(o.angle) * o.data.distance;
                        o.group.position.z = Math.sin(o.angle) * o.data.distance;
                        o.mesh.rotation.y += 0.001;
                        if(o.moons) o.moons.forEach(m => m.orb.rotation.y += m.speed);
                    }
                });
            }
            
            if (controlsRef.current) controlsRef.current.update();
            
            if (activeTargetRef.current && !isPaused) {
                const t = activeTargetRef.current;
                const newPos = new THREE.Vector3();
                t.mesh.getWorldPosition(newPos);
                if (!newPos.equals(t.lastPos)) {
                    const diff = new THREE.Vector3().subVectors(newPos, t.lastPos);
                    camera.position.add(diff);
                    controlsRef.current.target.add(diff);
                    t.lastPos.copy(newPos);
                }
            }

            renderer.render(scene, camera);
        };
        loop();

        const onResize = () => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', onResize);
            if(mountRef.current) mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    // State listeners
    useEffect(() => { if(rendererRef.current) rendererRef.current.domElement.dataset.paused = isPaused; }, [isPaused]);

    useEffect(() => {
        let tm;
        if(isTouring) {
            const step = (idx) => {
                if(idx >= SOLAR_DATA.length) { setIsTouring(false); return; }
                focusPlanet(idx);
                tm = setTimeout(() => step(idx+1), 10000);
            };
            step(0);
        }
        return () => clearTimeout(tm);
    }, [isTouring]);

    const focusPlanet = (idx) => {
        if(!objectsRef.current[idx]) return;
        setSelectedPlanet(SOLAR_DATA[idx]);
        const o = objectsRef.current[idx];
        const off = o.data.radius * 4 + 20;
        const v = new THREE.Vector3(); o.mesh.getWorldPosition(v);
        
        // Simple cam animation
        cameraRef.current.position.set(v.x+off, v.y+off*0.5, v.z+off);
        controlsRef.current.target.copy(v);
        activeTargetRef.current = { mesh: o.mesh, lastPos: v.clone() };
    };

    const reset = () => {
        setSelectedPlanet(null); setIsTouring(false); activeTargetRef.current = null;
        cameraRef.current.position.set(0,150,600); controlsRef.current.target.set(0,0,0);
    };

    return (
        <div className="w-full h-screen relative font-sans">
            <div ref={mountRef} className="absolute inset-0 z-0" />
            
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none z-10">
                <div className="flex items-center gap-4 pointer-events-auto cursor-pointer" onClick={reset}>
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg"><span className="text-xl">🪐</span></div>
                    <div><h1 className="font-bold text-xl leading-none">COSMOS</h1><p className="text-[10px] text-indigo-400">Interactive</p></div>
                </div>
                <div className="flex gap-2 pointer-events-auto bg-white/10 backdrop-blur-md p-2 rounded-xl">
                   <button onClick={() => setIsPaused(!isPaused)} className="p-2 hover:bg-white/10 rounded-lg">{isPaused ? <PlayCircle size={20}/> : <Pause size={20}/>}</button>
                   <button onClick={() => setStructureMode(!structureMode)} className={`p-2.5 rounded-lg transition-colors flex gap-2 items-center ${structureMode ? 'bg-indigo-600 text-white' : 'hover:bg-white/10 text-indigo-200'}`} title="Toggle Wireframe">
                        <Layers size={20}/>
                   </button>
                   <button onClick={() => setIsMuted(!isMuted)} className={`p-2.5 rounded-lg transition-colors ${isMuted ? 'text-red-400' : 'text-indigo-200 hover:bg-white/10'}`} title="Mute/Unmute">
                    {isMuted ? <VolumeX size={20}/> : <Volume2 size={20}/>}
                  </button>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end items-center pointer-events-none pb-4">
                <button onClick={() => setIsNavOpen(!isNavOpen)} className="pointer-events-auto mb-2 bg-white/10 backdrop-blur-md p-1 rounded-full text-indigo-200 hover:text-white">
                     {isNavOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </button>
                <div className={`pointer-events-auto transition-all duration-300 ${isNavOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                    <div className="flex gap-2 items-center px-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 py-2">
                        <button onClick={isTouring ? reset : () => setIsTouring(true)} className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold ${isTouring ? 'bg-red-500/80' : 'bg-indigo-600/90'}`}>
                            {isTouring ? <X size={12}/> : <ScanEye size={12}/>} {isTouring ? "Stop" : "Tour"}
                        </button>
                        <div className="h-6 w-px bg-white/10 mx-1"></div>
                        {SOLAR_DATA.map((d, i) => (
                            <button key={i} onClick={() => focusPlanet(i)} className="flex flex-col items-center gap-1 min-w-[40px] group relative p-1 rounded-lg hover:bg-white/5">
                                <div className="w-5 h-5 rounded-full shadow-lg relative bg-cover bg-center" style={{ backgroundImage: `url(${d.textureUrl})`, backgroundColor: d.color }}>
                                    {selectedPlanet?.id === d.id && <div className="absolute inset-0 rounded-full ring-1 ring-white animate-pulse"></div>}
                                </div>
                                <span className="text-[7px] font-bold uppercase text-zinc-500 group-hover:text-white">{d.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Info Panel */}
            <div className={`absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-black/80 backdrop-blur-xl border-l border-white/10 z-30 p-8 overflow-y-auto transition-transform duration-300 ${selectedPlanet ? 'translate-x-0' : 'translate-x-full'}`}>
                {selectedPlanet && (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <div><h2 className="text-4xl font-bold">{selectedPlanet.name}</h2></div>
                            <button onClick={() => setSelectedPlanet(null)} className="p-2 hover:bg-white/20 rounded-full"><X size={24}/></button>
                        </div>
                        <div className="space-y-6 text-sm text-gray-300">
                            <p className="p-4 bg-zinc-900/80 rounded-xl border border-white/10 leading-relaxed">{selectedPlanet.narration}</p>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(selectedPlanet.stats).map(([k,v]) => (
                                    <div key={k} className="bg-white/5 p-3 rounded-lg"><div className="text-[10px] uppercase text-indigo-400 font-bold mb-1">{k}</div><div className="font-mono text-white">{v}</div></div>
                                ))}
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-zinc-500 uppercase mb-2 flex gap-2 items-center"><MessageSquare size={12}/> Facts</h3>
                                <ul className="space-y-2">{selectedPlanet.facts.map((f, i) => <li key={i} className="flex gap-2"><ArrowRight size={12} className="text-indigo-500 shrink-0 mt-0.5"/>{f}</li>)}</ul>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Loader */}
            {loading && (
                <div className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center">
                    <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Loading Assets...</span>
                </div>
            )}
        </div>
    );
}