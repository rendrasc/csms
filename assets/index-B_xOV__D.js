(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function mg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Nc={exports:{}},zo={},Uc={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function P_(){if(gp)return wt;gp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function x(I,W,q){this.props=I,this.context=W,this.refs=w,this.updater=q||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=x.prototype;function b(I,W,q){this.props=I,this.context=W,this.refs=w,this.updater=q||S}var R=b.prototype=new _;R.constructor=b,T(R,x.prototype),R.isPureReactComponent=!0;var N=Array.isArray,B=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function oe(I,W,q){var le,_e={},be=null,De=null;if(W!=null)for(le in W.ref!==void 0&&(De=W.ref),W.key!==void 0&&(be=""+W.key),W)B.call(W,le)&&!k.hasOwnProperty(le)&&(_e[le]=W[le]);var ke=arguments.length-2;if(ke===1)_e.children=q;else if(1<ke){for(var ze=Array(ke),qe=0;qe<ke;qe++)ze[qe]=arguments[qe+2];_e.children=ze}if(I&&I.defaultProps)for(le in ke=I.defaultProps,ke)_e[le]===void 0&&(_e[le]=ke[le]);return{$$typeof:o,type:I,key:be,ref:De,props:_e,_owner:F.current}}function C(I,W){return{$$typeof:o,type:I.type,key:W,ref:I.ref,props:I.props,_owner:I._owner}}function U(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ae(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(q){return W[q]})}var fe=/\/+/g;function ye(I,W){return typeof I=="object"&&I!==null&&I.key!=null?ae(""+I.key):W.toString(36)}function G(I,W,q,le,_e){var be=typeof I;(be==="undefined"||be==="boolean")&&(I=null);var De=!1;if(I===null)De=!0;else switch(be){case"string":case"number":De=!0;break;case"object":switch(I.$$typeof){case o:case e:De=!0}}if(De)return De=I,_e=_e(De),I=le===""?"."+ye(De,0):le,N(_e)?(q="",I!=null&&(q=I.replace(fe,"$&/")+"/"),G(_e,W,q,"",function(qe){return qe})):_e!=null&&(U(_e)&&(_e=C(_e,q+(!_e.key||De&&De.key===_e.key?"":(""+_e.key).replace(fe,"$&/")+"/")+I)),W.push(_e)),1;if(De=0,le=le===""?".":le+":",N(I))for(var ke=0;ke<I.length;ke++){be=I[ke];var ze=le+ye(be,ke);De+=G(be,W,q,ze,_e)}else if(ze=y(I),typeof ze=="function")for(I=ze.call(I),ke=0;!(be=I.next()).done;)be=be.value,ze=le+ye(be,ke++),De+=G(be,W,q,ze,_e);else if(be==="object")throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return De}function ee(I,W,q){if(I==null)return I;var le=[],_e=0;return G(I,le,"","",function(be){return W.call(q,be,_e++)}),le}function re(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q)},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var de={current:null},X={transition:null},Z={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:X,ReactCurrentOwner:F};function Y(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:ee,forEach:function(I,W,q){ee(I,function(){W.apply(this,arguments)},q)},count:function(I){var W=0;return ee(I,function(){W++}),W},toArray:function(I){return ee(I,function(W){return W})||[]},only:function(I){if(!U(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},wt.Component=x,wt.Fragment=n,wt.Profiler=a,wt.PureComponent=b,wt.StrictMode=r,wt.Suspense=h,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,wt.act=Y,wt.cloneElement=function(I,W,q){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var le=T({},I.props),_e=I.key,be=I.ref,De=I._owner;if(W!=null){if(W.ref!==void 0&&(be=W.ref,De=F.current),W.key!==void 0&&(_e=""+W.key),I.type&&I.type.defaultProps)var ke=I.type.defaultProps;for(ze in W)B.call(W,ze)&&!k.hasOwnProperty(ze)&&(le[ze]=W[ze]===void 0&&ke!==void 0?ke[ze]:W[ze])}var ze=arguments.length-2;if(ze===1)le.children=q;else if(1<ze){ke=Array(ze);for(var qe=0;qe<ze;qe++)ke[qe]=arguments[qe+2];le.children=ke}return{$$typeof:o,type:I.type,key:_e,ref:be,props:le,_owner:De}},wt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},wt.createElement=oe,wt.createFactory=function(I){var W=oe.bind(null,I);return W.type=I,W},wt.createRef=function(){return{current:null}},wt.forwardRef=function(I){return{$$typeof:c,render:I}},wt.isValidElement=U,wt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:re}},wt.memo=function(I,W){return{$$typeof:m,type:I,compare:W===void 0?null:W}},wt.startTransition=function(I){var W=X.transition;X.transition={};try{I()}finally{X.transition=W}},wt.unstable_act=Y,wt.useCallback=function(I,W){return de.current.useCallback(I,W)},wt.useContext=function(I){return de.current.useContext(I)},wt.useDebugValue=function(){},wt.useDeferredValue=function(I){return de.current.useDeferredValue(I)},wt.useEffect=function(I,W){return de.current.useEffect(I,W)},wt.useId=function(){return de.current.useId()},wt.useImperativeHandle=function(I,W,q){return de.current.useImperativeHandle(I,W,q)},wt.useInsertionEffect=function(I,W){return de.current.useInsertionEffect(I,W)},wt.useLayoutEffect=function(I,W){return de.current.useLayoutEffect(I,W)},wt.useMemo=function(I,W){return de.current.useMemo(I,W)},wt.useReducer=function(I,W,q){return de.current.useReducer(I,W,q)},wt.useRef=function(I){return de.current.useRef(I)},wt.useState=function(I){return de.current.useState(I)},wt.useSyncExternalStore=function(I,W,q){return de.current.useSyncExternalStore(I,W,q)},wt.useTransition=function(){return de.current.useTransition()},wt.version="18.3.1",wt}var _p;function Uf(){return _p||(_p=1,Uc.exports=P_()),Uc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function L_(){if(vp)return zo;vp=1;var o=Uf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,h,m){var g,v={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:y,ref:S,props:v,_owner:a.current}}return zo.Fragment=n,zo.jsx=d,zo.jsxs=d,zo}var xp;function D_(){return xp||(xp=1,Nc.exports=L_()),Nc.exports}var me=D_(),St=Uf();const N_=mg(St);var ul={},Ic={exports:{}},kn={},Oc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function U_(){return yp||(yp=1,(function(o){function e(X,Z){var Y=X.length;X.push(Z);e:for(;0<Y;){var I=Y-1>>>1,W=X[I];if(0<a(W,Z))X[I]=Z,X[Y]=W,Y=I;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var Z=X[0],Y=X.pop();if(Y!==Z){X[0]=Y;e:for(var I=0,W=X.length,q=W>>>1;I<q;){var le=2*(I+1)-1,_e=X[le],be=le+1,De=X[be];if(0>a(_e,Y))be<W&&0>a(De,_e)?(X[I]=De,X[be]=Y,I=be):(X[I]=_e,X[le]=Y,I=le);else if(be<W&&0>a(De,Y))X[I]=De,X[be]=Y,I=be;else break e}}return Z}function a(X,Z){var Y=X.sortIndex-Z.sortIndex;return Y!==0?Y:X.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();o.unstable_now=function(){return d.now()-c}}var h=[],m=[],g=1,v=null,y=3,S=!1,T=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(X){for(var Z=n(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=X)r(m),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=n(m)}}function N(X){if(w=!1,R(X),!T)if(n(h)!==null)T=!0,re(B);else{var Z=n(m);Z!==null&&de(N,Z.startTime-X)}}function B(X,Z){T=!1,w&&(w=!1,_(oe),oe=-1),S=!0;var Y=y;try{for(R(Z),v=n(h);v!==null&&(!(v.expirationTime>Z)||X&&!ae());){var I=v.callback;if(typeof I=="function"){v.callback=null,y=v.priorityLevel;var W=I(v.expirationTime<=Z);Z=o.unstable_now(),typeof W=="function"?v.callback=W:v===n(h)&&r(h),R(Z)}else r(h);v=n(h)}if(v!==null)var q=!0;else{var le=n(m);le!==null&&de(N,le.startTime-Z),q=!1}return q}finally{v=null,y=Y,S=!1}}var F=!1,k=null,oe=-1,C=5,U=-1;function ae(){return!(o.unstable_now()-U<C)}function fe(){if(k!==null){var X=o.unstable_now();U=X;var Z=!0;try{Z=k(!0,X)}finally{Z?ye():(F=!1,k=null)}}else F=!1}var ye;if(typeof b=="function")ye=function(){b(fe)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ee=G.port2;G.port1.onmessage=fe,ye=function(){ee.postMessage(null)}}else ye=function(){x(fe,0)};function re(X){k=X,F||(F=!0,ye())}function de(X,Z){oe=x(function(){X(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_continueExecution=function(){T||S||(T=!0,re(B))},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return n(h)},o.unstable_next=function(X){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var Y=y;y=Z;try{return X()}finally{y=Y}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(X,Z){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Y=y;y=X;try{return Z()}finally{y=Y}},o.unstable_scheduleCallback=function(X,Z,Y){var I=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?I+Y:I):Y=I,X){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=Y+W,X={id:g++,callback:Z,priorityLevel:X,startTime:Y,expirationTime:W,sortIndex:-1},Y>I?(X.sortIndex=Y,e(m,X),n(h)===null&&X===n(m)&&(w?(_(oe),oe=-1):w=!0,de(N,Y-I))):(X.sortIndex=W,e(h,X),T||S||(T=!0,re(B))),X},o.unstable_shouldYield=ae,o.unstable_wrapCallback=function(X){var Z=y;return function(){var Y=y;y=Z;try{return X.apply(this,arguments)}finally{y=Y}}}})(Fc)),Fc}var Sp;function I_(){return Sp||(Sp=1,Oc.exports=U_()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function O_(){if(Mp)return kn;Mp=1;var o=Uf(),e=I_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(t){return h.call(v,t)?!0:h.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function S(t,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,u){if(i===null||typeof i>"u"||S(t,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,s,u,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,b);x[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,b);x[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,b);x[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,s,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,f,u)&&(s=null),u||f===null?y(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,u=f.attributeNamespace,s===null?t.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,u?t.setAttributeNS(u,i,s):t.setAttribute(i,s))))}var N=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ae=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),X=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Object.assign,I;function W(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var q=!1;function le(t,i){if(!t||q)return"";q=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){u=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}t()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),p=u.stack.split(`
`),M=f.length-1,O=p.length-1;1<=M&&0<=O&&f[M]!==p[O];)O--;for(;1<=M&&0<=O;M--,O--)if(f[M]!==p[O]){if(M!==1||O!==1)do if(M--,O--,0>O||f[M]!==p[O]){var z=`
`+f[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=O);break}}}finally{q=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?W(t):""}function _e(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=le(t.type,!1),t;case 11:return t=le(t.type.render,!1),t;case 1:return t=le(t.type,!0),t;default:return""}}function be(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case C:return"Profiler";case oe:return"StrictMode";case ye:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ae:return(t.displayName||"Context")+".Consumer";case U:return(t._context.displayName||"Context")+".Provider";case fe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ee:return i=t.displayName||null,i!==null?i:be(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return be(t(i))}catch{}}return null}function De(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ke(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=ze(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function xe(t){t._valueTracker||(t._valueTracker=qe(t))}function j(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=ze(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function st(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function je(t,i){var s=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function it(t,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=ke(i.value!=null?i.value:s),t._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function He(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function At(t,i){He(t,i);var s=ke(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?D(t,i.type,s):i.hasOwnProperty("defaultValue")&&D(t,i.type,ke(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function at(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function D(t,i,s){(i!=="number"||st(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var A=Array.isArray;function Q(t,i,s,u){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&u&&(t[s].defaultSelected=!0)}else{for(s=""+ke(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function we(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ee(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(A(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:ke(s)}}function Te(t,i){var s=ke(i.value),u=ke(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),u!=null&&(t.defaultValue=""+u)}function Ze(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ie(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ie(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tt,ft=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,s,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(tt=tt||document.createElement("div"),tt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=tt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ve(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mt=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(t){mt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xt[i]=xt[t]})});function ot(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||xt.hasOwnProperty(t)&&xt[t]?(""+i).trim():i+"px"}function he(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,f=ot(s,i[s],u);s==="float"&&(s="cssFloat"),u?t.setProperty(s,f):t[s]=f}}var Ce=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function L(t,i){if(i){if(Ce[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ge(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function Pe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pe=null,E=null,te=null;function ce(t){if(t=wo(t)){if(typeof pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=wa(i),pe(t.stateNode,t.type,i))}}function Oe(t){E?te?te.push(t):te=[t]:E=t}function Ge(){if(E){var t=E,i=te;if(te=E=null,ce(t),i)for(t=0;t<i.length;t++)ce(i[t])}}function Ae(t,i){return t(i)}function Ue(){}var $e=!1;function pt(t,i,s){if($e)return t(i,s);$e=!0;try{return Ae(t,i,s)}finally{$e=!1,(E!==null||te!==null)&&(Ue(),Ge())}}function Qe(t,i){var s=t.stateNode;if(s===null)return null;var u=wa(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var gt=!1;if(c)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){gt=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{gt=!1}function un(t,i,s,u,f,p,M,O,z){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(s,ne)}catch(Me){this.onError(Me)}}var $n=!1,Kn=null,xi=!1,ji=null,ra={onError:function(t){$n=!0,Kn=t}};function sa(t,i,s,u,f,p,M,O,z){$n=!1,Kn=null,un.apply(ra,arguments)}function tu(t,i,s,u,f,p,M,O,z){if(sa.apply(this,arguments),$n){if($n){var ne=Kn;$n=!1,Kn=null}else throw Error(n(198));xi||(xi=!0,ji=ne)}}function Ri(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function oa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function P(t){if(Ri(t)!==t)throw Error(n(188))}function K(t){var i=t.alternate;if(!i){if(i=Ri(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,u=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){s=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return P(f),t;if(p===u)return P(f),i;p=p.sibling}throw Error(n(188))}if(s.return!==u.return)s=f,u=p;else{for(var M=!1,O=f.child;O;){if(O===s){M=!0,s=f,u=p;break}if(O===u){M=!0,u=f,s=p;break}O=O.sibling}if(!M){for(O=p.child;O;){if(O===s){M=!0,s=p,u=f;break}if(O===u){M=!0,u=p,s=f;break}O=O.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==u)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function se(t){return t=K(t),t!==null?ue(t):null}function ue(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ue(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,Ve=e.unstable_cancelCallback,nt=e.unstable_shouldYield,ct=e.unstable_requestPaint,Xe=e.unstable_now,vt=e.unstable_getCurrentPriorityLevel,ht=e.unstable_ImmediatePriority,_t=e.unstable_UserBlockingPriority,Ut=e.unstable_NormalPriority,xn=e.unstable_LowPriority,Yt=e.unstable_IdlePriority,Ln=null,Rt=null;function yt(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ln,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:aa,Bt=Math.log,Ci=Math.LN2;function aa(t){return t>>>=0,t===0?32:31-(Bt(t)/Ci|0)|0}var yi=64,Yi=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zn(t,i){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,M=s&268435455;if(M!==0){var O=M&~f;O!==0?u=Xt(O):(p&=M,p!==0&&(u=Xt(p)))}else M=s&~f,M!==0?u=Xt(M):p!==0&&(u=Xt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)s=31-yn(i),f=1<<s,u|=t[s],i&=~f;return u}function so(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-yn(p),O=1<<M,z=f[M];z===-1?((O&s)===0||(O&u)!==0)&&(f[M]=so(O,i)):z<=i&&(t.expiredLanes|=O),p&=~O}}function Rr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function la(){var t=yi;return yi<<=1,(yi&4194240)===0&&(yi=64),t}function ns(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function oo(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-yn(i),t[i]=s}function Zg(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-yn(s),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,s&=~p}}function nu(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-yn(s),f=1<<u;f&i|t[u]&i&&(t[u]|=i),s&=~f}}var Lt=0;function qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $f,iu,Kf,Zf,Qf,ru=!1,ua=[],qi=null,$i=null,Ki=null,ao=new Map,lo=new Map,Zi=[],Qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(t,i,s,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=wo(i),i!==null&&iu(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Jg(t,i,s,u,f){switch(i){case"focusin":return qi=uo(qi,t,i,s,u,f),!0;case"dragenter":return $i=uo($i,t,i,s,u,f),!0;case"mouseover":return Ki=uo(Ki,t,i,s,u,f),!0;case"pointerover":var p=f.pointerId;return ao.set(p,uo(ao.get(p)||null,t,i,s,u,f)),!0;case"gotpointercapture":return p=f.pointerId,lo.set(p,uo(lo.get(p)||null,t,i,s,u,f)),!0}return!1}function ed(t){var i=Cr(t.target);if(i!==null){var s=Ri(i);if(s!==null){if(i=s.tag,i===13){if(i=oa(s),i!==null){t.blockedOn=i,Qf(t.priority,function(){Kf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ou(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Ne=u,s.target.dispatchEvent(u),Ne=null}else return i=wo(s),i!==null&&iu(i),t.blockedOn=s,!1;i.shift()}return!0}function td(t,i,s){ca(t)&&s.delete(i)}function e0(){ru=!1,qi!==null&&ca(qi)&&(qi=null),$i!==null&&ca($i)&&($i=null),Ki!==null&&ca(Ki)&&(Ki=null),ao.forEach(td),lo.forEach(td)}function co(t,i){t.blockedOn===i&&(t.blockedOn=null,ru||(ru=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,e0)))}function fo(t){function i(f){return co(f,t)}if(0<ua.length){co(ua[0],t);for(var s=1;s<ua.length;s++){var u=ua[s];u.blockedOn===t&&(u.blockedOn=null)}}for(qi!==null&&co(qi,t),$i!==null&&co($i,t),Ki!==null&&co(Ki,t),ao.forEach(i),lo.forEach(i),s=0;s<Zi.length;s++)u=Zi[s],u.blockedOn===t&&(u.blockedOn=null);for(;0<Zi.length&&(s=Zi[0],s.blockedOn===null);)ed(s),s.blockedOn===null&&Zi.shift()}var is=N.ReactCurrentBatchConfig,fa=!0;function t0(t,i,s,u){var f=Lt,p=is.transition;is.transition=null;try{Lt=1,su(t,i,s,u)}finally{Lt=f,is.transition=p}}function n0(t,i,s,u){var f=Lt,p=is.transition;is.transition=null;try{Lt=4,su(t,i,s,u)}finally{Lt=f,is.transition=p}}function su(t,i,s,u){if(fa){var f=ou(t,i,s,u);if(f===null)Eu(t,i,u,da,s),Jf(t,u);else if(Jg(f,t,i,s,u))u.stopPropagation();else if(Jf(t,u),i&4&&-1<Qg.indexOf(t)){for(;f!==null;){var p=wo(f);if(p!==null&&$f(p),p=ou(t,i,s,u),p===null&&Eu(t,i,u,da,s),p===f)break;f=p}f!==null&&u.stopPropagation()}else Eu(t,i,u,null,s)}}var da=null;function ou(t,i,s,u){if(da=null,t=Pe(u),t=Cr(t),t!==null)if(i=Ri(t),i===null)t=null;else if(s=i.tag,s===13){if(t=oa(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return da=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vt()){case ht:return 1;case _t:return 4;case Ut:case xn:return 16;case Yt:return 536870912;default:return 16}default:return 16}}var Qi=null,au=null,ha=null;function id(){if(ha)return ha;var t,i=au,s=i.length,u,f="value"in Qi?Qi.value:Qi.textContent,p=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(u=1;u<=M&&i[s-u]===f[p-u];u++);return ha=f.slice(t,1<u?1-u:void 0)}function pa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function rd(){return!1}function Bn(t){function i(s,u,f,p,M){this._reactName=s,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(s=t[O],this[O]=s?s(p):p[O]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ma:rd,this.isPropagationStopped=rd,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=Bn(rs),ho=Y({},rs,{view:0,detail:0}),i0=Bn(ho),uu,cu,po,ga=Y({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(uu=t.screenX-po.screenX,cu=t.screenY-po.screenY):cu=uu=0,po=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),sd=Bn(ga),r0=Y({},ga,{dataTransfer:0}),s0=Bn(r0),o0=Y({},ho,{relatedTarget:0}),fu=Bn(o0),a0=Y({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=Bn(a0),u0=Y({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c0=Bn(u0),f0=Y({},rs,{data:0}),od=Bn(f0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=p0[t])?!!i[t]:!1}function du(){return m0}var g0=Y({},ho,{key:function(t){if(t.key){var i=d0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_0=Bn(g0),v0=Y({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Bn(v0),x0=Y({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),y0=Bn(x0),S0=Y({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0=Bn(S0),E0=Y({},ga,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=Bn(E0),T0=[9,13,27,32],hu=c&&"CompositionEvent"in window,mo=null;c&&"documentMode"in document&&(mo=document.documentMode);var A0=c&&"TextEvent"in window&&!mo,ld=c&&(!hu||mo&&8<mo&&11>=mo),ud=" ",cd=!1;function fd(t,i){switch(t){case"keyup":return T0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function R0(t,i){switch(t){case"compositionend":return dd(i);case"keypress":return i.which!==32?null:(cd=!0,ud);case"textInput":return t=i.data,t===ud&&cd?null:t;default:return null}}function C0(t,i){if(ss)return t==="compositionend"||!hu&&fd(t,i)?(t=id(),ha=au=Qi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ld&&i.locale!=="ko"?null:i.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!b0[t.type]:i==="textarea"}function pd(t,i,s,u){Oe(u),i=Sa(i,"onChange"),0<i.length&&(s=new lu("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var go=null,_o=null;function P0(t){Dd(t,0)}function _a(t){var i=cs(t);if(j(i))return t}function L0(t,i){if(t==="change")return i}var md=!1;if(c){var pu;if(c){var mu="oninput"in document;if(!mu){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),mu=typeof gd.oninput=="function"}pu=mu}else pu=!1;md=pu&&(!document.documentMode||9<document.documentMode)}function _d(){go&&(go.detachEvent("onpropertychange",vd),_o=go=null)}function vd(t){if(t.propertyName==="value"&&_a(_o)){var i=[];pd(i,_o,t,Pe(t)),pt(P0,i)}}function D0(t,i,s){t==="focusin"?(_d(),go=i,_o=s,go.attachEvent("onpropertychange",vd)):t==="focusout"&&_d()}function N0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _a(_o)}function U0(t,i){if(t==="click")return _a(i)}function I0(t,i){if(t==="input"||t==="change")return _a(i)}function O0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var li=typeof Object.is=="function"?Object.is:O0;function vo(t,i){if(li(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var f=s[u];if(!h.call(i,f)||!li(t[f],i[f]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yd(t,i){var s=xd(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xd(s)}}function Sd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Md(){for(var t=window,i=st();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=st(t.document)}return i}function gu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function F0(t){var i=Md(),s=t.focusedElem,u=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Sd(s.ownerDocument.documentElement,s)){if(u!==null&&gu(s)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=yd(s,p);var M=yd(s,u);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=c&&"documentMode"in document&&11>=document.documentMode,os=null,_u=null,xo=null,vu=!1;function Ed(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vu||os==null||os!==st(u)||(u=os,"selectionStart"in u&&gu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&vo(xo,u)||(xo=u,u=Sa(_u,"onSelect"),0<u.length&&(i=new lu("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=os)))}function va(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var as={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},xu={},wd={};c&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function xa(t){if(xu[t])return xu[t];if(!as[t])return t;var i=as[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in wd)return xu[t]=i[s];return t}var Td=xa("animationend"),Ad=xa("animationiteration"),Rd=xa("animationstart"),Cd=xa("transitionend"),bd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,i){bd.set(t,i),l(i,[t])}for(var yu=0;yu<Pd.length;yu++){var Su=Pd[yu],z0=Su.toLowerCase(),B0=Su[0].toUpperCase()+Su.slice(1);Ji(z0,"on"+B0)}Ji(Td,"onAnimationEnd"),Ji(Ad,"onAnimationIteration"),Ji(Rd,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Ld(t,i,s){var u=t.type||"unknown-event";t.currentTarget=s,tu(u,i,void 0,t),t.currentTarget=null}function Dd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var O=u[M],z=O.instance,ne=O.currentTarget;if(O=O.listener,z!==p&&f.isPropagationStopped())break e;Ld(f,O,ne),p=z}else for(M=0;M<u.length;M++){if(O=u[M],z=O.instance,ne=O.currentTarget,O=O.listener,z!==p&&f.isPropagationStopped())break e;Ld(f,O,ne),p=z}}}if(xi)throw t=ji,xi=!1,ji=null,t}function Ft(t,i){var s=i[bu];s===void 0&&(s=i[bu]=new Set);var u=t+"__bubble";s.has(u)||(Nd(i,t,2,!1),s.add(u))}function Mu(t,i,s){var u=0;i&&(u|=4),Nd(s,t,u,i)}var ya="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[ya]){t[ya]=!0,r.forEach(function(s){s!=="selectionchange"&&(H0.has(s)||Mu(s,!1,t),Mu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ya]||(i[ya]=!0,Mu("selectionchange",!1,i))}}function Nd(t,i,s,u){switch(nd(i)){case 1:var f=t0;break;case 4:f=n0;break;default:f=su}s=f.bind(null,i,s,t),f=void 0,!gt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Eu(t,i,s,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var O=u.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===f||z.nodeType===8&&z.parentNode===f))return;M=M.return}for(;O!==null;){if(M=Cr(O),M===null)return;if(z=M.tag,z===5||z===6){u=p=M;continue e}O=O.parentNode}}u=u.return}pt(function(){var ne=p,Me=Pe(s),Re=[];e:{var Se=bd.get(t);if(Se!==void 0){var We=lu,Ke=t;switch(t){case"keypress":if(pa(s)===0)break e;case"keydown":case"keyup":We=_0;break;case"focusin":Ke="focus",We=fu;break;case"focusout":Ke="blur",We=fu;break;case"beforeblur":case"afterblur":We=fu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=y0;break;case Td:case Ad:case Rd:We=l0;break;case Cd:We=M0;break;case"scroll":We=i0;break;case"wheel":We=w0;break;case"copy":case"cut":case"paste":We=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=ad}var Je=(i&4)!==0,qt=!Je&&t==="scroll",$=Je?Se!==null?Se+"Capture":null:Se;Je=[];for(var V=ne,J;V!==null;){J=V;var Le=J.stateNode;if(J.tag===5&&Le!==null&&(J=Le,$!==null&&(Le=Qe(V,$),Le!=null&&Je.push(Mo(V,Le,J)))),qt)break;V=V.return}0<Je.length&&(Se=new We(Se,Ke,null,s,Me),Re.push({event:Se,listeners:Je}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",We=t==="mouseout"||t==="pointerout",Se&&s!==Ne&&(Ke=s.relatedTarget||s.fromElement)&&(Cr(Ke)||Ke[bi]))break e;if((We||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,We?(Ke=s.relatedTarget||s.toElement,We=ne,Ke=Ke?Cr(Ke):null,Ke!==null&&(qt=Ri(Ke),Ke!==qt||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(We=null,Ke=ne),We!==Ke)){if(Je=sd,Le="onMouseLeave",$="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Je=ad,Le="onPointerLeave",$="onPointerEnter",V="pointer"),qt=We==null?Se:cs(We),J=Ke==null?Se:cs(Ke),Se=new Je(Le,V+"leave",We,s,Me),Se.target=qt,Se.relatedTarget=J,Le=null,Cr(Me)===ne&&(Je=new Je($,V+"enter",Ke,s,Me),Je.target=J,Je.relatedTarget=qt,Le=Je),qt=Le,We&&Ke)t:{for(Je=We,$=Ke,V=0,J=Je;J;J=ls(J))V++;for(J=0,Le=$;Le;Le=ls(Le))J++;for(;0<V-J;)Je=ls(Je),V--;for(;0<J-V;)$=ls($),J--;for(;V--;){if(Je===$||$!==null&&Je===$.alternate)break t;Je=ls(Je),$=ls($)}Je=null}else Je=null;We!==null&&Ud(Re,Se,We,Je,!1),Ke!==null&&qt!==null&&Ud(Re,qt,Ke,Je,!0)}}e:{if(Se=ne?cs(ne):window,We=Se.nodeName&&Se.nodeName.toLowerCase(),We==="select"||We==="input"&&Se.type==="file")var et=L0;else if(hd(Se))if(md)et=I0;else{et=N0;var lt=D0}else(We=Se.nodeName)&&We.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(et=U0);if(et&&(et=et(t,ne))){pd(Re,et,s,Me);break e}lt&&lt(t,Se,ne),t==="focusout"&&(lt=Se._wrapperState)&&lt.controlled&&Se.type==="number"&&D(Se,"number",Se.value)}switch(lt=ne?cs(ne):window,t){case"focusin":(hd(lt)||lt.contentEditable==="true")&&(os=lt,_u=ne,xo=null);break;case"focusout":xo=_u=os=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Ed(Re,s,Me);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Ed(Re,s,Me)}var ut;if(hu)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else ss?fd(t,s)&&(dt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(dt="onCompositionStart");dt&&(ld&&s.locale!=="ko"&&(ss||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&ss&&(ut=id()):(Qi=Me,au="value"in Qi?Qi.value:Qi.textContent,ss=!0)),lt=Sa(ne,dt),0<lt.length&&(dt=new od(dt,t,null,s,Me),Re.push({event:dt,listeners:lt}),ut?dt.data=ut:(ut=dd(s),ut!==null&&(dt.data=ut)))),(ut=A0?R0(t,s):C0(t,s))&&(ne=Sa(ne,"onBeforeInput"),0<ne.length&&(Me=new od("onBeforeInput","beforeinput",null,s,Me),Re.push({event:Me,listeners:ne}),Me.data=ut))}Dd(Re,i)})}function Mo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Sa(t,i){for(var s=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Qe(t,s),p!=null&&u.unshift(Mo(t,p,f)),p=Qe(t,i),p!=null&&u.push(Mo(t,p,f))),t=t.return}return u}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,i,s,u,f){for(var p=i._reactName,M=[];s!==null&&s!==u;){var O=s,z=O.alternate,ne=O.stateNode;if(z!==null&&z===u)break;O.tag===5&&ne!==null&&(O=ne,f?(z=Qe(s,p),z!=null&&M.unshift(Mo(s,z,O))):f||(z=Qe(s,p),z!=null&&M.push(Mo(s,z,O)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var G0=/\r\n?/g,V0=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(V0,"")}function Ma(t,i,s){if(i=Id(i),Id(t)!==i&&s)throw Error(n(425))}function Ea(){}var wu=null,Tu=null;function Au(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,X0=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(j0)}:Ru;function j0(t){setTimeout(function(){throw t})}function Cu(t,i){var s=i,u=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(u===0){t.removeChild(f),fo(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=f}while(s);fo(i)}function er(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),Si="__reactFiber$"+us,Eo="__reactProps$"+us,bi="__reactContainer$"+us,bu="__reactEvents$"+us,Y0="__reactListeners$"+us,q0="__reactHandles$"+us;function Cr(t){var i=t[Si];if(i)return i;for(var s=t.parentNode;s;){if(i=s[bi]||s[Si]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Fd(t);t!==null;){if(s=t[Si])return s;t=Fd(t)}return i}t=s,s=t.parentNode}return null}function wo(t){return t=t[Si]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function wa(t){return t[Eo]||null}var Pu=[],fs=-1;function tr(t){return{current:t}}function kt(t){0>fs||(t.current=Pu[fs],Pu[fs]=null,fs--)}function It(t,i){fs++,Pu[fs]=t.current,t.current=i}var nr={},hn=tr(nr),Nn=tr(!1),br=nr;function ds(t,i){var s=t.type.contextTypes;if(!s)return nr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in s)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Un(t){return t=t.childContextTypes,t!=null}function Ta(){kt(Nn),kt(hn)}function kd(t,i,s){if(hn.current!==nr)throw Error(n(168));It(hn,i),It(Nn,s)}function zd(t,i,s){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,De(t)||"Unknown",f));return Y({},s,u)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,br=hn.current,It(hn,t),It(Nn,Nn.current),!0}function Bd(t,i,s){var u=t.stateNode;if(!u)throw Error(n(169));s?(t=zd(t,i,br),u.__reactInternalMemoizedMergedChildContext=t,kt(Nn),kt(hn),It(hn,t)):kt(Nn),It(Nn,s)}var Pi=null,Ra=!1,Lu=!1;function Hd(t){Pi===null?Pi=[t]:Pi.push(t)}function $0(t){Ra=!0,Hd(t)}function ir(){if(!Lu&&Pi!==null){Lu=!0;var t=0,i=Lt;try{var s=Pi;for(Lt=1;t<s.length;t++){var u=s[t];do u=u(!0);while(u!==null)}Pi=null,Ra=!1}catch(f){throw Pi!==null&&(Pi=Pi.slice(t+1)),ie(ht,ir),f}finally{Lt=i,Lu=!1}}return null}var hs=[],ps=0,Ca=null,ba=0,Qn=[],Jn=0,Pr=null,Li=1,Di="";function Lr(t,i){hs[ps++]=ba,hs[ps++]=Ca,Ca=t,ba=i}function Gd(t,i,s){Qn[Jn++]=Li,Qn[Jn++]=Di,Qn[Jn++]=Pr,Pr=t;var u=Li;t=Di;var f=32-yn(u)-1;u&=~(1<<f),s+=1;var p=32-yn(i)+f;if(30<p){var M=f-f%5;p=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Li=1<<32-yn(i)+f|s<<f|u,Di=p+t}else Li=1<<p|s<<f|u,Di=t}function Du(t){t.return!==null&&(Lr(t,1),Gd(t,1,0))}function Nu(t){for(;t===Ca;)Ca=hs[--ps],hs[ps]=null,ba=hs[--ps],hs[ps]=null;for(;t===Pr;)Pr=Qn[--Jn],Qn[Jn]=null,Di=Qn[--Jn],Qn[Jn]=null,Li=Qn[--Jn],Qn[Jn]=null}var Hn=null,Gn=null,Ht=!1,ui=null;function Vd(t,i){var s=ii(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Wd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=er(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Pr!==null?{id:Li,overflow:Di}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=ii(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Hn=t,Gn=null,!0):!1;default:return!1}}function Uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Iu(t){if(Ht){var i=Gn;if(i){var s=i;if(!Wd(t,i)){if(Uu(t))throw Error(n(418));i=er(s.nextSibling);var u=Hn;i&&Wd(t,i)?Vd(u,s):(t.flags=t.flags&-4097|2,Ht=!1,Hn=t)}}else{if(Uu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,Hn=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Pa(t){if(t!==Hn)return!1;if(!Ht)return Xd(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Au(t.type,t.memoizedProps)),i&&(i=Gn)){if(Uu(t))throw jd(),Error(n(418));for(;i;)Vd(t,i),i=er(i.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Gn=er(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Hn?er(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Gn;t;)t=er(t.nextSibling)}function ms(){Gn=Hn=null,Ht=!1}function Ou(t){ui===null?ui=[t]:ui.push(t)}var K0=N.ReactCurrentBatchConfig;function To(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var u=s.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var O=f.refs;M===null?delete O[p]:O[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function La(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function qd(t){function i($,V){if(t){var J=$.deletions;J===null?($.deletions=[V],$.flags|=16):J.push(V)}}function s($,V){if(!t)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function u($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function f($,V){return $=fr($,V),$.index=0,$.sibling=null,$}function p($,V,J){return $.index=J,t?(J=$.alternate,J!==null?(J=J.index,J<V?($.flags|=2,V):J):($.flags|=2,V)):($.flags|=1048576,V)}function M($){return t&&$.alternate===null&&($.flags|=2),$}function O($,V,J,Le){return V===null||V.tag!==6?(V=Rc(J,$.mode,Le),V.return=$,V):(V=f(V,J),V.return=$,V)}function z($,V,J,Le){var et=J.type;return et===k?Me($,V,J.props.children,Le,J.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===re&&Yd(et)===V.type)?(Le=f(V,J.props),Le.ref=To($,V,J),Le.return=$,Le):(Le=tl(J.type,J.key,J.props,null,$.mode,Le),Le.ref=To($,V,J),Le.return=$,Le)}function ne($,V,J,Le){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Cc(J,$.mode,Le),V.return=$,V):(V=f(V,J.children||[]),V.return=$,V)}function Me($,V,J,Le,et){return V===null||V.tag!==7?(V=zr(J,$.mode,Le,et),V.return=$,V):(V=f(V,J),V.return=$,V)}function Re($,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Rc(""+V,$.mode,J),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case B:return J=tl(V.type,V.key,V.props,null,$.mode,J),J.ref=To($,null,V),J.return=$,J;case F:return V=Cc(V,$.mode,J),V.return=$,V;case re:var Le=V._init;return Re($,Le(V._payload),J)}if(A(V)||Z(V))return V=zr(V,$.mode,J,null),V.return=$,V;La($,V)}return null}function Se($,V,J,Le){var et=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return et!==null?null:O($,V,""+J,Le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case B:return J.key===et?z($,V,J,Le):null;case F:return J.key===et?ne($,V,J,Le):null;case re:return et=J._init,Se($,V,et(J._payload),Le)}if(A(J)||Z(J))return et!==null?null:Me($,V,J,Le,null);La($,J)}return null}function We($,V,J,Le,et){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return $=$.get(J)||null,O(V,$,""+Le,et);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case B:return $=$.get(Le.key===null?J:Le.key)||null,z(V,$,Le,et);case F:return $=$.get(Le.key===null?J:Le.key)||null,ne(V,$,Le,et);case re:var lt=Le._init;return We($,V,J,lt(Le._payload),et)}if(A(Le)||Z(Le))return $=$.get(J)||null,Me(V,$,Le,et,null);La(V,Le)}return null}function Ke($,V,J,Le){for(var et=null,lt=null,ut=V,dt=V=0,an=null;ut!==null&&dt<J.length;dt++){ut.index>dt?(an=ut,ut=null):an=ut.sibling;var Pt=Se($,ut,J[dt],Le);if(Pt===null){ut===null&&(ut=an);break}t&&ut&&Pt.alternate===null&&i($,ut),V=p(Pt,V,dt),lt===null?et=Pt:lt.sibling=Pt,lt=Pt,ut=an}if(dt===J.length)return s($,ut),Ht&&Lr($,dt),et;if(ut===null){for(;dt<J.length;dt++)ut=Re($,J[dt],Le),ut!==null&&(V=p(ut,V,dt),lt===null?et=ut:lt.sibling=ut,lt=ut);return Ht&&Lr($,dt),et}for(ut=u($,ut);dt<J.length;dt++)an=We(ut,$,dt,J[dt],Le),an!==null&&(t&&an.alternate!==null&&ut.delete(an.key===null?dt:an.key),V=p(an,V,dt),lt===null?et=an:lt.sibling=an,lt=an);return t&&ut.forEach(function(dr){return i($,dr)}),Ht&&Lr($,dt),et}function Je($,V,J,Le){var et=Z(J);if(typeof et!="function")throw Error(n(150));if(J=et.call(J),J==null)throw Error(n(151));for(var lt=et=null,ut=V,dt=V=0,an=null,Pt=J.next();ut!==null&&!Pt.done;dt++,Pt=J.next()){ut.index>dt?(an=ut,ut=null):an=ut.sibling;var dr=Se($,ut,Pt.value,Le);if(dr===null){ut===null&&(ut=an);break}t&&ut&&dr.alternate===null&&i($,ut),V=p(dr,V,dt),lt===null?et=dr:lt.sibling=dr,lt=dr,ut=an}if(Pt.done)return s($,ut),Ht&&Lr($,dt),et;if(ut===null){for(;!Pt.done;dt++,Pt=J.next())Pt=Re($,Pt.value,Le),Pt!==null&&(V=p(Pt,V,dt),lt===null?et=Pt:lt.sibling=Pt,lt=Pt);return Ht&&Lr($,dt),et}for(ut=u($,ut);!Pt.done;dt++,Pt=J.next())Pt=We(ut,$,dt,Pt.value,Le),Pt!==null&&(t&&Pt.alternate!==null&&ut.delete(Pt.key===null?dt:Pt.key),V=p(Pt,V,dt),lt===null?et=Pt:lt.sibling=Pt,lt=Pt);return t&&ut.forEach(function(b_){return i($,b_)}),Ht&&Lr($,dt),et}function qt($,V,J,Le){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case B:e:{for(var et=J.key,lt=V;lt!==null;){if(lt.key===et){if(et=J.type,et===k){if(lt.tag===7){s($,lt.sibling),V=f(lt,J.props.children),V.return=$,$=V;break e}}else if(lt.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===re&&Yd(et)===lt.type){s($,lt.sibling),V=f(lt,J.props),V.ref=To($,lt,J),V.return=$,$=V;break e}s($,lt);break}else i($,lt);lt=lt.sibling}J.type===k?(V=zr(J.props.children,$.mode,Le,J.key),V.return=$,$=V):(Le=tl(J.type,J.key,J.props,null,$.mode,Le),Le.ref=To($,V,J),Le.return=$,$=Le)}return M($);case F:e:{for(lt=J.key;V!==null;){if(V.key===lt)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){s($,V.sibling),V=f(V,J.children||[]),V.return=$,$=V;break e}else{s($,V);break}else i($,V);V=V.sibling}V=Cc(J,$.mode,Le),V.return=$,$=V}return M($);case re:return lt=J._init,qt($,V,lt(J._payload),Le)}if(A(J))return Ke($,V,J,Le);if(Z(J))return Je($,V,J,Le);La($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(s($,V.sibling),V=f(V,J),V.return=$,$=V):(s($,V),V=Rc(J,$.mode,Le),V.return=$,$=V),M($)):s($,V)}return qt}var gs=qd(!0),$d=qd(!1),Da=tr(null),Na=null,_s=null,Fu=null;function ku(){Fu=_s=Na=null}function zu(t){var i=Da.current;kt(Da),t._currentValue=i}function Bu(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function vs(t,i){Na=t,Fu=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(In=!0),t.firstContext=null)}function ei(t){var i=t._currentValue;if(Fu!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Na===null)throw Error(n(308));_s=t,Na.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Dr=null;function Hu(t){Dr===null?Dr=[t]:Dr.push(t)}function Kd(t,i,s,u){var f=i.interleaved;return f===null?(s.next=s,Hu(i)):(s.next=f.next,f.next=s),i.interleaved=s,Ni(t,u)}function Ni(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var rr=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Ni(t,s)}return f=u.interleaved,f===null?(i.next=i,Hu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Ni(t,s)}function Ua(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,nu(t,s)}}function Qd(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Ia(t,i,s,u){var f=t.updateQueue;rr=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var z=O,ne=z.next;z.next=null,M===null?p=ne:M.next=ne,M=z;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==M&&(O===null?Me.firstBaseUpdate=ne:O.next=ne,Me.lastBaseUpdate=z))}if(p!==null){var Re=f.baseState;M=0,Me=ne=z=null,O=p;do{var Se=O.lane,We=O.eventTime;if((u&Se)===Se){Me!==null&&(Me=Me.next={eventTime:We,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ke=t,Je=O;switch(Se=i,We=s,Je.tag){case 1:if(Ke=Je.payload,typeof Ke=="function"){Re=Ke.call(We,Re,Se);break e}Re=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Je.payload,Se=typeof Ke=="function"?Ke.call(We,Re,Se):Ke,Se==null)break e;Re=Y({},Re,Se);break e;case 2:rr=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Se=f.effects,Se===null?f.effects=[O]:Se.push(O))}else We={eventTime:We,lane:Se,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(ne=Me=We,z=Re):Me=Me.next=We,M|=Se;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Se=O,O=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Me===null&&(z=Re),f.baseState=z,f.firstBaseUpdate=ne,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Ir|=M,t.lanes=M,t.memoizedState=Re}}function Jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=s,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Ao={},Mi=tr(Ao),Ro=tr(Ao),Co=tr(Ao);function Nr(t){if(t===Ao)throw Error(n(174));return t}function Vu(t,i){switch(It(Co,i),It(Ro,t),It(Mi,Ao),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Be(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Be(i,t)}kt(Mi),It(Mi,i)}function xs(){kt(Mi),kt(Ro),kt(Co)}function eh(t){Nr(Co.current);var i=Nr(Mi.current),s=Be(i,t.type);i!==s&&(It(Ro,t),It(Mi,s))}function Wu(t){Ro.current===t&&(kt(Mi),kt(Ro))}var Vt=tr(0);function Oa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xu=[];function ju(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Fa=N.ReactCurrentDispatcher,Yu=N.ReactCurrentBatchConfig,Ur=0,Wt=null,Zt=null,sn=null,ka=!1,bo=!1,Po=0,Z0=0;function pn(){throw Error(n(321))}function qu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!li(t[s],i[s]))return!1;return!0}function $u(t,i,s,u,f,p){if(Ur=p,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fa.current=t===null||t.memoizedState===null?t_:n_,t=s(u,f),bo){p=0;do{if(bo=!1,Po=0,25<=p)throw Error(n(301));p+=1,sn=Zt=null,i.updateQueue=null,Fa.current=i_,t=s(u,f)}while(bo)}if(Fa.current=Ha,i=Zt!==null&&Zt.next!==null,Ur=0,sn=Zt=Wt=null,ka=!1,i)throw Error(n(300));return t}function Ku(){var t=Po!==0;return Po=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Wt.memoizedState=sn=t:sn=sn.next=t,sn}function ti(){if(Zt===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=sn===null?Wt.memoizedState:sn.next;if(i!==null)sn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Wt.memoizedState=sn=t:sn=sn.next=t}return sn}function Lo(t,i){return typeof i=="function"?i(t):i}function Zu(t){var i=ti(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=Zt,f=u.baseQueue,p=s.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}u.baseQueue=f=p,s.pending=null}if(f!==null){p=f.next,u=u.baseState;var O=M=null,z=null,ne=p;do{var Me=ne.lane;if((Ur&Me)===Me)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:t(u,ne.action);else{var Re={lane:Me,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(O=z=Re,M=u):z=z.next=Re,Wt.lanes|=Me,Ir|=Me}ne=ne.next}while(ne!==null&&ne!==p);z===null?M=u:z.next=O,li(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=z,s.lastRenderedState=u}if(t=s.interleaved,t!==null){f=t;do p=f.lane,Wt.lanes|=p,Ir|=p,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Qu(t){var i=ti(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);li(p,i.memoizedState)||(In=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,u]}function th(){}function nh(t,i){var s=Wt,u=ti(),f=i(),p=!li(u.memoizedState,f);if(p&&(u.memoizedState=f,In=!0),u=u.queue,Ju(sh.bind(null,s,u,t),[t]),u.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,Do(9,rh.bind(null,s,u,f,i),void 0,null),on===null)throw Error(n(349));(Ur&30)!==0||ih(s,i,f)}return f}function ih(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function rh(t,i,s,u){i.value=s,i.getSnapshot=u,oh(i)&&ah(t)}function sh(t,i,s){return s(function(){oh(i)&&ah(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!li(t,s)}catch{return!0}}function ah(t){var i=Ni(t,1);i!==null&&hi(i,t,1,-1)}function lh(t){var i=Ei();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},i.queue=t,t=t.dispatch=e_.bind(null,Wt,t),[i.memoizedState,t]}function Do(t,i,s,u){return t={tag:t,create:i,destroy:s,deps:u,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t)),t}function uh(){return ti().memoizedState}function za(t,i,s,u){var f=Ei();Wt.flags|=t,f.memoizedState=Do(1|i,s,void 0,u===void 0?null:u)}function Ba(t,i,s,u){var f=ti();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,u!==null&&qu(u,M.deps)){f.memoizedState=Do(i,s,p,u);return}}Wt.flags|=t,f.memoizedState=Do(1|i,s,p,u)}function ch(t,i){return za(8390656,8,t,i)}function Ju(t,i){return Ba(2048,8,t,i)}function fh(t,i){return Ba(4,2,t,i)}function dh(t,i){return Ba(4,4,t,i)}function hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ph(t,i,s){return s=s!=null?s.concat([t]):null,Ba(4,4,hh.bind(null,i,t),s)}function ec(){}function mh(t,i){var s=ti();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function gh(t,i){var s=ti();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&qu(i,u[1])?u[0]:(t=t(),s.memoizedState=[t,i],t)}function _h(t,i,s){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,In=!0),t.memoizedState=s):(li(s,i)||(s=la(),Wt.lanes|=s,Ir|=s,t.baseState=!0),i)}function Q0(t,i){var s=Lt;Lt=s!==0&&4>s?s:4,t(!0);var u=Yu.transition;Yu.transition={};try{t(!1),i()}finally{Lt=s,Yu.transition=u}}function vh(){return ti().memoizedState}function J0(t,i,s){var u=ur(t);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},xh(t))yh(i,s);else if(s=Kd(t,i,s,u),s!==null){var f=Mn();hi(s,t,u,f),Sh(s,i,u)}}function e_(t,i,s){var u=ur(t),f={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(xh(t))yh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,O=p(M,s);if(f.hasEagerState=!0,f.eagerState=O,li(O,M)){var z=i.interleaved;z===null?(f.next=f,Hu(i)):(f.next=z.next,z.next=f),i.interleaved=f;return}}catch{}finally{}s=Kd(t,i,f,u),s!==null&&(f=Mn(),hi(s,t,u,f),Sh(s,i,u))}}function xh(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function yh(t,i){bo=ka=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Sh(t,i,s){if((s&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,nu(t,s)}}var Ha={readContext:ei,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},t_={readContext:ei,useCallback:function(t,i){return Ei().memoizedState=[t,i===void 0?null:i],t},useContext:ei,useEffect:ch,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,za(4194308,4,hh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return za(4194308,4,t,i)},useInsertionEffect:function(t,i){return za(4,2,t,i)},useMemo:function(t,i){var s=Ei();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var u=Ei();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=J0.bind(null,Wt,t),[u.memoizedState,t]},useRef:function(t){var i=Ei();return t={current:t},i.memoizedState=t},useState:lh,useDebugValue:ec,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=lh(!1),i=t[0];return t=Q0.bind(null,t[1]),Ei().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var u=Wt,f=Ei();if(Ht){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),on===null)throw Error(n(349));(Ur&30)!==0||ih(u,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,ch(sh.bind(null,u,p,t),[t]),u.flags|=2048,Do(9,rh.bind(null,u,p,s,i),void 0,null),s},useId:function(){var t=Ei(),i=on.identifierPrefix;if(Ht){var s=Di,u=Li;s=(u&~(1<<32-yn(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=Po++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Z0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},n_={readContext:ei,useCallback:mh,useContext:ei,useEffect:Ju,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Zu,useRef:uh,useState:function(){return Zu(Lo)},useDebugValue:ec,useDeferredValue:function(t){var i=ti();return _h(i,Zt.memoizedState,t)},useTransition:function(){var t=Zu(Lo)[0],i=ti().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1},i_={readContext:ei,useCallback:mh,useContext:ei,useEffect:Ju,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Qu,useRef:uh,useState:function(){return Qu(Lo)},useDebugValue:ec,useDeferredValue:function(t){var i=ti();return Zt===null?i.memoizedState=t:_h(i,Zt.memoizedState,t)},useTransition:function(){var t=Qu(Lo)[0],i=ti().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1};function ci(t,i){if(t&&t.defaultProps){i=Y({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function tc(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:Y({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ga={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var u=Mn(),f=ur(t),p=Ui(u,f);p.payload=i,s!=null&&(p.callback=s),i=sr(t,p,f),i!==null&&(hi(i,t,f,u),Ua(i,t,f))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=Mn(),f=ur(t),p=Ui(u,f);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=sr(t,p,f),i!==null&&(hi(i,t,f,u),Ua(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Mn(),u=ur(t),f=Ui(s,u);f.tag=2,i!=null&&(f.callback=i),i=sr(t,f,u),i!==null&&(hi(i,t,u,s),Ua(i,t,u))}};function Mh(t,i,s,u,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!vo(s,u)||!vo(f,p):!0}function Eh(t,i,s){var u=!1,f=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=ei(p):(f=Un(i)?br:hn.current,u=i.contextTypes,p=(u=u!=null)?ds(t,f):nr),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function wh(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&Ga.enqueueReplaceState(i,i.state,null)}function nc(t,i,s,u){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},Gu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=ei(p):(p=Un(i)?br:hn.current,f.context=ds(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(tc(t,i,p,s),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ga.enqueueReplaceState(f,f.state,null),Ia(t,s,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var s="",u=i;do s+=_e(u),u=u.return;while(u);var f=s}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function ic(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function rc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var r_=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,s){s=Ui(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){$a||($a=!0,xc=u),rc(t,i)},s}function Ah(t,i,s){s=Ui(-1,s),s.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;s.payload=function(){return u(f)},s.callback=function(){rc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){rc(t,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Rh(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new r_;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(s)||(f.add(s),t=v_.bind(null,t,i,s),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bh(t,i,s,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ui(-1,1),i.tag=2,sr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var s_=N.ReactCurrentOwner,In=!1;function Sn(t,i,s,u){i.child=t===null?$d(i,null,s,u):gs(i,t.child,s,u)}function Ph(t,i,s,u,f){s=s.render;var p=i.ref;return vs(i,f),u=$u(t,i,s,u,p,f),s=Ku(),t!==null&&!In?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ii(t,i,f)):(Ht&&s&&Du(i),i.flags|=1,Sn(t,i,u,f),i.child)}function Lh(t,i,s,u,f){if(t===null){var p=s.type;return typeof p=="function"&&!Ac(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Dh(t,i,p,u,f)):(t=tl(s.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:vo,s(M,u)&&t.ref===i.ref)return Ii(t,i,f)}return i.flags|=1,t=fr(p,u),t.ref=i.ref,t.return=i,i.child=t}function Dh(t,i,s,u,f){if(t!==null){var p=t.memoizedProps;if(vo(p,u)&&t.ref===i.ref)if(In=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(In=!0);else return i.lanes=t.lanes,Ii(t,i,f)}return sc(t,i,s,u,f)}function Nh(t,i,s){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ms,Vn),Vn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(Ms,Vn),Vn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:s,It(Ms,Vn),Vn|=u}else p!==null?(u=p.baseLanes|s,i.memoizedState=null):u=s,It(Ms,Vn),Vn|=u;return Sn(t,i,f,s),i.child}function Uh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function sc(t,i,s,u,f){var p=Un(s)?br:hn.current;return p=ds(i,p),vs(i,f),s=$u(t,i,s,u,p,f),u=Ku(),t!==null&&!In?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ii(t,i,f)):(Ht&&u&&Du(i),i.flags|=1,Sn(t,i,s,f),i.child)}function Ih(t,i,s,u,f){if(Un(s)){var p=!0;Aa(i)}else p=!1;if(vs(i,f),i.stateNode===null)Wa(t,i),Eh(i,s,u),nc(i,s,u,f),u=!0;else if(t===null){var M=i.stateNode,O=i.memoizedProps;M.props=O;var z=M.context,ne=s.contextType;typeof ne=="object"&&ne!==null?ne=ei(ne):(ne=Un(s)?br:hn.current,ne=ds(i,ne));var Me=s.getDerivedStateFromProps,Re=typeof Me=="function"||typeof M.getSnapshotBeforeUpdate=="function";Re||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(O!==u||z!==ne)&&wh(i,M,u,ne),rr=!1;var Se=i.memoizedState;M.state=Se,Ia(i,u,M,f),z=i.memoizedState,O!==u||Se!==z||Nn.current||rr?(typeof Me=="function"&&(tc(i,s,Me,u),z=i.memoizedState),(O=rr||Mh(i,s,O,u,Se,z,ne))?(Re||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),M.props=u,M.state=z,M.context=ne,u=O):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Zd(t,i),O=i.memoizedProps,ne=i.type===i.elementType?O:ci(i.type,O),M.props=ne,Re=i.pendingProps,Se=M.context,z=s.contextType,typeof z=="object"&&z!==null?z=ei(z):(z=Un(s)?br:hn.current,z=ds(i,z));var We=s.getDerivedStateFromProps;(Me=typeof We=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(O!==Re||Se!==z)&&wh(i,M,u,z),rr=!1,Se=i.memoizedState,M.state=Se,Ia(i,u,M,f);var Ke=i.memoizedState;O!==Re||Se!==Ke||Nn.current||rr?(typeof We=="function"&&(tc(i,s,We,u),Ke=i.memoizedState),(ne=rr||Mh(i,s,ne,u,Se,Ke,z)||!1)?(Me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ke,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ke,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||O===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ke),M.props=u,M.state=Ke,M.context=z,u=ne):(typeof M.componentDidUpdate!="function"||O===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),u=!1)}return oc(t,i,s,u,p,f)}function oc(t,i,s,u,f,p){Uh(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&Bd(i,s,!1),Ii(t,i,p);u=i.stateNode,s_.current=i;var O=M&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=gs(i,t.child,null,p),i.child=gs(i,null,O,p)):Sn(t,i,O,p),i.memoizedState=u.state,f&&Bd(i,s,!0),i.child}function Oh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),Vu(t,i.containerInfo)}function Fh(t,i,s,u,f){return ms(),Ou(f),i.flags|=256,Sn(t,i,s,u),i.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function lc(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,s){var u=i.pendingProps,f=Vt.current,p=!1,M=(i.flags&128)!==0,O;if((O=M)||(O=t!==null&&t.memoizedState===null?!1:(f&2)!==0),O?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),It(Vt,f&1),t===null)return Iu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=nl(M,u,0,null),t=zr(t,u,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=lc(s),i.memoizedState=ac,t):uc(i,M));if(f=t.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return o_(t,i,M,u,O,f,s);if(p){p=u.fallback,M=i.mode,f=t.child,O=f.sibling;var z={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=fr(f,z),u.subtreeFlags=f.subtreeFlags&14680064),O!==null?p=fr(O,p):(p=zr(p,M,s,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=t.child.memoizedState,M=M===null?lc(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~s,i.memoizedState=ac,u}return p=t.child,t=p.sibling,u=fr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=s),u.return=i,u.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=u,i.memoizedState=null,u}function uc(t,i){return i=nl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Va(t,i,s,u){return u!==null&&Ou(u),gs(i,t.child,null,s),t=uc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o_(t,i,s,u,f,p,M){if(s)return i.flags&256?(i.flags&=-257,u=ic(Error(n(422))),Va(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=nl({mode:"visible",children:u.children},f,0,null),p=zr(p,f,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&gs(i,t.child,null,M),i.child.memoizedState=lc(M),i.memoizedState=ac,p);if((i.mode&1)===0)return Va(t,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var O=u.dgst;return u=O,p=Error(n(419)),u=ic(p,u,void 0),Va(t,i,M,u)}if(O=(M&t.childLanes)!==0,In||O){if(u=on,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ni(t,f),hi(u,t,f,-1))}return Tc(),u=ic(Error(n(421))),Va(t,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=x_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Gn=er(f.nextSibling),Hn=i,Ht=!0,ui=null,t!==null&&(Qn[Jn++]=Li,Qn[Jn++]=Di,Qn[Jn++]=Pr,Li=t.id,Di=t.overflow,Pr=i),i=uc(i,u.children),i.flags|=4096,i)}function zh(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Bu(t.return,i,s)}function cc(t,i,s,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=s,p.tailMode=f)}function Bh(t,i,s){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Sn(t,i,u.children,s),u=Vt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,s,i);else if(t.tag===19)zh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(It(Vt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Oa(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),cc(i,!1,f,s,p);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Oa(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}cc(i,!0,s,null,p);break;case"together":cc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ii(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=fr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=fr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function a_(t,i,s){switch(i.tag){case 3:Oh(i),ms();break;case 5:eh(i);break;case 1:Un(i.type)&&Aa(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;It(Da,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Vt,Vt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?kh(t,i,s):(It(Vt,Vt.current&1),t=Ii(t,i,s),t!==null?t.sibling:null);It(Vt,Vt.current&1);break;case 19:if(u=(s&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Bh(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Vt,Vt.current),u)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,s)}return Ii(t,i,s)}var Hh,fc,Gh,Vh;Hh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},fc=function(){},Gh=function(t,i,s,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Nr(Mi.current);var p=null;switch(s){case"input":f=je(t,f),u=je(t,u),p=[];break;case"select":f=Y({},f,{value:void 0}),u=Y({},u,{value:void 0}),p=[];break;case"textarea":f=we(t,f),u=we(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ea)}L(s,u);var M;s=null;for(ne in f)if(!u.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var O=f[ne];for(M in O)O.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in u){var z=u[ne];if(O=f!=null?f[ne]:void 0,u.hasOwnProperty(ne)&&z!==O&&(z!=null||O!=null))if(ne==="style")if(O){for(M in O)!O.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in z)z.hasOwnProperty(M)&&O[M]!==z[M]&&(s||(s={}),s[M]=z[M])}else s||(p||(p=[]),p.push(ne,s)),s=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(p=p||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Ft("scroll",t),p||O===z||(p=[])):(p=p||[]).push(ne,z))}s&&(p=p||[]).push("style",s);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},Vh=function(t,i,s,u){s!==u&&(i.flags|=4)};function No(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function l_(t,i,s){var u=i.pendingProps;switch(Nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Un(i.type)&&Ta(),mn(i),null;case 3:return u=i.stateNode,xs(),kt(Nn),kt(hn),ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Pa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Mc(ui),ui=null))),fc(t,i),mn(i),null;case 5:Wu(i);var f=Nr(Co.current);if(s=i.type,t!==null&&i.stateNode!=null)Gh(t,i,s,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return mn(i),null}if(t=Nr(Mi.current),Pa(i)){u=i.stateNode,s=i.type;var p=i.memoizedProps;switch(u[Si]=i,u[Eo]=p,t=(i.mode&1)!==0,s){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(f=0;f<yo.length;f++)Ft(yo[f],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":it(u,p),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",u);break;case"textarea":Ee(u,p),Ft("invalid",u)}L(s,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var O=p[M];M==="children"?typeof O=="string"?u.textContent!==O&&(p.suppressHydrationWarning!==!0&&Ma(u.textContent,O,t),f=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(p.suppressHydrationWarning!==!0&&Ma(u.textContent,O,t),f=["children",""+O]):a.hasOwnProperty(M)&&O!=null&&M==="onScroll"&&Ft("scroll",u)}switch(s){case"input":xe(u),at(u,p,!0);break;case"textarea":xe(u),Ze(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ea)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ie(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(s,{is:u.is}):(t=M.createElement(s),s==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,s),t[Si]=i,t[Eo]=u,Hh(t,i,!1,!1),i.stateNode=t;e:{switch(M=ge(s,u),s){case"dialog":Ft("cancel",t),Ft("close",t),f=u;break;case"iframe":case"object":case"embed":Ft("load",t),f=u;break;case"video":case"audio":for(f=0;f<yo.length;f++)Ft(yo[f],t);f=u;break;case"source":Ft("error",t),f=u;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),f=u;break;case"details":Ft("toggle",t),f=u;break;case"input":it(t,u),f=je(t,u),Ft("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=Y({},u,{value:void 0}),Ft("invalid",t);break;case"textarea":Ee(t,u),f=we(t,u),Ft("invalid",t);break;default:f=u}L(s,f),O=f;for(p in O)if(O.hasOwnProperty(p)){var z=O[p];p==="style"?he(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ft(t,z)):p==="children"?typeof z=="string"?(s!=="textarea"||z!=="")&&ve(t,z):typeof z=="number"&&ve(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ft("scroll",t):z!=null&&R(t,p,z,M))}switch(s){case"input":xe(t),at(t,u,!1);break;case"textarea":xe(t),Ze(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ke(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?Q(t,!!u.multiple,p,!1):u.defaultValue!=null&&Q(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ea)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(s=Nr(Co.current),Nr(Mi.current),Pa(i)){if(u=i.stateNode,s=i.memoizedProps,u[Si]=i,(p=u.nodeValue!==s)&&(t=Hn,t!==null))switch(t.tag){case 3:Ma(u.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(u.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[Si]=i,i.stateNode=u}return mn(i),null;case 13:if(kt(Vt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),ms(),i.flags|=98560,p=!1;else if(p=Pa(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Si]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),p=!1}else ui!==null&&(Mc(ui),ui=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):Tc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return xs(),fc(t,i),t===null&&So(i.stateNode.containerInfo),mn(i),null;case 10:return zu(i.type._context),mn(i),null;case 17:return Un(i.type)&&Ta(),mn(i),null;case 19:if(kt(Vt),p=i.memoizedState,p===null)return mn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)No(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Oa(t),M!==null){for(i.flags|=128,No(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)p=s,t=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return It(Vt,Vt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Xe()>Es&&(i.flags|=128,u=!0,No(p,!1),i.lanes=4194304)}else{if(!u)if(t=Oa(M),t!==null){if(i.flags|=128,u=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),No(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ht)return mn(i),null}else 2*Xe()-p.renderingStartTime>Es&&s!==1073741824&&(i.flags|=128,u=!0,No(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(s=p.last,s!==null?s.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Xe(),i.sibling=null,s=Vt.current,It(Vt,u?s&1|2:s&1),i):(mn(i),null);case 22:case 23:return wc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function u_(t,i){switch(Nu(i),i.tag){case 1:return Un(i.type)&&Ta(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),kt(Nn),kt(hn),ju(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Wu(i),null;case 13:if(kt(Vt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return xs(),null;case 10:return zu(i.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Xa=!1,gn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Ss(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){jt(t,i,u)}else s.current=null}function dc(t,i,s){try{s()}catch(u){jt(t,i,u)}}var Wh=!1;function f_(t,i){if(wu=fa,t=Md(),gu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,O=-1,z=-1,ne=0,Me=0,Re=t,Se=null;t:for(;;){for(var We;Re!==s||f!==0&&Re.nodeType!==3||(O=M+f),Re!==p||u!==0&&Re.nodeType!==3||(z=M+u),Re.nodeType===3&&(M+=Re.nodeValue.length),(We=Re.firstChild)!==null;)Se=Re,Re=We;for(;;){if(Re===t)break t;if(Se===s&&++ne===f&&(O=M),Se===p&&++Me===u&&(z=M),(We=Re.nextSibling)!==null)break;Re=Se,Se=Re.parentNode}Re=We}s=O===-1||z===-1?null:{start:O,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Tu={focusedElem:t,selectionRange:s},fa=!1,Ye=i;Ye!==null;)if(i=Ye,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ye=t;else for(;Ye!==null;){i=Ye;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Je=Ke.memoizedProps,qt=Ke.memoizedState,$=i.stateNode,V=$.getSnapshotBeforeUpdate(i.elementType===i.type?Je:ci(i.type,Je),qt);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Le){jt(i,i.return,Le)}if(t=i.sibling,t!==null){t.return=i.return,Ye=t;break}Ye=i.return}return Ke=Wh,Wh=!1,Ke}function Uo(t,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&dc(i,s,p)}f=f.next}while(f!==u)}}function ja(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function hc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Si],delete i[Eo],delete i[bu],delete i[Y0],delete i[q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ea));else if(u!==4&&(t=t.child,t!==null))for(pc(t,i,s),t=t.sibling;t!==null;)pc(t,i,s),t=t.sibling}function mc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(mc(t,i,s),t=t.sibling;t!==null;)mc(t,i,s),t=t.sibling}var cn=null,fi=!1;function or(t,i,s){for(s=s.child;s!==null;)qh(t,i,s),s=s.sibling}function qh(t,i,s){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ln,s)}catch{}switch(s.tag){case 5:gn||Ss(s,i);case 6:var u=cn,f=fi;cn=null,or(t,i,s),cn=u,fi=f,cn!==null&&(fi?(t=cn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):cn.removeChild(s.stateNode));break;case 18:cn!==null&&(fi?(t=cn,s=s.stateNode,t.nodeType===8?Cu(t.parentNode,s):t.nodeType===1&&Cu(t,s),fo(t)):Cu(cn,s.stateNode));break;case 4:u=cn,f=fi,cn=s.stateNode.containerInfo,fi=!0,or(t,i,s),cn=u,fi=f;break;case 0:case 11:case 14:case 15:if(!gn&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&dc(s,i,M),f=f.next}while(f!==u)}or(t,i,s);break;case 1:if(!gn&&(Ss(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(O){jt(s,i,O)}or(t,i,s);break;case 21:or(t,i,s);break;case 22:s.mode&1?(gn=(u=gn)||s.memoizedState!==null,or(t,i,s),gn=u):or(t,i,s);break;default:or(t,i,s)}}function $h(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new c_),i.forEach(function(u){var f=y_.bind(null,t,u);s.has(u)||(s.add(u),u.then(f,f))})}}function di(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u];try{var p=t,M=i,O=M;e:for(;O!==null;){switch(O.tag){case 5:cn=O.stateNode,fi=!1;break e;case 3:cn=O.stateNode.containerInfo,fi=!0;break e;case 4:cn=O.stateNode.containerInfo,fi=!0;break e}O=O.return}if(cn===null)throw Error(n(160));qh(p,M,f),cn=null,fi=!1;var z=f.alternate;z!==null&&(z.return=null),f.return=null}catch(ne){jt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kh(i,t),i=i.sibling}function Kh(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(i,t),wi(t),u&4){try{Uo(3,t,t.return),ja(3,t)}catch(Je){jt(t,t.return,Je)}try{Uo(5,t,t.return)}catch(Je){jt(t,t.return,Je)}}break;case 1:di(i,t),wi(t),u&512&&s!==null&&Ss(s,s.return);break;case 5:if(di(i,t),wi(t),u&512&&s!==null&&Ss(s,s.return),t.flags&32){var f=t.stateNode;try{ve(f,"")}catch(Je){jt(t,t.return,Je)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=s!==null?s.memoizedProps:p,O=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{O==="input"&&p.type==="radio"&&p.name!=null&&He(f,p),ge(O,M);var ne=ge(O,p);for(M=0;M<z.length;M+=2){var Me=z[M],Re=z[M+1];Me==="style"?he(f,Re):Me==="dangerouslySetInnerHTML"?ft(f,Re):Me==="children"?ve(f,Re):R(f,Me,Re,ne)}switch(O){case"input":At(f,p);break;case"textarea":Te(f,p);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var We=p.value;We!=null?Q(f,!!p.multiple,We,!1):Se!==!!p.multiple&&(p.defaultValue!=null?Q(f,!!p.multiple,p.defaultValue,!0):Q(f,!!p.multiple,p.multiple?[]:"",!1))}f[Eo]=p}catch(Je){jt(t,t.return,Je)}}break;case 6:if(di(i,t),wi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Je){jt(t,t.return,Je)}}break;case 3:if(di(i,t),wi(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Je){jt(t,t.return,Je)}break;case 4:di(i,t),wi(t);break;case 13:di(i,t),wi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(vc=Xe())),u&4&&$h(t);break;case 22:if(Me=s!==null&&s.memoizedState!==null,t.mode&1?(gn=(ne=gn)||Me,di(i,t),gn=ne):di(i,t),wi(t),u&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!Me&&(t.mode&1)!==0)for(Ye=t,Me=t.child;Me!==null;){for(Re=Ye=Me;Ye!==null;){switch(Se=Ye,We=Se.child,Se.tag){case 0:case 11:case 14:case 15:Uo(4,Se,Se.return);break;case 1:Ss(Se,Se.return);var Ke=Se.stateNode;if(typeof Ke.componentWillUnmount=="function"){u=Se,s=Se.return;try{i=u,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Je){jt(u,s,Je)}}break;case 5:Ss(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Jh(Re);continue}}We!==null?(We.return=Se,Ye=We):Jh(Re)}Me=Me.sibling}e:for(Me=null,Re=t;;){if(Re.tag===5){if(Me===null){Me=Re;try{f=Re.stateNode,ne?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(O=Re.stateNode,z=Re.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=ot("display",M))}catch(Je){jt(t,t.return,Je)}}}else if(Re.tag===6){if(Me===null)try{Re.stateNode.nodeValue=ne?"":Re.memoizedProps}catch(Je){jt(t,t.return,Je)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===t)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===t)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===t)break e;Me===Re&&(Me=null),Re=Re.return}Me===Re&&(Me=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:di(i,t),wi(t),u&4&&$h(t);break;case 21:break;default:di(i,t),wi(t)}}function wi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(jh(s)){var u=s;break e}s=s.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ve(f,""),u.flags&=-33);var p=Yh(t);mc(t,p,f);break;case 3:case 4:var M=u.stateNode.containerInfo,O=Yh(t);pc(t,O,M);break;default:throw Error(n(161))}}catch(z){jt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function d_(t,i,s){Ye=t,Zh(t)}function Zh(t,i,s){for(var u=(t.mode&1)!==0;Ye!==null;){var f=Ye,p=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Xa;if(!M){var O=f.alternate,z=O!==null&&O.memoizedState!==null||gn;O=Xa;var ne=gn;if(Xa=M,(gn=z)&&!ne)for(Ye=f;Ye!==null;)M=Ye,z=M.child,M.tag===22&&M.memoizedState!==null?ep(f):z!==null?(z.return=M,Ye=z):ep(f);for(;p!==null;)Ye=p,Zh(p),p=p.sibling;Ye=f,Xa=O,gn=ne}Qh(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Ye=p):Qh(t)}}function Qh(t){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||ja(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(s===null)u.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:ci(i.type,s.memoizedProps);u.componentDidUpdate(f,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Jd(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Jd(i,M,s)}break;case 5:var O=i.stateNode;if(s===null&&i.flags&4){s=O;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&s.focus();break;case"img":z.src&&(s.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var Me=ne.memoizedState;if(Me!==null){var Re=Me.dehydrated;Re!==null&&fo(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&hc(i)}catch(Se){jt(i,i.return,Se)}}if(i===t){Ye=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ye=s;break}Ye=i.return}}function Jh(t){for(;Ye!==null;){var i=Ye;if(i===t){Ye=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ye=s;break}Ye=i.return}}function ep(t){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{ja(4,i)}catch(z){jt(i,s,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(z){jt(i,f,z)}}var p=i.return;try{hc(i)}catch(z){jt(i,p,z)}break;case 5:var M=i.return;try{hc(i)}catch(z){jt(i,M,z)}}}catch(z){jt(i,i.return,z)}if(i===t){Ye=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ye=O;break}Ye=i.return}}var h_=Math.ceil,Ya=N.ReactCurrentDispatcher,gc=N.ReactCurrentOwner,ni=N.ReactCurrentBatchConfig,bt=0,on=null,$t=null,fn=0,Vn=0,Ms=tr(0),Qt=0,Io=null,Ir=0,qa=0,_c=0,Oo=null,On=null,vc=0,Es=1/0,Oi=null,$a=!1,xc=null,ar=null,Ka=!1,lr=null,Za=0,Fo=0,yc=null,Qa=-1,Ja=0;function Mn(){return(bt&6)!==0?Xe():Qa!==-1?Qa:Qa=Xe()}function ur(t){return(t.mode&1)===0?1:(bt&2)!==0&&fn!==0?fn&-fn:K0.transition!==null?(Ja===0&&(Ja=la()),Ja):(t=Lt,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t)}function hi(t,i,s,u){if(50<Fo)throw Fo=0,yc=null,Error(n(185));oo(t,s,u),((bt&2)===0||t!==on)&&(t===on&&((bt&2)===0&&(qa|=s),Qt===4&&cr(t,fn)),Fn(t,u),s===1&&bt===0&&(i.mode&1)===0&&(Es=Xe()+500,Ra&&ir()))}function Fn(t,i){var s=t.callbackNode;Dn(t,i);var u=Zn(t,t===on?fn:0);if(u===0)s!==null&&Ve(s),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(s!=null&&Ve(s),i===1)t.tag===0?$0(np.bind(null,t)):Hd(np.bind(null,t)),X0(function(){(bt&6)===0&&ir()}),s=null;else{switch(qf(u)){case 1:s=ht;break;case 4:s=_t;break;case 16:s=Ut;break;case 536870912:s=Yt;break;default:s=Ut}s=cp(s,tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function tp(t,i){if(Qa=-1,Ja=0,(bt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(ws()&&t.callbackNode!==s)return null;var u=Zn(t,t===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=el(t,u);else{i=u;var f=bt;bt|=2;var p=rp();(on!==t||fn!==i)&&(Oi=null,Es=Xe()+500,Fr(t,i));do try{g_();break}catch(O){ip(t,O)}while(!0);ku(),Ya.current=p,bt=f,$t!==null?i=0:(on=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(f=Rr(t),f!==0&&(u=f,i=Sc(t,f))),i===1)throw s=Io,Fr(t,0),cr(t,u),Fn(t,Xe()),s;if(i===6)cr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!p_(f)&&(i=el(t,u),i===2&&(p=Rr(t),p!==0&&(u=p,i=Sc(t,p))),i===1))throw s=Io,Fr(t,0),cr(t,u),Fn(t,Xe()),s;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:kr(t,On,Oi);break;case 3:if(cr(t,u),(u&130023424)===u&&(i=vc+500-Xe(),10<i)){if(Zn(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Mn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ru(kr.bind(null,t,On,Oi),i);break}kr(t,On,Oi);break;case 4:if(cr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var M=31-yn(u);p=1<<M,M=i[M],M>f&&(f=M),u&=~p}if(u=f,u=Xe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*h_(u/1960))-u,10<u){t.timeoutHandle=Ru(kr.bind(null,t,On,Oi),u);break}kr(t,On,Oi);break;case 5:kr(t,On,Oi);break;default:throw Error(n(329))}}}return Fn(t,Xe()),t.callbackNode===s?tp.bind(null,t):null}function Sc(t,i){var s=Oo;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=el(t,i),t!==2&&(i=On,On=s,i!==null&&Mc(i)),t}function Mc(t){On===null?On=t:On.push.apply(On,t)}function p_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var f=s[u],p=f.getSnapshot;f=f.value;try{if(!li(p(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~_c,i&=~qa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-yn(i),u=1<<s;t[s]=-1,i&=~u}}function np(t){if((bt&6)!==0)throw Error(n(327));ws();var i=Zn(t,0);if((i&1)===0)return Fn(t,Xe()),null;var s=el(t,i);if(t.tag!==0&&s===2){var u=Rr(t);u!==0&&(i=u,s=Sc(t,u))}if(s===1)throw s=Io,Fr(t,0),cr(t,i),Fn(t,Xe()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,On,Oi),Fn(t,Xe()),null}function Ec(t,i){var s=bt;bt|=1;try{return t(i)}finally{bt=s,bt===0&&(Es=Xe()+500,Ra&&ir())}}function Or(t){lr!==null&&lr.tag===0&&(bt&6)===0&&ws();var i=bt;bt|=1;var s=ni.transition,u=Lt;try{if(ni.transition=null,Lt=1,t)return t()}finally{Lt=u,ni.transition=s,bt=i,(bt&6)===0&&ir()}}function wc(){Vn=Ms.current,kt(Ms)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,W0(s)),$t!==null)for(s=$t.return;s!==null;){var u=s;switch(Nu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ta();break;case 3:xs(),kt(Nn),kt(hn),ju();break;case 5:Wu(u);break;case 4:xs();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:zu(u.type._context);break;case 22:case 23:wc()}s=s.return}if(on=t,$t=t=fr(t.current,null),fn=Vn=i,Qt=0,Io=null,_c=qa=Ir=0,On=Oo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(s=Dr[i],u=s.interleaved,u!==null){s.interleaved=null;var f=u.next,p=s.pending;if(p!==null){var M=p.next;p.next=f,u.next=M}s.pending=u}Dr=null}return t}function ip(t,i){do{var s=$t;try{if(ku(),Fa.current=Ha,ka){for(var u=Wt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}ka=!1}if(Ur=0,sn=Zt=Wt=null,bo=!1,Po=0,gc.current=null,s===null||s.return===null){Qt=1,Io=i,$t=null;break}e:{var p=t,M=s.return,O=s,z=i;if(i=fn,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,Me=O,Re=Me.tag;if((Me.mode&1)===0&&(Re===0||Re===11||Re===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var We=Ch(M);if(We!==null){We.flags&=-257,bh(We,M,O,p,i),We.mode&1&&Rh(p,ne,i),i=We,z=ne;var Ke=i.updateQueue;if(Ke===null){var Je=new Set;Je.add(z),i.updateQueue=Je}else Ke.add(z);break e}else{if((i&1)===0){Rh(p,ne,i),Tc();break e}z=Error(n(426))}}else if(Ht&&O.mode&1){var qt=Ch(M);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),bh(qt,M,O,p,i),Ou(ys(z,O));break e}}p=z=ys(z,O),Qt!==4&&(Qt=2),Oo===null?Oo=[p]:Oo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=Th(p,z,i);Qd(p,$);break e;case 1:O=z;var V=p.type,J=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ar===null||!ar.has(J)))){p.flags|=65536,i&=-i,p.lanes|=i;var Le=Ah(p,O,i);Qd(p,Le);break e}}p=p.return}while(p!==null)}op(s)}catch(et){i=et,$t===s&&s!==null&&($t=s=s.return);continue}break}while(!0)}function rp(){var t=Ya.current;return Ya.current=Ha,t===null?Ha:t}function Tc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Ir&268435455)===0&&(qa&268435455)===0||cr(on,fn)}function el(t,i){var s=bt;bt|=2;var u=rp();(on!==t||fn!==i)&&(Oi=null,Fr(t,i));do try{m_();break}catch(f){ip(t,f)}while(!0);if(ku(),bt=s,Ya.current=u,$t!==null)throw Error(n(261));return on=null,fn=0,Qt}function m_(){for(;$t!==null;)sp($t)}function g_(){for(;$t!==null&&!nt();)sp($t)}function sp(t){var i=up(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,i===null?op(t):$t=i,gc.current=null}function op(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=l_(s,i,Vn),s!==null){$t=s;return}}else{if(s=u_(s,i),s!==null){s.flags&=32767,$t=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Qt===0&&(Qt=5)}function kr(t,i,s){var u=Lt,f=ni.transition;try{ni.transition=null,Lt=1,__(t,i,s,u)}finally{ni.transition=f,Lt=u}return null}function __(t,i,s,u){do ws();while(lr!==null);if((bt&6)!==0)throw Error(n(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Zg(t,p),t===on&&($t=on=null,fn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ka||(Ka=!0,cp(Ut,function(){return ws(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=ni.transition,ni.transition=null;var M=Lt;Lt=1;var O=bt;bt|=4,gc.current=null,f_(t,s),Kh(s,t),F0(Tu),fa=!!wu,Tu=wu=null,t.current=s,d_(s),ct(),bt=O,Lt=M,ni.transition=p}else t.current=s;if(Ka&&(Ka=!1,lr=t,Za=f),p=t.pendingLanes,p===0&&(ar=null),yt(s.stateNode),Fn(t,Xe()),i!==null)for(u=t.onRecoverableError,s=0;s<i.length;s++)f=i[s],u(f.value,{componentStack:f.stack,digest:f.digest});if($a)throw $a=!1,t=xc,xc=null,t;return(Za&1)!==0&&t.tag!==0&&ws(),p=t.pendingLanes,(p&1)!==0?t===yc?Fo++:(Fo=0,yc=t):Fo=0,ir(),null}function ws(){if(lr!==null){var t=qf(Za),i=ni.transition,s=Lt;try{if(ni.transition=null,Lt=16>t?16:t,lr===null)var u=!1;else{if(t=lr,lr=null,Za=0,(bt&6)!==0)throw Error(n(331));var f=bt;for(bt|=4,Ye=t.current;Ye!==null;){var p=Ye,M=p.child;if((Ye.flags&16)!==0){var O=p.deletions;if(O!==null){for(var z=0;z<O.length;z++){var ne=O[z];for(Ye=ne;Ye!==null;){var Me=Ye;switch(Me.tag){case 0:case 11:case 15:Uo(8,Me,p)}var Re=Me.child;if(Re!==null)Re.return=Me,Ye=Re;else for(;Ye!==null;){Me=Ye;var Se=Me.sibling,We=Me.return;if(Xh(Me),Me===ne){Ye=null;break}if(Se!==null){Se.return=We,Ye=Se;break}Ye=We}}}var Ke=p.alternate;if(Ke!==null){var Je=Ke.child;if(Je!==null){Ke.child=null;do{var qt=Je.sibling;Je.sibling=null,Je=qt}while(Je!==null)}}Ye=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Ye=M;else e:for(;Ye!==null;){if(p=Ye,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Uo(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,Ye=$;break e}Ye=p.return}}var V=t.current;for(Ye=V;Ye!==null;){M=Ye;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,Ye=J;else e:for(M=V;Ye!==null;){if(O=Ye,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ja(9,O)}}catch(et){jt(O,O.return,et)}if(O===M){Ye=null;break e}var Le=O.sibling;if(Le!==null){Le.return=O.return,Ye=Le;break e}Ye=O.return}}if(bt=f,ir(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ln,t)}catch{}u=!0}return u}finally{Lt=s,ni.transition=i}}return!1}function ap(t,i,s){i=ys(s,i),i=Th(t,i,1),t=sr(t,i,1),i=Mn(),t!==null&&(oo(t,1,i),Fn(t,i))}function jt(t,i,s){if(t.tag===3)ap(t,t,s);else for(;i!==null;){if(i.tag===3){ap(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){t=ys(s,t),t=Ah(i,t,1),i=sr(i,t,1),t=Mn(),i!==null&&(oo(i,1,t),Fn(i,t));break}}i=i.return}}function v_(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&s,on===t&&(fn&s)===s&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>Xe()-vc?Fr(t,0):_c|=s),Fn(t,i)}function lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Yi,Yi<<=1,(Yi&130023424)===0&&(Yi=4194304)));var s=Mn();t=Ni(t,i),t!==null&&(oo(t,i,s),Fn(t,s))}function x_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),lp(t,s)}function y_(t,i){var s=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),lp(t,s)}var up;up=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Nn.current)In=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return In=!1,a_(t,i,s);In=(t.flags&131072)!==0}else In=!1,Ht&&(i.flags&1048576)!==0&&Gd(i,ba,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Wa(t,i),t=i.pendingProps;var f=ds(i,hn.current);vs(i,s),f=$u(null,i,u,t,f,s);var p=Ku();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(u)?(p=!0,Aa(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Gu(i),f.updater=Ga,i.stateNode=f,f._reactInternals=i,nc(i,u,t,s),i=oc(null,i,u,!0,p,s)):(i.tag=0,Ht&&p&&Du(i),Sn(null,i,f,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Wa(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=M_(u),t=ci(u,t),f){case 0:i=sc(null,i,u,t,s);break e;case 1:i=Ih(null,i,u,t,s);break e;case 11:i=Ph(null,i,u,t,s);break e;case 14:i=Lh(null,i,u,ci(u.type,t),s);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),sc(t,i,u,f,s);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),Ih(t,i,u,f,s);case 3:e:{if(Oh(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Zd(t,i),Ia(i,u,null,s);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ys(Error(n(423)),i),i=Fh(t,i,u,s,f);break e}else if(u!==f){f=ys(Error(n(424)),i),i=Fh(t,i,u,s,f);break e}else for(Gn=er(i.stateNode.containerInfo.firstChild),Hn=i,Ht=!0,ui=null,s=$d(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),u===f){i=Ii(t,i,s);break e}Sn(t,i,u,s)}i=i.child}return i;case 5:return eh(i),t===null&&Iu(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,Au(u,f)?M=null:p!==null&&Au(u,p)&&(i.flags|=32),Uh(t,i),Sn(t,i,M,s),i.child;case 6:return t===null&&Iu(i),null;case 13:return kh(t,i,s);case 4:return Vu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=gs(i,null,u,s):Sn(t,i,u,s),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),Ph(t,i,u,f,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,It(Da,u._currentValue),u._currentValue=M,p!==null)if(li(p.value,M)){if(p.children===f.children&&!Nn.current){i=Ii(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var O=p.dependencies;if(O!==null){M=p.child;for(var z=O.firstContext;z!==null;){if(z.context===u){if(p.tag===1){z=Ui(-1,s&-s),z.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var Me=ne.pending;Me===null?z.next=z:(z.next=Me.next,Me.next=z),ne.pending=z}}p.lanes|=s,z=p.alternate,z!==null&&(z.lanes|=s),Bu(p.return,s,i),O.lanes|=s;break}z=z.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=s,O=M.alternate,O!==null&&(O.lanes|=s),Bu(M,s,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Sn(t,i,f.children,s),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,vs(i,s),f=ei(f),u=u(f),i.flags|=1,Sn(t,i,u,s),i.child;case 14:return u=i.type,f=ci(u,i.pendingProps),f=ci(u.type,f),Lh(t,i,u,f,s);case 15:return Dh(t,i,i.type,i.pendingProps,s);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ci(u,f),Wa(t,i),i.tag=1,Un(u)?(t=!0,Aa(i)):t=!1,vs(i,s),Eh(i,u,f),nc(i,u,f,s),oc(null,i,u,!0,t,s);case 19:return Bh(t,i,s);case 22:return Nh(t,i,s)}throw Error(n(156,i.tag))};function cp(t,i){return ie(t,i)}function S_(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,i,s,u){return new S_(t,i,s,u)}function Ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M_(t){if(typeof t=="function")return Ac(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fe)return 11;if(t===ee)return 14}return 2}function fr(t,i){var s=t.alternate;return s===null?(s=ii(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function tl(t,i,s,u,f,p){var M=2;if(u=t,typeof t=="function")Ac(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case k:return zr(s.children,f,p,i);case oe:M=8,f|=8;break;case C:return t=ii(12,s,i,f|2),t.elementType=C,t.lanes=p,t;case ye:return t=ii(13,s,i,f),t.elementType=ye,t.lanes=p,t;case G:return t=ii(19,s,i,f),t.elementType=G,t.lanes=p,t;case de:return nl(s,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:M=10;break e;case ae:M=9;break e;case fe:M=11;break e;case ee:M=14;break e;case re:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ii(M,s,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function zr(t,i,s,u){return t=ii(7,t,u,i),t.lanes=s,t}function nl(t,i,s,u){return t=ii(22,t,u,i),t.elementType=de,t.lanes=s,t.stateNode={isHidden:!1},t}function Rc(t,i,s){return t=ii(6,t,null,i),t.lanes=s,t}function Cc(t,i,s){return i=ii(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function E_(t,i,s,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ns(0),this.expirationTimes=ns(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ns(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bc(t,i,s,u,f,p,M,O,z){return t=new E_(t,i,s,O,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ii(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(p),t}function w_(t,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:t,containerInfo:i,implementation:s}}function fp(t){if(!t)return nr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Un(s))return zd(t,s,i)}return i}function dp(t,i,s,u,f,p,M,O,z){return t=bc(s,u,!0,t,f,p,M,O,z),t.context=fp(null),s=t.current,u=Mn(),f=ur(s),p=Ui(u,f),p.callback=i??null,sr(s,p,f),t.current.lanes=f,oo(t,f,u),Fn(t,u),t}function il(t,i,s,u){var f=i.current,p=Mn(),M=ur(f);return s=fp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ui(p,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=sr(f,i,M),t!==null&&(hi(t,f,M,p),Ua(t,f,M)),M}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Pc(t,i){hp(t,i),(t=t.alternate)&&hp(t,i)}function T_(){return null}var pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lc(t){this._internalRoot=t}sl.prototype.render=Lc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));il(t,i,null,null)},sl.prototype.unmount=Lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){il(null,t,null,null)}),i[bi]=null}};function sl(t){this._internalRoot=t}sl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Zi.length&&i!==0&&i<Zi[s].priority;s++);Zi.splice(s,0,t),s===0&&ed(t)}};function Dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function A_(t,i,s,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ne=rl(M);p.call(ne)}}var M=dp(i,u,t,0,null,!1,!1,"",mp);return t._reactRootContainer=M,t[bi]=M.current,So(t.nodeType===8?t.parentNode:t),Or(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var O=u;u=function(){var ne=rl(z);O.call(ne)}}var z=bc(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=z,t[bi]=z.current,So(t.nodeType===8?t.parentNode:t),Or(function(){il(i,z,s,u)}),z}function al(t,i,s,u,f){var p=s._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var O=f;f=function(){var z=rl(M);O.call(z)}}il(i,M,t,f)}else M=A_(s,i,t,f,u);return rl(M)}$f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Xt(i.pendingLanes);s!==0&&(nu(i,s|1),Fn(i,Xe()),(bt&6)===0&&(Es=Xe()+500,ir()))}break;case 13:Or(function(){var u=Ni(t,1);if(u!==null){var f=Mn();hi(u,t,1,f)}}),Pc(t,1)}},iu=function(t){if(t.tag===13){var i=Ni(t,134217728);if(i!==null){var s=Mn();hi(i,t,134217728,s)}Pc(t,134217728)}},Kf=function(t){if(t.tag===13){var i=ur(t),s=Ni(t,i);if(s!==null){var u=Mn();hi(s,t,i,u)}Pc(t,i)}},Zf=function(){return Lt},Qf=function(t,i){var s=Lt;try{return Lt=t,i()}finally{Lt=s}},pe=function(t,i,s){switch(i){case"input":if(At(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var f=wa(u);if(!f)throw Error(n(90));j(u),At(u,f)}}}break;case"textarea":Te(t,s);break;case"select":i=s.value,i!=null&&Q(t,!!s.multiple,i,!1)}},Ae=Ec,Ue=Or;var R_={usingClientEntryPoint:!1,Events:[wo,cs,wa,Oe,Ge,Ec]},ko={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=se(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Ln=ll.inject(C_),Rt=ll}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_,kn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(i))throw Error(n(200));return w_(t,i,null,s)},kn.createRoot=function(t,i){if(!Dc(t))throw Error(n(299));var s=!1,u="",f=pp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bc(t,1,!1,null,null,s,!1,u,f),t[bi]=i.current,So(t.nodeType===8?t.parentNode:t),new Lc(i)},kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=se(i),t=t===null?null:t.stateNode,t},kn.flushSync=function(t){return Or(t)},kn.hydrate=function(t,i,s){if(!ol(i))throw Error(n(200));return al(null,t,i,!0,s)},kn.hydrateRoot=function(t,i,s){if(!Dc(t))throw Error(n(405));var u=s!=null&&s.hydratedSources||null,f=!1,p="",M=pp;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=dp(i,null,t,1,s??null,f,!1,p,M),t[bi]=i.current,So(t),u)for(t=0;t<u.length;t++)s=u[t],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new sl(i)},kn.render=function(t,i,s){if(!ol(i))throw Error(n(200));return al(null,t,i,!1,s)},kn.unmountComponentAtNode=function(t){if(!ol(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1},kn.unstable_batchedUpdates=Ec,kn.unstable_renderSubtreeIntoContainer=function(t,i,s,u){if(!ol(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return al(t,i,s,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Ep;function F_(){if(Ep)return Ic.exports;Ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ic.exports=O_(),Ic.exports}var wp;function k_(){if(wp)return ul;wp=1;var o=F_();return ul.createRoot=o.createRoot,ul.hydrateRoot=o.hydrateRoot,ul}var z_=k_();const B_=mg(z_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="160",Ts={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H_=0,Tp=1,G_=2,gg=1,V_=2,Gi=3,Tr=0,Cn=1,Ai=2,Sr=0,Qs=1,Vl=2,Ap=3,Rp=4,W_=5,Xr=100,X_=101,j_=102,Cp=103,bp=104,Y_=200,q_=201,$_=202,K_=203,yf=204,Sf=205,Z_=206,Q_=207,J_=208,ev=209,tv=210,nv=211,iv=212,rv=213,sv=214,ov=0,av=1,lv=2,Wl=3,uv=4,cv=5,fv=6,dv=7,_g=0,hv=1,pv=2,Mr=0,mv=1,gv=2,_v=3,vg=4,vv=5,xv=6,xg=300,eo=301,to=302,Mf=303,Ef=304,Zl=306,wf=1e3,_i=1001,Tf=1002,Tn=1003,Pp=1004,kc=1005,si=1006,yv=1007,Jo=1008,Er=1009,Sv=1010,Mv=1011,Of=1012,yg=1013,xr=1014,yr=1015,ea=1016,Sg=1017,Mg=1018,Yr=1020,Ev=1021,vi=1023,wv=1024,Tv=1025,qr=1026,no=1027,Av=1028,Eg=1029,Rv=1030,wg=1031,Tg=1033,zc=33776,Bc=33777,Hc=33778,Gc=33779,Lp=35840,Dp=35841,Np=35842,Up=35843,Ag=36196,Ip=37492,Op=37496,Fp=37808,kp=37809,zp=37810,Bp=37811,Hp=37812,Gp=37813,Vp=37814,Wp=37815,Xp=37816,jp=37817,Yp=37818,qp=37819,$p=37820,Kp=37821,Vc=36492,Zp=36494,Qp=36495,Cv=36283,Jp=36284,em=36285,tm=36286,Rg=3e3,$r=3001,bv=3200,Pv=3201,Cg=0,Lv=1,ai="",Jt="srgb",Xi="srgb-linear",Ff="display-p3",Ql="display-p3-linear",Xl="linear",zt="srgb",jl="rec709",Yl="p3",Rs=7680,nm=519,Dv=512,Nv=513,Uv=514,bg=515,Iv=516,Ov=517,Fv=518,kv=519,Af=35044,zv=35048,im="300 es",Rf=1035,Wi=2e3,ql=2001;class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=Math.PI/180,Cf=180/Math.PI;function wr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[o&255]+_n[o>>8&255]+_n[o>>16&255]+_n[o>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function An(o,e,n){return Math.max(e,Math.min(n,o))}function Bv(o,e){return(o%e+e)%e}function Wc(o,e,n){return(1-n)*o+n*e}function rm(o){return(o&o-1)===0&&o!==0}function bf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Vi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Hv={DEG2RAD:Hl};class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,n,r,a,l,d,c,h,m){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,m)}set(e,n,r,a,l,d,c,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=n,g[4]=l,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[3],h=r[6],m=r[1],g=r[4],v=r[7],y=r[2],S=r[5],T=r[8],w=a[0],x=a[3],_=a[6],b=a[1],R=a[4],N=a[7],B=a[2],F=a[5],k=a[8];return l[0]=d*w+c*b+h*B,l[3]=d*x+c*R+h*F,l[6]=d*_+c*N+h*k,l[1]=m*w+g*b+v*B,l[4]=m*x+g*R+v*F,l[7]=m*_+g*N+v*k,l[2]=y*w+S*b+T*B,l[5]=y*x+S*R+T*F,l[8]=y*_+S*N+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*c*m-r*l*g+r*c*h+a*l*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=g*d-c*m,y=c*h-g*l,S=m*l-d*h,T=n*v+r*y+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(a*m-g*r)*w,e[2]=(c*r-a*d)*w,e[3]=y*w,e[4]=(g*n-a*h)*w,e[5]=(a*l-c*n)*w,e[6]=S*w,e[7]=(r*h-m*n)*w,e[8]=(d*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,d,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*d+m*c)+d+e,-a*m,a*h,-a*(-m*d+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Tt;function Pg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ta(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gv(){const o=ta("canvas");return o.style.display="block",o}const sm={};function Qo(o){o in sm||(sm[o]=!0,console.warn(o))}const om=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cl={[Xi]:{transfer:Xl,primaries:jl,toReference:o=>o,fromReference:o=>o},[Jt]:{transfer:zt,primaries:jl,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ql]:{transfer:Xl,primaries:Yl,toReference:o=>o.applyMatrix3(am),fromReference:o=>o.applyMatrix3(om)},[Ff]:{transfer:zt,primaries:Yl,toReference:o=>o.convertSRGBToLinear().applyMatrix3(am),fromReference:o=>o.applyMatrix3(om).convertLinearToSRGB()}},Vv=new Set([Xi,Ql]),Dt={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Vv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=cl[e].toReference,a=cl[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return cl[o].primaries},getTransfer:function(o){return o===ai?Xl:cl[o].transfer}};function Js(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function jc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Cs;class Lg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=ta("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ta("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Js(l[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Js(n[r]/255)*255):n[r]=Js(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wv=0;class Dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?l.push(Yc(a[d].image)):l.push(Yc(a[d]))}else l=Yc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Yc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Lg.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;class bn extends Jr{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=_i,a=_i,l=si,d=Jo,c=vi,h=Er,m=bn.DEFAULT_ANISOTROPY,g=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=wr(),this.name="",this.source=new Dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===$r?Jt:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?$r:Rg}set encoding(e){Qo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$r?Jt:ai}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=xg;bn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],y=h[1],S=h[5],T=h[9],w=h[2],x=h[6],_=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+w)<.1&&Math.abs(T+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,N=(S+1)/2,B=(_+1)/2,F=(g+y)/4,k=(v+w)/4,oe=(T+x)/4;return R>N&&R>B?R<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(R),a=F/r,l=k/r):N>B?N<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(N),r=F/a,l=oe/a):B<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),r=k/l,a=oe/l),this.set(r,a,l,n),this}let b=Math.sqrt((x-T)*(x-T)+(v-w)*(v-w)+(y-g)*(y-g));return Math.abs(b)<.001&&(b=1),this.x=(x-T)/b,this.y=(v-w)/b,this.z=(y-g)/b,this.w=Math.acos((m+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jv extends Jr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Qo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===$r?Jt:ai),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends jv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ng extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yv extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,d,c){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const y=l[d+0],S=l[d+1],T=l[d+2],w=l[d+3];if(c===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(c===1){e[n+0]=y,e[n+1]=S,e[n+2]=T,e[n+3]=w;return}if(v!==w||h!==y||m!==S||g!==T){let x=1-c;const _=h*y+m*S+g*T+v*w,b=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const B=Math.sqrt(R),F=Math.atan2(B,_*b);x=Math.sin(x*F)/B,c=Math.sin(c*F)/B}const N=c*b;if(h=h*x+y*N,m=m*x+S*N,g=g*x+T*N,v=v*x+w*N,x===1-c){const B=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=B,m*=B,g*=B,v*=B}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,d){const c=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[d],y=l[d+1],S=l[d+2],T=l[d+3];return e[n]=c*T+g*v+h*S-m*y,e[n+1]=h*T+g*y+m*v-c*S,e[n+2]=m*T+g*S+c*y-h*v,e[n+3]=g*T-c*v-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,d=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(a/2),v=c(l/2),y=h(r/2),S=h(a/2),T=h(l/2);switch(d){case"XYZ":this._x=y*g*v+m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v-y*S*T;break;case"YXZ":this._x=y*g*v+m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v+y*S*T;break;case"ZXY":this._x=y*g*v-m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v-y*S*T;break;case"ZYX":this._x=y*g*v-m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v+y*S*T;break;case"YZX":this._x=y*g*v+m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v-y*S*T;break;case"XZY":this._x=y*g*v-m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],d=n[1],c=n[5],h=n[9],m=n[2],g=n[6],v=n[10],y=r+c+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(d-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+m)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(d-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,d=e._w,c=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*c+a*m-l*h,this._y=a*g+d*h+l*c-r*m,this._z=l*g+d*m+r*h-a*c,this._w=d*g-r*c-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),v=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(l),r*Math.cos(l),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,d=e.y,c=e.z,h=e.w,m=2*(d*a-c*r),g=2*(c*n-l*a),v=2*(l*r-d*n);return this.x=n+h*m+d*v-c*g,this.y=r+h*g+c*m-l*v,this.z=a+h*v+l*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,d=n.x,c=n.y,h=n.z;return this.x=a*h-l*c,this.y=l*d-r*h,this.z=r*c-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new H,lm=new Zr;class es{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,c=l.count;d<c;d++)e.isMesh===!0?e.getVertexPosition(d,pi):pi.fromBufferAttribute(l,d),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),dl.subVectors(this.max,Bo),bs.subVectors(e.a,Bo),Ps.subVectors(e.b,Bo),Ls.subVectors(e.c,Bo),hr.subVectors(Ps,bs),pr.subVectors(Ls,Ps),Br.subVectors(bs,Ls);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Br.z,Br.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Br.z,0,-Br.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Br.y,Br.x,0];return!$c(n,bs,Ps,Ls,dl)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,bs,Ps,Ls,dl))?!1:(hl.crossVectors(hr,pr),n=[hl.x,hl.y,hl.z],$c(n,bs,Ps,Ls,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new H,new H,new H,new H,new H,new H,new H,new H],pi=new H,fl=new es,bs=new H,Ps=new H,Ls=new H,hr=new H,pr=new H,Br=new H,Bo=new H,dl=new H,hl=new H,Hr=new H;function $c(o,e,n,r,a){for(let l=0,d=o.length-3;l<=d;l+=3){Hr.fromArray(o,l);const c=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),m=n.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const qv=new es,Ho=new H,Kc=new H;class ts{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):qv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ho,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Kc)),this.expandByPoint(Ho.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new H,Zc=new H,pl=new H,mr=new H,Qc=new H,ml=new H,Jc=new H;class na{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Zc.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Zc);const l=e.distanceTo(n)*.5,d=-this.direction.dot(pl),c=mr.dot(this.direction),h=-mr.dot(pl),m=mr.lengthSq(),g=Math.abs(1-d*d);let v,y,S,T;if(g>0)if(v=d*h-c,y=d*c-h,T=l*g,v>=0)if(y>=-T)if(y<=T){const w=1/g;v*=w,y*=w,S=v*(v+d*y+2*c)+y*(d*v+y+2*h)+m}else y=l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;else y=-l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;else y<=-T?(v=Math.max(0,-(-d*l+c)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m):y<=T?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+m):(v=Math.max(0,-(d*l+c)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m);else y=d>0?-l:l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Zc).addScaledVector(pl,y),S}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),c=r-d,h=r+d;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,d,c,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),v>=0?(c=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(c=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,a,l){Qc.subVectors(n,e),ml.subVectors(r,e),Jc.crossVectors(Qc,ml);let d=this.direction.dot(Jc),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;mr.subVectors(this.origin,e);const h=c*this.direction.dot(ml.crossVectors(mr,ml));if(h<0)return null;const m=c*this.direction.dot(Qc.cross(mr));if(m<0||h+m>d)return null;const g=-c*mr.dot(Jc);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,a,l,d,c,h,m,g,v,y,S,T,w,x){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,m,g,v,y,S,T,w,x)}set(e,n,r,a,l,d,c,h,m,g,v,y,S,T,w,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=d,_[9]=c,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=T,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),d=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),c=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=d*g,S=d*v,T=c*g,w=c*v;n[0]=h*g,n[4]=-h*v,n[8]=m,n[1]=S+T*m,n[5]=y-w*m,n[9]=-c*h,n[2]=w-y*m,n[6]=T+S*m,n[10]=d*h}else if(e.order==="YXZ"){const y=h*g,S=h*v,T=m*g,w=m*v;n[0]=y+w*c,n[4]=T*c-S,n[8]=d*m,n[1]=d*v,n[5]=d*g,n[9]=-c,n[2]=S*c-T,n[6]=w+y*c,n[10]=d*h}else if(e.order==="ZXY"){const y=h*g,S=h*v,T=m*g,w=m*v;n[0]=y-w*c,n[4]=-d*v,n[8]=T+S*c,n[1]=S+T*c,n[5]=d*g,n[9]=w-y*c,n[2]=-d*m,n[6]=c,n[10]=d*h}else if(e.order==="ZYX"){const y=d*g,S=d*v,T=c*g,w=c*v;n[0]=h*g,n[4]=T*m-S,n[8]=y*m+w,n[1]=h*v,n[5]=w*m+y,n[9]=S*m-T,n[2]=-m,n[6]=c*h,n[10]=d*h}else if(e.order==="YZX"){const y=d*h,S=d*m,T=c*h,w=c*m;n[0]=h*g,n[4]=w-y*v,n[8]=T*v+S,n[1]=v,n[5]=d*g,n[9]=-c*g,n[2]=-m*g,n[6]=S*v+T,n[10]=y-w*v}else if(e.order==="XZY"){const y=d*h,S=d*m,T=c*h,w=c*m;n[0]=h*g,n[4]=-v,n[8]=m*g,n[1]=y*v+w,n[5]=d*g,n[9]=S*v-T,n[2]=T*v-S,n[6]=c*g,n[10]=w*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Kv)}lookAt(e,n,r){const a=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),gr.crossVectors(r,Wn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),gr.crossVectors(r,Wn)),gr.normalize(),gl.crossVectors(Wn,gr),a[0]=gr.x,a[4]=gl.x,a[8]=Wn.x,a[1]=gr.y,a[5]=gl.y,a[9]=Wn.y,a[2]=gr.z,a[6]=gl.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[4],h=r[8],m=r[12],g=r[1],v=r[5],y=r[9],S=r[13],T=r[2],w=r[6],x=r[10],_=r[14],b=r[3],R=r[7],N=r[11],B=r[15],F=a[0],k=a[4],oe=a[8],C=a[12],U=a[1],ae=a[5],fe=a[9],ye=a[13],G=a[2],ee=a[6],re=a[10],de=a[14],X=a[3],Z=a[7],Y=a[11],I=a[15];return l[0]=d*F+c*U+h*G+m*X,l[4]=d*k+c*ae+h*ee+m*Z,l[8]=d*oe+c*fe+h*re+m*Y,l[12]=d*C+c*ye+h*de+m*I,l[1]=g*F+v*U+y*G+S*X,l[5]=g*k+v*ae+y*ee+S*Z,l[9]=g*oe+v*fe+y*re+S*Y,l[13]=g*C+v*ye+y*de+S*I,l[2]=T*F+w*U+x*G+_*X,l[6]=T*k+w*ae+x*ee+_*Z,l[10]=T*oe+w*fe+x*re+_*Y,l[14]=T*C+w*ye+x*de+_*I,l[3]=b*F+R*U+N*G+B*X,l[7]=b*k+R*ae+N*ee+B*Z,l[11]=b*oe+R*fe+N*re+B*Y,l[15]=b*C+R*ye+N*de+B*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],d=e[1],c=e[5],h=e[9],m=e[13],g=e[2],v=e[6],y=e[10],S=e[14],T=e[3],w=e[7],x=e[11],_=e[15];return T*(+l*h*v-a*m*v-l*c*y+r*m*y+a*c*S-r*h*S)+w*(+n*h*S-n*m*y+l*d*y-a*d*S+a*m*g-l*h*g)+x*(+n*m*v-n*c*S-l*d*v+r*d*S+l*c*g-r*m*g)+_*(-a*c*g-n*h*v+n*c*y+a*d*v-r*d*y+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=e[9],y=e[10],S=e[11],T=e[12],w=e[13],x=e[14],_=e[15],b=v*x*m-w*y*m+w*h*S-c*x*S-v*h*_+c*y*_,R=T*y*m-g*x*m-T*h*S+d*x*S+g*h*_-d*y*_,N=g*w*m-T*v*m+T*c*S-d*w*S-g*c*_+d*v*_,B=T*v*h-g*w*h-T*c*y+d*w*y+g*c*x-d*v*x,F=n*b+r*R+a*N+l*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=b*k,e[1]=(w*y*l-v*x*l-w*a*S+r*x*S+v*a*_-r*y*_)*k,e[2]=(c*x*l-w*h*l+w*a*m-r*x*m-c*a*_+r*h*_)*k,e[3]=(v*h*l-c*y*l-v*a*m+r*y*m+c*a*S-r*h*S)*k,e[4]=R*k,e[5]=(g*x*l-T*y*l+T*a*S-n*x*S-g*a*_+n*y*_)*k,e[6]=(T*h*l-d*x*l-T*a*m+n*x*m+d*a*_-n*h*_)*k,e[7]=(d*y*l-g*h*l+g*a*m-n*y*m-d*a*S+n*h*S)*k,e[8]=N*k,e[9]=(T*v*l-g*w*l-T*r*S+n*w*S+g*r*_-n*v*_)*k,e[10]=(d*w*l-T*c*l+T*r*m-n*w*m-d*r*_+n*c*_)*k,e[11]=(g*c*l-d*v*l-g*r*m+n*v*m+d*r*S-n*c*S)*k,e[12]=B*k,e[13]=(g*w*a-T*v*a+T*r*y-n*w*y-g*r*x+n*v*x)*k,e[14]=(T*c*a-d*w*a-T*r*h+n*w*h+d*r*x-n*c*x)*k,e[15]=(d*v*a-g*c*a+g*r*h-n*v*h-d*r*y+n*c*y)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,d=e.x,c=e.y,h=e.z,m=l*d,g=l*c;return this.set(m*d+r,m*c-a*h,m*h+a*c,0,m*c+a*h,g*c+r,g*h-a*d,0,m*h-a*c,g*h+a*d,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,d=n._y,c=n._z,h=n._w,m=l+l,g=d+d,v=c+c,y=l*m,S=l*g,T=l*v,w=d*g,x=d*v,_=c*v,b=h*m,R=h*g,N=h*v,B=r.x,F=r.y,k=r.z;return a[0]=(1-(w+_))*B,a[1]=(S+N)*B,a[2]=(T-R)*B,a[3]=0,a[4]=(S-N)*F,a[5]=(1-(y+_))*F,a[6]=(x+b)*F,a[7]=0,a[8]=(T+R)*k,a[9]=(x-b)*k,a[10]=(1-(y+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const d=Ds.set(a[4],a[5],a[6]).length(),c=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],mi.copy(this);const m=1/l,g=1/d,v=1/c;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,n.setFromRotationMatrix(mi),r.x=l,r.y=d,r.z=c,this}makePerspective(e,n,r,a,l,d,c=Wi){const h=this.elements,m=2*l/(n-e),g=2*l/(r-a),v=(n+e)/(n-e),y=(r+a)/(r-a);let S,T;if(c===Wi)S=-(d+l)/(d-l),T=-2*d*l/(d-l);else if(c===ql)S=-d/(d-l),T=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,d,c=Wi){const h=this.elements,m=1/(n-e),g=1/(r-a),v=1/(d-l),y=(n+e)*m,S=(r+a)*g;let T,w;if(c===Wi)T=(d+l)*v,w=-2*v;else if(c===ql)T=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new H,mi=new Ot,$v=new H(0,0,0),Kv=new H(1,1,1),gr=new H,gl=new H,Wn=new H,um=new Ot,cm=new Zr;class Jl{constructor(e=0,n=0,r=0,a=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],c=a[8],h=a[1],m=a[5],g=a[9],v=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-An(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(An(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-An(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";let kf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zv=0;const fm=new H,Ns=new Zr,zi=new Ot,_l=new H,Go=new H,Qv=new H,Jv=new Zr,dm=new H(1,0,0),hm=new H(0,1,0),pm=new H(0,0,1),ex={type:"added"},tx={type:"removed"};class en extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new H,n=new Jl,r=new Zr,a=new H(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Tt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?_l.copy(e):_l.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Go,_l,this.up):zi.lookAt(_l,Go,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(zi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ex)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const l=n[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(n){const c=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),v=d(e.shapes),y=d(e.skeletons),S=d(e.animations),T=d(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}en.DEFAULT_UP=new H(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new H,Bi=new H,ef=new H,Hi=new H,Us=new H,Is=new H,mm=new H,tf=new H,nf=new H,rf=new H;let vl=!1;class oi{constructor(e=new H,n=new H,r=new H){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),gi.subVectors(e,n),a.cross(gi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){gi.subVectors(a,n),Bi.subVectors(r,n),ef.subVectors(e,n);const d=gi.dot(gi),c=gi.dot(Bi),h=gi.dot(ef),m=Bi.dot(Bi),g=Bi.dot(ef),v=d*m-c*c;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*h-c*g)*y,T=(d*g-c*h)*y;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getUV(e,n,r,a,l,d,c,h){return vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vl=!0),this.getInterpolation(e,n,r,a,l,d,c,h)}static getInterpolation(e,n,r,a,l,d,c,h){return this.getBarycoord(e,n,r,a,Hi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Hi.x),h.addScaledVector(d,Hi.y),h.addScaledVector(c,Hi.z),h)}static isFrontFacing(e,n,r,a){return gi.subVectors(r,n),Bi.subVectors(e,n),gi.cross(Bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),gi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,l){return vl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vl=!0),oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}getInterpolation(e,n,r,a,l){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let d,c;Us.subVectors(a,r),Is.subVectors(l,r),tf.subVectors(e,r);const h=Us.dot(tf),m=Is.dot(tf);if(h<=0&&m<=0)return n.copy(r);nf.subVectors(e,a);const g=Us.dot(nf),v=Is.dot(nf);if(g>=0&&v<=g)return n.copy(a);const y=h*v-g*m;if(y<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(Us,d);rf.subVectors(e,l);const S=Us.dot(rf),T=Is.dot(rf);if(T>=0&&S<=T)return n.copy(l);const w=S*m-h*T;if(w<=0&&m>=0&&T<=0)return c=m/(m-T),n.copy(r).addScaledVector(Is,c);const x=g*T-S*v;if(x<=0&&v-g>=0&&S-T>=0)return mm.subVectors(l,a),c=(v-g)/(v-g+(S-T)),n.copy(a).addScaledVector(mm,c);const _=1/(x+w+y);return d=w*_,c=y*_,n.copy(r).addScaledVector(Us,d).addScaledVector(Is,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},xl={h:0,s:0,l:0};function sf(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Dt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Dt.workingColorSpace){if(e=Bv(e,1),n=An(n,0,1),r=An(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=sf(d,l,e+1/3),this.g=sf(d,l,e),this.b=sf(d,l,e-1/3)}return Dt.toWorkingColorSpace(this,a),this}setStyle(e,n=Jt){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){const r=Ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Dt.fromWorkingColorSpace(vn.copy(this),e),Math.round(An(vn.r*255,0,255))*65536+Math.round(An(vn.g*255,0,255))*256+Math.round(An(vn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.fromWorkingColorSpace(vn.copy(this),n);const r=vn.r,a=vn.g,l=vn.b,d=Math.max(r,a,l),c=Math.min(r,a,l);let h,m;const g=(c+d)/2;if(c===d)h=0,m=0;else{const v=d-c;switch(m=g<=.5?v/(d+c):v/(2-d-c),d){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Jt){Dt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,a=vn.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(xl);const r=Wc(_r.h,xl.h,n),a=Wc(_r.s,xl.s,n),l=Wc(_r.l,xl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Et;Et.NAMES=Ug;let nx=0;class Ar extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=Qs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yf&&(r.blendSrc=this.blendSrc),this.blendDst!==Sf&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const c in l){const h=l[c];delete h.metadata,d.push(h)}return d}if(n){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $l extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new H,yl=new rt;class zn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array),l=Nt(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Af&&(e.usage=this.usage),e}}class Ig extends zn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Og extends zn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class dn extends zn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ix=0;const ri=new Ot,of=new en,Os=new H,Xn=new es,Vo=new es,ln=new H;class Pn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Og:Ig)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Tt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,n,r){return ri.makeTranslation(e,n,r),this.applyMatrix4(ri),this}scale(e,n,r){return ri.makeScale(e,n,r),this.applyMatrix4(ri),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];Vo.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(Xn.min,Vo.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,Vo.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(Vo.min),Xn.expandByPoint(Vo.max))}Xn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)ln.fromBufferAttribute(c,m),h&&(Os.fromBufferAttribute(e,m),ln.add(Os)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,l=n.normal.array,d=n.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],g=[];for(let U=0;U<c;U++)m[U]=new H,g[U]=new H;const v=new H,y=new H,S=new H,T=new rt,w=new rt,x=new rt,_=new H,b=new H;function R(U,ae,fe){v.fromArray(a,U*3),y.fromArray(a,ae*3),S.fromArray(a,fe*3),T.fromArray(d,U*2),w.fromArray(d,ae*2),x.fromArray(d,fe*2),y.sub(v),S.sub(v),w.sub(T),x.sub(T);const ye=1/(w.x*x.y-x.x*w.y);isFinite(ye)&&(_.copy(y).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(ye),b.copy(S).multiplyScalar(w.x).addScaledVector(y,-x.x).multiplyScalar(ye),m[U].add(_),m[ae].add(_),m[fe].add(_),g[U].add(b),g[ae].add(b),g[fe].add(b))}let N=this.groups;N.length===0&&(N=[{start:0,count:r.length}]);for(let U=0,ae=N.length;U<ae;++U){const fe=N[U],ye=fe.start,G=fe.count;for(let ee=ye,re=ye+G;ee<re;ee+=3)R(r[ee+0],r[ee+1],r[ee+2])}const B=new H,F=new H,k=new H,oe=new H;function C(U){k.fromArray(l,U*3),oe.copy(k);const ae=m[U];B.copy(ae),B.sub(k.multiplyScalar(k.dot(ae))).normalize(),F.crossVectors(oe,ae);const ye=F.dot(g[U])<0?-1:1;h[U*4]=B.x,h[U*4+1]=B.y,h[U*4+2]=B.z,h[U*4+3]=ye}for(let U=0,ae=N.length;U<ae;++U){const fe=N[U],ye=fe.start,G=fe.count;for(let ee=ye,re=ye+G;ee<re;ee+=3)C(r[ee+0]),C(r[ee+1]),C(r[ee+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new H,l=new H,d=new H,c=new H,h=new H,m=new H,g=new H,v=new H;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),c.add(g),h.add(g),m.add(g),r.setXYZ(T,c.x,c.y,c.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,v=c.normalized,y=new m.constructor(h.length*g);let S=0,T=0;for(let w=0,x=h.length;w<x;w++){c.isInterleavedBufferAttribute?S=h[w]*c.data.stride+c.offset:S=h[w]*g;for(let _=0;_<g;_++)y[T++]=m[S++]}return new zn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],m=e(h,r);n.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,v=m.length;g<v;g++){const y=m[g],S=e(y,r);h.push(S)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,h=d.length;c<h;c++){const m=d[c];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Ot,Gr=new na,Sl=new ts,_m=new H,Fs=new H,ks=new H,zs=new H,af=new H,Ml=new H,El=new rt,wl=new rt,Tl=new rt,vm=new H,xm=new H,ym=new H,Al=new H,Rl=new H;class Rn extends en{constructor(e=new Pn,n=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){Ml.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],v=l[h];g!==0&&(af.fromBufferAttribute(v,e),d?Ml.addScaledVector(af,g):Ml.addScaledVector(af.sub(n),g))}n.add(Ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Sl,_m)===null||Gr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(gm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,d=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(d))for(let T=0,w=y.length;T<w;T++){const x=y[T],_=d[x.materialIndex],b=Math.max(x.start,S.start),R=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let N=b,B=R;N<B;N+=3){const F=c.getX(N),k=c.getX(N+1),oe=c.getX(N+2);a=Cl(this,_,e,r,m,g,v,F,k,oe),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let x=T,_=w;x<_;x+=3){const b=c.getX(x),R=c.getX(x+1),N=c.getX(x+2);a=Cl(this,d,e,r,m,g,v,b,R,N),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,w=y.length;T<w;T++){const x=y[T],_=d[x.materialIndex],b=Math.max(x.start,S.start),R=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let N=b,B=R;N<B;N+=3){const F=N,k=N+1,oe=N+2;a=Cl(this,_,e,r,m,g,v,F,k,oe),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=T,_=w;x<_;x+=3){const b=x,R=x+1,N=x+2;a=Cl(this,d,e,r,m,g,v,b,R,N),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function rx(o,e,n,r,a,l,d,c){let h;if(e.side===Cn?h=r.intersectTriangle(d,l,a,!0,c):h=r.intersectTriangle(a,l,d,e.side===Tr,c),h===null)return null;Rl.copy(c),Rl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(Rl);return m<n.near||m>n.far?null:{distance:m,point:Rl.clone(),object:o}}function Cl(o,e,n,r,a,l,d,c,h,m){o.getVertexPosition(c,Fs),o.getVertexPosition(h,ks),o.getVertexPosition(m,zs);const g=rx(o,e,n,r,Fs,ks,zs,Al);if(g){a&&(El.fromBufferAttribute(a,c),wl.fromBufferAttribute(a,h),Tl.fromBufferAttribute(a,m),g.uv=oi.getInterpolation(Al,Fs,ks,zs,El,wl,Tl,new rt)),l&&(El.fromBufferAttribute(l,c),wl.fromBufferAttribute(l,h),Tl.fromBufferAttribute(l,m),g.uv1=oi.getInterpolation(Al,Fs,ks,zs,El,wl,Tl,new rt),g.uv2=g.uv1),d&&(vm.fromBufferAttribute(d,c),xm.fromBufferAttribute(d,h),ym.fromBufferAttribute(d,m),g.normal=oi.getInterpolation(Al,Fs,ks,zs,vm,xm,ym,new H),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:h,c:m,normal:new H,materialIndex:0};oi.getNormal(Fs,ks,zs,v.normal),g.face=v}return g}class ia extends Pn{constructor(e=1,n=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const c=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],m=[],g=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,r,n,e,d,l,0),T("z","y","x",1,-1,r,n,-e,d,l,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new dn(m,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(v,2));function T(w,x,_,b,R,N,B,F,k,oe,C){const U=N/k,ae=B/oe,fe=N/2,ye=B/2,G=F/2,ee=k+1,re=oe+1;let de=0,X=0;const Z=new H;for(let Y=0;Y<re;Y++){const I=Y*ae-ye;for(let W=0;W<ee;W++){const q=W*U-fe;Z[w]=q*b,Z[x]=I*R,Z[_]=G,m.push(Z.x,Z.y,Z.z),Z[w]=0,Z[x]=0,Z[_]=F>0?1:-1,g.push(Z.x,Z.y,Z.z),v.push(W/k),v.push(1-Y/oe),de+=1}}for(let Y=0;Y<oe;Y++)for(let I=0;I<k;I++){const W=y+I+ee*Y,q=y+I+ee*(Y+1),le=y+(I+1)+ee*(Y+1),_e=y+(I+1)+ee*Y;h.push(W,q,_e),h.push(q,le,_e),X+=6}c.addGroup(S,X,C),S+=X,y+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function wn(o){const e={};for(let n=0;n<o.length;n++){const r=io(o[n]);for(const a in r)e[a]=r[a]}return e}function sx(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Fg(o){return o.getRenderTarget()===null?o.outputColorSpace:Dt.workingColorSpace}const ox={clone:io,merge:wn};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class kg extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends kg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cf*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;l+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Hs=1;class ux extends en{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Bs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new qn(Bs,Hs,e,n);l.layers=this.layers,this.add(l);const d=new qn(Bs,Hs,e,n);d.layers=this.layers,this.add(d);const c=new qn(Bs,Hs,e,n);c.layers=this.layers,this.add(c);const h=new qn(Bs,Hs,e,n);h.layers=this.layers,this.add(h);const m=new qn(Bs,Hs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,d,c,h]=n;for(const m of n)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ql)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,c,h,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,c),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class zg extends bn{constructor(e,n,r,a,l,d,c,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:eo,super(e,n,r,a,l,d,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cx extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Qo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$r?Jt:ai),this.texture=new zg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ia(5,5,5),l=new Qr({name:"CubemapFromEquirect",uniforms:io(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:Sr});l.uniforms.tEquirect.value=n;const d=new Rn(a,l),c=n.minFilter;return n.minFilter===Jo&&(n.minFilter=si),new ux(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(l)}}const lf=new H,fx=new H,dx=new Tt;class vr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=lf.subVectors(r,n).cross(fx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(lf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||dx.getNormalMatrix(e),a=this.coplanarPoint(lf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new ts,bl=new H;class zf{constructor(e=new vr,n=new vr,r=new vr,a=new vr,l=new vr,d=new vr){this.planes=[e,n,r,a,l,d]}set(e,n,r,a,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Wi){const r=this.planes,a=e.elements,l=a[0],d=a[1],c=a[2],h=a[3],m=a[4],g=a[5],v=a[6],y=a[7],S=a[8],T=a[9],w=a[10],x=a[11],_=a[12],b=a[13],R=a[14],N=a[15];if(r[0].setComponents(h-l,y-m,x-S,N-_).normalize(),r[1].setComponents(h+l,y+m,x+S,N+_).normalize(),r[2].setComponents(h+d,y+g,x+T,N+b).normalize(),r[3].setComponents(h-d,y-g,x-T,N-b).normalize(),r[4].setComponents(h-c,y-v,x-w,N-R).normalize(),n===Wi)r[5].setComponents(h+c,y+v,x+w,N+R).normalize();else if(n===ql)r[5].setComponents(c,v,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bg(){let o=null,e=!1,n=null,r=null;function a(l,d){n(l,d),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function hx(o,e){const n=e.isWebGL2,r=new WeakMap;function a(m,g){const v=m.array,y=m.usage,S=v.byteLength,T=o.createBuffer();o.bindBuffer(g,T),o.bufferData(g,v,y),m.onUploadCallback();let w;if(v instanceof Float32Array)w=o.FLOAT;else if(v instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)w=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)w=o.SHORT;else if(v instanceof Uint32Array)w=o.UNSIGNED_INT;else if(v instanceof Int32Array)w=o.INT;else if(v instanceof Int8Array)w=o.BYTE;else if(v instanceof Uint8Array)w=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)w=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:T,type:w,bytesPerElement:v.BYTES_PER_ELEMENT,version:m.version,size:S}}function l(m,g,v){const y=g.array,S=g._updateRange,T=g.updateRanges;if(o.bindBuffer(v,m),S.count===-1&&T.length===0&&o.bufferSubData(v,0,y),T.length!==0){for(let w=0,x=T.length;w<x;w++){const _=T[w];n?o.bufferSubData(v,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):o.bufferSubData(v,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}S.count!==-1&&(n?o.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):o.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function h(m,g){if(m.isGLBufferAttribute){const y=r.get(m);(!y||y.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const v=r.get(m);if(v===void 0)r.set(m,a(m,g));else if(v.version<m.version){if(v.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(v.buffer,m,g),v.version=m.version}}return{get:d,remove:c,update:h}}class Bf extends Pn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,d=n/2,c=Math.floor(r),h=Math.floor(a),m=c+1,g=h+1,v=e/c,y=n/h,S=[],T=[],w=[],x=[];for(let _=0;_<g;_++){const b=_*y-d;for(let R=0;R<m;R++){const N=R*v-l;T.push(N,-b,0),w.push(0,0,1),x.push(R/c),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let b=0;b<c;b++){const R=b+m*_,N=b+m*(_+1),B=b+1+m*(_+1),F=b+1+m*_;S.push(R,N,F),S.push(N,B,F)}this.setIndex(S),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(w,3)),this.setAttribute("uv",new dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.width,e.height,e.widthSegments,e.heightSegments)}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
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
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rx=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fx=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`
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
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oy=`uniform bool receiveShadow;
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
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dy=`PhysicalMaterial material;
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
#endif`,hy=`struct PhysicalMaterial {
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
}`,py=`
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wy=`#if defined( USE_POINTS_UV )
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
#endif`,Ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
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
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qy=`float getShadowMask() {
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
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eS=`#ifdef USE_SKINNING
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
#endif`,tS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pS=`uniform sampler2D t2D;
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
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
}`,yS=`#if DEPTH_PACKING == 3200
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
}`,SS=`#define DISTANCE
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
}`,MS=`#define DISTANCE
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
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
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
}`,AS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,CS=`uniform vec3 diffuse;
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
}`,bS=`#define LAMBERT
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
}`,PS=`#define LAMBERT
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
}`,LS=`#define MATCAP
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
}`,DS=`#define MATCAP
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
}`,NS=`#define NORMAL
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
}`,US=`#define NORMAL
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
}`,IS=`#define PHONG
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
}`,OS=`#define PHONG
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
}`,FS=`#define STANDARD
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
}`,kS=`#define STANDARD
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
}`,zS=`#define TOON
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
}`,BS=`#define TOON
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
}`,HS=`uniform float size;
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
}`,GS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,WS=`uniform vec3 color;
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
}`,XS=`uniform float rotation;
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
}`,jS=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:_x,alphatest_fragment:vx,alphatest_pars_fragment:xx,aomap_fragment:yx,aomap_pars_fragment:Sx,batching_pars_vertex:Mx,batching_vertex:Ex,begin_vertex:wx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Rx,bumpmap_pars_fragment:Cx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Ix,color_vertex:Ox,common:Fx,cube_uv_reflection_fragment:kx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Bx,displacementmap_vertex:Hx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Vx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:jx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:qx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:ay,envmap_vertex:Kx,fog_vertex:Zx,fog_pars_vertex:Qx,fog_fragment:Jx,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:sy,lights_pars_begin:oy,lights_toon_fragment:ly,lights_toon_pars_fragment:uy,lights_phong_fragment:cy,lights_phong_pars_fragment:fy,lights_physical_fragment:dy,lights_physical_pars_fragment:hy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:vy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:yy,map_fragment:Sy,map_pars_fragment:My,map_particle_fragment:Ey,map_particle_pars_fragment:wy,metalnessmap_fragment:Ty,metalnessmap_pars_fragment:Ay,morphcolor_vertex:Ry,morphnormal_vertex:Cy,morphtarget_pars_vertex:by,morphtarget_vertex:Py,normal_fragment_begin:Ly,normal_fragment_maps:Dy,normal_pars_fragment:Ny,normal_pars_vertex:Uy,normal_vertex:Iy,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:zy,iridescence_pars_fragment:By,opaque_fragment:Hy,packing:Gy,premultiplied_alpha_fragment:Vy,project_vertex:Wy,dithering_fragment:Xy,dithering_pars_fragment:jy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:qy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Ky,shadowmap_vertex:Zy,shadowmask_pars_fragment:Qy,skinbase_vertex:Jy,skinning_pars_vertex:eS,skinning_vertex:tS,skinnormal_vertex:nS,specularmap_fragment:iS,specularmap_pars_fragment:rS,tonemapping_fragment:sS,tonemapping_pars_fragment:oS,transmission_fragment:aS,transmission_pars_fragment:lS,uv_pars_fragment:uS,uv_pars_vertex:cS,uv_vertex:fS,worldpos_vertex:dS,background_vert:hS,background_frag:pS,backgroundCube_vert:mS,backgroundCube_frag:gS,cube_vert:_S,cube_frag:vS,depth_vert:xS,depth_frag:yS,distanceRGBA_vert:SS,distanceRGBA_frag:MS,equirect_vert:ES,equirect_frag:wS,linedashed_vert:TS,linedashed_frag:AS,meshbasic_vert:RS,meshbasic_frag:CS,meshlambert_vert:bS,meshlambert_frag:PS,meshmatcap_vert:LS,meshmatcap_frag:DS,meshnormal_vert:NS,meshnormal_frag:US,meshphong_vert:IS,meshphong_frag:OS,meshphysical_vert:FS,meshphysical_frag:kS,meshtoon_vert:zS,meshtoon_frag:BS,points_vert:HS,points_frag:GS,shadow_vert:VS,shadow_frag:WS,sprite_vert:XS,sprite_frag:jS},Fe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ti={basic:{uniforms:wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:wn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:wn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:wn([Fe.points,Fe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:wn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:wn([Fe.common,Fe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:wn([Fe.sprite,Fe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:wn([Fe.common,Fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:wn([Fe.lights,Fe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ti.physical={uniforms:wn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Pl={r:0,b:0,g:0};function YS(o,e,n,r,a,l,d){const c=new Et(0);let h=l===!0?0:1,m,g,v=null,y=0,S=null;function T(x,_){let b=!1,R=_.isScene===!0?_.background:null;R&&R.isTexture&&(R=(_.backgroundBlurriness>0?n:e).get(R)),R===null?w(c,h):R&&R.isColor&&(w(R,1),b=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Zl)?(g===void 0&&(g=new Rn(new ia(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:io(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Dt.getTransfer(R.colorSpace)!==zt,(v!==R||y!==R.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,v=R,y=R.version,S=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Rn(new Bf(2,2),new Qr({name:"BackgroundMaterial",uniforms:io(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(R.colorSpace)!==zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||y!==R.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=R,y=R.version,S=o.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function w(x,_){x.getRGB(Pl,Fg(o)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,_,d)}return{getClearColor:function(){return c},setClearColor:function(x,_=1){c.set(x),h=_,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,w(c,h)},render:T}}function qS(o,e,n,r){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||l!==null,c={},h=x(null);let m=h,g=!1;function v(G,ee,re,de,X){let Z=!1;if(d){const Y=w(de,re,ee);m!==Y&&(m=Y,S(m.object)),Z=_(G,de,re,X),Z&&b(G,de,re,X)}else{const Y=ee.wireframe===!0;(m.geometry!==de.id||m.program!==re.id||m.wireframe!==Y)&&(m.geometry=de.id,m.program=re.id,m.wireframe=Y,Z=!0)}X!==null&&n.update(X,o.ELEMENT_ARRAY_BUFFER),(Z||g)&&(g=!1,oe(G,ee,re,de),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function y(){return r.isWebGL2?o.createVertexArray():l.createVertexArrayOES()}function S(G){return r.isWebGL2?o.bindVertexArray(G):l.bindVertexArrayOES(G)}function T(G){return r.isWebGL2?o.deleteVertexArray(G):l.deleteVertexArrayOES(G)}function w(G,ee,re){const de=re.wireframe===!0;let X=c[G.id];X===void 0&&(X={},c[G.id]=X);let Z=X[ee.id];Z===void 0&&(Z={},X[ee.id]=Z);let Y=Z[de];return Y===void 0&&(Y=x(y()),Z[de]=Y),Y}function x(G){const ee=[],re=[],de=[];for(let X=0;X<a;X++)ee[X]=0,re[X]=0,de[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:de,object:G,attributes:{},index:null}}function _(G,ee,re,de){const X=m.attributes,Z=ee.attributes;let Y=0;const I=re.getAttributes();for(const W in I)if(I[W].location>=0){const le=X[W];let _e=Z[W];if(_e===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(_e=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(_e=G.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;Y++}return m.attributesNum!==Y||m.index!==de}function b(G,ee,re,de){const X={},Z=ee.attributes;let Y=0;const I=re.getAttributes();for(const W in I)if(I[W].location>=0){let le=Z[W];le===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(le=G.instanceColor));const _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),X[W]=_e,Y++}m.attributes=X,m.attributesNum=Y,m.index=de}function R(){const G=m.newAttributes;for(let ee=0,re=G.length;ee<re;ee++)G[ee]=0}function N(G){B(G,0)}function B(G,ee){const re=m.newAttributes,de=m.enabledAttributes,X=m.attributeDivisors;re[G]=1,de[G]===0&&(o.enableVertexAttribArray(G),de[G]=1),X[G]!==ee&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,ee),X[G]=ee)}function F(){const G=m.newAttributes,ee=m.enabledAttributes;for(let re=0,de=ee.length;re<de;re++)ee[re]!==G[re]&&(o.disableVertexAttribArray(re),ee[re]=0)}function k(G,ee,re,de,X,Z,Y){Y===!0?o.vertexAttribIPointer(G,ee,re,X,Z):o.vertexAttribPointer(G,ee,re,de,X,Z)}function oe(G,ee,re,de){if(r.isWebGL2===!1&&(G.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const X=de.attributes,Z=re.getAttributes(),Y=ee.defaultAttributeValues;for(const I in Z){const W=Z[I];if(W.location>=0){let q=X[I];if(q===void 0&&(I==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),I==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),q!==void 0){const le=q.normalized,_e=q.itemSize,be=n.get(q);if(be===void 0)continue;const De=be.buffer,ke=be.type,ze=be.bytesPerElement,qe=r.isWebGL2===!0&&(ke===o.INT||ke===o.UNSIGNED_INT||q.gpuType===yg);if(q.isInterleavedBufferAttribute){const xe=q.data,j=xe.stride,st=q.offset;if(xe.isInstancedInterleavedBuffer){for(let je=0;je<W.locationSize;je++)B(W.location+je,xe.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let je=0;je<W.locationSize;je++)N(W.location+je);o.bindBuffer(o.ARRAY_BUFFER,De);for(let je=0;je<W.locationSize;je++)k(W.location+je,_e/W.locationSize,ke,le,j*ze,(st+_e/W.locationSize*je)*ze,qe)}else{if(q.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)B(W.location+xe,q.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let xe=0;xe<W.locationSize;xe++)N(W.location+xe);o.bindBuffer(o.ARRAY_BUFFER,De);for(let xe=0;xe<W.locationSize;xe++)k(W.location+xe,_e/W.locationSize,ke,le,_e*ze,_e/W.locationSize*xe*ze,qe)}}else if(Y!==void 0){const le=Y[I];if(le!==void 0)switch(le.length){case 2:o.vertexAttrib2fv(W.location,le);break;case 3:o.vertexAttrib3fv(W.location,le);break;case 4:o.vertexAttrib4fv(W.location,le);break;default:o.vertexAttrib1fv(W.location,le)}}}}F()}function C(){fe();for(const G in c){const ee=c[G];for(const re in ee){const de=ee[re];for(const X in de)T(de[X].object),delete de[X];delete ee[re]}delete c[G]}}function U(G){if(c[G.id]===void 0)return;const ee=c[G.id];for(const re in ee){const de=ee[re];for(const X in de)T(de[X].object),delete de[X];delete ee[re]}delete c[G.id]}function ae(G){for(const ee in c){const re=c[ee];if(re[G.id]===void 0)continue;const de=re[G.id];for(const X in de)T(de[X].object),delete de[X];delete re[G.id]}}function fe(){ye(),g=!0,m!==h&&(m=h,S(m.object))}function ye(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:fe,resetDefaultState:ye,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:ae,initAttributes:R,enableAttribute:N,disableUnusedAttributes:F}}function $S(o,e,n,r){const a=r.isWebGL2;let l;function d(g){l=g}function c(g,v){o.drawArrays(l,g,v),n.update(v,l,1)}function h(g,v,y){if(y===0)return;let S,T;if(a)S=o,T="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[T](l,g,v,y),n.update(v,l,y)}function m(g,v,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<y;T++)this.render(g[T],v[T]);else{S.multiDrawArraysWEBGL(l,g,0,v,0,y);let T=0;for(let w=0;w<y;w++)T+=v[w];n.update(T,l,1)}}this.setMode=d,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function KS(o,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),w=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,N=d||e.has("OES_texture_float"),B=R&&N,F=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:R,floatFragmentTextures:N,floatVertexTextures:B,maxSamples:F}}function ZS(o){const e=this;let n=null,r=0,a=!1,l=!1;const d=new vr,c=new Tt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=g(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,_=o.get(v);if(!a||T===null||T.length===0||l&&!x)l?g(null):m();else{const b=l?0:r,R=b*4;let N=_.clippingState||null;h.value=N,N=g(T,y,R,S);for(let B=0;B!==R;++B)N[B]=n[B];_.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,T){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=h.value,T!==!0||x===null){const _=S+w*4,b=y.matrixWorldInverse;c.getNormalMatrix(b),(x===null||x.length<_)&&(x=new Float32Array(_));for(let R=0,N=S;R!==w;++R,N+=4)d.copy(v[R]).applyMatrix4(b,c),d.normal.toArray(x,N),x[N+3]=d.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function QS(o){let e=new WeakMap;function n(d,c){return c===Mf?d.mapping=eo:c===Ef&&(d.mapping=to),d}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===Mf||c===Ef)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new cx(h.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class JS extends kg{constructor(e=-1,n=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,c=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,Sm=[.125,.215,.35,.446,.526,.582],jr=20,uf=new JS,Mm=new Et;let cf=null,ff=0,df=0;const Wr=(1+Math.sqrt(5))/2,Gs=1/Wr,Em=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Wr,Gs),new H(0,Wr,-Gs),new H(Gs,0,Wr),new H(-Gs,0,Wr),new H(Wr,Gs,0),new H(-Wr,Gs,0)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:si,minFilter:si,generateMipmaps:!1,type:ea,format:vi,colorSpace:Xi,depthBuffer:!1},a=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(l)),this._blurMaterial=tM(l,e,n)}return a}_compileMaterial(e){const n=new Rn(this._lodPlanes[0],e);this._renderer.compile(n,uf)}_sceneToCubeUV(e,n,r,a){const c=new qn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Mm),g.toneMapping=Mr,g.autoClear=!1;const S=new $l({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),T=new Rn(new ia,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(Mm),w=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(c.up.set(0,h[_],0),c.lookAt(m[_],0,0)):b===1?(c.up.set(0,0,h[_]),c.lookAt(0,m[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,m[_]));const R=this._cubeSize;Ll(a,b*R,_>2?R:0,R,R),g.setRenderTarget(a),w&&g.render(T,c),g.render(e,c)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===eo||e.mapping===to;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new Rn(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Ll(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,uf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Em[(a-1)%Em.length];this._blur(e,a-1,a,l,d)}n.autoClear=r}_blur(e,n,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,d,c){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Rn(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*jr-1),w=l/T,x=isFinite(l)?1+Math.floor(g*w):jr;x>jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${jr}`);const _=[];let b=0;for(let k=0;k<jr;++k){const oe=k/w,C=Math.exp(-oe*oe/2);_.push(C),k===0?b+=C:k<x&&(b+=2*C)}for(let k=0;k<_.length;k++)_[k]=_[k]/b;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=d==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:R}=this;y.dTheta.value=T,y.mipInt.value=R-r;const N=this._sizeLods[a],B=3*N*(a>R-qs?a-R+qs:0),F=4*(this._cubeSize-N);Ll(n,B,F,3*N,2*N),h.setRenderTarget(n),h.render(v,uf)}}function eM(o){const e=[],n=[],r=[];let a=o;const l=o-qs+1+Sm.length;for(let d=0;d<l;d++){const c=Math.pow(2,a);n.push(c);let h=1/c;d>o-qs?h=Sm[d-o+qs-1]:d===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,w=3,x=2,_=1,b=new Float32Array(w*T*S),R=new Float32Array(x*T*S),N=new Float32Array(_*T*S);for(let F=0;F<S;F++){const k=F%3*2/3-1,oe=F>2?0:-1,C=[k,oe,0,k+2/3,oe,0,k+2/3,oe+1,0,k,oe,0,k+2/3,oe+1,0,k,oe+1,0];b.set(C,w*T*F),R.set(y,x*T*F);const U=[F,F,F,F,F,F];N.set(U,_*T*F)}const B=new Pn;B.setAttribute("position",new zn(b,w)),B.setAttribute("uv",new zn(R,x)),B.setAttribute("faceIndex",new zn(N,_)),e.push(B),a>qs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(o,e,n){const r=new Kr(o,e,n);return r.texture.mapping=Zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function tM(o,e,n){const r=new Float32Array(jr),a=new H(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Am(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rm(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Hf(){return`

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
	`}function nM(o){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===Mf||h===Ef,g=h===eo||h===to;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let v=e.get(c);return n===null&&(n=new wm(o)),v=m?n.fromEquirectangular(c,v):n.fromCubemap(c,v),e.set(c,v),v.texture}else{if(e.has(c))return e.get(c).texture;{const v=c.image;if(m&&v&&v.height>0||g&&v&&a(v)){n===null&&(n=new wm(o));const y=m?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function iM(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function rM(o,e,n,r){const a={},l=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const w=y.morphAttributes[T];for(let x=0,_=w.length;x<_;x++)e.remove(w[x])}y.removeEventListener("dispose",d),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function c(v,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function h(v){const y=v.attributes;for(const T in y)e.update(y[T],o.ARRAY_BUFFER);const S=v.morphAttributes;for(const T in S){const w=S[T];for(let x=0,_=w.length;x<_;x++)e.update(w[x],o.ARRAY_BUFFER)}}function m(v){const y=[],S=v.index,T=v.attributes.position;let w=0;if(S!==null){const b=S.array;w=S.version;for(let R=0,N=b.length;R<N;R+=3){const B=b[R+0],F=b[R+1],k=b[R+2];y.push(B,F,F,k,k,B)}}else if(T!==void 0){const b=T.array;w=T.version;for(let R=0,N=b.length/3-1;R<N;R+=3){const B=R+0,F=R+1,k=R+2;y.push(B,F,F,k,k,B)}}else return;const x=new(Pg(y)?Og:Ig)(y,1);x.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function sM(o,e,n,r){const a=r.isWebGL2;let l;function d(S){l=S}let c,h;function m(S){c=S.type,h=S.bytesPerElement}function g(S,T){o.drawElements(l,T,c,S*h),n.update(T,l,1)}function v(S,T,w){if(w===0)return;let x,_;if(a)x=o,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](l,T,c,S*h,w),n.update(T,l,w)}function y(S,T,w){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<w;_++)this.render(S[_]/h,T[_]);else{x.multiDrawElementsWEBGL(l,T,0,c,S,0,w);let _=0;for(let b=0;b<w;b++)_+=T[b];n.update(_,l,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=v,this.renderMultiDraw=y}function oM(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,c){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=c*(l/3);break;case o.LINES:n.lines+=c*(l/2);break;case o.LINE_STRIP:n.lines+=c*(l-1);break;case o.LINE_LOOP:n.lines+=c*l;break;case o.POINTS:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function aM(o,e){return o[0]-e[0]}function lM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function uM(o,e,n){const r={},a=new Float32Array(8),l=new WeakMap,d=new Gt,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,g,v){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=T!==void 0?T.length:0;let x=l.get(g);if(x===void 0||x.count!==w){let ee=function(){ye.dispose(),l.delete(g),g.removeEventListener("dispose",ee)};var S=ee;x!==void 0&&x.texture.dispose();const R=g.morphAttributes.position!==void 0,N=g.morphAttributes.normal!==void 0,B=g.morphAttributes.color!==void 0,F=g.morphAttributes.position||[],k=g.morphAttributes.normal||[],oe=g.morphAttributes.color||[];let C=0;R===!0&&(C=1),N===!0&&(C=2),B===!0&&(C=3);let U=g.attributes.position.count*C,ae=1;U>e.maxTextureSize&&(ae=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const fe=new Float32Array(U*ae*4*w),ye=new Ng(fe,U,ae,w);ye.type=yr,ye.needsUpdate=!0;const G=C*4;for(let re=0;re<w;re++){const de=F[re],X=k[re],Z=oe[re],Y=U*ae*4*re;for(let I=0;I<de.count;I++){const W=I*G;R===!0&&(d.fromBufferAttribute(de,I),fe[Y+W+0]=d.x,fe[Y+W+1]=d.y,fe[Y+W+2]=d.z,fe[Y+W+3]=0),N===!0&&(d.fromBufferAttribute(X,I),fe[Y+W+4]=d.x,fe[Y+W+5]=d.y,fe[Y+W+6]=d.z,fe[Y+W+7]=0),B===!0&&(d.fromBufferAttribute(Z,I),fe[Y+W+8]=d.x,fe[Y+W+9]=d.y,fe[Y+W+10]=d.z,fe[Y+W+11]=Z.itemSize===4?d.w:1)}}x={count:w,texture:ye,size:new rt(U,ae)},l.set(g,x),g.addEventListener("dispose",ee)}let _=0;for(let R=0;R<y.length;R++)_+=y[R];const b=g.morphTargetsRelative?1:1-_;v.getUniforms().setValue(o,"morphTargetBaseInfluence",b),v.getUniforms().setValue(o,"morphTargetInfluences",y),v.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),v.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const T=y===void 0?0:y.length;let w=r[g.id];if(w===void 0||w.length!==T){w=[];for(let N=0;N<T;N++)w[N]=[N,0];r[g.id]=w}for(let N=0;N<T;N++){const B=w[N];B[0]=N,B[1]=y[N]}w.sort(lM);for(let N=0;N<8;N++)N<T&&w[N][1]?(c[N][0]=w[N][0],c[N][1]=w[N][1]):(c[N][0]=Number.MAX_SAFE_INTEGER,c[N][1]=0);c.sort(aM);const x=g.morphAttributes.position,_=g.morphAttributes.normal;let b=0;for(let N=0;N<8;N++){const B=c[N],F=B[0],k=B[1];F!==Number.MAX_SAFE_INTEGER&&k?(x&&g.getAttribute("morphTarget"+N)!==x[F]&&g.setAttribute("morphTarget"+N,x[F]),_&&g.getAttribute("morphNormal"+N)!==_[F]&&g.setAttribute("morphNormal"+N,_[F]),a[N]=k,b+=k):(x&&g.hasAttribute("morphTarget"+N)===!0&&g.deleteAttribute("morphTarget"+N),_&&g.hasAttribute("morphNormal"+N)===!0&&g.deleteAttribute("morphNormal"+N),a[N]=0)}const R=g.morphTargetsRelative?1:1-b;v.getUniforms().setValue(o,"morphTargetBaseInfluence",R),v.getUniforms().setValue(o,"morphTargetInfluences",a)}}return{update:h}}function cM(o,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==m&&(n.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function d(){a=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:d}}class Hg extends bn{constructor(e,n,r,a,l,d,c,h,m,g){if(g=g!==void 0?g:qr,g!==qr&&g!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===qr&&(r=xr),r===void 0&&g===no&&(r=Yr),super(null,a,l,d,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Tn,this.minFilter=h!==void 0?h:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Gg=new bn,Vg=new Hg(1,1);Vg.compareFunction=bg;const Wg=new Ng,Xg=new Yv,jg=new zg,Cm=[],bm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function ro(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let l=Cm[a];if(l===void 0&&(l=new Float32Array(a),Cm[a]=l),e!==0){r.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,o[d].toArray(l,c)}return l}function tn(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function nn(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function eu(o,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function fM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function dM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;o.uniform2fv(this.addr,e),nn(n,e)}}function hM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;o.uniform3fv(this.addr,e),nn(n,e)}}function pM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;o.uniform4fv(this.addr,e),nn(n,e)}}function mM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Dm.set(r),o.uniformMatrix2fv(this.addr,!1,Dm),nn(n,r)}}function gM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Lm.set(r),o.uniformMatrix3fv(this.addr,!1,Lm),nn(n,r)}}function _M(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Pm.set(r),o.uniformMatrix4fv(this.addr,!1,Pm),nn(n,r)}}function vM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function xM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;o.uniform2iv(this.addr,e),nn(n,e)}}function yM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;o.uniform3iv(this.addr,e),nn(n,e)}}function SM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;o.uniform4iv(this.addr,e),nn(n,e)}}function MM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function EM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;o.uniform2uiv(this.addr,e),nn(n,e)}}function wM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;o.uniform3uiv(this.addr,e),nn(n,e)}}function TM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;o.uniform4uiv(this.addr,e),nn(n,e)}}function AM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);const l=this.type===o.SAMPLER_2D_SHADOW?Vg:Gg;n.setTexture2D(e||l,a)}function RM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Xg,a)}function CM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||jg,a)}function bM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Wg,a)}function PM(o){switch(o){case 5126:return fM;case 35664:return dM;case 35665:return hM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return yM;case 35669:case 35673:return SM;case 5125:return MM;case 36294:return EM;case 36295:return wM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return bM}}function LM(o,e){o.uniform1fv(this.addr,e)}function DM(o,e){const n=ro(e,this.size,2);o.uniform2fv(this.addr,n)}function NM(o,e){const n=ro(e,this.size,3);o.uniform3fv(this.addr,n)}function UM(o,e){const n=ro(e,this.size,4);o.uniform4fv(this.addr,n)}function IM(o,e){const n=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function OM(o,e){const n=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function FM(o,e){const n=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function kM(o,e){o.uniform1iv(this.addr,e)}function zM(o,e){o.uniform2iv(this.addr,e)}function BM(o,e){o.uniform3iv(this.addr,e)}function HM(o,e){o.uniform4iv(this.addr,e)}function GM(o,e){o.uniform1uiv(this.addr,e)}function VM(o,e){o.uniform2uiv(this.addr,e)}function WM(o,e){o.uniform3uiv(this.addr,e)}function XM(o,e){o.uniform4uiv(this.addr,e)}function jM(o,e,n){const r=this.cache,a=e.length,l=eu(n,a);tn(r,l)||(o.uniform1iv(this.addr,l),nn(r,l));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Gg,l[d])}function YM(o,e,n){const r=this.cache,a=e.length,l=eu(n,a);tn(r,l)||(o.uniform1iv(this.addr,l),nn(r,l));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||Xg,l[d])}function qM(o,e,n){const r=this.cache,a=e.length,l=eu(n,a);tn(r,l)||(o.uniform1iv(this.addr,l),nn(r,l));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||jg,l[d])}function $M(o,e,n){const r=this.cache,a=e.length,l=eu(n,a);tn(r,l)||(o.uniform1iv(this.addr,l),nn(r,l));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Wg,l[d])}function KM(o){switch(o){case 5126:return LM;case 35664:return DM;case 35665:return NM;case 35666:return UM;case 35674:return IM;case 35675:return OM;case 35676:return FM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return BM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return VM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return $M}}class ZM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=PM(n.type)}}class QM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KM(n.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const c=a[l];c.setValue(e,n[c.id],r)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function Nm(o,e){o.seq.push(e),o.map[e.id]=e}function eE(o,e,n){const r=o.name,a=r.length;for(hf.lastIndex=0;;){const l=hf.exec(r),d=hf.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&d+2===a){Nm(n,m===void 0?new ZM(c,o,e):new QM(c,o,e));break}else{let v=n.map[c];v===void 0&&(v=new JM(c),Nm(n,v)),n=v}}}class Gl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),d=e.getUniformLocation(n,l.name);eE(l,d,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,d=n.length;l!==d;++l){const c=n[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Um(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const tE=37297;let nE=0;function iE(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=a;d<l;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function rE(o){const e=Dt.getPrimaries(Dt.workingColorSpace),n=Dt.getPrimaries(o);let r;switch(e===n?r="":e===Yl&&n===jl?r="LinearDisplayP3ToLinearSRGB":e===jl&&n===Yl&&(r="LinearSRGBToLinearDisplayP3"),o){case Xi:case Ql:return[r,"LinearTransferOETF"];case Jt:case Ff:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Im(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+iE(o.getShaderSource(e),d)}else return a}function sE(o,e){const n=rE(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function oE(o,e){let n;switch(e){case mv:n="Linear";break;case gv:n="Reinhard";break;case _v:n="OptimizedCineon";break;case vg:n="ACESFilmic";break;case xv:n="AgX";break;case vv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aE(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function lE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($s).join(`
`)}function uE(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function cE(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=o.getActiveAttrib(e,a),d=l.name;let c=1;l.type===o.FLOAT_MAT2&&(c=2),l.type===o.FLOAT_MAT3&&(c=3),l.type===o.FLOAT_MAT4&&(c=4),n[d]={type:l.type,location:o.getAttribLocation(e,d),locationSize:c}}return n}function $s(o){return o!==""}function Om(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(o){return o.replace(fE,hE)}const dE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hE(o,e){let n=Mt[e];if(n===void 0){const r=dE.get(e);if(r!==void 0)n=Mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(o){return o.replace(pE,mE)}function mE(o,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function zm(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function _E(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function xE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case _g:e="ENVMAP_BLENDING_MULTIPLY";break;case hv:e="ENVMAP_BLENDING_MIX";break;case pv:e="ENVMAP_BLENDING_ADD";break}return e}function yE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function SE(o,e,n,r){const a=o.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const h=gE(n),m=_E(n),g=vE(n),v=xE(n),y=yE(n),S=n.isWebGL2?"":aE(n),T=lE(n),w=uE(l),x=a.createProgram();let _,b,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter($s).join(`
`),_.length>0&&(_+=`
`),b=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter($s).join(`
`),b.length>0&&(b+=`
`)):(_=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),b=[S,zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?Mt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?oE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,sE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),d=Pf(d),d=Om(d,n),d=Fm(d,n),c=Pf(c),c=Om(c,n),c=Fm(c,n),d=km(d),c=km(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,b=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const N=R+_+d,B=R+b+c,F=Um(a,a.VERTEX_SHADER,N),k=Um(a,a.FRAGMENT_SHADER,B);a.attachShader(x,F),a.attachShader(x,k),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function oe(fe){if(o.debug.checkShaderErrors){const ye=a.getProgramInfoLog(x).trim(),G=a.getShaderInfoLog(F).trim(),ee=a.getShaderInfoLog(k).trim();let re=!0,de=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(re=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,x,F,k);else{const X=Im(a,F,"vertex"),Z=Im(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Program Info Log: `+ye+`
`+X+`
`+Z)}else ye!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ye):(G===""||ee==="")&&(de=!1);de&&(fe.diagnostics={runnable:re,programLog:ye,vertexShader:{log:G,prefix:_},fragmentShader:{log:ee,prefix:b}})}a.deleteShader(F),a.deleteShader(k),C=new Gl(a,x),U=cE(a,x)}let C;this.getUniforms=function(){return C===void 0&&oe(this),C};let U;this.getAttributes=function(){return U===void 0&&oe(this),U};let ae=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=a.getProgramParameter(x,tE)),ae},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=k,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new wE(e),n.set(e,r)),r}}class wE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function TE(o,e,n,r,a,l,d){const c=new kf,h=new EE,m=[],g=a.isWebGL2,v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return C===0?"uv":`uv${C}`}function x(C,U,ae,fe,ye){const G=fe.fog,ee=ye.geometry,re=C.isMeshStandardMaterial?fe.environment:null,de=(C.isMeshStandardMaterial?n:e).get(C.envMap||re),X=de&&de.mapping===Zl?de.image.height:null,Z=T[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const Y=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,I=Y!==void 0?Y.length:0;let W=0;ee.morphAttributes.position!==void 0&&(W=1),ee.morphAttributes.normal!==void 0&&(W=2),ee.morphAttributes.color!==void 0&&(W=3);let q,le,_e,be;if(Z){const pt=Ti[Z];q=pt.vertexShader,le=pt.fragmentShader}else q=C.vertexShader,le=C.fragmentShader,h.update(C),_e=h.getVertexShaderID(C),be=h.getFragmentShaderID(C);const De=o.getRenderTarget(),ke=ye.isInstancedMesh===!0,ze=ye.isBatchedMesh===!0,qe=!!C.map,xe=!!C.matcap,j=!!de,st=!!C.aoMap,je=!!C.lightMap,it=!!C.bumpMap,He=!!C.normalMap,At=!!C.displacementMap,at=!!C.emissiveMap,D=!!C.metalnessMap,A=!!C.roughnessMap,Q=C.anisotropy>0,we=C.clearcoat>0,Ee=C.iridescence>0,Te=C.sheen>0,Ze=C.transmission>0,Ie=Q&&!!C.anisotropyMap,Be=we&&!!C.clearcoatMap,tt=we&&!!C.clearcoatNormalMap,ft=we&&!!C.clearcoatRoughnessMap,ve=Ee&&!!C.iridescenceMap,xt=Ee&&!!C.iridescenceThicknessMap,mt=Te&&!!C.sheenColorMap,ot=Te&&!!C.sheenRoughnessMap,he=!!C.specularMap,Ce=!!C.specularColorMap,L=!!C.specularIntensityMap,ge=Ze&&!!C.transmissionMap,Ne=Ze&&!!C.thicknessMap,Pe=!!C.gradientMap,pe=!!C.alphaMap,E=C.alphaTest>0,te=!!C.alphaHash,ce=!!C.extensions,Oe=!!ee.attributes.uv1,Ge=!!ee.attributes.uv2,Ae=!!ee.attributes.uv3;let Ue=Mr;return C.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ue=o.toneMapping),{isWebGL2:g,shaderID:Z,shaderType:C.type,shaderName:C.name,vertexShader:q,fragmentShader:le,defines:C.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:ze,instancing:ke,instancingColor:ke&&ye.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:De===null?o.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Xi,map:qe,matcap:xe,envMap:j,envMapMode:j&&de.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:je,bumpMap:it,normalMap:He,displacementMap:y&&At,emissiveMap:at,normalMapObjectSpace:He&&C.normalMapType===Lv,normalMapTangentSpace:He&&C.normalMapType===Cg,metalnessMap:D,roughnessMap:A,anisotropy:Q,anisotropyMap:Ie,clearcoat:we,clearcoatMap:Be,clearcoatNormalMap:tt,clearcoatRoughnessMap:ft,iridescence:Ee,iridescenceMap:ve,iridescenceThicknessMap:xt,sheen:Te,sheenColorMap:mt,sheenRoughnessMap:ot,specularMap:he,specularColorMap:Ce,specularIntensityMap:L,transmission:Ze,transmissionMap:ge,thicknessMap:Ne,gradientMap:Pe,opaque:C.transparent===!1&&C.blending===Qs,alphaMap:pe,alphaTest:E,alphaHash:te,combine:C.combine,mapUv:qe&&w(C.map.channel),aoMapUv:st&&w(C.aoMap.channel),lightMapUv:je&&w(C.lightMap.channel),bumpMapUv:it&&w(C.bumpMap.channel),normalMapUv:He&&w(C.normalMap.channel),displacementMapUv:At&&w(C.displacementMap.channel),emissiveMapUv:at&&w(C.emissiveMap.channel),metalnessMapUv:D&&w(C.metalnessMap.channel),roughnessMapUv:A&&w(C.roughnessMap.channel),anisotropyMapUv:Ie&&w(C.anisotropyMap.channel),clearcoatMapUv:Be&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:tt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ot&&w(C.sheenRoughnessMap.channel),specularMapUv:he&&w(C.specularMap.channel),specularColorMapUv:Ce&&w(C.specularColorMap.channel),specularIntensityMapUv:L&&w(C.specularIntensityMap.channel),transmissionMapUv:ge&&w(C.transmissionMap.channel),thicknessMapUv:Ne&&w(C.thicknessMap.channel),alphaMapUv:pe&&w(C.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(He||Q),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ge,vertexUv3s:Ae,pointsUvs:ye.isPoints===!0&&!!ee.attributes.uv&&(qe||pe),fog:!!G,useFog:C.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:ye.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&ae.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ue,useLegacyLights:o._useLegacyLights,decodeVideoTexture:qe&&C.map.isVideoTexture===!0&&Dt.getTransfer(C.map.colorSpace)===zt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ai,flipSided:C.side===Cn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:ce&&C.extensions.derivatives===!0,extensionFragDepth:ce&&C.extensions.fragDepth===!0,extensionDrawBuffers:ce&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&C.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function _(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ae in C.defines)U.push(ae),U.push(C.defines[ae]);return C.isRawShaderMaterial===!1&&(b(U,C),R(U,C),U.push(o.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function b(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.numLightProbes),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function R(C,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.matcap&&c.enable(4),U.envMap&&c.enable(5),U.normalMapObjectSpace&&c.enable(6),U.normalMapTangentSpace&&c.enable(7),U.clearcoat&&c.enable(8),U.iridescence&&c.enable(9),U.alphaTest&&c.enable(10),U.vertexColors&&c.enable(11),U.vertexAlphas&&c.enable(12),U.vertexUv1s&&c.enable(13),U.vertexUv2s&&c.enable(14),U.vertexUv3s&&c.enable(15),U.vertexTangents&&c.enable(16),U.anisotropy&&c.enable(17),U.alphaHash&&c.enable(18),U.batching&&c.enable(19),C.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),C.push(c.mask)}function N(C){const U=T[C.type];let ae;if(U){const fe=Ti[U];ae=ox.clone(fe.uniforms)}else ae=C.uniforms;return ae}function B(C,U){let ae;for(let fe=0,ye=m.length;fe<ye;fe++){const G=m[fe];if(G.cacheKey===U){ae=G,++ae.usedTimes;break}}return ae===void 0&&(ae=new SE(o,U,C,l),m.push(ae)),ae}function F(C){if(--C.usedTimes===0){const U=m.indexOf(C);m[U]=m[m.length-1],m.pop(),C.destroy()}}function k(C){h.remove(C)}function oe(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:N,acquireProgram:B,releaseProgram:F,releaseShaderCache:k,programs:m,dispose:oe}}function AE(){let o=new WeakMap;function e(l){let d=o.get(l);return d===void 0&&(d={},o.set(l,d)),d}function n(l){o.delete(l)}function r(l,d,c){o.get(l)[d]=c}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function RE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Hm(){const o=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function d(v,y,S,T,w,x){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:w,group:x},o[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=w,_.group=x),e++,_}function c(v,y,S,T,w,x){const _=d(v,y,S,T,w,x);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(v,y,S,T,w,x){const _=d(v,y,S,T,w,x);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,y){n.length>1&&n.sort(v||RE),r.length>1&&r.sort(y||Bm),a.length>1&&a.sort(y||Bm)}function g(){for(let v=e,y=o.length;v<y;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:g,sort:m}}function CE(){let o=new WeakMap;function e(r,a){const l=o.get(r);let d;return l===void 0?(d=new Hm,o.set(r,[d])):a>=l.length?(d=new Hm,l.push(d)):d=l[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function bE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Et};break;case"SpotLight":n={position:new H,direction:new H,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new H,halfWidth:new H,halfHeight:new H};break}return o[e.id]=n,n}}}function PE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let LE=0;function DE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function NE(o,e){const n=new bE,r=PE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new H);const l=new H,d=new Ot,c=new Ot;function h(g,v){let y=0,S=0,T=0;for(let fe=0;fe<9;fe++)a.probe[fe].set(0,0,0);let w=0,x=0,_=0,b=0,R=0,N=0,B=0,F=0,k=0,oe=0,C=0;g.sort(DE);const U=v===!0?Math.PI:1;for(let fe=0,ye=g.length;fe<ye;fe++){const G=g[fe],ee=G.color,re=G.intensity,de=G.distance,X=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)y+=ee.r*re*U,S+=ee.g*re*U,T+=ee.b*re*U;else if(G.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(G.sh.coefficients[Z],re);C++}else if(G.isDirectionalLight){const Z=n.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*U),G.castShadow){const Y=G.shadow,I=r.get(G);I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,a.directionalShadow[w]=I,a.directionalShadowMap[w]=X,a.directionalShadowMatrix[w]=G.shadow.matrix,N++}a.directional[w]=Z,w++}else if(G.isSpotLight){const Z=n.get(G);Z.position.setFromMatrixPosition(G.matrixWorld),Z.color.copy(ee).multiplyScalar(re*U),Z.distance=de,Z.coneCos=Math.cos(G.angle),Z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Z.decay=G.decay,a.spot[_]=Z;const Y=G.shadow;if(G.map&&(a.spotLightMap[k]=G.map,k++,Y.updateMatrices(G),G.castShadow&&oe++),a.spotLightMatrix[_]=Y.matrix,G.castShadow){const I=r.get(G);I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,a.spotShadow[_]=I,a.spotShadowMap[_]=X,F++}_++}else if(G.isRectAreaLight){const Z=n.get(G);Z.color.copy(ee).multiplyScalar(re),Z.halfWidth.set(G.width*.5,0,0),Z.halfHeight.set(0,G.height*.5,0),a.rectArea[b]=Z,b++}else if(G.isPointLight){const Z=n.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*U),Z.distance=G.distance,Z.decay=G.decay,G.castShadow){const Y=G.shadow,I=r.get(G);I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,a.pointShadow[x]=I,a.pointShadowMap[x]=X,a.pointShadowMatrix[x]=G.shadow.matrix,B++}a.point[x]=Z,x++}else if(G.isHemisphereLight){const Z=n.get(G);Z.skyColor.copy(G.color).multiplyScalar(re*U),Z.groundColor.copy(G.groundColor).multiplyScalar(re*U),a.hemi[R]=Z,R++}}b>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=T;const ae=a.hash;(ae.directionalLength!==w||ae.pointLength!==x||ae.spotLength!==_||ae.rectAreaLength!==b||ae.hemiLength!==R||ae.numDirectionalShadows!==N||ae.numPointShadows!==B||ae.numSpotShadows!==F||ae.numSpotMaps!==k||ae.numLightProbes!==C)&&(a.directional.length=w,a.spot.length=_,a.rectArea.length=b,a.point.length=x,a.hemi.length=R,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=B,a.pointShadowMap.length=B,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=B,a.spotLightMatrix.length=F+k-oe,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=oe,a.numLightProbes=C,ae.directionalLength=w,ae.pointLength=x,ae.spotLength=_,ae.rectAreaLength=b,ae.hemiLength=R,ae.numDirectionalShadows=N,ae.numPointShadows=B,ae.numSpotShadows=F,ae.numSpotMaps=k,ae.numLightProbes=C,a.version=LE++)}function m(g,v){let y=0,S=0,T=0,w=0,x=0;const _=v.matrixWorldInverse;for(let b=0,R=g.length;b<R;b++){const N=g[b];if(N.isDirectionalLight){const B=a.directional[y];B.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(_),y++}else if(N.isSpotLight){const B=a.spot[T];B.position.setFromMatrixPosition(N.matrixWorld),B.position.applyMatrix4(_),B.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(_),T++}else if(N.isRectAreaLight){const B=a.rectArea[w];B.position.setFromMatrixPosition(N.matrixWorld),B.position.applyMatrix4(_),c.identity(),d.copy(N.matrixWorld),d.premultiply(_),c.extractRotation(d),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),B.halfWidth.applyMatrix4(c),B.halfHeight.applyMatrix4(c),w++}else if(N.isPointLight){const B=a.point[S];B.position.setFromMatrixPosition(N.matrixWorld),B.position.applyMatrix4(_),S++}else if(N.isHemisphereLight){const B=a.hemi[x];B.direction.setFromMatrixPosition(N.matrixWorld),B.direction.transformDirection(_),x++}}}return{setup:h,setupView:m,state:a}}function Gm(o,e){const n=new NE(o,e),r=[],a=[];function l(){r.length=0,a.length=0}function d(v){r.push(v)}function c(v){a.push(v)}function h(v){n.setup(r,v)}function m(v){n.setupView(r,v)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:m,pushLight:d,pushShadow:c}}function UE(o,e){let n=new WeakMap;function r(l,d=0){const c=n.get(l);let h;return c===void 0?(h=new Gm(o,e),n.set(l,[h])):d>=c.length?(h=new Gm(o,e),c.push(h)):h=c[d],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class IE extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OE extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kE=`uniform sampler2D shadow_pass;
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
}`;function zE(o,e,n){let r=new zf;const a=new rt,l=new rt,d=new Gt,c=new IE({depthPacking:Pv}),h=new OE,m={},g=n.maxTextureSize,v={[Tr]:Cn,[Cn]:Tr,[Ai]:Ai},y=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:FE,fragmentShader:kE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Pn;T.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Rn(T,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let _=this.type;this.render=function(F,k,oe){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const C=o.getRenderTarget(),U=o.getActiveCubeFace(),ae=o.getActiveMipmapLevel(),fe=o.state;fe.setBlending(Sr),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const ye=_!==Gi&&this.type===Gi,G=_===Gi&&this.type!==Gi;for(let ee=0,re=F.length;ee<re;ee++){const de=F[ee],X=de.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const Z=X.getFrameExtents();if(a.multiply(Z),l.copy(X.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/Z.x),a.x=l.x*Z.x,X.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/Z.y),a.y=l.y*Z.y,X.mapSize.y=l.y)),X.map===null||ye===!0||G===!0){const I=this.type!==Gi?{minFilter:Tn,magFilter:Tn}:{};X.map!==null&&X.map.dispose(),X.map=new Kr(a.x,a.y,I),X.map.texture.name=de.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const Y=X.getViewportCount();for(let I=0;I<Y;I++){const W=X.getViewport(I);d.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),fe.viewport(d),X.updateMatrices(de,I),r=X.getFrustum(),N(k,oe,X.camera,de,this.type)}X.isPointLightShadow!==!0&&this.type===Gi&&b(X,oe),X.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(C,U,ae)};function b(F,k){const oe=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Kr(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(k,null,oe,y,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(k,null,oe,S,w,null)}function R(F,k,oe,C){let U=null;const ae=oe.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(ae!==void 0)U=ae;else if(U=oe.isPointLight===!0?h:c,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const fe=U.uuid,ye=k.uuid;let G=m[fe];G===void 0&&(G={},m[fe]=G);let ee=G[ye];ee===void 0&&(ee=U.clone(),G[ye]=ee,k.addEventListener("dispose",B)),U=ee}if(U.visible=k.visible,U.wireframe=k.wireframe,C===Gi?U.side=k.shadowSide!==null?k.shadowSide:k.side:U.side=k.shadowSide!==null?k.shadowSide:v[k.side],U.alphaMap=k.alphaMap,U.alphaTest=k.alphaTest,U.map=k.map,U.clipShadows=k.clipShadows,U.clippingPlanes=k.clippingPlanes,U.clipIntersection=k.clipIntersection,U.displacementMap=k.displacementMap,U.displacementScale=k.displacementScale,U.displacementBias=k.displacementBias,U.wireframeLinewidth=k.wireframeLinewidth,U.linewidth=k.linewidth,oe.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const fe=o.properties.get(U);fe.light=oe}return U}function N(F,k,oe,C,U){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&U===Gi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,F.matrixWorld);const ye=e.update(F),G=F.material;if(Array.isArray(G)){const ee=ye.groups;for(let re=0,de=ee.length;re<de;re++){const X=ee[re],Z=G[X.materialIndex];if(Z&&Z.visible){const Y=R(F,Z,C,U);F.onBeforeShadow(o,F,k,oe,ye,Y,X),o.renderBufferDirect(oe,null,ye,Y,F,X),F.onAfterShadow(o,F,k,oe,ye,Y,X)}}}else if(G.visible){const ee=R(F,G,C,U);F.onBeforeShadow(o,F,k,oe,ye,ee,null),o.renderBufferDirect(oe,null,ye,ee,F,null),F.onAfterShadow(o,F,k,oe,ye,ee,null)}}const fe=F.children;for(let ye=0,G=fe.length;ye<G;ye++)N(fe[ye],k,oe,C,U)}function B(F){F.target.removeEventListener("dispose",B);for(const oe in m){const C=m[oe],U=F.target.uuid;U in C&&(C[U].dispose(),delete C[U])}}}function BE(o,e,n){const r=n.isWebGL2;function a(){let E=!1;const te=new Gt;let ce=null;const Oe=new Gt(0,0,0,0);return{setMask:function(Ge){ce!==Ge&&!E&&(o.colorMask(Ge,Ge,Ge,Ge),ce=Ge)},setLocked:function(Ge){E=Ge},setClear:function(Ge,Ae,Ue,$e,pt){pt===!0&&(Ge*=$e,Ae*=$e,Ue*=$e),te.set(Ge,Ae,Ue,$e),Oe.equals(te)===!1&&(o.clearColor(Ge,Ae,Ue,$e),Oe.copy(te))},reset:function(){E=!1,ce=null,Oe.set(-1,0,0,0)}}}function l(){let E=!1,te=null,ce=null,Oe=null;return{setTest:function(Ge){Ge?ze(o.DEPTH_TEST):qe(o.DEPTH_TEST)},setMask:function(Ge){te!==Ge&&!E&&(o.depthMask(Ge),te=Ge)},setFunc:function(Ge){if(ce!==Ge){switch(Ge){case ov:o.depthFunc(o.NEVER);break;case av:o.depthFunc(o.ALWAYS);break;case lv:o.depthFunc(o.LESS);break;case Wl:o.depthFunc(o.LEQUAL);break;case uv:o.depthFunc(o.EQUAL);break;case cv:o.depthFunc(o.GEQUAL);break;case fv:o.depthFunc(o.GREATER);break;case dv:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ce=Ge}},setLocked:function(Ge){E=Ge},setClear:function(Ge){Oe!==Ge&&(o.clearDepth(Ge),Oe=Ge)},reset:function(){E=!1,te=null,ce=null,Oe=null}}}function d(){let E=!1,te=null,ce=null,Oe=null,Ge=null,Ae=null,Ue=null,$e=null,pt=null;return{setTest:function(Qe){E||(Qe?ze(o.STENCIL_TEST):qe(o.STENCIL_TEST))},setMask:function(Qe){te!==Qe&&!E&&(o.stencilMask(Qe),te=Qe)},setFunc:function(Qe,gt,Ct){(ce!==Qe||Oe!==gt||Ge!==Ct)&&(o.stencilFunc(Qe,gt,Ct),ce=Qe,Oe=gt,Ge=Ct)},setOp:function(Qe,gt,Ct){(Ae!==Qe||Ue!==gt||$e!==Ct)&&(o.stencilOp(Qe,gt,Ct),Ae=Qe,Ue=gt,$e=Ct)},setLocked:function(Qe){E=Qe},setClear:function(Qe){pt!==Qe&&(o.clearStencil(Qe),pt=Qe)},reset:function(){E=!1,te=null,ce=null,Oe=null,Ge=null,Ae=null,Ue=null,$e=null,pt=null}}}const c=new a,h=new l,m=new d,g=new WeakMap,v=new WeakMap;let y={},S={},T=new WeakMap,w=[],x=null,_=!1,b=null,R=null,N=null,B=null,F=null,k=null,oe=null,C=new Et(0,0,0),U=0,ae=!1,fe=null,ye=null,G=null,ee=null,re=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=Z>=2);let I=null,W={};const q=o.getParameter(o.SCISSOR_BOX),le=o.getParameter(o.VIEWPORT),_e=new Gt().fromArray(q),be=new Gt().fromArray(le);function De(E,te,ce,Oe){const Ge=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(E,Ae),o.texParameteri(E,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(E,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ue=0;Ue<ce;Ue++)r&&(E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY)?o.texImage3D(te,0,o.RGBA,1,1,Oe,0,o.RGBA,o.UNSIGNED_BYTE,Ge):o.texImage2D(te+Ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ge);return Ae}const ke={};ke[o.TEXTURE_2D]=De(o.TEXTURE_2D,o.TEXTURE_2D,1),ke[o.TEXTURE_CUBE_MAP]=De(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ke[o.TEXTURE_2D_ARRAY]=De(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ke[o.TEXTURE_3D]=De(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),ze(o.DEPTH_TEST),h.setFunc(Wl),at(!1),D(Tp),ze(o.CULL_FACE),He(Sr);function ze(E){y[E]!==!0&&(o.enable(E),y[E]=!0)}function qe(E){y[E]!==!1&&(o.disable(E),y[E]=!1)}function xe(E,te){return S[E]!==te?(o.bindFramebuffer(E,te),S[E]=te,r&&(E===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=te),E===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=te)),!0):!1}function j(E,te){let ce=w,Oe=!1;if(E)if(ce=T.get(te),ce===void 0&&(ce=[],T.set(te,ce)),E.isWebGLMultipleRenderTargets){const Ge=E.texture;if(ce.length!==Ge.length||ce[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,Ue=Ge.length;Ae<Ue;Ae++)ce[Ae]=o.COLOR_ATTACHMENT0+Ae;ce.length=Ge.length,Oe=!0}}else ce[0]!==o.COLOR_ATTACHMENT0&&(ce[0]=o.COLOR_ATTACHMENT0,Oe=!0);else ce[0]!==o.BACK&&(ce[0]=o.BACK,Oe=!0);Oe&&(n.isWebGL2?o.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function st(E){return x!==E?(o.useProgram(E),x=E,!0):!1}const je={[Xr]:o.FUNC_ADD,[X_]:o.FUNC_SUBTRACT,[j_]:o.FUNC_REVERSE_SUBTRACT};if(r)je[Cp]=o.MIN,je[bp]=o.MAX;else{const E=e.get("EXT_blend_minmax");E!==null&&(je[Cp]=E.MIN_EXT,je[bp]=E.MAX_EXT)}const it={[Y_]:o.ZERO,[q_]:o.ONE,[$_]:o.SRC_COLOR,[yf]:o.SRC_ALPHA,[tv]:o.SRC_ALPHA_SATURATE,[J_]:o.DST_COLOR,[Z_]:o.DST_ALPHA,[K_]:o.ONE_MINUS_SRC_COLOR,[Sf]:o.ONE_MINUS_SRC_ALPHA,[ev]:o.ONE_MINUS_DST_COLOR,[Q_]:o.ONE_MINUS_DST_ALPHA,[nv]:o.CONSTANT_COLOR,[iv]:o.ONE_MINUS_CONSTANT_COLOR,[rv]:o.CONSTANT_ALPHA,[sv]:o.ONE_MINUS_CONSTANT_ALPHA};function He(E,te,ce,Oe,Ge,Ae,Ue,$e,pt,Qe){if(E===Sr){_===!0&&(qe(o.BLEND),_=!1);return}if(_===!1&&(ze(o.BLEND),_=!0),E!==W_){if(E!==b||Qe!==ae){if((R!==Xr||F!==Xr)&&(o.blendEquation(o.FUNC_ADD),R=Xr,F=Xr),Qe)switch(E){case Qs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vl:o.blendFunc(o.ONE,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Qs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vl:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}N=null,B=null,k=null,oe=null,C.set(0,0,0),U=0,b=E,ae=Qe}return}Ge=Ge||te,Ae=Ae||ce,Ue=Ue||Oe,(te!==R||Ge!==F)&&(o.blendEquationSeparate(je[te],je[Ge]),R=te,F=Ge),(ce!==N||Oe!==B||Ae!==k||Ue!==oe)&&(o.blendFuncSeparate(it[ce],it[Oe],it[Ae],it[Ue]),N=ce,B=Oe,k=Ae,oe=Ue),($e.equals(C)===!1||pt!==U)&&(o.blendColor($e.r,$e.g,$e.b,pt),C.copy($e),U=pt),b=E,ae=!1}function At(E,te){E.side===Ai?qe(o.CULL_FACE):ze(o.CULL_FACE);let ce=E.side===Cn;te&&(ce=!ce),at(ce),E.blending===Qs&&E.transparent===!1?He(Sr):He(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),h.setFunc(E.depthFunc),h.setTest(E.depthTest),h.setMask(E.depthWrite),c.setMask(E.colorWrite);const Oe=E.stencilWrite;m.setTest(Oe),Oe&&(m.setMask(E.stencilWriteMask),m.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),m.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Q(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ze(o.SAMPLE_ALPHA_TO_COVERAGE):qe(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(E){fe!==E&&(E?o.frontFace(o.CW):o.frontFace(o.CCW),fe=E)}function D(E){E!==H_?(ze(o.CULL_FACE),E!==ye&&(E===Tp?o.cullFace(o.BACK):E===G_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):qe(o.CULL_FACE),ye=E}function A(E){E!==G&&(X&&o.lineWidth(E),G=E)}function Q(E,te,ce){E?(ze(o.POLYGON_OFFSET_FILL),(ee!==te||re!==ce)&&(o.polygonOffset(te,ce),ee=te,re=ce)):qe(o.POLYGON_OFFSET_FILL)}function we(E){E?ze(o.SCISSOR_TEST):qe(o.SCISSOR_TEST)}function Ee(E){E===void 0&&(E=o.TEXTURE0+de-1),I!==E&&(o.activeTexture(E),I=E)}function Te(E,te,ce){ce===void 0&&(I===null?ce=o.TEXTURE0+de-1:ce=I);let Oe=W[ce];Oe===void 0&&(Oe={type:void 0,texture:void 0},W[ce]=Oe),(Oe.type!==E||Oe.texture!==te)&&(I!==ce&&(o.activeTexture(ce),I=ce),o.bindTexture(E,te||ke[E]),Oe.type=E,Oe.texture=te)}function Ze(){const E=W[I];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Ie(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Be(){try{o.compressedTexImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function tt(){try{o.texSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ft(){try{o.texSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function mt(){try{o.texStorage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ot(){try{o.texStorage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ce(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function L(E){_e.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),_e.copy(E))}function ge(E){be.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),be.copy(E))}function Ne(E,te){let ce=v.get(te);ce===void 0&&(ce=new WeakMap,v.set(te,ce));let Oe=ce.get(E);Oe===void 0&&(Oe=o.getUniformBlockIndex(te,E.name),ce.set(E,Oe))}function Pe(E,te){const Oe=v.get(te).get(E);g.get(te)!==Oe&&(o.uniformBlockBinding(te,Oe,E.__bindingPointIndex),g.set(te,Oe))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},I=null,W={},S={},T=new WeakMap,w=[],x=null,_=!1,b=null,R=null,N=null,B=null,F=null,k=null,oe=null,C=new Et(0,0,0),U=0,ae=!1,fe=null,ye=null,G=null,ee=null,re=null,_e.set(0,0,o.canvas.width,o.canvas.height),be.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:ze,disable:qe,bindFramebuffer:xe,drawBuffers:j,useProgram:st,setBlending:He,setMaterial:At,setFlipSided:at,setCullFace:D,setLineWidth:A,setPolygonOffset:Q,setScissorTest:we,activeTexture:Ee,bindTexture:Te,unbindTexture:Ze,compressedTexImage2D:Ie,compressedTexImage3D:Be,texImage2D:he,texImage3D:Ce,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:mt,texStorage3D:ot,texSubImage2D:tt,texSubImage3D:ft,compressedTexSubImage2D:ve,compressedTexSubImage3D:xt,scissor:L,viewport:ge,reset:pe}}function HE(o,e,n,r,a,l,d){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,A){return S?new OffscreenCanvas(D,A):ta("canvas")}function w(D,A,Q,we){let Ee=1;if((D.width>we||D.height>we)&&(Ee=we/Math.max(D.width,D.height)),Ee<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Te=A?bf:Math.floor,Ze=Te(Ee*D.width),Ie=Te(Ee*D.height);v===void 0&&(v=T(Ze,Ie));const Be=Q?T(Ze,Ie):v;return Be.width=Ze,Be.height=Ie,Be.getContext("2d").drawImage(D,0,0,Ze,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ze+"x"+Ie+")."),Be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function x(D){return rm(D.width)&&rm(D.height)}function _(D){return c?!1:D.wrapS!==_i||D.wrapT!==_i||D.minFilter!==Tn&&D.minFilter!==si}function b(D,A){return D.generateMipmaps&&A&&D.minFilter!==Tn&&D.minFilter!==si}function R(D){o.generateMipmap(D)}function N(D,A,Q,we,Ee=!1){if(c===!1)return A;if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Te=A;if(A===o.RED&&(Q===o.FLOAT&&(Te=o.R32F),Q===o.HALF_FLOAT&&(Te=o.R16F),Q===o.UNSIGNED_BYTE&&(Te=o.R8)),A===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(Te=o.R8UI),Q===o.UNSIGNED_SHORT&&(Te=o.R16UI),Q===o.UNSIGNED_INT&&(Te=o.R32UI),Q===o.BYTE&&(Te=o.R8I),Q===o.SHORT&&(Te=o.R16I),Q===o.INT&&(Te=o.R32I)),A===o.RG&&(Q===o.FLOAT&&(Te=o.RG32F),Q===o.HALF_FLOAT&&(Te=o.RG16F),Q===o.UNSIGNED_BYTE&&(Te=o.RG8)),A===o.RGBA){const Ze=Ee?Xl:Dt.getTransfer(we);Q===o.FLOAT&&(Te=o.RGBA32F),Q===o.HALF_FLOAT&&(Te=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(Te=Ze===zt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(Te=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(Te=o.RGB5_A1)}return(Te===o.R16F||Te===o.R32F||Te===o.RG16F||Te===o.RG32F||Te===o.RGBA16F||Te===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function B(D,A,Q){return b(D,Q)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==si?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function F(D){return D===Tn||D===Pp||D===kc?o.NEAREST:o.LINEAR}function k(D){const A=D.target;A.removeEventListener("dispose",k),C(A),A.isVideoTexture&&g.delete(A)}function oe(D){const A=D.target;A.removeEventListener("dispose",oe),ae(A)}function C(D){const A=r.get(D);if(A.__webglInit===void 0)return;const Q=D.source,we=y.get(Q);if(we){const Ee=we[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(D),Object.keys(we).length===0&&y.delete(Q)}r.remove(D)}function U(D){const A=r.get(D);o.deleteTexture(A.__webglTexture);const Q=D.source,we=y.get(Q);delete we[A.__cacheKey],d.memory.textures--}function ae(D){const A=D.texture,Q=r.get(D),we=r.get(A);if(we.__webglTexture!==void 0&&(o.deleteTexture(we.__webglTexture),d.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(Q.__webglFramebuffer[Ee]))for(let Te=0;Te<Q.__webglFramebuffer[Ee].length;Te++)o.deleteFramebuffer(Q.__webglFramebuffer[Ee][Te]);else o.deleteFramebuffer(Q.__webglFramebuffer[Ee]);Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer[Ee])}else{if(Array.isArray(Q.__webglFramebuffer))for(let Ee=0;Ee<Q.__webglFramebuffer.length;Ee++)o.deleteFramebuffer(Q.__webglFramebuffer[Ee]);else o.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&o.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let Ee=0;Ee<Q.__webglColorRenderbuffer.length;Ee++)Q.__webglColorRenderbuffer[Ee]&&o.deleteRenderbuffer(Q.__webglColorRenderbuffer[Ee]);Q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let Ee=0,Te=A.length;Ee<Te;Ee++){const Ze=r.get(A[Ee]);Ze.__webglTexture&&(o.deleteTexture(Ze.__webglTexture),d.memory.textures--),r.remove(A[Ee])}r.remove(A),r.remove(D)}let fe=0;function ye(){fe=0}function G(){const D=fe;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),fe+=1,D}function ee(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function re(D,A){const Q=r.get(D);if(D.isVideoTexture&&At(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const we=D.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Q,D,A);return}}n.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+A)}function de(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){_e(Q,D,A);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+A)}function X(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){_e(Q,D,A);return}n.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+A)}function Z(D,A){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){be(Q,D,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+A)}const Y={[wf]:o.REPEAT,[_i]:o.CLAMP_TO_EDGE,[Tf]:o.MIRRORED_REPEAT},I={[Tn]:o.NEAREST,[Pp]:o.NEAREST_MIPMAP_NEAREST,[kc]:o.NEAREST_MIPMAP_LINEAR,[si]:o.LINEAR,[yv]:o.LINEAR_MIPMAP_NEAREST,[Jo]:o.LINEAR_MIPMAP_LINEAR},W={[Dv]:o.NEVER,[kv]:o.ALWAYS,[Nv]:o.LESS,[bg]:o.LEQUAL,[Uv]:o.EQUAL,[Fv]:o.GEQUAL,[Iv]:o.GREATER,[Ov]:o.NOTEQUAL};function q(D,A,Q){if(Q?(o.texParameteri(D,o.TEXTURE_WRAP_S,Y[A.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Y[A.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Y[A.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,I[A.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,I[A.minFilter])):(o.texParameteri(D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==_i||A.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(D,o.TEXTURE_MAG_FILTER,F(A.magFilter)),o.texParameteri(D,o.TEXTURE_MIN_FILTER,F(A.minFilter)),A.minFilter!==Tn&&A.minFilter!==si&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const we=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Tn||A.minFilter!==kc&&A.minFilter!==Jo||A.type===yr&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(D,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function le(D,A){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",k));const we=A.source;let Ee=y.get(we);Ee===void 0&&(Ee={},y.set(we,Ee));const Te=ee(A);if(Te!==D.__cacheKey){Ee[Te]===void 0&&(Ee[Te]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Ee[Te].usedTimes++;const Ze=Ee[D.__cacheKey];Ze!==void 0&&(Ee[D.__cacheKey].usedTimes--,Ze.usedTimes===0&&U(A)),D.__cacheKey=Te,D.__webglTexture=Ee[Te].texture}return Q}function _e(D,A,Q){let we=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(we=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(we=o.TEXTURE_3D);const Ee=le(D,A),Te=A.source;n.bindTexture(we,D.__webglTexture,o.TEXTURE0+Q);const Ze=r.get(Te);if(Te.version!==Ze.__version||Ee===!0){n.activeTexture(o.TEXTURE0+Q);const Ie=Dt.getPrimaries(Dt.workingColorSpace),Be=A.colorSpace===ai?null:Dt.getPrimaries(A.colorSpace),tt=A.colorSpace===ai||Ie===Be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ft=_(A)&&x(A.image)===!1;let ve=w(A.image,ft,!1,a.maxTextureSize);ve=at(A,ve);const xt=x(ve)||c,mt=l.convert(A.format,A.colorSpace);let ot=l.convert(A.type),he=N(A.internalFormat,mt,ot,A.colorSpace,A.isVideoTexture);q(we,A,xt);let Ce;const L=A.mipmaps,ge=c&&A.isVideoTexture!==!0&&he!==Ag,Ne=Ze.__version===void 0||Ee===!0,Pe=B(A,ve,xt);if(A.isDepthTexture)he=o.DEPTH_COMPONENT,c?A.type===yr?he=o.DEPTH_COMPONENT32F:A.type===xr?he=o.DEPTH_COMPONENT24:A.type===Yr?he=o.DEPTH24_STENCIL8:he=o.DEPTH_COMPONENT16:A.type===yr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===qr&&he===o.DEPTH_COMPONENT&&A.type!==Of&&A.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=xr,ot=l.convert(A.type)),A.format===no&&he===o.DEPTH_COMPONENT&&(he=o.DEPTH_STENCIL,A.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Yr,ot=l.convert(A.type))),Ne&&(ge?n.texStorage2D(o.TEXTURE_2D,1,he,ve.width,ve.height):n.texImage2D(o.TEXTURE_2D,0,he,ve.width,ve.height,0,mt,ot,null));else if(A.isDataTexture)if(L.length>0&&xt){ge&&Ne&&n.texStorage2D(o.TEXTURE_2D,Pe,he,L[0].width,L[0].height);for(let pe=0,E=L.length;pe<E;pe++)Ce=L[pe],ge?n.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,mt,ot,Ce.data):n.texImage2D(o.TEXTURE_2D,pe,he,Ce.width,Ce.height,0,mt,ot,Ce.data);A.generateMipmaps=!1}else ge?(Ne&&n.texStorage2D(o.TEXTURE_2D,Pe,he,ve.width,ve.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,ve.width,ve.height,mt,ot,ve.data)):n.texImage2D(o.TEXTURE_2D,0,he,ve.width,ve.height,0,mt,ot,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ge&&Ne&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,he,L[0].width,L[0].height,ve.depth);for(let pe=0,E=L.length;pe<E;pe++)Ce=L[pe],A.format!==vi?mt!==null?ge?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,ve.depth,mt,Ce.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,he,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?n.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,ve.depth,mt,ot,Ce.data):n.texImage3D(o.TEXTURE_2D_ARRAY,pe,he,Ce.width,Ce.height,ve.depth,0,mt,ot,Ce.data)}else{ge&&Ne&&n.texStorage2D(o.TEXTURE_2D,Pe,he,L[0].width,L[0].height);for(let pe=0,E=L.length;pe<E;pe++)Ce=L[pe],A.format!==vi?mt!==null?ge?n.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,mt,Ce.data):n.compressedTexImage2D(o.TEXTURE_2D,pe,he,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?n.texSubImage2D(o.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,mt,ot,Ce.data):n.texImage2D(o.TEXTURE_2D,pe,he,Ce.width,Ce.height,0,mt,ot,Ce.data)}else if(A.isDataArrayTexture)ge?(Ne&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,he,ve.width,ve.height,ve.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,mt,ot,ve.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,he,ve.width,ve.height,ve.depth,0,mt,ot,ve.data);else if(A.isData3DTexture)ge?(Ne&&n.texStorage3D(o.TEXTURE_3D,Pe,he,ve.width,ve.height,ve.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,mt,ot,ve.data)):n.texImage3D(o.TEXTURE_3D,0,he,ve.width,ve.height,ve.depth,0,mt,ot,ve.data);else if(A.isFramebufferTexture){if(Ne)if(ge)n.texStorage2D(o.TEXTURE_2D,Pe,he,ve.width,ve.height);else{let pe=ve.width,E=ve.height;for(let te=0;te<Pe;te++)n.texImage2D(o.TEXTURE_2D,te,he,pe,E,0,mt,ot,null),pe>>=1,E>>=1}}else if(L.length>0&&xt){ge&&Ne&&n.texStorage2D(o.TEXTURE_2D,Pe,he,L[0].width,L[0].height);for(let pe=0,E=L.length;pe<E;pe++)Ce=L[pe],ge?n.texSubImage2D(o.TEXTURE_2D,pe,0,0,mt,ot,Ce):n.texImage2D(o.TEXTURE_2D,pe,he,mt,ot,Ce);A.generateMipmaps=!1}else ge?(Ne&&n.texStorage2D(o.TEXTURE_2D,Pe,he,ve.width,ve.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,mt,ot,ve)):n.texImage2D(o.TEXTURE_2D,0,he,mt,ot,ve);b(A,xt)&&R(we),Ze.__version=Te.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function be(D,A,Q){if(A.image.length!==6)return;const we=le(D,A),Ee=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Q);const Te=r.get(Ee);if(Ee.version!==Te.__version||we===!0){n.activeTexture(o.TEXTURE0+Q);const Ze=Dt.getPrimaries(Dt.workingColorSpace),Ie=A.colorSpace===ai?null:Dt.getPrimaries(A.colorSpace),Be=A.colorSpace===ai||Ze===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const tt=A.isCompressedTexture||A.image[0].isCompressedTexture,ft=A.image[0]&&A.image[0].isDataTexture,ve=[];for(let pe=0;pe<6;pe++)!tt&&!ft?ve[pe]=w(A.image[pe],!1,!0,a.maxCubemapSize):ve[pe]=ft?A.image[pe].image:A.image[pe],ve[pe]=at(A,ve[pe]);const xt=ve[0],mt=x(xt)||c,ot=l.convert(A.format,A.colorSpace),he=l.convert(A.type),Ce=N(A.internalFormat,ot,he,A.colorSpace),L=c&&A.isVideoTexture!==!0,ge=Te.__version===void 0||we===!0;let Ne=B(A,xt,mt);q(o.TEXTURE_CUBE_MAP,A,mt);let Pe;if(tt){L&&ge&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,Ce,xt.width,xt.height);for(let pe=0;pe<6;pe++){Pe=ve[pe].mipmaps;for(let E=0;E<Pe.length;E++){const te=Pe[E];A.format!==vi?ot!==null?L?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E,0,0,te.width,te.height,ot,te.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E,Ce,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E,0,0,te.width,te.height,ot,he,te.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E,Ce,te.width,te.height,0,ot,he,te.data)}}}else{Pe=A.mipmaps,L&&ge&&(Pe.length>0&&Ne++,n.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,Ce,ve[0].width,ve[0].height));for(let pe=0;pe<6;pe++)if(ft){L?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ve[pe].width,ve[pe].height,ot,he,ve[pe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ce,ve[pe].width,ve[pe].height,0,ot,he,ve[pe].data);for(let E=0;E<Pe.length;E++){const ce=Pe[E].image[pe].image;L?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E+1,0,0,ce.width,ce.height,ot,he,ce.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E+1,Ce,ce.width,ce.height,0,ot,he,ce.data)}}else{L?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ot,he,ve[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ce,ot,he,ve[pe]);for(let E=0;E<Pe.length;E++){const te=Pe[E];L?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E+1,0,0,ot,he,te.image[pe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,E+1,Ce,ot,he,te.image[pe])}}}b(A,mt)&&R(o.TEXTURE_CUBE_MAP),Te.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function De(D,A,Q,we,Ee,Te){const Ze=l.convert(Q.format,Q.colorSpace),Ie=l.convert(Q.type),Be=N(Q.internalFormat,Ze,Ie,Q.colorSpace);if(!r.get(A).__hasExternalTextures){const ft=Math.max(1,A.width>>Te),ve=Math.max(1,A.height>>Te);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?n.texImage3D(Ee,Te,Be,ft,ve,A.depth,0,Ze,Ie,null):n.texImage2D(Ee,Te,Be,ft,ve,0,Ze,Ie,null)}n.bindFramebuffer(o.FRAMEBUFFER,D),He(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,we,Ee,r.get(Q).__webglTexture,0,it(A)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,we,Ee,r.get(Q).__webglTexture,Te),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,A,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let we=c===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Q||He(A)){const Ee=A.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===yr?we=o.DEPTH_COMPONENT32F:Ee.type===xr&&(we=o.DEPTH_COMPONENT24));const Te=it(A);He(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Te,we,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Te,we,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,we,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const we=it(A);Q&&He(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,o.DEPTH24_STENCIL8,A.width,A.height):He(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const we=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Ee=0;Ee<we.length;Ee++){const Te=we[Ee],Ze=l.convert(Te.format,Te.colorSpace),Ie=l.convert(Te.type),Be=N(Te.internalFormat,Ze,Ie,Te.colorSpace),tt=it(A);Q&&He(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,Be,A.width,A.height):He(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tt,Be,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Be,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ze(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);const we=r.get(A.depthTexture).__webglTexture,Ee=it(A);if(A.depthTexture.format===qr)He(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,we,0,Ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,we,0);else if(A.depthTexture.format===no)He(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,we,0,Ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function qe(D){const A=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ze(A.__webglFramebuffer,D)}else if(Q){A.__webglDepthbuffer=[];for(let we=0;we<6;we++)n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[we]),A.__webglDepthbuffer[we]=o.createRenderbuffer(),ke(A.__webglDepthbuffer[we],D,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),ke(A.__webglDepthbuffer,D,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(D,A,Q){const we=r.get(D);A!==void 0&&De(we.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&qe(D)}function j(D){const A=D.texture,Q=r.get(D),we=r.get(A);D.addEventListener("dispose",oe),D.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture()),we.__version=A.version,d.memory.textures++);const Ee=D.isWebGLCubeRenderTarget===!0,Te=D.isWebGLMultipleRenderTargets===!0,Ze=x(D)||c;if(Ee){Q.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(c&&A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ie]=[];for(let Be=0;Be<A.mipmaps.length;Be++)Q.__webglFramebuffer[Ie][Be]=o.createFramebuffer()}else Q.__webglFramebuffer[Ie]=o.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)Q.__webglFramebuffer[Ie]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Te)if(a.drawBuffers){const Ie=D.texture;for(let Be=0,tt=Ie.length;Be<tt;Be++){const ft=r.get(Ie[Be]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&D.samples>0&&He(D)===!1){const Ie=Te?A:[A];Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Be=0;Be<Ie.length;Be++){const tt=Ie[Be];Q.__webglColorRenderbuffer[Be]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Be]);const ft=l.convert(tt.format,tt.colorSpace),ve=l.convert(tt.type),xt=N(tt.internalFormat,ft,ve,tt.colorSpace,D.isXRRenderTarget===!0),mt=it(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,mt,xt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Be,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Be])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(o.TEXTURE_CUBE_MAP,we.__webglTexture),q(o.TEXTURE_CUBE_MAP,A,Ze);for(let Ie=0;Ie<6;Ie++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let Be=0;Be<A.mipmaps.length;Be++)De(Q.__webglFramebuffer[Ie][Be],D,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Be);else De(Q.__webglFramebuffer[Ie],D,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);b(A,Ze)&&R(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){const Ie=D.texture;for(let Be=0,tt=Ie.length;Be<tt;Be++){const ft=Ie[Be],ve=r.get(ft);n.bindTexture(o.TEXTURE_2D,ve.__webglTexture),q(o.TEXTURE_2D,ft,Ze),De(Q.__webglFramebuffer,D,ft,o.COLOR_ATTACHMENT0+Be,o.TEXTURE_2D,0),b(ft,Ze)&&R(o.TEXTURE_2D)}n.unbindTexture()}else{let Ie=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(c?Ie=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ie,we.__webglTexture),q(Ie,A,Ze),c&&A.mipmaps&&A.mipmaps.length>0)for(let Be=0;Be<A.mipmaps.length;Be++)De(Q.__webglFramebuffer[Be],D,A,o.COLOR_ATTACHMENT0,Ie,Be);else De(Q.__webglFramebuffer,D,A,o.COLOR_ATTACHMENT0,Ie,0);b(A,Ze)&&R(Ie),n.unbindTexture()}D.depthBuffer&&qe(D)}function st(D){const A=x(D)||c,Q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let we=0,Ee=Q.length;we<Ee;we++){const Te=Q[we];if(b(Te,A)){const Ze=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ie=r.get(Te).__webglTexture;n.bindTexture(Ze,Ie),R(Ze),n.unbindTexture()}}}function je(D){if(c&&D.samples>0&&He(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Q=D.width,we=D.height;let Ee=o.COLOR_BUFFER_BIT;const Te=[],Ze=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=r.get(D),Be=D.isWebGLMultipleRenderTargets===!0;if(Be)for(let tt=0;tt<A.length;tt++)n.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let tt=0;tt<A.length;tt++){Te.push(o.COLOR_ATTACHMENT0+tt),D.depthBuffer&&Te.push(Ze);const ft=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(ft===!1&&(D.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Be&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[tt]),ft===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ze]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ze])),Be){const ve=r.get(A[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,Q,we,0,0,Q,we,Ee,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Te)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Be)for(let tt=0;tt<A.length;tt++){n.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[tt]);const ft=r.get(A[tt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,ft,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function it(D){return Math.min(a.maxSamples,D.samples)}function He(D){const A=r.get(D);return c&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function At(D){const A=d.render.frame;g.get(D)!==A&&(g.set(D,A),D.update())}function at(D,A){const Q=D.colorSpace,we=D.format,Ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Rf||Q!==Xi&&Q!==ai&&(Dt.getTransfer(Q)===zt?c===!1?e.has("EXT_sRGB")===!0&&we===vi?(D.format=Rf,D.minFilter=si,D.generateMipmaps=!1):A=Lg.sRGBToLinear(A):(we!==vi||Ee!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}this.allocateTextureUnit=G,this.resetTextureUnits=ye,this.setTexture2D=re,this.setTexture2DArray=de,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=xe,this.setupRenderTarget=j,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=De,this.useMultisampledRTT=He}function GE(o,e,n){const r=n.isWebGL2;function a(l,d=ai){let c;const h=Dt.getTransfer(d);if(l===Er)return o.UNSIGNED_BYTE;if(l===Sg)return o.UNSIGNED_SHORT_4_4_4_4;if(l===Mg)return o.UNSIGNED_SHORT_5_5_5_1;if(l===Sv)return o.BYTE;if(l===Mv)return o.SHORT;if(l===Of)return o.UNSIGNED_SHORT;if(l===yg)return o.INT;if(l===xr)return o.UNSIGNED_INT;if(l===yr)return o.FLOAT;if(l===ea)return r?o.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===Ev)return o.ALPHA;if(l===vi)return o.RGBA;if(l===wv)return o.LUMINANCE;if(l===Tv)return o.LUMINANCE_ALPHA;if(l===qr)return o.DEPTH_COMPONENT;if(l===no)return o.DEPTH_STENCIL;if(l===Rf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Av)return o.RED;if(l===Eg)return o.RED_INTEGER;if(l===Rv)return o.RG;if(l===wg)return o.RG_INTEGER;if(l===Tg)return o.RGBA_INTEGER;if(l===zc||l===Bc||l===Hc||l===Gc)if(h===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Lp||l===Dp||l===Np||l===Up)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Lp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Dp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Up)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Ag)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Ip||l===Op)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Ip)return h===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Op)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Fp||l===kp||l===zp||l===Bp||l===Hp||l===Gp||l===Vp||l===Wp||l===Xp||l===jp||l===Yp||l===qp||l===$p||l===Kp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Fp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===kp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===zp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Bp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Hp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Gp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Vp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Wp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Xp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===jp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Yp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===qp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===$p)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Kp)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Vc||l===Zp||l===Qp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Vc)return h===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Zp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Qp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===Cv||l===Jp||l===em||l===tm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Vc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===em)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===tm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Yr?r?o.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):o[l]!==void 0?o[l]:null}return{convert:a}}class VE extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ks extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,d=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const x=n.getJointPose(w,r),_=this._getHandJoint(m,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class XE extends Jr{constructor(e,n){super();const r=this;let a=null,l=1,d=null,c="local-floor",h=1,m=null,g=null,v=null,y=null,S=null,T=null;const w=n.getContextAttributes();let x=null,_=null;const b=[],R=[],N=new rt;let B=null;const F=new qn;F.layers.enable(1),F.viewport=new Gt;const k=new qn;k.layers.enable(2),k.viewport=new Gt;const oe=[F,k],C=new VE;C.layers.enable(1),C.layers.enable(2);let U=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=b[q];return le===void 0&&(le=new pf,b[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=b[q];return le===void 0&&(le=new pf,b[q]=le),le.getGripSpace()},this.getHand=function(q){let le=b[q];return le===void 0&&(le=new pf,b[q]=le),le.getHandSpace()};function fe(q){const le=R.indexOf(q.inputSource);if(le===-1)return;const _e=b[le];_e!==void 0&&(_e.update(q.inputSource,q.frame,m||d),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function ye(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",ye),a.removeEventListener("inputsourceschange",G);for(let q=0;q<b.length;q++){const le=R[q];le!==null&&(R[q]=null,b[q].disconnect(le))}U=null,ae=null,e.setRenderTarget(x),S=null,y=null,v=null,a=null,_=null,W.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",ye),a.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(N),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:a.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,le),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new Kr(S.framebufferWidth,S.framebufferHeight,{format:vi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let le=null,_e=null,be=null;w.depth&&(be=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=w.stencil?no:qr,_e=w.stencil?Yr:xr);const De={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:l};v=new XRWebGLBinding(a,n),y=v.createProjectionLayer(De),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),_=new Kr(y.textureWidth,y.textureHeight,{format:vi,type:Er,depthTexture:new Hg(y.textureWidth,y.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const ke=e.properties.get(_);ke.__ignoreDepthValues=y.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(c),W.setContext(a),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function G(q){for(let le=0;le<q.removed.length;le++){const _e=q.removed[le],be=R.indexOf(_e);be>=0&&(R[be]=null,b[be].disconnect(_e))}for(let le=0;le<q.added.length;le++){const _e=q.added[le];let be=R.indexOf(_e);if(be===-1){for(let ke=0;ke<b.length;ke++)if(ke>=R.length){R.push(_e),be=ke;break}else if(R[ke]===null){R[ke]=_e,be=ke;break}if(be===-1)break}const De=b[be];De&&De.connect(_e)}}const ee=new H,re=new H;function de(q,le,_e){ee.setFromMatrixPosition(le.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const be=ee.distanceTo(re),De=le.projectionMatrix.elements,ke=_e.projectionMatrix.elements,ze=De[14]/(De[10]-1),qe=De[14]/(De[10]+1),xe=(De[9]+1)/De[5],j=(De[9]-1)/De[5],st=(De[8]-1)/De[0],je=(ke[8]+1)/ke[0],it=ze*st,He=ze*je,At=be/(-st+je),at=At*-st;le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const D=ze+At,A=qe+At,Q=it-at,we=He+(be-at),Ee=xe*qe/A*D,Te=j*qe/A*D;q.projectionMatrix.makePerspective(Q,we,Ee,Te,D,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function X(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;C.near=k.near=F.near=q.near,C.far=k.far=F.far=q.far,(U!==C.near||ae!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,ae=C.far);const le=q.parent,_e=C.cameras;X(C,le);for(let be=0;be<_e.length;be++)X(_e[be],le);_e.length===2?de(C,F,k):C.projectionMatrix.copy(F.projectionMatrix),Z(q,C,le)};function Z(q,le,_e){_e===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(q){h=q,y!==null&&(y.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)};let Y=null;function I(q,le){if(g=le.getViewerPose(m||d),T=le,g!==null){const _e=g.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let be=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let De=0;De<_e.length;De++){const ke=_e[De];let ze=null;if(S!==null)ze=S.getViewport(ke);else{const xe=v.getViewSubImage(y,ke);ze=xe.viewport,De===0&&(e.setRenderTargetTextures(_,xe.colorTexture,y.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(_))}let qe=oe[De];qe===void 0&&(qe=new qn,qe.layers.enable(De),qe.viewport=new Gt,oe[De]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ze.x,ze.y,ze.width,ze.height),De===0&&(C.matrix.copy(qe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(qe)}}for(let _e=0;_e<b.length;_e++){const be=R[_e],De=b[_e];be!==null&&De!==void 0&&De.update(be,le,m||d)}Y&&Y(q,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),T=null}const W=new Bg;W.setAnimationLoop(I),this.setAnimationLoop=function(q){Y=q},this.dispose=function(){}}}function jE(o,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Fg(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,b,R,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),g(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,N)):_.isMeshMatcapMaterial?(l(x,_),T(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),w(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?h(x,_,b,R):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Cn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Cn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const b=e.get(_).envMap;if(b&&(x.envMap.value=b,x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const R=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*R,n(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,b,R){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*b,x.scale.value=R*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,b){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const b=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function YE(o,e,n,r){let a={},l={},d=[];const c=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(b,R){const N=R.program;r.uniformBlockBinding(b,N)}function m(b,R){let N=a[b.id];N===void 0&&(T(b),N=g(b),a[b.id]=N,b.addEventListener("dispose",x));const B=R.program;r.updateUBOMapping(b,B);const F=e.render.frame;l[b.id]!==F&&(y(b),l[b.id]=F)}function g(b){const R=v();b.__bindingPointIndex=R;const N=o.createBuffer(),B=b.__size,F=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,B,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,N),N}function v(){for(let b=0;b<c;b++)if(d.indexOf(b)===-1)return d.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(b){const R=a[b.id],N=b.uniforms,B=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let F=0,k=N.length;F<k;F++){const oe=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,U=oe.length;C<U;C++){const ae=oe[C];if(S(ae,F,C,B)===!0){const fe=ae.__offset,ye=Array.isArray(ae.value)?ae.value:[ae.value];let G=0;for(let ee=0;ee<ye.length;ee++){const re=ye[ee],de=w(re);typeof re=="number"||typeof re=="boolean"?(ae.__data[0]=re,o.bufferSubData(o.UNIFORM_BUFFER,fe+G,ae.__data)):re.isMatrix3?(ae.__data[0]=re.elements[0],ae.__data[1]=re.elements[1],ae.__data[2]=re.elements[2],ae.__data[3]=0,ae.__data[4]=re.elements[3],ae.__data[5]=re.elements[4],ae.__data[6]=re.elements[5],ae.__data[7]=0,ae.__data[8]=re.elements[6],ae.__data[9]=re.elements[7],ae.__data[10]=re.elements[8],ae.__data[11]=0):(re.toArray(ae.__data,G),G+=de.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,fe,ae.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(b,R,N,B){const F=b.value,k=R+"_"+N;if(B[k]===void 0)return typeof F=="number"||typeof F=="boolean"?B[k]=F:B[k]=F.clone(),!0;{const oe=B[k];if(typeof F=="number"||typeof F=="boolean"){if(oe!==F)return B[k]=F,!0}else if(oe.equals(F)===!1)return oe.copy(F),!0}return!1}function T(b){const R=b.uniforms;let N=0;const B=16;for(let k=0,oe=R.length;k<oe;k++){const C=Array.isArray(R[k])?R[k]:[R[k]];for(let U=0,ae=C.length;U<ae;U++){const fe=C[U],ye=Array.isArray(fe.value)?fe.value:[fe.value];for(let G=0,ee=ye.length;G<ee;G++){const re=ye[G],de=w(re),X=N%B;X!==0&&B-X<de.boundary&&(N+=B-X),fe.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=N,N+=de.storage}}}const F=N%B;return F>0&&(N+=B-F),b.__size=N,b.__cache={},this}function w(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function x(b){const R=b.target;R.removeEventListener("dispose",x);const N=d.indexOf(R.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function _(){for(const b in a)o.deleteBuffer(a[b]);d=[],a={},l={}}return{bind:h,update:m,dispose:_}}class Yg{constructor(e={}){const{canvas:n=Gv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=d;const S=new Uint32Array(4),T=new Int32Array(4);let w=null,x=null;const _=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let N=!1,B=0,F=0,k=null,oe=-1,C=null;const U=new Gt,ae=new Gt;let fe=null;const ye=new Et(0);let G=0,ee=n.width,re=n.height,de=1,X=null,Z=null;const Y=new Gt(0,0,ee,re),I=new Gt(0,0,ee,re);let W=!1;const q=new zf;let le=!1,_e=!1,be=null;const De=new Ot,ke=new rt,ze=new H,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return k===null?de:1}let j=r;function st(P,K){for(let se=0;se<P.length;se++){const ue=P[se],ie=n.getContext(ue,K);if(ie!==null)return ie}return null}try{const P={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",E,!1),n.addEventListener("webglcontextcreationerror",te,!1),j===null){const K=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&K.shift(),j=st(K,P),j===null)throw st(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let je,it,He,At,at,D,A,Q,we,Ee,Te,Ze,Ie,Be,tt,ft,ve,xt,mt,ot,he,Ce,L,ge;function Ne(){je=new iM(j),it=new KS(j,je,e),je.init(it),Ce=new GE(j,je,it),He=new BE(j,je,it),At=new oM(j),at=new AE,D=new HE(j,je,He,at,it,Ce,At),A=new QS(R),Q=new nM(R),we=new hx(j,it),L=new qS(j,je,we,it),Ee=new rM(j,we,At,L),Te=new cM(j,Ee,we,At),mt=new uM(j,it,D),ft=new ZS(at),Ze=new TE(R,A,Q,je,it,L,ft),Ie=new jE(R,at),Be=new CE,tt=new UE(je,it),xt=new YS(R,A,Q,He,Te,y,h),ve=new zE(R,Te,it),ge=new YE(j,At,it,He),ot=new $S(j,je,At,it),he=new sM(j,je,At,it),At.programs=Ze.programs,R.capabilities=it,R.extensions=je,R.properties=at,R.renderLists=Be,R.shadowMap=ve,R.state=He,R.info=At}Ne();const Pe=new XE(R,j);this.xr=Pe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=je.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=je.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(P){P!==void 0&&(de=P,this.setSize(ee,re,!1))},this.getSize=function(P){return P.set(ee,re)},this.setSize=function(P,K,se=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=P,re=K,n.width=Math.floor(P*de),n.height=Math.floor(K*de),se===!0&&(n.style.width=P+"px",n.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(ee*de,re*de).floor()},this.setDrawingBufferSize=function(P,K,se){ee=P,re=K,de=se,n.width=Math.floor(P*se),n.height=Math.floor(K*se),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(Y)},this.setViewport=function(P,K,se,ue){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,K,se,ue),He.viewport(U.copy(Y).multiplyScalar(de).floor())},this.getScissor=function(P){return P.copy(I)},this.setScissor=function(P,K,se,ue){P.isVector4?I.set(P.x,P.y,P.z,P.w):I.set(P,K,se,ue),He.scissor(ae.copy(I).multiplyScalar(de).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(P){He.setScissorTest(W=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(P=!0,K=!0,se=!0){let ue=0;if(P){let ie=!1;if(k!==null){const Ve=k.texture.format;ie=Ve===Tg||Ve===wg||Ve===Eg}if(ie){const Ve=k.texture.type,nt=Ve===Er||Ve===xr||Ve===Of||Ve===Yr||Ve===Sg||Ve===Mg,ct=xt.getClearColor(),Xe=xt.getClearAlpha(),vt=ct.r,ht=ct.g,_t=ct.b;nt?(S[0]=vt,S[1]=ht,S[2]=_t,S[3]=Xe,j.clearBufferuiv(j.COLOR,0,S)):(T[0]=vt,T[1]=ht,T[2]=_t,T[3]=Xe,j.clearBufferiv(j.COLOR,0,T))}else ue|=j.COLOR_BUFFER_BIT}K&&(ue|=j.DEPTH_BUFFER_BIT),se&&(ue|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",E,!1),n.removeEventListener("webglcontextcreationerror",te,!1),Be.dispose(),tt.dispose(),at.dispose(),A.dispose(),Q.dispose(),Te.dispose(),L.dispose(),ge.dispose(),Ze.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",pt),Pe.removeEventListener("sessionend",Qe),be&&(be.dispose(),be=null),gt.stop()};function pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function E(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const P=At.autoReset,K=ve.enabled,se=ve.autoUpdate,ue=ve.needsUpdate,ie=ve.type;Ne(),At.autoReset=P,ve.enabled=K,ve.autoUpdate=se,ve.needsUpdate=ue,ve.type=ie}function te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ce(P){const K=P.target;K.removeEventListener("dispose",ce),Oe(K)}function Oe(P){Ge(P),at.remove(P)}function Ge(P){const K=at.get(P).programs;K!==void 0&&(K.forEach(function(se){Ze.releaseProgram(se)}),P.isShaderMaterial&&Ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,se,ue,ie,Ve){K===null&&(K=qe);const nt=ie.isMesh&&ie.matrixWorld.determinant()<0,ct=tu(P,K,se,ue,ie);He.setMaterial(ue,nt);let Xe=se.index,vt=1;if(ue.wireframe===!0){if(Xe=Ee.getWireframeAttribute(se),Xe===void 0)return;vt=2}const ht=se.drawRange,_t=se.attributes.position;let Ut=ht.start*vt,xn=(ht.start+ht.count)*vt;Ve!==null&&(Ut=Math.max(Ut,Ve.start*vt),xn=Math.min(xn,(Ve.start+Ve.count)*vt)),Xe!==null?(Ut=Math.max(Ut,0),xn=Math.min(xn,Xe.count)):_t!=null&&(Ut=Math.max(Ut,0),xn=Math.min(xn,_t.count));const Yt=xn-Ut;if(Yt<0||Yt===1/0)return;L.setup(ie,ue,ct,se,Xe);let Ln,Rt=ot;if(Xe!==null&&(Ln=we.get(Xe),Rt=he,Rt.setIndex(Ln)),ie.isMesh)ue.wireframe===!0?(He.setLineWidth(ue.wireframeLinewidth*xe()),Rt.setMode(j.LINES)):Rt.setMode(j.TRIANGLES);else if(ie.isLine){let yt=ue.linewidth;yt===void 0&&(yt=1),He.setLineWidth(yt*xe()),ie.isLineSegments?Rt.setMode(j.LINES):ie.isLineLoop?Rt.setMode(j.LINE_LOOP):Rt.setMode(j.LINE_STRIP)}else ie.isPoints?Rt.setMode(j.POINTS):ie.isSprite&&Rt.setMode(j.TRIANGLES);if(ie.isBatchedMesh)Rt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Rt.renderInstances(Ut,Yt,ie.count);else if(se.isInstancedBufferGeometry){const yt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,yn=Math.min(se.instanceCount,yt);Rt.renderInstances(Ut,Yt,yn)}else Rt.render(Ut,Yt)};function Ae(P,K,se){P.transparent===!0&&P.side===Ai&&P.forceSinglePass===!1?(P.side=Cn,P.needsUpdate=!0,ji(P,K,se),P.side=Tr,P.needsUpdate=!0,ji(P,K,se),P.side=Ai):ji(P,K,se)}this.compile=function(P,K,se=null){se===null&&(se=P),x=tt.get(se),x.init(),b.push(x),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),P!==se&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),x.setupLights(R._useLegacyLights);const ue=new Set;return P.traverse(function(ie){const Ve=ie.material;if(Ve)if(Array.isArray(Ve))for(let nt=0;nt<Ve.length;nt++){const ct=Ve[nt];Ae(ct,se,ie),ue.add(ct)}else Ae(Ve,se,ie),ue.add(Ve)}),b.pop(),x=null,ue},this.compileAsync=function(P,K,se=null){const ue=this.compile(P,K,se);return new Promise(ie=>{function Ve(){if(ue.forEach(function(nt){at.get(nt).currentProgram.isReady()&&ue.delete(nt)}),ue.size===0){ie(P);return}setTimeout(Ve,10)}je.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Ue=null;function $e(P){Ue&&Ue(P)}function pt(){gt.stop()}function Qe(){gt.start()}const gt=new Bg;gt.setAnimationLoop($e),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(P){Ue=P,Pe.setAnimationLoop(P),P===null?gt.stop():gt.start()},Pe.addEventListener("sessionstart",pt),Pe.addEventListener("sessionend",Qe),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(K),K=Pe.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,K,k),x=tt.get(P,b.length),x.init(),b.push(x),De.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q.setFromProjectionMatrix(De),_e=this.localClippingEnabled,le=ft.init(this.clippingPlanes,_e),w=Be.get(P,_.length),w.init(),_.push(w),Ct(P,K,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(X,Z),this.info.render.frame++,le===!0&&ft.beginShadows();const se=x.state.shadowsArray;if(ve.render(se,P,K),le===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(w,P),x.setupLights(R._useLegacyLights),K.isArrayCamera){const ue=K.cameras;for(let ie=0,Ve=ue.length;ie<Ve;ie++){const nt=ue[ie];un(w,P,nt,nt.viewport)}}else un(w,P,K);k!==null&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),P.isScene===!0&&P.onAfterRender(R,P,K),L.resetDefaultState(),oe=-1,C=null,b.pop(),b.length>0?x=b[b.length-1]:x=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function Ct(P,K,se,ue){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){ue&&ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(De);const nt=Te.update(P),ct=P.material;ct.visible&&w.push(P,nt,ct,se,ze.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){const nt=Te.update(P),ct=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ze.copy(P.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),ze.copy(nt.boundingSphere.center)),ze.applyMatrix4(P.matrixWorld).applyMatrix4(De)),Array.isArray(ct)){const Xe=nt.groups;for(let vt=0,ht=Xe.length;vt<ht;vt++){const _t=Xe[vt],Ut=ct[_t.materialIndex];Ut&&Ut.visible&&w.push(P,nt,Ut,se,ze.z,_t)}}else ct.visible&&w.push(P,nt,ct,se,ze.z,null)}}const Ve=P.children;for(let nt=0,ct=Ve.length;nt<ct;nt++)Ct(Ve[nt],K,se,ue)}function un(P,K,se,ue){const ie=P.opaque,Ve=P.transmissive,nt=P.transparent;x.setupLightsView(se),le===!0&&ft.setGlobalState(R.clippingPlanes,se),Ve.length>0&&$n(ie,Ve,K,se),ue&&He.viewport(U.copy(ue)),ie.length>0&&Kn(ie,K,se),Ve.length>0&&Kn(Ve,K,se),nt.length>0&&Kn(nt,K,se),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function $n(P,K,se,ue){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Ve=it.isWebGL2;be===null&&(be=new Kr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?ea:Er,minFilter:Jo,samples:Ve?4:0})),R.getDrawingBufferSize(ke),Ve?be.setSize(ke.x,ke.y):be.setSize(bf(ke.x),bf(ke.y));const nt=R.getRenderTarget();R.setRenderTarget(be),R.getClearColor(ye),G=R.getClearAlpha(),G<1&&R.setClearColor(16777215,.5),R.clear();const ct=R.toneMapping;R.toneMapping=Mr,Kn(P,se,ue),D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be);let Xe=!1;for(let vt=0,ht=K.length;vt<ht;vt++){const _t=K[vt],Ut=_t.object,xn=_t.geometry,Yt=_t.material,Ln=_t.group;if(Yt.side===Ai&&Ut.layers.test(ue.layers)){const Rt=Yt.side;Yt.side=Cn,Yt.needsUpdate=!0,xi(Ut,se,ue,xn,Yt,Ln),Yt.side=Rt,Yt.needsUpdate=!0,Xe=!0}}Xe===!0&&(D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be)),R.setRenderTarget(nt),R.setClearColor(ye,G),R.toneMapping=ct}function Kn(P,K,se){const ue=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Ve=P.length;ie<Ve;ie++){const nt=P[ie],ct=nt.object,Xe=nt.geometry,vt=ue===null?nt.material:ue,ht=nt.group;ct.layers.test(se.layers)&&xi(ct,K,se,Xe,vt,ht)}}function xi(P,K,se,ue,ie,Ve){P.onBeforeRender(R,K,se,ue,ie,Ve),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(R,K,se,ue,P,Ve),ie.transparent===!0&&ie.side===Ai&&ie.forceSinglePass===!1?(ie.side=Cn,ie.needsUpdate=!0,R.renderBufferDirect(se,K,ue,ie,P,Ve),ie.side=Tr,ie.needsUpdate=!0,R.renderBufferDirect(se,K,ue,ie,P,Ve),ie.side=Ai):R.renderBufferDirect(se,K,ue,ie,P,Ve),P.onAfterRender(R,K,se,ue,ie,Ve)}function ji(P,K,se){K.isScene!==!0&&(K=qe);const ue=at.get(P),ie=x.state.lights,Ve=x.state.shadowsArray,nt=ie.state.version,ct=Ze.getParameters(P,ie.state,Ve,K,se),Xe=Ze.getProgramCacheKey(ct);let vt=ue.programs;ue.environment=P.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(P.isMeshStandardMaterial?Q:A).get(P.envMap||ue.environment),vt===void 0&&(P.addEventListener("dispose",ce),vt=new Map,ue.programs=vt);let ht=vt.get(Xe);if(ht!==void 0){if(ue.currentProgram===ht&&ue.lightsStateVersion===nt)return sa(P,ct),ht}else ct.uniforms=Ze.getUniforms(P),P.onBuild(se,ct,R),P.onBeforeCompile(ct,R),ht=Ze.acquireProgram(ct,Xe),vt.set(Xe,ht),ue.uniforms=ct.uniforms;const _t=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(_t.clippingPlanes=ft.uniform),sa(P,ct),ue.needsLights=oa(P),ue.lightsStateVersion=nt,ue.needsLights&&(_t.ambientLightColor.value=ie.state.ambient,_t.lightProbe.value=ie.state.probe,_t.directionalLights.value=ie.state.directional,_t.directionalLightShadows.value=ie.state.directionalShadow,_t.spotLights.value=ie.state.spot,_t.spotLightShadows.value=ie.state.spotShadow,_t.rectAreaLights.value=ie.state.rectArea,_t.ltc_1.value=ie.state.rectAreaLTC1,_t.ltc_2.value=ie.state.rectAreaLTC2,_t.pointLights.value=ie.state.point,_t.pointLightShadows.value=ie.state.pointShadow,_t.hemisphereLights.value=ie.state.hemi,_t.directionalShadowMap.value=ie.state.directionalShadowMap,_t.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,_t.spotShadowMap.value=ie.state.spotShadowMap,_t.spotLightMatrix.value=ie.state.spotLightMatrix,_t.spotLightMap.value=ie.state.spotLightMap,_t.pointShadowMap.value=ie.state.pointShadowMap,_t.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=ht,ue.uniformsList=null,ht}function ra(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=Gl.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function sa(P,K){const se=at.get(P);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function tu(P,K,se,ue,ie){K.isScene!==!0&&(K=qe),D.resetTextureUnits();const Ve=K.fog,nt=ue.isMeshStandardMaterial?K.environment:null,ct=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Xi,Xe=(ue.isMeshStandardMaterial?Q:A).get(ue.envMap||nt),vt=ue.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ht=!!se.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),_t=!!se.morphAttributes.position,Ut=!!se.morphAttributes.normal,xn=!!se.morphAttributes.color;let Yt=Mr;ue.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const Ln=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Rt=Ln!==void 0?Ln.length:0,yt=at.get(ue),yn=x.state.lights;if(le===!0&&(_e===!0||P!==C)){const Dn=P===C&&ue.id===oe;ft.setState(ue,P,Dn)}let Bt=!1;ue.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==yn.state.version||yt.outputColorSpace!==ct||ie.isBatchedMesh&&yt.batching===!1||!ie.isBatchedMesh&&yt.batching===!0||ie.isInstancedMesh&&yt.instancing===!1||!ie.isInstancedMesh&&yt.instancing===!0||ie.isSkinnedMesh&&yt.skinning===!1||!ie.isSkinnedMesh&&yt.skinning===!0||ie.isInstancedMesh&&yt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&yt.instancingColor===!1&&ie.instanceColor!==null||yt.envMap!==Xe||ue.fog===!0&&yt.fog!==Ve||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ft.numPlanes||yt.numIntersection!==ft.numIntersection)||yt.vertexAlphas!==vt||yt.vertexTangents!==ht||yt.morphTargets!==_t||yt.morphNormals!==Ut||yt.morphColors!==xn||yt.toneMapping!==Yt||it.isWebGL2===!0&&yt.morphTargetsCount!==Rt)&&(Bt=!0):(Bt=!0,yt.__version=ue.version);let Ci=yt.currentProgram;Bt===!0&&(Ci=ji(ue,K,ie));let aa=!1,yi=!1,Yi=!1;const Xt=Ci.getUniforms(),Zn=yt.uniforms;if(He.useProgram(Ci.program)&&(aa=!0,yi=!0,Yi=!0),ue.id!==oe&&(oe=ue.id,yi=!0),aa||C!==P){Xt.setValue(j,"projectionMatrix",P.projectionMatrix),Xt.setValue(j,"viewMatrix",P.matrixWorldInverse);const Dn=Xt.map.cameraPosition;Dn!==void 0&&Dn.setValue(j,ze.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&Xt.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Xt.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,yi=!0,Yi=!0)}if(ie.isSkinnedMesh){Xt.setOptional(j,ie,"bindMatrix"),Xt.setOptional(j,ie,"bindMatrixInverse");const Dn=ie.skeleton;Dn&&(it.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Xt.setValue(j,"boneTexture",Dn.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Xt.setOptional(j,ie,"batchingTexture"),Xt.setValue(j,"batchingTexture",ie._matricesTexture,D));const so=se.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0&&it.isWebGL2===!0)&&mt.update(ie,se,Ci),(yi||yt.receiveShadow!==ie.receiveShadow)&&(yt.receiveShadow=ie.receiveShadow,Xt.setValue(j,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Zn.envMap.value=Xe,Zn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),yi&&(Xt.setValue(j,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&Ri(Zn,Yi),Ve&&ue.fog===!0&&Ie.refreshFogUniforms(Zn,Ve),Ie.refreshMaterialUniforms(Zn,ue,de,re,be),Gl.upload(j,ra(yt),Zn,D)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Gl.upload(j,ra(yt),Zn,D),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Xt.setValue(j,"center",ie.center),Xt.setValue(j,"modelViewMatrix",ie.modelViewMatrix),Xt.setValue(j,"normalMatrix",ie.normalMatrix),Xt.setValue(j,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Dn=ue.uniformsGroups;for(let Rr=0,la=Dn.length;Rr<la;Rr++)if(it.isWebGL2){const ns=Dn[Rr];ge.update(ns,Ci),ge.bind(ns,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Ri(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function oa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(P,K,se){at.get(P.texture).__webglTexture=K,at.get(P.depthTexture).__webglTexture=se;const ue=at.get(P);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=se===void 0,ue.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,K){const se=at.get(P);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,se=0){k=P,B=K,F=se;let ue=!0,ie=null,Ve=!1,nt=!1;if(P){const Xe=at.get(P);Xe.__useDefaultFramebuffer!==void 0?(He.bindFramebuffer(j.FRAMEBUFFER,null),ue=!1):Xe.__webglFramebuffer===void 0?D.setupRenderTarget(P):Xe.__hasExternalTextures&&D.rebindTextures(P,at.get(P.texture).__webglTexture,at.get(P.depthTexture).__webglTexture);const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(nt=!0);const ht=at.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ht[K])?ie=ht[K][se]:ie=ht[K],Ve=!0):it.isWebGL2&&P.samples>0&&D.useMultisampledRTT(P)===!1?ie=at.get(P).__webglMultisampledFramebuffer:Array.isArray(ht)?ie=ht[se]:ie=ht,U.copy(P.viewport),ae.copy(P.scissor),fe=P.scissorTest}else U.copy(Y).multiplyScalar(de).floor(),ae.copy(I).multiplyScalar(de).floor(),fe=W;if(He.bindFramebuffer(j.FRAMEBUFFER,ie)&&it.drawBuffers&&ue&&He.drawBuffers(P,ie),He.viewport(U),He.scissor(ae),He.setScissorTest(fe),Ve){const Xe=at.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xe.__webglTexture,se)}else if(nt){const Xe=at.get(P.texture),vt=K||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,se||0,vt)}oe=-1},this.readRenderTargetPixels=function(P,K,se,ue,ie,Ve,nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=at.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&nt!==void 0&&(ct=ct[nt]),ct){He.bindFramebuffer(j.FRAMEBUFFER,ct);try{const Xe=P.texture,vt=Xe.format,ht=Xe.type;if(vt!==vi&&Ce.convert(vt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _t=ht===ea&&(je.has("EXT_color_buffer_half_float")||it.isWebGL2&&je.has("EXT_color_buffer_float"));if(ht!==Er&&Ce.convert(ht)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ht===yr&&(it.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ue&&se>=0&&se<=P.height-ie&&j.readPixels(K,se,ue,ie,Ce.convert(vt),Ce.convert(ht),Ve)}finally{const Xe=k!==null?at.get(k).__webglFramebuffer:null;He.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(P,K,se=0){const ue=Math.pow(2,-se),ie=Math.floor(K.image.width*ue),Ve=Math.floor(K.image.height*ue);D.setTexture2D(K,0),j.copyTexSubImage2D(j.TEXTURE_2D,se,0,0,P.x,P.y,ie,Ve),He.unbindTexture()},this.copyTextureToTexture=function(P,K,se,ue=0){const ie=K.image.width,Ve=K.image.height,nt=Ce.convert(se.format),ct=Ce.convert(se.type);D.setTexture2D(se,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,se.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ue,P.x,P.y,ie,Ve,nt,ct,K.image.data):K.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ue,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,nt,K.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,ue,P.x,P.y,nt,ct,K.image),ue===0&&se.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(P,K,se,ue,ie=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=P.max.x-P.min.x+1,nt=P.max.y-P.min.y+1,ct=P.max.z-P.min.z+1,Xe=Ce.convert(ue.format),vt=Ce.convert(ue.type);let ht;if(ue.isData3DTexture)D.setTexture3D(ue,0),ht=j.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)D.setTexture2DArray(ue,0),ht=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ue.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ue.unpackAlignment);const _t=j.getParameter(j.UNPACK_ROW_LENGTH),Ut=j.getParameter(j.UNPACK_IMAGE_HEIGHT),xn=j.getParameter(j.UNPACK_SKIP_PIXELS),Yt=j.getParameter(j.UNPACK_SKIP_ROWS),Ln=j.getParameter(j.UNPACK_SKIP_IMAGES),Rt=se.isCompressedTexture?se.mipmaps[ie]:se.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Rt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Rt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,P.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,P.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?j.texSubImage3D(ht,ie,K.x,K.y,K.z,Ve,nt,ct,Xe,vt,Rt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(ht,ie,K.x,K.y,K.z,Ve,nt,ct,Xe,Rt.data)):j.texSubImage3D(ht,ie,K.x,K.y,K.z,Ve,nt,ct,Xe,vt,Rt),j.pixelStorei(j.UNPACK_ROW_LENGTH,_t),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ut),j.pixelStorei(j.UNPACK_SKIP_PIXELS,xn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Yt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ln),ie===0&&ue.generateMipmaps&&j.generateMipmap(ht),He.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){B=0,F=0,k=null,He.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ff?"display-p3":"srgb",n.unpackColorSpace=Dt.workingColorSpace===Ql?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?$r:Rg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$r?Jt:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class qE extends Yg{}qE.prototype.isWebGL1Renderer=!0;class Gf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=n}clone(){return new Gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $E extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class KE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new H;class Kl{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(e),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(e),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)En.fromBufferAttribute(this,n),En.transformDirection(e),this.setXYZ(n,En.x,En.y,En.z);return this}setX(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Vi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=Nt(n,this.array),r=Nt(r,this.array),a=Nt(a,this.array),l=Nt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return new zn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lf extends Ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vs;const Wo=new H,Ws=new H,Xs=new H,js=new rt,Xo=new rt,qg=new Ot,Dl=new H,jo=new H,Nl=new H,Vm=new rt,mf=new rt,Wm=new rt;class Xm extends en{constructor(e=new Lf){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new KE(n,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new Kl(r,3,0,!1)),Vs.setAttribute("uv",new Kl(r,2,3,!1))}this.geometry=Vs,this.material=e,this.center=new rt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),qg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const d=this.center;Ul(Dl.set(-.5,-.5,0),Xs,d,Ws,a,l),Ul(jo.set(.5,-.5,0),Xs,d,Ws,a,l),Ul(Nl.set(.5,.5,0),Xs,d,Ws,a,l),Vm.set(0,0),mf.set(1,0),Wm.set(1,1);let c=e.ray.intersectTriangle(Dl,jo,Nl,!1,Wo);if(c===null&&(Ul(jo.set(-.5,.5,0),Xs,d,Ws,a,l),mf.set(0,1),c=e.ray.intersectTriangle(Dl,Nl,jo,!1,Wo),c===null))return;const h=e.ray.origin.distanceTo(Wo);h<e.near||h>e.far||n.push({distance:h,point:Wo.clone(),uv:oi.getInterpolation(Wo,Dl,jo,Nl,Vm,mf,Wm,new rt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ul(o,e,n,r,a,l){js.subVectors(o,n).addScalar(.5).multiply(r),a!==void 0?(Xo.x=l*js.x-a*js.y,Xo.y=a*js.x+l*js.y):Xo.copy(js),o.copy(e),o.x+=Xo.x,o.y+=Xo.y,o.applyMatrix4(qg)}class jm extends zn{constructor(e,n,r,a=1){super(e,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ys=new Ot,Ym=new Ot,Il=[],qm=new es,ZE=new Ot,Yo=new Rn,qo=new ts;class QE extends Rn{constructor(e,n,r){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new jm(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,ZE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Ys),qm.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(qm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Ys),qo.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(qo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const r=this.matrixWorld,a=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(r),e.ray.intersectsSphere(qo)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,Ys),Ym.multiplyMatrices(r,Ys),Yo.matrixWorld=Ym,Yo.raycast(e,Il);for(let d=0,c=Il.length;d<c;d++){const h=Il[d];h.instanceId=l,h.object=this,n.push(h)}Il.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new jm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class $g extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $m=new H,Km=new H,Zm=new Ot,gf=new na,Ol=new ts;class JE extends en{constructor(e=new Pn,n=new $g){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)$m.fromBufferAttribute(n,a-1),Km.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=$m.distanceTo(Km);e.setAttribute("lineDistance",new dn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(a),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;Zm.copy(a).invert(),gf.copy(e.ray).applyMatrix4(Zm);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=new H,g=new H,v=new H,y=new H,S=this.isLineSegments?2:1,T=r.index,x=r.attributes.position;if(T!==null){const _=Math.max(0,d.start),b=Math.min(T.count,d.start+d.count);for(let R=_,N=b-1;R<N;R+=S){const B=T.getX(R),F=T.getX(R+1);if(m.fromBufferAttribute(x,B),g.fromBufferAttribute(x,F),gf.distanceSqToSegment(m,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const oe=e.ray.origin.distanceTo(y);oe<e.near||oe>e.far||n.push({distance:oe,point:v.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let R=_,N=b-1;R<N;R+=S){if(m.fromBufferAttribute(x,R),g.fromBufferAttribute(x,R+1),gf.distanceSqToSegment(m,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(y);F<e.near||F>e.far||n.push({distance:F,point:v.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class Kg extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new Ot,Df=new na,Fl=new ts,kl=new H;class e1 extends en{constructor(e=new Pn,n=new Kg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(a),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;Qm.copy(a).invert(),Df.copy(e.ray).applyMatrix4(Qm);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=r.index,v=r.attributes.position;if(m!==null){const y=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let T=y,w=S;T<w;T++){const x=m.getX(T);kl.fromBufferAttribute(v,x),Jm(kl,x,h,a,e,n,this)}}else{const y=Math.max(0,d.start),S=Math.min(v.count,d.start+d.count);for(let T=y,w=S;T<w;T++)kl.fromBufferAttribute(v,T),Jm(kl,T,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Jm(o,e,n,r,a,l,d){const c=Df.distanceSqToPoint(o);if(c<n){const h=new H;Df.closestPointToPoint(o,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:d})}}class eg extends bn{constructor(e,n,r,a,l,d,c,h,m){super(e,n,r,a,l,d,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vf extends Pn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],d=[];c(a),m(r),g(),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(l.slice(),3)),this.setAttribute("uv",new dn(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function c(b){const R=new H,N=new H,B=new H;for(let F=0;F<n.length;F+=3)S(n[F+0],R),S(n[F+1],N),S(n[F+2],B),h(R,N,B,b)}function h(b,R,N,B){const F=B+1,k=[];for(let oe=0;oe<=F;oe++){k[oe]=[];const C=b.clone().lerp(N,oe/F),U=R.clone().lerp(N,oe/F),ae=F-oe;for(let fe=0;fe<=ae;fe++)fe===0&&oe===F?k[oe][fe]=C:k[oe][fe]=C.clone().lerp(U,fe/ae)}for(let oe=0;oe<F;oe++)for(let C=0;C<2*(F-oe)-1;C++){const U=Math.floor(C/2);C%2===0?(y(k[oe][U+1]),y(k[oe+1][U]),y(k[oe][U])):(y(k[oe][U+1]),y(k[oe+1][U+1]),y(k[oe+1][U]))}}function m(b){const R=new H;for(let N=0;N<l.length;N+=3)R.x=l[N+0],R.y=l[N+1],R.z=l[N+2],R.normalize().multiplyScalar(b),l[N+0]=R.x,l[N+1]=R.y,l[N+2]=R.z}function g(){const b=new H;for(let R=0;R<l.length;R+=3){b.x=l[R+0],b.y=l[R+1],b.z=l[R+2];const N=x(b)/2/Math.PI+.5,B=_(b)/Math.PI+.5;d.push(N,1-B)}T(),v()}function v(){for(let b=0;b<d.length;b+=6){const R=d[b+0],N=d[b+2],B=d[b+4],F=Math.max(R,N,B),k=Math.min(R,N,B);F>.9&&k<.1&&(R<.2&&(d[b+0]+=1),N<.2&&(d[b+2]+=1),B<.2&&(d[b+4]+=1))}}function y(b){l.push(b.x,b.y,b.z)}function S(b,R){const N=b*3;R.x=e[N+0],R.y=e[N+1],R.z=e[N+2]}function T(){const b=new H,R=new H,N=new H,B=new H,F=new rt,k=new rt,oe=new rt;for(let C=0,U=0;C<l.length;C+=9,U+=6){b.set(l[C+0],l[C+1],l[C+2]),R.set(l[C+3],l[C+4],l[C+5]),N.set(l[C+6],l[C+7],l[C+8]),F.set(d[U+0],d[U+1]),k.set(d[U+2],d[U+3]),oe.set(d[U+4],d[U+5]),B.copy(b).add(R).add(N).divideScalar(3);const ae=x(B);w(F,U+0,b,ae),w(k,U+2,R,ae),w(oe,U+4,N,ae)}}function w(b,R,N,B){B<0&&b.x===1&&(d[R]=b.x-1),N.x===0&&N.z===0&&(d[R]=B/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.vertices,e.indices,e.radius,e.details)}}class Wf extends Vf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Wf(e.radius,e.detail)}}class Xf extends Pn{constructor(e=.5,n=1,r=32,a=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:d},r=Math.max(3,r),a=Math.max(1,a);const c=[],h=[],m=[],g=[];let v=e;const y=(n-e)/a,S=new H,T=new rt;for(let w=0;w<=a;w++){for(let x=0;x<=r;x++){const _=l+x/r*d;S.x=v*Math.cos(_),S.y=v*Math.sin(_),h.push(S.x,S.y,S.z),m.push(0,0,1),T.x=(S.x/n+1)/2,T.y=(S.y/n+1)/2,g.push(T.x,T.y)}v+=y}for(let w=0;w<a;w++){const x=w*(r+1);for(let _=0;_<r;_++){const b=_+x,R=b,N=b+r+1,B=b+r+2,F=b+1;c.push(R,N,F),c.push(N,B,F)}}this.setIndex(c),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zs extends Pn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,d=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:d,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(d+c,Math.PI);let m=0;const g=[],v=new H,y=new H,S=[],T=[],w=[],x=[];for(let _=0;_<=r;_++){const b=[],R=_/r;let N=0;_===0&&d===0?N=.5/n:_===r&&h===Math.PI&&(N=-.5/n);for(let B=0;B<=n;B++){const F=B/n;v.x=-e*Math.cos(a+F*l)*Math.sin(d+R*c),v.y=e*Math.cos(d+R*c),v.z=e*Math.sin(a+F*l)*Math.sin(d+R*c),T.push(v.x,v.y,v.z),y.copy(v).normalize(),w.push(y.x,y.y,y.z),x.push(F+N,1-R),b.push(m++)}g.push(b)}for(let _=0;_<r;_++)for(let b=0;b<n;b++){const R=g[_][b+1],N=g[_][b],B=g[_+1][b],F=g[_+1][b+1];(_!==0||d>0)&&S.push(R,N,F),(_!==r-1||h<Math.PI)&&S.push(N,B,F)}this.setIndex(S),this.setAttribute("position",new dn(T,3)),this.setAttribute("normal",new dn(w,3)),this.setAttribute("uv",new dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $o extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const tg={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class t1{constructor(e,n,r){const a=this;let l=!1,d=0,c=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){c++,l===!1&&a.onStart!==void 0&&a.onStart(g,d,c),l=!0},this.itemEnd=function(g){d++,a.onProgress!==void 0&&a.onProgress(g,d,c),d===c&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null}}}const n1=new t1;class jf{constructor(e){this.manager=e!==void 0?e:n1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,l){r.load(e,a,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jf.DEFAULT_MATERIAL_NAME="__DEFAULT";class i1 extends jf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=tg.get(e);if(d!==void 0)return l.manager.itemStart(e),setTimeout(function(){n&&n(d),l.manager.itemEnd(e)},0),d;const c=ta("img");function h(){g(),tg.add(e,this),n&&n(this),l.manager.itemEnd(e)}function m(v){g(),a&&a(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){c.removeEventListener("load",h,!1),c.removeEventListener("error",m,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class r1 extends jf{constructor(e){super(e)}load(e,n,r,a){const l=new bn,d=new i1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(c){l.image=c,l.needsUpdate=!0,n!==void 0&&n(l)},r,a),l}}class Yf extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class s1 extends Yf{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const _f=new Ot,ng=new H,ig=new H;class o1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),n.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ig),n.updateMatrixWorld(),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rg=new Ot,Ko=new H,vf=new H;class a1 extends o1{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ko.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ko),vf.copy(r.position),vf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(vf),r.updateMatrixWorld(),a.makeTranslation(-Ko.x,-Ko.y,-Ko.z),rg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rg)}}class l1 extends Yf{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u1 extends Yf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class c1{constructor(e,n,r=0,a=1/0){this.ray=new na(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return Nf(e,this,r,n),r.sort(sg),r}intersectObjects(e,n=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Nf(e[a],this,r,n);return r.sort(sg),r}}function sg(o,e){return o.distance-e.distance}function Nf(o,e,n,r){if(o.layers.test(e.layers)&&o.raycast(e,n),r===!0){const a=o.children;for(let l=0,d=a.length;l<d;l++)Nf(a[l],e,n,!0)}}class og{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(An(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);const ag={type:"change"},xf={type:"start"},lg={type:"end"},zl=new na,ug=new vr,f1=Math.cos(70*Hv.DEG2RAD);class d1 extends Jr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",tt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",tt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(ag),r.update(),l=a.NONE},this.update=(function(){const L=new H,ge=new Zr().setFromUnitVectors(e.up,new H(0,1,0)),Ne=ge.clone().invert(),Pe=new H,pe=new Zr,E=new H,te=2*Math.PI;return function(Oe=null){const Ge=r.object.position;L.copy(Ge).sub(r.target),L.applyQuaternion(ge),c.setFromVector3(L),r.autoRotate&&l===a.NONE&&fe(U(Oe)),r.enableDamping?(c.theta+=h.theta*r.dampingFactor,c.phi+=h.phi*r.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let Ae=r.minAzimuthAngle,Ue=r.maxAzimuthAngle;isFinite(Ae)&&isFinite(Ue)&&(Ae<-Math.PI?Ae+=te:Ae>Math.PI&&(Ae-=te),Ue<-Math.PI?Ue+=te:Ue>Math.PI&&(Ue-=te),Ae<=Ue?c.theta=Math.max(Ae,Math.min(Ue,c.theta)):c.theta=c.theta>(Ae+Ue)/2?Math.max(Ae,c.theta):Math.min(Ue,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&F||r.object.isOrthographicCamera?c.radius=Y(c.radius):c.radius=Y(c.radius*m),L.setFromSpherical(c),L.applyQuaternion(Ne),Ge.copy(r.target).add(L),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let $e=!1;if(r.zoomToCursor&&F){let pt=null;if(r.object.isPerspectiveCamera){const Qe=L.length();pt=Y(Qe*m);const gt=Qe-pt;r.object.position.addScaledVector(N,gt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Qe=new H(B.x,B.y,0);Qe.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),$e=!0;const gt=new H(B.x,B.y,0);gt.unproject(r.object),r.object.position.sub(gt).add(Qe),r.object.updateMatrixWorld(),pt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;pt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(pt).add(r.object.position):(zl.origin.copy(r.object.position),zl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(zl.direction))<f1?e.lookAt(r.target):(ug.setFromNormalAndCoplanarPoint(r.object.up,r.target),zl.intersectPlane(ug,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),$e=!0);return m=1,F=!1,$e||Pe.distanceToSquared(r.object.position)>d||8*(1-pe.dot(r.object.quaternion))>d||E.distanceToSquared(r.target)>0?(r.dispatchEvent(ag),Pe.copy(r.object.position),pe.copy(r.object.quaternion),E.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",xt),r.domElement.removeEventListener("pointerdown",D),r.domElement.removeEventListener("pointercancel",Q),r.domElement.removeEventListener("wheel",Te),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",Q),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",tt),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const d=1e-6,c=new og,h=new og;let m=1;const g=new H,v=new rt,y=new rt,S=new rt,T=new rt,w=new rt,x=new rt,_=new rt,b=new rt,R=new rt,N=new H,B=new rt;let F=!1;const k=[],oe={};let C=!1;function U(L){return L!==null?2*Math.PI/60*r.autoRotateSpeed*L:2*Math.PI/60/60*r.autoRotateSpeed}function ae(L){const ge=Math.abs(L*.01);return Math.pow(.95,r.zoomSpeed*ge)}function fe(L){h.theta-=L}function ye(L){h.phi-=L}const G=(function(){const L=new H;return function(Ne,Pe){L.setFromMatrixColumn(Pe,0),L.multiplyScalar(-Ne),g.add(L)}})(),ee=(function(){const L=new H;return function(Ne,Pe){r.screenSpacePanning===!0?L.setFromMatrixColumn(Pe,1):(L.setFromMatrixColumn(Pe,0),L.crossVectors(r.object.up,L)),L.multiplyScalar(Ne),g.add(L)}})(),re=(function(){const L=new H;return function(Ne,Pe){const pe=r.domElement;if(r.object.isPerspectiveCamera){const E=r.object.position;L.copy(E).sub(r.target);let te=L.length();te*=Math.tan(r.object.fov/2*Math.PI/180),G(2*Ne*te/pe.clientHeight,r.object.matrix),ee(2*Pe*te/pe.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(G(Ne*(r.object.right-r.object.left)/r.object.zoom/pe.clientWidth,r.object.matrix),ee(Pe*(r.object.top-r.object.bottom)/r.object.zoom/pe.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function de(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function X(L){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Z(L,ge){if(!r.zoomToCursor)return;F=!0;const Ne=r.domElement.getBoundingClientRect(),Pe=L-Ne.left,pe=ge-Ne.top,E=Ne.width,te=Ne.height;B.x=Pe/E*2-1,B.y=-(pe/te)*2+1,N.set(B.x,B.y,1).unproject(r.object).sub(r.object.position).normalize()}function Y(L){return Math.max(r.minDistance,Math.min(r.maxDistance,L))}function I(L){v.set(L.clientX,L.clientY)}function W(L){Z(L.clientX,L.clientX),_.set(L.clientX,L.clientY)}function q(L){T.set(L.clientX,L.clientY)}function le(L){y.set(L.clientX,L.clientY),S.subVectors(y,v).multiplyScalar(r.rotateSpeed);const ge=r.domElement;fe(2*Math.PI*S.x/ge.clientHeight),ye(2*Math.PI*S.y/ge.clientHeight),v.copy(y),r.update()}function _e(L){b.set(L.clientX,L.clientY),R.subVectors(b,_),R.y>0?de(ae(R.y)):R.y<0&&X(ae(R.y)),_.copy(b),r.update()}function be(L){w.set(L.clientX,L.clientY),x.subVectors(w,T).multiplyScalar(r.panSpeed),re(x.x,x.y),T.copy(w),r.update()}function De(L){Z(L.clientX,L.clientY),L.deltaY<0?X(ae(L.deltaY)):L.deltaY>0&&de(ae(L.deltaY)),r.update()}function ke(L){let ge=!1;switch(L.code){case r.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?ye(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,r.keyPanSpeed),ge=!0;break;case r.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?ye(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,-r.keyPanSpeed),ge=!0;break;case r.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?fe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(r.keyPanSpeed,0),ge=!0;break;case r.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?fe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(-r.keyPanSpeed,0),ge=!0;break}ge&&(L.preventDefault(),r.update())}function ze(L){if(k.length===1)v.set(L.pageX,L.pageY);else{const ge=Ce(L),Ne=.5*(L.pageX+ge.x),Pe=.5*(L.pageY+ge.y);v.set(Ne,Pe)}}function qe(L){if(k.length===1)T.set(L.pageX,L.pageY);else{const ge=Ce(L),Ne=.5*(L.pageX+ge.x),Pe=.5*(L.pageY+ge.y);T.set(Ne,Pe)}}function xe(L){const ge=Ce(L),Ne=L.pageX-ge.x,Pe=L.pageY-ge.y,pe=Math.sqrt(Ne*Ne+Pe*Pe);_.set(0,pe)}function j(L){r.enableZoom&&xe(L),r.enablePan&&qe(L)}function st(L){r.enableZoom&&xe(L),r.enableRotate&&ze(L)}function je(L){if(k.length==1)y.set(L.pageX,L.pageY);else{const Ne=Ce(L),Pe=.5*(L.pageX+Ne.x),pe=.5*(L.pageY+Ne.y);y.set(Pe,pe)}S.subVectors(y,v).multiplyScalar(r.rotateSpeed);const ge=r.domElement;fe(2*Math.PI*S.x/ge.clientHeight),ye(2*Math.PI*S.y/ge.clientHeight),v.copy(y)}function it(L){if(k.length===1)w.set(L.pageX,L.pageY);else{const ge=Ce(L),Ne=.5*(L.pageX+ge.x),Pe=.5*(L.pageY+ge.y);w.set(Ne,Pe)}x.subVectors(w,T).multiplyScalar(r.panSpeed),re(x.x,x.y),T.copy(w)}function He(L){const ge=Ce(L),Ne=L.pageX-ge.x,Pe=L.pageY-ge.y,pe=Math.sqrt(Ne*Ne+Pe*Pe);b.set(0,pe),R.set(0,Math.pow(b.y/_.y,r.zoomSpeed)),de(R.y),_.copy(b);const E=(L.pageX+ge.x)*.5,te=(L.pageY+ge.y)*.5;Z(E,te)}function At(L){r.enableZoom&&He(L),r.enablePan&&it(L)}function at(L){r.enableZoom&&He(L),r.enableRotate&&je(L)}function D(L){r.enabled!==!1&&(k.length===0&&(r.domElement.setPointerCapture(L.pointerId),r.domElement.addEventListener("pointermove",A),r.domElement.addEventListener("pointerup",Q)),mt(L),L.pointerType==="touch"?ft(L):we(L))}function A(L){r.enabled!==!1&&(L.pointerType==="touch"?ve(L):Ee(L))}function Q(L){ot(L),k.length===0&&(r.domElement.releasePointerCapture(L.pointerId),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",Q)),r.dispatchEvent(lg),l=a.NONE}function we(L){let ge;switch(L.button){case 0:ge=r.mouseButtons.LEFT;break;case 1:ge=r.mouseButtons.MIDDLE;break;case 2:ge=r.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case Ts.DOLLY:if(r.enableZoom===!1)return;W(L),l=a.DOLLY;break;case Ts.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enablePan===!1)return;q(L),l=a.PAN}else{if(r.enableRotate===!1)return;I(L),l=a.ROTATE}break;case Ts.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(r.enableRotate===!1)return;I(L),l=a.ROTATE}else{if(r.enablePan===!1)return;q(L),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(xf)}function Ee(L){switch(l){case a.ROTATE:if(r.enableRotate===!1)return;le(L);break;case a.DOLLY:if(r.enableZoom===!1)return;_e(L);break;case a.PAN:if(r.enablePan===!1)return;be(L);break}}function Te(L){r.enabled===!1||r.enableZoom===!1||l!==a.NONE||(L.preventDefault(),r.dispatchEvent(xf),De(Ze(L)),r.dispatchEvent(lg))}function Ze(L){const ge=L.deltaMode,Ne={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ge){case 1:Ne.deltaY*=16;break;case 2:Ne.deltaY*=100;break}return L.ctrlKey&&!C&&(Ne.deltaY*=10),Ne}function Ie(L){L.key==="Control"&&(C=!0,document.addEventListener("keyup",Be,{passive:!0,capture:!0}))}function Be(L){L.key==="Control"&&(C=!1,document.removeEventListener("keyup",Be,{passive:!0,capture:!0}))}function tt(L){r.enabled===!1||r.enablePan===!1||ke(L)}function ft(L){switch(he(L),k.length){case 1:switch(r.touches.ONE){case As.ROTATE:if(r.enableRotate===!1)return;ze(L),l=a.TOUCH_ROTATE;break;case As.PAN:if(r.enablePan===!1)return;qe(L),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(r.touches.TWO){case As.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;j(L),l=a.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;st(L),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(xf)}function ve(L){switch(he(L),l){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;je(L),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;it(L),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;At(L),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;at(L),r.update();break;default:l=a.NONE}}function xt(L){r.enabled!==!1&&L.preventDefault()}function mt(L){k.push(L.pointerId)}function ot(L){delete oe[L.pointerId];for(let ge=0;ge<k.length;ge++)if(k[ge]==L.pointerId){k.splice(ge,1);return}}function he(L){let ge=oe[L.pointerId];ge===void 0&&(ge=new rt,oe[L.pointerId]=ge),ge.set(L.pageX,L.pageY)}function Ce(L){const ge=L.pointerId===k[0]?k[1]:k[0];return oe[ge]}r.domElement.addEventListener("contextmenu",xt),r.domElement.addEventListener("pointerdown",D),r.domElement.addEventListener("pointercancel",Q),r.domElement.addEventListener("wheel",Te,{passive:!1}),document.addEventListener("keydown",Ie,{passive:!0,capture:!0}),this.update()}}/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),rn=(o,e)=>{const n=St.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:c="",children:h,...m},g)=>St.createElement("svg",{ref:g,...h1,width:a,height:a,stroke:r,strokeWidth:d?Number(l)*24/Number(a):l,className:["lucide",`lucide-${p1(o)}`,c].join(" "),...m},[...e.map(([v,y])=>St.createElement(v,y)),...Array.isArray(h)?h:[h]]));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=rn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=rn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=rn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=rn("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=rn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=rn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=rn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=rn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=rn("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=rn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=rn("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=rn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=rn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=rn("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=rn("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=rn("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=rn("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=rn("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=rn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),P1=({size:o=24,className:e=""})=>me.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:me.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 0.467 4.212l-1.315 2.97c-.966 2.05-2.73 3.32-5.46 3.32h-1.9l-.718 3.51h-1.39c-.536 0-.964.44-.856.965l-.707 3.55z"})}),L1=({size:o=24,className:e=""})=>me.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[me.jsx("circle",{cx:"12",cy:"12",r:"10"}),me.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),me.jsx("path",{d:"M12 18V6"})]}),Yn="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/textures%20updated",hg="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_X01.mp3",pg="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_journey_01.mp3",jn=(o,e,n,r,a,l,d)=>({name:o,radius:e,distance:n,speed:r,color:a,textureUrl:`${Yn}/${o.toLowerCase()}.jpg`,desc:l,facts:d,type:"Moon"}),Zo=[{id:"sun",name:"Sun",type:"Star",radius:35,distance:0,speed:0,color:"#FFD700",textureType:"star",textureUrl:`${Yn}/sun.jpg`,stats:{temp:"5,500°C",orbit:"N/A",gravity:"274 m/s²",day:"25 Days"},comp:["Hydrogen","Helium"],desc:"The star at the center of our Solar System.",narration:"The Sun is the colossal powerhouse at the center of our Solar System, a nearly perfect sphere of hot plasma that dictates the orbits of every planet. It accounts for a staggering 99.86% of the total mass of the entire system. Its core is a nuclear fusion reactor, converting 600 million tons of hydrogen into helium every single second.",facts:["Accounts for 99.86% of solar system mass.","Light takes 8 mins to reach Earth.","Core is ~15 million degrees Celsius.","Will eventually become a Red Giant.","Magnetic field flips every 11 years."]},{id:"mercury",name:"Mercury",type:"Planet",radius:2.8,distance:55,speed:.015,color:"#999999",textureType:"mercury",textureUrl:`${Yn}/mercury.jpg`,stats:{temp:"167°C",orbit:"88 Days",gravity:"3.7 m/s²",day:"59 Days"},comp:["Iron","Sodium"],desc:"The smallest planet in the Solar System.",narration:"Mercury is the smallest planet in our solar system and the closest to the Sun. Despite its proximity, it is not the hottest planet. It possesses a dark, cratered surface reminiscent of Earth's Moon. Uniquely, Mercury has an enormous iron core making up 85% of its radius.",facts:["Shrinks as it cools, creating cliffs.","Temp swings from 430°C to -180°C.","No atmosphere to trap heat.","Day lasts 176 Earth days.","Most cratered planet."]},{id:"venus",name:"Venus",type:"Planet",radius:6.5,distance:80,speed:.012,color:"#E3BB76",textureType:"venus",textureUrl:`${Yn}/venus.jpg`,stats:{temp:"464°C",orbit:"225 Days",gravity:"8.87 m/s²",day:"243 Days"},comp:["CO2","Nitrogen"],desc:"Hottest planet due to greenhouse effect.",narration:"Venus is often called Earth's twin due to similar size, but it is a hellish world with a thick, toxic atmosphere of carbon dioxide. This creates a runaway greenhouse effect, making it the hottest planet. Unusually, Venus rotates backwards, so the sun rises in the west.",facts:["Hottest planet in the solar system.","Spins backwards (retrograde).","Day is longer than its year.","Pressure is 90x Earth's.","Named after goddess of love."]},{id:"earth",name:"Earth",type:"Planet",radius:7,distance:110,speed:.01,color:"#1C4E80",textureType:"earth",textureUrl:`${Yn}/earth.jpg`,stats:{temp:"15°C",orbit:"365 Days",gravity:"9.8 m/s²",day:"24 Hours"},comp:["Nitrogen","Oxygen"],desc:"The only known world to harbor life.",narration:"Earth is our home and the only known celestial body confirmed to harbor life. Sitting in the 'Goldilocks zone,' it has liquid water covering 70% of the surface. Its magnetic field protects the atmosphere from solar radiation. Earth is dynamically active with tectonic plates.",facts:["Only place known to host life.","Densest planet in the system.","70% surface is water.","Protected by magnetic field.","Not a perfect sphere."],moons:[jn("Moon",1.9,14,.03,"#E0E0E0","Earth's only natural satellite.",["Fifth largest moon in the solar system.","Causes tides on Earth.","Drifting away 3.8cm per year."])]},{id:"mars",name:"Mars",type:"Planet",radius:3.8,distance:150,speed:.008,color:"#D14A28",textureType:"mars",textureUrl:`${Yn}/mars.jpg`,stats:{temp:"-65°C",orbit:"687 Days",gravity:"3.71 m/s²",day:"24.6 Hours"},comp:["CO2","Argon"],desc:"The Red Planet.",narration:"Mars, the Red Planet, gets its color from iron oxide rust. It is a dusty, cold desert world but holds geological wonders like Olympus Mons, the largest volcano in the solar system. Ancient river valleys suggest it was once warmer and wetter, potentially capable of supporting life.",facts:["Home to largest volcano, Olympus Mons.","Has largest dust storms.","Red color is rust.","Has two small moons.","Valles Marineris spans 4000km."],moons:[jn("Phobos",.9,6,.05,"#887766","The larger and inner moon of Mars.",["Orbits closer to its planet than any other moon.","Doomed to crash into Mars in 50M years."]),jn("Deimos",.6,10,.03,"#776655","The smaller outer moon of Mars.",["Smooth surface due to regolith.","Likely a captured asteroid."])]},{id:"jupiter",name:"Jupiter",type:"Gas Giant",radius:22,distance:220,speed:.004,color:"#C88B3A",textureType:"jupiter",textureUrl:`${Yn}/jupiter.jpg`,stats:{temp:"-110°C",orbit:"12 Years",gravity:"24.79 m/s²",day:"10 Hours"},comp:["Hydrogen","Helium"],desc:"The largest planet.",narration:"Jupiter is a gas giant more massive than all other planets combined. Its iconic Great Red Spot is a storm larger than Earth raging for centuries. Jupiter acts as a cosmic vacuum cleaner, attracting debris with its gravity. It rotates incredibly fast, creating a day of only 10 hours.",facts:["Great Red Spot is a giant storm.","Shortest day of all planets.","Mass is 2.5x all others combined.","Has faint rings.","Strongest magnetic field."],rings:{inner:22.8,outer:23.5,color:10518624,opacity:.1},moons:[jn("Io",2.2,26,.04,"#F8F189","The most volcanically active body in the solar system.",["Over 400 active volcanoes.","Surface paints itself with sulfur."]),jn("Europa",1.9,30,.035,"#C6D2D8","An icy moon with a subsurface ocean.",["Smoothest surface in solar system.","Potential for life in its ocean."]),jn("Ganymede",3.2,36,.03,"#968E84","The largest moon in the solar system.",["Larger than Mercury.","Only moon with its own magnetic field."]),jn("Callisto",2.9,42,.02,"#6E665A","The most cratered object in the solar system.",["Oldest landscape in the system.","Geologically dead."])]},{id:"saturn",name:"Saturn",type:"Gas Giant",radius:18,distance:300,speed:.003,color:"#E4D5B6",textureType:"saturn",textureUrl:`${Yn}/saturn.jpg`,rings:{inner:24,outer:42,color:13616035,opacity:.9},stats:{temp:"-140°C",orbit:"29 Years",gravity:"10.44 m/s²",day:"10.7 Hours"},comp:["Hydrogen","Helium"],desc:"Famous for its rings.",narration:"Saturn is the jewel of the solar system, known for its spectacular icy rings. It is the only planet less dense than water; it would float in a giant bathtub. A hexagonal storm persists at its north pole. Its moon Titan has a thick atmosphere and liquid methane lakes.",facts:["Rings are made of ice.","Least dense planet (floats).","Hexagonal storm at north pole."],moons:[jn("Titan",3,48,.02,"#E8D586","The only moon with a thick atmosphere.",["Has lakes of liquid methane.","Atmosphere is mostly Nitrogen.","Larger than Mercury."]),jn("Rhea",1.2,28,.03,"#B0B0B0","Saturn's second largest moon.",["Composed of 75% ice.","May have a tenuous ring system."]),jn("Enceladus",.8,22,.04,"#ffffff","An icy moon with water geysers.",["Tiger stripes feature geysers.","Ocean beneath the ice.","Most reflective body in solar system."])]},{id:"uranus",name:"Uranus",type:"Ice Giant",radius:12,distance:380,speed:.002,color:"#93B8BE",textureType:"uranus",tilt:Math.PI/2,textureUrl:`${Yn}/uranus.jpg`,rings:{inner:14,outer:18,color:8956603,opacity:.2},stats:{temp:"-195°C",orbit:"84 Years",gravity:"8.69 m/s²",day:"17 Hours"},comp:["Hydrogen","Ices"],desc:"Rotates on its side.",narration:"Uranus is an ice giant that rotates on its side at a 98-degree angle, likely due to a massive collision. This causes extreme seasonal changes, with poles seeing 42 years of sunlight then darkness. Its atmosphere contains methane, giving it a pale blue-green color.",facts:["Rotates on its side.","Coldest planetary atmosphere.","Retrograde rotation."],moons:[jn("Titania",1.1,20,.03,"#D0C0B0","The largest moon of Uranus.",["Covered in canyons and scarps.","Discovered in 1787."]),jn("Oberon",1,24,.025,"#a09080","The second largest moon of Uranus.",["Old, heavily cratered surface.","Named after King of Fairies."])]},{id:"neptune",name:"Neptune",type:"Ice Giant",radius:11.5,distance:450,speed:.001,color:"#5B80ED",textureType:"neptune",textureUrl:`${Yn}/neptune.jpg`,stats:{temp:"-200°C",orbit:"165 Years",gravity:"11.15 m/s²",day:"16 Hours"},comp:["Hydrogen","Ices"],desc:"The windiest planet.",narration:"Neptune is a dark, cold world whipped by supersonic winds reaching 2,000 km/h. It was the first planet predicted by mathematics before observation. Its moon Triton orbits backwards and spews nitrogen geysers, suggesting it was captured from the Kuiper Belt.",facts:["Supersonic winds (2000 km/h).","Predicted by math first.","Blue color from methane."],moons:[jn("Triton",1.8,18,.03,"#E0D0C0","The largest moon of Neptune.",["Orbits in retrograde (backwards).","Active nitrogen geysers.","Captured Kuiper Belt object."])]},{id:"pluto",name:"Pluto",type:"Dwarf Planet",radius:1.8,distance:585,speed:8e-4,color:"#D1C2A5",textureType:"rocky",textureUrl:`${Yn}/pluto.jpg`,stats:{temp:"-229°C",orbit:"248 Years",gravity:"0.62 m/s²",day:"153 Hours"},comp:["Nitrogen","Methane"],desc:"The famous dwarf planet.",narration:"Pluto, once considered the ninth planet, is a dwarf planet in the Kuiper belt. It has a heart-shaped glacier named Tombaugh Regio made of nitrogen ice. Pluto orbits the sun in a highly elliptical and tilted path, sometimes coming closer to the Sun than Neptune.",facts:["Reclassified as dwarf planet in 2006.","Has a heart-shaped glacier.","Atmosphere freezes."],moons:[{name:"Charon",radius:.9,distance:5,speed:.01,color:"#A0A0A0",desc:"Pluto's massive moon.",facts:["Half the size of Pluto.","Tidally locked (face each other)."]}]},{id:"haumea",name:"Haumea",type:"Dwarf Planet",radius:2,distance:645,speed:6e-4,color:"#E0E0E0",textureType:"rocky",textureUrl:`${Yn}/haumea.jpg`,scale:[1.9,.9,.5],stats:{temp:"-241°C",orbit:"284 Years",gravity:"0.4 m/s²",day:"4 Hours"},comp:["Rock","Ice"],desc:"The egg-shaped spinner.",narration:"Haumea is a unique dwarf planet that spins so fast—a day is only 4 hours long—that it has been pulled into the shape of a flattened egg or rugby ball. It is covered in crystalline water ice and has two moons and a ring system.",facts:["Spins once every 4 hours.","Shaped like an egg.","Covered in crystalline ice."]},{id:"sedna",name:"Sedna",type:"Dwarf Planet",radius:1.5,distance:750,speed:4e-4,color:"#CD5C5C",textureType:"rocky",textureUrl:`${Yn}/sedna.jpg`,stats:{temp:"-240°C",orbit:"11,400 Years",gravity:"0.4 m/s²",day:"10 Hours"},comp:["Methane","Nitrogen"],desc:"The distant wanderer.",narration:"Sedna is a distant dwarf planet in the outer reaches of the Solar System. It has an exceptionally long and elongated orbit, taking over 11,000 years to circle the Sun. Its surface is one of the reddest in the solar system.",facts:["Takes 11,400 years to orbit.","Extremely distant.","Reddest object in system."]}];function D1(){const o=St.useRef(null),[e,n]=St.useState(!0),[r,a]=St.useState(null),[l,d]=St.useState(!1),[c,h]=St.useState(!1),[m,g]=St.useState(!1),[v,y]=St.useState(!0),[S,T]=St.useState(!1),[w,x]=St.useState(!1),[_,b]=St.useState(!1),[R,N]=St.useState(!1),[B,F]=St.useState(!1),[k,oe]=St.useState(!0),C=St.useRef(null),U=St.useRef(null),ae=St.useRef(null),fe=St.useRef(null),ye=St.useRef(null),G=St.useRef(null),ee=St.useRef([]),re=St.useRef([]),de=St.useRef(null),X=St.useRef(-1),Z=St.useRef(!1),Y=St.useRef(null),I=St.useRef(new c1),W=St.useRef(new rt),q=St.useRef({x:0,y:0,time:0});St.useEffect(()=>{const xe=document.createElement("link");return xe.href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Mono:wght@400;700&display=swap",xe.rel="stylesheet",document.head.appendChild(xe),()=>document.head.removeChild(xe)},[]);const le=()=>{const xe="0x62737ef56dAadebA2f2c336Bc547A21B18b37426",j=document.createElement("textarea");j.value=xe,document.body.appendChild(j),j.select();try{document.execCommand("copy"),F(!0),setTimeout(()=>F(!1),2e3)}catch(st){console.error("Copy failed",st)}document.body.removeChild(j)},_e=(xe,j)=>{if(xe<0||xe>=Zo.length)return;const st=ee.current.find(D=>D.userData&&D.userData.id===xe)||ee.current[xe];if(!st)return;let je=st.mesh,it=st.data;j!=null&&st.moons&&st.moons[j]?(je=st.moons[j].mesh,it=st.moons[j].data,a({...it,isMoon:!0,parentName:st.data.name,parentId:st.data.id})):a(it);const At=(it.radius||2)*4+10,at=new H;if(je.getWorldPosition(at),G.current&&fe.current){const D=at.clone().add(new H(At,At*.5,At));fe.current.position.copy(D),G.current.target.copy(at),G.current.update(),Y.current={mesh:je,lastPos:at.clone()}}},be=xe=>{if(Z.current){if(xe>=Zo.length){d(!1),Z.current=!1;return}X.current=xe,_e(xe),de.current&&clearTimeout(de.current),de.current=setTimeout(()=>{be(xe+1)},1e4)}},De=()=>{a(null),d(!1),Z.current=!1,Y.current=null,de.current&&clearTimeout(de.current),G.current&&fe.current&&(G.current.target.set(0,0,0),fe.current.position.set(0,150,600),G.current.update())},ke=()=>{d(!0),Z.current=!0,be(0)},ze=()=>{oe(!1),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{oe(!0)},1e4)};St.useEffect(()=>{const xe=["mousemove","mousedown","keydown","touchstart"];return xe.forEach(j=>window.addEventListener(j,ze)),ze(),()=>xe.forEach(j=>window.removeEventListener(j,ze))},[]),St.useEffect(()=>{const xe=()=>{if(U.current&&U.current.paused&&!S){const j=l?pg:hg;U.current.src!==j&&(U.current.src=j),U.current.play().catch(()=>{})}};return window.addEventListener("click",xe),()=>window.removeEventListener("click",xe)},[S,l]),St.useEffect(()=>{U.current||(U.current=new Audio,U.current.loop=!0,U.current.volume=.8);const xe=U.current;if(S){xe.pause();return}const j=st=>{xe.src!==st?(xe.src=st,xe.play().catch(()=>{})):xe.paused&&xe.play().catch(()=>{})};j(l?pg:hg)},[l,S]);const qe=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then(()=>x(!1)).catch(()=>{}):document.documentElement.requestFullscreen().then(()=>x(!0)).catch(()=>{})};return St.useEffect(()=>{const xe=()=>x(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",xe),()=>document.removeEventListener("fullscreenchange",xe)},[]),St.useEffect(()=>{const xe=new $E;xe.background=new Et(0),xe.fog=new Gf(0,8e-4),ae.current=xe;const j=new qn(45,window.innerWidth/window.innerHeight,.1,1e4);j.position.set(0,150,600),fe.current=j;const st=new Yg({antialias:!0,alpha:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});st.setSize(window.innerWidth,window.innerHeight),st.setPixelRatio(Math.min(window.devicePixelRatio,2)),st.toneMapping=vg,st.toneMappingExposure=2.2,o.current.appendChild(st.domElement),ye.current=st;const je=new d1(j,st.domElement);je.enableDamping=!0,je.dampingFactor=.05,je.minDistance=5,je.maxDistance=4e3,G.current=je,xe.add(new s1(16777184,0,.15)),xe.add(new u1(4210752,.8));const it=new l1(16777215,10,0,0);xe.add(it);function He(he,Ce,L=!1){const ge=["earth","mercury","venus","mars","jupiter","saturn","uranus","neptune","rocky","atmosphere","galaxy"].includes(he),Ne=2048,Pe=ge?1024:2048,pe=document.createElement("canvas");pe.width=Ne,pe.height=Pe;const E=pe.getContext("2d"),te=Ne,ce=Pe,Oe=new Et(Ce),Ge=(Ae,Ue,$e="source-over",pt=null)=>{const Qe=300*Ae;E.globalCompositeOperation=$e;for(let gt=0;gt<Qe;gt++){const Ct=Math.random()*te,un=Math.random()*ce,$n=(Math.random()*50+20)/Ae;E.beginPath(),E.arc(Ct,un,$n,0,Math.PI*2),E.fillStyle=pt||`rgba(255,255,255,${Ue})`,E.fill()}E.globalCompositeOperation="source-over"};if(he==="earth")return E.fillStyle="#0a1a33",E.fillRect(0,0,te,ce),new eg(pe);if(he==="star"){const Ae=E.createRadialGradient(te/2,ce/2,0,te/2,ce/2,te/2);Ae.addColorStop(0,"#FFFFFF"),Ae.addColorStop(.3,"#FFFFAA"),Ae.addColorStop(1,Ce),E.fillStyle=Ae,E.fillRect(0,0,te,ce),Ge(.5,.2,"overlay","#ffaa00")}else if(he==="glow"){const Ae=E.createRadialGradient(te/2,ce/2,0,te/2,ce/2,te/2);Ae.addColorStop(0,"#FFFFFF"),Ae.addColorStop(.2,"#FFFFAA"),Ae.addColorStop(.5,Ce),Ae.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=Ae,E.fillRect(0,0,te,ce)}else if(he==="galaxy"){E.fillStyle="#050510",E.fillRect(0,0,te,ce);for(let Ae=0;Ae<3;Ae++){E.filter=`blur(${30+Ae*10}px)`,E.globalCompositeOperation="screen";const Ue=Math.random()*60+200;Ge(.5,.1,"screen",`hsl(${Ue}, 60%, 40%)`)}E.filter="none"}else if(he==="mercury"||he==="rocky"){E.fillStyle=Ce,E.fillRect(0,0,te,ce),E.globalCompositeOperation="multiply";for(let Ue=0;Ue<8e3;Ue++){const $e=Math.random()*80+100;E.fillStyle=`rgb(${$e},${$e},${$e})`,E.globalAlpha=.3,E.fillRect(Math.random()*te,Math.random()*ce,2,2)}E.globalAlpha=1,E.globalCompositeOperation="source-over";const Ae=500;for(let Ue=0;Ue<Ae;Ue++){const $e=Math.random()*te,pt=Math.random()*ce,Qe=Math.random()*10+2;E.fillStyle="rgba(0,0,0,0.3)",E.beginPath(),E.arc($e+1,pt+1,Qe,0,Math.PI*2),E.fill(),E.fillStyle="rgba(255,255,255,0.1)",E.beginPath(),E.arc($e-1,pt-1,Qe,0,Math.PI*2),E.fill(),E.fillStyle="rgba(120,120,120,0.8)",E.beginPath(),E.arc($e,pt,Qe,0,Math.PI*2),E.fill()}}else if(he==="venus"){E.fillStyle=Ce,E.fillRect(0,0,te,ce),E.filter="blur(40px)",E.globalCompositeOperation="overlay";for(let Ae=0;Ae<60;Ae++){const Ue=Math.random()*te,$e=Math.random()*ce,pt=Math.random()*400+100,Qe=Math.random()*50+20;E.fillStyle=Math.random()>.5?"#ffffff":"#cc9966",E.globalAlpha=.3,E.beginPath(),E.ellipse(Ue,$e,pt,Qe,0,0,Math.PI*2),E.fill()}E.globalAlpha=1,E.filter="none"}else if(he==="mars"){E.fillStyle=Ce,E.fillRect(0,0,te,ce),E.filter="blur(4px)",E.fillStyle="#5e2a18",E.globalAlpha=.6;for(let $e=0;$e<15;$e++){const pt=Math.random()*te,Qe=Math.random()*ce*.7+ce*.15,gt=Math.random()*150+50;E.beginPath();for(let Ct=0;Ct<10;Ct++){const un=Ct/10*Math.PI*2,$n=gt+(Math.random()-.5)*gt*.5,Kn=pt+Math.cos(un)*$n,xi=Qe+Math.sin(un)*$n;Ct===0?E.moveTo(Kn,xi):E.lineTo(Kn,xi)}E.fill()}E.globalAlpha=1,E.filter="none";const Ae=E.createLinearGradient(0,0,0,ce*.08);Ae.addColorStop(0,"#ffffff"),Ae.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=Ae,E.fillRect(0,0,te,ce*.08);const Ue=E.createLinearGradient(0,ce,0,ce*.92);Ue.addColorStop(0,"#ffffff"),Ue.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=Ue,E.fillRect(0,ce*.92,te,ce*.08)}else if(he==="jupiter"){const Ae=E.createLinearGradient(0,0,0,ce),Ue=16;for(let $e=0;$e<=Ue;$e++){const pt=$e/Ue,gt=$e%2===0?"#C88B3A":"#E3DCCB";Ae.addColorStop(pt,gt)}E.fillStyle=Ae,E.fillRect(0,0,te,ce),E.globalCompositeOperation="overlay",E.filter="blur(10px)";for(let $e=0;$e<50;$e++){const pt=Math.random()*te,Qe=ce/Ue,gt=Math.floor(Math.random()*Ue)*Qe+(Math.random()-.5)*20,Ct=Math.random()*200+50,un=Math.random()*20+5;E.fillStyle=Math.random()>.5?"#ffffff":"#8B4513",E.globalAlpha=.2,E.beginPath(),E.ellipse(pt,gt,Ct,un,0,0,Math.PI*2),E.fill()}E.filter="blur(5px)",E.fillStyle="#A65E44",E.globalAlpha=.9,E.beginPath(),E.ellipse(te*.7,ce*.65,90,50,0,0,Math.PI*2),E.fill(),E.filter="none",E.globalAlpha=1}else if(he==="saturn"){const Ae=E.createLinearGradient(0,0,0,ce),Ue=24;for(let $e=0;$e<=Ue;$e++){const pt=$e/Ue,Qe=Math.sin(pt*Math.PI*12)*.05,gt=40,Ct=.7+Qe;Ae.addColorStop(pt,`hsl(${gt}, 60%, ${Ct*100}%)`)}E.fillStyle=Ae,E.fillRect(0,0,te,ce)}else if(he==="uranus"){const Ae=E.createRadialGradient(te/2,ce/2,0,te/2,ce/2,te);Ae.addColorStop(0,"#D1F4F9"),Ae.addColorStop(1,"#93B8BE"),E.fillStyle=Ae,E.fillRect(0,0,te,ce)}else if(he==="neptune"){const Ae=E.createLinearGradient(0,0,0,ce);Ae.addColorStop(0,"#3655A0"),Ae.addColorStop(.5,"#5B80ED"),Ae.addColorStop(1,"#3655A0"),E.fillStyle=Ae,E.fillRect(0,0,te,ce),E.filter="blur(15px)",E.fillStyle="#ffffff",E.globalAlpha=.3;for(let Ue=0;Ue<8;Ue++){const $e=Math.random()*te,pt=Math.random()*ce,Qe=Math.random()*150+50,gt=Math.random()*20+5;E.beginPath(),E.ellipse($e,pt,Qe,gt,0,0,Math.PI*2),E.fill()}E.filter="blur(8px)",E.fillStyle="#1a2e5a",E.globalAlpha=.6,E.beginPath(),E.ellipse(te*.3,ce*.4,60,30,0,0,Math.PI*2),E.fill(),E.filter="none",E.globalAlpha=1}else if(he==="ring"){E.fillStyle="#00000000",E.clearRect(0,0,te,ce);const Ae=te/2,Ue=ce/2,$e=te*.5,pt=te*.2,Qe=E.createRadialGradient(Ae,Ue,pt,Ae,Ue,$e),gt=Math.floor(Oe.r*255),Ct=Math.floor(Oe.g*255),un=Math.floor(Oe.b*255);Qe.addColorStop(0,`rgba(${gt}, ${Ct}, ${un}, 0)`),Qe.addColorStop(.2,`rgba(${gt}, ${Ct}, ${un}, 0.1)`),Qe.addColorStop(.5,`rgba(${gt}, ${Ct}, ${un}, 0.8)`),Qe.addColorStop(.8,`rgba(${gt}, ${Ct}, ${un}, 0.1)`),Qe.addColorStop(1,`rgba(${gt}, ${Ct}, ${un}, 0)`),E.fillStyle=Qe,E.beginPath(),E.arc(Ae,Ue,$e,0,Math.PI*2),E.fill()}return new eg(pe)}const At=new Lf({map:He("glow","#FFD700"),color:16766720,transparent:!0,blending:Vl,opacity:.5,depthWrite:!1}),at=new Xm(At);at.scale.set(150,150,1),xe.add(at);const D=new Lf({map:He("glow","#ffaa00"),color:16755200,transparent:!0,blending:Vl,opacity:.2,depthWrite:!1}),A=new Xm(D);A.scale.set(300,300,1),xe.add(A);const Q=(he,Ce,L,ge)=>{const Ne=new Pn,Pe=new Float32Array(he*3),pe=new Float32Array(he*3),E=new Et;for(let ce=0;ce<he*3;ce+=3){const Oe=ge+Math.random()*ge,Ge=2*Math.PI*Math.random(),Ae=Math.acos(2*Math.random()-1);Pe[ce]=Oe*Math.sin(Ae)*Math.cos(Ge),Pe[ce+1]=Oe*Math.sin(Ae)*Math.sin(Ge),Pe[ce+2]=Oe*Math.cos(Ae);const Ue=Math.random();Ue>.9?E.setHex(16755370):Ue>.7?E.setHex(16768426):Ue>.5?E.setHex(11193599):E.setHex(16777215),pe[ce]=E.r,pe[ce+1]=E.g,pe[ce+2]=E.b}Ne.setAttribute("position",new zn(Pe,3)),Ne.setAttribute("color",new zn(pe,3));const te=new Kg({vertexColors:!0,size:Ce,transparent:!0,opacity:L,sizeAttenuation:!0});xe.add(new e1(Ne,te))};Q(6e3,1.5,.9,1e3),Q(9e3,.8,.5,2e3);const we=new Zs(4e3,32,32),Ee=new $l({map:He("galaxy","#000000"),side:Cn,transparent:!0,opacity:.3});xe.add(new Rn(we,Ee));const Te=(he,Ce,L)=>{const ge=new Wf(.1,0),Ne=new $o({color:16777215,roughness:.8,metalness:.1,flatShading:!0}),Pe=new QE(ge,Ne,he);Pe.instanceMatrix.setUsage(zv);const pe=new en,E=new Et;for(let te=0;te<he;te++){const ce=Math.random()*Math.PI*2,Oe=Math.sqrt(Math.random()*(L**2-Ce**2)+Ce**2),Ge=Math.cos(ce)*Oe,Ae=(Math.random()-.5)*15*(1-(Oe-Ce)/(L-Ce)*.5),Ue=Math.sin(ce)*Oe;pe.position.set(Ge,Ae,Ue),pe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const $e=Math.random()*1.2+.5;pe.scale.set($e,$e,$e),pe.updateMatrix(),Pe.setMatrixAt(te,pe.matrix),E.setHex(11776947),E.offsetHSL(0,0,(Math.random()-.5)*.1),Pe.setColorAt(te,E)}return Pe.instanceMatrix.needsUpdate=!0,Pe.instanceColor.needsUpdate=!0,Pe},Ze=Te(4e3,500,850);xe.add(Ze);const Ie=Te(3e3,170,210);xe.add(Ie);const Be=new r1;Be.setCrossOrigin("anonymous"),Zo.forEach((he,Ce)=>{const L=new Ks,ge=He(he.textureType,he.color,!1);let Ne;if(he.type==="Star")Ne=new $l({map:ge,color:16777215});else{const E={map:ge,roughness:.8,metalness:.1,emissive:1118481,emissiveIntensity:.1};he.id==="earth"?(E.roughness=.6,E.metalness=.1,E.envMapIntensity=1):he.type==="Gas Giant"||he.type==="Ice Giant"?(E.roughness=.5,E.emissive=2236962,E.emissiveIntensity=.15):he.id==="venus"&&(E.emissive=2232576,E.emissiveIntensity=.2),Ne=new $o(E)}he.textureUrl&&Be.load(he.textureUrl,E=>{E.colorSpace=Jt,Ne.map=E,Ne.needsUpdate=!0},void 0,E=>{console.warn(`Texture load failed for ${he.name}. Keeping procedural.`)});const Pe=new Rn(new Zs(he.radius,128,128),Ne);if(Pe.userData={id:Ce,type:"planet"},he.tilt&&(Pe.rotation.z=he.tilt),he.scale&&Pe.scale.set(he.scale[0],he.scale[1],he.scale[2]),L.add(Pe),re.current.push(Pe),he.type!=="Star"){const E=new Zs(he.radius*.4,32,32);let te=he.type==="Gas Giant"||he.type==="Ice Giant"?8947848:16724736;const ce=new $o({color:te,emissive:te,emissiveIntensity:.8}),Oe=new Rn(E,ce);Oe.visible=!1,Oe.userData={isCore:!0},he.scale&&Oe.scale.set(he.scale[0],he.scale[1],he.scale[2]),L.add(Oe)}const pe=[];if(he.moons&&he.moons.forEach((E,te)=>{const ce=new Zs(E.radius,32,32),Oe=He("rocky",E.color),Ge=new $o({map:Oe,roughness:.9});E.textureUrl&&Be.load(E.textureUrl,$e=>{$e.colorSpace=Jt,Ge.map=$e,Ge.needsUpdate=!0},void 0,()=>console.warn(`Moon texture failed: ${E.name}`));const Ae=new Rn(ce,Ge);Ae.userData={parentId:Ce,moonIndex:te,type:"moon"},re.current.push(Ae);const Ue=new Ks;Ue.add(Ae),Ae.position.x=E.distance,L.add(Ue),pe.push({orbit:Ue,mesh:Ae,speed:E.speed,data:E})}),he.rings){const E=new Xf(he.rings.inner,he.rings.outer,128),te=He("ring",he.rings.color),ce=new $o({map:te,color:16777215,side:Ai,transparent:!0,opacity:he.rings.opacity||.8,roughness:1,metalness:0}),Oe=new Rn(E,ce);he.id==="uranus"?(Oe.rotation.y=Math.PI/2,Oe.rotation.x=0):Oe.rotation.x=Math.PI/1.8,L.add(Oe)}if(L.position.x=he.distance,xe.add(L),he.distance>0){const E=[];for(let Oe=0;Oe<=256;Oe++){const Ge=Oe/256*Math.PI*2;E.push(new H(Math.cos(Ge)*he.distance,0,Math.sin(Ge)*he.distance))}const te=new Pn().setFromPoints(E),ce=new JE(te,new $g({color:16777215,opacity:.1,transparent:!0}));xe.add(ce)}ee.current.push({type:"planet",group:L,mesh:Pe,data:he,moons:pe,angle:Math.random()*Math.PI*2})}),n(!1);let tt;const ft=()=>{tt=requestAnimationFrame(ft),G.current&&G.current.update();const he=st.domElement.dataset.paused==="true",Ce=st.domElement.dataset.structure==="true";if(he||(Ze.rotation.y+=15e-5,Ie.rotation.y+=5e-4),ee.current.forEach(L=>{if(he||(L.data.tilt?L.mesh.rotation.x+=.003:L.mesh.rotation.y+=.001,L.data.distance>0&&(L.angle+=L.data.speed*.3*.25,L.group.position.x=Math.cos(L.angle)*L.data.distance,L.group.position.z=Math.sin(L.angle)*L.data.distance),L.moons&&L.moons.forEach(ge=>ge.orbit.rotation.y+=ge.speed)),L.data.type!=="Star"){L.mesh.material&&(L.mesh.material.opacity=Ce?.15:1,L.mesh.material.transparent=Ce,L.mesh.material.wireframe=Ce);const ge=L.group.children.find(Ne=>Ne.userData&&Ne.userData.isCore);ge&&(ge.visible=Ce,Ce&&(ge.rotation.y+=.01))}}),Y.current&&!he){const L=Y.current,ge=new H;if(L.mesh.getWorldPosition(ge),!ge.equals(L.lastPos)){const Ne=new H().subVectors(ge,L.lastPos);j.position.add(Ne),G.current&&G.current.target.add(Ne),L.lastPos.copy(ge)}}st.render(xe,j)};ft();const ve=()=>{!fe.current||!ye.current||(fe.current.aspect=window.innerWidth/window.innerHeight,fe.current.updateProjectionMatrix(),ye.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",ve);const xt=he=>{q.current={x:he.clientX,y:he.clientY,time:Date.now()}},mt=he=>{const Ce=Math.abs(he.clientX-q.current.x),L=Math.abs(he.clientY-q.current.y),ge=Date.now()-q.current.time;if(Ce<5&&L<5&&ge<300){W.current.x=he.clientX/window.innerWidth*2-1,W.current.y=-(he.clientY/window.innerHeight)*2+1,I.current.setFromCamera(W.current,j);const Ne=I.current.intersectObjects(re.current);if(Ne.length>0){const pe=Ne[0].object.userData;if(pe.id!==void 0||pe.parentId!==void 0){const E=pe.parentId!==void 0?pe.parentId:pe.id,te=pe.moonIndex;_e(E,te)}}}},ot=st.domElement;return ot.addEventListener("pointerdown",xt),ot.addEventListener("pointerup",mt),()=>{cancelAnimationFrame(tt),window.removeEventListener("resize",ve),ot.removeEventListener("pointerdown",xt),ot.removeEventListener("pointerup",mt),o.current&&st.domElement&&o.current.removeChild(st.domElement)}},[]),St.useEffect(()=>{ye.current&&(ye.current.domElement.dataset.paused=c,ye.current.domElement.dataset.structure=m)},[c,m]),St.useEffect(()=>{l?X.current===-1&&be(0):(de.current&&clearTimeout(de.current),X.current=-1)},[l]),me.jsxs("div",{className:"w-full h-screen bg-black relative text-slate-100 font-sans overflow-hidden",children:[me.jsx("div",{ref:o,className:"absolute inset-0 z-0 bg-black",style:{pointerEvents:"auto"}}),me.jsxs("div",{className:"absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none z-10",children:[me.jsxs("div",{className:"flex items-center gap-4 cursor-pointer pointer-events-auto",onClick:De,children:[me.jsx("div",{className:"w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg",children:me.jsx("span",{className:"text-2xl font-['Inter'] font-light",children:"🪐"})}),me.jsxs("div",{children:[me.jsx("h1",{className:"font-['Inter'] font-light text-2xl leading-none",children:"COSMOS"}),me.jsx("p",{className:"text-[10px] uppercase text-indigo-400 font-bold font-['Space_Mono']",children:"Explorer"})]})]}),me.jsxs("div",{className:"flex gap-2 pointer-events-auto bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10",children:[me.jsx("button",{onClick:()=>h(!c),className:"p-2 hover:bg-white/10 rounded-lg",children:c?me.jsx(A1,{size:20}):me.jsx(T1,{size:20})}),me.jsx("button",{onClick:()=>g(!m),className:"p-2 hover:bg-white/10 rounded-lg",children:me.jsx(x1,{size:20})}),me.jsx("button",{onClick:qe,className:"p-2 hover:bg-white/10 rounded-lg",children:w?me.jsx(E1,{size:20}):me.jsx(S1,{size:20})}),me.jsx("button",{onClick:()=>T(!S),className:`p-2 hover:bg-white/10 rounded-lg ${S?"text-red-400":""}`,children:S?me.jsx(b1,{size:20}):me.jsx(C1,{size:20})}),me.jsx("button",{onClick:()=>b(!0),className:"p-2 hover:bg-white/10 rounded-lg text-pink-400 hover:text-pink-300",children:me.jsx(fg,{size:20})}),me.jsx("button",{onClick:()=>N(!0),className:"p-2 hover:bg-white/10 rounded-lg text-blue-400 hover:text-blue-300",children:me.jsx(dg,{size:20})})]})]}),me.jsx("div",{className:`absolute right-6 top-24 bottom-24 w-full md:w-[400px] z-30 transition-transform duration-300 ${r?"translate-x-0":"translate-x-[120%]"}`,children:me.jsxs("div",{className:"w-full h-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl relative overflow-hidden flex flex-col shadow-2xl",children:[me.jsx("div",{className:"flex-1 overflow-y-auto p-8 no-scrollbar",children:r&&me.jsxs(me.Fragment,{children:[me.jsxs("div",{className:"flex justify-between items-center mb-8",children:[me.jsxs("div",{children:[me.jsx("h2",{className:"text-4xl font-['Inter'] font-light",children:r.name}),me.jsx("span",{className:"text-xs text-indigo-400 uppercase tracking-widest font-['Space_Mono']",children:r.type||"Planet"}),r.isMoon&&me.jsxs("div",{className:"text-[10px] text-zinc-500 font-['Space_Mono']",children:["Moon of ",r.parentName]})]}),me.jsx("button",{onClick:()=>a(null),className:"p-2 hover:bg-white/20 rounded-full",children:me.jsx(Bl,{size:24})})]}),me.jsxs("div",{className:"space-y-8 font-['Space_Mono'] pb-8",children:[me.jsx("div",{className:"p-6 bg-zinc-900/90 rounded-xl border border-white/10 text-sm leading-relaxed text-zinc-300 shadow-xl",children:r.narration||r.desc}),r.stats&&me.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(r.stats).map(([xe,j])=>me.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors",children:[me.jsx("div",{className:"text-[10px] text-indigo-300 uppercase font-bold tracking-wider mb-1",children:xe}),me.jsx("div",{className:"font-mono text-xs text-white",children:j})]},xe))}),r.facts&&me.jsxs("div",{children:[me.jsxs("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2",children:[me.jsx(M1,{size:14})," Facts"]}),me.jsx("ul",{className:"space-y-3 text-sm",children:r.facts.map((xe,j)=>me.jsxs("li",{className:"flex gap-3 text-zinc-400",children:[me.jsx("span",{className:"text-indigo-500 mt-1",children:me.jsx(m1,{size:14})}),xe]},j))})]}),r.moons&&me.jsxs("div",{children:[me.jsxs("h3",{className:"text-xs font-bold text-zinc-500 uppercase mb-2 flex items-center gap-2",children:[me.jsx(w1,{size:12})," Moons"]}),me.jsx("div",{className:"flex gap-2 flex-wrap",children:r.moons.map((xe,j)=>me.jsx("button",{onClick:()=>_e(Zo.findIndex(st=>st.id===r.id),j),className:"px-3 py-1 bg-white/10 hover:bg-indigo-600 rounded-full text-xs transition-colors",children:xe.name},j))})]})]})]})}),me.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none flex items-end justify-center pb-4",children:me.jsx(cg,{className:"animate-bounce text-white/40",size:24})})]})}),_&&me.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:me.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-sm relative shadow-2xl",children:[me.jsx("button",{onClick:()=>b(!1),className:"absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full",children:me.jsx(Bl,{size:20})}),me.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[me.jsx(fg,{className:"text-pink-500",size:20})," Support"]}),me.jsxs("div",{className:"space-y-4",children:[me.jsxs("a",{href:"https://www.paypal.com/paypalme/rendrasc",target:"_blank",rel:"noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-[#0070BA] hover:bg-[#005ea6] rounded-xl font-bold transition-colors",children:[me.jsx(P1,{size:18,className:"mr-1"})," PayPal"]}),me.jsxs("div",{className:"bg-black/30 p-4 rounded-xl border border-white/5",children:[me.jsxs("div",{className:"text-[10px] uppercase text-zinc-500 font-bold mb-2 flex items-center gap-1",children:[me.jsx(L1,{size:12})," USDC (ERC-20)"]}),me.jsxs("div",{className:"flex items-center gap-2",children:[me.jsx("code",{className:"text-xs text-zinc-300 truncate flex-1",children:"0x62737ef56dAadebA2f2c336Bc547A21B18b37426"}),me.jsx("button",{onClick:le,className:`p-2 rounded-lg transition-colors ${B?"bg-green-500/20 text-green-400":"bg-white/10 hover:bg-white/20"}`,children:B?me.jsx(g1,{size:14}):me.jsx(v1,{size:14})})]})]})]})]})}),R&&me.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:me.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-sm relative shadow-2xl",children:[me.jsx("button",{onClick:()=>N(!1),className:"absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full",children:me.jsx(Bl,{size:20})}),me.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[me.jsx(dg,{className:"text-blue-500",size:20})," Credits"]}),me.jsxs("div",{className:"text-sm text-zinc-400 leading-relaxed font-['Space_Mono']",children:[me.jsxs("p",{className:"mb-4",children:["Developed with passion by the team at ",me.jsx("span",{className:"text-white font-bold",children:"Kreuk Studio"}),"."]}),me.jsxs("ul",{className:"space-y-2",children:[me.jsxs("li",{className:"flex items-center gap-2",children:[me.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-indigo-500"})," Rendra Diardjo"]}),me.jsxs("li",{className:"flex items-center gap-2",children:[me.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-purple-500"})," Feby Jose"]}),me.jsxs("li",{className:"flex items-center gap-2",children:[me.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-pink-500"})," Kaii Arunakara"]}),me.jsxs("li",{className:"flex items-center gap-2",children:[me.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500"})," Akio Dinibiru"]})]})]})]})}),me.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end items-center pointer-events-none pb-4",children:[me.jsx("button",{onClick:()=>y(!v),className:"pointer-events-auto mb-2 bg-white/10 backdrop-blur-md p-1 rounded-full text-indigo-200 hover:text-white hover:bg-white/20 transition-all",children:v?me.jsx(cg,{size:16}):me.jsx(_1,{size:16})}),me.jsx("div",{className:`pointer-events-auto max-w-full overflow-x-auto no-scrollbar fade-mask transition-all duration-300 ease-in-out ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:me.jsxs("div",{className:"flex gap-2 items-center px-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 py-2 mx-4",children:[me.jsxs("button",{onClick:l?De:ke,className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg transition-colors whitespace-nowrap font-semibold border text-xs font-['Space_Mono'] ${l?"bg-red-500/80 border-red-400/30":"bg-indigo-600/90 border-indigo-400/30"}`,children:[l?me.jsx(Bl,{size:12}):me.jsx(R1,{size:12})," ",l?"Stop":"Tour"]}),me.jsx("div",{className:"h-6 w-px bg-white/10 mx-1"}),Zo.map((xe,j)=>me.jsxs("button",{onClick:()=>_e(j),className:`flex flex-col items-center gap-1 min-w-[40px] group relative p-1 rounded-lg transition-all ${(r==null?void 0:r.id)===xe.id?"bg-white/10 ring-1 ring-indigo-500":"hover:bg-white/5"}`,children:[me.jsx("div",{className:"w-5 h-5 rounded-full shadow-lg transition-transform group-hover:scale-110 relative bg-cover bg-center",style:{backgroundImage:`url(${xe.textureUrl})`,backgroundColor:xe.color},children:(r==null?void 0:r.id)===xe.id&&me.jsx("div",{className:"absolute inset-0 rounded-full ring-1 ring-white animate-pulse"})}),me.jsx("span",{className:`text-[7px] font-bold uppercase tracking-wider transition-colors font-['Space_Mono'] ${(r==null?void 0:r.id)===xe.id?"text-white":"text-zinc-500 group-hover:text-zinc-300"}`,children:xe.name})]},j))]})})]}),e&&me.jsxs("div",{className:"absolute inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none",children:[me.jsx(y1,{className:"w-12 h-12 text-indigo-500 animate-spin mb-4"}),me.jsx("span",{className:"text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold font-['Space_Mono']",children:"Initializing Cosmos..."})]})]})}B_.createRoot(document.getElementById("root")).render(me.jsx(N_.StrictMode,{children:me.jsx(D1,{})}));
