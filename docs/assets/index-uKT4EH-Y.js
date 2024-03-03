var W3=Object.defineProperty;var Z3=(e,t,r)=>t in e?W3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ut=(e,t,r)=>(Z3(e,typeof t!="symbol"?t+"":t,r),r);function cf(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uf={exports:{}},ql={},mf={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),G3=Symbol.for("react.portal"),K3=Symbol.for("react.fragment"),Q3=Symbol.for("react.strict_mode"),X3=Symbol.for("react.profiler"),J3=Symbol.for("react.provider"),ex=Symbol.for("react.context"),tx=Symbol.for("react.forward_ref"),nx=Symbol.for("react.suspense"),rx=Symbol.for("react.memo"),ox=Symbol.for("react.lazy"),Zu=Symbol.iterator;function sx(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ff=Object.assign,hf={};function Wo(e,t,r){this.props=e,this.context=t,this.refs=hf,this.updater=r||pf}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xf(){}xf.prototype=Wo.prototype;function cc(e,t,r){this.props=e,this.context=t,this.refs=hf,this.updater=r||pf}var uc=cc.prototype=new xf;uc.constructor=cc;ff(uc,Wo.prototype);uc.isPureReactComponent=!0;var Gu=Array.isArray,gf=Object.prototype.hasOwnProperty,mc={current:null},bf={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,r){var o,s={},i=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)gf.call(t,o)&&!bf.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:li,type:e,key:i,ref:l,props:s,_owner:mc.current}}function ix(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function lx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ku=/\/+/g;function va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lx(""+e.key):t.toString(36)}function Ji(e,t,r,o,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case li:case G3:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+va(l,0):o,Gu(s)?(r="",e!=null&&(r=e.replace(Ku,"$&/")+"/"),Ji(s,t,r,"",function(c){return c})):s!=null&&(pc(s)&&(s=ix(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Ku,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=o===""?".":o+":",Gu(e))for(var a=0;a<e.length;a++){i=e[a];var d=o+va(i,a);l+=Ji(i,t,r,d,s)}else if(d=sx(e),typeof d=="function")for(e=d.call(e),a=0;!(i=e.next()).done;)i=i.value,d=o+va(i,a++),l+=Ji(i,t,r,d,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ni(e,t,r){if(e==null)return e;var o=[],s=0;return Ji(e,o,"","",function(i){return t.call(r,i,s++)}),o}function ax(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},el={transition:null},dx={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:el,ReactCurrentOwner:mc};le.Children={map:Ni,forEach:function(e,t,r){Ni(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ni(e,function(){t++}),t},toArray:function(e){return Ni(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Wo;le.Fragment=K3;le.Profiler=X3;le.PureComponent=cc;le.StrictMode=Q3;le.Suspense=nx;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;le.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ff({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=mc.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in t)gf.call(t,d)&&!bf.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&a!==void 0?a[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:li,type:e.type,key:s,ref:i,props:o,_owner:l}};le.createContext=function(e){return e={$$typeof:ex,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:J3,_context:e},e.Consumer=e};le.createElement=vf;le.createFactory=function(e){var t=vf.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:tx,render:e}};le.isValidElement=pc;le.lazy=function(e){return{$$typeof:ox,_payload:{_status:-1,_result:e},_init:ax}};le.memo=function(e,t){return{$$typeof:rx,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=el.transition;el.transition={};try{e()}finally{el.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return mt.current.useCallback(e,t)};le.useContext=function(e){return mt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};le.useEffect=function(e,t){return mt.current.useEffect(e,t)};le.useId=function(){return mt.current.useId()};le.useImperativeHandle=function(e,t,r){return mt.current.useImperativeHandle(e,t,r)};le.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return mt.current.useMemo(e,t)};le.useReducer=function(e,t,r){return mt.current.useReducer(e,t,r)};le.useRef=function(e){return mt.current.useRef(e)};le.useState=function(e){return mt.current.useState(e)};le.useSyncExternalStore=function(e,t,r){return mt.current.useSyncExternalStore(e,t,r)};le.useTransition=function(){return mt.current.useTransition()};le.version="18.2.0";mf.exports=le;var T=mf.exports;const wt=Vr(T),cx=cf({__proto__:null,default:wt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux=T,mx=Symbol.for("react.element"),px=Symbol.for("react.fragment"),fx=Object.prototype.hasOwnProperty,hx=ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xx={key:!0,ref:!0,__self:!0,__source:!0};function jf(e,t,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)fx.call(t,o)&&!xx.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:mx,type:e,key:i,ref:l,props:s,_owner:hx.current}}ql.Fragment=px;ql.jsx=jf;ql.jsxs=jf;uf.exports=ql;var n=uf.exports,Ja={},yf={exports:{}},Tt={},Ff={exports:{}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,z){var B=P.length;P.push(z);e:for(;0<B;){var U=B-1>>>1,G=P[U];if(0<s(G,z))P[U]=z,P[B]=G,B=U;else break e}}function r(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var z=P[0],B=P.pop();if(B!==z){P[0]=B;e:for(var U=0,G=P.length,Qe=G>>>1;U<Qe;){var ce=2*(U+1)-1,Ee=P[ce],he=ce+1,De=P[he];if(0>s(Ee,B))he<G&&0>s(De,Ee)?(P[U]=De,P[he]=B,U=he):(P[U]=Ee,P[ce]=B,U=ce);else if(he<G&&0>s(De,B))P[U]=De,P[he]=B,U=he;else break e}}return z}function s(P,z){var B=P.sortIndex-z.sortIndex;return B!==0?B:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],c=[],u=1,f=null,g=3,C=!1,_=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var z=r(c);z!==null;){if(z.callback===null)o(c);else if(z.startTime<=P)o(c),z.sortIndex=z.expirationTime,t(d,z);else break;z=r(c)}}function v(P){if(E=!1,p(P),!_)if(r(d)!==null)_=!0,ve(j);else{var z=r(c);z!==null&&ie(v,z.startTime-P)}}function j(P,z){_=!1,E&&(E=!1,b(R),R=-1),C=!0;var B=g;try{for(p(z),f=r(d);f!==null&&(!(f.expirationTime>z)||P&&!I());){var U=f.callback;if(typeof U=="function"){f.callback=null,g=f.priorityLevel;var G=U(f.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?f.callback=G:f===r(d)&&o(d),p(z)}else o(d);f=r(d)}if(f!==null)var Qe=!0;else{var ce=r(c);ce!==null&&ie(v,ce.startTime-z),Qe=!1}return Qe}finally{f=null,g=B,C=!1}}var h=!1,y=null,R=-1,k=5,M=-1;function I(){return!(e.unstable_now()-M<k)}function J(){if(y!==null){var P=e.unstable_now();M=P;var z=!0;try{z=y(!0,P)}finally{z?ee():(h=!1,y=null)}}else h=!1}var ee;if(typeof m=="function")ee=function(){m(J)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,we=me.port2;me.port1.onmessage=J,ee=function(){we.postMessage(null)}}else ee=function(){N(J,0)};function ve(P){y=P,h||(h=!0,ee())}function ie(P,z){R=N(function(){P(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){_||C||(_=!0,ve(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var B=g;g=z;try{return P()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=g;g=P;try{return z()}finally{g=B}},e.unstable_scheduleCallback=function(P,z,B){var U=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?U+B:U):B=U,P){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=B+G,P={id:u++,callback:z,priorityLevel:P,startTime:B,expirationTime:G,sortIndex:-1},B>U?(P.sortIndex=B,t(c,P),r(d)===null&&P===r(c)&&(E?(b(R),R=-1):E=!0,ie(v,B-U))):(P.sortIndex=G,t(d,P),_||C||(_=!0,ve(j))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var z=g;return function(){var B=g;g=z;try{return P.apply(this,arguments)}finally{g=B}}}})(wf);Ff.exports=wf;var gx=Ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=T,Et=gx;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cf=new Set,As={};function qr(e,t){Do(e,t),Do(e+"Capture",t)}function Do(e,t){for(As[e]=t,e=0;e<t.length;e++)Cf.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Xu={};function vx(e){return ed.call(Xu,e)?!0:ed.call(Qu,e)?!1:bx.test(e)?Xu[e]=!0:(Qu[e]=!0,!1)}function jx(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yx(e,t,r,o){if(t===null||typeof t>"u"||jx(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,r,o,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fc,hc);tt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fc,hc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fc,hc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xc(e,t,r,o){var s=tt.hasOwnProperty(t)?tt[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yx(t,r,s,o)&&(r=null),o||s===null?vx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var Ln=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oi=Symbol.for("react.element"),mo=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Tf=Symbol.for("react.offscreen"),Ju=Symbol.iterator;function ss(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,ja;function vs(e){if(ja===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ja=t&&t[1]||""}return`
`+ja+e}var ya=!1;function Fa(e,t){if(!e||ya)return"";ya=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?vs(e):""}function Fx(e){switch(e.tag){case 5:return vs(e.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return e=Fa(e.type,!1),e;case 11:return e=Fa(e.type.render,!1),e;case 1:return e=Fa(e.type,!0),e;default:return""}}function od(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case po:return"Fragment";case mo:return"Portal";case td:return"Profiler";case gc:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ef:return(e.displayName||"Context")+".Consumer";case _f:return(e._context.displayName||"Context")+".Provider";case bc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:od(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return od(e(t))}catch{}}return null}function wx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(t);case 8:return t===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sx(e){var t=Lf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=Sx(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Lf(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sd(e,t){var r=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function em(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=Jn(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rf(e,t){t=t.checked,t!=null&&xc(e,"checked",t,!1)}function id(e,t){Rf(e,t);var r=Jn(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ld(e,t.type,r):t.hasOwnProperty("defaultValue")&&ld(e,t.type,Jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ld(e,t,r){(t!=="number"||fl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var js=Array.isArray;function Lo(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Jn(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(js(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Jn(r)}}function Nf(e,t){var r=Jn(t.value),o=Jn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function rm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ai,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ai=Ai||document.createElement("div"),Ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ms(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cx=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(e){Cx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cs[t]=Cs[e]})});function Af(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Cs.hasOwnProperty(e)&&Cs[e]?(""+t).trim():t+"px"}function Mf(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Af(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var _x=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(e,t){if(t){if(_x[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ud(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pd=null,ko=null,Ro=null;function om(e){if(e=ci(e)){if(typeof pd!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Zl(t),pd(e.stateNode,e.type,t))}}function If(e){ko?Ro?Ro.push(e):Ro=[e]:ko=e}function Df(){if(ko){var e=ko,t=Ro;if(Ro=ko=null,om(e),t)for(e=0;e<t.length;e++)om(t[e])}}function $f(e,t){return e(t)}function zf(){}var wa=!1;function Bf(e,t,r){if(wa)return e(t,r);wa=!0;try{return $f(e,t,r)}finally{wa=!1,(ko!==null||Ro!==null)&&(zf(),Df())}}function Is(e,t){var r=e.stateNode;if(r===null)return null;var o=Zl(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var fd=!1;if(Fn)try{var is={};Object.defineProperty(is,"passive",{get:function(){fd=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{fd=!1}function Ex(e,t,r,o,s,i,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var _s=!1,hl=null,xl=!1,hd=null,Tx={onError:function(e){_s=!0,hl=e}};function Lx(e,t,r,o,s,i,l,a,d){_s=!1,hl=null,Ex.apply(Tx,arguments)}function kx(e,t,r,o,s,i,l,a,d){if(Lx.apply(this,arguments),_s){if(_s){var c=hl;_s=!1,hl=null}else throw Error(A(198));xl||(xl=!0,hd=c)}}function Ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Vf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sm(e){if(Ur(e)!==e)throw Error(A(188))}function Rx(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return sm(s),e;if(i===o)return sm(s),t;i=i.sibling}throw Error(A(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(A(189))}}if(r.alternate!==o)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function qf(e){return e=Rx(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Hf=Et.unstable_scheduleCallback,im=Et.unstable_cancelCallback,Nx=Et.unstable_shouldYield,Ox=Et.unstable_requestPaint,Ae=Et.unstable_now,Px=Et.unstable_getCurrentPriorityLevel,yc=Et.unstable_ImmediatePriority,Yf=Et.unstable_UserBlockingPriority,gl=Et.unstable_NormalPriority,Ax=Et.unstable_LowPriority,Wf=Et.unstable_IdlePriority,Ul=null,an=null;function Mx(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:$x,Ix=Math.log,Dx=Math.LN2;function $x(e){return e>>>=0,e===0?32:31-(Ix(e)/Dx|0)|0}var Mi=64,Ii=4194304;function ys(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bl(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=ys(a):(i&=l,i!==0&&(o=ys(i)))}else l=r&~s,l!==0?o=ys(l):i!==0&&(o=ys(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Qt(t),s=1<<r,o|=e[r],t&=~s;return o}function zx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bx(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Qt(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=zx(a,t)):d<=t&&(e.expiredLanes|=a),i&=~a}}function xd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zf(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function Sa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ai(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=r}function Vx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Qt(r),i=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~i}}function Fc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Qt(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var pe=0;function Gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kf,wc,Qf,Xf,Jf,gd=!1,Di=[],Un=null,Hn=null,Yn=null,Ds=new Map,$s=new Map,zn=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lm(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(t.pointerId)}}function ls(e,t,r,o,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ci(t),t!==null&&wc(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ux(e,t,r,o,s){switch(t){case"focusin":return Un=ls(Un,e,t,r,o,s),!0;case"dragenter":return Hn=ls(Hn,e,t,r,o,s),!0;case"mouseover":return Yn=ls(Yn,e,t,r,o,s),!0;case"pointerover":var i=s.pointerId;return Ds.set(i,ls(Ds.get(i)||null,e,t,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,$s.set(i,ls($s.get(i)||null,e,t,r,o,s)),!0}return!1}function eh(e){var t=Fr(e.target);if(t!==null){var r=Ur(t);if(r!==null){if(t=r.tag,t===13){if(t=Vf(r),t!==null){e.blockedOn=t,Jf(e.priority,function(){Qf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=bd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);md=o,r.target.dispatchEvent(o),md=null}else return t=ci(r),t!==null&&wc(t),e.blockedOn=r,!1;t.shift()}return!0}function am(e,t,r){tl(e)&&r.delete(t)}function Hx(){gd=!1,Un!==null&&tl(Un)&&(Un=null),Hn!==null&&tl(Hn)&&(Hn=null),Yn!==null&&tl(Yn)&&(Yn=null),Ds.forEach(am),$s.forEach(am)}function as(e,t){e.blockedOn===t&&(e.blockedOn=null,gd||(gd=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,Hx)))}function zs(e){function t(s){return as(s,e)}if(0<Di.length){as(Di[0],e);for(var r=1;r<Di.length;r++){var o=Di[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Un!==null&&as(Un,e),Hn!==null&&as(Hn,e),Yn!==null&&as(Yn,e),Ds.forEach(t),$s.forEach(t),r=0;r<zn.length;r++)o=zn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<zn.length&&(r=zn[0],r.blockedOn===null);)eh(r),r.blockedOn===null&&zn.shift()}var No=Ln.ReactCurrentBatchConfig,vl=!0;function Yx(e,t,r,o){var s=pe,i=No.transition;No.transition=null;try{pe=1,Sc(e,t,r,o)}finally{pe=s,No.transition=i}}function Wx(e,t,r,o){var s=pe,i=No.transition;No.transition=null;try{pe=4,Sc(e,t,r,o)}finally{pe=s,No.transition=i}}function Sc(e,t,r,o){if(vl){var s=bd(e,t,r,o);if(s===null)Pa(e,t,o,jl,r),lm(e,o);else if(Ux(s,e,t,r,o))o.stopPropagation();else if(lm(e,o),t&4&&-1<qx.indexOf(e)){for(;s!==null;){var i=ci(s);if(i!==null&&Kf(i),i=bd(e,t,r,o),i===null&&Pa(e,t,o,jl,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Pa(e,t,o,null,r)}}var jl=null;function bd(e,t,r,o){if(jl=null,e=jc(o),e=Fr(e),e!==null)if(t=Ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Vf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jl=e,null}function th(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Px()){case yc:return 1;case Yf:return 4;case gl:case Ax:return 16;case Wf:return 536870912;default:return 16}default:return 16}}var Vn=null,Cc=null,nl=null;function nh(){if(nl)return nl;var e,t=Cc,r=t.length,o,s="value"in Vn?Vn.value:Vn.textContent,i=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(o=1;o<=l&&t[r-o]===s[i-o];o++);return nl=s.slice(e,1<o?1-o:void 0)}function rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function dm(){return!1}function Lt(e){function t(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$i:dm,this.isPropagationStopped=dm,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Lt(Zo),di=ke({},Zo,{view:0,detail:0}),Zx=Lt(di),Ca,_a,ds,Hl=ke({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ds&&(ds&&e.type==="mousemove"?(Ca=e.screenX-ds.screenX,_a=e.screenY-ds.screenY):_a=Ca=0,ds=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),cm=Lt(Hl),Gx=ke({},Hl,{dataTransfer:0}),Kx=Lt(Gx),Qx=ke({},di,{relatedTarget:0}),Ea=Lt(Qx),Xx=ke({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=Lt(Xx),eg=ke({},Zo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=Lt(eg),ng=ke({},Zo,{data:0}),um=Lt(ng),rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sg[e])?!!t[e]:!1}function Ec(){return ig}var lg=ke({},di,{key:function(e){if(e.key){var t=rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ag=Lt(lg),dg=ke({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Lt(dg),cg=ke({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),ug=Lt(cg),mg=ke({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=Lt(mg),fg=ke({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hg=Lt(fg),xg=[9,13,27,32],Tc=Fn&&"CompositionEvent"in window,Es=null;Fn&&"documentMode"in document&&(Es=document.documentMode);var gg=Fn&&"TextEvent"in window&&!Es,rh=Fn&&(!Tc||Es&&8<Es&&11>=Es),pm=" ",fm=!1;function oh(e,t){switch(e){case"keyup":return xg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fo=!1;function bg(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(fm=!0,pm);case"textInput":return e=t.data,e===pm&&fm?null:e;default:return null}}function vg(e,t){if(fo)return e==="compositionend"||!Tc&&oh(e,t)?(e=nh(),nl=Cc=Vn=null,fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rh&&t.locale!=="ko"?null:t.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jg[e.type]:t==="textarea"}function ih(e,t,r,o){If(o),t=yl(t,"onChange"),0<t.length&&(r=new _c("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Ts=null,Bs=null;function yg(e){gh(e,0)}function Yl(e){var t=go(e);if(kf(t))return e}function Fg(e,t){if(e==="change")return t}var lh=!1;if(Fn){var Ta;if(Fn){var La="oninput"in document;if(!La){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),La=typeof xm.oninput=="function"}Ta=La}else Ta=!1;lh=Ta&&(!document.documentMode||9<document.documentMode)}function gm(){Ts&&(Ts.detachEvent("onpropertychange",ah),Bs=Ts=null)}function ah(e){if(e.propertyName==="value"&&Yl(Bs)){var t=[];ih(t,Bs,e,jc(e)),Bf(yg,t)}}function wg(e,t,r){e==="focusin"?(gm(),Ts=t,Bs=r,Ts.attachEvent("onpropertychange",ah)):e==="focusout"&&gm()}function Sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(Bs)}function Cg(e,t){if(e==="click")return Yl(t)}function _g(e,t){if(e==="input"||e==="change")return Yl(t)}function Eg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Eg;function Vs(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!ed.call(t,s)||!Jt(e[s],t[s]))return!1}return!0}function bm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vm(e,t){var r=bm(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bm(r)}}function dh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ch(){for(var e=window,t=fl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=fl(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=ch(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dh(r.ownerDocument.documentElement,r)){if(o!==null&&Lc(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!e.extend&&i>o&&(s=o,o=i,i=s),s=vm(r,i);var l=vm(r,o);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lg=Fn&&"documentMode"in document&&11>=document.documentMode,ho=null,vd=null,Ls=null,jd=!1;function jm(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jd||ho==null||ho!==fl(o)||(o=ho,"selectionStart"in o&&Lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ls&&Vs(Ls,o)||(Ls=o,o=yl(vd,"onSelect"),0<o.length&&(t=new _c("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=ho)))}function zi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xo={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},ka={},uh={};Fn&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function Wl(e){if(ka[e])return ka[e];if(!xo[e])return e;var t=xo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in uh)return ka[e]=t[r];return e}var mh=Wl("animationend"),ph=Wl("animationiteration"),fh=Wl("animationstart"),hh=Wl("transitionend"),xh=new Map,ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){xh.set(e,t),qr(t,[e])}for(var Ra=0;Ra<ym.length;Ra++){var Na=ym[Ra],kg=Na.toLowerCase(),Rg=Na[0].toUpperCase()+Na.slice(1);ir(kg,"on"+Rg)}ir(mh,"onAnimationEnd");ir(ph,"onAnimationIteration");ir(fh,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(hh,"onTransitionEnd");Do("onMouseEnter",["mouseout","mouseover"]);Do("onMouseLeave",["mouseout","mouseover"]);Do("onPointerEnter",["pointerout","pointerover"]);Do("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Fm(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,kx(o,t,void 0,e),e.currentTarget=null}function gh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break e;Fm(s,a,c),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break e;Fm(s,a,c),i=d}}}if(xl)throw e=hd,xl=!1,hd=null,e}function ye(e,t){var r=t[Cd];r===void 0&&(r=t[Cd]=new Set);var o=e+"__bubble";r.has(o)||(bh(t,e,2,!1),r.add(o))}function Oa(e,t,r){var o=0;t&&(o|=4),bh(r,e,o,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[Bi]){e[Bi]=!0,Cf.forEach(function(r){r!=="selectionchange"&&(Ng.has(r)||Oa(r,!1,e),Oa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,Oa("selectionchange",!1,t))}}function bh(e,t,r,o){switch(th(t)){case 1:var s=Yx;break;case 4:s=Wx;break;default:s=Sc}r=s.bind(null,t,r,e),s=void 0,!fd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Pa(e,t,r,o,s){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Fr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue e}a=a.parentNode}}o=o.return}Bf(function(){var c=i,u=jc(r),f=[];e:{var g=xh.get(e);if(g!==void 0){var C=_c,_=e;switch(e){case"keypress":if(rl(r)===0)break e;case"keydown":case"keyup":C=ag;break;case"focusin":_="focus",C=Ea;break;case"focusout":_="blur",C=Ea;break;case"beforeblur":case"afterblur":C=Ea;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=ug;break;case mh:case ph:case fh:C=Jx;break;case hh:C=pg;break;case"scroll":C=Zx;break;case"wheel":C=hg;break;case"copy":case"cut":case"paste":C=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=mm}var E=(t&4)!==0,N=!E&&e==="scroll",b=E?g!==null?g+"Capture":null:g;E=[];for(var m=c,p;m!==null;){p=m;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,b!==null&&(v=Is(m,b),v!=null&&E.push(Us(m,v,p)))),N)break;m=m.return}0<E.length&&(g=new C(g,_,null,r,u),f.push({event:g,listeners:E}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&r!==md&&(_=r.relatedTarget||r.fromElement)&&(Fr(_)||_[wn]))break e;if((C||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,C?(_=r.relatedTarget||r.toElement,C=c,_=_?Fr(_):null,_!==null&&(N=Ur(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(C=null,_=c),C!==_)){if(E=cm,v="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=mm,v="onPointerLeave",b="onPointerEnter",m="pointer"),N=C==null?g:go(C),p=_==null?g:go(_),g=new E(v,m+"leave",C,r,u),g.target=N,g.relatedTarget=p,v=null,Fr(u)===c&&(E=new E(b,m+"enter",_,r,u),E.target=p,E.relatedTarget=N,v=E),N=v,C&&_)t:{for(E=C,b=_,m=0,p=E;p;p=ro(p))m++;for(p=0,v=b;v;v=ro(v))p++;for(;0<m-p;)E=ro(E),m--;for(;0<p-m;)b=ro(b),p--;for(;m--;){if(E===b||b!==null&&E===b.alternate)break t;E=ro(E),b=ro(b)}E=null}else E=null;C!==null&&wm(f,g,C,E,!1),_!==null&&N!==null&&wm(f,N,_,E,!0)}}e:{if(g=c?go(c):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var j=Fg;else if(hm(g))if(lh)j=_g;else{j=Sg;var h=wg}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Cg);if(j&&(j=j(e,c))){ih(f,j,r,u);break e}h&&h(e,g,c),e==="focusout"&&(h=g._wrapperState)&&h.controlled&&g.type==="number"&&ld(g,"number",g.value)}switch(h=c?go(c):window,e){case"focusin":(hm(h)||h.contentEditable==="true")&&(ho=h,vd=c,Ls=null);break;case"focusout":Ls=vd=ho=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,jm(f,r,u);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":jm(f,r,u)}var y;if(Tc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else fo?oh(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(rh&&r.locale!=="ko"&&(fo||R!=="onCompositionStart"?R==="onCompositionEnd"&&fo&&(y=nh()):(Vn=u,Cc="value"in Vn?Vn.value:Vn.textContent,fo=!0)),h=yl(c,R),0<h.length&&(R=new um(R,e,null,r,u),f.push({event:R,listeners:h}),y?R.data=y:(y=sh(r),y!==null&&(R.data=y)))),(y=gg?bg(e,r):vg(e,r))&&(c=yl(c,"onBeforeInput"),0<c.length&&(u=new um("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:c}),u.data=y))}gh(f,t)})}function Us(e,t,r){return{instance:e,listener:t,currentTarget:r}}function yl(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Is(e,r),i!=null&&o.unshift(Us(e,i,s)),i=Is(e,t),i!=null&&o.push(Us(e,i,s))),e=e.return}return o}function ro(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wm(e,t,r,o,s){for(var i=t._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,s?(d=Is(r,i),d!=null&&l.unshift(Us(r,d,a))):s||(d=Is(r,i),d!=null&&l.push(Us(r,d,a)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Og=/\r\n?/g,Pg=/\u0000|\uFFFD/g;function Sm(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Pg,"")}function Vi(e,t,r){if(t=Sm(t),Sm(e)!==t&&r)throw Error(A(425))}function Fl(){}var yd=null,Fd=null;function wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(e){return Cm.resolve(null).then(e).catch(Ig)}:Sd;function Ig(e){setTimeout(function(){throw e})}function Aa(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),zs(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);zs(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Go=Math.random().toString(36).slice(2),sn="__reactFiber$"+Go,Hs="__reactProps$"+Go,wn="__reactContainer$"+Go,Cd="__reactEvents$"+Go,Dg="__reactListeners$"+Go,$g="__reactHandles$"+Go;function Fr(e){var t=e[sn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wn]||r[sn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_m(e);e!==null;){if(r=e[sn])return r;e=_m(e)}return t}e=r,r=e.parentNode}return null}function ci(e){return e=e[sn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function go(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Zl(e){return e[Hs]||null}var _d=[],bo=-1;function lr(e){return{current:e}}function Fe(e){0>bo||(e.current=_d[bo],_d[bo]=null,bo--)}function be(e,t){bo++,_d[bo]=e.current,e.current=t}var er={},at=lr(er),vt=lr(!1),kr=er;function $o(e,t){var r=e.type.contextTypes;if(!r)return er;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function jt(e){return e=e.childContextTypes,e!=null}function wl(){Fe(vt),Fe(at)}function Em(e,t,r){if(at.current!==er)throw Error(A(168));be(at,t),be(vt,r)}function vh(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(A(108,wx(e)||"Unknown",s));return ke({},r,o)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,kr=at.current,be(at,e),be(vt,vt.current),!0}function Tm(e,t,r){var o=e.stateNode;if(!o)throw Error(A(169));r?(e=vh(e,t,kr),o.__reactInternalMemoizedMergedChildContext=e,Fe(vt),Fe(at),be(at,e)):Fe(vt),be(vt,r)}var gn=null,Gl=!1,Ma=!1;function jh(e){gn===null?gn=[e]:gn.push(e)}function zg(e){Gl=!0,jh(e)}function ar(){if(!Ma&&gn!==null){Ma=!0;var e=0,t=pe;try{var r=gn;for(pe=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}gn=null,Gl=!1}catch(s){throw gn!==null&&(gn=gn.slice(e+1)),Hf(yc,ar),s}finally{pe=t,Ma=!1}}return null}var vo=[],jo=0,Cl=null,_l=0,Ot=[],Pt=0,Rr=null,bn=1,vn="";function jr(e,t){vo[jo++]=_l,vo[jo++]=Cl,Cl=e,_l=t}function yh(e,t,r){Ot[Pt++]=bn,Ot[Pt++]=vn,Ot[Pt++]=Rr,Rr=e;var o=bn;e=vn;var s=32-Qt(o)-1;o&=~(1<<s),r+=1;var i=32-Qt(t)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,bn=1<<32-Qt(t)+s|r<<s|o,vn=i+e}else bn=1<<i|r<<s|o,vn=e}function kc(e){e.return!==null&&(jr(e,1),yh(e,1,0))}function Rc(e){for(;e===Cl;)Cl=vo[--jo],vo[jo]=null,_l=vo[--jo],vo[jo]=null;for(;e===Rr;)Rr=Ot[--Pt],Ot[Pt]=null,vn=Ot[--Pt],Ot[Pt]=null,bn=Ot[--Pt],Ot[Pt]=null}var _t=null,St=null,Ce=!1,Kt=null;function Fh(e,t){var r=At(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Lm(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,St=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,St=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Rr!==null?{id:bn,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=At(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,_t=e,St=null,!0):!1;default:return!1}}function Ed(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Td(e){if(Ce){var t=St;if(t){var r=t;if(!Lm(e,t)){if(Ed(e))throw Error(A(418));t=Wn(r.nextSibling);var o=_t;t&&Lm(e,t)?Fh(o,r):(e.flags=e.flags&-4097|2,Ce=!1,_t=e)}}else{if(Ed(e))throw Error(A(418));e.flags=e.flags&-4097|2,Ce=!1,_t=e}}}function km(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function qi(e){if(e!==_t)return!1;if(!Ce)return km(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wd(e.type,e.memoizedProps)),t&&(t=St)){if(Ed(e))throw wh(),Error(A(418));for(;t;)Fh(e,t),t=Wn(t.nextSibling)}if(km(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){St=Wn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}St=null}}else St=_t?Wn(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=St;e;)e=Wn(e.nextSibling)}function zo(){St=_t=null,Ce=!1}function Nc(e){Kt===null?Kt=[e]:Kt.push(e)}var Bg=Ln.ReactCurrentBatchConfig;function Wt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var El=lr(null),Tl=null,yo=null,Oc=null;function Pc(){Oc=yo=Tl=null}function Ac(e){var t=El.current;Fe(El),e._currentValue=t}function Ld(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Oo(e,t){Tl=e,Oc=yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:t,next:null},yo===null){if(Tl===null)throw Error(A(308));yo=e,Tl.dependencies={lanes:0,firstContext:e}}else yo=yo.next=e;return t}var wr=null;function Mc(e){wr===null?wr=[e]:wr.push(e)}function Sh(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,Mc(t)):(r.next=s.next,s.next=r),t.interleaved=r,Sn(e,o)}function Sn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var $n=!1;function Ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,de&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Sn(e,r)}return s=o.interleaved,s===null?(t.next=t,Mc(o)):(t.next=s.next,s.next=t),o.interleaved=t,Sn(e,r)}function ol(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Fc(e,r)}}function Rm(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=t:i=i.next=t}else s=i=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ll(e,t,r,o){var s=e.updateQueue;$n=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?i=c:l.next=c,l=d;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=d))}if(i!==null){var f=s.baseState;l=0,u=c=d=null,a=i;do{var g=a.lane,C=a.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,E=a;switch(g=t,C=r,E.tag){case 1:if(_=E.payload,typeof _=="function"){f=_.call(C,f,g);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,g=typeof _=="function"?_.call(C,f,g):_,g==null)break e;f=ke({},f,g);break e;case 2:$n=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else C={eventTime:C,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=C,d=f):u=u.next=C,l|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(u===null&&(d=f),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Or|=l,e.lanes=l,e.memoizedState=f}}function Nm(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var _h=new Sf.Component().refs;function kd(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:ke({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Kl={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=ut(),s=Kn(e),i=jn(o,s);i.payload=t,r!=null&&(i.callback=r),t=Zn(e,i,s),t!==null&&(Xt(t,e,s,o),ol(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=ut(),s=Kn(e),i=jn(o,s);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Zn(e,i,s),t!==null&&(Xt(t,e,s,o),ol(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ut(),o=Kn(e),s=jn(r,o);s.tag=2,t!=null&&(s.callback=t),t=Zn(e,s,o),t!==null&&(Xt(t,e,o,r),ol(t,e,o))}};function Om(e,t,r,o,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):t.prototype&&t.prototype.isPureReactComponent?!Vs(r,o)||!Vs(s,i):!0}function Eh(e,t,r){var o=!1,s=er,i=t.contextType;return typeof i=="object"&&i!==null?i=It(i):(s=jt(t)?kr:at.current,o=t.contextTypes,i=(o=o!=null)?$o(e,s):er),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Kl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Pm(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Kl.enqueueReplaceState(t,t.state,null)}function Rd(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs=_h,Ic(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=It(i):(i=jt(t)?kr:at.current,s.context=$o(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(kd(e,t,i,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Kl.enqueueReplaceState(s,s.state,null),Ll(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function cs(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var o=r.stateNode}if(!o)throw Error(A(147,e));var s=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=s.refs;a===_h&&(a=s.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function Ui(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Am(e){var t=e._init;return t(e._payload)}function Th(e){function t(b,m){if(e){var p=b.deletions;p===null?(b.deletions=[m],b.flags|=16):p.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function o(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function s(b,m){return b=Qn(b,m),b.index=0,b.sibling=null,b}function i(b,m,p){return b.index=p,e?(p=b.alternate,p!==null?(p=p.index,p<m?(b.flags|=2,m):p):(b.flags|=2,m)):(b.flags|=1048576,m)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,m,p,v){return m===null||m.tag!==6?(m=qa(p,b.mode,v),m.return=b,m):(m=s(m,p),m.return=b,m)}function d(b,m,p,v){var j=p.type;return j===po?u(b,m,p.props.children,v,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&Am(j)===m.type)?(v=s(m,p.props),v.ref=cs(b,m,p),v.return=b,v):(v=cl(p.type,p.key,p.props,null,b.mode,v),v.ref=cs(b,m,p),v.return=b,v)}function c(b,m,p,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Ua(p,b.mode,v),m.return=b,m):(m=s(m,p.children||[]),m.return=b,m)}function u(b,m,p,v,j){return m===null||m.tag!==7?(m=Lr(p,b.mode,v,j),m.return=b,m):(m=s(m,p),m.return=b,m)}function f(b,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=qa(""+m,b.mode,p),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oi:return p=cl(m.type,m.key,m.props,null,b.mode,p),p.ref=cs(b,null,m),p.return=b,p;case mo:return m=Ua(m,b.mode,p),m.return=b,m;case Dn:var v=m._init;return f(b,v(m._payload),p)}if(js(m)||ss(m))return m=Lr(m,b.mode,p,null),m.return=b,m;Ui(b,m)}return null}function g(b,m,p,v){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(b,m,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:return p.key===j?d(b,m,p,v):null;case mo:return p.key===j?c(b,m,p,v):null;case Dn:return j=p._init,g(b,m,j(p._payload),v)}if(js(p)||ss(p))return j!==null?null:u(b,m,p,v,null);Ui(b,p)}return null}function C(b,m,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return b=b.get(p)||null,a(m,b,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oi:return b=b.get(v.key===null?p:v.key)||null,d(m,b,v,j);case mo:return b=b.get(v.key===null?p:v.key)||null,c(m,b,v,j);case Dn:var h=v._init;return C(b,m,p,h(v._payload),j)}if(js(v)||ss(v))return b=b.get(p)||null,u(m,b,v,j,null);Ui(m,v)}return null}function _(b,m,p,v){for(var j=null,h=null,y=m,R=m=0,k=null;y!==null&&R<p.length;R++){y.index>R?(k=y,y=null):k=y.sibling;var M=g(b,y,p[R],v);if(M===null){y===null&&(y=k);break}e&&y&&M.alternate===null&&t(b,y),m=i(M,m,R),h===null?j=M:h.sibling=M,h=M,y=k}if(R===p.length)return r(b,y),Ce&&jr(b,R),j;if(y===null){for(;R<p.length;R++)y=f(b,p[R],v),y!==null&&(m=i(y,m,R),h===null?j=y:h.sibling=y,h=y);return Ce&&jr(b,R),j}for(y=o(b,y);R<p.length;R++)k=C(y,b,R,p[R],v),k!==null&&(e&&k.alternate!==null&&y.delete(k.key===null?R:k.key),m=i(k,m,R),h===null?j=k:h.sibling=k,h=k);return e&&y.forEach(function(I){return t(b,I)}),Ce&&jr(b,R),j}function E(b,m,p,v){var j=ss(p);if(typeof j!="function")throw Error(A(150));if(p=j.call(p),p==null)throw Error(A(151));for(var h=j=null,y=m,R=m=0,k=null,M=p.next();y!==null&&!M.done;R++,M=p.next()){y.index>R?(k=y,y=null):k=y.sibling;var I=g(b,y,M.value,v);if(I===null){y===null&&(y=k);break}e&&y&&I.alternate===null&&t(b,y),m=i(I,m,R),h===null?j=I:h.sibling=I,h=I,y=k}if(M.done)return r(b,y),Ce&&jr(b,R),j;if(y===null){for(;!M.done;R++,M=p.next())M=f(b,M.value,v),M!==null&&(m=i(M,m,R),h===null?j=M:h.sibling=M,h=M);return Ce&&jr(b,R),j}for(y=o(b,y);!M.done;R++,M=p.next())M=C(y,b,R,M.value,v),M!==null&&(e&&M.alternate!==null&&y.delete(M.key===null?R:M.key),m=i(M,m,R),h===null?j=M:h.sibling=M,h=M);return e&&y.forEach(function(J){return t(b,J)}),Ce&&jr(b,R),j}function N(b,m,p,v){if(typeof p=="object"&&p!==null&&p.type===po&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Oi:e:{for(var j=p.key,h=m;h!==null;){if(h.key===j){if(j=p.type,j===po){if(h.tag===7){r(b,h.sibling),m=s(h,p.props.children),m.return=b,b=m;break e}}else if(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&Am(j)===h.type){r(b,h.sibling),m=s(h,p.props),m.ref=cs(b,h,p),m.return=b,b=m;break e}r(b,h);break}else t(b,h);h=h.sibling}p.type===po?(m=Lr(p.props.children,b.mode,v,p.key),m.return=b,b=m):(v=cl(p.type,p.key,p.props,null,b.mode,v),v.ref=cs(b,m,p),v.return=b,b=v)}return l(b);case mo:e:{for(h=p.key;m!==null;){if(m.key===h)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){r(b,m.sibling),m=s(m,p.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=Ua(p,b.mode,v),m.return=b,b=m}return l(b);case Dn:return h=p._init,N(b,m,h(p._payload),v)}if(js(p))return _(b,m,p,v);if(ss(p))return E(b,m,p,v);Ui(b,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(r(b,m.sibling),m=s(m,p),m.return=b,b=m):(r(b,m),m=qa(p,b.mode,v),m.return=b,b=m),l(b)):r(b,m)}return N}var Bo=Th(!0),Lh=Th(!1),ui={},dn=lr(ui),Ys=lr(ui),Ws=lr(ui);function Sr(e){if(e===ui)throw Error(A(174));return e}function Dc(e,t){switch(be(Ws,t),be(Ys,e),be(dn,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dd(t,e)}Fe(dn),be(dn,t)}function Vo(){Fe(dn),Fe(Ys),Fe(Ws)}function kh(e){Sr(Ws.current);var t=Sr(dn.current),r=dd(t,e.type);t!==r&&(be(Ys,e),be(dn,r))}function $c(e){Ys.current===e&&(Fe(dn),Fe(Ys))}var Te=lr(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function zc(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var sl=Ln.ReactCurrentDispatcher,Da=Ln.ReactCurrentBatchConfig,Nr=0,Le=null,$e=null,We=null,Rl=!1,ks=!1,Zs=0,Vg=0;function ot(){throw Error(A(321))}function Bc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Vc(e,t,r,o,s,i){if(Nr=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sl.current=e===null||e.memoizedState===null?Yg:Wg,e=r(o,s),ks){i=0;do{if(ks=!1,Zs=0,25<=i)throw Error(A(301));i+=1,We=$e=null,t.updateQueue=null,sl.current=Zg,e=r(o,s)}while(ks)}if(sl.current=Nl,t=$e!==null&&$e.next!==null,Nr=0,We=$e=Le=null,Rl=!1,t)throw Error(A(300));return e}function qc(){var e=Zs!==0;return Zs=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Le.memoizedState=We=e:We=We.next=e,We}function Dt(){if($e===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=We===null?Le.memoizedState:We.next;if(t!==null)We=t,$e=e;else{if(e===null)throw Error(A(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},We===null?Le.memoizedState=We=e:We=We.next=e}return We}function Gs(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=Dt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var o=$e,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,c=i;do{var u=c.lane;if((Nr&u)===u)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=f,l=o):d=d.next=f,Le.lanes|=u,Or|=u}c=c.next}while(c!==null&&c!==i);d===null?l=o:d.next=a,Jt(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do i=s.lane,Le.lanes|=i,Or|=i,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function za(e){var t=Dt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,i=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);Jt(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,o]}function Rh(){}function Nh(e,t){var r=Le,o=Dt(),s=t(),i=!Jt(o.memoizedState,s);if(i&&(o.memoizedState=s,bt=!0),o=o.queue,Uc(Ah.bind(null,r,o,e),[e]),o.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(r.flags|=2048,Ks(9,Ph.bind(null,r,o,s,t),void 0,null),Ge===null)throw Error(A(349));Nr&30||Oh(r,t,s)}return s}function Oh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ph(e,t,r,o){t.value=r,t.getSnapshot=o,Mh(t)&&Ih(e)}function Ah(e,t,r){return r(function(){Mh(t)&&Ih(e)})}function Mh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function Ih(e){var t=Sn(e,1);t!==null&&Xt(t,e,1,-1)}function Mm(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:e},t.queue=e,e=e.dispatch=Hg.bind(null,Le,e),[t.memoizedState,e]}function Ks(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Dh(){return Dt().memoizedState}function il(e,t,r,o){var s=nn();Le.flags|=e,s.memoizedState=Ks(1|t,r,void 0,o===void 0?null:o)}function Ql(e,t,r,o){var s=Dt();o=o===void 0?null:o;var i=void 0;if($e!==null){var l=$e.memoizedState;if(i=l.destroy,o!==null&&Bc(o,l.deps)){s.memoizedState=Ks(t,r,i,o);return}}Le.flags|=e,s.memoizedState=Ks(1|t,r,i,o)}function Im(e,t){return il(8390656,8,e,t)}function Uc(e,t){return Ql(2048,8,e,t)}function $h(e,t){return Ql(4,2,e,t)}function zh(e,t){return Ql(4,4,e,t)}function Bh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vh(e,t,r){return r=r!=null?r.concat([e]):null,Ql(4,4,Bh.bind(null,t,e),r)}function Hc(){}function qh(e,t){var r=Dt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Bc(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Uh(e,t){var r=Dt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Bc(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Hh(e,t,r){return Nr&21?(Jt(r,t)||(r=Zf(),Le.lanes|=r,Or|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=r)}function qg(e,t){var r=pe;pe=r!==0&&4>r?r:4,e(!0);var o=Da.transition;Da.transition={};try{e(!1),t()}finally{pe=r,Da.transition=o}}function Yh(){return Dt().memoizedState}function Ug(e,t,r){var o=Kn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Wh(e))Zh(t,r);else if(r=Sh(e,t,r,o),r!==null){var s=ut();Xt(r,e,o,s),Gh(r,t,o)}}function Hg(e,t,r){var o=Kn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Zh(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,Jt(a,l)){var d=t.interleaved;d===null?(s.next=s,Mc(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}r=Sh(e,t,s,o),r!==null&&(s=ut(),Xt(r,e,o,s),Gh(r,t,o))}}function Wh(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Zh(e,t){ks=Rl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Gh(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Fc(e,r)}}var Nl={readContext:It,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Yg={readContext:It,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Im,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,il(4194308,4,Bh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){return il(4,2,e,t)},useMemo:function(e,t){var r=nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=nn();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ug.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:Mm,useDebugValue:Hc,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Mm(!1),t=e[0];return e=qg.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Le,s=nn();if(Ce){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),Ge===null)throw Error(A(349));Nr&30||Oh(o,t,r)}s.memoizedState=r;var i={value:r,getSnapshot:t};return s.queue=i,Im(Ah.bind(null,o,i,e),[e]),o.flags|=2048,Ks(9,Ph.bind(null,o,i,r,t),void 0,null),r},useId:function(){var e=nn(),t=Ge.identifierPrefix;if(Ce){var r=vn,o=bn;r=(o&~(1<<32-Qt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Zs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wg={readContext:It,useCallback:qh,useContext:It,useEffect:Uc,useImperativeHandle:Vh,useInsertionEffect:$h,useLayoutEffect:zh,useMemo:Uh,useReducer:$a,useRef:Dh,useState:function(){return $a(Gs)},useDebugValue:Hc,useDeferredValue:function(e){var t=Dt();return Hh(t,$e.memoizedState,e)},useTransition:function(){var e=$a(Gs)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Rh,useSyncExternalStore:Nh,useId:Yh,unstable_isNewReconciler:!1},Zg={readContext:It,useCallback:qh,useContext:It,useEffect:Uc,useImperativeHandle:Vh,useInsertionEffect:$h,useLayoutEffect:zh,useMemo:Uh,useReducer:za,useRef:Dh,useState:function(){return za(Gs)},useDebugValue:Hc,useDeferredValue:function(e){var t=Dt();return $e===null?t.memoizedState=e:Hh(t,$e.memoizedState,e)},useTransition:function(){var e=za(Gs)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Rh,useSyncExternalStore:Nh,useId:Yh,unstable_isNewReconciler:!1};function qo(e,t){try{var r="",o=t;do r+=Fx(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Ba(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Nd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gg=typeof WeakMap=="function"?WeakMap:Map;function Kh(e,t,r){r=jn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Pl||(Pl=!0,Vd=o),Nd(e,t)},r}function Qh(e,t,r){r=jn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Nd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Nd(e,t),typeof o!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Dm(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Gg;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=d0.bind(null,e,t,r),t.then(e,e))}function $m(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zm(e,t,r,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=jn(-1,1),t.tag=2,Zn(r,t,1))),r.lanes|=1),e)}var Kg=Ln.ReactCurrentOwner,bt=!1;function ct(e,t,r,o){t.child=e===null?Lh(t,null,r,o):Bo(t,e.child,r,o)}function Bm(e,t,r,o,s){r=r.render;var i=t.ref;return Oo(t,s),o=Vc(e,t,r,o,i,s),r=qc(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Cn(e,t,s)):(Ce&&r&&kc(t),t.flags|=1,ct(e,t,o,s),t.child)}function Vm(e,t,r,o,s){if(e===null){var i=r.type;return typeof i=="function"&&!Jc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Xh(e,t,i,o,s)):(e=cl(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Vs,r(l,o)&&e.ref===t.ref)return Cn(e,t,s)}return t.flags|=1,e=Qn(i,o),e.ref=t.ref,e.return=t,t.child=e}function Xh(e,t,r,o,s){if(e!==null){var i=e.memoizedProps;if(Vs(i,o)&&e.ref===t.ref)if(bt=!1,t.pendingProps=o=i,(e.lanes&s)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Cn(e,t,s)}return Od(e,t,r,o,s)}function Jh(e,t,r){var o=t.pendingProps,s=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(wo,Ft),Ft|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(wo,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,be(wo,Ft),Ft|=o}else i!==null?(o=i.baseLanes|r,t.memoizedState=null):o=r,be(wo,Ft),Ft|=o;return ct(e,t,s,r),t.child}function e1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Od(e,t,r,o,s){var i=jt(r)?kr:at.current;return i=$o(t,i),Oo(t,s),r=Vc(e,t,r,o,i,s),o=qc(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Cn(e,t,s)):(Ce&&o&&kc(t),t.flags|=1,ct(e,t,r,s),t.child)}function qm(e,t,r,o,s){if(jt(r)){var i=!0;Sl(t)}else i=!1;if(Oo(t,s),t.stateNode===null)ll(e,t),Eh(t,r,o),Rd(t,r,o,s),o=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var d=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=It(c):(c=jt(r)?kr:at.current,c=$o(t,c));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&Pm(t,l,o,c),$n=!1;var g=t.memoizedState;l.state=g,Ll(t,o,l,s),d=t.memoizedState,a!==o||g!==d||vt.current||$n?(typeof u=="function"&&(kd(t,r,u,o),d=t.memoizedState),(a=$n||Om(t,r,a,o,g,d,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Ch(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Wt(t.type,a),l.props=c,f=t.pendingProps,g=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=It(d):(d=jt(r)?kr:at.current,d=$o(t,d));var C=r.getDerivedStateFromProps;(u=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==d)&&Pm(t,l,o,d),$n=!1,g=t.memoizedState,l.state=g,Ll(t,o,l,s);var _=t.memoizedState;a!==f||g!==_||vt.current||$n?(typeof C=="function"&&(kd(t,r,C,o),_=t.memoizedState),(c=$n||Om(t,r,c,o,g,_,d)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,_,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,_,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=_),l.props=o,l.state=_,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return Pd(e,t,r,o,i,s)}function Pd(e,t,r,o,s,i){e1(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return s&&Tm(t,r,!1),Cn(e,t,i);o=t.stateNode,Kg.current=t;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=Bo(t,e.child,null,i),t.child=Bo(t,null,a,i)):ct(e,t,a,i),t.memoizedState=o.state,s&&Tm(t,r,!0),t.child}function t1(e){var t=e.stateNode;t.pendingContext?Em(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Em(e,t.context,!1),Dc(e,t.containerInfo)}function Um(e,t,r,o,s){return zo(),Nc(s),t.flags|=256,ct(e,t,r,o),t.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function Md(e){return{baseLanes:e,cachePool:null,transitions:null}}function n1(e,t,r){var o=t.pendingProps,s=Te.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),be(Te,s&1),e===null)return Td(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,i?(o=t.mode,i=t.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ea(l,o,0,null),e=Lr(e,o,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Md(r),t.memoizedState=Ad,e):Yc(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Qg(e,t,l,o,a,s,r);if(i){i=o.fallback,l=t.mode,s=e.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=Qn(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Qn(a,i):(i=Lr(i,l,r,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,l=e.child.memoizedState,l=l===null?Md(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=Ad,o}return i=e.child,e=i.sibling,o=Qn(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Yc(e,t){return t=ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hi(e,t,r,o){return o!==null&&Nc(o),Bo(t,e.child,null,r),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qg(e,t,r,o,s,i,l){if(r)return t.flags&256?(t.flags&=-257,o=Ba(Error(A(422))),Hi(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,s=t.mode,o=ea({mode:"visible",children:o.children},s,0,null),i=Lr(i,s,l,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&Bo(t,e.child,null,l),t.child.memoizedState=Md(l),t.memoizedState=Ad,i);if(!(t.mode&1))return Hi(e,t,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(A(419)),o=Ba(i,o,void 0),Hi(e,t,l,o)}if(a=(l&e.childLanes)!==0,bt||a){if(o=Ge,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Sn(e,s),Xt(o,e,s,-1))}return Xc(),o=Ba(Error(A(421))),Hi(e,t,l,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=c0.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,St=Wn(s.nextSibling),_t=t,Ce=!0,Kt=null,e!==null&&(Ot[Pt++]=bn,Ot[Pt++]=vn,Ot[Pt++]=Rr,bn=e.id,vn=e.overflow,Rr=t),t=Yc(t,o.children),t.flags|=4096,t)}function Hm(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ld(e.return,t,r)}function Va(e,t,r,o,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function r1(e,t,r){var o=t.pendingProps,s=o.revealOrder,i=o.tail;if(ct(e,t,o.children,r),o=Te.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hm(e,r,t);else if(e.tag===19)Hm(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Te,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&kl(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Va(t,!1,s,r,i);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&kl(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Va(t,!0,r,null,i);break;case"together":Va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ll(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=Qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Xg(e,t,r){switch(t.tag){case 3:t1(t),zo();break;case 5:kh(t);break;case 1:jt(t.type)&&Sl(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;be(El,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):r&t.child.childLanes?n1(e,t,r):(be(Te,Te.current&1),e=Cn(e,t,r),e!==null?e.sibling:null);be(Te,Te.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return r1(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Te,Te.current),o)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,r)}return Cn(e,t,r)}var o1,Id,s1,i1;o1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Id=function(){};s1=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Sr(dn.current);var i=null;switch(r){case"input":s=sd(e,s),o=sd(e,o),i=[];break;case"select":s=ke({},s,{value:void 0}),o=ke({},o,{value:void 0}),i=[];break;case"textarea":s=ad(e,s),o=ad(e,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fl)}cd(r,o);var l;r=null;for(c in s)if(!o.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(As.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var d=o[c];if(a=s!=null?s[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(As.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&ye("scroll",e),i||a===d||(i=[])):(i=i||[]).push(c,d))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};i1=function(e,t,r,o){r!==o&&(t.flags|=4)};function us(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Jg(e,t,r){var o=t.pendingProps;switch(Rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return jt(t.type)&&wl(),st(t),null;case 3:return o=t.stateNode,Vo(),Fe(vt),Fe(at),zc(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(Hd(Kt),Kt=null))),Id(e,t),st(t),null;case 5:$c(t);var s=Sr(Ws.current);if(r=t.type,e!==null&&t.stateNode!=null)s1(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return st(t),null}if(e=Sr(dn.current),qi(t)){o=t.stateNode,r=t.type;var i=t.memoizedProps;switch(o[sn]=t,o[Hs]=i,e=(t.mode&1)!==0,r){case"dialog":ye("cancel",o),ye("close",o);break;case"iframe":case"object":case"embed":ye("load",o);break;case"video":case"audio":for(s=0;s<Fs.length;s++)ye(Fs[s],o);break;case"source":ye("error",o);break;case"img":case"image":case"link":ye("error",o),ye("load",o);break;case"details":ye("toggle",o);break;case"input":em(o,i),ye("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},ye("invalid",o);break;case"textarea":nm(o,i),ye("invalid",o)}cd(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Vi(o.textContent,a,e),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Vi(o.textContent,a,e),s=["children",""+a]):As.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ye("scroll",o)}switch(r){case"input":Pi(o),tm(o,i,!0);break;case"textarea":Pi(o),rm(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Fl)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Of(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(r,{is:o.is}):(e=l.createElement(r),r==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,r),e[sn]=t,e[Hs]=o,o1(e,t,!1,!1),t.stateNode=e;e:{switch(l=ud(r,o),r){case"dialog":ye("cancel",e),ye("close",e),s=o;break;case"iframe":case"object":case"embed":ye("load",e),s=o;break;case"video":case"audio":for(s=0;s<Fs.length;s++)ye(Fs[s],e);s=o;break;case"source":ye("error",e),s=o;break;case"img":case"image":case"link":ye("error",e),ye("load",e),s=o;break;case"details":ye("toggle",e),s=o;break;case"input":em(e,o),s=sd(e,o),ye("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=ke({},o,{value:void 0}),ye("invalid",e);break;case"textarea":nm(e,o),s=ad(e,o),ye("invalid",e);break;default:s=o}cd(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?Mf(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Pf(e,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Ms(e,d):typeof d=="number"&&Ms(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(As.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ye("scroll",e):d!=null&&xc(e,i,d,l))}switch(r){case"input":Pi(e),tm(e,o,!1);break;case"textarea":Pi(e),rm(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Jn(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?Lo(e,!!o.multiple,i,!1):o.defaultValue!=null&&Lo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Fl)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)i1(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(r=Sr(Ws.current),Sr(dn.current),qi(t)){if(o=t.stateNode,r=t.memoizedProps,o[sn]=t,(i=o.nodeValue!==r)&&(e=_t,e!==null))switch(e.tag){case 3:Vi(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(o.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[sn]=t,t.stateNode=o}return st(t),null;case 13:if(Fe(Te),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&St!==null&&t.mode&1&&!(t.flags&128))wh(),zo(),t.flags|=98560,i=!1;else if(i=qi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[sn]=t}else zo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),i=!1}else Kt!==null&&(Hd(Kt),Kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?ze===0&&(ze=3):Xc())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Vo(),Id(e,t),e===null&&qs(t.stateNode.containerInfo),st(t),null;case 10:return Ac(t.type._context),st(t),null;case 17:return jt(t.type)&&wl(),st(t),null;case 19:if(Fe(Te),i=t.memoizedState,i===null)return st(t),null;if(o=(t.flags&128)!==0,l=i.rendering,l===null)if(o)us(i,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=kl(e),l!==null){for(t.flags|=128,us(i,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)i=r,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Te,Te.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ae()>Uo&&(t.flags|=128,o=!0,us(i,!1),t.lanes=4194304)}else{if(!o)if(e=kl(l),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),us(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Ce)return st(t),null}else 2*Ae()-i.renderingStartTime>Uo&&r!==1073741824&&(t.flags|=128,o=!0,us(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ae(),t.sibling=null,r=Te.current,be(Te,o?r&1|2:r&1),t):(st(t),null);case 22:case 23:return Qc(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ft&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function e0(e,t){switch(Rc(t),t.tag){case 1:return jt(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vo(),Fe(vt),Fe(at),zc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(Fe(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));zo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Te),null;case 4:return Vo(),null;case 10:return Ac(t.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var Yi=!1,it=!1,t0=typeof WeakSet=="function"?WeakSet:Set,q=null;function Fo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ne(e,t,o)}else r.current=null}function Dd(e,t,r){try{r()}catch(o){Ne(e,t,o)}}var Ym=!1;function n0(e,t){if(yd=vl,e=ch(),Lc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,d=-1,c=0,u=0,f=e,g=null;t:for(;;){for(var C;f!==r||s!==0&&f.nodeType!==3||(a=l+s),f!==i||o!==0&&f.nodeType!==3||(d=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(C=f.firstChild)!==null;)g=f,f=C;for(;;){if(f===e)break t;if(g===r&&++c===s&&(a=l),g===i&&++u===o&&(d=l),(C=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=C}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fd={focusedElem:e,selectionRange:r},vl=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,N=_.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?E:Wt(t.type,E),N);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(v){Ne(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return _=Ym,Ym=!1,_}function Rs(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Dd(t,r,i)}s=s.next}while(s!==o)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function $d(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function l1(e){var t=e.alternate;t!==null&&(e.alternate=null,l1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Hs],delete t[Cd],delete t[Dg],delete t[$g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function a1(e){return e.tag===5||e.tag===3||e.tag===4}function Wm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zd(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Fl));else if(o!==4&&(e=e.child,e!==null))for(zd(e,t,r),e=e.sibling;e!==null;)zd(e,t,r),e=e.sibling}function Bd(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Bd(e,t,r),e=e.sibling;e!==null;)Bd(e,t,r),e=e.sibling}var Je=null,Zt=!1;function Mn(e,t,r){for(r=r.child;r!==null;)d1(e,t,r),r=r.sibling}function d1(e,t,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Ul,r)}catch{}switch(r.tag){case 5:it||Fo(r,t);case 6:var o=Je,s=Zt;Je=null,Mn(e,t,r),Je=o,Zt=s,Je!==null&&(Zt?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Zt?(e=Je,r=r.stateNode,e.nodeType===8?Aa(e.parentNode,r):e.nodeType===1&&Aa(e,r),zs(e)):Aa(Je,r.stateNode));break;case 4:o=Je,s=Zt,Je=r.stateNode.containerInfo,Zt=!0,Mn(e,t,r),Je=o,Zt=s;break;case 0:case 11:case 14:case 15:if(!it&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Dd(r,t,l),s=s.next}while(s!==o)}Mn(e,t,r);break;case 1:if(!it&&(Fo(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Ne(r,t,a)}Mn(e,t,r);break;case 21:Mn(e,t,r);break;case 22:r.mode&1?(it=(o=it)||r.memoizedState!==null,Mn(e,t,r),it=o):Mn(e,t,r);break;default:Mn(e,t,r)}}function Zm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new t0),t.forEach(function(o){var s=u0.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Ht(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,Zt=!1;break e;case 3:Je=a.stateNode.containerInfo,Zt=!0;break e;case 4:Je=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(Je===null)throw Error(A(160));d1(i,l,s),Je=null,Zt=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){Ne(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)c1(t,e),t=t.sibling}function c1(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),tn(e),o&4){try{Rs(3,e,e.return),Xl(3,e)}catch(E){Ne(e,e.return,E)}try{Rs(5,e,e.return)}catch(E){Ne(e,e.return,E)}}break;case 1:Ht(t,e),tn(e),o&512&&r!==null&&Fo(r,r.return);break;case 5:if(Ht(t,e),tn(e),o&512&&r!==null&&Fo(r,r.return),e.flags&32){var s=e.stateNode;try{Ms(s,"")}catch(E){Ne(e,e.return,E)}}if(o&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Rf(s,i),ud(a,l);var c=ud(a,i);for(l=0;l<d.length;l+=2){var u=d[l],f=d[l+1];u==="style"?Mf(s,f):u==="dangerouslySetInnerHTML"?Pf(s,f):u==="children"?Ms(s,f):xc(s,u,f,c)}switch(a){case"input":id(s,i);break;case"textarea":Nf(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?Lo(s,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?Lo(s,!!i.multiple,i.defaultValue,!0):Lo(s,!!i.multiple,i.multiple?[]:"",!1))}s[Hs]=i}catch(E){Ne(e,e.return,E)}}break;case 6:if(Ht(t,e),tn(e),o&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(E){Ne(e,e.return,E)}}break;case 3:if(Ht(t,e),tn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{zs(t.containerInfo)}catch(E){Ne(e,e.return,E)}break;case 4:Ht(t,e),tn(e);break;case 13:Ht(t,e),tn(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Gc=Ae())),o&4&&Zm(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(it=(c=it)||u,Ht(t,e),it=c):Ht(t,e),tn(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(q=e,u=e.child;u!==null;){for(f=q=u;q!==null;){switch(g=q,C=g.child,g.tag){case 0:case 11:case 14:case 15:Rs(4,g,g.return);break;case 1:Fo(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){o=g,r=g.return;try{t=o,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(E){Ne(o,r,E)}}break;case 5:Fo(g,g.return);break;case 22:if(g.memoizedState!==null){Km(f);continue}}C!==null?(C.return=g,q=C):Km(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Af("display",l))}catch(E){Ne(e,e.return,E)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){Ne(e,e.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ht(t,e),tn(e),o&4&&Zm(e);break;case 21:break;default:Ht(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(a1(r)){var o=r;break e}r=r.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Ms(s,""),o.flags&=-33);var i=Wm(e);Bd(e,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Wm(e);zd(e,a,l);break;default:throw Error(A(161))}}catch(d){Ne(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,r){q=e,u1(e)}function u1(e,t,r){for(var o=(e.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Yi;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||it;a=Yi;var c=it;if(Yi=l,(it=d)&&!c)for(q=s;q!==null;)l=q,d=l.child,l.tag===22&&l.memoizedState!==null?Qm(s):d!==null?(d.return=l,q=d):Qm(s);for(;i!==null;)q=i,u1(i),i=i.sibling;q=s,Yi=a,it=c}Gm(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Gm(e)}}function Gm(e){for(;q!==null;){var t=q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||Xl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Wt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Nm(t,i,o);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Nm(t,l,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&zs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}it||t.flags&512&&$d(t)}catch(g){Ne(t,t.return,g)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function Km(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function Qm(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Xl(4,t)}catch(d){Ne(t,r,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(d){Ne(t,s,d)}}var i=t.return;try{$d(t)}catch(d){Ne(t,i,d)}break;case 5:var l=t.return;try{$d(t)}catch(d){Ne(t,l,d)}}}catch(d){Ne(t,t.return,d)}if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}var o0=Math.ceil,Ol=Ln.ReactCurrentDispatcher,Wc=Ln.ReactCurrentOwner,Mt=Ln.ReactCurrentBatchConfig,de=0,Ge=null,Me=null,et=0,Ft=0,wo=lr(0),ze=0,Qs=null,Or=0,Jl=0,Zc=0,Ns=null,ht=null,Gc=0,Uo=1/0,xn=null,Pl=!1,Vd=null,Gn=null,Wi=!1,qn=null,Al=0,Os=0,qd=null,al=-1,dl=0;function ut(){return de&6?Ae():al!==-1?al:al=Ae()}function Kn(e){return e.mode&1?de&2&&et!==0?et&-et:Bg.transition!==null?(dl===0&&(dl=Zf()),dl):(e=pe,e!==0||(e=window.event,e=e===void 0?16:th(e.type)),e):1}function Xt(e,t,r,o){if(50<Os)throw Os=0,qd=null,Error(A(185));ai(e,r,o),(!(de&2)||e!==Ge)&&(e===Ge&&(!(de&2)&&(Jl|=r),ze===4&&Bn(e,et)),yt(e,o),r===1&&de===0&&!(t.mode&1)&&(Uo=Ae()+500,Gl&&ar()))}function yt(e,t){var r=e.callbackNode;Bx(e,t);var o=bl(e,e===Ge?et:0);if(o===0)r!==null&&im(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&im(r),t===1)e.tag===0?zg(Xm.bind(null,e)):jh(Xm.bind(null,e)),Mg(function(){!(de&6)&&ar()}),r=null;else{switch(Gf(o)){case 1:r=yc;break;case 4:r=Yf;break;case 16:r=gl;break;case 536870912:r=Wf;break;default:r=gl}r=v1(r,m1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function m1(e,t){if(al=-1,dl=0,de&6)throw Error(A(327));var r=e.callbackNode;if(Po()&&e.callbackNode!==r)return null;var o=bl(e,e===Ge?et:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ml(e,o);else{t=o;var s=de;de|=2;var i=f1();(Ge!==e||et!==t)&&(xn=null,Uo=Ae()+500,Tr(e,t));do try{l0();break}catch(a){p1(e,a)}while(!0);Pc(),Ol.current=i,de=s,Me!==null?t=0:(Ge=null,et=0,t=ze)}if(t!==0){if(t===2&&(s=xd(e),s!==0&&(o=s,t=Ud(e,s))),t===1)throw r=Qs,Tr(e,0),Bn(e,o),yt(e,Ae()),r;if(t===6)Bn(e,o);else{if(s=e.current.alternate,!(o&30)&&!s0(s)&&(t=Ml(e,o),t===2&&(i=xd(e),i!==0&&(o=i,t=Ud(e,i))),t===1))throw r=Qs,Tr(e,0),Bn(e,o),yt(e,Ae()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:yr(e,ht,xn);break;case 3:if(Bn(e,o),(o&130023424)===o&&(t=Gc+500-Ae(),10<t)){if(bl(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){ut(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Sd(yr.bind(null,e,ht,xn),t);break}yr(e,ht,xn);break;case 4:if(Bn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var l=31-Qt(o);i=1<<l,l=t[l],l>s&&(s=l),o&=~i}if(o=s,o=Ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*o0(o/1960))-o,10<o){e.timeoutHandle=Sd(yr.bind(null,e,ht,xn),o);break}yr(e,ht,xn);break;case 5:yr(e,ht,xn);break;default:throw Error(A(329))}}}return yt(e,Ae()),e.callbackNode===r?m1.bind(null,e):null}function Ud(e,t){var r=Ns;return e.current.memoizedState.isDehydrated&&(Tr(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=ht,ht=r,t!==null&&Hd(t)),e}function Hd(e){ht===null?ht=e:ht.push.apply(ht,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!Jt(i(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bn(e,t){for(t&=~Zc,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Qt(t),o=1<<r;e[r]=-1,t&=~o}}function Xm(e){if(de&6)throw Error(A(327));Po();var t=bl(e,0);if(!(t&1))return yt(e,Ae()),null;var r=Ml(e,t);if(e.tag!==0&&r===2){var o=xd(e);o!==0&&(t=o,r=Ud(e,o))}if(r===1)throw r=Qs,Tr(e,0),Bn(e,t),yt(e,Ae()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yr(e,ht,xn),yt(e,Ae()),null}function Kc(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(Uo=Ae()+500,Gl&&ar())}}function Pr(e){qn!==null&&qn.tag===0&&!(de&6)&&Po();var t=de;de|=1;var r=Mt.transition,o=pe;try{if(Mt.transition=null,pe=1,e)return e()}finally{pe=o,Mt.transition=r,de=t,!(de&6)&&ar()}}function Qc(){Ft=wo.current,Fe(wo)}function Tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ag(r)),Me!==null)for(r=Me.return;r!==null;){var o=r;switch(Rc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&wl();break;case 3:Vo(),Fe(vt),Fe(at),zc();break;case 5:$c(o);break;case 4:Vo();break;case 13:Fe(Te);break;case 19:Fe(Te);break;case 10:Ac(o.type._context);break;case 22:case 23:Qc()}r=r.return}if(Ge=e,Me=e=Qn(e.current,null),et=Ft=t,ze=0,Qs=null,Zc=Jl=Or=0,ht=Ns=null,wr!==null){for(t=0;t<wr.length;t++)if(r=wr[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}wr=null}return e}function p1(e,t){do{var r=Me;try{if(Pc(),sl.current=Nl,Rl){for(var o=Le.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Rl=!1}if(Nr=0,We=$e=Le=null,ks=!1,Zs=0,Wc.current=null,r===null||r.return===null){ze=1,Qs=t,Me=null;break}e:{var i=e,l=r.return,a=r,d=t;if(t=et,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var C=$m(l);if(C!==null){C.flags&=-257,zm(C,l,a,i,t),C.mode&1&&Dm(i,c,t),t=C,d=c;var _=t.updateQueue;if(_===null){var E=new Set;E.add(d),t.updateQueue=E}else _.add(d);break e}else{if(!(t&1)){Dm(i,c,t),Xc();break e}d=Error(A(426))}}else if(Ce&&a.mode&1){var N=$m(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),zm(N,l,a,i,t),Nc(qo(d,a));break e}}i=d=qo(d,a),ze!==4&&(ze=2),Ns===null?Ns=[i]:Ns.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=Kh(i,d,t);Rm(i,b);break e;case 1:a=d;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gn===null||!Gn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Qh(i,a,t);Rm(i,v);break e}}i=i.return}while(i!==null)}x1(r)}catch(j){t=j,Me===r&&r!==null&&(Me=r=r.return);continue}break}while(!0)}function f1(){var e=Ol.current;return Ol.current=Nl,e===null?Nl:e}function Xc(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(Or&268435455)&&!(Jl&268435455)||Bn(Ge,et)}function Ml(e,t){var r=de;de|=2;var o=f1();(Ge!==e||et!==t)&&(xn=null,Tr(e,t));do try{i0();break}catch(s){p1(e,s)}while(!0);if(Pc(),de=r,Ol.current=o,Me!==null)throw Error(A(261));return Ge=null,et=0,ze}function i0(){for(;Me!==null;)h1(Me)}function l0(){for(;Me!==null&&!Nx();)h1(Me)}function h1(e){var t=b1(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?x1(e):Me=t,Wc.current=null}function x1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=e0(r,t),r!==null){r.flags&=32767,Me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Me=null;return}}else if(r=Jg(r,t,Ft),r!==null){Me=r;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);ze===0&&(ze=5)}function yr(e,t,r){var o=pe,s=Mt.transition;try{Mt.transition=null,pe=1,a0(e,t,r,o)}finally{Mt.transition=s,pe=o}return null}function a0(e,t,r,o){do Po();while(qn!==null);if(de&6)throw Error(A(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Vx(e,i),e===Ge&&(Me=Ge=null,et=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Wi||(Wi=!0,v1(gl,function(){return Po(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Mt.transition,Mt.transition=null;var l=pe;pe=1;var a=de;de|=4,Wc.current=null,n0(e,r),c1(r,e),Tg(Fd),vl=!!yd,Fd=yd=null,e.current=r,r0(r),Ox(),de=a,pe=l,Mt.transition=i}else e.current=r;if(Wi&&(Wi=!1,qn=e,Al=s),i=e.pendingLanes,i===0&&(Gn=null),Mx(r.stateNode),yt(e,Ae()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Pl)throw Pl=!1,e=Vd,Vd=null,e;return Al&1&&e.tag!==0&&Po(),i=e.pendingLanes,i&1?e===qd?Os++:(Os=0,qd=e):Os=0,ar(),null}function Po(){if(qn!==null){var e=Gf(Al),t=Mt.transition,r=pe;try{if(Mt.transition=null,pe=16>e?16:e,qn===null)var o=!1;else{if(e=qn,qn=null,Al=0,de&6)throw Error(A(331));var s=de;for(de|=4,q=e.current;q!==null;){var i=q,l=i.child;if(q.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(q=c;q!==null;){var u=q;switch(u.tag){case 0:case 11:case 15:Rs(8,u,i)}var f=u.child;if(f!==null)f.return=u,q=f;else for(;q!==null;){u=q;var g=u.sibling,C=u.return;if(l1(u),u===c){q=null;break}if(g!==null){g.return=C,q=g;break}q=C}}}var _=i.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var N=E.sibling;E.sibling=null,E=N}while(E!==null)}}q=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,q=l;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rs(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,q=b;break e}q=i.return}}var m=e.current;for(q=m;q!==null;){l=q;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,q=p;else e:for(l=m;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(j){Ne(a,a.return,j)}if(a===l){q=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,q=v;break e}q=a.return}}if(de=s,ar(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Ul,e)}catch{}o=!0}return o}finally{pe=r,Mt.transition=t}}return!1}function Jm(e,t,r){t=qo(r,t),t=Kh(e,t,1),e=Zn(e,t,1),t=ut(),e!==null&&(ai(e,1,t),yt(e,t))}function Ne(e,t,r){if(e.tag===3)Jm(e,e,r);else for(;t!==null;){if(t.tag===3){Jm(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Gn===null||!Gn.has(o))){e=qo(r,e),e=Qh(t,e,1),t=Zn(t,e,1),e=ut(),t!==null&&(ai(t,1,e),yt(t,e));break}}t=t.return}}function d0(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(et&r)===r&&(ze===4||ze===3&&(et&130023424)===et&&500>Ae()-Gc?Tr(e,0):Zc|=r),yt(e,t)}function g1(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var r=ut();e=Sn(e,t),e!==null&&(ai(e,t,r),yt(e,r))}function c0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),g1(e,r)}function u0(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),g1(e,r)}var b1;b1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)bt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return bt=!1,Xg(e,t,r);bt=!!(e.flags&131072)}else bt=!1,Ce&&t.flags&1048576&&yh(t,_l,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ll(e,t),e=t.pendingProps;var s=$o(t,at.current);Oo(t,r),s=Vc(null,t,o,e,s,r);var i=qc();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(o)?(i=!0,Sl(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ic(t),s.updater=Kl,t.stateNode=s,s._reactInternals=t,Rd(t,o,e,r),t=Pd(null,t,o,!0,i,r)):(t.tag=0,Ce&&i&&kc(t),ct(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(ll(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=p0(o),e=Wt(o,e),s){case 0:t=Od(null,t,o,e,r);break e;case 1:t=qm(null,t,o,e,r);break e;case 11:t=Bm(null,t,o,e,r);break e;case 14:t=Vm(null,t,o,Wt(o.type,e),r);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Wt(o,s),Od(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Wt(o,s),qm(e,t,o,s,r);case 3:e:{if(t1(t),e===null)throw Error(A(387));o=t.pendingProps,i=t.memoizedState,s=i.element,Ch(e,t),Ll(t,o,null,r);var l=t.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=qo(Error(A(423)),t),t=Um(e,t,o,r,s);break e}else if(o!==s){s=qo(Error(A(424)),t),t=Um(e,t,o,r,s);break e}else for(St=Wn(t.stateNode.containerInfo.firstChild),_t=t,Ce=!0,Kt=null,r=Lh(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(zo(),o===s){t=Cn(e,t,r);break e}ct(e,t,o,r)}t=t.child}return t;case 5:return kh(t),e===null&&Td(t),o=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,wd(o,s)?l=null:i!==null&&wd(o,i)&&(t.flags|=32),e1(e,t),ct(e,t,l,r),t.child;case 6:return e===null&&Td(t),null;case 13:return n1(e,t,r);case 4:return Dc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Bo(t,null,o,r):ct(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Wt(o,s),Bm(e,t,o,s,r);case 7:return ct(e,t,t.pendingProps,r),t.child;case 8:return ct(e,t,t.pendingProps.children,r),t.child;case 12:return ct(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,be(El,o._currentValue),o._currentValue=l,i!==null)if(Jt(i.value,l)){if(i.children===s.children&&!vt.current){t=Cn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=jn(-1,r&-r),d.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?d.next=d:(d.next=u.next,u.next=d),c.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),Ld(i.return,r,t),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ld(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ct(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,Oo(t,r),s=It(s),o=o(s),t.flags|=1,ct(e,t,o,r),t.child;case 14:return o=t.type,s=Wt(o,t.pendingProps),s=Wt(o.type,s),Vm(e,t,o,s,r);case 15:return Xh(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Wt(o,s),ll(e,t),t.tag=1,jt(o)?(e=!0,Sl(t)):e=!1,Oo(t,r),Eh(t,o,s),Rd(t,o,s,r),Pd(null,t,o,!0,e,r);case 19:return r1(e,t,r);case 22:return Jh(e,t,r)}throw Error(A(156,t.tag))};function v1(e,t){return Hf(e,t)}function m0(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,r,o){return new m0(e,t,r,o)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p0(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bc)return 11;if(e===vc)return 14}return 2}function Qn(e,t){var r=e.alternate;return r===null?(r=At(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function cl(e,t,r,o,s,i){var l=2;if(o=e,typeof e=="function")Jc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case po:return Lr(r.children,s,i,t);case gc:l=8,s|=8;break;case td:return e=At(12,r,t,s|2),e.elementType=td,e.lanes=i,e;case nd:return e=At(13,r,t,s),e.elementType=nd,e.lanes=i,e;case rd:return e=At(19,r,t,s),e.elementType=rd,e.lanes=i,e;case Tf:return ea(r,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _f:l=10;break e;case Ef:l=9;break e;case bc:l=11;break e;case vc:l=14;break e;case Dn:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=At(l,r,t,s),t.elementType=e,t.type=o,t.lanes=i,t}function Lr(e,t,r,o){return e=At(7,e,o,t),e.lanes=r,e}function ea(e,t,r,o){return e=At(22,e,o,t),e.elementType=Tf,e.lanes=r,e.stateNode={isHidden:!1},e}function qa(e,t,r){return e=At(6,e,null,t),e.lanes=r,e}function Ua(e,t,r){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f0(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function eu(e,t,r,o,s,i,l,a,d){return e=new f0(e,t,r,a,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=At(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(i),e}function h0(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function j1(e){if(!e)return er;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(jt(r))return vh(e,r,t)}return t}function y1(e,t,r,o,s,i,l,a,d){return e=eu(r,o,!0,e,s,i,l,a,d),e.context=j1(null),r=e.current,o=ut(),s=Kn(r),i=jn(o,s),i.callback=t??null,Zn(r,i,s),e.current.lanes=s,ai(e,s,o),yt(e,o),e}function ta(e,t,r,o){var s=t.current,i=ut(),l=Kn(s);return r=j1(r),t.context===null?t.context=r:t.pendingContext=r,t=jn(i,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Zn(s,t,l),e!==null&&(Xt(e,s,l,i),ol(e,s,l)),l}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function tu(e,t){ep(e,t),(e=e.alternate)&&ep(e,t)}function x0(){return null}var F1=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}na.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ta(e,t,null,null)};na.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){ta(null,e,null,null)}),t[wn]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zn.length&&t!==0&&t<zn[r].priority;r++);zn.splice(r,0,e),r===0&&eh(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tp(){}function g0(e,t,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var c=Il(l);i.call(c)}}var l=y1(t,o,e,0,null,!1,!1,"",tp);return e._reactRootContainer=l,e[wn]=l.current,qs(e.nodeType===8?e.parentNode:e),Pr(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var c=Il(d);a.call(c)}}var d=eu(e,0,!1,null,null,!1,!1,"",tp);return e._reactRootContainer=d,e[wn]=d.current,qs(e.nodeType===8?e.parentNode:e),Pr(function(){ta(t,d,r,o)}),d}function oa(e,t,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=Il(l);a.call(d)}}ta(t,l,e,s)}else l=g0(r,t,e,s,o);return Il(l)}Kf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ys(t.pendingLanes);r!==0&&(Fc(t,r|1),yt(t,Ae()),!(de&6)&&(Uo=Ae()+500,ar()))}break;case 13:Pr(function(){var o=Sn(e,1);if(o!==null){var s=ut();Xt(o,e,1,s)}}),tu(e,1)}};wc=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var r=ut();Xt(t,e,134217728,r)}tu(e,134217728)}};Qf=function(e){if(e.tag===13){var t=Kn(e),r=Sn(e,t);if(r!==null){var o=ut();Xt(r,e,t,o)}tu(e,t)}};Xf=function(){return pe};Jf=function(e,t){var r=pe;try{return pe=e,t()}finally{pe=r}};pd=function(e,t,r){switch(t){case"input":if(id(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=Zl(o);if(!s)throw Error(A(90));kf(o),id(o,s)}}}break;case"textarea":Nf(e,r);break;case"select":t=r.value,t!=null&&Lo(e,!!r.multiple,t,!1)}};$f=Kc;zf=Pr;var b0={usingClientEntryPoint:!1,Events:[ci,go,Zl,If,Df,Kc]},ms={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},v0={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qf(e),e===null?null:e.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||x0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{Ul=Zi.inject(v0),an=Zi}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;Tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(A(200));return h0(e,t,null,r)};Tt.createRoot=function(e,t){if(!ru(e))throw Error(A(299));var r=!1,o="",s=F1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=eu(e,1,!1,null,null,r,!1,o,s),e[wn]=t.current,qs(e.nodeType===8?e.parentNode:e),new nu(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=qf(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return Pr(e)};Tt.hydrate=function(e,t,r){if(!ra(t))throw Error(A(200));return oa(null,e,t,!0,r)};Tt.hydrateRoot=function(e,t,r){if(!ru(e))throw Error(A(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=F1;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=y1(t,null,e,1,r??null,s,!1,i,l),e[wn]=t.current,qs(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new na(t)};Tt.render=function(e,t,r){if(!ra(t))throw Error(A(200));return oa(null,e,t,!1,r)};Tt.unmountComponentAtNode=function(e){if(!ra(e))throw Error(A(40));return e._reactRootContainer?(Pr(function(){oa(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Kc;Tt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!ra(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return oa(e,t,r,!1,o)};Tt.version="18.2.0-next-9e3b772b8-20220608";function w1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w1)}catch(e){console.error(e)}}w1(),yf.exports=Tt;var ou=yf.exports;const j0=Vr(ou),y0=cf({__proto__:null,default:j0},[ou]);var np=ou;Ja.createRoot=np.createRoot,Ja.hydrateRoot=np.hydrateRoot;var F0=Object.defineProperty,w0=(e,t,r)=>t in e?F0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ha=(e,t,r)=>(w0(e,typeof t!="symbol"?t+"":t,r),r);function S0(e={},t={},r={}){return Object.entries(t).reduce((o,[s,i])=>{const l=r[i];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function C0(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((r,o)=>{const s=e[o]||L0(`Cannot expose non-existent action method: ${o}`);return r[o]=s.bind(e),r},{})}function _0(e,t){const r=e.debug??t.debug,o=rp(e.debugPrefix??t.debugPrefix,e),s=rp(e.debugColor??t.debugColor,e);return r?o?(i,...l)=>console.log(`%c${o}%c${i}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function E0(e){return Array.isArray(e)}function S1(e){return typeof e=="function"}function rp(e,t){return S1(e)?e(t):e}function T0(e){return E0(e)?e:[e]}function L0(...e){throw new Error(e.join(""))}const su=(e,t={})=>{const r=wt.createContext(t);return{Context:r,Provider:o=>n.jsx(e,{...o,render:s=>n.jsx(r.Provider,{value:s,children:o.children})}),Consumer:o=>s=>n.jsx(r.Consumer,{children:i=>n.jsx(o,{...i,...s})}),Children:({children:o})=>T0(o).map((s,i)=>S1(s)?n.jsx(r.Consumer,{children:s},i):s),Use:()=>wt.useContext(r)}};let ul=class extends wt.Component{constructor(t){super(t);const r=this.constructor;this.debug=_0(t,r),this.state=S0(r.initialState,r.initialProps,t),this.actions=C0(this,r.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Ha(ul,"initialState",{}),Ha(ul,"initialProps",{}),Ha(ul,"actions",[]);function C1(e){return typeof e=="boolean"}function Hr(e){return typeof e=="string"}function Xs(e){return Array.isArray(e)}function sa(e){return typeof e=="function"}function k0(e){return e instanceof RegExp}function Yr(e){return typeof e=="object"&&!Xs(e)&&!_1(e)}function R0(e){return e===void 0}function _1(e){return e===null}function gt(e){return!(R0(e)||_1(e))}function N0(e){return!gt(e)}function iu(...e){throw new Error(e.join(""))}const op=(e,...t)=>sa(e)?e(...t):e;function Ao(){}function O0(){return Intl.DateTimeFormat().resolvedOptions().locale}O0();function E1(e,t=/,\s*|\s+/){return N0(e)?[]:Hr(e)?e.length?e.split(t):[]:Xs(e)?e:[e]}function T1(e,t=!0,r={}){return Yr(e)?e:E1(e).reduce((o,s)=>(o[s]=sa(t)?t(s):t,o),r)}function P0(e){if(sa(e))return e;if(k0(e))return t=>e.test(t);if(Yr(e))return t=>!!e[t];if(Xs(e)||Hr(e)){const t=T1(e);return r=>!!t[r]}iu("Invalid selector() specification: "+e)}const A0=(e,t,r={})=>{let o={},s={delete:!1,...r};const i=P0(t);return Object.keys(e).map(l=>{if(i(l)){let a=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(a=s.value(a)),o[l]=a}}),o};function tr(e){return new Promise(t=>setTimeout(t,e))}const M0="",I0="blur",mi="changed",D0="controls",$0="disabled",ia="focus",z0="fulfilled",pi="invalid",L1="Optional",B0="radio",k1="Required",V0="A value is required",sp="reset",fi="submitted",Ko="submitting",lu="text",hi="valid",dr="validating",q0=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],U0=["id","name","action","method","encType"];let R1=class extends ul{constructor(t){super(t),this.newStatus=this.constructor.newStatus(t),this.state={status:this.newStatus(sp)}}setStatus(t,r={},o=Ao){this.mounted&&this.setState(s=>({...sa(r)?r(s):r,status:this.newStatus(t,s.status)}),o)}setResetState(t,r){this.setStatus(sp,t,r)}setChangedState(t,r){this.setStatus(mi,t,r)}setValidatingState(t,r){this.setStatus(dr,t,r)}setInvalidState(t,r){this.setStatus(pi,t,r)}setValidState(t,r){this.setStatus(hi,t,r)}};function N1(e,t){return t.reduce((r,o)=>(gt(e[o])&&(r[o]=e[o]),r),{})}const la=e=>N1(e,q0),H0=e=>N1(e,U0),O1=e=>e.filter(gt).join(" "),Y0=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),un=(...e)=>O1(e.flatMap(t=>Yr(t)?Y0(t):t)),aa=e=>un(e.inputClass,e.inline&&"inline"),So=(e,t,r=t)=>(e==null?void 0:e[t])||r,W0=(e,t={},...r)=>O1(Object.entries(e).reduce((o,[s,i])=>(i&&o.push(t[s]||s),o),[...r])),P1=e=>{const{status:t,className:r,classes:o,required:s,showRequired:i,showOptional:l}=e;return W0(t,o,So(o,"field"),r,i&&s?"required":null,l&&!s?"optional":null)},Z0=(e,...t)=>{const{gap:r,space:o,stack:s,className:i}=e;return i||(o?un("flex","space",...t):un("flex",r?`gap-v-none gap-h-${r}`:null,s?`stack-${s}`:null,...t))},G0=(e,...t)=>{const{grid:r,gap:o,stack:s,className:i}=e;return i||(r?un(`grid-${r}`,o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t):un(...t))},K0={boolean:!0,string:!0,number:!0},A1=e=>K0[typeof e]?{value:e,text:e}:e,Dl=(...e)=>function(...t){for(let r of e.filter(gt))r(...t)};function ip(e){if(C1(e))return[1,!e];if(gt(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const Q0=(e,t)=>Hr(e)?{[t]:e}:e,X0={submittingClass:Ko,validatingClass:dr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},lp={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:V0,requiredLabel:k1,optionalLabel:L1},J0=T1(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),da={[hi]:!1,[pi]:!1},e4={...da,[mi]:!0},t4={...da,[dr]:!0},n4={[hi]:!1,[pi]:!0,[dr]:!1},r4={[hi]:!0,[pi]:!1,[dr]:!1},o4={[ia]:!1},s4={[ia]:!0},i4={[Ko]:!0,[fi]:!1},l4={[Ko]:!1,[fi]:!0},M1={changed:e4,validating:t4,invalid:n4,valid:r4},I1=e=>(t,r={})=>({...r,...e[t]||{[t]:!0}}),a4=()=>{const e={...da,[mi]:!1,[dr]:!1,[fi]:!1,[Ko]:!1};return I1({...M1,reset:e,submitting:i4,submitted:l4})},d4=(e={})=>{const t={...da,[mi]:!1,[dr]:!1,[ia]:!1,[$0]:e.disabled||!1};return I1({...M1,reset:t,focus:s4,blur:o4})},c4=({status:e,any:t=!1,...r})=>{const o=[mi,dr,hi,pi,Ko,fi].filter(s=>gt(r[s])).map(s=>e[s]);return t?o.some(Boolean):o.every(Boolean)};class lo extends R1{constructor(t){super(t),this.fields={};const{hidden:r={}}=t,o={...r},s={...X0,...this.props};this.state={...s,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,r){var i,l;const o=((i=this.props.fields)==null?void 0:i[t])??{},s=r.value??((l=this.props.values)==null?void 0:l[t]);return{name:t,...A0(this.props,J0),...o,...r,value:s}}attachField(t,r){this.debug(`attaching ${t} field`),this.fields[t]=r,this.setState(o=>({values:{...o.values,[t]:r.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,r){this.setStatus(Ko,t,r)}setSubmittedState(t,r){this.setStatus(fi,t,r)}setFocus(t,r){var o;r==null||r.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,r){this.debug(`setValue(${t}, ${r})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:r}}))}setValues(t,r){this.debug("setValues():",t),r==null||r.preventDefault(),Object.entries(t).forEach(([o,s])=>{var i;return(i=this.fields[o])==null?void 0:i.setValue(s)})}setHidden(t){const r={...this.state.hidden,...t};this.setState({hidden:r})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(r=>this.handleSubmit(r)).catch(r=>this.debug("Form is NOT valid:",r))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,r)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((s,{status:i,value:l,reason:a})=>(i===z0?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(a),s),{values:{...this.state.values},errors:[]})).then(o=>{var s;return this.debug("field validation complete: ",o),(s=o.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",o),r(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(i=>t({...o,values:i})).catch(i=>r(i))):t(o)})}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const r=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",r),this.setSubmittedState(),r!=null&&r.ok||(r==null?void 0:r.status)===200)this.debug(`Success response ok:${r==null?void 0:r.ok} status:${r==null?void 0:r.status}`),this.handleSuccess(r);else if((r==null?void 0:r.status)>=400&&r.status<=500)this.debug(`Error response status:${r==null?void 0:r.status}`),this.handleError(r.data);else throw new Error(`Unknown response: ${r==null?void 0:r.status}`)}catch(r){this.debug("onSubmit error:",r),this.setSubmittedState(),this.handleError(Hr(r)?{error:r}:r instanceof Error?{error:r.message}:r)}})}handleSuccess(t){this.debug("handleSuccess()",t);const r=this.props.onSuccess||Ao;this.setValidState({},Dl(()=>r(t,this),this.props.resetOnSuccess?()=>this.reset():null))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const r=Xs(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||Ao;this.setInvalidState(t,Dl(()=>o(t),r?()=>r.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const r=t.reduce((o,s)=>{const i=s.name??s.param??s.field,{message:l}=s,a=i&&this.fields[i];return a&&(s.label||(s.label=a.props.label),a.setInvalidState({message:l}),o.push(a)),o},[]);return this.state.focusInvalidField&&r.length?r[0]:null}sanitiseErrors(t){if(Yr(t)&&(t=Object.entries(t).map(([r,o])=>({name:r,...Q0(o,"message")}))),!Xs(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(r=>r.message??(r.message=r.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}Ut(lo,"newStatus",a4),Ut(lo,"debug",!1),Ut(lo,"debugPrefix","Form > "),Ut(lo,"debugColor","rebeccapurple"),Ut(lo,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const u4=su(lo),{Context:nA,Provider:m4,Consumer:p4,Children:f4,Use:mn}=u4,h4=({children:e})=>{const t=mn(),r=H0(t),{submit:o,className:s}=t;return n.jsx("form",{className:s,...r,onSubmit:o,noValidate:!0,children:n.jsx(f4,{children:e})})},w=({children:e,Layout:t=h4,...r})=>n.jsx(m4,{...r,children:n.jsx(t,{children:e})}),x4=e=>{const{id:t,value:r}=e;return{...e,id:t||T.useId(),value:r??e.default??M0}};class ao extends R1{constructor(t){super(t),this.name=t.name;const{value:r}=t,o=r;this.form=this.props.form,this.state={...this.state,initialValue:o,value:r,error:null},this.debug("initial state:",this.state),this.inputRef=T.createRef(),this.resetRef=T.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):Ao}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,r){return this.setStatus(ia,t,r)}setBlurState(t,r){return this.setStatus(I0,t,r)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var r,o;t==null||t.preventDefault(),(o=(r=this.inputRef)==null?void 0:r.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const r=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:s,validateOnInvalid:i=!0,minValidateLength:l=1}=this.props,[a]=ip(r);let d=s||i&&o;a<l&&!o&&(d=!1),this.setChangedState({value:r},()=>{this.form.setValue(this.props.name,r),d?this.validation(this.on.change):this.on.change()})}setValue(t,r){r==null||r.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const r=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${r}`),this.form.setValue(this.props.name,r),this.setResetState({value:r,message:this.props.message},()=>{var o,s;return(s=(o=this.resetRef)==null?void 0:o.current)==null?void 0:s.reset()}),r}validation(t){this.validate(t).then(Ao).catch(Ao)}validate(t){this.debug("validate()");const r={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,Dl(this.on.valid,t)),{...r,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,Dl(this.on.invalid,t)),{...r,...o}})}validator(){return async(t,r)=>{const{value:o=""}=this.state,{validate:s,required:i,requiredMessage:l,validMessage:a}={...lp,...this.props},[,d]=ip(o);if(this.setValidatingState(),s)return await this.validateValidator(t,r,s,a);if(d)return await this.validateEmpty(t,r,i,a,l);this.debug("no validation defined"),t({value:o,message:a})}}async validateValidator(t,r,o,s){this.debug("calling validate function");const i=this.getContext();try{this.debug(`calling validate function with value [${i.value}]`);const l=await o(i.value,i,t,r);this.debug("validate function passed:",l),t(Yr(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const a=Hr(l)?l:l.message;this.debug("rejecting with message:",a),r({message:a})}}validateEmpty(t,r,o,s,i){o?(this.debug("failing validation - required field is empty"),r({message:i})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,r){r==null||r.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,r){r==null||r.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}getContext(){const t={...lp,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}Ut(ao,"newStatus",d4),Ut(ao,"debug",!1),Ut(ao,"debugPrefix",t=>`Field [${t.name}] > `),Ut(ao,"debugColor","teal"),Ut(ao,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const g4=su(ao),{Context:rA,Provider:b4,Consumer:oA,Children:D1,Use:rt}=g4,Wr=({field:e=rt()})=>{const{label:t,id:r,required:o}=e,s=e.showRequired&&o,i=e.showOptional&&!o,l=t||s||i,a=e.labelClass,d={};return s&&e.requiredLabel!==k1&&(d["--required-text"]=`"${e.requiredLabel}"`),i&&e.optionalLabel!==L1&&(d["--optional-text"]=`"${e.optionalLabel}"`),l&&n.jsx("label",{htmlFor:r,className:a,style:d,children:t||n.jsx("span",{children:" "})})},v4=e=>t=>e.onChange(t.target.value),j4=e=>t=>e.onChange(t.target.checked),nr={default:v4,checkbox:j4},y4=({field:e=rt()})=>{const{id:t,text:r,inline:o,border:s,labelClass:i,type:l="checkbox",handler:a=nr[l]||nr.default}=e,d=la(e),c=un("checkbox",i,{inline:o,border:s});return n.jsxs("label",{htmlFor:t,className:c,children:[n.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:a(e),className:aa(e),...d,checked:e.value}),r]})},$1=({field:e=rt()})=>n.jsx("input",{type:"hidden",name:e.name,value:e.value}),F4=({field:e=rt()})=>{const{inline:t,border:r,options:o=[],inputClass:s,optionClass:i,optionsClass:l="options",type:a="radio",handler:d=nr[a]||nr.default}=e,c=la(e);return n.jsx("div",{className:un(l),children:o.map((u,f)=>{u=A1(u);const g=`${e.id}-${u.value}`,C=e.value==u.value,E=(e.value?C:f==0)?e.inputRef:null,N=un("radio",i,u.className,{inline:t,border:r});return n.jsxs("label",{className:N,disabled:u.disabled,htmlFor:g,children:[n.jsx("input",{type:a,className:s,ref:E,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:d(e),...c,id:g,checked:C,value:u.value}),u.text]},u.value)})})},w4=({field:e=rt()})=>{const{options:t=[],placeholder:r,type:o="select",optionClass:s="option",handler:i=nr[o]||nr.default}=e,l=la(e);return n.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:aa(e),onChange:i(e),...l,value:e.value,required:e.required||!!r,children:[!!r&&n.jsx("option",{value:"",hidden:!0,disabled:!0,children:r}),t.map(a=>(a=A1(a),n.jsx("option",{className:s,value:a.value,disabled:a.disabled,children:a.text},a.value)))]})},Js=({field:e=rt()})=>{const{type:t=lu,handler:r=nr[t]||nr.default}=e,o=la(e);return n.jsx("input",{type:t,ref:e.inputRef,className:aa(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:r(e),...o})},S4=({field:e=rt()})=>{const{rows:t=5,cols:r=20}=e;return n.jsx("textarea",{id:e.id,ref:e.inputRef,className:aa(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:r})},ei={default:Js,checkbox:y4,hidden:$1,radio:F4,select:w4,text:Js,textarea:S4},C4=(e,t)=>ei[e]=t,_4=({field:e=rt()})=>n.jsx("div",{className:un("prefix",e.prefixClass),children:e.prefix}),E4=({field:e=rt()})=>n.jsx("div",{className:un("suffix",e.suffixClass),children:e.suffix}),T4=({field:e=rt()})=>{const{classes:t,prefix:r,suffix:o,inputsClass:s,inline:i,type:l=lu,Prefix:a=_4,Suffix:d=E4}=e,c=ei[l]||ei.default;let u=[So(t,"inputs")];gt(r)&&u.push(So(t,"prefixed")),gt(o)&&u.push(So(t,"suffixed")),i&&u.push(So(t,"inline")),gt(s)&&u.push(s);const f=u.join(" ");return n.jsxs("div",{className:f,children:[gt(r)&&n.jsx(a,{field:e}),n.jsx(c,{field:e}),gt(o)&&n.jsx(d,{field:e})]})},ca=({field:e=rt()})=>{const{prefix:t,suffix:r,type:o=lu}=e,s=ei[o]||ei.default;return o==B0?n.jsx(s,{field:e}):gt(t)||gt(r)?n.jsx(T4,{}):n.jsx(s,{field:e})},xi=({field:e=rt()})=>{const{help:t,message:r,classes:o}=e,s=r??t,i=So(o,"help");return s?n.jsx("div",{className:i,children:s}):null},cr=({field:e=rt(),children:t})=>{const{type:r,Label:o=Wr,Message:s=xi,Input:i=ca}=e,l=P1(e);return r==="hidden"?n.jsx($1,{field:e}):n.jsx("div",{className:l,children:t||n.jsxs(n.Fragment,{children:[n.jsx(o,{field:e}),n.jsx(i,{field:e}),n.jsx(s,{field:e})]})})},x=({name:e,children:t,...r})=>{const o=mn(),s=x4(o.fieldSpec(e,r)),i=s.Layout||cr;return n.jsx(b4,{form:o,...s,children:t?n.jsx(D1,{children:t}):n.jsx(i,{})})},nt=({names:e,className:t,grid:r=!1,gap:o=4,stack:s,...i})=>{const l=E1(e);return C1(r)&&r&&(r=l.length),n.jsx("div",{className:G0({grid:r,gap:o,stack:s,props:i},t),children:l.map(a=>n.jsx(x,{name:a,...i},a))})},Ar=({className:e="",legend:t,children:r,fields:o,...s})=>n.jsxs("fieldset",{className:e,children:[!!t&&n.jsx("legend",{children:t}),!!o&&n.jsx(nt,{names:o,...s}),r]}),L4=({children:e,...t})=>c4(t)&&e,kn=p4(L4),k4=e=>n.jsx(kn,{changed:!0,...e}),pn=({values:e=!0,status:t=!1,all:r=!1,className:o="border bdr-2 shadow-2 mar-t-4 pad-4",title:s="Form Debugging",valuesTitle:i="Values",statusTitle:l="Status",...a})=>{const d=mn();return n.jsxs("div",{className:o,children:[s&&n.jsx("h3",{className:"mar-t-none",children:s}),n.jsxs("div",{className:"grid-1 gap-4",children:[e&&n.jsxs("div",{children:[i&&n.jsx("h4",{children:i}),n.jsx(ap,{rows:Object.entries(d.values),...a})]}),(t||r)&&d.status&&n.jsxs("div",{children:[l&&n.jsx("h4",{children:l}),n.jsx(ap,{title:"Status",rows:Object.entries(d.status),...a})]})]})]})},ap=({rows:e,children:t,color:r="brand",tableClass:o=`${r} shaded celled wide small pad-none mar-b-0`,...s})=>n.jsx("table",{className:o,children:n.jsx("tbody",{children:t||e.map(([i,l])=>n.jsx(R4,{name:i,value:l,...s},i))})}),R4=({name:e,value:t,keyClass:r="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>n.jsxs("tr",{valign:"top",children:[n.jsx("th",{className:r,children:e}),n.jsx("td",{className:o,children:n.jsx(N4,{value:t})})]}),N4=({value:e})=>Yr(e)?JSON.stringify(e):gt(e)?e.toString():"",O4=({error:e})=>{const t=e.label||e.name;return n.jsxs(n.Fragment,{children:[!!t&&n.jsxs("b",{children:[t,": "]}),e.message]})},P4=({error:e})=>Hr(e)?e:n.jsx(O4,{error:e}),Ve=({form:e=mn(),title:t=e.errorsTitle,prompt:r=e.errorsPrompt,fieldErrors:o=!1,className:s="error alert border"})=>{const{error:i,errors:l,Error:a=P4}=e,d=!!i,c=(o?l.length:0)+(d?1:0);return c!==0?n.jsxs("div",{className:s,children:[!!t&&n.jsx("div",{className:"headline",children:op(t,c)}),n.jsxs("div",{children:[d&&n.jsx("h4",{children:n.jsx(a,{error:i})}),o&&l.length!==0&&n.jsxs(n.Fragment,{children:[!!r&&n.jsx("p",{className:"wide",children:op(r,l.length)}),n.jsx("ul",{children:l.map((f,g)=>n.jsx("li",{children:n.jsx(a,{error:f})},g))})]})]})]}):null},A4=({children:e})=>n.jsx(D1,{children:e}),z1=({onClick:e,children:t,text:r="Button",type:o="button",...s})=>n.jsx("button",{type:o,onClick:e,...s,children:t||r}),ur=({type:e="reset",text:t="Reset",className:r="reset",Button:o=z1,...s})=>{const{reset:i}=mn();return n.jsx(o,{type:e,text:t,className:r,onClick:i,...s})},K=({type:e="submit",text:t="Submit",className:r="submit",Button:o=z1,...s})=>{const{submit:i,status:l}=mn();return n.jsx(o,{type:e,text:t,className:r,onClick:i,disabled:l.submitting,...s})},fe=({className:e,gap:t=4,space:r=!1,reset:o={},submit:s={}})=>n.jsxs("div",{className:Z0({className:e,gap:t,space:r},D0),children:[n.jsx(ur,{...o}),n.jsx(K,{...s})]}),M4=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two",value:"Hello World!"}),n.jsx(k4,{children:n.jsx(fe,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),I4=`import { Form, Field, Changed, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Changed, ResetSubmit } from '@abw/badger-form'

const ChangedExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two" value="Hello World!"/>
    <Changed>
      <ResetSubmit
        space
        reset={{ className: 'outline' }}
        submit={{ className: 'blue' }}
      />
    </Changed>
  </Form>

export default ChangedExample`;function D4(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function $4(e,t){if(e==null)return{};var r=D4(e,t),o,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)o=i[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Yd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function z4(e){if(Array.isArray(e))return Yd(e)}function B4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function V4(e,t){if(e){if(typeof e=="string")return Yd(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Yd(e,t)}}function q4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U4(e){return z4(e)||B4(e)||V4(e)||q4()}function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function H4(e,t){if(ti(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(ti(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Y4(e){var t=H4(e,"string");return ti(t)=="symbol"?t:String(t)}function B1(e,t,r){return t=Y4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wd(){return Wd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Wd.apply(this,arguments)}function dp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function Co(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dp(Object(r),!0).forEach(function(o){B1(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function W4(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Ya={};function Z4(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Ya[t]||(Ya[t]=W4(e)),Ya[t]}function G4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=e.filter(function(i){return i!=="token"}),s=Z4(o);return s.reduce(function(i,l){return Co(Co({},i),r[l])},t)}function cp(e){return e.join(" ")}function K4(e,t){var r=0;return function(o){return r+=1,o.map(function(s,i){return V1({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(r,"-").concat(i)})})}}function V1(e){var t=e.node,r=e.stylesheet,o=e.style,s=o===void 0?{}:o,i=e.useInlineStyles,l=e.key,a=t.properties,d=t.type,c=t.tagName,u=t.value;if(d==="text")return u;if(c){var f=K4(r,i),g;if(!i)g=Co(Co({},a),{},{className:cp(a.className)});else{var C=Object.keys(r).reduce(function(b,m){return m.split(".").forEach(function(p){b.includes(p)||b.push(p)}),b},[]),_=a.className&&a.className.includes("token")?["token"]:[],E=a.className&&_.concat(a.className.filter(function(b){return!C.includes(b)}));g=Co(Co({},a),{},{className:cp(E)||void 0,style:G4(a.className,Object.assign({},a.style,s),r)})}var N=f(t.children);return wt.createElement(c,Wd({key:l},g),N)}}const Q4=function(e,t){var r=e.listLanguages();return r.indexOf(t)!==-1};var X4=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function up(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function on(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?up(Object(r),!0).forEach(function(o){B1(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):up(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var J4=/\n/g;function e5(e){return e.match(J4)}function t5(e){var t=e.lines,r=e.startingLineNumber,o=e.style;return t.map(function(s,i){var l=i+r;return wt.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function n5(e){var t=e.codeString,r=e.codeStyle,o=e.containerStyle,s=o===void 0?{float:"left",paddingRight:"10px"}:o,i=e.numberStyle,l=i===void 0?{}:i,a=e.startingLineNumber;return wt.createElement("code",{style:Object.assign({},r,s)},t5({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:a}))}function r5(e){return"".concat(e.toString().length,".25em")}function q1(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function U1(e,t,r){var o={display:"inline-block",minWidth:r5(r),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,i=on(on({},o),s);return i}function ml(e){var t=e.children,r=e.lineNumber,o=e.lineNumberStyle,s=e.largestLineNumber,i=e.showInlineLineNumbers,l=e.lineProps,a=l===void 0?{}:l,d=e.className,c=d===void 0?[]:d,u=e.showLineNumbers,f=e.wrapLongLines,g=typeof a=="function"?a(r):a;if(g.className=c,r&&i){var C=U1(o,r,s);t.unshift(q1(r,C))}return f&u&&(g.style=on(on({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:t}}function H1(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var s=e[o];if(s.type==="text")r.push(ml({children:[s],className:U4(new Set(t))}));else if(s.children){var i=t.concat(s.properties.className);H1(s.children,i).forEach(function(l){return r.push(l)})}}return r}function o5(e,t,r,o,s,i,l,a,d){var c,u=H1(e.value),f=[],g=-1,C=0;function _(j,h){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ml({children:j,lineNumber:h,lineNumberStyle:a,largestLineNumber:l,showInlineLineNumbers:s,lineProps:r,className:y,showLineNumbers:o,wrapLongLines:d})}function E(j,h){if(o&&h&&s){var y=U1(a,h,l);j.unshift(q1(h,y))}return j}function N(j,h){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||y.length>0?_(j,h,y):E(j,h)}for(var b=function(){var h=u[C],y=h.children[0].value,R=e5(y);if(R){var k=y.split(`
`);k.forEach(function(M,I){var J=o&&f.length+i,ee={type:"text",value:"".concat(M,`
`)};if(I===0){var me=u.slice(g+1,C).concat(ml({children:[ee],className:h.properties.className})),we=N(me,J);f.push(we)}else if(I===k.length-1){var ve=u[C+1]&&u[C+1].children&&u[C+1].children[0],ie={type:"text",value:"".concat(M)};if(ve){var P=ml({children:[ie],className:h.properties.className});u.splice(C+1,0,P)}else{var z=[ie],B=N(z,J,h.properties.className);f.push(B)}}else{var U=[ee],G=N(U,J,h.properties.className);f.push(G)}}),g=C}C++};C<u.length;)b();if(g!==u.length-1){var m=u.slice(g+1,u.length);if(m&&m.length){var p=o&&f.length+i,v=N(m,p);f.push(v)}}return t?f:(c=[]).concat.apply(c,f)}function s5(e){var t=e.rows,r=e.stylesheet,o=e.useInlineStyles;return t.map(function(s,i){return V1({node:s,stylesheet:r,useInlineStyles:o,key:"code-segement".concat(i)})})}function Y1(e){return e&&typeof e.highlightAuto<"u"}function i5(e){var t=e.astGenerator,r=e.language,o=e.code,s=e.defaultCodeValue;if(Y1(t)){var i=Q4(t,r);return r==="text"?{value:s,language:"text"}:i?t.highlight(r,o):t.highlightAuto(o)}try{return r&&r!=="text"?{value:t.highlight(o,r)}:{value:s}}catch{return{value:s}}}function l5(e,t){return function(o){var s=o.language,i=o.children,l=o.style,a=l===void 0?t:l,d=o.customStyle,c=d===void 0?{}:d,u=o.codeTagProps,f=u===void 0?{className:s?"language-".concat(s):void 0,style:on(on({},a['code[class*="language-"]']),a['code[class*="language-'.concat(s,'"]')])}:u,g=o.useInlineStyles,C=g===void 0?!0:g,_=o.showLineNumbers,E=_===void 0?!1:_,N=o.showInlineLineNumbers,b=N===void 0?!0:N,m=o.startingLineNumber,p=m===void 0?1:m,v=o.lineNumberContainerStyle,j=o.lineNumberStyle,h=j===void 0?{}:j,y=o.wrapLines,R=o.wrapLongLines,k=R===void 0?!1:R,M=o.lineProps,I=M===void 0?{}:M,J=o.renderer,ee=o.PreTag,me=ee===void 0?"pre":ee,we=o.CodeTag,ve=we===void 0?"code":we,ie=o.code,P=ie===void 0?(Array.isArray(i)?i[0]:i)||"":ie,z=o.astGenerator,B=$4(o,X4);z=z||e;var U=E?wt.createElement(n5,{containerStyle:v,codeStyle:f.style||{},numberStyle:h,startingLineNumber:p,codeString:P}):null,G=a.hljs||a['pre[class*="language-"]']||{backgroundColor:"#fff"},Qe=Y1(z)?"hljs":"prismjs",ce=C?Object.assign({},B,{style:Object.assign({},G,c)}):Object.assign({},B,{className:B.className?"".concat(Qe," ").concat(B.className):Qe,style:Object.assign({},c)});if(k?f.style=on(on({},f.style),{},{whiteSpace:"pre-wrap"}):f.style=on(on({},f.style),{},{whiteSpace:"pre"}),!z)return wt.createElement(me,ce,U,wt.createElement(ve,f,P));(y===void 0&&J||k)&&(y=!0),J=J||s5;var Ee=[{type:"text",value:P}],he=i5({astGenerator:z,language:s,code:P,defaultCodeValue:Ee});he.language===null&&(he.value=Ee);var De=he.value.length+p,hr=o5(he,y,I,E,b,p,De,h,k);return wt.createElement(me,ce,wt.createElement(ve,f,!b&&U,J({rows:hr,stylesheet:a,useInlineStyles:C})))}}var a5=c5,d5=Object.prototype.hasOwnProperty;function c5(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var o in r)d5.call(r,o)&&(e[o]=r[o])}return e}var W1=Z1,au=Z1.prototype;au.space=null;au.normal={};au.property={};function Z1(e,t,r){this.property=e,this.normal=t,r&&(this.space=r)}var mp=a5,u5=W1,m5=p5;function p5(e){for(var t=e.length,r=[],o=[],s=-1,i,l;++s<t;)i=e[s],r.push(i.property),o.push(i.normal),l=i.space;return new u5(mp.apply(null,r),mp.apply(null,o),l)}var du=f5;function f5(e){return e.toLowerCase()}var G1=K1,qt=K1.prototype;qt.space=null;qt.attribute=null;qt.property=null;qt.boolean=!1;qt.booleanish=!1;qt.overloadedBoolean=!1;qt.number=!1;qt.commaSeparated=!1;qt.spaceSeparated=!1;qt.commaOrSpaceSeparated=!1;qt.mustUseProperty=!1;qt.defined=!1;function K1(e,t){this.property=e,this.attribute=t}var fn={},h5=0;fn.boolean=Zr();fn.booleanish=Zr();fn.overloadedBoolean=Zr();fn.number=Zr();fn.spaceSeparated=Zr();fn.commaSeparated=Zr();fn.commaOrSpaceSeparated=Zr();function Zr(){return Math.pow(2,++h5)}var Q1=G1,pp=fn,X1=cu;cu.prototype=new Q1;cu.prototype.defined=!0;var J1=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],x5=J1.length;function cu(e,t,r,o){var s=-1,i;for(fp(this,"space",o),Q1.call(this,e,t);++s<x5;)i=J1[s],fp(this,i,(r&pp[i])===pp[i])}function fp(e,t,r){r&&(e[t]=r)}var hp=du,g5=W1,b5=X1,gi=v5;function v5(e){var t=e.space,r=e.mustUseProperty||[],o=e.attributes||{},s=e.properties,i=e.transform,l={},a={},d,c;for(d in s)c=new b5(d,i(o,d),s[d],t),r.indexOf(d)!==-1&&(c.mustUseProperty=!0),l[d]=c,a[hp(d)]=d,a[hp(c.attribute)]=d;return new g5(l,a,t)}var j5=gi,y5=j5({space:"xlink",transform:F5,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function F5(e,t){return"xlink:"+t.slice(5).toLowerCase()}var w5=gi,S5=w5({space:"xml",transform:C5,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function C5(e,t){return"xml:"+t.slice(3).toLowerCase()}var _5=E5;function E5(e,t){return t in e?e[t]:t}var T5=_5,e2=L5;function L5(e,t){return T5(e,t.toLowerCase())}var k5=gi,R5=e2,N5=k5({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:R5,properties:{xmlns:null,xmlnsXLink:null}}),uu=fn,O5=gi,ft=uu.booleanish,Rt=uu.number,vr=uu.spaceSeparated,P5=O5({transform:A5,properties:{ariaActiveDescendant:null,ariaAtomic:ft,ariaAutoComplete:null,ariaBusy:ft,ariaChecked:ft,ariaColCount:Rt,ariaColIndex:Rt,ariaColSpan:Rt,ariaControls:vr,ariaCurrent:null,ariaDescribedBy:vr,ariaDetails:null,ariaDisabled:ft,ariaDropEffect:vr,ariaErrorMessage:null,ariaExpanded:ft,ariaFlowTo:vr,ariaGrabbed:ft,ariaHasPopup:null,ariaHidden:ft,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:vr,ariaLevel:Rt,ariaLive:null,ariaModal:ft,ariaMultiLine:ft,ariaMultiSelectable:ft,ariaOrientation:null,ariaOwns:vr,ariaPlaceholder:null,ariaPosInSet:Rt,ariaPressed:ft,ariaReadOnly:ft,ariaRelevant:null,ariaRequired:ft,ariaRoleDescription:vr,ariaRowCount:Rt,ariaRowIndex:Rt,ariaRowSpan:Rt,ariaSelected:ft,ariaSetSize:Rt,ariaSort:null,ariaValueMax:Rt,ariaValueMin:Rt,ariaValueNow:Rt,ariaValueText:null,role:null}});function A5(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Qo=fn,M5=gi,I5=e2,oe=Qo.boolean,D5=Qo.overloadedBoolean,ps=Qo.booleanish,je=Qo.number,dt=Qo.spaceSeparated,Gi=Qo.commaSeparated,$5=M5({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:I5,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Gi,acceptCharset:dt,accessKey:dt,action:null,allow:null,allowFullScreen:oe,allowPaymentRequest:oe,allowUserMedia:oe,alt:null,as:null,async:oe,autoCapitalize:null,autoComplete:dt,autoFocus:oe,autoPlay:oe,capture:oe,charSet:null,checked:oe,cite:null,className:dt,cols:je,colSpan:null,content:null,contentEditable:ps,controls:oe,controlsList:dt,coords:je|Gi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:oe,defer:oe,dir:null,dirName:null,disabled:oe,download:D5,draggable:ps,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:oe,formTarget:null,headers:dt,height:je,hidden:oe,high:je,href:null,hrefLang:null,htmlFor:dt,httpEquiv:dt,id:null,imageSizes:null,imageSrcSet:Gi,inputMode:null,integrity:null,is:null,isMap:oe,itemId:null,itemProp:dt,itemRef:dt,itemScope:oe,itemType:dt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:oe,low:je,manifest:null,max:null,maxLength:je,media:null,method:null,min:null,minLength:je,multiple:oe,muted:oe,name:null,nonce:null,noModule:oe,noValidate:oe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:oe,optimum:je,pattern:null,ping:dt,placeholder:null,playsInline:oe,poster:null,preload:null,readOnly:oe,referrerPolicy:null,rel:dt,required:oe,reversed:oe,rows:je,rowSpan:je,sandbox:dt,scope:null,scoped:oe,seamless:oe,selected:oe,shape:null,size:je,sizes:null,slot:null,span:je,spellCheck:ps,src:null,srcDoc:null,srcLang:null,srcSet:Gi,start:je,step:null,style:null,tabIndex:je,target:null,title:null,translate:null,type:null,typeMustMatch:oe,useMap:null,value:ps,width:je,wrap:null,align:null,aLink:null,archive:dt,axis:null,background:null,bgColor:null,border:je,borderColor:null,bottomMargin:je,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:oe,declare:oe,event:null,face:null,frame:null,frameBorder:null,hSpace:je,leftMargin:je,link:null,longDesc:null,lowSrc:null,marginHeight:je,marginWidth:je,noResize:oe,noHref:oe,noShade:oe,noWrap:oe,object:null,profile:null,prompt:null,rev:null,rightMargin:je,rules:null,scheme:null,scrolling:ps,standby:null,summary:null,text:null,topMargin:je,valueType:null,version:null,vAlign:null,vLink:null,vSpace:je,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:oe,disableRemotePlayback:oe,prefix:null,property:null,results:je,security:null,unselectable:null}}),z5=m5,B5=y5,V5=S5,q5=N5,U5=P5,H5=$5,Y5=z5([V5,B5,q5,U5,H5]),W5=du,Z5=X1,G5=G1,mu="data",K5=J5,Q5=/^data[-\w.:]+$/i,t2=/-[a-z]/g,X5=/[A-Z]/g;function J5(e,t){var r=W5(t),o=t,s=G5;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===mu&&Q5.test(t)&&(t.charAt(4)==="-"?o=e6(t):t=t6(t),s=Z5),new s(o,t))}function e6(e){var t=e.slice(5).replace(t2,r6);return mu+t.charAt(0).toUpperCase()+t.slice(1)}function t6(e){var t=e.slice(4);return t2.test(t)?e:(t=t.replace(X5,n6),t.charAt(0)!=="-"&&(t="-"+t),mu+t)}function n6(e){return"-"+e.toLowerCase()}function r6(e){return e.charAt(1).toUpperCase()}var o6=s6,xp=/[#.]/g;function s6(e,t){for(var r=e||"",o=t||"div",s={},i=0,l,a,d;i<r.length;)xp.lastIndex=i,d=xp.exec(r),l=r.slice(i,d?d.index:r.length),l&&(a?a==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:o=l,i+=l.length),d&&(a=d[0],i++);return{type:"element",tagName:o,properties:s,children:[]}}var pu={};pu.parse=a6;pu.stringify=d6;var gp="",i6=" ",l6=/[ \t\n\r\f]+/g;function a6(e){var t=String(e||gp).trim();return t===gp?[]:t.split(l6)}function d6(e){return e.join(i6).trim()}var fu={};fu.parse=c6;fu.stringify=u6;var Zd=",",bp=" ",ws="";function c6(e){for(var t=[],r=String(e||ws),o=r.indexOf(Zd),s=0,i=!1,l;!i;)o===-1&&(o=r.length,i=!0),l=r.slice(s,o).trim(),(l||!i)&&t.push(l),s=o+1,o=r.indexOf(Zd,s);return t}function u6(e,t){var r=t||{},o=r.padLeft===!1?ws:bp,s=r.padRight?bp:ws;return e[e.length-1]===ws&&(e=e.concat(ws)),e.join(s+Zd+o).trim()}var m6=K5,vp=du,p6=o6,jp=pu.parse,yp=fu.parse,f6=x6,h6={}.hasOwnProperty;function x6(e,t,r){var o=r?y6(r):null;return s;function s(l,a){var d=p6(l,t),c=Array.prototype.slice.call(arguments,2),u=d.tagName.toLowerCase(),f;if(d.tagName=o&&h6.call(o,u)?o[u]:u,a&&g6(a,d)&&(c.unshift(a),a=null),a)for(f in a)i(d.properties,f,a[f]);return n2(d.children,c),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function i(l,a,d){var c,u,f;d==null||d!==d||(c=m6(e,a),u=c.property,f=d,typeof f=="string"&&(c.spaceSeparated?f=jp(f):c.commaSeparated?f=yp(f):c.commaOrSpaceSeparated&&(f=jp(yp(f).join(" ")))),u==="style"&&typeof d!="string"&&(f=j6(f)),u==="className"&&l.className&&(f=l.className.concat(f)),l[u]=v6(c,u,f))}}function g6(e,t){return typeof e=="string"||"length"in e||b6(t.tagName,e)}function b6(e,t){var r=t.type;return e==="input"||!r||typeof r!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in t)}function n2(e,t){var r,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(r=-1,o=t.length;++r<o;)n2(e,t[r]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function v6(e,t,r){var o,s,i;if(typeof r!="object"||!("length"in r))return Fp(e,t,r);for(s=r.length,o=-1,i=[];++o<s;)i[o]=Fp(e,t,r[o]);return i}function Fp(e,t,r){var o=r;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||vp(r)===vp(t))&&(o=!0),o}function j6(e){var t=[],r;for(r in e)t.push([r,e[r]].join(": "));return t.join("; ")}function y6(e){for(var t=e.length,r=-1,o={},s;++r<t;)s=e[r],o[s.toLowerCase()]=s;return o}var F6=Y5,w6=f6,r2=w6(F6,"div");r2.displayName="html";var S6=r2,C6=S6;const _6="Æ",E6="&",T6="Á",L6="Â",k6="À",R6="Å",N6="Ã",O6="Ä",P6="©",A6="Ç",M6="Ð",I6="É",D6="Ê",$6="È",z6="Ë",B6=">",V6="Í",q6="Î",U6="Ì",H6="Ï",Y6="<",W6="Ñ",Z6="Ó",G6="Ô",K6="Ò",Q6="Ø",X6="Õ",J6="Ö",eb='"',tb="®",nb="Þ",rb="Ú",ob="Û",sb="Ù",ib="Ü",lb="Ý",ab="á",db="â",cb="´",ub="æ",mb="à",pb="&",fb="å",hb="ã",xb="ä",gb="¦",bb="ç",vb="¸",jb="¢",yb="©",Fb="¤",wb="°",Sb="÷",Cb="é",_b="ê",Eb="è",Tb="ð",Lb="ë",kb="½",Rb="¼",Nb="¾",Ob=">",Pb="í",Ab="î",Mb="¡",Ib="ì",Db="¿",$b="ï",zb="«",Bb="<",Vb="¯",qb="µ",Ub="·",Hb=" ",Yb="¬",Wb="ñ",Zb="ó",Gb="ô",Kb="ò",Qb="ª",Xb="º",Jb="ø",ev="õ",tv="ö",nv="¶",rv="±",ov="£",sv='"',iv="»",lv="®",av="§",dv="­",cv="¹",uv="²",mv="³",pv="ß",fv="þ",hv="×",xv="ú",gv="û",bv="ù",vv="¨",jv="ü",yv="ý",Fv="¥",wv="ÿ",Sv={AElig:_6,AMP:E6,Aacute:T6,Acirc:L6,Agrave:k6,Aring:R6,Atilde:N6,Auml:O6,COPY:P6,Ccedil:A6,ETH:M6,Eacute:I6,Ecirc:D6,Egrave:$6,Euml:z6,GT:B6,Iacute:V6,Icirc:q6,Igrave:U6,Iuml:H6,LT:Y6,Ntilde:W6,Oacute:Z6,Ocirc:G6,Ograve:K6,Oslash:Q6,Otilde:X6,Ouml:J6,QUOT:eb,REG:tb,THORN:nb,Uacute:rb,Ucirc:ob,Ugrave:sb,Uuml:ib,Yacute:lb,aacute:ab,acirc:db,acute:cb,aelig:ub,agrave:mb,amp:pb,aring:fb,atilde:hb,auml:xb,brvbar:gb,ccedil:bb,cedil:vb,cent:jb,copy:yb,curren:Fb,deg:wb,divide:Sb,eacute:Cb,ecirc:_b,egrave:Eb,eth:Tb,euml:Lb,frac12:kb,frac14:Rb,frac34:Nb,gt:Ob,iacute:Pb,icirc:Ab,iexcl:Mb,igrave:Ib,iquest:Db,iuml:$b,laquo:zb,lt:Bb,macr:Vb,micro:qb,middot:Ub,nbsp:Hb,not:Yb,ntilde:Wb,oacute:Zb,ocirc:Gb,ograve:Kb,ordf:Qb,ordm:Xb,oslash:Jb,otilde:ev,ouml:tv,para:nv,plusmn:rv,pound:ov,quot:sv,raquo:iv,reg:lv,sect:av,shy:dv,sup1:cv,sup2:uv,sup3:mv,szlig:pv,thorn:fv,times:hv,uacute:xv,ucirc:gv,ugrave:bv,uml:vv,uuml:jv,yacute:yv,yen:Fv,yuml:wv},Cv={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var o2=_v;function _v(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var Ev=Tv;function Tv(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var Lv=kv;function kv(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var Rv=Lv,Nv=o2,Ov=Pv;function Pv(e){return Rv(e)||Nv(e)}var Ki,Av=59,Mv=Iv;function Iv(e){var t="&"+e+";",r;return Ki=Ki||document.createElement("i"),Ki.innerHTML=t,r=Ki.textContent,r.charCodeAt(r.length-1)===Av&&e!=="semi"||r===t?!1:r}var wp=Sv,Sp=Cv,Dv=o2,$v=Ev,s2=Ov,zv=Mv,Bv=e8,Vv={}.hasOwnProperty,oo=String.fromCharCode,qv=Function.prototype,Cp={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Uv=9,_p=10,Hv=12,Yv=32,Ep=38,Wv=59,Zv=60,Gv=61,Kv=35,Qv=88,Xv=120,Jv=65533,co="named",hu="hexadecimal",xu="decimal",gu={};gu[hu]=16;gu[xu]=10;var ua={};ua[co]=s2;ua[xu]=Dv;ua[hu]=$v;var i2=1,l2=2,a2=3,d2=4,c2=5,Gd=6,u2=7,mr={};mr[i2]="Named character references must be terminated by a semicolon";mr[l2]="Numeric character references must be terminated by a semicolon";mr[a2]="Named character references cannot be empty";mr[d2]="Numeric character references cannot be empty";mr[c2]="Named character references must be known";mr[Gd]="Numeric character references cannot be disallowed";mr[u2]="Numeric character references cannot be outside the permissible Unicode range";function e8(e,t){var r={},o,s;t||(t={});for(s in Cp)o=t[s],r[s]=o??Cp[s];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),t8(e,r)}function t8(e,t){var r=t.additional,o=t.nonTerminated,s=t.text,i=t.reference,l=t.warning,a=t.textContext,d=t.referenceContext,c=t.warningContext,u=t.position,f=t.indent||[],g=e.length,C=0,_=-1,E=u.column||1,N=u.line||1,b="",m=[],p,v,j,h,y,R,k,M,I,J,ee,me,we,ve,ie,P,z,B,U;for(typeof r=="string"&&(r=r.charCodeAt(0)),P=G(),M=l?Qe:qv,C--,g++;++C<g;)if(y===_p&&(E=f[_]||1),y=e.charCodeAt(C),y===Ep){if(k=e.charCodeAt(C+1),k===Uv||k===_p||k===Hv||k===Yv||k===Ep||k===Zv||k!==k||r&&k===r){b+=oo(y),E++;continue}for(we=C+1,me=we,U=we,k===Kv?(U=++me,k=e.charCodeAt(U),k===Qv||k===Xv?(ve=hu,U=++me):ve=xu):ve=co,p="",ee="",h="",ie=ua[ve],U--;++U<g&&(k=e.charCodeAt(U),!!ie(k));)h+=oo(k),ve===co&&Vv.call(wp,h)&&(p=h,ee=wp[h]);j=e.charCodeAt(U)===Wv,j&&(U++,v=ve===co?zv(h):!1,v&&(p=h,ee=v)),B=1+U-we,!j&&!o||(h?ve===co?(j&&!ee?M(c2,1):(p!==h&&(U=me+p.length,B=1+U-me,j=!1),j||(I=p?i2:a2,t.attribute?(k=e.charCodeAt(U),k===Gv?(M(I,B),ee=null):s2(k)?ee=null:M(I,B)):M(I,B))),R=ee):(j||M(l2,B),R=parseInt(h,gu[ve]),n8(R)?(M(u2,B),R=oo(Jv)):R in Sp?(M(Gd,B),R=Sp[R]):(J="",r8(R)&&M(Gd,B),R>65535&&(R-=65536,J+=oo(R>>>10|55296),R=56320|R&1023),R=J+oo(R))):ve!==co&&M(d2,B)),R?(ce(),P=G(),C=U-1,E+=U-we+1,m.push(R),z=G(),z.offset++,i&&i.call(d,R,{start:P,end:z},e.slice(we-1,U)),P=z):(h=e.slice(we-1,U),b+=h,E+=h.length,C=U-1)}else y===10&&(N++,_++,E=0),y===y?(b+=oo(y),E++):ce();return m.join("");function G(){return{line:N,column:E,offset:C+(u.offset||0)}}function Qe(Ee,he){var De=G();De.column+=he,De.offset+=he,l.call(c,mr[Ee],De,Ee)}function ce(){b&&(m.push(b),s&&s.call(a,b,{start:P,end:G()}),b="")}}function n8(e){return e>=55296&&e<=57343||e>1114111}function r8(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var m2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function m(p){return p instanceof d?new d(p.type,m(p.content),p.alias):Array.isArray(p)?p.map(m):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++i}),m.__id},clone:function m(p,v){v=v||{};var j,h;switch(a.util.type(p)){case"Object":if(h=a.util.objId(p),v[h])return v[h];j={},v[h]=j;for(var y in p)p.hasOwnProperty(y)&&(j[y]=m(p[y],v));return j;case"Array":return h=a.util.objId(p),v[h]?v[h]:(j=[],v[h]=j,p.forEach(function(R,k){j[k]=m(R,v)}),j);default:return p}},getLanguage:function(m){for(;m;){var p=s.exec(m.className);if(p)return p[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,p){m.className=m.className.replace(RegExp(s,"gi"),""),m.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(j){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(j.stack)||[])[1];if(m){var p=document.getElementsByTagName("script");for(var v in p)if(p[v].src==m)return p[v]}return null}},isActive:function(m,p,v){for(var j="no-"+p;m;){var h=m.classList;if(h.contains(p))return!0;if(h.contains(j))return!1;m=m.parentElement}return!!v}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(m,p){var v=a.util.clone(a.languages[m]);for(var j in p)v[j]=p[j];return v},insertBefore:function(m,p,v,j){j=j||a.languages;var h=j[m],y={};for(var R in h)if(h.hasOwnProperty(R)){if(R==p)for(var k in v)v.hasOwnProperty(k)&&(y[k]=v[k]);v.hasOwnProperty(R)||(y[R]=h[R])}var M=j[m];return j[m]=y,a.languages.DFS(a.languages,function(I,J){J===M&&I!=m&&(this[I]=y)}),y},DFS:function m(p,v,j,h){h=h||{};var y=a.util.objId;for(var R in p)if(p.hasOwnProperty(R)){v.call(p,R,p[R],j||R);var k=p[R],M=a.util.type(k);M==="Object"&&!h[y(k)]?(h[y(k)]=!0,m(k,v,null,h)):M==="Array"&&!h[y(k)]&&(h[y(k)]=!0,m(k,v,R,h))}}},plugins:{},highlightAll:function(m,p){a.highlightAllUnder(document,m,p)},highlightAllUnder:function(m,p,v){var j={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",j),j.elements=Array.prototype.slice.apply(j.container.querySelectorAll(j.selector)),a.hooks.run("before-all-elements-highlight",j);for(var h=0,y;y=j.elements[h++];)a.highlightElement(y,p===!0,j.callback)},highlightElement:function(m,p,v){var j=a.util.getLanguage(m),h=a.languages[j];a.util.setLanguage(m,j);var y=m.parentElement;y&&y.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(y,j);var R=m.textContent,k={element:m,language:j,grammar:h,code:R};function M(J){k.highlightedCode=J,a.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,a.hooks.run("after-highlight",k),a.hooks.run("complete",k),v&&v.call(k.element)}if(a.hooks.run("before-sanity-check",k),y=k.element.parentElement,y&&y.nodeName.toLowerCase()==="pre"&&!y.hasAttribute("tabindex")&&y.setAttribute("tabindex","0"),!k.code){a.hooks.run("complete",k),v&&v.call(k.element);return}if(a.hooks.run("before-highlight",k),!k.grammar){M(a.util.encode(k.code));return}if(p&&o.Worker){var I=new Worker(a.filename);I.onmessage=function(J){M(J.data)},I.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else M(a.highlight(k.code,k.grammar,k.language))},highlight:function(m,p,v){var j={code:m,grammar:p,language:v};if(a.hooks.run("before-tokenize",j),!j.grammar)throw new Error('The language "'+j.language+'" has no grammar.');return j.tokens=a.tokenize(j.code,j.grammar),a.hooks.run("after-tokenize",j),d.stringify(a.util.encode(j.tokens),j.language)},tokenize:function(m,p){var v=p.rest;if(v){for(var j in v)p[j]=v[j];delete p.rest}var h=new f;return g(h,h.head,m),u(m,h,p,h.head,0),_(h)},hooks:{all:{},add:function(m,p){var v=a.hooks.all;v[m]=v[m]||[],v[m].push(p)},run:function(m,p){var v=a.hooks.all[m];if(!(!v||!v.length))for(var j=0,h;h=v[j++];)h(p)}},Token:d};o.Prism=a;function d(m,p,v,j){this.type=m,this.content=p,this.alias=v,this.length=(j||"").length|0}d.stringify=function m(p,v){if(typeof p=="string")return p;if(Array.isArray(p)){var j="";return p.forEach(function(M){j+=m(M,v)}),j}var h={type:p.type,content:m(p.content,v),tag:"span",classes:["token",p.type],attributes:{},language:v},y=p.alias;y&&(Array.isArray(y)?Array.prototype.push.apply(h.classes,y):h.classes.push(y)),a.hooks.run("wrap",h);var R="";for(var k in h.attributes)R+=" "+k+'="'+(h.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+R+">"+h.content+"</"+h.tag+">"};function c(m,p,v,j){m.lastIndex=p;var h=m.exec(v);if(h&&j&&h[1]){var y=h[1].length;h.index+=y,h[0]=h[0].slice(y)}return h}function u(m,p,v,j,h,y){for(var R in v)if(!(!v.hasOwnProperty(R)||!v[R])){var k=v[R];k=Array.isArray(k)?k:[k];for(var M=0;M<k.length;++M){if(y&&y.cause==R+","+M)return;var I=k[M],J=I.inside,ee=!!I.lookbehind,me=!!I.greedy,we=I.alias;if(me&&!I.pattern.global){var ve=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,ve+"g")}for(var ie=I.pattern||I,P=j.next,z=h;P!==p.tail&&!(y&&z>=y.reach);z+=P.value.length,P=P.next){var B=P.value;if(p.length>m.length)return;if(!(B instanceof d)){var U=1,G;if(me){if(G=c(ie,z,m,ee),!G||G.index>=m.length)break;var he=G.index,Qe=G.index+G[0].length,ce=z;for(ce+=P.value.length;he>=ce;)P=P.next,ce+=P.value.length;if(ce-=P.value.length,z=ce,P.value instanceof d)continue;for(var Ee=P;Ee!==p.tail&&(ce<Qe||typeof Ee.value=="string");Ee=Ee.next)U++,ce+=Ee.value.length;U--,B=m.slice(z,ce),G.index-=z}else if(G=c(ie,0,B,ee),!G)continue;var he=G.index,De=G[0],hr=B.slice(0,he),Ei=B.slice(he+De.length),ns=z+B.length;y&&ns>y.reach&&(y.reach=ns);var qe=P.prev;hr&&(qe=g(p,qe,hr),z+=hr.length),C(p,qe,U);var xr=new d(R,J?a.tokenize(De,J):De,we,De);if(P=g(p,qe,xr),Ei&&g(p,P,Ei),U>1){var Jr={cause:R+","+M,reach:ns};u(m,p,v,P.prev,z,Jr),y&&Jr.reach>y.reach&&(y.reach=Jr.reach)}}}}}}function f(){var m={value:null,prev:null,next:null},p={value:null,prev:m,next:null};m.next=p,this.head=m,this.tail=p,this.length=0}function g(m,p,v){var j=p.next,h={value:v,prev:p,next:j};return p.next=h,j.prev=h,m.length++,h}function C(m,p,v){for(var j=p.next,h=0;h<v&&j!==m.tail;h++)j=j.next;p.next=j,j.prev=p,m.length-=h}function _(m){for(var p=[],v=m.head.next;v!==m.tail;)p.push(v.value),v=v.next;return p}if(!o.document)return o.addEventListener&&(a.disableWorkerMessageHandler||o.addEventListener("message",function(m){var p=JSON.parse(m.data),v=p.language,j=p.code,h=p.immediateClose;o.postMessage(a.highlight(j,a.languages[v],v)),h&&o.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function N(){a.manual||a.highlightAll()}if(!a.manual){var b=document.readyState;b==="loading"||b==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",N):window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,16)}return a}(t);e.exports&&(e.exports=r),typeof pl<"u"&&(pl.Prism=r)})(m2);var o8=m2.exports,s8=bu;bu.displayName="markup";bu.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function bu(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};i["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var p2=vu;vu.displayName="css";vu.aliases=[];function vu(e){(function(t){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const i8=Vr(p2);var l8=ju;ju.displayName="clike";ju.aliases=[];function ju(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var a8=yu;yu.displayName="javascript";yu.aliases=["js"];function yu(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Ss=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof pl=="object"?pl:{},d8=C8();Ss.Prism={manual:!0,disableWorkerMessageHandler:!0};var c8=C6,u8=Bv,f2=o8,m8=s8,p8=p2,f8=l8,h8=a8;d8();var Fu={}.hasOwnProperty;function h2(){}h2.prototype=f2;var Ie=new h2,x8=Ie;Ie.highlight=b8;Ie.register=bi;Ie.alias=g8;Ie.registered=v8;Ie.listLanguages=j8;bi(m8);bi(p8);bi(f8);bi(h8);Ie.util.encode=w8;Ie.Token.stringify=y8;function bi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ie.languages[e.displayName]===void 0&&e(Ie)}function g8(e,t){var r=Ie.languages,o=e,s,i,l,a;t&&(o={},o[e]=t);for(s in o)for(i=o[s],i=typeof i=="string"?[i]:i,l=i.length,a=-1;++a<l;)r[i[a]]=r[s]}function b8(e,t){var r=f2.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ie.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Fu.call(Ie.languages,t))o=Ie.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return r.call(this,e,o,t)}function v8(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Fu.call(Ie.languages,e)}function j8(){var e=Ie.languages,t=[],r;for(r in e)Fu.call(e,r)&&typeof e[r]=="object"&&t.push(r);return t}function y8(e,t,r){var o;return typeof e=="string"?{type:"text",value:e}:Ie.util.type(e)==="Array"?F8(e,t):(o={type:e.type,content:Ie.Token.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r},e.alias&&(o.classes=o.classes.concat(e.alias)),Ie.hooks.run("wrap",o),c8(o.tag+"."+o.classes.join("."),S8(o.attributes),o.content))}function F8(e,t){for(var r=[],o=e.length,s=-1,i;++s<o;)i=e[s],i!==""&&i!==null&&i!==void 0&&r.push(i);for(s=-1,o=r.length;++s<o;)i=r[s],r[s]=Ie.Token.stringify(i,t,r);return r}function w8(e){return e}function S8(e){var t;for(t in e)e[t]=u8(e[t]);return e}function C8(){var e="Prism"in Ss,t=e?Ss.Prism:void 0;return r;function r(){e?Ss.Prism=t:delete Ss.Prism,e=void 0,t=void 0}}const wu=Vr(x8);var Gr=l5(wu,{});Gr.registerLanguage=function(e,t){return wu.register(t)};Gr.alias=function(e,t){return wu.alias(e,t)};var _8=Su;Su.displayName="bash";Su.aliases=["shell"];function Su(e){(function(t){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:o,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,a=0;a<i.length;a++)l[i[a]]=t.languages.bash[i[a]];t.languages.shell=t.languages.bash})(e)}const E8=Vr(_8);var T8=Cu;Cu.displayName="jsx";Cu.aliases=[];function Cu(e){(function(t){var r=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(c,u){return c=c.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=l(i).source,t.languages.jsx=t.languages.extend("markup",r),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=r.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var a=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(a).join(""):""},d=function(c){for(var u=[],f=0;f<c.length;f++){var g=c[f],C=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(g.content[0].content[1])&&u.pop():g.content[g.content.length-1].content==="/>"||u.push({tagName:a(g.content[0].content[1]),openedBraces:0}):u.length>0&&g.type==="punctuation"&&g.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?u[u.length-1].openedBraces--:C=!0),(C||typeof g=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var _=a(g);f<c.length-1&&(typeof c[f+1]=="string"||c[f+1].type==="plain-text")&&(_+=a(c[f+1]),c.splice(f+1,1)),f>0&&(typeof c[f-1]=="string"||c[f-1].type==="plain-text")&&(_=a(c[f-1])+_,c.splice(f-1,1),f--),c[f]=new t.Token("plain-text",_,null,_)}g.content&&typeof g.content!="string"&&d(g.content)}};t.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||d(c.tokens)})})(e)}const L8=Vr(T8);var k8=_u;_u.displayName="scss";_u.aliases=[];function _u(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const R8=Vr(k8);Gr.registerLanguage("jsx",L8);Gr.registerLanguage("css",i8);Gr.registerLanguage("scss",R8);Gr.registerLanguage("bash",E8);const Ze=({code:e,language:t="jsx",caption:r,expand:o=!1,fixed:s=o,className:i="",undent:l=!1})=>{const[a,d]=T.useState(!1),[c,u]=T.useState(o),f=()=>{navigator.clipboard.writeText(e),d(!0),tr(2e3).then(()=>d(!1))};return n.jsxs("div",{className:`codeblock ${i} ${c?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!r&&n.jsx("h4",{className:"caption",children:r}),n.jsxs("div",{className:"controls",children:[n.jsx("div",{className:"expand",onClick:()=>u(!c),children:c?"Compress":"Expand"}),n.jsx("div",{className:`clipboard ${a?"copied":""}`,onClick:f,children:a?"Copied":"Copy"})]}),n.jsx(Gr,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:ln(e,{undent:l})})]})},ln=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),t.undent){const r=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(r,"")}return e},F=({Component:e,code:t,html:r,children:o,className:s="",caption:i,fixed:l,expand:a,language:d,undent:c})=>n.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[n.jsx("div",{className:"source",children:n.jsx(Ze,{caption:i,code:t||r,expand:a,fixed:l,undent:c,language:r?"html":d})}),!!o&&n.jsx("div",{className:"interim",children:o}),e?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx(e,{})]}):null,r?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx("div",{dangerouslySetInnerHTML:{__html:r}})]}):null]}),D=({children:e,align:t="start"})=>n.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),N8={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},O8=e=>{const t=N8[e]||iu(`Invalid icon name: ${e}`);return Hr(t)?{path:t,width:512,height:512}:t},Tp=({path:e,onClick:t,width:r=512,height:o=512,style:s,className:i="",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:`${i} icon`,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${o}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),x2=({name:e,...t})=>e?n.jsx(Tp,{...t,...O8(e)}):n.jsx(Tp,{...t}),lt=({title:e,text:t,children:r})=>n.jsxs("div",{className:"info alert border flex start small shadow-2",children:[n.jsx(x2,{name:"info",className:"side-icon"}),n.jsxs("div",{children:[!!e&&n.jsx("h3",{className:"mar-b-2",children:e}),t||r]})]}),Z=e=>n.jsx(lt,{title:"Try it out",...e}),P8=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Changed"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),n.jsxs(D,{children:[n.jsx("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),n.jsxs(Z,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),n.jsx(F,{Component:M4,code:I4,caption:"Changed",expand:!0})]}),A8=Object.freeze(Object.defineProperty({__proto__:null,default:P8},Symbol.toStringTag,{value:"Module"})),M8=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",type:"checkbox",label:"Checkbox with label",text:"I like badgers!"}),n.jsx(x,{name:"two",type:"checkbox",text:"I accept the terms and conditions"})]}),I8=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const Checkbox = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      label="Checkbox with label"
      text="I like badgers!"
    />
    <Field
      name="two"
      type="checkbox"
      text="I accept the terms and conditions"
    />
  </Form>

export default Checkbox
`;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Oe.apply(this,arguments)}var Pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pe||(Pe={}));const Lp="popstate";function D8(e){e===void 0&&(e={});function t(o,s){let{pathname:i,search:l,hash:a}=o.location;return ni("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:Ir(s)}return z8(t,r,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $8(){return Math.random().toString(36).substr(2,8)}function kp(e,t){return{usr:e.state,key:e.key,idx:t}}function ni(e,t,r,o){return r===void 0&&(r=null),Oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rn(t):t,{state:r,key:t&&t.key||o||$8()})}function Ir(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Rn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function z8(e,t,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=Pe.Pop,d=null,c=u();c==null&&(c=0,l.replaceState(Oe({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function f(){a=Pe.Pop;let N=u(),b=N==null?null:N-c;c=N,d&&d({action:a,location:E.location,delta:b})}function g(N,b){a=Pe.Push;let m=ni(E.location,N,b);r&&r(m,N),c=u()+1;let p=kp(m,c),v=E.createHref(m);try{l.pushState(p,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(v)}i&&d&&d({action:a,location:E.location,delta:1})}function C(N,b){a=Pe.Replace;let m=ni(E.location,N,b);r&&r(m,N),c=u();let p=kp(m,c),v=E.createHref(m);l.replaceState(p,"",v),i&&d&&d({action:a,location:E.location,delta:0})}function _(N){let b=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof N=="string"?N:Ir(N);return ne(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let E={get action(){return a},get location(){return e(s,l)},listen(N){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Lp,f),d=N,()=>{s.removeEventListener(Lp,f),d=null}},createHref(N){return t(s,N)},createURL:_,encodeLocation(N){let b=_(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:g,replace:C,go(N){return l.go(N)}};return E}var Re;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Re||(Re={}));const B8=new Set(["lazy","caseSensitive","path","id","index","children"]);function V8(e){return e.index===!0}function Kd(e,t,r,o){return r===void 0&&(r=[]),o===void 0&&(o={}),e.map((s,i)=>{let l=[...r,i],a=typeof s.id=="string"?s.id:l.join("-");if(ne(s.index!==!0||!s.children,"Cannot specify children on an index route"),ne(!o[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),V8(s)){let d=Oe({},s,t(s),{id:a});return o[a]=d,d}else{let d=Oe({},s,t(s),{id:a,children:void 0});return o[a]=d,s.children&&(d.children=Kd(s.children,t,l,o)),d}})}function _o(e,t,r){r===void 0&&(r="/");let o=typeof t=="string"?Rn(t):t,s=_n(o.pathname||"/",r);if(s==null)return null;let i=g2(e);U8(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=J8(i[a],t7(s));return l}function q8(e,t){let{route:r,pathname:o,params:s}=e;return{id:r.id,pathname:o,params:s,data:t[r.id],handle:r.handle}}function g2(e,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let d={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};d.relativePath.startsWith("/")&&(ne(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let c=yn([o,d.relativePath]),u=r.concat(d);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),g2(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Q8(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let d of b2(i.path))s(i,l,d)}),t}function b2(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=b2(o.join("/")),a=[];return a.push(...l.map(d=>d===""?i:[i,d].join("/"))),s&&a.push(...l),a.map(d=>e.startsWith("/")&&d===""?"/":d)}function U8(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:X8(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const H8=/^:[\w-]+$/,Y8=3,W8=2,Z8=1,G8=10,K8=-2,Rp=e=>e==="*";function Q8(e,t){let r=e.split("/"),o=r.length;return r.some(Rp)&&(o+=K8),t&&(o+=W8),r.filter(s=>!Rp(s)).reduce((s,i)=>s+(H8.test(i)?Y8:i===""?Z8:G8),o)}function X8(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function J8(e,t){let{routesMeta:r}=e,o={},s="/",i=[];for(let l=0;l<r.length;++l){let a=r[l],d=l===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",u=Qd({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},c);if(!u)return null;Object.assign(o,u.params);let f=a.route;i.push({params:o,pathname:yn([s,u.pathname]),pathnameBase:s7(yn([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=yn([s,u.pathnameBase]))}return i}function Qd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=e7(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((c,u,f)=>{let{paramName:g,isOptional:C}=u;if(g==="*"){let E=a[f]||"";l=i.slice(0,i.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[f];return C&&!_?c[g]=void 0:c[g]=n7(_||"",g),c},{}),pathname:i,pathnameBase:l,pattern:e}}function e7(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Mr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,d)=>(o.push({paramName:a,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function t7(e){try{return decodeURI(e)}catch(t){return Mr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function n7(e,t){try{return decodeURIComponent(e)}catch(r){return Mr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function _n(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function r7(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:s=""}=typeof e=="string"?Rn(e):e;return{pathname:r?r.startsWith("/")?r:o7(r,t):t,search:i7(o),hash:l7(s)}}function o7(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Wa(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Eu(e,t){let r=v2(e);return t?r.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Tu(e,t,r,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=Rn(e):(s=Oe({},e),ne(!s.pathname||!s.pathname.includes("?"),Wa("?","pathname","search",s)),ne(!s.pathname||!s.pathname.includes("#"),Wa("#","pathname","hash",s)),ne(!s.search||!s.search.includes("#"),Wa("#","search","hash",s)));let i=e===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let f=t.length-1;if(!o&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;s.pathname=g.join("/")}a=f>=0?t[f]:"/"}let d=r7(s,a),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),s7=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i7=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,l7=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Lu{constructor(t,r,o,s){s===void 0&&(s=!1),this.status=t,this.statusText=r||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function j2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const y2=["post","put","patch","delete"],a7=new Set(y2),d7=["get",...y2],c7=new Set(d7),u7=new Set([301,302,303,307,308]),m7=new Set([307,308]),Za={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},p7={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},F2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f7=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),w2="remix-router-transitions";function h7(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!r;ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let S=e.detectErrorBoundary;s=L=>({hasErrorBoundary:S(L)})}else s=f7;let i={},l=Kd(e.routes,s,void 0,i),a,d=e.basename||"/",c=Oe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,f=new Set,g=null,C=null,_=null,E=e.hydrationData!=null,N=_o(l,e.history.location,d),b=null;if(N==null){let S=Nt(404,{pathname:e.history.location.pathname}),{matches:L,route:O}=$p(l);N=L,b={[O.id]:S}}let m,p=N.some(S=>S.route.lazy),v=N.some(S=>S.route.loader);if(p)m=!1;else if(!v)m=!0;else if(c.v7_partialHydration){let S=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null;m=N.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(S&&S[O.route.id]!==void 0||L&&L[O.route.id]!==void 0))}else m=e.hydrationData!=null;let j,h={historyAction:e.history.action,location:e.history.location,matches:N,initialized:m,navigation:Za,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},y=Pe.Pop,R=!1,k,M=!1,I=new Map,J=null,ee=!1,me=!1,we=[],ve=[],ie=new Map,P=0,z=-1,B=new Map,U=new Set,G=new Map,Qe=new Map,ce=new Set,Ee=new Map,he=new Map,De=!1;function hr(){if(u=e.history.listen(S=>{let{action:L,location:O,delta:$}=S;if(De){De=!1;return}Mr(he.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=Hu({currentLocation:h.location,nextLocation:O,historyAction:L});if(H&&$!=null){De=!0,e.history.go($*-1),Li(H,{state:"blocked",location:O,proceed(){Li(H,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go($)},reset(){let re=new Map(h.blockers);re.set(H,fs),qe({blockers:re})}});return}return gr(L,O)}),r){_7(t,I);let S=()=>E7(t,I);t.addEventListener("pagehide",S),J=()=>t.removeEventListener("pagehide",S)}return h.initialized||gr(Pe.Pop,h.location,{initialHydration:!0}),j}function Ei(){u&&u(),J&&J(),f.clear(),k&&k.abort(),h.fetchers.forEach((S,L)=>Ti(L)),h.blockers.forEach((S,L)=>Uu(L))}function ns(S){return f.add(S),()=>f.delete(S)}function qe(S,L){L===void 0&&(L={}),h=Oe({},h,S);let O=[],$=[];c.v7_fetcherPersist&&h.fetchers.forEach((H,re)=>{H.state==="idle"&&(ce.has(re)?$.push(re):O.push(re))}),[...f].forEach(H=>H(h,{deletedFetchers:$,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),c.v7_fetcherPersist&&(O.forEach(H=>h.fetchers.delete(H)),$.forEach(H=>Ti(H)))}function xr(S,L,O){var $,H;let{flushSync:re}=O===void 0?{}:O,Q=h.actionData!=null&&h.navigation.formMethod!=null&&Gt(h.navigation.formMethod)&&h.navigation.state==="loading"&&(($=S.state)==null?void 0:$._isRedirect)!==!0,W;L.actionData?Object.keys(L.actionData).length>0?W=L.actionData:W=null:Q?W=h.actionData:W=null;let Y=L.loaderData?Dp(h.loaderData,L.loaderData,L.matches||[],L.errors):h.loaderData,ae=h.blockers;ae.size>0&&(ae=new Map(ae),ae.forEach((ge,Xe)=>ae.set(Xe,fs)));let Ue=R===!0||h.navigation.formMethod!=null&&Gt(h.navigation.formMethod)&&((H=S.state)==null?void 0:H._isRedirect)!==!0;a&&(l=a,a=void 0),ee||y===Pe.Pop||(y===Pe.Push?e.history.push(S,S.state):y===Pe.Replace&&e.history.replace(S,S.state));let te;if(y===Pe.Pop){let ge=I.get(h.location.pathname);ge&&ge.has(S.pathname)?te={currentLocation:h.location,nextLocation:S}:I.has(S.pathname)&&(te={currentLocation:S,nextLocation:h.location})}else if(M){let ge=I.get(h.location.pathname);ge?ge.add(S.pathname):(ge=new Set([S.pathname]),I.set(h.location.pathname,ge)),te={currentLocation:h.location,nextLocation:S}}qe(Oe({},L,{actionData:W,loaderData:Y,historyAction:y,location:S,initialized:!0,navigation:Za,revalidation:"idle",restoreScrollPosition:Wu(S,L.matches||h.matches),preventScrollReset:Ue,blockers:ae}),{viewTransitionOpts:te,flushSync:re===!0}),y=Pe.Pop,R=!1,M=!1,ee=!1,me=!1,we=[],ve=[]}async function Jr(S,L){if(typeof S=="number"){e.history.go(S);return}let O=Xd(h.location,h.matches,d,c.v7_prependBasename,S,c.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:$,submission:H,error:re}=Np(c.v7_normalizeFormMethod,!1,O,L),Q=h.location,W=ni(h.location,$,L&&L.state);W=Oe({},W,e.history.encodeLocation(W));let Y=L&&L.replace!=null?L.replace:void 0,ae=Pe.Push;Y===!0?ae=Pe.Replace:Y===!1||H!=null&&Gt(H.formMethod)&&H.formAction===h.location.pathname+h.location.search&&(ae=Pe.Replace);let Ue=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,te=(L&&L.unstable_flushSync)===!0,ge=Hu({currentLocation:Q,nextLocation:W,historyAction:ae});if(ge){Li(ge,{state:"blocked",location:W,proceed(){Li(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),Jr(S,L)},reset(){let Xe=new Map(h.blockers);Xe.set(ge,fs),qe({blockers:Xe})}});return}return await gr(ae,W,{submission:H,pendingError:re,preventScrollReset:Ue,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:te})}function A3(){if(pa(),qe({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){gr(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}gr(y||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function gr(S,L,O){k&&k.abort(),k=null,y=S,ee=(O&&O.startUninterruptedRevalidation)===!0,U3(h.location,h.matches),R=(O&&O.preventScrollReset)===!0,M=(O&&O.enableViewTransition)===!0;let $=a||l,H=O&&O.overrideNavigation,re=_o($,L,d),Q=(O&&O.flushSync)===!0;if(!re){let Xe=Nt(404,{pathname:L.pathname}),{matches:kt,route:He}=$p($);fa(),xr(L,{matches:kt,loaderData:{},errors:{[He.id]:Xe}},{flushSync:Q});return}if(h.initialized&&!me&&j7(h.location,L)&&!(O&&O.submission&&Gt(O.submission.formMethod))){xr(L,{matches:re},{flushSync:Q});return}k=new AbortController;let W=xs(e.history,L,k.signal,O&&O.submission),Y,ae;if(O&&O.pendingError)ae={[Ps(re).route.id]:O.pendingError};else if(O&&O.submission&&Gt(O.submission.formMethod)){let Xe=await M3(W,L,O.submission,re,{replace:O.replace,flushSync:Q});if(Xe.shortCircuited)return;Y=Xe.pendingActionData,ae=Xe.pendingActionError,H=Ga(L,O.submission),Q=!1,W=new Request(W.url,{signal:W.signal})}let{shortCircuited:Ue,loaderData:te,errors:ge}=await I3(W,L,re,H,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,Q,Y,ae);Ue||(k=null,xr(L,Oe({matches:re},Y?{actionData:Y}:{},{loaderData:te,errors:ge})))}async function M3(S,L,O,$,H){H===void 0&&(H={}),pa();let re=S7(L,O);qe({navigation:re},{flushSync:H.flushSync===!0});let Q,W=ec($,L);if(!W.route.action&&!W.route.lazy)Q={type:Re.error,error:Nt(405,{method:S.method,pathname:L.pathname,routeId:W.route.id})};else if(Q=await hs("action",S,W,$,i,s,d,c.v7_relativeSplatPath),S.signal.aborted)return{shortCircuited:!0};if(_r(Q)){let Y;return H&&H.replace!=null?Y=H.replace:Y=Q.location===h.location.pathname+h.location.search,await rs(h,Q,{submission:O,replace:Y}),{shortCircuited:!0}}if(Eo(Q)){let Y=Ps($,W.route.id);return(H&&H.replace)!==!0&&(y=Pe.Push),{pendingActionData:{},pendingActionError:{[Y.route.id]:Q.error}}}if(Cr(Q))throw Nt(400,{type:"defer-action"});return{pendingActionData:{[W.route.id]:Q.data}}}async function I3(S,L,O,$,H,re,Q,W,Y,ae,Ue){let te=$||Ga(L,H),ge=H||re||Vp(te),Xe=a||l,[kt,He]=Op(e.history,h,O,ge,L,c.v7_partialHydration&&W===!0,me,we,ve,ce,G,U,Xe,d,ae,Ue);if(fa(xe=>!(O&&O.some(Se=>Se.route.id===xe))||kt&&kt.some(Se=>Se.route.id===xe)),z=++P,kt.length===0&&He.length===0){let xe=Vu();return xr(L,Oe({matches:O,loaderData:{},errors:Ue||null},ae?{actionData:ae}:{},xe?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!ee&&(!c.v7_partialHydration||!W)){He.forEach(Se=>{let en=h.fetchers.get(Se.key),Ri=gs(void 0,en?en.data:void 0);h.fetchers.set(Se.key,Ri)});let xe=ae||h.actionData;qe(Oe({navigation:te},xe?Object.keys(xe).length===0?{actionData:null}:{actionData:xe}:{},He.length>0?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Y})}He.forEach(xe=>{ie.has(xe.key)&&Pn(xe.key),xe.controller&&ie.set(xe.key,xe.controller)});let eo=()=>He.forEach(xe=>Pn(xe.key));k&&k.signal.addEventListener("abort",eo);let{results:ha,loaderResults:to,fetcherResults:An}=await $u(h.matches,O,kt,He,S);if(S.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",eo),He.forEach(xe=>ie.delete(xe.key));let br=zp(ha);if(br){if(br.idx>=kt.length){let xe=He[br.idx-kt.length].key;U.add(xe)}return await rs(h,br.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:xa,errors:ga}=Ip(h,O,kt,to,Ue,He,An,Ee);Ee.forEach((xe,Se)=>{xe.subscribe(en=>{(en||xe.done)&&Ee.delete(Se)})});let ba=Vu(),no=qu(z),ki=ba||no||He.length>0;return Oe({loaderData:xa,errors:ga},ki?{fetchers:new Map(h.fetchers)}:{})}function D3(S,L,O,$){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(S)&&Pn(S);let H=($&&$.unstable_flushSync)===!0,re=a||l,Q=Xd(h.location,h.matches,d,c.v7_prependBasename,O,c.v7_relativeSplatPath,L,$==null?void 0:$.relative),W=_o(re,Q,d);if(!W){os(S,L,Nt(404,{pathname:Q}),{flushSync:H});return}let{path:Y,submission:ae,error:Ue}=Np(c.v7_normalizeFormMethod,!0,Q,$);if(Ue){os(S,L,Ue,{flushSync:H});return}let te=ec(W,Y);if(R=($&&$.preventScrollReset)===!0,ae&&Gt(ae.formMethod)){$3(S,L,Y,te,W,H,ae);return}G.set(S,{routeId:L,path:Y}),z3(S,L,Y,te,W,H,ae)}async function $3(S,L,O,$,H,re,Q){if(pa(),G.delete(S),!$.route.action&&!$.route.lazy){let Se=Nt(405,{method:Q.formMethod,pathname:O,routeId:L});os(S,L,Se,{flushSync:re});return}let W=h.fetchers.get(S);On(S,C7(Q,W),{flushSync:re});let Y=new AbortController,ae=xs(e.history,O,Y.signal,Q);ie.set(S,Y);let Ue=P,te=await hs("action",ae,$,H,i,s,d,c.v7_relativeSplatPath);if(ae.signal.aborted){ie.get(S)===Y&&ie.delete(S);return}if(c.v7_fetcherPersist&&ce.has(S)){if(_r(te)||Eo(te)){On(S,In(void 0));return}}else{if(_r(te))if(ie.delete(S),z>Ue){On(S,In(void 0));return}else return U.add(S),On(S,gs(Q)),rs(h,te,{fetcherSubmission:Q});if(Eo(te)){os(S,L,te.error);return}}if(Cr(te))throw Nt(400,{type:"defer-action"});let ge=h.navigation.location||h.location,Xe=xs(e.history,ge,Y.signal),kt=a||l,He=h.navigation.state!=="idle"?_o(kt,h.navigation.location,d):h.matches;ne(He,"Didn't find any matches after fetcher action");let eo=++P;B.set(S,eo);let ha=gs(Q,te.data);h.fetchers.set(S,ha);let[to,An]=Op(e.history,h,He,Q,ge,!1,me,we,ve,ce,G,U,kt,d,{[$.route.id]:te.data},void 0);An.filter(Se=>Se.key!==S).forEach(Se=>{let en=Se.key,Ri=h.fetchers.get(en),Y3=gs(void 0,Ri?Ri.data:void 0);h.fetchers.set(en,Y3),ie.has(en)&&Pn(en),Se.controller&&ie.set(en,Se.controller)}),qe({fetchers:new Map(h.fetchers)});let br=()=>An.forEach(Se=>Pn(Se.key));Y.signal.addEventListener("abort",br);let{results:xa,loaderResults:ga,fetcherResults:ba}=await $u(h.matches,He,to,An,Xe);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",br),B.delete(S),ie.delete(S),An.forEach(Se=>ie.delete(Se.key));let no=zp(xa);if(no){if(no.idx>=to.length){let Se=An[no.idx-to.length].key;U.add(Se)}return rs(h,no.result)}let{loaderData:ki,errors:xe}=Ip(h,h.matches,to,ga,void 0,An,ba,Ee);if(h.fetchers.has(S)){let Se=In(te.data);h.fetchers.set(S,Se)}qu(eo),h.navigation.state==="loading"&&eo>z?(ne(y,"Expected pending action"),k&&k.abort(),xr(h.navigation.location,{matches:He,loaderData:ki,errors:xe,fetchers:new Map(h.fetchers)})):(qe({errors:xe,loaderData:Dp(h.loaderData,ki,He,xe),fetchers:new Map(h.fetchers)}),me=!1)}async function z3(S,L,O,$,H,re,Q){let W=h.fetchers.get(S);On(S,gs(Q,W?W.data:void 0),{flushSync:re});let Y=new AbortController,ae=xs(e.history,O,Y.signal);ie.set(S,Y);let Ue=P,te=await hs("loader",ae,$,H,i,s,d,c.v7_relativeSplatPath);if(Cr(te)&&(te=await _2(te,ae.signal,!0)||te),ie.get(S)===Y&&ie.delete(S),!ae.signal.aborted){if(ce.has(S)){On(S,In(void 0));return}if(_r(te))if(z>Ue){On(S,In(void 0));return}else{U.add(S),await rs(h,te);return}if(Eo(te)){os(S,L,te.error);return}ne(!Cr(te),"Unhandled fetcher deferred data"),On(S,In(te.data))}}async function rs(S,L,O){let{submission:$,fetcherSubmission:H,replace:re}=O===void 0?{}:O;L.revalidate&&(me=!0);let Q=ni(S.location,L.location,{_isRedirect:!0});if(ne(Q,"Expected a location on the redirect navigation"),r){let ge=!1;if(L.reloadDocument)ge=!0;else if(F2.test(L.location)){const Xe=e.history.createURL(L.location);ge=Xe.origin!==t.location.origin||_n(Xe.pathname,d)==null}if(ge){re?t.location.replace(L.location):t.location.assign(L.location);return}}k=null;let W=re===!0?Pe.Replace:Pe.Push,{formMethod:Y,formAction:ae,formEncType:Ue}=S.navigation;!$&&!H&&Y&&ae&&Ue&&($=Vp(S.navigation));let te=$||H;if(m7.has(L.status)&&te&&Gt(te.formMethod))await gr(W,Q,{submission:Oe({},te,{formAction:L.location}),preventScrollReset:R});else{let ge=Ga(Q,$);await gr(W,Q,{overrideNavigation:ge,fetcherSubmission:H,preventScrollReset:R})}}async function $u(S,L,O,$,H){let re=await Promise.all([...O.map(Y=>hs("loader",H,Y,L,i,s,d,c.v7_relativeSplatPath)),...$.map(Y=>Y.matches&&Y.match&&Y.controller?hs("loader",xs(e.history,Y.path,Y.controller.signal),Y.match,Y.matches,i,s,d,c.v7_relativeSplatPath):{type:Re.error,error:Nt(404,{pathname:Y.path})})]),Q=re.slice(0,O.length),W=re.slice(O.length);return await Promise.all([Bp(S,O,Q,Q.map(()=>H.signal),!1,h.loaderData),Bp(S,$.map(Y=>Y.match),W,$.map(Y=>Y.controller?Y.controller.signal:null),!0)]),{results:re,loaderResults:Q,fetcherResults:W}}function pa(){me=!0,we.push(...fa()),G.forEach((S,L)=>{ie.has(L)&&(ve.push(L),Pn(L))})}function On(S,L,O){O===void 0&&(O={}),h.fetchers.set(S,L),qe({fetchers:new Map(h.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function os(S,L,O,$){$===void 0&&($={});let H=Ps(h.matches,L);Ti(S),qe({errors:{[H.route.id]:O},fetchers:new Map(h.fetchers)},{flushSync:($&&$.flushSync)===!0})}function zu(S){return c.v7_fetcherPersist&&(Qe.set(S,(Qe.get(S)||0)+1),ce.has(S)&&ce.delete(S)),h.fetchers.get(S)||p7}function Ti(S){let L=h.fetchers.get(S);ie.has(S)&&!(L&&L.state==="loading"&&B.has(S))&&Pn(S),G.delete(S),B.delete(S),U.delete(S),ce.delete(S),h.fetchers.delete(S)}function B3(S){if(c.v7_fetcherPersist){let L=(Qe.get(S)||0)-1;L<=0?(Qe.delete(S),ce.add(S)):Qe.set(S,L)}else Ti(S);qe({fetchers:new Map(h.fetchers)})}function Pn(S){let L=ie.get(S);ne(L,"Expected fetch controller: "+S),L.abort(),ie.delete(S)}function Bu(S){for(let L of S){let O=zu(L),$=In(O.data);h.fetchers.set(L,$)}}function Vu(){let S=[],L=!1;for(let O of U){let $=h.fetchers.get(O);ne($,"Expected fetcher: "+O),$.state==="loading"&&(U.delete(O),S.push(O),L=!0)}return Bu(S),L}function qu(S){let L=[];for(let[O,$]of B)if($<S){let H=h.fetchers.get(O);ne(H,"Expected fetcher: "+O),H.state==="loading"&&(Pn(O),B.delete(O),L.push(O))}return Bu(L),L.length>0}function V3(S,L){let O=h.blockers.get(S)||fs;return he.get(S)!==L&&he.set(S,L),O}function Uu(S){h.blockers.delete(S),he.delete(S)}function Li(S,L){let O=h.blockers.get(S)||fs;ne(O.state==="unblocked"&&L.state==="blocked"||O.state==="blocked"&&L.state==="blocked"||O.state==="blocked"&&L.state==="proceeding"||O.state==="blocked"&&L.state==="unblocked"||O.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+L.state);let $=new Map(h.blockers);$.set(S,L),qe({blockers:$})}function Hu(S){let{currentLocation:L,nextLocation:O,historyAction:$}=S;if(he.size===0)return;he.size>1&&Mr(!1,"A router only supports one blocker at a time");let H=Array.from(he.entries()),[re,Q]=H[H.length-1],W=h.blockers.get(re);if(!(W&&W.state==="proceeding")&&Q({currentLocation:L,nextLocation:O,historyAction:$}))return re}function fa(S){let L=[];return Ee.forEach((O,$)=>{(!S||S($))&&(O.cancel(),L.push($),Ee.delete($))}),L}function q3(S,L,O){if(g=S,_=L,C=O||null,!E&&h.navigation===Za){E=!0;let $=Wu(h.location,h.matches);$!=null&&qe({restoreScrollPosition:$})}return()=>{g=null,_=null,C=null}}function Yu(S,L){return C&&C(S,L.map($=>q8($,h.loaderData)))||S.key}function U3(S,L){if(g&&_){let O=Yu(S,L);g[O]=_()}}function Wu(S,L){if(g){let O=Yu(S,L),$=g[O];if(typeof $=="number")return $}return null}function H3(S){i={},a=Kd(S,s,void 0,i)}return j={get basename(){return d},get future(){return c},get state(){return h},get routes(){return l},get window(){return t},initialize:hr,subscribe:ns,enableScrollRestoration:q3,navigate:Jr,fetch:D3,revalidate:A3,createHref:S=>e.history.createHref(S),encodeLocation:S=>e.history.encodeLocation(S),getFetcher:zu,deleteFetcher:B3,dispose:Ei,getBlocker:V3,deleteBlocker:Uu,_internalFetchControllers:ie,_internalActiveDeferreds:Ee,_internalSetRoutes:H3},j}function x7(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Xd(e,t,r,o,s,i,l,a){let d,c;if(l){d=[];for(let f of t)if(d.push(f),f.route.id===l){c=f;break}}else d=t,c=t[t.length-1];let u=Tu(s||".",Eu(d,i),_n(e.pathname,r)||e.pathname,a==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&c&&c.route.index&&!ku(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&r!=="/"&&(u.pathname=u.pathname==="/"?r:yn([r,u.pathname])),Ir(u)}function Np(e,t,r,o){if(!o||!x7(o))return{path:r};if(o.formMethod&&!w7(o.formMethod))return{path:r,error:Nt(405,{method:o.formMethod})};let s=()=>({path:r,error:Nt(400,{type:"invalid-body"})}),i=o.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=C2(r);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Gt(l))return s();let g=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((C,_)=>{let[E,N]=_;return""+C+E+"="+N+`
`},""):String(o.body);return{path:r,submission:{formMethod:l,formAction:a,formEncType:o.formEncType,formData:void 0,json:void 0,text:g}}}else if(o.formEncType==="application/json"){if(!Gt(l))return s();try{let g=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:r,submission:{formMethod:l,formAction:a,formEncType:o.formEncType,formData:void 0,json:g,text:void 0}}}catch{return s()}}}ne(typeof FormData=="function","FormData is not available in this environment");let d,c;if(o.formData)d=Jd(o.formData),c=o.formData;else if(o.body instanceof FormData)d=Jd(o.body),c=o.body;else if(o.body instanceof URLSearchParams)d=o.body,c=Mp(d);else if(o.body==null)d=new URLSearchParams,c=new FormData;else try{d=new URLSearchParams(o.body),c=Mp(d)}catch{return s()}let u={formMethod:l,formAction:a,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Gt(u.formMethod))return{path:r,submission:u};let f=Rn(r);return t&&f.search&&ku(f.search)&&d.append("index",""),f.search="?"+d,{path:Ir(f),submission:u}}function g7(e,t){let r=e;if(t){let o=e.findIndex(s=>s.route.id===t);o>=0&&(r=e.slice(0,o))}return r}function Op(e,t,r,o,s,i,l,a,d,c,u,f,g,C,_,E){let N=E?Object.values(E)[0]:_?Object.values(_)[0]:void 0,b=e.createURL(t.location),m=e.createURL(s),p=E?Object.keys(E)[0]:void 0,j=g7(r,p).filter((y,R)=>{let{route:k}=y;if(k.lazy)return!0;if(k.loader==null)return!1;if(i)return k.loader.hydrate?!0:t.loaderData[k.id]===void 0&&(!t.errors||t.errors[k.id]===void 0);if(b7(t.loaderData,t.matches[R],y)||a.some(J=>J===y.route.id))return!0;let M=t.matches[R],I=y;return Pp(y,Oe({currentUrl:b,currentParams:M.params,nextUrl:m,nextParams:I.params},o,{actionResult:N,defaultShouldRevalidate:l||b.pathname+b.search===m.pathname+m.search||b.search!==m.search||S2(M,I)}))}),h=[];return u.forEach((y,R)=>{if(i||!r.some(ee=>ee.route.id===y.routeId)||c.has(R))return;let k=_o(g,y.path,C);if(!k){h.push({key:R,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(R),I=ec(k,y.path),J=!1;f.has(R)?J=!1:d.includes(R)?J=!0:M&&M.state!=="idle"&&M.data===void 0?J=l:J=Pp(I,Oe({currentUrl:b,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:r[r.length-1].params},o,{actionResult:N,defaultShouldRevalidate:l})),J&&h.push({key:R,routeId:y.routeId,path:y.path,matches:k,match:I,controller:new AbortController})}),[j,h]}function b7(e,t,r){let o=!t||r.route.id!==t.route.id,s=e[r.route.id]===void 0;return o||s}function S2(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Pp(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function Ap(e,t,r){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let s=r[e.id];ne(s,"No route found in manifest");let i={};for(let l in o){let d=s[l]!==void 0&&l!=="hasErrorBoundary";Mr(!d,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!d&&!B8.has(l)&&(i[l]=o[l])}Object.assign(s,i),Object.assign(s,Oe({},t(s),{lazy:void 0}))}async function hs(e,t,r,o,s,i,l,a,d){d===void 0&&(d={});let c,u,f,g=E=>{let N,b=new Promise((m,p)=>N=p);return f=()=>N(),t.signal.addEventListener("abort",f),Promise.race([E({request:t,params:r.params,context:d.requestContext}),b])};try{let E=r.route[e];if(r.route.lazy)if(E){let N,b=await Promise.all([g(E).catch(m=>{N=m}),Ap(r.route,i,s)]);if(N)throw N;u=b[0]}else if(await Ap(r.route,i,s),E=r.route[e],E)u=await g(E);else if(e==="action"){let N=new URL(t.url),b=N.pathname+N.search;throw Nt(405,{method:t.method,pathname:b,routeId:r.route.id})}else return{type:Re.data,data:void 0};else if(E)u=await g(E);else{let N=new URL(t.url),b=N.pathname+N.search;throw Nt(404,{pathname:b})}ne(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(E){c=Re.error,u=E}finally{f&&t.signal.removeEventListener("abort",f)}if(F7(u)){let E=u.status;if(u7.has(E)){let b=u.headers.get("Location");if(ne(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!F2.test(b))b=Xd(new URL(t.url),o.slice(0,o.indexOf(r)+1),l,!0,b,a);else if(!d.isStaticRequest){let m=new URL(t.url),p=b.startsWith("//")?new URL(m.protocol+b):new URL(b),v=_n(p.pathname,l)!=null;p.origin===m.origin&&v&&(b=p.pathname+p.search+p.hash)}if(d.isStaticRequest)throw u.headers.set("Location",b),u;return{type:Re.redirect,status:E,location:b,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(d.isRouteRequest)throw{type:c===Re.error?Re.error:Re.data,response:u};let N;try{let b=u.headers.get("Content-Type");b&&/\bapplication\/json\b/.test(b)?u.body==null?N=null:N=await u.json():N=await u.text()}catch(b){return{type:Re.error,error:b}}return c===Re.error?{type:c,error:new Lu(E,u.statusText,N),headers:u.headers}:{type:Re.data,data:N,statusCode:u.status,headers:u.headers}}if(c===Re.error)return{type:c,error:u};if(y7(u)){var C,_;return{type:Re.deferred,deferredData:u,statusCode:(C=u.init)==null?void 0:C.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Re.data,data:u}}function xs(e,t,r,o){let s=e.createURL(C2(t)).toString(),i={signal:r};if(o&&Gt(o.formMethod)){let{formMethod:l,formEncType:a}=o;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(o.json)):a==="text/plain"?i.body=o.text:a==="application/x-www-form-urlencoded"&&o.formData?i.body=Jd(o.formData):i.body=o.formData}return new Request(s,i)}function Jd(e){let t=new URLSearchParams;for(let[r,o]of e.entries())t.append(r,typeof o=="string"?o:o.name);return t}function Mp(e){let t=new FormData;for(let[r,o]of e.entries())t.append(r,o);return t}function v7(e,t,r,o,s){let i={},l=null,a,d=!1,c={};return r.forEach((u,f)=>{let g=t[f].route.id;if(ne(!_r(u),"Cannot handle redirect results in processLoaderData"),Eo(u)){let C=Ps(e,g),_=u.error;o&&(_=Object.values(o)[0],o=void 0),l=l||{},l[C.route.id]==null&&(l[C.route.id]=_),i[g]=void 0,d||(d=!0,a=j2(u.error)?u.error.status:500),u.headers&&(c[g]=u.headers)}else Cr(u)?(s.set(g,u.deferredData),i[g]=u.deferredData.data):i[g]=u.data,u.statusCode!=null&&u.statusCode!==200&&!d&&(a=u.statusCode),u.headers&&(c[g]=u.headers)}),o&&(l=o,i[Object.keys(o)[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:c}}function Ip(e,t,r,o,s,i,l,a){let{loaderData:d,errors:c}=v7(t,r,o,s,a);for(let u=0;u<i.length;u++){let{key:f,match:g,controller:C}=i[u];ne(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let _=l[u];if(!(C&&C.signal.aborted))if(Eo(_)){let E=Ps(e.matches,g==null?void 0:g.route.id);c&&c[E.route.id]||(c=Oe({},c,{[E.route.id]:_.error})),e.fetchers.delete(f)}else if(_r(_))ne(!1,"Unhandled fetcher revalidation redirect");else if(Cr(_))ne(!1,"Unhandled fetcher deferred data");else{let E=In(_.data);e.fetchers.set(f,E)}}return{loaderData:d,errors:c}}function Dp(e,t,r,o){let s=Oe({},t);for(let i of r){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&i.route.loader&&(s[l]=e[l]),o&&o.hasOwnProperty(l))break}return s}function Ps(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function $p(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Nt(e,t){let{pathname:r,routeId:o,method:s,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&r&&o?a="You made a "+s+' request to "'+r+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+o+'" does not match URL "'+r+'"'):e===404?(l="Not Found",a='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",s&&r&&o?a="You made a "+s.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":s&&(a='Invalid request method "'+s.toUpperCase()+'"')),new Lu(e||500,l,new Error(a),!0)}function zp(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(_r(r))return{result:r,idx:t}}}function C2(e){let t=typeof e=="string"?Rn(e):e;return Ir(Oe({},t,{hash:""}))}function j7(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Cr(e){return e.type===Re.deferred}function Eo(e){return e.type===Re.error}function _r(e){return(e&&e.type)===Re.redirect}function y7(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function F7(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function w7(e){return c7.has(e.toLowerCase())}function Gt(e){return a7.has(e.toLowerCase())}async function Bp(e,t,r,o,s,i){for(let l=0;l<r.length;l++){let a=r[l],d=t[l];if(!d)continue;let c=e.find(f=>f.route.id===d.route.id),u=c!=null&&!S2(c,d)&&(i&&i[d.route.id])!==void 0;if(Cr(a)&&(s||u)){let f=o[l];ne(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await _2(a,f,s).then(g=>{g&&(r[l]=g||r[l])})}}}async function _2(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Re.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Re.error,error:s}}return{type:Re.data,data:e.deferredData.data}}}function ku(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ec(e,t){let r=typeof t=="string"?Rn(t).search:t.search;if(e[e.length-1].route.index&&ku(r||""))return e[e.length-1];let o=v2(e);return o[o.length-1]}function Vp(e){let{formMethod:t,formAction:r,formEncType:o,text:s,formData:i,json:l}=e;if(!(!t||!r||!o)){if(s!=null)return{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:void 0,text:s};if(i!=null)return{formMethod:t,formAction:r,formEncType:o,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:l,text:void 0}}}function Ga(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function S7(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function gs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function C7(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function In(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function _7(e,t){try{let r=e.sessionStorage.getItem(w2);if(r){let o=JSON.parse(r);for(let[s,i]of Object.entries(o||{}))i&&Array.isArray(i)&&t.set(s,new Set(i||[]))}}catch{}}function E7(e,t){if(t.size>0){let r={};for(let[o,s]of t)r[o]=[...s];try{e.sessionStorage.setItem(w2,JSON.stringify(r))}catch(o){Mr(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ri.apply(this,arguments)}const vi=T.createContext(null),Ru=T.createContext(null),pr=T.createContext(null),ma=T.createContext(null),fr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),E2=T.createContext(null);function T7(e,t){let{relative:r}=t===void 0?{}:t;ji()||ne(!1);let{basename:o,navigator:s}=T.useContext(pr),{hash:i,pathname:l,search:a}=yi(e,{relative:r}),d=l;return o!=="/"&&(d=l==="/"?o:yn([o,l])),s.createHref({pathname:d,search:a,hash:i})}function ji(){return T.useContext(ma)!=null}function Kr(){return ji()||ne(!1),T.useContext(ma).location}function T2(e){T.useContext(pr).static||T.useLayoutEffect(e)}function L7(){let{isDataRoute:e}=T.useContext(fr);return e?q7():k7()}function k7(){ji()||ne(!1);let e=T.useContext(vi),{basename:t,future:r,navigator:o}=T.useContext(pr),{matches:s}=T.useContext(fr),{pathname:i}=Kr(),l=JSON.stringify(Eu(s,r.v7_relativeSplatPath)),a=T.useRef(!1);return T2(()=>{a.current=!0}),T.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let f=Tu(c,JSON.parse(l),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:yn([t,f.pathname])),(u.replace?o.replace:o.push)(f,u.state,u)},[t,o,l,i,e])}const R7=T.createContext(null);function N7(e){let t=T.useContext(fr).outlet;return t&&T.createElement(R7.Provider,{value:e},t)}function yi(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=T.useContext(pr),{matches:s}=T.useContext(fr),{pathname:i}=Kr(),l=JSON.stringify(Eu(s,o.v7_relativeSplatPath));return T.useMemo(()=>Tu(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function O7(e,t,r,o){ji()||ne(!1);let{navigator:s}=T.useContext(pr),{matches:i}=T.useContext(fr),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let c=Kr(),u;if(t){var f;let N=typeof t=="string"?Rn(t):t;d==="/"||(f=N.pathname)!=null&&f.startsWith(d)||ne(!1),u=N}else u=c;let g=u.pathname||"/",C=d==="/"?g:g.slice(d.length)||"/",_=_o(e,{pathname:C}),E=D7(_&&_.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:yn([d,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?d:yn([d,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,r,o);return t&&E?T.createElement(ma.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pe.Pop}},E):E}function P7(){let e=V7(),t=j2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),r?T.createElement("pre",{style:s},r):null,null)}const A7=T.createElement(P7,null);class M7 extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?T.createElement(fr.Provider,{value:this.props.routeContext},T.createElement(E2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I7(e){let{routeContext:t,match:r,children:o}=e,s=T.useContext(vi);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(fr.Provider,{value:t},o)}function D7(e,t,r,o){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let l=e,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));u>=0||ne(!1),l=l.slice(0,Math.min(l.length,u+1))}let d=!1,c=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let f=l[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:g,errors:C}=r,_=f.route.loader&&g[f.route.id]===void 0&&(!C||C[f.route.id]===void 0);if(f.route.lazy||_){d=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((u,f,g)=>{let C,_=!1,E=null,N=null;r&&(C=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||A7,d&&(c<0&&g===0?(U7("route-fallback",!1),_=!0,N=null):c===g&&(_=!0,N=f.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,g+1)),m=()=>{let p;return C?p=E:_?p=N:f.route.Component?p=T.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=u,T.createElement(I7,{match:f,routeContext:{outlet:u,matches:b,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?T.createElement(M7,{location:r.location,revalidation:r.revalidation,component:E,error:C,children:m(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):m()},null)}var L2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(L2||{}),$l=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($l||{});function $7(e){let t=T.useContext(vi);return t||ne(!1),t}function z7(e){let t=T.useContext(Ru);return t||ne(!1),t}function B7(e){let t=T.useContext(fr);return t||ne(!1),t}function k2(e){let t=B7(),r=t.matches[t.matches.length-1];return r.route.id||ne(!1),r.route.id}function V7(){var e;let t=T.useContext(E2),r=z7($l.UseRouteError),o=k2($l.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function q7(){let{router:e}=$7(L2.UseNavigateStable),t=k2($l.UseNavigateStable),r=T.useRef(!1);return T2(()=>{r.current=!0}),T.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ri({fromRouteId:t},i)))},[e,t])}const qp={};function U7(e,t,r){!t&&!qp[e]&&(qp[e]=!0)}function _e(e){return N7(e.context)}function H7(e){let{basename:t="/",children:r=null,location:o,navigationType:s=Pe.Pop,navigator:i,static:l=!1,future:a}=e;ji()&&ne(!1);let d=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:d,navigator:i,static:l,future:ri({v7_relativeSplatPath:!1},a)}),[d,a,i,l]);typeof o=="string"&&(o=Rn(o));let{pathname:u="/",search:f="",hash:g="",state:C=null,key:_="default"}=o,E=T.useMemo(()=>{let N=_n(u,d);return N==null?null:{location:{pathname:N,search:f,hash:g,state:C,key:_},navigationType:s}},[d,u,f,g,C,_,s]);return E==null?null:T.createElement(pr.Provider,{value:c},T.createElement(ma.Provider,{children:r,value:E}))}new Promise(()=>{});function Y7(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:T.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Ho.apply(this,arguments)}function R2(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function W7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Z7(e,t){return e.button===0&&(!t||t==="_self")&&!W7(e)}const G7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],K7=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Q7="6";try{window.__reactRouterVersion=Q7}catch{}function X7(e,t){return h7({basename:t==null?void 0:t.basename,future:Ho({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:D8({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||J7(),routes:e,mapRouteProperties:Y7,window:t==null?void 0:t.window}).initialize()}function J7(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ho({},t,{errors:ej(t.errors)})),t}function ej(e){if(!e)return null;let t=Object.entries(e),r={};for(let[o,s]of t)if(s&&s.__type==="RouteErrorResponse")r[o]=new Lu(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let i=window[s.__subType];if(typeof i=="function")try{let l=new i(s.message);l.stack="",r[o]=l}catch{}}if(r[o]==null){let i=new Error(s.message);i.stack="",r[o]=i}}else r[o]=s;return r}const N2=T.createContext({isTransitioning:!1}),tj=T.createContext(new Map),nj="startTransition",Up=cx[nj],rj="flushSync",Hp=y0[rj];function oj(e){Up?Up(e):e()}function bs(e){Hp?Hp(e):e()}class sj{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",r(o))}})}}function ij(e){let{fallbackElement:t,router:r,future:o}=e,[s,i]=T.useState(r.state),[l,a]=T.useState(),[d,c]=T.useState({isTransitioning:!1}),[u,f]=T.useState(),[g,C]=T.useState(),[_,E]=T.useState(),N=T.useRef(new Map),{v7_startTransition:b}=o||{},m=T.useCallback(y=>{b?oj(y):y()},[b]),p=T.useCallback((y,R)=>{let{deletedFetchers:k,unstable_flushSync:M,unstable_viewTransitionOpts:I}=R;k.forEach(ee=>N.current.delete(ee)),y.fetchers.forEach((ee,me)=>{ee.data!==void 0&&N.current.set(me,ee.data)});let J=r.window==null||typeof r.window.document.startViewTransition!="function";if(!I||J){M?bs(()=>i(y)):m(()=>i(y));return}if(M){bs(()=>{g&&(u&&u.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:I.currentLocation,nextLocation:I.nextLocation})});let ee=r.window.document.startViewTransition(()=>{bs(()=>i(y))});ee.finished.finally(()=>{bs(()=>{f(void 0),C(void 0),a(void 0),c({isTransitioning:!1})})}),bs(()=>C(ee));return}g?(u&&u.resolve(),g.skipTransition(),E({state:y,currentLocation:I.currentLocation,nextLocation:I.nextLocation})):(a(y),c({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}))},[r.window,g,u,N,m]);T.useLayoutEffect(()=>r.subscribe(p),[r,p]),T.useEffect(()=>{d.isTransitioning&&!d.flushSync&&f(new sj)},[d]),T.useEffect(()=>{if(u&&l&&r.window){let y=l,R=u.promise,k=r.window.document.startViewTransition(async()=>{m(()=>i(y)),await R});k.finished.finally(()=>{f(void 0),C(void 0),a(void 0),c({isTransitioning:!1})}),C(k)}},[m,l,u,r.window]),T.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,g,s.location,l]),T.useEffect(()=>{!d.isTransitioning&&_&&(a(_.state),c({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),E(void 0))},[d.isTransitioning,_]),T.useEffect(()=>{},[]);let v=T.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:y=>r.navigate(y),push:(y,R,k)=>r.navigate(y,{state:R,preventScrollReset:k==null?void 0:k.preventScrollReset}),replace:(y,R,k)=>r.navigate(y,{replace:!0,state:R,preventScrollReset:k==null?void 0:k.preventScrollReset})}),[r]),j=r.basename||"/",h=T.useMemo(()=>({router:r,navigator:v,static:!1,basename:j}),[r,v,j]);return T.createElement(T.Fragment,null,T.createElement(vi.Provider,{value:h},T.createElement(Ru.Provider,{value:s},T.createElement(tj.Provider,{value:N.current},T.createElement(N2.Provider,{value:d},T.createElement(H7,{basename:j,location:s.location,navigationType:s.historyAction,navigator:v,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},s.initialized||r.future.v7_partialHydration?T.createElement(lj,{routes:r.routes,future:r.future,state:s}):t))))),null)}function lj(e){let{routes:t,future:r,state:o}=e;return O7(t,void 0,o,r)}const aj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cj=T.forwardRef(function(t,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:d,to:c,preventScrollReset:u,unstable_viewTransition:f}=t,g=R2(t,G7),{basename:C}=T.useContext(pr),_,E=!1;if(typeof c=="string"&&dj.test(c)&&(_=c,aj))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=_n(v.pathname,C);v.origin===p.origin&&j!=null?c=j+v.search+v.hash:E=!0}catch{}let N=T7(c,{relative:s}),b=mj(c,{replace:l,state:a,target:d,preventScrollReset:u,relative:s,unstable_viewTransition:f});function m(p){o&&o(p),p.defaultPrevented||b(p)}return T.createElement("a",Ho({},g,{href:_||N,onClick:E||i?o:m,ref:r,target:d}))}),O2=T.forwardRef(function(t,r){let{"aria-current":o="page",caseSensitive:s=!1,className:i="",end:l=!1,style:a,to:d,unstable_viewTransition:c,children:u}=t,f=R2(t,K7),g=yi(d,{relative:f.relative}),C=Kr(),_=T.useContext(Ru),{navigator:E,basename:N}=T.useContext(pr),b=_!=null&&pj(g)&&c===!0,m=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,p=C.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(p=p.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase()),v&&N&&(v=_n(v,N)||v);const j=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let h=p===m||!l&&p.startsWith(m)&&p.charAt(j)==="/",y=v!=null&&(v===m||!l&&v.startsWith(m)&&v.charAt(m.length)==="/"),R={isActive:h,isPending:y,isTransitioning:b},k=h?o:void 0,M;typeof i=="function"?M=i(R):M=[i,h?"active":null,y?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(R):a;return T.createElement(cj,Ho({},f,{"aria-current":k,className:M,ref:r,style:I,to:d,unstable_viewTransition:c}),typeof u=="function"?u(R):u)});var tc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tc||(tc={}));var Yp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function uj(e){let t=T.useContext(vi);return t||ne(!1),t}function mj(e,t){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,d=L7(),c=Kr(),u=yi(e,{relative:l});return T.useCallback(f=>{if(Z7(f,r)){f.preventDefault();let g=o!==void 0?o:Ir(c)===Ir(u);d(e,{replace:g,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:a})}},[c,d,u,o,s,r,e,i,l,a])}function pj(e,t){t===void 0&&(t={});let r=T.useContext(N2);r==null&&ne(!1);let{basename:o}=uj(tc.useViewTransitionState),s=yi(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=_n(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=_n(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Qd(s.pathname,l)!=null||Qd(s.pathname,i)!=null}const Fi=({to:e,className:t="",exact:r,children:o,text:s,onClick:i,label:l})=>n.jsx(O2,{to:e,onClick:i,end:r&&"end",className:({isActive:a})=>`${t} ${a?"active":""}`,"aria-label":l,children:o||s}),fj=({prev:e,next:t})=>n.jsxs("div",{className:"flex space",children:[n.jsx(Wp,{caption:"Previous",item:e,className:"prev"}),n.jsx(Wp,{caption:"Next",item:t,className:"next"})]}),Wp=({caption:e,item:t,className:r=""})=>t?n.jsxs(Fi,{to:t.to,className:`prev-next-link ${r}`,children:[n.jsx("h4",{children:e}),n.jsx("div",{children:t.text})]}):n.jsx("div",{}),Ke=({menu:e})=>{const{pathname:t}=Kr(),r=e.items.flatMap(l=>l.items||l),o=r.findIndex(l=>l.to===t);if(o<0)return null;const s=o>0?r[o-1]:null,i=o<r.length-1?r[o+1]:null;return n.jsx(fj,{prev:s,next:i})},hj={title:"Getting Started",url:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/why-use-it",text:"Why Use It?"}]},Nu={title:"Tutorial",url:"/tutorial",items:[{to:"/tutorial/basic-form",text:"A Basic Form"},{to:"/tutorial/field-validation",text:"Field Validation"},{to:"/tutorial/form-validation",text:"Form Validation"},{to:"/tutorial/form-submission",text:"Form Submission"},{to:"/tutorial/submission-response",text:"Submission Response"},{to:"/tutorial/submission-errors",text:"Submission Errors"},{to:"/tutorial/complete-registration",text:"Registration Form"},{to:"/tutorial/edit-form",text:"Edit Form"},{to:"/tutorial/debugging",text:"Debugging"},{to:"/tutorial/headless-fields",text:"Headless Fields"}]},P2={title:"Form",url:"/form",items:[{to:"/form",code:"Form",exact:!0},{section:"Properties",items:[{to:"/form/properties/fields",code:"fields"},{to:"/form/properties/values",code:"values"},{to:"/form/properties/hidden",code:"hidden"},{to:"/form/properties/children",code:"children"},{to:"/form/properties/debug",code:"debug"}]},{section:"Validation",items:[{to:"/form/validation/validate",code:"validate"},{to:"/form/validation/validateOnBlur",code:"validateOnBlur"},{to:"/form/validation/validateOnChange",code:"validateOnChange"},{to:"/form/validation/validateOnInvalid",code:"validateOnInvalid"},{to:"/form/validation/minValidateLength",code:"minValidateLength"},{to:"/form/validation/showRequired",code:"showRequired"},{to:"/form/validation/requiredLabel",code:"requiredLabel"},{to:"/form/validation/requiredMessage",code:"requiredMessage"},{to:"/form/validation/showOptional",code:"showOptional"},{to:"/form/validation/optionalLabel",code:"optionalLabel"},{to:"/form/validation/focusInvalidField",code:"focusInvalidField"},{to:"/form/validation/resetOnSuccess",code:"resetOnSuccess"}]},{section:"Events",items:[{to:"/form/events/onLoad",code:"onLoad"},{to:"/form/events/onReset",code:"onReset"},{to:"/form/events/onSubmit",code:"onSubmit"},{to:"/form/events/onSuccess",code:"onSuccess"},{to:"/form/events/onError",code:"onError"}]},{section:"Functions",items:[{to:"/form/functions/reset",code:"reset"},{to:"/form/functions/setFocus",code:"setFocus"},{to:"/form/functions/setValues",code:"setValues"}]}]},A2={title:"Field",url:"/field",items:[{to:"/field",code:"Field",exact:!0},{section:"Properties",items:[{to:"/field/properties/name",code:"name"},{to:"/field/properties/label",code:"label"},{to:"/field/properties/type",code:"type"},{to:"/field/properties/placeholder",code:"placeholder"},{to:"/field/properties/default",code:"default"},{to:"/field/properties/help",code:"help"},{to:"/field/properties/prefix",code:"prefix"},{to:"/field/properties/suffix",code:"suffix"},{to:"/field/properties/className",code:"className"},{to:"/field/properties/children",code:"children"}]},{section:"Validation",items:[{to:"/field/validation/required",code:"required"},{to:"/field/validation/showRequired",code:"showRequired"},{to:"/field/validation/requiredLabel",code:"requiredLabel"},{to:"/field/validation/requiredMessage",code:"requiredMessage"},{to:"/field/validation/showOptional",code:"showOptional"},{to:"/field/validation/optionalLabel",code:"optionalLabel"},{to:"/field/validation/prepareValue",code:"prepareValue"},{to:"/field/validation/validate",code:"validate"},{to:"/field/validation/validateOnBlur",code:"validateOnBlur"},{to:"/field/validation/validateOnChange",code:"validateOnChange"},{to:"/field/validation/validateOnInvalid",code:"validateOnInvalid"},{to:"/field/validation/minValidateLength",code:"minValidateLength"}]},{section:"Events",items:[{to:"/field/events/onFocus",code:"onFocus"},{to:"/field/events/onBlur",code:"onBlur"},{to:"/field/events/onChange",code:"onChange"},{to:"/field/events/onValid",code:"onValid"},{to:"/field/events/onInvalid",code:"onInvalid"},{to:"/field/events/onLoad",code:"onLoad"}]},{section:"Functions",items:[{to:"/field/functions/setFocus",code:"setFocus"},{to:"/field/functions/setValue",code:"setValue"},{to:"/field/functions/setValid",code:"setValid"},{to:"/field/functions/setInvalid",code:"setInvalid"},{to:"/field/functions/reset",code:"reset"}]},{section:"Components",items:[{to:"/field/components/Layout",code:"Layout"},{to:"/field/components/Label",code:"Label"},{to:"/field/components/Input",code:"Input"},{to:"/field/components/Message",code:"Message"},{to:"/field/components/UseField",code:"UseField"}]}]},M2={title:"Fields",url:"/fields",items:[{to:"/fields",code:"Fields",exact:!0},{section:"Properties",items:[{to:"/fields/properties/names",code:"names"},{to:"/fields/properties/className",code:"className"},{to:"/fields/properties/grid",code:"grid"},{to:"/fields/properties/gap",code:"gap"},{to:"/fields/properties/stack",code:"stack"}]}]},I2={title:"Fieldset",url:"/fieldset",items:[{to:"/fieldset",code:"Fieldset",exact:!0},{section:"Properties",items:[{to:"/fieldset/properties/legend",code:"legend"},{to:"/fieldset/properties/fields",code:"fields"},{to:"/fieldset/properties/className",code:"className"}]}]},D2={title:"Submit",url:"/submit",items:[{to:"/submit",code:"Submit",exact:!0},{section:"Properties",items:[{to:"/submit/properties/text",code:"text"},{to:"/submit/properties/className",code:"className"},{to:"/submit/properties/onClick",code:"onClick"}]}]},$2={title:"Reset",url:"/reset",items:[{to:"/reset",code:"Reset",exact:!0},{section:"Properties",items:[{to:"/reset/properties/text",code:"text"},{to:"/reset/properties/className",code:"className"},{to:"/reset/properties/onClick",code:"onClick"}]}]},z2={title:"ResetSubmit",url:"/reset-submit",items:[{to:"/reset-submit",code:"ResetSubmit",exact:!0},{section:"Properties",items:[{to:"/reset-submit/properties/gap",code:"gap"},{to:"/reset-submit/properties/space",code:"space"},{to:"/reset-submit/properties/reset",code:"reset"},{to:"/reset-submit/properties/submit",code:"submit"},{to:"/reset-submit/properties/className",code:"className"}]}]},B2={title:"Errors",url:"/errors",items:[{to:"/errors",code:"Errors",exact:!0},{section:"Properties",items:[{to:"/errors/properties/fieldErrors",code:"fieldErrors"},{to:"/errors/properties/title",code:"title"},{to:"/errors/properties/prompt",code:"prompt"}]}]},V2={title:"Status",url:"/status",items:[{to:"/status",code:"Status",exact:!0},{section:"Properties",items:[{to:"/status/properties/changed",code:"changed"},{to:"/status/properties/validating",code:"validating"},{to:"/status/properties/valid",code:"valid"},{to:"/status/properties/invalid",code:"invalid"},{to:"/status/properties/submitting",code:"submitting"},{to:"/status/properties/submitted",code:"submitted"},{to:"/status/properties/any",code:"any"}]}]},q2={title:"Debug",url:"/debug",items:[{to:"/debug",code:"Debug",exact:!0},{section:"Properties",items:[{to:"/debug/properties/status",code:"status"},{to:"/debug/properties/values",code:"values"},{to:"/debug/properties/title",code:"title"},{to:"/debug/properties/valuesTitle",code:"valuesTitle"},{to:"/debug/properties/statusTitle",code:"statusTitle"},{to:"/debug/properties/color",code:"color"},{to:"/debug/properties/className",code:"className"}]}]},U2={title:"text",url:"/text",items:[{to:"/text",code:"text",exact:!0},{section:"Properties",items:[{to:"/text/properties/inline",code:"inline"},{to:"/text/properties/size",code:"size"},{to:"/text/properties/type",code:"type"},{to:"/text/properties/placeholder",code:"placeholder"}]}]},H2={title:"textarea",url:"/textarea",items:[{to:"/textarea",code:"textarea",exact:!0},{section:"Properties",items:[{to:"/textarea/properties/inline",code:"inline"},{to:"/textarea/properties/cols",code:"cols"},{to:"/textarea/properties/rows",code:"rows"},{to:"/textarea/properties/placeholder",code:"placeholder"}]}]},Y2={title:"checkbox",url:"/checkbox",items:[{to:"/checkbox",code:"checkbox",exact:!0},{section:"Properties",items:[{to:"/checkbox/properties/border",code:"border"},{to:"/checkbox/properties/inline",code:"inline"},{to:"/checkbox/properties/inputClass",code:"inputClass"}]}]},W2={title:"radio",url:"/radio",items:[{to:"/radio",code:"radio",exact:!0},{section:"Properties",items:[{to:"/radio/properties/options",code:"options"},{to:"/radio/properties/inline",code:"inline"},{to:"/radio/properties/border",code:"border"},{to:"/radio/properties/inputClass",code:"inputClass"},{to:"/radio/properties/optionClass",code:"optionClass"},{to:"/radio/properties/optionsClass",code:"optionsClass"}]}]},Z2={title:"select",url:"/select",items:[{to:"/select",code:"select",exact:!0},{section:"Properties",items:[{to:"/select/properties/options",code:"options"},{to:"/select/properties/inline",code:"inline"},{to:"/select/properties/placeholder",code:"placeholder"}]}]},G2={title:"Utilities",url:"/utilities",items:[{to:"/utils/addInputType",code:"addInputType()"}]},K2=()=>n.jsx(Ke,{menu:Y2}),xj=(e,t)=>(r={})=>n.jsx(Fi,{to:e,text:t,...r}),V=(e,t)=>(r={})=>n.jsx(Fi,{to:e,text:n.jsx("code",{children:t}),...r}),ue=V("/form","Form"),nc=V("/form/properties/values","values"),Ct=V("/form/properties/fields","fields"),Q2=V("/form/properties/hidden","hidden"),gj=V("/form/properties/validate","validate"),rc=V("/form/properties/debug","debug"),bj=V("/form/events/onLoad","onLoad"),cn=V("/form/events/onSubmit","onSubmit"),oi=V("/form/events/onSuccess","onSuccess"),Mo=V("/form/events/onError","onError"),vj=V("/form/events/onReset","onReset"),oc=V("/form/functions/setFocus","setFocus"),Zp=V("/form/functions/setValues","setValues"),jj=V("/form/functions/reset","reset"),X=V("/field","Field"),Dr=V("/field/properties/name","name"),En=V("/field/properties/type","type"),$r=V("/field/properties/label","label"),yj=V("/field/properties/default","default"),X2=V("/field/properties/prefix","prefix"),J2=V("/field/properties/suffix","suffix"),Fj=V("/field/properties/className","className"),wj=V("/field/properties/children","children"),Be=V("/field/validation/required","required"),Tn=V("/field/validation/showRequired","showRequired"),Xo=V("/field/validation/requiredLabel","requiredLabel"),Ou=V("/field/validation/requiredMessage","requiredMessage"),zr=V("/field/validation/showOptional","showOptional"),si=V("/field/validation/optionalLabel","optionalLabel"),$t=V("/field/validation/validate","validate"),zt=V("/field/validation/validateOnBlur","validateOnBlur"),Bt=V("/field/validation/validateOnChange","validateOnChange"),Sj=V("/field/validation/validateOnInvalid","validateOnInvalid"),ii=V("/field/validation/minValidateLength","minValidateLength"),rr=V("/field/events/onFocus","onFocus"),Qr=V("/field/events/onBlur","onBlur"),or=V("/field/events/onChange","onChange"),Jo=V("/field/events/onValid","onValid"),es=V("/field/events/onInvalid","onInvalid"),wi=V("/field/events/onLoad","onLoad"),Cj=V("/field/functions/setValid","setValid"),_j=V("/field/functions/setInvalid","setInvalid"),Ej=V("/field/functions/reset","reset"),Yo=V("/field/components/Layout","Layout"),sc=V("/field/components/Input","Input"),e3=V("/field/components/Message","Message"),zl=V("/fields","Fields"),Tj=V("/fields/properties/names","names"),Lj=V("/fields/properties/grid","grid"),Gp=V("/fieldset","Fields"),Io=V("/errors","Errors"),t3=V("/errors/properties/fieldErrors","fieldErrors"),Br=V("/debug","Debug"),n3=V("/reset","Reset"),kj=V("/reset/properties/gap","gap"),Rj=V("/reset/properties/space","space"),Pu=V("/submit","Submit"),ic=V("/text","Text"),Nj=V("/text/properties/inline","inline"),Oj=V("/text/properties/size","size"),Pj=V("/textarea","TextArea"),Aj=V("/textarea/properties/inline","inline"),Mj=V("/textarea/properties/cols","cols"),r3=V("/checkbox","Checkbox"),o3=V("/radio","Radio"),Ij=V("/radio/properties/optionClass","optionClass"),Dj=V("/radio/properties/optionsClass","optionsClass"),s3=V("/input/select","Select"),$j=V("/input/hidden","Hidden"),zj=xj("/input","Input Types"),Bj=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"checkbox"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(En,{})," to ",n.jsx("code",{children:"checkbox"})," for a checkbox. Use the ",n.jsx("code",{children:"text"})," property to define any text that you want to appear alongside the checkbox.  The ",n.jsx("code",{children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),n.jsx(F,{Component:M8,code:I8,caption:"checkbox",expand:!0}),n.jsx(K2,{})]}),Vj=Object.freeze(Object.defineProperty({__proto__:null,default:Bj},Symbol.toStringTag,{value:"Module"})),qj=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Checkbox Properties"}),n.jsx(_e,{}),n.jsx(K2,{})]}),Uj=Object.freeze(Object.defineProperty({__proto__:null,default:qj},Symbol.toStringTag,{value:"Module"})),Hj=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",type:"checkbox",text:"Checkbox with a border",border:!0}),n.jsx(x,{name:"two",type:"checkbox",text:"Inline checkbox with border",border:!0,inline:!0})]}),Yj=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Border = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Checkbox with a border"
      border
    />
    <Field
      name="two"
      type="checkbox"
      text="Inline checkbox with border"
      border
      inline
    />
  </Form>
  /* END */

export default Border`,Wj=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"border"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"border"})," property to add a border around the checkbox field."]}),n.jsx(F,{Component:Hj,code:Yj,caption:"border",undent:2,expand:!0})]}),Zj=Object.freeze(Object.defineProperty({__proto__:null,default:Wj},Symbol.toStringTag,{value:"Module"})),Gj=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",type:"checkbox",text:"Inline checkbox",inline:!0}),n.jsx(x,{name:"two",type:"checkbox",text:"Inline checkbox with border",border:!0,inline:!0})]}),Kj=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Inline checkbox"
      inline
    />
    <Field
      name="two"
      type="checkbox"
      text="Inline checkbox with border"
      border
      inline
    />
  </Form>
  /* END */

export default Inline`,Qj=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width."]}),n.jsx(F,{Component:Gj,code:Kj,caption:"inline",undent:2,expand:!0})]}),Xj=Object.freeze(Object.defineProperty({__proto__:null,default:Qj},Symbol.toStringTag,{value:"Module"})),Jj=()=>n.jsx(w,{children:n.jsx(x,{name:"one",type:"checkbox",text:"Big old checkbox",inputClass:"larger"})}),ey=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const InputClass = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Big old checkbox"
      inputClass="larger"
    />
  </Form>
  /* END */

export default InputClass`,ty=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inputClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"inputClass"})," property can be used to add a CSS class to the checkbox input."]}),n.jsx(F,{Component:Jj,code:ey,caption:"inputClass",undent:2,expand:!0})]}),ny=Object.freeze(Object.defineProperty({__proto__:null,default:ty},Symbol.toStringTag,{value:"Module"})),ry=()=>n.jsxs(w,{children:[n.jsx(x,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),n.jsx(x,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),n.jsx(x,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),n.jsx(fe,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),n.jsx(pn,{})]}),oy=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/badger-form'

const DebugForm = () =>
  <Form>
    <Field
      name="message"
      label="Message"
      placeholder="Enter a message"
      required
    />
    <Field
      name="animal"
      label="Animal"
      type="select"
      options={['Anteater', 'Badger', 'Camel']}
      placeholder="Select an animal"
      required
    />
    <Field
      name="terms"
      label="Terms and Conditions"
      type="checkbox"
      text="I agree to the Terms and Conditions"
      required
    />
    <ResetSubmit
      space
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
    <Debug/>
  </Form>

export default DebugForm`,se=({links:e})=>n.jsxs("div",{className:"see-also",children:[n.jsx("h3",{children:"See Also"}),n.jsx("ul",{className:"menu",children:e.map((t,r)=>n.jsx("li",{children:n.jsx(t,{})},r))})]}),i3=()=>n.jsx(Ke,{menu:q2}),sy=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debug"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Debug"})," component can be used in development to debug your form."]}),n.jsxs(D,{children:[n.jsxs("p",{children:['In the words of Robert "Mr T" Burns: ',n.jsx("i",{children:`"The best laid schemes of mice and men gang aft a-gley, and I pity the fool who doesn't have some good debugging tools on hand for when things go a bit pear-shaped"`}),". The example below shows the default behaviour which is to display the form values."]}),n.jsx(Z,{children:"Try updating the form values and see how the debugging data changes."})]}),n.jsx(F,{Component:ry,code:oy,caption:"Debug",expand:!0}),n.jsx(se,{links:[rc]}),n.jsx(i3,{})]}),iy=Object.freeze(Object.defineProperty({__proto__:null,default:sy},Symbol.toStringTag,{value:"Module"})),ly=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debug Properties"}),n.jsx(_e,{}),n.jsx(i3,{})]}),ay=Object.freeze(Object.defineProperty({__proto__:null,default:ly},Symbol.toStringTag,{value:"Module"})),dy=()=>n.jsxs(w,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(pn,{className:"blue surface-4 border bdr-2 pad-2"})]}),cy=`import React from 'react'
import { Form, Field, Debug } from '@/lib/index.js'

const DebugForm = () =>
  /* START */
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug
      className="blue surface-4 border bdr-2 pad-2"
    />
  </Form>
  /* END */

export default DebugForm`,uy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"className"})," property to set the CSS class for the debugging container element."]}),n.jsx(F,{Component:dy,code:cy,caption:"className",undent:2,expand:!0})]}),my=Object.freeze(Object.defineProperty({__proto__:null,default:uy},Symbol.toStringTag,{value:"Module"})),py=()=>n.jsxs(w,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(pn,{color:"orange"})]}),fy=`import React from 'react'
import { Form, Field, Debug } from '@/lib/index.js'

const DebugForm = () =>
  /* START */
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug color="orange"/>
  </Form>
  /* END */

export default DebugForm`,hy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"color"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"color"})," property to set the color for the table(s).  The default value is ",n.jsx("code",{children:"brand"}),"."]}),n.jsx(F,{Component:py,code:fy,caption:"color",undent:2,expand:!0})]}),xy=Object.freeze(Object.defineProperty({__proto__:null,default:hy},Symbol.toStringTag,{value:"Module"})),gy={onSubmit:e=>tr(1e3).then(()=>({ok:!0,values:e})),onSuccess:(e,t)=>tr(1e3).then(()=>t.reset()),resetOnSuccess:!1},by=()=>n.jsxs(w,{debug:!0,...gy,children:[n.jsx(x,{name:"message",label:"Message",required:!0}),n.jsx(fe,{space:!0}),n.jsx(pn,{status:!0})]}),vy=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/badger-form'
import { sleep } from '@abw/badger-utils'

// some dummy handlers to simulate form submission
const formProps = {
  // wait 1s after submission to respond
  onSubmit: values => sleep(1000)
    .then( () => ({ ok: true, values }) ),
  // wait 1s after response then reset form
  onSuccess: (response, form) => sleep(1000)
    .then( () => form.reset() ),
  // don't automatically reset form on success
  resetOnSuccess: false
}

const DebugForm = () =>
  <Form
    debug
    {...formProps}
  >
    <Field
      name="message"
      label="Message"
      required
    />
    <ResetSubmit space/>
    <Debug status/>
  </Form>

export default DebugForm`,jy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"status"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"status"})," property to view the form status. This example includes some dummy handlers to wait 1 second after submission before returning a fake response, and then wait 1 second after receiving that response to reset the form."]}),n.jsx(Z,{children:"Try entering a message and then submit the form.  See how the form status changes when the form is submitted and after a response is received.  Also try NOT entering a message to see the invalid state."})]}),n.jsx(F,{Component:by,code:vy,caption:"status",expand:!0})]}),yy=Object.freeze(Object.defineProperty({__proto__:null,default:jy},Symbol.toStringTag,{value:"Module"})),Fy=()=>n.jsxs(w,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(pn,{status:!0,statusTitle:"Le Status",values:!1})]}),wy=`import React from 'react'
import { Form, Field, Debug } from '@/lib/index.js'

const DebugForm = () =>
  /* START */
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug
      status
      statusTitle="Le Status"
      values={false}
    />
  </Form>
  /* END */

export default DebugForm`,Sy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"statusTitle"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"statusTitle"})," property to change the title for the status table."]}),n.jsx(F,{Component:Fy,code:wy,caption:"statusTitle",undent:2,expand:!0})]}),Cy=Object.freeze(Object.defineProperty({__proto__:null,default:Sy},Symbol.toStringTag,{value:"Module"})),_y=()=>n.jsxs(w,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(pn,{title:"Le Debug"})]}),Ey=`import React from 'react'
import { Form, Field, Debug } from '@/lib/index.js'

const DebugForm = () =>
  /* START */
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug title="Le Debug"/>
  </Form>
  /* END */

export default DebugForm`,Ty=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"title"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"title"})," property to set the title."]}),n.jsx(F,{Component:_y,code:Ey,caption:"title",undent:2,expand:!0})]}),Ly=Object.freeze(Object.defineProperty({__proto__:null,default:Ty},Symbol.toStringTag,{value:"Module"})),ky=()=>n.jsxs(w,{onSubmit:()=>tr(1e3).then(()=>({ok:!0})),children:[n.jsx(x,{name:"message",label:"Message",required:!0}),n.jsx(fe,{space:!0}),n.jsx(pn,{status:!0,values:!1})]}),Ry=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/badger-form'
import { sleep } from '@abw/badger-utils'

const DebugForm = () =>
  <Form
    // dummy handler for demonstration purposes
    onSubmit={
      () => sleep(1000).then(
        () => ({ ok: true })
      )
    }
  >
    <Field
      name="message"
      label="Message"
      required
    />
    <ResetSubmit space/>
    <Debug status values={false}/>
  </Form>

export default DebugForm`,Ny=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"values"}),n.jsxs("p",{children:["The default behaviour is to show the form values.  If you don't want to display the values (e.g. if you're only interested in the form status) then you can set ",n.jsx("code",{children:"values"})," to be false."]}),n.jsx(F,{Component:ky,code:Ry,caption:"values",expand:!0})]}),Oy=Object.freeze(Object.defineProperty({__proto__:null,default:Ny},Symbol.toStringTag,{value:"Module"})),Py=()=>n.jsxs(w,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(pn,{valuesTitle:"Les Values"})]}),Ay=`import React from 'react'
import { Form, Field, Debug } from '@/lib/index.js'

const DebugForm = () =>
  /* START */
  <Form>
    <Field
      name="message"
      label="Message"
    />
    <Debug valuesTitle="Les Values"/>
  </Form>
  /* END */

export default DebugForm`,My=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"valuesTitle"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"valuesTitle"})," property to change the title for the values table."]}),n.jsx(F,{Component:Py,code:Ay,caption:"valuesTitle",undent:2,expand:!0})]}),Iy=Object.freeze(Object.defineProperty({__proto__:null,default:My},Symbol.toStringTag,{value:"Module"})),Dy=()=>n.jsxs(w,{onSubmit:()=>{throw"This is a simulated error"},children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(fe,{space:!0})]}),$y=`import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, ResetSubmit } from '@abw/badger-form'

const ChangedExample = () =>
  <Form
    onSubmit={ () => { throw 'This is a simulated error' } }
  >
    <Field name="field1" label="Field One" required/>
    <Errors fieldErrors/>
    <ResetSubmit space/>
  </Form>

export default ChangedExample`,l3=()=>n.jsx(Ke,{menu:B2}),zy=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Errors"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Errors"})," component can be used to display any form validation errors."]}),n.jsxs(D,{children:[n.jsx("p",{children:"A typical example is shown below."}),n.jsx(Z,{children:"TODO"})]}),n.jsx(F,{Component:Dy,code:$y,caption:"Errors",expand:!0}),n.jsx(l3,{})]}),By=Object.freeze(Object.defineProperty({__proto__:null,default:zy},Symbol.toStringTag,{value:"Module"})),Vy=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Errors Properties"}),n.jsx(_e,{}),n.jsx(l3,{})]}),qy=Object.freeze(Object.defineProperty({__proto__:null,default:Vy},Symbol.toStringTag,{value:"Module"})),Uy=()=>n.jsxs(w,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(fe,{space:!0})]}),Hy=`import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form
    onSubmit={
      () => { throw 'This is a simulated server error' }
    }
  >
    <Field name="field1" label="Field One" required/>
    <Errors fieldErrors/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample`,Yy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fieldErrors"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"fieldErrors"})," property can be set to have the component display any field validation errors."]}),n.jsx(Z,{children:"Try submitting the form without entering anything for Field One."})]}),n.jsx(F,{Component:Uy,code:Hy,caption:"fieldErrors",undent:2,expand:!0})]}),Wy=Object.freeze(Object.defineProperty({__proto__:null,default:Yy},Symbol.toStringTag,{value:"Module"})),Zy=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,prompt:"Oopsies!  Please try again."}),n.jsx(fe,{space:!0})]}),Gy=`import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors fieldErrors prompt="Oopsies!  Please try again."/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample`,Ky=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,prompt:!1}),n.jsx(fe,{space:!0})]}),Qy=`import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors fieldErrors prompt={false}/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample`,Xy=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,prompt:e=>e===1?"There is a single error":`There are ${e} errors`}),n.jsx(fe,{space:!0})]}),Jy=`import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const TitleFnExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors
      fieldErrors
      prompt={
        n => n === 1
          ? 'There is a single error'
          : \`There are \${n} errors\`
      }
    />
    <ResetSubmit space/>
  </Form>
  /* END */

export default TitleFnExample`,e9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prompt"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can be used to set the prompt displayed before any field errors.  You must have the"," ",n.jsx(t3,{})," property set for this to have any effect."]}),n.jsx(Z,{children:"Try leaving one or both fields empty to generate validation error(s)."})]}),n.jsx(F,{Component:Zy,code:Gy,caption:"prompt",undent:2,expand:!0}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"prompt"})," to false if you don't want it displayed."]}),n.jsx(F,{Component:Ky,code:Qy,caption:"no prompt",undent:2,expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can also be a function.  It will be passed the number of error message so that it can generate an appropriate title."]}),n.jsx(F,{Component:Xy,code:Jy,caption:"prompt function",undent:2,expand:!0})]}),t9=Object.freeze(Object.defineProperty({__proto__:null,default:e9},Symbol.toStringTag,{value:"Module"})),n9=()=>n.jsxs(w,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(Ve,{title:"Oh Noes!"}),n.jsx(fe,{space:!0})]}),r9=`import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form
    onSubmit={
      () => {
        throw 'This is a simulated server error'
      }
    }
  >
    <Field name="field1" label="Field One"/>
    <Errors title="Oh Noes!"/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample`,o9=()=>n.jsxs(w,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(Ve,{title:!1}),n.jsx(fe,{space:!0})]}),s9=`import React from 'react'
import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

const ErrorsExample = () =>
  /* START */
  <Form
    onSubmit={
      () => {
        throw 'This is a simulated server error'
      }
    }
  >
    <Field name="field1" label="Field One"/>
    <Errors title={false}/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ErrorsExample`,i9=e=>{const t=Object.entries(e).filter(([,r])=>r.match(/[aeiou]/)).map(([r])=>({name:r,message:`${r} cannot contain vowels`}));return t.length?Promise.reject({errors:t}):Promise.resolve({ok:!0})},l9=()=>n.jsxs(w,{onSubmit:i9,children:[n.jsx("h3",{children:"No Vowels Allowed!"}),n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,title:e=>e===1?"There is an error!":`There are ${e} errors`}),n.jsx(fe,{space:!0})]}),a9=`import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, ResetSubmit } from '@abw/badger-form'

// Simulated server-side validation which will reject
// any values containing vowels.
const noVowels = values => {
  const errors = Object.entries(values)
    .filter(
      ([ , value]) => value.match(/[aeiou]/)
    )
    .map(
      ([name]) => ({
        name,
        message: \`\${name} cannot contain vowels\`
      })
    )
  return errors.length
    ? Promise.reject({ errors })
    : Promise.resolve({ ok: true })
}

const TitleFnExample = () =>
  <Form onSubmit={noVowels}>
    <h3>No Vowels Allowed!</h3>
    <Field name="field1" label="Field One" required/>
    <Field name="field2" label="Field Two" required/>
    <Errors
      fieldErrors
      title={
        n => n === 1
          ? 'There is an error!'
          : \`There are \${n} errors\`
      }
    />
    <ResetSubmit space/>
  </Form>

export default TitleFnExample`,d9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"title"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can be used to set the title for the component."]}),n.jsx(F,{Component:n9,code:r9,caption:"title",undent:2,expand:!0}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"title"})," to false if you don't want it."]}),n.jsx(F,{Component:o9,code:s9,caption:"no title",undent:2,expand:!0}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can also be a function.  It will be passed the number of error message so that it can generate an appropriate title."]}),n.jsx(Z,{children:"Try entering vowels in the fields below.  The title bar for the errors component will depending on there being one or more errors."})]}),n.jsx(F,{Component:l9,code:a9,caption:"title function",expand:!0})]}),c9=Object.freeze(Object.defineProperty({__proto__:null,default:d9},Symbol.toStringTag,{value:"Module"})),u9=()=>n.jsx(w,{children:n.jsx(x,{name:"one",children:n.jsxs("div",{className:"field flex baseline gap-2",children:[n.jsx("label",{className:"nowrap",children:"Field Label"}),n.jsx(ca,{})]})})}),m9=`import { Form, Field, Input } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Input } from '@abw/badger-form'

const FormInput = () =>
  <Form>
    <Field name="one">
      <div className="field flex baseline gap-2">
        <label className="nowrap">Field Label</label>
        <Input/>
      </div>
    </Field>
  </Form>

export default FormInput`,p9="/badger-form/images/animals/badger.jpg",f9="/badger-form/images/animals/kitten.jpg",h9="/badger-form/images/animals/gorilla.jpg",x9={badger:p9,kitten:f9,gorilla:h9},g9=({animal:e,select:t,selected:r})=>n.jsx("div",{className:`animal ${r?"selected":""}`,onClick:t,children:n.jsx("img",{src:x9[e],width:"120",height:"120",alt:e})}),b9=["badger","gorilla","kitten"],v9=()=>{const{value:e,onChange:t}=rt();return n.jsx("div",{className:"animals",children:b9.map(r=>n.jsx(g9,{animal:r,selected:e===r,select:()=>t(r)},r))})},j9=()=>n.jsxs(w,{children:[n.jsx(x,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:v9}),n.jsx(fe,{reset:{className:"outline"},submit:{className:"blue"}})]}),y9=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import PictureInput from './PictureInput.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'
import './animals.css'

const PictureForm = () =>
  <Form>
    <Field
      name="animal" label="Pick an animal guide"
      requiredMessage="You must pick an animal"
      required
      Input={PictureInput}
    />
    <ResetSubmit
      reset={{ className: 'outline' }}
      submit={{ className: 'blue' }}
    />
  </Form>

export default PictureForm`,F9=`import { useField } from '@/lib/index.js'
{/* START */}
import React from 'react'
import Picture from './Picture.jsx'
// PRETEND: import { useField } from '@abw/badger-form'

const animals = ['badger', 'gorilla', 'kitten']

const PictureInput = () => {
  const { value, onChange } = useField()
  return (
    <div className="animals">
      { animals.map(
        animal =>
          <Picture
            key={animal}
            animal={animal}
            selected={value === animal}
            select={() => onChange(animal)}
          />
      )}
    </div>
  )
}

export default PictureInput`,w9=`import badgerUrl  from '/images/animals/badger.jpg'
import kittenUrl  from '/images/animals/kitten.jpg'
import gorillaUrl from '/images/animals/gorilla.jpg'
{/* START */}
import React from 'react'
/* REAL */const URLS = { badger: badgerUrl, kitten: kittenUrl, gorilla: gorillaUrl }/* UNREAL */

const Picture = ({ animal, select, selected }) =>
  <div
    className={\`animal \${selected ? 'selected' : ''}\`}
    onClick={select}
  >
    <img
      /* REAL */src={URLS[animal]}/* UNREAL */// PRETEND: src={\`/\${animal}.jpg\`}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default Picture`,S9=`div.animals {
  display: flex;
  gap: 1rem;
}
div.animal {
  font-size: 0;
  line-height: 0;
  border: 6px solid white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.5s;
}
div.animal:hover {
  border-color: #ccf;
  cursor: pointer;
}
div.animal.selected {
  border-color: #88f;
}`,C9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Input"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Input"})," component is included by the ",n.jsx(Yo,{})," ","component to render the input for a field."]}),n.jsxs("p",{children:["You can define your own content for a field to replace the default"," ",n.jsx(Yo,{}),", but still use the default ",n.jsx("code",{children:"Input"})," component to render the correct input for the field type."]}),n.jsx(F,{Component:u9,code:m9,caption:"Default Input",expand:!0}),n.jsx("h2",{children:"Custom Input"}),n.jsxs("p",{children:["You can define your own component to handle the input for a field using the ",n.jsx("code",{children:"Input"})," field property."]}),n.jsxs(D,{children:[n.jsx("div",{children:n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from.  We're still using the default field layout which provides us with the label and validation message."]})}),n.jsx(lt,{children:"Click on an animal to select it. Try submitting the form without selecting an animal to see the validation error message in effect."})]}),n.jsx(F,{Component:j9,code:y9,caption:"Picture Form",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"PictureInput"})," Component"]}),n.jsxs(D,{children:[n.jsx(Ze,{code:ln(F9),caption:"PictureInput",expand:!0}),n.jsxs("div",{children:[n.jsxs("p",{children:["Here's the implementation of the ",n.jsx("code",{children:"PictureInput"})," component."]}),n.jsxs("p",{children:["On line 8 we call ",n.jsx("code",{children:"useField()"})," to get the current field"," ",n.jsx("code",{children:"value"})," and the ",n.jsx("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 11 and render the"," ",n.jsx("code",{children:"Picture"})," component for each.  We pass the ",n.jsx("code",{children:"selected"})," ","flag on line 16 to indicate if the animal name matches the current"," ",n.jsx("code",{children:"value"}),".  We also pass a ",n.jsx("code",{children:"select"})," ","function on line 17 which calls the ",n.jsx("code",{children:"onChange"})," handler to select the animal."]})]})]}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Picture"})," Component"]}),n.jsxs(D,{children:[n.jsx(Ze,{code:ln(w9),caption:"Picture",expand:!0}),n.jsxs("p",{children:["Here's the ",n.jsx("code",{children:"Picture"})," component.  It simply renders a ",n.jsx("code",{children:"div"})," with an ",n.jsx("code",{children:"onClick"})," handler to call the ",n.jsx("code",{children:"select"})," function passed as a property.  The"," ",n.jsx("code",{children:"animal"})," CSS class is added, along with ",n.jsx("code",{children:"selected"})," ","if the animal is currently selected.  Inside the ",n.jsx("code",{children:"div"})," we render a picture of the animal in an ",n.jsx("code",{children:"img"})," element."]})]}),n.jsx("h2",{children:"Additional Styles"}),n.jsxs(D,{children:[n.jsx(Ze,{code:S9,caption:"animals.css",language:"css",expand:!0}),n.jsx("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."})]}),n.jsx("h2",{className:"hint",children:"Picture Credits"}),n.jsxs("ul",{className:"credits",children:[n.jsxs("li",{children:["Badger photo by ",n.jsx("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",n.jsx("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n.jsxs("li",{children:["Gorilla photo by ",n.jsx("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",n.jsx("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n.jsxs("li",{children:["Kitten photo by ",n.jsx("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",n.jsx("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),_9=Object.freeze(Object.defineProperty({__proto__:null,default:C9},Symbol.toStringTag,{value:"Module"})),E9=()=>n.jsx(w,{children:n.jsx(x,{name:"field1",label:"Field One",children:n.jsxs("div",{className:"field",children:[n.jsx(Wr,{}),n.jsx(Js,{})]})})}),T9=`import { Form, Field, Text, Label } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Text, Label } from '@abw/badger-form'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Field One">
      <div className="field">
        <Label/>
        <Text/>
      </div>
    </Field>
  </Form>

export default LabelExample`,L9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Label"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Label"})," component can be used to add a label to a"," ",n.jsx(X,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),n.jsx(F,{Component:E9,code:T9,caption:"Label",expand:!0})]}),k9=Object.freeze(Object.defineProperty({__proto__:null,default:L9},Symbol.toStringTag,{value:"Module"})),R9=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Field One",help:"This has implicit layout"}),n.jsx(x,{name:"two",label:"Field Two",help:"This has explicit layout",children:n.jsx(cr,{})})]}),N9=`import { Form, Field, Layout } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const FormLayout = () =>
  <Form>
    <Field
      name="one"
      label="Field One"
      help="This has implicit layout"
    />
    <Field
      name="two"
      label="Field Two"
      help="This has explicit layout"
    >
      <Layout/>
    </Field>
  </Form>

export default FormLayout`,O9=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Field One",help:"This is what the layout component does",required:!0,children:e=>n.jsxs("div",{className:P1(e),children:[n.jsx(Wr,{}),n.jsx(ca,{}),n.jsx(xi,{})]})}),n.jsx(K,{})]}),P9=`import { Form, Field, Label, Input, Message, Submit, fieldClass } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit,
// PRETEND:   Label, Input, Message, fieldClass
// PRETEND: } from '@abw/badger-form'

const FormLayout = () =>
  <Form>
    <Field
      name="one"
      label="Field One"
      help="This is what the layout component does"
      required
    >
      { field =>
        <div className={fieldClass(field)}>
          <Label/>
          <Input/>
          <Message/>
        </div>
      }
    </Field>
    <Submit/>
  </Form>

export default FormLayout`,A9=({id:e,topping:t,selected:r,select:o})=>n.jsx("div",{children:n.jsxs("label",{htmlFor:e,className:"checkbox",children:[n.jsx("input",{type:"checkbox",checked:r,onChange:o,id:e}),t]})}),M9=({id:e,toppings:t,selected:r,select:o})=>n.jsx("div",{className:"options",children:t.map(s=>n.jsx(A9,{topping:s,id:`${e}-${s}`,selected:r[s]||!1,select:()=>o(s)},s))}),I9=({value:e,free:t,price:r})=>n.jsx("div",{className:"summary",children:e.map((o,s)=>n.jsxs("div",{className:"selected",children:[n.jsx("div",{children:o}),n.jsx("div",{children:s<t?"Free":r})]},o))}),D9=e=>e.reduce((t,r)=>(t[r]=!0,t),{}),$9=(e,t)=>r=>{e[r]=!e[r],t(Object.entries(e).filter(o=>o[1]).map(o=>o[0]))},z9=()=>{const{id:e,value:t,onChange:r,free:o,price:s,toppings:i}=rt(),l=D9(t),a=$9(l,r);return n.jsxs("div",{className:"toppings field",children:[n.jsx("p",{className:"wide",children:"Select any extra toppings you want on your pizza."}),n.jsxs("p",{className:"pricing wide",children:["The first ",o," are free. Any additional toppings are ",n.jsx("span",{className:"price",children:s})," each."]}),n.jsx(Wr,{}),n.jsxs("div",{className:"selection",children:[n.jsx(M9,{id:e,toppings:i,value:t,selected:l,select:a}),n.jsx(I9,{value:t,free:o,price:s})]})]})},B9={toppings:{Layout:z9,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},V9=()=>n.jsxs(w,{fields:B9,children:[n.jsx(x,{name:"toppings"}),n.jsx(fe,{space:!0,submit:{text:"Order Pizza",className:"blue"}})]}),q9=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import Toppings from './Toppings.jsx'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'
import './pizza.scss'

const fields = {
  toppings: {
    Layout:   Toppings,
    label:    'Pick your toppings',
    default:  [ ],
    free:     3,
    price:    '£1.00',
    toppings: [
      'Ham',
      'Bacon',
      'Onions',
      'Sausage',
      'Pepperoni',
      'Mushrooms',
      'Sweetcorn',
      'Pineapple',
      'Extra Cheese',
    ],
  }
}

const PizzaForm = () =>
  <Form fields={fields}>
    <Field name="toppings"/>
    <ResetSubmit
      space
      submit={{
        text: 'Order Pizza',
        className: 'blue'
      }}
    />
  </Form>

export default PizzaForm`,U9=`import { Label, useField } from '@/lib/index.js'
{/* START */}
import React from 'react'
import Options from './Options.jsx'
import Summary from './Summary.jsx'
// PRETEND: import { Label, useField } from '@abw/badger-form'
import { selectedToppings, toppingSelector } from './Utils.js'

const Toppings = () => {
  const { id, value, onChange, free, price, toppings } = useField()
  const selected = selectedToppings(value)
  const select = toppingSelector(selected, onChange)

  return (
    <div className="toppings field">
      <p className="wide">
        Select any extra toppings you want on your pizza.
      </p>
      <p className="pricing wide">
        The first {free} are free. Any additional toppings
        are <span className="price">{price}</span> each.
      </p>
      <Label/>
      <div className="selection">
        <Options
          id={id} toppings={toppings} value={value}
          selected={selected} select={select}
        />
        <Summary
          value={value} free={free} price={price}
        />
      </div>
    </div>
  )
}
export default Toppings`,H9=`// convert the toppings array to an object
export const selectedToppings = value =>
  value.reduce(
    (selected, option) => {
      selected[option] = true
      return selected
    },
    { }
  )

// select (or unselect) a topping
export const toppingSelector = (selected, onChange) =>
  topping => {
    // toggle the selection
    selected[topping] = ! selected[topping]
    // update the field value
    onChange(
      // extract the names (keys) of all selected toppings
      Object.entries(selected)
        .filter( entry => entry[1] )  // filter by value
        .map( entry => entry[0] )     // return the key
    )
  }`,Y9=`import React from 'react'
import Option from './Option.jsx'

const Options = ({id, toppings, selected, select}) =>
  <div className="options">
    { toppings.map(
      topping =>
        <Option
          key={topping}
          topping={topping}
          id={\`\${id}-\${topping}\`}
          selected={selected[topping] || false}
          select={() => select(topping)}
        />
    )}
  </div>

export default Options`,W9=`import React from 'react'

const Option = ({id, topping, selected, select}) =>
  <div>
    <label htmlFor={id} className="checkbox">
      <input
        type="checkbox"
        checked={selected}
        onChange={select}
        id={id}
      />
      {topping}
    </label>
  </div>

export default Option`,Z9=`import React from 'react'

const Summary = ({value, free, price}) =>
  <div className="summary">
    { value.map(
      (topping, n) =>
        <div className="selected" key={topping}>
          <div>
            {topping}
          </div>
          <div>
            {n < free ? 'Free' : price}
          </div>
        </div>
    )}
  </div>

export default Summary`,G9=`div.toppings {
  background-color: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  p {
    margin: 0;
    font-size: 1.1rem;
    &.pricing {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 1rem;
    }
  }
  div.selection {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: flex-end;
    gap: 1rem;
    div.options {
      padding-left: 1rem;
    }
    div.summary {
      div.selected {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }
}
.dark div.toppings {
  background-color: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}`,K9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Layout"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Layout"})," component is inserted as the default content for a ",n.jsx(X,{})," that doesn't have it's own content."]}),n.jsxs("p",{children:["The two fields in the example below both generate the same output. The first implicitly uses the ",n.jsx("code",{children:"Layout"})," for its content, the second includes it explicitly."]}),n.jsx(F,{Component:R9,code:N9,caption:"Default Layout",expand:!0}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Layout"})," component creates a ",n.jsx("code",{children:"div"})," containing the ",n.jsx($r,{}),", ",n.jsx(sc,{})," and ",n.jsx(e3,{})," components. The ",n.jsx("code",{children:"div"})," will have the ",n.jsx("code",{children:"field"})," CSS class and possibly other classes based on the state of the field (e.g."," ",n.jsx("code",{children:"valid"}),", ",n.jsx("code",{children:"invalid"}),", etc.)  The"," ",n.jsx("code",{children:"fieldClass()"})," utility function can be used to automatically return the correct CSS classes for the field."]}),n.jsxs("div",{children:[n.jsxs("p",{children:["The example below shows how you can roll your own layout that does the same thing as the default ",n.jsx("code",{children:"Layout"})," component."]}),n.jsxs(Z,{children:["Try submitting the form without entering any value in the required field.  You should see that the ",n.jsx("code",{children:"invalid"})," CSS class is added to the field container."]})]})]}),n.jsx(F,{Component:O9,code:P9,caption:"Explicit Layout",expand:!0}),n.jsx("h2",{children:"Custom Layout"}),n.jsxs("p",{children:["You can define your own component to handle the layout for a field using the ",n.jsx("code",{children:"Layout"})," field property."]}),n.jsxs(D,{children:[n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),n.jsx(Z,{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})]}),n.jsx(F,{Component:V9,code:q9,caption:"Pizza Form",expand:!0}),n.jsx(D,{children:n.jsxs("p",{children:["We're defining the schema for the ",n.jsx("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",n.jsx("code",{children:"Form"})," as the"," ",n.jsx("code",{children:"fields"})," property (line 28). In addition to setting the ",n.jsx("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",n.jsx("code",{children:"free"})," toppings (line 11), the"," ",n.jsx("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",n.jsx("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]})}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Toppings"})," Component"]}),n.jsxs("p",{children:["Here's the implementation of the ",n.jsx("code",{children:"Toppings"})," component."]}),n.jsxs(D,{children:[n.jsx(Ze,{code:ln(U9),caption:"Toppings",expand:!0}),n.jsxs("div",{children:[n.jsxs("p",{children:["On line 8 we call ",n.jsx("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"value"})," and"," ",n.jsx("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",n.jsx("code",{children:"free"}),", ",n.jsx("code",{children:"price"})," and"," ",n.jsx("code",{children:"toppings"}),"."]}),n.jsxs("p",{children:["We've got two utility functions that we're importing from our ",n.jsx("code",{children:"Utils.js"})," file.  On line 9 we call"," ",n.jsx("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",n.jsx("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",n.jsx("code",{children:"true"}),"). On line 10 we call the ",n.jsx("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",n.jsx("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),n.jsxs("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",n.jsx("code",{children:"free"})," and ",n.jsx("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",n.jsx($r,{})," ","component to generate the field label. On line 23 we render a custom"," ",n.jsx("code",{children:"Options"})," component and on line 27 a custom"," ",n.jsx("code",{children:"Summary"})," component."]})]})]}),n.jsx("h2",{children:"Utility Functions"}),n.jsx("p",{children:"Here's the definitions for those utility functions."}),n.jsx(Ze,{code:ln(H9),caption:"Utils.js",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Options"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Options"})," component iterates over the available toppings and renders the ",n.jsx("code",{children:"Option"})," component for each.  It passes a custom ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"selected"})," flag and"," ",n.jsx("code",{children:"select"})," function tailored to each option."]}),n.jsx(Ze,{code:ln(Y9),caption:"Options.jsx",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Option"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),n.jsx(Ze,{code:ln(W9),caption:"Option.jsx",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Summary"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),n.jsx(Ze,{code:ln(Z9),caption:"Summary.jsx",expand:!0}),n.jsx("h2",{children:"Additional Styles"}),n.jsx("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),n.jsx(Ze,{code:G9,caption:"pizza.scss",language:"css",expand:!0})]}),Q9=Object.freeze(Object.defineProperty({__proto__:null,default:K9},Symbol.toStringTag,{value:"Module"})),X9=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:n.jsxs(cr,{children:[n.jsx(Wr,{}),n.jsx(ca,{}),n.jsx(xi,{})]})}),n.jsx(K,{})]}),J9=`import { Form, Field, Layout, Label, Input, Message, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label,
// PRETEND:   Input, Message, Submit
// PRETEND: } from '@abw/badger-form'

const MessageExample = () =>
  <Form>
    <Field
      name="field1" label="Field One"
      help="Additional help message"
      validMessage="This is fine!"
      requiredMessage="You must enter a value"
      required
    >
      <Layout>
        <Label/>
        <Input/>
        <Message/>
      </Layout>
    </Field>
    <Submit/>
  </Form>

export default MessageExample`,eF=()=>{const{message:e,help:t}=rt();return n.jsx("div",{className:"small bold mar-t-2 fgc-40 fgd-60",children:e??t})},tF=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",help:"Enter a value",validMessage:"This is fine!",requiredMessage:"You must enter a value",Message:eF,required:!0}),n.jsx(K,{})]}),nF=`import { Form, Field, Submit, useField } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Submit, useField
// PRETEND: } from '@abw/badger-form'

const MyMessage = () => {
  const { message, help } = useField()
  return (
    <div className="small bold mar-t-2 fgc-40 fgd-60">
      { message ?? help }
    </div>
  )
}

const MessageExample = () =>
  <Form>
    <Field
      name="field1"
      label="Field One"
      help="Enter a value"
      validMessage="This is fine!"
      requiredMessage="You must enter a value"
      Message={MyMessage}
      required
    />
    <Submit/>
  </Form>

export default MessageExample`,rF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Message"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Message"})," component is used to add a message underneath a ",n.jsx(X,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),n.jsxs(D,{children:[n.jsxs("p",{children:["If you have defined ",n.jsx("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",n.jsx("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",n.jsx("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),n.jsxs(Z,{children:["Try submitting the form without entering a value.  You should see the ",n.jsx("code",{children:"help"})," message be replaced by the"," ",n.jsx("code",{children:"requiredMessage"})," error message."]})]}),n.jsx(F,{Component:X9,code:J9,caption:"Message",expand:!0}),n.jsx("h2",{children:"Custom Message Component"}),n.jsxs("p",{children:["You can define your own component to handle the message for a field using the ",n.jsx("code",{children:"Message"})," field property."]}),n.jsx(F,{Component:tF,code:nF,caption:"Custom Message Component",expand:!0})]}),oF=Object.freeze(Object.defineProperty({__proto__:null,default:rF},Symbol.toStringTag,{value:"Module"})),sF=()=>n.jsx(w,{children:n.jsxs(x,{name:"hello",label:"Enter a greeting",children:[n.jsx(cr,{}),e=>n.jsxs("div",{className:"info alert",children:["You have entered: ",e.value]})]})}),iF=`import { Form, Field, Layout } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const FieldChildrenExample = () =>
  <Form>
    <Field
      name="hello"
      label="Enter a greeting"
    >
      <Layout/>
      { field =>
        <div className="info alert">
          You have entered: {field.value}
        </div>
      }
    </Field>
  </Form>

export default FieldChildrenExample`,lF=()=>n.jsx(w,{children:n.jsxs(x,{name:"hello",label:"Enter a greeting",children:[n.jsx(cr,{}),n.jsx("div",{className:"info alert",children:n.jsx(A4,{children:e=>`You have entered: ${e.value}`})})]})}),aF=`import { Form, Field, Layout, UseField } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout, UseField } from '@abw/badger-form'

const UseFieldExample = () =>
  <Form>
    <Field
      name="hello"
      label="Enter a greeting"
    >
      <Layout/>
      <div className="info alert">
        <UseField>
          { field => \`You have entered: \${field.value}\`}
        </UseField>
      </div>
    </Field>
  </Form>

export default UseFieldExample`,dF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"UseField"}),n.jsxs("p",{children:["The immediate ",n.jsx(wj,{})," of a ",n.jsx(X,{})," component can be functions that will receive the field context as the first argument."]}),n.jsx(F,{Component:sF,code:iF,caption:"Field Children",expand:!0}),n.jsxs("p",{children:["However, this only works for the immediate children of the ",n.jsx(X,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",n.jsx("code",{children:"div"})," as shown in this example) then you can use the ",n.jsx("code",{children:"UseForm"})," component to provide it."]}),n.jsxs("p",{children:["Don't forget that defining any children of a ",n.jsx(X,{})," component will override the default ",n.jsx(Yo,{})," component, so you'll need to add it manually or define your own layout for the field."]}),n.jsx(F,{Component:lF,code:aF,caption:"UseField",expand:!0})]}),cF=Object.freeze(Object.defineProperty({__proto__:null,default:dF},Symbol.toStringTag,{value:"Module"})),ts=()=>n.jsx(Ke,{menu:A2}),uF=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Components"}),n.jsx(_e,{}),n.jsx(ts,{})]}),mF=Object.freeze(Object.defineProperty({__proto__:null,default:uF},Symbol.toStringTag,{value:"Module"})),pF=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Events"}),n.jsx(_e,{}),n.jsx(ts,{})]}),fF=Object.freeze(Object.defineProperty({__proto__:null,default:pF},Symbol.toStringTag,{value:"Module"})),hF=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} was blurred`);return n.jsxs(w,{children:[n.jsx(x,{name:"foo",label:"The Foo Field",onBlur:r}),n.jsx(x,{name:"bar",label:"The Bar Field",onBlur:r}),e]})},xF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnBlurExample = () => {
  const [msg, setMsg] = useState()
  const onBlur = field =>
    setMsg(\`\${field.label} was blurred\`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onBlur={onBlur}
      />
      <Field
        name="bar" label="The Bar Field"
        onBlur={onBlur}
      />
      {msg}
    </Form>
  )
}
export default OnBlurExample`,gF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onBlur"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onBlur"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),n.jsx(Z,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),n.jsx(F,{Component:hF,code:xF,caption:"onFocus",expand:!0}),n.jsx(se,{links:[zt,rr,or,Jo,es]})]}),bF=Object.freeze(Object.defineProperty({__proto__:null,default:gF},Symbol.toStringTag,{value:"Module"})),vF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnChangeExample = () => {
  const [value, setValue] = useState('')
  return (
    <Form>
      <Field
        name="example" label="Field with onChange"
        onChange={field => setValue(field.value)}
      />
      Current value: {value}
    </Form>
  )
}

export default OnChangeExample`,jF=()=>{const[e,t]=T.useState("");return n.jsxs(w,{children:[n.jsx(x,{name:"example",label:"Field with onChange",onChange:r=>t(r.value)}),"Current value: ",e]})},yF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onChange"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onChange"})," handler to a ",n.jsx(X,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),n.jsx(Z,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),n.jsx(F,{Component:jF,code:vF,caption:"onChange",expand:!0}),n.jsx(se,{links:[Bt,Qr,rr,Jo,es]})]}),FF=Object.freeze(Object.defineProperty({__proto__:null,default:yF},Symbol.toStringTag,{value:"Module"})),wF=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} was focussed`);return n.jsxs(w,{children:[n.jsx(x,{name:"foo",label:"The Foo Field",onFocus:r}),n.jsx(x,{name:"bar",label:"The Bar Field",onFocus:r}),e]})},SF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnFocusExample = () => {
  const [msg, setMsg] = useState()
  const onFocus = field =>
    setMsg(\`\${field.label} was focussed\`)

  return (
    <Form>
      <Field
        name="foo" label="The Foo Field"
        onFocus={onFocus}
      />
      <Field
        name="bar" label="The Bar Field"
        onFocus={onFocus}
      />
      {msg}
    </Form>
  )
}

export default OnFocusExample`,CF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onFocus"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onFocus"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),n.jsx(Z,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),n.jsx(F,{Component:wF,code:SF,caption:"onFocus",expand:!0}),n.jsx(se,{links:[Qr,or,Jo,es]})]}),_F=Object.freeze(Object.defineProperty({__proto__:null,default:CF},Symbol.toStringTag,{value:"Module"})),EF=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} is invalid: ${o.message}`);return n.jsxs(w,{validateOnBlur:!0,children:[n.jsx(x,{name:"foo",label:"Foo Field",required:!0,onInvalid:r}),n.jsx(x,{name:"bar",label:"Bar Field",required:!0,onValid:r,requiredMessage:"You must enter a value"}),e]})},TF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnInvalidExample = () => {
  const [msg, setMsg] = useState()
  const onInvalid = field =>
    setMsg(\`\${field.label} is invalid: \${field.message}\`)

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onInvalid={onInvalid}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={onInvalid}
        requiredMessage="You must enter a value"
      />
      {msg}
    </Form>
  )
}

export default OnInvalidExample`,LF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onInvalid"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onInvalid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),n.jsxs(Z,{children:[n.jsxs("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",n.jsx(zt,{})," option on the"," ",n.jsx(ue,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",n.jsx(Be,{})," so they will fail validation (assuming you haven't entered anything) and the ",n.jsx("code",{children:"onInvalid"})," handler will be called."]}),n.jsxs("p",{children:["Also note the use of ",n.jsx(Ou,{})," to set a custom message for the second field."]})]})]}),n.jsx(F,{Component:EF,code:TF,caption:"onInvalid",expand:!0}),n.jsx(se,{links:[$t,Qr,rr,or,rr,or,Jo]})]}),kF=Object.freeze(Object.defineProperty({__proto__:null,default:LF},Symbol.toStringTag,{value:"Module"})),RF=()=>{const[e,t]=T.useState();return n.jsxs(w,{children:[n.jsx(x,{name:"foo",label:"Foo Field",onLoad:t}),n.jsxs("div",{className:"grid-4 gap-2",children:[n.jsx("button",{type:"button",onClick:()=>e.reset(),children:"Reset"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Hello"),children:"Hello"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Goodbye"),children:"Goodbye"}),n.jsx("button",{type:"button",onClick:()=>e.setFocus(),children:"Focus"})]})]})},NF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnLoadExample = () => {
  const [field, setField] = useState()

  return (
    <Form>
      <Field
        name="foo"
        label="Foo Field"
        onLoad={setField}
      />
      <div className="grid-4 gap-2">
        <button
          type="button"
          onClick={() => field.reset()}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => field.setValue('Hello')}
        >
          Hello
        </button>
        <button
          type="button"
          onClick={() => field.setValue('Goodbye')}
        >
          Goodbye
        </button>
        <button
          type="button"
          onClick={() => field.setFocus()}
        >
          Focus
        </button>
      </div>
    </Form>
  )
}

export default OnLoadExample`,OF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onLoad"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onInvalid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),n.jsx(Z,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),n.jsx(F,{Component:RF,code:NF,caption:"onLoad"}),n.jsx(se,{links:[rr,Qr,or,Jo,es]})]}),PF=Object.freeze(Object.defineProperty({__proto__:null,default:OF},Symbol.toStringTag,{value:"Module"})),AF=()=>{const[e,t]=T.useState();return n.jsxs(w,{validateOnBlur:!0,children:[n.jsx(x,{name:"foo",label:"Foo Field",required:!0,onValid:r=>t(`${r.name} is valid: ${r.value}`)}),n.jsx(x,{name:"bar",label:"Bar Field",required:!0,onValid:r=>t(`${r.name} is valid: ${r.value}`)}),e]})},MF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnValidExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form validateOnBlur>
      <Field
        name="foo" label="Foo Field" required
        onValid={field => setMsg(\`\${field.name} is valid: \${field.value}\`)}
      />
      <Field
        name="bar" label="Bar Field" required
        onValid={field => setMsg(\`\${field.name} is valid: \${field.value}\`)}
      />
      {msg}
    </Form>
  )
}

export default OnValidExample`,IF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onValid"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onValid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),n.jsxs(Z,{children:["Enter some text in one of the fields below and then select the other field.  The ",n.jsx("code",{children:"validateOnBlur"})," option on the ",n.jsx(ue,{})," ","means that the first field will be validated when it loses focus and the ",n.jsx("code",{children:"onValid"})," handler will be called."]})]}),n.jsx(F,{Component:AF,code:MF,caption:"onValid",expand:!0}),n.jsx(se,{links:[$t,rr,Qr,or,es]})]}),DF=Object.freeze(Object.defineProperty({__proto__:null,default:IF},Symbol.toStringTag,{value:"Module"})),$F=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ResetExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
        />
        <Field
          onLoad={setField2}
          value="Initial value"
          name="field2"
          label="Field Two"
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="blue"
          onClick={field1.reset}
        >
          Reset Field One
        </button>
        <button
          className="blue"
          onClick={field2.reset}
        >
          Reset Field Two
        </button>
      </div>
    </>
  )
}

export default ResetExample`,zF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(w,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,value:"Initial value",name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"blue",onClick:e.reset,children:"Reset Field One"}),n.jsx("button",{className:"blue",onClick:r.reset,children:"Reset Field Two"})]})]})},BF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset()"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"reset()"})," function can be called to reset a field to its initial state."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"reset()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),n.jsx(Z,{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})]}),n.jsx(F,{Component:zF,code:$F,caption:"reset()"}),n.jsx(se,{links:[oc,rr,Qr]})]}),VF=Object.freeze(Object.defineProperty({__proto__:null,default:BF},Symbol.toStringTag,{value:"Module"})),qF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetFocusExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
        />
      </Form>
      <div className="flex gap-4">
        <button onClick={() => field1?.setFocus()}>
          Focus Field One
        </button>
        <button onClick={() => field2?.setFocus()}>
          Focus Field Two
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,UF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(w,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus(),children:"Focus Field One"}),n.jsx("button",{onClick:()=>r==null?void 0:r.setFocus(),children:"Focus Field Two"})]})]})},HF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setFocus()"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",n.jsx(wi,{})," property to save a reference to a field context object."]}),n.jsxs("p",{children:["Then call the ",n.jsx("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),n.jsx(Z,{children:"Click on one of the buttons to focus the corresponding field."})]}),n.jsx(F,{Component:UF,code:qF,caption:"setFocus()"}),n.jsxs("p",{children:["You can also focus on fields by name using the ",n.jsx(ue,{})," ",n.jsx(oc,{})," method."]}),n.jsx(se,{links:[oc,rr,Qr]})]}),YF=Object.freeze(Object.defineProperty({__proto__:null,default:HF},Symbol.toStringTag,{value:"Module"})),WF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetInvalidExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="red"
          onClick={() => field1.setInvalid()}
        >
          Invalid Field One
        </button>
        <button
          className="red"
          onClick={() => field2.setInvalid('Naughty!')}
        >
          Invalid Field Two
        </button>
      </div>
    </>
  )
}

export default SetInvalidExample`,ZF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(w,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"red",onClick:()=>e.setInvalid(),children:"Invalid Field One"}),n.jsx("button",{className:"red",onClick:()=>r.setInvalid("Naughty!"),children:"Invalid Field Two"})]})]})},GF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setInvalid()"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setInvalid()"})," function can be called to mark a field as invalid."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"setInvalid()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),n.jsx(Z,{children:"Click on one of the buttons to set the corresponding field to be invalid."})]}),n.jsx(F,{Component:ZF,code:WF,caption:"setFocus()"}),n.jsx(se,{links:[Cj,es]})]}),KF=Object.freeze(Object.defineProperty({__proto__:null,default:GF},Symbol.toStringTag,{value:"Module"})),QF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetValidExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="green"
          onClick={() => field1?.setValid()}
        >
          Valid Field One
        </button>
        <button
          className="green"
          onClick={() => field2?.setValid('Nice one!')}
        >
          Valid Field Two
        </button>
      </div>
    </>
  )
}

export default SetValidExample`,XF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(w,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"green",onClick:()=>e==null?void 0:e.setValid(),children:"Valid Field One"}),n.jsx("button",{className:"green",onClick:()=>r==null?void 0:r.setValid("Nice one!"),children:"Valid Field Two"})]})]})},JF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValid()"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValid()"})," function can be called to mark a field as valid."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"setValid()"})," method on the field object to make it valid.  An optional argument can be provided as the message to display."]})]}),n.jsx(Z,{children:"Click on one of the buttons to set the corresponding field to be valid."})]}),n.jsx(F,{Component:XF,code:QF,caption:"setFocus()"}),n.jsx(se,{links:[_j,Jo]})]}),ew=Object.freeze(Object.defineProperty({__proto__:null,default:JF},Symbol.toStringTag,{value:"Module"})),tw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetValueExample = () => {
  const [field, setField] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal"
          label="Animal"
        />
      </Form>
      <div className="flex gap-4">
        <button onClick={() => field.setValue('Antelope')}>
          Antelope
        </button>
        <button onClick={() => field.setValue('Badger')}>
          Badger
        </button>
        <button onClick={() => field.setValue('Camel')}>
          Camel
        </button>
      </div>
    </>
  )
}

export default SetValueExample`,nw=()=>{const[e,t]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(w,{children:n.jsx(x,{onLoad:t,name:"animal",label:"Animal"})}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>e.setValue("Antelope"),children:"Antelope"}),n.jsx("button",{onClick:()=>e.setValue("Badger"),children:"Badger"}),n.jsx("button",{onClick:()=>e.setValue("Camel"),children:"Camel"})]})]})},rw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetValueExample = () => {
  const [field, setField] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField}
          name="animal"
          label="Animal"
        />
        <div className="flex gap-4">
          <button
            className="green"
            onClick={e => { e.preventDefault(); field.setValue('Antelope') }}
          >
            Antelope
          </button>
          <button
            className="green"
            onClick={e => field.setValue('Badger', e)}
          >
            Badger
          </button>
          <button
            type="button"
            className="green"
            onClick={() => field.setValue('Camel')}
          >
            Camel
          </button>
          <button
            onClick={() => field.setValue('Danger!')}
            className="red"
          >
            Danger!
          </button>
        </div>
      </Form>
    </>
  )
}

export default SetValueExample`,ow=()=>{const[e,t]=T.useState(!1);return n.jsx(n.Fragment,{children:n.jsxs(w,{children:[n.jsx(x,{onLoad:t,name:"animal",label:"Animal"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"green",onClick:r=>{r.preventDefault(),e.setValue("Antelope")},children:"Antelope"}),n.jsx("button",{className:"green",onClick:r=>e.setValue("Badger",r),children:"Badger"}),n.jsx("button",{type:"button",className:"green",onClick:()=>e.setValue("Camel"),children:"Camel"}),n.jsx("button",{onClick:()=>e.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},sw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValue()"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",n.jsx(wi,{})," to capture a reference to the field context object"]}),n.jsx(Z,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),n.jsx(F,{Component:nw,code:tw,caption:"setValue()"}),n.jsx("h2",{children:"Beware Buttons That Submit!"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["One thing to be aware of is that the default behaviour of a"," ",n.jsx("code",{children:"button"})," inside a ",n.jsx("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",n.jsx(ue,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),n.jsxs("p",{children:['The first "Antelope" button calls the'," ",n.jsx("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",n.jsx("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",n.jsx("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),n.jsxs("div",{children:[n.jsxs("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',n.jsx("code",{children:"type"})," to ",n.jsx("code",{children:"button"})," to override the default button ",n.jsx("code",{children:"type"})," of ",n.jsx("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),n.jsx(Z,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),n.jsx(F,{Component:ow,code:rw,caption:"setValue()"}),n.jsxs("p",{children:["You can also set values for one or more fields by name using the"," ",n.jsx(ue,{})," ",n.jsx(Zp,{})," method."]}),n.jsx(se,{links:[Zp,Ej]})]}),iw=Object.freeze(Object.defineProperty({__proto__:null,default:sw},Symbol.toStringTag,{value:"Module"})),lw=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Functions"}),n.jsx(_e,{}),n.jsx(ts,{})]}),aw=Object.freeze(Object.defineProperty({__proto__:null,default:lw},Symbol.toStringTag,{value:"Module"})),dw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const FieldExample = () =>
  <Form>
    <Field
      name="example"
      label="An Example Field"
      type="text"   // default
      required
    />
  </Form>

export default FieldExample`,cw=()=>n.jsx(w,{children:n.jsx(x,{name:"example",label:"An Example Field",type:"text",required:!0})}),uw=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Component"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Field"})," component is used to render a field inside a ",n.jsx(ue,{}),"."]}),n.jsx(F,{Component:cw,code:dw,caption:"Field",expand:!0}),n.jsx(ts,{})]}),mw=Object.freeze(Object.defineProperty({__proto__:null,default:uw},Symbol.toStringTag,{value:"Module"})),pw=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Properties"}),n.jsx(_e,{}),n.jsx(ts,{})]}),fw=Object.freeze(Object.defineProperty({__proto__:null,default:pw},Symbol.toStringTag,{value:"Module"})),hw=`import { Form, Field, Layout } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const ChildFunctions = () =>
  <Form>
    <Field
      name="greeting"
      label="Enter a greeting"
    >
      { field =>
        <h2 className="mar-t-none">
          The {field.name} field
        </h2>
      }
      <Layout/>
      { field =>
        <div>
          Current value is: {field.value}
        </div>
      }
      { field =>
        <div className="flex gap-2 blue mar-t-4">
          <button
            type="button"
            onClick={() => field.setValue('Foo')}
          >
            Foo
          </button>
          <button
            type="button"
            onClick={() => field.setValue('Bar')}
          >
            Bar
          </button>
        </div>
      }
    </Field>
  </Form>

export default ChildFunctions`,xw=()=>n.jsx(w,{children:n.jsxs(x,{name:"greeting",label:"Enter a greeting",children:[e=>n.jsxs("h2",{className:"mar-t-none",children:["The ",e.name," field"]}),n.jsx(cr,{}),e=>n.jsxs("div",{children:["Current value is: ",e.value]}),e=>n.jsxs("div",{className:"flex gap-2 blue mar-t-4",children:[n.jsx("button",{type:"button",onClick:()=>e.setValue("Foo"),children:"Foo"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Bar"),children:"Bar"})]})]})}),gw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"children"}),n.jsxs("p",{children:["You can define children of a field, either as components or functions. Components can access the field context via ",n.jsx("code",{children:"useField"}),". Functions receive the field context as the first argument."]}),n.jsxs("p",{children:["Note that if you define children for the field then it will replace the default ",n.jsx(Yo,{})," component.  In this case it's up to you to render the field content."]}),n.jsxs("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",n.jsx(Yo,{})," component manually."]}),n.jsx(F,{Component:xw,code:hw,caption:"children",expand:!0})]}),bw=Object.freeze(Object.defineProperty({__proto__:null,default:gw},Symbol.toStringTag,{value:"Module"})),vw=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const ClassNameExample = () =>
  /* START */
  <Form>
    <Field
      name="field1"
      label="Hello World!"
      className="width-12rem"
    />
    <Field
      name="field2"
      label="Hello World!"
      prefix="£"
      suffix=".00"
      className="width-12rem"
    />
  </Form>
  /* END */

export default ClassNameExample`,jw=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Hello World!",className:"width-12rem"}),n.jsx(x,{name:"field2",label:"Hello World!",prefix:"£",suffix:".00",className:"width-12rem"})]}),yw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the input container."]}),n.jsx(F,{Component:jw,code:vw,caption:"className",expand:!0})]}),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:yw},Symbol.toStringTag,{value:"Module"})),ww=`import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const DefaultExample = () =>
  <Form>
    <Field
      name="animal"
      label="Favourite animal"
      default="Badger"
    />
    <Reset/>
  </Form>

export default DefaultExample`,Sw=()=>n.jsxs(w,{children:[n.jsx(x,{name:"animal",label:"Favourite animal",default:"Badger"}),n.jsx(ur,{})]}),Cw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"default"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"default"})," property can be used to define a default value for a field."]}),n.jsx(F,{Component:Sw,code:ww,caption:"default"})]}),_w=Object.freeze(Object.defineProperty({__proto__:null,default:Cw},Symbol.toStringTag,{value:"Module"})),Ew=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const HelpExample = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      help="Enter the email address that you registered with"
      required
    />
    <Submit/>
  </Form>

export default HelpExample`,Tw=()=>n.jsxs(w,{children:[n.jsx(x,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),n.jsx(K,{})]}),Lw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"help"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),n.jsx("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),n.jsx(Z,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),n.jsx(F,{Component:Tw,code:Ew,caption:"help"}),n.jsx(se,{links:[Dr,$r,Be,$t,Ct]})]}),kw=Object.freeze(Object.defineProperty({__proto__:null,default:Lw},Symbol.toStringTag,{value:"Module"})),Rw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,Nw=()=>n.jsx(w,{children:n.jsx(x,{name:"field1",label:"Hello World!"})}),Ow=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const fields = {
  field1: {
    label: 'This is field one',
  },
  field2: {
    label: 'This is field two',
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Field name="field2" label="A different label"/>
  </Form>

export default FormFieldsExample`,Pw={field1:{label:"This is field one"},field2:{label:"This is field two"}},Aw=()=>n.jsxs(w,{fields:Pw,children:[n.jsx(x,{name:"field1"}),n.jsx(x,{name:"field2",label:"A different label"})]}),Mw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"label"}),n.jsxs("p",{children:["Add a label to the field with the ",n.jsx("code",{children:"label"})," property."]}),n.jsx(F,{Component:Nw,code:Rw,caption:"name",expand:!0}),n.jsxs(D,{children:[n.jsxs("p",{children:["Like all other field properties, they can be defined via ",n.jsx(Ct,{})," ","on the ",n.jsx(ue,{}),".  If you explicitly set a ",n.jsx("code",{children:"label"})," on the"," ",n.jsx(X,{})," then it will take precedence."]}),n.jsxs(lt,{children:["Note how the first field has the ",n.jsx("code",{children:"label"})," defined in the"," ",n.jsx(Ct,{})," but the second defines its own ",n.jsx("code",{children:"label"})," ","which is used instead of the one defined in the ",n.jsx(Ct,{}),"."]})]}),n.jsx(F,{Component:Aw,code:Ow,caption:"Form fields",expand:!0}),n.jsx(se,{links:[Dr,Ct]})]}),Iw=Object.freeze(Object.defineProperty({__proto__:null,default:Mw},Symbol.toStringTag,{value:"Module"})),Dw=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default NameExample`,$w=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1"}),n.jsx(K,{})]}),zw=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const fields = {
  field1: {
    label: 'This is field one',
    required: true
  }
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default FormFieldsExample`,Bw={field1:{label:"This is field one",required:!0}},Vw=()=>n.jsxs(w,{fields:Bw,children:[n.jsx(x,{name:"field1"}),n.jsx(K,{})]}),qw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"name"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"name"})," is the only required property for a ",n.jsx(X,{}),". It is used as the key to set the ",n.jsx(ue,{})," value."]}),n.jsxs(Z,{children:["Enter some text in the input field.  The ",n.jsx(Br,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),n.jsx(F,{Component:$w,code:Dw,caption:"name",expand:!0}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can set the ",n.jsx(Ct,{})," property on the ",n.jsx(ue,{})," as an object containing additional properties for each field.  The"," ",n.jsx("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",n.jsx(X,{})," will override them."]}),n.jsxs(lt,{children:["Note how the ",n.jsx(X,{})," has now got a ",n.jsx($r,{})," and the"," ",n.jsx(Be,{})," property is set."]})]}),n.jsx(F,{Component:Vw,code:zw,caption:"Form fields",expand:!0}),n.jsx(se,{links:[$r,Ct]})]}),Uw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),Hw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const PlaceholderExample = () =>
  <Form>
    <Field
      name="name" label="Your Name"
      placeholder="Enter your name"
    />
  </Form>

export default PlaceholderExample`,Yw=()=>n.jsx(w,{children:n.jsx(x,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),Ww=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),n.jsx(F,{Component:Yw,code:Hw,caption:"placeholder",expand:!0}),n.jsx(se,{links:[Dr,Ct]})]}),Zw=Object.freeze(Object.defineProperty({__proto__:null,default:Ww},Symbol.toStringTag,{value:"Module"})),Gw=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const CardSVG =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className="icon"
  >
    <path
      d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
      stroke="currentColor"
    />
  </svg>

const PrefixExample = () =>
  <Form>
    <Field
      name="money" type="number"
      label="Price"
      prefix="$"
    />
    <Field
      name="card1" type="number"
      label="Card Number"
      prefix={CardSVG}
      required
    />
    <Field
      name="card2" type="number"
      label="Card Number"
      prefix={CardSVG}
      prefixClass="shaded lined"
      required
    />
    <Submit/>
  </Form>

export default PrefixExample`,Kp=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"icon",children:n.jsx("path",{d:"M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z",stroke:"currentColor"})}),Kw=()=>n.jsxs(w,{children:[n.jsx(x,{name:"money",type:"number",label:"Price",prefix:"$"}),n.jsx(x,{name:"card1",type:"number",label:"Card Number",prefix:Kp,required:!0}),n.jsx(x,{name:"card2",type:"number",label:"Card Number",prefix:Kp,prefixClass:"shaded lined",required:!0}),n.jsx(K,{})]}),Qw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prefix"}),n.jsxs("p",{children:["You can add a ",n.jsx("code",{children:"prefix"})," to a ",n.jsx("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",n.jsx("code",{children:"money"}),", ",n.jsx("code",{children:"date"}),", etc.  The prefix can be text, an SVG icon or any other JSX fragment."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prefixClass"})," property can be used to set a CSS class for the prefix.  Badger CSS provides two built in styles: "," ",n.jsx("code",{children:"lined"})," to add a dividing line, and ",n.jsx("code",{children:"shaded"})," to add some background shading."]}),n.jsx(F,{Component:Kw,code:Gw,caption:"prefix",expand:!0}),n.jsx(se,{links:[J2]})]}),Xw=Object.freeze(Object.defineProperty({__proto__:null,default:Qw},Symbol.toStringTag,{value:"Module"})),Jw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SuffixExample = () =>
  <Form>
    <Field
      name="suffix"
      type="password"
      label="Enter your password"
      suffix="🔒"
    />
  </Form>

export default SuffixExample`,eS=()=>n.jsx(w,{children:n.jsx(x,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),tS=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const UserSVG =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="icon"
  >
    <path
      d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
      fill="currentColor"
    />
  </svg>

const KeySVG =
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="icon"
  >
    <path
      d="M326,364C312.322,364 298.962,362.46 286.149,359.542L266.846,378.846C258.412,387.279 246.994,392 235,392C235,392 224,392 224,392L224,403C224,427.938 203.938,448 179,448C179,448 168,448 168,448L168,459C168,483.937 147.938,504 123,504L53,504C28.062,504 8,483.937 8,459L8,389C8,377.006 12.721,365.588 21.154,357.154C21.154,357.154 152.458,225.851 152.458,225.851C149.54,213.038 148,199.678 148,186C148,87.695 227.695,8 326,8C424.305,8 504,87.695 504,186C504,284.305 424.305,364 326,364ZM56,456L120,456L120,424C120,410.745 130.745,400 144,400L176,400L176,368C176,354.745 186.745,344 200,344L233.809,344L262.042,315.767C268.394,309.415 277.761,307.142 286.317,309.876C298.805,313.866 312.182,316 326,316C397.795,316 456,257.795 456,186C456,114.205 397.795,56 326,56C254.205,56 196,114.205 196,186C196,199.818 198.134,213.195 202.124,225.683C204.858,234.239 202.585,243.606 196.233,249.958L56,390.191L56,456ZM363.942,110.391C384.731,110.391 401.609,127.269 401.609,148.058C401.609,168.847 384.731,185.725 363.942,185.725C343.153,185.725 326.275,168.847 326.275,148.058C326.275,127.269 343.153,110.391 363.942,110.391Z"
      fill="currentColor"
    />
  </svg>

const PrefixSuffixExample = () =>
  <Form>
    <Field
      name="password"
      type="password"
      label="Password with both prefix and suffix"
      prefix={UserSVG}
      suffix={KeySVG}
      prefixClass="lined shaded"
      suffixClass="lined shaded"
      required
    />
    <Submit/>
  </Form>

export default PrefixSuffixExample`,nS=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"icon",children:n.jsx("path",{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z",fill:"currentColor"})}),rS=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"icon",children:n.jsx("path",{d:"M326,364C312.322,364 298.962,362.46 286.149,359.542L266.846,378.846C258.412,387.279 246.994,392 235,392C235,392 224,392 224,392L224,403C224,427.938 203.938,448 179,448C179,448 168,448 168,448L168,459C168,483.937 147.938,504 123,504L53,504C28.062,504 8,483.937 8,459L8,389C8,377.006 12.721,365.588 21.154,357.154C21.154,357.154 152.458,225.851 152.458,225.851C149.54,213.038 148,199.678 148,186C148,87.695 227.695,8 326,8C424.305,8 504,87.695 504,186C504,284.305 424.305,364 326,364ZM56,456L120,456L120,424C120,410.745 130.745,400 144,400L176,400L176,368C176,354.745 186.745,344 200,344L233.809,344L262.042,315.767C268.394,309.415 277.761,307.142 286.317,309.876C298.805,313.866 312.182,316 326,316C397.795,316 456,257.795 456,186C456,114.205 397.795,56 326,56C254.205,56 196,114.205 196,186C196,199.818 198.134,213.195 202.124,225.683C204.858,234.239 202.585,243.606 196.233,249.958L56,390.191L56,456ZM363.942,110.391C384.731,110.391 401.609,127.269 401.609,148.058C401.609,168.847 384.731,185.725 363.942,185.725C343.153,185.725 326.275,168.847 326.275,148.058C326.275,127.269 343.153,110.391 363.942,110.391Z",fill:"currentColor"})}),oS=()=>n.jsxs(w,{children:[n.jsx(x,{name:"password",type:"password",label:"Password with both prefix and suffix",prefix:nS,suffix:rS,prefixClass:"lined shaded",suffixClass:"lined shaded",required:!0}),n.jsx(K,{})]}),sS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"suffix"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"suffix"})," property can be used to a a suffix to a field. This can be text, an SVG icon or other JSX fragment."]}),n.jsx(F,{Component:eS,code:Jw,caption:"suffix",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"suffixClass"})," property can be used to set a CSS class for the suffix.  Badger CSS provides two built in styles: "," ",n.jsx("code",{children:"lined"})," to add a dividing line, and ",n.jsx("code",{children:"shaded"})," to add some background shading."]}),n.jsx(F,{Component:oS,code:tS,caption:"prefix and suffix",expand:!0}),n.jsx(se,{links:[X2]})]}),iS=Object.freeze(Object.defineProperty({__proto__:null,default:sS},Symbol.toStringTag,{value:"Module"})),lS=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const TypeExample = () =>
  <Form>
    <Field
      name="field1"
      label="Text Field"
    />
    <Field
      name="field2"
      type="textarea"
      label="TextArea Field"
    />
    <Field
      name="field3"
      type="number"
      label="Number Field"
    />
    <Field
      name="field4"
      type="date"
      label="Date Field"
    />
    <Field
      name="field5"
      type="select"
      label="Select Field"
      options={['Badger', 'Ferret', 'Stoat']}
    />
    <Field
      name="field6"
      type="radio"
      label="Radio Button Field"
      options={['No', 'Maybe', 'Yes']}
    />
    <Field
      name="field7"
      type="checkbox"
      label="Checkbox Field"
      text="I like badgers"
    />
  </Form>

export default TypeExample`,aS=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Text Field"}),n.jsx(x,{name:"field2",type:"textarea",label:"TextArea Field"}),n.jsx(x,{name:"field3",type:"number",label:"Number Field"}),n.jsx(x,{name:"field4",type:"date",label:"Date Field"}),n.jsx(x,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]}),n.jsx(x,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),n.jsx(x,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),dS=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const fields = {
  field1: {
    label:   'Text Field',
  },
  field2: {
    type:    'textarea',
    label:   'TextArea Field',
  },
  field3: {
    type:    'number',
    label:   'Number Field',
  },
  field4: {
    type:    'date',
    label:   'Date Field',
  },
  field5: {
    type:    'select',
    label:   'Select Field',
    options: ['Badger', 'Ferret', 'Stoat']
  },
  field6: {
    type:    'radio',
    label:   'Radio Button Field',
    options: ['No', 'Maybe', 'Yes']
  },
  field7: {
    type:    'checkbox',
    label:   'Checkbox Field',
    text:    'I like badgers'
  },
}

const FormFieldsExample = () =>
  <Form fields={fields}>
    <Field name="field1"/>
    <Field name="field2"/>
    <Field name="field3"/>
    <Field name="field4"/>
    <Field name="field5"/>
    <Field name="field6"/>
    <Field name="field7"/>
  </Form>

export default FormFieldsExample`,cS={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},uS=()=>n.jsxs(w,{fields:cS,children:[n.jsx(x,{name:"field1"}),n.jsx(x,{name:"field2"}),n.jsx(x,{name:"field3"}),n.jsx(x,{name:"field4"}),n.jsx(x,{name:"field5"}),n.jsx(x,{name:"field6"}),n.jsx(x,{name:"field7"})]}),mS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"type"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",n.jsx("code",{children:"text"})," corresponding to the ",n.jsx(ic,{})," input component.  Other values can be"," ",n.jsx("code",{children:"textarea"})," (see ",n.jsx(Pj,{}),"),"," ",n.jsx("code",{children:"checkbox"})," (see ",n.jsx(r3,{}),"),"," ",n.jsx("code",{children:"radio"})," (see ",n.jsx(o3,{}),"),"," ",n.jsx("code",{children:"select"})," (see ",n.jsx(s3,{}),") and"," ",n.jsx("code",{children:"hidden"})," (see ",n.jsx($j,{}),") corresponding to the basic HTML input types."]}),n.jsxs("p",{children:["You can also set ",n.jsx("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",n.jsx("code",{children:"password"}),", ",n.jsx("code",{children:"email"}),","," ",n.jsx("code",{children:"number"}),", ",n.jsx("code",{children:"date"}),", ",n.jsx("code",{children:"color"}),", and so on.  These use the same basic ",n.jsx(ic,{})," input component as for ",n.jsx("code",{children:"text"})," types, but with the ",n.jsx("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),n.jsx(Z,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),n.jsx(F,{Component:aS,code:lS,caption:"type",expand:!0}),n.jsxs(D,{children:[n.jsxs("p",{children:["As with all other ",n.jsx(X,{})," properties, they can be defined using"," ",n.jsx(Ct,{})," set on the ",n.jsx(ue,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),n.jsxs(lt,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",n.jsx(Br,{})," component). Note that the form data will only include fields that are present in the ",n.jsx(ue,{}),".  The ",n.jsx("code",{children:"field5"})," field definition is effectively ignored."]})]}),n.jsx(F,{Component:uS,code:dS,caption:"Form fields",expand:!0}),n.jsx(se,{links:[Dr,$r,Ct,zj]})]}),pS=Object.freeze(Object.defineProperty({__proto__:null,default:mS},Symbol.toStringTag,{value:"Module"})),fS=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Validation"}),n.jsx(_e,{}),n.jsx(ts,{})]}),hS=Object.freeze(Object.defineProperty({__proto__:null,default:fS},Symbol.toStringTag,{value:"Module"})),xS={alice:!0,bob:!0,charlie:!0},gS={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(e,t,r,o)=>{e.length<3&&o({message:"Your username must be at least 3 characters"}),xS[e.toLowerCase()]?o({message:"Sorry, that username is taken"}):r({message:"That username is available"})}}},bS=()=>n.jsxs(w,{fields:gS,children:[n.jsx(x,{name:"username"}),n.jsx(K,{})]}),vS=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const existingUsers = {
  alice:   true,
  bob:     true,
  charlie: true,
}

const fields = {
  username: {
    label: 'Username',
    help:  'Choose a username (minimum length: 3)',
    validateOnChange: true,
    minValidateLength: 3,
    validate: (value, field, resolve, reject) => {
      if (value.length < 3) {
        reject({ message: 'Your username must be at least 3 characters' })
      }
      if (existingUsers[value.toLowerCase()]) {
        reject({ message: 'Sorry, that username is taken' })
      }
      else {
        resolve({ message: 'That username is available' })
      }
    }
  }
}

const MinValidateLengthExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default MinValidateLengthExample`,jS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"minValidateLength"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can set the ",n.jsx(Bt,{})," property flag to enable validation any time the field value changes.  The"," ",n.jsx("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),n.jsxs(Z,{children:["Enter a username in the form below.  The usernames ",n.jsx("code",{children:"alice"}),",",n.jsx("code",{children:"bob"})," and ",n.jsx("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),n.jsx(F,{Component:bS,code:vS,caption:"minValidateLength"}),n.jsx(se,{links:[Be,$t,zt,Bt]})]}),yS=Object.freeze(Object.defineProperty({__proto__:null,default:jS},Symbol.toStringTag,{value:"Module"})),FS=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1"
      label="Optional Field"
    />
    <Field
      name="field2"
      label="Another Optional Field"
      optionalLabel="Nice to have"
    />
  </Form>

export default OptionalLabel`,wS=()=>n.jsxs(w,{showOptional:!0,optionalLabel:"Not required",children:[n.jsx(x,{name:"field1",label:"Optional Field"}),n.jsx(x,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),SS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionalLabel"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",n.jsx(Be,{}),") that have the"," ",n.jsx(zr,{})," option set.  You can set it on individual"," ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{})," to act as a default for all fields."]}),n.jsx(F,{Component:wS,code:FS,caption:"optionalLabel",expand:!0}),n.jsx(se,{links:[Be,Tn,zr,Xo]})]}),CS=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"})),_S=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const fields = {
  upper: {
    label: 'Converted to UPPER CASE',
    prepareValue: value => value.toUpperCase()
  }
}

const PrepareValue = () =>
  <Form fields={fields}>
    <Field name="upper"/>
  </Form>

export default PrepareValue`,ES={upper:{label:"Converted to UPPER CASE",prepareValue:e=>e.toUpperCase()}},TS=()=>n.jsx(w,{fields:ES,children:n.jsx(x,{name:"upper"})}),LS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prepareValue"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can add a ",n.jsx("code",{className:"code",children:"prepareValue"})," function to a ",n.jsx(X,{})," to prepare the value before it's set."]}),n.jsx(Z,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),n.jsx(F,{Component:TS,code:_S,caption:"onChange",expand:!0}),n.jsx(se,{links:[$t,zt,Bt]})]}),kS=Object.freeze(Object.defineProperty({__proto__:null,default:LS},Symbol.toStringTag,{value:"Module"})),RS=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(K,{})]}),NS=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,OS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"required"}),n.jsxs(D,{align:"end",children:[n.jsxs("p",{children:["You can add a ",n.jsx("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),n.jsx(Z,{children:"Try submitting the form without entering anything in the field input."})]}),n.jsx(F,{Component:RS,code:NS,caption:"required",expand:!0}),n.jsx(se,{links:[Tn,Xo,Ou,zt,Bt]})]}),PS=Object.freeze(Object.defineProperty({__proto__:null,default:OS},Symbol.toStringTag,{value:"Module"})),AS=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const RequiredLabel = () =>
  <Form showRequired requiredLabel="Important!">
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Another Required Field"
      requiredLabel="Very Important!"
      required
    />
  </Form>

export default RequiredLabel`,MS=()=>n.jsxs(w,{showRequired:!0,requiredLabel:"Important!",children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(x,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0})]}),IS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredLabel"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",n.jsx(Be,{})," fields that have the ",n.jsx(Tn,{})," option enabled.  You can set it on individual ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{}),"."]}),n.jsx(F,{Component:MS,code:AS,caption:"requiredLabel",expand:!0}),n.jsx(se,{links:[Be,Tn,zr,si]})]}),DS=Object.freeze(Object.defineProperty({__proto__:null,default:IS},Symbol.toStringTag,{value:"Module"})),$S=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const RequiredLabel = () =>
  <Form requiredMessage="Nothing will come of nothing">
    <Field
      name="foo" label="Foo" required
    />
    <Field
      name="bar" label="Bar" required
      requiredMessage="You really MUST enter a value"
    />
    <Submit/>
  </Form>

export default RequiredLabel`,zS=()=>n.jsxs(w,{requiredMessage:"Nothing will come of nothing",children:[n.jsx(x,{name:"foo",label:"Foo",required:!0}),n.jsx(x,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),n.jsx(K,{})]}),BS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredMessage"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",n.jsx(Be,{})," fields that aren't completed."]}),n.jsxs("p",{children:["You can set it on individual ",n.jsx(X,{})," components or on the parent"," ",n.jsx(ue,{})," to act as the default for all fields."]})]}),n.jsxs(Z,{children:["Try submitting the form without entering any values.  You should see the form-wide ",n.jsx("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),n.jsx(F,{Component:zS,code:$S,caption:"requiredMessage",expand:!0}),n.jsx(se,{links:[Be,Tn,Xo,Bt,zt]})]}),VS=Object.freeze(Object.defineProperty({__proto__:null,default:BS},Symbol.toStringTag,{value:"Module"})),qS=()=>n.jsxs(w,{showOptional:!0,children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(x,{name:"field2",label:"Optional Field"})]}),US=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ShowOptional = () =>
  <Form showOptional>
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowOptional`,HS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showOptional"}),n.jsxs("p",{children:["If a field is ",n.jsx("b",{children:"NOT"})," marked as ",n.jsx(Be,{})," then it is optional. If you set the ",n.jsx("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{})," to act as a default for all fields."]}),n.jsxs("p",{children:["You can use the ",n.jsx(si,{})," property to change the text of the label that is displayed."]}),n.jsx(F,{Component:qS,code:US,caption:"showOptional",expand:!0}),n.jsx(se,{links:[Be,si,Tn,Xo]})]}),YS=Object.freeze(Object.defineProperty({__proto__:null,default:HS},Symbol.toStringTag,{value:"Module"})),WS=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),n.jsx(x,{name:"field2",label:"Optional Field"})]}),ZS=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ShowRequired = () =>
  <Form>
    <Field
      name="field1"
      label="Required Field"
      required showRequired
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowRequired`,GS=()=>n.jsxs(w,{showRequired:!0,children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(x,{name:"field2",label:"Optional Field"})]}),KS=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1"
      label="Required Field"
      required
    />
    <Field
      name="field2"
      label="Optional Field"
    />
  </Form>

export default ShowRequiredForm`,QS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showRequired"}),n.jsxs("p",{children:["If a ",n.jsx(X,{})," is marked as ",n.jsx(Be,{})," then the"," ",n.jsx("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),n.jsx(F,{Component:WS,code:ZS,caption:"showRequired on Field",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"showRequired"})," property can also be added to the"," ",n.jsx(ue,{})," to have it apply to all ",n.jsx(Be,{})," fields."]}),n.jsx(F,{Component:GS,code:KS,caption:"showRequired on Form",expand:!0}),n.jsx(se,{links:[Be,Xo,zr,si]})]}),XS=Object.freeze(Object.defineProperty({__proto__:null,default:QS},Symbol.toStringTag,{value:"Module"}));function Xr(e){this._maxSize=e,this.clear()}Xr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Xr.prototype.get=function(e){return this._values[e]};Xr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var JS=/[^.^\]^[]+|(?=\[\]|\.\.)/g,a3=/^\d+$/,eC=/^\d/,tC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,nC=/^\s*(['"]?)(.*?)(\1)\s*$/,Au=512,Qp=new Xr(Au),Xp=new Xr(Au),Jp=new Xr(Au),d3={Cache:Xr,split:lc,normalizePath:Ka,setter:function(e){var t=Ka(e);return Xp.get(e)||Xp.set(e,function(o,s){for(var i=0,l=t.length,a=o;i<l-1;){var d=t[i];if(d==="__proto__"||d==="constructor"||d==="prototype")return o;a=a[t[i++]]}a[t[i]]=s})},getter:function(e,t){var r=Ka(e);return Jp.get(e)||Jp.set(e,function(s){for(var i=0,l=r.length;i<l;)if(s!=null||!t)s=s[r[i++]];else return;return s})},join:function(e){return e.reduce(function(t,r){return t+(Mu(r)||a3.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){rC(Array.isArray(e)?e:lc(e),t,r)}};function Ka(e){return Qp.get(e)||Qp.set(e,lc(e).map(function(t){return t.replace(nC,"$2")}))}function lc(e){return e.match(JS)||[""]}function rC(e,t,r){var o=e.length,s,i,l,a;for(i=0;i<o;i++)s=e[i],s&&(iC(s)&&(s='"'+s+'"'),a=Mu(s),l=!a&&/^\d+$/.test(s),t.call(r,s,a,l,i,e))}function Mu(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function oC(e){return e.match(eC)&&!e.match(a3)}function sC(e){return tC.test(e)}function iC(e){return!Mu(e)&&(oC(e)||sC(e))}var c3={exports:{}};c3.exports=function(e){return u3(lC(e),e)};c3.exports.array=u3;function u3(e,t){var r=e.length,o=new Array(r),s={},i=r,l=aC(t),a=dC(e);for(t.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||d(e[i],i,new Set);return o;function d(c,u,f){if(f.has(c)){var g;try{g=", node was:"+JSON.stringify(c)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[u]){s[u]=!0;var C=l.get(c)||new Set;if(C=Array.from(C),u=C.length){f.add(c);do{var _=C[--u];d(_,a.get(_),f)}while(u);f.delete(c)}o[--r]=c}}}function lC(e){for(var t=new Set,r=0,o=e.length;r<o;r++){var s=e[r];t.add(s[0]),t.add(s[1])}return Array.from(t)}function aC(e){for(var t=new Map,r=0,o=e.length;r<o;r++){var s=e[r];t.has(s[0])||t.set(s[0],new Set),t.has(s[1])||t.set(s[1],new Set),t.get(s[0]).add(s[1])}return t}function dC(e){for(var t=new Map,r=0,o=e.length;r<o;r++)t.set(e[r],r);return t}const cC=Object.prototype.toString,uC=Error.prototype.toString,mC=RegExp.prototype.toString,pC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",fC=/^Symbol\((.*)\)(.*)$/;function hC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function ef(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return hC(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return pC.call(e).replace(fC,"Symbol($1)");const o=cC.call(e).slice(8,-1);return o==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):o==="Error"||e instanceof Error?"["+uC.call(e)+"]":o==="RegExp"?mC.call(e):null}function Xn(e,t){let r=ef(e,t);return r!==null?r:JSON.stringify(e,function(o,s){let i=ef(this[o],t);return i!==null?i:s},2)}function m3(e){return e==null?[]:[].concat(e)}let p3,xC=/\$\{\s*(\w+)\s*\}/g;p3=Symbol.toStringTag;class xt extends Error{static formatError(t,r){const o=r.label||r.path||"this";return o!==r.path&&(r=Object.assign({},r,{path:o})),typeof t=="string"?t.replace(xC,(s,i)=>Xn(r[i])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,o,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[p3]="Error",this.name="ValidationError",this.value=r,this.path=o,this.type=s,this.errors=[],this.inner=[],m3(t).forEach(l=>{if(xt.isError(l)){this.errors.push(...l.errors);const a=l.inner.length?l.inner:[l];this.inner.push(...a)}else this.errors.push(l)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,xt)}}let rn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:o})=>{const s=o!=null&&o!==r?` (cast from the value \`${Xn(o,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Xn(r,!0)}\``+s:`${e} must match the configured type. The validated value was: \`${Xn(r,!0)}\``+s}},Yt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},gC={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ac={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},bC={isValue:"${path} field must be ${value}"},vC={noUnknown:"${path} field has unspecified keys: ${unknown}"},jC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},yC={notType:e=>{const{path:t,value:r,spec:o}=e,s=o.types.length;if(Array.isArray(r)){if(r.length<s)return`${t} tuple value has too few items, expected a length of ${s} but got ${r.length} for value: \`${Xn(r,!0)}\``;if(r.length>s)return`${t} tuple value has too many items, expected a length of ${s} but got ${r.length} for value: \`${Xn(r,!0)}\``}return xt.formatError(rn.notType,e)}};Object.assign(Object.create(null),{mixed:rn,string:Yt,number:gC,date:ac,object:vC,array:jC,boolean:bC,tuple:yC});const f3=e=>e&&e.__isYupSchema__;class Bl{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:o,then:s,otherwise:i}=r,l=typeof o=="function"?o:(...a)=>a.every(d=>d===o);return new Bl(t,(a,d)=>{var c;let u=l(...a)?s:i;return(c=u==null?void 0:u(d))!=null?c:d})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let o=this.refs.map(i=>i.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),s=this.fn(o,t,r);if(s===void 0||s===t)return t;if(!f3(s))throw new TypeError("conditions must return a schema object");return s.resolve(r)}}const Qi={context:"$",value:"."};class Si{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Qi.context,this.isValue=this.key[0]===Qi.value,this.isSibling=!this.isContext&&!this.isValue;let o=this.isContext?Qi.context:this.isValue?Qi.value:"";this.path=this.key.slice(o.length),this.getter=this.path&&d3.getter(this.path,!0),this.map=r.map}getValue(t,r,o){let s=this.isContext?o:this.isValue?t:r;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Si.prototype.__isYupRef=!0;const Er=e=>e==null;function so(e){function t({value:r,path:o="",options:s,originalValue:i,schema:l},a,d){const{name:c,test:u,params:f,message:g,skipAbsent:C}=e;let{parent:_,context:E,abortEarly:N=l.spec.abortEarly,disableStackTrace:b=l.spec.disableStackTrace}=s;function m(I){return Si.isRef(I)?I.getValue(r,_,E):I}function p(I={}){var J;const ee=Object.assign({value:r,originalValue:i,label:l.spec.label,path:I.path||o,spec:l.spec},f,I.params);for(const we of Object.keys(ee))ee[we]=m(ee[we]);const me=new xt(xt.formatError(I.message||g,ee),r,ee.path,I.type||c,(J=I.disableStackTrace)!=null?J:b);return me.params=ee,me}const v=N?a:d;let j={path:o,parent:_,type:c,from:s.from,createError:p,resolve:m,options:s,originalValue:i,schema:l};const h=I=>{xt.isError(I)?v(I):I?d(null):v(p())},y=I=>{xt.isError(I)?v(I):a(I)};if(C&&Er(r))return h(!0);let k;try{var M;if(k=u.call(j,r,j),typeof((M=k)==null?void 0:M.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${j.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(k).then(h,y)}}catch(I){y(I);return}h(k)}return t.OPTIONS=e,t}function FC(e,t,r,o=r){let s,i,l;return t?(d3.forEach(t,(a,d,c)=>{let u=d?a.slice(1,a.length-1):a;e=e.resolve({context:o,parent:s,value:r});let f=e.type==="tuple",g=c?parseInt(u,10):0;if(e.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${l}" must contain an index to the tuple element, e.g. "${l}[0]"`);if(r&&g>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);s=r,r=r&&r[g],e=f?e.spec.types[g]:e.innerType}if(!c){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${l} which is a type: "${e.type}")`);s=r,r=r&&r[u],e=e.fields[u]}i=u,l=d?"["+a+"]":"."+a}),{schema:e,parent:s,parentPath:i}):{parent:s,parentPath:t,schema:e}}class Vl extends Set{describe(){const t=[];for(const r of this.values())t.push(Si.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const o of this.values())r.push(t(o));return r}clone(){return new Vl(this.values())}merge(t,r){const o=this.clone();return t.forEach(s=>o.add(s)),r.forEach(s=>o.delete(s)),o}}function To(e,t=new Map){if(f3(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let o=0;o<e.length;o++)r[o]=To(e[o],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[o,s]of e.entries())r.set(o,To(s,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const o of e)r.add(To(o,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[o,s]of Object.entries(e))r[o]=To(s,t)}else throw Error(`Unable to clone ${e}`);return r}class sr{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Vl,this._blacklist=new Vl,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(rn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=To(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let o=t(this);return this._mutate=r,o}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,o=t.clone();const s=Object.assign({},r.spec,o.spec);return o.spec=s,o.internalTests=Object.assign({},r.internalTests,o.internalTests),o._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),o._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),o.tests=r.tests,o.exclusiveTests=r.exclusiveTests,o.withMutation(i=>{t.tests.forEach(l=>{i.test(l.OPTIONS)})}),o.transforms=[...r.transforms,...o.transforms],o}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let o=r.conditions;r=r.clone(),r.conditions=[],r=o.reduce((s,i)=>i.resolve(s,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,o,s,i;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(o=t.abortEarly)!=null?o:this.spec.abortEarly,recursive:(s=t.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,r={}){let o=this.resolve(Object.assign({value:t},r)),s=r.assert==="ignore-optionality",i=o._cast(t,r);if(r.assert!==!1&&!o.isType(i)){if(s&&Er(i))return i;let l=Xn(t),a=Xn(i);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${o.type}". 

attempted value: ${l} 
`+(a!==l?`result of cast: ${a}`:""))}return i}_cast(t,r){let o=t===void 0?t:this.transforms.reduce((s,i)=>i.call(this,s,t,this),t);return o===void 0&&(o=this.getDefault(r)),o}_validate(t,r={},o,s){let{path:i,originalValue:l=t,strict:a=this.spec.strict}=r,d=t;a||(d=this._cast(d,Object.assign({assert:!1},r)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:i,value:d,originalValue:l,options:r,tests:c},o,u=>{if(u.length)return s(u,d);this.runTests({path:i,value:d,originalValue:l,options:r,tests:this.tests},o,s)})}runTests(t,r,o){let s=!1,{tests:i,value:l,originalValue:a,path:d,options:c}=t,u=E=>{s||(s=!0,r(E,l))},f=E=>{s||(s=!0,o(E,l))},g=i.length,C=[];if(!g)return f([]);let _={value:l,originalValue:a,path:d,options:c,schema:this};for(let E=0;E<i.length;E++){const N=i[E];N(_,u,function(m){m&&(Array.isArray(m)?C.push(...m):C.push(m)),--g<=0&&f(C)})}}asNestedTest({key:t,index:r,parent:o,parentPath:s,originalParent:i,options:l}){const a=t??r;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const d=typeof a=="number";let c=o[a];const u=Object.assign({},l,{strict:!0,parent:o,value:c,originalValue:i[a],key:void 0,[d?"index":"key"]:a,path:d||a.includes(".")?`${s||""}[${c?a:`"${a}"`}]`:(s?`${s}.`:"")+t});return(f,g,C)=>this.resolve(u)._validate(c,u,g,C)}validate(t,r){var o;let s=this.resolve(Object.assign({},r,{value:t})),i=(o=r==null?void 0:r.disableStackTrace)!=null?o:s.spec.disableStackTrace;return new Promise((l,a)=>s._validate(t,r,(d,c)=>{xt.isError(d)&&(d.value=c),a(d)},(d,c)=>{d.length?a(new xt(d,c,void 0,void 0,i)):l(c)}))}validateSync(t,r){var o;let s=this.resolve(Object.assign({},r,{value:t})),i,l=(o=r==null?void 0:r.disableStackTrace)!=null?o:s.spec.disableStackTrace;return s._validate(t,Object.assign({},r,{sync:!0}),(a,d)=>{throw xt.isError(a)&&(a.value=d),a},(a,d)=>{if(a.length)throw new xt(a,t,void 0,void 0,l);i=d}),i}isValid(t,r){return this.validate(t,r).then(()=>!0,o=>{if(xt.isError(o))return!1;throw o})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(o){if(xt.isError(o))return!1;throw o}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):To(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const o=this.clone({nullable:t});return o.internalTests.nullable=so({message:r,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),o}optionality(t,r){const o=this.clone({optional:t});return o.internalTests.optionality=so({message:r,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),o}optional(){return this.optionality(!0)}defined(t=rn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=rn.notNull){return this.nullability(!1,t)}required(t=rn.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=rn.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let o=this.clone(),s=so(r),i=r.exclusive||r.name&&o.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(o.exclusiveTests[r.name]=!!r.exclusive),o.tests=o.tests.filter(l=>!(l.OPTIONS.name===r.name&&(i||l.OPTIONS.test===s.OPTIONS.test))),o.tests.push(s),o}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let o=this.clone(),s=m3(t).map(i=>new Si(i));return s.forEach(i=>{i.isSibling&&o.deps.push(i.key)}),o.conditions.push(typeof r=="function"?new Bl(s,r):Bl.fromOptions(s,r)),o}typeError(t){let r=this.clone();return r.internalTests.typeError=so({message:t,name:"typeError",skipAbsent:!0,test(o){return this.schema._typeCheck(o)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=rn.oneOf){let o=this.clone();return t.forEach(s=>{o._whitelist.add(s),o._blacklist.delete(s)}),o.internalTests.whiteList=so({message:r,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,l=i.resolveAll(this.resolve);return l.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:l}})}}),o}notOneOf(t,r=rn.notOneOf){let o=this.clone();return t.forEach(s=>{o._blacklist.add(s),o._whitelist.delete(s)}),o.internalTests.blacklist=so({message:r,name:"notOneOf",test(s){let i=this.schema._blacklist,l=i.resolveAll(this.resolve);return l.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:l}}):!0}}),o}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:o,meta:s,optional:i,nullable:l}=r.spec;return{meta:s,label:o,optional:i,nullable:l,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(d=>({name:d.OPTIONS.name,params:d.OPTIONS.params})).filter((d,c,u)=>u.findIndex(f=>f.name===d.name)===c)}}}sr.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])sr.prototype[`${e}At`]=function(t,r,o={}){const{parent:s,parentPath:i,schema:l}=FC(this,t,r,o.context);return l[e](s&&s[i],Object.assign({},o,{parent:s,path:t}))};for(const e of["equals","is"])sr.prototype[e]=sr.prototype.oneOf;for(const e of["not","nope"])sr.prototype[e]=sr.prototype.notOneOf;let wC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,SC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,CC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_C=e=>Er(e)||e===e.trim(),EC={}.toString();function Vt(){return new h3}class h3 extends sr{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,o)=>{if(!o.spec.coerce||o.isType(t)||Array.isArray(t))return t;const s=t!=null&&t.toString?t.toString():t;return s===EC?t:s})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||rn.required,name:"required",skipAbsent:!0,test:o=>!!o.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=Yt.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(o){return o.length===this.resolve(t)}})}min(t,r=Yt.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o.length>=this.resolve(t)}})}max(t,r=Yt.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(o){return o.length<=this.resolve(t)}})}matches(t,r){let o=!1,s,i;return r&&(typeof r=="object"?{excludeEmptyString:o=!1,message:s,name:i}=r:s=r),this.test({name:i||"matches",message:s||Yt.matches,params:{regex:t},skipAbsent:!0,test:l=>l===""&&o||l.search(t)!==-1})}email(t=Yt.email){return this.matches(wC,{name:"email",message:t,excludeEmptyString:!0})}url(t=Yt.url){return this.matches(SC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Yt.uuid){return this.matches(CC,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Yt.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:_C})}lowercase(t=Yt.lowercase){return this.transform(r=>Er(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Er(r)||r===r.toLowerCase()})}uppercase(t=Yt.uppercase){return this.transform(r=>Er(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Er(r)||r===r.toUpperCase()})}}Vt.prototype=h3.prototype;const TC=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function hn(e,t=0){return Number(e)||t}function LC(e){const t=TC.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:hn(t[1]),month:hn(t[2],1)-1,day:hn(t[3],1),hour:hn(t[4]),minute:hn(t[5]),second:hn(t[6]),millisecond:t[7]?hn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:hn(t[10]),minuteOffset:hn(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let o=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(o=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(o=0-o)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+o,r.second,r.millisecond)}let kC=new Date(""),RC=e=>Object.prototype.toString.call(e)==="[object Date]";class Iu extends sr{constructor(){super({type:"date",check(t){return RC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,o)=>!o.spec.coerce||o.isType(t)||t===null?t:(t=LC(t),isNaN(t)?Iu.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let o;if(Si.isRef(t))o=t;else{let s=this.cast(t);if(!this._typeCheck(s))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);o=s}return o}min(t,r=ac.min){let o=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(s){return s>=this.resolve(o)}})}max(t,r=ac.max){let o=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(s){return s<=this.resolve(o)}})}}Iu.INVALID_DATE=kC;const NC={username:{label:"Username",help:"Enter your username",validate:e=>Vt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Vt().trim().required("You must enter your password you muppet!").validate(e)}},OC=()=>n.jsxs(w,{fields:NC,children:[n.jsx(nt,{names:"username password"}),n.jsx(K,{})]}),PC=`import { Form, Fields, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample`,AC={username:{label:"Username",help:"Enter your username",validate:async(e,t,r,o)=>{e.match(/badger/i)?r({value:`${e} is a great name`}):o({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},MC=()=>n.jsxs(w,{fields:AC,children:[n.jsx(x,{name:"username"}),n.jsx(K,{})]}),IC=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: async (value, field, resolve, reject) => {
      if (value.match(/badger/i)) {
        resolve({
          value: \`\${value} is a great name\`
        })
      }
      else {
        reject({
          value:   'Mr Badger',
          message: 'Your username must contain the word "badger"'
        })
      }
    }
  }
}

const ValidateExample = () =>
  <Form fields={fields}>
    <Field name="username"/>
    <Submit/>
  </Form>

export default ValidateExample`,DC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validate"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can use the ",n.jsx(Be,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",n.jsx("code",{children:"validate"})," property to define an ",n.jsx("code",{children:"async"})," ","validation function."]}),n.jsxs("p",{children:["In this example we're using"," ",n.jsx("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),n.jsx(Z,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),n.jsx(F,{Component:OC,code:PC,caption:"validate"}),n.jsxs(D,{align:"end",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",n.jsx("code",{children:"resolve"})," and ",n.jsx("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",n.jsx("code",{children:"resolve"})," function should be passed an object containing the ",n.jsx("code",{children:"value"}),", which may be modified by your function. The ",n.jsx("code",{children:"reject"})," function should be passed an object containing an error ",n.jsx("code",{children:"message"}),", and optionally a new ",n.jsx("code",{children:"value"})," ","for the field."]}),n.jsx(lt,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),n.jsx(F,{Component:MC,code:IC,caption:"validate"}),n.jsx(se,{links:[Be,zt,Bt]})]}),$C=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"})),zC={username:{label:"Username",help:"Enter your username",validate:e=>Vt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Vt().trim().required("You must enter your password you muppet!").validate(e)}},BC=()=>n.jsxs(w,{fields:zC,validateOnBlur:!0,children:[n.jsx(nt,{names:"username password"}),n.jsx(K,{})]}),VC=`import { Form, Fields, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

const fields = {
  username: {
    label: 'Username',
    help:  'Enter your username',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your username you numpty!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    help:  'Enter your password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password you muppet!')
      .validate(value)
  }
}

const ValidateExample = () =>
  <Form fields={fields} validateOnBlur>
    <Fields names="username password"/>
    <Submit/>
  </Form>

export default ValidateExample`,qC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnBlur"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{})," to have it apply to all fields."]}),n.jsx(Z,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),n.jsx(F,{Component:BC,code:VC,caption:"validate"}),n.jsx(se,{links:[Be,$t,Bt]})]}),UC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),HC=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const fields = {
  vowels: {
    label: 'Vowels',
    help:  'Enter between 3 and 5 vowels',
    validateOnChange: true,
    minValidateLength: 3,
    validate: value => yup
      .string()
      .trim()
      .matches(/^[^y]*$/i, 'Sorry, but y is not allowed')
      .matches(/^[aeiou]*$/i, 'You should only type vowels')
      .min(3, 'You must enter at least three vowels')
      .max(5, 'You should not enter more than 5 vowels')
      .validate(value)
  }
}

const ValidateOnChangeExample = () =>
  <Form fields={fields}>
    <Field name="vowels"/>
  </Form>

export default ValidateOnChangeExample`,YC={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:e=>Vt().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(e)}},WC=()=>n.jsx(w,{fields:YC,children:n.jsx(x,{name:"vowels"})}),ZC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnChange"}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",n.jsx(ii,{})," ","property can be set to only trigger validation when the input length exceeds a threshold."]}),n.jsx(Z,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),n.jsx(F,{Component:WC,code:HC,caption:"validateOnChange"}),n.jsx(se,{links:[Be,$t,zt,ii]})]}),GC=Object.freeze(Object.defineProperty({__proto__:null,default:ZC},Symbol.toStringTag,{value:"Module"})),KC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnInvalid"}),n.jsxs("p",{children:["Fields are normally validated when the form is submitted. The ",n.jsx(Bt,{})," and ",n.jsx(zt,{})," options can be set to change this."]}),n.jsxs("p",{children:["If a field fails validation it will then switch to validating on change.  This option can be set to ",n.jsx("code",{children:"false"})," to prevent this behaviour."]})]}),QC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),XC={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},JC=()=>n.jsx(w,{fields:XC,children:n.jsx(nt,{names:"name message"})}),e_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
}

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names="name message"/>
  </Form>

export default FieldsExample
`,x3=()=>n.jsx(Ke,{menu:M2}),t_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fields"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Fields"})," component can be used to render multiple fields."]}),n.jsxs(D,{children:[n.jsx("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),n.jsxs("p",{children:["The ",n.jsx(Tj,{})," property should be used to specify the list of field names.  It renders each of the fields, collected together in a single"," ",n.jsx("code",{className:"code",children:"div"})," element"]})]}),n.jsx(F,{Component:JC,code:e_,caption:"Fields"}),n.jsx(x3,{})]}),n_=Object.freeze(Object.defineProperty({__proto__:null,default:t_},Symbol.toStringTag,{value:"Module"})),r_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fields Properties"}),n.jsx(_e,{}),n.jsx(x3,{})]}),o_=Object.freeze(Object.defineProperty({__proto__:null,default:r_},Symbol.toStringTag,{value:"Module"})),s_={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},i_=()=>n.jsx(w,{fields:s_,children:n.jsx(nt,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2"})}),l_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Name',
    required: true,
  },
  email: {
    label: 'Email Address',
    required: true,
  },
}

const ClassNameExample = () =>
  <Form fields={fields}>
    <Fields
      names="name email"
      className="border pad-4 bgc-95 bgd-5 bdr-2"
    />
  </Form>

export default ClassNameExample
`,a_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),n.jsx(F,{Component:i_,code:l_,caption:"className"})]}),d_=Object.freeze(Object.defineProperty({__proto__:null,default:a_},Symbol.toStringTag,{value:"Module"})),c_={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},u_=()=>n.jsx(w,{fields:c_,children:n.jsx(nt,{names:"forename surname company job_title",grid:2,gap:8})}),m_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  forename: {
    label: 'First Name',
    required: true,
  },
  surname: {
    label: 'Surname',
    required: true,
  },
  company: {
    label: 'Company',
    required: true,
  },
  job_title: {
    label: 'Job Title',
    required: true,
  },
}

const FieldsGapExample = () =>
  <Form fields={fields}>
    <Fields
      names="forename surname company job_title"
      grid={2} gap={8}
    />
  </Form>

export default FieldsGapExample
`,p_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields when the ",n.jsx(Lj,{})," option is set.  The value should be an integer number of margin units of 0.25rem. The default value is 4 (1rem)."]}),n.jsx(F,{Component:u_,code:m_,caption:"gap"})]}),f_=Object.freeze(Object.defineProperty({__proto__:null,default:p_},Symbol.toStringTag,{value:"Module"})),h_={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},x_=()=>n.jsx(w,{fields:h_,children:n.jsx(nt,{names:"name email",grid:2})}),g_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  name: {
    label: 'Name',
    required: true,
  },
  email: {
    label: 'Email Address',
    required: true,
  },
}

const FieldsGridExample = () =>
  <Form fields={fields}>
    <Fields
      names="name email"
      grid={2}
    />
  </Form>

export default FieldsGridExample
`,b_={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},v_=()=>n.jsx(w,{fields:b_,children:n.jsx(nt,{names:"one two three",grid:!0})}),j_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Submit } from '@abw/badger-form'

const fields = {
  one: {
    label: 'One',
  },
  two: {
    label: 'Two',
  },
  three: {
    label: 'Three',
  }
}

const FieldsGridAutoExample = () =>
  <Form fields={fields}>
    <Fields names="one two three" grid/>
  </Form>

export default FieldsGridAutoExample
`,y_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"grid"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",n.jsx("code",{children:"gap-h-4"})," utility class provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),n.jsx(F,{Component:x_,code:g_,caption:"grid"}),n.jsxs("p",{children:["You can also specify ",n.jsx("code",{children:"grid"})," as the boolean value"," ",n.jsx("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),n.jsx(F,{Component:v_,code:j_,caption:"grid"})]}),F_=Object.freeze(Object.defineProperty({__proto__:null,default:y_},Symbol.toStringTag,{value:"Module"})),w_=`export const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
  badgers: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  },
  animal: {
    label: 'What is your favourite animal?',
    type: 'radio',
    options: ['Badger', 'Ferret', 'Stoat']
  },
}

export default fields
`,g3={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},S_=()=>n.jsx(w,{fields:g3,children:n.jsx(nt,{names:"name message badgers animal"})}),C_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names="name message badgers animal"/>
  </Form>

export default FieldsExample
`,__=()=>n.jsx(w,{fields:g3,children:n.jsx(nt,{names:["name","message","badgers","animal"]})}),E_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names={['name', 'message', 'badgers', 'animal']}/>
  </Form>

export default FieldsExample
`,T_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"names"}),n.jsxs("p",{children:["The ",n.jsx("code",{className:"code",children:"names"})," property should be used to specify the list of field names.  This can be a string of whitespace delimited field names that should be defined in the ",n.jsx(ue,{})," ",n.jsx(Ct,{}),"."]}),n.jsx(F,{Component:S_,code:C_,caption:"Fields",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"names"})," can also be an array of field names."]}),n.jsx(F,{Component:__,code:E_,caption:"Fields",expand:!0}),n.jsxs("p",{children:["In the above examples the ",n.jsx("code",{children:"fields"})," are defined in a separate ",n.jsx("code",{children:"Fields.jsx"})," module, shown below."]}),n.jsx(Ze,{code:ln(w_),caption:"Fields.jsx"})]}),L_=Object.freeze(Object.defineProperty({__proto__:null,default:T_},Symbol.toStringTag,{value:"Module"})),k_={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},R_=()=>n.jsx(w,{fields:k_,children:n.jsx(nt,{names:"alpha bravo charlie delta echo foxtrot",grid:3,stack:"tablet"})}),N_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const fields = {
  alpha:    { label: 'Alpha'    },
  bravo:    { label: 'Bravo'    },
  charlie:  { label: 'Charlie'  },
  delta:    { label: 'Delta'    },
  echo:     { label: 'Echo'     },
  foxtrot:  { label: 'Foxtrot'  },
}

const FieldsStackExample = () =>
  <Form fields={fields}>
    <Fields
      names="alpha bravo charlie delta echo foxtrot"
      grid={3} stack="tablet"
    />
  </Form>

export default FieldsStackExample
`,O_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"stack"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"stack"})," property can be used to define a stacking breakpoint.  This will add the corresponding ",n.jsx("code",{children:"stack-XXX"})," CSS class.  Try resizing your browser window to see the effect.  With a width of less than 800px, the fields will be stacked, otherwise they will be displayed in three columns."]}),n.jsx(F,{Component:R_,code:N_,caption:"stack"})]}),P_=Object.freeze(Object.defineProperty({__proto__:null,default:O_},Symbol.toStringTag,{value:"Module"})),A_=()=>n.jsx(w,{children:n.jsxs(Ar,{children:[n.jsx(x,{name:"one",label:"Field One"}),n.jsx(x,{name:"one",label:"Field Two"})]})}),M_=`import { Form, Field, Fieldset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fieldset } from '@abw/badger-form'

const FieldsetExample = () =>
  <Form>
    <Fieldset>
      <Field name="one" label="Field One"/>
      <Field name="one" label="Field Two"/>
    </Fieldset>
  </Form>

export default FieldsetExample
`,b3=()=>n.jsx(Ke,{menu:I2}),I_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fieldset"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Fieldset"})," component can be used to create a field set containing one or more ",n.jsx(X,{})," components."]}),n.jsx(F,{Component:A_,code:M_,caption:"Fieldset",expand:!0}),n.jsx(b3,{})]}),D_=Object.freeze(Object.defineProperty({__proto__:null,default:I_},Symbol.toStringTag,{value:"Module"})),$_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fieldset Properties"}),n.jsx(_e,{}),n.jsx(b3,{})]}),z_=Object.freeze(Object.defineProperty({__proto__:null,default:$_},Symbol.toStringTag,{value:"Module"})),B_={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},V_=()=>n.jsx(w,{fields:B_,children:n.jsx(Ar,{legend:"Fieldset Two",fields:"name message",className:"prominent"})}),q_=`import { Form, Fieldset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fieldset } from '@abw/badger-form'
import './fieldset.css'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
}

const FieldsetFieldsExample = () =>
  <Form fields={fields}>
    <Fieldset
      legend="Fieldset Two"
      fields="name message"
      className="prominent"
    />
  </Form>

export default FieldsetFieldsExample
`,U_=`fieldset.prominent {
  --fieldset-back: var(--grey-95);
  --legend-text: var(--grey-20);
  --legend-back: var(--grey-100);
  --legend-border: var(--grey-70);
  padding: 1rem 2rem 2rem;
  background-color: var(--fieldset-back);
}
fieldset.prominent legend {
  padding: 0.25em 0.5em;
  color: var(--legend-text);
  background-color: var(--legend-back);
  border: 1px solid var(--legend-border);
  border-radius: 0.25em;
}
.dark fieldset.prominent {
  --fieldset-back: var(--grey-10);
  --legend-text: var(--grey-80);
  --legend-back: var(--grey-20);
  --legend-border: var(--grey-40);
}`,H_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the fieldset container."]}),n.jsx(F,{Component:V_,code:q_,caption:"Fieldset className",expand:!0}),n.jsx("h2",{children:"Additional Styles"}),n.jsx("p",{children:"For completeness, here's the additional CSS we're using to apply the styling in the above example."}),n.jsx(Ze,{code:U_,caption:"fieldset.scss",language:"css",expand:!0})]}),Y_=Object.freeze(Object.defineProperty({__proto__:null,default:H_},Symbol.toStringTag,{value:"Module"})),W_={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},Z_=()=>n.jsx(w,{fields:W_,children:n.jsx(Ar,{legend:"Fieldset Two",fields:"name message"})}),G_=`import React from 'react'
import { Form, Fieldset } from '@/lib/index.js'

/* START */
const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
}

const FieldsetFieldsExample = () =>
  <Form fields={fields}>
    <Fieldset
      legend="Fieldset Two"
      fields="name message"
    />
  </Form>

export default FieldsetFieldsExample
`,K_={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},Q_=()=>n.jsx(w,{fields:K_,children:n.jsx(Ar,{legend:"Fieldset Grid",fields:"alpha bravo charlie delta echo foxtrot",grid:2,stack:"laptop"})}),X_=`import React from 'react'
import { Form, Fieldset } from '@/lib/index.js'

/* START */
const fields = {
  alpha:    { label: 'Alpha'    },
  bravo:    { label: 'Bravo'    },
  charlie:  { label: 'Charlie'  },
  delta:    { label: 'Delta'    },
  echo:     { label: 'Echo'     },
  foxtrot:  { label: 'Foxtrot'  },
}

const FieldsetGridExample = () =>
  <Form fields={fields}>
    <Fieldset
      legend="Fieldset Grid"
      fields="alpha bravo charlie delta echo foxtrot"
      grid={2} stack="laptop"
    />
  </Form>

export default FieldsetGridExample
`,J_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",n.jsx(zl,{})," component."]}),n.jsx(F,{Component:Z_,code:G_,caption:"fields",expand:!0}),n.jsxs("h2",{children:[n.jsx("span",{className:"font-mono",children:"grid"}),","," ",n.jsx("span",{className:"font-mono",children:"gap"})," and "," ",n.jsx("span",{className:"font-mono",children:"stack"})]}),n.jsxs("p",{children:["Any other properties are forwarded onto the ",n.jsx(zl,{})," component. For example, you can set the ",n.jsx("code",{children:"grid"}),", ",n.jsx("code",{children:"gap"})," and"," ",n.jsx("code",{children:"stack"})," properties to set the layout to implement a grid layout."]}),n.jsx(F,{Component:Q_,code:X_,caption:"Fieldset Grid",expand:!0})]}),eE=Object.freeze(Object.defineProperty({__proto__:null,default:J_},Symbol.toStringTag,{value:"Module"})),tE=()=>n.jsx(w,{children:n.jsxs(Ar,{legend:"Fieldset One",children:[n.jsx(x,{name:"one",label:"Field One"}),n.jsx(x,{name:"one",label:"Field Two"})]})}),nE=`import React from 'react'
import { Form, Field, Fieldset } from '@/lib/index.js'

const FieldsetExample = () =>
  /* START */
  <Form>
    <Fieldset legend="Fieldset One">
      <Field name="one" label="Field One"/>
      <Field name="one" label="Field Two"/>
    </Fieldset>
  </Form>
  /* END */

export default FieldsetExample
`,rE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"legend"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"legend"})," property can be used to add a legend to the fieldset container."]}),n.jsx(F,{Component:tE,code:nE,caption:"legend",undent:2,expand:!0})]}),oE=Object.freeze(Object.defineProperty({__proto__:null,default:rE},Symbol.toStringTag,{value:"Module"})),Ci=()=>n.jsx(Ke,{menu:P2}),sE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Events"}),n.jsx(_e,{}),n.jsx(Ci,{})]}),iE=Object.freeze(Object.defineProperty({__proto__:null,default:sE},Symbol.toStringTag,{value:"Module"})),lE=()=>{const[e,t]=T.useState(),r=async s=>(await tr(1e3),Promise.reject({message:`Dummy failed API call with foo: ${s.foo}`})),o=s=>{t(s.message)};return n.jsxs(w,{onSubmit:r,onError:o,debug:!0,children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(K,{}),e&&n.jsx("div",{className:"error alert mar-t-2",children:e})]})},aE=`import { Form, Field, Submit } from '@/lib/index.js'
import { sleep } from '@abw/badger-utils'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'
// PRETEND: import { sleep } from '@abw/badger-utils'

const OnErrorExample = () => {
  const [msg, setMsg] = useState()
  const onSubmit = async values => {
    await sleep(1000)
    return Promise.reject({
      message: \`Dummy failed API call with foo: \${values.foo}\`
    })
  }
  const onError = response => {
    setMsg(response.message)
  }

  return (
    <Form onSubmit={onSubmit} onError={onError} debug>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="error alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnErrorExample`,dE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onError"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onError"})," property can be used to define a function that will be called in the event of a failed submission of the form."]}),n.jsx(F,{Component:lE,code:aE,caption:"onError"}),n.jsx(se,{links:[cn,oi]})]}),cE=Object.freeze(Object.defineProperty({__proto__:null,default:dE},Symbol.toStringTag,{value:"Module"})),uE=()=>{const[e,t]=T.useState(),r=o=>e==null?void 0:e.setValues({animal:o});return n.jsxs(n.Fragment,{children:[n.jsx(w,{onLoad:t,children:n.jsx(x,{name:"animal",label:"Animal"})}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx("button",{onClick:()=>r("Badger"),children:"Badger"}),n.jsx("button",{onClick:()=>r("Ferret"),children:"Ferret"})]})]})},mE=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const OnLoadExample = () => {
  const [form, setForm] = useState()
  const setAnimal = animal =>
    form?.setValues({ animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="animal"
          label="Animal"
        />
      </Form>

      <div className="grid-2 gap-4">
        <button onClick={() => setAnimal('Badger')}>
          Badger
        </button>
        <button onClick={() => setAnimal('Ferret')}>
          Ferret
        </button>
      </div>
    </>
  )
}

export default OnLoadExample`,pE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onLoad"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onLoad"})," property can be used to define a function that will be called when the form is loaded.  This allows you to capture a reference to the form context object for manipulating the form programmatically."]}),n.jsx(F,{Component:uE,code:mE,caption:"onLoad"})]}),fE=Object.freeze(Object.defineProperty({__proto__:null,default:pE},Symbol.toStringTag,{value:"Module"})),hE=()=>{const[e,t]=T.useState();return n.jsxs(w,{onReset:()=>t("The form was reset"),children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(ur,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},xE=`import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const OnResetExample = () => {
  const [msg, setMsg] = useState()

  return (
    <Form onReset={() => setMsg(\`The form was reset\`)}>
      <Field name="foo" label="Foo Field"/>
      <Reset/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnResetExample`,gE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onReset"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onReset"})," property can be used to define a function that will be called when the form is reset."]}),n.jsx(F,{Component:hE,code:xE,caption:"onReset"}),n.jsx(se,{links:[cn,oi,Mo]})]}),bE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),vE=()=>{const[e,t]=T.useState(),r=o=>t(`Form submitted, foo is ${o.foo}`);return n.jsxs(w,{onSubmit:r,children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(K,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},jE=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const OnSubmitExample = () => {
  const [msg, setMsg] = useState()
  const onSubmit = values =>
    setMsg(\`Form submitted, foo is \${values.foo}\`)

  return (
    <Form onSubmit={onSubmit}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnSubmitExample`,yE=()=>{throw"The server is on fire.  Please try again later."},FE=()=>n.jsxs(w,{onSubmit:yE,children:[n.jsx(x,{name:"username",label:"Pick a username"}),n.jsx(Ve,{}),n.jsx(K,{})]}),wE=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const onFire = () => {
  throw \`The server is on fire.  Please try again later.\`
}

const OnSubmitThrow = () =>
  <Form onSubmit={onFire}>
    <Field
      name="username"
      label="Pick a username"
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSubmitThrow`,SE=()=>Promise.reject({error:"Dear Sir/Madam, Fire! Fire! Help me!"}),CE=()=>n.jsxs(w,{onSubmit:SE,children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(Ve,{}),n.jsx(K,{})]}),_E=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const onFire = () =>
  Promise.reject({
    error: 'Dear Sir/Madam, Fire! Fire! Help me!',
  })

const OnSubmitReject = () =>
  <Form onSubmit={onFire}>
    <Field
      name="message"
      label="Message"
    />
    <Errors/>
    <Submit/>
  </Form>

export default OnSubmitReject`,EE=e=>Promise.reject({errors:{username:`Sorry, ${e.username} is already taken`}}),TE=()=>n.jsxs(w,{onSubmit:EE,debug:!0,children:[n.jsx(x,{name:"username",label:"Pick a username",required:!0}),n.jsx(x,{name:"password",label:"Enter a password",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(K,{})]}),LE=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const taken = values =>
  Promise.reject({
    errors: {
      username: \`Sorry, \${values.username} is already taken\`
    }
  })

const OnSubmitFail = () =>
  <Form onSubmit={taken} debug>
    <Field
      name="username"
      label="Pick a username"
      required
    />
    <Field
      name="password"
      label="Enter a password"
      required
    />
    <Errors fieldErrors/>
    <Submit/>
  </Form>

export default OnSubmitFail`,kE=e=>Promise.reject({errors:[{name:"username",message:`Sorry, ${e.username} is already taken`},{field:"password",error:"Your password is too easy to guess"}]}),RE=()=>n.jsxs(w,{onSubmit:kE,children:[n.jsx(x,{name:"username",label:"Pick a username",required:!0}),n.jsx(x,{name:"password",label:"Choose a password",type:"password",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(K,{})]}),NE=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const doubleFail = values =>
  Promise.reject({
    errors: [
      {
        name:    'username',
        message: \`Sorry, \${values.username} is already taken\`
      },
      {
        // 'field' is an alias for 'name'
        field: 'password',
        // 'error' is an alias for 'message'
        error: 'Your password is too easy to guess'
      }
    ]
  })

const OnSubmitErrors = () =>
  <Form onSubmit={doubleFail}>
    <Field
      name="username"
      label="Pick a username"
      required
    />
    <Field
      name="password"
      label="Choose a password"
      type="password"
      required
    />
    <Errors fieldErrors/>
    <Submit/>
  </Form>

export default OnSubmitErrors`,OE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onSubmit"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," property can be used to define a function that will be called when the form is submitted and has passed all the relevant validation checks."]}),n.jsx("p",{children:"In most cases this function will be making an API call to submit the form data.  The form values are passed to the function as the first argument.  The second argument is an object containing the form context in case you need it."})]}),n.jsx(F,{Component:vE,code:jE,caption:"onSubmit"}),n.jsx("h2",{children:"Server Error"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["In many cases the ",n.jsx("code",{children:"onSubmit"})," handler will be an asynchronous function which makes an API call.  The server should implement server-side form validation and may need to return a response indicating problems with the submitted fields."]}),n.jsxs("p",{children:["If an ",n.jsx("code",{children:"onSubmit"})," handler throws an error then it will be stored as the ",n.jsx("code",{children:"error"})," property in the form state"," ",". The ",n.jsx(Io,{})," component can be used to display errors."]})]}),n.jsxs(Z,{children:["Try submitting the form.  The ",n.jsx("code",{children:"onSubmit"})," handler throws an error which will be displayed by the ",n.jsx(Io,{})," component."]})]}),n.jsx(F,{Component:FE,code:wE,caption:"onSubmit Throw",expand:!0}),n.jsxs("p",{children:["An ",n.jsx("code",{children:"onSubmit"})," handler can also return a rejected Promise. It should be an object containing an ",n.jsx("code",{children:"error"})," property."]}),n.jsx(F,{Component:CE,code:_E,caption:"onSubmit Reject",expand:!0}),n.jsx("h2",{children:"Field Errors"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," handler can return an ",n.jsx("code",{children:"errors"})," object as a rejected Promise. This can be an object in which the keys correspond to field names and the values are the error messages for the fields."]}),n.jsxs("p",{children:["The error messages will be set and displayed in the appropriate fields. You can also use the ",n.jsx(Io,{})," component with the"," ",n.jsx(t3,{})," property to display them."]}),n.jsx(F,{Component:TE,code:LE,caption:"onSubmit errors",expand:!0}),n.jsxs("p",{children:["Alternately, the ",n.jsx("code",{children:"errors"})," returned can be an array of objects. Each object should have a ",n.jsx("code",{children:"name"}),", ",n.jsx("code",{children:"field"})," or"," ",n.jsx("code",{children:"param"})," property to identify the field name, and either an"," ",n.jsx("code",{children:"message"})," or ",n.jsx("code",{children:"error"})," string to provide the error."]}),n.jsx(F,{Component:RE,code:NE,caption:"onSubmit errors",expand:!0}),n.jsx(se,{links:[oi,Mo]})]}),PE=Object.freeze(Object.defineProperty({__proto__:null,default:OE},Symbol.toStringTag,{value:"Module"})),AE=()=>{const[e,t]=T.useState(),r=async s=>(await tr(1e3),Promise.resolve({ok:!0,message:`Dummy API call with foo: ${s.foo}`})),o=s=>{t(s.message)};return n.jsxs(w,{onSubmit:r,onSuccess:o,children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(K,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},ME=`import { Form, Field, Submit } from '@/lib/index.js'
import { sleep } from '@abw/badger-utils'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'
// PRETEND: import { sleep } from '@abw/badger-utils'

const OnSuccessExample = () => {
  const [msg, setMsg] = useState()
  const onSubmit = async values => {
    await sleep(1000)
    return Promise.resolve({
      ok: true,
      message: \`Dummy API call with foo: \${values.foo}\`
    })
  }
  const onSuccess = response => {
    setMsg(response.message)
  }

  return (
    <Form onSubmit={onSubmit} onSuccess={onSuccess}>
      <Field name="foo" label="Foo Field"/>
      <Submit/>
      { msg &&
        <div className="info alert mar-t-2">
          {msg}
        </div>
      }
    </Form>
  )
}

export default OnSuccessExample`,IE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSuccess"})," property can be used to define a function that will be called in the event of a successful submission of the form."]}),n.jsxs("p",{children:["It will be passed the response data returned from the ",n.jsx(cn,{})," ","handler."]}),n.jsx(F,{Component:AE,code:ME,caption:"onSuccess"}),n.jsx(se,{links:[cn,Mo]})]}),DE=Object.freeze(Object.defineProperty({__proto__:null,default:IE},Symbol.toStringTag,{value:"Module"})),$E=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Functions"}),n.jsx(_e,{}),n.jsx(Ci,{})]}),zE=Object.freeze(Object.defineProperty({__proto__:null,default:$E},Symbol.toStringTag,{value:"Module"})),BE=()=>n.jsxs(w,{children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"}),e=>n.jsx("button",{onClick:e.reset,children:"Reset"})]}),VE=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const ResetExample = () =>
  <Form>
    <Field name="color"  label="Color"/>
    <Field name="animal" label="Animal"/>
    { form =>
      <button onClick={form.reset}>
        Reset
      </button>
    }
  </Form>

export default ResetExample`,qE=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two"}),n.jsx(UE,{})]}),UE=()=>{const{reset:e}=mn();return n.jsx("button",{onClick:e,children:"Reset the Form"})},HE=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/badger-form'

const UseFormReset = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <MyResetButton/>
  </Form>

const MyResetButton = () => {
  const { reset } = useForm()
  return (
    <button onClick={reset}>
      Reset the Form
    </button>
  )
}

export default UseFormReset`,YE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset()"}),n.jsxs(D,{children:[n.jsx("div",{children:n.jsxs("p",{children:["You can programmatically reset a form by calling the the ",n.jsx("code",{children:"reset()"})," method."]})}),n.jsx(Z,{children:"Enter some values in the fields and then click on the reset button."})]}),n.jsx(F,{Component:BE,code:VE,caption:"reset"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If the buttons (or other controls) that you want to use to reset the form are contained within the form then you can call the ",n.jsx("code",{children:"useForm()"})," function to gain access to the form context."]}),n.jsx(F,{Component:qE,code:HE,caption:"useForm() and reset()"})]}),WE=Object.freeze(Object.defineProperty({__proto__:null,default:YE},Symbol.toStringTag,{value:"Module"})),ZE=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetFocusExample = () => {
  const [form, setForm] = useState(false)

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="field1" label="Field One"
        />
        <Field
          name="field2" label="Field Two"
          type="textarea"
        />
        <div className="grid-2 gap-4">
          <Field
            name="field3" label="Field Three"
            type="checkbox" text="One Louder"
          />
          <Field
            name="field4" label="Field Four"
            type="select" options={['Nigel', 'David', 'Derek']}
          />
        </div>
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          optionClass="inline"
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div className="mar-t-4 grid-fit gap-2">
        <button onClick={() => form?.setFocus('field1')}>
          Focus One
        </button>
        <button onClick={() => form?.setFocus('field2')}>
          Focus Two
        </button>
        <button onClick={() => form?.setFocus('field3')}>
          Focus Three
        </button>
        <button onClick={() => form?.setFocus('field4')}>
          Focus Four
        </button>
        <button onClick={() => form?.setFocus('field5')}>
          Focus Five
        </button>
      </div>
    </>
  )
}

export default SetFocusExample`,GE=()=>{const[e,t]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(w,{onLoad:t,children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two",type:"textarea"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(x,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),n.jsx(x,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]})]}),n.jsx(x,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",optionClass:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),n.jsxs("div",{className:"mar-t-4 grid-fit gap-2",children:[n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field1"),children:"Focus One"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field2"),children:"Focus Two"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field3"),children:"Focus Three"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field4"),children:"Focus Four"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field5"),children:"Focus Five"})]})]})},KE=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/badger-form'

const UseFormFocus = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <div className="grid-2 gap-4">
      <FieldFocusButton
        name="field1"
        caption="Focus Field One"
      />
      <FieldFocusButton
        name="field2"
        caption="Focus Field Two"
      />
    </div>
  </Form>

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button
      onClick={
        e => {
          e.preventDefault()
          setFocus(name)
        }
      }
    >
      {caption}
    </button>
  )
}

export default UseFormFocus`,QE=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(tf,{name:"field1",caption:"Focus Field One"}),n.jsx(tf,{name:"field2",caption:"Focus Field Two"})]})]}),tf=({name:e,caption:t})=>{const{setFocus:r}=mn();return n.jsx("button",{onClick:o=>{o.preventDefault(),r(e)},children:t})},XE=`import { useForm } from '@/lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { useForm } from '@abw/badger-form'

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button onClick={ e => setFocus(name, e) }>
      {caption}
    </button>
  )
}

export default FieldFocusButton`,JE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setFocus()"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can programmatically set the focus on a ",n.jsx(X,{})," by calling the ",n.jsx("code",{children:"setFocus()"})," method on the ",n.jsx(ue,{}),", passing the name of the field that you want to focus as an argument."]}),n.jsxs("p",{children:["You can capture a reference to the form using the ",n.jsx(bj,{})," ","property to set a state variable, as shown in this example."]})]}),n.jsx(Z,{children:"Click on one of the buttons to focus on a field."})]}),n.jsx(F,{Component:GE,code:ZE,caption:"onLoad() and setFocus()"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",n.jsx(ue,{})," then you can call the ",n.jsx("code",{children:"useForm()"})," function to gain access to the form context."]}),n.jsx(F,{Component:QE,code:KE,caption:"useForm() and setFocus()"}),n.jsx("h2",{children:"Preventing Default Event"}),n.jsxs(D,{children:[n.jsxs("p",{children:["Be careful to make sure that your buttons call"," ",n.jsx("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",n.jsx("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),n.jsx(Ze,{code:ln(XE),expand:!0})]})]}),eT=Object.freeze(Object.defineProperty({__proto__:null,default:JE},Symbol.toStringTag,{value:"Module"})),tT=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SetValues = () => {
  const [form, setForm] = useState()
  const setValues = (color, animal) =>
    form?.setValues({ color, animal })

  return (
    <>
      <Form onLoad={setForm}>
        <Field name="color"  label="Color"/>
        <Field name="animal" label="Animal"/>
      </Form>
      <div className="grid-2 gap-4">
        <button onClick={() => setValues('Grey', 'Elephant')}>
          Grey Elephant
        </button>
        <button onClick={() => setValues('Red', 'Fox')}>
          Red Fox
        </button>
      </div>
    </>
  )
}

export default SetValues`,nT=()=>{const[e,t]=T.useState(),r=(o,s)=>e==null?void 0:e.setValues({color:o,animal:s});return n.jsxs(n.Fragment,{children:[n.jsxs(w,{onLoad:t,children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"})]}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx("button",{onClick:()=>r("Grey","Elephant"),children:"Grey Elephant"}),n.jsx("button",{onClick:()=>r("Red","Fox"),children:"Red Fox"})]})]})},rT=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/badger-form'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <div className="grid-2 gap-4">
        <Setter color="Grey" animal="Elephant"/>
        <Setter color="Red"  animal="Fox"/>
      </div>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={
      e => {
        e.preventDefault()
        setValues({ color, animal }, e)
      }
    }>
      {color} {animal}
    </button>
  )
}

export default UseSetValues`,oT=()=>n.jsx(n.Fragment,{children:n.jsxs(w,{children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(nf,{color:"Grey",animal:"Elephant"}),n.jsx(nf,{color:"Red",animal:"Fox"})]})]})}),nf=({color:e,animal:t})=>{const{setValues:r}=mn();return n.jsxs("button",{onClick:o=>{o.preventDefault(),r({color:e,animal:t},o)},children:[e," ",t]})},sT=`import { Form, Field, useForm } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/badger-form'

const UseSetValues = () =>
  <>
    <Form>
      <Field name="color"  label="Color"/>
      <Field name="animal" label="Animal"/>
      <div className="grid-2 gap-4">
        <Setter color="Grey" animal="Elephant"/>
        <Setter color="Red"  animal="Fox"/>
      </div>
    </Form>
  </>

const Setter = ({ color, animal }) => {
  const { setValues } = useForm()
  return (
    <button onClick={e => setValues({ color, animal }, e)}>
      {color} {animal}
    </button>
  )
}

export default UseSetValues`,iT=()=>n.jsx(n.Fragment,{children:n.jsxs(w,{children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(rf,{color:"Grey",animal:"Elephant"}),n.jsx(rf,{color:"Red",animal:"Fox"})]})]})}),rf=({color:e,animal:t})=>{const{setValues:r}=mn();return n.jsxs("button",{onClick:o=>r({color:e,animal:t},o),children:[e," ",t]})},lT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValues()"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",n.jsx("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),n.jsx(Z,{children:"Click on one of the buttons to update the form values."})]}),n.jsx(F,{Component:nT,code:tT,caption:"setValues"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If you want to set the values from a component placed inside the"," ",n.jsx("code",{children:"Form"})," component then you can use ",n.jsx("code",{children:"useForm()"})," to get access to the form context."]}),n.jsx(F,{Component:oT,code:rT,caption:"setValues"}),n.jsx("h2",{children:"Preventing Default Event"}),n.jsxs("p",{children:["If you're using a ",n.jsx("code",{children:"button"})," to trigger the call to"," ",n.jsx("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",n.jsx("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",n.jsx("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),n.jsx(F,{Component:iT,code:sT,caption:"setValues"})]}),aT=Object.freeze(Object.defineProperty({__proto__:null,default:lT},Symbol.toStringTag,{value:"Module"})),dT=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FormExample = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      type="text"
      required
    />
    <Field
      name="password"
      label="Password"
      type="password"
      required
    />
    <Submit/>
  </Form>

export default FormExample`,cT=()=>n.jsxs(w,{children:[n.jsx(x,{name:"email",label:"Email Address",type:"text",required:!0}),n.jsx(x,{name:"password",label:"Password",type:"password",required:!0}),n.jsx(K,{})]}),uT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",n.jsx(X,{})," components to render the fields and a ",n.jsx(Pu,{})," component to add a submit button."]}),n.jsx(F,{Component:cT,code:dT,caption:"Form",expand:!0}),n.jsx(Ci,{})]}),mT=Object.freeze(Object.defineProperty({__proto__:null,default:uT},Symbol.toStringTag,{value:"Module"})),pT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Properties"}),n.jsx(_e,{}),n.jsx(Ci,{})]}),fT=Object.freeze(Object.defineProperty({__proto__:null,default:pT},Symbol.toStringTag,{value:"Module"})),hT=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/badger-form'

const ChildFunctions = () =>
  <Form>
    <Field
      name="greeting"
      label="Enter a greeting"
    />
    { form =>
      <div className="flex gap-2 blue mar-t-4">
        <button
          type="button"
          onClick={() => form.setValues({ greeting: 'Hello' })}
        >
          Say Hello
        </button>
        <button
          type="button"
          onClick={() => form.setValues({ greeting: 'Goodbye' })}
        >
          Say Goodbye
        </button>
      </div>
    }
  </Form>

export default ChildFunctions`,xT=()=>n.jsxs(w,{children:[n.jsx(x,{name:"greeting",label:"Enter a greeting"}),e=>n.jsxs("div",{className:"flex gap-2 blue mar-t-4",children:[n.jsx("button",{type:"button",onClick:()=>e.setValues({greeting:"Hello"}),children:"Say Hello"}),n.jsx("button",{type:"button",onClick:()=>e.setValues({greeting:"Goodbye"}),children:"Say Goodbye"})]})]}),gT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"children"}),n.jsxs("p",{children:["You can define children of a form, either as components or functions. Components can access the form context via ",n.jsx("code",{children:"useForm"}),". Functions receive the form context as the first argument."]}),n.jsx(F,{Component:xT,code:hT,caption:"children",expand:!0})]}),bT=Object.freeze(Object.defineProperty({__proto__:null,default:gT},Symbol.toStringTag,{value:"Module"})),vT=()=>n.jsxs(w,{debug:!0,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(K,{})]}),jT=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const DebugExample = () =>
  <Form debug>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email Address"/>
    <Submit/>
  </Form>

export default DebugExample`,yT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"debug"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"debug"})," property is your friend when it's 5pm on a Friday and you promised your boss/client that you would get the form changes made before you went home, but you can't figure out why it's not working."]}),n.jsx(Z,{children:"Open up the Javascript console and watch the pretty messages go flying by!"})]}),n.jsx(F,{Component:vT,code:jT,caption:"debug",expand:!0}),n.jsx(se,{links:[Br]})]}),FT=Object.freeze(Object.defineProperty({__proto__:null,default:yT},Symbol.toStringTag,{value:"Module"})),wT=()=>{const e={name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}};return n.jsxs(w,{fields:e,children:[n.jsx(x,{name:"name"}),n.jsx(x,{name:"email"}),n.jsx(K,{})]})},ST=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FieldsExample = () => {
  const fields = {
    name: {
      label: 'Your name',
      required: true
    },
    email: {
      label: 'Your email address',
      required: true
    }
  }

  return (
    <Form fields={fields}>
      <Field name="name"/>
      <Field name="email"/>
      <Submit/>
    </Form>
  )
}

export default FieldsExample`,CT=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Your name",required:!0}),n.jsx(x,{name:"email",label:"Your email address",required:!0}),n.jsx(K,{})]}),_T=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,ET=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",n.jsx(X,{})," ",n.jsx(Dr,{})," property is used to associate a field to its definition."]}),n.jsx(F,{Component:wT,code:ST,caption:"fields"}),n.jsxs("p",{children:["This is the same as defining the properties on the ",n.jsx(X,{})," components."]}),n.jsx(F,{Component:CT,code:_T,caption:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",n.jsx(X,{})," component will be considered part of the form."]}),n.jsx("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),n.jsxs("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",n.jsx("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),TT=Object.freeze(Object.defineProperty({__proto__:null,default:ET},Symbol.toStringTag,{value:"Module"})),LT=()=>{const e={user_id:12345},t={name:"Bobby Badger",email:"bobby@badgerpower.com"};return n.jsxs(w,{values:t,hidden:e,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(K,{})]})},kT=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const HiddenExample = () => {
  const hidden = {
    user_id: 12345
  }
  const user = {
    name: 'Bobby Badger',
    email: 'bobby@badgerpower.com'
  }

  return (
    <Form values={user} hidden={hidden}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default HiddenExample`,RT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"hidden"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),n.jsxs("p",{children:["Any ",n.jsx("code",{children:"hidden"})," fields and their values will be included in the submitted data."]})]}),n.jsx(Z,{children:"Submit the form below.  You should see an alert showing that the two visible fields and the hidden data were all submitted."})]}),n.jsx(F,{Component:LT,code:kT,caption:"hidden",expand:!0})]}),NT=Object.freeze(Object.defineProperty({__proto__:null,default:RT},Symbol.toStringTag,{value:"Module"})),OT=()=>{const e={name:"Bobby Badger",email:"bobby@badgerpower.com"};return n.jsxs(w,{values:e,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(K,{})]})},PT=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const ValuesExample = () => {
  const values = {
    name: 'Bobby Badger',
    email: 'bobby@badgerpower.com'
  }

  return (
    <Form values={values}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <Submit/>
    </Form>
  )
}

export default ValuesExample`,AT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"values"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),n.jsx(F,{Component:OT,code:PT,caption:"fields",expand:!0}),n.jsx(se,{links:[Q2]})]}),MT=Object.freeze(Object.defineProperty({__proto__:null,default:AT},Symbol.toStringTag,{value:"Module"})),IT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Validation"}),n.jsx(_e,{}),n.jsx(Ci,{})]}),DT=Object.freeze(Object.defineProperty({__proto__:null,default:IT},Symbol.toStringTag,{value:"Module"})),$T=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"focusInvalidField"}),n.jsxs("p",{children:["This property defaults to ",n.jsx("code",{children:"true"}),".  In this case the first field that fails validation will be automatically focussed."]}),n.jsxs("p",{children:["You can explicitly set it to ",n.jsx("code",{children:"false"})," if you need to."]})]}),zT=Object.freeze(Object.defineProperty({__proto__:null,default:$T},Symbol.toStringTag,{value:"Module"})),BT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"minValidateLength"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(ii,{})," option for all fields. Individual fields can set their own values to override it."]})]}),VT=Object.freeze(Object.defineProperty({__proto__:null,default:BT},Symbol.toStringTag,{value:"Module"})),qT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionalLabel"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(si,{})," option for all fields. Individual fields can set their own values to override it."]})]}),UT=Object.freeze(Object.defineProperty({__proto__:null,default:qT},Symbol.toStringTag,{value:"Module"})),HT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredLabel"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(Xo,{})," option for all fields. Individual fields can set their own values to override it."]})]}),YT=Object.freeze(Object.defineProperty({__proto__:null,default:HT},Symbol.toStringTag,{value:"Module"})),WT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredMessage"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(Ou,{})," option for all fields. Individual fields can set their own values to override it."]})]}),ZT=Object.freeze(Object.defineProperty({__proto__:null,default:WT},Symbol.toStringTag,{value:"Module"})),GT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"resetOnSuccess"}),n.jsxs("p",{children:["This property defaults to ",n.jsx("code",{children:"true"})," and will cause the form to be reset after successful validation and submission."]}),n.jsxs("p",{children:["You can explicitly set it to ",n.jsx("code",{children:"false"})," if you need to."]})]}),KT=Object.freeze(Object.defineProperty({__proto__:null,default:GT},Symbol.toStringTag,{value:"Module"})),QT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showOptional"}),n.jsxs("p",{children:["This option can be set ",n.jsx("code",{children:"true"})," to enable the"," ",n.jsx(zr,{})," option as the default for all fields. Individual fields can set it ",n.jsx("code",{children:"false"})," to override the default."]}),n.jsx("p",{children:'When enabled, optional fields will be display an "Optional" tag in the label.'})]}),XT=Object.freeze(Object.defineProperty({__proto__:null,default:QT},Symbol.toStringTag,{value:"Module"})),JT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showRequired"}),n.jsxs("p",{children:["This option can be set ",n.jsx("code",{children:"true"})," to enable the"," ",n.jsx(Tn,{})," option as the default for all fields. Individual fields can set it ",n.jsx("code",{children:"false"})," to override the default."]}),n.jsx("p",{children:'When enabled, required fields will display a "Required" tag in the label.'})]}),eL=Object.freeze(Object.defineProperty({__proto__:null,default:JT},Symbol.toStringTag,{value:"Module"})),tL=e=>e.password1!==e.password2?Promise.reject({error:"The two passwords you entered don't match",errors:[{name:"password1",message:"This password..."},{name:"password2",message:"...doesn't match this one"}]}):(e.checkedMessage="Passwords were checked!",Promise.resolve(e)),nL=()=>n.jsxs(w,{validate:tL,children:[n.jsx(Ve,{fieldErrors:!1}),n.jsx(x,{name:"password1",type:"password",label:"New Password",required:!0}),n.jsx(x,{name:"password2",type:"password",label:"Confirm Password",required:!0}),n.jsx(K,{})]}),rL=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const checkPasswordsMatch = values => {
  if (values.password1 !== values.password2) {
    return Promise.reject({
      error: "The two passwords you entered don't match",
      errors: [
        {
          name: 'password1',
          message: 'This password...'
        },
        {
          name: 'password2',
          message: "...doesn't match this one"
        }
      ]
    })
  }
  else {
    values.checkedMessage = 'Passwords were checked!'
    return Promise.resolve(values)
  }
}

const PasswordsExample = () =>
  <Form validate={checkPasswordsMatch}>
    <Errors fieldErrors={false}/>
    <Field
      name="password1"
      type="password"
      label="New Password"
      required
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      required
    />
    <Submit/>
  </Form>

export default PasswordsExample`,oL=(e,t)=>{const r=e.password1.trim(),o=e.password2.trim();return r===o?Promise.resolve({password:r}):(t.reset(),Promise.reject({error:"The two passwords you entered don't match"}))},sL=()=>n.jsxs(w,{validate:oL,debug:!0,children:[n.jsx(Ve,{fieldErrors:!1}),n.jsx(x,{name:"password1",type:"password",label:"New Password",required:!0}),n.jsx(x,{name:"password2",type:"password",label:"Confirm Password",required:!0}),n.jsx(K,{})]}),iL=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const checkPasswordsMatch = (values, form) => {
  const password1 = values.password1.trim()
  const password2 = values.password2.trim()

  if (password1 === password2) {
    // resolve but only return a single password
    return Promise.resolve({ password: password1 })
  }
  else {
    // reset the form
    form.reset()
    // reject!
    return Promise.reject({
      error: "The two passwords you entered don't match",
    })
  }
}

const PasswordsExample = () =>
  <Form validate={checkPasswordsMatch} debug>
    <Errors fieldErrors={false}/>
    <Field
      name="password1"
      type="password"
      label="New Password"
      required
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      required
    />
    <Submit/>
  </Form>

export default PasswordsExample`,lL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validate"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," property can be used to provide a validation function for all the form data.  You can also define ",n.jsx($t,{})," ","function on individual fields.  The form validation will be run after all the fields have validated successfully.  If any individual fields fail validation then the form validation is not run."]}),n.jsx("h2",{children:"Simple Example"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed the form values as the first argument."]}),n.jsxs("p",{children:["If the form validation fails then the function should return a rejected promise.  The rejected value should be an object containing either an ",n.jsx("code",{children:"error"})," message, used to indicate a generic error and/or an array of ",n.jsx("code",{children:"errors"})," to indicate errors in particular fields."]}),n.jsx("p",{children:"If the validation passes then the function should return a resolved promise with the form values. The form values can be modified or augmented by the function."})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["You should include the ",n.jsx(Io,{})," component somewhere in your form to report any validation errors.  In this example we're setting the ",n.jsx("code",{children:"fieldErrors"})," property to ",n.jsx("code",{children:"false"})," ","so that the component only displays the generic ",n.jsx("code",{children:"error"}),". The separate field ",n.jsx("code",{children:"errors"})," are already being displayed beneath each field input."]}),n.jsx(Z,{children:"Try entering two different passwords in the form below then click on the Submit button."})]})]}),n.jsx(F,{Component:nL,code:rL,caption:"Form Validation"}),n.jsx("h2",{children:"More Advanced Example"}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed the form context as the second argument.  In this example we call the ",n.jsx(jj,{})," ","method to reset the form if the passwords don't match."]}),n.jsxs("p",{children:["Also note that in this example we're trimming any whitespace from the passwords and, if they match, we return a single",n.jsx("code",{children:"password"})," value in the submission values."]})]}),n.jsx(Z,{children:"Try entering two passwords in the fields below then click on the submit button.  Additional leading and trailing whitespace on the passwords is removed."})]}),n.jsx(F,{Component:sL,code:iL,caption:"Form Validation"}),n.jsx(se,{links:[$t]})]}),aL=Object.freeze(Object.defineProperty({__proto__:null,default:lL},Symbol.toStringTag,{value:"Module"})),dL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnBlur"}),n.jsxs("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",n.jsx(zt,{})," property to ",n.jsx("code",{children:"true"})," ","on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"When enabled, fields will be validated whenever the input loses focus."})]}),cL=Object.freeze(Object.defineProperty({__proto__:null,default:dL},Symbol.toStringTag,{value:"Module"})),uL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnChange"}),n.jsxs("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",n.jsx(Bt,{})," property to ",n.jsx("code",{children:"true"})," "," on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"When enabled, fields will be validated whenever the input changes."})]}),mL=Object.freeze(Object.defineProperty({__proto__:null,default:uL},Symbol.toStringTag,{value:"Module"})),pL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnInvalid"}),n.jsxs("p",{children:["This option is set ",n.jsx("code",{children:"true"})," by default. You can set the ",n.jsx(Sj,{})," property to ",n.jsx("code",{children:"false"})," on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"If a field fails validation then this option switches it to validate whenever the input changes."})]}),fL=Object.freeze(Object.defineProperty({__proto__:null,default:pL},Symbol.toStringTag,{value:"Module"})),hL=`## using npm
$ npm add @abw/badger-form

## using yarn
$ yarn add @abw/badger-form

## using pnpm
$ pnpm add @abw/badger-form`,xL="import { Form, Field, Submit } from '@abw/badger-form'",gL=`// ...then you can do this
import '@abw/badger-form/styles/badger-form.min.css'`,bL=`// If you're not already doing this...
import '@abw/badger-css/styles/badger.min.css';`,vL=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Getting Started"}),n.jsx("h2",{children:"Add the Module"}),n.jsxs("p",{children:["Add the ",n.jsx("code",{className:"code",children:"@abw/badger-form"})," module to your project using your favourite package manager."]}),n.jsx(Ze,{code:hL,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Import the Components"}),n.jsx("p",{children:"You can then import the form components and start using them."}),n.jsx(Ze,{code:xL,caption:"Importing",language:"js",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Import the CSS"}),n.jsxs("p",{children:["Badger Form works out of the box with the form styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),".  If you're already using Badger CSS then you don't need to do anything else as you should already have something like this in your app."]}),n.jsx(Ze,{code:bL,caption:"Importing Badger CSS",language:"js",className:"mar-b-8",expand:!0}),n.jsxs("p",{children:["If you're not already using Badger CSS then you'll need to import the relevant CSS styles. As a convenience, they're bundled with this module.  Note that you only need to import ",n.jsx("b",{children:"either"})," the Badger CSS styles as shown above, ",n.jsx("b",{children:"or"})," the Badger Form styles as shown below."]}),n.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),n.jsx(Ze,{code:gL,caption:"Importing Badger Form CSS",language:"js",className:"mar-b-8",expand:!0})]}),jL=Object.freeze(Object.defineProperty({__proto__:null,default:vL},Symbol.toStringTag,{value:"Module"})),uo=({to:e,className:t="",exact:r,children:o,text:s,onClick:i,label:l,style:a})=>n.jsx(O2,{to:e,onClick:i,end:r&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":l,style:a,children:o||s}),yL=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Why Use It?"}),n.jsx("h2",{children:" I know what you're thinking... "}),n.jsxs("ul",{children:[n.jsx("li",{children:"What does the World need with another React form library?"}),n.jsx("li",{children:"What makes this different, better, and/or worse than all the other form libraries?  "}),n.jsx("li",{children:"Will this guy do my homework for me?"}),n.jsx("li",{children:"Why do we exist?  "}),n.jsx("li",{children:"What is the meaning of life? "}),n.jsx("li",{children:"Where did I leave my car keys? "}),n.jsx("li",{children:"And what is it with all the badgers?"})]}),n.jsxs("p",{children:[n.jsx("b",{children:"None"})," of these questions will be answered, at least not directly. You can read the copious documentation provided here if you want to find out more.  Or don't.  It makes no difference to me.  Seriously, I'm not looking to convince you that this is any better or worse than any other form library.  I'm not interested in attracting new users or changing the world.  Been there, done that, burned out."]}),n.jsx("h2",{children:"Still With Me?"}),n.jsx("p",{className:"subintro",children:"OK then, but proceed at your own risk."}),n.jsxs("p",{children:["Read on for more information about what this library sets out to achieve.  If you just want to see it in action then feel free to skip the rest of this page and go straight to the"," ",n.jsx(uo,{to:"/tutorial/basic-form",text:"tutorial"}),"."]}),n.jsx("h2",{children:"Key Features"}),n.jsx("p",{className:"subintro",children:"These are some of the things that I think are important in a form library and have influenced the design."}),n.jsxs("ul",{className:"li-space",children:[n.jsxs("li",{children:["Above all else, ",n.jsx("b",{children:"simplicity"}),".  Building a form with"," ",n.jsx("code",{children:"badger-form"})," should be ",n.jsx("i",{children:"at least"})," as easy as defining a vanilla HTML form, and ideally, easier. I don't want to have to build every field manually from separate components.  In most cases I want my fields to include a label, an input, and somewhere for validation messages to go.  So there should be a sensible default layout that takes care of that for me."]}),n.jsxs("li",{children:["Closely related to that is ",n.jsx("b",{children:"consistency"}),`. In the vast majority of cases I want all my forms and fields to look the same and conform to whatever branding and/or style guide I've got in place.  I don't mind spending a bit of time up front to get everything looking right, but after that I just want to "push a button" and get the same results every time with the minimum of fuss.`]}),n.jsxs("li",{children:["And that brings us on to ",n.jsx("b",{children:"maintainability"}),".  The less markup I have to write, the less I have to maintain, and the easier it will be to do so.  If the client or a designer decides they want all the form fields to have the label in a different place, be aligned differently, have more padding, or something else, then I want to be able to change that in a single place.  It might mean changing some CSS, re-defining a style, or updating a single field layout component.  But I certainly don't want to have to go and edit every field in every form to make the change."]}),n.jsxs("li",{children:["Of course there are times when you want to do something a bit different, so ",n.jsx("b",{children:"flexibility"})," is also important.  It's good to have a default layout for ",n.jsx("i",{children:"most"})," of your form fields, but you also need to be able to switch something else in for those special cases. This should be easy, not hard."]}),n.jsxs("li",{children:[n.jsx("b",{children:"Extensibility"})," is also important for those times when there isn't something available off-the-shelf and you need to get your hands dirty and write a custom component.  Maybe you need a custom autocomplete component or search widget.  Maybe you need to include Recaptcha validation, or something else that requires aynchronous calls to an API.  I don't know what you might need.  I can't even predict what I might need this time next week.  So it's important that the library exposes enough of the internal workings to allow you to plug new things in.  It might not be easy, but it should be possible."]}),n.jsxs("li",{children:["None of that would be possible without ",n.jsx("b",{children:"reliability"}),'.  We need to be able to trust the library to "Do The Right Thing" and that means it has to be well tested.  This library has ',n.jsx("i",{children:"lots"})," of automated tests with almost 100% coverage (the exceptions are a few edge cases that would be pointless to try and cover just for the sake of hitting 100%)."]}),n.jsxs("li",{children:["Another concern is ",n.jsx("b",{children:"security"}),". It supports client-side and server-side validation.  If for some reason an invalid input gets past the client-side validation and generates an angry response from the server then it can update the form to display the errors and highlight the invalid field(s).  Although it's not in the library yet, I've been toying with the idea of ",n.jsx("i",{children:"isomorphic validation"}),", allowing you to use the same validation rules for both client-side and server-side code."]}),n.jsxs("li",{children:["And talking of concerns, we like to separate them, so ",n.jsx("b",{children:"modularity"})," ",'is important.  You should be able to define the schema for a form and all of its fields (including validation) in a single place, possibly away from the markup used to render the form.  Being able to separate the "logic" of a form from the presentational aspects make it easier to update both in isolation.']}),n.jsxs("li",{children:["One often overlooked aspect is ",n.jsx("b",{children:"accessibility"}),".  The library uses vanilla HTML form elements by default because they offer the best accessibility across different browsers and devices (anyone who has ever tried to use some of the popular select widgets or date pickers on a mobile device may know what I mean). You can always plug in different input components if you want to, but you shouldn't overlook ",n.jsx("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/",children:"WAI-ARIA"})," ","compliance.  Your design may look great but if it's not usable by people with disabilities (or people who just prefer to use the keyboard for form navigation) then it's broken and you should feel bad."]}),n.jsxs("li",{children:["Functionality is paramount, but we also care about ",n.jsx("b",{children:"presentability"}),". It comes with a default stylesheet that provides reasonable defaults for styling different form components and all their states (focussed, valid, invalid, disabled, etc).  It comes with both light and dark themes and is written using SASS and CSS variables so you can easily change the styling. There's a single variable that you can set to change the basic theme colour to match your brand so you can get up and running really quickly.  As and when you need to change styles, add new components, or make other changes then you generally can with the minimum of fuss."]}),n.jsxs("li",{children:["And last, but not least, ",n.jsx("b",{children:"efficiency"}),".  The library is comparatively small and simple (less than 10kB for the compressed bundle at the time of writing). It only works with modern (v18+) versions of React and there are no plans to port it to other web frameworks.  It doesn't set out to please all of the people all of the time.  Rather, it is designed to please me, most of the time, and as such it may not have (and may never have) all the features that other people might want.  You are, of course, free to go and write your own form library."]})]}),n.jsxs("h2",{children:["Why Not Just Use ",n.jsx("code",{children:"<ANOTHER FORM LIBRARY>"}),"?"]}),n.jsx("p",{className:"subintro",children:"Go for it.  This is software that I wrote for me.  I'm not suggesting that it's the right solution for you.  But if you want to know why I wrote it, then read on..."}),n.jsx("p",{children:"This library started out a few years back when the state of the art in React form libraries wasn't quite where it is today. React 16.3 had just been released with its shiny new contexts and I thought it might be a better way to build a form library than what we had at the time.  So I did and it turned out pretty well.  It was designed by me, for me, and unsurprisingly it met my particular needs particularly well.  It may not meet yours."}),n.jsxs("p",{children:["Over the years I've built a ",n.jsx("i",{children:"lot"})," of forms with it for various different customers.  I don't much fancy the idea of having to re-write hundreds of forms that already work Just Fine™ and I don't imagine my customers would want to pay me to do it either. So I still use it, and have occasional bursts of development/maintenance where I add new features, clean up ugly bits of code, fix minor bugs or limitations that have been annoying me for a while, or update the documentation and examples.  That's what I'm doing right now, as it happens."]}),n.jsxs("p",{children:["For the last few years it's been an integral part of my ",n.jsx("a",{href:"https://github.com/abw/badger-ui",children:"badger-ui"})," library but I'm now trying to break things up a little bit and extract some of the reusable functionality into different modules.  So that's how we got here."]}),n.jsxs("p",{children:["But the best reason of all is that I built it because I ",n.jsx("i",{children:"wanted"})," to. I like writing software.  I like solving problems.  Sometimes that means spending my weekends re-inventing wheels that happen to fit my skateboard a bit better than all the other wheels out there.  That's all the justification I need.  You are, of course, free to have a different opinion and use whatever tools best fit your needs."]})]}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:yL},Symbol.toStringTag,{value:"Module"})),wL=e=>T.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},T.createElement("path",{className:"form",d:"M464.349,148.481C464.349,144.531 465.027,141.143 466.383,138.316C467.738,135.489 469.577,133.165 471.901,131.345C474.225,129.525 476.955,128.189 480.092,127.337C483.228,126.485 486.578,126.059 490.141,126.059C495.872,126.059 500.094,126.814 502.804,128.324C505.515,129.835 506.871,132.41 506.871,136.05C506.871,137.599 506.541,138.993 505.883,140.232C505.225,141.472 504.508,142.401 503.734,143.021C502.262,142.634 500.733,142.304 499.145,142.033C497.557,141.762 495.718,141.627 493.626,141.627C490.296,141.627 487.701,142.188 485.842,143.311C483.984,144.434 483.054,146.39 483.054,149.178L483.054,152.896L502.107,152.896C502.572,153.748 503.017,154.813 503.443,156.091C503.869,157.369 504.082,158.782 504.082,160.331C504.082,163.042 503.482,164.998 502.282,166.198C501.081,167.399 499.474,167.999 497.46,167.999L484.1,167.999L484.1,204.828C483.325,205.06 482.105,205.292 480.44,205.525C478.775,205.757 477.052,205.873 475.27,205.873C473.566,205.873 472.037,205.757 470.681,205.525C469.326,205.292 468.183,204.828 467.254,204.13C466.324,203.433 465.608,202.485 465.105,201.284C464.601,200.084 464.349,198.515 464.349,196.579L464.349,148.481ZM569.955,176.712C569.955,181.514 569.22,185.794 567.748,189.55C566.276,193.307 564.205,196.463 561.532,199.019C558.86,201.575 555.665,203.511 551.948,204.828C548.23,206.144 544.086,206.803 539.517,206.803C534.947,206.803 530.803,206.106 527.086,204.711C523.368,203.317 520.173,201.323 517.501,198.728C514.829,196.134 512.757,192.977 511.285,189.26C509.814,185.542 509.078,181.36 509.078,176.712C509.078,172.143 509.814,167.999 511.285,164.281C512.757,160.564 514.829,157.407 517.501,154.813C520.173,152.218 523.368,150.224 527.086,148.83C530.803,147.436 534.947,146.738 539.517,146.738C544.086,146.738 548.23,147.455 551.948,148.888C555.665,150.321 558.86,152.334 561.532,154.929C564.205,157.524 566.276,160.68 567.748,164.398C569.22,168.115 569.955,172.22 569.955,176.712ZM529.293,176.712C529.293,181.437 530.203,185.058 532.023,187.575C533.843,190.092 536.38,191.351 539.633,191.351C542.886,191.351 545.384,190.073 547.126,187.517C548.869,184.961 549.74,181.36 549.74,176.712C549.74,172.065 548.85,168.483 547.068,165.966C545.287,163.449 542.77,162.19 539.517,162.19C536.264,162.19 533.747,163.449 531.965,165.966C530.184,168.483 529.293,172.065 529.293,176.712ZM599.348,204.828C598.574,205.06 597.354,205.292 595.689,205.525C594.024,205.757 592.3,205.873 590.519,205.873C588.815,205.873 587.285,205.757 585.93,205.525C584.574,205.292 583.432,204.828 582.503,204.13C581.573,203.433 580.857,202.485 580.353,201.284C579.85,200.084 579.598,198.515 579.598,196.579L579.598,161.725C579.598,159.944 579.927,158.414 580.586,157.136C581.244,155.858 582.193,154.716 583.432,153.709C584.671,152.702 586.201,151.792 588.021,150.979C589.841,150.166 591.797,149.449 593.888,148.83C595.979,148.21 598.148,147.726 600.394,147.377C602.64,147.029 604.886,146.855 607.132,146.855C610.85,146.855 613.793,147.571 615.962,149.004C618.131,150.437 619.215,152.78 619.215,156.033C619.215,157.117 619.06,158.182 618.75,159.228C618.44,160.273 618.053,161.222 617.588,162.074C615.962,162.074 614.297,162.151 612.593,162.306C610.889,162.461 609.224,162.694 607.597,163.003C605.971,163.313 604.441,163.642 603.008,163.991C601.575,164.339 600.355,164.746 599.348,165.211L599.348,204.828ZM653.255,146.738C656.431,146.738 659.548,147.184 662.607,148.075C665.667,148.965 668.32,150.301 670.566,152.083C672.889,150.534 675.503,149.256 678.408,148.249C681.312,147.242 684.817,146.738 688.922,146.738C691.865,146.738 694.75,147.126 697.577,147.9C700.404,148.675 702.921,149.895 705.129,151.56C707.336,153.225 709.098,155.432 710.415,158.182C711.731,160.932 712.39,164.281 712.39,168.231L712.39,204.828C711.615,205.06 710.395,205.292 708.73,205.525C707.065,205.757 705.342,205.873 703.56,205.873C701.856,205.873 700.327,205.757 698.971,205.525C697.616,205.292 696.473,204.828 695.544,204.13C694.615,203.433 693.898,202.485 693.395,201.284C692.891,200.084 692.64,198.515 692.64,196.579L692.64,168.812C692.64,166.489 691.981,164.804 690.665,163.759C689.348,162.713 687.566,162.19 685.32,162.19C684.236,162.19 683.074,162.442 681.835,162.945C680.596,163.449 679.666,163.972 679.047,164.514C679.124,164.824 679.163,165.114 679.163,165.385L679.163,204.828C678.311,205.06 677.052,205.292 675.387,205.525C673.722,205.757 672.037,205.873 670.333,205.873C668.629,205.873 667.1,205.757 665.744,205.525C664.389,205.292 663.246,204.828 662.317,204.13C661.388,203.433 660.671,202.485 660.168,201.284C659.664,200.084 659.413,198.515 659.413,196.579L659.413,168.812C659.413,166.489 658.696,164.804 657.263,163.759C655.83,162.713 654.107,162.19 652.093,162.19C650.699,162.19 649.499,162.403 648.492,162.829C647.485,163.255 646.633,163.662 645.936,164.049L645.936,204.828C645.161,205.06 643.942,205.292 642.276,205.525C640.611,205.757 638.888,205.873 637.106,205.873C635.402,205.873 633.873,205.757 632.517,205.525C631.162,205.292 630.02,204.828 629.09,204.13C628.161,203.433 627.444,202.485 626.941,201.284C626.437,200.084 626.186,198.515 626.186,196.579L626.186,161.493C626.186,159.402 626.631,157.737 627.522,156.497C628.412,155.258 629.632,154.096 631.181,153.012C633.815,151.153 637.087,149.643 640.998,148.481C644.91,147.319 648.995,146.738 653.255,146.738Z"}),T.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),T.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z"}),T.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"})),SL=e=>T.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},T.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),T.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),T.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),T.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),T.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),T.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),T.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),CL=()=>n.jsxs("div",{className:"pad-t-8",children:[n.jsxs("div",{className:"grid-2 gap-12 start stack-laptop",children:[n.jsx("div",{children:n.jsx(wL,{className:"badger-form mar-t-4"})}),n.jsx("div",{children:n.jsxs("p",{className:"larger",children:["Badger Form is a yet another module for building forms in React.  It implements state management for forms with styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),"."]})})]}),n.jsx("p",{className:"intro",children:"It provides default components for rendering form fields which simplifies the process of creating and using forms.  You can override them with your own field input components, or manually implement the layout for individual fields any way you like."}),n.jsxs("div",{className:"error alert border bdw-2 shadow-2 mar-v-16",children:[n.jsx("div",{className:"headline",children:"WARNING - Work in Progress"}),n.jsx("p",{className:"bold large",children:"Do not use this library unless you like living dangerously!"}),n.jsx("p",{children:"It's in the process of being re-written and it's special. Look... see... still got the uh... the ol' tagger on it... see... never even played it... Don't touch it!  Don't touch it! No one... no one... no!  Don't touch it. Don't point, even. No.  It can't be played... never... I mean..."}),n.jsx("p",{className:"mar-b-0 bold fgc-30 fgd-80",children:"Don't even look at it.  You've seen enough of that one."})]}),n.jsx("h2",{className:"mar-t-8 mar-b-none",children:"Read the Fine Documentation"}),n.jsxs("ul",{className:"large menu mar-t-none",children:[n.jsxs("li",{children:[n.jsx(uo,{to:"/getting-started/installation",text:"Installation"})," - adding the module to your project."]}),n.jsxs("li",{children:[n.jsx(uo,{to:"/tutorial/basic-form",text:"A Basic Form"})," - rendering your first form"]}),n.jsxs("li",{children:[n.jsx(uo,{to:"/form",text:"The Form Component"})," - a detailed look at the form container"]}),n.jsxs("li",{children:[n.jsx(uo,{to:"/field",text:"The Field Component"})," - adding a field to a form"]})]}),n.jsx("div",{className:"text-center",children:n.jsx(SL,{className:"width-12rem"})}),n.jsx("h2",{children:"This is Opinionated and Selfish Software..."}),n.jsxs("p",{children:["I wrote this library to help me do my job and make the process of working with forms less painful than I found it using other modules. It is ",n.jsx("i",{children:"opinionated"})," because it does things the way I like them to be done, and it's ",n.jsx("i",{children:"selfish"})," because I have no intention of adding things that I don't need or want."]}),n.jsx("h2",{children:"...because it's Open Source Software"}),n.jsxs("p",{children:["It's Open Source Software and you can use it if you want to for ",n.jsx("b",{children:"free"}),". You have full access to the source code which you can adapt if you need to.  If it proves useful in helping you get your job done then that's great.  But please don't expect me to commit ",n.jsx("i",{children:"my"})," time to helping ",n.jsx("i",{children:"you"})," get your job done."]}),n.jsxs("p",{children:["If you're now wondering why you should use this software, the short answer is that you probably shouldn't.  There are now numerous other form libraries for React that are probably better suited to your needs than this.  The longer answer explaining why I wrote it (because those libraries didn't exist back then) and why I continue to use it (because it works for me) can be found"," ",n.jsx(uo,{to:"/getting-started/why-use-it",text:"here"}),"."]})]}),_L=Object.freeze(Object.defineProperty({__proto__:null,default:CL},Symbol.toStringTag,{value:"Module"})),EL=()=>n.jsx(w,{children:n.jsx(x,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),TL=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const RadioInput = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Radio Buttons"
      options={[
        { value: 'badger', text: 'Bobby Badger', },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
  </Form>

export default RadioInput
`,v3=()=>n.jsx(Ke,{menu:W2}),LL=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"radio"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(En,{})," to ",n.jsx("code",{children:"radio"})," for a radio button set."]}),n.jsx(F,{Component:EL,code:TL,caption:"checkbox",expand:!0}),n.jsx(v3,{})]}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:LL},Symbol.toStringTag,{value:"Module"})),RL=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Radio Properties"}),n.jsx(_e,{}),n.jsx(v3,{})]}),NL=Object.freeze(Object.defineProperty({__proto__:null,default:RL},Symbol.toStringTag,{value:"Module"})),OL=()=>n.jsxs(w,{children:[n.jsx(x,{type:"radio",name:"animal1",label:"Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-b-2",border:!0}),n.jsx(x,{type:"radio",name:"animal1",label:"Inline Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-r-2",border:!0,inline:!0})]}),PL=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Border = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-b-2"
      border
    />
    <Field
      type="radio"
      name="animal1"
      label="Inline Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-r-2"
      border inline
    />
  </Form>
  /* END */

export default Border`,AL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"border"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"border"})," property to add a border around each option. Note that margins aren't automatically added between each option, but you can use the ",n.jsx(Ij,{})," and/or"," ",n.jsx(Dj,{})," properties to add CSS classes to apply margins."]}),n.jsx(F,{Component:OL,code:PL,caption:"border",undent:2,expand:!0})]}),ML=Object.freeze(Object.defineProperty({__proto__:null,default:AL},Symbol.toStringTag,{value:"Module"})),IL=()=>n.jsx(w,{children:n.jsx(x,{type:"radio",name:"animal",label:"Inline Options",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),DL=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Inline Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inline
    />
  </Form>
  /* END */

export default Inline`,$L=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["The default behaviour is for radio button options to be displayed as blocks that extend to the full width of the container. You can set the ",n.jsx("code",{children:"inline"})," property on the field to display the options inline."]}),n.jsx(F,{Component:IL,code:DL,caption:"inline",undent:2,expand:!0})]}),zL=Object.freeze(Object.defineProperty({__proto__:null,default:$L},Symbol.toStringTag,{value:"Module"})),BL=()=>n.jsx(w,{children:n.jsx(x,{type:"radio",name:"animal",label:"Input Class",options:["Badger","Ferret","Stoat","Weasel"],inputClass:"larger"})}),VL=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const InputClass = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Input Class"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inputClass="larger"
    />
  </Form>
  /* END */

export default InputClass`,qL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inputClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"inputClass"})," property can be used to add a CSS class to the radio button input for each option."]}),n.jsx(F,{Component:BL,code:VL,caption:"inputClass",undent:2,expand:!0})]}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),HL=()=>n.jsxs(w,{children:[n.jsx(x,{type:"radio",name:"animal1",label:"Options With Margins on Right and Extra Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"inline mar-r-4 mar-b-4 pad-h-4",border:!0}),n.jsx(x,{type:"radio",name:"animal2",label:"Large Options With Margins and Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"large mar-b-4 pad-v-2 pad-h-4",border:!0})]}),YL=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const OptionClass = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Options With Margins on Right and Extra Padding"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="inline mar-r-4 mar-b-4 pad-h-4"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Large Options With Margins and Padding"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="large mar-b-4 pad-v-2 pad-h-4"
      border
    />
  </Form>
  /* END */

export default OptionClass`,WL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"optionClass"})," property can be used to add a CSS class to each option."]}),n.jsx(F,{Component:HL,code:YL,caption:"optionClass",undent:2,expand:!0})]}),ZL=Object.freeze(Object.defineProperty({__proto__:null,default:WL},Symbol.toStringTag,{value:"Module"})),GL=()=>n.jsx(w,{children:n.jsx(x,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger",className:"underline"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),KL=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Options = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Radio Buttons"
      options={[
        { value:     'badger',
          text:      'Bobby Badger',
          className: 'underline'
        },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
  </Form>
  /* END */

export default Options`,QL=()=>n.jsx(w,{children:n.jsx(x,{type:"radio",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),XL=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Options = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Simple Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>
  /* END */

export default Options`,JL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"options"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"options"})," property to define the options for the radio button set.  It should be an array of objects that contain"," ",n.jsx("code",{children:"value"})," (used to set the field value) and ",n.jsx("code",{children:"text"})," ","(used as the text label) properties.  You can also add a ",n.jsx("code",{children:"className"})," ","property to add a CSS class to a particular option."]}),n.jsx(F,{Component:GL,code:KL,caption:"options",undent:2,expand:!0}),n.jsxs("p",{children:["In simple cases where the value and text are the same, you can define the ",n.jsx("code",{children:"options"})," as an array of strings."]}),n.jsx(F,{Component:QL,code:XL,caption:"options",undent:2,expand:!0})]}),ek=Object.freeze(Object.defineProperty({__proto__:null,default:JL},Symbol.toStringTag,{value:"Module"})),tk=()=>n.jsxs(w,{children:[n.jsx(x,{type:"radio",name:"animal1",label:"Flex Options With Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"flex gap-4",border:!0}),n.jsx(x,{type:"radio",name:"animal2",label:"Grid Options with Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"grid-2 gap-4",border:!0})]}),nk=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const OptionsClass = () =>
  /* START */
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Flex Options With Gaps"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionsClass="flex gap-4"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Grid Options with Gaps"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionsClass="grid-2 gap-4"
      border
    />
  </Form>
  /* END */

export default OptionsClass`,rk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionsClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"optionsClass"})," property can be used to add a CSS class to each option."]}),n.jsx(F,{Component:tk,code:nk,caption:"optionsClass",undent:2,expand:!0})]}),ok=Object.freeze(Object.defineProperty({__proto__:null,default:rk},Symbol.toStringTag,{value:"Module"})),sk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Name",wide:!0}),n.jsx(x,{name:"email",label:"Email",wide:!0}),n.jsx(fe,{})]}),ik=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitExample = () =>
  <Form>
    <Field name="name"  label="Name"  wide/>
    <Field name="email" label="Email" wide/>
    <ResetSubmit/>
  </Form>

export default ResetSubmitExample
`,j3=()=>n.jsx(Ke,{menu:z2}),lk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"ResetSubmit"}),n.jsxs("p",{className:"intro wide",children:["Renders a ",n.jsx(n3,{})," button and a ",n.jsx(Pu,{})," button."]}),n.jsx(F,{Component:sk,code:ik,caption:"ResetSubmit",expand:!0}),n.jsx(j3,{})]}),ak=Object.freeze(Object.defineProperty({__proto__:null,default:lk},Symbol.toStringTag,{value:"Module"})),dk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"ResetSubmit Properties"}),n.jsx(_e,{}),n.jsx(j3,{})]}),ck=Object.freeze(Object.defineProperty({__proto__:null,default:dk},Symbol.toStringTag,{value:"Module"})),uk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(fe,{className:"flex space pad-2 bgc-90 bgd-10 border bdr-2"})]}),mk=`import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

// PRETEND: import { Form, Field, ResetSubmit } from '@abw/badger-form'

const ResetSubmitClass = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit
      className="flex space pad-2 bgc-90 bgd-10 border bdr-2"
    />
  </Form>
  /* END */

export default ResetSubmitClass
`,pk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to define your own CSS class for the container.  When this is defined the ",n.jsx(kj,{})," ","and ",n.jsx(Rj,{})," properties have no effect."]}),n.jsxs("p",{children:["In this example we use ",n.jsx("code",{children:"flex space"})," to separate the buttons, along with ",n.jsx("code",{children:"pad-2"})," to add some padding.  The"," ",n.jsx("code",{children:"bgc-90"})," class sets the background color to ",n.jsx("code",{children:"grey-90"})," ","and ",n.jsx("code",{children:"bgd-10"})," sets it to ",n.jsx("code",{children:"grey-10"})," when the dark theme is selected.  The ",n.jsx("code",{children:"border"})," class adds a border and"," ",n.jsx("code",{children:"bdr-2"})," sets the border radius to 0.5em.  These are all utility classes provided by ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),", but it works equally well with your own styles or those provided by a different CSS toolkit."]})]}),n.jsx(F,{Component:uk,code:mk,caption:"className",undent:2,expand:!0})]}),fk=Object.freeze(Object.defineProperty({__proto__:null,default:pk},Symbol.toStringTag,{value:"Module"})),hk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(fe,{gap:8})]}),xk=`import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitGap = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit gap={8}/>
  </Form>
  /* END */

export default ResetSubmitGap
`,gk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The default CSS class for the container uses flexbox and sets a gap of 1rem between the buttons (",n.jsx("code",{children:"flex gap-h-4"}),"). The ",n.jsx("code",{children:"gap"})," property can be passed to change the gap (in units of 0.25rem) between the buttons."]}),n.jsx(F,{Component:hk,code:xk,caption:"gap",undent:2,expand:!0})]}),bk=Object.freeze(Object.defineProperty({__proto__:null,default:gk},Symbol.toStringTag,{value:"Module"})),vk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(fe,{reset:{className:"outline",text:"Undo Changes"}})]}),jk=`import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit
      reset={{
        className: 'outline',
        text: 'Undo Changes'
      }}
    />
  </Form>
  /* END */

export default ResetSubmitExample
`,yk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"reset"})," property can be used to pass properties to the ",n.jsx(n3,{})," component."]}),n.jsx(F,{Component:vk,code:jk,caption:"reset",undent:2,expand:!0})]}),Fk=Object.freeze(Object.defineProperty({__proto__:null,default:yk},Symbol.toStringTag,{value:"Module"})),wk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(fe,{space:!0})]}),Sk=`import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitSpace = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ResetSubmitSpace
`,Ck=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"space"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"space"})," property can be added to change the class to ",n.jsx("code",{children:"flex space controls"}),".  This will space the controls to either side of the container."]}),n.jsx(F,{Component:wk,code:Sk,caption:"space",undent:2,expand:!0})]}),_k=Object.freeze(Object.defineProperty({__proto__:null,default:Ck},Symbol.toStringTag,{value:"Module"})),Ek=()=>n.jsxs(w,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(fe,{submit:{className:"blue",text:"Save"}})]}),Tk=`import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit
      submit={{
        className: 'blue',
        text: 'Save'
      }}
    />
  </Form>
  /* END */

export default ResetSubmitExample
`,Lk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submit"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"submit"})," property can be used to pass properties to the ",n.jsx(Pu,{})," component."]}),n.jsx(F,{Component:Ek,code:Tk,caption:"submit",undent:2,expand:!0})]}),kk=Object.freeze(Object.defineProperty({__proto__:null,default:Lk},Symbol.toStringTag,{value:"Module"})),Rk=()=>n.jsxs(w,{values:{three:"The third field"},onReset:()=>alert("You reset the form"),children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two with default value",default:"Badger"}),n.jsx(x,{name:"three",label:"Field three with pre-defined form value"}),n.jsx(ur,{})]}),Nk=`import { Form, Field, Reset } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/badger-form'

const ResetExample = () =>
  <Form
    values={{ three: 'The third field' }}
    onReset={() => alert('You reset the form')}
  >
    <Field
      name="one"
      label="Field one"
    />
    <Field
      name="two"
      label="Field two with default value"
      default="Badger"
    />
    <Field
      name="three"
      label="Field three with pre-defined form value"
    />
    <Reset/>
  </Form>

export default ResetExample`,y3=()=>n.jsx(Ke,{menu:$2}),Ok=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Reset"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state."]}),n.jsxs(D,{children:[n.jsxs("p",{children:["Any"," ",n.jsx(nc,{})," defined on the ",n.jsx(ue,{})," will be restored. Any fields that have a ",n.jsx(yj,{})," value will be reset to that value.  You can also define a ",n.jsx(ue,{})," ",n.jsx(vj,{})," handler which will be called when the form is reset."]}),n.jsx(Z,{children:"Try entering some values in the form below and then click on the reset button."})]}),n.jsx(F,{Component:Rk,code:Nk,caption:"Reset",expand:!0}),n.jsx(y3,{})]}),Pk=Object.freeze(Object.defineProperty({__proto__:null,default:Ok},Symbol.toStringTag,{value:"Module"})),Ak=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Reset Properties"}),n.jsx(_e,{}),n.jsx(y3,{})]}),Mk=Object.freeze(Object.defineProperty({__proto__:null,default:Ak},Symbol.toStringTag,{value:"Module"})),Ik=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(ur,{className:"outline"})]}),Dk=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const ClassNameExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset className="outline"/>
  </Form>
  /* END */

export default ClassNameExample`,$k=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a custom CSS class."]}),n.jsx(F,{Component:Ik,code:Dk,caption:"className",undent:2,expand:!0})]}),zk=Object.freeze(Object.defineProperty({__proto__:null,default:$k},Symbol.toStringTag,{value:"Module"})),Bk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(ur,{onClick:()=>alert("reset intercepted")})]}),Vk=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const OnClickExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Reset onClick={() => alert('reset intercepted')}/>
  </Form>
  /* END */

export default OnClickExample`,qk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onClick"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onClick"})," property to handle a click on the button."]}),n.jsx(F,{Component:Bk,code:Vk,caption:"onClick",undent:2,expand:!0})]}),Uk=Object.freeze(Object.defineProperty({__proto__:null,default:qk},Symbol.toStringTag,{value:"Module"})),Hk=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(ur,{text:"Undo Changes"})]}),Yk=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const TextExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset text="Undo Changes"/>
  </Form>
  /* END */

export default TextExample`,Wk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"text"})," property to change the text that's displayed on the button."]}),n.jsx(F,{Component:Hk,code:Yk,caption:"text",undent:2,expand:!0})]}),Zk=Object.freeze(Object.defineProperty({__proto__:null,default:Wk},Symbol.toStringTag,{value:"Module"})),Gk=()=>n.jsx(w,{children:n.jsx(x,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[{value:11,text:"Eleven"},{value:42,text:"Forty-Two"},{value:69,text:"Sixty nine, dude!"}]})}),Kk=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const SelectInput = () =>
  <Form>
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[
        { value: 11, text: 'Eleven' },
        { value: 42, text: 'Forty-Two' },
        { value: 69, text: 'Sixty nine, dude!' }
      ]}
    />
  </Form>

export default SelectInput
`,F3=()=>n.jsx(Ke,{menu:Z2}),Qk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"select"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(En,{})," to ",n.jsx("code",{children:"select"})," for a drop-down select list."]}),n.jsx(F,{Component:Gk,code:Kk,caption:"select",expand:!0}),n.jsx(F3,{})]}),Xk=Object.freeze(Object.defineProperty({__proto__:null,default:Qk},Symbol.toStringTag,{value:"Module"})),Jk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Select Properties"}),n.jsx(_e,{}),n.jsx(F3,{})]}),eR=Object.freeze(Object.defineProperty({__proto__:null,default:Jk},Symbol.toStringTag,{value:"Module"})),tR=()=>n.jsx(w,{children:n.jsx(x,{name:"animal",type:"select",label:"Pick an animal",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),nR=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="animal"
      type="select"
      label="Pick an animal"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inline
    />
  </Form>
  /* END */

export default Inline`,rR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["The default behaviour is for the select input to be displayed as blocks that extends to the full width of the container. You can set the ",n.jsx("code",{children:"inline"})," property on the field to display it inline."]}),n.jsx(F,{Component:tR,code:nR,caption:"inline",undent:2,expand:!0})]}),oR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),sR=()=>n.jsx(w,{children:n.jsx(x,{type:"select",name:"animal",label:"Select Options",options:[{value:"badger",text:"Bobby Badger"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),iR=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Options = () =>
  /* START */
  <Form>
    <Field
      type="select"
      name="animal"
      label="Select Options"
      options={[
        { value: 'badger', text: 'Bobby Badger', },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  },
      ]}
    />
  </Form>
  /* END */

export default Options`,lR=()=>n.jsx(w,{children:n.jsx(x,{type:"select",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),aR=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Options = () =>
  /* START */
  <Form>
    <Field
      type="select"
      name="animal"
      label="Simple Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>
  /* END */

export default Options`,dR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"options"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"options"})," property to define the options for the select input.  It should be an array of objects that contain"," ",n.jsx("code",{children:"value"})," (used to set the field value) and ",n.jsx("code",{children:"text"})," ","(used as the text label) properties."]}),n.jsx(F,{Component:sR,code:iR,caption:"options",undent:2,expand:!0}),n.jsxs("p",{children:["In simple cases where the value and text are the same, you can define the ",n.jsx("code",{children:"options"})," as an array of strings."]}),n.jsx(F,{Component:lR,code:aR,caption:"options",undent:2,expand:!0})]}),cR=Object.freeze(Object.defineProperty({__proto__:null,default:dR},Symbol.toStringTag,{value:"Module"})),uR=()=>n.jsx(w,{children:n.jsx(x,{type:"select",name:"animal",label:"Select Options",placeholder:"Pick an animal",options:["Badger","Ferret","Stoat","Weasel"]})}),mR=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Placeholder = () =>
  /* START */
  <Form>
    <Field
      type="select"
      name="animal"
      label="Select Options"
      placeholder="Pick an animal"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>
  /* END */

export default Placeholder`,pR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(F,{Component:uR,code:mR,caption:"placeholder",undent:2,expand:!0})]}),fR=Object.freeze(Object.defineProperty({__proto__:null,default:pR},Symbol.toStringTag,{value:"Module"})),hR=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two",value:"Hello World!"}),n.jsx(kn,{changed:!0,children:n.jsx(fe,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),xR=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Status, ResetSubmit } from '@abw/badger-form'

const ChangedExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two" value="Hello World!"/>
    <Status changed>
      <ResetSubmit
        space
        reset={{ className: 'outline' }}
        submit={{ className: 'blue' }}
      />
    </Status>
  </Form>

export default ChangedExample`,w3=()=>n.jsx(Ke,{menu:V2}),gR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Status"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Status"})," component will only render its child components when the form status matches a particular condition."]}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The component expects one or more properties relating to different form status conditions:"," ",n.jsx("code",{children:"changed"}),","," ",n.jsx("code",{children:"validating"}),","," ",n.jsx("code",{children:"valid"}),","," ",n.jsx("code",{children:"invalid"}),","," ",n.jsx("code",{children:"submitting"})," and"," ",n.jsx("code",{children:"submitted"}),". The default behaviour is to only render the children when all of the specified conditions are met.  The ",n.jsx("code",{children:"any"})," property can be provided to change that to match any condition."]}),n.jsxs("p",{children:['A simple example is shown below. The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field and the form ',n.jsx("code",{children:"changed"})," status flag is true."]})]}),n.jsxs(Z,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),n.jsx(F,{Component:hR,code:xR,caption:"Status",expand:!0}),n.jsx(w3,{})]}),bR=Object.freeze(Object.defineProperty({__proto__:null,default:gR},Symbol.toStringTag,{value:"Module"})),vR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Status Properties"}),n.jsx(_e,{}),n.jsx(w3,{})]}),jR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),yR=()=>n.jsxs(w,{onSubmit:()=>({ok:!0}),children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(kn,{any:!0,valid:!0,invalid:!0,children:n.jsx("div",{className:"info alert",children:"Validation is complete"})}),n.jsx(fe,{space:!0}),n.jsx(pn,{status:!0})]}),FR=`import React from 'react'
import { Form, Field, Status, ResetSubmit, Debug } from '@/lib/index.js'

const AnyExample = () =>
  /* START */
  <Form
    onSubmit={ () => ({ ok: true }) }
  >
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status any valid invalid>
      <div className="info alert">
        Validation is complete
      </div>
    </Status>
    <ResetSubmit space/>
    <Debug status/>
  </Form>
  /* END */

export default AnyExample`,wR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"any"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"any"})," property indicates that the child content should only be rendered when any of the specified conditions are true.  This changes the default behaviour which is to required that all specified conditions are met."]}),n.jsxs("p",{children:["The example below includes the ",n.jsx(Br,{})," component so that you can see the form status changing."]})]}),n.jsx(Z,{children:"The field here is required.  If you enter a value and then click on the submit button the form will become valid.  If you don't enter a value then it will be invalid.  Either way the alert will be shown because it satisfied the condition that any of the valid or invalid states are true."})]}),n.jsx(F,{Component:yR,code:FR,caption:"any",undent:2,expand:!0})]}),SR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),CR=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsxs(kn,{changed:!0,children:[n.jsx("div",{className:"info alert",children:"The form has changed!"}),n.jsx(ur,{})]})]}),_R=`import React from 'react'
import { Form, Field, Status, Reset } from '@/lib/index.js'

const ChangedExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Status changed>
      <div className="info alert">
        The form has changed!
      </div>
      <Reset/>
    </Status>
  </Form>
  /* END */

export default ChangedExample`,ER=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"changed"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"changed"})," property indicates that the child content should only be rendered when a form field has been changed."]}),n.jsx(F,{Component:CR,code:_R,caption:"changed",undent:2,expand:!0})]}),TR=Object.freeze(Object.defineProperty({__proto__:null,default:ER},Symbol.toStringTag,{value:"Module"})),LR=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(kn,{invalid:!0,children:n.jsx("div",{className:"warning alert",children:"The form is invalid!"})}),n.jsx(fe,{space:!0})]}),kR=`import React from 'react'
import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

const InvalidExample = () =>
  /* START */
  <Form>
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status invalid>
      <div className="warning alert">
        The form is invalid!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>
  /* END */

export default InvalidExample`,RR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"invalid"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"invalid"})," property indicates that the child content should only be rendered when the form has been validated and found to be invalid."]}),n.jsx(Z,{children:"The field here is required.  If you submit without entering a value you should see the form becomes invalid."})]}),n.jsx(F,{Component:LR,code:kR,caption:"invalid",undent:2,expand:!0})]}),NR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),OR=()=>n.jsxs(w,{onSubmit:()=>({ok:!0}),children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(kn,{submitted:!0,children:n.jsx("div",{className:"info alert",children:"The form has been submitted!"})}),n.jsx(fe,{space:!0})]}),PR=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Status, ResetSubmit } from '@abw/badger-form'

const SubmittedExample = () =>
  <Form
    onSubmit={
      () => ({ ok: true })
    }
  >
    <Field
      name="field1"
      label="Field One"
    />
    <Status submitted>
      <div className="info alert">
        The form has been submitted!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>

export default SubmittedExample`,AR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submitted"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"submitted"})," property indicates that the child content should only be rendered after the form has been submitted."]}),n.jsxs(Z,{children:["Try submitting the form.  You can see the form change to the ",n.jsx("code",{children:"submitted"})," state."]})]}),n.jsx(F,{Component:OR,code:PR,caption:"submitted",expand:!0})]}),MR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),IR=()=>n.jsxs(w,{onSubmit:()=>tr(1e3).then(()=>({ok:!0})),children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(kn,{submitting:!0,children:n.jsx("div",{className:"info alert",children:"The form is submitting!"})}),n.jsx(fe,{space:!0})]}),DR=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Status, ResetSubmit } from '@abw/badger-form'
import { sleep } from '@abw/badger-utils'

const SubmittingExample = () =>
  <Form
    onSubmit={
      () => sleep(1000).then(
        () => ({ ok: true })
      )
    }
  >
    <Field
      name="field1"
      label="Field One"
    />
    <Status submitting>
      <div className="info alert">
        The form is submitting!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>

export default SubmittingExample`,$R=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submitting"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"submitting"})," property indicates that the child content should only be rendered while the form is submitting."]}),n.jsxs(Z,{children:["Try submitting the form.  There's a dummy ",n.jsx(cn,{})," function defined for the form which will wait for 1 second before returning so you can see the form change to the ",n.jsx("code",{children:"submitting"})," state."]})]}),n.jsx(F,{Component:IR,code:DR,caption:"submitting",expand:!0})]}),zR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),BR=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(kn,{valid:!0,children:n.jsx("div",{className:"success alert",children:"The form is valid!"})}),n.jsx(fe,{space:!0})]}),VR=`import React from 'react'
import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

const ValidatingExample = () =>
  /* START */
  <Form>
    <Field
      name="field1"
      label="Field One"
      required
    />
    <Status valid>
      <div className="success alert">
        The form is valid!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>
  /* END */

export default ValidatingExample`,qR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"valid"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"valid"})," property indicates that the child content should only be rendered when the form has successfully validated."]}),n.jsx(Z,{children:"The field here is required.  If you enter a value and then click on the submit button you should see the form becomes valid."})]}),n.jsx(F,{Component:BR,code:VR,caption:"valid",undent:2,expand:!0})]}),UR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),HR=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One",validate:e=>tr(1e3).then(()=>e)}),n.jsx(kn,{validating:!0,children:n.jsx("div",{className:"info alert",children:"The form is validating!"})}),n.jsx(fe,{space:!0})]}),YR=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Status, ResetSubmit } from '@abw/badger-form'
import { sleep } from '@abw/badger-utils'

const ValidatingExample = () =>
  <Form>
    <Field
      name="field1"
      label="Field One"
      validate={
        value => sleep(1000).then( () => value )
      }
    />
    <Status validating>
      <div className="info alert">
        The form is validating!
      </div>
    </Status>
    <ResetSubmit space/>
  </Form>

export default ValidatingExample`,WR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validating"}),n.jsxs(D,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validating"})," property indicates that the child content should only be rendered while the form is validating."]}),n.jsxs(Z,{children:["Try submitting the form.  There's a dummy ",n.jsx($t,{})," function defined for the field which will wait for 1 second before returning so you can see the form change to the ",n.jsx("code",{children:"validating"})," state."]})]}),n.jsx(F,{Component:HR,code:YR,caption:"validating",expand:!0})]}),ZR=Object.freeze(Object.defineProperty({__proto__:null,default:WR},Symbol.toStringTag,{value:"Module"})),GR=()=>n.jsxs(w,{onSubmit:()=>alert("Form was submitted"),children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(K,{})]}),KR=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitExample = () =>
  <Form onSubmit={() => alert('Form was submitted')}>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,S3=()=>n.jsx(Ke,{menu:D2}),QR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submit"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Submit"})," component can be used to add a button to submit the form. You can use the ",n.jsx(cn,{})," form property to handle the submission."]}),n.jsx(F,{Component:GR,code:KR,caption:"Submit",expand:!0}),n.jsx(S3,{})]}),XR=Object.freeze(Object.defineProperty({__proto__:null,default:QR},Symbol.toStringTag,{value:"Module"})),JR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submit Properties"}),n.jsx(_e,{}),n.jsx(S3,{})]}),eN=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(K,{className:"blue"})]}),nN=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitClassName = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="blue"/>
  </Form>
  /* END */

export default SubmitClassName`,rN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a custom CSS class."]}),n.jsx(F,{Component:tN,code:nN,caption:"className",undent:2,expand:!0})]}),oN=Object.freeze(Object.defineProperty({__proto__:null,default:rN},Symbol.toStringTag,{value:"Module"})),sN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(K,{onClick:e=>{e.preventDefault(),alert("Submit button was clicked!")}})]}),iN=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const OnClick = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Submit
      onClick={
        e => {
          e.preventDefault()
          alert('Submit button was clicked!')
        }
      }
    />
  </Form>
  /* END */

export default OnClick`,lN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onClick"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onClick"})," property to handle a click on the button.  You will need to call ",n.jsx("code",{children:"preventDefault()"})," on the event if you want to stop the form from being submitted."]}),n.jsx(F,{Component:sN,code:iN,caption:"onClick",undent:2,expand:!0})]}),aN=Object.freeze(Object.defineProperty({__proto__:null,default:lN},Symbol.toStringTag,{value:"Module"})),dN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(K,{text:"Save Changes"})]}),cN=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitText = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit text="Save Changes"/>
  </Form>
  /* END */

export default SubmitText`,uN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",n.jsx("code",{children:"className"}),"."]}),n.jsx(F,{Component:dN,code:cN,caption:"text",undent:2,expand:!0})]}),mN=Object.freeze(Object.defineProperty({__proto__:null,default:uN},Symbol.toStringTag,{value:"Module"})),pN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one"}),n.jsx(x,{name:"two",label:"A text input with a label"}),n.jsx(x,{name:"three",label:"Another text input",type:"text"}),n.jsx(x,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),n.jsx(x,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00",prefixClass:"lined shaded",suffixClass:"lined shaded"})]}),fN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const InputExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
    />
    <Field
      name="two"
      label="A text input with a label"
    />
    <Field
      name="three"
      label="Another text input"
      type="text"
    />
    <Field
      name="four"
      label="Text with placeholder"
      placeholder="Hello World!"
    />
    <Field
      name="money"
      label="Prefix/Suffix"
      prefix="$"
      suffix=".00"
      prefixClass="lined shaded"
      suffixClass="lined shaded"
    />
  </Form>
  /* END */

export default InputExample`,C3=()=>n.jsx(Ke,{menu:U2}),hN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"text"})," input is the default ",n.jsx(En,{})," for a ",n.jsx(X,{}),".  You can specify it explicitly if you like, but it's entirely optional."]}),n.jsx(F,{Component:pN,code:fN,caption:"text",undent:2,expand:!0}),n.jsx(C3,{})]}),xN=Object.freeze(Object.defineProperty({__proto__:null,default:hN},Symbol.toStringTag,{value:"Module"})),gN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Text Properties"}),n.jsx(_e,{}),n.jsx(C3,{})]}),bN=Object.freeze(Object.defineProperty({__proto__:null,default:gN},Symbol.toStringTag,{value:"Module"})),vN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"An inline text field",inline:!0}),n.jsx(x,{name:"two",label:"Same with prefix and suffix",prefix:"£",suffix:".00",inline:!0}),n.jsx(x,{name:"two",label:"Default text field"})]}),jN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="An inline text field"
      inline
    />
    <Field
      name="two"
      label="Same with prefix and suffix"
      prefix="£"
      suffix=".00"
      inline
    />
    <Field
      name="two"
      label="Default text field"
    />
  </Form>
  /* END */

export default Inline`,yN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsx("p",{children:"The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements."}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width.  The ",n.jsx(Oj,{})," can be used to set the input size."]}),n.jsx(F,{Component:vN,code:jN,caption:"inline",undent:2,expand:!0})]}),FN=Object.freeze(Object.defineProperty({__proto__:null,default:yN},Symbol.toStringTag,{value:"Module"})),wN=()=>n.jsx(w,{children:n.jsx(x,{name:"one",label:"Name",placeholder:"Your name"})}),SN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Placeholder = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="Name"
      placeholder="Your name"
    />
  </Form>
  /* END */

export default Placeholder`,CN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(F,{Component:wN,code:SN,caption:"placeholder",undent:2,expand:!0})]}),_N=Object.freeze(Object.defineProperty({__proto__:null,default:CN},Symbol.toStringTag,{value:"Module"})),EN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"An inline text field",inline:!0}),n.jsx(x,{name:"two",label:"With explicit size=25",size:"25",inline:!0}),n.jsx(x,{name:"two",label:"Same size with prefix and suffix",prefix:"£",suffix:".00",size:"25",inline:!0})]}),TN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'


const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="An inline text field"
      inline
    />
    <Field
      name="two"
      label="With explicit size=25"
      size="25"
      inline
    />
    <Field
      name="two"
      label="Same size with prefix and suffix"
      prefix="£" suffix=".00"
      size="25"
      inline
    />
  </Form>
  /* END */

export default Inline`,LN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"size"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the size (in characters) of a text input.  This will only take effect when the ",n.jsx(Nj,{})," property is set.  The default value is 20."]}),n.jsxs("p",{children:["Note that this controls the size of the input field.  If you have a ",n.jsx(X2,{})," or ",n.jsx(J2,{})," defined for the field then they will increase the overall width of the field.  If you want to control the overall width of the field then you can do so using the ",n.jsx(Fj,{})," property."]}),n.jsx(F,{Component:EN,code:TN,caption:"inline",undent:2,expand:!0})]}),kN=Object.freeze(Object.defineProperty({__proto__:null,default:LN},Symbol.toStringTag,{value:"Module"})),RN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",type:"number",label:"A number field"}),n.jsx(x,{name:"two",type:"date",label:"A date field"}),n.jsx(x,{name:"three",type:"password",label:"A password field"}),n.jsx(x,{name:"four",type:"color",label:"A color field"})]}),NN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const TypeExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="number"
      label="A number field"
    />
    <Field
      name="two"
      type="date"
      label="A date field"
    />
    <Field
      name="three"
      type="password"
      label="A password field"
    />
    <Field
      name="four"
      type="color"
      label="A color field"
    />
  </Form>
  /* END */

export default TypeExample`,ON=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"type"}),n.jsxs("p",{children:["The ",n.jsx(En,{})," property can also be set to one of the other input types that are based on the text input: ",n.jsx("code",{children:"number"}),","," ",n.jsx("code",{children:"date"}),", ",n.jsx("code",{children:"password"}),", ",n.jsx("code",{children:"color"})," and so on."]}),n.jsx(F,{Component:RN,code:NN,caption:"type",undent:2,expand:!0})]}),PN=Object.freeze(Object.defineProperty({__proto__:null,default:ON},Symbol.toStringTag,{value:"Module"})),AN=()=>n.jsx(w,{children:n.jsx(x,{name:"one",label:"A text area input",type:"textarea"})}),MN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const InputExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="A text area input"
      type="textarea"
    />
  </Form>
  /* END */

export default InputExample`,_3=()=>n.jsx(Ke,{menu:H2}),IN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"textarea"}),n.jsxs("p",{className:"intro wide",children:["Set the ",n.jsx(X,{})," ",n.jsx(En,{})," to ",n.jsx("code",{children:"textarea"})," for a text area input."]}),n.jsx(F,{Component:AN,code:MN,caption:"textarea",undent:2,expand:!0}),n.jsx(_3,{})]}),DN=Object.freeze(Object.defineProperty({__proto__:null,default:IN},Symbol.toStringTag,{value:"Module"})),$N=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Textarea Properties"}),n.jsx(_e,{}),n.jsx(_3,{})]}),zN=Object.freeze(Object.defineProperty({__proto__:null,default:$N},Symbol.toStringTag,{value:"Module"})),BN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"12 Columns",type:"textarea",cols:12,inline:!0}),n.jsx(x,{name:"two",label:"30 Columns",type:"textarea",cols:30,inline:!0})]}),VN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const ColsExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="12 Columns"
      type="textarea"
      cols={12}
      inline
    />
    <Field
      name="two"
      label="30 Columns"
      type="textarea"
      cols={30}
      inline
    />
  </Form>
  /* END */

export default ColsExample`,qN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"cols"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"cols"})," property can be used to set the number of columns. This will only have any effect when the ",n.jsx(Aj,{})," property is set."]}),n.jsx(F,{Component:BN,code:VN,caption:"cols",undent:2,expand:!0})]}),UN=Object.freeze(Object.defineProperty({__proto__:null,default:qN},Symbol.toStringTag,{value:"Module"})),HN=()=>n.jsx(w,{children:n.jsx(x,{name:"one",label:"An inline textarea field",type:"textarea",inline:!0})}),YN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="An inline textarea field"
      type="textarea"
      inline
    />
  </Form>
  /* END */

export default Inline`,WN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width.  ",n.jsx(Mj,{})," property can be used to set the width as the number of columns.  The default width is 20."]}),n.jsx(F,{Component:HN,code:YN,caption:"inline",undent:2,expand:!0})]}),ZN=Object.freeze(Object.defineProperty({__proto__:null,default:WN},Symbol.toStringTag,{value:"Module"})),GN=()=>n.jsx(w,{children:n.jsx(x,{name:"one",label:"Summary",type:"textarea",placeholder:"Enter a summary"})}),KN=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Placeholder = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="Summary"
      type="textarea"
      placeholder="Enter a summary"
    />
  </Form>
  /* END */

export default Placeholder`,QN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(F,{Component:GN,code:KN,caption:"placeholder",undent:2,expand:!0})]}),XN=Object.freeze(Object.defineProperty({__proto__:null,default:QN},Symbol.toStringTag,{value:"Module"})),JN=()=>n.jsxs(w,{children:[n.jsx(x,{name:"one",label:"Two rows",type:"textarea",rows:2}),n.jsx(x,{name:"two",label:"Ten Rows",type:"textarea",rows:10})]}),eO=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const RowsExample = () =>
  /* START */
  <Form>
    <Field
      name="one"
      label="Two rows"
      type="textarea"
      rows={2}
    />
    <Field
      name="two"
      label="Ten Rows"
      type="textarea"
      rows={10}
    />
  </Form>
  /* END */

export default RowsExample`,tO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"rows"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"rows"})," property can be used to set the number of rows."]}),n.jsx(F,{Component:JN,code:eO,caption:"rows",undent:2,expand:!0})]}),nO=Object.freeze(Object.defineProperty({__proto__:null,default:tO},Symbol.toStringTag,{value:"Module"})),rO=()=>n.jsxs(w,{children:[n.jsx("h2",{children:"Login Form"}),n.jsx(x,{required:!0,name:"email",label:"Email Address"}),n.jsx(x,{required:!0,name:"password",type:"password",label:"Password"}),n.jsx(K,{text:"Login"})]}),oO=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const BasicLoginForm = () =>
  <Form>
    <h2>Login Form</h2>
    <Field
      required
      name="email"
      label="Email Address"
    />
    <Field
      required
      name="password"
      type="password"
      label="Password"
    />
    <Submit
      text="Login"
    />
  </Form>

export default BasicLoginForm`,sO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"A Basic Form"}),n.jsxs("p",{className:"intro wide",children:["One of the underlying principles of this library is that it should be just as easy, if not easier, to create a form using"," ","Badger Form as it should be using vanilla HTML."]}),n.jsx("h2",{children:"Login Form"}),n.jsxs(D,{align:"start",children:[n.jsx("div",{children:n.jsx("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form.  In this simple example there are fields for the user to enter their email address and password."})}),n.jsx("div",{children:n.jsx(lt,{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})})]}),n.jsx(F,{Component:rO,code:oO,caption:"Basic Login Form",expand:!0}),n.jsxs(D,{align:"start",children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Form"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Form"})," component can contain any content so you can intersperse form fields with other markup."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," property should be defined to handle the form submission.  If you don't define one then a window alert will be shown when the form is submitted, as demonstrated in this example."]})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Field"}),n.jsxs("p",{children:["The only mandatory property for all ",n.jsx("code",{children:"Field"})," components is"," ",n.jsx("code",{children:"name"}),".  The default ",n.jsx("code",{children:"type"})," is ",n.jsx("code",{children:"text"})," ","and must be provided if you want any other kind of field input type. Some additional properties may be required depending on the field type.  For example, a ",n.jsx("code",{children:"select"})," input will also require"," ",n.jsx("code",{children:"options"})," to be defined."]}),n.jsx("h3",{children:"Submit"}),n.jsxs("p",{children:['A button used to submit the form.  The default text displayed is "Submit" which you can change via the ',n.jsx("code",{children:"text"})," property as shown here."]})]})]}),n.jsx(Ke,{menu:Nu})]}),iO=Object.freeze(Object.defineProperty({__proto__:null,default:sO},Symbol.toStringTag,{value:"Module"})),Nn=()=>n.jsx(Ke,{menu:Nu}),lO=e=>new Promise((t,r)=>e.password===e.passcheck?t(e):r({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),aO=e=>Vt().trim().email().required("You must enter your email address!").validate(e),of=e=>Vt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),dO={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:aO},password:{label:"Password",type:"password",required:!0,validate:of},passcheck:{label:"Confirm",type:"password",required:!0,validate:of},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"]},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"Your donation?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"Your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"Your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"fluid",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},cO=()=>{const[e,t]=T.useState();return n.jsxs(w,{fields:dO,validate:lO,showRequired:!0,children:[n.jsx(Ar,{legend:"Your Details",children:n.jsx(nt,{names:"name email password passcheck",grid:2,stack:"laptop"})}),n.jsx(Ve,{fieldErrors:!1}),n.jsxs(Ar,{legend:"Other Information",children:[n.jsx(nt,{names:"dob price",grid:2,stack:"laptop"}),n.jsx(x,{name:"experience"}),n.jsxs("div",{className:"grid-2 gap-v-none gap-h-4 stack-laptop",children:[n.jsx(x,{name:"animal"}),n.jsx(x,{name:"color",onChange:t})]}),(e==null?void 0:e.value)&&n.jsxs("div",{style:{color:e.value,backgroundColor:"#444",marginTop:"1em",padding:"0.25rem 0.5rem",textAlign:"center"},children:[e.value," is a great color!"]})]}),n.jsx(x,{name:"terms"}),n.jsx(K,{text:"Register"})]})},uO=`import { Form, Field, Fields, Fieldset, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Fields, Fieldset, Errors, Submit
// PRETEND: } from '@abw/badger-form'
import * as yup  from 'yup'

const validateForm = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  name: {
    label:    'Your name',
    required: true,
  },
  email: {
    label:    'Email address',
    required: true,
    validate: validateEmail,
  },
  password: {
    label:    'Password',
    type:     'password',
    required: true,
    validate: validatePassword,
  },
  passcheck: {
    label:    'Confirm',
    type:     'password',
    required: true,
    validate: validatePassword,
  },
  experience: {
    label:    'What is your level of experience?',
    type:     'radio',
    options:  ['Beginner', 'Intermediate', 'Expert'],
    // inputsClass: 'radio inputs lg-grid-3',
  },
  dob: {
    type:  'date',
    label: 'Date of Birth',
  },
  price: {
    type:  'number',
    label: 'Your donation?',
    prefix: '£',
    suffix: '.00',
    min: 11,
    max: 100,
  },
  animal: {
    label:    'Your favourite animal?',
    type:     'select',
    default:  'Badger',
    options:  ['Badger', 'Ferret', 'Stoat'],
  },
  color: {
    label:    'Your favourite color?',
    type:     'select',
    default:  'Red',
    options:  [
      { value: null,     text: 'Select a color' },
      { value: 'red',    text: 'Red'    },
      { value: 'orange', text: 'Orange' },
      { value: 'yellow', text: 'Yellow' },
      { value: 'violet', text: 'Violet' },
      { value: 'white',  text: 'White'  },
    ],
  },
  terms: {
    label:    'Terms and conditions',
    type:     'checkbox',
    text:     'I accept the Terms and Conditions',
    className: 'fluid',
    required:  true,
    requiredMessage: 'You must accept the Terms and Conditions'
  },
}

const RegistrationForm = () => {
  const [color, setColor] = useState()

  return (
    <Form
      fields={fields}
      validate={validateForm}
      showRequired
      // showOptional
    >
      <Fieldset legend="Your Details">
        <Fields
          names="name email password passcheck"
          grid={2}
          stack="laptop"
        />
      </Fieldset>
      <Errors fieldErrors={false}/>
      <Fieldset legend="Other Information">
        <Fields
          names="dob price"
          grid={2}
          stack="laptop"
        />
        <Field name="experience"/>
        <div className="grid-2 gap-v-none gap-h-4 stack-laptop">
          <Field name="animal"/>
          <Field name="color" onChange={setColor}/>
        </div>
        { color?.value &&
          <div
            style={{
              color: color.value,
              backgroundColor: '#444',
              marginTop: '1em',
              padding: '0.25rem 0.5rem',
              textAlign: 'center'
            }}
          >{color.value} is a great color!</div>
        }
      </Fieldset>
      <Field name="terms"/>
      <Submit text="Register"/>
    </Form>
  )
}

export default RegistrationForm`,mO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Complete Registration Form"}),n.jsx("p",{className:"intro wide",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),n.jsx("h2",{children:"Input Types"}),n.jsxs(D,{children:[n.jsxs("p",{children:["This example demonstrates some of the other fields input types. Set the ",n.jsx(X,{})," ",n.jsx(En,{})," to ",n.jsx("code",{children:"radio"})," for a ",n.jsx(o3,{})," button input and provide some ",n.jsx("code",{children:"options"}),", as shown here for the ",n.jsx("code",{children:"experience"})," field.  Or set it to ",n.jsx("code",{children:"select"})," for a ",n.jsx(s3,{})," input as shown in the"," ",n.jsx("code",{children:"animal"})," field.  Set it to ",n.jsx("code",{children:"checkbox"})," for a"," ",n.jsx(r3,{})," and provide some ",n.jsx("code",{children:"text"})," to go alongside it."]}),n.jsxs("p",{children:["You can also use the ",n.jsx(En,{})," to set other text input types, like ",n.jsx("code",{children:"number"})," and ",n.jsx("code",{children:"date"}),"."]})]}),n.jsx(F,{Component:cO,code:uO,caption:"Registration Form"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Components and Properties"}),n.jsxs("dl",{children:[n.jsxs("dt",{children:[n.jsx(Gp,{})," Component"]}),n.jsx("dd",{children:n.jsxs("p",{children:["The example includes the ",n.jsx(Gp,{})," component which can be used to group fields together in a set, complete with a ",n.jsx("code",{children:"legend"}),"."]})}),n.jsxs("dt",{children:[n.jsx(Tn,{})," and ",n.jsx(zr,{})]}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(zr,{})," and ",n.jsx(Tn,{})," properties can be set on the ",n.jsx(ue,{})," or individual ",n.jsx(X,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]})}),n.jsx("dt",{children:n.jsx(or,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(or,{})," property can be added to a ",n.jsx(X,{})," to watch for changes in the field value.  You can see it in use above in the ",n.jsx("code",{children:"color"})," field."]})})]})]}),n.jsxs("div",{children:[n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"There's a lot to take in there.  For the next example we'll scale things back a bit and look at the common case where you want to edit some existing data using a form."})]})]}),n.jsx(Nn,{uri:"complete-registration"})]}),pO=Object.freeze(Object.defineProperty({__proto__:null,default:mO},Symbol.toStringTag,{value:"Module"})),fO={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,placeholder:"Select manufacturer",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},hO=()=>n.jsxs(w,{fields:fO,debug:!0,children:[n.jsx(x,{name:"name",debug:!0,wide:!0}),n.jsx(x,{name:"description",debug:!0,wide:!0}),n.jsx(nt,{names:"manufacturer price",grid:2,debug:!0,wide:!0}),n.jsx(fe,{className:"flex space"}),n.jsx(pn,{status:!0})]}),xO=`import { Form, Field, Fields, ResetSubmit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Fields, ResetSubmit, Debug } from '@abw/badger-form'

const fields = {
  name: {
    label:    'Product Name',
    required: true
  },
  description: {
    label:    'Description',
    type:     'textarea',
    required: true,
  },
  manufacturer: {
    label:    'Manufacturer',
    type:     'select',
    debug:    true,
    placeholder: 'Select manufacturer',
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price',
    prefix: '$',
  },
}

const DebuggingForm = () =>
  <Form fields={fields} debug>
    <Field name="name" debug wide/>
    <Field name="description" debug wide/>
    <Fields names="manufacturer price" grid={2} debug wide/>
    <ResetSubmit className="flex space"/>
    <Debug status/>
  </Form>

export default DebuggingForm`,gO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debugging"}),n.jsx("p",{className:"intro wide",children:"Let't face it, things don't always work right first time, so being able to debug your forms is an important requirement."}),n.jsxs("h2",{children:[n.jsx(Br,{})," Component and ",n.jsx(rc,{})," Property"]}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx(Br,{})," component can be added to a form to display information about the form values and other state variables.  By default it shows only the form values, but you can use the ",n.jsx("code",{children:"status"})," option to also show the form status.  If for some reason you don't want to see the values you can set ",n.jsx("code",{children:"values"})," to ",n.jsx("code",{children:"false"}),"."]}),n.jsxs("p",{children:["If you add the ",n.jsx(rc,{})," property to a ",n.jsx(ue,{})," or"," ",n.jsx(X,{})," then it will enable debugging messages for that component. These will be output to the Javascript console.  Any properties (like"," ",n.jsx("code",{children:"debug"}),") that are passed to the ",n.jsx(zl,{})," component will be forwarded onto the respective ",n.jsx(X,{})," components, so it works there too."]})]}),n.jsx(lt,{children:"Try changing some of the values in the form.  Watch the form values and status change in the debugging panel.  Also check out the Javascript console for further debugging messages."})]}),n.jsx(F,{Component:hO,code:xO,caption:"Debugging"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"On the next page we'll look at how you can define your own field layout."}),n.jsx(Nn,{uri:"debugging"})]}),bO=Object.freeze(Object.defineProperty({__proto__:null,default:gO},Symbol.toStringTag,{value:"Module"})),vO={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},dc={id:"9876",version:123,name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},jO={id:dc.id,version:dc.version},yO=()=>n.jsxs(w,{fields:vO,values:dc,hidden:jO,children:[n.jsx(nt,{names:"name description",wide:!0}),n.jsx(nt,{names:"manufacturer price",grid:2,wide:!0}),n.jsx(fe,{submit:{text:"Save Changes",className:"blue"},reset:{className:"outline"},className:"flex space"})]}),FO=`import { Form, Fields, ResetSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, ResetSubmit } from '@abw/badger-form'

// field definitions - these could be defined elsewhere and imported in
// allowing them to be re-used in other forms, e.g. an "Add Product" form
const fields = {
  name: {
    label:    'Product Name',
    required: true
  },
  description: {
    label:    'Description',
    type:     'textarea',
    required: true,
  },
  manufacturer: {
    label:    'Manufacturer',
    type:     'select',
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price',
    prefix: '$',
  },
}

// these values would typically be fetched from a database
const values = {
  id:           '9876',
  version:      123,
  name:         'Widget-2000',
  description:  'This is an awesome widget',
  manufacturer: '102',
  price:        12.99
}

// some hidden fields that will be included when the form is submitted
const hidden = {
  id:      values.id,
  version: values.version,
}

const EditForm = () =>
  <Form fields={fields} values={values} hidden={hidden}>
    <Fields names="name description" wide/>
    <Fields names="manufacturer price" grid={2} wide/>
    <ResetSubmit
      submit={{ text: 'Save Changes', className: 'blue' }}
      reset={{ className: 'outline' }}
      className="flex space"
    />
  </Form>

export default EditForm`,wO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Edit Form"}),n.jsx("p",{className:"intro wide",children:"Another common use case for forms is in editing existing data records."}),n.jsx("h2",{children:n.jsx(nc,{})}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can pass the ",n.jsx(nc,{})," property to a ",n.jsx(ue,{})," to seed it with initial values for fields.  If there are additional hidden values that you want to include when you submit the form then you can provide them using the ",n.jsx(Q2,{})," property."]}),n.jsxs(lt,{children:["Try changing some of the values in the form and then click on the ",n.jsx("b",{children:"Reset"})," button.  The fields will reset to their original values."]})]}),n.jsx(F,{Component:yO,code:FO,caption:"Edit Form"}),n.jsx("h2",{children:"Where Next?"}),n.jsxs("p",{children:["You've seen an example of the ",n.jsx(Br,{})," component in action. Now it's time to talk about debugging in a little more detail."]}),n.jsx(Nn,{uri:"edit-form"})]}),SO=Object.freeze(Object.defineProperty({__proto__:null,default:wO},Symbol.toStringTag,{value:"Module"})),CO={email:{label:"Email Address",validate:e=>Vt().trim().email("That doesn't look like an email address").required("You must enter your email address!").validate(e)},password:{label:"Password",type:"password",validate:e=>Vt().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(e)}},_O=()=>n.jsxs(w,{fields:CO,children:[n.jsx(x,{name:"email"}),n.jsx(x,{name:"password"}),n.jsx(K,{text:"Login"})]}),EO=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const fields = {
  email: {
    label: 'Email Address',
    validate: value => yup
      .string()
      .trim()
      .email("That doesn't look like an email address")
      .required('You must enter your email address!')
      .validate(value)
  },
  password: {
    label: 'Password',
    type:  'password',
    validate: value => yup
      .string()
      .trim()
      .required('You must enter your password!')
      .min(6, 'Your password should be at least 6 characters')
      .validate(value)
  },
}

const LoginWithValidation = () =>
  <Form fields={fields}>
    <Field name="email"/>
    <Field name="password"/>
    <Submit text="Login"/>
  </Form>

export default LoginWithValidation`,TO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Validation"}),n.jsxs("p",{className:"intro wide",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",n.jsx("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),n.jsx("h2",{children:"Login Form With Field Validation"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can add a ",n.jsx($t,{})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",n.jsx("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),n.jsxs("p",{children:["You can add the ",n.jsx($t,{})," function to the ",n.jsx(X,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",n.jsx(ue,{})," ","component as the ",n.jsx(Ct,{})," property.  When you include a ",n.jsx(X,{})," the ",n.jsx(Dr,{})," will be used to lookup the default properties for the field from the ",n.jsx(Ct,{})," you've provided."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",n.jsx(X,{})," element around, or just edit the ",n.jsx(Dr,{})," property than it is to cut and paste large blocks of code."]}),n.jsxs(lt,{children:["Try entering some values in the form below and click on the"," ",n.jsx("b",{children:"Login"})," button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors."]})]})]}),n.jsx(F,{Component:_O,code:EO,caption:"Field Validation",expand:!0}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Validation Properties"}),n.jsxs("dl",{children:[n.jsx("dt",{children:n.jsx(zt,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["By default, field validation happens when the form is submitted. You can add the ",n.jsx(zt,{})," property to either the"," ",n.jsx(ue,{})," or individual ",n.jsx(X,{})," components if you want the validation to happen when a field is blurred."]})}),n.jsx("dt",{children:n.jsx(Bt,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["You can add the ",n.jsx(Bt,{})," property to either the"," ",n.jsx(ue,{})," or individual ",n.jsx(X,{})," components if you want validation to happen any time the field value changes, i.e. as the user types."]})}),n.jsx("dt",{children:n.jsx(ii,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(ii,{})," can be set if you only want validation to start after the user has entered a particular number of characters. The default values is ",n.jsx("code",{children:"1"}),"."]})})]})]}),n.jsxs("div",{children:[n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."})]})]}),n.jsx(Nn,{uri:"field-validation"})]}),LO=Object.freeze(Object.defineProperty({__proto__:null,default:TO},Symbol.toStringTag,{value:"Module"})),kO=()=>{const[e,t]=T.useState(),r=o=>Promise.resolve(t(o));return n.jsxs(n.Fragment,{children:[n.jsxs(w,{onSubmit:r,debug:!0,children:[n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(K,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert border mar-t-4",children:[n.jsx("h4",{children:"Submitted Values"}),n.jsx("pre",{children:JSON.stringify(e)})]}):null]})},RO=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const DummySubmit = () => {
  const [values, setValues] = useState()

  const onSubmit = values => Promise.resolve(
    setValues(values)
  )

  return (
    <>
      <Form onSubmit={onSubmit} debug>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
      { values
        ? <div className="info alert border mar-t-4">
            <h4>Submitted Values</h4>
            <pre>{JSON.stringify(values)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default DummySubmit`,NO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Submission"}),n.jsxs("p",{className:"intro wide",children:["To handle submission of a form we need to add an ",n.jsx(cn,{})," ","handler to the ",n.jsx(ue,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),n.jsx("h2",{children:n.jsx(cn,{})}),n.jsxs(D,{align:"end",children:[n.jsxs("p",{children:["We'll create a function which stores the submitted"," ",n.jsx("code",{children:"values"})," in a state variable and displays them on the screen.  The ",n.jsx(cn,{})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",n.jsx("code",{children:"error"})," and/or an array of ",n.jsx("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),n.jsx(lt,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})]}),n.jsx(F,{Component:kO,code:RO,caption:"Dummy Submission"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"When the form is submitted there are two possible outcomes.  Either the submission is successful, or there's an error (or errors) that need to be handled.  We'll look at these in the next few pages."}),n.jsx(Nn,{uri:"form-submission"})]}),OO=Object.freeze(Object.defineProperty({__proto__:null,default:NO},Symbol.toStringTag,{value:"Module"})),PO=e=>new Promise((t,r)=>e.password===e.passcheck?t(e):r({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),AO=e=>Vt().trim().email().required("You must enter your email address!").validate(e),sf=e=>Vt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),MO={email:{label:"Email Address",validate:AO},password:{label:"Password",type:"password",validate:sf},passcheck:{label:"Confirm Password",type:"password",validate:sf}},IO=()=>n.jsxs(w,{fields:MO,validate:PO,children:[n.jsx(nt,{names:"email password passcheck"}),n.jsx(Ve,{title:"Registration Error",fieldErrors:!1}),n.jsx(K,{text:"Register"})]}),DO=`import { Form, Fields, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, Errors, Submit } from '@abw/badger-form'
import * as yup  from 'yup'

const validateForm = values => new Promise(
  (resolve, reject) => {
    if (values.password === values.passcheck) {
      return resolve(values)
    }
    else {
      return reject({
        error: "Your passwords don't match!",
        errors: [
          { name: 'password',  message: 'Please re-enter your password' },
          { name: 'passcheck', message: 'Please re-confirm your password' },
        ]
      })
    }
  }
)

const validateEmail = value => yup
  .string()
  .trim()
  .email()
  .required('You must enter your email address!')
  .validate(value)

const validatePassword = value => yup
  .string()
  .trim()
  .required('You must enter a password!')
  .min(6, 'Your password should be at least 6 characters')
  .validate(value)

const fields = {
  email: {
    label:    'Email Address',
    validate: validateEmail
  },
  password: {
    label:    'Password',
    type:     'password',
    validate: validatePassword
  },
  passcheck: {
    label:    'Confirm Password',
    type:     'password',
    validate: validatePassword
  },
}

const LoginWithValidation = () =>
  <Form fields={fields} validate={validateForm}>
    <Fields names="email password passcheck"/>
    <Errors title="Registration Error" fieldErrors={false}/>
    <Submit text="Register"/>
  </Form>

export default LoginWithValidation`,$O={title:"Form Validation"},zO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Validation"}),n.jsx("p",{className:"intro wide",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),n.jsx("h2",{children:"Registration Form With Validation"}),n.jsxs(D,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can add a ",n.jsx(gj,{})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),n.jsxs("p",{children:["The function will be passed a ",n.jsx("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",n.jsx("code",{children:"error"})," and/or array of ",n.jsx("code",{children:"errors"})," if not."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"error"})," can be used to define an error for the form that isn't specific to any particular field.  In this case it's being used to raise an error indicating that the two passwords entered don't match."]}),n.jsxs("p",{children:["Each item in the ",n.jsx("code",{children:"errors"})," array should relate to a field identified by ",n.jsx("code",{children:"name"}),", with an additional ",n.jsx("code",{children:"message"})," ","indicating why it is invalid.  In this case we're also raising errors for both password fields."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx(Io,{})," component can used to insert a prominent alert anywhere in the form, warning the user about what's gone wrong.  By default it will display any generic ",n.jsx("code",{children:"error"})," ","and also a list of any field-specific ",n.jsx("code",{children:"errors"}),".  But here we're relying on the fact that the field errors will be displayed underneath each field input, so we're setting the "," ",n.jsx("code",{children:"fieldErrors"})," flag to ",n.jsx("code",{children:"false"})," to suppress the"," ",n.jsx("code",{children:"errors"})," list."]}),n.jsxs("p",{children:["We're also using this opportunity to introduce you to the"," ",n.jsx(zl,{})," component which allows you to add multiple fields to a ",n.jsx(ue,{})," in one fell swoop."]}),n.jsxs(lt,{children:["Try entering some values in the form below and click on the"," ",n.jsx("b",{children:"Register"})," button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors."]})]})]}),n.jsx(F,{Component:IO,code:DO,caption:"Form Validation"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),n.jsx(Nn,{uri:"form-validation"})]}),BO=Object.freeze(Object.defineProperty({__proto__:null,default:zO,metadata:$O},Symbol.toStringTag,{value:"Module"})),VO={email:{label:"Email Address",required:!0}},qO=()=>n.jsxs(w,{fields:VO,children:[n.jsx(x,{name:"email",children:e=>n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:e.id,children:e.label}),n.jsx("div",{className:"inputs",children:n.jsx("input",{className:"input",ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:t=>e.onChange(t.target.value)})})]})}),n.jsx(K,{text:"Login"})]}),UO=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const fields = {
  email: {
    label:    'Email Address',
    required: true
  },
}

const HeadlessFields = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <div className="field">
          <label htmlFor={field.id}>{field.label}</label>
          <div className="inputs">
            <input
              className="input"
              ref={field.inputRef}
              aria-disabled={field.disabled}
              tabIndex={field.disabled ? -1 : field.tabIndex}
              onFocus={field.onFocus}
              onBlur={field.onBlur}
              onChange={e => field.onChange(e.target.value)}
            />
          </div>
        </div>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessFields`,HO={email:{label:"Email Address"}},YO=()=>n.jsx(w,{fields:HO,children:n.jsx(x,{name:"email",children:e=>n.jsxs("div",{className:"border pad",children:["This is where you render the ",e.name,' field with an "',e.label,'" label']})})}),WO=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const fields = {
  email: {
    label: 'Email Address',
  },
}

const HeadlessBlank = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <div className="border pad">
          This is where you render the {field.name} field with
          an &quot;{field.label}&quot; label
        </div>
      }
    </Field>
  </Form>

export default HeadlessBlank`,ZO={email:{label:"Email Address",required:!0}},GO=()=>n.jsxs(w,{fields:ZO,children:[n.jsx(x,{name:"email",children:e=>n.jsxs(cr,{children:[n.jsxs("h2",{className:"mar-t-none",children:["Custom Layout for ",e.name]}),n.jsx(Wr,{}),n.jsx(Js,{}),n.jsx(xi,{})]})}),n.jsx(K,{text:"Login"})]}),KO=`import {
  Form, Field, Layout, Label, Text, Message, Submit
} from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label, Text, Message, Submit
// PRETEND: } from '@abw/badger-form'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <Layout>
          <h2 className="mar-t-none">
            Custom Layout for {field.name}
          </h2>
          <Label/>
          <Text/>
          <Message/>
        </Layout>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,QO={email:{label:"Email Address",required:!0}},XO=()=>n.jsxs(w,{fields:QO,children:[n.jsx(x,{name:"email",children:n.jsxs(cr,{children:[n.jsx("h2",{className:"mar-t-none",children:"Custom Layout for Email field"}),n.jsx(Wr,{}),n.jsx(Js,{}),n.jsx(xi,{})]})}),n.jsx(K,{text:"Login"})]}),JO=`import {
  Form, Field, Layout, Label, Text, Message, Submit
} from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, Layout, Label, Text, Message, Submit
// PRETEND: } from '@abw/badger-form'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      <Layout>
        <h2 className="mar-t-none">
          Custom Layout for Email field
        </h2>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins`,eP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Headless Fields"}),n.jsx("p",{className:"intro wide",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),n.jsx("h2",{children:"Field Render Function"}),n.jsx("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),n.jsx(F,{Component:YO,code:WO,caption:"Headless Fields"}),n.jsx("h2",{children:"Typical Render Function"}),n.jsx("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),n.jsx(F,{Component:qO,code:UO,caption:"Headless Fields"}),n.jsx("h2",{children:"Builtin Components"}),n.jsxs("p",{children:["You can mix and match your own layout with the builtin components. This example shows how you can use the ",n.jsx(Yo,{}),", ",n.jsx($r,{}),","," ",n.jsx(ic,{})," and ",n.jsx(e3,{})," components to build up the field content."]}),n.jsx(F,{Component:GO,code:KO,caption:"Builtin Components"}),n.jsx("h2",{children:"Child Components"}),n.jsxs("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",n.jsx("code",{children:"useField"})," ","then you don't need to define a function for the ",n.jsx(X,{})," body. You can just include them as children of the field component."]}),n.jsx(F,{Component:XO,code:JO,caption:"Builtin Components"}),n.jsx(Nn,{uri:"headless-fields"})]}),tP=Object.freeze(Object.defineProperty({__proto__:null,default:eP},Symbol.toStringTag,{value:"Module"})),nP=()=>{const e=()=>{throw"Oh noes! An error occurred"};return n.jsx(n.Fragment,{children:n.jsxs(w,{onSubmit:e,children:[n.jsx(Ve,{}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(K,{text:"Login"})]})})},rP=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Errors/>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow`,oP=()=>{const e=()=>{throw new Error("Oh noes! An error occurred")};return n.jsx(n.Fragment,{children:n.jsxs(w,{onSubmit:e,debug:!0,children:[n.jsx(Ve,{}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(K,{text:"Login"})]})})},sP=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const SubmitThrow = () => {
  const onSubmit = () => {
    throw new Error('Oh noes! An error occurred')
  }

  return (
    <>
      <Form onSubmit={onSubmit} debug>
        <Errors/>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitThrow`,iP=()=>{const e=()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]});return n.jsx(n.Fragment,{children:n.jsxs(w,{onSubmit:e,children:[n.jsx(Ve,{}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(K,{text:"Login"})]})})},lP=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/badger-form'

const SubmitReject = () => {
  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Errors/>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
    </>
  )
}

export default SubmitReject`,aP=()=>{const[e,t]=T.useState(),r=()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]});return n.jsxs(n.Fragment,{children:[n.jsxs(w,{onSubmit:r,onError:t,children:[n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(K,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert mar-t-4 mar-b-none",children:[n.jsx("h4",{children:"Submission Error"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]}):null]})},dP=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitThrow = () => {
  const [error, setError] = useState()

  const onSubmit = () => Promise.reject({
    errors: [
      {
        name:    'email',
        message: 'Your email address is not valid'
      },
      {
        name:    'password',
        message: 'Your password is too easy to guess'
      }
    ],
  })

  return (
    <>
      <Form onSubmit={onSubmit} onError={setError}>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
      { error
        ? <div className="info alert mar-t-4 mar-b-none">
            <h4>Submission Error</h4>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitThrow`,cP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submission Errors"}),n.jsxs("p",{className:"intro wide",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",n.jsx("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),n.jsx("h2",{children:"Simple Error"}),n.jsxs(D,{align:"end",children:[n.jsxs("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",n.jsx("code",{children:"error"})," state variable. See the ",n.jsx(Io,{})," component for more information about changing how and if errors are displayed."]}),n.jsx(lt,{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})]}),n.jsx(F,{Component:nP,code:rP,caption:"Error Thrown"}),n.jsxs("p",{children:["As well as calling the ",n.jsx("code",{children:"throw()"})," function with a string, you can ",n.jsx("code",{children:"throw"})," an ",n.jsx("code",{children:"Error"})," object."]}),n.jsx(F,{Component:oP,code:sP,caption:"Error Thrown"}),n.jsx("h2",{children:"Rejected Promise"}),n.jsxs(D,{align:"start",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single"," ",n.jsx("code",{children:"error"})," string (or object containing a ",n.jsx("code",{children:"message"}),"), or an array of ",n.jsx("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",n.jsx("code",{children:"message"}),"."]}),n.jsxs("p",{children:["The benefit of this approach is that error objects can also contain the ",n.jsx("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]})]}),n.jsxs("div",{children:[n.jsx("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),n.jsx(lt,{title:"Try it out",children:"Try submitting the form to see the errors generated."})]})]}),n.jsx(F,{Component:iP,code:lP,caption:"Error Thrown"}),n.jsx("h2",{children:n.jsx(Mo,{})}),n.jsxs(D,{children:[n.jsxs("p",{children:["You can provide an ",n.jsx(Mo,{})," handler which will be called when an error response is received.  In this example we simply call a ",n.jsx("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),n.jsxs(lt,{children:["Try submitting the form to see the errors generated.  The "," ",n.jsx(Mo,{})," handler will store them in the state variable and display them beneath the form."]})]}),n.jsx(F,{Component:aP,code:dP,caption:"onError"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"We've now enough in place to look at a more complete example."}),n.jsx(Nn,{uri:"submission-errors"})]}),uP=Object.freeze(Object.defineProperty({__proto__:null,default:cP},Symbol.toStringTag,{value:"Module"})),mP=()=>{const[e,t]=T.useState(),r=s=>Promise.resolve({status:200,data:{message:"Welcome back!  You are now logged in.",user:{id:12345,email:s.email,name:"Bobby Badger"}}}),o=s=>t(s.data);return n.jsxs(n.Fragment,{children:[n.jsxs(w,{onSubmit:r,onSuccess:o,debug:!0,children:[n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(K,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert mar-t-4",children:[n.jsx("h4",{children:"Emulated Response"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]}):null]})},pP=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitResponse = () => {
  const [response, setResponse] = useState()

  // dummy submission in the style of fetch or axios
  const onSubmit = values => {
    return Promise.resolve({
      status: 200,
      data:   {
        message: 'Welcome back!  You are now logged in.',
        user:    {
          id:    12345,
          email: values.email,
          name:  'Bobby Badger',
        },
      }
    })
  }

  // handle successful response
  const onSuccess = response => setResponse(response.data)

  return (
    <>
      <Form onSubmit={onSubmit} onSuccess={onSuccess} debug>
        <Field
          name="email"
          label="Email Address"
          required
        />
        <Field
          name="password"
          type="password"
          label="Password"
          required
        />
        <Submit text="Login"/>
      </Form>
      { response
        ? <div className="info alert mar-t-4">
            <h4>Emulated Response</h4>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitResponse`,fP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submission Response"}),n.jsx("p",{className:"intro wide",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),n.jsx("h2",{children:n.jsx(oi,{})}),n.jsxs(D,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",n.jsx(cn,{})," function which returns a resolved promise.  This is emulating how both"," ",n.jsx("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",n.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","API work."]}),n.jsxs("p",{children:["The additional step is to defined an ",n.jsx(oi,{})," handler which can do something to handle the successful response.  In this case we're calling the ",n.jsx("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]})]}),n.jsx(lt,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})]}),n.jsx(F,{Component:mP,code:pP,caption:"Submission Response"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"What happens if the submission isn't successful?  We'll look at handling submission errors on the next page."}),n.jsx(Nn,{uri:"submission-response"})]}),hP=Object.freeze(Object.defineProperty({__proto__:null,default:fP},Symbol.toStringTag,{value:"Module"})),xP=()=>n.jsx(Ke,{menu:G2}),gP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Utilities"}),n.jsx(_e,{}),n.jsx(xP,{})]}),bP=Object.freeze(Object.defineProperty({__proto__:null,default:gP},Symbol.toStringTag,{value:"Module"})),E3=()=>{const{value:e,onChange:t}=rt(),r=["red","green","blue"];return n.jsxs("div",{children:[n.jsx("div",{className:"flex gap-2",children:r.map(o=>n.jsx("button",{type:"button",className:`solid ${o}`,onClick:()=>t(o),children:o},o))}),e?n.jsxs("p",{children:["You have selected ",e]}):n.jsx("p",{children:"Select a color"})]})},vP=()=>n.jsx(w,{children:n.jsx(x,{name:"color",Input:E3})}),jP=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
import ColorButtonInput from './ColorButtonInput.jsx'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const UseInput = () =>
  <Form>
    <Field
      name="color"
      Input={ColorButtonInput}
    />
  </Form>

export default UseInput`;C4("colorButton",E3);const yP=()=>n.jsx(w,{children:n.jsx(x,{name:"color",type:"colorButton"})}),FP=`import { Form, Field, addInputType } from '@/lib/index.js'

{/* START */}
import React from 'react'
import ColorButtonInput from './ColorButtonInput.jsx'
// PRETEND: import { Form, Field, addInputType } from '@abw/badger-form'

addInputType('colorButton', ColorButtonInput)

const AddInput = () =>
  <Form>
    <Field
      name="color"
      type="colorButton"
    />
  </Form>

export default AddInput`,wP=`import { useField } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { useField } from '@abw/badger-form'

const ColorButtonInput = () => {
  const { value, onChange } = useField()
  const colors = ['red', 'green', 'blue']
  return (
    <div>
      <div className="flex gap-2">
        { colors.map(
          color =>
            <button
              key={color}
              type="button"
              className={\`solid \${color}\`}
              onClick={() => onChange(color)}
            >
              {color}
            </button>
        )}
      </div>
      { value
        ? <p>You have selected {value}</p>
        : <p>Select a color</p>
      }
    </div>
  )
}

export default ColorButtonInput`,SP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"addInputType()"}),n.jsxs("p",{className:"wide",children:["The ",n.jsx("code",{children:"addInputType()"})," function can be used to add your own custom ",n.jsx(sc,{})," components."]}),n.jsxs("p",{className:"wide",children:["Here's a trivial example where we implement a"," ",n.jsx("code",{children:"ColorButtonInput"})," input, allowing a user to click on a button to select a color."]}),n.jsx(Ze,{code:wP,caption:"ColorButtonInput.jsx"}),n.jsxs("h2",{children:["Using ",n.jsx("span",{className:"font-mono",children:"Input"})]}),n.jsxs("p",{className:"wide",children:["You can use the ",n.jsx(sc,{})," property on a field to directly reference the custom input component."]}),n.jsx(F,{Component:vP,code:jP,caption:"Input"}),n.jsxs("h2",{children:["Using ",n.jsx("span",{className:"font-mono",children:"addInput()"})]}),n.jsxs("p",{className:"wide",children:["The other approach is to use ",n.jsx("code",{children:"addInputType()"})," to register your component.  You can then use the ",n.jsx(En,{})," property to access it using the name you give it.  In this example we give it the name ",n.jsx("code",{children:"colorButton"}),"."]}),n.jsx(F,{Component:yP,code:FP,caption:"addInput()"})]}),CP=Object.freeze(Object.defineProperty({__proto__:null,default:SP},Symbol.toStringTag,{value:"Module"})),_P=({render:e})=>{const[t,r]=T.useState({}),o=T.useRef();return e({tocs:t,addToc:(l,a,d,c)=>{const u=t[l]||(t[l]={});u[a]={text:d,ref:c},r({...t})},addTocHeading:(l,a,d,c)=>{const u=t[l]||(t[l]={});u[a]={heading:d,ref:c},r({...t})},contentRef:o})},Du=su(_P),T3=({path:e,onClick:t,width:r=512,height:o=512,style:s,className:i="night-and-day--icon",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:i,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${o}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),EP=e=>n.jsx(T3,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),L3=({Icon:e,caption:t,onClick:r,iconClass:o,iconStyle:s,captionStyle:i,className:l="night-and-day--switcher",captionClass:a="night-and-day--caption",style:d={display:"inline-block"}})=>n.jsxs("div",{className:l,onClick:r,style:d,children:[n.jsx(e,{style:s,className:o}),!!t&&n.jsx("div",{className:a,style:i,children:t})]}),TP=e=>{const{setDark:t}=_i();return n.jsx(L3,{Icon:EP,onClick:t,...e})},LP=e=>n.jsx(T3,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),kP=e=>{const{setLight:t}=_i();return n.jsx(L3,{Icon:LP,onClick:t,...e})},RP=({sunrise:e={},nightfall:t={}})=>{const{isLight:r,setLight:o,setDark:s}=_i();return r?n.jsx(kP,{onClick:s,...e}):n.jsx(TP,{onClick:o,...t})},k3=T.createContext(),_i=()=>T.useContext(k3),Xi="dark",Qa="light",R3="(prefers-color-scheme: dark)",NP=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,R3).matches},io=window==null?void 0:window.localStorage,OP=e=>e.split(" "),lf=(e,t="")=>`${e} ${t}`,PP=({storageKey:e,defaultVariant:t,children:r})=>{const o=e?io==null?void 0:io.getItem(e):null,[s,i=""]=o?OP(o):[NP(),null],[l,a]=T.useState(s===Xi),[d,c]=T.useState(i||t),u=_=>{a(_),e&&io&&io.setItem(e,lf(_?Xi:Qa,d))},f=_=>{c(_),e&&io&&io.setItem(e,lf(l?Xi:Qa,_))},g=_=>u(_.matches);T.useEffect(()=>{if(window&&window.matchMedia){const _=window.matchMedia(R3);return _.addEventListener("change",g),()=>_==null?void 0:_.removeEventListener("change",g)}},[]);const C={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:a,toggleTheme:()=>u(!l),theme:l?Xi:Qa,variant:d,setVariant:f};return n.jsx(k3.Provider,{value:C,children:r})},AP=e=>T.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),af="sidebar",MP="no-sidebar",N3="0.2.0",O3="2024-03-03",df="2018",Xa=O3.match(/^(\d+)/)[1],IP=Xa===df?Xa:`${df} - ${Xa}`,DP=()=>{const{variant:e,setVariant:t}=_i();return n.jsx("header",{children:n.jsxs("nav",{children:[n.jsxs("div",{children:[n.jsx(x2,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===af?MP:af)}),n.jsx(Fi,{to:"/",className:"home mar-l-2",text:"Badger Form"}),n.jsxs("span",{className:"small mar-l-2",children:["v",N3]})]}),n.jsxs("div",{children:[n.jsx("a",{href:"https://github.com/abw/badger-form",children:n.jsx(AP,{className:"night-and-day--icon mar-r-2"})}),n.jsx(RP,{})]})]})})},$P=({item:e,url:t})=>{if(Yr(e))return e.section?n.jsxs("li",{className:"section",children:[n.jsx("h4",{children:e.section}),n.jsx(P3,{url:t,items:e.items})]}):(e.text||(e.text=e.code),n.jsx("li",{children:n.jsx(Fi,{className:`item ${e.code?"font-mono":""}`,...e})}));iu(`Invalid menu item: ${e}`)},P3=({url:e,items:t=[]})=>n.jsx("ul",{className:"menu",children:t.map((r,o)=>n.jsx($P,{item:r,url:e,open:!0},o))}),zP=({title:e,code:t,url:r,items:o})=>{const s=yi(),i=s.pathname===r||s.pathname.slice(0,r.length+1)===`${r}/`;return n.jsxs("details",{className:"menu",open:i,children:[n.jsx("summary",{className:t?"font-mono":"",children:t||e}),n.jsx(P3,{url:r,items:o})]})},Ye=Du.Consumer(zP),BP=()=>n.jsxs("div",{children:[n.jsx(Ye,{...hj}),n.jsx(Ye,{...Nu}),n.jsx("h4",{className:"mar-b-none",children:"Components"}),n.jsx(Ye,{...P2}),n.jsx(Ye,{...A2}),n.jsx(Ye,{...M2}),n.jsx(Ye,{...I2}),n.jsx(Ye,{...D2}),n.jsx(Ye,{...$2}),n.jsx(Ye,{...z2}),n.jsx(Ye,{...B2}),n.jsx(Ye,{...V2}),n.jsx(Ye,{...q2}),n.jsx("h4",{className:"mar-b-none",children:"Input Types"}),n.jsx(Ye,{...U2}),n.jsx(Ye,{...H2}),n.jsx(Ye,{...Y2}),n.jsx(Ye,{...W2}),n.jsx(Ye,{...Z2}),n.jsx("h4",{className:"mar-b-none",children:"Miscellaneous"}),n.jsx(Ye,{...G2})]}),VP=()=>n.jsx("footer",{children:n.jsxs("div",{className:"flex space",children:[n.jsxs("div",{children:["© Copyright ",IP," Andy Wardley"]}),n.jsxs("div",{children:["Version ",N3," ",O3]})]})});function qP(){const{pathname:e}=Kr();return T.useEffect(()=>UP(document.getElementById("content")),[e]),null}function UP(e){e==null||e.scrollTo({top:0,left:0,behavior:"smooth"})}const HP=({contentRef:e})=>{const{theme:t,variant:r}=_i(),o=[t,r].join(" ");return n.jsxs("div",{id:"site",className:o,children:[n.jsx(DP,{}),n.jsxs("div",{id:"app",children:[n.jsx(qP,{}),n.jsx("aside",{children:n.jsx(BP,{})}),n.jsx("main",{id:"content",ref:e,children:n.jsx("div",{className:"Xdesktop Xblock-center",children:n.jsx(_e,{})})})]}),n.jsx(VP,{})]})},YP=Du.Consumer(HP),WP=/\/_layout$/,ZP=/\/_(examples|snippets)\//,GP=KP(Object.assign({"../pages/changed/index.jsx":A8,"../pages/checkbox/index.jsx":Vj,"../pages/checkbox/properties/_layout.jsx":Uj,"../pages/checkbox/properties/border/index.jsx":Zj,"../pages/checkbox/properties/inline/index.jsx":Xj,"../pages/checkbox/properties/inputClass/index.jsx":ny,"../pages/debug/index.jsx":iy,"../pages/debug/properties/_layout.jsx":ay,"../pages/debug/properties/className/index.jsx":my,"../pages/debug/properties/color/index.jsx":xy,"../pages/debug/properties/status/index.jsx":yy,"../pages/debug/properties/statusTitle/index.jsx":Cy,"../pages/debug/properties/title/index.jsx":Ly,"../pages/debug/properties/values/index.jsx":Oy,"../pages/debug/properties/valuesTitle/index.jsx":Iy,"../pages/errors/index.jsx":By,"../pages/errors/properties/_layout.jsx":qy,"../pages/errors/properties/fieldErrors/index.jsx":Wy,"../pages/errors/properties/prompt/index.jsx":t9,"../pages/errors/properties/title/index.jsx":c9,"../pages/field/components/Input/index.jsx":_9,"../pages/field/components/Label/index.jsx":k9,"../pages/field/components/Layout/index.jsx":Q9,"../pages/field/components/Message/index.jsx":oF,"../pages/field/components/UseField/index.jsx":cF,"../pages/field/components/_layout.jsx":mF,"../pages/field/events/_layout.jsx":fF,"../pages/field/events/onBlur/index.jsx":bF,"../pages/field/events/onChange/index.jsx":FF,"../pages/field/events/onFocus/index.jsx":_F,"../pages/field/events/onInvalid/index.jsx":kF,"../pages/field/events/onLoad/index.jsx":PF,"../pages/field/events/onValid/index.jsx":DF,"../pages/field/functions/Reset/index.jsx":VF,"../pages/field/functions/SetFocus/index.jsx":YF,"../pages/field/functions/SetInvalid/index.jsx":KF,"../pages/field/functions/SetValid/index.jsx":ew,"../pages/field/functions/SetValue/index.jsx":iw,"../pages/field/functions/_layout.jsx":aw,"../pages/field/index.jsx":mw,"../pages/field/properties/_layout.jsx":fw,"../pages/field/properties/children/index.jsx":bw,"../pages/field/properties/className/index.jsx":Fw,"../pages/field/properties/default/index.jsx":_w,"../pages/field/properties/help/index.jsx":kw,"../pages/field/properties/label/index.jsx":Iw,"../pages/field/properties/name/index.jsx":Uw,"../pages/field/properties/placeholder/index.jsx":Zw,"../pages/field/properties/prefix/index.jsx":Xw,"../pages/field/properties/suffix/index.jsx":iS,"../pages/field/properties/type/index.jsx":pS,"../pages/field/validation/_layout.jsx":hS,"../pages/field/validation/minValidateLength/index.jsx":yS,"../pages/field/validation/optionalLabel/index.jsx":CS,"../pages/field/validation/prepareValue/index.jsx":kS,"../pages/field/validation/required/index.jsx":PS,"../pages/field/validation/requiredLabel/index.jsx":DS,"../pages/field/validation/requiredMessage/index.jsx":VS,"../pages/field/validation/showOptional/index.jsx":YS,"../pages/field/validation/showRequired/index.jsx":XS,"../pages/field/validation/validate/index.jsx":$C,"../pages/field/validation/validateOnBlur/index.jsx":UC,"../pages/field/validation/validateOnChange/index.jsx":GC,"../pages/field/validation/validateOnInvalid/index.jsx":QC,"../pages/fields/index.jsx":n_,"../pages/fields/properties/_layout.jsx":o_,"../pages/fields/properties/className/index.jsx":d_,"../pages/fields/properties/gap/index.jsx":f_,"../pages/fields/properties/grid/index.jsx":F_,"../pages/fields/properties/names/index.jsx":L_,"../pages/fields/properties/stack/index.jsx":P_,"../pages/fieldset/index.jsx":D_,"../pages/fieldset/properties/_layout.jsx":z_,"../pages/fieldset/properties/className/index.jsx":Y_,"../pages/fieldset/properties/fields/index.jsx":eE,"../pages/fieldset/properties/legend/index.jsx":oE,"../pages/form/events/_layout.jsx":iE,"../pages/form/events/onError/index.jsx":cE,"../pages/form/events/onLoad/index.jsx":fE,"../pages/form/events/onReset/index.jsx":bE,"../pages/form/events/onSubmit/index.jsx":PE,"../pages/form/events/onSuccess/index.jsx":DE,"../pages/form/functions/_layout.jsx":zE,"../pages/form/functions/reset/index.jsx":WE,"../pages/form/functions/setFocus/index.jsx":eT,"../pages/form/functions/setValues/index.jsx":aT,"../pages/form/index.jsx":mT,"../pages/form/properties/_layout.jsx":fT,"../pages/form/properties/children/index.jsx":bT,"../pages/form/properties/debug/index.jsx":FT,"../pages/form/properties/fields/index.jsx":TT,"../pages/form/properties/hidden/index.jsx":NT,"../pages/form/properties/values/index.jsx":MT,"../pages/form/validation/_layout.jsx":DT,"../pages/form/validation/focusInvalidField/index.jsx":zT,"../pages/form/validation/minValidateLength/index.jsx":VT,"../pages/form/validation/optionalLabel/index.jsx":UT,"../pages/form/validation/requiredLabel/index.jsx":YT,"../pages/form/validation/requiredMessage/index.jsx":ZT,"../pages/form/validation/resetOnSuccess/index.jsx":KT,"../pages/form/validation/showOptional/index.jsx":XT,"../pages/form/validation/showRequired/index.jsx":eL,"../pages/form/validation/validate/index.jsx":aL,"../pages/form/validation/validateOnBlur/index.jsx":cL,"../pages/form/validation/validateOnChange/index.jsx":mL,"../pages/form/validation/validateOnInvalid/index.jsx":fL,"../pages/getting-started/installation.jsx":jL,"../pages/getting-started/why-use-it.jsx":FL,"../pages/index.jsx":_L,"../pages/radio/index.jsx":kL,"../pages/radio/properties/_layout.jsx":NL,"../pages/radio/properties/border/index.jsx":ML,"../pages/radio/properties/inline/index.jsx":zL,"../pages/radio/properties/inputClass/index.jsx":UL,"../pages/radio/properties/optionClass/index.jsx":ZL,"../pages/radio/properties/options/index.jsx":ek,"../pages/radio/properties/optionsClass/index.jsx":ok,"../pages/reset-submit/index.jsx":ak,"../pages/reset-submit/properties/_layout.jsx":ck,"../pages/reset-submit/properties/className/index.jsx":fk,"../pages/reset-submit/properties/gap/index.jsx":bk,"../pages/reset-submit/properties/reset/index.jsx":Fk,"../pages/reset-submit/properties/space/index.jsx":_k,"../pages/reset-submit/properties/submit/index.jsx":kk,"../pages/reset/index.jsx":Pk,"../pages/reset/properties/_layout.jsx":Mk,"../pages/reset/properties/className/index.jsx":zk,"../pages/reset/properties/onClick/index.jsx":Uk,"../pages/reset/properties/text/index.jsx":Zk,"../pages/select/index.jsx":Xk,"../pages/select/properties/_layout.jsx":eR,"../pages/select/properties/inline/index.jsx":oR,"../pages/select/properties/options/index.jsx":cR,"../pages/select/properties/placeholder/index.jsx":fR,"../pages/status/index.jsx":bR,"../pages/status/properties/_layout.jsx":jR,"../pages/status/properties/any/index.jsx":SR,"../pages/status/properties/changed/index.jsx":TR,"../pages/status/properties/invalid/index.jsx":NR,"../pages/status/properties/submitted/index.jsx":MR,"../pages/status/properties/submitting/index.jsx":zR,"../pages/status/properties/valid/index.jsx":UR,"../pages/status/properties/validating/index.jsx":ZR,"../pages/submit/index.jsx":XR,"../pages/submit/properties/_layout.jsx":eN,"../pages/submit/properties/className/index.jsx":oN,"../pages/submit/properties/onClick/index.jsx":aN,"../pages/submit/properties/text/index.jsx":mN,"../pages/text/index.jsx":xN,"../pages/text/properties/_layout.jsx":bN,"../pages/text/properties/inline/index.jsx":FN,"../pages/text/properties/placeholder/index.jsx":_N,"../pages/text/properties/size/index.jsx":kN,"../pages/text/properties/type/index.jsx":PN,"../pages/textarea/index.jsx":DN,"../pages/textarea/properties/_layout.jsx":zN,"../pages/textarea/properties/cols/index.jsx":UN,"../pages/textarea/properties/inline/index.jsx":ZN,"../pages/textarea/properties/placeholder/index.jsx":XN,"../pages/textarea/properties/rows/index.jsx":nO,"../pages/tutorial/basic-form.jsx":iO,"../pages/tutorial/complete-registration.jsx":pO,"../pages/tutorial/debugging.jsx":bO,"../pages/tutorial/edit-form.jsx":SO,"../pages/tutorial/field-validation.jsx":LO,"../pages/tutorial/form-submission.jsx":OO,"../pages/tutorial/form-validation.jsx":BO,"../pages/tutorial/headless-fields.jsx":tP,"../pages/tutorial/submission-errors.jsx":uP,"../pages/tutorial/submission-response.jsx":hP,"../pages/utils/_layout.jsx":bP,"../pages/utils/addInputType/index.jsx":CP}));function KP(e){const r=Object.entries(e).map(QP).filter(s=>!s.path.match(ZP)).reduce((s,i)=>(s[i.path]=i,s),{}),o=Object.keys(r).filter(s=>s.match(WP)).sort((s,i)=>i.length-s.length);for(let s of o){const i=r[s];delete r[s];const l=s.replace(/_layout$/,""),a=l.length;i.path=l,i.children=[];const d=r[l];d&&(delete d.path,d.index=!0,i.children.push(d),delete r[l]);const c=Object.keys(r).filter(u=>u.slice(0,a)===l);for(let u of c){const f=r[u];delete r[u],u=u.slice(a),f.path=u.length?u:"/",i.children.push(f)}r[l]=i}return Object.values(r)}function QP([e,t]){const r=e.replace(/^[./]*pages/,"").replace(/\.[jt]sx?$/,""),o=r.replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),s=t.default,i=t.metadata||{};return i.source=e,i.stub=r,{path:o,Component:s,metadata:i}}const XP=X7([{path:"/",element:n.jsx(YP,{}),children:GP}],{basename:"/badger-form/"});Ja.createRoot(document.getElementById("root")).render(n.jsx(wt.StrictMode,{children:n.jsx(PP,{storageKey:"theme",children:n.jsx(Du.Provider,{children:n.jsx(ij,{router:XP})})})}));
