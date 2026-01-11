(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function dg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lc={exports:{}},zo={},Dc={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function R_(){if(pp)return xt;pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function x(N,j,k){this.props=N,this.context=j,this.refs=E,this.updater=k||S}x.prototype.isReactComponent={},x.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(N,j,k){this.props=N,this.context=j,this.refs=E,this.updater=k||S}var w=C.prototype=new _;w.constructor=C,T(w,x.prototype),w.isPureReactComponent=!0;var P=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function re(N,j,k){var $,pe={},Le=null,Ie=null;if(j!=null)for($ in j.ref!==void 0&&(Ie=j.ref),j.key!==void 0&&(Le=""+j.key),j)H.call(j,$)&&!F.hasOwnProperty($)&&(pe[$]=j[$]);var ze=arguments.length-2;if(ze===1)pe.children=k;else if(1<ze){for(var Be=Array(ze),He=0;He<ze;He++)Be[He]=arguments[He+2];pe.children=Be}if(N&&N.defaultProps)for($ in ze=N.defaultProps,ze)pe[$]===void 0&&(pe[$]=ze[$]);return{$$typeof:s,type:N,key:Le,ref:Ie,props:pe,_owner:I.current}}function R(N,j){return{$$typeof:s,type:N.type,key:j,ref:N.ref,props:N.props,_owner:N._owner}}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ae(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(k){return j[k]})}var fe=/\/+/g;function we(N,j){return typeof N=="object"&&N!==null&&N.key!=null?ae(""+N.key):j.toString(36)}function W(N,j,k,$,pe){var Le=typeof N;(Le==="undefined"||Le==="boolean")&&(N=null);var Ie=!1;if(N===null)Ie=!0;else switch(Le){case"string":case"number":Ie=!0;break;case"object":switch(N.$$typeof){case s:case e:Ie=!0}}if(Ie)return Ie=N,pe=pe(Ie),N=$===""?"."+we(Ie,0):$,P(pe)?(k="",N!=null&&(k=N.replace(fe,"$&/")+"/"),W(pe,j,k,"",function(He){return He})):pe!=null&&(D(pe)&&(pe=R(pe,k+(!pe.key||Ie&&Ie.key===pe.key?"":(""+pe.key).replace(fe,"$&/")+"/")+N)),j.push(pe)),1;if(Ie=0,$=$===""?".":$+":",P(N))for(var ze=0;ze<N.length;ze++){Le=N[ze];var Be=$+we(Le,ze);Ie+=W(Le,j,k,Be,pe)}else if(Be=y(N),typeof Be=="function")for(N=Be.call(N),ze=0;!(Le=N.next()).done;)Le=Le.value,Be=$+we(Le,ze++),Ie+=W(Le,j,k,Be,pe);else if(Le==="object")throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Ie}function ne(N,j,k){if(N==null)return N;var $=[],pe=0;return W(N,$,"","",function(Le){return j.call(k,Le,pe++)}),$}function le(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(k){(N._status===0||N._status===-1)&&(N._status=1,N._result=k)},function(k){(N._status===0||N._status===-1)&&(N._status=2,N._result=k)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var de={current:null},Y={transition:null},Q={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Y,ReactCurrentOwner:I};function q(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ne,forEach:function(N,j,k){ne(N,function(){j.apply(this,arguments)},k)},count:function(N){var j=0;return ne(N,function(){j++}),j},toArray:function(N){return ne(N,function(j){return j})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},xt.Component=x,xt.Fragment=n,xt.Profiler=a,xt.PureComponent=C,xt.StrictMode=r,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,xt.act=q,xt.cloneElement=function(N,j,k){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var $=T({},N.props),pe=N.key,Le=N.ref,Ie=N._owner;if(j!=null){if(j.ref!==void 0&&(Le=j.ref,Ie=I.current),j.key!==void 0&&(pe=""+j.key),N.type&&N.type.defaultProps)var ze=N.type.defaultProps;for(Be in j)H.call(j,Be)&&!F.hasOwnProperty(Be)&&($[Be]=j[Be]===void 0&&ze!==void 0?ze[Be]:j[Be])}var Be=arguments.length-2;if(Be===1)$.children=k;else if(1<Be){ze=Array(Be);for(var He=0;He<Be;He++)ze[He]=arguments[He+2];$.children=ze}return{$$typeof:s,type:N.type,key:pe,ref:Le,props:$,_owner:Ie}},xt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},xt.createElement=re,xt.createFactory=function(N){var j=re.bind(null,N);return j.type=N,j},xt.createRef=function(){return{current:null}},xt.forwardRef=function(N){return{$$typeof:c,render:N}},xt.isValidElement=D,xt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:le}},xt.memo=function(N,j){return{$$typeof:m,type:N,compare:j===void 0?null:j}},xt.startTransition=function(N){var j=Y.transition;Y.transition={};try{N()}finally{Y.transition=j}},xt.unstable_act=q,xt.useCallback=function(N,j){return de.current.useCallback(N,j)},xt.useContext=function(N){return de.current.useContext(N)},xt.useDebugValue=function(){},xt.useDeferredValue=function(N){return de.current.useDeferredValue(N)},xt.useEffect=function(N,j){return de.current.useEffect(N,j)},xt.useId=function(){return de.current.useId()},xt.useImperativeHandle=function(N,j,k){return de.current.useImperativeHandle(N,j,k)},xt.useInsertionEffect=function(N,j){return de.current.useInsertionEffect(N,j)},xt.useLayoutEffect=function(N,j){return de.current.useLayoutEffect(N,j)},xt.useMemo=function(N,j){return de.current.useMemo(N,j)},xt.useReducer=function(N,j,k){return de.current.useReducer(N,j,k)},xt.useRef=function(N){return de.current.useRef(N)},xt.useState=function(N){return de.current.useState(N)},xt.useSyncExternalStore=function(N,j,k){return de.current.useSyncExternalStore(N,j,k)},xt.useTransition=function(){return de.current.useTransition()},xt.version="18.3.1",xt}var mp;function Df(){return mp||(mp=1,Dc.exports=R_()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function C_(){if(gp)return zo;gp=1;var s=Df(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,h,m){var g,v={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:y,ref:S,props:v,_owner:a.current}}return zo.Fragment=n,zo.jsx=d,zo.jsxs=d,zo}var _p;function b_(){return _p||(_p=1,Lc.exports=C_()),Lc.exports}var xe=b_(),Tt=Df();const P_=dg(Tt);var ll={},Uc={exports:{}},Fn={},Nc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function L_(){return vp||(vp=1,(function(s){function e(Y,Q){var q=Y.length;Y.push(Q);e:for(;0<q;){var N=q-1>>>1,j=Y[N];if(0<a(j,Q))Y[N]=Q,Y[q]=j,q=N;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var Q=Y[0],q=Y.pop();if(q!==Q){Y[0]=q;e:for(var N=0,j=Y.length,k=j>>>1;N<k;){var $=2*(N+1)-1,pe=Y[$],Le=$+1,Ie=Y[Le];if(0>a(pe,q))Le<j&&0>a(Ie,pe)?(Y[N]=Ie,Y[Le]=q,N=Le):(Y[N]=pe,Y[$]=q,N=$);else if(Le<j&&0>a(Ie,q))Y[N]=Ie,Y[Le]=q,N=Le;else break e}}return Q}function a(Y,Q){var q=Y.sortIndex-Q.sortIndex;return q!==0?q:Y.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();s.unstable_now=function(){return d.now()-c}}var h=[],m=[],g=1,v=null,y=3,S=!1,T=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(Y){for(var Q=n(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=Y)r(m),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=n(m)}}function P(Y){if(E=!1,w(Y),!T)if(n(h)!==null)T=!0,le(H);else{var Q=n(m);Q!==null&&de(P,Q.startTime-Y)}}function H(Y,Q){T=!1,E&&(E=!1,_(re),re=-1),S=!0;var q=y;try{for(w(Q),v=n(h);v!==null&&(!(v.expirationTime>Q)||Y&&!ae());){var N=v.callback;if(typeof N=="function"){v.callback=null,y=v.priorityLevel;var j=N(v.expirationTime<=Q);Q=s.unstable_now(),typeof j=="function"?v.callback=j:v===n(h)&&r(h),w(Q)}else r(h);v=n(h)}if(v!==null)var k=!0;else{var $=n(m);$!==null&&de(P,$.startTime-Q),k=!1}return k}finally{v=null,y=q,S=!1}}var I=!1,F=null,re=-1,R=5,D=-1;function ae(){return!(s.unstable_now()-D<R)}function fe(){if(F!==null){var Y=s.unstable_now();D=Y;var Q=!0;try{Q=F(!0,Y)}finally{Q?we():(I=!1,F=null)}}else I=!1}var we;if(typeof C=="function")we=function(){C(fe)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ne=W.port2;W.port1.onmessage=fe,we=function(){ne.postMessage(null)}}else we=function(){x(fe,0)};function le(Y){F=Y,I||(I=!0,we())}function de(Y,Q){re=x(function(){Y(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,le(H))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(Y){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var q=y;y=Q;try{return Y()}finally{y=q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var q=y;y=Y;try{return Q()}finally{y=q}},s.unstable_scheduleCallback=function(Y,Q,q){var N=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?N+q:N):q=N,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=q+j,Y={id:g++,callback:Q,priorityLevel:Y,startTime:q,expirationTime:j,sortIndex:-1},q>N?(Y.sortIndex=q,e(m,Y),n(h)===null&&Y===n(m)&&(E?(_(re),re=-1):E=!0,de(P,q-N))):(Y.sortIndex=j,e(h,Y),T||S||(T=!0,le(H))),Y},s.unstable_shouldYield=ae,s.unstable_wrapCallback=function(Y){var Q=y;return function(){var q=y;y=Q;try{return Y.apply(this,arguments)}finally{y=q}}}})(Ic)),Ic}var xp;function D_(){return xp||(xp=1,Nc.exports=L_()),Nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function U_(){if(yp)return Fn;yp=1;var s=Df(),e=D_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(t){return h.call(v,t)?!0:h.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function S(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||S(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,o,u,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,C);x[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,C);x[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,C);x[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function w(t,i,o,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,u)&&(o=null),u||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),ae=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),Y=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,N;function j(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var k=!1;function $(t,i){if(!t||k)return"";k=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var u=se}Reflect.construct(t,[],i)}else{try{i.call()}catch(se){u=se}t.call(i.prototype)}else{try{throw Error()}catch(se){u=se}t()}}catch(se){if(se&&u&&typeof se.stack=="string"){for(var f=se.stack.split(`
`),p=u.stack.split(`
`),M=f.length-1,O=p.length-1;1<=M&&0<=O&&f[M]!==p[O];)O--;for(;1<=M&&0<=O;M--,O--)if(f[M]!==p[O]){if(M!==1||O!==1)do if(M--,O--,0>O||f[M]!==p[O]){var B=`
`+f[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=O);break}}}finally{k=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function pe(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function Le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case I:return"Portal";case R:return"Profiler";case re:return"StrictMode";case we:return"Suspense";case W:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ae:return(t.displayName||"Context")+".Consumer";case D:return(t._context.displayName||"Context")+".Provider";case fe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ne:return i=t.displayName||null,i!==null?i:Le(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return Le(t(i))}catch{}}return null}function Ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(i);case 8:return i===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ze(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(t){var i=Be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ft(t){t._valueTracker||(t._valueTracker=He(t))}function ie(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Be(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function et(t,i){var o=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function st(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ze(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ye(t,i){i=i.checked,i!=null&&w(t,"checked",i,!1)}function wt(t,i){Ye(t,i);var o=ze(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?L(t,i.type,o):i.hasOwnProperty("defaultValue")&&L(t,i.type,ze(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function at(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function L(t,i,o){(i!=="number"||Ft(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var A=Array.isArray;function J(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ze(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Pe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ae(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(A(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ze(o)}}function De(t,i){var o=ze(i.value),u=ze(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function he(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Te(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Te(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oe,We=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function me(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X=["Webkit","ms","Moz","O"];Object.keys(Ze).forEach(function(t){X.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ze[i]=Ze[t]})});function Me(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ze.hasOwnProperty(t)&&Ze[t]?(""+i).trim():i+"px"}function _e(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Me(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var Re=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function U(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function te(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Se(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ge=null,z=null,ve=null;function Ne(t){if(t=Eo(t)){if(typeof ge!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ea(i),ge(t.stateNode,t.type,i))}}function qe(t){z?ve?ve.push(t):ve=[t]:z=t}function Qe(){if(z){var t=z,i=ve;if(ve=z=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function dt(t,i){return t(i)}function ht(){}var bt=!1;function Ot(t,i,o){if(bt)return t(i,o);bt=!0;try{return dt(t,i,o)}finally{bt=!1,(z!==null||ve!==null)&&(ht(),Qe())}}function vt(t,i){var o=t.stateNode;if(o===null)return null;var u=Ea(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var zt=!1;if(c)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){zt=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{zt=!1}function na(t,i,o,u,f,p,M,O,B){var se=Array.prototype.slice.call(arguments,3);try{i.apply(o,se)}catch(be){this.onError(be)}}var Tr=!1,Mi=null,wr=!1,Gi=null,ia={onError:function(t){Tr=!0,Mi=t}};function ra(t,i,o,u,f,p,M,O,B){Tr=!1,Mi=null,na.apply(ia,arguments)}function Jl(t,i,o,u,f,p,M,O,B){if(ra.apply(this,arguments),Tr){if(Tr){var se=Mi;Tr=!1,Mi=null}else throw Error(n(198));wr||(wr=!0,Gi=se)}}function Ei(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function sa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(Ei(t)!==t)throw Error(n(188))}function Z(t){var i=t.alternate;if(!i){if(i=Ei(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return b(f),t;if(p===u)return b(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=p;else{for(var M=!1,O=f.child;O;){if(O===o){M=!0,o=f,u=p;break}if(O===u){M=!0,u=f,o=p;break}O=O.sibling}if(!M){for(O=p.child;O;){if(O===o){M=!0,o=p,u=f;break}if(O===u){M=!0,u=p,o=f;break}O=O.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ue(t){return t=Z(t),t!==null?ce(t):null}function ce(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ce(t);if(i!==null)return i;t=t.sibling}return null}var oe=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,tt=e.unstable_shouldYield,ot=e.unstable_requestPaint,Xe=e.unstable_now,pt=e.unstable_getCurrentPriorityLevel,ut=e.unstable_ImmediatePriority,ct=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,_n=e.unstable_LowPriority,jt=e.unstable_IdlePriority,bn=null,St=null;function mt(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(bn,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:oa,kt=Math.log,Ti=Math.LN2;function oa(t){return t>>>=0,t===0?32:31-(kt(t)/Ti|0)|0}var mi=64,Vi=4194304;function Wt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var O=M&~f;O!==0?u=Wt(O):(p&=M,p!==0&&(u=Wt(p)))}else M=o&~f,M!==0?u=Wt(M):p!==0&&(u=Wt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-vn(i),f=1<<o,u|=t[o],i&=~f;return u}function ro(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-vn(p),O=1<<M,B=f[M];B===-1?((O&o)===0||(O&u)!==0)&&(f[M]=ro(O,i)):B<=i&&(t.expiredLanes|=O),p&=~O}}function Ar(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function aa(){var t=mi;return mi<<=1,(mi&4194240)===0&&(mi=64),t}function ts(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function so(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vn(i),t[i]=o}function qg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-vn(o),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~p}}function eu(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-vn(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var At=0;function jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Yf,tu,qf,$f,Kf,nu=!1,la=[],Wi=null,Xi=null,ji=null,oo=new Map,ao=new Map,Yi=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(t,i,o,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Eo(i),i!==null&&tu(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Kg(t,i,o,u,f){switch(i){case"focusin":return Wi=lo(Wi,t,i,o,u,f),!0;case"dragenter":return Xi=lo(Xi,t,i,o,u,f),!0;case"mouseover":return ji=lo(ji,t,i,o,u,f),!0;case"pointerover":var p=f.pointerId;return oo.set(p,lo(oo.get(p)||null,t,i,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,ao.set(p,lo(ao.get(p)||null,t,i,o,u,f)),!0}return!1}function Qf(t){var i=Rr(t.target);if(i!==null){var o=Ei(i);if(o!==null){if(i=o.tag,i===13){if(i=sa(o),i!==null){t.blockedOn=i,Kf(t.priority,function(){qf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ua(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ru(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ce=u,o.target.dispatchEvent(u),Ce=null}else return i=Eo(o),i!==null&&tu(i),t.blockedOn=o,!1;i.shift()}return!0}function Jf(t,i,o){ua(t)&&o.delete(i)}function Zg(){nu=!1,Wi!==null&&ua(Wi)&&(Wi=null),Xi!==null&&ua(Xi)&&(Xi=null),ji!==null&&ua(ji)&&(ji=null),oo.forEach(Jf),ao.forEach(Jf)}function uo(t,i){t.blockedOn===i&&(t.blockedOn=null,nu||(nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function co(t){function i(f){return uo(f,t)}if(0<la.length){uo(la[0],t);for(var o=1;o<la.length;o++){var u=la[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Wi!==null&&uo(Wi,t),Xi!==null&&uo(Xi,t),ji!==null&&uo(ji,t),oo.forEach(i),ao.forEach(i),o=0;o<Yi.length;o++)u=Yi[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)Qf(o),o.blockedOn===null&&Yi.shift()}var ns=P.ReactCurrentBatchConfig,ca=!0;function Qg(t,i,o,u){var f=At,p=ns.transition;ns.transition=null;try{At=1,iu(t,i,o,u)}finally{At=f,ns.transition=p}}function Jg(t,i,o,u){var f=At,p=ns.transition;ns.transition=null;try{At=4,iu(t,i,o,u)}finally{At=f,ns.transition=p}}function iu(t,i,o,u){if(ca){var f=ru(t,i,o,u);if(f===null)Su(t,i,u,fa,o),Zf(t,u);else if(Kg(f,t,i,o,u))u.stopPropagation();else if(Zf(t,u),i&4&&-1<$g.indexOf(t)){for(;f!==null;){var p=Eo(f);if(p!==null&&Yf(p),p=ru(t,i,o,u),p===null&&Su(t,i,u,fa,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Su(t,i,u,null,o)}}var fa=null;function ru(t,i,o,u){if(fa=null,t=Se(u),t=Rr(t),t!==null)if(i=Ei(t),i===null)t=null;else if(o=i.tag,o===13){if(t=sa(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return fa=t,null}function ed(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pt()){case ut:return 1;case ct:return 4;case Pt:case _n:return 16;case jt:return 536870912;default:return 16}default:return 16}}var qi=null,su=null,da=null;function td(){if(da)return da;var t,i=su,o=i.length,u,f="value"in qi?qi.value:qi.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(u=1;u<=M&&i[o-u]===f[p-u];u++);return da=f.slice(t,1<u?1-u:void 0)}function ha(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function nd(){return!1}function kn(t){function i(o,u,f,p,M){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(o=t[O],this[O]=o?o(p):p[O]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?pa:nd,this.isPropagationStopped=nd,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=kn(is),fo=q({},is,{view:0,detail:0}),e0=kn(fo),au,lu,ho,ma=q({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(au=t.screenX-ho.screenX,lu=t.screenY-ho.screenY):lu=au=0,ho=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),id=kn(ma),t0=q({},ma,{dataTransfer:0}),n0=kn(t0),i0=q({},fo,{relatedTarget:0}),uu=kn(i0),r0=q({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=kn(r0),o0=q({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=kn(o0),l0=q({},is,{data:0}),rd=kn(l0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=f0[t])?!!i[t]:!1}function cu(){return d0}var h0=q({},fo,{key:function(t){if(t.key){var i=u0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=kn(h0),m0=q({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=kn(m0),g0=q({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),_0=kn(g0),v0=q({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=kn(v0),y0=q({},ma,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=kn(y0),M0=[9,13,27,32],fu=c&&"CompositionEvent"in window,po=null;c&&"documentMode"in document&&(po=document.documentMode);var E0=c&&"TextEvent"in window&&!po,od=c&&(!fu||po&&8<po&&11>=po),ad=" ",ld=!1;function ud(t,i){switch(t){case"keyup":return M0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function T0(t,i){switch(t){case"compositionend":return cd(i);case"keypress":return i.which!==32?null:(ld=!0,ad);case"textInput":return t=i.data,t===ad&&ld?null:t;default:return null}}function w0(t,i){if(rs)return t==="compositionend"||!fu&&ud(t,i)?(t=td(),da=su=qi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return od&&i.locale!=="ko"?null:i.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!A0[t.type]:i==="textarea"}function dd(t,i,o,u){qe(u),i=ya(i,"onChange"),0<i.length&&(o=new ou("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var mo=null,go=null;function R0(t){Pd(t,0)}function ga(t){var i=us(t);if(ie(i))return t}function C0(t,i){if(t==="change")return i}var hd=!1;if(c){var du;if(c){var hu="oninput"in document;if(!hu){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),hu=typeof pd.oninput=="function"}du=hu}else du=!1;hd=du&&(!document.documentMode||9<document.documentMode)}function md(){mo&&(mo.detachEvent("onpropertychange",gd),go=mo=null)}function gd(t){if(t.propertyName==="value"&&ga(go)){var i=[];dd(i,go,t,Se(t)),Ot(R0,i)}}function b0(t,i,o){t==="focusin"?(md(),mo=i,go=o,mo.attachEvent("onpropertychange",gd)):t==="focusout"&&md()}function P0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ga(go)}function L0(t,i){if(t==="click")return ga(i)}function D0(t,i){if(t==="input"||t==="change")return ga(i)}function U0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:U0;function _o(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!ri(t[f],i[f]))return!1}return!0}function _d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vd(t,i){var o=_d(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_d(o)}}function xd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yd(){for(var t=window,i=Ft();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Ft(t.document)}return i}function pu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function N0(t){var i=yd(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&xd(o.ownerDocument.documentElement,o)){if(u!==null&&pu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=vd(o,p);var M=vd(o,u);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I0=c&&"documentMode"in document&&11>=document.documentMode,ss=null,mu=null,vo=null,gu=!1;function Sd(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gu||ss==null||ss!==Ft(u)||(u=ss,"selectionStart"in u&&pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vo&&_o(vo,u)||(vo=u,u=ya(mu,"onSelect"),0<u.length&&(i=new ou("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=ss)))}function _a(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},_u={},Md={};c&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function va(t){if(_u[t])return _u[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Md)return _u[t]=i[o];return t}var Ed=va("animationend"),Td=va("animationiteration"),wd=va("animationstart"),Ad=va("transitionend"),Rd=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Rd.set(t,i),l(i,[t])}for(var vu=0;vu<Cd.length;vu++){var xu=Cd[vu],F0=xu.toLowerCase(),O0=xu[0].toUpperCase()+xu.slice(1);$i(F0,"on"+O0)}$i(Ed,"onAnimationEnd"),$i(Td,"onAnimationIteration"),$i(wd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Ad,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function bd(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Jl(u,i,void 0,t),t.currentTarget=null}function Pd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var O=u[M],B=O.instance,se=O.currentTarget;if(O=O.listener,B!==p&&f.isPropagationStopped())break e;bd(f,O,se),p=B}else for(M=0;M<u.length;M++){if(O=u[M],B=O.instance,se=O.currentTarget,O=O.listener,B!==p&&f.isPropagationStopped())break e;bd(f,O,se),p=B}}}if(wr)throw t=Gi,wr=!1,Gi=null,t}function Ut(t,i){var o=i[Ru];o===void 0&&(o=i[Ru]=new Set);var u=t+"__bubble";o.has(u)||(Ld(i,t,2,!1),o.add(u))}function yu(t,i,o){var u=0;i&&(u|=4),Ld(o,t,u,i)}var xa="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[xa]){t[xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(z0.has(o)||yu(o,!1,t),yu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xa]||(i[xa]=!0,yu("selectionchange",!1,i))}}function Ld(t,i,o,u){switch(ed(i)){case 1:var f=Qg;break;case 4:f=Jg;break;default:f=iu}o=f.bind(null,i,o,t),f=void 0,!zt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Su(t,i,o,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var O=u.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;O!==null;){if(M=Rr(O),M===null)return;if(B=M.tag,B===5||B===6){u=p=M;continue e}O=O.parentNode}}u=u.return}Ot(function(){var se=p,be=Se(o),Ue=[];e:{var Ee=Rd.get(t);if(Ee!==void 0){var Ve=ou,$e=t;switch(t){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":Ve=p0;break;case"focusin":$e="focus",Ve=uu;break;case"focusout":$e="blur",Ve=uu;break;case"beforeblur":case"afterblur":Ve=uu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=_0;break;case Ed:case Td:case wd:Ve=s0;break;case Ad:Ve=x0;break;case"scroll":Ve=e0;break;case"wheel":Ve=S0;break;case"copy":case"cut":case"paste":Ve=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=sd}var Ke=(i&4)!==0,Yt=!Ke&&t==="scroll",K=Ke?Ee!==null?Ee+"Capture":null:Ee;Ke=[];for(var V=se,ee;V!==null;){ee=V;var Fe=ee.stateNode;if(ee.tag===5&&Fe!==null&&(ee=Fe,K!==null&&(Fe=vt(V,K),Fe!=null&&Ke.push(So(V,Fe,ee)))),Yt)break;V=V.return}0<Ke.length&&(Ee=new Ve(Ee,$e,null,o,be),Ue.push({event:Ee,listeners:Ke}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",Ee&&o!==Ce&&($e=o.relatedTarget||o.fromElement)&&(Rr($e)||$e[wi]))break e;if((Ve||Ee)&&(Ee=be.window===be?be:(Ee=be.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ve?($e=o.relatedTarget||o.toElement,Ve=se,$e=$e?Rr($e):null,$e!==null&&(Yt=Ei($e),$e!==Yt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ve=null,$e=se),Ve!==$e)){if(Ke=id,Fe="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ke=sd,Fe="onPointerLeave",K="onPointerEnter",V="pointer"),Yt=Ve==null?Ee:us(Ve),ee=$e==null?Ee:us($e),Ee=new Ke(Fe,V+"leave",Ve,o,be),Ee.target=Yt,Ee.relatedTarget=ee,Fe=null,Rr(be)===se&&(Ke=new Ke(K,V+"enter",$e,o,be),Ke.target=ee,Ke.relatedTarget=Yt,Fe=Ke),Yt=Fe,Ve&&$e)t:{for(Ke=Ve,K=$e,V=0,ee=Ke;ee;ee=as(ee))V++;for(ee=0,Fe=K;Fe;Fe=as(Fe))ee++;for(;0<V-ee;)Ke=as(Ke),V--;for(;0<ee-V;)K=as(K),ee--;for(;V--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=as(Ke),K=as(K)}Ke=null}else Ke=null;Ve!==null&&Dd(Ue,Ee,Ve,Ke,!1),$e!==null&&Yt!==null&&Dd(Ue,Yt,$e,Ke,!0)}}e:{if(Ee=se?us(se):window,Ve=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&Ee.type==="file")var Je=C0;else if(fd(Ee))if(hd)Je=D0;else{Je=P0;var it=b0}else(Ve=Ee.nodeName)&&Ve.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(Je=L0);if(Je&&(Je=Je(t,se))){dd(Ue,Je,o,be);break e}it&&it(t,Ee,se),t==="focusout"&&(it=Ee._wrapperState)&&it.controlled&&Ee.type==="number"&&L(Ee,"number",Ee.value)}switch(it=se?us(se):window,t){case"focusin":(fd(it)||it.contentEditable==="true")&&(ss=it,mu=se,vo=null);break;case"focusout":vo=mu=ss=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Sd(Ue,o,be);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Sd(Ue,o,be)}var rt;if(fu)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else rs?ud(t,o)&&(lt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(lt="onCompositionStart");lt&&(od&&o.locale!=="ko"&&(rs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&rs&&(rt=td()):(qi=be,su="value"in qi?qi.value:qi.textContent,rs=!0)),it=ya(se,lt),0<it.length&&(lt=new rd(lt,t,null,o,be),Ue.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=cd(o),rt!==null&&(lt.data=rt)))),(rt=E0?T0(t,o):w0(t,o))&&(se=ya(se,"onBeforeInput"),0<se.length&&(be=new rd("onBeforeInput","beforeinput",null,o,be),Ue.push({event:be,listeners:se}),be.data=rt))}Pd(Ue,i)})}function So(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ya(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=vt(t,o),p!=null&&u.unshift(So(t,p,f)),p=vt(t,i),p!=null&&u.push(So(t,p,f))),t=t.return}return u}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,i,o,u,f){for(var p=i._reactName,M=[];o!==null&&o!==u;){var O=o,B=O.alternate,se=O.stateNode;if(B!==null&&B===u)break;O.tag===5&&se!==null&&(O=se,f?(B=vt(o,p),B!=null&&M.unshift(So(o,B,O))):f||(B=vt(o,p),B!=null&&M.push(So(o,B,O)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var k0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function Ud(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(B0,"")}function Sa(t,i,o){if(i=Ud(i),Ud(t)!==i&&o)throw Error(n(425))}function Ma(){}var Mu=null,Eu=null;function Tu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(V0)}:wu;function V0(t){setTimeout(function(){throw t})}function Au(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),co(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);co(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Id(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),gi="__reactFiber$"+ls,Mo="__reactProps$"+ls,wi="__reactContainer$"+ls,Ru="__reactEvents$"+ls,W0="__reactListeners$"+ls,X0="__reactHandles$"+ls;function Rr(t){var i=t[gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Id(t);t!==null;){if(o=t[gi])return o;t=Id(t)}return i}t=o,o=t.parentNode}return null}function Eo(t){return t=t[gi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ea(t){return t[Mo]||null}var Cu=[],cs=-1;function Zi(t){return{current:t}}function Nt(t){0>cs||(t.current=Cu[cs],Cu[cs]=null,cs--)}function Lt(t,i){cs++,Cu[cs]=t.current,t.current=i}var Qi={},fn=Zi(Qi),Ln=Zi(!1),Cr=Qi;function fs(t,i){var o=t.type.contextTypes;if(!o)return Qi;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Dn(t){return t=t.childContextTypes,t!=null}function Ta(){Nt(Ln),Nt(fn)}function Fd(t,i,o){if(fn.current!==Qi)throw Error(n(168));Lt(fn,i),Lt(Ln,o)}function Od(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,Ie(t)||"Unknown",f));return q({},o,u)}function wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Cr=fn.current,Lt(fn,t),Lt(Ln,Ln.current),!0}function zd(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Od(t,i,Cr),u.__reactInternalMemoizedMergedChildContext=t,Nt(Ln),Nt(fn),Lt(fn,t)):Nt(Ln),Lt(Ln,o)}var Ai=null,Aa=!1,bu=!1;function kd(t){Ai===null?Ai=[t]:Ai.push(t)}function j0(t){Aa=!0,kd(t)}function Ji(){if(!bu&&Ai!==null){bu=!0;var t=0,i=At;try{var o=Ai;for(At=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Ai=null,Aa=!1}catch(f){throw Ai!==null&&(Ai=Ai.slice(t+1)),oe(ut,Ji),f}finally{At=i,bu=!1}}return null}var ds=[],hs=0,Ra=null,Ca=0,qn=[],$n=0,br=null,Ri=1,Ci="";function Pr(t,i){ds[hs++]=Ca,ds[hs++]=Ra,Ra=t,Ca=i}function Bd(t,i,o){qn[$n++]=Ri,qn[$n++]=Ci,qn[$n++]=br,br=t;var u=Ri;t=Ci;var f=32-vn(u)-1;u&=~(1<<f),o+=1;var p=32-vn(i)+f;if(30<p){var M=f-f%5;p=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Ri=1<<32-vn(i)+f|o<<f|u,Ci=p+t}else Ri=1<<p|o<<f|u,Ci=t}function Pu(t){t.return!==null&&(Pr(t,1),Bd(t,1,0))}function Lu(t){for(;t===Ra;)Ra=ds[--hs],ds[hs]=null,Ca=ds[--hs],ds[hs]=null;for(;t===br;)br=qn[--$n],qn[$n]=null,Ci=qn[--$n],qn[$n]=null,Ri=qn[--$n],qn[$n]=null}var Bn=null,Hn=null,Bt=!1,si=null;function Hd(t,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,Hn=null,!0):!1;default:return!1}}function Du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uu(t){if(Bt){var i=Hn;if(i){var o=i;if(!Gd(t,i)){if(Du(t))throw Error(n(418));i=Ki(o.nextSibling);var u=Bn;i&&Gd(t,i)?Hd(u,o):(t.flags=t.flags&-4097|2,Bt=!1,Bn=t)}}else{if(Du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,Bn=t}}}function Vd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function ba(t){if(t!==Bn)return!1;if(!Bt)return Vd(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Tu(t.type,t.memoizedProps)),i&&(i=Hn)){if(Du(t))throw Wd(),Error(n(418));for(;i;)Hd(t,i),i=Ki(i.nextSibling)}if(Vd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Hn=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Bn?Ki(t.stateNode.nextSibling):null;return!0}function Wd(){for(var t=Hn;t;)t=Ki(t.nextSibling)}function ps(){Hn=Bn=null,Bt=!1}function Nu(t){si===null?si=[t]:si.push(t)}var Y0=P.ReactCurrentBatchConfig;function To(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var O=f.refs;M===null?delete O[p]:O[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Xd(t){var i=t._init;return i(t._payload)}function jd(t){function i(K,V){if(t){var ee=K.deletions;ee===null?(K.deletions=[V],K.flags|=16):ee.push(V)}}function o(K,V){if(!t)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function u(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function f(K,V){return K=ar(K,V),K.index=0,K.sibling=null,K}function p(K,V,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<V?(K.flags|=2,V):ee):(K.flags|=2,V)):(K.flags|=1048576,V)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function O(K,V,ee,Fe){return V===null||V.tag!==6?(V=wc(ee,K.mode,Fe),V.return=K,V):(V=f(V,ee),V.return=K,V)}function B(K,V,ee,Fe){var Je=ee.type;return Je===F?be(K,V,ee.props.children,Fe,ee.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===le&&Xd(Je)===V.type)?(Fe=f(V,ee.props),Fe.ref=To(K,V,ee),Fe.return=K,Fe):(Fe=el(ee.type,ee.key,ee.props,null,K.mode,Fe),Fe.ref=To(K,V,ee),Fe.return=K,Fe)}function se(K,V,ee,Fe){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Ac(ee,K.mode,Fe),V.return=K,V):(V=f(V,ee.children||[]),V.return=K,V)}function be(K,V,ee,Fe,Je){return V===null||V.tag!==7?(V=zr(ee,K.mode,Fe,Je),V.return=K,V):(V=f(V,ee),V.return=K,V)}function Ue(K,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=wc(""+V,K.mode,ee),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case H:return ee=el(V.type,V.key,V.props,null,K.mode,ee),ee.ref=To(K,null,V),ee.return=K,ee;case I:return V=Ac(V,K.mode,ee),V.return=K,V;case le:var Fe=V._init;return Ue(K,Fe(V._payload),ee)}if(A(V)||Q(V))return V=zr(V,K.mode,ee,null),V.return=K,V;Pa(K,V)}return null}function Ee(K,V,ee,Fe){var Je=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Je!==null?null:O(K,V,""+ee,Fe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:return ee.key===Je?B(K,V,ee,Fe):null;case I:return ee.key===Je?se(K,V,ee,Fe):null;case le:return Je=ee._init,Ee(K,V,Je(ee._payload),Fe)}if(A(ee)||Q(ee))return Je!==null?null:be(K,V,ee,Fe,null);Pa(K,ee)}return null}function Ve(K,V,ee,Fe,Je){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return K=K.get(ee)||null,O(V,K,""+Fe,Je);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case H:return K=K.get(Fe.key===null?ee:Fe.key)||null,B(V,K,Fe,Je);case I:return K=K.get(Fe.key===null?ee:Fe.key)||null,se(V,K,Fe,Je);case le:var it=Fe._init;return Ve(K,V,ee,it(Fe._payload),Je)}if(A(Fe)||Q(Fe))return K=K.get(ee)||null,be(V,K,Fe,Je,null);Pa(V,Fe)}return null}function $e(K,V,ee,Fe){for(var Je=null,it=null,rt=V,lt=V=0,sn=null;rt!==null&&lt<ee.length;lt++){rt.index>lt?(sn=rt,rt=null):sn=rt.sibling;var Et=Ee(K,rt,ee[lt],Fe);if(Et===null){rt===null&&(rt=sn);break}t&&rt&&Et.alternate===null&&i(K,rt),V=p(Et,V,lt),it===null?Je=Et:it.sibling=Et,it=Et,rt=sn}if(lt===ee.length)return o(K,rt),Bt&&Pr(K,lt),Je;if(rt===null){for(;lt<ee.length;lt++)rt=Ue(K,ee[lt],Fe),rt!==null&&(V=p(rt,V,lt),it===null?Je=rt:it.sibling=rt,it=rt);return Bt&&Pr(K,lt),Je}for(rt=u(K,rt);lt<ee.length;lt++)sn=Ve(rt,K,lt,ee[lt],Fe),sn!==null&&(t&&sn.alternate!==null&&rt.delete(sn.key===null?lt:sn.key),V=p(sn,V,lt),it===null?Je=sn:it.sibling=sn,it=sn);return t&&rt.forEach(function(lr){return i(K,lr)}),Bt&&Pr(K,lt),Je}function Ke(K,V,ee,Fe){var Je=Q(ee);if(typeof Je!="function")throw Error(n(150));if(ee=Je.call(ee),ee==null)throw Error(n(151));for(var it=Je=null,rt=V,lt=V=0,sn=null,Et=ee.next();rt!==null&&!Et.done;lt++,Et=ee.next()){rt.index>lt?(sn=rt,rt=null):sn=rt.sibling;var lr=Ee(K,rt,Et.value,Fe);if(lr===null){rt===null&&(rt=sn);break}t&&rt&&lr.alternate===null&&i(K,rt),V=p(lr,V,lt),it===null?Je=lr:it.sibling=lr,it=lr,rt=sn}if(Et.done)return o(K,rt),Bt&&Pr(K,lt),Je;if(rt===null){for(;!Et.done;lt++,Et=ee.next())Et=Ue(K,Et.value,Fe),Et!==null&&(V=p(Et,V,lt),it===null?Je=Et:it.sibling=Et,it=Et);return Bt&&Pr(K,lt),Je}for(rt=u(K,rt);!Et.done;lt++,Et=ee.next())Et=Ve(rt,K,lt,Et.value,Fe),Et!==null&&(t&&Et.alternate!==null&&rt.delete(Et.key===null?lt:Et.key),V=p(Et,V,lt),it===null?Je=Et:it.sibling=Et,it=Et);return t&&rt.forEach(function(A_){return i(K,A_)}),Bt&&Pr(K,lt),Je}function Yt(K,V,ee,Fe){if(typeof ee=="object"&&ee!==null&&ee.type===F&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:e:{for(var Je=ee.key,it=V;it!==null;){if(it.key===Je){if(Je=ee.type,Je===F){if(it.tag===7){o(K,it.sibling),V=f(it,ee.props.children),V.return=K,K=V;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===le&&Xd(Je)===it.type){o(K,it.sibling),V=f(it,ee.props),V.ref=To(K,it,ee),V.return=K,K=V;break e}o(K,it);break}else i(K,it);it=it.sibling}ee.type===F?(V=zr(ee.props.children,K.mode,Fe,ee.key),V.return=K,K=V):(Fe=el(ee.type,ee.key,ee.props,null,K.mode,Fe),Fe.ref=To(K,V,ee),Fe.return=K,K=Fe)}return M(K);case I:e:{for(it=ee.key;V!==null;){if(V.key===it)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){o(K,V.sibling),V=f(V,ee.children||[]),V.return=K,K=V;break e}else{o(K,V);break}else i(K,V);V=V.sibling}V=Ac(ee,K.mode,Fe),V.return=K,K=V}return M(K);case le:return it=ee._init,Yt(K,V,it(ee._payload),Fe)}if(A(ee))return $e(K,V,ee,Fe);if(Q(ee))return Ke(K,V,ee,Fe);Pa(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(o(K,V.sibling),V=f(V,ee),V.return=K,K=V):(o(K,V),V=wc(ee,K.mode,Fe),V.return=K,K=V),M(K)):o(K,V)}return Yt}var ms=jd(!0),Yd=jd(!1),La=Zi(null),Da=null,gs=null,Iu=null;function Fu(){Iu=gs=Da=null}function Ou(t){var i=La.current;Nt(La),t._currentValue=i}function zu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Da=t,Iu=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Un=!0),t.firstContext=null)}function Kn(t){var i=t._currentValue;if(Iu!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Da===null)throw Error(n(308));gs=t,Da.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Lr=null;function ku(t){Lr===null?Lr=[t]:Lr.push(t)}function qd(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,ku(i)):(o.next=f.next,f.next=o),i.interleaved=o,bi(t,u)}function bi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,bi(t,o)}return f=u.interleaved,f===null?(i.next=i,ku(u)):(i.next=f.next,f.next=i),u.interleaved=i,bi(t,o)}function Ua(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,eu(t,o)}}function Kd(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Na(t,i,o,u){var f=t.updateQueue;er=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var B=O,se=B.next;B.next=null,M===null?p=se:M.next=se,M=B;var be=t.alternate;be!==null&&(be=be.updateQueue,O=be.lastBaseUpdate,O!==M&&(O===null?be.firstBaseUpdate=se:O.next=se,be.lastBaseUpdate=B))}if(p!==null){var Ue=f.baseState;M=0,be=se=B=null,O=p;do{var Ee=O.lane,Ve=O.eventTime;if((u&Ee)===Ee){be!==null&&(be=be.next={eventTime:Ve,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var $e=t,Ke=O;switch(Ee=i,Ve=o,Ke.tag){case 1:if($e=Ke.payload,typeof $e=="function"){Ue=$e.call(Ve,Ue,Ee);break e}Ue=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ke.payload,Ee=typeof $e=="function"?$e.call(Ve,Ue,Ee):$e,Ee==null)break e;Ue=q({},Ue,Ee);break e;case 2:er=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Ee=f.effects,Ee===null?f.effects=[O]:Ee.push(O))}else Ve={eventTime:Ve,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},be===null?(se=be=Ve,B=Ue):be=be.next=Ve,M|=Ee;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(be===null&&(B=Ue),f.baseState=B,f.firstBaseUpdate=se,f.lastBaseUpdate=be,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=Ue}}function Zd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var wo={},_i=Zi(wo),Ao=Zi(wo),Ro=Zi(wo);function Dr(t){if(t===wo)throw Error(n(174));return t}function Hu(t,i){switch(Lt(Ro,i),Lt(Ao,t),Lt(_i,wo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ye(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ye(i,t)}Nt(_i),Lt(_i,i)}function vs(){Nt(_i),Nt(Ao),Nt(Ro)}function Qd(t){Dr(Ro.current);var i=Dr(_i.current),o=ye(i,t.type);i!==o&&(Lt(Ao,t),Lt(_i,o))}function Gu(t){Ao.current===t&&(Nt(_i),Nt(Ao))}var Gt=Zi(0);function Ia(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Vu=[];function Wu(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var Fa=P.ReactCurrentDispatcher,Xu=P.ReactCurrentBatchConfig,Ur=0,Vt=null,Kt=null,nn=null,Oa=!1,Co=!1,bo=0,q0=0;function dn(){throw Error(n(321))}function ju(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ri(t[o],i[o]))return!1;return!0}function Yu(t,i,o,u,f,p){if(Ur=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fa.current=t===null||t.memoizedState===null?Q0:J0,t=o(u,f),Co){p=0;do{if(Co=!1,bo=0,25<=p)throw Error(n(301));p+=1,nn=Kt=null,i.updateQueue=null,Fa.current=e_,t=o(u,f)}while(Co)}if(Fa.current=Ba,i=Kt!==null&&Kt.next!==null,Ur=0,nn=Kt=Vt=null,Oa=!1,i)throw Error(n(300));return t}function qu(){var t=bo!==0;return bo=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Vt.memoizedState=nn=t:nn=nn.next=t,nn}function Zn(){if(Kt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=nn===null?Vt.memoizedState:nn.next;if(i!==null)nn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Vt.memoizedState=nn=t:nn=nn.next=t}return nn}function Po(t,i){return typeof i=="function"?i(t):i}function $u(t){var i=Zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Kt,f=u.baseQueue,p=o.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}u.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,u=u.baseState;var O=M=null,B=null,se=p;do{var be=se.lane;if((Ur&be)===be)B!==null&&(B=B.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),u=se.hasEagerState?se.eagerState:t(u,se.action);else{var Ue={lane:be,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};B===null?(O=B=Ue,M=u):B=B.next=Ue,Vt.lanes|=be,Nr|=be}se=se.next}while(se!==null&&se!==p);B===null?M=u:B.next=O,ri(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Vt.lanes|=p,Nr|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ku(t){var i=Zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);ri(p,i.memoizedState)||(Un=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function Jd(){}function eh(t,i){var o=Vt,u=Zn(),f=i(),p=!ri(u.memoizedState,f);if(p&&(u.memoizedState=f,Un=!0),u=u.queue,Zu(ih.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Lo(9,nh.bind(null,o,u,f,i),void 0,null),rn===null)throw Error(n(349));(Ur&30)!==0||th(o,i,f)}return f}function th(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function nh(t,i,o,u){i.value=o,i.getSnapshot=u,rh(i)&&sh(t)}function ih(t,i,o){return o(function(){rh(i)&&sh(t)})}function rh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ri(t,o)}catch{return!0}}function sh(t){var i=bi(t,1);i!==null&&ui(i,t,1,-1)}function oh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},i.queue=t,t=t.dispatch=Z0.bind(null,Vt,t),[i.memoizedState,t]}function Lo(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function ah(){return Zn().memoizedState}function za(t,i,o,u){var f=vi();Vt.flags|=t,f.memoizedState=Lo(1|i,o,void 0,u===void 0?null:u)}function ka(t,i,o,u){var f=Zn();u=u===void 0?null:u;var p=void 0;if(Kt!==null){var M=Kt.memoizedState;if(p=M.destroy,u!==null&&ju(u,M.deps)){f.memoizedState=Lo(i,o,p,u);return}}Vt.flags|=t,f.memoizedState=Lo(1|i,o,p,u)}function lh(t,i){return za(8390656,8,t,i)}function Zu(t,i){return ka(2048,8,t,i)}function uh(t,i){return ka(4,2,t,i)}function ch(t,i){return ka(4,4,t,i)}function fh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dh(t,i,o){return o=o!=null?o.concat([t]):null,ka(4,4,fh.bind(null,i,t),o)}function Qu(){}function hh(t,i){var o=Zn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function ph(t,i){var o=Zn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function mh(t,i,o){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=o):(ri(o,i)||(o=aa(),Vt.lanes|=o,Nr|=o,t.baseState=!0),i)}function $0(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var u=Xu.transition;Xu.transition={};try{t(!1),i()}finally{At=o,Xu.transition=u}}function gh(){return Zn().memoizedState}function K0(t,i,o){var u=sr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},_h(t))vh(i,o);else if(o=qd(t,i,o,u),o!==null){var f=yn();ui(o,t,u,f),xh(o,i,u)}}function Z0(t,i,o){var u=sr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(_h(t))vh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,O=p(M,o);if(f.hasEagerState=!0,f.eagerState=O,ri(O,M)){var B=i.interleaved;B===null?(f.next=f,ku(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=qd(t,i,f,u),o!==null&&(f=yn(),ui(o,t,u,f),xh(o,i,u))}}function _h(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function vh(t,i){Co=Oa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function xh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,eu(t,o)}}var Ba={readContext:Kn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},Q0={readContext:Kn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:lh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,za(4194308,4,fh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return za(4194308,4,t,i)},useInsertionEffect:function(t,i){return za(4,2,t,i)},useMemo:function(t,i){var o=vi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=vi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=K0.bind(null,Vt,t),[u.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:oh,useDebugValue:Qu,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=oh(!1),i=t[0];return t=$0.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Vt,f=vi();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),rn===null)throw Error(n(349));(Ur&30)!==0||th(u,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,lh(ih.bind(null,u,p,t),[t]),u.flags|=2048,Lo(9,nh.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=vi(),i=rn.identifierPrefix;if(Bt){var o=Ci,u=Ri;o=(u&~(1<<32-vn(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=q0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},J0={readContext:Kn,useCallback:hh,useContext:Kn,useEffect:Zu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:$u,useRef:ah,useState:function(){return $u(Po)},useDebugValue:Qu,useDeferredValue:function(t){var i=Zn();return mh(i,Kt.memoizedState,t)},useTransition:function(){var t=$u(Po)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1},e_={readContext:Kn,useCallback:hh,useContext:Kn,useEffect:Zu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Ku,useRef:ah,useState:function(){return Ku(Po)},useDebugValue:Qu,useDeferredValue:function(t){var i=Zn();return Kt===null?i.memoizedState=t:mh(i,Kt.memoizedState,t)},useTransition:function(){var t=Ku(Po)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=q({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ju(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:q({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ha={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=yn(),f=sr(t),p=Pi(u,f);p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,f),i!==null&&(ui(i,t,f,u),Ua(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=yn(),f=sr(t),p=Pi(u,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=tr(t,p,f),i!==null&&(ui(i,t,f,u),Ua(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=yn(),u=sr(t),f=Pi(o,u);f.tag=2,i!=null&&(f.callback=i),i=tr(t,f,u),i!==null&&(ui(i,t,u,o),Ua(i,t,u))}};function yh(t,i,o,u,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!_o(o,u)||!_o(f,p):!0}function Sh(t,i,o){var u=!1,f=Qi,p=i.contextType;return typeof p=="object"&&p!==null?p=Kn(p):(f=Dn(i)?Cr:fn.current,u=i.contextTypes,p=(u=u!=null)?fs(t,f):Qi),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ha,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Mh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ha.enqueueReplaceState(i,i.state,null)}function ec(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Bu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Kn(p):(p=Dn(i)?Cr:fn.current,f.context=fs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ju(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ha.enqueueReplaceState(f,f.state,null),Na(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",u=i;do o+=pe(u),u=u.return;while(u);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function tc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function nc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var t_=typeof WeakMap=="function"?WeakMap:Map;function Eh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){qa||(qa=!0,_c=u),nc(t,i)},o}function Th(t,i,o){o=Pi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){nc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){nc(t,i),typeof u!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function wh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new t_;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=m_.bind(null,t,i,o),i.then(t,t))}function Ah(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var n_=P.ReactCurrentOwner,Un=!1;function xn(t,i,o,u){i.child=t===null?Yd(i,null,o,u):ms(i,t.child,o,u)}function Ch(t,i,o,u,f){o=o.render;var p=i.ref;return _s(i,f),u=Yu(t,i,o,u,p,f),o=qu(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(Bt&&o&&Pu(i),i.flags|=1,xn(t,i,u,f),i.child)}function bh(t,i,o,u,f){if(t===null){var p=o.type;return typeof p=="function"&&!Tc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Ph(t,i,p,u,f)):(t=el(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:_o,o(M,u)&&t.ref===i.ref)return Li(t,i,f)}return i.flags|=1,t=ar(p,u),t.ref=i.ref,t.return=i,i.child=t}function Ph(t,i,o,u,f){if(t!==null){var p=t.memoizedProps;if(_o(p,u)&&t.ref===i.ref)if(Un=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,Li(t,i,f)}return ic(t,i,o,u,f)}function Lh(t,i,o){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ss,Gn),Gn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ss,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Lt(Ss,Gn),Gn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Lt(Ss,Gn),Gn|=u;return xn(t,i,f,o),i.child}function Dh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ic(t,i,o,u,f){var p=Dn(o)?Cr:fn.current;return p=fs(i,p),_s(i,f),o=Yu(t,i,o,u,p,f),u=qu(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(Bt&&u&&Pu(i),i.flags|=1,xn(t,i,o,f),i.child)}function Uh(t,i,o,u,f){if(Dn(o)){var p=!0;wa(i)}else p=!1;if(_s(i,f),i.stateNode===null)Va(t,i),Sh(i,o,u),ec(i,o,u,f),u=!0;else if(t===null){var M=i.stateNode,O=i.memoizedProps;M.props=O;var B=M.context,se=o.contextType;typeof se=="object"&&se!==null?se=Kn(se):(se=Dn(o)?Cr:fn.current,se=fs(i,se));var be=o.getDerivedStateFromProps,Ue=typeof be=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ue||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(O!==u||B!==se)&&Mh(i,M,u,se),er=!1;var Ee=i.memoizedState;M.state=Ee,Na(i,u,M,f),B=i.memoizedState,O!==u||Ee!==B||Ln.current||er?(typeof be=="function"&&(Ju(i,o,be,u),B=i.memoizedState),(O=er||yh(i,o,O,u,Ee,B,se))?(Ue||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=se,u=O):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,$d(t,i),O=i.memoizedProps,se=i.type===i.elementType?O:oi(i.type,O),M.props=se,Ue=i.pendingProps,Ee=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=Kn(B):(B=Dn(o)?Cr:fn.current,B=fs(i,B));var Ve=o.getDerivedStateFromProps;(be=typeof Ve=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(O!==Ue||Ee!==B)&&Mh(i,M,u,B),er=!1,Ee=i.memoizedState,M.state=Ee,Na(i,u,M,f);var $e=i.memoizedState;O!==Ue||Ee!==$e||Ln.current||er?(typeof Ve=="function"&&(Ju(i,o,Ve,u),$e=i.memoizedState),(se=er||yh(i,o,se,u,Ee,$e,B)||!1)?(be||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,$e,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,$e,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$e),M.props=u,M.state=$e,M.context=B,u=se):(typeof M.componentDidUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),u=!1)}return rc(t,i,o,u,p,f)}function rc(t,i,o,u,f,p){Dh(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&zd(i,o,!1),Li(t,i,p);u=i.stateNode,n_.current=i;var O=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,O,p)):xn(t,i,O,p),i.memoizedState=u.state,f&&zd(i,o,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Fd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Fd(t,i.context,!1),Hu(t,i.containerInfo)}function Ih(t,i,o,u,f){return ps(),Nu(f),i.flags|=256,xn(t,i,o,u),i.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,i,o){var u=i.pendingProps,f=Gt.current,p=!1,M=(i.flags&128)!==0,O;if((O=M)||(O=t!==null&&t.memoizedState===null?!1:(f&2)!==0),O?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Lt(Gt,f&1),t===null)return Uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=tl(M,u,0,null),t=zr(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=oc(o),i.memoizedState=sc,t):ac(i,M));if(f=t.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return i_(t,i,M,u,O,f,o);if(p){p=u.fallback,M=i.mode,f=t.child,O=f.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=ar(f,B),u.subtreeFlags=f.subtreeFlags&14680064),O!==null?p=ar(O,p):(p=zr(p,M,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=t.child.memoizedState,M=M===null?oc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=sc,u}return p=t.child,t=p.sibling,u=ar(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function ac(t,i){return i=tl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ga(t,i,o,u){return u!==null&&Nu(u),ms(i,t.child,null,o),t=ac(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function i_(t,i,o,u,f,p,M){if(o)return i.flags&256?(i.flags&=-257,u=tc(Error(n(422))),Ga(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=tl({mode:"visible",children:u.children},f,0,null),p=zr(p,f,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&ms(i,t.child,null,M),i.child.memoizedState=oc(M),i.memoizedState=sc,p);if((i.mode&1)===0)return Ga(t,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var O=u.dgst;return u=O,p=Error(n(419)),u=tc(p,u,void 0),Ga(t,i,M,u)}if(O=(M&t.childLanes)!==0,Un||O){if(u=rn,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,bi(t,f),ui(u,t,f,-1))}return Ec(),u=tc(Error(n(421))),Ga(t,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=g_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Hn=Ki(f.nextSibling),Bn=i,Bt=!0,si=null,t!==null&&(qn[$n++]=Ri,qn[$n++]=Ci,qn[$n++]=br,Ri=t.id,Ci=t.overflow,br=i),i=ac(i,u.children),i.flags|=4096,i)}function Oh(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),zu(t.return,i,o)}function lc(t,i,o,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function zh(t,i,o){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(xn(t,i,u.children,o),u=Gt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,o,i);else if(t.tag===19)Oh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Lt(Gt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Ia(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),lc(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ia(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}lc(i,!0,o,null,p);break;case"together":lc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function r_(t,i,o){switch(i.tag){case 3:Nh(i),ps();break;case 5:Qd(i);break;case 1:Dn(i.type)&&wa(i);break;case 4:Hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Lt(La,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(Gt,Gt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Fh(t,i,o):(Lt(Gt,Gt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Lt(Gt,Gt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return zh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Lt(Gt,Gt.current),u)break;return null;case 22:case 23:return i.lanes=0,Lh(t,i,o)}return Li(t,i,o)}var kh,uc,Bh,Hh;kh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uc=function(){},Bh=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Dr(_i.current);var p=null;switch(o){case"input":f=et(t,f),u=et(t,u),p=[];break;case"select":f=q({},f,{value:void 0}),u=q({},u,{value:void 0}),p=[];break;case"textarea":f=Pe(t,f),u=Pe(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ma)}U(o,u);var M;o=null;for(se in f)if(!u.hasOwnProperty(se)&&f.hasOwnProperty(se)&&f[se]!=null)if(se==="style"){var O=f[se];for(M in O)O.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?p||(p=[]):(p=p||[]).push(se,null));for(se in u){var B=u[se];if(O=f!=null?f[se]:void 0,u.hasOwnProperty(se)&&B!==O&&(B!=null||O!=null))if(se==="style")if(O){for(M in O)!O.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&O[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(p||(p=[]),p.push(se,o)),o=B;else se==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,O=O?O.__html:void 0,B!=null&&O!==B&&(p=p||[]).push(se,B)):se==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(se,""+B):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(B!=null&&se==="onScroll"&&Ut("scroll",t),p||O===B||(p=[])):(p=p||[]).push(se,B))}o&&(p=p||[]).push("style",o);var se=p;(i.updateQueue=se)&&(i.flags|=4)}},Hh=function(t,i,o,u){o!==u&&(i.flags|=4)};function Do(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function s_(t,i,o){var u=i.pendingProps;switch(Lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return Dn(i.type)&&Ta(),hn(i),null;case 3:return u=i.stateNode,vs(),Nt(Ln),Nt(fn),Wu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(ba(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(yc(si),si=null))),uc(t,i),hn(i),null;case 5:Gu(i);var f=Dr(Ro.current);if(o=i.type,t!==null&&i.stateNode!=null)Bh(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Dr(_i.current),ba(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[gi]=i,u[Mo]=p,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(f=0;f<xo.length;f++)Ut(xo[f],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":st(u,p),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",u);break;case"textarea":Ae(u,p),Ut("invalid",u)}U(o,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var O=p[M];M==="children"?typeof O=="string"?u.textContent!==O&&(p.suppressHydrationWarning!==!0&&Sa(u.textContent,O,t),f=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(p.suppressHydrationWarning!==!0&&Sa(u.textContent,O,t),f=["children",""+O]):a.hasOwnProperty(M)&&O!=null&&M==="onScroll"&&Ut("scroll",u)}switch(o){case"input":ft(u),at(u,p,!0);break;case"textarea":ft(u),he(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ma)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Te(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(o,{is:u.is}):(t=M.createElement(o),o==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,o),t[gi]=i,t[Mo]=u,kh(t,i,!1,!1),i.stateNode=t;e:{switch(M=te(o,u),o){case"dialog":Ut("cancel",t),Ut("close",t),f=u;break;case"iframe":case"object":case"embed":Ut("load",t),f=u;break;case"video":case"audio":for(f=0;f<xo.length;f++)Ut(xo[f],t);f=u;break;case"source":Ut("error",t),f=u;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),f=u;break;case"details":Ut("toggle",t),f=u;break;case"input":st(t,u),f=et(t,u),Ut("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=q({},u,{value:void 0}),Ut("invalid",t);break;case"textarea":Ae(t,u),f=Pe(t,u),Ut("invalid",t);break;default:f=u}U(o,f),O=f;for(p in O)if(O.hasOwnProperty(p)){var B=O[p];p==="style"?_e(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&We(t,B)):p==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&me(t,B):typeof B=="number"&&me(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Ut("scroll",t):B!=null&&w(t,p,B,M))}switch(o){case"input":ft(t),at(t,u,!1);break;case"textarea":ft(t),he(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ze(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?J(t,!!u.multiple,p,!1):u.defaultValue!=null&&J(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ma)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Hh(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(Ro.current),Dr(_i.current),ba(i)){if(u=i.stateNode,o=i.memoizedProps,u[gi]=i,(p=u.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:Sa(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return hn(i),null;case 13:if(Nt(Gt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wd(),ps(),i.flags|=98560,p=!1;else if(p=ba(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[gi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),p=!1}else si!==null&&(yc(si),si=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?Zt===0&&(Zt=3):Ec())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return vs(),uc(t,i),t===null&&yo(i.stateNode.containerInfo),hn(i),null;case 10:return Ou(i.type._context),hn(i),null;case 17:return Dn(i.type)&&Ta(),hn(i),null;case 19:if(Nt(Gt),p=i.memoizedState,p===null)return hn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Do(p,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ia(t),M!==null){for(i.flags|=128,Do(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Gt,Gt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Xe()>Ms&&(i.flags|=128,u=!0,Do(p,!1),i.lanes=4194304)}else{if(!u)if(t=Ia(M),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Bt)return hn(i),null}else 2*Xe()-p.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,u=!0,Do(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Xe(),i.sibling=null,o=Gt.current,Lt(Gt,u?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return Mc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function o_(t,i){switch(Lu(i),i.tag){case 1:return Dn(i.type)&&Ta(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),Nt(Ln),Nt(fn),Wu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Gu(i),null;case 13:if(Nt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(Gt),null;case 4:return vs(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var Wa=!1,pn=!1,a_=typeof WeakSet=="function"?WeakSet:Set,je=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xt(t,i,u)}else o.current=null}function cc(t,i,o){try{o()}catch(u){Xt(t,i,u)}}var Gh=!1;function l_(t,i){if(Mu=ca,t=yd(),pu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,O=-1,B=-1,se=0,be=0,Ue=t,Ee=null;t:for(;;){for(var Ve;Ue!==o||f!==0&&Ue.nodeType!==3||(O=M+f),Ue!==p||u!==0&&Ue.nodeType!==3||(B=M+u),Ue.nodeType===3&&(M+=Ue.nodeValue.length),(Ve=Ue.firstChild)!==null;)Ee=Ue,Ue=Ve;for(;;){if(Ue===t)break t;if(Ee===o&&++se===f&&(O=M),Ee===p&&++be===u&&(B=M),(Ve=Ue.nextSibling)!==null)break;Ue=Ee,Ee=Ue.parentNode}Ue=Ve}o=O===-1||B===-1?null:{start:O,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Eu={focusedElem:t,selectionRange:o},ca=!1,je=i;je!==null;)if(i=je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,je=t;else for(;je!==null;){i=je;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ke=$e.memoizedProps,Yt=$e.memoizedState,K=i.stateNode,V=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:oi(i.type,Ke),Yt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Fe){Xt(i,i.return,Fe)}if(t=i.sibling,t!==null){t.return=i.return,je=t;break}je=i.return}return $e=Gh,Gh=!1,$e}function Uo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&cc(i,o,p)}f=f.next}while(f!==u)}}function Xa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function fc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Vh(t){var i=t.alternate;i!==null&&(t.alternate=null,Vh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[Mo],delete i[Ru],delete i[W0],delete i[X0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wh(t){return t.tag===5||t.tag===3||t.tag===4}function Xh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ma));else if(u!==4&&(t=t.child,t!==null))for(dc(t,i,o),t=t.sibling;t!==null;)dc(t,i,o),t=t.sibling}function hc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(hc(t,i,o),t=t.sibling;t!==null;)hc(t,i,o),t=t.sibling}var an=null,ai=!1;function nr(t,i,o){for(o=o.child;o!==null;)jh(t,i,o),o=o.sibling}function jh(t,i,o){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(bn,o)}catch{}switch(o.tag){case 5:pn||ys(o,i);case 6:var u=an,f=ai;an=null,nr(t,i,o),an=u,ai=f,an!==null&&(ai?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ai?(t=an,o=o.stateNode,t.nodeType===8?Au(t.parentNode,o):t.nodeType===1&&Au(t,o),co(t)):Au(an,o.stateNode));break;case 4:u=an,f=ai,an=o.stateNode.containerInfo,ai=!0,nr(t,i,o),an=u,ai=f;break;case 0:case 11:case 14:case 15:if(!pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&cc(o,i,M),f=f.next}while(f!==u)}nr(t,i,o);break;case 1:if(!pn&&(ys(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(O){Xt(o,i,O)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(pn=(u=pn)||o.memoizedState!==null,nr(t,i,o),pn=u):nr(t,i,o);break;default:nr(t,i,o)}}function Yh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new a_),i.forEach(function(u){var f=__.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function li(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var p=t,M=i,O=M;e:for(;O!==null;){switch(O.tag){case 5:an=O.stateNode,ai=!1;break e;case 3:an=O.stateNode.containerInfo,ai=!0;break e;case 4:an=O.stateNode.containerInfo,ai=!0;break e}O=O.return}if(an===null)throw Error(n(160));jh(p,M,f),an=null,ai=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(se){Xt(f,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qh(i,t),i=i.sibling}function qh(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(i,t),xi(t),u&4){try{Uo(3,t,t.return),Xa(3,t)}catch(Ke){Xt(t,t.return,Ke)}try{Uo(5,t,t.return)}catch(Ke){Xt(t,t.return,Ke)}}break;case 1:li(i,t),xi(t),u&512&&o!==null&&ys(o,o.return);break;case 5:if(li(i,t),xi(t),u&512&&o!==null&&ys(o,o.return),t.flags&32){var f=t.stateNode;try{me(f,"")}catch(Ke){Xt(t,t.return,Ke)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,O=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{O==="input"&&p.type==="radio"&&p.name!=null&&Ye(f,p),te(O,M);var se=te(O,p);for(M=0;M<B.length;M+=2){var be=B[M],Ue=B[M+1];be==="style"?_e(f,Ue):be==="dangerouslySetInnerHTML"?We(f,Ue):be==="children"?me(f,Ue):w(f,be,Ue,se)}switch(O){case"input":wt(f,p);break;case"textarea":De(f,p);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ve=p.value;Ve!=null?J(f,!!p.multiple,Ve,!1):Ee!==!!p.multiple&&(p.defaultValue!=null?J(f,!!p.multiple,p.defaultValue,!0):J(f,!!p.multiple,p.multiple?[]:"",!1))}f[Mo]=p}catch(Ke){Xt(t,t.return,Ke)}}break;case 6:if(li(i,t),xi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Ke){Xt(t,t.return,Ke)}}break;case 3:if(li(i,t),xi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(Ke){Xt(t,t.return,Ke)}break;case 4:li(i,t),xi(t);break;case 13:li(i,t),xi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(gc=Xe())),u&4&&Yh(t);break;case 22:if(be=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(se=pn)||be,li(i,t),pn=se):li(i,t),xi(t),u&8192){if(se=t.memoizedState!==null,(t.stateNode.isHidden=se)&&!be&&(t.mode&1)!==0)for(je=t,be=t.child;be!==null;){for(Ue=je=be;je!==null;){switch(Ee=je,Ve=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Uo(4,Ee,Ee.return);break;case 1:ys(Ee,Ee.return);var $e=Ee.stateNode;if(typeof $e.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{i=u,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ke){Xt(u,o,Ke)}}break;case 5:ys(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Zh(Ue);continue}}Ve!==null?(Ve.return=Ee,je=Ve):Zh(Ue)}be=be.sibling}e:for(be=null,Ue=t;;){if(Ue.tag===5){if(be===null){be=Ue;try{f=Ue.stateNode,se?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(O=Ue.stateNode,B=Ue.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,O.style.display=Me("display",M))}catch(Ke){Xt(t,t.return,Ke)}}}else if(Ue.tag===6){if(be===null)try{Ue.stateNode.nodeValue=se?"":Ue.memoizedProps}catch(Ke){Xt(t,t.return,Ke)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===t)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===t)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===t)break e;be===Ue&&(be=null),Ue=Ue.return}be===Ue&&(be=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:li(i,t),xi(t),u&4&&Yh(t);break;case 21:break;default:li(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Wh(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(me(f,""),u.flags&=-33);var p=Xh(t);hc(t,p,f);break;case 3:case 4:var M=u.stateNode.containerInfo,O=Xh(t);dc(t,O,M);break;default:throw Error(n(161))}}catch(B){Xt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function u_(t,i,o){je=t,$h(t)}function $h(t,i,o){for(var u=(t.mode&1)!==0;je!==null;){var f=je,p=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Wa;if(!M){var O=f.alternate,B=O!==null&&O.memoizedState!==null||pn;O=Wa;var se=pn;if(Wa=M,(pn=B)&&!se)for(je=f;je!==null;)M=je,B=M.child,M.tag===22&&M.memoizedState!==null?Qh(f):B!==null?(B.return=M,je=B):Qh(f);for(;p!==null;)je=p,$h(p),p=p.sibling;je=f,Wa=O,pn=se}Kh(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,je=p):Kh(t)}}function Kh(t){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Xa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!pn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:oi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Zd(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Zd(i,M,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var be=se.memoizedState;if(be!==null){var Ue=be.dehydrated;Ue!==null&&co(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&fc(i)}catch(Ee){Xt(i,i.return,Ee)}}if(i===t){je=null;break}if(o=i.sibling,o!==null){o.return=i.return,je=o;break}je=i.return}}function Zh(t){for(;je!==null;){var i=je;if(i===t){je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,je=o;break}je=i.return}}function Qh(t){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Xa(4,i)}catch(B){Xt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){Xt(i,f,B)}}var p=i.return;try{fc(i)}catch(B){Xt(i,p,B)}break;case 5:var M=i.return;try{fc(i)}catch(B){Xt(i,M,B)}}}catch(B){Xt(i,i.return,B)}if(i===t){je=null;break}var O=i.sibling;if(O!==null){O.return=i.return,je=O;break}je=i.return}}var c_=Math.ceil,ja=P.ReactCurrentDispatcher,pc=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,Mt=0,rn=null,qt=null,ln=0,Gn=0,Ss=Zi(0),Zt=0,No=null,Nr=0,Ya=0,mc=0,Io=null,Nn=null,gc=0,Ms=1/0,Di=null,qa=!1,_c=null,ir=null,$a=!1,rr=null,Ka=0,Fo=0,vc=null,Za=-1,Qa=0;function yn(){return(Mt&6)!==0?Xe():Za!==-1?Za:Za=Xe()}function sr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&ln!==0?ln&-ln:Y0.transition!==null?(Qa===0&&(Qa=aa()),Qa):(t=At,t!==0||(t=window.event,t=t===void 0?16:ed(t.type)),t)}function ui(t,i,o,u){if(50<Fo)throw Fo=0,vc=null,Error(n(185));so(t,o,u),((Mt&2)===0||t!==rn)&&(t===rn&&((Mt&2)===0&&(Ya|=o),Zt===4&&or(t,ln)),In(t,u),o===1&&Mt===0&&(i.mode&1)===0&&(Ms=Xe()+500,Aa&&Ji()))}function In(t,i){var o=t.callbackNode;Pn(t,i);var u=Yn(t,t===rn?ln:0);if(u===0)o!==null&&Ge(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Ge(o),i===1)t.tag===0?j0(ep.bind(null,t)):kd(ep.bind(null,t)),G0(function(){(Mt&6)===0&&Ji()}),o=null;else{switch(jf(u)){case 1:o=ut;break;case 4:o=ct;break;case 16:o=Pt;break;case 536870912:o=jt;break;default:o=Pt}o=lp(o,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Jh(t,i){if(Za=-1,Qa=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var u=Yn(t,t===rn?ln:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Ja(t,u);else{i=u;var f=Mt;Mt|=2;var p=np();(rn!==t||ln!==i)&&(Di=null,Ms=Xe()+500,Fr(t,i));do try{h_();break}catch(O){tp(t,O)}while(!0);Fu(),ja.current=p,Mt=f,qt!==null?i=0:(rn=null,ln=0,i=Zt)}if(i!==0){if(i===2&&(f=Ar(t),f!==0&&(u=f,i=xc(t,f))),i===1)throw o=No,Fr(t,0),or(t,u),In(t,Xe()),o;if(i===6)or(t,u);else{if(f=t.current.alternate,(u&30)===0&&!f_(f)&&(i=Ja(t,u),i===2&&(p=Ar(t),p!==0&&(u=p,i=xc(t,p))),i===1))throw o=No,Fr(t,0),or(t,u),In(t,Xe()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Nn,Di);break;case 3:if(or(t,u),(u&130023424)===u&&(i=gc+500-Xe(),10<i)){if(Yn(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){yn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=wu(Or.bind(null,t,Nn,Di),i);break}Or(t,Nn,Di);break;case 4:if(or(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var M=31-vn(u);p=1<<M,M=i[M],M>f&&(f=M),u&=~p}if(u=f,u=Xe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*c_(u/1960))-u,10<u){t.timeoutHandle=wu(Or.bind(null,t,Nn,Di),u);break}Or(t,Nn,Di);break;case 5:Or(t,Nn,Di);break;default:throw Error(n(329))}}}return In(t,Xe()),t.callbackNode===o?Jh.bind(null,t):null}function xc(t,i){var o=Io;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Ja(t,i),t!==2&&(i=Nn,Nn=o,i!==null&&yc(i)),t}function yc(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function f_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!ri(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~mc,i&=~Ya,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-vn(i),u=1<<o;t[o]=-1,i&=~u}}function ep(t){if((Mt&6)!==0)throw Error(n(327));Es();var i=Yn(t,0);if((i&1)===0)return In(t,Xe()),null;var o=Ja(t,i);if(t.tag!==0&&o===2){var u=Ar(t);u!==0&&(i=u,o=xc(t,u))}if(o===1)throw o=No,Fr(t,0),or(t,i),In(t,Xe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Nn,Di),In(t,Xe()),null}function Sc(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(Ms=Xe()+500,Aa&&Ji())}}function Ir(t){rr!==null&&rr.tag===0&&(Mt&6)===0&&Es();var i=Mt;Mt|=1;var o=Qn.transition,u=At;try{if(Qn.transition=null,At=1,t)return t()}finally{At=u,Qn.transition=o,Mt=i,(Mt&6)===0&&Ji()}}function Mc(){Gn=Ss.current,Nt(Ss)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,H0(o)),qt!==null)for(o=qt.return;o!==null;){var u=o;switch(Lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ta();break;case 3:vs(),Nt(Ln),Nt(fn),Wu();break;case 5:Gu(u);break;case 4:vs();break;case 13:Nt(Gt);break;case 19:Nt(Gt);break;case 10:Ou(u.type._context);break;case 22:case 23:Mc()}o=o.return}if(rn=t,qt=t=ar(t.current,null),ln=Gn=i,Zt=0,No=null,mc=Ya=Nr=0,Nn=Io=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,p=o.pending;if(p!==null){var M=p.next;p.next=f,u.next=M}o.pending=u}Lr=null}return t}function tp(t,i){do{var o=qt;try{if(Fu(),Fa.current=Ba,Oa){for(var u=Vt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Oa=!1}if(Ur=0,nn=Kt=Vt=null,Co=!1,bo=0,pc.current=null,o===null||o.return===null){Zt=1,No=i,qt=null;break}e:{var p=t,M=o.return,O=o,B=i;if(i=ln,O.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var se=B,be=O,Ue=be.tag;if((be.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Ee=be.alternate;Ee?(be.updateQueue=Ee.updateQueue,be.memoizedState=Ee.memoizedState,be.lanes=Ee.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ve=Ah(M);if(Ve!==null){Ve.flags&=-257,Rh(Ve,M,O,p,i),Ve.mode&1&&wh(p,se,i),i=Ve,B=se;var $e=i.updateQueue;if($e===null){var Ke=new Set;Ke.add(B),i.updateQueue=Ke}else $e.add(B);break e}else{if((i&1)===0){wh(p,se,i),Ec();break e}B=Error(n(426))}}else if(Bt&&O.mode&1){var Yt=Ah(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Rh(Yt,M,O,p,i),Nu(xs(B,O));break e}}p=B=xs(B,O),Zt!==4&&(Zt=2),Io===null?Io=[p]:Io.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Eh(p,B,i);Kd(p,K);break e;case 1:O=B;var V=p.type,ee=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(ir===null||!ir.has(ee)))){p.flags|=65536,i&=-i,p.lanes|=i;var Fe=Th(p,O,i);Kd(p,Fe);break e}}p=p.return}while(p!==null)}rp(o)}catch(Je){i=Je,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function np(){var t=ja.current;return ja.current=Ba,t===null?Ba:t}function Ec(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||(Nr&268435455)===0&&(Ya&268435455)===0||or(rn,ln)}function Ja(t,i){var o=Mt;Mt|=2;var u=np();(rn!==t||ln!==i)&&(Di=null,Fr(t,i));do try{d_();break}catch(f){tp(t,f)}while(!0);if(Fu(),Mt=o,ja.current=u,qt!==null)throw Error(n(261));return rn=null,ln=0,Zt}function d_(){for(;qt!==null;)ip(qt)}function h_(){for(;qt!==null&&!tt();)ip(qt)}function ip(t){var i=ap(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?rp(t):qt=i,pc.current=null}function rp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=s_(o,i,Gn),o!==null){qt=o;return}}else{if(o=o_(o,i),o!==null){o.flags&=32767,qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Or(t,i,o){var u=At,f=Qn.transition;try{Qn.transition=null,At=1,p_(t,i,o,u)}finally{Qn.transition=f,At=u}return null}function p_(t,i,o,u){do Es();while(rr!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(qg(t,p),t===rn&&(qt=rn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||$a||($a=!0,lp(Pt,function(){return Es(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Qn.transition,Qn.transition=null;var M=At;At=1;var O=Mt;Mt|=4,pc.current=null,l_(t,o),qh(o,t),N0(Eu),ca=!!Mu,Eu=Mu=null,t.current=o,u_(o),ot(),Mt=O,At=M,Qn.transition=p}else t.current=o;if($a&&($a=!1,rr=t,Ka=f),p=t.pendingLanes,p===0&&(ir=null),mt(o.stateNode),In(t,Xe()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(qa)throw qa=!1,t=_c,_c=null,t;return(Ka&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===vc?Fo++:(Fo=0,vc=t):Fo=0,Ji(),null}function Es(){if(rr!==null){var t=jf(Ka),i=Qn.transition,o=At;try{if(Qn.transition=null,At=16>t?16:t,rr===null)var u=!1;else{if(t=rr,rr=null,Ka=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,je=t.current;je!==null;){var p=je,M=p.child;if((je.flags&16)!==0){var O=p.deletions;if(O!==null){for(var B=0;B<O.length;B++){var se=O[B];for(je=se;je!==null;){var be=je;switch(be.tag){case 0:case 11:case 15:Uo(8,be,p)}var Ue=be.child;if(Ue!==null)Ue.return=be,je=Ue;else for(;je!==null;){be=je;var Ee=be.sibling,Ve=be.return;if(Vh(be),be===se){je=null;break}if(Ee!==null){Ee.return=Ve,je=Ee;break}je=Ve}}}var $e=p.alternate;if($e!==null){var Ke=$e.child;if(Ke!==null){$e.child=null;do{var Yt=Ke.sibling;Ke.sibling=null,Ke=Yt}while(Ke!==null)}}je=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,je=M;else e:for(;je!==null;){if(p=je,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Uo(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,je=K;break e}je=p.return}}var V=t.current;for(je=V;je!==null;){M=je;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,je=ee;else e:for(M=V;je!==null;){if(O=je,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Xa(9,O)}}catch(Je){Xt(O,O.return,Je)}if(O===M){je=null;break e}var Fe=O.sibling;if(Fe!==null){Fe.return=O.return,je=Fe;break e}je=O.return}}if(Mt=f,Ji(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(bn,t)}catch{}u=!0}return u}finally{At=o,Qn.transition=i}}return!1}function sp(t,i,o){i=xs(o,i),i=Eh(t,i,1),t=tr(t,i,1),i=yn(),t!==null&&(so(t,1,i),In(t,i))}function Xt(t,i,o){if(t.tag===3)sp(t,t,o);else for(;i!==null;){if(i.tag===3){sp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ir===null||!ir.has(u))){t=xs(o,t),t=Th(i,t,1),i=tr(i,t,1),t=yn(),i!==null&&(so(i,1,t),In(i,t));break}}i=i.return}}function m_(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&o,rn===t&&(ln&o)===o&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>Xe()-gc?Fr(t,0):mc|=o),In(t,i)}function op(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vi,Vi<<=1,(Vi&130023424)===0&&(Vi=4194304)));var o=yn();t=bi(t,i),t!==null&&(so(t,i,o),In(t,o))}function g_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),op(t,o)}function __(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),op(t,o)}var ap;ap=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Un=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Un=!1,r_(t,i,o);Un=(t.flags&131072)!==0}else Un=!1,Bt&&(i.flags&1048576)!==0&&Bd(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Va(t,i),t=i.pendingProps;var f=fs(i,fn.current);_s(i,o),f=Yu(null,i,u,t,f,o);var p=qu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(u)?(p=!0,wa(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Bu(i),f.updater=Ha,i.stateNode=f,f._reactInternals=i,ec(i,u,t,o),i=rc(null,i,u,!0,p,o)):(i.tag=0,Bt&&p&&Pu(i),xn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Va(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=x_(u),t=oi(u,t),f){case 0:i=ic(null,i,u,t,o);break e;case 1:i=Uh(null,i,u,t,o);break e;case 11:i=Ch(null,i,u,t,o);break e;case 14:i=bh(null,i,u,oi(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),ic(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),Uh(t,i,u,f,o);case 3:e:{if(Nh(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,$d(t,i),Na(i,u,null,o);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=xs(Error(n(423)),i),i=Ih(t,i,u,o,f);break e}else if(u!==f){f=xs(Error(n(424)),i),i=Ih(t,i,u,o,f);break e}else for(Hn=Ki(i.stateNode.containerInfo.firstChild),Bn=i,Bt=!0,si=null,o=Yd(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),u===f){i=Li(t,i,o);break e}xn(t,i,u,o)}i=i.child}return i;case 5:return Qd(i),t===null&&Uu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,Tu(u,f)?M=null:p!==null&&Tu(u,p)&&(i.flags|=32),Dh(t,i),xn(t,i,M,o),i.child;case 6:return t===null&&Uu(i),null;case 13:return Fh(t,i,o);case 4:return Hu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ms(i,null,u,o):xn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),Ch(t,i,u,f,o);case 7:return xn(t,i,i.pendingProps,o),i.child;case 8:return xn(t,i,i.pendingProps.children,o),i.child;case 12:return xn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,Lt(La,u._currentValue),u._currentValue=M,p!==null)if(ri(p.value,M)){if(p.children===f.children&&!Ln.current){i=Li(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var O=p.dependencies;if(O!==null){M=p.child;for(var B=O.firstContext;B!==null;){if(B.context===u){if(p.tag===1){B=Pi(-1,o&-o),B.tag=2;var se=p.updateQueue;if(se!==null){se=se.shared;var be=se.pending;be===null?B.next=B:(B.next=be.next,be.next=B),se.pending=B}}p.lanes|=o,B=p.alternate,B!==null&&(B.lanes|=o),zu(p.return,o,i),O.lanes|=o;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,O=M.alternate,O!==null&&(O.lanes|=o),zu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}xn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,_s(i,o),f=Kn(f),u=u(f),i.flags|=1,xn(t,i,u,o),i.child;case 14:return u=i.type,f=oi(u,i.pendingProps),f=oi(u.type,f),bh(t,i,u,f,o);case 15:return Ph(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),Va(t,i),i.tag=1,Dn(u)?(t=!0,wa(i)):t=!1,_s(i,o),Sh(i,u,f),ec(i,u,f,o),rc(null,i,u,!0,t,o);case 19:return zh(t,i,o);case 22:return Lh(t,i,o)}throw Error(n(156,i.tag))};function lp(t,i){return oe(t,i)}function v_(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,o,u){return new v_(t,i,o,u)}function Tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function x_(t){if(typeof t=="function")return Tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fe)return 11;if(t===ne)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=Jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function el(t,i,o,u,f,p){var M=2;if(u=t,typeof t=="function")Tc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return zr(o.children,f,p,i);case re:M=8,f|=8;break;case R:return t=Jn(12,o,i,f|2),t.elementType=R,t.lanes=p,t;case we:return t=Jn(13,o,i,f),t.elementType=we,t.lanes=p,t;case W:return t=Jn(19,o,i,f),t.elementType=W,t.lanes=p,t;case de:return tl(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:M=10;break e;case ae:M=9;break e;case fe:M=11;break e;case ne:M=14;break e;case le:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(M,o,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function zr(t,i,o,u){return t=Jn(7,t,u,i),t.lanes=o,t}function tl(t,i,o,u){return t=Jn(22,t,u,i),t.elementType=de,t.lanes=o,t.stateNode={isHidden:!1},t}function wc(t,i,o){return t=Jn(6,t,null,i),t.lanes=o,t}function Ac(t,i,o){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function y_(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Rc(t,i,o,u,f,p,M,O,B){return t=new y_(t,i,o,O,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(p),t}function S_(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function up(t){if(!t)return Qi;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Dn(o))return Od(t,o,i)}return i}function cp(t,i,o,u,f,p,M,O,B){return t=Rc(o,u,!0,t,f,p,M,O,B),t.context=up(null),o=t.current,u=yn(),f=sr(o),p=Pi(u,f),p.callback=i??null,tr(o,p,f),t.current.lanes=f,so(t,f,u),In(t,u),t}function nl(t,i,o,u){var f=i.current,p=yn(),M=sr(f);return o=up(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=tr(f,i,M),t!==null&&(ui(t,f,M,p),Ua(t,f,M)),M}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Cc(t,i){fp(t,i),(t=t.alternate)&&fp(t,i)}function M_(){return null}var dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function bc(t){this._internalRoot=t}rl.prototype.render=bc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));nl(t,i,null,null)},rl.prototype.unmount=bc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){nl(null,t,null,null)}),i[wi]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var i=$f();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&Qf(t)}};function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function E_(t,i,o,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var se=il(M);p.call(se)}}var M=cp(i,u,t,0,null,!1,!1,"",hp);return t._reactRootContainer=M,t[wi]=M.current,yo(t.nodeType===8?t.parentNode:t),Ir(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var O=u;u=function(){var se=il(B);O.call(se)}}var B=Rc(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=B,t[wi]=B.current,yo(t.nodeType===8?t.parentNode:t),Ir(function(){nl(i,B,o,u)}),B}function ol(t,i,o,u,f){var p=o._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var O=f;f=function(){var B=il(M);O.call(B)}}nl(i,M,t,f)}else M=E_(o,i,t,f,u);return il(M)}Yf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Wt(i.pendingLanes);o!==0&&(eu(i,o|1),In(i,Xe()),(Mt&6)===0&&(Ms=Xe()+500,Ji()))}break;case 13:Ir(function(){var u=bi(t,1);if(u!==null){var f=yn();ui(u,t,1,f)}}),Cc(t,1)}},tu=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var o=yn();ui(i,t,134217728,o)}Cc(t,134217728)}},qf=function(t){if(t.tag===13){var i=sr(t),o=bi(t,i);if(o!==null){var u=yn();ui(o,t,i,u)}Cc(t,i)}},$f=function(){return At},Kf=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},ge=function(t,i,o){switch(i){case"input":if(wt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=Ea(u);if(!f)throw Error(n(90));ie(u),wt(u,f)}}}break;case"textarea":De(t,o);break;case"select":i=o.value,i!=null&&J(t,!!o.multiple,i,!1)}},dt=Sc,ht=Ir;var T_={usingClientEntryPoint:!1,Events:[Eo,us,Ea,qe,Qe,Sc]},Oo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w_={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ue(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||M_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{bn=al.inject(w_),St=al}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_,Fn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(i))throw Error(n(200));return S_(t,i,null,o)},Fn.createRoot=function(t,i){if(!Pc(t))throw Error(n(299));var o=!1,u="",f=dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Rc(t,1,!1,null,null,o,!1,u,f),t[wi]=i.current,yo(t.nodeType===8?t.parentNode:t),new bc(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ue(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Ir(t)},Fn.hydrate=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!0,o)},Fn.hydrateRoot=function(t,i,o){if(!Pc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,p="",M=dp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=cp(i,null,t,1,o??null,f,!1,p,M),t[wi]=i.current,yo(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new rl(i)},Fn.render=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!1,o)},Fn.unmountComponentAtNode=function(t){if(!sl(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Fn.unstable_batchedUpdates=Sc,Fn.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!sl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ol(t,i,o,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Sp;function N_(){if(Sp)return Uc.exports;Sp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Uc.exports=U_(),Uc.exports}var Mp;function I_(){if(Mp)return ll;Mp=1;var s=N_();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var F_=I_();const O_=dg(F_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="160",Ts={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z_=0,Ep=1,k_=2,hg=1,B_=2,zi=3,Mr=0,An=1,Si=2,vr=0,Zs=1,Hl=2,Tp=3,wp=4,H_=5,Wr=100,G_=101,V_=102,Ap=103,Rp=104,W_=200,X_=201,j_=202,Y_=203,vf=204,xf=205,q_=206,$_=207,K_=208,Z_=209,Q_=210,J_=211,ev=212,tv=213,nv=214,iv=0,rv=1,sv=2,Gl=3,ov=4,av=5,lv=6,uv=7,pg=0,cv=1,fv=2,xr=0,dv=1,hv=2,pv=3,mg=4,mv=5,gv=6,gg=300,Js=301,eo=302,yf=303,Sf=304,$l=306,Mf=1e3,hi=1001,Ef=1002,En=1003,Cp=1004,Fc=1005,ti=1006,_v=1007,Zo=1008,yr=1009,vv=1010,xv=1011,Nf=1012,_g=1013,gr=1014,_r=1015,Qo=1016,vg=1017,xg=1018,jr=1020,yv=1021,pi=1023,Sv=1024,Mv=1025,Yr=1026,to=1027,Ev=1028,yg=1029,Tv=1030,Sg=1031,Mg=1033,Oc=33776,zc=33777,kc=33778,Bc=33779,bp=35840,Pp=35841,Lp=35842,Dp=35843,Eg=36196,Up=37492,Np=37496,Ip=37808,Fp=37809,Op=37810,zp=37811,kp=37812,Bp=37813,Hp=37814,Gp=37815,Vp=37816,Wp=37817,Xp=37818,jp=37819,Yp=37820,qp=37821,Hc=36492,$p=36494,Kp=36495,wv=36283,Zp=36284,Qp=36285,Jp=36286,Tg=3e3,qr=3001,Av=3200,Rv=3201,wg=0,Cv=1,ii="",Qt="srgb",Hi="srgb-linear",If="display-p3",Kl="display-p3-linear",Vl="linear",It="srgb",Wl="rec709",Xl="p3",As=7680,em=519,bv=512,Pv=513,Lv=514,Ag=515,Dv=516,Uv=517,Nv=518,Iv=519,Tf=35044,Fv=35048,tm="300 es",wf=1035,Bi=2e3,jl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,Af=180/Math.PI;function Sr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function Tn(s,e,n){return Math.max(e,Math.min(n,s))}function Ov(s,e){return(s%e+e)%e}function Gc(s,e,n){return(1-n)*s+n*e}function nm(s){return(s&s-1)===0&&s!==0}function Rf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zv={DEG2RAD:kl};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,n,r,a,l,d,c,h,m){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,m)}set(e,n,r,a,l,d,c,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=n,g[4]=l,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[3],h=r[6],m=r[1],g=r[4],v=r[7],y=r[2],S=r[5],T=r[8],E=a[0],x=a[3],_=a[6],C=a[1],w=a[4],P=a[7],H=a[2],I=a[5],F=a[8];return l[0]=d*E+c*C+h*H,l[3]=d*x+c*w+h*I,l[6]=d*_+c*P+h*F,l[1]=m*E+g*C+v*H,l[4]=m*x+g*w+v*I,l[7]=m*_+g*P+v*F,l[2]=y*E+S*C+T*H,l[5]=y*x+S*w+T*I,l[8]=y*_+S*P+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*c*m-r*l*g+r*c*h+a*l*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=g*d-c*m,y=c*h-g*l,S=m*l-d*h,T=n*v+r*y+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(a*m-g*r)*E,e[2]=(c*r-a*d)*E,e[3]=y*E,e[4]=(g*n-a*h)*E,e[5]=(a*l-c*n)*E,e[6]=S*E,e[7]=(r*h-m*n)*E,e[8]=(d*n-r*l)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,d,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*d+m*c)+d+e,-a*m,a*h,-a*(-m*d+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new yt;function Rg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kv(){const s=Jo("canvas");return s.style.display="block",s}const im={};function Ko(s){s in im||(im[s]=!0,console.warn(s))}const rm=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sm=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Hi]:{transfer:Vl,primaries:Wl,toReference:s=>s,fromReference:s=>s},[Qt]:{transfer:It,primaries:Wl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Kl]:{transfer:Vl,primaries:Xl,toReference:s=>s.applyMatrix3(sm),fromReference:s=>s.applyMatrix3(rm)},[If]:{transfer:It,primaries:Xl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(sm),fromReference:s=>s.applyMatrix3(rm).convertLinearToSRGB()}},Bv=new Set([Hi,Kl]),Rt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Bv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=ul[e].toReference,a=ul[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ul[s].primaries},getTransfer:function(s){return s===ii?Vl:ul[s].transfer}};function Qs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class Cg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=Jo("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Rs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Qs(l[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Qs(n[r]/255)*255):n[r]=Qs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hv=0;class bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?l.push(Xc(a[d].image)):l.push(Xc(a[d]))}else l=Xc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class Rn extends Qr{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=hi,a=hi,l=ti,d=Zo,c=pi,h=yr,m=Rn.DEFAULT_ANISOTROPY,g=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Sr(),this.name="",this.source=new bg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===qr?Qt:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mf:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mf:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?qr:Tg}set encoding(e){Ko("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qr?Qt:ii}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=gg;Rn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],y=h[1],S=h[5],T=h[9],E=h[2],x=h[6],_=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-E)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+E)<.1&&Math.abs(T+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(m+1)/2,P=(S+1)/2,H=(_+1)/2,I=(g+y)/4,F=(v+E)/4,re=(T+x)/4;return w>P&&w>H?w<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(w),a=I/r,l=F/r):P>H?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=I/a,l=re/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=F/l,a=re/l),this.set(r,a,l,n),this}let C=Math.sqrt((x-T)*(x-T)+(v-E)*(v-E)+(y-g)*(y-g));return Math.abs(C)<.001&&(C=1),this.x=(x-T)/C,this.y=(v-E)/C,this.z=(y-g)/C,this.w=Math.acos((m+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vv extends Qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Ko("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===qr?Qt:ii),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Rn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Vv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Pg extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=En,this.minFilter=En,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wv extends Rn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=En,this.minFilter=En,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,d,c){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const y=l[d+0],S=l[d+1],T=l[d+2],E=l[d+3];if(c===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(c===1){e[n+0]=y,e[n+1]=S,e[n+2]=T,e[n+3]=E;return}if(v!==E||h!==y||m!==S||g!==T){let x=1-c;const _=h*y+m*S+g*T+v*E,C=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const H=Math.sqrt(w),I=Math.atan2(H,_*C);x=Math.sin(x*I)/H,c=Math.sin(c*I)/H}const P=c*C;if(h=h*x+y*P,m=m*x+S*P,g=g*x+T*P,v=v*x+E*P,x===1-c){const H=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=H,m*=H,g*=H,v*=H}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,d){const c=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[d],y=l[d+1],S=l[d+2],T=l[d+3];return e[n]=c*T+g*v+h*S-m*y,e[n+1]=h*T+g*y+m*v-c*S,e[n+2]=m*T+g*S+c*y-h*v,e[n+3]=g*T-c*v-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,d=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(a/2),v=c(l/2),y=h(r/2),S=h(a/2),T=h(l/2);switch(d){case"XYZ":this._x=y*g*v+m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v-y*S*T;break;case"YXZ":this._x=y*g*v+m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v+y*S*T;break;case"ZXY":this._x=y*g*v-m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v-y*S*T;break;case"ZYX":this._x=y*g*v-m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v+y*S*T;break;case"YZX":this._x=y*g*v+m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v-y*S*T;break;case"XZY":this._x=y*g*v-m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],d=n[1],c=n[5],h=n[9],m=n[2],g=n[6],v=n[10],y=r+c+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(d-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+m)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(d-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,d=e._w,c=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*c+a*m-l*h,this._y=a*g+d*h+l*c-r*m,this._z=l*g+d*m+r*h-a*c,this._w=d*g-r*c-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),v=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(l),r*Math.cos(l),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,r=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,d=e.y,c=e.z,h=e.w,m=2*(d*a-c*r),g=2*(c*n-l*a),v=2*(l*r-d*n);return this.x=n+h*m+d*v-c*g,this.y=r+h*g+c*m-l*v,this.z=a+h*v+l*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,d=n.x,c=n.y,h=n.z;return this.x=a*h-l*c,this.y=l*d-r*h,this.z=r*c-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new G,om=new Kr;class Jr{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,c=l.count;d<c;d++)e.isMesh===!0?e.getVertexPosition(d,ci):ci.fromBufferAttribute(l,d),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),fl.subVectors(this.max,ko),Cs.subVectors(e.a,ko),bs.subVectors(e.b,ko),Ps.subVectors(e.c,ko),ur.subVectors(bs,Cs),cr.subVectors(Ps,bs),kr.subVectors(Cs,Ps);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-kr.z,kr.y,ur.z,0,-ur.x,cr.z,0,-cr.x,kr.z,0,-kr.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-kr.y,kr.x,0];return!Yc(n,Cs,bs,Ps,fl)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,Cs,bs,Ps,fl))?!1:(dl.crossVectors(ur,cr),n=[dl.x,dl.y,dl.z],Yc(n,Cs,bs,Ps,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new G,new G,new G,new G,new G,new G,new G,new G],ci=new G,cl=new Jr,Cs=new G,bs=new G,Ps=new G,ur=new G,cr=new G,kr=new G,ko=new G,fl=new G,dl=new G,Br=new G;function Yc(s,e,n,r,a){for(let l=0,d=s.length-3;l<=d;l+=3){Br.fromArray(s,l);const c=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),h=e.dot(Br),m=n.dot(Br),g=r.dot(Br);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const Xv=new Jr,Bo=new G,qc=new G;class es{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Xv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(qc)),this.expandByPoint(Bo.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new G,$c=new G,hl=new G,fr=new G,Kc=new G,pl=new G,Zc=new G;class ea{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){$c.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub($c);const l=e.distanceTo(n)*.5,d=-this.direction.dot(hl),c=fr.dot(this.direction),h=-fr.dot(hl),m=fr.lengthSq(),g=Math.abs(1-d*d);let v,y,S,T;if(g>0)if(v=d*h-c,y=d*c-h,T=l*g,v>=0)if(y>=-T)if(y<=T){const E=1/g;v*=E,y*=E,S=v*(v+d*y+2*c)+y*(d*v+y+2*h)+m}else y=l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;else y=-l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;else y<=-T?(v=Math.max(0,-(-d*l+c)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m):y<=T?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+m):(v=Math.max(0,-(d*l+c)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m);else y=d>0?-l:l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy($c).addScaledVector(hl,y),S}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),a=Ni.dot(Ni)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),c=r-d,h=r+d;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,d,c,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),v>=0?(c=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(c=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,a,l){Kc.subVectors(n,e),pl.subVectors(r,e),Zc.crossVectors(Kc,pl);let d=this.direction.dot(Zc),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;fr.subVectors(this.origin,e);const h=c*this.direction.dot(pl.crossVectors(fr,pl));if(h<0)return null;const m=c*this.direction.dot(Kc.cross(fr));if(m<0||h+m>d)return null;const g=-c*fr.dot(Zc);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,r,a,l,d,c,h,m,g,v,y,S,T,E,x){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,m,g,v,y,S,T,E,x)}set(e,n,r,a,l,d,c,h,m,g,v,y,S,T,E,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=d,_[9]=c,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=T,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),d=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),c=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=d*g,S=d*v,T=c*g,E=c*v;n[0]=h*g,n[4]=-h*v,n[8]=m,n[1]=S+T*m,n[5]=y-E*m,n[9]=-c*h,n[2]=E-y*m,n[6]=T+S*m,n[10]=d*h}else if(e.order==="YXZ"){const y=h*g,S=h*v,T=m*g,E=m*v;n[0]=y+E*c,n[4]=T*c-S,n[8]=d*m,n[1]=d*v,n[5]=d*g,n[9]=-c,n[2]=S*c-T,n[6]=E+y*c,n[10]=d*h}else if(e.order==="ZXY"){const y=h*g,S=h*v,T=m*g,E=m*v;n[0]=y-E*c,n[4]=-d*v,n[8]=T+S*c,n[1]=S+T*c,n[5]=d*g,n[9]=E-y*c,n[2]=-d*m,n[6]=c,n[10]=d*h}else if(e.order==="ZYX"){const y=d*g,S=d*v,T=c*g,E=c*v;n[0]=h*g,n[4]=T*m-S,n[8]=y*m+E,n[1]=h*v,n[5]=E*m+y,n[9]=S*m-T,n[2]=-m,n[6]=c*h,n[10]=d*h}else if(e.order==="YZX"){const y=d*h,S=d*m,T=c*h,E=c*m;n[0]=h*g,n[4]=E-y*v,n[8]=T*v+S,n[1]=v,n[5]=d*g,n[9]=-c*g,n[2]=-m*g,n[6]=S*v+T,n[10]=y-E*v}else if(e.order==="XZY"){const y=d*h,S=d*m,T=c*h,E=c*m;n[0]=h*g,n[4]=-v,n[8]=m*g,n[1]=y*v+E,n[5]=d*g,n[9]=S*v-T,n[2]=T*v-S,n[6]=c*g,n[10]=E*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Yv)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),dr.crossVectors(r,Vn),dr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),dr.crossVectors(r,Vn)),dr.normalize(),ml.crossVectors(Vn,dr),a[0]=dr.x,a[4]=ml.x,a[8]=Vn.x,a[1]=dr.y,a[5]=ml.y,a[9]=Vn.y,a[2]=dr.z,a[6]=ml.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[4],h=r[8],m=r[12],g=r[1],v=r[5],y=r[9],S=r[13],T=r[2],E=r[6],x=r[10],_=r[14],C=r[3],w=r[7],P=r[11],H=r[15],I=a[0],F=a[4],re=a[8],R=a[12],D=a[1],ae=a[5],fe=a[9],we=a[13],W=a[2],ne=a[6],le=a[10],de=a[14],Y=a[3],Q=a[7],q=a[11],N=a[15];return l[0]=d*I+c*D+h*W+m*Y,l[4]=d*F+c*ae+h*ne+m*Q,l[8]=d*re+c*fe+h*le+m*q,l[12]=d*R+c*we+h*de+m*N,l[1]=g*I+v*D+y*W+S*Y,l[5]=g*F+v*ae+y*ne+S*Q,l[9]=g*re+v*fe+y*le+S*q,l[13]=g*R+v*we+y*de+S*N,l[2]=T*I+E*D+x*W+_*Y,l[6]=T*F+E*ae+x*ne+_*Q,l[10]=T*re+E*fe+x*le+_*q,l[14]=T*R+E*we+x*de+_*N,l[3]=C*I+w*D+P*W+H*Y,l[7]=C*F+w*ae+P*ne+H*Q,l[11]=C*re+w*fe+P*le+H*q,l[15]=C*R+w*we+P*de+H*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],d=e[1],c=e[5],h=e[9],m=e[13],g=e[2],v=e[6],y=e[10],S=e[14],T=e[3],E=e[7],x=e[11],_=e[15];return T*(+l*h*v-a*m*v-l*c*y+r*m*y+a*c*S-r*h*S)+E*(+n*h*S-n*m*y+l*d*y-a*d*S+a*m*g-l*h*g)+x*(+n*m*v-n*c*S-l*d*v+r*d*S+l*c*g-r*m*g)+_*(-a*c*g-n*h*v+n*c*y+a*d*v-r*d*y+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=e[9],y=e[10],S=e[11],T=e[12],E=e[13],x=e[14],_=e[15],C=v*x*m-E*y*m+E*h*S-c*x*S-v*h*_+c*y*_,w=T*y*m-g*x*m-T*h*S+d*x*S+g*h*_-d*y*_,P=g*E*m-T*v*m+T*c*S-d*E*S-g*c*_+d*v*_,H=T*v*h-g*E*h-T*c*y+d*E*y+g*c*x-d*v*x,I=n*C+r*w+a*P+l*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=C*F,e[1]=(E*y*l-v*x*l-E*a*S+r*x*S+v*a*_-r*y*_)*F,e[2]=(c*x*l-E*h*l+E*a*m-r*x*m-c*a*_+r*h*_)*F,e[3]=(v*h*l-c*y*l-v*a*m+r*y*m+c*a*S-r*h*S)*F,e[4]=w*F,e[5]=(g*x*l-T*y*l+T*a*S-n*x*S-g*a*_+n*y*_)*F,e[6]=(T*h*l-d*x*l-T*a*m+n*x*m+d*a*_-n*h*_)*F,e[7]=(d*y*l-g*h*l+g*a*m-n*y*m-d*a*S+n*h*S)*F,e[8]=P*F,e[9]=(T*v*l-g*E*l-T*r*S+n*E*S+g*r*_-n*v*_)*F,e[10]=(d*E*l-T*c*l+T*r*m-n*E*m-d*r*_+n*c*_)*F,e[11]=(g*c*l-d*v*l-g*r*m+n*v*m+d*r*S-n*c*S)*F,e[12]=H*F,e[13]=(g*E*a-T*v*a+T*r*y-n*E*y-g*r*x+n*v*x)*F,e[14]=(T*c*a-d*E*a-T*r*h+n*E*h+d*r*x-n*c*x)*F,e[15]=(d*v*a-g*c*a+g*r*h-n*v*h-d*r*y+n*c*y)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,d=e.x,c=e.y,h=e.z,m=l*d,g=l*c;return this.set(m*d+r,m*c-a*h,m*h+a*c,0,m*c+a*h,g*c+r,g*h-a*d,0,m*h-a*c,g*h+a*d,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,d=n._y,c=n._z,h=n._w,m=l+l,g=d+d,v=c+c,y=l*m,S=l*g,T=l*v,E=d*g,x=d*v,_=c*v,C=h*m,w=h*g,P=h*v,H=r.x,I=r.y,F=r.z;return a[0]=(1-(E+_))*H,a[1]=(S+P)*H,a[2]=(T-w)*H,a[3]=0,a[4]=(S-P)*I,a[5]=(1-(y+_))*I,a[6]=(x+C)*I,a[7]=0,a[8]=(T+w)*F,a[9]=(x-C)*F,a[10]=(1-(y+E))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ls.set(a[0],a[1],a[2]).length();const d=Ls.set(a[4],a[5],a[6]).length(),c=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const m=1/l,g=1/d,v=1/c;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,n.setFromRotationMatrix(fi),r.x=l,r.y=d,r.z=c,this}makePerspective(e,n,r,a,l,d,c=Bi){const h=this.elements,m=2*l/(n-e),g=2*l/(r-a),v=(n+e)/(n-e),y=(r+a)/(r-a);let S,T;if(c===Bi)S=-(d+l)/(d-l),T=-2*d*l/(d-l);else if(c===jl)S=-d/(d-l),T=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,d,c=Bi){const h=this.elements,m=1/(n-e),g=1/(r-a),v=1/(d-l),y=(n+e)*m,S=(r+a)*g;let T,E;if(c===Bi)T=(d+l)*v,E=-2*v;else if(c===jl)T=l*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new G,fi=new Dt,jv=new G(0,0,0),Yv=new G(1,1,1),dr=new G,ml=new G,Vn=new G,am=new Dt,lm=new Kr;class Zl{constructor(e=0,n=0,r=0,a=Zl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],c=a[8],h=a[1],m=a[5],g=a[9],v=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zl.DEFAULT_ORDER="XYZ";let Ff=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qv=0;const um=new G,Ds=new Kr,Ii=new Dt,gl=new G,Ho=new G,$v=new G,Kv=new Kr,cm=new G(1,0,0),fm=new G(0,1,0),dm=new G(0,0,1),Zv={type:"added"},Qv={type:"removed"};class Jt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new G,n=new Zl,r=new Kr,a=new G(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Dt},normalMatrix:{value:new yt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,n){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gl.copy(e):gl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ho,gl,this.up):Ii.lookAt(gl,Ho,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Qv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const l=n[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(n){const c=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),v=d(e.shapes),y=d(e.skeletons),S=d(e.animations),T=d(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Jt.DEFAULT_UP=new G(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new G,Fi=new G,Qc=new G,Oi=new G,Us=new G,Ns=new G,hm=new G,Jc=new G,ef=new G,tf=new G;let _l=!1;class ni{constructor(e=new G,n=new G,r=new G){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),di.subVectors(e,n),a.cross(di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){di.subVectors(a,n),Fi.subVectors(r,n),Qc.subVectors(e,n);const d=di.dot(di),c=di.dot(Fi),h=di.dot(Qc),m=Fi.dot(Fi),g=Fi.dot(Qc),v=d*m-c*c;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*h-c*g)*y,T=(d*g-c*h)*y;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(e,n,r,a,l,d,c,h){return _l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_l=!0),this.getInterpolation(e,n,r,a,l,d,c,h)}static getInterpolation(e,n,r,a,l,d,c,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(d,Oi.y),h.addScaledVector(c,Oi.z),h)}static isFrontFacing(e,n,r,a){return di.subVectors(r,n),Fi.subVectors(e,n),di.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),di.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,l){return _l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_l=!0),ni.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}getInterpolation(e,n,r,a,l){return ni.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let d,c;Us.subVectors(a,r),Ns.subVectors(l,r),Jc.subVectors(e,r);const h=Us.dot(Jc),m=Ns.dot(Jc);if(h<=0&&m<=0)return n.copy(r);ef.subVectors(e,a);const g=Us.dot(ef),v=Ns.dot(ef);if(g>=0&&v<=g)return n.copy(a);const y=h*v-g*m;if(y<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(Us,d);tf.subVectors(e,l);const S=Us.dot(tf),T=Ns.dot(tf);if(T>=0&&S<=T)return n.copy(l);const E=S*m-h*T;if(E<=0&&m>=0&&T<=0)return c=m/(m-T),n.copy(r).addScaledVector(Ns,c);const x=g*T-S*v;if(x<=0&&v-g>=0&&S-T>=0)return hm.subVectors(l,a),c=(v-g)/(v-g+(S-T)),n.copy(a).addScaledVector(hm,c);const _=1/(x+E+y);return d=E*_,c=y*_,n.copy(r).addScaledVector(Us,d).addScaledVector(Ns,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function nf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class _t{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=Ov(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=nf(d,l,e+1/3),this.g=nf(d,l,e),this.b=nf(d,l,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,n=Qt){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qt){const r=Lg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=Wc(e.r),this.g=Wc(e.g),this.b=Wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Rt.fromWorkingColorSpace(gn.copy(this),e),Math.round(Tn(gn.r*255,0,255))*65536+Math.round(Tn(gn.g*255,0,255))*256+Math.round(Tn(gn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,l=gn.b,d=Math.max(r,a,l),c=Math.min(r,a,l);let h,m;const g=(c+d)/2;if(c===d)h=0,m=0;else{const v=d-c;switch(m=g<=.5?v/(d+c):v/(2-d-c),d){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Qt){Rt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Qt?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(vl);const r=Gc(hr.h,vl.h,n),a=Gc(hr.s,vl.s,n),l=Gc(hr.l,vl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new _t;_t.NAMES=Lg;let Jv=0;class Er extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Zs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=xf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vf&&(r.blendSrc=this.blendSrc),this.blendDst!==xf&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const c in l){const h=l[c];delete h.metadata,d.push(h)}return d}if(n){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yl extends Er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new G,xl=new nt;class On{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Tf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ki(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ct(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ki(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ki(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ki(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ki(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),r=Ct(r,this.array),a=Ct(a,this.array),l=Ct(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}}class Dg extends On{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ug extends On{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class un extends On{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ex=0;const ei=new Dt,rf=new Jt,Is=new G,Wn=new Jr,Go=new Jr,on=new G;class Cn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?Ug:Dg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];Go.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Wn.min,Go.min),Wn.expandByPoint(on),on.addVectors(Wn.max,Go.max),Wn.expandByPoint(on)):(Wn.expandByPoint(Go.min),Wn.expandByPoint(Go.max))}Wn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)on.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(on));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)on.fromBufferAttribute(c,m),h&&(Is.fromBufferAttribute(e,m),on.add(Is)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,l=n.normal.array,d=n.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],g=[];for(let D=0;D<c;D++)m[D]=new G,g[D]=new G;const v=new G,y=new G,S=new G,T=new nt,E=new nt,x=new nt,_=new G,C=new G;function w(D,ae,fe){v.fromArray(a,D*3),y.fromArray(a,ae*3),S.fromArray(a,fe*3),T.fromArray(d,D*2),E.fromArray(d,ae*2),x.fromArray(d,fe*2),y.sub(v),S.sub(v),E.sub(T),x.sub(T);const we=1/(E.x*x.y-x.x*E.y);isFinite(we)&&(_.copy(y).multiplyScalar(x.y).addScaledVector(S,-E.y).multiplyScalar(we),C.copy(S).multiplyScalar(E.x).addScaledVector(y,-x.x).multiplyScalar(we),m[D].add(_),m[ae].add(_),m[fe].add(_),g[D].add(C),g[ae].add(C),g[fe].add(C))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let D=0,ae=P.length;D<ae;++D){const fe=P[D],we=fe.start,W=fe.count;for(let ne=we,le=we+W;ne<le;ne+=3)w(r[ne+0],r[ne+1],r[ne+2])}const H=new G,I=new G,F=new G,re=new G;function R(D){F.fromArray(l,D*3),re.copy(F);const ae=m[D];H.copy(ae),H.sub(F.multiplyScalar(F.dot(ae))).normalize(),I.crossVectors(re,ae);const we=I.dot(g[D])<0?-1:1;h[D*4]=H.x,h[D*4+1]=H.y,h[D*4+2]=H.z,h[D*4+3]=we}for(let D=0,ae=P.length;D<ae;++D){const fe=P[D],we=fe.start,W=fe.count;for(let ne=we,le=we+W;ne<le;ne+=3)R(r[ne+0]),R(r[ne+1]),R(r[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new G,l=new G,d=new G,c=new G,h=new G,m=new G,g=new G,v=new G;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),E=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,T),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,x),c.add(g),h.add(g),m.add(g),r.setXYZ(T,c.x,c.y,c.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,v=c.normalized,y=new m.constructor(h.length*g);let S=0,T=0;for(let E=0,x=h.length;E<x;E++){c.isInterleavedBufferAttribute?S=h[E]*c.data.stride+c.offset:S=h[E]*g;for(let _=0;_<g;_++)y[T++]=m[S++]}return new On(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],m=e(h,r);n.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,v=m.length;g<v;g++){const y=m[g],S=e(y,r);h.push(S)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,h=d.length;c<h;c++){const m=d[c];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pm=new Dt,Hr=new ea,yl=new es,mm=new G,Fs=new G,Os=new G,zs=new G,sf=new G,Sl=new G,Ml=new nt,El=new nt,Tl=new nt,gm=new G,_m=new G,vm=new G,wl=new G,Al=new G;class wn extends Jt{constructor(e=new Cn,n=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Sl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],v=l[h];g!==0&&(sf.fromBufferAttribute(v,e),d?Sl.addScaledVector(sf,g):Sl.addScaledVector(sf.sub(n),g))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(yl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(yl,mm)===null||Hr.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(pm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,d=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(d))for(let T=0,E=y.length;T<E;T++){const x=y[T],_=d[x.materialIndex],C=Math.max(x.start,S.start),w=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let P=C,H=w;P<H;P+=3){const I=c.getX(P),F=c.getX(P+1),re=c.getX(P+2);a=Rl(this,_,e,r,m,g,v,I,F,re),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let x=T,_=E;x<_;x+=3){const C=c.getX(x),w=c.getX(x+1),P=c.getX(x+2);a=Rl(this,d,e,r,m,g,v,C,w,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,E=y.length;T<E;T++){const x=y[T],_=d[x.materialIndex],C=Math.max(x.start,S.start),w=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let P=C,H=w;P<H;P+=3){const I=P,F=P+1,re=P+2;a=Rl(this,_,e,r,m,g,v,I,F,re),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let x=T,_=E;x<_;x+=3){const C=x,w=x+1,P=x+2;a=Rl(this,d,e,r,m,g,v,C,w,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function tx(s,e,n,r,a,l,d,c){let h;if(e.side===An?h=r.intersectTriangle(d,l,a,!0,c):h=r.intersectTriangle(a,l,d,e.side===Mr,c),h===null)return null;Al.copy(c),Al.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Al);return m<n.near||m>n.far?null:{distance:m,point:Al.clone(),object:s}}function Rl(s,e,n,r,a,l,d,c,h,m){s.getVertexPosition(c,Fs),s.getVertexPosition(h,Os),s.getVertexPosition(m,zs);const g=tx(s,e,n,r,Fs,Os,zs,wl);if(g){a&&(Ml.fromBufferAttribute(a,c),El.fromBufferAttribute(a,h),Tl.fromBufferAttribute(a,m),g.uv=ni.getInterpolation(wl,Fs,Os,zs,Ml,El,Tl,new nt)),l&&(Ml.fromBufferAttribute(l,c),El.fromBufferAttribute(l,h),Tl.fromBufferAttribute(l,m),g.uv1=ni.getInterpolation(wl,Fs,Os,zs,Ml,El,Tl,new nt),g.uv2=g.uv1),d&&(gm.fromBufferAttribute(d,c),_m.fromBufferAttribute(d,h),vm.fromBufferAttribute(d,m),g.normal=ni.getInterpolation(wl,Fs,Os,zs,gm,_m,vm,new G),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:h,c:m,normal:new G,materialIndex:0};ni.getNormal(Fs,Os,zs,v.normal),g.face=v}return g}class ta extends Cn{constructor(e=1,n=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const c=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],m=[],g=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,r,n,e,d,l,0),T("z","y","x",1,-1,r,n,-e,d,l,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(v,2));function T(E,x,_,C,w,P,H,I,F,re,R){const D=P/F,ae=H/re,fe=P/2,we=H/2,W=I/2,ne=F+1,le=re+1;let de=0,Y=0;const Q=new G;for(let q=0;q<le;q++){const N=q*ae-we;for(let j=0;j<ne;j++){const k=j*D-fe;Q[E]=k*C,Q[x]=N*w,Q[_]=W,m.push(Q.x,Q.y,Q.z),Q[E]=0,Q[x]=0,Q[_]=I>0?1:-1,g.push(Q.x,Q.y,Q.z),v.push(j/F),v.push(1-q/re),de+=1}}for(let q=0;q<re;q++)for(let N=0;N<F;N++){const j=y+N+ne*q,k=y+N+ne*(q+1),$=y+(N+1)+ne*(q+1),pe=y+(N+1)+ne*q;h.push(j,k,pe),h.push(k,$,pe),Y+=6}c.addGroup(S,Y,R),S+=Y,y+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(s){const e={};for(let n=0;n<s.length;n++){const r=no(s[n]);for(const a in r)e[a]=r[a]}return e}function nx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Ng(s){return s.getRenderTarget()===null?s.outputColorSpace:Rt.workingColorSpace}const ix={clone:no,merge:Mn};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ig extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends Ig{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;l+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Bs=1;class ox extends Jt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(ks,Bs,e,n);a.layers=this.layers,this.add(a);const l=new jn(ks,Bs,e,n);l.layers=this.layers,this.add(l);const d=new jn(ks,Bs,e,n);d.layers=this.layers,this.add(d);const c=new jn(ks,Bs,e,n);c.layers=this.layers,this.add(c);const h=new jn(ks,Bs,e,n);h.layers=this.layers,this.add(h);const m=new jn(ks,Bs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,d,c,h]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,c,h,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,c),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Fg extends Rn{constructor(e,n,r,a,l,d,c,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,r,a,l,d,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ax extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Ko("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qr?Qt:ii),this.texture=new Fg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ta(5,5,5),l=new Zr({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:vr});l.uniforms.tEquirect.value=n;const d=new wn(a,l),c=n.minFilter;return n.minFilter===Zo&&(n.minFilter=ti),new ox(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(l)}}const of=new G,lx=new G,ux=new yt;class mr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=of.subVectors(r,n).cross(lx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(of),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ux.getNormalMatrix(e),a=this.coplanarPoint(of).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new es,Cl=new G;class Of{constructor(e=new mr,n=new mr,r=new mr,a=new mr,l=new mr,d=new mr){this.planes=[e,n,r,a,l,d]}set(e,n,r,a,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,l=a[0],d=a[1],c=a[2],h=a[3],m=a[4],g=a[5],v=a[6],y=a[7],S=a[8],T=a[9],E=a[10],x=a[11],_=a[12],C=a[13],w=a[14],P=a[15];if(r[0].setComponents(h-l,y-m,x-S,P-_).normalize(),r[1].setComponents(h+l,y+m,x+S,P+_).normalize(),r[2].setComponents(h+d,y+g,x+T,P+C).normalize(),r[3].setComponents(h-d,y-g,x-T,P-C).normalize(),r[4].setComponents(h-c,y-v,x-E,P-w).normalize(),n===Bi)r[5].setComponents(h+c,y+v,x+E,P+w).normalize();else if(n===jl)r[5].setComponents(c,v,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Cl.x=a.normal.x>0?e.max.x:e.min.x,Cl.y=a.normal.y>0?e.max.y:e.min.y,Cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Og(){let s=null,e=!1,n=null,r=null;function a(l,d){n(l,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function cx(s,e){const n=e.isWebGL2,r=new WeakMap;function a(m,g){const v=m.array,y=m.usage,S=v.byteLength,T=s.createBuffer();s.bindBuffer(g,T),s.bufferData(g,v,y),m.onUploadCallback();let E;if(v instanceof Float32Array)E=s.FLOAT;else if(v instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)E=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=s.SHORT;else if(v instanceof Uint32Array)E=s.UNSIGNED_INT;else if(v instanceof Int32Array)E=s.INT;else if(v instanceof Int8Array)E=s.BYTE;else if(v instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:T,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:m.version,size:S}}function l(m,g,v){const y=g.array,S=g._updateRange,T=g.updateRanges;if(s.bindBuffer(v,m),S.count===-1&&T.length===0&&s.bufferSubData(v,0,y),T.length!==0){for(let E=0,x=T.length;E<x;E++){const _=T[E];n?s.bufferSubData(v,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):s.bufferSubData(v,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}S.count!==-1&&(n?s.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):s.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(s.deleteBuffer(g.buffer),r.delete(m))}function h(m,g){if(m.isGLBufferAttribute){const y=r.get(m);(!y||y.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const v=r.get(m);if(v===void 0)r.set(m,a(m,g));else if(v.version<m.version){if(v.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(v.buffer,m,g),v.version=m.version}}return{get:d,remove:c,update:h}}class zf extends Cn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,d=n/2,c=Math.floor(r),h=Math.floor(a),m=c+1,g=h+1,v=e/c,y=n/h,S=[],T=[],E=[],x=[];for(let _=0;_<g;_++){const C=_*y-d;for(let w=0;w<m;w++){const P=w*v-l;T.push(P,-C,0),E.push(0,0,1),x.push(w/c),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let C=0;C<c;C++){const w=C+m*_,P=C+m*(_+1),H=C+1+m*(_+1),I=C+1+m*_;S.push(w,P,I),S.push(P,H,I)}this.setIndex(S),this.setAttribute("position",new un(T,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.width,e.height,e.widthSegments,e.heightSegments)}}var fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,my=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$y=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_S=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:fx,alphahash_pars_fragment:dx,alphamap_fragment:hx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:vx,batching_pars_vertex:xx,batching_vertex:yx,begin_vertex:Sx,beginnormal_vertex:Mx,bsdfs:Ex,iridescence_fragment:Tx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Rx,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:bx,color_fragment:Px,color_pars_fragment:Lx,color_pars_vertex:Dx,color_vertex:Ux,common:Nx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Fx,displacementmap_pars_vertex:Ox,displacementmap_vertex:zx,emissivemap_fragment:kx,emissivemap_pars_fragment:Bx,colorspace_fragment:Hx,colorspace_pars_fragment:Gx,envmap_fragment:Vx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:ry,envmap_vertex:Yx,fog_vertex:qx,fog_pars_vertex:$x,fog_fragment:Kx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Qx,lightmap_fragment:Jx,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:sy,lights_toon_pars_fragment:oy,lights_phong_fragment:ay,lights_phong_pars_fragment:ly,lights_physical_fragment:uy,lights_physical_pars_fragment:cy,lights_fragment_begin:fy,lights_fragment_maps:dy,lights_fragment_end:hy,logdepthbuf_fragment:py,logdepthbuf_pars_fragment:my,logdepthbuf_pars_vertex:gy,logdepthbuf_vertex:_y,map_fragment:vy,map_pars_fragment:xy,map_particle_fragment:yy,map_particle_pars_fragment:Sy,metalnessmap_fragment:My,metalnessmap_pars_fragment:Ey,morphcolor_vertex:Ty,morphnormal_vertex:wy,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Cy,normal_fragment_maps:by,normal_pars_fragment:Py,normal_pars_vertex:Ly,normal_vertex:Dy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Oy,opaque_fragment:zy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:Hy,dithering_fragment:Gy,dithering_pars_fragment:Vy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Yy,shadowmap_vertex:qy,shadowmask_pars_fragment:$y,skinbase_vertex:Ky,skinning_pars_vertex:Zy,skinning_vertex:Qy,skinnormal_vertex:Jy,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:uS,background_vert:cS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distanceRGBA_vert:vS,distanceRGBA_frag:xS,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:wS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:CS,meshmatcap_frag:bS,meshnormal_vert:PS,meshnormal_frag:LS,meshphong_vert:DS,meshphong_frag:US,meshphysical_vert:NS,meshphysical_frag:IS,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:zS,points_frag:kS,shadow_vert:BS,shadow_frag:HS,sprite_vert:GS,sprite_frag:VS},ke={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},yi={basic:{uniforms:Mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new _t(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Mn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Mn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new _t(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Mn([ke.points,ke.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Mn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Mn([ke.common,ke.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Mn([ke.sprite,ke.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Mn([ke.common,ke.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Mn([ke.lights,ke.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};yi.physical={uniforms:Mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const bl={r:0,b:0,g:0};function WS(s,e,n,r,a,l,d){const c=new _t(0);let h=l===!0?0:1,m,g,v=null,y=0,S=null;function T(x,_){let C=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?n:e).get(w)),w===null?E(c,h):w&&w.isColor&&(E(w,1),C=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===$l)?(g===void 0&&(g=new wn(new ta(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:no(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Rt.getTransfer(w.colorSpace)!==It,(v!==w||y!==w.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=w,y=w.version,S=s.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new wn(new zf(2,2),new Zr({name:"BackgroundMaterial",uniforms:no(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(w.colorSpace)!==It,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||y!==w.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=w,y=w.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function E(x,_){x.getRGB(bl,Ng(s)),r.buffers.color.setClear(bl.r,bl.g,bl.b,_,d)}return{getClearColor:function(){return c},setClearColor:function(x,_=1){c.set(x),h=_,E(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,E(c,h)},render:T}}function XS(s,e,n,r){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||l!==null,c={},h=x(null);let m=h,g=!1;function v(W,ne,le,de,Y){let Q=!1;if(d){const q=E(de,le,ne);m!==q&&(m=q,S(m.object)),Q=_(W,de,le,Y),Q&&C(W,de,le,Y)}else{const q=ne.wireframe===!0;(m.geometry!==de.id||m.program!==le.id||m.wireframe!==q)&&(m.geometry=de.id,m.program=le.id,m.wireframe=q,Q=!0)}Y!==null&&n.update(Y,s.ELEMENT_ARRAY_BUFFER),(Q||g)&&(g=!1,re(W,ne,le,de),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function y(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(W){return r.isWebGL2?s.bindVertexArray(W):l.bindVertexArrayOES(W)}function T(W){return r.isWebGL2?s.deleteVertexArray(W):l.deleteVertexArrayOES(W)}function E(W,ne,le){const de=le.wireframe===!0;let Y=c[W.id];Y===void 0&&(Y={},c[W.id]=Y);let Q=Y[ne.id];Q===void 0&&(Q={},Y[ne.id]=Q);let q=Q[de];return q===void 0&&(q=x(y()),Q[de]=q),q}function x(W){const ne=[],le=[],de=[];for(let Y=0;Y<a;Y++)ne[Y]=0,le[Y]=0,de[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:le,attributeDivisors:de,object:W,attributes:{},index:null}}function _(W,ne,le,de){const Y=m.attributes,Q=ne.attributes;let q=0;const N=le.getAttributes();for(const j in N)if(N[j].location>=0){const $=Y[j];let pe=Q[j];if(pe===void 0&&(j==="instanceMatrix"&&W.instanceMatrix&&(pe=W.instanceMatrix),j==="instanceColor"&&W.instanceColor&&(pe=W.instanceColor)),$===void 0||$.attribute!==pe||pe&&$.data!==pe.data)return!0;q++}return m.attributesNum!==q||m.index!==de}function C(W,ne,le,de){const Y={},Q=ne.attributes;let q=0;const N=le.getAttributes();for(const j in N)if(N[j].location>=0){let $=Q[j];$===void 0&&(j==="instanceMatrix"&&W.instanceMatrix&&($=W.instanceMatrix),j==="instanceColor"&&W.instanceColor&&($=W.instanceColor));const pe={};pe.attribute=$,$&&$.data&&(pe.data=$.data),Y[j]=pe,q++}m.attributes=Y,m.attributesNum=q,m.index=de}function w(){const W=m.newAttributes;for(let ne=0,le=W.length;ne<le;ne++)W[ne]=0}function P(W){H(W,0)}function H(W,ne){const le=m.newAttributes,de=m.enabledAttributes,Y=m.attributeDivisors;le[W]=1,de[W]===0&&(s.enableVertexAttribArray(W),de[W]=1),Y[W]!==ne&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,ne),Y[W]=ne)}function I(){const W=m.newAttributes,ne=m.enabledAttributes;for(let le=0,de=ne.length;le<de;le++)ne[le]!==W[le]&&(s.disableVertexAttribArray(le),ne[le]=0)}function F(W,ne,le,de,Y,Q,q){q===!0?s.vertexAttribIPointer(W,ne,le,Y,Q):s.vertexAttribPointer(W,ne,le,de,Y,Q)}function re(W,ne,le,de){if(r.isWebGL2===!1&&(W.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const Y=de.attributes,Q=le.getAttributes(),q=ne.defaultAttributeValues;for(const N in Q){const j=Q[N];if(j.location>=0){let k=Y[N];if(k===void 0&&(N==="instanceMatrix"&&W.instanceMatrix&&(k=W.instanceMatrix),N==="instanceColor"&&W.instanceColor&&(k=W.instanceColor)),k!==void 0){const $=k.normalized,pe=k.itemSize,Le=n.get(k);if(Le===void 0)continue;const Ie=Le.buffer,ze=Le.type,Be=Le.bytesPerElement,He=r.isWebGL2===!0&&(ze===s.INT||ze===s.UNSIGNED_INT||k.gpuType===_g);if(k.isInterleavedBufferAttribute){const ft=k.data,ie=ft.stride,Ft=k.offset;if(ft.isInstancedInterleavedBuffer){for(let et=0;et<j.locationSize;et++)H(j.location+et,ft.meshPerAttribute);W.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let et=0;et<j.locationSize;et++)P(j.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let et=0;et<j.locationSize;et++)F(j.location+et,pe/j.locationSize,ze,$,ie*Be,(Ft+pe/j.locationSize*et)*Be,He)}else{if(k.isInstancedBufferAttribute){for(let ft=0;ft<j.locationSize;ft++)H(j.location+ft,k.meshPerAttribute);W.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ft=0;ft<j.locationSize;ft++)P(j.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ft=0;ft<j.locationSize;ft++)F(j.location+ft,pe/j.locationSize,ze,$,pe*Be,pe/j.locationSize*ft*Be,He)}}else if(q!==void 0){const $=q[N];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(j.location,$);break;case 3:s.vertexAttrib3fv(j.location,$);break;case 4:s.vertexAttrib4fv(j.location,$);break;default:s.vertexAttrib1fv(j.location,$)}}}}I()}function R(){fe();for(const W in c){const ne=c[W];for(const le in ne){const de=ne[le];for(const Y in de)T(de[Y].object),delete de[Y];delete ne[le]}delete c[W]}}function D(W){if(c[W.id]===void 0)return;const ne=c[W.id];for(const le in ne){const de=ne[le];for(const Y in de)T(de[Y].object),delete de[Y];delete ne[le]}delete c[W.id]}function ae(W){for(const ne in c){const le=c[ne];if(le[W.id]===void 0)continue;const de=le[W.id];for(const Y in de)T(de[Y].object),delete de[Y];delete le[W.id]}}function fe(){we(),g=!0,m!==h&&(m=h,S(m.object))}function we(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:fe,resetDefaultState:we,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:ae,initAttributes:w,enableAttribute:P,disableUnusedAttributes:I}}function jS(s,e,n,r){const a=r.isWebGL2;let l;function d(g){l=g}function c(g,v){s.drawArrays(l,g,v),n.update(v,l,1)}function h(g,v,y){if(y===0)return;let S,T;if(a)S=s,T="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[T](l,g,v,y),n.update(v,l,y)}function m(g,v,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<y;T++)this.render(g[T],v[T]);else{S.multiDrawArraysWEBGL(l,g,0,v,0,y);let T=0;for(let E=0;E<y;E++)T+=v[E];n.update(T,l,1)}}this.setMode=d,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function YS(s,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),E=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=y>0,P=d||e.has("OES_texture_float"),H=w&&P,I=d?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:w,floatFragmentTextures:P,floatVertexTextures:H,maxSamples:I}}function qS(s){const e=this;let n=null,r=0,a=!1,l=!1;const d=new mr,c=new yt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=g(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,E=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!a||T===null||T.length===0||l&&!x)l?g(null):m();else{const C=l?0:r,w=C*4;let P=_.clippingState||null;h.value=P,P=g(T,y,w,S);for(let H=0;H!==w;++H)P[H]=n[H];_.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,T){const E=v!==null?v.length:0;let x=null;if(E!==0){if(x=h.value,T!==!0||x===null){const _=S+E*4,C=y.matrixWorldInverse;c.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,P=S;w!==E;++w,P+=4)d.copy(v[w]).applyMatrix4(C,c),d.normal.toArray(x,P),x[P+3]=d.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function $S(s){let e=new WeakMap;function n(d,c){return c===yf?d.mapping=Js:c===Sf&&(d.mapping=eo),d}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===yf||c===Sf)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new ax(h.height/2);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class KS extends Ig{constructor(e=-1,n=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,c=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,xm=[.125,.215,.35,.446,.526,.582],Xr=20,af=new KS,ym=new _t;let lf=null,uf=0,cf=0;const Vr=(1+Math.sqrt(5))/2,Hs=1/Vr,Sm=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Vr,Hs),new G(0,Vr,-Hs),new G(Hs,0,Vr),new G(-Hs,0,Vr),new G(Vr,Hs,0),new G(-Vr,Hs,0)];class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,uf,cf),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Qo,format:pi,colorSpace:Hi,depthBuffer:!1},a=Em(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(l)),this._blurMaterial=QS(l,e,n)}return a}_compileMaterial(e){const n=new wn(this._lodPlanes[0],e);this._renderer.compile(n,af)}_sceneToCubeUV(e,n,r,a){const c=new jn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(ym),g.toneMapping=xr,g.autoClear=!1;const S=new Yl({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),T=new wn(new ta,S);let E=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,E=!0):(S.color.copy(ym),E=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(c.up.set(0,h[_],0),c.lookAt(m[_],0,0)):C===1?(c.up.set(0,0,h[_]),c.lookAt(0,m[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,m[_]));const w=this._cubeSize;Pl(a,C*w,_>2?w:0,w,w),g.setRenderTarget(a),E&&g.render(T,c),g.render(e,c)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Js||e.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tm());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new wn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Pl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,af)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Sm[(a-1)%Sm.length];this._blur(e,a-1,a,l,d)}n.autoClear=r}_blur(e,n,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,d,c){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new wn(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),E=l/T,x=isFinite(l)?1+Math.floor(g*E):Xr;x>Xr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xr}`);const _=[];let C=0;for(let F=0;F<Xr;++F){const re=F/E,R=Math.exp(-re*re/2);_.push(R),F===0?C+=R:F<x&&(C+=2*R)}for(let F=0;F<_.length;F++)_[F]=_[F]/C;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=d==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:w}=this;y.dTheta.value=T,y.mipInt.value=w-r;const P=this._sizeLods[a],H=3*P*(a>w-Ys?a-w+Ys:0),I=4*(this._cubeSize-P);Pl(n,H,I,3*P,2*P),h.setRenderTarget(n),h.render(v,af)}}function ZS(s){const e=[],n=[],r=[];let a=s;const l=s-Ys+1+xm.length;for(let d=0;d<l;d++){const c=Math.pow(2,a);n.push(c);let h=1/c;d>s-Ys?h=xm[d-s+Ys-1]:d===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,E=3,x=2,_=1,C=new Float32Array(E*T*S),w=new Float32Array(x*T*S),P=new Float32Array(_*T*S);for(let I=0;I<S;I++){const F=I%3*2/3-1,re=I>2?0:-1,R=[F,re,0,F+2/3,re,0,F+2/3,re+1,0,F,re,0,F+2/3,re+1,0,F,re+1,0];C.set(R,E*T*I),w.set(y,x*T*I);const D=[I,I,I,I,I,I];P.set(D,_*T*I)}const H=new Cn;H.setAttribute("position",new On(C,E)),H.setAttribute("uv",new On(w,x)),H.setAttribute("faceIndex",new On(P,_)),e.push(H),a>Ys&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Em(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function QS(s,e,n){const r=new Float32Array(Xr),a=new G(0,1,0);return new Zr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Tm(){return new Zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function wm(){return new Zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JS(s){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===yf||h===Sf,g=h===Js||h===eo;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let v=e.get(c);return n===null&&(n=new Mm(s)),v=m?n.fromEquirectangular(c,v):n.fromCubemap(c,v),e.set(c,v),v.texture}else{if(e.has(c))return e.get(c).texture;{const v=c.image;if(m&&v&&v.height>0||g&&v&&a(v)){n===null&&(n=new Mm(s));const y=m?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function eM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function tM(s,e,n,r){const a={},l=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const E=y.morphAttributes[T];for(let x=0,_=E.length;x<_;x++)e.remove(E[x])}y.removeEventListener("dispose",d),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function c(v,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function h(v){const y=v.attributes;for(const T in y)e.update(y[T],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const T in S){const E=S[T];for(let x=0,_=E.length;x<_;x++)e.update(E[x],s.ARRAY_BUFFER)}}function m(v){const y=[],S=v.index,T=v.attributes.position;let E=0;if(S!==null){const C=S.array;E=S.version;for(let w=0,P=C.length;w<P;w+=3){const H=C[w+0],I=C[w+1],F=C[w+2];y.push(H,I,I,F,F,H)}}else if(T!==void 0){const C=T.array;E=T.version;for(let w=0,P=C.length/3-1;w<P;w+=3){const H=w+0,I=w+1,F=w+2;y.push(H,I,I,F,F,H)}}else return;const x=new(Rg(y)?Ug:Dg)(y,1);x.version=E;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function nM(s,e,n,r){const a=r.isWebGL2;let l;function d(S){l=S}let c,h;function m(S){c=S.type,h=S.bytesPerElement}function g(S,T){s.drawElements(l,T,c,S*h),n.update(T,l,1)}function v(S,T,E){if(E===0)return;let x,_;if(a)x=s,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](l,T,c,S*h,E),n.update(T,l,E)}function y(S,T,E){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<E;_++)this.render(S[_]/h,T[_]);else{x.multiDrawElementsWEBGL(l,T,0,c,S,0,E);let _=0;for(let C=0;C<E;C++)_+=T[C];n.update(_,l,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=v,this.renderMultiDraw=y}function iM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,c){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=c*(l/3);break;case s.LINES:n.lines+=c*(l/2);break;case s.LINE_STRIP:n.lines+=c*(l-1);break;case s.LINE_LOOP:n.lines+=c*l;break;case s.POINTS:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function rM(s,e){return s[0]-e[0]}function sM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function oM(s,e,n){const r={},a=new Float32Array(8),l=new WeakMap,d=new Ht,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,g,v){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,E=T!==void 0?T.length:0;let x=l.get(g);if(x===void 0||x.count!==E){let ne=function(){we.dispose(),l.delete(g),g.removeEventListener("dispose",ne)};var S=ne;x!==void 0&&x.texture.dispose();const w=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,H=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],re=g.morphAttributes.color||[];let R=0;w===!0&&(R=1),P===!0&&(R=2),H===!0&&(R=3);let D=g.attributes.position.count*R,ae=1;D>e.maxTextureSize&&(ae=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const fe=new Float32Array(D*ae*4*E),we=new Pg(fe,D,ae,E);we.type=_r,we.needsUpdate=!0;const W=R*4;for(let le=0;le<E;le++){const de=I[le],Y=F[le],Q=re[le],q=D*ae*4*le;for(let N=0;N<de.count;N++){const j=N*W;w===!0&&(d.fromBufferAttribute(de,N),fe[q+j+0]=d.x,fe[q+j+1]=d.y,fe[q+j+2]=d.z,fe[q+j+3]=0),P===!0&&(d.fromBufferAttribute(Y,N),fe[q+j+4]=d.x,fe[q+j+5]=d.y,fe[q+j+6]=d.z,fe[q+j+7]=0),H===!0&&(d.fromBufferAttribute(Q,N),fe[q+j+8]=d.x,fe[q+j+9]=d.y,fe[q+j+10]=d.z,fe[q+j+11]=Q.itemSize===4?d.w:1)}}x={count:E,texture:we,size:new nt(D,ae)},l.set(g,x),g.addEventListener("dispose",ne)}let _=0;for(let w=0;w<y.length;w++)_+=y[w];const C=g.morphTargetsRelative?1:1-_;v.getUniforms().setValue(s,"morphTargetBaseInfluence",C),v.getUniforms().setValue(s,"morphTargetInfluences",y),v.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),v.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const T=y===void 0?0:y.length;let E=r[g.id];if(E===void 0||E.length!==T){E=[];for(let P=0;P<T;P++)E[P]=[P,0];r[g.id]=E}for(let P=0;P<T;P++){const H=E[P];H[0]=P,H[1]=y[P]}E.sort(sM);for(let P=0;P<8;P++)P<T&&E[P][1]?(c[P][0]=E[P][0],c[P][1]=E[P][1]):(c[P][0]=Number.MAX_SAFE_INTEGER,c[P][1]=0);c.sort(rM);const x=g.morphAttributes.position,_=g.morphAttributes.normal;let C=0;for(let P=0;P<8;P++){const H=c[P],I=H[0],F=H[1];I!==Number.MAX_SAFE_INTEGER&&F?(x&&g.getAttribute("morphTarget"+P)!==x[I]&&g.setAttribute("morphTarget"+P,x[I]),_&&g.getAttribute("morphNormal"+P)!==_[I]&&g.setAttribute("morphNormal"+P,_[I]),a[P]=F,C+=F):(x&&g.hasAttribute("morphTarget"+P)===!0&&g.deleteAttribute("morphTarget"+P),_&&g.hasAttribute("morphNormal"+P)===!0&&g.deleteAttribute("morphNormal"+P),a[P]=0)}const w=g.morphTargetsRelative?1:1-C;v.getUniforms().setValue(s,"morphTargetBaseInfluence",w),v.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function aM(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function d(){a=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:d}}class zg extends Rn{constructor(e,n,r,a,l,d,c,h,m,g){if(g=g!==void 0?g:Yr,g!==Yr&&g!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Yr&&(r=gr),r===void 0&&g===to&&(r=jr),super(null,a,l,d,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:En,this.minFilter=h!==void 0?h:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kg=new Rn,Bg=new zg(1,1);Bg.compareFunction=Ag;const Hg=new Pg,Gg=new Wv,Vg=new Fg,Am=[],Rm=[],Cm=new Float32Array(16),bm=new Float32Array(9),Pm=new Float32Array(4);function io(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Am[a];if(l===void 0&&(l=new Float32Array(a),Am[a]=l),e!==0){r.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,s[d].toArray(l,c)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function tn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ql(s,e){let n=Rm[e];n===void 0&&(n=new Int32Array(e),Rm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function lM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2fv(this.addr,e),tn(n,e)}}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;s.uniform3fv(this.addr,e),tn(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4fv(this.addr,e),tn(n,e)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Pm.set(r),s.uniformMatrix2fv(this.addr,!1,Pm),tn(n,r)}}function hM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;bm.set(r),s.uniformMatrix3fv(this.addr,!1,bm),tn(n,r)}}function pM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;Cm.set(r),s.uniformMatrix4fv(this.addr,!1,Cm),tn(n,r)}}function mM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function gM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2iv(this.addr,e),tn(n,e)}}function _M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3iv(this.addr,e),tn(n,e)}}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4iv(this.addr,e),tn(n,e)}}function xM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function yM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;s.uniform2uiv(this.addr,e),tn(n,e)}}function SM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;s.uniform3uiv(this.addr,e),tn(n,e)}}function MM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;s.uniform4uiv(this.addr,e),tn(n,e)}}function EM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);const l=this.type===s.SAMPLER_2D_SHADOW?Bg:kg;n.setTexture2D(e||l,a)}function TM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Gg,a)}function wM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Vg,a)}function AM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Hg,a)}function RM(s){switch(s){case 5126:return lM;case 35664:return uM;case 35665:return cM;case 35666:return fM;case 35674:return dM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(s,e){s.uniform1fv(this.addr,e)}function bM(s,e){const n=io(e,this.size,2);s.uniform2fv(this.addr,n)}function PM(s,e){const n=io(e,this.size,3);s.uniform3fv(this.addr,n)}function LM(s,e){const n=io(e,this.size,4);s.uniform4fv(this.addr,n)}function DM(s,e){const n=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function UM(s,e){const n=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function NM(s,e){const n=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function IM(s,e){s.uniform1iv(this.addr,e)}function FM(s,e){s.uniform2iv(this.addr,e)}function OM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function kM(s,e){s.uniform1uiv(this.addr,e)}function BM(s,e){s.uniform2uiv(this.addr,e)}function HM(s,e){s.uniform3uiv(this.addr,e)}function GM(s,e){s.uniform4uiv(this.addr,e)}function VM(s,e,n){const r=this.cache,a=e.length,l=Ql(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||kg,l[d])}function WM(s,e,n){const r=this.cache,a=e.length,l=Ql(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Gg,l[d])}function XM(s,e,n){const r=this.cache,a=e.length,l=Ql(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Vg,l[d])}function jM(s,e,n){const r=this.cache,a=e.length,l=Ql(n,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Hg,l[d])}function YM(s){switch(s){case 5126:return CM;case 35664:return bM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return IM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return BM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return jM}}class qM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=RM(n.type)}}class $M{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YM(n.type)}}class KM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const c=a[l];c.setValue(e,n[c.id],r)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Lm(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,n){const r=s.name,a=r.length;for(ff.lastIndex=0;;){const l=ff.exec(r),d=ff.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&d+2===a){Lm(n,m===void 0?new qM(c,s,e):new $M(c,s,e));break}else{let v=n.map[c];v===void 0&&(v=new KM(c),Lm(n,v)),n=v}}}class Bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),d=e.getUniformLocation(n,l.name);ZM(l,d,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,d=n.length;l!==d;++l){const c=n[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Dm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const QM=37297;let JM=0;function eE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=a;d<l;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function tE(s){const e=Rt.getPrimaries(Rt.workingColorSpace),n=Rt.getPrimaries(s);let r;switch(e===n?r="":e===Xl&&n===Wl?r="LinearDisplayP3ToLinearSRGB":e===Wl&&n===Xl&&(r="LinearSRGBToLinearDisplayP3"),s){case Hi:case Kl:return[r,"LinearTransferOETF"];case Qt:case If:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Um(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+eE(s.getShaderSource(e),d)}else return a}function nE(s,e){const n=tE(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function iE(s,e){let n;switch(e){case dv:n="Linear";break;case hv:n="Reinhard";break;case pv:n="OptimizedCineon";break;case mg:n="ACESFilmic";break;case gv:n="AgX";break;case mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function rE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function sE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qs).join(`
`)}function oE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function aE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),d=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),n[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:c}}return n}function qs(s){return s!==""}function Nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(s){return s.replace(lE,cE)}const uE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cE(s,e){let n=gt[e];if(n===void 0){const r=uE.get(e);if(r!==void 0)n=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cf(n)}const fE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(s){return s.replace(fE,dE)}function dE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Om(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function pE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function gE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pg:e="ENVMAP_BLENDING_MULTIPLY";break;case cv:e="ENVMAP_BLENDING_MIX";break;case fv:e="ENVMAP_BLENDING_ADD";break}return e}function _E(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function vE(s,e,n,r){const a=s.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const h=hE(n),m=pE(n),g=mE(n),v=gE(n),y=_E(n),S=n.isWebGL2?"":rE(n),T=sE(n),E=oE(l),x=a.createProgram();let _,C,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(qs).join(`
`),_.length>0&&(_+=`
`),C=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(qs).join(`
`),C.length>0&&(C+=`
`)):(_=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),C=[S,Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?gt.tonemapping_pars_fragment:"",n.toneMapping!==xr?iE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,nE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),d=Cf(d),d=Nm(d,n),d=Im(d,n),c=Cf(c),c=Nm(c,n),c=Im(c,n),d=Fm(d),c=Fm(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,C=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const P=w+_+d,H=w+C+c,I=Dm(a,a.VERTEX_SHADER,P),F=Dm(a,a.FRAGMENT_SHADER,H);a.attachShader(x,I),a.attachShader(x,F),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function re(fe){if(s.debug.checkShaderErrors){const we=a.getProgramInfoLog(x).trim(),W=a.getShaderInfoLog(I).trim(),ne=a.getShaderInfoLog(F).trim();let le=!0,de=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(le=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,x,I,F);else{const Y=Um(a,I,"vertex"),Q=Um(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Program Info Log: `+we+`
`+Y+`
`+Q)}else we!==""?console.warn("THREE.WebGLProgram: Program Info Log:",we):(W===""||ne==="")&&(de=!1);de&&(fe.diagnostics={runnable:le,programLog:we,vertexShader:{log:W,prefix:_},fragmentShader:{log:ne,prefix:C}})}a.deleteShader(I),a.deleteShader(F),R=new Bl(a,x),D=aE(a,x)}let R;this.getUniforms=function(){return R===void 0&&re(this),R};let D;this.getAttributes=function(){return D===void 0&&re(this),D};let ae=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=a.getProgramParameter(x,QM)),ae},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=F,this}let xE=0;class yE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new SE(e),n.set(e,r)),r}}class SE{constructor(e){this.id=xE++,this.code=e,this.usedTimes=0}}function ME(s,e,n,r,a,l,d){const c=new Ff,h=new yE,m=[],g=a.isWebGL2,v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function x(R,D,ae,fe,we){const W=fe.fog,ne=we.geometry,le=R.isMeshStandardMaterial?fe.environment:null,de=(R.isMeshStandardMaterial?n:e).get(R.envMap||le),Y=de&&de.mapping===$l?de.image.height:null,Q=T[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const q=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,N=q!==void 0?q.length:0;let j=0;ne.morphAttributes.position!==void 0&&(j=1),ne.morphAttributes.normal!==void 0&&(j=2),ne.morphAttributes.color!==void 0&&(j=3);let k,$,pe,Le;if(Q){const Ot=yi[Q];k=Ot.vertexShader,$=Ot.fragmentShader}else k=R.vertexShader,$=R.fragmentShader,h.update(R),pe=h.getVertexShaderID(R),Le=h.getFragmentShaderID(R);const Ie=s.getRenderTarget(),ze=we.isInstancedMesh===!0,Be=we.isBatchedMesh===!0,He=!!R.map,ft=!!R.matcap,ie=!!de,Ft=!!R.aoMap,et=!!R.lightMap,st=!!R.bumpMap,Ye=!!R.normalMap,wt=!!R.displacementMap,at=!!R.emissiveMap,L=!!R.metalnessMap,A=!!R.roughnessMap,J=R.anisotropy>0,Pe=R.clearcoat>0,Ae=R.iridescence>0,De=R.sheen>0,he=R.transmission>0,Te=J&&!!R.anisotropyMap,ye=Pe&&!!R.clearcoatMap,Oe=Pe&&!!R.clearcoatNormalMap,We=Pe&&!!R.clearcoatRoughnessMap,me=Ae&&!!R.iridescenceMap,Ze=Ae&&!!R.iridescenceThicknessMap,X=De&&!!R.sheenColorMap,Me=De&&!!R.sheenRoughnessMap,_e=!!R.specularMap,Re=!!R.specularColorMap,U=!!R.specularIntensityMap,te=he&&!!R.transmissionMap,Ce=he&&!!R.thicknessMap,Se=!!R.gradientMap,ge=!!R.alphaMap,z=R.alphaTest>0,ve=!!R.alphaHash,Ne=!!R.extensions,qe=!!ne.attributes.uv1,Qe=!!ne.attributes.uv2,dt=!!ne.attributes.uv3;let ht=xr;return R.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(ht=s.toneMapping),{isWebGL2:g,shaderID:Q,shaderType:R.type,shaderName:R.name,vertexShader:k,fragmentShader:$,defines:R.defines,customVertexShaderID:pe,customFragmentShaderID:Le,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Be,instancing:ze,instancingColor:ze&&we.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Ie===null?s.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Hi,map:He,matcap:ft,envMap:ie,envMapMode:ie&&de.mapping,envMapCubeUVHeight:Y,aoMap:Ft,lightMap:et,bumpMap:st,normalMap:Ye,displacementMap:y&&wt,emissiveMap:at,normalMapObjectSpace:Ye&&R.normalMapType===Cv,normalMapTangentSpace:Ye&&R.normalMapType===wg,metalnessMap:L,roughnessMap:A,anisotropy:J,anisotropyMap:Te,clearcoat:Pe,clearcoatMap:ye,clearcoatNormalMap:Oe,clearcoatRoughnessMap:We,iridescence:Ae,iridescenceMap:me,iridescenceThicknessMap:Ze,sheen:De,sheenColorMap:X,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:Re,specularIntensityMap:U,transmission:he,transmissionMap:te,thicknessMap:Ce,gradientMap:Se,opaque:R.transparent===!1&&R.blending===Zs,alphaMap:ge,alphaTest:z,alphaHash:ve,combine:R.combine,mapUv:He&&E(R.map.channel),aoMapUv:Ft&&E(R.aoMap.channel),lightMapUv:et&&E(R.lightMap.channel),bumpMapUv:st&&E(R.bumpMap.channel),normalMapUv:Ye&&E(R.normalMap.channel),displacementMapUv:wt&&E(R.displacementMap.channel),emissiveMapUv:at&&E(R.emissiveMap.channel),metalnessMapUv:L&&E(R.metalnessMap.channel),roughnessMapUv:A&&E(R.roughnessMap.channel),anisotropyMapUv:Te&&E(R.anisotropyMap.channel),clearcoatMapUv:ye&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:X&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:Me&&E(R.sheenRoughnessMap.channel),specularMapUv:_e&&E(R.specularMap.channel),specularColorMapUv:Re&&E(R.specularColorMap.channel),specularIntensityMapUv:U&&E(R.specularIntensityMap.channel),transmissionMapUv:te&&E(R.transmissionMap.channel),thicknessMapUv:Ce&&E(R.thicknessMap.channel),alphaMapUv:ge&&E(R.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ye||J),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,vertexUv1s:qe,vertexUv2s:Qe,vertexUv3s:dt,pointsUvs:we.isPoints===!0&&!!ne.attributes.uv&&(He||ge),fog:!!W,useFog:R.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:we.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&ae.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,useLegacyLights:s._useLegacyLights,decodeVideoTexture:He&&R.map.isVideoTexture===!0&&Rt.getTransfer(R.map.colorSpace)===It,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Si,flipSided:R.side===An,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Ne&&R.extensions.derivatives===!0,extensionFragDepth:Ne&&R.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const ae in R.defines)D.push(ae),D.push(R.defines[ae]);return R.isRawShaderMaterial===!1&&(C(D,R),w(D,R),D.push(s.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function C(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function w(R,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.matcap&&c.enable(4),D.envMap&&c.enable(5),D.normalMapObjectSpace&&c.enable(6),D.normalMapTangentSpace&&c.enable(7),D.clearcoat&&c.enable(8),D.iridescence&&c.enable(9),D.alphaTest&&c.enable(10),D.vertexColors&&c.enable(11),D.vertexAlphas&&c.enable(12),D.vertexUv1s&&c.enable(13),D.vertexUv2s&&c.enable(14),D.vertexUv3s&&c.enable(15),D.vertexTangents&&c.enable(16),D.anisotropy&&c.enable(17),D.alphaHash&&c.enable(18),D.batching&&c.enable(19),R.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),R.push(c.mask)}function P(R){const D=T[R.type];let ae;if(D){const fe=yi[D];ae=ix.clone(fe.uniforms)}else ae=R.uniforms;return ae}function H(R,D){let ae;for(let fe=0,we=m.length;fe<we;fe++){const W=m[fe];if(W.cacheKey===D){ae=W,++ae.usedTimes;break}}return ae===void 0&&(ae=new vE(s,D,R,l),m.push(ae)),ae}function I(R){if(--R.usedTimes===0){const D=m.indexOf(R);m[D]=m[m.length-1],m.pop(),R.destroy()}}function F(R){h.remove(R)}function re(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:P,acquireProgram:H,releaseProgram:I,releaseShaderCache:F,programs:m,dispose:re}}function EE(){let s=new WeakMap;function e(l){let d=s.get(l);return d===void 0&&(d={},s.set(l,d)),d}function n(l){s.delete(l)}function r(l,d,c){s.get(l)[d]=c}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function TE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function d(v,y,S,T,E,x){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:E,group:x},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=E,_.group=x),e++,_}function c(v,y,S,T,E,x){const _=d(v,y,S,T,E,x);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(v,y,S,T,E,x){const _=d(v,y,S,T,E,x);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,y){n.length>1&&n.sort(v||TE),r.length>1&&r.sort(y||zm),a.length>1&&a.sort(y||zm)}function g(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:g,sort:m}}function wE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let d;return l===void 0?(d=new km,s.set(r,[d])):a>=l.length?(d=new km,l.push(d)):d=l[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function AE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new _t};break;case"SpotLight":n={position:new G,direction:new G,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=n,n}}}function RE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let CE=0;function bE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function PE(s,e){const n=new AE,r=RE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new G);const l=new G,d=new Dt,c=new Dt;function h(g,v){let y=0,S=0,T=0;for(let fe=0;fe<9;fe++)a.probe[fe].set(0,0,0);let E=0,x=0,_=0,C=0,w=0,P=0,H=0,I=0,F=0,re=0,R=0;g.sort(bE);const D=v===!0?Math.PI:1;for(let fe=0,we=g.length;fe<we;fe++){const W=g[fe],ne=W.color,le=W.intensity,de=W.distance,Y=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)y+=ne.r*le*D,S+=ne.g*le*D,T+=ne.b*le*D;else if(W.isLightProbe){for(let Q=0;Q<9;Q++)a.probe[Q].addScaledVector(W.sh.coefficients[Q],le);R++}else if(W.isDirectionalLight){const Q=n.get(W);if(Q.color.copy(W.color).multiplyScalar(W.intensity*D),W.castShadow){const q=W.shadow,N=r.get(W);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,a.directionalShadow[E]=N,a.directionalShadowMap[E]=Y,a.directionalShadowMatrix[E]=W.shadow.matrix,P++}a.directional[E]=Q,E++}else if(W.isSpotLight){const Q=n.get(W);Q.position.setFromMatrixPosition(W.matrixWorld),Q.color.copy(ne).multiplyScalar(le*D),Q.distance=de,Q.coneCos=Math.cos(W.angle),Q.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Q.decay=W.decay,a.spot[_]=Q;const q=W.shadow;if(W.map&&(a.spotLightMap[F]=W.map,F++,q.updateMatrices(W),W.castShadow&&re++),a.spotLightMatrix[_]=q.matrix,W.castShadow){const N=r.get(W);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,a.spotShadow[_]=N,a.spotShadowMap[_]=Y,I++}_++}else if(W.isRectAreaLight){const Q=n.get(W);Q.color.copy(ne).multiplyScalar(le),Q.halfWidth.set(W.width*.5,0,0),Q.halfHeight.set(0,W.height*.5,0),a.rectArea[C]=Q,C++}else if(W.isPointLight){const Q=n.get(W);if(Q.color.copy(W.color).multiplyScalar(W.intensity*D),Q.distance=W.distance,Q.decay=W.decay,W.castShadow){const q=W.shadow,N=r.get(W);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,a.pointShadow[x]=N,a.pointShadowMap[x]=Y,a.pointShadowMatrix[x]=W.shadow.matrix,H++}a.point[x]=Q,x++}else if(W.isHemisphereLight){const Q=n.get(W);Q.skyColor.copy(W.color).multiplyScalar(le*D),Q.groundColor.copy(W.groundColor).multiplyScalar(le*D),a.hemi[w]=Q,w++}}C>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ke.LTC_FLOAT_1,a.rectAreaLTC2=ke.LTC_FLOAT_2):(a.rectAreaLTC1=ke.LTC_HALF_1,a.rectAreaLTC2=ke.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ke.LTC_FLOAT_1,a.rectAreaLTC2=ke.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ke.LTC_HALF_1,a.rectAreaLTC2=ke.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=T;const ae=a.hash;(ae.directionalLength!==E||ae.pointLength!==x||ae.spotLength!==_||ae.rectAreaLength!==C||ae.hemiLength!==w||ae.numDirectionalShadows!==P||ae.numPointShadows!==H||ae.numSpotShadows!==I||ae.numSpotMaps!==F||ae.numLightProbes!==R)&&(a.directional.length=E,a.spot.length=_,a.rectArea.length=C,a.point.length=x,a.hemi.length=w,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=H,a.pointShadowMap.length=H,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=H,a.spotLightMatrix.length=I+F-re,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=re,a.numLightProbes=R,ae.directionalLength=E,ae.pointLength=x,ae.spotLength=_,ae.rectAreaLength=C,ae.hemiLength=w,ae.numDirectionalShadows=P,ae.numPointShadows=H,ae.numSpotShadows=I,ae.numSpotMaps=F,ae.numLightProbes=R,a.version=CE++)}function m(g,v){let y=0,S=0,T=0,E=0,x=0;const _=v.matrixWorldInverse;for(let C=0,w=g.length;C<w;C++){const P=g[C];if(P.isDirectionalLight){const H=a.directional[y];H.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(_),y++}else if(P.isSpotLight){const H=a.spot[T];H.position.setFromMatrixPosition(P.matrixWorld),H.position.applyMatrix4(_),H.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(_),T++}else if(P.isRectAreaLight){const H=a.rectArea[E];H.position.setFromMatrixPosition(P.matrixWorld),H.position.applyMatrix4(_),c.identity(),d.copy(P.matrixWorld),d.premultiply(_),c.extractRotation(d),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),H.halfWidth.applyMatrix4(c),H.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const H=a.point[S];H.position.setFromMatrixPosition(P.matrixWorld),H.position.applyMatrix4(_),S++}else if(P.isHemisphereLight){const H=a.hemi[x];H.direction.setFromMatrixPosition(P.matrixWorld),H.direction.transformDirection(_),x++}}}return{setup:h,setupView:m,state:a}}function Bm(s,e){const n=new PE(s,e),r=[],a=[];function l(){r.length=0,a.length=0}function d(v){r.push(v)}function c(v){a.push(v)}function h(v){n.setup(r,v)}function m(v){n.setupView(r,v)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:m,pushLight:d,pushShadow:c}}function LE(s,e){let n=new WeakMap;function r(l,d=0){const c=n.get(l);let h;return c===void 0?(h=new Bm(s,e),n.set(l,[h])):d>=c.length?(h=new Bm(s,e),c.push(h)):h=c[d],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class DE extends Er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UE extends Er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FE(s,e,n){let r=new Of;const a=new nt,l=new nt,d=new Ht,c=new DE({depthPacking:Rv}),h=new UE,m={},g=n.maxTextureSize,v={[Mr]:An,[An]:Mr,[Si]:Si},y=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:NE,fragmentShader:IE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Cn;T.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new wn(T,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let _=this.type;this.render=function(I,F,re){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const R=s.getRenderTarget(),D=s.getActiveCubeFace(),ae=s.getActiveMipmapLevel(),fe=s.state;fe.setBlending(vr),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const we=_!==zi&&this.type===zi,W=_===zi&&this.type!==zi;for(let ne=0,le=I.length;ne<le;ne++){const de=I[ne],Y=de.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const Q=Y.getFrameExtents();if(a.multiply(Q),l.copy(Y.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/Q.x),a.x=l.x*Q.x,Y.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/Q.y),a.y=l.y*Q.y,Y.mapSize.y=l.y)),Y.map===null||we===!0||W===!0){const N=this.type!==zi?{minFilter:En,magFilter:En}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $r(a.x,a.y,N),Y.map.texture.name=de.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const q=Y.getViewportCount();for(let N=0;N<q;N++){const j=Y.getViewport(N);d.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),fe.viewport(d),Y.updateMatrices(de,N),r=Y.getFrustum(),P(F,re,Y.camera,de,this.type)}Y.isPointLightShadow!==!0&&this.type===zi&&C(Y,re),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(R,D,ae)};function C(I,F){const re=e.update(E);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new $r(a.x,a.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,re,y,E,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,re,S,E,null)}function w(I,F,re,R){let D=null;const ae=re.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ae!==void 0)D=ae;else if(D=re.isPointLight===!0?h:c,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const fe=D.uuid,we=F.uuid;let W=m[fe];W===void 0&&(W={},m[fe]=W);let ne=W[we];ne===void 0&&(ne=D.clone(),W[we]=ne,F.addEventListener("dispose",H)),D=ne}if(D.visible=F.visible,D.wireframe=F.wireframe,R===zi?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:v[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,re.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const fe=s.properties.get(D);fe.light=re}return D}function P(I,F,re,R,D){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&D===zi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,I.matrixWorld);const we=e.update(I),W=I.material;if(Array.isArray(W)){const ne=we.groups;for(let le=0,de=ne.length;le<de;le++){const Y=ne[le],Q=W[Y.materialIndex];if(Q&&Q.visible){const q=w(I,Q,R,D);I.onBeforeShadow(s,I,F,re,we,q,Y),s.renderBufferDirect(re,null,we,q,I,Y),I.onAfterShadow(s,I,F,re,we,q,Y)}}}else if(W.visible){const ne=w(I,W,R,D);I.onBeforeShadow(s,I,F,re,we,ne,null),s.renderBufferDirect(re,null,we,ne,I,null),I.onAfterShadow(s,I,F,re,we,ne,null)}}const fe=I.children;for(let we=0,W=fe.length;we<W;we++)P(fe[we],F,re,R,D)}function H(I){I.target.removeEventListener("dispose",H);for(const re in m){const R=m[re],D=I.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function OE(s,e,n){const r=n.isWebGL2;function a(){let z=!1;const ve=new Ht;let Ne=null;const qe=new Ht(0,0,0,0);return{setMask:function(Qe){Ne!==Qe&&!z&&(s.colorMask(Qe,Qe,Qe,Qe),Ne=Qe)},setLocked:function(Qe){z=Qe},setClear:function(Qe,dt,ht,bt,Ot){Ot===!0&&(Qe*=bt,dt*=bt,ht*=bt),ve.set(Qe,dt,ht,bt),qe.equals(ve)===!1&&(s.clearColor(Qe,dt,ht,bt),qe.copy(ve))},reset:function(){z=!1,Ne=null,qe.set(-1,0,0,0)}}}function l(){let z=!1,ve=null,Ne=null,qe=null;return{setTest:function(Qe){Qe?Be(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(Qe){ve!==Qe&&!z&&(s.depthMask(Qe),ve=Qe)},setFunc:function(Qe){if(Ne!==Qe){switch(Qe){case iv:s.depthFunc(s.NEVER);break;case rv:s.depthFunc(s.ALWAYS);break;case sv:s.depthFunc(s.LESS);break;case Gl:s.depthFunc(s.LEQUAL);break;case ov:s.depthFunc(s.EQUAL);break;case av:s.depthFunc(s.GEQUAL);break;case lv:s.depthFunc(s.GREATER);break;case uv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Qe}},setLocked:function(Qe){z=Qe},setClear:function(Qe){qe!==Qe&&(s.clearDepth(Qe),qe=Qe)},reset:function(){z=!1,ve=null,Ne=null,qe=null}}}function d(){let z=!1,ve=null,Ne=null,qe=null,Qe=null,dt=null,ht=null,bt=null,Ot=null;return{setTest:function(vt){z||(vt?Be(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(vt){ve!==vt&&!z&&(s.stencilMask(vt),ve=vt)},setFunc:function(vt,zt,cn){(Ne!==vt||qe!==zt||Qe!==cn)&&(s.stencilFunc(vt,zt,cn),Ne=vt,qe=zt,Qe=cn)},setOp:function(vt,zt,cn){(dt!==vt||ht!==zt||bt!==cn)&&(s.stencilOp(vt,zt,cn),dt=vt,ht=zt,bt=cn)},setLocked:function(vt){z=vt},setClear:function(vt){Ot!==vt&&(s.clearStencil(vt),Ot=vt)},reset:function(){z=!1,ve=null,Ne=null,qe=null,Qe=null,dt=null,ht=null,bt=null,Ot=null}}}const c=new a,h=new l,m=new d,g=new WeakMap,v=new WeakMap;let y={},S={},T=new WeakMap,E=[],x=null,_=!1,C=null,w=null,P=null,H=null,I=null,F=null,re=null,R=new _t(0,0,0),D=0,ae=!1,fe=null,we=null,W=null,ne=null,le=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=Q>=2);let N=null,j={};const k=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),pe=new Ht().fromArray(k),Le=new Ht().fromArray($);function Ie(z,ve,Ne,qe){const Qe=new Uint8Array(4),dt=s.createTexture();s.bindTexture(z,dt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<Ne;ht++)r&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(ve,0,s.RGBA,1,1,qe,0,s.RGBA,s.UNSIGNED_BYTE,Qe):s.texImage2D(ve+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Qe);return dt}const ze={};ze[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ze[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ze[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ze[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Be(s.DEPTH_TEST),h.setFunc(Gl),at(!1),L(Ep),Be(s.CULL_FACE),Ye(vr);function Be(z){y[z]!==!0&&(s.enable(z),y[z]=!0)}function He(z){y[z]!==!1&&(s.disable(z),y[z]=!1)}function ft(z,ve){return S[z]!==ve?(s.bindFramebuffer(z,ve),S[z]=ve,r&&(z===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=ve),z===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=ve)),!0):!1}function ie(z,ve){let Ne=E,qe=!1;if(z)if(Ne=T.get(ve),Ne===void 0&&(Ne=[],T.set(ve,Ne)),z.isWebGLMultipleRenderTargets){const Qe=z.texture;if(Ne.length!==Qe.length||Ne[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,ht=Qe.length;dt<ht;dt++)Ne[dt]=s.COLOR_ATTACHMENT0+dt;Ne.length=Qe.length,qe=!0}}else Ne[0]!==s.COLOR_ATTACHMENT0&&(Ne[0]=s.COLOR_ATTACHMENT0,qe=!0);else Ne[0]!==s.BACK&&(Ne[0]=s.BACK,qe=!0);qe&&(n.isWebGL2?s.drawBuffers(Ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ne))}function Ft(z){return x!==z?(s.useProgram(z),x=z,!0):!1}const et={[Wr]:s.FUNC_ADD,[G_]:s.FUNC_SUBTRACT,[V_]:s.FUNC_REVERSE_SUBTRACT};if(r)et[Ap]=s.MIN,et[Rp]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(et[Ap]=z.MIN_EXT,et[Rp]=z.MAX_EXT)}const st={[W_]:s.ZERO,[X_]:s.ONE,[j_]:s.SRC_COLOR,[vf]:s.SRC_ALPHA,[Q_]:s.SRC_ALPHA_SATURATE,[K_]:s.DST_COLOR,[q_]:s.DST_ALPHA,[Y_]:s.ONE_MINUS_SRC_COLOR,[xf]:s.ONE_MINUS_SRC_ALPHA,[Z_]:s.ONE_MINUS_DST_COLOR,[$_]:s.ONE_MINUS_DST_ALPHA,[J_]:s.CONSTANT_COLOR,[ev]:s.ONE_MINUS_CONSTANT_COLOR,[tv]:s.CONSTANT_ALPHA,[nv]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(z,ve,Ne,qe,Qe,dt,ht,bt,Ot,vt){if(z===vr){_===!0&&(He(s.BLEND),_=!1);return}if(_===!1&&(Be(s.BLEND),_=!0),z!==H_){if(z!==C||vt!==ae){if((w!==Wr||I!==Wr)&&(s.blendEquation(s.FUNC_ADD),w=Wr,I=Wr),vt)switch(z){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hl:s.blendFunc(s.ONE,s.ONE);break;case Tp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}P=null,H=null,F=null,re=null,R.set(0,0,0),D=0,C=z,ae=vt}return}Qe=Qe||ve,dt=dt||Ne,ht=ht||qe,(ve!==w||Qe!==I)&&(s.blendEquationSeparate(et[ve],et[Qe]),w=ve,I=Qe),(Ne!==P||qe!==H||dt!==F||ht!==re)&&(s.blendFuncSeparate(st[Ne],st[qe],st[dt],st[ht]),P=Ne,H=qe,F=dt,re=ht),(bt.equals(R)===!1||Ot!==D)&&(s.blendColor(bt.r,bt.g,bt.b,Ot),R.copy(bt),D=Ot),C=z,ae=!1}function wt(z,ve){z.side===Si?He(s.CULL_FACE):Be(s.CULL_FACE);let Ne=z.side===An;ve&&(Ne=!Ne),at(Ne),z.blending===Zs&&z.transparent===!1?Ye(vr):Ye(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),h.setFunc(z.depthFunc),h.setTest(z.depthTest),h.setMask(z.depthWrite),c.setMask(z.colorWrite);const qe=z.stencilWrite;m.setTest(qe),qe&&(m.setMask(z.stencilWriteMask),m.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),m.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),J(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Be(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){fe!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),fe=z)}function L(z){z!==z_?(Be(s.CULL_FACE),z!==we&&(z===Ep?s.cullFace(s.BACK):z===k_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),we=z}function A(z){z!==W&&(Y&&s.lineWidth(z),W=z)}function J(z,ve,Ne){z?(Be(s.POLYGON_OFFSET_FILL),(ne!==ve||le!==Ne)&&(s.polygonOffset(ve,Ne),ne=ve,le=Ne)):He(s.POLYGON_OFFSET_FILL)}function Pe(z){z?Be(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function Ae(z){z===void 0&&(z=s.TEXTURE0+de-1),N!==z&&(s.activeTexture(z),N=z)}function De(z,ve,Ne){Ne===void 0&&(N===null?Ne=s.TEXTURE0+de-1:Ne=N);let qe=j[Ne];qe===void 0&&(qe={type:void 0,texture:void 0},j[Ne]=qe),(qe.type!==z||qe.texture!==ve)&&(N!==Ne&&(s.activeTexture(Ne),N=Ne),s.bindTexture(z,ve||ze[z]),qe.type=z,qe.texture=ve)}function he(){const z=j[N];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Te(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(z){pe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),pe.copy(z))}function te(z){Le.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Le.copy(z))}function Ce(z,ve){let Ne=v.get(ve);Ne===void 0&&(Ne=new WeakMap,v.set(ve,Ne));let qe=Ne.get(z);qe===void 0&&(qe=s.getUniformBlockIndex(ve,z.name),Ne.set(z,qe))}function Se(z,ve){const qe=v.get(ve).get(z);g.get(ve)!==qe&&(s.uniformBlockBinding(ve,qe,z.__bindingPointIndex),g.set(ve,qe))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},N=null,j={},S={},T=new WeakMap,E=[],x=null,_=!1,C=null,w=null,P=null,H=null,I=null,F=null,re=null,R=new _t(0,0,0),D=0,ae=!1,fe=null,we=null,W=null,ne=null,le=null,pe.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Be,disable:He,bindFramebuffer:ft,drawBuffers:ie,useProgram:Ft,setBlending:Ye,setMaterial:wt,setFlipSided:at,setCullFace:L,setLineWidth:A,setPolygonOffset:J,setScissorTest:Pe,activeTexture:Ae,bindTexture:De,unbindTexture:he,compressedTexImage2D:Te,compressedTexImage3D:ye,texImage2D:_e,texImage3D:Re,updateUBOMapping:Ce,uniformBlockBinding:Se,texStorage2D:X,texStorage3D:Me,texSubImage2D:Oe,texSubImage3D:We,compressedTexSubImage2D:me,compressedTexSubImage3D:Ze,scissor:U,viewport:te,reset:ge}}function zE(s,e,n,r,a,l,d){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return S?new OffscreenCanvas(L,A):Jo("canvas")}function E(L,A,J,Pe){let Ae=1;if((L.width>Pe||L.height>Pe)&&(Ae=Pe/Math.max(L.width,L.height)),Ae<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const De=A?Rf:Math.floor,he=De(Ae*L.width),Te=De(Ae*L.height);v===void 0&&(v=T(he,Te));const ye=J?T(he,Te):v;return ye.width=he,ye.height=Te,ye.getContext("2d").drawImage(L,0,0,he,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+he+"x"+Te+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return nm(L.width)&&nm(L.height)}function _(L){return c?!1:L.wrapS!==hi||L.wrapT!==hi||L.minFilter!==En&&L.minFilter!==ti}function C(L,A){return L.generateMipmaps&&A&&L.minFilter!==En&&L.minFilter!==ti}function w(L){s.generateMipmap(L)}function P(L,A,J,Pe,Ae=!1){if(c===!1)return A;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De=A;if(A===s.RED&&(J===s.FLOAT&&(De=s.R32F),J===s.HALF_FLOAT&&(De=s.R16F),J===s.UNSIGNED_BYTE&&(De=s.R8)),A===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(De=s.R8UI),J===s.UNSIGNED_SHORT&&(De=s.R16UI),J===s.UNSIGNED_INT&&(De=s.R32UI),J===s.BYTE&&(De=s.R8I),J===s.SHORT&&(De=s.R16I),J===s.INT&&(De=s.R32I)),A===s.RG&&(J===s.FLOAT&&(De=s.RG32F),J===s.HALF_FLOAT&&(De=s.RG16F),J===s.UNSIGNED_BYTE&&(De=s.RG8)),A===s.RGBA){const he=Ae?Vl:Rt.getTransfer(Pe);J===s.FLOAT&&(De=s.RGBA32F),J===s.HALF_FLOAT&&(De=s.RGBA16F),J===s.UNSIGNED_BYTE&&(De=he===It?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(De=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(De=s.RGB5_A1)}return(De===s.R16F||De===s.R32F||De===s.RG16F||De===s.RG32F||De===s.RGBA16F||De===s.RGBA32F)&&e.get("EXT_color_buffer_float"),De}function H(L,A,J){return C(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==En&&L.minFilter!==ti?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function I(L){return L===En||L===Cp||L===Fc?s.NEAREST:s.LINEAR}function F(L){const A=L.target;A.removeEventListener("dispose",F),R(A),A.isVideoTexture&&g.delete(A)}function re(L){const A=L.target;A.removeEventListener("dispose",re),ae(A)}function R(L){const A=r.get(L);if(A.__webglInit===void 0)return;const J=L.source,Pe=y.get(J);if(Pe){const Ae=Pe[A.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&D(L),Object.keys(Pe).length===0&&y.delete(J)}r.remove(L)}function D(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const J=L.source,Pe=y.get(J);delete Pe[A.__cacheKey],d.memory.textures--}function ae(L){const A=L.texture,J=r.get(L),Pe=r.get(A);if(Pe.__webglTexture!==void 0&&(s.deleteTexture(Pe.__webglTexture),d.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++){if(Array.isArray(J.__webglFramebuffer[Ae]))for(let De=0;De<J.__webglFramebuffer[Ae].length;De++)s.deleteFramebuffer(J.__webglFramebuffer[Ae][De]);else s.deleteFramebuffer(J.__webglFramebuffer[Ae]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[Ae])}else{if(Array.isArray(J.__webglFramebuffer))for(let Ae=0;Ae<J.__webglFramebuffer.length;Ae++)s.deleteFramebuffer(J.__webglFramebuffer[Ae]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let Ae=0;Ae<J.__webglColorRenderbuffer.length;Ae++)J.__webglColorRenderbuffer[Ae]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[Ae]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Ae=0,De=A.length;Ae<De;Ae++){const he=r.get(A[Ae]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(A[Ae])}r.remove(A),r.remove(L)}let fe=0;function we(){fe=0}function W(){const L=fe;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),fe+=1,L}function ne(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function le(L,A){const J=r.get(L);if(L.isVideoTexture&&wt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const Pe=L.image;if(Pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(J,L,A);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+A)}function de(L,A){const J=r.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+A)}function Y(L,A){const J=r.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,A);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+A)}function Q(L,A){const J=r.get(L);if(L.version>0&&J.__version!==L.version){Le(J,L,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+A)}const q={[Mf]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[Ef]:s.MIRRORED_REPEAT},N={[En]:s.NEAREST,[Cp]:s.NEAREST_MIPMAP_NEAREST,[Fc]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[_v]:s.LINEAR_MIPMAP_NEAREST,[Zo]:s.LINEAR_MIPMAP_LINEAR},j={[bv]:s.NEVER,[Iv]:s.ALWAYS,[Pv]:s.LESS,[Ag]:s.LEQUAL,[Lv]:s.EQUAL,[Nv]:s.GEQUAL,[Dv]:s.GREATER,[Uv]:s.NOTEQUAL};function k(L,A,J){if(J?(s.texParameteri(L,s.TEXTURE_WRAP_S,q[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,q[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,q[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[A.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==hi||A.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,I(A.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,I(A.minFilter)),A.minFilter!==En&&A.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,j[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Pe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===En||A.minFilter!==Fc&&A.minFilter!==Zo||A.type===_r&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(s.texParameterf(L,Pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function $(L,A){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",F));const Pe=A.source;let Ae=y.get(Pe);Ae===void 0&&(Ae={},y.set(Pe,Ae));const De=ne(A);if(De!==L.__cacheKey){Ae[De]===void 0&&(Ae[De]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,J=!0),Ae[De].usedTimes++;const he=Ae[L.__cacheKey];he!==void 0&&(Ae[L.__cacheKey].usedTimes--,he.usedTimes===0&&D(A)),L.__cacheKey=De,L.__webglTexture=Ae[De].texture}return J}function pe(L,A,J){let Pe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Pe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Pe=s.TEXTURE_3D);const Ae=$(L,A),De=A.source;n.bindTexture(Pe,L.__webglTexture,s.TEXTURE0+J);const he=r.get(De);if(De.version!==he.__version||Ae===!0){n.activeTexture(s.TEXTURE0+J);const Te=Rt.getPrimaries(Rt.workingColorSpace),ye=A.colorSpace===ii?null:Rt.getPrimaries(A.colorSpace),Oe=A.colorSpace===ii||Te===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const We=_(A)&&x(A.image)===!1;let me=E(A.image,We,!1,a.maxTextureSize);me=at(A,me);const Ze=x(me)||c,X=l.convert(A.format,A.colorSpace);let Me=l.convert(A.type),_e=P(A.internalFormat,X,Me,A.colorSpace,A.isVideoTexture);k(Pe,A,Ze);let Re;const U=A.mipmaps,te=c&&A.isVideoTexture!==!0&&_e!==Eg,Ce=he.__version===void 0||Ae===!0,Se=H(A,me,Ze);if(A.isDepthTexture)_e=s.DEPTH_COMPONENT,c?A.type===_r?_e=s.DEPTH_COMPONENT32F:A.type===gr?_e=s.DEPTH_COMPONENT24:A.type===jr?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:A.type===_r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Yr&&_e===s.DEPTH_COMPONENT&&A.type!==Nf&&A.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=gr,Me=l.convert(A.type)),A.format===to&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,A.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=jr,Me=l.convert(A.type))),Ce&&(te?n.texStorage2D(s.TEXTURE_2D,1,_e,me.width,me.height):n.texImage2D(s.TEXTURE_2D,0,_e,me.width,me.height,0,X,Me,null));else if(A.isDataTexture)if(U.length>0&&Ze){te&&Ce&&n.texStorage2D(s.TEXTURE_2D,Se,_e,U[0].width,U[0].height);for(let ge=0,z=U.length;ge<z;ge++)Re=U[ge],te?n.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,X,Me,Re.data):n.texImage2D(s.TEXTURE_2D,ge,_e,Re.width,Re.height,0,X,Me,Re.data);A.generateMipmaps=!1}else te?(Ce&&n.texStorage2D(s.TEXTURE_2D,Se,_e,me.width,me.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,X,Me,me.data)):n.texImage2D(s.TEXTURE_2D,0,_e,me.width,me.height,0,X,Me,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){te&&Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Se,_e,U[0].width,U[0].height,me.depth);for(let ge=0,z=U.length;ge<z;ge++)Re=U[ge],A.format!==pi?X!==null?te?n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,X,Re.data,0,0):n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,_e,Re.width,Re.height,me.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?n.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,me.depth,X,Me,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ge,_e,Re.width,Re.height,me.depth,0,X,Me,Re.data)}else{te&&Ce&&n.texStorage2D(s.TEXTURE_2D,Se,_e,U[0].width,U[0].height);for(let ge=0,z=U.length;ge<z;ge++)Re=U[ge],A.format!==pi?X!==null?te?n.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,X,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,ge,_e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?n.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,X,Me,Re.data):n.texImage2D(s.TEXTURE_2D,ge,_e,Re.width,Re.height,0,X,Me,Re.data)}else if(A.isDataArrayTexture)te?(Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Se,_e,me.width,me.height,me.depth),n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,X,Me,me.data)):n.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,me.width,me.height,me.depth,0,X,Me,me.data);else if(A.isData3DTexture)te?(Ce&&n.texStorage3D(s.TEXTURE_3D,Se,_e,me.width,me.height,me.depth),n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,X,Me,me.data)):n.texImage3D(s.TEXTURE_3D,0,_e,me.width,me.height,me.depth,0,X,Me,me.data);else if(A.isFramebufferTexture){if(Ce)if(te)n.texStorage2D(s.TEXTURE_2D,Se,_e,me.width,me.height);else{let ge=me.width,z=me.height;for(let ve=0;ve<Se;ve++)n.texImage2D(s.TEXTURE_2D,ve,_e,ge,z,0,X,Me,null),ge>>=1,z>>=1}}else if(U.length>0&&Ze){te&&Ce&&n.texStorage2D(s.TEXTURE_2D,Se,_e,U[0].width,U[0].height);for(let ge=0,z=U.length;ge<z;ge++)Re=U[ge],te?n.texSubImage2D(s.TEXTURE_2D,ge,0,0,X,Me,Re):n.texImage2D(s.TEXTURE_2D,ge,_e,X,Me,Re);A.generateMipmaps=!1}else te?(Ce&&n.texStorage2D(s.TEXTURE_2D,Se,_e,me.width,me.height),n.texSubImage2D(s.TEXTURE_2D,0,0,0,X,Me,me)):n.texImage2D(s.TEXTURE_2D,0,_e,X,Me,me);C(A,Ze)&&w(Pe),he.__version=De.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Le(L,A,J){if(A.image.length!==6)return;const Pe=$(L,A),Ae=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const De=r.get(Ae);if(Ae.version!==De.__version||Pe===!0){n.activeTexture(s.TEXTURE0+J);const he=Rt.getPrimaries(Rt.workingColorSpace),Te=A.colorSpace===ii?null:Rt.getPrimaries(A.colorSpace),ye=A.colorSpace===ii||he===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Oe=A.isCompressedTexture||A.image[0].isCompressedTexture,We=A.image[0]&&A.image[0].isDataTexture,me=[];for(let ge=0;ge<6;ge++)!Oe&&!We?me[ge]=E(A.image[ge],!1,!0,a.maxCubemapSize):me[ge]=We?A.image[ge].image:A.image[ge],me[ge]=at(A,me[ge]);const Ze=me[0],X=x(Ze)||c,Me=l.convert(A.format,A.colorSpace),_e=l.convert(A.type),Re=P(A.internalFormat,Me,_e,A.colorSpace),U=c&&A.isVideoTexture!==!0,te=De.__version===void 0||Pe===!0;let Ce=H(A,Ze,X);k(s.TEXTURE_CUBE_MAP,A,X);let Se;if(Oe){U&&te&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,Re,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){Se=me[ge].mipmaps;for(let z=0;z<Se.length;z++){const ve=Se[z];A.format!==pi?Me!==null?U?n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,0,0,ve.width,ve.height,Me,ve.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,0,0,ve.width,ve.height,Me,_e,ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z,Re,ve.width,ve.height,0,Me,_e,ve.data)}}}else{Se=A.mipmaps,U&&te&&(Se.length>0&&Ce++,n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,Re,me[0].width,me[0].height));for(let ge=0;ge<6;ge++)if(We){U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,me[ge].width,me[ge].height,Me,_e,me[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,me[ge].width,me[ge].height,0,Me,_e,me[ge].data);for(let z=0;z<Se.length;z++){const Ne=Se[z].image[ge].image;U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,0,0,Ne.width,Ne.height,Me,_e,Ne.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,Re,Ne.width,Ne.height,0,Me,_e,Ne.data)}}else{U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Me,_e,me[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,Me,_e,me[ge]);for(let z=0;z<Se.length;z++){const ve=Se[z];U?n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,0,0,Me,_e,ve.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,z+1,Re,Me,_e,ve.image[ge])}}}C(A,X)&&w(s.TEXTURE_CUBE_MAP),De.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ie(L,A,J,Pe,Ae,De){const he=l.convert(J.format,J.colorSpace),Te=l.convert(J.type),ye=P(J.internalFormat,he,Te,J.colorSpace);if(!r.get(A).__hasExternalTextures){const We=Math.max(1,A.width>>De),me=Math.max(1,A.height>>De);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?n.texImage3D(Ae,De,ye,We,me,A.depth,0,he,Te,null):n.texImage2D(Ae,De,ye,We,me,0,he,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Ye(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,Ae,r.get(J).__webglTexture,0,st(A)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Pe,Ae,r.get(J).__webglTexture,De),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,A,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let Pe=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(J||Ye(A)){const Ae=A.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===_r?Pe=s.DEPTH_COMPONENT32F:Ae.type===gr&&(Pe=s.DEPTH_COMPONENT24));const De=st(A);Ye(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Pe,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Pe,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,Pe,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const Pe=st(A);J&&Ye(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,s.DEPTH24_STENCIL8,A.width,A.height):Ye(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const Pe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Ae=0;Ae<Pe.length;Ae++){const De=Pe[Ae],he=l.convert(De.format,De.colorSpace),Te=l.convert(De.type),ye=P(De.internalFormat,he,Te,De.colorSpace),Oe=st(A);J&&Ye(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,ye,A.width,A.height):Ye(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Oe,ye,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ye,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),le(A.depthTexture,0);const Pe=r.get(A.depthTexture).__webglTexture,Ae=st(A);if(A.depthTexture.format===Yr)Ye(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Pe,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Pe,0);else if(A.depthTexture.format===to)Ye(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Pe,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Pe,0);else throw new Error("Unknown depthTexture format")}function He(L){const A=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Be(A.__webglFramebuffer,L)}else if(J){A.__webglDepthbuffer=[];for(let Pe=0;Pe<6;Pe++)n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Pe]),A.__webglDepthbuffer[Pe]=s.createRenderbuffer(),ze(A.__webglDepthbuffer[Pe],L,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ze(A.__webglDepthbuffer,L,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(L,A,J){const Pe=r.get(L);A!==void 0&&Ie(Pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&He(L)}function ie(L){const A=L.texture,J=r.get(L),Pe=r.get(A);L.addEventListener("dispose",re),L.isWebGLMultipleRenderTargets!==!0&&(Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture()),Pe.__version=A.version,d.memory.textures++);const Ae=L.isWebGLCubeRenderTarget===!0,De=L.isWebGLMultipleRenderTargets===!0,he=x(L)||c;if(Ae){J.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(c&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Te]=[];for(let ye=0;ye<A.mipmaps.length;ye++)J.__webglFramebuffer[Te][ye]=s.createFramebuffer()}else J.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Te=0;Te<A.mipmaps.length;Te++)J.__webglFramebuffer[Te]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(De)if(a.drawBuffers){const Te=L.texture;for(let ye=0,Oe=Te.length;ye<Oe;ye++){const We=r.get(Te[ye]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&Ye(L)===!1){const Te=De?A:[A];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ye=0;ye<Te.length;ye++){const Oe=Te[ye];J.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ye]);const We=l.convert(Oe.format,Oe.colorSpace),me=l.convert(Oe.type),Ze=P(Oe.internalFormat,We,me,Oe.colorSpace,L.isXRRenderTarget===!0),X=st(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,Ze,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,J.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){n.bindTexture(s.TEXTURE_CUBE_MAP,Pe.__webglTexture),k(s.TEXTURE_CUBE_MAP,A,he);for(let Te=0;Te<6;Te++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)Ie(J.__webglFramebuffer[Te][ye],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ye);else Ie(J.__webglFramebuffer[Te],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);C(A,he)&&w(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){const Te=L.texture;for(let ye=0,Oe=Te.length;ye<Oe;ye++){const We=Te[ye],me=r.get(We);n.bindTexture(s.TEXTURE_2D,me.__webglTexture),k(s.TEXTURE_2D,We,he),Ie(J.__webglFramebuffer,L,We,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),C(We,he)&&w(s.TEXTURE_2D)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Te=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Te,Pe.__webglTexture),k(Te,A,he),c&&A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)Ie(J.__webglFramebuffer[ye],L,A,s.COLOR_ATTACHMENT0,Te,ye);else Ie(J.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,Te,0);C(A,he)&&w(Te),n.unbindTexture()}L.depthBuffer&&He(L)}function Ft(L){const A=x(L)||c,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Pe=0,Ae=J.length;Pe<Ae;Pe++){const De=J[Pe];if(C(De,A)){const he=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=r.get(De).__webglTexture;n.bindTexture(he,Te),w(he),n.unbindTexture()}}}function et(L){if(c&&L.samples>0&&Ye(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,Pe=L.height;let Ae=s.COLOR_BUFFER_BIT;const De=[],he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=r.get(L),ye=L.isWebGLMultipleRenderTargets===!0;if(ye)for(let Oe=0;Oe<A.length;Oe++)n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){De.push(s.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&De.push(he);const We=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(We===!1&&(L.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),ye&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]),We===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[he]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[he])),ye){const me=r.get(A[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,J,Pe,0,0,J,Pe,Ae,s.NEAREST),m&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De)}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Oe=0;Oe<A.length;Oe++){n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const We=r.get(A[Oe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,We,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function st(L){return Math.min(a.maxSamples,L.samples)}function Ye(L){const A=r.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function wt(L){const A=d.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function at(L,A){const J=L.colorSpace,Pe=L.format,Ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===wf||J!==Hi&&J!==ii&&(Rt.getTransfer(J)===It?c===!1?e.has("EXT_sRGB")===!0&&Pe===pi?(L.format=wf,L.minFilter=ti,L.generateMipmaps=!1):A=Cg.sRGBToLinear(A):(Pe!==pi||Ae!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=W,this.resetTextureUnits=we,this.setTexture2D=le,this.setTexture2DArray=de,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=ft,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ye}function kE(s,e,n){const r=n.isWebGL2;function a(l,d=ii){let c;const h=Rt.getTransfer(d);if(l===yr)return s.UNSIGNED_BYTE;if(l===vg)return s.UNSIGNED_SHORT_4_4_4_4;if(l===xg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===vv)return s.BYTE;if(l===xv)return s.SHORT;if(l===Nf)return s.UNSIGNED_SHORT;if(l===_g)return s.INT;if(l===gr)return s.UNSIGNED_INT;if(l===_r)return s.FLOAT;if(l===Qo)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===yv)return s.ALPHA;if(l===pi)return s.RGBA;if(l===Sv)return s.LUMINANCE;if(l===Mv)return s.LUMINANCE_ALPHA;if(l===Yr)return s.DEPTH_COMPONENT;if(l===to)return s.DEPTH_STENCIL;if(l===wf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Ev)return s.RED;if(l===yg)return s.RED_INTEGER;if(l===Tv)return s.RG;if(l===Sg)return s.RG_INTEGER;if(l===Mg)return s.RGBA_INTEGER;if(l===Oc||l===zc||l===kc||l===Bc)if(h===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===bp||l===Pp||l===Lp||l===Dp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===bp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Pp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Lp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Dp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Eg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Up||l===Np)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Up)return h===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Np)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Ip||l===Fp||l===Op||l===zp||l===kp||l===Bp||l===Hp||l===Gp||l===Vp||l===Wp||l===Xp||l===jp||l===Yp||l===qp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Ip)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Fp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Op)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===zp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===kp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Bp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Hp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Gp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Vp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Wp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Xp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===jp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Yp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===qp)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Hc||l===$p||l===Kp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Hc)return h===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===$p)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Kp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===wv||l===Zp||l===Qp||l===Jp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Hc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Zp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Qp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Jp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===jr?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class BE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,d=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,r),_=this._getHandJoint(m,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new $s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class GE extends Qr{constructor(e,n){super();const r=this;let a=null,l=1,d=null,c="local-floor",h=1,m=null,g=null,v=null,y=null,S=null,T=null;const E=n.getContextAttributes();let x=null,_=null;const C=[],w=[],P=new nt;let H=null;const I=new jn;I.layers.enable(1),I.viewport=new Ht;const F=new jn;F.layers.enable(2),F.viewport=new Ht;const re=[I,F],R=new BE;R.layers.enable(1),R.layers.enable(2);let D=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=C[k];return $===void 0&&($=new df,C[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=C[k];return $===void 0&&($=new df,C[k]=$),$.getGripSpace()},this.getHand=function(k){let $=C[k];return $===void 0&&($=new df,C[k]=$),$.getHandSpace()};function fe(k){const $=w.indexOf(k.inputSource);if($===-1)return;const pe=C[$];pe!==void 0&&(pe.update(k.inputSource,k.frame,m||d),pe.dispatchEvent({type:k.type,data:k.inputSource}))}function we(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",we),a.removeEventListener("inputsourceschange",W);for(let k=0;k<C.length;k++){const $=w[k];$!==null&&(w[k]=null,C[k].disconnect($))}D=null,ae=null,e.setRenderTarget(x),S=null,y=null,v=null,a=null,_=null,j.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){l=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){c=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(k){if(a=k,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",we),a.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(P),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,$),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new $r(S.framebufferWidth,S.framebufferHeight,{format:pi,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let $=null,pe=null,Le=null;E.depth&&(Le=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=E.stencil?to:Yr,pe=E.stencil?jr:gr);const Ie={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:l};v=new XRWebGLBinding(a,n),y=v.createProjectionLayer(Ie),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),_=new $r(y.textureWidth,y.textureHeight,{format:pi,type:yr,depthTexture:new zg(y.textureWidth,y.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const ze=e.properties.get(_);ze.__ignoreDepthValues=y.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(c),j.setContext(a),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function W(k){for(let $=0;$<k.removed.length;$++){const pe=k.removed[$],Le=w.indexOf(pe);Le>=0&&(w[Le]=null,C[Le].disconnect(pe))}for(let $=0;$<k.added.length;$++){const pe=k.added[$];let Le=w.indexOf(pe);if(Le===-1){for(let ze=0;ze<C.length;ze++)if(ze>=w.length){w.push(pe),Le=ze;break}else if(w[ze]===null){w[ze]=pe,Le=ze;break}if(Le===-1)break}const Ie=C[Le];Ie&&Ie.connect(pe)}}const ne=new G,le=new G;function de(k,$,pe){ne.setFromMatrixPosition($.matrixWorld),le.setFromMatrixPosition(pe.matrixWorld);const Le=ne.distanceTo(le),Ie=$.projectionMatrix.elements,ze=pe.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),He=Ie[14]/(Ie[10]+1),ft=(Ie[9]+1)/Ie[5],ie=(Ie[9]-1)/Ie[5],Ft=(Ie[8]-1)/Ie[0],et=(ze[8]+1)/ze[0],st=Be*Ft,Ye=Be*et,wt=Le/(-Ft+et),at=wt*-Ft;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(at),k.translateZ(wt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const L=Be+wt,A=He+wt,J=st-at,Pe=Ye+(Le-at),Ae=ft*He/A*L,De=ie*He/A*L;k.projectionMatrix.makePerspective(J,Pe,Ae,De,L,A),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(a===null)return;R.near=F.near=I.near=k.near,R.far=F.far=I.far=k.far,(D!==R.near||ae!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,ae=R.far);const $=k.parent,pe=R.cameras;Y(R,$);for(let Le=0;Le<pe.length;Le++)Y(pe[Le],$);pe.length===2?de(R,I,F):R.projectionMatrix.copy(I.projectionMatrix),Q(k,R,$)};function Q(k,$,pe){pe===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(pe.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Af*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(k){h=k,y!==null&&(y.fixedFoveation=k),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=k)};let q=null;function N(k,$){if(g=$.getViewerPose(m||d),T=$,g!==null){const pe=g.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Le=!1;pe.length!==R.cameras.length&&(R.cameras.length=0,Le=!0);for(let Ie=0;Ie<pe.length;Ie++){const ze=pe[Ie];let Be=null;if(S!==null)Be=S.getViewport(ze);else{const ft=v.getViewSubImage(y,ze);Be=ft.viewport,Ie===0&&(e.setRenderTargetTextures(_,ft.colorTexture,y.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(_))}let He=re[Ie];He===void 0&&(He=new jn,He.layers.enable(Ie),He.viewport=new Ht,re[Ie]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Be.x,Be.y,Be.width,Be.height),Ie===0&&(R.matrix.copy(He.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Le===!0&&R.cameras.push(He)}}for(let pe=0;pe<C.length;pe++){const Le=w[pe],Ie=C[pe];Le!==null&&Ie!==void 0&&Ie.update(Le,$,m||d)}q&&q(k,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),T=null}const j=new Og;j.setAnimationLoop(N),this.setAnimationLoop=function(k){q=k},this.dispose=function(){}}}function VE(s,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Ng(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,C,w,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),g(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,P)):_.isMeshMatcapMaterial?(l(x,_),T(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),E(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?h(x,_,C,w):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===An&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===An&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(x.envMap.value=C,x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*w,n(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,C,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=w*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function WE(s,e,n,r){let a={},l={},d=[];const c=n.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(C,w){const P=w.program;r.uniformBlockBinding(C,P)}function m(C,w){let P=a[C.id];P===void 0&&(T(C),P=g(C),a[C.id]=P,C.addEventListener("dispose",x));const H=w.program;r.updateUBOMapping(C,H);const I=e.render.frame;l[C.id]!==I&&(y(C),l[C.id]=I)}function g(C){const w=v();C.__bindingPointIndex=w;const P=s.createBuffer(),H=C.__size,I=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,P),P}function v(){for(let C=0;C<c;C++)if(d.indexOf(C)===-1)return d.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(C){const w=a[C.id],P=C.uniforms,H=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let I=0,F=P.length;I<F;I++){const re=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,D=re.length;R<D;R++){const ae=re[R];if(S(ae,I,R,H)===!0){const fe=ae.__offset,we=Array.isArray(ae.value)?ae.value:[ae.value];let W=0;for(let ne=0;ne<we.length;ne++){const le=we[ne],de=E(le);typeof le=="number"||typeof le=="boolean"?(ae.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,fe+W,ae.__data)):le.isMatrix3?(ae.__data[0]=le.elements[0],ae.__data[1]=le.elements[1],ae.__data[2]=le.elements[2],ae.__data[3]=0,ae.__data[4]=le.elements[3],ae.__data[5]=le.elements[4],ae.__data[6]=le.elements[5],ae.__data[7]=0,ae.__data[8]=le.elements[6],ae.__data[9]=le.elements[7],ae.__data[10]=le.elements[8],ae.__data[11]=0):(le.toArray(ae.__data,W),W+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,fe,ae.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,w,P,H){const I=C.value,F=w+"_"+P;if(H[F]===void 0)return typeof I=="number"||typeof I=="boolean"?H[F]=I:H[F]=I.clone(),!0;{const re=H[F];if(typeof I=="number"||typeof I=="boolean"){if(re!==I)return H[F]=I,!0}else if(re.equals(I)===!1)return re.copy(I),!0}return!1}function T(C){const w=C.uniforms;let P=0;const H=16;for(let F=0,re=w.length;F<re;F++){const R=Array.isArray(w[F])?w[F]:[w[F]];for(let D=0,ae=R.length;D<ae;D++){const fe=R[D],we=Array.isArray(fe.value)?fe.value:[fe.value];for(let W=0,ne=we.length;W<ne;W++){const le=we[W],de=E(le),Y=P%H;Y!==0&&H-Y<de.boundary&&(P+=H-Y),fe.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=P,P+=de.storage}}}const I=P%H;return I>0&&(P+=H-I),C.__size=P,C.__cache={},this}function E(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function x(C){const w=C.target;w.removeEventListener("dispose",x);const P=d.indexOf(w.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(a[w.id]),delete a[w.id],delete l[w.id]}function _(){for(const C in a)s.deleteBuffer(a[C]);d=[],a={},l={}}return{bind:h,update:m,dispose:_}}class Wg{constructor(e={}){const{canvas:n=kv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=d;const S=new Uint32Array(4),T=new Int32Array(4);let E=null,x=null;const _=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const w=this;let P=!1,H=0,I=0,F=null,re=-1,R=null;const D=new Ht,ae=new Ht;let fe=null;const we=new _t(0);let W=0,ne=n.width,le=n.height,de=1,Y=null,Q=null;const q=new Ht(0,0,ne,le),N=new Ht(0,0,ne,le);let j=!1;const k=new Of;let $=!1,pe=!1,Le=null;const Ie=new Dt,ze=new nt,Be=new G,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return F===null?de:1}let ie=r;function Ft(b,Z){for(let ue=0;ue<b.length;ue++){const ce=b[ue],oe=n.getContext(ce,Z);if(oe!==null)return oe}return null}try{const b={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",z,!1),n.addEventListener("webglcontextcreationerror",ve,!1),ie===null){const Z=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&Z.shift(),ie=Ft(Z,b),ie===null)throw Ft(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ie instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,st,Ye,wt,at,L,A,J,Pe,Ae,De,he,Te,ye,Oe,We,me,Ze,X,Me,_e,Re,U,te;function Ce(){et=new eM(ie),st=new YS(ie,et,e),et.init(st),Re=new kE(ie,et,st),Ye=new OE(ie,et,st),wt=new iM(ie),at=new EE,L=new zE(ie,et,Ye,at,st,Re,wt),A=new $S(w),J=new JS(w),Pe=new cx(ie,st),U=new XS(ie,et,Pe,st),Ae=new tM(ie,Pe,wt,U),De=new aM(ie,Ae,Pe,wt),X=new oM(ie,st,L),We=new qS(at),he=new ME(w,A,J,et,st,U,We),Te=new VE(w,at),ye=new wE,Oe=new LE(et,st),Ze=new WS(w,A,J,Ye,De,y,h),me=new FE(w,De,st),te=new WE(ie,wt,st,Ye),Me=new jS(ie,et,wt,st),_e=new nM(ie,et,wt,st),wt.programs=he.programs,w.capabilities=st,w.extensions=et,w.properties=at,w.renderLists=ye,w.shadowMap=me,w.state=Ye,w.info=wt}Ce();const Se=new GE(w,ie);this.xr=Se,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(b){b!==void 0&&(de=b,this.setSize(ne,le,!1))},this.getSize=function(b){return b.set(ne,le)},this.setSize=function(b,Z,ue=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,le=Z,n.width=Math.floor(b*de),n.height=Math.floor(Z*de),ue===!0&&(n.style.width=b+"px",n.style.height=Z+"px"),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(ne*de,le*de).floor()},this.setDrawingBufferSize=function(b,Z,ue){ne=b,le=Z,de=ue,n.width=Math.floor(b*ue),n.height=Math.floor(Z*ue),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,Z,ue,ce){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,Z,ue,ce),Ye.viewport(D.copy(q).multiplyScalar(de).floor())},this.getScissor=function(b){return b.copy(N)},this.setScissor=function(b,Z,ue,ce){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,Z,ue,ce),Ye.scissor(ae.copy(N).multiplyScalar(de).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){Ye.setScissorTest(j=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(b=!0,Z=!0,ue=!0){let ce=0;if(b){let oe=!1;if(F!==null){const Ge=F.texture.format;oe=Ge===Mg||Ge===Sg||Ge===yg}if(oe){const Ge=F.texture.type,tt=Ge===yr||Ge===gr||Ge===Nf||Ge===jr||Ge===vg||Ge===xg,ot=Ze.getClearColor(),Xe=Ze.getClearAlpha(),pt=ot.r,ut=ot.g,ct=ot.b;tt?(S[0]=pt,S[1]=ut,S[2]=ct,S[3]=Xe,ie.clearBufferuiv(ie.COLOR,0,S)):(T[0]=pt,T[1]=ut,T[2]=ct,T[3]=Xe,ie.clearBufferiv(ie.COLOR,0,T))}else ce|=ie.COLOR_BUFFER_BIT}Z&&(ce|=ie.DEPTH_BUFFER_BIT),ue&&(ce|=ie.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",z,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),Oe.dispose(),at.dispose(),A.dispose(),J.dispose(),De.dispose(),U.dispose(),te.dispose(),he.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ot),Se.removeEventListener("sessionend",vt),Le&&(Le.dispose(),Le=null),zt.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=wt.autoReset,Z=me.enabled,ue=me.autoUpdate,ce=me.needsUpdate,oe=me.type;Ce(),wt.autoReset=b,me.enabled=Z,me.autoUpdate=ue,me.needsUpdate=ce,me.type=oe}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const Z=b.target;Z.removeEventListener("dispose",Ne),qe(Z)}function qe(b){Qe(b),at.remove(b)}function Qe(b){const Z=at.get(b).programs;Z!==void 0&&(Z.forEach(function(ue){he.releaseProgram(ue)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,ue,ce,oe,Ge){Z===null&&(Z=He);const tt=oe.isMesh&&oe.matrixWorld.determinant()<0,ot=Jl(b,Z,ue,ce,oe);Ye.setMaterial(ce,tt);let Xe=ue.index,pt=1;if(ce.wireframe===!0){if(Xe=Ae.getWireframeAttribute(ue),Xe===void 0)return;pt=2}const ut=ue.drawRange,ct=ue.attributes.position;let Pt=ut.start*pt,_n=(ut.start+ut.count)*pt;Ge!==null&&(Pt=Math.max(Pt,Ge.start*pt),_n=Math.min(_n,(Ge.start+Ge.count)*pt)),Xe!==null?(Pt=Math.max(Pt,0),_n=Math.min(_n,Xe.count)):ct!=null&&(Pt=Math.max(Pt,0),_n=Math.min(_n,ct.count));const jt=_n-Pt;if(jt<0||jt===1/0)return;U.setup(oe,ce,ot,ue,Xe);let bn,St=Me;if(Xe!==null&&(bn=Pe.get(Xe),St=_e,St.setIndex(bn)),oe.isMesh)ce.wireframe===!0?(Ye.setLineWidth(ce.wireframeLinewidth*ft()),St.setMode(ie.LINES)):St.setMode(ie.TRIANGLES);else if(oe.isLine){let mt=ce.linewidth;mt===void 0&&(mt=1),Ye.setLineWidth(mt*ft()),oe.isLineSegments?St.setMode(ie.LINES):oe.isLineLoop?St.setMode(ie.LINE_LOOP):St.setMode(ie.LINE_STRIP)}else oe.isPoints?St.setMode(ie.POINTS):oe.isSprite&&St.setMode(ie.TRIANGLES);if(oe.isBatchedMesh)St.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)St.renderInstances(Pt,jt,oe.count);else if(ue.isInstancedBufferGeometry){const mt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,vn=Math.min(ue.instanceCount,mt);St.renderInstances(Pt,jt,vn)}else St.render(Pt,jt)};function dt(b,Z,ue){b.transparent===!0&&b.side===Si&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,Gi(b,Z,ue),b.side=Mr,b.needsUpdate=!0,Gi(b,Z,ue),b.side=Si):Gi(b,Z,ue)}this.compile=function(b,Z,ue=null){ue===null&&(ue=b),x=Oe.get(ue),x.init(),C.push(x),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),b!==ue&&b.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Z.layers)&&(x.pushLight(oe),oe.castShadow&&x.pushShadow(oe))}),x.setupLights(w._useLegacyLights);const ce=new Set;return b.traverse(function(oe){const Ge=oe.material;if(Ge)if(Array.isArray(Ge))for(let tt=0;tt<Ge.length;tt++){const ot=Ge[tt];dt(ot,ue,oe),ce.add(ot)}else dt(Ge,ue,oe),ce.add(Ge)}),C.pop(),x=null,ce},this.compileAsync=function(b,Z,ue=null){const ce=this.compile(b,Z,ue);return new Promise(oe=>{function Ge(){if(ce.forEach(function(tt){at.get(tt).currentProgram.isReady()&&ce.delete(tt)}),ce.size===0){oe(b);return}setTimeout(Ge,10)}et.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let ht=null;function bt(b){ht&&ht(b)}function Ot(){zt.stop()}function vt(){zt.start()}const zt=new Og;zt.setAnimationLoop(bt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(b){ht=b,Se.setAnimationLoop(b),b===null?zt.stop():zt.start()},Se.addEventListener("sessionstart",Ot),Se.addEventListener("sessionend",vt),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Z),Z=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,Z,F),x=Oe.get(b,C.length),x.init(),C.push(x),Ie.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k.setFromProjectionMatrix(Ie),pe=this.localClippingEnabled,$=We.init(this.clippingPlanes,pe),E=ye.get(b,_.length),E.init(),_.push(E),cn(b,Z,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(Y,Q),this.info.render.frame++,$===!0&&We.beginShadows();const ue=x.state.shadowsArray;if(me.render(ue,b,Z),$===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(E,b),x.setupLights(w._useLegacyLights),Z.isArrayCamera){const ce=Z.cameras;for(let oe=0,Ge=ce.length;oe<Ge;oe++){const tt=ce[oe];na(E,b,tt,tt.viewport)}}else na(E,b,Z);F!==null&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(w,b,Z),U.resetDefaultState(),re=-1,R=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function cn(b,Z,ue,ce){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)ue=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){ce&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ie);const tt=De.update(b),ot=b.material;ot.visible&&E.push(b,tt,ot,ue,Be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){const tt=De.update(b),ot=b.material;if(ce&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),Be.copy(tt.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(Ie)),Array.isArray(ot)){const Xe=tt.groups;for(let pt=0,ut=Xe.length;pt<ut;pt++){const ct=Xe[pt],Pt=ot[ct.materialIndex];Pt&&Pt.visible&&E.push(b,tt,Pt,ue,Be.z,ct)}}else ot.visible&&E.push(b,tt,ot,ue,Be.z,null)}}const Ge=b.children;for(let tt=0,ot=Ge.length;tt<ot;tt++)cn(Ge[tt],Z,ue,ce)}function na(b,Z,ue,ce){const oe=b.opaque,Ge=b.transmissive,tt=b.transparent;x.setupLightsView(ue),$===!0&&We.setGlobalState(w.clippingPlanes,ue),Ge.length>0&&Tr(oe,Ge,Z,ue),ce&&Ye.viewport(D.copy(ce)),oe.length>0&&Mi(oe,Z,ue),Ge.length>0&&Mi(Ge,Z,ue),tt.length>0&&Mi(tt,Z,ue),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Tr(b,Z,ue,ce){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;const Ge=st.isWebGL2;Le===null&&(Le=new $r(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?Qo:yr,minFilter:Zo,samples:Ge?4:0})),w.getDrawingBufferSize(ze),Ge?Le.setSize(ze.x,ze.y):Le.setSize(Rf(ze.x),Rf(ze.y));const tt=w.getRenderTarget();w.setRenderTarget(Le),w.getClearColor(we),W=w.getClearAlpha(),W<1&&w.setClearColor(16777215,.5),w.clear();const ot=w.toneMapping;w.toneMapping=xr,Mi(b,ue,ce),L.updateMultisampleRenderTarget(Le),L.updateRenderTargetMipmap(Le);let Xe=!1;for(let pt=0,ut=Z.length;pt<ut;pt++){const ct=Z[pt],Pt=ct.object,_n=ct.geometry,jt=ct.material,bn=ct.group;if(jt.side===Si&&Pt.layers.test(ce.layers)){const St=jt.side;jt.side=An,jt.needsUpdate=!0,wr(Pt,ue,ce,_n,jt,bn),jt.side=St,jt.needsUpdate=!0,Xe=!0}}Xe===!0&&(L.updateMultisampleRenderTarget(Le),L.updateRenderTargetMipmap(Le)),w.setRenderTarget(tt),w.setClearColor(we,W),w.toneMapping=ot}function Mi(b,Z,ue){const ce=Z.isScene===!0?Z.overrideMaterial:null;for(let oe=0,Ge=b.length;oe<Ge;oe++){const tt=b[oe],ot=tt.object,Xe=tt.geometry,pt=ce===null?tt.material:ce,ut=tt.group;ot.layers.test(ue.layers)&&wr(ot,Z,ue,Xe,pt,ut)}}function wr(b,Z,ue,ce,oe,Ge){b.onBeforeRender(w,Z,ue,ce,oe,Ge),b.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),oe.onBeforeRender(w,Z,ue,ce,b,Ge),oe.transparent===!0&&oe.side===Si&&oe.forceSinglePass===!1?(oe.side=An,oe.needsUpdate=!0,w.renderBufferDirect(ue,Z,ce,oe,b,Ge),oe.side=Mr,oe.needsUpdate=!0,w.renderBufferDirect(ue,Z,ce,oe,b,Ge),oe.side=Si):w.renderBufferDirect(ue,Z,ce,oe,b,Ge),b.onAfterRender(w,Z,ue,ce,oe,Ge)}function Gi(b,Z,ue){Z.isScene!==!0&&(Z=He);const ce=at.get(b),oe=x.state.lights,Ge=x.state.shadowsArray,tt=oe.state.version,ot=he.getParameters(b,oe.state,Ge,Z,ue),Xe=he.getProgramCacheKey(ot);let pt=ce.programs;ce.environment=b.isMeshStandardMaterial?Z.environment:null,ce.fog=Z.fog,ce.envMap=(b.isMeshStandardMaterial?J:A).get(b.envMap||ce.environment),pt===void 0&&(b.addEventListener("dispose",Ne),pt=new Map,ce.programs=pt);let ut=pt.get(Xe);if(ut!==void 0){if(ce.currentProgram===ut&&ce.lightsStateVersion===tt)return ra(b,ot),ut}else ot.uniforms=he.getUniforms(b),b.onBuild(ue,ot,w),b.onBeforeCompile(ot,w),ut=he.acquireProgram(ot,Xe),pt.set(Xe,ut),ce.uniforms=ot.uniforms;const ct=ce.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ct.clippingPlanes=We.uniform),ra(b,ot),ce.needsLights=sa(b),ce.lightsStateVersion=tt,ce.needsLights&&(ct.ambientLightColor.value=oe.state.ambient,ct.lightProbe.value=oe.state.probe,ct.directionalLights.value=oe.state.directional,ct.directionalLightShadows.value=oe.state.directionalShadow,ct.spotLights.value=oe.state.spot,ct.spotLightShadows.value=oe.state.spotShadow,ct.rectAreaLights.value=oe.state.rectArea,ct.ltc_1.value=oe.state.rectAreaLTC1,ct.ltc_2.value=oe.state.rectAreaLTC2,ct.pointLights.value=oe.state.point,ct.pointLightShadows.value=oe.state.pointShadow,ct.hemisphereLights.value=oe.state.hemi,ct.directionalShadowMap.value=oe.state.directionalShadowMap,ct.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ct.spotShadowMap.value=oe.state.spotShadowMap,ct.spotLightMatrix.value=oe.state.spotLightMatrix,ct.spotLightMap.value=oe.state.spotLightMap,ct.pointShadowMap.value=oe.state.pointShadowMap,ct.pointShadowMatrix.value=oe.state.pointShadowMatrix),ce.currentProgram=ut,ce.uniformsList=null,ut}function ia(b){if(b.uniformsList===null){const Z=b.currentProgram.getUniforms();b.uniformsList=Bl.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function ra(b,Z){const ue=at.get(b);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function Jl(b,Z,ue,ce,oe){Z.isScene!==!0&&(Z=He),L.resetTextureUnits();const Ge=Z.fog,tt=ce.isMeshStandardMaterial?Z.environment:null,ot=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Hi,Xe=(ce.isMeshStandardMaterial?J:A).get(ce.envMap||tt),pt=ce.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ut=!!ue.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),ct=!!ue.morphAttributes.position,Pt=!!ue.morphAttributes.normal,_n=!!ue.morphAttributes.color;let jt=xr;ce.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(jt=w.toneMapping);const bn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,St=bn!==void 0?bn.length:0,mt=at.get(ce),vn=x.state.lights;if($===!0&&(pe===!0||b!==R)){const Pn=b===R&&ce.id===re;We.setState(ce,b,Pn)}let kt=!1;ce.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==vn.state.version||mt.outputColorSpace!==ot||oe.isBatchedMesh&&mt.batching===!1||!oe.isBatchedMesh&&mt.batching===!0||oe.isInstancedMesh&&mt.instancing===!1||!oe.isInstancedMesh&&mt.instancing===!0||oe.isSkinnedMesh&&mt.skinning===!1||!oe.isSkinnedMesh&&mt.skinning===!0||oe.isInstancedMesh&&mt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&mt.instancingColor===!1&&oe.instanceColor!==null||mt.envMap!==Xe||ce.fog===!0&&mt.fog!==Ge||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==We.numPlanes||mt.numIntersection!==We.numIntersection)||mt.vertexAlphas!==pt||mt.vertexTangents!==ut||mt.morphTargets!==ct||mt.morphNormals!==Pt||mt.morphColors!==_n||mt.toneMapping!==jt||st.isWebGL2===!0&&mt.morphTargetsCount!==St)&&(kt=!0):(kt=!0,mt.__version=ce.version);let Ti=mt.currentProgram;kt===!0&&(Ti=Gi(ce,Z,oe));let oa=!1,mi=!1,Vi=!1;const Wt=Ti.getUniforms(),Yn=mt.uniforms;if(Ye.useProgram(Ti.program)&&(oa=!0,mi=!0,Vi=!0),ce.id!==re&&(re=ce.id,mi=!0),oa||R!==b){Wt.setValue(ie,"projectionMatrix",b.projectionMatrix),Wt.setValue(ie,"viewMatrix",b.matrixWorldInverse);const Pn=Wt.map.cameraPosition;Pn!==void 0&&Pn.setValue(ie,Be.setFromMatrixPosition(b.matrixWorld)),st.logarithmicDepthBuffer&&Wt.setValue(ie,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Wt.setValue(ie,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,mi=!0,Vi=!0)}if(oe.isSkinnedMesh){Wt.setOptional(ie,oe,"bindMatrix"),Wt.setOptional(ie,oe,"bindMatrixInverse");const Pn=oe.skeleton;Pn&&(st.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Wt.setValue(ie,"boneTexture",Pn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}oe.isBatchedMesh&&(Wt.setOptional(ie,oe,"batchingTexture"),Wt.setValue(ie,"batchingTexture",oe._matricesTexture,L));const ro=ue.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&st.isWebGL2===!0)&&X.update(oe,ue,Ti),(mi||mt.receiveShadow!==oe.receiveShadow)&&(mt.receiveShadow=oe.receiveShadow,Wt.setValue(ie,"receiveShadow",oe.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Yn.envMap.value=Xe,Yn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),mi&&(Wt.setValue(ie,"toneMappingExposure",w.toneMappingExposure),mt.needsLights&&Ei(Yn,Vi),Ge&&ce.fog===!0&&Te.refreshFogUniforms(Yn,Ge),Te.refreshMaterialUniforms(Yn,ce,de,le,Le),Bl.upload(ie,ia(mt),Yn,L)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Bl.upload(ie,ia(mt),Yn,L),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Wt.setValue(ie,"center",oe.center),Wt.setValue(ie,"modelViewMatrix",oe.modelViewMatrix),Wt.setValue(ie,"normalMatrix",oe.normalMatrix),Wt.setValue(ie,"modelMatrix",oe.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Pn=ce.uniformsGroups;for(let Ar=0,aa=Pn.length;Ar<aa;Ar++)if(st.isWebGL2){const ts=Pn[Ar];te.update(ts,Ti),te.bind(ts,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function Ei(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function sa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,Z,ue){at.get(b.texture).__webglTexture=Z,at.get(b.depthTexture).__webglTexture=ue;const ce=at.get(b);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=ue===void 0,ce.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,Z){const ue=at.get(b);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(b,Z=0,ue=0){F=b,H=Z,I=ue;let ce=!0,oe=null,Ge=!1,tt=!1;if(b){const Xe=at.get(b);Xe.__useDefaultFramebuffer!==void 0?(Ye.bindFramebuffer(ie.FRAMEBUFFER,null),ce=!1):Xe.__webglFramebuffer===void 0?L.setupRenderTarget(b):Xe.__hasExternalTextures&&L.rebindTextures(b,at.get(b.texture).__webglTexture,at.get(b.depthTexture).__webglTexture);const pt=b.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(tt=!0);const ut=at.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ut[Z])?oe=ut[Z][ue]:oe=ut[Z],Ge=!0):st.isWebGL2&&b.samples>0&&L.useMultisampledRTT(b)===!1?oe=at.get(b).__webglMultisampledFramebuffer:Array.isArray(ut)?oe=ut[ue]:oe=ut,D.copy(b.viewport),ae.copy(b.scissor),fe=b.scissorTest}else D.copy(q).multiplyScalar(de).floor(),ae.copy(N).multiplyScalar(de).floor(),fe=j;if(Ye.bindFramebuffer(ie.FRAMEBUFFER,oe)&&st.drawBuffers&&ce&&Ye.drawBuffers(b,oe),Ye.viewport(D),Ye.scissor(ae),Ye.setScissorTest(fe),Ge){const Xe=at.get(b.texture);ie.framebufferTexture2D(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,ie.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Xe.__webglTexture,ue)}else if(tt){const Xe=at.get(b.texture),pt=Z||0;ie.framebufferTextureLayer(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,Xe.__webglTexture,ue||0,pt)}re=-1},this.readRenderTargetPixels=function(b,Z,ue,ce,oe,Ge,tt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=at.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&tt!==void 0&&(ot=ot[tt]),ot){Ye.bindFramebuffer(ie.FRAMEBUFFER,ot);try{const Xe=b.texture,pt=Xe.format,ut=Xe.type;if(pt!==pi&&Re.convert(pt)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=ut===Qo&&(et.has("EXT_color_buffer_half_float")||st.isWebGL2&&et.has("EXT_color_buffer_float"));if(ut!==yr&&Re.convert(ut)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===_r&&(st.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-ce&&ue>=0&&ue<=b.height-oe&&ie.readPixels(Z,ue,ce,oe,Re.convert(pt),Re.convert(ut),Ge)}finally{const Xe=F!==null?at.get(F).__webglFramebuffer:null;Ye.bindFramebuffer(ie.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(b,Z,ue=0){const ce=Math.pow(2,-ue),oe=Math.floor(Z.image.width*ce),Ge=Math.floor(Z.image.height*ce);L.setTexture2D(Z,0),ie.copyTexSubImage2D(ie.TEXTURE_2D,ue,0,0,b.x,b.y,oe,Ge),Ye.unbindTexture()},this.copyTextureToTexture=function(b,Z,ue,ce=0){const oe=Z.image.width,Ge=Z.image.height,tt=Re.convert(ue.format),ot=Re.convert(ue.type);L.setTexture2D(ue,0),ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,ue.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,ue.unpackAlignment),Z.isDataTexture?ie.texSubImage2D(ie.TEXTURE_2D,ce,b.x,b.y,oe,Ge,tt,ot,Z.image.data):Z.isCompressedTexture?ie.compressedTexSubImage2D(ie.TEXTURE_2D,ce,b.x,b.y,Z.mipmaps[0].width,Z.mipmaps[0].height,tt,Z.mipmaps[0].data):ie.texSubImage2D(ie.TEXTURE_2D,ce,b.x,b.y,tt,ot,Z.image),ce===0&&ue.generateMipmaps&&ie.generateMipmap(ie.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,ue,ce,oe=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=b.max.x-b.min.x+1,tt=b.max.y-b.min.y+1,ot=b.max.z-b.min.z+1,Xe=Re.convert(ce.format),pt=Re.convert(ce.type);let ut;if(ce.isData3DTexture)L.setTexture3D(ce,0),ut=ie.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)L.setTexture2DArray(ce,0),ut=ie.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,ce.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,ce.unpackAlignment);const ct=ie.getParameter(ie.UNPACK_ROW_LENGTH),Pt=ie.getParameter(ie.UNPACK_IMAGE_HEIGHT),_n=ie.getParameter(ie.UNPACK_SKIP_PIXELS),jt=ie.getParameter(ie.UNPACK_SKIP_ROWS),bn=ie.getParameter(ie.UNPACK_SKIP_IMAGES),St=ue.isCompressedTexture?ue.mipmaps[oe]:ue.image;ie.pixelStorei(ie.UNPACK_ROW_LENGTH,St.width),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,St.height),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,b.min.x),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,b.min.y),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,b.min.z),ue.isDataTexture||ue.isData3DTexture?ie.texSubImage3D(ut,oe,Z.x,Z.y,Z.z,Ge,tt,ot,Xe,pt,St.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(ut,oe,Z.x,Z.y,Z.z,Ge,tt,ot,Xe,St.data)):ie.texSubImage3D(ut,oe,Z.x,Z.y,Z.z,Ge,tt,ot,Xe,pt,St),ie.pixelStorei(ie.UNPACK_ROW_LENGTH,ct),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,Pt),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,_n),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,jt),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,bn),oe===0&&ce.generateMipmaps&&ie.generateMipmap(ut),Ye.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Ye.unbindTexture()},this.resetState=function(){H=0,I=0,F=null,Ye.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===If?"display-p3":"srgb",n.unpackColorSpace=Rt.workingColorSpace===Kl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?qr:Tg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?Qt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class XE extends Wg{}XE.prototype.isWebGL1Renderer=!0;class Bf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(e),this.density=n}clone(){return new Bf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jE extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class YE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Tf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new G;class ql{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ki(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ki(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ki(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ki(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),r=Ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),r=Ct(r,this.array),a=Ct(a,this.array),l=Ct(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return new On(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bf extends Er{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gs;const Vo=new G,Vs=new G,Ws=new G,Xs=new nt,Wo=new nt,Xg=new Dt,Ll=new G,Xo=new G,Dl=new G,Hm=new nt,hf=new nt,Gm=new nt;class Vm extends Jt{constructor(e=new bf){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Cn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new YE(n,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new ql(r,3,0,!1)),Gs.setAttribute("uv",new ql(r,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new nt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Xg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const d=this.center;Ul(Ll.set(-.5,-.5,0),Ws,d,Vs,a,l),Ul(Xo.set(.5,-.5,0),Ws,d,Vs,a,l),Ul(Dl.set(.5,.5,0),Ws,d,Vs,a,l),Hm.set(0,0),hf.set(1,0),Gm.set(1,1);let c=e.ray.intersectTriangle(Ll,Xo,Dl,!1,Vo);if(c===null&&(Ul(Xo.set(-.5,.5,0),Ws,d,Vs,a,l),hf.set(0,1),c=e.ray.intersectTriangle(Ll,Dl,Xo,!1,Vo),c===null))return;const h=e.ray.origin.distanceTo(Vo);h<e.near||h>e.far||n.push({distance:h,point:Vo.clone(),uv:ni.getInterpolation(Vo,Ll,Xo,Dl,Hm,hf,Gm,new nt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ul(s,e,n,r,a,l){Xs.subVectors(s,n).addScalar(.5).multiply(r),a!==void 0?(Wo.x=l*Xs.x-a*Xs.y,Wo.y=a*Xs.x+l*Xs.y):Wo.copy(Xs),s.copy(e),s.x+=Wo.x,s.y+=Wo.y,s.applyMatrix4(Xg)}class Wm extends On{constructor(e,n,r,a=1){super(e,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new Dt,Xm=new Dt,Nl=[],jm=new Jr,qE=new Dt,jo=new wn,Yo=new es;class $E extends wn{constructor(e,n,r){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Wm(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,qE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,js),jm.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(jm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,js),Yo.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Yo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const r=this.matrixWorld,a=this.count;if(jo.geometry=this.geometry,jo.material=this.material,jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yo.copy(this.boundingSphere),Yo.applyMatrix4(r),e.ray.intersectsSphere(Yo)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,js),Xm.multiplyMatrices(r,js),jo.matrixWorld=Xm,jo.raycast(e,Nl);for(let d=0,c=Nl.length;d<c;d++){const h=Nl[d];h.instanceId=l,h.object=this,n.push(h)}Nl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Wm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class jg extends Er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ym=new G,qm=new G,$m=new Dt,pf=new ea,Il=new es;class KE extends Jt{constructor(e=new Cn,n=new jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Ym.fromBufferAttribute(n,a-1),qm.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Ym.distanceTo(qm);e.setAttribute("lineDistance",new un(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(a),Il.radius+=l,e.ray.intersectsSphere(Il)===!1)return;$m.copy(a).invert(),pf.copy(e.ray).applyMatrix4($m);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=new G,g=new G,v=new G,y=new G,S=this.isLineSegments?2:1,T=r.index,x=r.attributes.position;if(T!==null){const _=Math.max(0,d.start),C=Math.min(T.count,d.start+d.count);for(let w=_,P=C-1;w<P;w+=S){const H=T.getX(w),I=T.getX(w+1);if(m.fromBufferAttribute(x,H),g.fromBufferAttribute(x,I),pf.distanceSqToSegment(m,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const re=e.ray.origin.distanceTo(y);re<e.near||re>e.far||n.push({distance:re,point:v.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,d.start),C=Math.min(x.count,d.start+d.count);for(let w=_,P=C-1;w<P;w+=S){if(m.fromBufferAttribute(x,w),g.fromBufferAttribute(x,w+1),pf.distanceSqToSegment(m,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(y);I<e.near||I>e.far||n.push({distance:I,point:v.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class Yg extends Er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new Dt,Pf=new ea,Fl=new es,Ol=new G;class ZE extends Jt{constructor(e=new Cn,n=new Yg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(a),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;Km.copy(a).invert(),Pf.copy(e.ray).applyMatrix4(Km);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=r.index,v=r.attributes.position;if(m!==null){const y=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let T=y,E=S;T<E;T++){const x=m.getX(T);Ol.fromBufferAttribute(v,x),Zm(Ol,x,h,a,e,n,this)}}else{const y=Math.max(0,d.start),S=Math.min(v.count,d.start+d.count);for(let T=y,E=S;T<E;T++)Ol.fromBufferAttribute(v,T),Zm(Ol,T,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Zm(s,e,n,r,a,l,d){const c=Pf.distanceSqToPoint(s);if(c<n){const h=new G;Pf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:d})}}class Qm extends Rn{constructor(e,n,r,a,l,d,c,h,m){super(e,n,r,a,l,d,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hf extends Cn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],d=[];c(a),m(r),g(),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(l.slice(),3)),this.setAttribute("uv",new un(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function c(C){const w=new G,P=new G,H=new G;for(let I=0;I<n.length;I+=3)S(n[I+0],w),S(n[I+1],P),S(n[I+2],H),h(w,P,H,C)}function h(C,w,P,H){const I=H+1,F=[];for(let re=0;re<=I;re++){F[re]=[];const R=C.clone().lerp(P,re/I),D=w.clone().lerp(P,re/I),ae=I-re;for(let fe=0;fe<=ae;fe++)fe===0&&re===I?F[re][fe]=R:F[re][fe]=R.clone().lerp(D,fe/ae)}for(let re=0;re<I;re++)for(let R=0;R<2*(I-re)-1;R++){const D=Math.floor(R/2);R%2===0?(y(F[re][D+1]),y(F[re+1][D]),y(F[re][D])):(y(F[re][D+1]),y(F[re+1][D+1]),y(F[re+1][D]))}}function m(C){const w=new G;for(let P=0;P<l.length;P+=3)w.x=l[P+0],w.y=l[P+1],w.z=l[P+2],w.normalize().multiplyScalar(C),l[P+0]=w.x,l[P+1]=w.y,l[P+2]=w.z}function g(){const C=new G;for(let w=0;w<l.length;w+=3){C.x=l[w+0],C.y=l[w+1],C.z=l[w+2];const P=x(C)/2/Math.PI+.5,H=_(C)/Math.PI+.5;d.push(P,1-H)}T(),v()}function v(){for(let C=0;C<d.length;C+=6){const w=d[C+0],P=d[C+2],H=d[C+4],I=Math.max(w,P,H),F=Math.min(w,P,H);I>.9&&F<.1&&(w<.2&&(d[C+0]+=1),P<.2&&(d[C+2]+=1),H<.2&&(d[C+4]+=1))}}function y(C){l.push(C.x,C.y,C.z)}function S(C,w){const P=C*3;w.x=e[P+0],w.y=e[P+1],w.z=e[P+2]}function T(){const C=new G,w=new G,P=new G,H=new G,I=new nt,F=new nt,re=new nt;for(let R=0,D=0;R<l.length;R+=9,D+=6){C.set(l[R+0],l[R+1],l[R+2]),w.set(l[R+3],l[R+4],l[R+5]),P.set(l[R+6],l[R+7],l[R+8]),I.set(d[D+0],d[D+1]),F.set(d[D+2],d[D+3]),re.set(d[D+4],d[D+5]),H.copy(C).add(w).add(P).divideScalar(3);const ae=x(H);E(I,D+0,C,ae),E(F,D+2,w,ae),E(re,D+4,P,ae)}}function E(C,w,P,H){H<0&&C.x===1&&(d[w]=C.x-1),P.x===0&&P.z===0&&(d[w]=H/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.vertices,e.indices,e.radius,e.details)}}class Gf extends Hf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Gf(e.radius,e.detail)}}class Vf extends Cn{constructor(e=.5,n=1,r=32,a=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:d},r=Math.max(3,r),a=Math.max(1,a);const c=[],h=[],m=[],g=[];let v=e;const y=(n-e)/a,S=new G,T=new nt;for(let E=0;E<=a;E++){for(let x=0;x<=r;x++){const _=l+x/r*d;S.x=v*Math.cos(_),S.y=v*Math.sin(_),h.push(S.x,S.y,S.z),m.push(0,0,1),T.x=(S.x/n+1)/2,T.y=(S.y/n+1)/2,g.push(T.x,T.y)}v+=y}for(let E=0;E<a;E++){const x=E*(r+1);for(let _=0;_<r;_++){const C=_+x,w=C,P=C+r+1,H=C+r+2,I=C+1;c.push(w,P,I),c.push(P,H,I)}}this.setIndex(c),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ks extends Cn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,d=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:d,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(d+c,Math.PI);let m=0;const g=[],v=new G,y=new G,S=[],T=[],E=[],x=[];for(let _=0;_<=r;_++){const C=[],w=_/r;let P=0;_===0&&d===0?P=.5/n:_===r&&h===Math.PI&&(P=-.5/n);for(let H=0;H<=n;H++){const I=H/n;v.x=-e*Math.cos(a+I*l)*Math.sin(d+w*c),v.y=e*Math.cos(d+w*c),v.z=e*Math.sin(a+I*l)*Math.sin(d+w*c),T.push(v.x,v.y,v.z),y.copy(v).normalize(),E.push(y.x,y.y,y.z),x.push(I+P,1-w),C.push(m++)}g.push(C)}for(let _=0;_<r;_++)for(let C=0;C<n;C++){const w=g[_][C+1],P=g[_][C],H=g[_+1][C],I=g[_+1][C+1];(_!==0||d>0)&&S.push(w,P,I),(_!==r-1||h<Math.PI)&&S.push(P,H,I)}this.setIndex(S),this.setAttribute("position",new un(T,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pr extends Er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wg,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Jm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class QE{constructor(e,n,r){const a=this;let l=!1,d=0,c=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){c++,l===!1&&a.onStart!==void 0&&a.onStart(g,d,c),l=!0},this.itemEnd=function(g){d++,a.onProgress!==void 0&&a.onProgress(g,d,c),d===c&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null}}}const JE=new QE;class Wf{constructor(e){this.manager=e!==void 0?e:JE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,l){r.load(e,a,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wf.DEFAULT_MATERIAL_NAME="__DEFAULT";class e1 extends Wf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Jm.get(e);if(d!==void 0)return l.manager.itemStart(e),setTimeout(function(){n&&n(d),l.manager.itemEnd(e)},0),d;const c=Jo("img");function h(){g(),Jm.add(e,this),n&&n(this),l.manager.itemEnd(e)}function m(v){g(),a&&a(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){c.removeEventListener("load",h,!1),c.removeEventListener("error",m,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class eg extends Wf{constructor(e){super(e)}load(e,n,r,a){const l=new Rn,d=new e1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(c){l.image=c,l.needsUpdate=!0,n!==void 0&&n(l)},r,a),l}}class Xf extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class t1 extends Xf{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const mf=new Dt,tg=new G,ng=new G;class n1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(tg),ng.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ng),n.updateMatrixWorld(),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ig=new Dt,qo=new G,gf=new G;class i1 extends n1{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),qo.setFromMatrixPosition(e.matrixWorld),r.position.copy(qo),gf.copy(r.position),gf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(gf),r.updateMatrixWorld(),a.makeTranslation(-qo.x,-qo.y,-qo.z),ig.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ig)}}class r1 extends Xf{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class s1 extends Xf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1{constructor(e,n,r=0,a=1/0){this.ray=new ea(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return Lf(e,this,r,n),r.sort(rg),r}intersectObjects(e,n=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Lf(e[a],this,r,n);return r.sort(rg),r}}function rg(s,e){return s.distance-e.distance}function Lf(s,e,n,r){if(s.layers.test(e.layers)&&s.raycast(e,n),r===!0){const a=s.children;for(let l=0,d=a.length;l<d;l++)Lf(a[l],e,n,!0)}}class sg{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);const og={type:"change"},_f={type:"start"},ag={type:"end"},zl=new ea,lg=new mr,a1=Math.cos(70*zv.DEG2RAD);class l1 extends Qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Oe),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(og),r.update(),l=a.NONE},this.update=(function(){const U=new G,te=new Kr().setFromUnitVectors(e.up,new G(0,1,0)),Ce=te.clone().invert(),Se=new G,ge=new Kr,z=new G,ve=2*Math.PI;return function(qe=null){const Qe=r.object.position;U.copy(Qe).sub(r.target),U.applyQuaternion(te),c.setFromVector3(U),r.autoRotate&&l===a.NONE&&fe(D(qe)),r.enableDamping?(c.theta+=h.theta*r.dampingFactor,c.phi+=h.phi*r.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let dt=r.minAzimuthAngle,ht=r.maxAzimuthAngle;isFinite(dt)&&isFinite(ht)&&(dt<-Math.PI?dt+=ve:dt>Math.PI&&(dt-=ve),ht<-Math.PI?ht+=ve:ht>Math.PI&&(ht-=ve),dt<=ht?c.theta=Math.max(dt,Math.min(ht,c.theta)):c.theta=c.theta>(dt+ht)/2?Math.max(dt,c.theta):Math.min(ht,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&I||r.object.isOrthographicCamera?c.radius=q(c.radius):c.radius=q(c.radius*m),U.setFromSpherical(c),U.applyQuaternion(Ce),Qe.copy(r.target).add(U),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let bt=!1;if(r.zoomToCursor&&I){let Ot=null;if(r.object.isPerspectiveCamera){const vt=U.length();Ot=q(vt*m);const zt=vt-Ot;r.object.position.addScaledVector(P,zt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const vt=new G(H.x,H.y,0);vt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),bt=!0;const zt=new G(H.x,H.y,0);zt.unproject(r.object),r.object.position.sub(zt).add(vt),r.object.updateMatrixWorld(),Ot=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Ot!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Ot).add(r.object.position):(zl.origin.copy(r.object.position),zl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(zl.direction))<a1?e.lookAt(r.target):(lg.setFromNormalAndCoplanarPoint(r.object.up,r.target),zl.intersectPlane(lg,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),bt=!0);return m=1,I=!1,bt||Se.distanceToSquared(r.object.position)>d||8*(1-ge.dot(r.object.quaternion))>d||z.distanceToSquared(r.target)>0?(r.dispatchEvent(og),Se.copy(r.object.position),ge.copy(r.object.quaternion),z.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Ze),r.domElement.removeEventListener("pointerdown",L),r.domElement.removeEventListener("pointercancel",J),r.domElement.removeEventListener("wheel",De),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",J),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Oe),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const d=1e-6,c=new sg,h=new sg;let m=1;const g=new G,v=new nt,y=new nt,S=new nt,T=new nt,E=new nt,x=new nt,_=new nt,C=new nt,w=new nt,P=new G,H=new nt;let I=!1;const F=[],re={};let R=!1;function D(U){return U!==null?2*Math.PI/60*r.autoRotateSpeed*U:2*Math.PI/60/60*r.autoRotateSpeed}function ae(U){const te=Math.abs(U*.01);return Math.pow(.95,r.zoomSpeed*te)}function fe(U){h.theta-=U}function we(U){h.phi-=U}const W=(function(){const U=new G;return function(Ce,Se){U.setFromMatrixColumn(Se,0),U.multiplyScalar(-Ce),g.add(U)}})(),ne=(function(){const U=new G;return function(Ce,Se){r.screenSpacePanning===!0?U.setFromMatrixColumn(Se,1):(U.setFromMatrixColumn(Se,0),U.crossVectors(r.object.up,U)),U.multiplyScalar(Ce),g.add(U)}})(),le=(function(){const U=new G;return function(Ce,Se){const ge=r.domElement;if(r.object.isPerspectiveCamera){const z=r.object.position;U.copy(z).sub(r.target);let ve=U.length();ve*=Math.tan(r.object.fov/2*Math.PI/180),W(2*Ce*ve/ge.clientHeight,r.object.matrix),ne(2*Se*ve/ge.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(W(Ce*(r.object.right-r.object.left)/r.object.zoom/ge.clientWidth,r.object.matrix),ne(Se*(r.object.top-r.object.bottom)/r.object.zoom/ge.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function de(U){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Y(U){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Q(U,te){if(!r.zoomToCursor)return;I=!0;const Ce=r.domElement.getBoundingClientRect(),Se=U-Ce.left,ge=te-Ce.top,z=Ce.width,ve=Ce.height;H.x=Se/z*2-1,H.y=-(ge/ve)*2+1,P.set(H.x,H.y,1).unproject(r.object).sub(r.object.position).normalize()}function q(U){return Math.max(r.minDistance,Math.min(r.maxDistance,U))}function N(U){v.set(U.clientX,U.clientY)}function j(U){Q(U.clientX,U.clientX),_.set(U.clientX,U.clientY)}function k(U){T.set(U.clientX,U.clientY)}function $(U){y.set(U.clientX,U.clientY),S.subVectors(y,v).multiplyScalar(r.rotateSpeed);const te=r.domElement;fe(2*Math.PI*S.x/te.clientHeight),we(2*Math.PI*S.y/te.clientHeight),v.copy(y),r.update()}function pe(U){C.set(U.clientX,U.clientY),w.subVectors(C,_),w.y>0?de(ae(w.y)):w.y<0&&Y(ae(w.y)),_.copy(C),r.update()}function Le(U){E.set(U.clientX,U.clientY),x.subVectors(E,T).multiplyScalar(r.panSpeed),le(x.x,x.y),T.copy(E),r.update()}function Ie(U){Q(U.clientX,U.clientY),U.deltaY<0?Y(ae(U.deltaY)):U.deltaY>0&&de(ae(U.deltaY)),r.update()}function ze(U){let te=!1;switch(U.code){case r.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?we(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(0,r.keyPanSpeed),te=!0;break;case r.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?we(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(0,-r.keyPanSpeed),te=!0;break;case r.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?fe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(r.keyPanSpeed,0),te=!0;break;case r.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?fe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):le(-r.keyPanSpeed,0),te=!0;break}te&&(U.preventDefault(),r.update())}function Be(U){if(F.length===1)v.set(U.pageX,U.pageY);else{const te=Re(U),Ce=.5*(U.pageX+te.x),Se=.5*(U.pageY+te.y);v.set(Ce,Se)}}function He(U){if(F.length===1)T.set(U.pageX,U.pageY);else{const te=Re(U),Ce=.5*(U.pageX+te.x),Se=.5*(U.pageY+te.y);T.set(Ce,Se)}}function ft(U){const te=Re(U),Ce=U.pageX-te.x,Se=U.pageY-te.y,ge=Math.sqrt(Ce*Ce+Se*Se);_.set(0,ge)}function ie(U){r.enableZoom&&ft(U),r.enablePan&&He(U)}function Ft(U){r.enableZoom&&ft(U),r.enableRotate&&Be(U)}function et(U){if(F.length==1)y.set(U.pageX,U.pageY);else{const Ce=Re(U),Se=.5*(U.pageX+Ce.x),ge=.5*(U.pageY+Ce.y);y.set(Se,ge)}S.subVectors(y,v).multiplyScalar(r.rotateSpeed);const te=r.domElement;fe(2*Math.PI*S.x/te.clientHeight),we(2*Math.PI*S.y/te.clientHeight),v.copy(y)}function st(U){if(F.length===1)E.set(U.pageX,U.pageY);else{const te=Re(U),Ce=.5*(U.pageX+te.x),Se=.5*(U.pageY+te.y);E.set(Ce,Se)}x.subVectors(E,T).multiplyScalar(r.panSpeed),le(x.x,x.y),T.copy(E)}function Ye(U){const te=Re(U),Ce=U.pageX-te.x,Se=U.pageY-te.y,ge=Math.sqrt(Ce*Ce+Se*Se);C.set(0,ge),w.set(0,Math.pow(C.y/_.y,r.zoomSpeed)),de(w.y),_.copy(C);const z=(U.pageX+te.x)*.5,ve=(U.pageY+te.y)*.5;Q(z,ve)}function wt(U){r.enableZoom&&Ye(U),r.enablePan&&st(U)}function at(U){r.enableZoom&&Ye(U),r.enableRotate&&et(U)}function L(U){r.enabled!==!1&&(F.length===0&&(r.domElement.setPointerCapture(U.pointerId),r.domElement.addEventListener("pointermove",A),r.domElement.addEventListener("pointerup",J)),X(U),U.pointerType==="touch"?We(U):Pe(U))}function A(U){r.enabled!==!1&&(U.pointerType==="touch"?me(U):Ae(U))}function J(U){Me(U),F.length===0&&(r.domElement.releasePointerCapture(U.pointerId),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",J)),r.dispatchEvent(ag),l=a.NONE}function Pe(U){let te;switch(U.button){case 0:te=r.mouseButtons.LEFT;break;case 1:te=r.mouseButtons.MIDDLE;break;case 2:te=r.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Ts.DOLLY:if(r.enableZoom===!1)return;j(U),l=a.DOLLY;break;case Ts.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(r.enablePan===!1)return;k(U),l=a.PAN}else{if(r.enableRotate===!1)return;N(U),l=a.ROTATE}break;case Ts.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(r.enableRotate===!1)return;N(U),l=a.ROTATE}else{if(r.enablePan===!1)return;k(U),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(_f)}function Ae(U){switch(l){case a.ROTATE:if(r.enableRotate===!1)return;$(U);break;case a.DOLLY:if(r.enableZoom===!1)return;pe(U);break;case a.PAN:if(r.enablePan===!1)return;Le(U);break}}function De(U){r.enabled===!1||r.enableZoom===!1||l!==a.NONE||(U.preventDefault(),r.dispatchEvent(_f),Ie(he(U)),r.dispatchEvent(ag))}function he(U){const te=U.deltaMode,Ce={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(te){case 1:Ce.deltaY*=16;break;case 2:Ce.deltaY*=100;break}return U.ctrlKey&&!R&&(Ce.deltaY*=10),Ce}function Te(U){U.key==="Control"&&(R=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(U){U.key==="Control"&&(R=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Oe(U){r.enabled===!1||r.enablePan===!1||ze(U)}function We(U){switch(_e(U),F.length){case 1:switch(r.touches.ONE){case ws.ROTATE:if(r.enableRotate===!1)return;Be(U),l=a.TOUCH_ROTATE;break;case ws.PAN:if(r.enablePan===!1)return;He(U),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(r.touches.TWO){case ws.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ie(U),l=a.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Ft(U),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(_f)}function me(U){switch(_e(U),l){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;et(U),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;st(U),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;wt(U),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;at(U),r.update();break;default:l=a.NONE}}function Ze(U){r.enabled!==!1&&U.preventDefault()}function X(U){F.push(U.pointerId)}function Me(U){delete re[U.pointerId];for(let te=0;te<F.length;te++)if(F[te]==U.pointerId){F.splice(te,1);return}}function _e(U){let te=re[U.pointerId];te===void 0&&(te=new nt,re[U.pointerId]=te),te.set(U.pageX,U.pageY)}function Re(U){const te=U.pointerId===F[0]?F[1]:F[0];return re[te]}r.domElement.addEventListener("contextmenu",Ze),r.domElement.addEventListener("pointerdown",L),r.domElement.addEventListener("pointercancel",J),r.domElement.addEventListener("wheel",De,{passive:!1}),document.addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}const zn=({children:s,size:e=24,className:n=""})=>xe.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,children:s}),u1=s=>xe.jsx(zn,{...s,children:xe.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),ug=s=>xe.jsxs(zn,{...s,children:[xe.jsx("path",{d:"M18 6 6 18"}),xe.jsx("path",{d:"m6 6 18 18"})]}),c1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("circle",{cx:"12",cy:"12",r:"10"}),xe.jsx("polygon",{points:"10 8 16 12 10 16 10 8"})]}),f1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),xe.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),d1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),xe.jsx("polyline",{points:"2 17 12 22 22 17"}),xe.jsx("polyline",{points:"2 12 12 17 22 12"})]}),h1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),xe.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),xe.jsx("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),xe.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),xe.jsx("circle",{cx:"12",cy:"12",r:"1"}),xe.jsx("path",{d:"M5 12h7"}),xe.jsx("path",{d:"M12 5v7"})]}),p1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("path",{d:"M5 12h14"}),xe.jsx("path",{d:"m12 5 7 7-7 7"})]}),m1=s=>xe.jsx(zn,{...s,children:xe.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),g1=s=>xe.jsx(zn,{...s,children:xe.jsx("path",{d:"m6 9 6 6 6-6"})}),_1=s=>xe.jsx(zn,{...s,children:xe.jsx("path",{d:"m18 15-6-6-6 6"})}),v1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),xe.jsx("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),xe.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]}),x1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),xe.jsx("line",{x1:"23",x2:"17",y1:"9",y2:"15"}),xe.jsx("line",{x1:"17",x2:"23",y1:"9",y2:"15"})]}),y1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),xe.jsx("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),xe.jsx("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),xe.jsx("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"})]}),S1=s=>xe.jsxs(zn,{...s,children:[xe.jsx("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),xe.jsx("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),xe.jsx("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),xe.jsx("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})]}),Xn="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/textures%20updated",$o=[{id:"sun",name:"Sun",type:"Star",radius:35,distance:0,speed:0,color:"#FFD700",textureType:"star",textureUrl:`${Xn}/sun.jpg`,stats:{temp:"5,500°C",orbit:"N/A",gravity:"274 m/s²",day:"25 Days"},comp:["Hydrogen","Helium"],desc:"The star at the center of our Solar System.",narration:"The Sun is the colossal powerhouse at the center of our Solar System, a nearly perfect sphere of hot plasma that dictates the orbits of every planet. It accounts for a staggering 99.86% of the total mass of the entire system. Its core is a nuclear fusion reactor, converting 600 million tons of hydrogen into helium every single second.",facts:["Accounts for 99.86% of solar system mass.","Light takes 8 mins to reach Earth.","Core is ~15 million degrees Celsius.","Will eventually become a Red Giant.","Magnetic field flips every 11 years."]},{id:"mercury",name:"Mercury",type:"Planet",radius:2.8,distance:55,speed:.015,color:"#999999",textureType:"mercury",textureUrl:`${Xn}/mercury.jpg`,stats:{temp:"167°C",orbit:"88 Days",gravity:"3.7 m/s²",day:"59 Days"},comp:["Iron","Sodium"],desc:"The smallest planet in the Solar System.",narration:"Mercury is the smallest planet in our solar system and the closest to the Sun. Despite its proximity, it is not the hottest planet. It possesses a dark, cratered surface reminiscent of Earth's Moon. Uniquely, Mercury has an enormous iron core making up 85% of its radius.",facts:["Shrinks as it cools, creating cliffs.","Temp swings from 430°C to -180°C.","No atmosphere to trap heat.","Day lasts 176 Earth days.","Most cratered planet."]},{id:"venus",name:"Venus",type:"Planet",radius:6.5,distance:80,speed:.012,color:"#E3BB76",textureType:"venus",textureUrl:`${Xn}/venus.jpg`,stats:{temp:"464°C",orbit:"225 Days",gravity:"8.87 m/s²",day:"243 Days"},comp:["CO2","Nitrogen"],desc:"Hottest planet due to greenhouse effect.",narration:"Venus is often called Earth's twin due to similar size, but it is a hellish world with a thick, toxic atmosphere of carbon dioxide. This creates a runaway greenhouse effect, making it the hottest planet. Unusually, Venus rotates backwards, so the sun rises in the west.",facts:["Hottest planet in the solar system.","Spins backwards (retrograde).","Day is longer than its year.","Pressure is 90x Earth's.","Named after goddess of love."]},{id:"earth",name:"Earth",type:"Planet",radius:7,distance:110,speed:.01,color:"#1C4E80",textureType:"earth",textureUrl:`${Xn}/earth.jpg`,stats:{temp:"15°C",orbit:"365 Days",gravity:"9.8 m/s²",day:"24 Hours"},comp:["Nitrogen","Oxygen"],desc:"The only known world to harbor life.",narration:"Earth is our home and the only known celestial body confirmed to harbor life. Sitting in the 'Goldilocks zone,' it has liquid water covering 70% of the surface. Its magnetic field protects the atmosphere from solar radiation. Earth is dynamically active with tectonic plates.",facts:["Only place known to host life.","Densest planet in the system.","70% surface is water.","Protected by magnetic field.","Not a perfect sphere."],moons:[{name:"Moon",radius:1.9,distance:14,speed:.03,color:"#E0E0E0",type:"rocky",textureUrl:`${Xn}/moon.jpg`}]},{id:"mars",name:"Mars",type:"Planet",radius:3.8,distance:150,speed:.008,color:"#D14A28",textureType:"mars",textureUrl:`${Xn}/mars.jpg`,stats:{temp:"-65°C",orbit:"687 Days",gravity:"3.71 m/s²",day:"24.6 Hours"},comp:["CO2","Argon"],desc:"The Red Planet.",narration:"Mars, the Red Planet, gets its color from iron oxide rust. It is a dusty, cold desert world but holds geological wonders like Olympus Mons, the largest volcano in the solar system. Ancient river valleys suggest it was once warmer and wetter, potentially capable of supporting life.",facts:["Home to largest volcano, Olympus Mons.","Has largest dust storms.","Red color is rust.","Has two small moons.","Valles Marineris spans 4000km."],moons:[{name:"Phobos",radius:.6,distance:8,speed:.05,color:"#887766"},{name:"Deimos",radius:.4,distance:12,speed:.03,color:"#776655"}]},{id:"jupiter",name:"Jupiter",type:"Gas Giant",radius:22,distance:220,speed:.004,color:"#C88B3A",textureType:"jupiter",textureUrl:`${Xn}/jupiter.jpg`,stats:{temp:"-110°C",orbit:"12 Years",gravity:"24.79 m/s²",day:"10 Hours"},comp:["Hydrogen","Helium"],desc:"The largest planet.",narration:"Jupiter is a gas giant more massive than all other planets combined. Its iconic Great Red Spot is a storm larger than Earth raging for centuries. Jupiter acts as a cosmic vacuum cleaner, attracting debris with its gravity. It rotates incredibly fast, creating a day of only 10 hours.",facts:["Great Red Spot is a giant storm.","Shortest day of all planets.","Mass is 2.5x all others combined.","Has faint rings.","Strongest magnetic field."],moons:[{name:"Io",radius:1.8,distance:30,speed:.04,color:"#F8F189"},{name:"Europa",radius:1.6,distance:35,speed:.03,color:"#C6D2D8"},{name:"Ganymede",radius:2.6,distance:42,speed:.02,color:"#968E84"},{name:"Callisto",radius:2.4,distance:50,speed:.015,color:"#6E665A"}],rings:{inner:22.8,outer:23.5,color:10518624,opacity:.1}},{id:"saturn",name:"Saturn",type:"Gas Giant",radius:18,distance:300,speed:.003,color:"#E4D5B6",textureType:"saturn",textureUrl:`${Xn}/saturn.jpg`,rings:{inner:24,outer:42,color:13616035,opacity:.9},stats:{temp:"-140°C",orbit:"29 Years",gravity:"10.44 m/s²",day:"10.7 Hours"},comp:["Hydrogen","Helium"],desc:"Famous for its rings.",narration:"Saturn is the jewel of the solar system, known for its spectacular icy rings. It is the only planet less dense than water; it would float in a giant bathtub. A hexagonal storm persists at its north pole. Its moon Titan has a thick atmosphere and liquid methane lakes.",facts:["Rings are made of ice.","Least dense planet (floats).","Hexagonal storm at north pole.","Titan has methane lakes.","Most moons (146)."],moons:[{name:"Titan",radius:2.5,distance:40,speed:.02,color:"#E8D586"},{name:"Rhea",radius:.8,distance:25,speed:.03,color:"#B0B0B0"}]},{id:"uranus",name:"Uranus",type:"Ice Giant",radius:12,distance:380,speed:.002,color:"#93B8BE",textureType:"uranus",tilt:Math.PI/2,textureUrl:`${Xn}/uranus.jpg`,rings:{inner:14,outer:18,color:8956603,opacity:.2},stats:{temp:"-195°C",orbit:"84 Years",gravity:"8.69 m/s²",day:"17 Hours"},comp:["Hydrogen","Ices"],desc:"Rotates on its side.",narration:"Uranus is an ice giant that rotates on its side at a 98-degree angle, likely due to a massive collision. This causes extreme seasonal changes, with poles seeing 42 years of sunlight then darkness. Its atmosphere contains methane, giving it a pale blue-green color.",facts:["Rotates on its side.","Coldest planetary atmosphere.","Retrograde rotation.","First planet found by telescope.","Has 13 rings."],moons:[{name:"Titania",radius:.9,distance:20,speed:.03,color:"#D0C0B0"}]},{id:"neptune",name:"Neptune",type:"Ice Giant",radius:11.5,distance:450,speed:.001,color:"#5B80ED",textureType:"neptune",textureUrl:`${Xn}/neptune.jpg`,stats:{temp:"-200°C",orbit:"165 Years",gravity:"11.15 m/s²",day:"16 Hours"},comp:["Hydrogen","Ices"],desc:"The windiest planet.",narration:"Neptune is a dark, cold world whipped by supersonic winds reaching 2,000 km/h. It was the first planet predicted by mathematics before observation. Its moon Triton orbits backwards and spews nitrogen geysers, suggesting it was captured from the Kuiper Belt.",facts:["Supersonic winds (2000 km/h).","Predicted by math first.","165 Earth years per orbit.","Blue color from methane.","Great Dark Spot disappeared."],moons:[{name:"Triton",radius:1.4,distance:18,speed:.03,color:"#E0D0C0"}]},{id:"pluto",name:"Pluto",type:"Dwarf Planet",radius:1.8,distance:585,speed:8e-4,color:"#D1C2A5",textureType:"rocky",textureUrl:`${Xn}/pluto.jpg`,stats:{temp:"-229°C",orbit:"248 Years",gravity:"0.62 m/s²",day:"153 Hours"},comp:["Nitrogen","Methane"],desc:"The famous dwarf planet.",narration:"Pluto, once considered the ninth planet, is a dwarf planet in the Kuiper belt. It has a heart-shaped glacier named Tombaugh Regio made of nitrogen ice. Pluto orbits the sun in a highly elliptical and tilted path, sometimes coming closer to the Sun than Neptune.",facts:["Reclassified as dwarf planet in 2006.","Has a heart-shaped glacier.","Moon Charon is half its size.","Atmosphere freezes and falls as snow.","One year is 248 Earth years."],moons:[{name:"Charon",radius:.9,distance:5,speed:.01,color:"#A0A0A0"}]},{id:"haumea",name:"Haumea",type:"Dwarf Planet",radius:2,distance:645,speed:6e-4,color:"#E0E0E0",textureType:"rocky",textureUrl:`${Xn}/haumea.jpg`,scale:[1.9,.9,.5],stats:{temp:"-241°C",orbit:"284 Years",gravity:"0.4 m/s²",day:"4 Hours"},comp:["Rock","Ice"],desc:"The egg-shaped spinner.",narration:"Haumea is a unique dwarf planet that spins so fast—a day is only 4 hours long—that it has been pulled into the shape of a flattened egg or rugby ball. It is covered in crystalline water ice and has two moons and a ring system.",facts:["Spins once every 4 hours.","Shaped like an egg (ellipsoid).","Has two moons and a ring.","Named after Hawaiian goddess.","Covered in crystalline ice."]},{id:"sedna",name:"Sedna",type:"Dwarf Planet",radius:1.5,distance:750,speed:4e-4,color:"#CD5C5C",textureType:"rocky",textureUrl:`${Xn}/sedna.jpg`,stats:{temp:"-240°C",orbit:"11,400 Years",gravity:"0.4 m/s²",day:"10 Hours"},comp:["Methane","Nitrogen"],desc:"The distant wanderer.",narration:"Sedna is a distant dwarf planet in the outer reaches of the Solar System. It has an exceptionally long and elongated orbit, taking over 11,000 years to circle the Sun. Its surface is one of the reddest in the solar system.",facts:["Takes 11,400 years to orbit the Sun.","One of the reddest objects in the system.","Extremely distant.","Likely covered in hydrocarbon sludge.","Named after Inuit sea goddess."]}],cg="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_X01.mp3",fg="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_journey_01.mp3";function M1(){const s=Tt.useRef(null),[e,n]=Tt.useState(!0),[r,a]=Tt.useState(null),[l,d]=Tt.useState(!1),[c,h]=Tt.useState(!1),[m,g]=Tt.useState(!1),[v,y]=Tt.useState(!0),[S,T]=Tt.useState(!1),[E,x]=Tt.useState(!1),[_,C]=Tt.useState(!0),w=Tt.useRef(null),P=Tt.useRef(null),H=Tt.useRef(null),I=Tt.useRef(null),F=Tt.useRef(null),re=Tt.useRef(null),R=Tt.useRef([]),D=Tt.useRef([]),ae=Tt.useRef(null),fe=Tt.useRef(-1),we=Tt.useRef(!1),W=Tt.useRef(null),ne=Tt.useRef(new o1),le=Tt.useRef(new nt),de=(k,$)=>{if(k<0||k>=$o.length)return;a($o[k]);const pe=R.current[k];if(!pe)return;const Le=$!==void 0&&pe.moons&&pe.moons[$]?pe.moons[$].mesh:pe.mesh,Ie=$!==void 0?12:pe.data.radius*3+15,ze=new G;if(Le.getWorldPosition(ze),re.current&&I.current){const Be=ze.clone().add(new G(Ie,Ie*.5,Ie));I.current.position.copy(Be),re.current.target.copy(ze),re.current.update(),W.current={mesh:Le,lastPos:ze.clone()}}},Y=k=>{if(we.current){if(k>=$o.length){d(!1),we.current=!1;return}fe.current=k,de(k),ae.current&&clearTimeout(ae.current),ae.current=setTimeout(()=>{Y(k+1)},1e4)}},Q=()=>{a(null),d(!1),we.current=!1,W.current=null,ae.current&&clearTimeout(ae.current),re.current&&I.current&&(re.current.target.set(0,0,0),I.current.position.set(0,150,600),re.current.update())},q=()=>{d(!0),we.current=!0,Y(0)},N=()=>{C(!1),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{C(!0)},1e4)};Tt.useEffect(()=>{const k=["mousemove","mousedown","keydown","touchstart"];return k.forEach($=>window.addEventListener($,N)),N(),()=>k.forEach($=>window.removeEventListener($,N))},[]),Tt.useEffect(()=>{const k=()=>{if(P.current&&P.current.paused&&!S){const $=l?fg:cg;P.current.src!==$&&(P.current.src=$),P.current.play().catch(()=>{})}};return window.addEventListener("click",k),()=>window.removeEventListener("click",k)},[S,l]),Tt.useEffect(()=>{P.current||(P.current=new Audio,P.current.loop=!0,P.current.volume=.8);const k=P.current;if(S){k.pause();return}const $=pe=>{k.src!==pe?(k.src=pe,k.play().catch(()=>{})):k.paused&&k.play().catch(()=>{})};$(l?fg:cg)},[l,S]);const j=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then(()=>x(!1)).catch(()=>{}):document.documentElement.requestFullscreen().then(()=>x(!0)).catch(()=>{})};return Tt.useEffect(()=>{const k=()=>x(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",k),()=>document.removeEventListener("fullscreenchange",k)},[]),Tt.useEffect(()=>{const k=new jE;k.background=new _t(0),k.fog=new Bf(0,8e-4),H.current=k;const $=new jn(45,window.innerWidth/window.innerHeight,.1,1e4);$.position.set(0,150,600),I.current=$;const pe=new Wg({antialias:!0,alpha:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});pe.setSize(window.innerWidth,window.innerHeight),pe.setPixelRatio(Math.min(window.devicePixelRatio,2)),pe.toneMapping=mg,pe.toneMappingExposure=2.2,s.current.appendChild(pe.domElement),F.current=pe;const Le=new l1($,pe.domElement);Le.enableDamping=!0,Le.dampingFactor=.05,Le.minDistance=20,Le.maxDistance=4e3,re.current=Le;const Ie=new t1(16777184,0,.15);k.add(Ie);const ze=new s1(4210752,.8);k.add(ze);const Be=new r1(16777215,10,0,0);Be.position.set(0,0,0),k.add(Be);function He(he,Te,ye=!1){const Oe=["earth","mercury","venus","mars","jupiter","saturn","uranus","neptune","rocky","atmosphere","galaxy"].includes(he),We=2048,me=Oe?1024:2048,Ze=document.createElement("canvas");Ze.width=We,Ze.height=me;const X=Ze.getContext("2d"),Me=We,_e=me,Re=new _t(Te),U=(te,Ce,Se="source-over",ge=null)=>{const z=300*te;X.globalCompositeOperation=Se;for(let ve=0;ve<z;ve++){const Ne=Math.random()*Me,qe=Math.random()*_e,Qe=(Math.random()*50+20)/te;X.beginPath(),X.arc(Ne,qe,Qe,0,Math.PI*2),X.fillStyle=ge||`rgba(255,255,255,${Ce})`,X.fill()}X.globalCompositeOperation="source-over"};if(he==="earth")return X.fillStyle="#0a1a33",X.fillRect(0,0,Me,_e),new Qm(Ze);if(he==="star"){const te=X.createRadialGradient(Me/2,_e/2,0,Me/2,_e/2,Me/2);te.addColorStop(0,"#FFFFFF"),te.addColorStop(.3,"#FFFFAA"),te.addColorStop(1,Te),X.fillStyle=te,X.fillRect(0,0,Me,_e),U(.5,.2,"overlay","#ffaa00")}else if(he==="glow"){const te=X.createRadialGradient(Me/2,_e/2,0,Me/2,_e/2,Me/2);te.addColorStop(0,"#FFFFFF"),te.addColorStop(.2,"#FFFFAA"),te.addColorStop(.5,Te),te.addColorStop(1,"rgba(0,0,0,0)"),X.fillStyle=te,X.fillRect(0,0,Me,_e)}else if(he==="galaxy"){X.fillStyle="#050510",X.fillRect(0,0,Me,_e);for(let te=0;te<3;te++){X.filter=`blur(${30+te*10}px)`,X.globalCompositeOperation="screen";const Ce=Math.random()*60+200;U(.5,.1,"screen",`hsl(${Ce}, 60%, 40%)`)}X.filter="none"}else if(he==="mercury"||he==="rocky"){X.fillStyle=Te,X.fillRect(0,0,Me,_e),X.globalCompositeOperation="multiply";for(let Ce=0;Ce<8e3;Ce++){const Se=Math.random()*80+100;X.fillStyle=`rgb(${Se},${Se},${Se})`,X.globalAlpha=.3,X.fillRect(Math.random()*Me,Math.random()*_e,2,2)}X.globalAlpha=1,X.globalCompositeOperation="source-over";const te=500;for(let Ce=0;Ce<te;Ce++){const Se=Math.random()*Me,ge=Math.random()*_e,z=Math.random()*10+2;X.fillStyle="rgba(0,0,0,0.3)",X.beginPath(),X.arc(Se+1,ge+1,z,0,Math.PI*2),X.fill(),X.fillStyle="rgba(255,255,255,0.1)",X.beginPath(),X.arc(Se-1,ge-1,z,0,Math.PI*2),X.fill(),X.fillStyle="rgba(120,120,120,0.8)",X.beginPath(),X.arc(Se,ge,z,0,Math.PI*2),X.fill()}}else if(he==="venus"){X.fillStyle=Te,X.fillRect(0,0,Me,_e),X.filter="blur(40px)",X.globalCompositeOperation="overlay";for(let te=0;te<60;te++){const Ce=Math.random()*Me,Se=Math.random()*_e,ge=Math.random()*400+100,z=Math.random()*50+20;X.fillStyle=Math.random()>.5?"#ffffff":"#cc9966",X.globalAlpha=.3,X.beginPath(),X.ellipse(Ce,Se,ge,z,0,0,Math.PI*2),X.fill()}X.globalAlpha=1,X.filter="none"}else if(he==="mars"){X.fillStyle=Te,X.fillRect(0,0,Me,_e),X.filter="blur(4px)",X.fillStyle="#5e2a18",X.globalAlpha=.6;for(let Se=0;Se<15;Se++){const ge=Math.random()*Me,z=Math.random()*_e*.7+_e*.15,ve=Math.random()*150+50;X.beginPath();for(let Ne=0;Ne<10;Ne++){const qe=Ne/10*Math.PI*2,Qe=ve+(Math.random()-.5)*ve*.5,dt=ge+Math.cos(qe)*Qe,ht=z+Math.sin(qe)*Qe;Ne===0?X.moveTo(dt,ht):X.lineTo(dt,ht)}X.fill()}X.globalAlpha=1,X.filter="none";const te=X.createLinearGradient(0,0,0,_e*.08);te.addColorStop(0,"#ffffff"),te.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=te,X.fillRect(0,0,Me,_e*.08);const Ce=X.createLinearGradient(0,_e,0,_e*.92);Ce.addColorStop(0,"#ffffff"),Ce.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=Ce,X.fillRect(0,_e*.92,Me,_e*.08)}else if(he==="jupiter"){const te=X.createLinearGradient(0,0,0,_e),Ce=16;for(let Se=0;Se<=Ce;Se++){const ge=Se/Ce,ve=Se%2===0?"#C88B3A":"#E3DCCB";te.addColorStop(ge,ve)}X.fillStyle=te,X.fillRect(0,0,Me,_e),X.globalCompositeOperation="overlay",X.filter="blur(10px)";for(let Se=0;Se<50;Se++){const ge=Math.random()*Me,z=_e/Ce,ve=Math.floor(Math.random()*Ce)*z+(Math.random()-.5)*20,Ne=Math.random()*200+50,qe=Math.random()*20+5;X.fillStyle=Math.random()>.5?"#ffffff":"#8B4513",X.globalAlpha=.2,X.beginPath(),X.ellipse(ge,ve,Ne,qe,0,0,Math.PI*2),X.fill()}X.filter="blur(5px)",X.fillStyle="#A65E44",X.globalAlpha=.9,X.beginPath(),X.ellipse(Me*.7,_e*.65,90,50,0,0,Math.PI*2),X.fill(),X.filter="none",X.globalAlpha=1}else if(he==="saturn"){const te=X.createLinearGradient(0,0,0,_e),Ce=24;for(let Se=0;Se<=Ce;Se++){const ge=Se/Ce,z=Math.sin(ge*Math.PI*12)*.05,ve=40,Ne=.7+z;te.addColorStop(ge,`hsl(${ve}, 60%, ${Ne*100}%)`)}X.fillStyle=te,X.fillRect(0,0,Me,_e)}else if(he==="uranus"){const te=X.createRadialGradient(Me/2,_e/2,0,Me/2,_e/2,Me);te.addColorStop(0,"#D1F4F9"),te.addColorStop(1,"#93B8BE"),X.fillStyle=te,X.fillRect(0,0,Me,_e)}else if(he==="neptune"){const te=X.createLinearGradient(0,0,0,_e);te.addColorStop(0,"#3655A0"),te.addColorStop(.5,"#5B80ED"),te.addColorStop(1,"#3655A0"),X.fillStyle=te,X.fillRect(0,0,Me,_e),X.filter="blur(15px)",X.fillStyle="#ffffff",X.globalAlpha=.3;for(let Ce=0;Ce<8;Ce++){const Se=Math.random()*Me,ge=Math.random()*_e,z=Math.random()*150+50,ve=Math.random()*20+5;X.beginPath(),X.ellipse(Se,ge,z,ve,0,0,Math.PI*2),X.fill()}X.filter="blur(8px)",X.fillStyle="#1a2e5a",X.globalAlpha=.6,X.beginPath(),X.ellipse(Me*.3,_e*.4,60,30,0,0,Math.PI*2),X.fill(),X.filter="none",X.globalAlpha=1}else if(he==="ring"){X.fillStyle="#00000000",X.clearRect(0,0,Me,_e);const te=Me/2,Ce=_e/2,Se=Me*.5,ge=Me*.2,z=X.createRadialGradient(te,Ce,ge,te,Ce,Se),ve=Math.floor(Re.r*255),Ne=Math.floor(Re.g*255),qe=Math.floor(Re.b*255);z.addColorStop(0,`rgba(${ve}, ${Ne}, ${qe}, 0)`),z.addColorStop(.2,`rgba(${ve}, ${Ne}, ${qe}, 0.1)`),z.addColorStop(.5,`rgba(${ve}, ${Ne}, ${qe}, 0.8)`),z.addColorStop(.8,`rgba(${ve}, ${Ne}, ${qe}, 0.1)`),z.addColorStop(1,`rgba(${ve}, ${Ne}, ${qe}, 0)`),X.fillStyle=z,X.beginPath(),X.arc(te,Ce,Se,0,Math.PI*2),X.fill()}return new Qm(Ze)}const ft=new bf({map:He("glow","#FFD700"),color:16766720,transparent:!0,blending:Hl,opacity:.5,depthWrite:!1}),ie=new Vm(ft);ie.scale.set(150,150,1),k.add(ie);const Ft=new bf({map:He("glow","#ffaa00"),color:16755200,transparent:!0,blending:Hl,opacity:.2,depthWrite:!1}),et=new Vm(Ft);et.scale.set(300,300,1),k.add(et);const st=(he,Te,ye,Oe)=>{const We=new Cn,me=new Float32Array(he*3),Ze=new Float32Array(he*3),X=new _t;for(let _e=0;_e<he*3;_e+=3){const Re=Oe+Math.random()*Oe,U=2*Math.PI*Math.random(),te=Math.acos(2*Math.random()-1);me[_e]=Re*Math.sin(te)*Math.cos(U),me[_e+1]=Re*Math.sin(te)*Math.sin(U),me[_e+2]=Re*Math.cos(te);const Ce=Math.random();Ce>.9?X.setHex(16755370):Ce>.7?X.setHex(16768426):Ce>.5?X.setHex(11193599):X.setHex(16777215),Ze[_e]=X.r,Ze[_e+1]=X.g,Ze[_e+2]=X.b}We.setAttribute("position",new On(me,3)),We.setAttribute("color",new On(Ze,3));const Me=new Yg({vertexColors:!0,size:Te,transparent:!0,opacity:ye,sizeAttenuation:!0});k.add(new ZE(We,Me))};st(6e3,1.5,.9,1e3),st(9e3,.8,.5,2e3);const Ye=new Ks(4e3,32,32),wt=new Yl({map:He("galaxy","#000000"),side:An,transparent:!0,opacity:.3});k.add(new wn(Ye,wt));const at=(he,Te,ye)=>{const Oe=new Gf(.1,0),We=new pr({color:16777215,roughness:.8,metalness:.1,flatShading:!0}),me=new $E(Oe,We,he);me.instanceMatrix.setUsage(Fv);const Ze=new Jt,X=new _t;for(let Me=0;Me<he;Me++){const _e=Math.random()*Math.PI*2,Re=Math.sqrt(Math.random()*(ye**2-Te**2)+Te**2),U=Math.cos(_e)*Re,te=(Math.random()-.5)*15*(1-(Re-Te)/(ye-Te)*.5),Ce=Math.sin(_e)*Re;Ze.position.set(U,te,Ce),Ze.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const Se=Math.random()*1.2+.5;Ze.scale.set(Se,Se,Se),Ze.updateMatrix(),me.setMatrixAt(Me,Ze.matrix),X.setHex(11776947),X.offsetHSL(0,0,(Math.random()-.5)*.1),me.setColorAt(Me,X)}return me.instanceMatrix.needsUpdate=!0,me.instanceColor.needsUpdate=!0,me},L=at(4e3,500,850);k.add(L);const A=at(3e3,170,210);k.add(A),$o.forEach((he,Te)=>{const ye=new $s,Oe=[];let We;if(he.textureUrl){const X=new eg;X.setCrossOrigin("anonymous"),We=X.load(he.textureUrl),We.colorSpace=Qt}else We=He(he.textureType,he.color,!1);let me;if(he.type==="Star")me=new Yl({map:We,color:16777215});else if(he.id==="earth"){const Me=!he.textureUrl?He("earth",null,!0):null;me=new pr({map:We,roughnessMap:Me,roughness:he.textureUrl?.6:1,metalness:.1,envMapIntensity:1,emissive:1118481,emissiveIntensity:.1})}else he.type==="Gas Giant"||he.type==="Ice Giant"?me=new pr({map:We,roughness:.5,metalness:.1,emissive:2236962,emissiveIntensity:.15}):he.id==="venus"?me=new pr({map:We,roughness:.8,metalness:.1,emissive:2232576,emissiveIntensity:.2}):me=new pr({map:We,roughness:.9,metalness:.1,emissive:1118481,emissiveIntensity:.1});const Ze=new wn(new Ks(he.radius,128,128),me);if(Ze.userData={id:Te,type:"planet"},he.tilt&&(Ze.rotation.z=he.tilt),he.scale&&Ze.scale.set(he.scale[0],he.scale[1],he.scale[2]),ye.add(Ze),D.current.push(Ze),he.type!=="Star"){const X=new Ks(he.radius*.4,32,32);let Me;he.type==="Gas Giant"||he.type==="Ice Giant"?Me=8947848:Me=16724736;const _e=new pr({color:Me,emissive:Me,emissiveIntensity:.8,roughness:.5}),Re=new wn(X,_e);Re.visible=!1,Re.userData={isCore:!0},he.scale&&Re.scale.set(he.scale[0],he.scale[1],he.scale[2]),ye.add(Re)}if(he.moons&&he.moons.forEach((X,Me)=>{const _e=new Ks(X.radius,32,32);let Re;if(X.textureUrl){const Se=new eg;Se.setCrossOrigin("anonymous"),Re=Se.load(X.textureUrl),Re.colorSpace=Qt}else Re=He(X.type||"rocky",X.color);const U=new pr({map:Re,roughness:.9}),te=new wn(_e,U);te.userData={id:Te,moonIndex:Me,type:"moon"},D.current.push(te);const Ce=new $s;Ce.add(te),te.position.x=X.distance,ye.add(Ce),Oe.push({orbit:Ce,mesh:te,speed:X.speed})}),he.rings){const X=new Vf(he.rings.inner,he.rings.outer,128),Me=He("ring",he.rings.color),_e=new pr({map:Me,color:16777215,side:Si,transparent:!0,opacity:he.rings.opacity||.8,roughness:1,metalness:0}),Re=new wn(X,_e);he.id==="uranus"?(Re.rotation.y=Math.PI/2,Re.rotation.x=0):Re.rotation.x=Math.PI/1.8,ye.add(Re)}if(ye.position.x=he.distance,k.add(ye),he.distance>0){const X=[];for(let Re=0;Re<=256;Re++){const U=Re/256*Math.PI*2;X.push(new G(Math.cos(U)*he.distance,0,Math.sin(U)*he.distance))}const Me=new Cn().setFromPoints(X),_e=new KE(Me,new jg({color:16777215,opacity:.1,transparent:!0}));k.add(_e)}R.current.push({type:"planet",group:ye,mesh:Ze,data:he,moons:Oe,angle:Math.random()*Math.PI*2})});let J;const Pe=()=>{J=requestAnimationFrame(Pe),re.current&&re.current.update();const he=pe.domElement.dataset.paused==="true",Te=pe.domElement.dataset.structure==="true";if(he||(L.rotation.y+=15e-5,A.rotation.y+=5e-4),R.current.forEach(ye=>{if(he||(ye.data.tilt?ye.mesh.rotation.x+=.003:ye.mesh.rotation.y+=.001,ye.data.distance>0&&(ye.angle+=ye.data.speed*.3*.25,ye.group.position.x=Math.cos(ye.angle)*ye.data.distance,ye.group.position.z=Math.sin(ye.angle)*ye.data.distance),ye.moons&&ye.moons.length>0&&ye.moons.forEach(Oe=>{Oe.orbit&&(Oe.orbit.rotation.y+=Oe.speed*.25)})),ye.data.type!=="Star"){ye.mesh.material&&(ye.mesh.material.opacity=Te?.15:1,ye.mesh.material.transparent=Te,ye.mesh.material.wireframe=Te);const Oe=ye.group.children.find(We=>We.userData&&We.userData.isCore);Oe&&(Oe.visible=Te,Te&&(Oe.rotation.y+=.01))}}),W.current&&!he){const ye=W.current,Oe=new G;if(ye.mesh.getWorldPosition(Oe),!Oe.equals(ye.lastPos)){const We=new G().subVectors(Oe,ye.lastPos);$.position.add(We),re.current&&re.current.target.add(We),ye.lastPos.copy(Oe)}}pe.render(k,$)};Pe(),setTimeout(()=>n(!1),1e3);const Ae=()=>{!I.current||!F.current||(I.current.aspect=window.innerWidth/window.innerHeight,I.current.updateProjectionMatrix(),F.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Ae);const De=he=>{le.current.x=he.clientX/window.innerWidth*2-1,le.current.y=-(he.clientY/window.innerHeight)*2+1,ne.current.setFromCamera(le.current,$);const Te=ne.current.intersectObjects(D.current);if(Te.length>0){const Oe=Te[0].object.userData;Oe.id!==void 0&&de(Oe.id,Oe.moonIndex)}};return pe.domElement.addEventListener("dblclick",De),()=>{cancelAnimationFrame(J),window.removeEventListener("resize",Ae),s.current&&pe.domElement&&s.current.removeChild(pe.domElement)}},[]),Tt.useEffect(()=>{F.current&&(F.current.domElement.dataset.paused=c,F.current.domElement.dataset.structure=m)},[c,m]),Tt.useEffect(()=>{l?fe.current===-1&&Y(0):(ae.current&&clearTimeout(ae.current),fe.current=-1)},[l]),xe.jsxs("div",{className:"w-full h-screen bg-black relative text-slate-100 font-sans overflow-hidden",children:[xe.jsx("div",{ref:s,className:"absolute inset-0 z-0 bg-black",style:{pointerEvents:"auto"}}),xe.jsxs("div",{className:"absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none z-10",children:[xe.jsxs("div",{className:"flex items-center gap-4 cursor-pointer pointer-events-auto",onClick:Q,children:[xe.jsx("div",{className:"w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg",children:xe.jsx("span",{className:"text-2xl",children:"🪐"})}),xe.jsxs("div",{children:[xe.jsx("h1",{className:"font-bold text-2xl leading-none",children:"COSMOS"}),xe.jsx("p",{className:"text-[10px] uppercase text-indigo-400 font-bold",children:"Explorer"})]})]}),xe.jsxs("div",{className:"flex gap-2 pointer-events-auto bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10",children:[xe.jsx("button",{onClick:()=>h(!c),className:"p-2 hover:bg-white/10 rounded-lg",children:c?xe.jsx(c1,{size:20}):xe.jsx(f1,{size:20})}),xe.jsx("button",{onClick:()=>g(!m),className:"p-2 hover:bg-white/10 rounded-lg",children:xe.jsx(d1,{size:20})}),xe.jsx("button",{onClick:j,className:"p-2 hover:bg-white/10 rounded-lg",children:E?xe.jsx(S1,{size:20}):xe.jsx(y1,{size:20})}),xe.jsx("button",{onClick:()=>T(!S),className:`p-2 hover:bg-white/10 rounded-lg ${S?"text-red-400":""}`,children:S?xe.jsx(x1,{size:20}):xe.jsx(v1,{size:20})})]})]}),xe.jsx("div",{className:`absolute right-0 top-0 bottom-0 w-full md:w-[450px] bg-black/80 backdrop-blur-xl border-l border-white/10 z-20 p-8 overflow-y-auto transform transition-transform duration-500 ease-out pointer-events-auto ${r?"translate-x-0":"translate-x-full"}`,children:r&&xe.jsxs(xe.Fragment,{children:[xe.jsxs("div",{className:"flex justify-between items-center mb-8",children:[xe.jsxs("div",{children:[xe.jsx("h2",{className:"text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400",children:r.name}),xe.jsx("p",{className:"text-sm text-indigo-400 uppercase tracking-[0.2em] font-bold mt-2",children:r.type})]}),xe.jsx("button",{onClick:()=>a(null),className:"p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors",children:xe.jsx(ug,{size:24})})]}),xe.jsxs("div",{className:"space-y-8",children:[xe.jsx("div",{className:"p-6 bg-zinc-900/90 rounded-xl border border-white/10 text-md leading-relaxed text-zinc-300 shadow-xl",children:r.narration}),xe.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(r.stats).map(([k,$])=>xe.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors",children:[xe.jsx("div",{className:"text-[10px] text-indigo-300 uppercase font-bold tracking-wider mb-1",children:k}),xe.jsx("div",{className:"font-mono text-lg text-white",children:$})]},k))}),xe.jsxs("div",{children:[xe.jsxs("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2",children:[xe.jsx(m1,{size:14})," Facts"]}),xe.jsx("ul",{className:"space-y-3",children:r.facts.map((k,$)=>xe.jsxs("li",{className:"flex gap-3 text-sm text-zinc-400",children:[xe.jsx("span",{className:"text-indigo-500 mt-1",children:xe.jsx(p1,{size:14})}),k]},$))})]})]})]})}),xe.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end items-center pointer-events-none pb-4",children:[xe.jsx("button",{onClick:()=>y(!v),className:"pointer-events-auto mb-2 bg-white/10 backdrop-blur-md p-1 rounded-full text-indigo-200 hover:text-white hover:bg-white/20 transition-all",children:v?xe.jsx(g1,{size:16}):xe.jsx(_1,{size:16})}),xe.jsx("div",{className:`pointer-events-auto max-w-full overflow-x-auto no-scrollbar fade-mask transition-all duration-300 ease-in-out ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:xe.jsxs("div",{className:"flex gap-2 items-center px-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 py-2 mx-4",children:[xe.jsxs("button",{onClick:l?Q:q,className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg transition-colors whitespace-nowrap font-semibold border text-xs ${l?"bg-red-500/80 border-red-400/30":"bg-indigo-600/90 border-indigo-400/30"}`,children:[l?xe.jsx(ug,{size:12}):xe.jsx(h1,{size:12})," ",l?"Stop":"Tour"]}),xe.jsx("div",{className:"h-6 w-px bg-white/10 mx-1"}),$o.map((k,$)=>xe.jsxs("button",{onClick:()=>de($),className:`flex flex-col items-center gap-1 min-w-[40px] group relative p-1 rounded-lg transition-all ${(r==null?void 0:r.id)===k.id?"bg-white/10 ring-1 ring-indigo-500":"hover:bg-white/5"}`,children:[xe.jsx("div",{className:"w-5 h-5 rounded-full shadow-lg transition-transform group-hover:scale-110 relative bg-cover bg-center",style:{backgroundImage:`url(${k.textureUrl})`,backgroundColor:k.color},children:(r==null?void 0:r.id)===k.id&&xe.jsx("div",{className:"absolute inset-0 rounded-full ring-1 ring-white animate-pulse"})}),xe.jsx("span",{className:`text-[7px] font-bold uppercase tracking-wider transition-colors ${(r==null?void 0:r.id)===k.id?"text-white":"text-zinc-500 group-hover:text-zinc-300"}`,children:k.name})]},$))]})})]}),e&&xe.jsxs("div",{className:"absolute inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none",children:[xe.jsx(u1,{className:"w-12 h-12 text-indigo-500 animate-spin mb-4"}),xe.jsx("span",{className:"text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold",children:"Initializing Cosmos..."})]})]})}O_.createRoot(document.getElementById("root")).render(xe.jsx(P_.StrictMode,{children:xe.jsx(M1,{})}));
