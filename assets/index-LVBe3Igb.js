(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function gg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Uc={exports:{}},Vo={},Ic={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function L_(){if(gp)return Rt;gp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function x(U,j,$){this.props=U,this.context=j,this.refs=E,this.updater=$||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,j){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,j,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(U,j,$){this.props=U,this.context=j,this.refs=E,this.updater=$||S}var A=C.prototype=new _;A.constructor=C,w(A,x.prototype),A.isPureReactComponent=!0;var D=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function oe(U,j,$){var ae,me={},Re=null,be=null;if(j!=null)for(ae in j.ref!==void 0&&(be=j.ref),j.key!==void 0&&(Re=""+j.key),j)H.call(j,ae)&&!k.hasOwnProperty(ae)&&(me[ae]=j[ae]);var Oe=arguments.length-2;if(Oe===1)me.children=$;else if(1<Oe){for(var Be=Array(Oe),We=0;We<Oe;We++)Be[We]=arguments[We+2];me.children=Be}if(U&&U.defaultProps)for(ae in Oe=U.defaultProps,Oe)me[ae]===void 0&&(me[ae]=Oe[ae]);return{$$typeof:o,type:U,key:Re,ref:be,props:me,_owner:F.current}}function R(U,j){return{$$typeof:o,type:U.type,key:j,ref:U.ref,props:U.props,_owner:U._owner}}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function le(U){var j={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function($){return j[$]})}var ce=/\/+/g;function xe(U,j){return typeof U=="object"&&U!==null&&U.key!=null?le(""+U.key):j.toString(36)}function V(U,j,$,ae,me){var Re=typeof U;(Re==="undefined"||Re==="boolean")&&(U=null);var be=!1;if(U===null)be=!0;else switch(Re){case"string":case"number":be=!0;break;case"object":switch(U.$$typeof){case o:case e:be=!0}}if(be)return be=U,me=me(be),U=ae===""?"."+xe(be,0):ae,D(me)?($="",U!=null&&($=U.replace(ce,"$&/")+"/"),V(me,j,$,"",function(We){return We})):me!=null&&(N(me)&&(me=R(me,$+(!me.key||be&&be.key===me.key?"":(""+me.key).replace(ce,"$&/")+"/")+U)),j.push(me)),1;if(be=0,ae=ae===""?".":ae+":",D(U))for(var Oe=0;Oe<U.length;Oe++){Re=U[Oe];var Be=ae+xe(Re,Oe);be+=V(Re,j,$,Be,me)}else if(Be=y(U),typeof Be=="function")for(U=Be.call(U),Oe=0;!(Re=U.next()).done;)Re=Re.value,Be=ae+xe(Re,Oe++),be+=V(Re,j,$,Be,me);else if(Re==="object")throw j=String(U),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return be}function te(U,j,$){if(U==null)return U;var ae=[],me=0;return V(U,ae,"","",function(Re){return j.call($,Re,me++)}),ae}function re(U){if(U._status===-1){var j=U._result;j=j(),j.then(function($){(U._status===0||U._status===-1)&&(U._status=1,U._result=$)},function($){(U._status===0||U._status===-1)&&(U._status=2,U._result=$)}),U._status===-1&&(U._status=0,U._result=j)}if(U._status===1)return U._result.default;throw U._result}var fe={current:null},Y={transition:null},Q={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Y,ReactCurrentOwner:F};function q(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:te,forEach:function(U,j,$){te(U,function(){j.apply(this,arguments)},$)},count:function(U){var j=0;return te(U,function(){j++}),j},toArray:function(U){return te(U,function(j){return j})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Rt.Component=x,Rt.Fragment=n,Rt.Profiler=a,Rt.PureComponent=C,Rt.StrictMode=r,Rt.Suspense=h,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Rt.act=q,Rt.cloneElement=function(U,j,$){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ae=w({},U.props),me=U.key,Re=U.ref,be=U._owner;if(j!=null){if(j.ref!==void 0&&(Re=j.ref,be=F.current),j.key!==void 0&&(me=""+j.key),U.type&&U.type.defaultProps)var Oe=U.type.defaultProps;for(Be in j)H.call(j,Be)&&!k.hasOwnProperty(Be)&&(ae[Be]=j[Be]===void 0&&Oe!==void 0?Oe[Be]:j[Be])}var Be=arguments.length-2;if(Be===1)ae.children=$;else if(1<Be){Oe=Array(Be);for(var We=0;We<Be;We++)Oe[We]=arguments[We+2];ae.children=Oe}return{$$typeof:o,type:U.type,key:me,ref:Re,props:ae,_owner:be}},Rt.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Rt.createElement=oe,Rt.createFactory=function(U){var j=oe.bind(null,U);return j.type=U,j},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(U){return{$$typeof:c,render:U}},Rt.isValidElement=N,Rt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:re}},Rt.memo=function(U,j){return{$$typeof:m,type:U,compare:j===void 0?null:j}},Rt.startTransition=function(U){var j=Y.transition;Y.transition={};try{U()}finally{Y.transition=j}},Rt.unstable_act=q,Rt.useCallback=function(U,j){return fe.current.useCallback(U,j)},Rt.useContext=function(U){return fe.current.useContext(U)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(U){return fe.current.useDeferredValue(U)},Rt.useEffect=function(U,j){return fe.current.useEffect(U,j)},Rt.useId=function(){return fe.current.useId()},Rt.useImperativeHandle=function(U,j,$){return fe.current.useImperativeHandle(U,j,$)},Rt.useInsertionEffect=function(U,j){return fe.current.useInsertionEffect(U,j)},Rt.useLayoutEffect=function(U,j){return fe.current.useLayoutEffect(U,j)},Rt.useMemo=function(U,j){return fe.current.useMemo(U,j)},Rt.useReducer=function(U,j,$){return fe.current.useReducer(U,j,$)},Rt.useRef=function(U){return fe.current.useRef(U)},Rt.useState=function(U){return fe.current.useState(U)},Rt.useSyncExternalStore=function(U,j,$){return fe.current.useSyncExternalStore(U,j,$)},Rt.useTransition=function(){return fe.current.useTransition()},Rt.version="18.3.1",Rt}var _p;function If(){return _p||(_p=1,Ic.exports=L_()),Ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function D_(){if(vp)return Vo;vp=1;var o=If(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(c,h,m){var g,v={},y=null,S=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:c,key:y,ref:S,props:v,_owner:a.current}}return Vo.Fragment=n,Vo.jsx=d,Vo.jsxs=d,Vo}var xp;function N_(){return xp||(xp=1,Uc.exports=D_()),Uc.exports}var pe=N_(),Mt=If();const U_=gg(Mt);var fl={},Oc={exports:{}},jn={},Fc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function I_(){return yp||(yp=1,(function(o){function e(Y,Q){var q=Y.length;Y.push(Q);e:for(;0<q;){var U=q-1>>>1,j=Y[U];if(0<a(j,Q))Y[U]=Q,Y[q]=j,q=U;else break e}}function n(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var Q=Y[0],q=Y.pop();if(q!==Q){Y[0]=q;e:for(var U=0,j=Y.length,$=j>>>1;U<$;){var ae=2*(U+1)-1,me=Y[ae],Re=ae+1,be=Y[Re];if(0>a(me,q))Re<j&&0>a(be,me)?(Y[U]=be,Y[Re]=q,U=Re):(Y[U]=me,Y[ae]=q,U=ae);else if(Re<j&&0>a(be,q))Y[U]=be,Y[Re]=q,U=Re;else break e}}return Q}function a(Y,Q){var q=Y.sortIndex-Q.sortIndex;return q!==0?q:Y.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var d=Date,c=d.now();o.unstable_now=function(){return d.now()-c}}var h=[],m=[],g=1,v=null,y=3,S=!1,w=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(Y){for(var Q=n(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=Y)r(m),Q.sortIndex=Q.expirationTime,e(h,Q);else break;Q=n(m)}}function D(Y){if(E=!1,A(Y),!w)if(n(h)!==null)w=!0,re(H);else{var Q=n(m);Q!==null&&fe(D,Q.startTime-Y)}}function H(Y,Q){w=!1,E&&(E=!1,_(oe),oe=-1),S=!0;var q=y;try{for(A(Q),v=n(h);v!==null&&(!(v.expirationTime>Q)||Y&&!le());){var U=v.callback;if(typeof U=="function"){v.callback=null,y=v.priorityLevel;var j=U(v.expirationTime<=Q);Q=o.unstable_now(),typeof j=="function"?v.callback=j:v===n(h)&&r(h),A(Q)}else r(h);v=n(h)}if(v!==null)var $=!0;else{var ae=n(m);ae!==null&&fe(D,ae.startTime-Q),$=!1}return $}finally{v=null,y=q,S=!1}}var F=!1,k=null,oe=-1,R=5,N=-1;function le(){return!(o.unstable_now()-N<R)}function ce(){if(k!==null){var Y=o.unstable_now();N=Y;var Q=!0;try{Q=k(!0,Y)}finally{Q?xe():(F=!1,k=null)}}else F=!1}var xe;if(typeof C=="function")xe=function(){C(ce)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=ce,xe=function(){te.postMessage(null)}}else xe=function(){x(ce,0)};function re(Y){k=Y,F||(F=!0,xe())}function fe(Y,Q){oe=x(function(){Y(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,re(H))},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_getFirstCallbackNode=function(){return n(h)},o.unstable_next=function(Y){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var q=y;y=Q;try{return Y()}finally{y=q}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var q=y;y=Y;try{return Q()}finally{y=q}},o.unstable_scheduleCallback=function(Y,Q,q){var U=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?U+q:U):q=U,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=q+j,Y={id:g++,callback:Q,priorityLevel:Y,startTime:q,expirationTime:j,sortIndex:-1},q>U?(Y.sortIndex=q,e(m,Y),n(h)===null&&Y===n(m)&&(E?(_(oe),oe=-1):E=!0,fe(D,q-U))):(Y.sortIndex=j,e(h,Y),w||S||(w=!0,re(H))),Y},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(Y){var Q=y;return function(){var q=y;y=Q;try{return Y.apply(this,arguments)}finally{y=q}}}})(kc)),kc}var Sp;function O_(){return Sp||(Sp=1,Fc.exports=I_()),Fc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function F_(){if(Mp)return jn;Mp=1;var o=If(),e=O_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(t){return h.call(v,t)?!0:h.call(g,t)?!1:m.test(t)?v[t]=!0:(g[t]=!0,!1)}function S(t,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,u){if(i===null||typeof i>"u"||S(t,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,s,u,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,C);x[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,C);x[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,C);x[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,i,s,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,f,u)&&(s=null),u||f===null?y(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,u=f.attributeNamespace,s===null?t.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,u?t.setAttributeNS(u,i,s):t.setAttribute(i,s))))}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),le=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),Y=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,U;function j(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var $=!1;function ae(t,i){if(!t||$)return"";$=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){u=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}t()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),p=u.stack.split(`
`),M=f.length-1,O=p.length-1;1<=M&&0<=O&&f[M]!==p[O];)O--;for(;1<=M&&0<=O;M--,O--)if(f[M]!==p[O]){if(M!==1||O!==1)do if(M--,O--,0>O||f[M]!==p[O]){var B=`
`+f[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=O);break}}}finally{$=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?j(t):""}function me(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function Re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case F:return"Portal";case R:return"Profiler";case oe:return"StrictMode";case xe:return"Suspense";case V:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case le:return(t.displayName||"Context")+".Consumer";case N:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:Re(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return Re(t(i))}catch{}}return null}function be(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(t){var i=Be(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function yt(t){t._valueTracker||(t._valueTracker=We(t))}function z(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return t&&(u=Be(t)?t.checked?"true":"false":t.value),t=u,t!==s?(i.setValue(t),!0):!1}function et(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pe(t,i){var s=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function rt(t,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=Oe(i.value!=null?i.value:s),t._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ve(t,i){i=i.checked,i!=null&&A(t,"checked",i,!1)}function bt(t,i){Ve(t,i);var s=Oe(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?L(t,i.type,s):i.hasOwnProperty("defaultValue")&&L(t,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ct(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function L(t,i,s){(i!=="number"||et(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var T=Array.isArray;function J(t,i,s,u){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&u&&(t[s].defaultSelected=!0)}else{for(s=""+Oe(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ee(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ge(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(T(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Oe(s)}}function we(t,i){var s=Oe(i.value),u=Oe(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),u!=null&&(t.defaultValue=""+u)}function Ze(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ze(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var it,gt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,s,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(it=it||document.createElement("div"),it.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=it.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function _e(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vt=["Webkit","ms","Moz","O"];Object.keys(Et).forEach(function(t){vt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Et[i]=Et[t]})});function ft(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Et.hasOwnProperty(t)&&Et[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,f=ft(s,i[s],u);s==="float"&&(s="cssFloat"),u?t.setProperty(s,f):t[s]=f}}var Fe=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function I(t,i){if(i){if(Fe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qe=null;function ke(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ve=null,P=null,he=null;function de(t){if(t=Co(t)){if(typeof ve!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Aa(i),ve(t.stateNode,t.type,i))}}function Ie(t){P?he?he.push(t):he=[t]:P=t}function De(){if(P){var t=P,i=he;if(he=P=null,de(t),i)for(t=0;t<i.length;t++)de(i[t])}}function Ye(t,i){return t(i)}function Xe(){}var X=!1;function Le(t,i,s){if(X)return t(i,s);X=!0;try{return Ye(t,i,s)}finally{X=!1,(P!==null||he!==null)&&(Xe(),De())}}function Me(t,i){var s=t.stateNode;if(s===null)return null;var u=Aa(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var at=!1;if(c)try{var Lt={};Object.defineProperty(Lt,"passive",{get:function(){at=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{at=!1}function $e(t,i,s,u,f,p,M,O,B){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(s,ne)}catch(Se){this.onError(Se)}}var dt=!1,pt=null,Ot=!1,Nt=null,Xt={onError:function(t){dt=!0,pt=t}};function Jt(t,i,s,u,f,p,M,O,B){dt=!1,pt=null,$e.apply(Xt,arguments)}function xn(t,i,s,u,f,p,M,O,B){if(Jt.apply(this,arguments),dt){if(dt){var ne=pt;dt=!1,pt=null}else throw Error(n(198));Ot||(Ot=!0,Nt=ne)}}function kn(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Pr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(kn(t)!==t)throw Error(n(188))}function Z(t){var i=t.alternate;if(!i){if(i=kn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,u=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){s=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return b(f),t;if(p===u)return b(f),i;p=p.sibling}throw Error(n(188))}if(s.return!==u.return)s=f,u=p;else{for(var M=!1,O=f.child;O;){if(O===s){M=!0,s=f,u=p;break}if(O===u){M=!0,u=f,s=p;break}O=O.sibling}if(!M){for(O=p.child;O;){if(O===s){M=!0,s=p,u=f;break}if(O===u){M=!0,u=p,s=f;break}O=O.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==u)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function se(t){return t=Z(t),t!==null?ue(t):null}function ue(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ue(t);if(i!==null)return i;t=t.sibling}return null}var ie=e.unstable_scheduleCallback,He=e.unstable_cancelCallback,st=e.unstable_shouldYield,ht=e.unstable_requestPaint,je=e.unstable_now,St=e.unstable_getCurrentPriorityLevel,_t=e.unstable_ImmediatePriority,xt=e.unstable_UserBlockingPriority,zt=e.unstable_NormalPriority,An=e.unstable_LowPriority,en=e.unstable_IdlePriority,zn=null,Pt=null;function wt(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(zn,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:ua,jt=Math.log,Di=Math.LN2;function ua(t){return t>>>=0,t===0?32:31-(jt(t)/Di|0)|0}var Ti=64,Ki=4194304;function Zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ii(t,i){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,M=s&268435455;if(M!==0){var O=M&~f;O!==0?u=Zt(O):(p&=M,p!==0&&(u=Zt(p)))}else M=s&~f,M!==0?u=Zt(M):p!==0&&(u=Zt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)s=31-Rn(i),f=1<<s,u|=t[s],i&=~f;return u}function uo(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(t,i){for(var s=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-Rn(p),O=1<<M,B=f[M];B===-1?((O&s)===0||(O&u)!==0)&&(f[M]=uo(O,i)):B<=i&&(t.expiredLanes|=O),p&=~O}}function Lr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ca(){var t=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),t}function os(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function co(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Rn(i),t[i]=s}function Qg(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-Rn(s),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,s&=~p}}function iu(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var u=31-Rn(s),f=1<<u;f&i|t[u]&i&&(t[u]|=i),s&=~f}}var It=0;function qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var $f,ru,Kf,Zf,Qf,su=!1,fa=[],Zi=null,Qi=null,Ji=null,fo=new Map,ho=new Map,er=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,i){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(t,i,s,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Co(i),i!==null&&ru(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function e0(t,i,s,u,f){switch(i){case"focusin":return Zi=po(Zi,t,i,s,u,f),!0;case"dragenter":return Qi=po(Qi,t,i,s,u,f),!0;case"mouseover":return Ji=po(Ji,t,i,s,u,f),!0;case"pointerover":var p=f.pointerId;return fo.set(p,po(fo.get(p)||null,t,i,s,u,f)),!0;case"gotpointercapture":return p=f.pointerId,ho.set(p,po(ho.get(p)||null,t,i,s,u,f)),!0}return!1}function ed(t){var i=Dr(t.target);if(i!==null){var s=kn(i);if(s!==null){if(i=s.tag,i===13){if(i=Pr(s),i!==null){t.blockedOn=i,Qf(t.priority,function(){Kf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function da(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=au(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var u=new s.constructor(s.type,s);Qe=u,s.target.dispatchEvent(u),Qe=null}else return i=Co(s),i!==null&&ru(i),t.blockedOn=s,!1;i.shift()}return!0}function td(t,i,s){da(t)&&s.delete(i)}function t0(){su=!1,Zi!==null&&da(Zi)&&(Zi=null),Qi!==null&&da(Qi)&&(Qi=null),Ji!==null&&da(Ji)&&(Ji=null),fo.forEach(td),ho.forEach(td)}function mo(t,i){t.blockedOn===i&&(t.blockedOn=null,su||(su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,t0)))}function go(t){function i(f){return mo(f,t)}if(0<fa.length){mo(fa[0],t);for(var s=1;s<fa.length;s++){var u=fa[s];u.blockedOn===t&&(u.blockedOn=null)}}for(Zi!==null&&mo(Zi,t),Qi!==null&&mo(Qi,t),Ji!==null&&mo(Ji,t),fo.forEach(i),ho.forEach(i),s=0;s<er.length;s++)u=er[s],u.blockedOn===t&&(u.blockedOn=null);for(;0<er.length&&(s=er[0],s.blockedOn===null);)ed(s),s.blockedOn===null&&er.shift()}var as=D.ReactCurrentBatchConfig,ha=!0;function n0(t,i,s,u){var f=It,p=as.transition;as.transition=null;try{It=1,ou(t,i,s,u)}finally{It=f,as.transition=p}}function i0(t,i,s,u){var f=It,p=as.transition;as.transition=null;try{It=4,ou(t,i,s,u)}finally{It=f,as.transition=p}}function ou(t,i,s,u){if(ha){var f=au(t,i,s,u);if(f===null)wu(t,i,u,pa,s),Jf(t,u);else if(e0(f,t,i,s,u))u.stopPropagation();else if(Jf(t,u),i&4&&-1<Jg.indexOf(t)){for(;f!==null;){var p=Co(f);if(p!==null&&$f(p),p=au(t,i,s,u),p===null&&wu(t,i,u,pa,s),p===f)break;f=p}f!==null&&u.stopPropagation()}else wu(t,i,u,null,s)}}var pa=null;function au(t,i,s,u){if(pa=null,t=ke(u),t=Dr(t),t!==null)if(i=kn(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Pr(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return pa=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(St()){case _t:return 1;case xt:return 4;case zt:case An:return 16;case en:return 536870912;default:return 16}default:return 16}}var tr=null,lu=null,ma=null;function id(){if(ma)return ma;var t,i=lu,s=i.length,u,f="value"in tr?tr.value:tr.textContent,p=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(u=1;u<=M&&i[s-u]===f[p-u];u++);return ma=f.slice(t,1<u?1-u:void 0)}function ga(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function rd(){return!1}function qn(t){function i(s,u,f,p,M){this._reactName=s,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(s=t[O],this[O]=s?s(p):p[O]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?_a:rd,this.isPropagationStopped=rd,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=qn(ls),_o=q({},ls,{view:0,detail:0}),r0=qn(_o),cu,fu,vo,va=q({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(cu=t.screenX-vo.screenX,fu=t.screenY-vo.screenY):fu=cu=0,vo=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),sd=qn(va),s0=q({},va,{dataTransfer:0}),o0=qn(s0),a0=q({},_o,{relatedTarget:0}),du=qn(a0),l0=q({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=qn(l0),c0=q({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=qn(c0),d0=q({},ls,{data:0}),od=qn(d0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=m0[t])?!!i[t]:!1}function hu(){return g0}var _0=q({},_o,{key:function(t){if(t.key){var i=h0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=qn(_0),x0=q({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=qn(x0),y0=q({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),S0=qn(y0),M0=q({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=qn(M0),w0=q({},va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=qn(w0),A0=[9,13,27,32],pu=c&&"CompositionEvent"in window,xo=null;c&&"documentMode"in document&&(xo=document.documentMode);var R0=c&&"TextEvent"in window&&!xo,ld=c&&(!pu||xo&&8<xo&&11>=xo),ud=" ",cd=!1;function fd(t,i){switch(t){case"keyup":return A0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function C0(t,i){switch(t){case"compositionend":return dd(i);case"keypress":return i.which!==32?null:(cd=!0,ud);case"textInput":return t=i.data,t===ud&&cd?null:t;default:return null}}function b0(t,i){if(us)return t==="compositionend"||!pu&&fd(t,i)?(t=id(),ma=lu=tr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ld&&i.locale!=="ko"?null:i.data;default:return null}}var P0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!P0[t.type]:i==="textarea"}function pd(t,i,s,u){Ie(u),i=Ea(i,"onChange"),0<i.length&&(s=new uu("onChange","change",null,s,u),t.push({event:s,listeners:i}))}var yo=null,So=null;function L0(t){Dd(t,0)}function xa(t){var i=ps(t);if(z(i))return t}function D0(t,i){if(t==="change")return i}var md=!1;if(c){var mu;if(c){var gu="oninput"in document;if(!gu){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),gu=typeof gd.oninput=="function"}mu=gu}else mu=!1;md=mu&&(!document.documentMode||9<document.documentMode)}function _d(){yo&&(yo.detachEvent("onpropertychange",vd),So=yo=null)}function vd(t){if(t.propertyName==="value"&&xa(So)){var i=[];pd(i,So,t,ke(t)),Le(L0,i)}}function N0(t,i,s){t==="focusin"?(_d(),yo=i,So=s,yo.attachEvent("onpropertychange",vd)):t==="focusout"&&_d()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(So)}function I0(t,i){if(t==="click")return xa(i)}function O0(t,i){if(t==="input"||t==="change")return xa(i)}function F0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var pi=typeof Object.is=="function"?Object.is:F0;function Mo(t,i){if(pi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var f=s[u];if(!h.call(i,f)||!pi(t[f],i[f]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yd(t,i){var s=xd(t);t=0;for(var u;s;){if(s.nodeType===3){if(u=t+s.textContent.length,t<=i&&u>=i)return{node:s,offset:i-t};t=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xd(s)}}function Sd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Md(){for(var t=window,i=et();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=et(t.document)}return i}function _u(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function k0(t){var i=Md(),s=t.focusedElem,u=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Sd(s.ownerDocument.documentElement,s)){if(u!==null&&_u(s)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=yd(s,p);var M=yd(s,u);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z0=c&&"documentMode"in document&&11>=document.documentMode,cs=null,vu=null,Eo=null,xu=!1;function Ed(t,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;xu||cs==null||cs!==et(u)||(u=cs,"selectionStart"in u&&_u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Eo&&Mo(Eo,u)||(Eo=u,u=Ea(vu,"onSelect"),0<u.length&&(i=new uu("onSelect","select",null,i,s),t.push({event:i,listeners:u}),i.target=cs)))}function ya(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var fs={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},yu={},wd={};c&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Sa(t){if(yu[t])return yu[t];if(!fs[t])return t;var i=fs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in wd)return yu[t]=i[s];return t}var Td=Sa("animationend"),Ad=Sa("animationiteration"),Rd=Sa("animationstart"),Cd=Sa("transitionend"),bd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,i){bd.set(t,i),l(i,[t])}for(var Su=0;Su<Pd.length;Su++){var Mu=Pd[Su],B0=Mu.toLowerCase(),H0=Mu[0].toUpperCase()+Mu.slice(1);nr(B0,"on"+H0)}nr(Td,"onAnimationEnd"),nr(Ad,"onAnimationIteration"),nr(Rd,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Ld(t,i,s){var u=t.type||"unknown-event";t.currentTarget=s,xn(u,i,void 0,t),t.currentTarget=null}function Dd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var u=t[s],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var O=u[M],B=O.instance,ne=O.currentTarget;if(O=O.listener,B!==p&&f.isPropagationStopped())break e;Ld(f,O,ne),p=B}else for(M=0;M<u.length;M++){if(O=u[M],B=O.instance,ne=O.currentTarget,O=O.listener,B!==p&&f.isPropagationStopped())break e;Ld(f,O,ne),p=B}}}if(Ot)throw t=Nt,Ot=!1,Nt=null,t}function Gt(t,i){var s=i[Pu];s===void 0&&(s=i[Pu]=new Set);var u=t+"__bubble";s.has(u)||(Nd(i,t,2,!1),s.add(u))}function Eu(t,i,s){var u=0;i&&(u|=4),Nd(s,t,u,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[Ma]){t[Ma]=!0,r.forEach(function(s){s!=="selectionchange"&&(G0.has(s)||Eu(s,!1,t),Eu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,Eu("selectionchange",!1,i))}}function Nd(t,i,s,u){switch(nd(i)){case 1:var f=n0;break;case 4:f=i0;break;default:f=ou}s=f.bind(null,i,s,t),f=void 0,!at||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function wu(t,i,s,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var O=u.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;O!==null;){if(M=Dr(O),M===null)return;if(B=M.tag,B===5||B===6){u=p=M;continue e}O=O.parentNode}}u=u.return}Le(function(){var ne=p,Se=ke(s),Te=[];e:{var ye=bd.get(t);if(ye!==void 0){var Ge=uu,Ke=t;switch(t){case"keypress":if(ga(s)===0)break e;case"keydown":case"keyup":Ge=v0;break;case"focusin":Ke="focus",Ge=du;break;case"focusout":Ke="blur",Ge=du;break;case"beforeblur":case"afterblur":Ge=du;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=S0;break;case Td:case Ad:case Rd:Ge=u0;break;case Cd:Ge=E0;break;case"scroll":Ge=r0;break;case"wheel":Ge=T0;break;case"copy":case"cut":case"paste":Ge=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=ad}var Je=(i&4)!==0,tn=!Je&&t==="scroll",K=Je?ye!==null?ye+"Capture":null:ye;Je=[];for(var W=ne,ee;W!==null;){ee=W;var Ce=ee.stateNode;if(ee.tag===5&&Ce!==null&&(ee=Ce,K!==null&&(Ce=Me(W,K),Ce!=null&&Je.push(Ao(W,Ce,ee)))),tn)break;W=W.return}0<Je.length&&(ye=new Ge(ye,Ke,null,s,Se),Te.push({event:ye,listeners:Je}))}}if((i&7)===0){e:{if(ye=t==="mouseover"||t==="pointerover",Ge=t==="mouseout"||t==="pointerout",ye&&s!==Qe&&(Ke=s.relatedTarget||s.fromElement)&&(Dr(Ke)||Ke[Ni]))break e;if((Ge||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ge?(Ke=s.relatedTarget||s.toElement,Ge=ne,Ke=Ke?Dr(Ke):null,Ke!==null&&(tn=kn(Ke),Ke!==tn||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(Ge=null,Ke=ne),Ge!==Ke)){if(Je=sd,Ce="onMouseLeave",K="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Je=ad,Ce="onPointerLeave",K="onPointerEnter",W="pointer"),tn=Ge==null?ye:ps(Ge),ee=Ke==null?ye:ps(Ke),ye=new Je(Ce,W+"leave",Ge,s,Se),ye.target=tn,ye.relatedTarget=ee,Ce=null,Dr(Se)===ne&&(Je=new Je(K,W+"enter",Ke,s,Se),Je.target=ee,Je.relatedTarget=tn,Ce=Je),tn=Ce,Ge&&Ke)t:{for(Je=Ge,K=Ke,W=0,ee=Je;ee;ee=ds(ee))W++;for(ee=0,Ce=K;Ce;Ce=ds(Ce))ee++;for(;0<W-ee;)Je=ds(Je),W--;for(;0<ee-W;)K=ds(K),ee--;for(;W--;){if(Je===K||K!==null&&Je===K.alternate)break t;Je=ds(Je),K=ds(K)}Je=null}else Je=null;Ge!==null&&Ud(Te,ye,Ge,Je,!1),Ke!==null&&tn!==null&&Ud(Te,tn,Ke,Je,!0)}}e:{if(ye=ne?ps(ne):window,Ge=ye.nodeName&&ye.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&ye.type==="file")var nt=D0;else if(hd(ye))if(md)nt=O0;else{nt=U0;var lt=N0}else(Ge=ye.nodeName)&&Ge.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(nt=I0);if(nt&&(nt=nt(t,ne))){pd(Te,nt,s,Se);break e}lt&&lt(t,ye,ne),t==="focusout"&&(lt=ye._wrapperState)&&lt.controlled&&ye.type==="number"&&L(ye,"number",ye.value)}switch(lt=ne?ps(ne):window,t){case"focusin":(hd(lt)||lt.contentEditable==="true")&&(cs=lt,vu=ne,Eo=null);break;case"focusout":Eo=vu=cs=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Ed(Te,s,Se);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":Ed(Te,s,Se)}var ut;if(pu)e:{switch(t){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else us?fd(t,s)&&(mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(mt="onCompositionStart");mt&&(ld&&s.locale!=="ko"&&(us||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&us&&(ut=id()):(tr=Se,lu="value"in tr?tr.value:tr.textContent,us=!0)),lt=Ea(ne,mt),0<lt.length&&(mt=new od(mt,t,null,s,Se),Te.push({event:mt,listeners:lt}),ut?mt.data=ut:(ut=dd(s),ut!==null&&(mt.data=ut)))),(ut=R0?C0(t,s):b0(t,s))&&(ne=Ea(ne,"onBeforeInput"),0<ne.length&&(Se=new od("onBeforeInput","beforeinput",null,s,Se),Te.push({event:Se,listeners:ne}),Se.data=ut))}Dd(Te,i)})}function Ao(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ea(t,i){for(var s=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Me(t,s),p!=null&&u.unshift(Ao(t,p,f)),p=Me(t,i),p!=null&&u.push(Ao(t,p,f))),t=t.return}return u}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,i,s,u,f){for(var p=i._reactName,M=[];s!==null&&s!==u;){var O=s,B=O.alternate,ne=O.stateNode;if(B!==null&&B===u)break;O.tag===5&&ne!==null&&(O=ne,f?(B=Me(s,p),B!=null&&M.unshift(Ao(s,B,O))):f||(B=Me(s,p),B!=null&&M.push(Ao(s,B,O)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var V0=/\r\n?/g,W0=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(V0,`
`).replace(W0,"")}function wa(t,i,s){if(i=Id(i),Id(t)!==i&&s)throw Error(n(425))}function Ta(){}var Tu=null,Au=null;function Ru(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(Y0)}:Cu;function Y0(t){setTimeout(function(){throw t})}function bu(t,i){var s=i,u=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(u===0){t.removeChild(f),go(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=f}while(s);go(i)}function ir(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Ai="__reactFiber$"+hs,Ro="__reactProps$"+hs,Ni="__reactContainer$"+hs,Pu="__reactEvents$"+hs,q0="__reactListeners$"+hs,$0="__reactHandles$"+hs;function Dr(t){var i=t[Ai];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ni]||s[Ai]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Fd(t);t!==null;){if(s=t[Ai])return s;t=Fd(t)}return i}t=s,s=t.parentNode}return null}function Co(t){return t=t[Ai]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Aa(t){return t[Ro]||null}var Lu=[],ms=-1;function rr(t){return{current:t}}function Vt(t){0>ms||(t.current=Lu[ms],Lu[ms]=null,ms--)}function Bt(t,i){ms++,Lu[ms]=t.current,t.current=i}var sr={},yn=rr(sr),Hn=rr(!1),Nr=sr;function gs(t,i){var s=t.type.contextTypes;if(!s)return sr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in s)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Gn(t){return t=t.childContextTypes,t!=null}function Ra(){Vt(Hn),Vt(yn)}function kd(t,i,s){if(yn.current!==sr)throw Error(n(168));Bt(yn,i),Bt(Hn,s)}function zd(t,i,s){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,be(t)||"Unknown",f));return q({},s,u)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Nr=yn.current,Bt(yn,t),Bt(Hn,Hn.current),!0}function Bd(t,i,s){var u=t.stateNode;if(!u)throw Error(n(169));s?(t=zd(t,i,Nr),u.__reactInternalMemoizedMergedChildContext=t,Vt(Hn),Vt(yn),Bt(yn,t)):Vt(Hn),Bt(Hn,s)}var Ui=null,ba=!1,Du=!1;function Hd(t){Ui===null?Ui=[t]:Ui.push(t)}function K0(t){ba=!0,Hd(t)}function or(){if(!Du&&Ui!==null){Du=!0;var t=0,i=It;try{var s=Ui;for(It=1;t<s.length;t++){var u=s[t];do u=u(!0);while(u!==null)}Ui=null,ba=!1}catch(f){throw Ui!==null&&(Ui=Ui.slice(t+1)),ie(_t,or),f}finally{It=i,Du=!1}}return null}var _s=[],vs=0,Pa=null,La=0,ri=[],si=0,Ur=null,Ii=1,Oi="";function Ir(t,i){_s[vs++]=La,_s[vs++]=Pa,Pa=t,La=i}function Gd(t,i,s){ri[si++]=Ii,ri[si++]=Oi,ri[si++]=Ur,Ur=t;var u=Ii;t=Oi;var f=32-Rn(u)-1;u&=~(1<<f),s+=1;var p=32-Rn(i)+f;if(30<p){var M=f-f%5;p=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Ii=1<<32-Rn(i)+f|s<<f|u,Oi=p+t}else Ii=1<<p|s<<f|u,Oi=t}function Nu(t){t.return!==null&&(Ir(t,1),Gd(t,1,0))}function Uu(t){for(;t===Pa;)Pa=_s[--vs],_s[vs]=null,La=_s[--vs],_s[vs]=null;for(;t===Ur;)Ur=ri[--si],ri[si]=null,Oi=ri[--si],ri[si]=null,Ii=ri[--si],ri[si]=null}var $n=null,Kn=null,Yt=!1,mi=null;function Vd(t,i){var s=ui(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Wd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,$n=t,Kn=ir(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,$n=t,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ur!==null?{id:Ii,overflow:Oi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=ui(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,$n=t,Kn=null,!0):!1;default:return!1}}function Iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(Yt){var i=Kn;if(i){var s=i;if(!Wd(t,i)){if(Iu(t))throw Error(n(418));i=ir(s.nextSibling);var u=$n;i&&Wd(t,i)?Vd(u,s):(t.flags=t.flags&-4097|2,Yt=!1,$n=t)}}else{if(Iu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Yt=!1,$n=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$n=t}function Da(t){if(t!==$n)return!1;if(!Yt)return Xd(t),Yt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ru(t.type,t.memoizedProps)),i&&(i=Kn)){if(Iu(t))throw jd(),Error(n(418));for(;i;)Vd(t,i),i=ir(i.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Kn=ir(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Kn=null}}else Kn=$n?ir(t.stateNode.nextSibling):null;return!0}function jd(){for(var t=Kn;t;)t=ir(t.nextSibling)}function xs(){Kn=$n=null,Yt=!1}function Fu(t){mi===null?mi=[t]:mi.push(t)}var Z0=D.ReactCurrentBatchConfig;function bo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var u=s.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var O=f.refs;M===null?delete O[p]:O[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Na(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function qd(t){function i(K,W){if(t){var ee=K.deletions;ee===null?(K.deletions=[W],K.flags|=16):ee.push(W)}}function s(K,W){if(!t)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function u(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function f(K,W){return K=pr(K,W),K.index=0,K.sibling=null,K}function p(K,W,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<W?(K.flags|=2,W):ee):(K.flags|=2,W)):(K.flags|=1048576,W)}function M(K){return t&&K.alternate===null&&(K.flags|=2),K}function O(K,W,ee,Ce){return W===null||W.tag!==6?(W=Cc(ee,K.mode,Ce),W.return=K,W):(W=f(W,ee),W.return=K,W)}function B(K,W,ee,Ce){var nt=ee.type;return nt===k?Se(K,W,ee.props.children,Ce,ee.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===re&&Yd(nt)===W.type)?(Ce=f(W,ee.props),Ce.ref=bo(K,W,ee),Ce.return=K,Ce):(Ce=il(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=bo(K,W,ee),Ce.return=K,Ce)}function ne(K,W,ee,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=bc(ee,K.mode,Ce),W.return=K,W):(W=f(W,ee.children||[]),W.return=K,W)}function Se(K,W,ee,Ce,nt){return W===null||W.tag!==7?(W=Vr(ee,K.mode,Ce,nt),W.return=K,W):(W=f(W,ee),W.return=K,W)}function Te(K,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Cc(""+W,K.mode,ee),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case H:return ee=il(W.type,W.key,W.props,null,K.mode,ee),ee.ref=bo(K,null,W),ee.return=K,ee;case F:return W=bc(W,K.mode,ee),W.return=K,W;case re:var Ce=W._init;return Te(K,Ce(W._payload),ee)}if(T(W)||Q(W))return W=Vr(W,K.mode,ee,null),W.return=K,W;Na(K,W)}return null}function ye(K,W,ee,Ce){var nt=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return nt!==null?null:O(K,W,""+ee,Ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:return ee.key===nt?B(K,W,ee,Ce):null;case F:return ee.key===nt?ne(K,W,ee,Ce):null;case re:return nt=ee._init,ye(K,W,nt(ee._payload),Ce)}if(T(ee)||Q(ee))return nt!==null?null:Se(K,W,ee,Ce,null);Na(K,ee)}return null}function Ge(K,W,ee,Ce,nt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(ee)||null,O(W,K,""+Ce,nt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case H:return K=K.get(Ce.key===null?ee:Ce.key)||null,B(W,K,Ce,nt);case F:return K=K.get(Ce.key===null?ee:Ce.key)||null,ne(W,K,Ce,nt);case re:var lt=Ce._init;return Ge(K,W,ee,lt(Ce._payload),nt)}if(T(Ce)||Q(Ce))return K=K.get(ee)||null,Se(W,K,Ce,nt,null);Na(W,Ce)}return null}function Ke(K,W,ee,Ce){for(var nt=null,lt=null,ut=W,mt=W=0,pn=null;ut!==null&&mt<ee.length;mt++){ut.index>mt?(pn=ut,ut=null):pn=ut.sibling;var Ut=ye(K,ut,ee[mt],Ce);if(Ut===null){ut===null&&(ut=pn);break}t&&ut&&Ut.alternate===null&&i(K,ut),W=p(Ut,W,mt),lt===null?nt=Ut:lt.sibling=Ut,lt=Ut,ut=pn}if(mt===ee.length)return s(K,ut),Yt&&Ir(K,mt),nt;if(ut===null){for(;mt<ee.length;mt++)ut=Te(K,ee[mt],Ce),ut!==null&&(W=p(ut,W,mt),lt===null?nt=ut:lt.sibling=ut,lt=ut);return Yt&&Ir(K,mt),nt}for(ut=u(K,ut);mt<ee.length;mt++)pn=Ge(ut,K,mt,ee[mt],Ce),pn!==null&&(t&&pn.alternate!==null&&ut.delete(pn.key===null?mt:pn.key),W=p(pn,W,mt),lt===null?nt=pn:lt.sibling=pn,lt=pn);return t&&ut.forEach(function(mr){return i(K,mr)}),Yt&&Ir(K,mt),nt}function Je(K,W,ee,Ce){var nt=Q(ee);if(typeof nt!="function")throw Error(n(150));if(ee=nt.call(ee),ee==null)throw Error(n(151));for(var lt=nt=null,ut=W,mt=W=0,pn=null,Ut=ee.next();ut!==null&&!Ut.done;mt++,Ut=ee.next()){ut.index>mt?(pn=ut,ut=null):pn=ut.sibling;var mr=ye(K,ut,Ut.value,Ce);if(mr===null){ut===null&&(ut=pn);break}t&&ut&&mr.alternate===null&&i(K,ut),W=p(mr,W,mt),lt===null?nt=mr:lt.sibling=mr,lt=mr,ut=pn}if(Ut.done)return s(K,ut),Yt&&Ir(K,mt),nt;if(ut===null){for(;!Ut.done;mt++,Ut=ee.next())Ut=Te(K,Ut.value,Ce),Ut!==null&&(W=p(Ut,W,mt),lt===null?nt=Ut:lt.sibling=Ut,lt=Ut);return Yt&&Ir(K,mt),nt}for(ut=u(K,ut);!Ut.done;mt++,Ut=ee.next())Ut=Ge(ut,K,mt,Ut.value,Ce),Ut!==null&&(t&&Ut.alternate!==null&&ut.delete(Ut.key===null?mt:Ut.key),W=p(Ut,W,mt),lt===null?nt=Ut:lt.sibling=Ut,lt=Ut);return t&&ut.forEach(function(P_){return i(K,P_)}),Yt&&Ir(K,mt),nt}function tn(K,W,ee,Ce){if(typeof ee=="object"&&ee!==null&&ee.type===k&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case H:e:{for(var nt=ee.key,lt=W;lt!==null;){if(lt.key===nt){if(nt=ee.type,nt===k){if(lt.tag===7){s(K,lt.sibling),W=f(lt,ee.props.children),W.return=K,K=W;break e}}else if(lt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===re&&Yd(nt)===lt.type){s(K,lt.sibling),W=f(lt,ee.props),W.ref=bo(K,lt,ee),W.return=K,K=W;break e}s(K,lt);break}else i(K,lt);lt=lt.sibling}ee.type===k?(W=Vr(ee.props.children,K.mode,Ce,ee.key),W.return=K,K=W):(Ce=il(ee.type,ee.key,ee.props,null,K.mode,Ce),Ce.ref=bo(K,W,ee),Ce.return=K,K=Ce)}return M(K);case F:e:{for(lt=ee.key;W!==null;){if(W.key===lt)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){s(K,W.sibling),W=f(W,ee.children||[]),W.return=K,K=W;break e}else{s(K,W);break}else i(K,W);W=W.sibling}W=bc(ee,K.mode,Ce),W.return=K,K=W}return M(K);case re:return lt=ee._init,tn(K,W,lt(ee._payload),Ce)}if(T(ee))return Ke(K,W,ee,Ce);if(Q(ee))return Je(K,W,ee,Ce);Na(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(s(K,W.sibling),W=f(W,ee),W.return=K,K=W):(s(K,W),W=Cc(ee,K.mode,Ce),W.return=K,K=W),M(K)):s(K,W)}return tn}var ys=qd(!0),$d=qd(!1),Ua=rr(null),Ia=null,Ss=null,ku=null;function zu(){ku=Ss=Ia=null}function Bu(t){var i=Ua.current;Vt(Ua),t._currentValue=i}function Hu(t,i,s){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===s)break;t=t.return}}function Ms(t,i){Ia=t,ku=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Vn=!0),t.firstContext=null)}function oi(t){var i=t._currentValue;if(ku!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Ia===null)throw Error(n(308));Ss=t,Ia.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var Or=null;function Gu(t){Or===null?Or=[t]:Or.push(t)}function Kd(t,i,s,u){var f=i.interleaved;return f===null?(s.next=s,Gu(i)):(s.next=f.next,f.next=s),i.interleaved=s,Fi(t,u)}function Fi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var ar=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(t,i,s){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Dt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Fi(t,s)}return f=u.interleaved,f===null?(i.next=i,Gu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Fi(t,s)}function Oa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,iu(t,s)}}function Qd(t,i){var s=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Fa(t,i,s,u){var f=t.updateQueue;ar=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var B=O,ne=B.next;B.next=null,M===null?p=ne:M.next=ne,M=B;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,O=Se.lastBaseUpdate,O!==M&&(O===null?Se.firstBaseUpdate=ne:O.next=ne,Se.lastBaseUpdate=B))}if(p!==null){var Te=f.baseState;M=0,Se=ne=B=null,O=p;do{var ye=O.lane,Ge=O.eventTime;if((u&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ke=t,Je=O;switch(ye=i,Ge=s,Je.tag){case 1:if(Ke=Je.payload,typeof Ke=="function"){Te=Ke.call(Ge,Te,ye);break e}Te=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Je.payload,ye=typeof Ke=="function"?Ke.call(Ge,Te,ye):Ke,ye==null)break e;Te=q({},Te,ye);break e;case 2:ar=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,ye=f.effects,ye===null?f.effects=[O]:ye.push(O))}else Ge={eventTime:Ge,lane:ye,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Se===null?(ne=Se=Ge,B=Te):Se=Se.next=Ge,M|=ye;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;ye=O,O=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Se===null&&(B=Te),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);zr|=M,t.lanes=M,t.memoizedState=Te}}function Jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=s,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Po={},Ri=rr(Po),Lo=rr(Po),Do=rr(Po);function Fr(t){if(t===Po)throw Error(n(174));return t}function Wu(t,i){switch(Bt(Do,i),Bt(Lo,t),Bt(Ri,Po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ze(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ze(i,t)}Vt(Ri),Bt(Ri,i)}function Es(){Vt(Ri),Vt(Lo),Vt(Do)}function eh(t){Fr(Do.current);var i=Fr(Ri.current),s=ze(i,t.type);i!==s&&(Bt(Lo,t),Bt(Ri,s))}function Xu(t){Lo.current===t&&(Vt(Ri),Vt(Lo))}var $t=rr(0);function ka(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ju=[];function Yu(){for(var t=0;t<ju.length;t++)ju[t]._workInProgressVersionPrimary=null;ju.length=0}var za=D.ReactCurrentDispatcher,qu=D.ReactCurrentBatchConfig,kr=0,Kt=null,on=null,dn=null,Ba=!1,No=!1,Uo=0,Q0=0;function Sn(){throw Error(n(321))}function $u(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!pi(t[s],i[s]))return!1;return!0}function Ku(t,i,s,u,f,p){if(kr=p,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=t===null||t.memoizedState===null?n_:i_,t=s(u,f),No){p=0;do{if(No=!1,Uo=0,25<=p)throw Error(n(301));p+=1,dn=on=null,i.updateQueue=null,za.current=r_,t=s(u,f)}while(No)}if(za.current=Va,i=on!==null&&on.next!==null,kr=0,dn=on=Kt=null,Ba=!1,i)throw Error(n(300));return t}function Zu(){var t=Uo!==0;return Uo=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Kt.memoizedState=dn=t:dn=dn.next=t,dn}function ai(){if(on===null){var t=Kt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=dn===null?Kt.memoizedState:dn.next;if(i!==null)dn=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Kt.memoizedState=dn=t:dn=dn.next=t}return dn}function Io(t,i){return typeof i=="function"?i(t):i}function Qu(t){var i=ai(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=on,f=u.baseQueue,p=s.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}u.baseQueue=f=p,s.pending=null}if(f!==null){p=f.next,u=u.baseState;var O=M=null,B=null,ne=p;do{var Se=ne.lane;if((kr&Se)===Se)B!==null&&(B=B.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:t(u,ne.action);else{var Te={lane:Se,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};B===null?(O=B=Te,M=u):B=B.next=Te,Kt.lanes|=Se,zr|=Se}ne=ne.next}while(ne!==null&&ne!==p);B===null?M=u:B.next=O,pi(u,i.memoizedState)||(Vn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,s.lastRenderedState=u}if(t=s.interleaved,t!==null){f=t;do p=f.lane,Kt.lanes|=p,zr|=p,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Ju(t){var i=ai(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var u=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);pi(p,i.memoizedState)||(Vn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,u]}function th(){}function nh(t,i){var s=Kt,u=ai(),f=i(),p=!pi(u.memoizedState,f);if(p&&(u.memoizedState=f,Vn=!0),u=u.queue,ec(sh.bind(null,s,u,t),[t]),u.getSnapshot!==i||p||dn!==null&&dn.memoizedState.tag&1){if(s.flags|=2048,Oo(9,rh.bind(null,s,u,f,i),void 0,null),hn===null)throw Error(n(349));(kr&30)!==0||ih(s,i,f)}return f}function ih(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function rh(t,i,s,u){i.value=s,i.getSnapshot=u,oh(i)&&ah(t)}function sh(t,i,s){return s(function(){oh(i)&&ah(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!pi(t,s)}catch{return!0}}function ah(t){var i=Fi(t,1);i!==null&&xi(i,t,1,-1)}function lh(t){var i=Ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},i.queue=t,t=t.dispatch=t_.bind(null,Kt,t),[i.memoizedState,t]}function Oo(t,i,s,u){return t={tag:t,create:i,destroy:s,deps:u,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(u=s.next,s.next=t,t.next=u,i.lastEffect=t)),t}function uh(){return ai().memoizedState}function Ha(t,i,s,u){var f=Ci();Kt.flags|=t,f.memoizedState=Oo(1|i,s,void 0,u===void 0?null:u)}function Ga(t,i,s,u){var f=ai();u=u===void 0?null:u;var p=void 0;if(on!==null){var M=on.memoizedState;if(p=M.destroy,u!==null&&$u(u,M.deps)){f.memoizedState=Oo(i,s,p,u);return}}Kt.flags|=t,f.memoizedState=Oo(1|i,s,p,u)}function ch(t,i){return Ha(8390656,8,t,i)}function ec(t,i){return Ga(2048,8,t,i)}function fh(t,i){return Ga(4,2,t,i)}function dh(t,i){return Ga(4,4,t,i)}function hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ph(t,i,s){return s=s!=null?s.concat([t]):null,Ga(4,4,hh.bind(null,i,t),s)}function tc(){}function mh(t,i){var s=ai();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&$u(i,u[1])?u[0]:(s.memoizedState=[t,i],t)}function gh(t,i){var s=ai();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&$u(i,u[1])?u[0]:(t=t(),s.memoizedState=[t,i],t)}function _h(t,i,s){return(kr&21)===0?(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=s):(pi(s,i)||(s=ca(),Kt.lanes|=s,zr|=s,t.baseState=!0),i)}function J0(t,i){var s=It;It=s!==0&&4>s?s:4,t(!0);var u=qu.transition;qu.transition={};try{t(!1),i()}finally{It=s,qu.transition=u}}function vh(){return ai().memoizedState}function e_(t,i,s){var u=dr(t);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},xh(t))yh(i,s);else if(s=Kd(t,i,s,u),s!==null){var f=bn();xi(s,t,u,f),Sh(s,i,u)}}function t_(t,i,s){var u=dr(t),f={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(xh(t))yh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,O=p(M,s);if(f.hasEagerState=!0,f.eagerState=O,pi(O,M)){var B=i.interleaved;B===null?(f.next=f,Gu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}s=Kd(t,i,f,u),s!==null&&(f=bn(),xi(s,t,u,f),Sh(s,i,u))}}function xh(t){var i=t.alternate;return t===Kt||i!==null&&i===Kt}function yh(t,i){No=Ba=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Sh(t,i,s){if((s&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,s|=u,i.lanes=s,iu(t,s)}}var Va={readContext:oi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},n_={readContext:oi,useCallback:function(t,i){return Ci().memoizedState=[t,i===void 0?null:i],t},useContext:oi,useEffect:ch,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ha(4194308,4,hh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ha(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ha(4,2,t,i)},useMemo:function(t,i){var s=Ci();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var u=Ci();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=e_.bind(null,Kt,t),[u.memoizedState,t]},useRef:function(t){var i=Ci();return t={current:t},i.memoizedState=t},useState:lh,useDebugValue:tc,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=lh(!1),i=t[0];return t=J0.bind(null,t[1]),Ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var u=Kt,f=Ci();if(Yt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),hn===null)throw Error(n(349));(kr&30)!==0||ih(u,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,ch(sh.bind(null,u,p,t),[t]),u.flags|=2048,Oo(9,rh.bind(null,u,p,s,i),void 0,null),s},useId:function(){var t=Ci(),i=hn.identifierPrefix;if(Yt){var s=Oi,u=Ii;s=(u&~(1<<32-Rn(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=Uo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Q0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},i_={readContext:oi,useCallback:mh,useContext:oi,useEffect:ec,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Qu,useRef:uh,useState:function(){return Qu(Io)},useDebugValue:tc,useDeferredValue:function(t){var i=ai();return _h(i,on.memoizedState,t)},useTransition:function(){var t=Qu(Io)[0],i=ai().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1},r_={readContext:oi,useCallback:mh,useContext:oi,useEffect:ec,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Ju,useRef:uh,useState:function(){return Ju(Io)},useDebugValue:tc,useDeferredValue:function(t){var i=ai();return on===null?i.memoizedState=t:_h(i,on.memoizedState,t)},useTransition:function(){var t=Ju(Io)[0],i=ai().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1};function gi(t,i){if(t&&t.defaultProps){i=q({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function nc(t,i,s,u){i=t.memoizedState,s=s(u,i),s=s==null?i:q({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Wa={isMounted:function(t){return(t=t._reactInternals)?kn(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var u=bn(),f=dr(t),p=ki(u,f);p.payload=i,s!=null&&(p.callback=s),i=lr(t,p,f),i!==null&&(xi(i,t,f,u),Oa(i,t,f))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var u=bn(),f=dr(t),p=ki(u,f);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=lr(t,p,f),i!==null&&(xi(i,t,f,u),Oa(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=bn(),u=dr(t),f=ki(s,u);f.tag=2,i!=null&&(f.callback=i),i=lr(t,f,u),i!==null&&(xi(i,t,u,s),Oa(i,t,u))}};function Mh(t,i,s,u,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!Mo(s,u)||!Mo(f,p):!0}function Eh(t,i,s){var u=!1,f=sr,p=i.contextType;return typeof p=="object"&&p!==null?p=oi(p):(f=Gn(i)?Nr:yn.current,u=i.contextTypes,p=(u=u!=null)?gs(t,f):sr),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function wh(t,i,s,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==t&&Wa.enqueueReplaceState(i,i.state,null)}function ic(t,i,s,u){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},Vu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=oi(p):(p=Gn(i)?Nr:yn.current,f.context=gs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(nc(t,i,p,s),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wa.enqueueReplaceState(f,f.state,null),Fa(t,s,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,i){try{var s="",u=i;do s+=me(u),u=u.return;while(u);var f=s}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function rc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function sc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,s){s=ki(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){Za||(Za=!0,yc=u),sc(t,i)},s}function Ah(t,i,s){s=ki(-1,s),s.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;s.payload=function(){return u(f)},s.callback=function(){sc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){sc(t,i),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Rh(t,i,s){var u=t.pingCache;if(u===null){u=t.pingCache=new s_;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(s)||(f.add(s),t=x_.bind(null,t,i,s),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function bh(t,i,s,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=ki(-1,1),i.tag=2,lr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var o_=D.ReactCurrentOwner,Vn=!1;function Cn(t,i,s,u){i.child=t===null?$d(i,null,s,u):ys(i,t.child,s,u)}function Ph(t,i,s,u,f){s=s.render;var p=i.ref;return Ms(i,f),u=Ku(t,i,s,u,p,f),s=Zu(),t!==null&&!Vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,zi(t,i,f)):(Yt&&s&&Nu(i),i.flags|=1,Cn(t,i,u,f),i.child)}function Lh(t,i,s,u,f){if(t===null){var p=s.type;return typeof p=="function"&&!Rc(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Dh(t,i,p,u,f)):(t=il(s.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:Mo,s(M,u)&&t.ref===i.ref)return zi(t,i,f)}return i.flags|=1,t=pr(p,u),t.ref=i.ref,t.return=i,i.child=t}function Dh(t,i,s,u,f){if(t!==null){var p=t.memoizedProps;if(Mo(p,u)&&t.ref===i.ref)if(Vn=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Vn=!0);else return i.lanes=t.lanes,zi(t,i,f)}return oc(t,i,s,u,f)}function Nh(t,i,s){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(As,Zn),Zn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(As,Zn),Zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:s,Bt(As,Zn),Zn|=u}else p!==null?(u=p.baseLanes|s,i.memoizedState=null):u=s,Bt(As,Zn),Zn|=u;return Cn(t,i,f,s),i.child}function Uh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function oc(t,i,s,u,f){var p=Gn(s)?Nr:yn.current;return p=gs(i,p),Ms(i,f),s=Ku(t,i,s,u,p,f),u=Zu(),t!==null&&!Vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,zi(t,i,f)):(Yt&&u&&Nu(i),i.flags|=1,Cn(t,i,s,f),i.child)}function Ih(t,i,s,u,f){if(Gn(s)){var p=!0;Ca(i)}else p=!1;if(Ms(i,f),i.stateNode===null)ja(t,i),Eh(i,s,u),ic(i,s,u,f),u=!0;else if(t===null){var M=i.stateNode,O=i.memoizedProps;M.props=O;var B=M.context,ne=s.contextType;typeof ne=="object"&&ne!==null?ne=oi(ne):(ne=Gn(s)?Nr:yn.current,ne=gs(i,ne));var Se=s.getDerivedStateFromProps,Te=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(O!==u||B!==ne)&&wh(i,M,u,ne),ar=!1;var ye=i.memoizedState;M.state=ye,Fa(i,u,M,f),B=i.memoizedState,O!==u||ye!==B||Hn.current||ar?(typeof Se=="function"&&(nc(i,s,Se,u),B=i.memoizedState),(O=ar||Mh(i,s,O,u,ye,B,ne))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=ne,u=O):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Zd(t,i),O=i.memoizedProps,ne=i.type===i.elementType?O:gi(i.type,O),M.props=ne,Te=i.pendingProps,ye=M.context,B=s.contextType,typeof B=="object"&&B!==null?B=oi(B):(B=Gn(s)?Nr:yn.current,B=gs(i,B));var Ge=s.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(O!==Te||ye!==B)&&wh(i,M,u,B),ar=!1,ye=i.memoizedState,M.state=ye,Fa(i,u,M,f);var Ke=i.memoizedState;O!==Te||ye!==Ke||Hn.current||ar?(typeof Ge=="function"&&(nc(i,s,Ge,u),Ke=i.memoizedState),(ne=ar||Mh(i,s,ne,u,ye,Ke,B)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ke,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ke,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||O===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ke),M.props=u,M.state=Ke,M.context=B,u=ne):(typeof M.componentDidUpdate!="function"||O===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),u=!1)}return ac(t,i,s,u,p,f)}function ac(t,i,s,u,f,p){Uh(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&Bd(i,s,!1),zi(t,i,p);u=i.stateNode,o_.current=i;var O=M&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=ys(i,t.child,null,p),i.child=ys(i,null,O,p)):Cn(t,i,O,p),i.memoizedState=u.state,f&&Bd(i,s,!0),i.child}function Oh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),Wu(t,i.containerInfo)}function Fh(t,i,s,u,f){return xs(),Fu(f),i.flags|=256,Cn(t,i,s,u),i.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,s){var u=i.pendingProps,f=$t.current,p=!1,M=(i.flags&128)!==0,O;if((O=M)||(O=t!==null&&t.memoizedState===null?!1:(f&2)!==0),O?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Bt($t,f&1),t===null)return Ou(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=rl(M,u,0,null),t=Vr(t,u,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=uc(s),i.memoizedState=lc,t):cc(i,M));if(f=t.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return a_(t,i,M,u,O,f,s);if(p){p=u.fallback,M=i.mode,f=t.child,O=f.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=pr(f,B),u.subtreeFlags=f.subtreeFlags&14680064),O!==null?p=pr(O,p):(p=Vr(p,M,s,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=t.child.memoizedState,M=M===null?uc(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~s,i.memoizedState=lc,u}return p=t.child,t=p.sibling,u=pr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=s),u.return=i,u.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=u,i.memoizedState=null,u}function cc(t,i){return i=rl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Xa(t,i,s,u){return u!==null&&Fu(u),ys(i,t.child,null,s),t=cc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function a_(t,i,s,u,f,p,M){if(s)return i.flags&256?(i.flags&=-257,u=rc(Error(n(422))),Xa(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=rl({mode:"visible",children:u.children},f,0,null),p=Vr(p,f,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&ys(i,t.child,null,M),i.child.memoizedState=uc(M),i.memoizedState=lc,p);if((i.mode&1)===0)return Xa(t,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var O=u.dgst;return u=O,p=Error(n(419)),u=rc(p,u,void 0),Xa(t,i,M,u)}if(O=(M&t.childLanes)!==0,Vn||O){if(u=hn,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Fi(t,f),xi(u,t,f,-1))}return Ac(),u=rc(Error(n(421))),Xa(t,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=y_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Kn=ir(f.nextSibling),$n=i,Yt=!0,mi=null,t!==null&&(ri[si++]=Ii,ri[si++]=Oi,ri[si++]=Ur,Ii=t.id,Oi=t.overflow,Ur=i),i=cc(i,u.children),i.flags|=4096,i)}function zh(t,i,s){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Hu(t.return,i,s)}function fc(t,i,s,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=s,p.tailMode=f)}function Bh(t,i,s){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Cn(t,i,u.children,s),u=$t.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,s,i);else if(t.tag===19)zh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Bt($t,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&ka(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),fc(i,!1,f,s,p);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ka(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}fc(i,!0,s,null,p);break;case"together":fc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function zi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=pr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=pr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function l_(t,i,s){switch(i.tag){case 3:Oh(i),xs();break;case 5:eh(i);break;case 1:Gn(i.type)&&Ca(i);break;case 4:Wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Bt(Ua,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Bt($t,$t.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?kh(t,i,s):(Bt($t,$t.current&1),t=zi(t,i,s),t!==null?t.sibling:null);Bt($t,$t.current&1);break;case 19:if(u=(s&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Bh(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt($t,$t.current),u)break;return null;case 22:case 23:return i.lanes=0,Nh(t,i,s)}return zi(t,i,s)}var Hh,dc,Gh,Vh;Hh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},dc=function(){},Gh=function(t,i,s,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Fr(Ri.current);var p=null;switch(s){case"input":f=Pe(t,f),u=Pe(t,u),p=[];break;case"select":f=q({},f,{value:void 0}),u=q({},u,{value:void 0}),p=[];break;case"textarea":f=Ee(t,f),u=Ee(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ta)}I(s,u);var M;s=null;for(ne in f)if(!u.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var O=f[ne];for(M in O)O.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in u){var B=u[ne];if(O=f!=null?f[ne]:void 0,u.hasOwnProperty(ne)&&B!==O&&(B!=null||O!=null))if(ne==="style")if(O){for(M in O)!O.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in B)B.hasOwnProperty(M)&&O[M]!==B[M]&&(s||(s={}),s[M]=B[M])}else s||(p||(p=[]),p.push(ne,s)),s=B;else ne==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,O=O?O.__html:void 0,B!=null&&O!==B&&(p=p||[]).push(ne,B)):ne==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ne,""+B):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(B!=null&&ne==="onScroll"&&Gt("scroll",t),p||O===B||(p=[])):(p=p||[]).push(ne,B))}s&&(p=p||[]).push("style",s);var ne=p;(i.updateQueue=ne)&&(i.flags|=4)}},Vh=function(t,i,s,u){s!==u&&(i.flags|=4)};function Fo(t,i){if(!Yt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,u=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=s,i}function u_(t,i,s){var u=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Gn(i.type)&&Ra(),Mn(i),null;case 3:return u=i.stateNode,Es(),Vt(Hn),Vt(yn),Yu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(Ec(mi),mi=null))),dc(t,i),Mn(i),null;case 5:Xu(i);var f=Fr(Do.current);if(s=i.type,t!==null&&i.stateNode!=null)Gh(t,i,s,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Mn(i),null}if(t=Fr(Ri.current),Da(i)){u=i.stateNode,s=i.type;var p=i.memoizedProps;switch(u[Ai]=i,u[Ro]=p,t=(i.mode&1)!==0,s){case"dialog":Gt("cancel",u),Gt("close",u);break;case"iframe":case"object":case"embed":Gt("load",u);break;case"video":case"audio":for(f=0;f<wo.length;f++)Gt(wo[f],u);break;case"source":Gt("error",u);break;case"img":case"image":case"link":Gt("error",u),Gt("load",u);break;case"details":Gt("toggle",u);break;case"input":rt(u,p),Gt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Gt("invalid",u);break;case"textarea":ge(u,p),Gt("invalid",u)}I(s,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var O=p[M];M==="children"?typeof O=="string"?u.textContent!==O&&(p.suppressHydrationWarning!==!0&&wa(u.textContent,O,t),f=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(p.suppressHydrationWarning!==!0&&wa(u.textContent,O,t),f=["children",""+O]):a.hasOwnProperty(M)&&O!=null&&M==="onScroll"&&Gt("scroll",u)}switch(s){case"input":yt(u),ct(u,p,!0);break;case"textarea":yt(u),Ze(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ta)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(s,{is:u.is}):(t=M.createElement(s),s==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,s),t[Ai]=i,t[Ro]=u,Hh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ae(s,u),s){case"dialog":Gt("cancel",t),Gt("close",t),f=u;break;case"iframe":case"object":case"embed":Gt("load",t),f=u;break;case"video":case"audio":for(f=0;f<wo.length;f++)Gt(wo[f],t);f=u;break;case"source":Gt("error",t),f=u;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=u;break;case"details":Gt("toggle",t),f=u;break;case"input":rt(t,u),f=Pe(t,u),Gt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=q({},u,{value:void 0}),Gt("invalid",t);break;case"textarea":ge(t,u),f=Ee(t,u),Gt("invalid",t);break;default:f=u}I(s,f),O=f;for(p in O)if(O.hasOwnProperty(p)){var B=O[p];p==="style"?tt(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&gt(t,B)):p==="children"?typeof B=="string"?(s!=="textarea"||B!=="")&&_e(t,B):typeof B=="number"&&_e(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Gt("scroll",t):B!=null&&A(t,p,B,M))}switch(s){case"input":yt(t),ct(t,u,!1);break;case"textarea":yt(t),Ze(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Oe(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?J(t,!!u.multiple,p,!1):u.defaultValue!=null&&J(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ta)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(s=Fr(Do.current),Fr(Ri.current),Da(i)){if(u=i.stateNode,s=i.memoizedProps,u[Ai]=i,(p=u.nodeValue!==s)&&(t=$n,t!==null))switch(t.tag){case 3:wa(u.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(u.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[Ai]=i,i.stateNode=u}return Mn(i),null;case 13:if(Vt($t),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)jd(),xs(),i.flags|=98560,p=!1;else if(p=Da(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ai]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),p=!1}else mi!==null&&(Ec(mi),mi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||($t.current&1)!==0?an===0&&(an=3):Ac())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Es(),dc(t,i),t===null&&To(i.stateNode.containerInfo),Mn(i),null;case 10:return Bu(i.type._context),Mn(i),null;case 17:return Gn(i.type)&&Ra(),Mn(i),null;case 19:if(Vt($t),p=i.memoizedState,p===null)return Mn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Fo(p,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=ka(t),M!==null){for(i.flags|=128,Fo(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)p=s,t=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Bt($t,$t.current&1|2),i.child}t=t.sibling}p.tail!==null&&je()>Rs&&(i.flags|=128,u=!0,Fo(p,!1),i.lanes=4194304)}else{if(!u)if(t=ka(M),t!==null){if(i.flags|=128,u=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Fo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Yt)return Mn(i),null}else 2*je()-p.renderingStartTime>Rs&&s!==1073741824&&(i.flags|=128,u=!0,Fo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(s=p.last,s!==null?s.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=je(),i.sibling=null,s=$t.current,Bt($t,u?s&1|2:s&1),i):(Mn(i),null);case 22:case 23:return Tc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Zn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function c_(t,i){switch(Uu(i),i.tag){case 1:return Gn(i.type)&&Ra(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Es(),Vt(Hn),Vt(yn),Yu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Xu(i),null;case 13:if(Vt($t),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Vt($t),null;case 4:return Es(),null;case 10:return Bu(i.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Ya=!1,En=!1,f_=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Ts(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){Qt(t,i,u)}else s.current=null}function hc(t,i,s){try{s()}catch(u){Qt(t,i,u)}}var Wh=!1;function d_(t,i){if(Tu=ha,t=Md(),_u(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,O=-1,B=-1,ne=0,Se=0,Te=t,ye=null;t:for(;;){for(var Ge;Te!==s||f!==0&&Te.nodeType!==3||(O=M+f),Te!==p||u!==0&&Te.nodeType!==3||(B=M+u),Te.nodeType===3&&(M+=Te.nodeValue.length),(Ge=Te.firstChild)!==null;)ye=Te,Te=Ge;for(;;){if(Te===t)break t;if(ye===s&&++ne===f&&(O=M),ye===p&&++Se===u&&(B=M),(Ge=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=Ge}s=O===-1||B===-1?null:{start:O,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(Au={focusedElem:t,selectionRange:s},ha=!1,qe=i;qe!==null;)if(i=qe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,qe=t;else for(;qe!==null;){i=qe;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Je=Ke.memoizedProps,tn=Ke.memoizedState,K=i.stateNode,W=K.getSnapshotBeforeUpdate(i.elementType===i.type?Je:gi(i.type,Je),tn);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ce){Qt(i,i.return,Ce)}if(t=i.sibling,t!==null){t.return=i.return,qe=t;break}qe=i.return}return Ke=Wh,Wh=!1,Ke}function ko(t,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&hc(i,s,p)}f=f.next}while(f!==u)}}function qa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function pc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ai],delete i[Ro],delete i[Pu],delete i[q0],delete i[$0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ta));else if(u!==4&&(t=t.child,t!==null))for(mc(t,i,s),t=t.sibling;t!==null;)mc(t,i,s),t=t.sibling}function gc(t,i,s){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(gc(t,i,s),t=t.sibling;t!==null;)gc(t,i,s),t=t.sibling}var gn=null,_i=!1;function ur(t,i,s){for(s=s.child;s!==null;)qh(t,i,s),s=s.sibling}function qh(t,i,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(zn,s)}catch{}switch(s.tag){case 5:En||Ts(s,i);case 6:var u=gn,f=_i;gn=null,ur(t,i,s),gn=u,_i=f,gn!==null&&(_i?(t=gn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):gn.removeChild(s.stateNode));break;case 18:gn!==null&&(_i?(t=gn,s=s.stateNode,t.nodeType===8?bu(t.parentNode,s):t.nodeType===1&&bu(t,s),go(t)):bu(gn,s.stateNode));break;case 4:u=gn,f=_i,gn=s.stateNode.containerInfo,_i=!0,ur(t,i,s),gn=u,_i=f;break;case 0:case 11:case 14:case 15:if(!En&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&hc(s,i,M),f=f.next}while(f!==u)}ur(t,i,s);break;case 1:if(!En&&(Ts(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(O){Qt(s,i,O)}ur(t,i,s);break;case 21:ur(t,i,s);break;case 22:s.mode&1?(En=(u=En)||s.memoizedState!==null,ur(t,i,s),En=u):ur(t,i,s);break;default:ur(t,i,s)}}function $h(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new f_),i.forEach(function(u){var f=S_.bind(null,t,u);s.has(u)||(s.add(u),u.then(f,f))})}}function vi(t,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u];try{var p=t,M=i,O=M;e:for(;O!==null;){switch(O.tag){case 5:gn=O.stateNode,_i=!1;break e;case 3:gn=O.stateNode.containerInfo,_i=!0;break e;case 4:gn=O.stateNode.containerInfo,_i=!0;break e}O=O.return}if(gn===null)throw Error(n(160));qh(p,M,f),gn=null,_i=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ne){Qt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kh(i,t),i=i.sibling}function Kh(t,i){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(i,t),bi(t),u&4){try{ko(3,t,t.return),qa(3,t)}catch(Je){Qt(t,t.return,Je)}try{ko(5,t,t.return)}catch(Je){Qt(t,t.return,Je)}}break;case 1:vi(i,t),bi(t),u&512&&s!==null&&Ts(s,s.return);break;case 5:if(vi(i,t),bi(t),u&512&&s!==null&&Ts(s,s.return),t.flags&32){var f=t.stateNode;try{_e(f,"")}catch(Je){Qt(t,t.return,Je)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=s!==null?s.memoizedProps:p,O=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{O==="input"&&p.type==="radio"&&p.name!=null&&Ve(f,p),Ae(O,M);var ne=Ae(O,p);for(M=0;M<B.length;M+=2){var Se=B[M],Te=B[M+1];Se==="style"?tt(f,Te):Se==="dangerouslySetInnerHTML"?gt(f,Te):Se==="children"?_e(f,Te):A(f,Se,Te,ne)}switch(O){case"input":bt(f,p);break;case"textarea":we(f,p);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ge=p.value;Ge!=null?J(f,!!p.multiple,Ge,!1):ye!==!!p.multiple&&(p.defaultValue!=null?J(f,!!p.multiple,p.defaultValue,!0):J(f,!!p.multiple,p.multiple?[]:"",!1))}f[Ro]=p}catch(Je){Qt(t,t.return,Je)}}break;case 6:if(vi(i,t),bi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Je){Qt(t,t.return,Je)}}break;case 3:if(vi(i,t),bi(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Je){Qt(t,t.return,Je)}break;case 4:vi(i,t),bi(t);break;case 13:vi(i,t),bi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(xc=je())),u&4&&$h(t);break;case 22:if(Se=s!==null&&s.memoizedState!==null,t.mode&1?(En=(ne=En)||Se,vi(i,t),En=ne):vi(i,t),bi(t),u&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!Se&&(t.mode&1)!==0)for(qe=t,Se=t.child;Se!==null;){for(Te=qe=Se;qe!==null;){switch(ye=qe,Ge=ye.child,ye.tag){case 0:case 11:case 14:case 15:ko(4,ye,ye.return);break;case 1:Ts(ye,ye.return);var Ke=ye.stateNode;if(typeof Ke.componentWillUnmount=="function"){u=ye,s=ye.return;try{i=u,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Je){Qt(u,s,Je)}}break;case 5:Ts(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Jh(Te);continue}}Ge!==null?(Ge.return=ye,qe=Ge):Jh(Te)}Se=Se.sibling}e:for(Se=null,Te=t;;){if(Te.tag===5){if(Se===null){Se=Te;try{f=Te.stateNode,ne?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(O=Te.stateNode,B=Te.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,O.style.display=ft("display",M))}catch(Je){Qt(t,t.return,Je)}}}else if(Te.tag===6){if(Se===null)try{Te.stateNode.nodeValue=ne?"":Te.memoizedProps}catch(Je){Qt(t,t.return,Je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Se===Te&&(Se=null),Te=Te.return}Se===Te&&(Se=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:vi(i,t),bi(t),u&4&&$h(t);break;case 21:break;default:vi(i,t),bi(t)}}function bi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(jh(s)){var u=s;break e}s=s.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(_e(f,""),u.flags&=-33);var p=Yh(t);gc(t,p,f);break;case 3:case 4:var M=u.stateNode.containerInfo,O=Yh(t);mc(t,O,M);break;default:throw Error(n(161))}}catch(B){Qt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function h_(t,i,s){qe=t,Zh(t)}function Zh(t,i,s){for(var u=(t.mode&1)!==0;qe!==null;){var f=qe,p=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Ya;if(!M){var O=f.alternate,B=O!==null&&O.memoizedState!==null||En;O=Ya;var ne=En;if(Ya=M,(En=B)&&!ne)for(qe=f;qe!==null;)M=qe,B=M.child,M.tag===22&&M.memoizedState!==null?ep(f):B!==null?(B.return=M,qe=B):ep(f);for(;p!==null;)qe=p,Zh(p),p=p.sibling;qe=f,Ya=O,En=ne}Qh(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,qe=p):Qh(t)}}function Qh(t){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!En)if(s===null)u.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:gi(i.type,s.memoizedProps);u.componentDidUpdate(f,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Jd(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Jd(i,M,s)}break;case 5:var O=i.stateNode;if(s===null&&i.flags&4){s=O;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&s.focus();break;case"img":B.src&&(s.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var Se=ne.memoizedState;if(Se!==null){var Te=Se.dehydrated;Te!==null&&go(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}En||i.flags&512&&pc(i)}catch(ye){Qt(i,i.return,ye)}}if(i===t){qe=null;break}if(s=i.sibling,s!==null){s.return=i.return,qe=s;break}qe=i.return}}function Jh(t){for(;qe!==null;){var i=qe;if(i===t){qe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,qe=s;break}qe=i.return}}function ep(t){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{qa(4,i)}catch(B){Qt(i,s,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){Qt(i,f,B)}}var p=i.return;try{pc(i)}catch(B){Qt(i,p,B)}break;case 5:var M=i.return;try{pc(i)}catch(B){Qt(i,M,B)}}}catch(B){Qt(i,i.return,B)}if(i===t){qe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,qe=O;break}qe=i.return}}var p_=Math.ceil,$a=D.ReactCurrentDispatcher,_c=D.ReactCurrentOwner,li=D.ReactCurrentBatchConfig,Dt=0,hn=null,nn=null,_n=0,Zn=0,As=rr(0),an=0,zo=null,zr=0,Ka=0,vc=0,Bo=null,Wn=null,xc=0,Rs=1/0,Bi=null,Za=!1,yc=null,cr=null,Qa=!1,fr=null,Ja=0,Ho=0,Sc=null,el=-1,tl=0;function bn(){return(Dt&6)!==0?je():el!==-1?el:el=je()}function dr(t){return(t.mode&1)===0?1:(Dt&2)!==0&&_n!==0?_n&-_n:Z0.transition!==null?(tl===0&&(tl=ca()),tl):(t=It,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t)}function xi(t,i,s,u){if(50<Ho)throw Ho=0,Sc=null,Error(n(185));co(t,s,u),((Dt&2)===0||t!==hn)&&(t===hn&&((Dt&2)===0&&(Ka|=s),an===4&&hr(t,_n)),Xn(t,u),s===1&&Dt===0&&(i.mode&1)===0&&(Rs=je()+500,ba&&or()))}function Xn(t,i){var s=t.callbackNode;Bn(t,i);var u=ii(t,t===hn?_n:0);if(u===0)s!==null&&He(s),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(s!=null&&He(s),i===1)t.tag===0?K0(np.bind(null,t)):Hd(np.bind(null,t)),j0(function(){(Dt&6)===0&&or()}),s=null;else{switch(qf(u)){case 1:s=_t;break;case 4:s=xt;break;case 16:s=zt;break;case 536870912:s=en;break;default:s=zt}s=cp(s,tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function tp(t,i){if(el=-1,tl=0,(Dt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Cs()&&t.callbackNode!==s)return null;var u=ii(t,t===hn?_n:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=nl(t,u);else{i=u;var f=Dt;Dt|=2;var p=rp();(hn!==t||_n!==i)&&(Bi=null,Rs=je()+500,Hr(t,i));do try{__();break}catch(O){ip(t,O)}while(!0);zu(),$a.current=p,Dt=f,nn!==null?i=0:(hn=null,_n=0,i=an)}if(i!==0){if(i===2&&(f=Lr(t),f!==0&&(u=f,i=Mc(t,f))),i===1)throw s=zo,Hr(t,0),hr(t,u),Xn(t,je()),s;if(i===6)hr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!m_(f)&&(i=nl(t,u),i===2&&(p=Lr(t),p!==0&&(u=p,i=Mc(t,p))),i===1))throw s=zo,Hr(t,0),hr(t,u),Xn(t,je()),s;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,Wn,Bi);break;case 3:if(hr(t,u),(u&130023424)===u&&(i=xc+500-je(),10<i)){if(ii(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){bn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Cu(Gr.bind(null,t,Wn,Bi),i);break}Gr(t,Wn,Bi);break;case 4:if(hr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var M=31-Rn(u);p=1<<M,M=i[M],M>f&&(f=M),u&=~p}if(u=f,u=je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*p_(u/1960))-u,10<u){t.timeoutHandle=Cu(Gr.bind(null,t,Wn,Bi),u);break}Gr(t,Wn,Bi);break;case 5:Gr(t,Wn,Bi);break;default:throw Error(n(329))}}}return Xn(t,je()),t.callbackNode===s?tp.bind(null,t):null}function Mc(t,i){var s=Bo;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=nl(t,i),t!==2&&(i=Wn,Wn=s,i!==null&&Ec(i)),t}function Ec(t){Wn===null?Wn=t:Wn.push.apply(Wn,t)}function m_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var f=s[u],p=f.getSnapshot;f=f.value;try{if(!pi(p(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(t,i){for(i&=~vc,i&=~Ka,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Rn(i),u=1<<s;t[s]=-1,i&=~u}}function np(t){if((Dt&6)!==0)throw Error(n(327));Cs();var i=ii(t,0);if((i&1)===0)return Xn(t,je()),null;var s=nl(t,i);if(t.tag!==0&&s===2){var u=Lr(t);u!==0&&(i=u,s=Mc(t,u))}if(s===1)throw s=zo,Hr(t,0),hr(t,i),Xn(t,je()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,Wn,Bi),Xn(t,je()),null}function wc(t,i){var s=Dt;Dt|=1;try{return t(i)}finally{Dt=s,Dt===0&&(Rs=je()+500,ba&&or())}}function Br(t){fr!==null&&fr.tag===0&&(Dt&6)===0&&Cs();var i=Dt;Dt|=1;var s=li.transition,u=It;try{if(li.transition=null,It=1,t)return t()}finally{It=u,li.transition=s,Dt=i,(Dt&6)===0&&or()}}function Tc(){Zn=As.current,Vt(As)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,X0(s)),nn!==null)for(s=nn.return;s!==null;){var u=s;switch(Uu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ra();break;case 3:Es(),Vt(Hn),Vt(yn),Yu();break;case 5:Xu(u);break;case 4:Es();break;case 13:Vt($t);break;case 19:Vt($t);break;case 10:Bu(u.type._context);break;case 22:case 23:Tc()}s=s.return}if(hn=t,nn=t=pr(t.current,null),_n=Zn=i,an=0,zo=null,vc=Ka=zr=0,Wn=Bo=null,Or!==null){for(i=0;i<Or.length;i++)if(s=Or[i],u=s.interleaved,u!==null){s.interleaved=null;var f=u.next,p=s.pending;if(p!==null){var M=p.next;p.next=f,u.next=M}s.pending=u}Or=null}return t}function ip(t,i){do{var s=nn;try{if(zu(),za.current=Va,Ba){for(var u=Kt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ba=!1}if(kr=0,dn=on=Kt=null,No=!1,Uo=0,_c.current=null,s===null||s.return===null){an=1,zo=i,nn=null;break}e:{var p=t,M=s.return,O=s,B=i;if(i=_n,O.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=B,Se=O,Te=Se.tag;if((Se.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=Ch(M);if(Ge!==null){Ge.flags&=-257,bh(Ge,M,O,p,i),Ge.mode&1&&Rh(p,ne,i),i=Ge,B=ne;var Ke=i.updateQueue;if(Ke===null){var Je=new Set;Je.add(B),i.updateQueue=Je}else Ke.add(B);break e}else{if((i&1)===0){Rh(p,ne,i),Ac();break e}B=Error(n(426))}}else if(Yt&&O.mode&1){var tn=Ch(M);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),bh(tn,M,O,p,i),Fu(ws(B,O));break e}}p=B=ws(B,O),an!==4&&(an=2),Bo===null?Bo=[p]:Bo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var K=Th(p,B,i);Qd(p,K);break e;case 1:O=B;var W=p.type,ee=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(cr===null||!cr.has(ee)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ce=Ah(p,O,i);Qd(p,Ce);break e}}p=p.return}while(p!==null)}op(s)}catch(nt){i=nt,nn===s&&s!==null&&(nn=s=s.return);continue}break}while(!0)}function rp(){var t=$a.current;return $a.current=Va,t===null?Va:t}function Ac(){(an===0||an===3||an===2)&&(an=4),hn===null||(zr&268435455)===0&&(Ka&268435455)===0||hr(hn,_n)}function nl(t,i){var s=Dt;Dt|=2;var u=rp();(hn!==t||_n!==i)&&(Bi=null,Hr(t,i));do try{g_();break}catch(f){ip(t,f)}while(!0);if(zu(),Dt=s,$a.current=u,nn!==null)throw Error(n(261));return hn=null,_n=0,an}function g_(){for(;nn!==null;)sp(nn)}function __(){for(;nn!==null&&!st();)sp(nn)}function sp(t){var i=up(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,i===null?op(t):nn=i,_c.current=null}function op(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=u_(s,i,Zn),s!==null){nn=s;return}}else{if(s=c_(s,i),s!==null){s.flags&=32767,nn=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{an=6,nn=null;return}}if(i=i.sibling,i!==null){nn=i;return}nn=i=t}while(i!==null);an===0&&(an=5)}function Gr(t,i,s){var u=It,f=li.transition;try{li.transition=null,It=1,v_(t,i,s,u)}finally{li.transition=f,It=u}return null}function v_(t,i,s,u){do Cs();while(fr!==null);if((Dt&6)!==0)throw Error(n(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Qg(t,p),t===hn&&(nn=hn=null,_n=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Qa||(Qa=!0,cp(zt,function(){return Cs(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=li.transition,li.transition=null;var M=It;It=1;var O=Dt;Dt|=4,_c.current=null,d_(t,s),Kh(s,t),k0(Au),ha=!!Tu,Au=Tu=null,t.current=s,h_(s),ht(),Dt=O,It=M,li.transition=p}else t.current=s;if(Qa&&(Qa=!1,fr=t,Ja=f),p=t.pendingLanes,p===0&&(cr=null),wt(s.stateNode),Xn(t,je()),i!==null)for(u=t.onRecoverableError,s=0;s<i.length;s++)f=i[s],u(f.value,{componentStack:f.stack,digest:f.digest});if(Za)throw Za=!1,t=yc,yc=null,t;return(Ja&1)!==0&&t.tag!==0&&Cs(),p=t.pendingLanes,(p&1)!==0?t===Sc?Ho++:(Ho=0,Sc=t):Ho=0,or(),null}function Cs(){if(fr!==null){var t=qf(Ja),i=li.transition,s=It;try{if(li.transition=null,It=16>t?16:t,fr===null)var u=!1;else{if(t=fr,fr=null,Ja=0,(Dt&6)!==0)throw Error(n(331));var f=Dt;for(Dt|=4,qe=t.current;qe!==null;){var p=qe,M=p.child;if((qe.flags&16)!==0){var O=p.deletions;if(O!==null){for(var B=0;B<O.length;B++){var ne=O[B];for(qe=ne;qe!==null;){var Se=qe;switch(Se.tag){case 0:case 11:case 15:ko(8,Se,p)}var Te=Se.child;if(Te!==null)Te.return=Se,qe=Te;else for(;qe!==null;){Se=qe;var ye=Se.sibling,Ge=Se.return;if(Xh(Se),Se===ne){qe=null;break}if(ye!==null){ye.return=Ge,qe=ye;break}qe=Ge}}}var Ke=p.alternate;if(Ke!==null){var Je=Ke.child;if(Je!==null){Ke.child=null;do{var tn=Je.sibling;Je.sibling=null,Je=tn}while(Je!==null)}}qe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,qe=M;else e:for(;qe!==null;){if(p=qe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ko(9,p,p.return)}var K=p.sibling;if(K!==null){K.return=p.return,qe=K;break e}qe=p.return}}var W=t.current;for(qe=W;qe!==null;){M=qe;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,qe=ee;else e:for(M=W;qe!==null;){if(O=qe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:qa(9,O)}}catch(nt){Qt(O,O.return,nt)}if(O===M){qe=null;break e}var Ce=O.sibling;if(Ce!==null){Ce.return=O.return,qe=Ce;break e}qe=O.return}}if(Dt=f,or(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(zn,t)}catch{}u=!0}return u}finally{It=s,li.transition=i}}return!1}function ap(t,i,s){i=ws(s,i),i=Th(t,i,1),t=lr(t,i,1),i=bn(),t!==null&&(co(t,1,i),Xn(t,i))}function Qt(t,i,s){if(t.tag===3)ap(t,t,s);else for(;i!==null;){if(i.tag===3){ap(i,t,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(cr===null||!cr.has(u))){t=ws(s,t),t=Ah(i,t,1),i=lr(i,t,1),t=bn(),i!==null&&(co(i,1,t),Xn(i,t));break}}i=i.return}}function x_(t,i,s){var u=t.pingCache;u!==null&&u.delete(i),i=bn(),t.pingedLanes|=t.suspendedLanes&s,hn===t&&(_n&s)===s&&(an===4||an===3&&(_n&130023424)===_n&&500>je()-xc?Hr(t,0):vc|=s),Xn(t,i)}function lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var s=bn();t=Fi(t,i),t!==null&&(co(t,i,s),Xn(t,s))}function y_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),lp(t,s)}function S_(t,i){var s=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),lp(t,s)}var up;up=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Hn.current)Vn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return Vn=!1,l_(t,i,s);Vn=(t.flags&131072)!==0}else Vn=!1,Yt&&(i.flags&1048576)!==0&&Gd(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(t,i),t=i.pendingProps;var f=gs(i,yn.current);Ms(i,s),f=Ku(null,i,u,t,f,s);var p=Zu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(u)?(p=!0,Ca(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Vu(i),f.updater=Wa,i.stateNode=f,f._reactInternals=i,ic(i,u,t,s),i=ac(null,i,u,!0,p,s)):(i.tag=0,Yt&&p&&Nu(i),Cn(null,i,f,s),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=E_(u),t=gi(u,t),f){case 0:i=oc(null,i,u,t,s);break e;case 1:i=Ih(null,i,u,t,s);break e;case 11:i=Ph(null,i,u,t,s);break e;case 14:i=Lh(null,i,u,gi(u.type,t),s);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:gi(u,f),oc(t,i,u,f,s);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:gi(u,f),Ih(t,i,u,f,s);case 3:e:{if(Oh(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,Zd(t,i),Fa(i,u,null,s);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ws(Error(n(423)),i),i=Fh(t,i,u,s,f);break e}else if(u!==f){f=ws(Error(n(424)),i),i=Fh(t,i,u,s,f);break e}else for(Kn=ir(i.stateNode.containerInfo.firstChild),$n=i,Yt=!0,mi=null,s=$d(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(xs(),u===f){i=zi(t,i,s);break e}Cn(t,i,u,s)}i=i.child}return i;case 5:return eh(i),t===null&&Ou(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,Ru(u,f)?M=null:p!==null&&Ru(u,p)&&(i.flags|=32),Uh(t,i),Cn(t,i,M,s),i.child;case 6:return t===null&&Ou(i),null;case 13:return kh(t,i,s);case 4:return Wu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ys(i,null,u,s):Cn(t,i,u,s),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:gi(u,f),Ph(t,i,u,f,s);case 7:return Cn(t,i,i.pendingProps,s),i.child;case 8:return Cn(t,i,i.pendingProps.children,s),i.child;case 12:return Cn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,Bt(Ua,u._currentValue),u._currentValue=M,p!==null)if(pi(p.value,M)){if(p.children===f.children&&!Hn.current){i=zi(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var O=p.dependencies;if(O!==null){M=p.child;for(var B=O.firstContext;B!==null;){if(B.context===u){if(p.tag===1){B=ki(-1,s&-s),B.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var Se=ne.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ne.pending=B}}p.lanes|=s,B=p.alternate,B!==null&&(B.lanes|=s),Hu(p.return,s,i),O.lanes|=s;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=s,O=M.alternate,O!==null&&(O.lanes|=s),Hu(M,s,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Cn(t,i,f.children,s),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Ms(i,s),f=oi(f),u=u(f),i.flags|=1,Cn(t,i,u,s),i.child;case 14:return u=i.type,f=gi(u,i.pendingProps),f=gi(u.type,f),Lh(t,i,u,f,s);case 15:return Dh(t,i,i.type,i.pendingProps,s);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:gi(u,f),ja(t,i),i.tag=1,Gn(u)?(t=!0,Ca(i)):t=!1,Ms(i,s),Eh(i,u,f),ic(i,u,f,s),ac(null,i,u,!0,t,s);case 19:return Bh(t,i,s);case 22:return Nh(t,i,s)}throw Error(n(156,i.tag))};function cp(t,i){return ie(t,i)}function M_(t,i,s,u){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,s,u){return new M_(t,i,s,u)}function Rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E_(t){if(typeof t=="function")return Rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===te)return 14}return 2}function pr(t,i){var s=t.alternate;return s===null?(s=ui(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function il(t,i,s,u,f,p){var M=2;if(u=t,typeof t=="function")Rc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case k:return Vr(s.children,f,p,i);case oe:M=8,f|=8;break;case R:return t=ui(12,s,i,f|2),t.elementType=R,t.lanes=p,t;case xe:return t=ui(13,s,i,f),t.elementType=xe,t.lanes=p,t;case V:return t=ui(19,s,i,f),t.elementType=V,t.lanes=p,t;case fe:return rl(s,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:M=10;break e;case le:M=9;break e;case ce:M=11;break e;case te:M=14;break e;case re:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ui(M,s,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function Vr(t,i,s,u){return t=ui(7,t,u,i),t.lanes=s,t}function rl(t,i,s,u){return t=ui(22,t,u,i),t.elementType=fe,t.lanes=s,t.stateNode={isHidden:!1},t}function Cc(t,i,s){return t=ui(6,t,null,i),t.lanes=s,t}function bc(t,i,s){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function w_(t,i,s,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=os(0),this.expirationTimes=os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Pc(t,i,s,u,f,p,M,O,B){return t=new w_(t,i,s,O,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ui(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(p),t}function T_(t,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:t,containerInfo:i,implementation:s}}function fp(t){if(!t)return sr;t=t._reactInternals;e:{if(kn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Gn(s))return zd(t,s,i)}return i}function dp(t,i,s,u,f,p,M,O,B){return t=Pc(s,u,!0,t,f,p,M,O,B),t.context=fp(null),s=t.current,u=bn(),f=dr(s),p=ki(u,f),p.callback=i??null,lr(s,p,f),t.current.lanes=f,co(t,f,u),Xn(t,u),t}function sl(t,i,s,u){var f=i.current,p=bn(),M=dr(f);return s=fp(s),i.context===null?i.context=s:i.pendingContext=s,i=ki(p,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=lr(f,i,M),t!==null&&(xi(t,f,M,p),Oa(t,f,M)),M}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Lc(t,i){hp(t,i),(t=t.alternate)&&hp(t,i)}function A_(){return null}var pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dc(t){this._internalRoot=t}al.prototype.render=Dc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));sl(t,i,null,null)},al.prototype.unmount=Dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Br(function(){sl(null,t,null,null)}),i[Ni]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<er.length&&i!==0&&i<er[s].priority;s++);er.splice(s,0,t),s===0&&ed(t)}};function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function R_(t,i,s,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ne=ol(M);p.call(ne)}}var M=dp(i,u,t,0,null,!1,!1,"",mp);return t._reactRootContainer=M,t[Ni]=M.current,To(t.nodeType===8?t.parentNode:t),Br(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var O=u;u=function(){var ne=ol(B);O.call(ne)}}var B=Pc(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=B,t[Ni]=B.current,To(t.nodeType===8?t.parentNode:t),Br(function(){sl(i,B,s,u)}),B}function ul(t,i,s,u,f){var p=s._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var O=f;f=function(){var B=ol(M);O.call(B)}}sl(i,M,t,f)}else M=R_(s,i,t,f,u);return ol(M)}$f=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Zt(i.pendingLanes);s!==0&&(iu(i,s|1),Xn(i,je()),(Dt&6)===0&&(Rs=je()+500,or()))}break;case 13:Br(function(){var u=Fi(t,1);if(u!==null){var f=bn();xi(u,t,1,f)}}),Lc(t,1)}},ru=function(t){if(t.tag===13){var i=Fi(t,134217728);if(i!==null){var s=bn();xi(i,t,134217728,s)}Lc(t,134217728)}},Kf=function(t){if(t.tag===13){var i=dr(t),s=Fi(t,i);if(s!==null){var u=bn();xi(s,t,i,u)}Lc(t,i)}},Zf=function(){return It},Qf=function(t,i){var s=It;try{return It=t,i()}finally{It=s}},ve=function(t,i,s){switch(i){case"input":if(bt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==t&&u.form===t.form){var f=Aa(u);if(!f)throw Error(n(90));z(u),bt(u,f)}}}break;case"textarea":we(t,s);break;case"select":i=s.value,i!=null&&J(t,!!s.multiple,i,!1)}},Ye=wc,Xe=Br;var C_={usingClientEntryPoint:!1,Events:[Co,ps,Aa,Ie,De,wc]},Go={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=se(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{zn=cl.inject(b_),Pt=cl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_,jn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(n(200));return T_(t,i,null,s)},jn.createRoot=function(t,i){if(!Nc(t))throw Error(n(299));var s=!1,u="",f=pp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Pc(t,1,!1,null,null,s,!1,u,f),t[Ni]=i.current,To(t.nodeType===8?t.parentNode:t),new Dc(i)},jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=se(i),t=t===null?null:t.stateNode,t},jn.flushSync=function(t){return Br(t)},jn.hydrate=function(t,i,s){if(!ll(i))throw Error(n(200));return ul(null,t,i,!0,s)},jn.hydrateRoot=function(t,i,s){if(!Nc(t))throw Error(n(405));var u=s!=null&&s.hydratedSources||null,f=!1,p="",M=pp;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=dp(i,null,t,1,s??null,f,!1,p,M),t[Ni]=i.current,To(t),u)for(t=0;t<u.length;t++)s=u[t],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new al(i)},jn.render=function(t,i,s){if(!ll(i))throw Error(n(200));return ul(null,t,i,!1,s)},jn.unmountComponentAtNode=function(t){if(!ll(t))throw Error(n(40));return t._reactRootContainer?(Br(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1},jn.unstable_batchedUpdates=wc,jn.unstable_renderSubtreeIntoContainer=function(t,i,s,u){if(!ll(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ul(t,i,s,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var Ep;function k_(){if(Ep)return Oc.exports;Ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Oc.exports=F_(),Oc.exports}var wp;function z_(){if(wp)return fl;wp=1;var o=k_();return fl.createRoot=o.createRoot,fl.hydrateRoot=o.hydrateRoot,fl}var B_=z_();const H_=gg(B_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="160",bs={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G_=0,Tp=1,V_=2,_g=1,W_=2,ji=3,Cr=0,In=1,Li=2,wr=0,no=1,Xl=2,Ap=3,Rp=4,X_=5,$r=100,j_=101,Y_=102,Cp=103,bp=104,q_=200,$_=201,K_=202,Z_=203,Sf=204,Mf=205,Q_=206,J_=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,ov=214,av=0,lv=1,uv=2,jl=3,cv=4,fv=5,dv=6,hv=7,vg=0,pv=1,mv=2,Tr=0,gv=1,_v=2,vv=3,xg=4,xv=5,yv=6,yg=300,ro=301,so=302,Ef=303,wf=304,Jl=306,Tf=1e3,Ei=1001,Af=1002,Dn=1003,Pp=1004,zc=1005,fi=1006,Sv=1007,ra=1008,Ar=1009,Mv=1010,Ev=1011,Ff=1012,Sg=1013,Mr=1014,Er=1015,sa=1016,Mg=1017,Eg=1018,Zr=1020,wv=1021,wi=1023,Tv=1024,Av=1025,Qr=1026,oo=1027,Rv=1028,wg=1029,Cv=1030,Tg=1031,Ag=1033,Bc=33776,Hc=33777,Gc=33778,Vc=33779,Lp=35840,Dp=35841,Np=35842,Up=35843,Rg=36196,Ip=37492,Op=37496,Fp=37808,kp=37809,zp=37810,Bp=37811,Hp=37812,Gp=37813,Vp=37814,Wp=37815,Xp=37816,jp=37817,Yp=37818,qp=37819,$p=37820,Kp=37821,Wc=36492,Zp=36494,Qp=36495,bv=36283,Jp=36284,em=36285,tm=36286,Cg=3e3,Jr=3001,Pv=3200,Lv=3201,bg=0,Dv=1,hi="",ln="srgb",$i="srgb-linear",kf="display-p3",eu="display-p3-linear",Yl="linear",Wt="srgb",ql="rec709",$l="p3",Ls=7680,nm=519,Nv=512,Uv=513,Iv=514,Pg=515,Ov=516,Fv=517,kv=518,zv=519,Rf=35044,Bv=35048,im="300 es",Cf=1035,qi=2e3,Kl=2001;class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,bf=180/Math.PI;function Rr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Nn(o,e,n){return Math.max(e,Math.min(n,o))}function Hv(o,e){return(o%e+e)%e}function Xc(o,e,n){return(1-n)*o+n*e}function rm(o){return(o&o-1)===0&&o!==0}function Pf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Yi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Gv={DEG2RAD:Vl};class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*a+e.x,this.y=l*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(e,n,r,a,l,d,c,h,m){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,m)}set(e,n,r,a,l,d,c,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=c,g[3]=n,g[4]=l,g[5]=h,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[3],h=r[6],m=r[1],g=r[4],v=r[7],y=r[2],S=r[5],w=r[8],E=a[0],x=a[3],_=a[6],C=a[1],A=a[4],D=a[7],H=a[2],F=a[5],k=a[8];return l[0]=d*E+c*C+h*H,l[3]=d*x+c*A+h*F,l[6]=d*_+c*D+h*k,l[1]=m*E+g*C+v*H,l[4]=m*x+g*A+v*F,l[7]=m*_+g*D+v*k,l[2]=y*E+S*C+w*H,l[5]=y*x+S*A+w*F,l[8]=y*_+S*D+w*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return n*d*g-n*c*m-r*l*g+r*c*h+a*l*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=g*d-c*m,y=c*h-g*l,S=m*l-d*h,w=n*v+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(a*m-g*r)*E,e[2]=(c*r-a*d)*E,e[3]=y*E,e[4]=(g*n-a*h)*E,e[5]=(a*l-c*n)*E,e[6]=S*E,e[7]=(r*h-m*n)*E,e[8]=(d*n-r*l)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,d,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*d+m*c)+d+e,-a*m,a*h,-a*(-m*d+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(jc.makeScale(e,n)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new Ct;function Lg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function oa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vv(){const o=oa("canvas");return o.style.display="block",o}const sm={};function na(o){o in sm||(sm[o]=!0,console.warn(o))}const om=new Ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new Ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dl={[$i]:{transfer:Yl,primaries:ql,toReference:o=>o,fromReference:o=>o},[ln]:{transfer:Wt,primaries:ql,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[eu]:{transfer:Yl,primaries:$l,toReference:o=>o.applyMatrix3(am),fromReference:o=>o.applyMatrix3(om)},[kf]:{transfer:Wt,primaries:$l,toReference:o=>o.convertSRGBToLinear().applyMatrix3(am),fromReference:o=>o.applyMatrix3(om).convertLinearToSRGB()}},Wv=new Set([$i,eu]),Ft={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Wv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=dl[e].toReference,a=dl[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return dl[o].primaries},getTransfer:function(o){return o===hi?Yl:dl[o].transfer}};function io(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ds;class Dg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ds===void 0&&(Ds=oa("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ds}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oa("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=io(l[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(io(n[r]/255)*255):n[r]=io(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xv=0;class Ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,c=a.length;d<c;d++)a[d].isDataTexture?l.push(qc(a[d].image)):l.push(qc(a[d]))}else l=qc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function qc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Dg.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jv=0;class On extends is{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=Ei,a=Ei,l=fi,d=ra,c=wi,h=Ar,m=On.DEFAULT_ANISOTROPY,g=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Rr(),this.name="",this.source=new Ng(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Jr?ln:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?Jr:Cg}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?ln:hi}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=yg;On.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*l,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*l,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*l,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],y=h[1],S=h[5],w=h[9],E=h[2],x=h[6],_=h[10];if(Math.abs(g-y)<.01&&Math.abs(v-E)<.01&&Math.abs(w-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+E)<.1&&Math.abs(w+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(m+1)/2,D=(S+1)/2,H=(_+1)/2,F=(g+y)/4,k=(v+E)/4,oe=(w+x)/4;return A>D&&A>H?A<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(A),a=F/r,l=k/r):D>H?D<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(D),r=F/a,l=oe/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=k/l,a=oe/l),this.set(r,a,l,n),this}let C=Math.sqrt((x-w)*(x-w)+(v-E)*(v-E)+(y-g)*(y-g));return Math.abs(C)<.001&&(C=1),this.x=(x-w)/C,this.y=(v-E)/C,this.z=(y-g)/C,this.w=Math.acos((m+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yv extends is{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Jr?ln:hi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new On(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ng(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Yv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ug extends On{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qv extends On{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,d,c){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];const y=l[d+0],S=l[d+1],w=l[d+2],E=l[d+3];if(c===0){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v;return}if(c===1){e[n+0]=y,e[n+1]=S,e[n+2]=w,e[n+3]=E;return}if(v!==E||h!==y||m!==S||g!==w){let x=1-c;const _=h*y+m*S+g*w+v*E,C=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const H=Math.sqrt(A),F=Math.atan2(H,_*C);x=Math.sin(x*F)/H,c=Math.sin(c*F)/H}const D=c*C;if(h=h*x+y*D,m=m*x+S*D,g=g*x+w*D,v=v*x+E*D,x===1-c){const H=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=H,m*=H,g*=H,v*=H}}e[n]=h,e[n+1]=m,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,d){const c=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[d],y=l[d+1],S=l[d+2],w=l[d+3];return e[n]=c*w+g*v+h*S-m*y,e[n+1]=h*w+g*y+m*v-c*S,e[n+2]=m*w+g*S+c*y-h*v,e[n+3]=g*w-c*v-h*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,d=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(a/2),v=c(l/2),y=h(r/2),S=h(a/2),w=h(l/2);switch(d){case"XYZ":this._x=y*g*v+m*S*w,this._y=m*S*v-y*g*w,this._z=m*g*w+y*S*v,this._w=m*g*v-y*S*w;break;case"YXZ":this._x=y*g*v+m*S*w,this._y=m*S*v-y*g*w,this._z=m*g*w-y*S*v,this._w=m*g*v+y*S*w;break;case"ZXY":this._x=y*g*v-m*S*w,this._y=m*S*v+y*g*w,this._z=m*g*w+y*S*v,this._w=m*g*v-y*S*w;break;case"ZYX":this._x=y*g*v-m*S*w,this._y=m*S*v+y*g*w,this._z=m*g*w-y*S*v,this._w=m*g*v+y*S*w;break;case"YZX":this._x=y*g*v+m*S*w,this._y=m*S*v+y*g*w,this._z=m*g*w-y*S*v,this._w=m*g*v-y*S*w;break;case"XZY":this._x=y*g*v-m*S*w,this._y=m*S*v-y*g*w,this._z=m*g*w+y*S*v,this._w=m*g*v+y*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],d=n[1],c=n[5],h=n[9],m=n[2],g=n[6],v=n[10],y=r+c+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(d-a)*S}else if(r>c&&r>v){const S=2*Math.sqrt(1+r-c-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(l+m)/S}else if(c>v){const S=2*Math.sqrt(1+c-r-v);this._w=(l-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-c);this._w=(d-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,d=e._w,c=n._x,h=n._y,m=n._z,g=n._w;return this._x=r*g+d*c+a*m-l*h,this._y=a*g+d*h+l*c-r*m,this._z=l*g+d*m+r*h-a*c,this._w=d*g-r*c-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,d=this._w;let c=d*e._w+r*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=d,this._x=r,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),v=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(l),r*Math.cos(l),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,r=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,d=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*d,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*d,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,d=e.y,c=e.z,h=e.w,m=2*(d*a-c*r),g=2*(c*n-l*a),v=2*(l*r-d*n);return this.x=n+h*m+d*v-c*g,this.y=r+h*g+c*m-l*v,this.z=a+h*v+l*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,d=n.x,c=n.y,h=n.z;return this.x=a*h-l*c,this.y=l*d-r*h,this.z=r*c-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Nn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new G,lm=new ts;class rs{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,c=l.count;d<c;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(l,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,d=a.length;l<d;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),pl.subVectors(this.max,Wo),Ns.subVectors(e.a,Wo),Us.subVectors(e.b,Wo),Is.subVectors(e.c,Wo),gr.subVectors(Us,Ns),_r.subVectors(Is,Us),Wr.subVectors(Ns,Is);let n=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Wr.y,Wr.x,0];return!Kc(n,Ns,Us,Is,pl)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,Ns,Us,Is,pl))?!1:(ml.crossVectors(gr,_r),n=[ml.x,ml.y,ml.z],Kc(n,Ns,Us,Is,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new G,new G,new G,new G,new G,new G,new G,new G],yi=new G,hl=new rs,Ns=new G,Us=new G,Is=new G,gr=new G,_r=new G,Wr=new G,Wo=new G,pl=new G,ml=new G,Xr=new G;function Kc(o,e,n,r,a){for(let l=0,d=o.length-3;l<=d;l+=3){Xr.fromArray(o,l);const c=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),h=e.dot(Xr),m=n.dot(Xr),g=r.dot(Xr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const $v=new rs,Xo=new G,Zc=new G;class ss{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):$v.setFromPoints(e).getCenter(r);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Xo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Zc)),this.expandByPoint(Xo.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new G,Qc=new G,gl=new G,vr=new G,Jc=new G,_l=new G,ef=new G;class aa{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Qc.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Qc);const l=e.distanceTo(n)*.5,d=-this.direction.dot(gl),c=vr.dot(this.direction),h=-vr.dot(gl),m=vr.lengthSq(),g=Math.abs(1-d*d);let v,y,S,w;if(g>0)if(v=d*h-c,y=d*c-h,w=l*g,v>=0)if(y>=-w)if(y<=w){const E=1/g;v*=E,y*=E,S=v*(v+d*y+2*c)+y*(d*v+y+2*h)+m}else y=l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;else y=-l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;else y<=-w?(v=Math.max(0,-(-d*l+c)),y=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m):y<=w?(v=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+m):(v=Math.max(0,-(d*l+c)),y=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+y*(y+2*h)+m);else y=d>0?-l:l,v=Math.max(0,-(d*y+c)),S=-v*v+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Qc).addScaledVector(gl,y),S}intersectSphere(e,n){Gi.subVectors(e.center,this.origin);const r=Gi.dot(this.direction),a=Gi.dot(Gi)-r*r,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),c=r-d,h=r+d;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,d,c,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),r>d||l>a||((l>r||isNaN(r))&&(r=l),(d<a||isNaN(a))&&(a=d),v>=0?(c=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(c=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||c>a)||((c>r||r!==r)&&(r=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,n,r,a,l){Jc.subVectors(n,e),_l.subVectors(r,e),ef.crossVectors(Jc,_l);let d=this.direction.dot(ef),c;if(d>0){if(a)return null;c=1}else if(d<0)c=-1,d=-d;else return null;vr.subVectors(this.origin,e);const h=c*this.direction.dot(_l.crossVectors(vr,_l));if(h<0)return null;const m=c*this.direction.dot(Jc.cross(vr));if(m<0||h+m>d)return null;const g=-c*vr.dot(ef);return g<0?null:this.at(g/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,l,d,c,h,m,g,v,y,S,w,E,x){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,d,c,h,m,g,v,y,S,w,E,x)}set(e,n,r,a,l,d,c,h,m,g,v,y,S,w,E,x){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=d,_[9]=c,_[13]=h,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=w,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),d=1/Os.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,d=Math.cos(r),c=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=d*g,S=d*v,w=c*g,E=c*v;n[0]=h*g,n[4]=-h*v,n[8]=m,n[1]=S+w*m,n[5]=y-E*m,n[9]=-c*h,n[2]=E-y*m,n[6]=w+S*m,n[10]=d*h}else if(e.order==="YXZ"){const y=h*g,S=h*v,w=m*g,E=m*v;n[0]=y+E*c,n[4]=w*c-S,n[8]=d*m,n[1]=d*v,n[5]=d*g,n[9]=-c,n[2]=S*c-w,n[6]=E+y*c,n[10]=d*h}else if(e.order==="ZXY"){const y=h*g,S=h*v,w=m*g,E=m*v;n[0]=y-E*c,n[4]=-d*v,n[8]=w+S*c,n[1]=S+w*c,n[5]=d*g,n[9]=E-y*c,n[2]=-d*m,n[6]=c,n[10]=d*h}else if(e.order==="ZYX"){const y=d*g,S=d*v,w=c*g,E=c*v;n[0]=h*g,n[4]=w*m-S,n[8]=y*m+E,n[1]=h*v,n[5]=E*m+y,n[9]=S*m-w,n[2]=-m,n[6]=c*h,n[10]=d*h}else if(e.order==="YZX"){const y=d*h,S=d*m,w=c*h,E=c*m;n[0]=h*g,n[4]=E-y*v,n[8]=w*v+S,n[1]=v,n[5]=d*g,n[9]=-c*g,n[2]=-m*g,n[6]=S*v+w,n[10]=y-E*v}else if(e.order==="XZY"){const y=d*h,S=d*m,w=c*h,E=c*m;n[0]=h*g,n[4]=-v,n[8]=m*g,n[1]=y*v+E,n[5]=d*g,n[9]=S*v-w,n[2]=w*v-S,n[6]=c*g,n[10]=E*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,Zv)}lookAt(e,n,r){const a=this.elements;return Qn.subVectors(e,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),xr.crossVectors(r,Qn),xr.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),xr.crossVectors(r,Qn)),xr.normalize(),vl.crossVectors(Qn,xr),a[0]=xr.x,a[4]=vl.x,a[8]=Qn.x,a[1]=xr.y,a[5]=vl.y,a[9]=Qn.y,a[2]=xr.z,a[6]=vl.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,d=r[0],c=r[4],h=r[8],m=r[12],g=r[1],v=r[5],y=r[9],S=r[13],w=r[2],E=r[6],x=r[10],_=r[14],C=r[3],A=r[7],D=r[11],H=r[15],F=a[0],k=a[4],oe=a[8],R=a[12],N=a[1],le=a[5],ce=a[9],xe=a[13],V=a[2],te=a[6],re=a[10],fe=a[14],Y=a[3],Q=a[7],q=a[11],U=a[15];return l[0]=d*F+c*N+h*V+m*Y,l[4]=d*k+c*le+h*te+m*Q,l[8]=d*oe+c*ce+h*re+m*q,l[12]=d*R+c*xe+h*fe+m*U,l[1]=g*F+v*N+y*V+S*Y,l[5]=g*k+v*le+y*te+S*Q,l[9]=g*oe+v*ce+y*re+S*q,l[13]=g*R+v*xe+y*fe+S*U,l[2]=w*F+E*N+x*V+_*Y,l[6]=w*k+E*le+x*te+_*Q,l[10]=w*oe+E*ce+x*re+_*q,l[14]=w*R+E*xe+x*fe+_*U,l[3]=C*F+A*N+D*V+H*Y,l[7]=C*k+A*le+D*te+H*Q,l[11]=C*oe+A*ce+D*re+H*q,l[15]=C*R+A*xe+D*fe+H*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],d=e[1],c=e[5],h=e[9],m=e[13],g=e[2],v=e[6],y=e[10],S=e[14],w=e[3],E=e[7],x=e[11],_=e[15];return w*(+l*h*v-a*m*v-l*c*y+r*m*y+a*c*S-r*h*S)+E*(+n*h*S-n*m*y+l*d*y-a*d*S+a*m*g-l*h*g)+x*(+n*m*v-n*c*S-l*d*v+r*d*S+l*c*g-r*m*g)+_*(-a*c*g-n*h*v+n*c*y+a*d*v-r*d*y+r*h*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],d=e[4],c=e[5],h=e[6],m=e[7],g=e[8],v=e[9],y=e[10],S=e[11],w=e[12],E=e[13],x=e[14],_=e[15],C=v*x*m-E*y*m+E*h*S-c*x*S-v*h*_+c*y*_,A=w*y*m-g*x*m-w*h*S+d*x*S+g*h*_-d*y*_,D=g*E*m-w*v*m+w*c*S-d*E*S-g*c*_+d*v*_,H=w*v*h-g*E*h-w*c*y+d*E*y+g*c*x-d*v*x,F=n*C+r*A+a*D+l*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=C*k,e[1]=(E*y*l-v*x*l-E*a*S+r*x*S+v*a*_-r*y*_)*k,e[2]=(c*x*l-E*h*l+E*a*m-r*x*m-c*a*_+r*h*_)*k,e[3]=(v*h*l-c*y*l-v*a*m+r*y*m+c*a*S-r*h*S)*k,e[4]=A*k,e[5]=(g*x*l-w*y*l+w*a*S-n*x*S-g*a*_+n*y*_)*k,e[6]=(w*h*l-d*x*l-w*a*m+n*x*m+d*a*_-n*h*_)*k,e[7]=(d*y*l-g*h*l+g*a*m-n*y*m-d*a*S+n*h*S)*k,e[8]=D*k,e[9]=(w*v*l-g*E*l-w*r*S+n*E*S+g*r*_-n*v*_)*k,e[10]=(d*E*l-w*c*l+w*r*m-n*E*m-d*r*_+n*c*_)*k,e[11]=(g*c*l-d*v*l-g*r*m+n*v*m+d*r*S-n*c*S)*k,e[12]=H*k,e[13]=(g*E*a-w*v*a+w*r*y-n*E*y-g*r*x+n*v*x)*k,e[14]=(w*c*a-d*E*a-w*r*h+n*E*h+d*r*x-n*c*x)*k,e[15]=(d*v*a-g*c*a+g*r*h-n*v*h-d*r*y+n*c*y)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,d=e.x,c=e.y,h=e.z,m=l*d,g=l*c;return this.set(m*d+r,m*c-a*h,m*h+a*c,0,m*c+a*h,g*c+r,g*h-a*d,0,m*h-a*c,g*h+a*d,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,d){return this.set(1,r,l,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,d=n._y,c=n._z,h=n._w,m=l+l,g=d+d,v=c+c,y=l*m,S=l*g,w=l*v,E=d*g,x=d*v,_=c*v,C=h*m,A=h*g,D=h*v,H=r.x,F=r.y,k=r.z;return a[0]=(1-(E+_))*H,a[1]=(S+D)*H,a[2]=(w-A)*H,a[3]=0,a[4]=(S-D)*F,a[5]=(1-(y+_))*F,a[6]=(x+C)*F,a[7]=0,a[8]=(w+A)*k,a[9]=(x-C)*k,a[10]=(1-(y+E))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Os.set(a[0],a[1],a[2]).length();const d=Os.set(a[4],a[5],a[6]).length(),c=Os.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Si.copy(this);const m=1/l,g=1/d,v=1/c;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,n.setFromRotationMatrix(Si),r.x=l,r.y=d,r.z=c,this}makePerspective(e,n,r,a,l,d,c=qi){const h=this.elements,m=2*l/(n-e),g=2*l/(r-a),v=(n+e)/(n-e),y=(r+a)/(r-a);let S,w;if(c===qi)S=-(d+l)/(d-l),w=-2*d*l/(d-l);else if(c===Kl)S=-d/(d-l),w=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,d,c=qi){const h=this.elements,m=1/(n-e),g=1/(r-a),v=1/(d-l),y=(n+e)*m,S=(r+a)*g;let w,E;if(c===qi)w=(d+l)*v,E=-2*v;else if(c===Kl)w=l*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Os=new G,Si=new Ht,Kv=new G(0,0,0),Zv=new G(1,1,1),xr=new G,vl=new G,Qn=new G,um=new Ht,cm=new ts;class tu{constructor(e=0,n=0,r=0,a=tu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],d=a[4],c=a[8],h=a[1],m=a[5],g=a[9],v=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Nn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tu.DEFAULT_ORDER="XYZ";let zf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qv=0;const fm=new G,Fs=new ts,Vi=new Ht,xl=new G,jo=new G,Jv=new G,ex=new ts,dm=new G(1,0,0),hm=new G(0,1,0),pm=new G(0,0,1),tx={type:"added"},nx={type:"removed"};class sn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new G,n=new tu,r=new ts,a=new G(1,1,1);function l(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ct}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?xl.copy(e):xl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(jo,xl,this.up):Vi.lookAt(xl,jo,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,d=a.length;l<d;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const l=n[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(n){const c=d(e.geometries),h=d(e.materials),m=d(e.textures),g=d(e.images),v=d(e.shapes),y=d(e.skeletons),S=d(e.animations),w=d(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}sn.DEFAULT_UP=new G(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new G,Wi=new G,tf=new G,Xi=new G,ks=new G,zs=new G,mm=new G,nf=new G,rf=new G,sf=new G;let yl=!1;class di{constructor(e=new G,n=new G,r=new G){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Mi.subVectors(e,n),a.cross(Mi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){Mi.subVectors(a,n),Wi.subVectors(r,n),tf.subVectors(e,n);const d=Mi.dot(Mi),c=Mi.dot(Wi),h=Mi.dot(tf),m=Wi.dot(Wi),g=Wi.dot(tf),v=d*m-c*c;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*h-c*g)*y,w=(d*g-c*h)*y;return l.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getUV(e,n,r,a,l,d,c,h){return yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yl=!0),this.getInterpolation(e,n,r,a,l,d,c,h)}static getInterpolation(e,n,r,a,l,d,c,h){return this.getBarycoord(e,n,r,a,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(d,Xi.y),h.addScaledVector(c,Xi.z),h)}static isFrontFacing(e,n,r,a){return Mi.subVectors(r,n),Wi.subVectors(e,n),Mi.cross(Wi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Mi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,l){return yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yl=!0),di.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}getInterpolation(e,n,r,a,l){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let d,c;ks.subVectors(a,r),zs.subVectors(l,r),nf.subVectors(e,r);const h=ks.dot(nf),m=zs.dot(nf);if(h<=0&&m<=0)return n.copy(r);rf.subVectors(e,a);const g=ks.dot(rf),v=zs.dot(rf);if(g>=0&&v<=g)return n.copy(a);const y=h*v-g*m;if(y<=0&&h>=0&&g<=0)return d=h/(h-g),n.copy(r).addScaledVector(ks,d);sf.subVectors(e,l);const S=ks.dot(sf),w=zs.dot(sf);if(w>=0&&S<=w)return n.copy(l);const E=S*m-h*w;if(E<=0&&m>=0&&w<=0)return c=m/(m-w),n.copy(r).addScaledVector(zs,c);const x=g*w-S*v;if(x<=0&&v-g>=0&&S-w>=0)return mm.subVectors(l,a),c=(v-g)/(v-g+(S-w)),n.copy(a).addScaledVector(mm,c);const _=1/(x+E+y);return d=E*_,c=y*_,n.copy(r).addScaledVector(ks,d).addScaledVector(zs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function of(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Ft.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ft.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Ft.workingColorSpace){if(e=Hv(e,1),n=Nn(n,0,1),r=Nn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,d=2*r-l;this.r=of(d,l,e+1/3),this.g=of(d,l,e),this.b=of(d,l,e-1/3)}return Ft.toWorkingColorSpace(this,a),this}setStyle(e,n=ln){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],c=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ft.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Nn(Tn.r*255,0,255))*65536+Math.round(Nn(Tn.g*255,0,255))*256+Math.round(Nn(Tn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Tn.copy(this),n);const r=Tn.r,a=Tn.g,l=Tn.b,d=Math.max(r,a,l),c=Math.min(r,a,l);let h,m;const g=(c+d)/2;if(c===d)h=0,m=0;else{const v=d-c;switch(m=g<=.5?v/(d+c):v/(2-d-c),d){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,n=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ln){Ft.fromWorkingColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,a=Tn.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(Sl);const r=Xc(yr.h,Sl.h,n),a=Xc(yr.s,Sl.s,n),l=Xc(yr.l,Sl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new At;At.NAMES=Ig;let ix=0;class br extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=no,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sf&&(r.blendSrc=this.blendSrc),this.blendDst!==Mf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==jl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const d=[];for(const c in l){const h=l[c];delete h.metadata,d.push(h)}return d}if(n){const l=a(e.textures),d=a(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ia extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new G,Ml=new ot;class Yn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Yi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=kt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yi(n,this.array)),n}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yi(n,this.array)),n}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yi(n,this.array)),n}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rf&&(e.usage=this.usage),e}}class Og extends Yn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Fg extends Yn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class vn extends Yn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let rx=0;const ci=new Ht,af=new sn,Bs=new G,Jn=new rs,Yo=new rs,mn=new G;class Fn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?Fg:Og)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,r){return ci.makeTranslation(e,n,r),this.applyMatrix4(ci),this}scale(e,n,r){return ci.makeScale(e,n,r),this.applyMatrix4(ci),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),n)for(let l=0,d=n.length;l<d;l++){const c=n[l];Yo.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(Jn.min,Yo.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,Yo.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(Yo.min),Jn.expandByPoint(Yo.max))}Jn.getCenter(r);let a=0;for(let l=0,d=e.count;l<d;l++)mn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(mn));if(n)for(let l=0,d=n.length;l<d;l++){const c=n[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)mn.fromBufferAttribute(c,m),h&&(Bs.fromBufferAttribute(e,m),mn.add(Bs)),a=Math.max(a,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,l=n.normal.array,d=n.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],g=[];for(let N=0;N<c;N++)m[N]=new G,g[N]=new G;const v=new G,y=new G,S=new G,w=new ot,E=new ot,x=new ot,_=new G,C=new G;function A(N,le,ce){v.fromArray(a,N*3),y.fromArray(a,le*3),S.fromArray(a,ce*3),w.fromArray(d,N*2),E.fromArray(d,le*2),x.fromArray(d,ce*2),y.sub(v),S.sub(v),E.sub(w),x.sub(w);const xe=1/(E.x*x.y-x.x*E.y);isFinite(xe)&&(_.copy(y).multiplyScalar(x.y).addScaledVector(S,-E.y).multiplyScalar(xe),C.copy(S).multiplyScalar(E.x).addScaledVector(y,-x.x).multiplyScalar(xe),m[N].add(_),m[le].add(_),m[ce].add(_),g[N].add(C),g[le].add(C),g[ce].add(C))}let D=this.groups;D.length===0&&(D=[{start:0,count:r.length}]);for(let N=0,le=D.length;N<le;++N){const ce=D[N],xe=ce.start,V=ce.count;for(let te=xe,re=xe+V;te<re;te+=3)A(r[te+0],r[te+1],r[te+2])}const H=new G,F=new G,k=new G,oe=new G;function R(N){k.fromArray(l,N*3),oe.copy(k);const le=m[N];H.copy(le),H.sub(k.multiplyScalar(k.dot(le))).normalize(),F.crossVectors(oe,le);const xe=F.dot(g[N])<0?-1:1;h[N*4]=H.x,h[N*4+1]=H.y,h[N*4+2]=H.z,h[N*4+3]=xe}for(let N=0,le=D.length;N<le;++N){const ce=D[N],xe=ce.start,V=ce.count;for(let te=xe,re=xe+V;te<re;te+=3)R(r[te+0]),R(r[te+1]),R(r[te+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new G,l=new G,d=new G,c=new G,h=new G,m=new G,g=new G,v=new G;if(e)for(let y=0,S=e.count;y<S;y+=3){const w=e.getX(y+0),E=e.getX(y+1),x=e.getX(y+2);a.fromBufferAttribute(n,w),l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),c.fromBufferAttribute(r,w),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,x),c.add(g),h.add(g),m.add(g),r.setXYZ(w,c.x,c.y,c.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),g.subVectors(d,l),v.subVectors(a,l),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)mn.fromBufferAttribute(e,n),mn.normalize(),e.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,v=c.normalized,y=new m.constructor(h.length*g);let S=0,w=0;for(let E=0,x=h.length;E<x;E++){c.isInterleavedBufferAttribute?S=h[E]*c.data.stride+c.offset:S=h[E]*g;for(let _=0;_<g;_++)y[w++]=m[S++]}return new Yn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,r=this.index.array,a=this.attributes;for(const c in a){const h=a[c],m=e(h,r);n.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,v=m.length;g<v;g++){const y=m[g],S=e(y,r);h.push(S)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let c=0,h=d.length;c<h;c++){const m=d[c];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Ht,jr=new aa,El=new ss,_m=new G,Hs=new G,Gs=new G,Vs=new G,lf=new G,wl=new G,Tl=new ot,Al=new ot,Rl=new ot,vm=new G,xm=new G,ym=new G,Cl=new G,bl=new G;class Un extends sn{constructor(e=new Fn,n=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){wl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],v=l[h];g!==0&&(lf.fromBufferAttribute(v,e),d?wl.addScaledVector(lf,g):wl.addScaledVector(lf.sub(n),g))}n.add(wl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(El.containsPoint(jr.origin)===!1&&(jr.intersectSphere(El,_m)===null||jr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(gm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,d=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(d))for(let w=0,E=y.length;w<E;w++){const x=y[w],_=d[x.materialIndex],C=Math.max(x.start,S.start),A=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let D=C,H=A;D<H;D+=3){const F=c.getX(D),k=c.getX(D+1),oe=c.getX(D+2);a=Pl(this,_,e,r,m,g,v,F,k,oe),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let x=w,_=E;x<_;x+=3){const C=c.getX(x),A=c.getX(x+1),D=c.getX(x+2);a=Pl(this,d,e,r,m,g,v,C,A,D),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let w=0,E=y.length;w<E;w++){const x=y[w],_=d[x.materialIndex],C=Math.max(x.start,S.start),A=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let D=C,H=A;D<H;D+=3){const F=D,k=D+1,oe=D+2;a=Pl(this,_,e,r,m,g,v,F,k,oe),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let x=w,_=E;x<_;x+=3){const C=x,A=x+1,D=x+2;a=Pl(this,d,e,r,m,g,v,C,A,D),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function sx(o,e,n,r,a,l,d,c){let h;if(e.side===In?h=r.intersectTriangle(d,l,a,!0,c):h=r.intersectTriangle(a,l,d,e.side===Cr,c),h===null)return null;bl.copy(c),bl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(bl);return m<n.near||m>n.far?null:{distance:m,point:bl.clone(),object:o}}function Pl(o,e,n,r,a,l,d,c,h,m){o.getVertexPosition(c,Hs),o.getVertexPosition(h,Gs),o.getVertexPosition(m,Vs);const g=sx(o,e,n,r,Hs,Gs,Vs,Cl);if(g){a&&(Tl.fromBufferAttribute(a,c),Al.fromBufferAttribute(a,h),Rl.fromBufferAttribute(a,m),g.uv=di.getInterpolation(Cl,Hs,Gs,Vs,Tl,Al,Rl,new ot)),l&&(Tl.fromBufferAttribute(l,c),Al.fromBufferAttribute(l,h),Rl.fromBufferAttribute(l,m),g.uv1=di.getInterpolation(Cl,Hs,Gs,Vs,Tl,Al,Rl,new ot),g.uv2=g.uv1),d&&(vm.fromBufferAttribute(d,c),xm.fromBufferAttribute(d,h),ym.fromBufferAttribute(d,m),g.normal=di.getInterpolation(Cl,Hs,Gs,Vs,vm,xm,ym,new G),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:h,c:m,normal:new G,materialIndex:0};di.getNormal(Hs,Gs,Vs,v.normal),g.face=v}return g}class la extends Fn{constructor(e=1,n=1,r=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:d};const c=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const h=[],m=[],g=[],v=[];let y=0,S=0;w("z","y","x",-1,-1,r,n,e,d,l,0),w("z","y","x",1,-1,r,n,-e,d,l,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,l,4),w("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new vn(m,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(v,2));function w(E,x,_,C,A,D,H,F,k,oe,R){const N=D/k,le=H/oe,ce=D/2,xe=H/2,V=F/2,te=k+1,re=oe+1;let fe=0,Y=0;const Q=new G;for(let q=0;q<re;q++){const U=q*le-xe;for(let j=0;j<te;j++){const $=j*N-ce;Q[E]=$*C,Q[x]=U*A,Q[_]=V,m.push(Q.x,Q.y,Q.z),Q[E]=0,Q[x]=0,Q[_]=F>0?1:-1,g.push(Q.x,Q.y,Q.z),v.push(j/k),v.push(1-q/oe),fe+=1}}for(let q=0;q<oe;q++)for(let U=0;U<k;U++){const j=y+U+te*q,$=y+U+te*(q+1),ae=y+(U+1)+te*(q+1),me=y+(U+1)+te*q;h.push(j,$,me),h.push($,ae,me),Y+=6}c.addGroup(S,Y,R),S+=Y,y+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Ln(o){const e={};for(let n=0;n<o.length;n++){const r=ao(o[n]);for(const a in r)e[a]=r[a]}return e}function ox(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function kg(o){return o.getRenderTarget()===null?o.outputColorSpace:Ft.workingColorSpace}const ax={clone:ao,merge:Ln};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ux=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=ux,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class zg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=qi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ni extends zg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bf*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,l,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;l+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ws=-90,Xs=1;class cx extends sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(Ws,Xs,e,n);a.layers=this.layers,this.add(a);const l=new ni(Ws,Xs,e,n);l.layers=this.layers,this.add(l);const d=new ni(Ws,Xs,e,n);d.layers=this.layers,this.add(d);const c=new ni(Ws,Xs,e,n);c.layers=this.layers,this.add(c);const h=new ni(Ws,Xs,e,n);h.layers=this.layers,this.add(h);const m=new ni(Ws,Xs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,d,c,h]=n;for(const m of n)this.remove(m);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,c,h,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,c),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(v,y,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Bg extends On{constructor(e,n,r,a,l,d,c,h,m,g){e=e!==void 0?e:[],n=n!==void 0?n:ro,super(e,n,r,a,l,d,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fx extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jr?ln:hi),this.texture=new Bg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new la(5,5,5),l=new ns({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:wr});l.uniforms.tEquirect.value=n;const d=new Un(a,l),c=n.minFilter;return n.minFilter===ra&&(n.minFilter=fi),new cx(1,10,this).update(e,d),n.minFilter=c,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(l)}}const uf=new G,dx=new G,hx=new Ct;class Sr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=uf.subVectors(r,n).cross(dx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(uf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||hx.getNormalMatrix(e),a=this.coplanarPoint(uf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new ss,Ll=new G;class Bf{constructor(e=new Sr,n=new Sr,r=new Sr,a=new Sr,l=new Sr,d=new Sr){this.planes=[e,n,r,a,l,d]}set(e,n,r,a,l,d){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(r),c[3].copy(a),c[4].copy(l),c[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=qi){const r=this.planes,a=e.elements,l=a[0],d=a[1],c=a[2],h=a[3],m=a[4],g=a[5],v=a[6],y=a[7],S=a[8],w=a[9],E=a[10],x=a[11],_=a[12],C=a[13],A=a[14],D=a[15];if(r[0].setComponents(h-l,y-m,x-S,D-_).normalize(),r[1].setComponents(h+l,y+m,x+S,D+_).normalize(),r[2].setComponents(h+d,y+g,x+w,D+C).normalize(),r[3].setComponents(h-d,y-g,x-w,D-C).normalize(),r[4].setComponents(h-c,y-v,x-E,D-A).normalize(),n===qi)r[5].setComponents(h+c,y+v,x+E,D+A).normalize();else if(n===Kl)r[5].setComponents(c,v,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Ll.x=a.normal.x>0?e.max.x:e.min.x,Ll.y=a.normal.y>0?e.max.y:e.min.y,Ll.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let o=null,e=!1,n=null,r=null;function a(l,d){n(l,d),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function px(o,e){const n=e.isWebGL2,r=new WeakMap;function a(m,g){const v=m.array,y=m.usage,S=v.byteLength,w=o.createBuffer();o.bindBuffer(g,w),o.bufferData(g,v,y),m.onUploadCallback();let E;if(v instanceof Float32Array)E=o.FLOAT;else if(v instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(n)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=o.SHORT;else if(v instanceof Uint32Array)E=o.UNSIGNED_INT;else if(v instanceof Int32Array)E=o.INT;else if(v instanceof Int8Array)E=o.BYTE;else if(v instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:w,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:m.version,size:S}}function l(m,g,v){const y=g.array,S=g._updateRange,w=g.updateRanges;if(o.bindBuffer(v,m),S.count===-1&&w.length===0&&o.bufferSubData(v,0,y),w.length!==0){for(let E=0,x=w.length;E<x;E++){const _=w[E];n?o.bufferSubData(v,_.start*y.BYTES_PER_ELEMENT,y,_.start,_.count):o.bufferSubData(v,_.start*y.BYTES_PER_ELEMENT,y.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}S.count!==-1&&(n?o.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y,S.offset,S.count):o.bufferSubData(v,S.offset*y.BYTES_PER_ELEMENT,y.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function d(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(o.deleteBuffer(g.buffer),r.delete(m))}function h(m,g){if(m.isGLBufferAttribute){const y=r.get(m);(!y||y.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const v=r.get(m);if(v===void 0)r.set(m,a(m,g));else if(v.version<m.version){if(v.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");l(v.buffer,m,g),v.version=m.version}}return{get:d,remove:c,update:h}}class Hf extends Fn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,d=n/2,c=Math.floor(r),h=Math.floor(a),m=c+1,g=h+1,v=e/c,y=n/h,S=[],w=[],E=[],x=[];for(let _=0;_<g;_++){const C=_*y-d;for(let A=0;A<m;A++){const D=A*v-l;w.push(D,-C,0),E.push(0,0,1),x.push(A/c),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let C=0;C<c;C++){const A=C+m*_,D=C+m*(_+1),H=C+1+m*(_+1),F=C+1+m*_;S.push(A,D,F),S.push(D,H,F)}this.setIndex(S),this.setAttribute("position",new vn(w,3)),this.setAttribute("normal",new vn(E,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.width,e.height,e.widthSegments,e.heightSegments)}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",jx=`
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
}`,Yx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
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
}`,iy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
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
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,py=`struct PhysicalMaterial {
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
}`,my=`
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
#endif`,gy=`#if defined( RE_IndirectDiffuse )
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
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,My=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
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
#endif`,Py=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
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
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,By=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
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
}`,eS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,rS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mS=`uniform sampler2D t2D;
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,MS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`uniform float scale;
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
}`,RS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,bS=`uniform vec3 diffuse;
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
}`,PS=`#define LAMBERT
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
}`,LS=`#define LAMBERT
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
}`,DS=`#define MATCAP
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
}`,NS=`#define MATCAP
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
}`,US=`#define NORMAL
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
}`,IS=`#define NORMAL
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
}`,OS=`#define PHONG
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
}`,FS=`#define PHONG
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
}`,kS=`#define STANDARD
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
}`,zS=`#define STANDARD
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
}`,BS=`#define TOON
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
}`,HS=`#define TOON
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
}`,GS=`uniform float size;
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
}`,VS=`uniform vec3 diffuse;
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
}`,WS=`#include <common>
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
}`,XS=`uniform vec3 color;
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
}`,jS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:vx,alphatest_fragment:xx,alphatest_pars_fragment:yx,aomap_fragment:Sx,aomap_pars_fragment:Mx,batching_pars_vertex:Ex,batching_vertex:wx,begin_vertex:Tx,beginnormal_vertex:Ax,bsdfs:Rx,iridescence_fragment:Cx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Lx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Ix,color_pars_vertex:Ox,color_vertex:Fx,common:kx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:Bx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Gx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:jx,envmap_fragment:Yx,envmap_common_pars_fragment:qx,envmap_pars_fragment:$x,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:ly,envmap_vertex:Zx,fog_vertex:Qx,fog_pars_vertex:Jx,fog_fragment:ey,fog_pars_fragment:ty,gradientmap_pars_fragment:ny,lightmap_fragment:iy,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:oy,lights_pars_begin:ay,lights_toon_fragment:uy,lights_toon_pars_fragment:cy,lights_phong_fragment:fy,lights_phong_pars_fragment:dy,lights_physical_fragment:hy,lights_physical_pars_fragment:py,lights_fragment_begin:my,lights_fragment_maps:gy,lights_fragment_end:_y,logdepthbuf_fragment:vy,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:Sy,map_fragment:My,map_pars_fragment:Ey,map_particle_fragment:wy,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Ry,morphcolor_vertex:Cy,morphnormal_vertex:by,morphtarget_pars_vertex:Py,morphtarget_vertex:Ly,normal_fragment_begin:Dy,normal_fragment_maps:Ny,normal_pars_fragment:Uy,normal_pars_vertex:Iy,normal_vertex:Oy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:By,iridescence_pars_fragment:Hy,opaque_fragment:Gy,packing:Vy,premultiplied_alpha_fragment:Wy,project_vertex:Xy,dithering_fragment:jy,dithering_pars_fragment:Yy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Zy,shadowmap_vertex:Qy,shadowmask_pars_fragment:Jy,skinbase_vertex:eS,skinning_pars_vertex:tS,skinning_vertex:nS,skinnormal_vertex:iS,specularmap_fragment:rS,specularmap_pars_fragment:sS,tonemapping_fragment:oS,tonemapping_pars_fragment:aS,transmission_fragment:lS,transmission_pars_fragment:uS,uv_pars_fragment:cS,uv_pars_vertex:fS,uv_vertex:dS,worldpos_vertex:hS,background_vert:pS,background_frag:mS,backgroundCube_vert:gS,backgroundCube_frag:_S,cube_vert:vS,cube_frag:xS,depth_vert:yS,depth_frag:SS,distanceRGBA_vert:MS,distanceRGBA_frag:ES,equirect_vert:wS,equirect_frag:TS,linedashed_vert:AS,linedashed_frag:RS,meshbasic_vert:CS,meshbasic_frag:bS,meshlambert_vert:PS,meshlambert_frag:LS,meshmatcap_vert:DS,meshmatcap_frag:NS,meshnormal_vert:US,meshnormal_frag:IS,meshphong_vert:OS,meshphong_frag:FS,meshphysical_vert:kS,meshphysical_frag:zS,meshtoon_vert:BS,meshtoon_frag:HS,points_vert:GS,points_frag:VS,shadow_vert:WS,shadow_frag:XS,sprite_vert:jS,sprite_frag:YS},Ne={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Pi={basic:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Ln([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Ln([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Ln([Ne.points,Ne.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Ln([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Ln([Ne.common,Ne.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Ln([Ne.sprite,Ne.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Ln([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Ln([Ne.lights,Ne.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Pi.physical={uniforms:Ln([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Dl={r:0,b:0,g:0};function qS(o,e,n,r,a,l,d){const c=new At(0);let h=l===!0?0:1,m,g,v=null,y=0,S=null;function w(x,_){let C=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=(_.backgroundBlurriness>0?n:e).get(A)),A===null?E(c,h):A&&A.isColor&&(E(A,1),C=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||C)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Jl)?(g===void 0&&(g=new Un(new la(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:ao(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ft.getTransfer(A.colorSpace)!==Wt,(v!==A||y!==A.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,v=A,y=A.version,S=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Un(new Hf(2,2),new ns({name:"BackgroundMaterial",uniforms:ao(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Ft.getTransfer(A.colorSpace)!==Wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||y!==A.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=A,y=A.version,S=o.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function E(x,_){x.getRGB(Dl,kg(o)),r.buffers.color.setClear(Dl.r,Dl.g,Dl.b,_,d)}return{getClearColor:function(){return c},setClearColor:function(x,_=1){c.set(x),h=_,E(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,E(c,h)},render:w}}function $S(o,e,n,r){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||l!==null,c={},h=x(null);let m=h,g=!1;function v(V,te,re,fe,Y){let Q=!1;if(d){const q=E(fe,re,te);m!==q&&(m=q,S(m.object)),Q=_(V,fe,re,Y),Q&&C(V,fe,re,Y)}else{const q=te.wireframe===!0;(m.geometry!==fe.id||m.program!==re.id||m.wireframe!==q)&&(m.geometry=fe.id,m.program=re.id,m.wireframe=q,Q=!0)}Y!==null&&n.update(Y,o.ELEMENT_ARRAY_BUFFER),(Q||g)&&(g=!1,oe(V,te,re,fe),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function y(){return r.isWebGL2?o.createVertexArray():l.createVertexArrayOES()}function S(V){return r.isWebGL2?o.bindVertexArray(V):l.bindVertexArrayOES(V)}function w(V){return r.isWebGL2?o.deleteVertexArray(V):l.deleteVertexArrayOES(V)}function E(V,te,re){const fe=re.wireframe===!0;let Y=c[V.id];Y===void 0&&(Y={},c[V.id]=Y);let Q=Y[te.id];Q===void 0&&(Q={},Y[te.id]=Q);let q=Q[fe];return q===void 0&&(q=x(y()),Q[fe]=q),q}function x(V){const te=[],re=[],fe=[];for(let Y=0;Y<a;Y++)te[Y]=0,re[Y]=0,fe[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:re,attributeDivisors:fe,object:V,attributes:{},index:null}}function _(V,te,re,fe){const Y=m.attributes,Q=te.attributes;let q=0;const U=re.getAttributes();for(const j in U)if(U[j].location>=0){const ae=Y[j];let me=Q[j];if(me===void 0&&(j==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),j==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;q++}return m.attributesNum!==q||m.index!==fe}function C(V,te,re,fe){const Y={},Q=te.attributes;let q=0;const U=re.getAttributes();for(const j in U)if(U[j].location>=0){let ae=Q[j];ae===void 0&&(j==="instanceMatrix"&&V.instanceMatrix&&(ae=V.instanceMatrix),j==="instanceColor"&&V.instanceColor&&(ae=V.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),Y[j]=me,q++}m.attributes=Y,m.attributesNum=q,m.index=fe}function A(){const V=m.newAttributes;for(let te=0,re=V.length;te<re;te++)V[te]=0}function D(V){H(V,0)}function H(V,te){const re=m.newAttributes,fe=m.enabledAttributes,Y=m.attributeDivisors;re[V]=1,fe[V]===0&&(o.enableVertexAttribArray(V),fe[V]=1),Y[V]!==te&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,te),Y[V]=te)}function F(){const V=m.newAttributes,te=m.enabledAttributes;for(let re=0,fe=te.length;re<fe;re++)te[re]!==V[re]&&(o.disableVertexAttribArray(re),te[re]=0)}function k(V,te,re,fe,Y,Q,q){q===!0?o.vertexAttribIPointer(V,te,re,Y,Q):o.vertexAttribPointer(V,te,re,fe,Y,Q)}function oe(V,te,re,fe){if(r.isWebGL2===!1&&(V.isInstancedMesh||fe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const Y=fe.attributes,Q=re.getAttributes(),q=te.defaultAttributeValues;for(const U in Q){const j=Q[U];if(j.location>=0){let $=Y[U];if($===void 0&&(U==="instanceMatrix"&&V.instanceMatrix&&($=V.instanceMatrix),U==="instanceColor"&&V.instanceColor&&($=V.instanceColor)),$!==void 0){const ae=$.normalized,me=$.itemSize,Re=n.get($);if(Re===void 0)continue;const be=Re.buffer,Oe=Re.type,Be=Re.bytesPerElement,We=r.isWebGL2===!0&&(Oe===o.INT||Oe===o.UNSIGNED_INT||$.gpuType===Sg);if($.isInterleavedBufferAttribute){const yt=$.data,z=yt.stride,et=$.offset;if(yt.isInstancedInterleavedBuffer){for(let Pe=0;Pe<j.locationSize;Pe++)H(j.location+Pe,yt.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Pe=0;Pe<j.locationSize;Pe++)D(j.location+Pe);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Pe=0;Pe<j.locationSize;Pe++)k(j.location+Pe,me/j.locationSize,Oe,ae,z*Be,(et+me/j.locationSize*Pe)*Be,We)}else{if($.isInstancedBufferAttribute){for(let yt=0;yt<j.locationSize;yt++)H(j.location+yt,$.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let yt=0;yt<j.locationSize;yt++)D(j.location+yt);o.bindBuffer(o.ARRAY_BUFFER,be);for(let yt=0;yt<j.locationSize;yt++)k(j.location+yt,me/j.locationSize,Oe,ae,me*Be,me/j.locationSize*yt*Be,We)}}else if(q!==void 0){const ae=q[U];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(j.location,ae);break;case 3:o.vertexAttrib3fv(j.location,ae);break;case 4:o.vertexAttrib4fv(j.location,ae);break;default:o.vertexAttrib1fv(j.location,ae)}}}}F()}function R(){ce();for(const V in c){const te=c[V];for(const re in te){const fe=te[re];for(const Y in fe)w(fe[Y].object),delete fe[Y];delete te[re]}delete c[V]}}function N(V){if(c[V.id]===void 0)return;const te=c[V.id];for(const re in te){const fe=te[re];for(const Y in fe)w(fe[Y].object),delete fe[Y];delete te[re]}delete c[V.id]}function le(V){for(const te in c){const re=c[te];if(re[V.id]===void 0)continue;const fe=re[V.id];for(const Y in fe)w(fe[Y].object),delete fe[Y];delete re[V.id]}}function ce(){xe(),g=!0,m!==h&&(m=h,S(m.object))}function xe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:ce,resetDefaultState:xe,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfProgram:le,initAttributes:A,enableAttribute:D,disableUnusedAttributes:F}}function KS(o,e,n,r){const a=r.isWebGL2;let l;function d(g){l=g}function c(g,v){o.drawArrays(l,g,v),n.update(v,l,1)}function h(g,v,y){if(y===0)return;let S,w;if(a)S=o,w="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),w="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[w](l,g,v,y),n.update(v,l,y)}function m(g,v,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<y;w++)this.render(g[w],v[w]);else{S.multiDrawArraysWEBGL(l,g,0,v,0,y);let w=0;for(let E=0;E<y;E++)w+=v[E];n.update(w,l,1)}}this.setMode=d,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function ZS(o,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=d||e.has("WEBGL_draw_buffers"),g=n.logarithmicDepthBuffer===!0,v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),w=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,D=d||e.has("OES_texture_float"),H=A&&D,F=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:m,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:w,maxAttributes:E,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:A,floatFragmentTextures:D,floatVertexTextures:H,maxSamples:F}}function QS(o){const e=this;let n=null,r=0,a=!1,l=!1;const d=new Sr,c=new Ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||a;return a=y,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=g(v,y,0)},this.setState=function(v,y,S){const w=v.clippingPlanes,E=v.clipIntersection,x=v.clipShadows,_=o.get(v);if(!a||w===null||w.length===0||l&&!x)l?g(null):m();else{const C=l?0:r,A=C*4;let D=_.clippingState||null;h.value=D,D=g(w,y,A,S);for(let H=0;H!==A;++H)D[H]=n[H];_.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,w){const E=v!==null?v.length:0;let x=null;if(E!==0){if(x=h.value,w!==!0||x===null){const _=S+E*4,C=y.matrixWorldInverse;c.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,D=S;A!==E;++A,D+=4)d.copy(v[A]).applyMatrix4(C,c),d.normal.toArray(x,D),x[D+3]=d.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function JS(o){let e=new WeakMap;function n(d,c){return c===Ef?d.mapping=ro:c===wf&&(d.mapping=so),d}function r(d){if(d&&d.isTexture){const c=d.mapping;if(c===Ef||c===wf)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new fx(h.height/2);return m.fromEquirectangularTexture(o,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const c=d.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class eM extends zg{constructor(e=-1,n=1,r=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,d=r+e,c=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,d,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=4,Sm=[.125,.215,.35,.446,.526,.582],Kr=20,cf=new eM,Mm=new At;let ff=null,df=0,hf=0;const qr=(1+Math.sqrt(5))/2,js=1/qr,Em=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,qr,js),new G(0,qr,-js),new G(js,0,qr),new G(-js,0,qr),new G(qr,js,0),new G(-qr,js,0)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,df,hf),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),df=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:sa,format:wi,colorSpace:$i,depthBuffer:!1},a=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tM(l)),this._blurMaterial=nM(l,e,n)}return a}_compileMaterial(e){const n=new Un(this._lodPlanes[0],e);this._renderer.compile(n,cf)}_sceneToCubeUV(e,n,r,a){const c=new ni(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Mm),g.toneMapping=Tr,g.autoClear=!1;const S=new ia({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),w=new Un(new la,S);let E=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,E=!0):(S.color.copy(Mm),E=!0);for(let _=0;_<6;_++){const C=_%3;C===0?(c.up.set(0,h[_],0),c.lookAt(m[_],0,0)):C===1?(c.up.set(0,0,h[_]),c.lookAt(0,m[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,m[_]));const A=this._cubeSize;Nl(a,C*A,_>2?A:0,A,A),g.setRenderTarget(a),E&&g.render(w,c),g.render(e,c)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ro||e.mapping===so;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new Un(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;Nl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,cf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Em[(a-1)%Em.length];this._blur(e,a-1,a,l,d)}n.autoClear=r}_blur(e,n,r,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",l),this._halfBlur(d,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,d,c){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Un(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),E=l/w,x=isFinite(l)?1+Math.floor(g*E):Kr;x>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Kr}`);const _=[];let C=0;for(let k=0;k<Kr;++k){const oe=k/E,R=Math.exp(-oe*oe/2);_.push(R),k===0?C+=R:k<x&&(C+=2*R)}for(let k=0;k<_.length;k++)_[k]=_[k]/C;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=d==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:A}=this;y.dTheta.value=w,y.mipInt.value=A-r;const D=this._sizeLods[a],H=3*D*(a>A-Qs?a-A+Qs:0),F=4*(this._cubeSize-D);Nl(n,H,F,3*D,2*D),h.setRenderTarget(n),h.render(v,cf)}}function tM(o){const e=[],n=[],r=[];let a=o;const l=o-Qs+1+Sm.length;for(let d=0;d<l;d++){const c=Math.pow(2,a);n.push(c);let h=1/c;d>o-Qs?h=Sm[d-o+Qs-1]:d===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,w=6,E=3,x=2,_=1,C=new Float32Array(E*w*S),A=new Float32Array(x*w*S),D=new Float32Array(_*w*S);for(let F=0;F<S;F++){const k=F%3*2/3-1,oe=F>2?0:-1,R=[k,oe,0,k+2/3,oe,0,k+2/3,oe+1,0,k,oe,0,k+2/3,oe+1,0,k,oe+1,0];C.set(R,E*w*F),A.set(y,x*w*F);const N=[F,F,F,F,F,F];D.set(N,_*w*F)}const H=new Fn;H.setAttribute("position",new Yn(C,E)),H.setAttribute("uv",new Yn(A,x)),H.setAttribute("faceIndex",new Yn(D,_)),e.push(H),a>Qs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(o,e,n){const r=new es(o,e,n);return r.texture.mapping=Jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function nM(o,e,n){const r=new Float32Array(Kr),a=new G(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Am(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Rm(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Gf(){return`

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
	`}function iM(o){let e=new WeakMap,n=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===Ef||h===wf,g=h===ro||h===so;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let v=e.get(c);return n===null&&(n=new wm(o)),v=m?n.fromEquirectangular(c,v):n.fromCubemap(c,v),e.set(c,v),v.texture}else{if(e.has(c))return e.get(c).texture;{const v=c.image;if(m&&v&&v.height>0||g&&v&&a(v)){n===null&&(n=new wm(o));const y=m?n.fromEquirectangular(c):n.fromCubemap(c);return e.set(c,y),c.addEventListener("dispose",l),y.texture}else return null}}}return c}function a(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function rM(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function sM(o,e,n,r){const a={},l=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);for(const w in y.morphAttributes){const E=y.morphAttributes[w];for(let x=0,_=E.length;x<_;x++)e.remove(E[x])}y.removeEventListener("dispose",d),delete a[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function c(v,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function h(v){const y=v.attributes;for(const w in y)e.update(y[w],o.ARRAY_BUFFER);const S=v.morphAttributes;for(const w in S){const E=S[w];for(let x=0,_=E.length;x<_;x++)e.update(E[x],o.ARRAY_BUFFER)}}function m(v){const y=[],S=v.index,w=v.attributes.position;let E=0;if(S!==null){const C=S.array;E=S.version;for(let A=0,D=C.length;A<D;A+=3){const H=C[A+0],F=C[A+1],k=C[A+2];y.push(H,F,F,k,k,H)}}else if(w!==void 0){const C=w.array;E=w.version;for(let A=0,D=C.length/3-1;A<D;A+=3){const H=A+0,F=A+1,k=A+2;y.push(H,F,F,k,k,H)}}else return;const x=new(Lg(y)?Fg:Og)(y,1);x.version=E;const _=l.get(v);_&&e.remove(_),l.set(v,x)}function g(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function oM(o,e,n,r){const a=r.isWebGL2;let l;function d(S){l=S}let c,h;function m(S){c=S.type,h=S.bytesPerElement}function g(S,w){o.drawElements(l,w,c,S*h),n.update(w,l,1)}function v(S,w,E){if(E===0)return;let x,_;if(a)x=o,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](l,w,c,S*h,E),n.update(w,l,E)}function y(S,w,E){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<E;_++)this.render(S[_]/h,w[_]);else{x.multiDrawElementsWEBGL(l,w,0,c,S,0,E);let _=0;for(let C=0;C<E;C++)_+=w[C];n.update(_,l,1)}}this.setMode=d,this.setIndex=m,this.render=g,this.renderInstances=v,this.renderMultiDraw=y}function aM(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,c){switch(n.calls++,d){case o.TRIANGLES:n.triangles+=c*(l/3);break;case o.LINES:n.lines+=c*(l/2);break;case o.LINE_STRIP:n.lines+=c*(l-1);break;case o.LINE_LOOP:n.lines+=c*l;break;case o.POINTS:n.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function lM(o,e){return o[0]-e[0]}function uM(o,e){return Math.abs(e[1])-Math.abs(o[1])}function cM(o,e,n){const r={},a=new Float32Array(8),l=new WeakMap,d=new qt,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,g,v){const y=m.morphTargetInfluences;if(e.isWebGL2===!0){const w=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,E=w!==void 0?w.length:0;let x=l.get(g);if(x===void 0||x.count!==E){let te=function(){xe.dispose(),l.delete(g),g.removeEventListener("dispose",te)};var S=te;x!==void 0&&x.texture.dispose();const A=g.morphAttributes.position!==void 0,D=g.morphAttributes.normal!==void 0,H=g.morphAttributes.color!==void 0,F=g.morphAttributes.position||[],k=g.morphAttributes.normal||[],oe=g.morphAttributes.color||[];let R=0;A===!0&&(R=1),D===!0&&(R=2),H===!0&&(R=3);let N=g.attributes.position.count*R,le=1;N>e.maxTextureSize&&(le=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ce=new Float32Array(N*le*4*E),xe=new Ug(ce,N,le,E);xe.type=Er,xe.needsUpdate=!0;const V=R*4;for(let re=0;re<E;re++){const fe=F[re],Y=k[re],Q=oe[re],q=N*le*4*re;for(let U=0;U<fe.count;U++){const j=U*V;A===!0&&(d.fromBufferAttribute(fe,U),ce[q+j+0]=d.x,ce[q+j+1]=d.y,ce[q+j+2]=d.z,ce[q+j+3]=0),D===!0&&(d.fromBufferAttribute(Y,U),ce[q+j+4]=d.x,ce[q+j+5]=d.y,ce[q+j+6]=d.z,ce[q+j+7]=0),H===!0&&(d.fromBufferAttribute(Q,U),ce[q+j+8]=d.x,ce[q+j+9]=d.y,ce[q+j+10]=d.z,ce[q+j+11]=Q.itemSize===4?d.w:1)}}x={count:E,texture:xe,size:new ot(N,le)},l.set(g,x),g.addEventListener("dispose",te)}let _=0;for(let A=0;A<y.length;A++)_+=y[A];const C=g.morphTargetsRelative?1:1-_;v.getUniforms().setValue(o,"morphTargetBaseInfluence",C),v.getUniforms().setValue(o,"morphTargetInfluences",y),v.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),v.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const w=y===void 0?0:y.length;let E=r[g.id];if(E===void 0||E.length!==w){E=[];for(let D=0;D<w;D++)E[D]=[D,0];r[g.id]=E}for(let D=0;D<w;D++){const H=E[D];H[0]=D,H[1]=y[D]}E.sort(uM);for(let D=0;D<8;D++)D<w&&E[D][1]?(c[D][0]=E[D][0],c[D][1]=E[D][1]):(c[D][0]=Number.MAX_SAFE_INTEGER,c[D][1]=0);c.sort(lM);const x=g.morphAttributes.position,_=g.morphAttributes.normal;let C=0;for(let D=0;D<8;D++){const H=c[D],F=H[0],k=H[1];F!==Number.MAX_SAFE_INTEGER&&k?(x&&g.getAttribute("morphTarget"+D)!==x[F]&&g.setAttribute("morphTarget"+D,x[F]),_&&g.getAttribute("morphNormal"+D)!==_[F]&&g.setAttribute("morphNormal"+D,_[F]),a[D]=k,C+=k):(x&&g.hasAttribute("morphTarget"+D)===!0&&g.deleteAttribute("morphTarget"+D),_&&g.hasAttribute("morphNormal"+D)===!0&&g.deleteAttribute("morphNormal"+D),a[D]=0)}const A=g.morphTargetsRelative?1:1-C;v.getUniforms().setValue(o,"morphTargetBaseInfluence",A),v.getUniforms().setValue(o,"morphTargetInfluences",a)}}return{update:h}}function fM(o,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==m&&(n.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function d(){a=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:d}}class Gg extends On{constructor(e,n,r,a,l,d,c,h,m,g){if(g=g!==void 0?g:Qr,g!==Qr&&g!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Qr&&(r=Mr),r===void 0&&g===oo&&(r=Zr),super(null,a,l,d,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Dn,this.minFilter=h!==void 0?h:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Vg=new On,Wg=new Gg(1,1);Wg.compareFunction=Pg;const Xg=new Ug,jg=new qv,Yg=new Bg,Cm=[],bm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function lo(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let l=Cm[a];if(l===void 0&&(l=new Float32Array(a),Cm[a]=l),e!==0){r.toArray(l,0);for(let d=1,c=0;d!==e;++d)c+=n,o[d].toArray(l,c)}return l}function un(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function cn(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function nu(o,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function dM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function hM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;o.uniform2fv(this.addr,e),cn(n,e)}}function pM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;o.uniform3fv(this.addr,e),cn(n,e)}}function mM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;o.uniform4fv(this.addr,e),cn(n,e)}}function gM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(un(n,r))return;Dm.set(r),o.uniformMatrix2fv(this.addr,!1,Dm),cn(n,r)}}function _M(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(un(n,r))return;Lm.set(r),o.uniformMatrix3fv(this.addr,!1,Lm),cn(n,r)}}function vM(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(un(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(un(n,r))return;Pm.set(r),o.uniformMatrix4fv(this.addr,!1,Pm),cn(n,r)}}function xM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function yM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;o.uniform2iv(this.addr,e),cn(n,e)}}function SM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;o.uniform3iv(this.addr,e),cn(n,e)}}function MM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;o.uniform4iv(this.addr,e),cn(n,e)}}function EM(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function wM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;o.uniform2uiv(this.addr,e),cn(n,e)}}function TM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;o.uniform3uiv(this.addr,e),cn(n,e)}}function AM(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;o.uniform4uiv(this.addr,e),cn(n,e)}}function RM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);const l=this.type===o.SAMPLER_2D_SHADOW?Wg:Vg;n.setTexture2D(e||l,a)}function CM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||jg,a)}function bM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Yg,a)}function PM(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Xg,a)}function LM(o){switch(o){case 5126:return dM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return wM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return PM}}function DM(o,e){o.uniform1fv(this.addr,e)}function NM(o,e){const n=lo(e,this.size,2);o.uniform2fv(this.addr,n)}function UM(o,e){const n=lo(e,this.size,3);o.uniform3fv(this.addr,n)}function IM(o,e){const n=lo(e,this.size,4);o.uniform4fv(this.addr,n)}function OM(o,e){const n=lo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function FM(o,e){const n=lo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function kM(o,e){const n=lo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function zM(o,e){o.uniform1iv(this.addr,e)}function BM(o,e){o.uniform2iv(this.addr,e)}function HM(o,e){o.uniform3iv(this.addr,e)}function GM(o,e){o.uniform4iv(this.addr,e)}function VM(o,e){o.uniform1uiv(this.addr,e)}function WM(o,e){o.uniform2uiv(this.addr,e)}function XM(o,e){o.uniform3uiv(this.addr,e)}function jM(o,e){o.uniform4uiv(this.addr,e)}function YM(o,e,n){const r=this.cache,a=e.length,l=nu(n,a);un(r,l)||(o.uniform1iv(this.addr,l),cn(r,l));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Vg,l[d])}function qM(o,e,n){const r=this.cache,a=e.length,l=nu(n,a);un(r,l)||(o.uniform1iv(this.addr,l),cn(r,l));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||jg,l[d])}function $M(o,e,n){const r=this.cache,a=e.length,l=nu(n,a);un(r,l)||(o.uniform1iv(this.addr,l),cn(r,l));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||Yg,l[d])}function KM(o,e,n){const r=this.cache,a=e.length,l=nu(n,a);un(r,l)||(o.uniform1iv(this.addr,l),cn(r,l));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||Xg,l[d])}function ZM(o){switch(o){case 5126:return DM;case 35664:return NM;case 35665:return UM;case 35666:return IM;case 35674:return OM;case 35675:return FM;case 35676:return kM;case 5124:case 35670:return zM;case 35667:case 35671:return BM;case 35668:case 35672:return HM;case 35669:case 35673:return GM;case 5125:return VM;case 36294:return WM;case 36295:return XM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class QM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=LM(n.type)}}class JM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZM(n.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const c=a[l];c.setValue(e,n[c.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Nm(o,e){o.seq.push(e),o.map[e.id]=e}function tE(o,e,n){const r=o.name,a=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),d=pf.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&d+2===a){Nm(n,m===void 0?new QM(c,o,e):new JM(c,o,e));break}else{let v=n.map[c];v===void 0&&(v=new eE(c),Nm(n,v)),n=v}}}class Wl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),d=e.getUniformLocation(n,l.name);tE(l,d,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,d=n.length;l!==d;++l){const c=n[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Um(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const nE=37297;let iE=0;function rE(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let d=a;d<l;d++){const c=d+1;r.push(`${c===e?">":" "} ${c}: ${n[d]}`)}return r.join(`
`)}function sE(o){const e=Ft.getPrimaries(Ft.workingColorSpace),n=Ft.getPrimaries(o);let r;switch(e===n?r="":e===$l&&n===ql?r="LinearDisplayP3ToLinearSRGB":e===ql&&n===$l&&(r="LinearSRGBToLinearDisplayP3"),o){case $i:case eu:return[r,"LinearTransferOETF"];case ln:case kf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Im(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+rE(o.getShaderSource(e),d)}else return a}function oE(o,e){const n=sE(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aE(o,e){let n;switch(e){case gv:n="Linear";break;case _v:n="Reinhard";break;case vv:n="OptimizedCineon";break;case xg:n="ACESFilmic";break;case yv:n="AgX";break;case xv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lE(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function uE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function cE(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function fE(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=o.getActiveAttrib(e,a),d=l.name;let c=1;l.type===o.FLOAT_MAT2&&(c=2),l.type===o.FLOAT_MAT3&&(c=3),l.type===o.FLOAT_MAT4&&(c=4),n[d]={type:l.type,location:o.getAttribLocation(e,d),locationSize:c}}return n}function Js(o){return o!==""}function Om(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(o){return o.replace(dE,pE)}const hE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pE(o,e){let n=Tt[e];if(n===void 0){const r=hE.get(e);if(r!==void 0)n=Tt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lf(n)}const mE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(o){return o.replace(mE,gE)}function gE(o,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function zm(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _E(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function vE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xE(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function yE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case pv:e="ENVMAP_BLENDING_MIX";break;case mv:e="ENVMAP_BLENDING_ADD";break}return e}function SE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function ME(o,e,n,r){const a=o.getContext(),l=n.defines;let d=n.vertexShader,c=n.fragmentShader;const h=_E(n),m=vE(n),g=xE(n),v=yE(n),y=SE(n),S=n.isWebGL2?"":lE(n),w=uE(n),E=cE(l),x=a.createProgram();let _,C,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Js).join(`
`),_.length>0&&(_+=`
`),C=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Js).join(`
`),C.length>0&&(C+=`
`)):(_=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),C=[S,zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tr?"#define TONE_MAPPING":"",n.toneMapping!==Tr?Tt.tonemapping_pars_fragment:"",n.toneMapping!==Tr?aE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,oE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),d=Lf(d),d=Om(d,n),d=Fm(d,n),c=Lf(c),c=Om(c,n),c=Fm(c,n),d=km(d),c=km(c),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[w,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,C=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const D=A+_+d,H=A+C+c,F=Um(a,a.VERTEX_SHADER,D),k=Um(a,a.FRAGMENT_SHADER,H);a.attachShader(x,F),a.attachShader(x,k),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function oe(ce){if(o.debug.checkShaderErrors){const xe=a.getProgramInfoLog(x).trim(),V=a.getShaderInfoLog(F).trim(),te=a.getShaderInfoLog(k).trim();let re=!0,fe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(re=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,x,F,k);else{const Y=Im(a,F,"vertex"),Q=Im(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Program Info Log: `+xe+`
`+Y+`
`+Q)}else xe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",xe):(V===""||te==="")&&(fe=!1);fe&&(ce.diagnostics={runnable:re,programLog:xe,vertexShader:{log:V,prefix:_},fragmentShader:{log:te,prefix:C}})}a.deleteShader(F),a.deleteShader(k),R=new Wl(a,x),N=fE(a,x)}let R;this.getUniforms=function(){return R===void 0&&oe(this),R};let N;this.getAttributes=function(){return N===void 0&&oe(this),N};let le=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return le===!1&&(le=a.getProgramParameter(x,nE)),le},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=k,this}let EE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new TE(e),n.set(e,r)),r}}class TE{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}}function AE(o,e,n,r,a,l,d){const c=new zf,h=new wE,m=[],g=a.isWebGL2,v=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function x(R,N,le,ce,xe){const V=ce.fog,te=xe.geometry,re=R.isMeshStandardMaterial?ce.environment:null,fe=(R.isMeshStandardMaterial?n:e).get(R.envMap||re),Y=fe&&fe.mapping===Jl?fe.image.height:null,Q=w[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const q=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,U=q!==void 0?q.length:0;let j=0;te.morphAttributes.position!==void 0&&(j=1),te.morphAttributes.normal!==void 0&&(j=2),te.morphAttributes.color!==void 0&&(j=3);let $,ae,me,Re;if(Q){const Le=Pi[Q];$=Le.vertexShader,ae=Le.fragmentShader}else $=R.vertexShader,ae=R.fragmentShader,h.update(R),me=h.getVertexShaderID(R),Re=h.getFragmentShaderID(R);const be=o.getRenderTarget(),Oe=xe.isInstancedMesh===!0,Be=xe.isBatchedMesh===!0,We=!!R.map,yt=!!R.matcap,z=!!fe,et=!!R.aoMap,Pe=!!R.lightMap,rt=!!R.bumpMap,Ve=!!R.normalMap,bt=!!R.displacementMap,ct=!!R.emissiveMap,L=!!R.metalnessMap,T=!!R.roughnessMap,J=R.anisotropy>0,Ee=R.clearcoat>0,ge=R.iridescence>0,we=R.sheen>0,Ze=R.transmission>0,Ue=J&&!!R.anisotropyMap,ze=Ee&&!!R.clearcoatMap,it=Ee&&!!R.clearcoatNormalMap,gt=Ee&&!!R.clearcoatRoughnessMap,_e=ge&&!!R.iridescenceMap,Et=ge&&!!R.iridescenceThicknessMap,vt=we&&!!R.sheenColorMap,ft=we&&!!R.sheenRoughnessMap,tt=!!R.specularMap,Fe=!!R.specularColorMap,I=!!R.specularIntensityMap,Ae=Ze&&!!R.transmissionMap,Qe=Ze&&!!R.thicknessMap,ke=!!R.gradientMap,ve=!!R.alphaMap,P=R.alphaTest>0,he=!!R.alphaHash,de=!!R.extensions,Ie=!!te.attributes.uv1,De=!!te.attributes.uv2,Ye=!!te.attributes.uv3;let Xe=Tr;return R.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Xe=o.toneMapping),{isWebGL2:g,shaderID:Q,shaderType:R.type,shaderName:R.name,vertexShader:$,fragmentShader:ae,defines:R.defines,customVertexShaderID:me,customFragmentShaderID:Re,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Be,instancing:Oe,instancingColor:Oe&&xe.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:be===null?o.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:$i,map:We,matcap:yt,envMap:z,envMapMode:z&&fe.mapping,envMapCubeUVHeight:Y,aoMap:et,lightMap:Pe,bumpMap:rt,normalMap:Ve,displacementMap:y&&bt,emissiveMap:ct,normalMapObjectSpace:Ve&&R.normalMapType===Dv,normalMapTangentSpace:Ve&&R.normalMapType===bg,metalnessMap:L,roughnessMap:T,anisotropy:J,anisotropyMap:Ue,clearcoat:Ee,clearcoatMap:ze,clearcoatNormalMap:it,clearcoatRoughnessMap:gt,iridescence:ge,iridescenceMap:_e,iridescenceThicknessMap:Et,sheen:we,sheenColorMap:vt,sheenRoughnessMap:ft,specularMap:tt,specularColorMap:Fe,specularIntensityMap:I,transmission:Ze,transmissionMap:Ae,thicknessMap:Qe,gradientMap:ke,opaque:R.transparent===!1&&R.blending===no,alphaMap:ve,alphaTest:P,alphaHash:he,combine:R.combine,mapUv:We&&E(R.map.channel),aoMapUv:et&&E(R.aoMap.channel),lightMapUv:Pe&&E(R.lightMap.channel),bumpMapUv:rt&&E(R.bumpMap.channel),normalMapUv:Ve&&E(R.normalMap.channel),displacementMapUv:bt&&E(R.displacementMap.channel),emissiveMapUv:ct&&E(R.emissiveMap.channel),metalnessMapUv:L&&E(R.metalnessMap.channel),roughnessMapUv:T&&E(R.roughnessMap.channel),anisotropyMapUv:Ue&&E(R.anisotropyMap.channel),clearcoatMapUv:ze&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:it&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:ft&&E(R.sheenRoughnessMap.channel),specularMapUv:tt&&E(R.specularMap.channel),specularColorMapUv:Fe&&E(R.specularColorMap.channel),specularIntensityMapUv:I&&E(R.specularIntensityMap.channel),transmissionMapUv:Ae&&E(R.transmissionMap.channel),thicknessMapUv:Qe&&E(R.thicknessMap.channel),alphaMapUv:ve&&E(R.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ve||J),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:De,vertexUv3s:Ye,pointsUvs:xe.isPoints===!0&&!!te.attributes.uv&&(We||ve),fog:!!V,useFog:R.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:xe.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:j,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&le.length>0,shadowMapType:o.shadowMap.type,toneMapping:Xe,useLegacyLights:o._useLegacyLights,decodeVideoTexture:We&&R.map.isVideoTexture===!0&&Ft.getTransfer(R.map.colorSpace)===Wt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Li,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:de&&R.extensions.derivatives===!0,extensionFragDepth:de&&R.extensions.fragDepth===!0,extensionDrawBuffers:de&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const le in R.defines)N.push(le),N.push(R.defines[le]);return R.isRawShaderMaterial===!1&&(C(N,R),A(N,R),N.push(o.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function C(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.anisotropyMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.numLightProbes),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function A(R,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.matcap&&c.enable(4),N.envMap&&c.enable(5),N.normalMapObjectSpace&&c.enable(6),N.normalMapTangentSpace&&c.enable(7),N.clearcoat&&c.enable(8),N.iridescence&&c.enable(9),N.alphaTest&&c.enable(10),N.vertexColors&&c.enable(11),N.vertexAlphas&&c.enable(12),N.vertexUv1s&&c.enable(13),N.vertexUv2s&&c.enable(14),N.vertexUv3s&&c.enable(15),N.vertexTangents&&c.enable(16),N.anisotropy&&c.enable(17),N.alphaHash&&c.enable(18),N.batching&&c.enable(19),R.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),R.push(c.mask)}function D(R){const N=w[R.type];let le;if(N){const ce=Pi[N];le=ax.clone(ce.uniforms)}else le=R.uniforms;return le}function H(R,N){let le;for(let ce=0,xe=m.length;ce<xe;ce++){const V=m[ce];if(V.cacheKey===N){le=V,++le.usedTimes;break}}return le===void 0&&(le=new ME(o,N,R,l),m.push(le)),le}function F(R){if(--R.usedTimes===0){const N=m.indexOf(R);m[N]=m[m.length-1],m.pop(),R.destroy()}}function k(R){h.remove(R)}function oe(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:k,programs:m,dispose:oe}}function RE(){let o=new WeakMap;function e(l){let d=o.get(l);return d===void 0&&(d={},o.set(l,d)),d}function n(l){o.delete(l)}function r(l,d,c){o.get(l)[d]=c}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function CE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Hm(){const o=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function d(v,y,S,w,E,x){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:w,renderOrder:v.renderOrder,z:E,group:x},o[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=w,_.renderOrder=v.renderOrder,_.z=E,_.group=x),e++,_}function c(v,y,S,w,E,x){const _=d(v,y,S,w,E,x);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(v,y,S,w,E,x){const _=d(v,y,S,w,E,x);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(v,y){n.length>1&&n.sort(v||CE),r.length>1&&r.sort(y||Bm),a.length>1&&a.sort(y||Bm)}function g(){for(let v=e,y=o.length;v<y;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:c,unshift:h,finish:g,sort:m}}function bE(){let o=new WeakMap;function e(r,a){const l=o.get(r);let d;return l===void 0?(d=new Hm,o.set(r,[d])):a>=l.length?(d=new Hm,l.push(d)):d=l[a],d}function n(){o=new WeakMap}return{get:e,dispose:n}}function PE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new At};break;case"SpotLight":n={position:new G,direction:new G,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=n,n}}}function LE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let DE=0;function NE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function UE(o,e){const n=new PE,r=LE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)a.probe.push(new G);const l=new G,d=new Ht,c=new Ht;function h(g,v){let y=0,S=0,w=0;for(let ce=0;ce<9;ce++)a.probe[ce].set(0,0,0);let E=0,x=0,_=0,C=0,A=0,D=0,H=0,F=0,k=0,oe=0,R=0;g.sort(NE);const N=v===!0?Math.PI:1;for(let ce=0,xe=g.length;ce<xe;ce++){const V=g[ce],te=V.color,re=V.intensity,fe=V.distance,Y=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)y+=te.r*re*N,S+=te.g*re*N,w+=te.b*re*N;else if(V.isLightProbe){for(let Q=0;Q<9;Q++)a.probe[Q].addScaledVector(V.sh.coefficients[Q],re);R++}else if(V.isDirectionalLight){const Q=n.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity*N),V.castShadow){const q=V.shadow,U=r.get(V);U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,a.directionalShadow[E]=U,a.directionalShadowMap[E]=Y,a.directionalShadowMatrix[E]=V.shadow.matrix,D++}a.directional[E]=Q,E++}else if(V.isSpotLight){const Q=n.get(V);Q.position.setFromMatrixPosition(V.matrixWorld),Q.color.copy(te).multiplyScalar(re*N),Q.distance=fe,Q.coneCos=Math.cos(V.angle),Q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Q.decay=V.decay,a.spot[_]=Q;const q=V.shadow;if(V.map&&(a.spotLightMap[k]=V.map,k++,q.updateMatrices(V),V.castShadow&&oe++),a.spotLightMatrix[_]=q.matrix,V.castShadow){const U=r.get(V);U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,a.spotShadow[_]=U,a.spotShadowMap[_]=Y,F++}_++}else if(V.isRectAreaLight){const Q=n.get(V);Q.color.copy(te).multiplyScalar(re),Q.halfWidth.set(V.width*.5,0,0),Q.halfHeight.set(0,V.height*.5,0),a.rectArea[C]=Q,C++}else if(V.isPointLight){const Q=n.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity*N),Q.distance=V.distance,Q.decay=V.decay,V.castShadow){const q=V.shadow,U=r.get(V);U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,U.shadowCameraNear=q.camera.near,U.shadowCameraFar=q.camera.far,a.pointShadow[x]=U,a.pointShadowMap[x]=Y,a.pointShadowMatrix[x]=V.shadow.matrix,H++}a.point[x]=Q,x++}else if(V.isHemisphereLight){const Q=n.get(V);Q.skyColor.copy(V.color).multiplyScalar(re*N),Q.groundColor.copy(V.groundColor).multiplyScalar(re*N),a.hemi[A]=Q,A++}}C>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_FLOAT_1,a.rectAreaLTC2=Ne.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ne.LTC_HALF_1,a.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=y,a.ambient[1]=S,a.ambient[2]=w;const le=a.hash;(le.directionalLength!==E||le.pointLength!==x||le.spotLength!==_||le.rectAreaLength!==C||le.hemiLength!==A||le.numDirectionalShadows!==D||le.numPointShadows!==H||le.numSpotShadows!==F||le.numSpotMaps!==k||le.numLightProbes!==R)&&(a.directional.length=E,a.spot.length=_,a.rectArea.length=C,a.point.length=x,a.hemi.length=A,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=H,a.pointShadowMap.length=H,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=H,a.spotLightMatrix.length=F+k-oe,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=oe,a.numLightProbes=R,le.directionalLength=E,le.pointLength=x,le.spotLength=_,le.rectAreaLength=C,le.hemiLength=A,le.numDirectionalShadows=D,le.numPointShadows=H,le.numSpotShadows=F,le.numSpotMaps=k,le.numLightProbes=R,a.version=DE++)}function m(g,v){let y=0,S=0,w=0,E=0,x=0;const _=v.matrixWorldInverse;for(let C=0,A=g.length;C<A;C++){const D=g[C];if(D.isDirectionalLight){const H=a.directional[y];H.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(_),y++}else if(D.isSpotLight){const H=a.spot[w];H.position.setFromMatrixPosition(D.matrixWorld),H.position.applyMatrix4(_),H.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(_),w++}else if(D.isRectAreaLight){const H=a.rectArea[E];H.position.setFromMatrixPosition(D.matrixWorld),H.position.applyMatrix4(_),c.identity(),d.copy(D.matrixWorld),d.premultiply(_),c.extractRotation(d),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),H.halfWidth.applyMatrix4(c),H.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const H=a.point[S];H.position.setFromMatrixPosition(D.matrixWorld),H.position.applyMatrix4(_),S++}else if(D.isHemisphereLight){const H=a.hemi[x];H.direction.setFromMatrixPosition(D.matrixWorld),H.direction.transformDirection(_),x++}}}return{setup:h,setupView:m,state:a}}function Gm(o,e){const n=new UE(o,e),r=[],a=[];function l(){r.length=0,a.length=0}function d(v){r.push(v)}function c(v){a.push(v)}function h(v){n.setup(r,v)}function m(v){n.setupView(r,v)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:m,pushLight:d,pushShadow:c}}function IE(o,e){let n=new WeakMap;function r(l,d=0){const c=n.get(l);let h;return c===void 0?(h=new Gm(o,e),n.set(l,[h])):d>=c.length?(h=new Gm(o,e),c.push(h)):h=c[d],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class OE extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FE extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
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
}`;function BE(o,e,n){let r=new Bf;const a=new ot,l=new ot,d=new qt,c=new OE({depthPacking:Lv}),h=new FE,m={},g=n.maxTextureSize,v={[Cr]:In,[In]:Cr,[Li]:Li},y=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:kE,fragmentShader:zE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const w=new Fn;w.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Un(w,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let _=this.type;this.render=function(F,k,oe){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const R=o.getRenderTarget(),N=o.getActiveCubeFace(),le=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(wr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const xe=_!==ji&&this.type===ji,V=_===ji&&this.type!==ji;for(let te=0,re=F.length;te<re;te++){const fe=F[te],Y=fe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;a.copy(Y.mapSize);const Q=Y.getFrameExtents();if(a.multiply(Q),l.copy(Y.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/Q.x),a.x=l.x*Q.x,Y.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/Q.y),a.y=l.y*Q.y,Y.mapSize.y=l.y)),Y.map===null||xe===!0||V===!0){const U=this.type!==ji?{minFilter:Dn,magFilter:Dn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new es(a.x,a.y,U),Y.map.texture.name=fe.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const q=Y.getViewportCount();for(let U=0;U<q;U++){const j=Y.getViewport(U);d.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),ce.viewport(d),Y.updateMatrices(fe,U),r=Y.getFrustum(),D(k,oe,Y.camera,fe,this.type)}Y.isPointLightShadow!==!0&&this.type===ji&&C(Y,oe),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(R,N,le)};function C(F,k){const oe=e.update(E);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new es(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(k,null,oe,y,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(k,null,oe,S,E,null)}function A(F,k,oe,R){let N=null;const le=oe.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(le!==void 0)N=le;else if(N=oe.isPointLight===!0?h:c,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ce=N.uuid,xe=k.uuid;let V=m[ce];V===void 0&&(V={},m[ce]=V);let te=V[xe];te===void 0&&(te=N.clone(),V[xe]=te,k.addEventListener("dispose",H)),N=te}if(N.visible=k.visible,N.wireframe=k.wireframe,R===ji?N.side=k.shadowSide!==null?k.shadowSide:k.side:N.side=k.shadowSide!==null?k.shadowSide:v[k.side],N.alphaMap=k.alphaMap,N.alphaTest=k.alphaTest,N.map=k.map,N.clipShadows=k.clipShadows,N.clippingPlanes=k.clippingPlanes,N.clipIntersection=k.clipIntersection,N.displacementMap=k.displacementMap,N.displacementScale=k.displacementScale,N.displacementBias=k.displacementBias,N.wireframeLinewidth=k.wireframeLinewidth,N.linewidth=k.linewidth,oe.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ce=o.properties.get(N);ce.light=oe}return N}function D(F,k,oe,R,N){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===ji)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,F.matrixWorld);const xe=e.update(F),V=F.material;if(Array.isArray(V)){const te=xe.groups;for(let re=0,fe=te.length;re<fe;re++){const Y=te[re],Q=V[Y.materialIndex];if(Q&&Q.visible){const q=A(F,Q,R,N);F.onBeforeShadow(o,F,k,oe,xe,q,Y),o.renderBufferDirect(oe,null,xe,q,F,Y),F.onAfterShadow(o,F,k,oe,xe,q,Y)}}}else if(V.visible){const te=A(F,V,R,N);F.onBeforeShadow(o,F,k,oe,xe,te,null),o.renderBufferDirect(oe,null,xe,te,F,null),F.onAfterShadow(o,F,k,oe,xe,te,null)}}const ce=F.children;for(let xe=0,V=ce.length;xe<V;xe++)D(ce[xe],k,oe,R,N)}function H(F){F.target.removeEventListener("dispose",H);for(const oe in m){const R=m[oe],N=F.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function HE(o,e,n){const r=n.isWebGL2;function a(){let P=!1;const he=new qt;let de=null;const Ie=new qt(0,0,0,0);return{setMask:function(De){de!==De&&!P&&(o.colorMask(De,De,De,De),de=De)},setLocked:function(De){P=De},setClear:function(De,Ye,Xe,X,Le){Le===!0&&(De*=X,Ye*=X,Xe*=X),he.set(De,Ye,Xe,X),Ie.equals(he)===!1&&(o.clearColor(De,Ye,Xe,X),Ie.copy(he))},reset:function(){P=!1,de=null,Ie.set(-1,0,0,0)}}}function l(){let P=!1,he=null,de=null,Ie=null;return{setTest:function(De){De?Be(o.DEPTH_TEST):We(o.DEPTH_TEST)},setMask:function(De){he!==De&&!P&&(o.depthMask(De),he=De)},setFunc:function(De){if(de!==De){switch(De){case av:o.depthFunc(o.NEVER);break;case lv:o.depthFunc(o.ALWAYS);break;case uv:o.depthFunc(o.LESS);break;case jl:o.depthFunc(o.LEQUAL);break;case cv:o.depthFunc(o.EQUAL);break;case fv:o.depthFunc(o.GEQUAL);break;case dv:o.depthFunc(o.GREATER);break;case hv:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=De}},setLocked:function(De){P=De},setClear:function(De){Ie!==De&&(o.clearDepth(De),Ie=De)},reset:function(){P=!1,he=null,de=null,Ie=null}}}function d(){let P=!1,he=null,de=null,Ie=null,De=null,Ye=null,Xe=null,X=null,Le=null;return{setTest:function(Me){P||(Me?Be(o.STENCIL_TEST):We(o.STENCIL_TEST))},setMask:function(Me){he!==Me&&!P&&(o.stencilMask(Me),he=Me)},setFunc:function(Me,at,Lt){(de!==Me||Ie!==at||De!==Lt)&&(o.stencilFunc(Me,at,Lt),de=Me,Ie=at,De=Lt)},setOp:function(Me,at,Lt){(Ye!==Me||Xe!==at||X!==Lt)&&(o.stencilOp(Me,at,Lt),Ye=Me,Xe=at,X=Lt)},setLocked:function(Me){P=Me},setClear:function(Me){Le!==Me&&(o.clearStencil(Me),Le=Me)},reset:function(){P=!1,he=null,de=null,Ie=null,De=null,Ye=null,Xe=null,X=null,Le=null}}}const c=new a,h=new l,m=new d,g=new WeakMap,v=new WeakMap;let y={},S={},w=new WeakMap,E=[],x=null,_=!1,C=null,A=null,D=null,H=null,F=null,k=null,oe=null,R=new At(0,0,0),N=0,le=!1,ce=null,xe=null,V=null,te=null,re=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=Q>=2);let U=null,j={};const $=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),me=new qt().fromArray($),Re=new qt().fromArray(ae);function be(P,he,de,Ie){const De=new Uint8Array(4),Ye=o.createTexture();o.bindTexture(P,Ye),o.texParameteri(P,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(P,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xe=0;Xe<de;Xe++)r&&(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)?o.texImage3D(he,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,De):o.texImage2D(he+Xe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,De);return Ye}const Oe={};Oe[o.TEXTURE_2D]=be(o.TEXTURE_2D,o.TEXTURE_2D,1),Oe[o.TEXTURE_CUBE_MAP]=be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Oe[o.TEXTURE_2D_ARRAY]=be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Oe[o.TEXTURE_3D]=be(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Be(o.DEPTH_TEST),h.setFunc(jl),ct(!1),L(Tp),Be(o.CULL_FACE),Ve(wr);function Be(P){y[P]!==!0&&(o.enable(P),y[P]=!0)}function We(P){y[P]!==!1&&(o.disable(P),y[P]=!1)}function yt(P,he){return S[P]!==he?(o.bindFramebuffer(P,he),S[P]=he,r&&(P===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=he),P===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=he)),!0):!1}function z(P,he){let de=E,Ie=!1;if(P)if(de=w.get(he),de===void 0&&(de=[],w.set(he,de)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(de.length!==De.length||de[0]!==o.COLOR_ATTACHMENT0){for(let Ye=0,Xe=De.length;Ye<Xe;Ye++)de[Ye]=o.COLOR_ATTACHMENT0+Ye;de.length=De.length,Ie=!0}}else de[0]!==o.COLOR_ATTACHMENT0&&(de[0]=o.COLOR_ATTACHMENT0,Ie=!0);else de[0]!==o.BACK&&(de[0]=o.BACK,Ie=!0);Ie&&(n.isWebGL2?o.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function et(P){return x!==P?(o.useProgram(P),x=P,!0):!1}const Pe={[$r]:o.FUNC_ADD,[j_]:o.FUNC_SUBTRACT,[Y_]:o.FUNC_REVERSE_SUBTRACT};if(r)Pe[Cp]=o.MIN,Pe[bp]=o.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Pe[Cp]=P.MIN_EXT,Pe[bp]=P.MAX_EXT)}const rt={[q_]:o.ZERO,[$_]:o.ONE,[K_]:o.SRC_COLOR,[Sf]:o.SRC_ALPHA,[nv]:o.SRC_ALPHA_SATURATE,[ev]:o.DST_COLOR,[Q_]:o.DST_ALPHA,[Z_]:o.ONE_MINUS_SRC_COLOR,[Mf]:o.ONE_MINUS_SRC_ALPHA,[tv]:o.ONE_MINUS_DST_COLOR,[J_]:o.ONE_MINUS_DST_ALPHA,[iv]:o.CONSTANT_COLOR,[rv]:o.ONE_MINUS_CONSTANT_COLOR,[sv]:o.CONSTANT_ALPHA,[ov]:o.ONE_MINUS_CONSTANT_ALPHA};function Ve(P,he,de,Ie,De,Ye,Xe,X,Le,Me){if(P===wr){_===!0&&(We(o.BLEND),_=!1);return}if(_===!1&&(Be(o.BLEND),_=!0),P!==X_){if(P!==C||Me!==le){if((A!==$r||F!==$r)&&(o.blendEquation(o.FUNC_ADD),A=$r,F=$r),Me)switch(P){case no:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xl:o.blendFunc(o.ONE,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case no:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xl:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ap:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Rp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}D=null,H=null,k=null,oe=null,R.set(0,0,0),N=0,C=P,le=Me}return}De=De||he,Ye=Ye||de,Xe=Xe||Ie,(he!==A||De!==F)&&(o.blendEquationSeparate(Pe[he],Pe[De]),A=he,F=De),(de!==D||Ie!==H||Ye!==k||Xe!==oe)&&(o.blendFuncSeparate(rt[de],rt[Ie],rt[Ye],rt[Xe]),D=de,H=Ie,k=Ye,oe=Xe),(X.equals(R)===!1||Le!==N)&&(o.blendColor(X.r,X.g,X.b,Le),R.copy(X),N=Le),C=P,le=!1}function bt(P,he){P.side===Li?We(o.CULL_FACE):Be(o.CULL_FACE);let de=P.side===In;he&&(de=!de),ct(de),P.blending===no&&P.transparent===!1?Ve(wr):Ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),h.setFunc(P.depthFunc),h.setTest(P.depthTest),h.setMask(P.depthWrite),c.setMask(P.colorWrite);const Ie=P.stencilWrite;m.setTest(Ie),Ie&&(m.setMask(P.stencilWriteMask),m.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),m.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),J(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Be(o.SAMPLE_ALPHA_TO_COVERAGE):We(o.SAMPLE_ALPHA_TO_COVERAGE)}function ct(P){ce!==P&&(P?o.frontFace(o.CW):o.frontFace(o.CCW),ce=P)}function L(P){P!==G_?(Be(o.CULL_FACE),P!==xe&&(P===Tp?o.cullFace(o.BACK):P===V_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):We(o.CULL_FACE),xe=P}function T(P){P!==V&&(Y&&o.lineWidth(P),V=P)}function J(P,he,de){P?(Be(o.POLYGON_OFFSET_FILL),(te!==he||re!==de)&&(o.polygonOffset(he,de),te=he,re=de)):We(o.POLYGON_OFFSET_FILL)}function Ee(P){P?Be(o.SCISSOR_TEST):We(o.SCISSOR_TEST)}function ge(P){P===void 0&&(P=o.TEXTURE0+fe-1),U!==P&&(o.activeTexture(P),U=P)}function we(P,he,de){de===void 0&&(U===null?de=o.TEXTURE0+fe-1:de=U);let Ie=j[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},j[de]=Ie),(Ie.type!==P||Ie.texture!==he)&&(U!==de&&(o.activeTexture(de),U=de),o.bindTexture(P,he||Oe[P]),Ie.type=P,Ie.texture=he)}function Ze(){const P=j[U];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ue(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{o.compressedTexImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(P){me.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function Ae(P){Re.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),Re.copy(P))}function Qe(P,he){let de=v.get(he);de===void 0&&(de=new WeakMap,v.set(he,de));let Ie=de.get(P);Ie===void 0&&(Ie=o.getUniformBlockIndex(he,P.name),de.set(P,Ie))}function ke(P,he){const Ie=v.get(he).get(P);g.get(he)!==Ie&&(o.uniformBlockBinding(he,Ie,P.__bindingPointIndex),g.set(he,Ie))}function ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},U=null,j={},S={},w=new WeakMap,E=[],x=null,_=!1,C=null,A=null,D=null,H=null,F=null,k=null,oe=null,R=new At(0,0,0),N=0,le=!1,ce=null,xe=null,V=null,te=null,re=null,me.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Be,disable:We,bindFramebuffer:yt,drawBuffers:z,useProgram:et,setBlending:Ve,setMaterial:bt,setFlipSided:ct,setCullFace:L,setLineWidth:T,setPolygonOffset:J,setScissorTest:Ee,activeTexture:ge,bindTexture:we,unbindTexture:Ze,compressedTexImage2D:Ue,compressedTexImage3D:ze,texImage2D:tt,texImage3D:Fe,updateUBOMapping:Qe,uniformBlockBinding:ke,texStorage2D:vt,texStorage3D:ft,texSubImage2D:it,texSubImage3D:gt,compressedTexSubImage2D:_e,compressedTexSubImage3D:Et,scissor:I,viewport:Ae,reset:ve}}function GE(o,e,n,r,a,l,d){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return S?new OffscreenCanvas(L,T):oa("canvas")}function E(L,T,J,Ee){let ge=1;if((L.width>Ee||L.height>Ee)&&(ge=Ee/Math.max(L.width,L.height)),ge<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const we=T?Pf:Math.floor,Ze=we(ge*L.width),Ue=we(ge*L.height);v===void 0&&(v=w(Ze,Ue));const ze=J?w(Ze,Ue):v;return ze.width=Ze,ze.height=Ue,ze.getContext("2d").drawImage(L,0,0,Ze,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ze+"x"+Ue+")."),ze}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return rm(L.width)&&rm(L.height)}function _(L){return c?!1:L.wrapS!==Ei||L.wrapT!==Ei||L.minFilter!==Dn&&L.minFilter!==fi}function C(L,T){return L.generateMipmaps&&T&&L.minFilter!==Dn&&L.minFilter!==fi}function A(L){o.generateMipmap(L)}function D(L,T,J,Ee,ge=!1){if(c===!1)return T;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let we=T;if(T===o.RED&&(J===o.FLOAT&&(we=o.R32F),J===o.HALF_FLOAT&&(we=o.R16F),J===o.UNSIGNED_BYTE&&(we=o.R8)),T===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(we=o.R8UI),J===o.UNSIGNED_SHORT&&(we=o.R16UI),J===o.UNSIGNED_INT&&(we=o.R32UI),J===o.BYTE&&(we=o.R8I),J===o.SHORT&&(we=o.R16I),J===o.INT&&(we=o.R32I)),T===o.RG&&(J===o.FLOAT&&(we=o.RG32F),J===o.HALF_FLOAT&&(we=o.RG16F),J===o.UNSIGNED_BYTE&&(we=o.RG8)),T===o.RGBA){const Ze=ge?Yl:Ft.getTransfer(Ee);J===o.FLOAT&&(we=o.RGBA32F),J===o.HALF_FLOAT&&(we=o.RGBA16F),J===o.UNSIGNED_BYTE&&(we=Ze===Wt?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(we=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(we=o.RGB5_A1)}return(we===o.R16F||we===o.R32F||we===o.RG16F||we===o.RG32F||we===o.RGBA16F||we===o.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function H(L,T,J){return C(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==fi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function F(L){return L===Dn||L===Pp||L===zc?o.NEAREST:o.LINEAR}function k(L){const T=L.target;T.removeEventListener("dispose",k),R(T),T.isVideoTexture&&g.delete(T)}function oe(L){const T=L.target;T.removeEventListener("dispose",oe),le(T)}function R(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,Ee=y.get(J);if(Ee){const ge=Ee[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&N(L),Object.keys(Ee).length===0&&y.delete(J)}r.remove(L)}function N(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const J=L.source,Ee=y.get(J);delete Ee[T.__cacheKey],d.memory.textures--}function le(L){const T=L.texture,J=r.get(L),Ee=r.get(T);if(Ee.__webglTexture!==void 0&&(o.deleteTexture(Ee.__webglTexture),d.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(J.__webglFramebuffer[ge]))for(let we=0;we<J.__webglFramebuffer[ge].length;we++)o.deleteFramebuffer(J.__webglFramebuffer[ge][we]);else o.deleteFramebuffer(J.__webglFramebuffer[ge]);J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer[ge])}else{if(Array.isArray(J.__webglFramebuffer))for(let ge=0;ge<J.__webglFramebuffer.length;ge++)o.deleteFramebuffer(J.__webglFramebuffer[ge]);else o.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&o.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&o.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ge=0;ge<J.__webglColorRenderbuffer.length;ge++)J.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(J.__webglColorRenderbuffer[ge]);J.__webglDepthRenderbuffer&&o.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ge=0,we=T.length;ge<we;ge++){const Ze=r.get(T[ge]);Ze.__webglTexture&&(o.deleteTexture(Ze.__webglTexture),d.memory.textures--),r.remove(T[ge])}r.remove(T),r.remove(L)}let ce=0;function xe(){ce=0}function V(){const L=ce;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),ce+=1,L}function te(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function re(L,T){const J=r.get(L);if(L.isVideoTexture&&bt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const Ee=L.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(J,L,T);return}}n.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+T)}function fe(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){me(J,L,T);return}n.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+T)}function Y(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){me(J,L,T);return}n.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+T)}function Q(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){Re(J,L,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+T)}const q={[Tf]:o.REPEAT,[Ei]:o.CLAMP_TO_EDGE,[Af]:o.MIRRORED_REPEAT},U={[Dn]:o.NEAREST,[Pp]:o.NEAREST_MIPMAP_NEAREST,[zc]:o.NEAREST_MIPMAP_LINEAR,[fi]:o.LINEAR,[Sv]:o.LINEAR_MIPMAP_NEAREST,[ra]:o.LINEAR_MIPMAP_LINEAR},j={[Nv]:o.NEVER,[zv]:o.ALWAYS,[Uv]:o.LESS,[Pg]:o.LEQUAL,[Iv]:o.EQUAL,[kv]:o.GEQUAL,[Ov]:o.GREATER,[Fv]:o.NOTEQUAL};function $(L,T,J){if(J?(o.texParameteri(L,o.TEXTURE_WRAP_S,q[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,q[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,q[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter])):(o.texParameteri(L,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(L,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==Ei||T.wrapT!==Ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,o.TEXTURE_MAG_FILTER,F(T.magFilter)),o.texParameteri(L,o.TEXTURE_MIN_FILTER,F(T.minFilter)),T.minFilter!==Dn&&T.minFilter!==fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Dn||T.minFilter!==zc&&T.minFilter!==ra||T.type===Er&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(o.texParameterf(L,Ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function ae(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",k));const Ee=T.source;let ge=y.get(Ee);ge===void 0&&(ge={},y.set(Ee,ge));const we=te(T);if(we!==L.__cacheKey){ge[we]===void 0&&(ge[we]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),ge[we].usedTimes++;const Ze=ge[L.__cacheKey];Ze!==void 0&&(ge[L.__cacheKey].usedTimes--,Ze.usedTimes===0&&N(T)),L.__cacheKey=we,L.__webglTexture=ge[we].texture}return J}function me(L,T,J){let Ee=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ee=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ee=o.TEXTURE_3D);const ge=ae(L,T),we=T.source;n.bindTexture(Ee,L.__webglTexture,o.TEXTURE0+J);const Ze=r.get(we);if(we.version!==Ze.__version||ge===!0){n.activeTexture(o.TEXTURE0+J);const Ue=Ft.getPrimaries(Ft.workingColorSpace),ze=T.colorSpace===hi?null:Ft.getPrimaries(T.colorSpace),it=T.colorSpace===hi||Ue===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const gt=_(T)&&x(T.image)===!1;let _e=E(T.image,gt,!1,a.maxTextureSize);_e=ct(T,_e);const Et=x(_e)||c,vt=l.convert(T.format,T.colorSpace);let ft=l.convert(T.type),tt=D(T.internalFormat,vt,ft,T.colorSpace,T.isVideoTexture);$(Ee,T,Et);let Fe;const I=T.mipmaps,Ae=c&&T.isVideoTexture!==!0&&tt!==Rg,Qe=Ze.__version===void 0||ge===!0,ke=H(T,_e,Et);if(T.isDepthTexture)tt=o.DEPTH_COMPONENT,c?T.type===Er?tt=o.DEPTH_COMPONENT32F:T.type===Mr?tt=o.DEPTH_COMPONENT24:T.type===Zr?tt=o.DEPTH24_STENCIL8:tt=o.DEPTH_COMPONENT16:T.type===Er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Qr&&tt===o.DEPTH_COMPONENT&&T.type!==Ff&&T.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Mr,ft=l.convert(T.type)),T.format===oo&&tt===o.DEPTH_COMPONENT&&(tt=o.DEPTH_STENCIL,T.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Zr,ft=l.convert(T.type))),Qe&&(Ae?n.texStorage2D(o.TEXTURE_2D,1,tt,_e.width,_e.height):n.texImage2D(o.TEXTURE_2D,0,tt,_e.width,_e.height,0,vt,ft,null));else if(T.isDataTexture)if(I.length>0&&Et){Ae&&Qe&&n.texStorage2D(o.TEXTURE_2D,ke,tt,I[0].width,I[0].height);for(let ve=0,P=I.length;ve<P;ve++)Fe=I[ve],Ae?n.texSubImage2D(o.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,vt,ft,Fe.data):n.texImage2D(o.TEXTURE_2D,ve,tt,Fe.width,Fe.height,0,vt,ft,Fe.data);T.generateMipmaps=!1}else Ae?(Qe&&n.texStorage2D(o.TEXTURE_2D,ke,tt,_e.width,_e.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,_e.width,_e.height,vt,ft,_e.data)):n.texImage2D(o.TEXTURE_2D,0,tt,_e.width,_e.height,0,vt,ft,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ae&&Qe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,ke,tt,I[0].width,I[0].height,_e.depth);for(let ve=0,P=I.length;ve<P;ve++)Fe=I[ve],T.format!==wi?vt!==null?Ae?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,_e.depth,vt,Fe.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ve,tt,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?n.texSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,_e.depth,vt,ft,Fe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ve,tt,Fe.width,Fe.height,_e.depth,0,vt,ft,Fe.data)}else{Ae&&Qe&&n.texStorage2D(o.TEXTURE_2D,ke,tt,I[0].width,I[0].height);for(let ve=0,P=I.length;ve<P;ve++)Fe=I[ve],T.format!==wi?vt!==null?Ae?n.compressedTexSubImage2D(o.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,vt,Fe.data):n.compressedTexImage2D(o.TEXTURE_2D,ve,tt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?n.texSubImage2D(o.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,vt,ft,Fe.data):n.texImage2D(o.TEXTURE_2D,ve,tt,Fe.width,Fe.height,0,vt,ft,Fe.data)}else if(T.isDataArrayTexture)Ae?(Qe&&n.texStorage3D(o.TEXTURE_2D_ARRAY,ke,tt,_e.width,_e.height,_e.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,vt,ft,_e.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,tt,_e.width,_e.height,_e.depth,0,vt,ft,_e.data);else if(T.isData3DTexture)Ae?(Qe&&n.texStorage3D(o.TEXTURE_3D,ke,tt,_e.width,_e.height,_e.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,vt,ft,_e.data)):n.texImage3D(o.TEXTURE_3D,0,tt,_e.width,_e.height,_e.depth,0,vt,ft,_e.data);else if(T.isFramebufferTexture){if(Qe)if(Ae)n.texStorage2D(o.TEXTURE_2D,ke,tt,_e.width,_e.height);else{let ve=_e.width,P=_e.height;for(let he=0;he<ke;he++)n.texImage2D(o.TEXTURE_2D,he,tt,ve,P,0,vt,ft,null),ve>>=1,P>>=1}}else if(I.length>0&&Et){Ae&&Qe&&n.texStorage2D(o.TEXTURE_2D,ke,tt,I[0].width,I[0].height);for(let ve=0,P=I.length;ve<P;ve++)Fe=I[ve],Ae?n.texSubImage2D(o.TEXTURE_2D,ve,0,0,vt,ft,Fe):n.texImage2D(o.TEXTURE_2D,ve,tt,vt,ft,Fe);T.generateMipmaps=!1}else Ae?(Qe&&n.texStorage2D(o.TEXTURE_2D,ke,tt,_e.width,_e.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,vt,ft,_e)):n.texImage2D(o.TEXTURE_2D,0,tt,vt,ft,_e);C(T,Et)&&A(Ee),Ze.__version=we.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Re(L,T,J){if(T.image.length!==6)return;const Ee=ae(L,T),ge=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+J);const we=r.get(ge);if(ge.version!==we.__version||Ee===!0){n.activeTexture(o.TEXTURE0+J);const Ze=Ft.getPrimaries(Ft.workingColorSpace),Ue=T.colorSpace===hi?null:Ft.getPrimaries(T.colorSpace),ze=T.colorSpace===hi||Ze===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,gt=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let ve=0;ve<6;ve++)!it&&!gt?_e[ve]=E(T.image[ve],!1,!0,a.maxCubemapSize):_e[ve]=gt?T.image[ve].image:T.image[ve],_e[ve]=ct(T,_e[ve]);const Et=_e[0],vt=x(Et)||c,ft=l.convert(T.format,T.colorSpace),tt=l.convert(T.type),Fe=D(T.internalFormat,ft,tt,T.colorSpace),I=c&&T.isVideoTexture!==!0,Ae=we.__version===void 0||Ee===!0;let Qe=H(T,Et,vt);$(o.TEXTURE_CUBE_MAP,T,vt);let ke;if(it){I&&Ae&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Qe,Fe,Et.width,Et.height);for(let ve=0;ve<6;ve++){ke=_e[ve].mipmaps;for(let P=0;P<ke.length;P++){const he=ke[P];T.format!==wi?ft!==null?I?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P,0,0,he.width,he.height,ft,he.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P,Fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P,0,0,he.width,he.height,ft,tt,he.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P,Fe,he.width,he.height,0,ft,tt,he.data)}}}else{ke=T.mipmaps,I&&Ae&&(ke.length>0&&Qe++,n.texStorage2D(o.TEXTURE_CUBE_MAP,Qe,Fe,_e[0].width,_e[0].height));for(let ve=0;ve<6;ve++)if(gt){I?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,_e[ve].width,_e[ve].height,ft,tt,_e[ve].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Fe,_e[ve].width,_e[ve].height,0,ft,tt,_e[ve].data);for(let P=0;P<ke.length;P++){const de=ke[P].image[ve].image;I?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P+1,0,0,de.width,de.height,ft,tt,de.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P+1,Fe,de.width,de.height,0,ft,tt,de.data)}}else{I?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ft,tt,_e[ve]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Fe,ft,tt,_e[ve]);for(let P=0;P<ke.length;P++){const he=ke[P];I?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P+1,0,0,ft,tt,he.image[ve]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,P+1,Fe,ft,tt,he.image[ve])}}}C(T,vt)&&A(o.TEXTURE_CUBE_MAP),we.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function be(L,T,J,Ee,ge,we){const Ze=l.convert(J.format,J.colorSpace),Ue=l.convert(J.type),ze=D(J.internalFormat,Ze,Ue,J.colorSpace);if(!r.get(T).__hasExternalTextures){const gt=Math.max(1,T.width>>we),_e=Math.max(1,T.height>>we);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,we,ze,gt,_e,T.depth,0,Ze,Ue,null):n.texImage2D(ge,we,ze,gt,_e,0,Ze,Ue,null)}n.bindFramebuffer(o.FRAMEBUFFER,L),Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ge,r.get(J).__webglTexture,0,rt(T)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ge,r.get(J).__webglTexture,we),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Oe(L,T,J){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let Ee=c===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(J||Ve(T)){const ge=T.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Er?Ee=o.DEPTH_COMPONENT32F:ge.type===Mr&&(Ee=o.DEPTH_COMPONENT24));const we=rt(T);Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,Ee,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,we,Ee,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,Ee,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const Ee=rt(T);J&&Ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee,o.DEPTH24_STENCIL8,T.width,T.height):Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const Ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ge=0;ge<Ee.length;ge++){const we=Ee[ge],Ze=l.convert(we.format,we.colorSpace),Ue=l.convert(we.type),ze=D(we.internalFormat,Ze,Ue,we.colorSpace),it=rt(T);J&&Ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,it,ze,T.width,T.height):Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,it,ze,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ze,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Be(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),re(T.depthTexture,0);const Ee=r.get(T.depthTexture).__webglTexture,ge=rt(T);if(T.depthTexture.format===Qr)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(T.depthTexture.format===oo)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,ge):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function We(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Be(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Ee]),T.__webglDepthbuffer[Ee]=o.createRenderbuffer(),Oe(T.__webglDepthbuffer[Ee],L,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Oe(T.__webglDepthbuffer,L,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(L,T,J){const Ee=r.get(L);T!==void 0&&be(Ee.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&We(L)}function z(L){const T=L.texture,J=r.get(L),Ee=r.get(T);L.addEventListener("dispose",oe),L.isWebGLMultipleRenderTargets!==!0&&(Ee.__webglTexture===void 0&&(Ee.__webglTexture=o.createTexture()),Ee.__version=T.version,d.memory.textures++);const ge=L.isWebGLCubeRenderTarget===!0,we=L.isWebGLMultipleRenderTargets===!0,Ze=x(L)||c;if(ge){J.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(c&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Ue]=[];for(let ze=0;ze<T.mipmaps.length;ze++)J.__webglFramebuffer[Ue][ze]=o.createFramebuffer()}else J.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)J.__webglFramebuffer[Ue]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(we)if(a.drawBuffers){const Ue=L.texture;for(let ze=0,it=Ue.length;ze<it;ze++){const gt=r.get(Ue[ze]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&Ve(L)===!1){const Ue=we?T:[T];J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ze=0;ze<Ue.length;ze++){const it=Ue[ze];J.__webglColorRenderbuffer[ze]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ze]);const gt=l.convert(it.format,it.colorSpace),_e=l.convert(it.type),Et=D(it.internalFormat,gt,_e,it.colorSpace,L.isXRRenderTarget===!0),vt=rt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,Et,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,J.__webglColorRenderbuffer[ze])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Oe(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ge){n.bindTexture(o.TEXTURE_CUBE_MAP,Ee.__webglTexture),$(o.TEXTURE_CUBE_MAP,T,Ze);for(let Ue=0;Ue<6;Ue++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)be(J.__webglFramebuffer[Ue][ze],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,ze);else be(J.__webglFramebuffer[Ue],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);C(T,Ze)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){const Ue=L.texture;for(let ze=0,it=Ue.length;ze<it;ze++){const gt=Ue[ze],_e=r.get(gt);n.bindTexture(o.TEXTURE_2D,_e.__webglTexture),$(o.TEXTURE_2D,gt,Ze),be(J.__webglFramebuffer,L,gt,o.COLOR_ATTACHMENT0+ze,o.TEXTURE_2D,0),C(gt,Ze)&&A(o.TEXTURE_2D)}n.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Ue=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ue,Ee.__webglTexture),$(Ue,T,Ze),c&&T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)be(J.__webglFramebuffer[ze],L,T,o.COLOR_ATTACHMENT0,Ue,ze);else be(J.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Ue,0);C(T,Ze)&&A(Ue),n.unbindTexture()}L.depthBuffer&&We(L)}function et(L){const T=x(L)||c,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let Ee=0,ge=J.length;Ee<ge;Ee++){const we=J[Ee];if(C(we,T)){const Ze=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ue=r.get(we).__webglTexture;n.bindTexture(Ze,Ue),A(Ze),n.unbindTexture()}}}function Pe(L){if(c&&L.samples>0&&Ve(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,Ee=L.height;let ge=o.COLOR_BUFFER_BIT;const we=[],Ze=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=r.get(L),ze=L.isWebGLMultipleRenderTargets===!0;if(ze)for(let it=0;it<T.length;it++)n.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let it=0;it<T.length;it++){we.push(o.COLOR_ATTACHMENT0+it),L.depthBuffer&&we.push(Ze);const gt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(gt===!1&&(L.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),ze&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[it]),gt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ze]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ze])),ze){const _e=r.get(T[it]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,_e,0)}o.blitFramebuffer(0,0,J,Ee,0,0,J,Ee,ge,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ze)for(let it=0;it<T.length;it++){n.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,Ue.__webglColorRenderbuffer[it]);const gt=r.get(T[it]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ue.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,gt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function rt(L){return Math.min(a.maxSamples,L.samples)}function Ve(L){const T=r.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(L){const T=d.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ct(L,T){const J=L.colorSpace,Ee=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Cf||J!==$i&&J!==hi&&(Ft.getTransfer(J)===Wt?c===!1?e.has("EXT_sRGB")===!0&&Ee===wi?(L.format=Cf,L.minFilter=fi,L.generateMipmaps=!1):T=Dg.sRGBToLinear(T):(Ee!==wi||ge!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}this.allocateTextureUnit=V,this.resetTextureUnits=xe,this.setTexture2D=re,this.setTexture2DArray=fe,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=yt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ve}function VE(o,e,n){const r=n.isWebGL2;function a(l,d=hi){let c;const h=Ft.getTransfer(d);if(l===Ar)return o.UNSIGNED_BYTE;if(l===Mg)return o.UNSIGNED_SHORT_4_4_4_4;if(l===Eg)return o.UNSIGNED_SHORT_5_5_5_1;if(l===Mv)return o.BYTE;if(l===Ev)return o.SHORT;if(l===Ff)return o.UNSIGNED_SHORT;if(l===Sg)return o.INT;if(l===Mr)return o.UNSIGNED_INT;if(l===Er)return o.FLOAT;if(l===sa)return r?o.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===wv)return o.ALPHA;if(l===wi)return o.RGBA;if(l===Tv)return o.LUMINANCE;if(l===Av)return o.LUMINANCE_ALPHA;if(l===Qr)return o.DEPTH_COMPONENT;if(l===oo)return o.DEPTH_STENCIL;if(l===Cf)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===Rv)return o.RED;if(l===wg)return o.RED_INTEGER;if(l===Cv)return o.RG;if(l===Tg)return o.RG_INTEGER;if(l===Ag)return o.RGBA_INTEGER;if(l===Bc||l===Hc||l===Gc||l===Vc)if(h===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Lp||l===Dp||l===Np||l===Up)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Lp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Dp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Up)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===Rg)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Ip||l===Op)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Ip)return h===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Op)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Fp||l===kp||l===zp||l===Bp||l===Hp||l===Gp||l===Vp||l===Wp||l===Xp||l===jp||l===Yp||l===qp||l===$p||l===Kp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Fp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===kp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===zp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Bp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Hp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Gp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Vp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Wp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Xp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===jp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Yp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===qp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===$p)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Kp)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Wc||l===Zp||l===Qp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Wc)return h===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Zp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Qp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===bv||l===Jp||l===em||l===tm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Wc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Jp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===em)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===tm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Zr?r?o.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):o[l]!==void 0?o[l]:null}return{convert:a}}class WE extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class eo extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,d=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,r),_=this._getHandJoint(m,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&y>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new eo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class jE extends is{constructor(e,n){super();const r=this;let a=null,l=1,d=null,c="local-floor",h=1,m=null,g=null,v=null,y=null,S=null,w=null;const E=n.getContextAttributes();let x=null,_=null;const C=[],A=[],D=new ot;let H=null;const F=new ni;F.layers.enable(1),F.viewport=new qt;const k=new ni;k.layers.enable(2),k.viewport=new qt;const oe=[F,k],R=new WE;R.layers.enable(1),R.layers.enable(2);let N=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=C[$];return ae===void 0&&(ae=new mf,C[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=C[$];return ae===void 0&&(ae=new mf,C[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=C[$];return ae===void 0&&(ae=new mf,C[$]=ae),ae.getHandSpace()};function ce($){const ae=A.indexOf($.inputSource);if(ae===-1)return;const me=C[ae];me!==void 0&&(me.update($.inputSource,$.frame,m||d),me.dispatchEvent({type:$.type,data:$.inputSource}))}function xe(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",xe),a.removeEventListener("inputsourceschange",V);for(let $=0;$<C.length;$++){const ae=A[$];ae!==null&&(A[$]=null,C[$].disconnect(ae))}N=null,le=null,e.setRenderTarget(x),S=null,y=null,v=null,a=null,_=null,j.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(D.width,D.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",xe),a.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(D),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new es(S.framebufferWidth,S.framebufferHeight,{format:wi,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let ae=null,me=null,Re=null;E.depth&&(Re=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=E.stencil?oo:Qr,me=E.stencil?Zr:Mr);const be={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:l};v=new XRWebGLBinding(a,n),y=v.createProjectionLayer(be),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),_=new es(y.textureWidth,y.textureHeight,{format:wi,type:Ar,depthTexture:new Gg(y.textureWidth,y.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Oe=e.properties.get(_);Oe.__ignoreDepthValues=y.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(c),j.setContext(a),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function V($){for(let ae=0;ae<$.removed.length;ae++){const me=$.removed[ae],Re=A.indexOf(me);Re>=0&&(A[Re]=null,C[Re].disconnect(me))}for(let ae=0;ae<$.added.length;ae++){const me=$.added[ae];let Re=A.indexOf(me);if(Re===-1){for(let Oe=0;Oe<C.length;Oe++)if(Oe>=A.length){A.push(me),Re=Oe;break}else if(A[Oe]===null){A[Oe]=me,Re=Oe;break}if(Re===-1)break}const be=C[Re];be&&be.connect(me)}}const te=new G,re=new G;function fe($,ae,me){te.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const Re=te.distanceTo(re),be=ae.projectionMatrix.elements,Oe=me.projectionMatrix.elements,Be=be[14]/(be[10]-1),We=be[14]/(be[10]+1),yt=(be[9]+1)/be[5],z=(be[9]-1)/be[5],et=(be[8]-1)/be[0],Pe=(Oe[8]+1)/Oe[0],rt=Be*et,Ve=Be*Pe,bt=Re/(-et+Pe),ct=bt*-et;ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const L=Be+bt,T=We+bt,J=rt-ct,Ee=Ve+(Re-ct),ge=yt*We/T*L,we=z*We/T*L;$.projectionMatrix.makePerspective(J,Ee,ge,we,L,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function Y($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;R.near=k.near=F.near=$.near,R.far=k.far=F.far=$.far,(N!==R.near||le!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,le=R.far);const ae=$.parent,me=R.cameras;Y(R,ae);for(let Re=0;Re<me.length;Re++)Y(me[Re],ae);me.length===2?fe(R,F,k):R.projectionMatrix.copy(F.projectionMatrix),Q($,R,ae)};function Q($,ae,me){me===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function($){h=$,y!==null&&(y.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)};let q=null;function U($,ae){if(g=ae.getViewerPose(m||d),w=ae,g!==null){const me=g.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let Re=!1;me.length!==R.cameras.length&&(R.cameras.length=0,Re=!0);for(let be=0;be<me.length;be++){const Oe=me[be];let Be=null;if(S!==null)Be=S.getViewport(Oe);else{const yt=v.getViewSubImage(y,Oe);Be=yt.viewport,be===0&&(e.setRenderTargetTextures(_,yt.colorTexture,y.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(_))}let We=oe[be];We===void 0&&(We=new ni,We.layers.enable(be),We.viewport=new qt,oe[be]=We),We.matrix.fromArray(Oe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Oe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Be.x,Be.y,Be.width,Be.height),be===0&&(R.matrix.copy(We.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Re===!0&&R.cameras.push(We)}}for(let me=0;me<C.length;me++){const Re=A[me],be=C[me];Re!==null&&be!==void 0&&be.update(Re,ae,m||d)}q&&q($,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),w=null}const j=new Hg;j.setAnimationLoop(U),this.setAnimationLoop=function($){q=$},this.dispose=function(){}}}function YE(o,e){function n(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,kg(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,C,A,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),g(x,_)):_.isMeshStandardMaterial?(l(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,D)):_.isMeshMatcapMaterial?(l(x,_),w(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),E(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?h(x,_,C,A):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,n(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===In&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,n(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===In&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,n(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,n(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_).envMap;if(C&&(x.envMap.value=C,x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*A,n(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,C,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=A*.5,_.map&&(x.map.value=_.map,n(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,n(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,n(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qE(o,e,n,r){let a={},l={},d=[];const c=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(C,A){const D=A.program;r.uniformBlockBinding(C,D)}function m(C,A){let D=a[C.id];D===void 0&&(w(C),D=g(C),a[C.id]=D,C.addEventListener("dispose",x));const H=A.program;r.updateUBOMapping(C,H);const F=e.render.frame;l[C.id]!==F&&(y(C),l[C.id]=F)}function g(C){const A=v();C.__bindingPointIndex=A;const D=o.createBuffer(),H=C.__size,F=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,D),D}function v(){for(let C=0;C<c;C++)if(d.indexOf(C)===-1)return d.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(C){const A=a[C.id],D=C.uniforms,H=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let F=0,k=D.length;F<k;F++){const oe=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,N=oe.length;R<N;R++){const le=oe[R];if(S(le,F,R,H)===!0){const ce=le.__offset,xe=Array.isArray(le.value)?le.value:[le.value];let V=0;for(let te=0;te<xe.length;te++){const re=xe[te],fe=E(re);typeof re=="number"||typeof re=="boolean"?(le.__data[0]=re,o.bufferSubData(o.UNIFORM_BUFFER,ce+V,le.__data)):re.isMatrix3?(le.__data[0]=re.elements[0],le.__data[1]=re.elements[1],le.__data[2]=re.elements[2],le.__data[3]=0,le.__data[4]=re.elements[3],le.__data[5]=re.elements[4],le.__data[6]=re.elements[5],le.__data[7]=0,le.__data[8]=re.elements[6],le.__data[9]=re.elements[7],le.__data[10]=re.elements[8],le.__data[11]=0):(re.toArray(le.__data,V),V+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,le.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(C,A,D,H){const F=C.value,k=A+"_"+D;if(H[k]===void 0)return typeof F=="number"||typeof F=="boolean"?H[k]=F:H[k]=F.clone(),!0;{const oe=H[k];if(typeof F=="number"||typeof F=="boolean"){if(oe!==F)return H[k]=F,!0}else if(oe.equals(F)===!1)return oe.copy(F),!0}return!1}function w(C){const A=C.uniforms;let D=0;const H=16;for(let k=0,oe=A.length;k<oe;k++){const R=Array.isArray(A[k])?A[k]:[A[k]];for(let N=0,le=R.length;N<le;N++){const ce=R[N],xe=Array.isArray(ce.value)?ce.value:[ce.value];for(let V=0,te=xe.length;V<te;V++){const re=xe[V],fe=E(re),Y=D%H;Y!==0&&H-Y<fe.boundary&&(D+=H-Y),ce.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=fe.storage}}}const F=D%H;return F>0&&(D+=H-F),C.__size=D,C.__cache={},this}function E(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function x(C){const A=C.target;A.removeEventListener("dispose",x);const D=d.indexOf(A.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(a[A.id]),delete a[A.id],delete l[A.id]}function _(){for(const C in a)o.deleteBuffer(a[C]);d=[],a={},l={}}return{bind:h,update:m,dispose:_}}class qg{constructor(e={}){const{canvas:n=Vv(),context:r=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=d;const S=new Uint32Array(4),w=new Int32Array(4);let E=null,x=null;const _=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=Tr,this.toneMappingExposure=1;const A=this;let D=!1,H=0,F=0,k=null,oe=-1,R=null;const N=new qt,le=new qt;let ce=null;const xe=new At(0);let V=0,te=n.width,re=n.height,fe=1,Y=null,Q=null;const q=new qt(0,0,te,re),U=new qt(0,0,te,re);let j=!1;const $=new Bf;let ae=!1,me=!1,Re=null;const be=new Ht,Oe=new ot,Be=new G,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return k===null?fe:1}let z=r;function et(b,Z){for(let se=0;se<b.length;se++){const ue=b[se],ie=n.getContext(ue,Z);if(ie!==null)return ie}return null}try{const b={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",he,!1),z===null){const Z=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&Z.shift(),z=et(Z,b),z===null)throw et(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,rt,Ve,bt,ct,L,T,J,Ee,ge,we,Ze,Ue,ze,it,gt,_e,Et,vt,ft,tt,Fe,I,Ae;function Qe(){Pe=new rM(z),rt=new ZS(z,Pe,e),Pe.init(rt),Fe=new VE(z,Pe,rt),Ve=new HE(z,Pe,rt),bt=new aM(z),ct=new RE,L=new GE(z,Pe,Ve,ct,rt,Fe,bt),T=new JS(A),J=new iM(A),Ee=new px(z,rt),I=new $S(z,Pe,Ee,rt),ge=new sM(z,Ee,bt,I),we=new fM(z,ge,Ee,bt),vt=new cM(z,rt,L),gt=new QS(ct),Ze=new AE(A,T,J,Pe,rt,I,gt),Ue=new YE(A,ct),ze=new bE,it=new IE(Pe,rt),Et=new qS(A,T,J,Ve,we,y,h),_e=new BE(A,we,rt),Ae=new qE(z,bt,rt,Ve),ft=new KS(z,Pe,bt,rt),tt=new oM(z,Pe,bt,rt),bt.programs=Ze.programs,A.capabilities=rt,A.extensions=Pe,A.properties=ct,A.renderLists=ze,A.shadowMap=_e,A.state=Ve,A.info=bt}Qe();const ke=new jE(A,z);this.xr=ke,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(b){b!==void 0&&(fe=b,this.setSize(te,re,!1))},this.getSize=function(b){return b.set(te,re)},this.setSize=function(b,Z,se=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,re=Z,n.width=Math.floor(b*fe),n.height=Math.floor(Z*fe),se===!0&&(n.style.width=b+"px",n.style.height=Z+"px"),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(te*fe,re*fe).floor()},this.setDrawingBufferSize=function(b,Z,se){te=b,re=Z,fe=se,n.width=Math.floor(b*se),n.height=Math.floor(Z*se),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(N)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,Z,se,ue){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,Z,se,ue),Ve.viewport(N.copy(q).multiplyScalar(fe).floor())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,Z,se,ue){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,Z,se,ue),Ve.scissor(le.copy(U).multiplyScalar(fe).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){Ve.setScissorTest(j=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(b=!0,Z=!0,se=!0){let ue=0;if(b){let ie=!1;if(k!==null){const He=k.texture.format;ie=He===Ag||He===Tg||He===wg}if(ie){const He=k.texture.type,st=He===Ar||He===Mr||He===Ff||He===Zr||He===Mg||He===Eg,ht=Et.getClearColor(),je=Et.getClearAlpha(),St=ht.r,_t=ht.g,xt=ht.b;st?(S[0]=St,S[1]=_t,S[2]=xt,S[3]=je,z.clearBufferuiv(z.COLOR,0,S)):(w[0]=St,w[1]=_t,w[2]=xt,w[3]=je,z.clearBufferiv(z.COLOR,0,w))}else ue|=z.COLOR_BUFFER_BIT}Z&&(ue|=z.DEPTH_BUFFER_BIT),se&&(ue|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ze.dispose(),it.dispose(),ct.dispose(),T.dispose(),J.dispose(),we.dispose(),I.dispose(),Ae.dispose(),Ze.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Le),ke.removeEventListener("sessionend",Me),Re&&(Re.dispose(),Re=null),at.stop()};function ve(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=bt.autoReset,Z=_e.enabled,se=_e.autoUpdate,ue=_e.needsUpdate,ie=_e.type;Qe(),bt.autoReset=b,_e.enabled=Z,_e.autoUpdate=se,_e.needsUpdate=ue,_e.type=ie}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){const Z=b.target;Z.removeEventListener("dispose",de),Ie(Z)}function Ie(b){De(b),ct.remove(b)}function De(b){const Z=ct.get(b).programs;Z!==void 0&&(Z.forEach(function(se){Ze.releaseProgram(se)}),b.isShaderMaterial&&Ze.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,se,ue,ie,He){Z===null&&(Z=We);const st=ie.isMesh&&ie.matrixWorld.determinant()<0,ht=xn(b,Z,se,ue,ie);Ve.setMaterial(ue,st);let je=se.index,St=1;if(ue.wireframe===!0){if(je=ge.getWireframeAttribute(se),je===void 0)return;St=2}const _t=se.drawRange,xt=se.attributes.position;let zt=_t.start*St,An=(_t.start+_t.count)*St;He!==null&&(zt=Math.max(zt,He.start*St),An=Math.min(An,(He.start+He.count)*St)),je!==null?(zt=Math.max(zt,0),An=Math.min(An,je.count)):xt!=null&&(zt=Math.max(zt,0),An=Math.min(An,xt.count));const en=An-zt;if(en<0||en===1/0)return;I.setup(ie,ue,ht,se,je);let zn,Pt=ft;if(je!==null&&(zn=Ee.get(je),Pt=tt,Pt.setIndex(zn)),ie.isMesh)ue.wireframe===!0?(Ve.setLineWidth(ue.wireframeLinewidth*yt()),Pt.setMode(z.LINES)):Pt.setMode(z.TRIANGLES);else if(ie.isLine){let wt=ue.linewidth;wt===void 0&&(wt=1),Ve.setLineWidth(wt*yt()),ie.isLineSegments?Pt.setMode(z.LINES):ie.isLineLoop?Pt.setMode(z.LINE_LOOP):Pt.setMode(z.LINE_STRIP)}else ie.isPoints?Pt.setMode(z.POINTS):ie.isSprite&&Pt.setMode(z.TRIANGLES);if(ie.isBatchedMesh)Pt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)Pt.renderInstances(zt,en,ie.count);else if(se.isInstancedBufferGeometry){const wt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Rn=Math.min(se.instanceCount,wt);Pt.renderInstances(zt,en,Rn)}else Pt.render(zt,en)};function Ye(b,Z,se){b.transparent===!0&&b.side===Li&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Nt(b,Z,se),b.side=Cr,b.needsUpdate=!0,Nt(b,Z,se),b.side=Li):Nt(b,Z,se)}this.compile=function(b,Z,se=null){se===null&&(se=b),x=it.get(se),x.init(),C.push(x),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),b!==se&&b.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Z.layers)&&(x.pushLight(ie),ie.castShadow&&x.pushShadow(ie))}),x.setupLights(A._useLegacyLights);const ue=new Set;return b.traverse(function(ie){const He=ie.material;if(He)if(Array.isArray(He))for(let st=0;st<He.length;st++){const ht=He[st];Ye(ht,se,ie),ue.add(ht)}else Ye(He,se,ie),ue.add(He)}),C.pop(),x=null,ue},this.compileAsync=function(b,Z,se=null){const ue=this.compile(b,Z,se);return new Promise(ie=>{function He(){if(ue.forEach(function(st){ct.get(st).currentProgram.isReady()&&ue.delete(st)}),ue.size===0){ie(b);return}setTimeout(He,10)}Pe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Xe=null;function X(b){Xe&&Xe(b)}function Le(){at.stop()}function Me(){at.start()}const at=new Hg;at.setAnimationLoop(X),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(b){Xe=b,ke.setAnimationLoop(b),b===null?at.stop():at.start()},ke.addEventListener("sessionstart",Le),ke.addEventListener("sessionend",Me),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(Z),Z=ke.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,Z,k),x=it.get(b,C.length),x.init(),C.push(x),be.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(be),me=this.localClippingEnabled,ae=gt.init(this.clippingPlanes,me),E=ze.get(b,_.length),E.init(),_.push(E),Lt(b,Z,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(Y,Q),this.info.render.frame++,ae===!0&&gt.beginShadows();const se=x.state.shadowsArray;if(_e.render(se,b,Z),ae===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(E,b),x.setupLights(A._useLegacyLights),Z.isArrayCamera){const ue=Z.cameras;for(let ie=0,He=ue.length;ie<He;ie++){const st=ue[ie];$e(E,b,st,st.viewport)}}else $e(E,b,Z);k!==null&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(A,b,Z),I.resetDefaultState(),oe=-1,R=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Lt(b,Z,se,ue){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){ue&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const st=we.update(b),ht=b.material;ht.visible&&E.push(b,st,ht,se,Be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const st=we.update(b),ht=b.material;if(ue&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Be.copy(st.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(ht)){const je=st.groups;for(let St=0,_t=je.length;St<_t;St++){const xt=je[St],zt=ht[xt.materialIndex];zt&&zt.visible&&E.push(b,st,zt,se,Be.z,xt)}}else ht.visible&&E.push(b,st,ht,se,Be.z,null)}}const He=b.children;for(let st=0,ht=He.length;st<ht;st++)Lt(He[st],Z,se,ue)}function $e(b,Z,se,ue){const ie=b.opaque,He=b.transmissive,st=b.transparent;x.setupLightsView(se),ae===!0&&gt.setGlobalState(A.clippingPlanes,se),He.length>0&&dt(ie,He,Z,se),ue&&Ve.viewport(N.copy(ue)),ie.length>0&&pt(ie,Z,se),He.length>0&&pt(He,Z,se),st.length>0&&pt(st,Z,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function dt(b,Z,se,ue){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const He=rt.isWebGL2;Re===null&&(Re=new es(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?sa:Ar,minFilter:ra,samples:He?4:0})),A.getDrawingBufferSize(Oe),He?Re.setSize(Oe.x,Oe.y):Re.setSize(Pf(Oe.x),Pf(Oe.y));const st=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(xe),V=A.getClearAlpha(),V<1&&A.setClearColor(16777215,.5),A.clear();const ht=A.toneMapping;A.toneMapping=Tr,pt(b,se,ue),L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re);let je=!1;for(let St=0,_t=Z.length;St<_t;St++){const xt=Z[St],zt=xt.object,An=xt.geometry,en=xt.material,zn=xt.group;if(en.side===Li&&zt.layers.test(ue.layers)){const Pt=en.side;en.side=In,en.needsUpdate=!0,Ot(zt,se,ue,An,en,zn),en.side=Pt,en.needsUpdate=!0,je=!0}}je===!0&&(L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re)),A.setRenderTarget(st),A.setClearColor(xe,V),A.toneMapping=ht}function pt(b,Z,se){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,He=b.length;ie<He;ie++){const st=b[ie],ht=st.object,je=st.geometry,St=ue===null?st.material:ue,_t=st.group;ht.layers.test(se.layers)&&Ot(ht,Z,se,je,St,_t)}}function Ot(b,Z,se,ue,ie,He){b.onBeforeRender(A,Z,se,ue,ie,He),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ie.onBeforeRender(A,Z,se,ue,b,He),ie.transparent===!0&&ie.side===Li&&ie.forceSinglePass===!1?(ie.side=In,ie.needsUpdate=!0,A.renderBufferDirect(se,Z,ue,ie,b,He),ie.side=Cr,ie.needsUpdate=!0,A.renderBufferDirect(se,Z,ue,ie,b,He),ie.side=Li):A.renderBufferDirect(se,Z,ue,ie,b,He),b.onAfterRender(A,Z,se,ue,ie,He)}function Nt(b,Z,se){Z.isScene!==!0&&(Z=We);const ue=ct.get(b),ie=x.state.lights,He=x.state.shadowsArray,st=ie.state.version,ht=Ze.getParameters(b,ie.state,He,Z,se),je=Ze.getProgramCacheKey(ht);let St=ue.programs;ue.environment=b.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(b.isMeshStandardMaterial?J:T).get(b.envMap||ue.environment),St===void 0&&(b.addEventListener("dispose",de),St=new Map,ue.programs=St);let _t=St.get(je);if(_t!==void 0){if(ue.currentProgram===_t&&ue.lightsStateVersion===st)return Jt(b,ht),_t}else ht.uniforms=Ze.getUniforms(b),b.onBuild(se,ht,A),b.onBeforeCompile(ht,A),_t=Ze.acquireProgram(ht,je),St.set(je,_t),ue.uniforms=ht.uniforms;const xt=ue.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xt.clippingPlanes=gt.uniform),Jt(b,ht),ue.needsLights=Pr(b),ue.lightsStateVersion=st,ue.needsLights&&(xt.ambientLightColor.value=ie.state.ambient,xt.lightProbe.value=ie.state.probe,xt.directionalLights.value=ie.state.directional,xt.directionalLightShadows.value=ie.state.directionalShadow,xt.spotLights.value=ie.state.spot,xt.spotLightShadows.value=ie.state.spotShadow,xt.rectAreaLights.value=ie.state.rectArea,xt.ltc_1.value=ie.state.rectAreaLTC1,xt.ltc_2.value=ie.state.rectAreaLTC2,xt.pointLights.value=ie.state.point,xt.pointLightShadows.value=ie.state.pointShadow,xt.hemisphereLights.value=ie.state.hemi,xt.directionalShadowMap.value=ie.state.directionalShadowMap,xt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,xt.spotShadowMap.value=ie.state.spotShadowMap,xt.spotLightMatrix.value=ie.state.spotLightMatrix,xt.spotLightMap.value=ie.state.spotLightMap,xt.pointShadowMap.value=ie.state.pointShadowMap,xt.pointShadowMatrix.value=ie.state.pointShadowMatrix),ue.currentProgram=_t,ue.uniformsList=null,_t}function Xt(b){if(b.uniformsList===null){const Z=b.currentProgram.getUniforms();b.uniformsList=Wl.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function Jt(b,Z){const se=ct.get(b);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function xn(b,Z,se,ue,ie){Z.isScene!==!0&&(Z=We),L.resetTextureUnits();const He=Z.fog,st=ue.isMeshStandardMaterial?Z.environment:null,ht=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$i,je=(ue.isMeshStandardMaterial?J:T).get(ue.envMap||st),St=ue.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,_t=!!se.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),xt=!!se.morphAttributes.position,zt=!!se.morphAttributes.normal,An=!!se.morphAttributes.color;let en=Tr;ue.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(en=A.toneMapping);const zn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pt=zn!==void 0?zn.length:0,wt=ct.get(ue),Rn=x.state.lights;if(ae===!0&&(me===!0||b!==R)){const Bn=b===R&&ue.id===oe;gt.setState(ue,b,Bn)}let jt=!1;ue.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Rn.state.version||wt.outputColorSpace!==ht||ie.isBatchedMesh&&wt.batching===!1||!ie.isBatchedMesh&&wt.batching===!0||ie.isInstancedMesh&&wt.instancing===!1||!ie.isInstancedMesh&&wt.instancing===!0||ie.isSkinnedMesh&&wt.skinning===!1||!ie.isSkinnedMesh&&wt.skinning===!0||ie.isInstancedMesh&&wt.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&wt.instancingColor===!1&&ie.instanceColor!==null||wt.envMap!==je||ue.fog===!0&&wt.fog!==He||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==gt.numPlanes||wt.numIntersection!==gt.numIntersection)||wt.vertexAlphas!==St||wt.vertexTangents!==_t||wt.morphTargets!==xt||wt.morphNormals!==zt||wt.morphColors!==An||wt.toneMapping!==en||rt.isWebGL2===!0&&wt.morphTargetsCount!==Pt)&&(jt=!0):(jt=!0,wt.__version=ue.version);let Di=wt.currentProgram;jt===!0&&(Di=Nt(ue,Z,ie));let ua=!1,Ti=!1,Ki=!1;const Zt=Di.getUniforms(),ii=wt.uniforms;if(Ve.useProgram(Di.program)&&(ua=!0,Ti=!0,Ki=!0),ue.id!==oe&&(oe=ue.id,Ti=!0),ua||R!==b){Zt.setValue(z,"projectionMatrix",b.projectionMatrix),Zt.setValue(z,"viewMatrix",b.matrixWorldInverse);const Bn=Zt.map.cameraPosition;Bn!==void 0&&Bn.setValue(z,Be.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Zt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Zt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Ti=!0,Ki=!0)}if(ie.isSkinnedMesh){Zt.setOptional(z,ie,"bindMatrix"),Zt.setOptional(z,ie,"bindMatrixInverse");const Bn=ie.skeleton;Bn&&(rt.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),Zt.setValue(z,"boneTexture",Bn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Zt.setOptional(z,ie,"batchingTexture"),Zt.setValue(z,"batchingTexture",ie._matricesTexture,L));const uo=se.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0&&rt.isWebGL2===!0)&&vt.update(ie,se,Di),(Ti||wt.receiveShadow!==ie.receiveShadow)&&(wt.receiveShadow=ie.receiveShadow,Zt.setValue(z,"receiveShadow",ie.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(ii.envMap.value=je,ii.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Ti&&(Zt.setValue(z,"toneMappingExposure",A.toneMappingExposure),wt.needsLights&&kn(ii,Ki),He&&ue.fog===!0&&Ue.refreshFogUniforms(ii,He),Ue.refreshMaterialUniforms(ii,ue,fe,re,Re),Wl.upload(z,Xt(wt),ii,L)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Wl.upload(z,Xt(wt),ii,L),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Zt.setValue(z,"center",ie.center),Zt.setValue(z,"modelViewMatrix",ie.modelViewMatrix),Zt.setValue(z,"normalMatrix",ie.normalMatrix),Zt.setValue(z,"modelMatrix",ie.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Bn=ue.uniformsGroups;for(let Lr=0,ca=Bn.length;Lr<ca;Lr++)if(rt.isWebGL2){const os=Bn[Lr];Ae.update(os,Di),Ae.bind(os,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function kn(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function Pr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,Z,se){ct.get(b.texture).__webglTexture=Z,ct.get(b.depthTexture).__webglTexture=se;const ue=ct.get(b);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=se===void 0,ue.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,Z){const se=ct.get(b);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(b,Z=0,se=0){k=b,H=Z,F=se;let ue=!0,ie=null,He=!1,st=!1;if(b){const je=ct.get(b);je.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(z.FRAMEBUFFER,null),ue=!1):je.__webglFramebuffer===void 0?L.setupRenderTarget(b):je.__hasExternalTextures&&L.rebindTextures(b,ct.get(b.texture).__webglTexture,ct.get(b.depthTexture).__webglTexture);const St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(st=!0);const _t=ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(_t[Z])?ie=_t[Z][se]:ie=_t[Z],He=!0):rt.isWebGL2&&b.samples>0&&L.useMultisampledRTT(b)===!1?ie=ct.get(b).__webglMultisampledFramebuffer:Array.isArray(_t)?ie=_t[se]:ie=_t,N.copy(b.viewport),le.copy(b.scissor),ce=b.scissorTest}else N.copy(q).multiplyScalar(fe).floor(),le.copy(U).multiplyScalar(fe).floor(),ce=j;if(Ve.bindFramebuffer(z.FRAMEBUFFER,ie)&&rt.drawBuffers&&ue&&Ve.drawBuffers(b,ie),Ve.viewport(N),Ve.scissor(le),Ve.setScissorTest(ce),He){const je=ct.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,je.__webglTexture,se)}else if(st){const je=ct.get(b.texture),St=Z||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,se||0,St)}oe=-1},this.readRenderTargetPixels=function(b,Z,se,ue,ie,He,st){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){Ve.bindFramebuffer(z.FRAMEBUFFER,ht);try{const je=b.texture,St=je.format,_t=je.type;if(St!==wi&&Fe.convert(St)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xt=_t===sa&&(Pe.has("EXT_color_buffer_half_float")||rt.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(_t!==Ar&&Fe.convert(_t)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(_t===Er&&(rt.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-ue&&se>=0&&se<=b.height-ie&&z.readPixels(Z,se,ue,ie,Fe.convert(St),Fe.convert(_t),He)}finally{const je=k!==null?ct.get(k).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(b,Z,se=0){const ue=Math.pow(2,-se),ie=Math.floor(Z.image.width*ue),He=Math.floor(Z.image.height*ue);L.setTexture2D(Z,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,b.x,b.y,ie,He),Ve.unbindTexture()},this.copyTextureToTexture=function(b,Z,se,ue=0){const ie=Z.image.width,He=Z.image.height,st=Fe.convert(se.format),ht=Fe.convert(se.type);L.setTexture2D(se,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,se.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ue,b.x,b.y,ie,He,st,ht,Z.image.data):Z.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ue,b.x,b.y,Z.mipmaps[0].width,Z.mipmaps[0].height,st,Z.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,ue,b.x,b.y,st,ht,Z.image),ue===0&&se.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,se,ue,ie=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=b.max.x-b.min.x+1,st=b.max.y-b.min.y+1,ht=b.max.z-b.min.z+1,je=Fe.convert(ue.format),St=Fe.convert(ue.type);let _t;if(ue.isData3DTexture)L.setTexture3D(ue,0),_t=z.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)L.setTexture2DArray(ue,0),_t=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ue.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ue.unpackAlignment);const xt=z.getParameter(z.UNPACK_ROW_LENGTH),zt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),An=z.getParameter(z.UNPACK_SKIP_PIXELS),en=z.getParameter(z.UNPACK_SKIP_ROWS),zn=z.getParameter(z.UNPACK_SKIP_IMAGES),Pt=se.isCompressedTexture?se.mipmaps[ie]:se.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),se.isDataTexture||se.isData3DTexture?z.texSubImage3D(_t,ie,Z.x,Z.y,Z.z,He,st,ht,je,St,Pt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(_t,ie,Z.x,Z.y,Z.z,He,st,ht,je,Pt.data)):z.texSubImage3D(_t,ie,Z.x,Z.y,Z.z,He,st,ht,je,St,Pt),z.pixelStorei(z.UNPACK_ROW_LENGTH,xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,An),z.pixelStorei(z.UNPACK_SKIP_ROWS,en),z.pixelStorei(z.UNPACK_SKIP_IMAGES,zn),ie===0&&ue.generateMipmaps&&z.generateMipmap(_t),Ve.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Ve.unbindTexture()},this.resetState=function(){H=0,F=0,k=null,Ve.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kf?"display-p3":"srgb",n.unpackColorSpace=Ft.workingColorSpace===eu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?Jr:Cg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?ln:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $E extends qg{}$E.prototype.isWebGL1Renderer=!0;class Vf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=n}clone(){return new Vf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class KE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ZE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=n.array[r+a];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new G;class Zl{constructor(e,n,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)Pn.fromBufferAttribute(this,n),Pn.applyMatrix4(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Pn.fromBufferAttribute(this,n),Pn.applyNormalMatrix(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Pn.fromBufferAttribute(this,n),Pn.transformDirection(e),this.setXYZ(n,Pn.x,Pn.y,Pn.z);return this}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Yi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Yi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Yi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Yi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return new Yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Df extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ys;const qo=new G,qs=new G,$s=new G,Ks=new ot,$o=new ot,$g=new Ht,Ul=new G,Ko=new G,Il=new G,Vm=new ot,gf=new ot,Wm=new ot;class Xm extends sn{constructor(e=new Df){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Fn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ZE(n,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Zl(r,3,0,!1)),Ys.setAttribute("uv",new Zl(r,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new ot(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),$g.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-$s.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const d=this.center;Ol(Ul.set(-.5,-.5,0),$s,d,qs,a,l),Ol(Ko.set(.5,-.5,0),$s,d,qs,a,l),Ol(Il.set(.5,.5,0),$s,d,qs,a,l),Vm.set(0,0),gf.set(1,0),Wm.set(1,1);let c=e.ray.intersectTriangle(Ul,Ko,Il,!1,qo);if(c===null&&(Ol(Ko.set(-.5,.5,0),$s,d,qs,a,l),gf.set(0,1),c=e.ray.intersectTriangle(Ul,Il,Ko,!1,qo),c===null))return;const h=e.ray.origin.distanceTo(qo);h<e.near||h>e.far||n.push({distance:h,point:qo.clone(),uv:di.getInterpolation(qo,Ul,Ko,Il,Vm,gf,Wm,new ot),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ol(o,e,n,r,a,l){Ks.subVectors(o,n).addScalar(.5).multiply(r),a!==void 0?($o.x=l*Ks.x-a*Ks.y,$o.y=a*Ks.x+l*Ks.y):$o.copy(Ks),o.copy(e),o.x+=$o.x,o.y+=$o.y,o.applyMatrix4($g)}class jm extends Yn{constructor(e,n,r,a=1){super(e,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zs=new Ht,Ym=new Ht,Fl=[],qm=new rs,QE=new Ht,Zo=new Un,Qo=new ss;class $m extends Un{constructor(e,n,r){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new jm(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,QE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Zs),qm.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(qm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,Zs),Qo.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Qo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const r=this.matrixWorld,a=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(r),e.ray.intersectsSphere(Qo)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,Zs),Ym.multiplyMatrices(r,Zs),Zo.matrixWorld=Ym,Zo.raycast(e,Fl);for(let d=0,c=Fl.length;d<c;d++){const h=Fl[d];h.instanceId=l,h.object=this,n.push(h)}Fl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new jm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Kg extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Km=new G,Zm=new G,Qm=new Ht,_f=new aa,kl=new ss;class JE extends sn{constructor(e=new Fn,n=new Kg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Km.fromBufferAttribute(n,a-1),Zm.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Km.distanceTo(Zm);e.setAttribute("lineDistance",new vn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(a),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;Qm.copy(a).invert(),_f.copy(e.ray).applyMatrix4(Qm);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=new G,g=new G,v=new G,y=new G,S=this.isLineSegments?2:1,w=r.index,x=r.attributes.position;if(w!==null){const _=Math.max(0,d.start),C=Math.min(w.count,d.start+d.count);for(let A=_,D=C-1;A<D;A+=S){const H=w.getX(A),F=w.getX(A+1);if(m.fromBufferAttribute(x,H),g.fromBufferAttribute(x,F),_f.distanceSqToSegment(m,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const oe=e.ray.origin.distanceTo(y);oe<e.near||oe>e.far||n.push({distance:oe,point:v.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,d.start),C=Math.min(x.count,d.start+d.count);for(let A=_,D=C-1;A<D;A+=S){if(m.fromBufferAttribute(x,A),g.fromBufferAttribute(x,A+1),_f.distanceSqToSegment(m,g,y,v)>h)continue;y.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(y);F<e.near||F>e.far||n.push({distance:F,point:v.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}class Zg extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new Ht,Nf=new aa,zl=new ss,Bl=new G;class e1 extends sn{constructor(e=new Fn,n=new Zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(a),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;Jm.copy(a).invert(),Nf.copy(e.ray).applyMatrix4(Jm);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=r.index,v=r.attributes.position;if(m!==null){const y=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let w=y,E=S;w<E;w++){const x=m.getX(w);Bl.fromBufferAttribute(v,x),eg(Bl,x,h,a,e,n,this)}}else{const y=Math.max(0,d.start),S=Math.min(v.count,d.start+d.count);for(let w=y,E=S;w<E;w++)Bl.fromBufferAttribute(v,w),eg(Bl,w,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function eg(o,e,n,r,a,l,d){const c=Nf.distanceSqToPoint(o);if(c<n){const h=new G;Nf.closestPointToPoint(o,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:d})}}class tg extends On{constructor(e,n,r,a,l,d,c,h,m){super(e,n,r,a,l,d,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wf extends Fn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],d=[];c(a),m(r),g(),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(l.slice(),3)),this.setAttribute("uv",new vn(d,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function c(C){const A=new G,D=new G,H=new G;for(let F=0;F<n.length;F+=3)S(n[F+0],A),S(n[F+1],D),S(n[F+2],H),h(A,D,H,C)}function h(C,A,D,H){const F=H+1,k=[];for(let oe=0;oe<=F;oe++){k[oe]=[];const R=C.clone().lerp(D,oe/F),N=A.clone().lerp(D,oe/F),le=F-oe;for(let ce=0;ce<=le;ce++)ce===0&&oe===F?k[oe][ce]=R:k[oe][ce]=R.clone().lerp(N,ce/le)}for(let oe=0;oe<F;oe++)for(let R=0;R<2*(F-oe)-1;R++){const N=Math.floor(R/2);R%2===0?(y(k[oe][N+1]),y(k[oe+1][N]),y(k[oe][N])):(y(k[oe][N+1]),y(k[oe+1][N+1]),y(k[oe+1][N]))}}function m(C){const A=new G;for(let D=0;D<l.length;D+=3)A.x=l[D+0],A.y=l[D+1],A.z=l[D+2],A.normalize().multiplyScalar(C),l[D+0]=A.x,l[D+1]=A.y,l[D+2]=A.z}function g(){const C=new G;for(let A=0;A<l.length;A+=3){C.x=l[A+0],C.y=l[A+1],C.z=l[A+2];const D=x(C)/2/Math.PI+.5,H=_(C)/Math.PI+.5;d.push(D,1-H)}w(),v()}function v(){for(let C=0;C<d.length;C+=6){const A=d[C+0],D=d[C+2],H=d[C+4],F=Math.max(A,D,H),k=Math.min(A,D,H);F>.9&&k<.1&&(A<.2&&(d[C+0]+=1),D<.2&&(d[C+2]+=1),H<.2&&(d[C+4]+=1))}}function y(C){l.push(C.x,C.y,C.z)}function S(C,A){const D=C*3;A.x=e[D+0],A.y=e[D+1],A.z=e[D+2]}function w(){const C=new G,A=new G,D=new G,H=new G,F=new ot,k=new ot,oe=new ot;for(let R=0,N=0;R<l.length;R+=9,N+=6){C.set(l[R+0],l[R+1],l[R+2]),A.set(l[R+3],l[R+4],l[R+5]),D.set(l[R+6],l[R+7],l[R+8]),F.set(d[N+0],d[N+1]),k.set(d[N+2],d[N+3]),oe.set(d[N+4],d[N+5]),H.copy(C).add(A).add(D).divideScalar(3);const le=x(H);E(F,N+0,C,le),E(k,N+2,A,le),E(oe,N+4,D,le)}}function E(C,A,D,H){H<0&&C.x===1&&(d[A]=C.x-1),D.x===0&&D.z===0&&(d[A]=H/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.vertices,e.indices,e.radius,e.details)}}class Ql extends Wf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class Xf extends Fn{constructor(e=.5,n=1,r=32,a=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:d},r=Math.max(3,r),a=Math.max(1,a);const c=[],h=[],m=[],g=[];let v=e;const y=(n-e)/a,S=new G,w=new ot;for(let E=0;E<=a;E++){for(let x=0;x<=r;x++){const _=l+x/r*d;S.x=v*Math.cos(_),S.y=v*Math.sin(_),h.push(S.x,S.y,S.z),m.push(0,0,1),w.x=(S.x/n+1)/2,w.y=(S.y/n+1)/2,g.push(w.x,w.y)}v+=y}for(let E=0;E<a;E++){const x=E*(r+1);for(let _=0;_<r;_++){const C=_+x,A=C,D=C+r+1,H=C+r+2,F=C+1;c.push(A,D,F),c.push(D,H,F)}}this.setIndex(c),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(m,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class to extends Fn{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,d=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:d,thetaLength:c},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(d+c,Math.PI);let m=0;const g=[],v=new G,y=new G,S=[],w=[],E=[],x=[];for(let _=0;_<=r;_++){const C=[],A=_/r;let D=0;_===0&&d===0?D=.5/n:_===r&&h===Math.PI&&(D=-.5/n);for(let H=0;H<=n;H++){const F=H/n;v.x=-e*Math.cos(a+F*l)*Math.sin(d+A*c),v.y=e*Math.cos(d+A*c),v.z=e*Math.sin(a+F*l)*Math.sin(d+A*c),w.push(v.x,v.y,v.z),y.copy(v).normalize(),E.push(y.x,y.y,y.z),x.push(F+D,1-A),C.push(m++)}g.push(C)}for(let _=0;_<r;_++)for(let C=0;C<n;C++){const A=g[_][C+1],D=g[_][C],H=g[_+1][C],F=g[_+1][C+1];(_!==0||d>0)&&S.push(A,D,F),(_!==r-1||h<Math.PI)&&S.push(D,H,F)}this.setIndex(S),this.setAttribute("position",new vn(w,3)),this.setAttribute("normal",new vn(E,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jo extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bg,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ng={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class t1{constructor(e,n,r){const a=this;let l=!1,d=0,c=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(g){c++,l===!1&&a.onStart!==void 0&&a.onStart(g,d,c),l=!0},this.itemEnd=function(g){d++,a.onProgress!==void 0&&a.onProgress(g,d,c),d===c&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],w=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return w}return null}}}const n1=new t1;class jf{constructor(e){this.manager=e!==void 0?e:n1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,l){r.load(e,a,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jf.DEFAULT_MATERIAL_NAME="__DEFAULT";class i1 extends jf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=ng.get(e);if(d!==void 0)return l.manager.itemStart(e),setTimeout(function(){n&&n(d),l.manager.itemEnd(e)},0),d;const c=oa("img");function h(){g(),ng.add(e,this),n&&n(this),l.manager.itemEnd(e)}function m(v){g(),a&&a(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){c.removeEventListener("load",h,!1),c.removeEventListener("error",m,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class r1 extends jf{constructor(e){super(e)}load(e,n,r,a){const l=new On,d=new i1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(c){l.image=c,l.needsUpdate=!0,n!==void 0&&n(l)},r,a),l}}class Yf extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class s1 extends Yf{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const vf=new Ht,ig=new G,rg=new G;class o1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;ig.setFromMatrixPosition(e.matrixWorld),n.position.copy(ig),rg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rg),n.updateMatrixWorld(),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sg=new Ht,ea=new G,xf=new G;class a1 extends o1{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(ea),xf.copy(r.position),xf.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(xf),r.updateMatrixWorld(),a.makeTranslation(-ea.x,-ea.y,-ea.z),sg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sg)}}class l1 extends Yf{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u1 extends Yf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class c1{constructor(e,n,r=0,a=1/0){this.ray=new aa(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return Uf(e,this,r,n),r.sort(og),r}intersectObjects(e,n=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Uf(e[a],this,r,n);return r.sort(og),r}}function og(o,e){return o.distance-e.distance}function Uf(o,e,n,r){if(o.layers.test(e.layers)&&o.raycast(e,n),r===!0){const a=o.children;for(let l=0,d=a.length;l<d;l++)Uf(a[l],e,n,!0)}}class ag{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);const lg={type:"change"},yf={type:"start"},ug={type:"end"},Hl=new aa,cg=new Sr,f1=Math.cos(70*Gv.DEG2RAD);class d1 extends is{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",it),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",it),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(lg),r.update(),l=a.NONE},this.update=(function(){const I=new G,Ae=new ts().setFromUnitVectors(e.up,new G(0,1,0)),Qe=Ae.clone().invert(),ke=new G,ve=new ts,P=new G,he=2*Math.PI;return function(Ie=null){const De=r.object.position;I.copy(De).sub(r.target),I.applyQuaternion(Ae),c.setFromVector3(I),r.autoRotate&&l===a.NONE&&ce(N(Ie)),r.enableDamping?(c.theta+=h.theta*r.dampingFactor,c.phi+=h.phi*r.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let Ye=r.minAzimuthAngle,Xe=r.maxAzimuthAngle;isFinite(Ye)&&isFinite(Xe)&&(Ye<-Math.PI?Ye+=he:Ye>Math.PI&&(Ye-=he),Xe<-Math.PI?Xe+=he:Xe>Math.PI&&(Xe-=he),Ye<=Xe?c.theta=Math.max(Ye,Math.min(Xe,c.theta)):c.theta=c.theta>(Ye+Xe)/2?Math.max(Ye,c.theta):Math.min(Xe,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&F||r.object.isOrthographicCamera?c.radius=q(c.radius):c.radius=q(c.radius*m),I.setFromSpherical(c),I.applyQuaternion(Qe),De.copy(r.target).add(I),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let X=!1;if(r.zoomToCursor&&F){let Le=null;if(r.object.isPerspectiveCamera){const Me=I.length();Le=q(Me*m);const at=Me-Le;r.object.position.addScaledVector(D,at),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Me=new G(H.x,H.y,0);Me.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),X=!0;const at=new G(H.x,H.y,0);at.unproject(r.object),r.object.position.sub(at).add(Me),r.object.updateMatrixWorld(),Le=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Le!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Le).add(r.object.position):(Hl.origin.copy(r.object.position),Hl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Hl.direction))<f1?e.lookAt(r.target):(cg.setFromNormalAndCoplanarPoint(r.object.up,r.target),Hl.intersectPlane(cg,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),X=!0);return m=1,F=!1,X||ke.distanceToSquared(r.object.position)>d||8*(1-ve.dot(r.object.quaternion))>d||P.distanceToSquared(r.target)>0?(r.dispatchEvent(lg),ke.copy(r.object.position),ve.copy(r.object.quaternion),P.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Et),r.domElement.removeEventListener("pointerdown",L),r.domElement.removeEventListener("pointercancel",J),r.domElement.removeEventListener("wheel",we),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",J),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",it),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const d=1e-6,c=new ag,h=new ag;let m=1;const g=new G,v=new ot,y=new ot,S=new ot,w=new ot,E=new ot,x=new ot,_=new ot,C=new ot,A=new ot,D=new G,H=new ot;let F=!1;const k=[],oe={};let R=!1;function N(I){return I!==null?2*Math.PI/60*r.autoRotateSpeed*I:2*Math.PI/60/60*r.autoRotateSpeed}function le(I){const Ae=Math.abs(I*.01);return Math.pow(.95,r.zoomSpeed*Ae)}function ce(I){h.theta-=I}function xe(I){h.phi-=I}const V=(function(){const I=new G;return function(Qe,ke){I.setFromMatrixColumn(ke,0),I.multiplyScalar(-Qe),g.add(I)}})(),te=(function(){const I=new G;return function(Qe,ke){r.screenSpacePanning===!0?I.setFromMatrixColumn(ke,1):(I.setFromMatrixColumn(ke,0),I.crossVectors(r.object.up,I)),I.multiplyScalar(Qe),g.add(I)}})(),re=(function(){const I=new G;return function(Qe,ke){const ve=r.domElement;if(r.object.isPerspectiveCamera){const P=r.object.position;I.copy(P).sub(r.target);let he=I.length();he*=Math.tan(r.object.fov/2*Math.PI/180),V(2*Qe*he/ve.clientHeight,r.object.matrix),te(2*ke*he/ve.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(V(Qe*(r.object.right-r.object.left)/r.object.zoom/ve.clientWidth,r.object.matrix),te(ke*(r.object.top-r.object.bottom)/r.object.zoom/ve.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function fe(I){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Y(I){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function Q(I,Ae){if(!r.zoomToCursor)return;F=!0;const Qe=r.domElement.getBoundingClientRect(),ke=I-Qe.left,ve=Ae-Qe.top,P=Qe.width,he=Qe.height;H.x=ke/P*2-1,H.y=-(ve/he)*2+1,D.set(H.x,H.y,1).unproject(r.object).sub(r.object.position).normalize()}function q(I){return Math.max(r.minDistance,Math.min(r.maxDistance,I))}function U(I){v.set(I.clientX,I.clientY)}function j(I){Q(I.clientX,I.clientX),_.set(I.clientX,I.clientY)}function $(I){w.set(I.clientX,I.clientY)}function ae(I){y.set(I.clientX,I.clientY),S.subVectors(y,v).multiplyScalar(r.rotateSpeed);const Ae=r.domElement;ce(2*Math.PI*S.x/Ae.clientHeight),xe(2*Math.PI*S.y/Ae.clientHeight),v.copy(y),r.update()}function me(I){C.set(I.clientX,I.clientY),A.subVectors(C,_),A.y>0?fe(le(A.y)):A.y<0&&Y(le(A.y)),_.copy(C),r.update()}function Re(I){E.set(I.clientX,I.clientY),x.subVectors(E,w).multiplyScalar(r.panSpeed),re(x.x,x.y),w.copy(E),r.update()}function be(I){Q(I.clientX,I.clientY),I.deltaY<0?Y(le(I.deltaY)):I.deltaY>0&&fe(le(I.deltaY)),r.update()}function Oe(I){let Ae=!1;switch(I.code){case r.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?xe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,r.keyPanSpeed),Ae=!0;break;case r.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?xe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(0,-r.keyPanSpeed),Ae=!0;break;case r.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?ce(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(r.keyPanSpeed,0),Ae=!0;break;case r.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?ce(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):re(-r.keyPanSpeed,0),Ae=!0;break}Ae&&(I.preventDefault(),r.update())}function Be(I){if(k.length===1)v.set(I.pageX,I.pageY);else{const Ae=Fe(I),Qe=.5*(I.pageX+Ae.x),ke=.5*(I.pageY+Ae.y);v.set(Qe,ke)}}function We(I){if(k.length===1)w.set(I.pageX,I.pageY);else{const Ae=Fe(I),Qe=.5*(I.pageX+Ae.x),ke=.5*(I.pageY+Ae.y);w.set(Qe,ke)}}function yt(I){const Ae=Fe(I),Qe=I.pageX-Ae.x,ke=I.pageY-Ae.y,ve=Math.sqrt(Qe*Qe+ke*ke);_.set(0,ve)}function z(I){r.enableZoom&&yt(I),r.enablePan&&We(I)}function et(I){r.enableZoom&&yt(I),r.enableRotate&&Be(I)}function Pe(I){if(k.length==1)y.set(I.pageX,I.pageY);else{const Qe=Fe(I),ke=.5*(I.pageX+Qe.x),ve=.5*(I.pageY+Qe.y);y.set(ke,ve)}S.subVectors(y,v).multiplyScalar(r.rotateSpeed);const Ae=r.domElement;ce(2*Math.PI*S.x/Ae.clientHeight),xe(2*Math.PI*S.y/Ae.clientHeight),v.copy(y)}function rt(I){if(k.length===1)E.set(I.pageX,I.pageY);else{const Ae=Fe(I),Qe=.5*(I.pageX+Ae.x),ke=.5*(I.pageY+Ae.y);E.set(Qe,ke)}x.subVectors(E,w).multiplyScalar(r.panSpeed),re(x.x,x.y),w.copy(E)}function Ve(I){const Ae=Fe(I),Qe=I.pageX-Ae.x,ke=I.pageY-Ae.y,ve=Math.sqrt(Qe*Qe+ke*ke);C.set(0,ve),A.set(0,Math.pow(C.y/_.y,r.zoomSpeed)),fe(A.y),_.copy(C);const P=(I.pageX+Ae.x)*.5,he=(I.pageY+Ae.y)*.5;Q(P,he)}function bt(I){r.enableZoom&&Ve(I),r.enablePan&&rt(I)}function ct(I){r.enableZoom&&Ve(I),r.enableRotate&&Pe(I)}function L(I){r.enabled!==!1&&(k.length===0&&(r.domElement.setPointerCapture(I.pointerId),r.domElement.addEventListener("pointermove",T),r.domElement.addEventListener("pointerup",J)),vt(I),I.pointerType==="touch"?gt(I):Ee(I))}function T(I){r.enabled!==!1&&(I.pointerType==="touch"?_e(I):ge(I))}function J(I){ft(I),k.length===0&&(r.domElement.releasePointerCapture(I.pointerId),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",J)),r.dispatchEvent(ug),l=a.NONE}function Ee(I){let Ae;switch(I.button){case 0:Ae=r.mouseButtons.LEFT;break;case 1:Ae=r.mouseButtons.MIDDLE;break;case 2:Ae=r.mouseButtons.RIGHT;break;default:Ae=-1}switch(Ae){case bs.DOLLY:if(r.enableZoom===!1)return;j(I),l=a.DOLLY;break;case bs.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(r.enablePan===!1)return;$(I),l=a.PAN}else{if(r.enableRotate===!1)return;U(I),l=a.ROTATE}break;case bs.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(r.enableRotate===!1)return;U(I),l=a.ROTATE}else{if(r.enablePan===!1)return;$(I),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(yf)}function ge(I){switch(l){case a.ROTATE:if(r.enableRotate===!1)return;ae(I);break;case a.DOLLY:if(r.enableZoom===!1)return;me(I);break;case a.PAN:if(r.enablePan===!1)return;Re(I);break}}function we(I){r.enabled===!1||r.enableZoom===!1||l!==a.NONE||(I.preventDefault(),r.dispatchEvent(yf),be(Ze(I)),r.dispatchEvent(ug))}function Ze(I){const Ae=I.deltaMode,Qe={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(Ae){case 1:Qe.deltaY*=16;break;case 2:Qe.deltaY*=100;break}return I.ctrlKey&&!R&&(Qe.deltaY*=10),Qe}function Ue(I){I.key==="Control"&&(R=!0,document.addEventListener("keyup",ze,{passive:!0,capture:!0}))}function ze(I){I.key==="Control"&&(R=!1,document.removeEventListener("keyup",ze,{passive:!0,capture:!0}))}function it(I){r.enabled===!1||r.enablePan===!1||Oe(I)}function gt(I){switch(tt(I),k.length){case 1:switch(r.touches.ONE){case Ps.ROTATE:if(r.enableRotate===!1)return;Be(I),l=a.TOUCH_ROTATE;break;case Ps.PAN:if(r.enablePan===!1)return;We(I),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(r.touches.TWO){case Ps.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;z(I),l=a.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;et(I),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&r.dispatchEvent(yf)}function _e(I){switch(tt(I),l){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;Pe(I),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;rt(I),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;bt(I),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ct(I),r.update();break;default:l=a.NONE}}function Et(I){r.enabled!==!1&&I.preventDefault()}function vt(I){k.push(I.pointerId)}function ft(I){delete oe[I.pointerId];for(let Ae=0;Ae<k.length;Ae++)if(k[Ae]==I.pointerId){k.splice(Ae,1);return}}function tt(I){let Ae=oe[I.pointerId];Ae===void 0&&(Ae=new ot,oe[I.pointerId]=Ae),Ae.set(I.pageX,I.pageY)}function Fe(I){const Ae=I.pointerId===k[0]?k[1]:k[0];return oe[Ae]}r.domElement.addEventListener("contextmenu",Et),r.domElement.addEventListener("pointerdown",L),r.domElement.addEventListener("pointercancel",J),r.domElement.addEventListener("wheel",we,{passive:!1}),document.addEventListener("keydown",Ue,{passive:!0,capture:!0}),this.update()}}/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fn=(o,e)=>{const n=Mt.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:c="",children:h,...m},g)=>Mt.createElement("svg",{ref:g,...h1,width:a,height:a,stroke:r,strokeWidth:d?Number(l)*24/Number(a):l,className:["lucide",`lucide-${p1(o)}`,c].join(" "),...m},[...e.map(([v,y])=>Mt.createElement(v,y)),...Array.isArray(h)?h:[h]]));return n.displayName=`${o}`,n};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=fn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=fn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=fn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=fn("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=fn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=fn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=fn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=fn("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=fn("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=fn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=fn("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=fn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=fn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=fn("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=fn("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=fn("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=fn("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=fn("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=fn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),P1=({size:o=24,className:e=""})=>pe.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"currentColor",className:e,xmlns:"http://www.w3.org/2000/svg",children:pe.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 0.467 4.212l-1.315 2.97c-.966 2.05-2.73 3.32-5.46 3.32h-1.9l-.718 3.51h-1.39c-.536 0-.964.44-.856.965l-.707 3.55z"})}),L1=({size:o=24,className:e=""})=>pe.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[pe.jsx("circle",{cx:"12",cy:"12",r:"10"}),pe.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),pe.jsx("path",{d:"M12 18V6"})]}),ti="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/textures%20updated",pg="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_X01.mp3",mg="https://raw.githubusercontent.com/rendrasc/solar-system-3D/main/audio/horizon_journey_01.mp3",ei=(o,e,n,r,a,l,d)=>({name:o,radius:e,distance:n,speed:r,color:a,textureUrl:`${ti}/${o.toLowerCase()}.jpg`,desc:l,facts:d,type:"Moon"}),ta=[{id:"sun",name:"Sun",type:"Star",radius:35,distance:0,speed:0,color:"#FFD700",textureType:"star",textureUrl:`${ti}/the_sun.jpg`,stats:{temp:"5,500°C",orbit:"N/A",gravity:"274 m/s²",day:"25 Days"},comp:["Hydrogen","Helium"],desc:"The star at the center of our Solar System.",narration:"The Sun is the colossal powerhouse at the center of our Solar System, a nearly perfect sphere of hot plasma that dictates the orbits of every planet. It accounts for a staggering 99.86% of the total mass of the entire system. Its core is a nuclear fusion reactor, converting 600 million tons of hydrogen into helium every single second.",facts:["Accounts for 99.86% of solar system mass.","Light takes 8 mins to reach Earth.","Core is ~15 million degrees Celsius.","Will eventually become a Red Giant.","Magnetic field flips every 11 years."]},{id:"mercury",name:"Mercury",type:"Planet",radius:2.8,distance:55,speed:.015,color:"#999999",textureType:"mercury",textureUrl:`${ti}/mercury.jpg`,stats:{temp:"167°C",orbit:"88 Days",gravity:"3.7 m/s²",day:"59 Days"},comp:["Iron","Sodium"],desc:"The smallest planet in the Solar System.",narration:"Mercury is the smallest planet in our solar system and the closest to the Sun. Despite its proximity, it is not the hottest planet. It possesses a dark, cratered surface reminiscent of Earth's Moon. Uniquely, Mercury has an enormous iron core making up 85% of its radius.",facts:["Shrinks as it cools, creating cliffs.","Temp swings from 430°C to -180°C.","No atmosphere to trap heat.","Day lasts 176 Earth days.","Most cratered planet."]},{id:"venus",name:"Venus",type:"Planet",radius:6.5,distance:80,speed:.012,color:"#E3BB76",textureType:"venus",textureUrl:`${ti}/venus.jpg`,stats:{temp:"464°C",orbit:"225 Days",gravity:"8.87 m/s²",day:"243 Days"},comp:["CO2","Nitrogen"],desc:"Hottest planet due to greenhouse effect.",narration:"Venus is often called Earth's twin due to similar size, but it is a hellish world with a thick, toxic atmosphere of carbon dioxide. This creates a runaway greenhouse effect, making it the hottest planet. Unusually, Venus rotates backwards, so the sun rises in the west.",facts:["Hottest planet in the solar system.","Spins backwards (retrograde).","Day is longer than its year.","Pressure is 90x Earth's.","Named after goddess of love."]},{id:"earth",name:"Earth",type:"Planet",radius:7,distance:110,speed:.01,color:"#1C4E80",textureType:"earth",textureUrl:`${ti}/earth.jpg`,stats:{temp:"15°C",orbit:"365 Days",gravity:"9.8 m/s²",day:"24 Hours"},comp:["Nitrogen","Oxygen"],desc:"The only known world to harbor life.",narration:"Earth is our home and the only known celestial body confirmed to harbor life. Sitting in the 'Goldilocks zone,' it has liquid water covering 70% of the surface. Its magnetic field protects the atmosphere from solar radiation. Earth is dynamically active with tectonic plates.",facts:["Only place known to host life.","Densest planet in the system.","70% surface is water.","Protected by magnetic field.","Not a perfect sphere."],moons:[ei("Moon",.95,14,.03,"#E0E0E0","Earth's only natural satellite.",["Fifth largest moon in the solar system.","Causes tides on Earth.","Drifting away 3.8cm per year."])]},{id:"mars",name:"Mars",type:"Planet",radius:3.8,distance:150,speed:.008,color:"#D14A28",textureType:"mars",textureUrl:`${ti}/mars.jpg`,stats:{temp:"-65°C",orbit:"687 Days",gravity:"3.71 m/s²",day:"24.6 Hours"},comp:["CO2","Argon"],desc:"The Red Planet.",narration:"Mars, the Red Planet, gets its color from iron oxide rust. It is a dusty, cold desert world but holds geological wonders like Olympus Mons, the largest volcano in the solar system. Ancient river valleys suggest it was once warmer and wetter, potentially capable of supporting life.",facts:["Home to largest volcano, Olympus Mons.","Has largest dust storms.","Red color is rust.","Has two small moons.","Valles Marineris spans 4000km."],moons:[ei("Phobos",.9,6,.05,"#887766","The larger and inner moon of Mars.",["Orbits closer to its planet than any other moon.","Doomed to crash into Mars in 50M years."]),ei("Deimos",.6,10,.03,"#776655","The smaller outer moon of Mars.",["Smooth surface due to regolith.","Likely a captured asteroid."])]},{id:"jupiter",name:"Jupiter",type:"Gas Giant",radius:22,distance:220,speed:.004,color:"#C88B3A",textureType:"jupiter",textureUrl:`${ti}/jupiter.jpg`,stats:{temp:"-110°C",orbit:"12 Years",gravity:"24.79 m/s²",day:"10 Hours"},comp:["Hydrogen","Helium"],desc:"The largest planet.",narration:"Jupiter is a gas giant more massive than all other planets combined. Its iconic Great Red Spot is a storm larger than Earth raging for centuries. Jupiter acts as a cosmic vacuum cleaner, attracting debris with its gravity. It rotates incredibly fast, creating a day of only 10 hours.",facts:["Great Red Spot is a giant storm.","Shortest day of all planets.","Mass is 2.5x all others combined.","Has faint rings.","Strongest magnetic field."],rings:{inner:22.8,outer:23.5,color:10518624,opacity:.1},moons:[ei("Io",2.2,26,.04,"#F8F189","The most volcanically active body in the solar system.",["Over 400 active volcanoes.","Surface paints itself with sulfur."]),ei("Europa",1.9,30,.035,"#C6D2D8","An icy moon with a subsurface ocean.",["Smoothest surface in solar system.","Potential for life in its ocean."]),ei("Ganymede",3.2,36,.03,"#968E84","The largest moon in the solar system.",["Larger than Mercury.","Only moon with its own magnetic field."]),ei("Callisto",2.9,42,.02,"#6E665A","The most cratered object in the solar system.",["Oldest landscape in the system.","Geologically dead."])]},{id:"saturn",name:"Saturn",type:"Gas Giant",radius:18,distance:300,speed:.003,color:"#E4D5B6",textureType:"saturn",textureUrl:`${ti}/saturn.jpg`,rings:{inner:24,outer:42,color:13616035,opacity:.9},stats:{temp:"-140°C",orbit:"29 Years",gravity:"10.44 m/s²",day:"10.7 Hours"},comp:["Hydrogen","Helium"],desc:"Famous for its rings.",narration:"Saturn is the jewel of the solar system, known for its spectacular icy rings. It is the only planet less dense than water; it would float in a giant bathtub. A hexagonal storm persists at its north pole. Its moon Titan has a thick atmosphere and liquid methane lakes.",facts:["Rings are made of ice.","Least dense planet (floats).","Hexagonal storm at north pole."],moons:[ei("Titan",3,48,.02,"#E8D586","The only moon with a thick atmosphere.",["Has lakes of liquid methane.","Atmosphere is mostly Nitrogen.","Larger than Mercury."]),ei("Rhea",1.2,28,.03,"#B0B0B0","Saturn's second largest moon.",["Composed of 75% ice.","May have a tenuous ring system."]),ei("Enceladus",.8,22,.04,"#ffffff","An icy moon with water geysers.",["Tiger stripes feature geysers.","Ocean beneath the ice.","Most reflective body in solar system."])]},{id:"uranus",name:"Uranus",type:"Ice Giant",radius:12,distance:380,speed:.002,color:"#93B8BE",textureType:"uranus",tilt:Math.PI/2,textureUrl:`${ti}/uranus.jpg`,rings:{inner:14,outer:18,color:8956603,opacity:.2},stats:{temp:"-195°C",orbit:"84 Years",gravity:"8.69 m/s²",day:"17 Hours"},comp:["Hydrogen","Ices"],desc:"Rotates on its side.",narration:"Uranus is an ice giant that rotates on its side at a 98-degree angle, likely due to a massive collision. This causes extreme seasonal changes, with poles seeing 42 years of sunlight then darkness. Its atmosphere contains methane, giving it a pale blue-green color.",facts:["Rotates on its side.","Coldest planetary atmosphere.","Retrograde rotation."],moons:[ei("Titania",1.1,20,.03,"#D0C0B0","The largest moon of Uranus.",["Covered in canyons and scarps.","Discovered in 1787."]),ei("Oberon",1,24,.025,"#a09080","The second largest moon of Uranus.",["Old, heavily cratered surface.","Named after King of Fairies."])]},{id:"neptune",name:"Neptune",type:"Ice Giant",radius:11.5,distance:450,speed:.001,color:"#5B80ED",textureType:"neptune",textureUrl:`${ti}/neptune.jpg`,stats:{temp:"-200°C",orbit:"165 Years",gravity:"11.15 m/s²",day:"16 Hours"},comp:["Hydrogen","Ices"],desc:"The windiest planet.",narration:"Neptune is a dark, cold world whipped by supersonic winds reaching 2,000 km/h. It was the first planet predicted by mathematics before observation. Its moon Triton orbits backwards and spews nitrogen geysers, suggesting it was captured from the Kuiper Belt.",facts:["Supersonic winds (2000 km/h).","Predicted by math first.","Blue color from methane."],moons:[ei("Triton",1.8,18,.03,"#E0D0C0","The largest moon of Neptune.",["Orbits in retrograde (backwards).","Active nitrogen geysers.","Captured Kuiper Belt object."])]},{id:"pluto",name:"Pluto",type:"Dwarf Planet",radius:1.8,distance:585,speed:8e-4,color:"#D1C2A5",textureType:"rocky",textureUrl:`${ti}/pluto.jpg`,stats:{temp:"-229°C",orbit:"248 Years",gravity:"0.62 m/s²",day:"153 Hours"},comp:["Nitrogen","Methane"],desc:"The famous dwarf planet.",narration:"Pluto, once considered the ninth planet, is a dwarf planet in the Kuiper belt. It has a heart-shaped glacier named Tombaugh Regio made of nitrogen ice. Pluto orbits the sun in a highly elliptical and tilted path, sometimes coming closer to the Sun than Neptune.",facts:["Reclassified as dwarf planet in 2006.","Has a heart-shaped glacier.","Atmosphere freezes."],moons:[{name:"Charon",radius:.9,distance:5,speed:.01,color:"#A0A0A0",desc:"Pluto's massive moon.",facts:["Half the size of Pluto.","Tidally locked (face each other)."]}]},{id:"haumea",name:"Haumea",type:"Dwarf Planet",radius:2,distance:645,speed:6e-4,color:"#E0E0E0",textureType:"rocky",textureUrl:`${ti}/haumea.jpg`,scale:[1.9,.9,.5],stats:{temp:"-241°C",orbit:"284 Years",gravity:"0.4 m/s²",day:"4 Hours"},comp:["Rock","Ice"],desc:"The egg-shaped spinner.",narration:"Haumea is a unique dwarf planet that spins so fast—a day is only 4 hours long—that it has been pulled into the shape of a flattened egg or rugby ball. It is covered in crystalline water ice and has two moons and a ring system.",facts:["Spins once every 4 hours.","Shaped like an egg.","Covered in crystalline ice."]},{id:"sedna",name:"Sedna",type:"Dwarf Planet",radius:1.5,distance:750,speed:4e-4,color:"#CD5C5C",textureType:"rocky",textureUrl:`${ti}/sedna.jpg`,stats:{temp:"-240°C",orbit:"11,400 Years",gravity:"0.4 m/s²",day:"10 Hours"},comp:["Methane","Nitrogen"],desc:"The distant wanderer.",narration:"Sedna is a distant dwarf planet in the outer reaches of the Solar System. It has an exceptionally long and elongated orbit, taking over 11,000 years to circle the Sun. Its surface is one of the reddest in the solar system.",facts:["Takes 11,400 years to orbit.","Extremely distant.","Reddest object in system."]}];function D1(){const o=Mt.useRef(null),[e,n]=Mt.useState(!0),[r,a]=Mt.useState(null),[l,d]=Mt.useState(!1),[c,h]=Mt.useState(!1),[m,g]=Mt.useState(!1),[v,y]=Mt.useState(!0),[S,w]=Mt.useState(!1),[E,x]=Mt.useState(!1),[_,C]=Mt.useState(!1),[A,D]=Mt.useState(!1),[H,F]=Mt.useState(!1),[k,oe]=Mt.useState(!0),R=Mt.useRef(null),N=Mt.useRef(null),le=Mt.useRef(null),ce=Mt.useRef(null),xe=Mt.useRef(null),V=Mt.useRef(null),te=Mt.useRef([]),re=Mt.useRef([]),fe=Mt.useRef(null),Y=Mt.useRef(-1),Q=Mt.useRef(!1),q=Mt.useRef(null),U=Mt.useRef(new c1),j=Mt.useRef(new ot),$=Mt.useRef({x:0,y:0,time:0}),ae=Mt.useRef(0);Mt.useEffect(()=>{const z=document.createElement("link");return z.href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Mono:wght@400;700&display=swap",z.rel="stylesheet",document.head.appendChild(z),()=>document.head.removeChild(z)},[]);const me=()=>{const z="0x62737ef56dAadebA2f2c336Bc547A21B18b37426",et=document.createElement("textarea");et.value=z,document.body.appendChild(et),et.select();try{document.execCommand("copy"),F(!0),setTimeout(()=>F(!1),2e3)}catch(Pe){console.error("Copy failed",Pe)}document.body.removeChild(et)},Re=(z,et)=>{if(z<0||z>=ta.length)return;const Pe=te.current.find(T=>T.userData&&T.userData.id===z)||te.current[z];if(!Pe)return;let rt=Pe.mesh,Ve=Pe.data;ae.current=Date.now(),et!=null&&Pe.moons&&Pe.moons[et]?(rt=Pe.moons[et].mesh,Ve=Pe.moons[et].data,a({...Ve,isMoon:!0,parentName:Pe.data.name,parentId:Pe.data.id})):a(Ve);const ct=(Ve.radius||2)*4+10,L=new G;if(rt.getWorldPosition(L),V.current&&ce.current){const T=L.clone().add(new G(ct,ct*.5,ct));ce.current.position.copy(T),V.current.target.copy(L),V.current.update(),q.current={mesh:rt,lastPos:L.clone(),baseOffset:ct}}},be=z=>{if(Q.current){if(z>=ta.length){d(!1),Q.current=!1;return}Y.current=z,Re(z),fe.current&&clearTimeout(fe.current),fe.current=setTimeout(()=>{be(z+1)},3e4)}},Oe=()=>{a(null),d(!1),Q.current=!1,q.current=null,fe.current&&clearTimeout(fe.current),V.current&&ce.current&&(V.current.target.set(0,0,0),ce.current.position.set(0,150,600),V.current.update())},Be=()=>{d(!0),Q.current=!0,be(0)},We=()=>{oe(!1),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{oe(!0)},1e4)};Mt.useEffect(()=>{const z=["mousemove","mousedown","keydown","touchstart"];return z.forEach(et=>window.addEventListener(et,We)),We(),()=>z.forEach(et=>window.removeEventListener(et,We))},[]),Mt.useEffect(()=>{const z=()=>{if(N.current&&N.current.paused&&!S){const et=l?mg:pg;N.current.src!==et&&(N.current.src=et),N.current.play().catch(()=>{})}};return window.addEventListener("click",z),()=>window.removeEventListener("click",z)},[S,l]),Mt.useEffect(()=>{N.current||(N.current=new Audio,N.current.loop=!0,N.current.volume=.8);const z=N.current;if(S){z.pause();return}const et=Pe=>{z.src!==Pe?(z.src=Pe,z.play().catch(()=>{})):z.paused&&z.play().catch(()=>{})};et(l?mg:pg)},[l,S]);const yt=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then(()=>x(!1)).catch(()=>{}):document.documentElement.requestFullscreen().then(()=>x(!0)).catch(()=>{})};return Mt.useEffect(()=>{const z=()=>x(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",z),()=>document.removeEventListener("fullscreenchange",z)},[]),Mt.useEffect(()=>{const z=new KE;z.background=new At(0),z.fog=new Vf(0,8e-4),le.current=z;const et=new ni(45,window.innerWidth/window.innerHeight,.1,1e4);et.position.set(0,150,600),ce.current=et;const Pe=new qg({antialias:!0,alpha:!1,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});Pe.setSize(window.innerWidth,window.innerHeight),Pe.setPixelRatio(Math.min(window.devicePixelRatio,2)),Pe.toneMapping=xg,Pe.toneMappingExposure=2.2,o.current.appendChild(Pe.domElement),xe.current=Pe;const rt=new d1(et,Pe.domElement);rt.enableDamping=!0,rt.dampingFactor=.05,rt.minDistance=5,rt.maxDistance=4e3,V.current=rt,z.add(new s1(16777184,0,.15)),z.add(new u1(4210752,.8));const Ve=new l1(16777215,10,0,0);z.add(Ve);const bt=100,ct=new Ql(.05,0),L=new ia({color:8947848,transparent:!0,opacity:.6}),T=new $m(ct,L,bt),J=new sn;for(let P=0;P<bt;P++)J.position.set((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*200),J.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),J.updateMatrix(),T.setMatrixAt(P,J.matrix);z.add(T);const Ee=new Float32Array(bt*3);for(let P=0;P<bt*3;P++)Ee[P]=(Math.random()-.5)*.5;function ge(P,he,de=!1){const Ie=["earth","mercury","venus","mars","jupiter","saturn","uranus","neptune","rocky","atmosphere","galaxy"].includes(P),De=2048,Ye=Ie?1024:2048,Xe=document.createElement("canvas");Xe.width=De,Xe.height=Ye;const X=Xe.getContext("2d"),Le=De,Me=Ye,at=new At(he),Lt=($e,dt,pt="source-over",Ot=null)=>{const Nt=300*$e;X.globalCompositeOperation=pt;for(let Xt=0;Xt<Nt;Xt++){const Jt=Math.random()*Le,xn=Math.random()*Me,kn=(Math.random()*50+20)/$e;X.beginPath(),X.arc(Jt,xn,kn,0,Math.PI*2),X.fillStyle=Ot||`rgba(255,255,255,${dt})`,X.fill()}X.globalCompositeOperation="source-over"};if(P==="earth")return X.fillStyle="#0a1a33",X.fillRect(0,0,Le,Me),new tg(Xe);if(P==="star"){const $e=X.createRadialGradient(Le/2,Me/2,0,Le/2,Me/2,Le/2);$e.addColorStop(0,"#FFFFFF"),$e.addColorStop(.3,"#FFFFAA"),$e.addColorStop(1,he),X.fillStyle=$e,X.fillRect(0,0,Le,Me),Lt(.5,.2,"overlay","#ffaa00")}else if(P==="glow"){const $e=X.createRadialGradient(Le/2,Me/2,0,Le/2,Me/2,Le/2);$e.addColorStop(0,"#FFFFFF"),$e.addColorStop(.2,"#FFFFAA"),$e.addColorStop(.5,he),$e.addColorStop(1,"rgba(0,0,0,0)"),X.fillStyle=$e,X.fillRect(0,0,Le,Me)}else if(P==="galaxy"){X.fillStyle="#050510",X.fillRect(0,0,Le,Me);for(let $e=0;$e<3;$e++){X.filter=`blur(${30+$e*10}px)`,X.globalCompositeOperation="screen";const dt=Math.random()*60+200;Lt(.5,.1,"screen",`hsl(${dt}, 60%, 40%)`)}X.filter="none"}else if(P==="mercury"||P==="rocky"){X.fillStyle=he,X.fillRect(0,0,Le,Me),X.globalCompositeOperation="multiply";for(let dt=0;dt<8e3;dt++){const pt=Math.random()*80+100;X.fillStyle=`rgb(${pt},${pt},${pt})`,X.globalAlpha=.3,X.fillRect(Math.random()*Le,Math.random()*Me,2,2)}X.globalAlpha=1,X.globalCompositeOperation="source-over";const $e=500;for(let dt=0;dt<$e;dt++){const pt=Math.random()*Le,Ot=Math.random()*Me,Nt=Math.random()*10+2;X.fillStyle="rgba(0,0,0,0.3)",X.beginPath(),X.arc(pt+1,Ot+1,Nt,0,Math.PI*2),X.fill(),X.fillStyle="rgba(255,255,255,0.1)",X.beginPath(),X.arc(pt-1,Ot-1,Nt,0,Math.PI*2),X.fill(),X.fillStyle="rgba(120,120,120,0.8)",X.beginPath(),X.arc(pt,Ot,Nt,0,Math.PI*2),X.fill()}}else if(P==="venus"){X.fillStyle=he,X.fillRect(0,0,Le,Me),X.filter="blur(40px)",X.globalCompositeOperation="overlay";for(let $e=0;$e<60;$e++){const dt=Math.random()*Le,pt=Math.random()*Me,Ot=Math.random()*400+100,Nt=Math.random()*50+20;X.fillStyle=Math.random()>.5?"#ffffff":"#cc9966",X.globalAlpha=.3,X.beginPath(),X.ellipse(dt,pt,Ot,Nt,0,0,Math.PI*2),X.fill()}X.globalAlpha=1,X.filter="none"}else if(P==="mars"){X.fillStyle=he,X.fillRect(0,0,Le,Me),X.filter="blur(4px)",X.fillStyle="#5e2a18",X.globalAlpha=.6;for(let pt=0;pt<15;pt++){const Ot=Math.random()*Le,Nt=Math.random()*Me*.7+Me*.15,Xt=Math.random()*150+50;X.beginPath();for(let Jt=0;Jt<10;Jt++){const xn=Jt/10*Math.PI*2,kn=Xt+(Math.random()-.5)*Xt*.5,Pr=Ot+Math.cos(xn)*kn,b=Nt+Math.sin(xn)*kn;Jt===0?X.moveTo(Pr,b):X.lineTo(Pr,b)}X.fill()}X.globalAlpha=1,X.filter="none";const $e=X.createLinearGradient(0,0,0,Me*.08);$e.addColorStop(0,"#ffffff"),$e.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=$e,X.fillRect(0,0,Le,Me*.08);const dt=X.createLinearGradient(0,Me,0,Me*.92);dt.addColorStop(0,"#ffffff"),dt.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=dt,X.fillRect(0,Me*.92,Le,Me*.08)}else if(P==="jupiter"){const $e=X.createLinearGradient(0,0,0,Me),dt=16;for(let pt=0;pt<=dt;pt++){const Ot=pt/dt,Xt=pt%2===0?"#C88B3A":"#E3DCCB";$e.addColorStop(Ot,Xt)}X.fillStyle=$e,X.fillRect(0,0,Le,Me),X.globalCompositeOperation="overlay",X.filter="blur(10px)";for(let pt=0;pt<50;pt++){const Ot=Math.random()*Le,Nt=Me/dt,Xt=Math.floor(Math.random()*dt)*Nt+(Math.random()-.5)*20,Jt=Math.random()*200+50,xn=Math.random()*20+5;X.fillStyle=Math.random()>.5?"#ffffff":"#8B4513",X.globalAlpha=.2,X.beginPath(),X.ellipse(Ot,Xt,Jt,xn,0,0,Math.PI*2),X.fill()}X.filter="blur(5px)",X.fillStyle="#A65E44",X.globalAlpha=.9,X.beginPath(),X.ellipse(Le*.7,Me*.65,90,50,0,0,Math.PI*2),X.fill(),X.filter="none",X.globalAlpha=1}else if(P==="saturn"){const $e=X.createLinearGradient(0,0,0,Me),dt=24;for(let pt=0;pt<=dt;pt++){const Ot=pt/dt,Nt=Math.sin(Ot*Math.PI*12)*.05,Xt=40,Jt=.7+Nt;$e.addColorStop(Ot,`hsl(${Xt}, 60%, ${Jt*100}%)`)}X.fillStyle=$e,X.fillRect(0,0,Le,Me)}else if(P==="uranus"){const $e=X.createRadialGradient(Le/2,Me/2,0,Le/2,Me/2,Le);$e.addColorStop(0,"#D1F4F9"),$e.addColorStop(1,"#93B8BE"),X.fillStyle=$e,X.fillRect(0,0,Le,Me)}else if(P==="neptune"){const $e=X.createLinearGradient(0,0,0,Me);$e.addColorStop(0,"#3655A0"),$e.addColorStop(.5,"#5B80ED"),$e.addColorStop(1,"#3655A0"),X.fillStyle=$e,X.fillRect(0,0,Le,Me),X.filter="blur(15px)",X.fillStyle="#ffffff",X.globalAlpha=.3;for(let dt=0;dt<8;dt++){const pt=Math.random()*Le,Ot=Math.random()*Me,Nt=Math.random()*150+50,Xt=Math.random()*20+5;X.beginPath(),X.ellipse(pt,Ot,Nt,Xt,0,0,Math.PI*2),X.fill()}X.filter="blur(8px)",X.fillStyle="#1a2e5a",X.globalAlpha=.6,X.beginPath(),X.ellipse(Le*.3,Me*.4,60,30,0,0,Math.PI*2),X.fill(),X.filter="none",X.globalAlpha=1}else if(P==="ring"){X.fillStyle="#00000000",X.clearRect(0,0,Le,Me);const $e=Le/2,dt=Me/2,pt=Le*.5,Ot=Le*.2,Nt=X.createRadialGradient($e,dt,Ot,$e,dt,pt),Xt=Math.floor(at.r*255),Jt=Math.floor(at.g*255),xn=Math.floor(at.b*255);Nt.addColorStop(0,`rgba(${Xt}, ${Jt}, ${xn}, 0)`),Nt.addColorStop(.2,`rgba(${Xt}, ${Jt}, ${xn}, 0.1)`),Nt.addColorStop(.5,`rgba(${Xt}, ${Jt}, ${xn}, 0.8)`),Nt.addColorStop(.8,`rgba(${Xt}, ${Jt}, ${xn}, 0.1)`),Nt.addColorStop(1,`rgba(${Xt}, ${Jt}, ${xn}, 0)`),X.fillStyle=Nt,X.beginPath(),X.arc($e,dt,pt,0,Math.PI*2),X.fill()}return new tg(Xe)}const we=new Df({map:ge("glow","#FFD700"),color:16766720,transparent:!0,blending:Xl,opacity:.5,depthWrite:!1}),Ze=new Xm(we);Ze.scale.set(150,150,1),z.add(Ze);const Ue=new Df({map:ge("glow","#ffaa00"),color:16755200,transparent:!0,blending:Xl,opacity:.2,depthWrite:!1}),ze=new Xm(Ue);ze.scale.set(300,300,1),z.add(ze);const it=(P,he,de,Ie)=>{const De=new Fn,Ye=new Float32Array(P*3),Xe=new Float32Array(P*3),X=new At;for(let Me=0;Me<P*3;Me+=3){const at=Ie+Math.random()*Ie,Lt=2*Math.PI*Math.random(),$e=Math.acos(2*Math.random()-1);Ye[Me]=at*Math.sin($e)*Math.cos(Lt),Ye[Me+1]=at*Math.sin($e)*Math.sin(Lt),Ye[Me+2]=at*Math.cos($e);const dt=Math.random();dt>.9?X.setHex(16755370):dt>.7?X.setHex(16768426):dt>.5?X.setHex(11193599):X.setHex(16777215),Xe[Me]=X.r,Xe[Me+1]=X.g,Xe[Me+2]=X.b}De.setAttribute("position",new Yn(Ye,3)),De.setAttribute("color",new Yn(Xe,3));const Le=new Zg({vertexColors:!0,size:he,transparent:!0,opacity:de,sizeAttenuation:!0});z.add(new e1(De,Le))};it(6e3,1.5,.9,1e3),it(9e3,.8,.5,2e3);const gt=new to(4e3,32,32),_e=new ia({map:ge("galaxy","#000000"),side:In,transparent:!0,opacity:.3});z.add(new Un(gt,_e));const Et=(P,he,de)=>{const Ie=new Ql(.1,0),De=new Jo({color:16777215,roughness:.8,metalness:.1,flatShading:!0}),Ye=new $m(Ie,De,P);Ye.instanceMatrix.setUsage(Bv);const Xe=new sn,X=new At;for(let Le=0;Le<P;Le++){const Me=Math.random()*Math.PI*2,at=Math.sqrt(Math.random()*(de**2-he**2)+he**2),Lt=Math.cos(Me)*at,$e=(Math.random()-.5)*15*(1-(at-he)/(de-he)*.5),dt=Math.sin(Me)*at;Xe.position.set(Lt,$e,dt),Xe.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const pt=Math.random()*1.2+.5;Xe.scale.set(pt,pt,pt),Xe.updateMatrix(),Ye.setMatrixAt(Le,Xe.matrix),X.setHex(11776947),X.offsetHSL(0,0,(Math.random()-.5)*.1),Ye.setColorAt(Le,X)}return Ye.instanceMatrix.needsUpdate=!0,Ye.instanceColor.needsUpdate=!0,Ye},vt=Et(4e3,500,850);z.add(vt);const ft=Et(3e3,170,210);z.add(ft);const tt=new r1;tt.setCrossOrigin("anonymous"),ta.forEach((P,he)=>{const de=new eo,Ie=ge(P.textureType,P.color,!1);let De;if(P.type==="Star")De=new ia({map:Ie,color:16777215});else{const X={map:Ie,roughness:.8,metalness:.1,emissive:1118481,emissiveIntensity:.1};P.id==="earth"?(X.roughness=.6,X.metalness=.1,X.envMapIntensity=1):P.type==="Gas Giant"||P.type==="Ice Giant"?(X.roughness=.5,X.emissive=2236962,X.emissiveIntensity=.15):P.id==="venus"&&(X.emissive=2232576,X.emissiveIntensity=.2),De=new Jo(X)}P.textureUrl&&tt.load(P.textureUrl,X=>{X.colorSpace=ln,De.map=X,De.needsUpdate=!0},void 0,X=>{console.warn(`Texture load failed for ${P.name}. Keeping procedural.`)});const Ye=new Un(new to(P.radius,128,128),De);if(Ye.userData={id:he,type:"planet"},P.tilt&&(Ye.rotation.z=P.tilt),P.scale&&Ye.scale.set(P.scale[0],P.scale[1],P.scale[2]),de.add(Ye),re.current.push(Ye),P.type!=="Star"){const X=new to(P.radius*.4,32,32);let Le=P.type==="Gas Giant"||P.type==="Ice Giant"?8947848:16724736;const Me=new Jo({color:Le,emissive:Le,emissiveIntensity:.8}),at=new Un(X,Me);at.visible=!1,at.userData={isCore:!0},P.scale&&at.scale.set(P.scale[0],P.scale[1],P.scale[2]),de.add(at)}const Xe=[];if(P.moons&&P.moons.forEach((X,Le)=>{const Me=new to(X.radius,32,32),at=ge("rocky",X.color),Lt=new Jo({map:at,roughness:.9});X.textureUrl&&tt.load(X.textureUrl,pt=>{pt.colorSpace=ln,Lt.map=pt,Lt.needsUpdate=!0},void 0,()=>console.warn(`Moon texture failed: ${X.name}`));const $e=new Un(Me,Lt);$e.userData={parentId:he,moonIndex:Le,type:"moon"},re.current.push($e);const dt=new eo;dt.add($e),$e.position.x=X.distance,de.add(dt),Xe.push({orbit:dt,mesh:$e,speed:X.speed,data:X})}),P.rings){const X=new Xf(P.rings.inner,P.rings.outer,128),Le=ge("ring",P.rings.color),Me=new Jo({map:Le,color:16777215,side:Li,transparent:!0,opacity:P.rings.opacity||.8,roughness:1,metalness:0}),at=new Un(X,Me);P.id==="uranus"?(at.rotation.y=Math.PI/2,at.rotation.x=0):at.rotation.x=Math.PI/1.8,de.add(at)}if(de.position.x=P.distance,z.add(de),P.distance>0){const X=[];for(let at=0;at<=256;at++){const Lt=at/256*Math.PI*2;X.push(new G(Math.cos(Lt)*P.distance,0,Math.sin(Lt)*P.distance))}const Le=new Fn().setFromPoints(X),Me=new JE(Le,new Kg({color:16777215,opacity:.1,transparent:!0}));z.add(Me)}te.current.push({type:"planet",group:de,mesh:Ye,data:P,moons:Xe,angle:Math.random()*Math.PI*2})}),n(!1);let Fe;const I=()=>{Fe=requestAnimationFrame(I),V.current&&V.current.update();const P=Pe.domElement.dataset.paused==="true",he=Pe.domElement.dataset.structure==="true";if(P||(vt.rotation.y+=15e-5,ft.rotation.y+=5e-4),te.current.forEach(de=>{if(P||(de.data.tilt?de.mesh.rotation.x+=.003:de.mesh.rotation.y+=.001,de.data.distance>0&&(de.angle+=de.data.speed*.3*.25,de.group.position.x=Math.cos(de.angle)*de.data.distance,de.group.position.z=Math.sin(de.angle)*de.data.distance),de.moons&&de.moons.forEach(Ie=>Ie.orbit.rotation.y+=Ie.speed)),de.data.type!=="Star"){de.mesh.material&&(de.mesh.material.opacity=he?.15:1,de.mesh.material.transparent=he,de.mesh.material.wireframe=he);const Ie=de.group.children.find(De=>De.userData&&De.userData.isCore);Ie&&(Ie.visible=he,he&&(Ie.rotation.y+=.01))}}),q.current&&!P){const de=q.current,Ie=new G;de.mesh.getWorldPosition(Ie);const De=Date.now()-ae.current,Ye=de.baseOffset||30,X=De*2e-4,Le=Math.sin(De*5e-4)*(Ye*.2),Me=Ye+Le,at=Math.cos(X)*Me,Lt=Math.sin(X)*Me,$e=new G(Ie.x+at,Ie.y+Ye*.4,Ie.z+Lt);if(V.current.target.copy(Ie),Q.current)et.position.lerp($e,.05);else{const dt=new G().subVectors(Ie,de.lastPos);et.position.add(dt)}de.lastPos.copy(Ie),Q.current}Pe.render(z,et)};I();const Ae=()=>{!ce.current||!xe.current||(ce.current.aspect=window.innerWidth/window.innerHeight,ce.current.updateProjectionMatrix(),xe.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",Ae);const Qe=P=>{$.current={x:P.clientX,y:P.clientY,time:Date.now()}},ke=P=>{const he=Math.abs(P.clientX-$.current.x),de=Math.abs(P.clientY-$.current.y),Ie=Date.now()-$.current.time;if(he<5&&de<5&&Ie<300){j.current.x=P.clientX/window.innerWidth*2-1,j.current.y=-(P.clientY/window.innerHeight)*2+1,U.current.setFromCamera(j.current,et);const De=U.current.intersectObjects(re.current);if(De.length>0){const Xe=De[0].object.userData;if(Xe.id!==void 0||Xe.parentId!==void 0){const X=Xe.parentId!==void 0?Xe.parentId:Xe.id,Le=Xe.moonIndex;Re(X,Le)}}}},ve=Pe.domElement;return ve.addEventListener("pointerdown",Qe),ve.addEventListener("pointerup",ke),()=>{cancelAnimationFrame(Fe),window.removeEventListener("resize",Ae),ve.removeEventListener("pointerdown",Qe),ve.removeEventListener("pointerup",ke),o.current&&Pe.domElement&&o.current.removeChild(Pe.domElement)}},[]),Mt.useEffect(()=>{xe.current&&(xe.current.domElement.dataset.paused=c,xe.current.domElement.dataset.structure=m)},[c,m]),Mt.useEffect(()=>{l?Y.current===-1&&be(0):(fe.current&&clearTimeout(fe.current),Y.current=-1)},[l]),pe.jsxs("div",{className:"w-full h-screen bg-black relative text-slate-100 font-sans overflow-hidden",children:[pe.jsx("div",{ref:o,className:"absolute inset-0 z-0 bg-black",style:{pointerEvents:"auto"}}),pe.jsxs("div",{className:"absolute top-0 left-0 right-0 p-6 flex justify-between items-start pointer-events-none z-10",children:[pe.jsxs("div",{className:"flex items-center gap-4 cursor-pointer pointer-events-auto",onClick:Oe,children:[pe.jsx("div",{className:"w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg",children:pe.jsx("span",{className:"text-2xl font-['Inter'] font-light",children:"🪐"})}),pe.jsxs("div",{children:[pe.jsx("h1",{className:"font-['Inter'] font-light text-2xl leading-none",children:"COSMOS"}),pe.jsx("p",{className:"text-[10px] uppercase text-indigo-400 font-bold font-['Space_Mono']",children:"Explorer"})]})]}),pe.jsxs("div",{className:"flex gap-2 pointer-events-auto bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10",children:[pe.jsx("button",{onClick:()=>h(!c),className:"p-2 hover:bg-white/10 rounded-lg",children:c?pe.jsx(A1,{size:20}):pe.jsx(T1,{size:20})}),pe.jsx("button",{onClick:()=>g(!m),className:"p-2 hover:bg-white/10 rounded-lg",children:pe.jsx(x1,{size:20})}),pe.jsx("button",{onClick:yt,className:"p-2 hover:bg-white/10 rounded-lg",children:E?pe.jsx(E1,{size:20}):pe.jsx(S1,{size:20})}),pe.jsx("button",{onClick:()=>w(!S),className:`p-2 hover:bg-white/10 rounded-lg ${S?"text-red-400":""}`,children:S?pe.jsx(b1,{size:20}):pe.jsx(C1,{size:20})}),pe.jsx("button",{onClick:()=>C(!0),className:"p-2 hover:bg-white/10 rounded-lg text-pink-400 hover:text-pink-300",children:pe.jsx(dg,{size:20})}),pe.jsx("button",{onClick:()=>D(!0),className:"p-2 hover:bg-white/10 rounded-lg text-blue-400 hover:text-blue-300",children:pe.jsx(hg,{size:20})})]})]}),pe.jsx("div",{className:`absolute right-6 top-24 bottom-24 w-full md:w-[400px] z-30 transition-transform duration-300 ${r?"translate-x-0":"translate-x-[120%]"}`,children:pe.jsxs("div",{className:"w-full h-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl relative overflow-hidden flex flex-col shadow-2xl",children:[pe.jsx("div",{className:"flex-1 overflow-y-auto p-8 no-scrollbar",children:r&&pe.jsxs(pe.Fragment,{children:[pe.jsxs("div",{className:"flex justify-between items-center mb-8",children:[pe.jsxs("div",{children:[pe.jsx("h2",{className:"text-4xl font-['Inter'] font-light",children:r.name}),pe.jsx("span",{className:"text-xs text-indigo-400 uppercase tracking-widest font-['Space_Mono']",children:r.type||"Planet"}),r.isMoon&&pe.jsxs("div",{className:"text-[10px] text-zinc-500 font-['Space_Mono']",children:["Moon of ",r.parentName]})]}),pe.jsx("button",{onClick:()=>a(null),className:"p-2 hover:bg-white/20 rounded-full",children:pe.jsx(Gl,{size:24})})]}),pe.jsxs("div",{className:"space-y-8 font-['Space_Mono'] pb-8",children:[pe.jsx("div",{className:"p-6 bg-zinc-900/90 rounded-xl border border-white/10 text-sm leading-relaxed text-zinc-300 shadow-xl",children:r.narration||r.desc}),r.stats&&pe.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(r.stats).map(([z,et])=>pe.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors",children:[pe.jsx("div",{className:"text-[10px] text-indigo-300 uppercase font-bold tracking-wider mb-1",children:z}),pe.jsx("div",{className:"font-mono text-xs text-white",children:et})]},z))}),r.facts&&pe.jsxs("div",{children:[pe.jsxs("h3",{className:"text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2",children:[pe.jsx(M1,{size:14})," Facts"]}),pe.jsx("ul",{className:"space-y-3 text-sm",children:r.facts.map((z,et)=>pe.jsxs("li",{className:"flex gap-3 text-zinc-400",children:[pe.jsx("span",{className:"text-indigo-500 mt-1",children:pe.jsx(m1,{size:14})}),z]},et))})]}),r.moons&&pe.jsxs("div",{children:[pe.jsxs("h3",{className:"text-xs font-bold text-zinc-500 uppercase mb-2 flex items-center gap-2",children:[pe.jsx(w1,{size:12})," Moons"]}),pe.jsx("div",{className:"flex gap-2 flex-wrap",children:r.moons.map((z,et)=>pe.jsx("button",{onClick:()=>Re(ta.findIndex(Pe=>Pe.id===r.id),et),className:"px-3 py-1 bg-white/10 hover:bg-indigo-600 rounded-full text-xs transition-colors",children:z.name},et))})]})]})]})}),pe.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none flex items-end justify-center pb-4",children:pe.jsx(fg,{className:"animate-bounce text-white/40",size:24})})]})}),_&&pe.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:pe.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-sm relative shadow-2xl",children:[pe.jsx("button",{onClick:()=>C(!1),className:"absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full",children:pe.jsx(Gl,{size:20})}),pe.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[pe.jsx(dg,{className:"text-pink-500",size:20})," Support"]}),pe.jsxs("div",{className:"space-y-4",children:[pe.jsxs("a",{href:"https://www.paypal.com/paypalme/rendrasc",target:"_blank",rel:"noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-[#0070BA] hover:bg-[#005ea6] rounded-xl font-bold transition-colors",children:[pe.jsx(P1,{size:18,className:"mr-1"})," PayPal"]}),pe.jsxs("div",{className:"bg-black/30 p-4 rounded-xl border border-white/5",children:[pe.jsxs("div",{className:"text-[10px] uppercase text-zinc-500 font-bold mb-2 flex items-center gap-1",children:[pe.jsx(L1,{size:12})," USDC (ERC-20)"]}),pe.jsxs("div",{className:"flex items-center gap-2",children:[pe.jsx("code",{className:"text-xs text-zinc-300 truncate flex-1",children:"0x62737ef56dAadebA2f2c336Bc547A21B18b37426"}),pe.jsx("button",{onClick:me,className:`p-2 rounded-lg transition-colors ${H?"bg-green-500/20 text-green-400":"bg-white/10 hover:bg-white/20"}`,children:H?pe.jsx(g1,{size:14}):pe.jsx(v1,{size:14})})]})]})]})]})}),A&&pe.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",children:pe.jsxs("div",{className:"bg-zinc-900 border border-white/10 rounded-2xl p-6 w-full max-w-sm relative shadow-2xl",children:[pe.jsx("button",{onClick:()=>D(!1),className:"absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full",children:pe.jsx(Gl,{size:20})}),pe.jsxs("h3",{className:"text-xl font-bold mb-4 flex items-center gap-2",children:[pe.jsx(hg,{className:"text-blue-500",size:20})," Credits"]}),pe.jsxs("div",{className:"text-sm text-zinc-400 leading-relaxed font-['Space_Mono']",children:[pe.jsxs("p",{className:"mb-4",children:["Developed with passion by the team at ",pe.jsx("span",{className:"text-white font-bold",children:"Kreuk Studio"}),"."]}),pe.jsxs("ul",{className:"space-y-2",children:[pe.jsxs("li",{className:"flex items-center gap-2",children:[pe.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-indigo-500"})," Rendra Diardjo"]}),pe.jsxs("li",{className:"flex items-center gap-2",children:[pe.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-purple-500"})," Feby Jose"]}),pe.jsxs("li",{className:"flex items-center gap-2",children:[pe.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-pink-500"})," Kaii Arunakara"]}),pe.jsxs("li",{className:"flex items-center gap-2",children:[pe.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500"})," Akio Dinibiru"]})]})]})]})}),pe.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end items-center pointer-events-none pb-4",children:[pe.jsx("button",{onClick:()=>y(!v),className:"pointer-events-auto mb-2 bg-white/10 backdrop-blur-md p-1 rounded-full text-indigo-200 hover:text-white hover:bg-white/20 transition-all",children:v?pe.jsx(fg,{size:16}):pe.jsx(_1,{size:16})}),pe.jsx("div",{className:`pointer-events-auto max-w-full overflow-x-auto no-scrollbar fade-mask transition-all duration-300 ease-in-out ${v?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:pe.jsxs("div",{className:"flex gap-2 items-center px-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 py-2 mx-4",children:[pe.jsxs("button",{onClick:l?Oe:Be,className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg transition-colors whitespace-nowrap font-semibold border text-xs font-['Space_Mono'] ${l?"bg-red-500/80 border-red-400/30":"bg-indigo-600/90 border-indigo-400/30"}`,children:[l?pe.jsx(Gl,{size:12}):pe.jsx(R1,{size:12})," ",l?"Stop":"Tour"]}),pe.jsx("div",{className:"h-6 w-px bg-white/10 mx-1"}),ta.map((z,et)=>pe.jsxs("button",{onClick:()=>Re(et),className:`flex flex-col items-center gap-1 min-w-[40px] group relative p-1 rounded-lg transition-all ${(r==null?void 0:r.id)===z.id?"bg-white/10 ring-1 ring-indigo-500":"hover:bg-white/5"}`,children:[pe.jsx("div",{className:"w-5 h-5 rounded-full shadow-lg transition-transform group-hover:scale-110 relative bg-cover bg-center",style:{backgroundImage:`url(${z.textureUrl})`,backgroundColor:z.color},children:(r==null?void 0:r.id)===z.id&&pe.jsx("div",{className:"absolute inset-0 rounded-full ring-1 ring-white animate-pulse"})}),pe.jsx("span",{className:`text-[7px] font-bold uppercase tracking-wider transition-colors font-['Space_Mono'] ${(r==null?void 0:r.id)===z.id?"text-white":"text-zinc-500 group-hover:text-zinc-300"}`,children:z.name})]},et))]})})]}),e&&pe.jsxs("div",{className:"absolute inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none",children:[pe.jsx(y1,{className:"w-12 h-12 text-indigo-500 animate-spin mb-4"}),pe.jsx("span",{className:"text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold font-['Space_Mono']",children:"Initializing Cosmos..."})]})]})}H_.createRoot(document.getElementById("root")).render(pe.jsx(U_.StrictMode,{children:pe.jsx(D1,{})}));
