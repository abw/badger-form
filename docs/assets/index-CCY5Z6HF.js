var s3=Object.defineProperty;var i3=(e,t,r)=>t in e?s3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ht=(e,t,r)=>(i3(e,typeof t!="symbol"?t+"":t,r),r);function hf(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ur(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xf={exports:{}},Hl={},gf={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),l3=Symbol.for("react.portal"),a3=Symbol.for("react.fragment"),d3=Symbol.for("react.strict_mode"),c3=Symbol.for("react.profiler"),u3=Symbol.for("react.provider"),m3=Symbol.for("react.context"),p3=Symbol.for("react.forward_ref"),f3=Symbol.for("react.suspense"),h3=Symbol.for("react.memo"),x3=Symbol.for("react.lazy"),Xu=Symbol.iterator;function g3(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vf=Object.assign,jf={};function Go(e,t,r){this.props=e,this.context=t,this.refs=jf,this.updater=r||bf}Go.prototype.isReactComponent={};Go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yf(){}yf.prototype=Go.prototype;function pc(e,t,r){this.props=e,this.context=t,this.refs=jf,this.updater=r||bf}var fc=pc.prototype=new yf;fc.constructor=pc;vf(fc,Go.prototype);fc.isPureReactComponent=!0;var Ju=Array.isArray,Sf=Object.prototype.hasOwnProperty,hc={current:null},Ff={key:!0,ref:!0,__self:!0,__source:!0};function wf(e,t,r){var o,s={},i=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Sf.call(t,o)&&!Ff.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:ai,type:e,key:i,ref:l,props:s,_owner:hc.current}}function b3(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function v3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var em=/\/+/g;function ya(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v3(""+e.key):t.toString(36)}function tl(e,t,r,o,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ai:case l3:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+ya(l,0):o,Ju(s)?(r="",e!=null&&(r=e.replace(em,"$&/")+"/"),tl(s,t,r,"",function(c){return c})):s!=null&&(xc(s)&&(s=b3(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(em,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=o===""?".":o+":",Ju(e))for(var a=0;a<e.length;a++){i=e[a];var d=o+ya(i,a);l+=tl(i,t,r,d,s)}else if(d=g3(e),typeof d=="function")for(e=d.call(e),a=0;!(i=e.next()).done;)i=i.value,d=o+ya(i,a++),l+=tl(i,t,r,d,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Pi(e,t,r){if(e==null)return e;var o=[],s=0;return tl(e,o,"","",function(i){return t.call(r,i,s++)}),o}function j3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},nl={transition:null},y3={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:nl,ReactCurrentOwner:hc};le.Children={map:Pi,forEach:function(e,t,r){Pi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Pi(e,function(){t++}),t},toArray:function(e){return Pi(e,function(t){return t})||[]},only:function(e){if(!xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Go;le.Fragment=a3;le.Profiler=c3;le.PureComponent=pc;le.StrictMode=d3;le.Suspense=f3;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y3;le.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=vf({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=hc.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in t)Sf.call(t,d)&&!Ff.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&a!==void 0?a[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:ai,type:e.type,key:s,ref:i,props:o,_owner:l}};le.createContext=function(e){return e={$$typeof:m3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:u3,_context:e},e.Consumer=e};le.createElement=wf;le.createFactory=function(e){var t=wf.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:p3,render:e}};le.isValidElement=xc;le.lazy=function(e){return{$$typeof:x3,_payload:{_status:-1,_result:e},_init:j3}};le.memo=function(e,t){return{$$typeof:h3,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=nl.transition;nl.transition={};try{e()}finally{nl.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return ft.current.useCallback(e,t)};le.useContext=function(e){return ft.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};le.useEffect=function(e,t){return ft.current.useEffect(e,t)};le.useId=function(){return ft.current.useId()};le.useImperativeHandle=function(e,t,r){return ft.current.useImperativeHandle(e,t,r)};le.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return ft.current.useMemo(e,t)};le.useReducer=function(e,t,r){return ft.current.useReducer(e,t,r)};le.useRef=function(e){return ft.current.useRef(e)};le.useState=function(e){return ft.current.useState(e)};le.useSyncExternalStore=function(e,t,r){return ft.current.useSyncExternalStore(e,t,r)};le.useTransition=function(){return ft.current.useTransition()};le.version="18.2.0";gf.exports=le;var T=gf.exports;const lt=Ur(T),S3=hf({__proto__:null,default:lt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F3=T,w3=Symbol.for("react.element"),C3=Symbol.for("react.fragment"),_3=Object.prototype.hasOwnProperty,E3=F3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T3={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)_3.call(t,o)&&!T3.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:w3,type:e,key:i,ref:l,props:s,_owner:E3.current}}Hl.Fragment=C3;Hl.jsx=Cf;Hl.jsxs=Cf;xf.exports=Hl;var n=xf.exports,td={},_f={exports:{}},Rt={},Ef={exports:{}},Tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var V=P.length;P.push(B);e:for(;0<V;){var q=V-1>>>1,K=P[q];if(0<s(K,B))P[q]=B,P[V]=K,V=q;else break e}}function r(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var B=P[0],V=P.pop();if(V!==B){P[0]=V;e:for(var q=0,K=P.length,Qe=K>>>1;q<Qe;){var ce=2*(q+1)-1,Ee=P[ce],he=ce+1,$e=P[he];if(0>s(Ee,V))he<K&&0>s($e,Ee)?(P[q]=$e,P[he]=V,q=he):(P[q]=Ee,P[ce]=V,q=ce);else if(he<K&&0>s($e,V))P[q]=$e,P[he]=V,q=he;else break e}}return B}function s(P,B){var V=P.sortIndex-B.sortIndex;return V!==0?V:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],c=[],u=1,h=null,g=3,C=!1,_=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var B=r(c);B!==null;){if(B.callback===null)o(c);else if(B.startTime<=P)o(c),B.sortIndex=B.expirationTime,t(d,B);else break;B=r(c)}}function v(P){if(E=!1,p(P),!_)if(r(d)!==null)_=!0,ve(S);else{var B=r(c);B!==null&&ie(v,B.startTime-P)}}function S(P,B){_=!1,E&&(E=!1,b(L),L=-1),C=!0;var V=g;try{for(p(B),h=r(d);h!==null&&(!(h.expirationTime>B)||P&&!I());){var q=h.callback;if(typeof q=="function"){h.callback=null,g=h.priorityLevel;var K=q(h.expirationTime<=B);B=e.unstable_now(),typeof K=="function"?h.callback=K:h===r(d)&&o(d),p(B)}else o(d);h=r(d)}if(h!==null)var Qe=!0;else{var ce=r(c);ce!==null&&ie(v,ce.startTime-B),Qe=!1}return Qe}finally{h=null,g=V,C=!1}}var x=!1,F=null,L=-1,R=5,M=-1;function I(){return!(e.unstable_now()-M<R)}function J(){if(F!==null){var P=e.unstable_now();M=P;var B=!0;try{B=F(!0,P)}finally{B?ee():(x=!1,F=null)}}else x=!1}var ee;if(typeof m=="function")ee=function(){m(J)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,we=pe.port2;pe.port1.onmessage=J,ee=function(){we.postMessage(null)}}else ee=function(){N(J,0)};function ve(P){F=P,x||(x=!0,ee())}function ie(P,B){L=N(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){_||C||(_=!0,ve(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var V=g;g=B;try{return P()}finally{g=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=g;g=P;try{return B()}finally{g=V}},e.unstable_scheduleCallback=function(P,B,V){var q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?q+V:q):V=q,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=V+K,P={id:u++,callback:B,priorityLevel:P,startTime:V,expirationTime:K,sortIndex:-1},V>q?(P.sortIndex=V,t(c,P),r(d)===null&&P===r(c)&&(E?(b(L),L=-1):E=!0,ie(v,V-q))):(P.sortIndex=K,t(d,P),_||C||(_=!0,ve(S))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var B=g;return function(){var V=g;g=B;try{return P.apply(this,arguments)}finally{g=V}}}})(Tf);Ef.exports=Tf;var k3=Ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=T,Tt=k3;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rf=new Set,Ds={};function qr(e,t){Io(e,t),Io(e+"Capture",t)}function Io(e,t){for(Ds[e]=t,e=0;e<t.length;e++)Rf.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,R3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm={},nm={};function L3(e){return nd.call(nm,e)?!0:nd.call(tm,e)?!1:R3.test(e)?nm[e]=!0:(tm[e]=!0,!1)}function N3(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O3(e,t,r,o){if(t===null||typeof t>"u"||N3(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,r,o,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function bc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gc,bc);tt[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gc,bc);tt[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gc,bc);tt[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function vc(e,t,r,o){var s=tt.hasOwnProperty(t)?tt[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O3(t,r,s,o)&&(r=null),o||s===null?L3(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var Rn=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),uo=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),Lf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Of=Symbol.for("react.offscreen"),rm=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=rm&&e[rm]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Sa;function Ss(e){if(Sa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Sa=t&&t[1]||""}return`
`+Sa+e}var Fa=!1;function wa(e,t){if(!e||Fa)return"";Fa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Fa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ss(e):""}function P3(e){switch(e.tag){case 5:return Ss(e.type);case 16:return Ss("Lazy");case 13:return Ss("Suspense");case 19:return Ss("SuspenseList");case 0:case 2:case 15:return e=wa(e.type,!1),e;case 11:return e=wa(e.type.render,!1),e;case 1:return e=wa(e.type,!0),e;default:return""}}function id(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case uo:return"Portal";case rd:return"Profiler";case jc:return"StrictMode";case od:return"Suspense";case sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nf:return(e.displayName||"Context")+".Consumer";case Lf:return(e._context.displayName||"Context")+".Provider";case yc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sc:return t=e.displayName||null,t!==null?t:id(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return id(e(t))}catch{}}return null}function A3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(t);case 8:return t===jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M3(e){var t=Pf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=M3(e))}function Af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Pf(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ld(e,t){var r=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function om(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=er(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mf(e,t){t=t.checked,t!=null&&vc(e,"checked",t,!1)}function ad(e,t){Mf(e,t);var r=er(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dd(e,t.type,r):t.hasOwnProperty("defaultValue")&&dd(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function dd(e,t,r){(t!=="number"||xl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Fs=Array.isArray;function To(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+er(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function cd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function im(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(Fs(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:er(r)}}function If(e,t){var r=er(t.value),o=er(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function lm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ii,$f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ii=Ii||document.createElement("div"),Ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $s(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I3=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){I3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ts[t]=Ts[e]})});function zf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ts.hasOwnProperty(e)&&Ts[e]?(""+t).trim():t+"px"}function Bf(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=zf(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var D3=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(e,t){if(t){if(D3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function pd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fd=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hd=null,ko=null,Ro=null;function am(e){if(e=ui(e)){if(typeof hd!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Kl(t),hd(e.stateNode,e.type,t))}}function Vf(e){ko?Ro?Ro.push(e):Ro=[e]:ko=e}function Uf(){if(ko){var e=ko,t=Ro;if(Ro=ko=null,am(e),t)for(e=0;e<t.length;e++)am(t[e])}}function qf(e,t){return e(t)}function Hf(){}var Ca=!1;function Yf(e,t,r){if(Ca)return e(t,r);Ca=!0;try{return qf(e,t,r)}finally{Ca=!1,(ko!==null||Ro!==null)&&(Hf(),Uf())}}function zs(e,t){var r=e.stateNode;if(r===null)return null;var o=Kl(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var xd=!1;if(Fn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){xd=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{xd=!1}function $3(e,t,r,o,s,i,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var ks=!1,gl=null,bl=!1,gd=null,z3={onError:function(e){ks=!0,gl=e}};function B3(e,t,r,o,s,i,l,a,d){ks=!1,gl=null,$3.apply(z3,arguments)}function V3(e,t,r,o,s,i,l,a,d){if(B3.apply(this,arguments),ks){if(ks){var c=gl;ks=!1,gl=null}else throw Error(A(198));bl||(bl=!0,gd=c)}}function Hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dm(e){if(Hr(e)!==e)throw Error(A(188))}function U3(e){var t=e.alternate;if(!t){if(t=Hr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return dm(s),e;if(i===o)return dm(s),t;i=i.sibling}throw Error(A(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(A(189))}}if(r.alternate!==o)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function Zf(e){return e=U3(e),e!==null?Gf(e):null}function Gf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gf(e);if(t!==null)return t;e=e.sibling}return null}var Kf=Tt.unstable_scheduleCallback,cm=Tt.unstable_cancelCallback,q3=Tt.unstable_shouldYield,H3=Tt.unstable_requestPaint,Ae=Tt.unstable_now,Y3=Tt.unstable_getCurrentPriorityLevel,wc=Tt.unstable_ImmediatePriority,Qf=Tt.unstable_UserBlockingPriority,vl=Tt.unstable_NormalPriority,W3=Tt.unstable_LowPriority,Xf=Tt.unstable_IdlePriority,Yl=null,dn=null;function Z3(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Yl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:Q3,G3=Math.log,K3=Math.LN2;function Q3(e){return e>>>=0,e===0?32:31-(G3(e)/K3|0)|0}var Di=64,$i=4194304;function ws(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jl(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=ws(a):(i&=l,i!==0&&(o=ws(i)))}else l=r&~s,l!==0?o=ws(l):i!==0&&(o=ws(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Xt(t),s=1<<r,o|=e[r],t&=~s;return o}function X3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J3(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xt(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=X3(a,t)):d<=t&&(e.expiredLanes|=a),i&=~a}}function bd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jf(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function _a(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function di(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=r}function eg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Xt(r),i=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~i}}function Cc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Xt(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var fe=0;function eh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var th,_c,nh,rh,oh,vd=!1,zi=[],Hn=null,Yn=null,Wn=null,Bs=new Map,Vs=new Map,Bn=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(t.pointerId)}}function cs(e,t,r,o,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ui(t),t!==null&&_c(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ng(e,t,r,o,s){switch(t){case"focusin":return Hn=cs(Hn,e,t,r,o,s),!0;case"dragenter":return Yn=cs(Yn,e,t,r,o,s),!0;case"mouseover":return Wn=cs(Wn,e,t,r,o,s),!0;case"pointerover":var i=s.pointerId;return Bs.set(i,cs(Bs.get(i)||null,e,t,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,Vs.set(i,cs(Vs.get(i)||null,e,t,r,o,s)),!0}return!1}function sh(e){var t=Cr(e.target);if(t!==null){var r=Hr(t);if(r!==null){if(t=r.tag,t===13){if(t=Wf(r),t!==null){e.blockedOn=t,oh(e.priority,function(){nh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=jd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);fd=o,r.target.dispatchEvent(o),fd=null}else return t=ui(r),t!==null&&_c(t),e.blockedOn=r,!1;t.shift()}return!0}function mm(e,t,r){rl(e)&&r.delete(t)}function rg(){vd=!1,Hn!==null&&rl(Hn)&&(Hn=null),Yn!==null&&rl(Yn)&&(Yn=null),Wn!==null&&rl(Wn)&&(Wn=null),Bs.forEach(mm),Vs.forEach(mm)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,vd||(vd=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,rg)))}function Us(e){function t(s){return us(s,e)}if(0<zi.length){us(zi[0],e);for(var r=1;r<zi.length;r++){var o=zi[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Hn!==null&&us(Hn,e),Yn!==null&&us(Yn,e),Wn!==null&&us(Wn,e),Bs.forEach(t),Vs.forEach(t),r=0;r<Bn.length;r++)o=Bn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Bn.length&&(r=Bn[0],r.blockedOn===null);)sh(r),r.blockedOn===null&&Bn.shift()}var Lo=Rn.ReactCurrentBatchConfig,yl=!0;function og(e,t,r,o){var s=fe,i=Lo.transition;Lo.transition=null;try{fe=1,Ec(e,t,r,o)}finally{fe=s,Lo.transition=i}}function sg(e,t,r,o){var s=fe,i=Lo.transition;Lo.transition=null;try{fe=4,Ec(e,t,r,o)}finally{fe=s,Lo.transition=i}}function Ec(e,t,r,o){if(yl){var s=jd(e,t,r,o);if(s===null)Ma(e,t,o,Sl,r),um(e,o);else if(ng(s,e,t,r,o))o.stopPropagation();else if(um(e,o),t&4&&-1<tg.indexOf(e)){for(;s!==null;){var i=ui(s);if(i!==null&&th(i),i=jd(e,t,r,o),i===null&&Ma(e,t,o,Sl,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Ma(e,t,o,null,r)}}var Sl=null;function jd(e,t,r,o){if(Sl=null,e=Fc(o),e=Cr(e),e!==null)if(t=Hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Wf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sl=e,null}function ih(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y3()){case wc:return 1;case Qf:return 4;case vl:case W3:return 16;case Xf:return 536870912;default:return 16}default:return 16}}var Un=null,Tc=null,ol=null;function lh(){if(ol)return ol;var e,t=Tc,r=t.length,o,s="value"in Un?Un.value:Un.textContent,i=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(o=1;o<=l&&t[r-o]===s[i-o];o++);return ol=s.slice(e,1<o?1-o:void 0)}function sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bi(){return!0}function pm(){return!1}function Lt(e){function t(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bi:pm,this.isPropagationStopped=pm,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),t}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Lt(Ko),ci=Re({},Ko,{view:0,detail:0}),ig=Lt(ci),Ea,Ta,ms,Wl=Re({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ms&&(ms&&e.type==="mousemove"?(Ea=e.screenX-ms.screenX,Ta=e.screenY-ms.screenY):Ta=Ea=0,ms=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Ta}}),fm=Lt(Wl),lg=Re({},Wl,{dataTransfer:0}),ag=Lt(lg),dg=Re({},ci,{relatedTarget:0}),ka=Lt(dg),cg=Re({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),ug=Lt(cg),mg=Re({},Ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pg=Lt(mg),fg=Re({},Ko,{data:0}),hm=Lt(fg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gg[e])?!!t[e]:!1}function Rc(){return bg}var vg=Re({},ci,{key:function(e){if(e.key){var t=hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=Lt(vg),yg=Re({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Lt(yg),Sg=Re({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),Fg=Lt(Sg),wg=Re({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cg=Lt(wg),_g=Re({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eg=Lt(_g),Tg=[9,13,27,32],Lc=Fn&&"CompositionEvent"in window,Rs=null;Fn&&"documentMode"in document&&(Rs=document.documentMode);var kg=Fn&&"TextEvent"in window&&!Rs,ah=Fn&&(!Lc||Rs&&8<Rs&&11>=Rs),gm=" ",bm=!1;function dh(e,t){switch(e){case"keyup":return Tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var po=!1;function Rg(e,t){switch(e){case"compositionend":return ch(t);case"keypress":return t.which!==32?null:(bm=!0,gm);case"textInput":return e=t.data,e===gm&&bm?null:e;default:return null}}function Lg(e,t){if(po)return e==="compositionend"||!Lc&&dh(e,t)?(e=lh(),ol=Tc=Un=null,po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ah&&t.locale!=="ko"?null:t.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ng[e.type]:t==="textarea"}function uh(e,t,r,o){Vf(o),t=Fl(t,"onChange"),0<t.length&&(r=new kc("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Ls=null,qs=null;function Og(e){Sh(e,0)}function Zl(e){var t=xo(e);if(Af(t))return e}function Pg(e,t){if(e==="change")return t}var mh=!1;if(Fn){var Ra;if(Fn){var La="oninput"in document;if(!La){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),La=typeof jm.oninput=="function"}Ra=La}else Ra=!1;mh=Ra&&(!document.documentMode||9<document.documentMode)}function ym(){Ls&&(Ls.detachEvent("onpropertychange",ph),qs=Ls=null)}function ph(e){if(e.propertyName==="value"&&Zl(qs)){var t=[];uh(t,qs,e,Fc(e)),Yf(Og,t)}}function Ag(e,t,r){e==="focusin"?(ym(),Ls=t,qs=r,Ls.attachEvent("onpropertychange",ph)):e==="focusout"&&ym()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(qs)}function Ig(e,t){if(e==="click")return Zl(t)}function Dg(e,t){if(e==="input"||e==="change")return Zl(t)}function $g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:$g;function Hs(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!nd.call(t,s)||!en(e[s],t[s]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fm(e,t){var r=Sm(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Sm(r)}}function fh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hh(){for(var e=window,t=xl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=xl(e.document)}return t}function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zg(e){var t=hh(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fh(r.ownerDocument.documentElement,r)){if(o!==null&&Nc(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!e.extend&&i>o&&(s=o,o=i,i=s),s=Fm(r,i);var l=Fm(r,o);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bg=Fn&&"documentMode"in document&&11>=document.documentMode,fo=null,yd=null,Ns=null,Sd=!1;function wm(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sd||fo==null||fo!==xl(o)||(o=fo,"selectionStart"in o&&Nc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ns&&Hs(Ns,o)||(Ns=o,o=Fl(yd,"onSelect"),0<o.length&&(t=new kc("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=fo)))}function Vi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ho={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},Na={},xh={};Fn&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Gl(e){if(Na[e])return Na[e];if(!ho[e])return e;var t=ho[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in xh)return Na[e]=t[r];return e}var gh=Gl("animationend"),bh=Gl("animationiteration"),vh=Gl("animationstart"),jh=Gl("transitionend"),yh=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(e,t){yh.set(e,t),qr(t,[e])}for(var Oa=0;Oa<Cm.length;Oa++){var Pa=Cm[Oa],Vg=Pa.toLowerCase(),Ug=Pa[0].toUpperCase()+Pa.slice(1);lr(Vg,"on"+Ug)}lr(gh,"onAnimationEnd");lr(bh,"onAnimationIteration");lr(vh,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(jh,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function _m(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,V3(o,t,void 0,e),e.currentTarget=null}function Sh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break e;_m(s,a,c),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break e;_m(s,a,c),i=d}}}if(bl)throw e=gd,bl=!1,gd=null,e}function ye(e,t){var r=t[Ed];r===void 0&&(r=t[Ed]=new Set);var o=e+"__bubble";r.has(o)||(Fh(t,e,2,!1),r.add(o))}function Aa(e,t,r){var o=0;t&&(o|=4),Fh(r,e,o,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function Ys(e){if(!e[Ui]){e[Ui]=!0,Rf.forEach(function(r){r!=="selectionchange"&&(qg.has(r)||Aa(r,!1,e),Aa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,Aa("selectionchange",!1,t))}}function Fh(e,t,r,o){switch(ih(t)){case 1:var s=og;break;case 4:s=sg;break;default:s=Ec}r=s.bind(null,t,r,e),s=void 0,!xd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Ma(e,t,r,o,s){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Cr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue e}a=a.parentNode}}o=o.return}Yf(function(){var c=i,u=Fc(r),h=[];e:{var g=yh.get(e);if(g!==void 0){var C=kc,_=e;switch(e){case"keypress":if(sl(r)===0)break e;case"keydown":case"keyup":C=jg;break;case"focusin":_="focus",C=ka;break;case"focusout":_="blur",C=ka;break;case"beforeblur":case"afterblur":C=ka;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Fg;break;case gh:case bh:case vh:C=ug;break;case jh:C=Cg;break;case"scroll":C=ig;break;case"wheel":C=Eg;break;case"copy":case"cut":case"paste":C=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=xm}var E=(t&4)!==0,N=!E&&e==="scroll",b=E?g!==null?g+"Capture":null:g;E=[];for(var m=c,p;m!==null;){p=m;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,b!==null&&(v=zs(m,b),v!=null&&E.push(Ws(m,v,p)))),N)break;m=m.return}0<E.length&&(g=new C(g,_,null,r,u),h.push({event:g,listeners:E}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&r!==fd&&(_=r.relatedTarget||r.fromElement)&&(Cr(_)||_[wn]))break e;if((C||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,C?(_=r.relatedTarget||r.toElement,C=c,_=_?Cr(_):null,_!==null&&(N=Hr(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(C=null,_=c),C!==_)){if(E=fm,v="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=xm,v="onPointerLeave",b="onPointerEnter",m="pointer"),N=C==null?g:xo(C),p=_==null?g:xo(_),g=new E(v,m+"leave",C,r,u),g.target=N,g.relatedTarget=p,v=null,Cr(u)===c&&(E=new E(b,m+"enter",_,r,u),E.target=p,E.relatedTarget=N,v=E),N=v,C&&_)t:{for(E=C,b=_,m=0,p=E;p;p=ro(p))m++;for(p=0,v=b;v;v=ro(v))p++;for(;0<m-p;)E=ro(E),m--;for(;0<p-m;)b=ro(b),p--;for(;m--;){if(E===b||b!==null&&E===b.alternate)break t;E=ro(E),b=ro(b)}E=null}else E=null;C!==null&&Em(h,g,C,E,!1),_!==null&&N!==null&&Em(h,N,_,E,!0)}}e:{if(g=c?xo(c):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var S=Pg;else if(vm(g))if(mh)S=Dg;else{S=Mg;var x=Ag}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Ig);if(S&&(S=S(e,c))){uh(h,S,r,u);break e}x&&x(e,g,c),e==="focusout"&&(x=g._wrapperState)&&x.controlled&&g.type==="number"&&dd(g,"number",g.value)}switch(x=c?xo(c):window,e){case"focusin":(vm(x)||x.contentEditable==="true")&&(fo=x,yd=c,Ns=null);break;case"focusout":Ns=yd=fo=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,wm(h,r,u);break;case"selectionchange":if(Bg)break;case"keydown":case"keyup":wm(h,r,u)}var F;if(Lc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else po?dh(e,r)&&(L="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(ah&&r.locale!=="ko"&&(po||L!=="onCompositionStart"?L==="onCompositionEnd"&&po&&(F=lh()):(Un=u,Tc="value"in Un?Un.value:Un.textContent,po=!0)),x=Fl(c,L),0<x.length&&(L=new hm(L,e,null,r,u),h.push({event:L,listeners:x}),F?L.data=F:(F=ch(r),F!==null&&(L.data=F)))),(F=kg?Rg(e,r):Lg(e,r))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(u=new hm("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:c}),u.data=F))}Sh(h,t)})}function Ws(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fl(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=zs(e,r),i!=null&&o.unshift(Ws(e,i,s)),i=zs(e,t),i!=null&&o.push(Ws(e,i,s))),e=e.return}return o}function ro(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Em(e,t,r,o,s){for(var i=t._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,s?(d=zs(r,i),d!=null&&l.unshift(Ws(r,d,a))):s||(d=zs(r,i),d!=null&&l.push(Ws(r,d,a)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Hg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Tm(e){return(typeof e=="string"?e:""+e).replace(Hg,`
`).replace(Yg,"")}function qi(e,t,r){if(t=Tm(t),Tm(e)!==t&&r)throw Error(A(425))}function wl(){}var Fd=null,wd=null;function Cd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,Wg=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(e){return km.resolve(null).then(e).catch(Gg)}:_d;function Gg(e){setTimeout(function(){throw e})}function Ia(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),Us(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Us(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),ln="__reactFiber$"+Qo,Zs="__reactProps$"+Qo,wn="__reactContainer$"+Qo,Ed="__reactEvents$"+Qo,Kg="__reactListeners$"+Qo,Qg="__reactHandles$"+Qo;function Cr(e){var t=e[ln];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wn]||r[ln]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Rm(e);e!==null;){if(r=e[ln])return r;e=Rm(e)}return t}e=r,r=e.parentNode}return null}function ui(e){return e=e[ln]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Kl(e){return e[Zs]||null}var Td=[],go=-1;function ar(e){return{current:e}}function Se(e){0>go||(e.current=Td[go],Td[go]=null,go--)}function be(e,t){go++,Td[go]=e.current,e.current=t}var tr={},ct=ar(tr),jt=ar(!1),Or=tr;function Do(e,t){var r=e.type.contextTypes;if(!r)return tr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function yt(e){return e=e.childContextTypes,e!=null}function Cl(){Se(jt),Se(ct)}function Lm(e,t,r){if(ct.current!==tr)throw Error(A(168));be(ct,t),be(jt,r)}function wh(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(A(108,A3(e)||"Unknown",s));return Re({},r,o)}function _l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,Or=ct.current,be(ct,e),be(jt,jt.current),!0}function Nm(e,t,r){var o=e.stateNode;if(!o)throw Error(A(169));r?(e=wh(e,t,Or),o.__reactInternalMemoizedMergedChildContext=e,Se(jt),Se(ct),be(ct,e)):Se(jt),be(jt,r)}var bn=null,Ql=!1,Da=!1;function Ch(e){bn===null?bn=[e]:bn.push(e)}function Xg(e){Ql=!0,Ch(e)}function dr(){if(!Da&&bn!==null){Da=!0;var e=0,t=fe;try{var r=bn;for(fe=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}bn=null,Ql=!1}catch(s){throw bn!==null&&(bn=bn.slice(e+1)),Kf(wc,dr),s}finally{fe=t,Da=!1}}return null}var bo=[],vo=0,El=null,Tl=0,Mt=[],It=0,Pr=null,vn=1,jn="";function Sr(e,t){bo[vo++]=Tl,bo[vo++]=El,El=e,Tl=t}function _h(e,t,r){Mt[It++]=vn,Mt[It++]=jn,Mt[It++]=Pr,Pr=e;var o=vn;e=jn;var s=32-Xt(o)-1;o&=~(1<<s),r+=1;var i=32-Xt(t)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,vn=1<<32-Xt(t)+s|r<<s|o,jn=i+e}else vn=1<<i|r<<s|o,jn=e}function Oc(e){e.return!==null&&(Sr(e,1),_h(e,1,0))}function Pc(e){for(;e===El;)El=bo[--vo],bo[vo]=null,Tl=bo[--vo],bo[vo]=null;for(;e===Pr;)Pr=Mt[--It],Mt[It]=null,jn=Mt[--It],Mt[It]=null,vn=Mt[--It],Mt[It]=null}var Et=null,Ct=null,_e=!1,Qt=null;function Eh(e,t){var r=Dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Om(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Et=e,Ct=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Et=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Pr!==null?{id:vn,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Et=e,Ct=null,!0):!1;default:return!1}}function kd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rd(e){if(_e){var t=Ct;if(t){var r=t;if(!Om(e,t)){if(kd(e))throw Error(A(418));t=Zn(r.nextSibling);var o=Et;t&&Om(e,t)?Eh(o,r):(e.flags=e.flags&-4097|2,_e=!1,Et=e)}}else{if(kd(e))throw Error(A(418));e.flags=e.flags&-4097|2,_e=!1,Et=e}}}function Pm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Et=e}function Hi(e){if(e!==Et)return!1;if(!_e)return Pm(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cd(e.type,e.memoizedProps)),t&&(t=Ct)){if(kd(e))throw Th(),Error(A(418));for(;t;)Eh(e,t),t=Zn(t.nextSibling)}if(Pm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ct=Zn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Et?Zn(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=Ct;e;)e=Zn(e.nextSibling)}function $o(){Ct=Et=null,_e=!1}function Ac(e){Qt===null?Qt=[e]:Qt.push(e)}var Jg=Rn.ReactCurrentBatchConfig;function Zt(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var kl=ar(null),Rl=null,jo=null,Mc=null;function Ic(){Mc=jo=Rl=null}function Dc(e){var t=kl.current;Se(kl),e._currentValue=t}function Ld(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function No(e,t){Rl=e,Mc=jo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:t,next:null},jo===null){if(Rl===null)throw Error(A(308));jo=e,Rl.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return t}var _r=null;function $c(e){_r===null?_r=[e]:_r.push(e)}function kh(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,$c(t)):(r.next=s.next,s.next=r),t.interleaved=r,Cn(e,o)}function Cn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zn=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,de&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Cn(e,r)}return s=o.interleaved,s===null?(t.next=t,$c(o)):(t.next=s.next,s.next=t),o.interleaved=t,Cn(e,r)}function il(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Cc(e,r)}}function Am(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=t:i=i.next=t}else s=i=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ll(e,t,r,o){var s=e.updateQueue;zn=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?i=c:l.next=c,l=d;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=d))}if(i!==null){var h=s.baseState;l=0,u=c=d=null,a=i;do{var g=a.lane,C=a.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,E=a;switch(g=t,C=r,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(C,h,g);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,g=typeof _=="function"?_.call(C,h,g):_,g==null)break e;h=Re({},h,g);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else C={eventTime:C,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=C,d=h):u=u.next=C,l|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(u===null&&(d=h),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Mr|=l,e.lanes=l,e.memoizedState=h}}function Mm(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var Lh=new kf.Component().refs;function Nd(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:Re({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xl={isMounted:function(e){return(e=e._reactInternals)?Hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=pt(),s=Qn(e),i=yn(o,s);i.payload=t,r!=null&&(i.callback=r),t=Gn(e,i,s),t!==null&&(Jt(t,e,s,o),il(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=pt(),s=Qn(e),i=yn(o,s);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Gn(e,i,s),t!==null&&(Jt(t,e,s,o),il(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pt(),o=Qn(e),s=yn(r,o);s.tag=2,t!=null&&(s.callback=t),t=Gn(e,s,o),t!==null&&(Jt(t,e,o,r),il(t,e,o))}};function Im(e,t,r,o,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):t.prototype&&t.prototype.isPureReactComponent?!Hs(r,o)||!Hs(s,i):!0}function Nh(e,t,r){var o=!1,s=tr,i=t.contextType;return typeof i=="object"&&i!==null?i=zt(i):(s=yt(t)?Or:ct.current,o=t.contextTypes,i=(o=o!=null)?Do(e,s):tr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Dm(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Xl.enqueueReplaceState(t,t.state,null)}function Od(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs=Lh,zc(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=zt(i):(i=yt(t)?Or:ct.current,s.context=Do(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Nd(e,t,i,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Xl.enqueueReplaceState(s,s.state,null),Ll(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ps(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var o=r.stateNode}if(!o)throw Error(A(147,e));var s=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=s.refs;a===Lh&&(a=s.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $m(e){var t=e._init;return t(e._payload)}function Oh(e){function t(b,m){if(e){var p=b.deletions;p===null?(b.deletions=[m],b.flags|=16):p.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function o(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function s(b,m){return b=Xn(b,m),b.index=0,b.sibling=null,b}function i(b,m,p){return b.index=p,e?(p=b.alternate,p!==null?(p=p.index,p<m?(b.flags|=2,m):p):(b.flags|=2,m)):(b.flags|=1048576,m)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,m,p,v){return m===null||m.tag!==6?(m=Ha(p,b.mode,v),m.return=b,m):(m=s(m,p),m.return=b,m)}function d(b,m,p,v){var S=p.type;return S===mo?u(b,m,p.props.children,v,p.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$n&&$m(S)===m.type)?(v=s(m,p.props),v.ref=ps(b,m,p),v.return=b,v):(v=ml(p.type,p.key,p.props,null,b.mode,v),v.ref=ps(b,m,p),v.return=b,v)}function c(b,m,p,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Ya(p,b.mode,v),m.return=b,m):(m=s(m,p.children||[]),m.return=b,m)}function u(b,m,p,v,S){return m===null||m.tag!==7?(m=Nr(p,b.mode,v,S),m.return=b,m):(m=s(m,p),m.return=b,m)}function h(b,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ha(""+m,b.mode,p),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:return p=ml(m.type,m.key,m.props,null,b.mode,p),p.ref=ps(b,null,m),p.return=b,p;case uo:return m=Ya(m,b.mode,p),m.return=b,m;case $n:var v=m._init;return h(b,v(m._payload),p)}if(Fs(m)||as(m))return m=Nr(m,b.mode,p,null),m.return=b,m;Yi(b,m)}return null}function g(b,m,p,v){var S=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(b,m,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ai:return p.key===S?d(b,m,p,v):null;case uo:return p.key===S?c(b,m,p,v):null;case $n:return S=p._init,g(b,m,S(p._payload),v)}if(Fs(p)||as(p))return S!==null?null:u(b,m,p,v,null);Yi(b,p)}return null}function C(b,m,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return b=b.get(p)||null,a(m,b,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ai:return b=b.get(v.key===null?p:v.key)||null,d(m,b,v,S);case uo:return b=b.get(v.key===null?p:v.key)||null,c(m,b,v,S);case $n:var x=v._init;return C(b,m,p,x(v._payload),S)}if(Fs(v)||as(v))return b=b.get(p)||null,u(m,b,v,S,null);Yi(m,v)}return null}function _(b,m,p,v){for(var S=null,x=null,F=m,L=m=0,R=null;F!==null&&L<p.length;L++){F.index>L?(R=F,F=null):R=F.sibling;var M=g(b,F,p[L],v);if(M===null){F===null&&(F=R);break}e&&F&&M.alternate===null&&t(b,F),m=i(M,m,L),x===null?S=M:x.sibling=M,x=M,F=R}if(L===p.length)return r(b,F),_e&&Sr(b,L),S;if(F===null){for(;L<p.length;L++)F=h(b,p[L],v),F!==null&&(m=i(F,m,L),x===null?S=F:x.sibling=F,x=F);return _e&&Sr(b,L),S}for(F=o(b,F);L<p.length;L++)R=C(F,b,L,p[L],v),R!==null&&(e&&R.alternate!==null&&F.delete(R.key===null?L:R.key),m=i(R,m,L),x===null?S=R:x.sibling=R,x=R);return e&&F.forEach(function(I){return t(b,I)}),_e&&Sr(b,L),S}function E(b,m,p,v){var S=as(p);if(typeof S!="function")throw Error(A(150));if(p=S.call(p),p==null)throw Error(A(151));for(var x=S=null,F=m,L=m=0,R=null,M=p.next();F!==null&&!M.done;L++,M=p.next()){F.index>L?(R=F,F=null):R=F.sibling;var I=g(b,F,M.value,v);if(I===null){F===null&&(F=R);break}e&&F&&I.alternate===null&&t(b,F),m=i(I,m,L),x===null?S=I:x.sibling=I,x=I,F=R}if(M.done)return r(b,F),_e&&Sr(b,L),S;if(F===null){for(;!M.done;L++,M=p.next())M=h(b,M.value,v),M!==null&&(m=i(M,m,L),x===null?S=M:x.sibling=M,x=M);return _e&&Sr(b,L),S}for(F=o(b,F);!M.done;L++,M=p.next())M=C(F,b,L,M.value,v),M!==null&&(e&&M.alternate!==null&&F.delete(M.key===null?L:M.key),m=i(M,m,L),x===null?S=M:x.sibling=M,x=M);return e&&F.forEach(function(J){return t(b,J)}),_e&&Sr(b,L),S}function N(b,m,p,v){if(typeof p=="object"&&p!==null&&p.type===mo&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ai:e:{for(var S=p.key,x=m;x!==null;){if(x.key===S){if(S=p.type,S===mo){if(x.tag===7){r(b,x.sibling),m=s(x,p.props.children),m.return=b,b=m;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$n&&$m(S)===x.type){r(b,x.sibling),m=s(x,p.props),m.ref=ps(b,x,p),m.return=b,b=m;break e}r(b,x);break}else t(b,x);x=x.sibling}p.type===mo?(m=Nr(p.props.children,b.mode,v,p.key),m.return=b,b=m):(v=ml(p.type,p.key,p.props,null,b.mode,v),v.ref=ps(b,m,p),v.return=b,b=v)}return l(b);case uo:e:{for(x=p.key;m!==null;){if(m.key===x)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){r(b,m.sibling),m=s(m,p.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=Ya(p,b.mode,v),m.return=b,b=m}return l(b);case $n:return x=p._init,N(b,m,x(p._payload),v)}if(Fs(p))return _(b,m,p,v);if(as(p))return E(b,m,p,v);Yi(b,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(r(b,m.sibling),m=s(m,p),m.return=b,b=m):(r(b,m),m=Ha(p,b.mode,v),m.return=b,b=m),l(b)):r(b,m)}return N}var zo=Oh(!0),Ph=Oh(!1),mi={},cn=ar(mi),Gs=ar(mi),Ks=ar(mi);function Er(e){if(e===mi)throw Error(A(174));return e}function Bc(e,t){switch(be(Ks,t),be(Gs,e),be(cn,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ud(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ud(t,e)}Se(cn),be(cn,t)}function Bo(){Se(cn),Se(Gs),Se(Ks)}function Ah(e){Er(Ks.current);var t=Er(cn.current),r=ud(t,e.type);t!==r&&(be(Gs,e),be(cn,r))}function Vc(e){Gs.current===e&&(Se(cn),Se(Gs))}var Te=ar(0);function Nl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=[];function Uc(){for(var e=0;e<$a.length;e++)$a[e]._workInProgressVersionPrimary=null;$a.length=0}var ll=Rn.ReactCurrentDispatcher,za=Rn.ReactCurrentBatchConfig,Ar=0,ke=null,Be=null,Ze=null,Ol=!1,Os=!1,Qs=0,e0=0;function ot(){throw Error(A(321))}function qc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!en(e[r],t[r]))return!1;return!0}function Hc(e,t,r,o,s,i){if(Ar=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ll.current=e===null||e.memoizedState===null?o0:s0,e=r(o,s),Os){i=0;do{if(Os=!1,Qs=0,25<=i)throw Error(A(301));i+=1,Ze=Be=null,t.updateQueue=null,ll.current=i0,e=r(o,s)}while(Os)}if(ll.current=Pl,t=Be!==null&&Be.next!==null,Ar=0,Ze=Be=ke=null,Ol=!1,t)throw Error(A(300));return e}function Yc(){var e=Qs!==0;return Qs=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ke.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Bt(){if(Be===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ze===null?ke.memoizedState:Ze.next;if(t!==null)Ze=t,Be=e;else{if(e===null)throw Error(A(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ze===null?ke.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Xs(e,t){return typeof t=="function"?t(e):t}function Ba(e){var t=Bt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var o=Be,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,c=i;do{var u=c.lane;if((Ar&u)===u)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=h,l=o):d=d.next=h,ke.lanes|=u,Mr|=u}c=c.next}while(c!==null&&c!==i);d===null?l=o:d.next=a,en(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do i=s.lane,ke.lanes|=i,Mr|=i,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Va(e){var t=Bt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,i=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);en(i,t.memoizedState)||(vt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,o]}function Mh(){}function Ih(e,t){var r=ke,o=Bt(),s=t(),i=!en(o.memoizedState,s);if(i&&(o.memoizedState=s,vt=!0),o=o.queue,Wc(zh.bind(null,r,o,e),[e]),o.getSnapshot!==t||i||Ze!==null&&Ze.memoizedState.tag&1){if(r.flags|=2048,Js(9,$h.bind(null,r,o,s,t),void 0,null),Ke===null)throw Error(A(349));Ar&30||Dh(r,t,s)}return s}function Dh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function $h(e,t,r,o){t.value=r,t.getSnapshot=o,Bh(t)&&Vh(e)}function zh(e,t,r){return r(function(){Bh(t)&&Vh(e)})}function Bh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!en(e,r)}catch{return!0}}function Vh(e){var t=Cn(e,1);t!==null&&Jt(t,e,1,-1)}function zm(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=r0.bind(null,ke,e),[t.memoizedState,e]}function Js(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Uh(){return Bt().memoizedState}function al(e,t,r,o){var s=rn();ke.flags|=e,s.memoizedState=Js(1|t,r,void 0,o===void 0?null:o)}function Jl(e,t,r,o){var s=Bt();o=o===void 0?null:o;var i=void 0;if(Be!==null){var l=Be.memoizedState;if(i=l.destroy,o!==null&&qc(o,l.deps)){s.memoizedState=Js(t,r,i,o);return}}ke.flags|=e,s.memoizedState=Js(1|t,r,i,o)}function Bm(e,t){return al(8390656,8,e,t)}function Wc(e,t){return Jl(2048,8,e,t)}function qh(e,t){return Jl(4,2,e,t)}function Hh(e,t){return Jl(4,4,e,t)}function Yh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wh(e,t,r){return r=r!=null?r.concat([e]):null,Jl(4,4,Yh.bind(null,t,e),r)}function Zc(){}function Zh(e,t){var r=Bt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&qc(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Gh(e,t){var r=Bt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&qc(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Kh(e,t,r){return Ar&21?(en(r,t)||(r=Jf(),ke.lanes|=r,Mr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=r)}function t0(e,t){var r=fe;fe=r!==0&&4>r?r:4,e(!0);var o=za.transition;za.transition={};try{e(!1),t()}finally{fe=r,za.transition=o}}function Qh(){return Bt().memoizedState}function n0(e,t,r){var o=Qn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Xh(e))Jh(t,r);else if(r=kh(e,t,r,o),r!==null){var s=pt();Jt(r,e,o,s),e1(r,t,o)}}function r0(e,t,r){var o=Qn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Jh(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,en(a,l)){var d=t.interleaved;d===null?(s.next=s,$c(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}r=kh(e,t,s,o),r!==null&&(s=pt(),Jt(r,e,o,s),e1(r,t,o))}}function Xh(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Jh(e,t){Os=Ol=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function e1(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Cc(e,r)}}var Pl={readContext:zt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},o0={readContext:zt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:Bm,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,al(4194308,4,Yh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var r=rn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=rn();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=n0.bind(null,ke,e),[o.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:zm,useDebugValue:Zc,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=zm(!1),t=e[0];return e=t0.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=ke,s=rn();if(_e){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),Ke===null)throw Error(A(349));Ar&30||Dh(o,t,r)}s.memoizedState=r;var i={value:r,getSnapshot:t};return s.queue=i,Bm(zh.bind(null,o,i,e),[e]),o.flags|=2048,Js(9,$h.bind(null,o,i,r,t),void 0,null),r},useId:function(){var e=rn(),t=Ke.identifierPrefix;if(_e){var r=jn,o=vn;r=(o&~(1<<32-Xt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Qs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=e0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s0={readContext:zt,useCallback:Zh,useContext:zt,useEffect:Wc,useImperativeHandle:Wh,useInsertionEffect:qh,useLayoutEffect:Hh,useMemo:Gh,useReducer:Ba,useRef:Uh,useState:function(){return Ba(Xs)},useDebugValue:Zc,useDeferredValue:function(e){var t=Bt();return Kh(t,Be.memoizedState,e)},useTransition:function(){var e=Ba(Xs)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Mh,useSyncExternalStore:Ih,useId:Qh,unstable_isNewReconciler:!1},i0={readContext:zt,useCallback:Zh,useContext:zt,useEffect:Wc,useImperativeHandle:Wh,useInsertionEffect:qh,useLayoutEffect:Hh,useMemo:Gh,useReducer:Va,useRef:Uh,useState:function(){return Va(Xs)},useDebugValue:Zc,useDeferredValue:function(e){var t=Bt();return Be===null?t.memoizedState=e:Kh(t,Be.memoizedState,e)},useTransition:function(){var e=Va(Xs)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:Mh,useSyncExternalStore:Ih,useId:Qh,unstable_isNewReconciler:!1};function Vo(e,t){try{var r="",o=t;do r+=P3(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Ua(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Pd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var l0=typeof WeakMap=="function"?WeakMap:Map;function t1(e,t,r){r=yn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Ml||(Ml=!0,qd=o),Pd(e,t)},r}function n1(e,t,r){r=yn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Pd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Pd(e,t),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Vm(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new l0;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=y0.bind(null,e,t,r),t.then(e,e))}function Um(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qm(e,t,r,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=yn(-1,1),t.tag=2,Gn(r,t,1))),r.lanes|=1),e)}var a0=Rn.ReactCurrentOwner,vt=!1;function mt(e,t,r,o){t.child=e===null?Ph(t,null,r,o):zo(t,e.child,r,o)}function Hm(e,t,r,o,s){r=r.render;var i=t.ref;return No(t,s),o=Hc(e,t,r,o,i,s),r=Yc(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,_n(e,t,s)):(_e&&r&&Oc(t),t.flags|=1,mt(e,t,o,s),t.child)}function Ym(e,t,r,o,s){if(e===null){var i=r.type;return typeof i=="function"&&!nu(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,r1(e,t,i,o,s)):(e=ml(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Hs,r(l,o)&&e.ref===t.ref)return _n(e,t,s)}return t.flags|=1,e=Xn(i,o),e.ref=t.ref,e.return=t,t.child=e}function r1(e,t,r,o,s){if(e!==null){var i=e.memoizedProps;if(Hs(i,o)&&e.ref===t.ref)if(vt=!1,t.pendingProps=o=i,(e.lanes&s)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,_n(e,t,s)}return Ad(e,t,r,o,s)}function o1(e,t,r){var o=t.pendingProps,s=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(So,Ft),Ft|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(So,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,be(So,Ft),Ft|=o}else i!==null?(o=i.baseLanes|r,t.memoizedState=null):o=r,be(So,Ft),Ft|=o;return mt(e,t,s,r),t.child}function s1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ad(e,t,r,o,s){var i=yt(r)?Or:ct.current;return i=Do(t,i),No(t,s),r=Hc(e,t,r,o,i,s),o=Yc(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,_n(e,t,s)):(_e&&o&&Oc(t),t.flags|=1,mt(e,t,r,s),t.child)}function Wm(e,t,r,o,s){if(yt(r)){var i=!0;_l(t)}else i=!1;if(No(t,s),t.stateNode===null)dl(e,t),Nh(t,r,o),Od(t,r,o,s),o=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var d=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=zt(c):(c=yt(r)?Or:ct.current,c=Do(t,c));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&Dm(t,l,o,c),zn=!1;var g=t.memoizedState;l.state=g,Ll(t,o,l,s),d=t.memoizedState,a!==o||g!==d||jt.current||zn?(typeof u=="function"&&(Nd(t,r,u,o),d=t.memoizedState),(a=zn||Im(t,r,a,o,g,d,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Rh(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Zt(t.type,a),l.props=c,h=t.pendingProps,g=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=zt(d):(d=yt(r)?Or:ct.current,d=Do(t,d));var C=r.getDerivedStateFromProps;(u=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||g!==d)&&Dm(t,l,o,d),zn=!1,g=t.memoizedState,l.state=g,Ll(t,o,l,s);var _=t.memoizedState;a!==h||g!==_||jt.current||zn?(typeof C=="function"&&(Nd(t,r,C,o),_=t.memoizedState),(c=zn||Im(t,r,c,o,g,_,d)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,_,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,_,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=_),l.props=o,l.state=_,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return Md(e,t,r,o,i,s)}function Md(e,t,r,o,s,i){s1(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return s&&Nm(t,r,!1),_n(e,t,i);o=t.stateNode,a0.current=t;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=zo(t,e.child,null,i),t.child=zo(t,null,a,i)):mt(e,t,a,i),t.memoizedState=o.state,s&&Nm(t,r,!0),t.child}function i1(e){var t=e.stateNode;t.pendingContext?Lm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lm(e,t.context,!1),Bc(e,t.containerInfo)}function Zm(e,t,r,o,s){return $o(),Ac(s),t.flags|=256,mt(e,t,r,o),t.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Dd(e){return{baseLanes:e,cachePool:null,transitions:null}}function l1(e,t,r){var o=t.pendingProps,s=Te.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),be(Te,s&1),e===null)return Rd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,i?(o=t.mode,i=t.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=na(l,o,0,null),e=Nr(e,o,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Dd(r),t.memoizedState=Id,e):Gc(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return d0(e,t,l,o,a,s,r);if(i){i=o.fallback,l=t.mode,s=e.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=Xn(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Xn(a,i):(i=Nr(i,l,r,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,l=e.child.memoizedState,l=l===null?Dd(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=Id,o}return i=e.child,e=i.sibling,o=Xn(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Gc(e,t){return t=na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,r,o){return o!==null&&Ac(o),zo(t,e.child,null,r),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d0(e,t,r,o,s,i,l){if(r)return t.flags&256?(t.flags&=-257,o=Ua(Error(A(422))),Wi(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,s=t.mode,o=na({mode:"visible",children:o.children},s,0,null),i=Nr(i,s,l,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&zo(t,e.child,null,l),t.child.memoizedState=Dd(l),t.memoizedState=Id,i);if(!(t.mode&1))return Wi(e,t,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(A(419)),o=Ua(i,o,void 0),Wi(e,t,l,o)}if(a=(l&e.childLanes)!==0,vt||a){if(o=Ke,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Cn(e,s),Jt(o,e,s,-1))}return tu(),o=Ua(Error(A(421))),Wi(e,t,l,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=S0.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Ct=Zn(s.nextSibling),Et=t,_e=!0,Qt=null,e!==null&&(Mt[It++]=vn,Mt[It++]=jn,Mt[It++]=Pr,vn=e.id,jn=e.overflow,Pr=t),t=Gc(t,o.children),t.flags|=4096,t)}function Gm(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ld(e.return,t,r)}function qa(e,t,r,o,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function a1(e,t,r){var o=t.pendingProps,s=o.revealOrder,i=o.tail;if(mt(e,t,o.children,r),o=Te.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,r,t);else if(e.tag===19)Gm(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Te,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Nl(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),qa(t,!1,s,r,i);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Nl(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}qa(t,!0,r,null,i);break;case"together":qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _n(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=Xn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Xn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function c0(e,t,r){switch(t.tag){case 3:i1(t),$o();break;case 5:Ah(t);break;case 1:yt(t.type)&&_l(t);break;case 4:Bc(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;be(kl,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):r&t.child.childLanes?l1(e,t,r):(be(Te,Te.current&1),e=_n(e,t,r),e!==null?e.sibling:null);be(Te,Te.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return a1(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Te,Te.current),o)break;return null;case 22:case 23:return t.lanes=0,o1(e,t,r)}return _n(e,t,r)}var d1,$d,c1,u1;d1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};$d=function(){};c1=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Er(cn.current);var i=null;switch(r){case"input":s=ld(e,s),o=ld(e,o),i=[];break;case"select":s=Re({},s,{value:void 0}),o=Re({},o,{value:void 0}),i=[];break;case"textarea":s=cd(e,s),o=cd(e,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=wl)}md(r,o);var l;r=null;for(c in s)if(!o.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ds.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var d=o[c];if(a=s!=null?s[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ds.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&ye("scroll",e),i||a===d||(i=[])):(i=i||[]).push(c,d))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};u1=function(e,t,r,o){r!==o&&(t.flags|=4)};function fs(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function u0(e,t,r){var o=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return yt(t.type)&&Cl(),st(t),null;case 3:return o=t.stateNode,Bo(),Se(jt),Se(ct),Uc(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(Wd(Qt),Qt=null))),$d(e,t),st(t),null;case 5:Vc(t);var s=Er(Ks.current);if(r=t.type,e!==null&&t.stateNode!=null)c1(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return st(t),null}if(e=Er(cn.current),Hi(t)){o=t.stateNode,r=t.type;var i=t.memoizedProps;switch(o[ln]=t,o[Zs]=i,e=(t.mode&1)!==0,r){case"dialog":ye("cancel",o),ye("close",o);break;case"iframe":case"object":case"embed":ye("load",o);break;case"video":case"audio":for(s=0;s<Cs.length;s++)ye(Cs[s],o);break;case"source":ye("error",o);break;case"img":case"image":case"link":ye("error",o),ye("load",o);break;case"details":ye("toggle",o);break;case"input":om(o,i),ye("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},ye("invalid",o);break;case"textarea":im(o,i),ye("invalid",o)}md(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&qi(o.textContent,a,e),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&qi(o.textContent,a,e),s=["children",""+a]):Ds.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ye("scroll",o)}switch(r){case"input":Mi(o),sm(o,i,!0);break;case"textarea":Mi(o),lm(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=wl)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Df(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(r,{is:o.is}):(e=l.createElement(r),r==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,r),e[ln]=t,e[Zs]=o,d1(e,t,!1,!1),t.stateNode=e;e:{switch(l=pd(r,o),r){case"dialog":ye("cancel",e),ye("close",e),s=o;break;case"iframe":case"object":case"embed":ye("load",e),s=o;break;case"video":case"audio":for(s=0;s<Cs.length;s++)ye(Cs[s],e);s=o;break;case"source":ye("error",e),s=o;break;case"img":case"image":case"link":ye("error",e),ye("load",e),s=o;break;case"details":ye("toggle",e),s=o;break;case"input":om(e,o),s=ld(e,o),ye("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Re({},o,{value:void 0}),ye("invalid",e);break;case"textarea":im(e,o),s=cd(e,o),ye("invalid",e);break;default:s=o}md(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?Bf(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&$f(e,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&$s(e,d):typeof d=="number"&&$s(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ds.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ye("scroll",e):d!=null&&vc(e,i,d,l))}switch(r){case"input":Mi(e),sm(e,o,!1);break;case"textarea":Mi(e),lm(e);break;case"option":o.value!=null&&e.setAttribute("value",""+er(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?To(e,!!o.multiple,i,!1):o.defaultValue!=null&&To(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=wl)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)u1(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(r=Er(Ks.current),Er(cn.current),Hi(t)){if(o=t.stateNode,r=t.memoizedProps,o[ln]=t,(i=o.nodeValue!==r)&&(e=Et,e!==null))switch(e.tag){case 3:qi(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(o.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[ln]=t,t.stateNode=o}return st(t),null;case 13:if(Se(Te),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&Ct!==null&&t.mode&1&&!(t.flags&128))Th(),$o(),t.flags|=98560,i=!1;else if(i=Hi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[ln]=t}else $o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),i=!1}else Qt!==null&&(Wd(Qt),Qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Ve===0&&(Ve=3):tu())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Bo(),$d(e,t),e===null&&Ys(t.stateNode.containerInfo),st(t),null;case 10:return Dc(t.type._context),st(t),null;case 17:return yt(t.type)&&Cl(),st(t),null;case 19:if(Se(Te),i=t.memoizedState,i===null)return st(t),null;if(o=(t.flags&128)!==0,l=i.rendering,l===null)if(o)fs(i,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Nl(e),l!==null){for(t.flags|=128,fs(i,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)i=r,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Te,Te.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ae()>Uo&&(t.flags|=128,o=!0,fs(i,!1),t.lanes=4194304)}else{if(!o)if(e=Nl(l),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),fs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!_e)return st(t),null}else 2*Ae()-i.renderingStartTime>Uo&&r!==1073741824&&(t.flags|=128,o=!0,fs(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ae(),t.sibling=null,r=Te.current,be(Te,o?r&1|2:r&1),t):(st(t),null);case 22:case 23:return eu(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ft&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function m0(e,t){switch(Pc(t),t.tag){case 1:return yt(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bo(),Se(jt),Se(ct),Uc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vc(t),null;case 13:if(Se(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Te),null;case 4:return Bo(),null;case 10:return Dc(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Zi=!1,it=!1,p0=typeof WeakSet=="function"?WeakSet:Set,U=null;function yo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ne(e,t,o)}else r.current=null}function zd(e,t,r){try{r()}catch(o){Ne(e,t,o)}}var Km=!1;function f0(e,t){if(Fd=yl,e=hh(),Nc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,d=-1,c=0,u=0,h=e,g=null;t:for(;;){for(var C;h!==r||s!==0&&h.nodeType!==3||(a=l+s),h!==i||o!==0&&h.nodeType!==3||(d=l+o),h.nodeType===3&&(l+=h.nodeValue.length),(C=h.firstChild)!==null;)g=h,h=C;for(;;){if(h===e)break t;if(g===r&&++c===s&&(a=l),g===i&&++u===o&&(d=l),(C=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=C}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(wd={focusedElem:e,selectionRange:r},yl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,N=_.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?E:Zt(t.type,E),N);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(v){Ne(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return _=Km,Km=!1,_}function Ps(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&zd(t,r,i)}s=s.next}while(s!==o)}}function ea(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Bd(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function m1(e){var t=e.alternate;t!==null&&(e.alternate=null,m1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[Zs],delete t[Ed],delete t[Kg],delete t[Qg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function p1(e){return e.tag===5||e.tag===3||e.tag===4}function Qm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||p1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vd(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=wl));else if(o!==4&&(e=e.child,e!==null))for(Vd(e,t,r),e=e.sibling;e!==null;)Vd(e,t,r),e=e.sibling}function Ud(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ud(e,t,r),e=e.sibling;e!==null;)Ud(e,t,r),e=e.sibling}var Je=null,Gt=!1;function In(e,t,r){for(r=r.child;r!==null;)f1(e,t,r),r=r.sibling}function f1(e,t,r){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Yl,r)}catch{}switch(r.tag){case 5:it||yo(r,t);case 6:var o=Je,s=Gt;Je=null,In(e,t,r),Je=o,Gt=s,Je!==null&&(Gt?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Gt?(e=Je,r=r.stateNode,e.nodeType===8?Ia(e.parentNode,r):e.nodeType===1&&Ia(e,r),Us(e)):Ia(Je,r.stateNode));break;case 4:o=Je,s=Gt,Je=r.stateNode.containerInfo,Gt=!0,In(e,t,r),Je=o,Gt=s;break;case 0:case 11:case 14:case 15:if(!it&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&zd(r,t,l),s=s.next}while(s!==o)}In(e,t,r);break;case 1:if(!it&&(yo(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Ne(r,t,a)}In(e,t,r);break;case 21:In(e,t,r);break;case 22:r.mode&1?(it=(o=it)||r.memoizedState!==null,In(e,t,r),it=o):In(e,t,r);break;default:In(e,t,r)}}function Xm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new p0),t.forEach(function(o){var s=F0.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Yt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,Gt=!1;break e;case 3:Je=a.stateNode.containerInfo,Gt=!0;break e;case 4:Je=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(Je===null)throw Error(A(160));f1(i,l,s),Je=null,Gt=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){Ne(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)h1(t,e),t=t.sibling}function h1(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),nn(e),o&4){try{Ps(3,e,e.return),ea(3,e)}catch(E){Ne(e,e.return,E)}try{Ps(5,e,e.return)}catch(E){Ne(e,e.return,E)}}break;case 1:Yt(t,e),nn(e),o&512&&r!==null&&yo(r,r.return);break;case 5:if(Yt(t,e),nn(e),o&512&&r!==null&&yo(r,r.return),e.flags&32){var s=e.stateNode;try{$s(s,"")}catch(E){Ne(e,e.return,E)}}if(o&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Mf(s,i),pd(a,l);var c=pd(a,i);for(l=0;l<d.length;l+=2){var u=d[l],h=d[l+1];u==="style"?Bf(s,h):u==="dangerouslySetInnerHTML"?$f(s,h):u==="children"?$s(s,h):vc(s,u,h,c)}switch(a){case"input":ad(s,i);break;case"textarea":If(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?To(s,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?To(s,!!i.multiple,i.defaultValue,!0):To(s,!!i.multiple,i.multiple?[]:"",!1))}s[Zs]=i}catch(E){Ne(e,e.return,E)}}break;case 6:if(Yt(t,e),nn(e),o&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(E){Ne(e,e.return,E)}}break;case 3:if(Yt(t,e),nn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Us(t.containerInfo)}catch(E){Ne(e,e.return,E)}break;case 4:Yt(t,e),nn(e);break;case 13:Yt(t,e),nn(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Xc=Ae())),o&4&&Xm(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(it=(c=it)||u,Yt(t,e),it=c):Yt(t,e),nn(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(h=U=u;U!==null;){switch(g=U,C=g.child,g.tag){case 0:case 11:case 14:case 15:Ps(4,g,g.return);break;case 1:yo(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){o=g,r=g.return;try{t=o,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(E){Ne(o,r,E)}}break;case 5:yo(g,g.return);break;case 22:if(g.memoizedState!==null){ep(h);continue}}C!==null?(C.return=g,U=C):ep(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{s=h.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,d=h.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=zf("display",l))}catch(E){Ne(e,e.return,E)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){Ne(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yt(t,e),nn(e),o&4&&Xm(e);break;case 21:break;default:Yt(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(p1(r)){var o=r;break e}r=r.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&($s(s,""),o.flags&=-33);var i=Qm(e);Ud(e,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Qm(e);Vd(e,a,l);break;default:throw Error(A(161))}}catch(d){Ne(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function h0(e,t,r){U=e,x1(e)}function x1(e,t,r){for(var o=(e.mode&1)!==0;U!==null;){var s=U,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Zi;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||it;a=Zi;var c=it;if(Zi=l,(it=d)&&!c)for(U=s;U!==null;)l=U,d=l.child,l.tag===22&&l.memoizedState!==null?tp(s):d!==null?(d.return=l,U=d):tp(s);for(;i!==null;)U=i,x1(i),i=i.sibling;U=s,Zi=a,it=c}Jm(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,U=i):Jm(e)}}function Jm(e){for(;U!==null;){var t=U;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||ea(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Zt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mm(t,i,o);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Mm(t,l,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Us(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}it||t.flags&512&&Bd(t)}catch(g){Ne(t,t.return,g)}}if(t===e){U=null;break}if(r=t.sibling,r!==null){r.return=t.return,U=r;break}U=t.return}}function ep(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var r=t.sibling;if(r!==null){r.return=t.return,U=r;break}U=t.return}}function tp(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ea(4,t)}catch(d){Ne(t,r,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(d){Ne(t,s,d)}}var i=t.return;try{Bd(t)}catch(d){Ne(t,i,d)}break;case 5:var l=t.return;try{Bd(t)}catch(d){Ne(t,l,d)}}}catch(d){Ne(t,t.return,d)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var x0=Math.ceil,Al=Rn.ReactCurrentDispatcher,Kc=Rn.ReactCurrentOwner,$t=Rn.ReactCurrentBatchConfig,de=0,Ke=null,Me=null,et=0,Ft=0,So=ar(0),Ve=0,ei=null,Mr=0,ta=0,Qc=0,As=null,gt=null,Xc=0,Uo=1/0,gn=null,Ml=!1,qd=null,Kn=null,Gi=!1,qn=null,Il=0,Ms=0,Hd=null,cl=-1,ul=0;function pt(){return de&6?Ae():cl!==-1?cl:cl=Ae()}function Qn(e){return e.mode&1?de&2&&et!==0?et&-et:Jg.transition!==null?(ul===0&&(ul=Jf()),ul):(e=fe,e!==0||(e=window.event,e=e===void 0?16:ih(e.type)),e):1}function Jt(e,t,r,o){if(50<Ms)throw Ms=0,Hd=null,Error(A(185));di(e,r,o),(!(de&2)||e!==Ke)&&(e===Ke&&(!(de&2)&&(ta|=r),Ve===4&&Vn(e,et)),St(e,o),r===1&&de===0&&!(t.mode&1)&&(Uo=Ae()+500,Ql&&dr()))}function St(e,t){var r=e.callbackNode;J3(e,t);var o=jl(e,e===Ke?et:0);if(o===0)r!==null&&cm(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&cm(r),t===1)e.tag===0?Xg(np.bind(null,e)):Ch(np.bind(null,e)),Zg(function(){!(de&6)&&dr()}),r=null;else{switch(eh(o)){case 1:r=wc;break;case 4:r=Qf;break;case 16:r=vl;break;case 536870912:r=Xf;break;default:r=vl}r=w1(r,g1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function g1(e,t){if(cl=-1,ul=0,de&6)throw Error(A(327));var r=e.callbackNode;if(Oo()&&e.callbackNode!==r)return null;var o=jl(e,e===Ke?et:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Dl(e,o);else{t=o;var s=de;de|=2;var i=v1();(Ke!==e||et!==t)&&(gn=null,Uo=Ae()+500,Lr(e,t));do try{v0();break}catch(a){b1(e,a)}while(!0);Ic(),Al.current=i,de=s,Me!==null?t=0:(Ke=null,et=0,t=Ve)}if(t!==0){if(t===2&&(s=bd(e),s!==0&&(o=s,t=Yd(e,s))),t===1)throw r=ei,Lr(e,0),Vn(e,o),St(e,Ae()),r;if(t===6)Vn(e,o);else{if(s=e.current.alternate,!(o&30)&&!g0(s)&&(t=Dl(e,o),t===2&&(i=bd(e),i!==0&&(o=i,t=Yd(e,i))),t===1))throw r=ei,Lr(e,0),Vn(e,o),St(e,Ae()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:Fr(e,gt,gn);break;case 3:if(Vn(e,o),(o&130023424)===o&&(t=Xc+500-Ae(),10<t)){if(jl(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){pt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=_d(Fr.bind(null,e,gt,gn),t);break}Fr(e,gt,gn);break;case 4:if(Vn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var l=31-Xt(o);i=1<<l,l=t[l],l>s&&(s=l),o&=~i}if(o=s,o=Ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*x0(o/1960))-o,10<o){e.timeoutHandle=_d(Fr.bind(null,e,gt,gn),o);break}Fr(e,gt,gn);break;case 5:Fr(e,gt,gn);break;default:throw Error(A(329))}}}return St(e,Ae()),e.callbackNode===r?g1.bind(null,e):null}function Yd(e,t){var r=As;return e.current.memoizedState.isDehydrated&&(Lr(e,t).flags|=256),e=Dl(e,t),e!==2&&(t=gt,gt=r,t!==null&&Wd(t)),e}function Wd(e){gt===null?gt=e:gt.push.apply(gt,e)}function g0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!en(i(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Qc,t&=~ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xt(t),o=1<<r;e[r]=-1,t&=~o}}function np(e){if(de&6)throw Error(A(327));Oo();var t=jl(e,0);if(!(t&1))return St(e,Ae()),null;var r=Dl(e,t);if(e.tag!==0&&r===2){var o=bd(e);o!==0&&(t=o,r=Yd(e,o))}if(r===1)throw r=ei,Lr(e,0),Vn(e,t),St(e,Ae()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,gt,gn),St(e,Ae()),null}function Jc(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(Uo=Ae()+500,Ql&&dr())}}function Ir(e){qn!==null&&qn.tag===0&&!(de&6)&&Oo();var t=de;de|=1;var r=$t.transition,o=fe;try{if($t.transition=null,fe=1,e)return e()}finally{fe=o,$t.transition=r,de=t,!(de&6)&&dr()}}function eu(){Ft=So.current,Se(So)}function Lr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Wg(r)),Me!==null)for(r=Me.return;r!==null;){var o=r;switch(Pc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Cl();break;case 3:Bo(),Se(jt),Se(ct),Uc();break;case 5:Vc(o);break;case 4:Bo();break;case 13:Se(Te);break;case 19:Se(Te);break;case 10:Dc(o.type._context);break;case 22:case 23:eu()}r=r.return}if(Ke=e,Me=e=Xn(e.current,null),et=Ft=t,Ve=0,ei=null,Qc=ta=Mr=0,gt=As=null,_r!==null){for(t=0;t<_r.length;t++)if(r=_r[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}_r=null}return e}function b1(e,t){do{var r=Me;try{if(Ic(),ll.current=Pl,Ol){for(var o=ke.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ol=!1}if(Ar=0,Ze=Be=ke=null,Os=!1,Qs=0,Kc.current=null,r===null||r.return===null){Ve=1,ei=t,Me=null;break}e:{var i=e,l=r.return,a=r,d=t;if(t=et,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var C=Um(l);if(C!==null){C.flags&=-257,qm(C,l,a,i,t),C.mode&1&&Vm(i,c,t),t=C,d=c;var _=t.updateQueue;if(_===null){var E=new Set;E.add(d),t.updateQueue=E}else _.add(d);break e}else{if(!(t&1)){Vm(i,c,t),tu();break e}d=Error(A(426))}}else if(_e&&a.mode&1){var N=Um(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),qm(N,l,a,i,t),Ac(Vo(d,a));break e}}i=d=Vo(d,a),Ve!==4&&(Ve=2),As===null?As=[i]:As.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=t1(i,d,t);Am(i,b);break e;case 1:a=d;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Kn===null||!Kn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=n1(i,a,t);Am(i,v);break e}}i=i.return}while(i!==null)}y1(r)}catch(S){t=S,Me===r&&r!==null&&(Me=r=r.return);continue}break}while(!0)}function v1(){var e=Al.current;return Al.current=Pl,e===null?Pl:e}function tu(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ke===null||!(Mr&268435455)&&!(ta&268435455)||Vn(Ke,et)}function Dl(e,t){var r=de;de|=2;var o=v1();(Ke!==e||et!==t)&&(gn=null,Lr(e,t));do try{b0();break}catch(s){b1(e,s)}while(!0);if(Ic(),de=r,Al.current=o,Me!==null)throw Error(A(261));return Ke=null,et=0,Ve}function b0(){for(;Me!==null;)j1(Me)}function v0(){for(;Me!==null&&!q3();)j1(Me)}function j1(e){var t=F1(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?y1(e):Me=t,Kc.current=null}function y1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=m0(r,t),r!==null){r.flags&=32767,Me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Me=null;return}}else if(r=u0(r,t,Ft),r!==null){Me=r;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Ve===0&&(Ve=5)}function Fr(e,t,r){var o=fe,s=$t.transition;try{$t.transition=null,fe=1,j0(e,t,r,o)}finally{$t.transition=s,fe=o}return null}function j0(e,t,r,o){do Oo();while(qn!==null);if(de&6)throw Error(A(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(eg(e,i),e===Ke&&(Me=Ke=null,et=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gi||(Gi=!0,w1(vl,function(){return Oo(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=$t.transition,$t.transition=null;var l=fe;fe=1;var a=de;de|=4,Kc.current=null,f0(e,r),h1(r,e),zg(wd),yl=!!Fd,wd=Fd=null,e.current=r,h0(r),H3(),de=a,fe=l,$t.transition=i}else e.current=r;if(Gi&&(Gi=!1,qn=e,Il=s),i=e.pendingLanes,i===0&&(Kn=null),Z3(r.stateNode),St(e,Ae()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ml)throw Ml=!1,e=qd,qd=null,e;return Il&1&&e.tag!==0&&Oo(),i=e.pendingLanes,i&1?e===Hd?Ms++:(Ms=0,Hd=e):Ms=0,dr(),null}function Oo(){if(qn!==null){var e=eh(Il),t=$t.transition,r=fe;try{if($t.transition=null,fe=16>e?16:e,qn===null)var o=!1;else{if(e=qn,qn=null,Il=0,de&6)throw Error(A(331));var s=de;for(de|=4,U=e.current;U!==null;){var i=U,l=i.child;if(U.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(U=c;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:Ps(8,u,i)}var h=u.child;if(h!==null)h.return=u,U=h;else for(;U!==null;){u=U;var g=u.sibling,C=u.return;if(m1(u),u===c){U=null;break}if(g!==null){g.return=C,U=g;break}U=C}}}var _=i.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var N=E.sibling;E.sibling=null,E=N}while(E!==null)}}U=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,U=l;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ps(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,U=b;break e}U=i.return}}var m=e.current;for(U=m;U!==null;){l=U;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,U=p;else e:for(l=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ea(9,a)}}catch(S){Ne(a,a.return,S)}if(a===l){U=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,U=v;break e}U=a.return}}if(de=s,dr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Yl,e)}catch{}o=!0}return o}finally{fe=r,$t.transition=t}}return!1}function rp(e,t,r){t=Vo(r,t),t=t1(e,t,1),e=Gn(e,t,1),t=pt(),e!==null&&(di(e,1,t),St(e,t))}function Ne(e,t,r){if(e.tag===3)rp(e,e,r);else for(;t!==null;){if(t.tag===3){rp(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kn===null||!Kn.has(o))){e=Vo(r,e),e=n1(t,e,1),t=Gn(t,e,1),e=pt(),t!==null&&(di(t,1,e),St(t,e));break}}t=t.return}}function y0(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&r,Ke===e&&(et&r)===r&&(Ve===4||Ve===3&&(et&130023424)===et&&500>Ae()-Xc?Lr(e,0):Qc|=r),St(e,t)}function S1(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var r=pt();e=Cn(e,t),e!==null&&(di(e,t,r),St(e,r))}function S0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),S1(e,r)}function F0(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),S1(e,r)}var F1;F1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)vt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return vt=!1,c0(e,t,r);vt=!!(e.flags&131072)}else vt=!1,_e&&t.flags&1048576&&_h(t,Tl,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;dl(e,t),e=t.pendingProps;var s=Do(t,ct.current);No(t,r),s=Hc(null,t,o,e,s,r);var i=Yc();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(o)?(i=!0,_l(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zc(t),s.updater=Xl,t.stateNode=s,s._reactInternals=t,Od(t,o,e,r),t=Md(null,t,o,!0,i,r)):(t.tag=0,_e&&i&&Oc(t),mt(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(dl(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=C0(o),e=Zt(o,e),s){case 0:t=Ad(null,t,o,e,r);break e;case 1:t=Wm(null,t,o,e,r);break e;case 11:t=Hm(null,t,o,e,r);break e;case 14:t=Ym(null,t,o,Zt(o.type,e),r);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),Ad(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),Wm(e,t,o,s,r);case 3:e:{if(i1(t),e===null)throw Error(A(387));o=t.pendingProps,i=t.memoizedState,s=i.element,Rh(e,t),Ll(t,o,null,r);var l=t.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Vo(Error(A(423)),t),t=Zm(e,t,o,r,s);break e}else if(o!==s){s=Vo(Error(A(424)),t),t=Zm(e,t,o,r,s);break e}else for(Ct=Zn(t.stateNode.containerInfo.firstChild),Et=t,_e=!0,Qt=null,r=Ph(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($o(),o===s){t=_n(e,t,r);break e}mt(e,t,o,r)}t=t.child}return t;case 5:return Ah(t),e===null&&Rd(t),o=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,Cd(o,s)?l=null:i!==null&&Cd(o,i)&&(t.flags|=32),s1(e,t),mt(e,t,l,r),t.child;case 6:return e===null&&Rd(t),null;case 13:return l1(e,t,r);case 4:return Bc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=zo(t,null,o,r):mt(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),Hm(e,t,o,s,r);case 7:return mt(e,t,t.pendingProps,r),t.child;case 8:return mt(e,t,t.pendingProps.children,r),t.child;case 12:return mt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,be(kl,o._currentValue),o._currentValue=l,i!==null)if(en(i.value,l)){if(i.children===s.children&&!jt.current){t=_n(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=yn(-1,r&-r),d.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?d.next=d:(d.next=u.next,u.next=d),c.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),Ld(i.return,r,t),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ld(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}mt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,No(t,r),s=zt(s),o=o(s),t.flags|=1,mt(e,t,o,r),t.child;case 14:return o=t.type,s=Zt(o,t.pendingProps),s=Zt(o.type,s),Ym(e,t,o,s,r);case 15:return r1(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),dl(e,t),t.tag=1,yt(o)?(e=!0,_l(t)):e=!1,No(t,r),Nh(t,o,s),Od(t,o,s,r),Md(null,t,o,!0,e,r);case 19:return a1(e,t,r);case 22:return o1(e,t,r)}throw Error(A(156,t.tag))};function w1(e,t){return Kf(e,t)}function w0(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,r,o){return new w0(e,t,r,o)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C0(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yc)return 11;if(e===Sc)return 14}return 2}function Xn(e,t){var r=e.alternate;return r===null?(r=Dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ml(e,t,r,o,s,i){var l=2;if(o=e,typeof e=="function")nu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mo:return Nr(r.children,s,i,t);case jc:l=8,s|=8;break;case rd:return e=Dt(12,r,t,s|2),e.elementType=rd,e.lanes=i,e;case od:return e=Dt(13,r,t,s),e.elementType=od,e.lanes=i,e;case sd:return e=Dt(19,r,t,s),e.elementType=sd,e.lanes=i,e;case Of:return na(r,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lf:l=10;break e;case Nf:l=9;break e;case yc:l=11;break e;case Sc:l=14;break e;case $n:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Dt(l,r,t,s),t.elementType=e,t.type=o,t.lanes=i,t}function Nr(e,t,r,o){return e=Dt(7,e,o,t),e.lanes=r,e}function na(e,t,r,o){return e=Dt(22,e,o,t),e.elementType=Of,e.lanes=r,e.stateNode={isHidden:!1},e}function Ha(e,t,r){return e=Dt(6,e,null,t),e.lanes=r,e}function Ya(e,t,r){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _0(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ru(e,t,r,o,s,i,l,a,d){return e=new _0(e,t,r,a,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(i),e}function E0(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function C1(e){if(!e)return tr;e=e._reactInternals;e:{if(Hr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(yt(r))return wh(e,r,t)}return t}function _1(e,t,r,o,s,i,l,a,d){return e=ru(r,o,!0,e,s,i,l,a,d),e.context=C1(null),r=e.current,o=pt(),s=Qn(r),i=yn(o,s),i.callback=t??null,Gn(r,i,s),e.current.lanes=s,di(e,s,o),St(e,o),e}function ra(e,t,r,o){var s=t.current,i=pt(),l=Qn(s);return r=C1(r),t.context===null?t.context=r:t.pendingContext=r,t=yn(i,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Gn(s,t,l),e!==null&&(Jt(e,s,l,i),il(e,s,l)),l}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ou(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function T0(){return null}var E1=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}oa.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ra(e,t,null,null)};oa.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ir(function(){ra(null,e,null,null)}),t[wn]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=rh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Bn.length&&t!==0&&t<Bn[r].priority;r++);Bn.splice(r,0,e),r===0&&sh(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function k0(e,t,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var c=$l(l);i.call(c)}}var l=_1(t,o,e,0,null,!1,!1,"",sp);return e._reactRootContainer=l,e[wn]=l.current,Ys(e.nodeType===8?e.parentNode:e),Ir(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var c=$l(d);a.call(c)}}var d=ru(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=d,e[wn]=d.current,Ys(e.nodeType===8?e.parentNode:e),Ir(function(){ra(t,d,r,o)}),d}function ia(e,t,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=$l(l);a.call(d)}}ra(t,l,e,s)}else l=k0(r,t,e,s,o);return $l(l)}th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ws(t.pendingLanes);r!==0&&(Cc(t,r|1),St(t,Ae()),!(de&6)&&(Uo=Ae()+500,dr()))}break;case 13:Ir(function(){var o=Cn(e,1);if(o!==null){var s=pt();Jt(o,e,1,s)}}),ou(e,1)}};_c=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var r=pt();Jt(t,e,134217728,r)}ou(e,134217728)}};nh=function(e){if(e.tag===13){var t=Qn(e),r=Cn(e,t);if(r!==null){var o=pt();Jt(r,e,t,o)}ou(e,t)}};rh=function(){return fe};oh=function(e,t){var r=fe;try{return fe=e,t()}finally{fe=r}};hd=function(e,t,r){switch(t){case"input":if(ad(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=Kl(o);if(!s)throw Error(A(90));Af(o),ad(o,s)}}}break;case"textarea":If(e,r);break;case"select":t=r.value,t!=null&&To(e,!!r.multiple,t,!1)}};qf=Jc;Hf=Ir;var R0={usingClientEntryPoint:!1,Events:[ui,xo,Kl,Vf,Uf,Jc]},hs={findFiberByHostInstance:Cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},L0={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zf(e),e===null?null:e.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{Yl=Ki.inject(L0),dn=Ki}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;Rt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(A(200));return E0(e,t,null,r)};Rt.createRoot=function(e,t){if(!iu(e))throw Error(A(299));var r=!1,o="",s=E1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ru(e,1,!1,null,null,r,!1,o,s),e[wn]=t.current,Ys(e.nodeType===8?e.parentNode:e),new su(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Zf(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Ir(e)};Rt.hydrate=function(e,t,r){if(!sa(t))throw Error(A(200));return ia(null,e,t,!0,r)};Rt.hydrateRoot=function(e,t,r){if(!iu(e))throw Error(A(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=E1;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=_1(t,null,e,1,r??null,s,!1,i,l),e[wn]=t.current,Ys(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new oa(t)};Rt.render=function(e,t,r){if(!sa(t))throw Error(A(200));return ia(null,e,t,!1,r)};Rt.unmountComponentAtNode=function(e){if(!sa(e))throw Error(A(40));return e._reactRootContainer?(Ir(function(){ia(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Jc;Rt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!sa(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ia(e,t,r,!1,o)};Rt.version="18.2.0-next-9e3b772b8-20220608";function T1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T1)}catch(e){console.error(e)}}T1(),_f.exports=Rt;var lu=_f.exports;const N0=Ur(lu),O0=hf({__proto__:null,default:N0},[lu]);var ip=lu;td.createRoot=ip.createRoot,td.hydrateRoot=ip.hydrateRoot;var P0=Object.defineProperty,A0=(e,t,r)=>t in e?P0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wa=(e,t,r)=>A0(e,typeof t!="symbol"?t+"":t,r);function M0(e={},t={},r={}){return Object.entries(t).reduce((o,[s,i])=>{const l=r[i];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function I0(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((r,o)=>{const s=e[o]||B0(`Cannot expose non-existent action method: ${o}`);return r[o]=s.bind(e),r},{})}function D0(e,t){const r=e.debug??t.debug,o=lp(e.debugPrefix??t.debugPrefix,e),s=lp(e.debugColor??t.debugColor,e);return r?o?(i,...l)=>console.log(`%c${o}%c${i}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function $0(e){return Array.isArray(e)}function k1(e){return typeof e=="function"}function lp(e,t){return k1(e)?e(t):e}function z0(e){return $0(e)?e:[e]}function B0(...e){throw new Error(e.join(""))}const au=(e,t={},r=lt.createContext(t))=>({Context:r,Provider:o=>n.jsx(e,{...o,render:s=>n.jsx(r.Provider,{value:s,children:o.children})}),Consumer:o=>s=>n.jsx(r.Consumer,{children:i=>n.jsx(o,{...i,...s})}),Children:({children:o})=>z0(o).map((s,i)=>k1(s)?n.jsx(r.Consumer,{children:s},i):s),Use:()=>lt.useContext(r)});let pl=class extends lt.Component{constructor(t){super(t);const r=this.constructor;this.debug=D0(t,r),this.state=M0(r.initialState,r.initialProps,t),this.actions=I0(this,r.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Wa(pl,"initialState",{}),Wa(pl,"initialProps",{}),Wa(pl,"actions",[]);function du(e){return typeof e=="boolean"}function cr(e){return typeof e=="string"}function V0(e){return typeof e=="number"}function ti(e){return Array.isArray(e)}function la(e){return typeof e=="function"}function U0(e){return e instanceof RegExp}function Xo(e){return typeof e=="object"&&!ti(e)&&!R1(e)}function q0(e){return cr(e)||V0(e)||du(e)}function H0(e){return e===void 0}function R1(e){return e===null}function wt(e){return!(H0(e)||R1(e))}function Y0(e){return!wt(e)}function cu(...e){throw new Error(e.join(""))}const ap=(e,...t)=>la(e)?e(...t):e;function Po(){}function W0(){return Intl.DateTimeFormat().resolvedOptions().locale}W0();function L1(e,t=/,\s*|\s+/){return Y0(e)?[]:cr(e)?e.length?e.split(t):[]:ti(e)?e:[e]}function N1(e,t=!0,r={}){return Xo(e)?e:L1(e).reduce((o,s)=>(o[s]=la(t)?t(s):t,o),r)}function Z0(e){if(la(e))return e;if(U0(e))return t=>e.test(t);if(Xo(e))return t=>!!e[t];if(ti(e)||cr(e)){const t=N1(e);return r=>!!t[r]}cu("Invalid selector() specification: "+e)}const G0=(e,t,r={})=>{let o={},s={delete:!1,...r};const i=Z0(t);return Object.keys(e).map(l=>{if(i(l)){let a=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(a=s.value(a)),o[l]=a}}),o};function mn(e){return new Promise(t=>setTimeout(t,e))}const K0="",Q0="blur",pi="changed",O1="controls",X0="disabled",aa="focus",J0="fulfilled",fi="invalid",P1="Optional",e4="radio",A1="Required",t4="A value is required",dp="reset",hi="submitted",Jo="submitting",uu="text",n4="unvalidated",xi="valid",ur="validating",r4=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],o4=["id","name","action","method","encType"];let M1=class extends pl{constructor(t){super(t),this.newStatus=this.constructor.newStatus(t),this.state={status:this.newStatus(dp)}}setStatus(t,r={},o=Po){this.mounted&&this.setState(s=>({...la(r)?r(s):r,status:this.newStatus(t,s.status)}),o)}setResetState(t,r){this.setStatus(dp,t,r)}setChangedState(t,r){this.setStatus(pi,t,r)}setValidatingState(t,r){this.setStatus(ur,t,r)}setInvalidState(t,r){this.setStatus(fi,t,r)}setValidState(t,r){this.setStatus(xi,t,r)}setUnvalidatedState(t,r){this.setStatus(n4,t,r)}};function I1(e,t){return t.reduce((r,o)=>{const s=e[o]||e[o.toLowerCase()];return wt(s)&&(r[o]=s),r},{})}const da=e=>I1(e,r4),s4=e=>I1(e,o4),D1=e=>e.filter(wt).join(" "),i4=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),pn=(...e)=>D1(e.flatMap(t=>Xo(t)?i4(t):t)),ca=(e,...t)=>pn(e.inputClass,e.inline&&"inline",...t),Fo=(e,t,r=t)=>(e==null?void 0:e[t])||r,l4=(e,t={},...r)=>D1(Object.entries(e).reduce((o,[s,i])=>(i&&o.push(t[s]||s),o),[...r])),$1=e=>{const{status:t,className:r,classes:o,required:s,showRequired:i,showOptional:l}=e;return l4(t,o,Fo(o,"field"),r,i&&s?"required":null,l&&!s?"optional":null)},z1=(e,...t)=>{const{gap:r,space:o,stack:s,className:i}=e;return i||(o?pn("flex","space",...t):pn("flex",r?`gap-v-none gap-h-${r}`:null,s?`stack-${s}`:null,...t))},a4=(e,...t)=>{const{grid:r,gap:o,stack:s,className:i}=e;return i||(r?pn(`grid-${r}`,o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t):pn(...t))},d4={boolean:!0,string:!0,number:!0},B1=e=>d4[typeof e]?{value:e,text:e}:e,zl=(...e)=>function(...t){for(let r of e.filter(Boolean))r(...t)};function cp(e){if(du(e))return[1,!1];if(wt(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const c4=(e,t)=>cr(e)?{[t]:e}:e,V1=e=>e.replaceAll(/\W+/g,"").toLowerCase(),u4={submittingClass:Jo,validatingClass:ur,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},up={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:t4,requiredLabel:A1,optionalLabel:P1},m4=N1(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),qo={[xi]:!1,[fi]:!1},p4={...qo,[pi]:!0},f4={...qo,[ur]:!0},h4={[xi]:!1,[fi]:!0,[ur]:!1},x4={[xi]:!0,[fi]:!1,[ur]:!1},g4={[aa]:!1},b4={[aa]:!0},v4={[Jo]:!0,[hi]:!1},j4={[Jo]:!1,[hi]:!0},U1={changed:p4,validating:f4,invalid:h4,valid:x4},q1=e=>(t,r={})=>({...r,...e[t]||{[t]:!0}}),y4=()=>{const e={...qo,[pi]:!1,[ur]:!1,[hi]:!1,[Jo]:!1};return q1({...U1,reset:e,submitting:v4,submitted:j4,unvalidated:qo})},S4=(e={})=>{const t={...qo,[pi]:!1,[ur]:!1,[aa]:!1,[X0]:e.disabled||!1};return q1({...U1,reset:t,focus:b4,blur:g4,unvalidated:qo})},F4=({status:e,any:t=!1,...r})=>{const o=[pi,ur,xi,fi,Jo,hi].filter(s=>wt(r[s])).map(s=>e[s]);return t?o.some(Boolean):o.every(Boolean)};class lo extends M1{constructor(t){super(t),this.fields={};const{hidden:r={}}=t,o={...r},s={...u4,...this.props};this.state={...s,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,r){var i,l;const o=((i=this.props.fields)==null?void 0:i[t])??{},s=r.value??((l=this.props.values)==null?void 0:l[t]);return{name:t,...G0(this.props,m4),...o,...r,value:s}}attachField(t,r){this.debug(`attaching ${t} field`),this.fields[t]=r,this.setState(o=>({values:{...o.values,[t]:r.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,r){this.setStatus(Jo,t,r)}setSubmittedState(t,r){this.setStatus(hi,t,r)}setFocus(t,r){var o;r==null||r.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,r){this.debug(`setValue(${t}, ${r})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:r}}))}setValues(t,r){this.debug("setValues():",t),r==null||r.preventDefault(),Object.entries(t).forEach(([o,s])=>{var i;return(i=this.fields[o])==null?void 0:i.setValue(s)})}setHidden(t){const r={...this.state.hidden,...t};this.setState({hidden:r})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(r=>this.handleSubmit(r)).catch(r=>this.debug("Form is NOT valid:",r))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,r)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((s,{status:i,value:l,reason:a})=>(i===J0?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(a),s),{values:{...this.state.values},errors:[]})).then(o=>{var s;return this.debug("field validation complete: ",o),(s=o.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",o),r(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(i=>t({...o,values:i})).catch(i=>r(i))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const r=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",r),this.setSubmittedState(),r!=null&&r.ok||(r==null?void 0:r.status)===200)this.debug(`Success response ok:${r==null?void 0:r.ok} status:${r==null?void 0:r.status}`),this.handleSuccess(r);else if((r==null?void 0:r.status)>=400&&r.status<=500)this.debug(`Error response status:${r==null?void 0:r.status}`),this.handleError(r.data);else throw new Error(`Unknown response: ${r==null?void 0:r.status}`)}catch(r){this.debug("onSubmit error:",r),this.setSubmittedState(),this.handleError(cr(r)?{error:r}:r instanceof Error?{error:r.message}:r)}})}handleSuccess(t){this.debug("handleSuccess()",t);const r=this.props.onSuccess||Po;this.setValidState({},zl(()=>r(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const r=ti(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||Po;this.setInvalidState(t,zl(()=>o(t),r?()=>r.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const r=t.reduce((o,s)=>{const i=s.name??s.param??s.field,{message:l}=s,a=i&&this.fields[i];return a&&(s.label||(s.label=a.props.label),a.setInvalidState({message:l}),o.push(a)),o},[]);return this.state.focusInvalidField&&r.length?r[0]:null}sanitiseErrors(t){if(Xo(t)&&(t=Object.entries(t).map(([r,o])=>({name:r,...c4(o,"message")}))),!ti(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(r=>r.message??(r.message=r.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}Ht(lo,"newStatus",y4),Ht(lo,"debug",!1),Ht(lo,"debugPrefix","Form > "),Ht(lo,"debugColor","rebeccapurple"),Ht(lo,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const w4=au(lo),{Context:CM,Provider:C4,Consumer:_4,Children:E4,Use:fn}=w4,T4=({children:e})=>{const t=fn(),r=s4(t),{submit:o,className:s}=t;return n.jsx("form",{className:s,...r,onSubmit:o,noValidate:!0,children:n.jsx(E4,{children:e})})},y=({children:e,Layout:t=T4,...r})=>n.jsx(C4,{...r,children:n.jsx(t,{children:e})}),k4=e=>{const{id:t,value:r}=e;return{...e,id:t||T.useId(),value:r??e.default??K0}};class ao extends M1{constructor(t){super(t),this.name=t.name;const{value:r}=t,o=r;this.form=this.props.form,this.state={...this.state,initialValue:o,value:r,error:null},this.debug("initial state:",this.state),this.inputRef=T.createRef(),this.resetRef=T.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):Po}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,r){return this.setStatus(aa,t,r)}setBlurState(t,r){return this.setStatus(Q0,t,r)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var r,o;t==null||t.preventDefault(),(o=(r=this.inputRef)==null?void 0:r.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const r=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:s,validateOnInvalid:i=!0,minValidateLength:l=1}=this.props,[a]=cp(r);let d=s||i&&o;a<l&&!o&&(d=!1),this.setChangedState({value:r},()=>{this.form.setValue(this.props.name,r),d?this.validation(this.on.change):this.on.change()})}setValue(t,r){r==null||r.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const r=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${r}`),this.form.setValue(this.props.name,r),this.setResetState({value:r,message:this.props.message},()=>{var o,s;return(s=(o=this.resetRef)==null?void 0:o.current)==null?void 0:s.reset()}),r}validation(t){this.validate(t).then(Po).catch(Po)}validate(t){this.debug("validate()");const r={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,zl(this.on.valid,t)),{...r,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,zl(this.on.invalid,t)),{...r,...o}})}validator(){return async(t,r)=>{const{value:o=""}=this.state,{validate:s,required:i,optional:l,requiredMessage:a,validMessage:d}={...up,...this.props},[,c]=cp(o);if(this.setValidatingState(),s)return c&&l?(this.debug("optional field is empty"),t({value:o,message:d})):await this.validateValidator(t,r,s,d);if(c)return await this.validateEmpty(t,r,i,d,a);this.debug("no validation defined"),t({value:o,message:d})}}async validateValidator(t,r,o,s){this.debug("calling validate function");const i=this.getContext();try{this.debug(`calling validate function with value [${i.value}]`);const l=await o(i.value,i,t,r);this.debug("validate function passed:",l),t(Xo(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const a=cr(l)?l:l.message;this.debug("rejecting with message:",a),r({message:a})}}validateEmpty(t,r,o,s,i){o?(this.debug("failing validation - required field is empty"),r({message:i})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,r){r==null||r.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,r){r==null||r.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...up,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}Ht(ao,"newStatus",S4),Ht(ao,"debug",!1),Ht(ao,"debugPrefix",t=>`Field [${t.name}] > `),Ht(ao,"debugColor","teal"),Ht(ao,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const R4=au(ao),{Context:_M,Provider:L4,Consumer:EM,Children:H1,Use:rt}=R4,Yr=({field:e=rt()})=>{const{label:t,id:r,required:o,optional:s}=e,i=e.showRequired&&o,l=e.showOptional&&(s||!o),a=t||i||l,d=e.labelClass,c={};return i&&e.requiredLabel!==A1&&(c["--required-text"]=`"${e.requiredLabel}"`),l&&e.optionalLabel!==P1&&(c["--optional-text"]=`"${e.optionalLabel}"`),a&&n.jsx("label",{htmlFor:r,className:d,style:c,children:t||n.jsx("span",{children:" "})})},N4=({field:e=rt()})=>n.jsx("div",{className:pn("prefix",e.prefixClass),children:e.prefix}),O4=({field:e=rt()})=>n.jsx("div",{className:pn("suffix",e.suffixClass),children:e.suffix}),P4=e=>t=>e.onChange(t.target.value),A4=e=>t=>e.onChange(t.target.checked),nr={default:P4,checkbox:A4},M4=({field:e=rt()})=>{const{id:t,text:r,inline:o,border:s,labelClass:i,type:l="checkbox",switch:a,round:d,square:c,handler:u=nr[l]||nr.default}=e,h=da(e),g=pn("checkbox",i,{inline:o,border:s});return n.jsxs("label",{htmlFor:t,className:g,children:[n.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:u(e),className:ca(e,{round:d,square:c}),...h,checked:e.value,role:a?"switch":""}),r]})},Y1=({field:e=rt()})=>n.jsx("input",{type:"hidden",name:e.name,value:e.value}),I4=({field:e=rt()})=>{const{inline:t,border:r,options:o=[],inputClass:s,optionClass:i,optionsClass:l="options",type:a="radio",handler:d=nr[a]||nr.default}=e,c=da(e);return n.jsx("div",{className:pn(l),children:o.map((u,h)=>{u=B1(u);const g=`${e.id}-${u.value}`,C=e.value==u.value,E=(e.value?C:h==0)?e.inputRef:null,N=pn("radio",i,u.className,{inline:t,border:r});return n.jsxs("label",{className:N,disabled:u.disabled,htmlFor:g,children:[n.jsx("input",{type:a,className:s,ref:E,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:d(e),...c,id:g,checked:C,value:u.value}),u.text]},u.value)})})},D4=({field:e=rt()})=>{const{options:t=[],placeholder:r,type:o="select",optionClass:s="option",handler:i=nr[o]||nr.default}=e,l=da(e);return n.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:ca(e),onChange:i(e),...l,value:e.value,required:e.required||!!r,children:[!!r&&n.jsx("option",{value:"",hidden:!0,disabled:!0,children:r}),t.map(a=>(a=B1(a),n.jsx("option",{className:s,value:a.value,disabled:a.disabled,children:a.text},a.value)))]})},ni=({field:e=rt()})=>{const{type:t=uu,handler:r=nr[t]||nr.default}=e,o=da(e);return n.jsx("input",{type:t,ref:e.inputRef,className:ca(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:r(e),...o})},$4=({field:e=rt()})=>{const{rows:t=5,cols:r=20}=e;return n.jsx("textarea",{id:e.id,ref:e.inputRef,className:ca(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,onSelect:e.onSelect,rows:t,cols:r})},Zd={default:ni,checkbox:M4,hidden:Y1,radio:I4,select:D4,text:ni,textarea:$4},z4=(e,t)=>Zd[V1(e)]=t,W1=(e="text")=>Zd[V1(e)]||Zd.default,B4=({field:e=rt()})=>{const{classes:t,prefix:r,suffix:o,inputsClass:s,inline:i,type:l=uu,Prefix:a=N4,Suffix:d=O4}=e,c=W1(l);let u=[Fo(t,"inputs")];wt(r)&&u.push(Fo(t,"prefixed")),wt(o)&&u.push(Fo(t,"suffixed")),i&&u.push(Fo(t,"inline")),wt(s)&&u.push(s);const h=u.join(" ");return n.jsxs("div",{className:h,children:[wt(r)&&n.jsx(a,{field:e}),n.jsx(c,{field:e}),wt(o)&&n.jsx(d,{field:e})]})},ua=({field:e=rt()})=>{const{prefix:t,suffix:r,type:o=uu}=e,s=W1(o);return o==e4?n.jsx(s,{field:e}):wt(t)||wt(r)?n.jsx(B4,{}):n.jsx(s,{field:e})},gi=({field:e=rt()})=>{const{help:t,message:r,classes:o}=e,s=r??t,i=Fo(o,"help");return s?n.jsx("div",{className:i,children:s}):null},mr=({field:e=rt(),children:t})=>{const{type:r,Label:o=Yr,Message:s=gi,Input:i=ua}=e,l=$1(e);return r==="hidden"?n.jsx(Y1,{field:e}):n.jsx("div",{className:l,children:t||n.jsxs(n.Fragment,{children:[n.jsx(o,{field:e}),n.jsx(i,{field:e}),n.jsx(s,{field:e})]})})},f=({name:e,children:t,...r})=>{const o=fn(),s=k4(o.fieldSpec(e,r)),i=s.Layout||mr;return n.jsx(L4,{form:o,...s,children:t?n.jsx(H1,{children:t}):n.jsx(i,{})})},nt=({names:e,className:t,grid:r=!1,gap:o=4,stack:s,...i})=>{const l=L1(e);return du(r)&&r&&(r=l.length),n.jsx("div",{className:a4({grid:r,gap:o,stack:s,props:i},t),children:l.map(a=>n.jsx(f,{name:a,...i},a))})},Dr=({className:e="",legend:t,children:r,fields:o,...s})=>n.jsxs("fieldset",{className:e,children:[!!t&&n.jsx("legend",{children:t}),!!o&&n.jsx(nt,{names:o,...s}),r]}),V4=({children:e,...t})=>F4(t)&&e,Ln=_4(V4),U4=e=>n.jsx(Ln,{changed:!0,...e}),Nt=({values:e=!0,status:t=!1,all:r=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:s="Form Debugging",valuesTitle:i="Values",statusTitle:l="Status",...a})=>{const d=fn();return n.jsxs("div",{className:o,children:[s&&n.jsx("h3",{className:"mar-v-none",children:s}),n.jsxs("div",{className:"grid-1 gap-4",children:[e&&n.jsxs("div",{children:[i&&n.jsx("h4",{className:"mar-v-none",children:i}),n.jsx(mp,{rows:Object.entries(d.values),...a})]}),(t||r)&&d.status&&n.jsxs("div",{children:[l&&n.jsx("h4",{children:l}),n.jsx(mp,{title:"Status",rows:Object.entries(d.status),...a})]})]})]})},mp=({rows:e,children:t,color:r="brand",tableClass:o=`${r} shaded celled wide small pad-none mar-b-0`,...s})=>n.jsx("table",{className:o,children:n.jsx("tbody",{children:t||e.map(([i,l])=>n.jsx(q4,{name:i,value:l,...s},i))})}),q4=({name:e,value:t,keyClass:r="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>n.jsxs("tr",{valign:"top",children:[n.jsx("th",{className:r,children:e}),n.jsx("td",{className:o,children:n.jsx(H4,{value:t})})]}),H4=({value:e})=>wt(e)?q0(e)?e.toString():JSON.stringify(e):"",Y4=({error:e})=>{const t=e.label||e.name;return n.jsxs(n.Fragment,{children:[!!t&&n.jsxs("b",{children:[t,": "]}),e.message]})},W4=({error:e})=>cr(e)?e:n.jsx(Y4,{error:e}),Ue=({form:e=fn(),title:t=e.errorsTitle,prompt:r=e.errorsPrompt,fieldErrors:o=!1,className:s="error alert border"})=>{const{error:i,errors:l,Error:a=W4}=e,d=!!i,c=(o?l.length:0)+(d?1:0);return c!==0?n.jsxs("div",{className:s,children:[!!t&&n.jsx("div",{className:"headline",children:ap(t,c)}),n.jsxs("div",{children:[d&&n.jsx("h4",{children:n.jsx(a,{error:i})}),o&&l.length!==0&&n.jsxs(n.Fragment,{children:[!!r&&n.jsx("p",{className:"wide",children:ap(r,l.length)}),n.jsx("ul",{children:l.map((h,g)=>n.jsx("li",{children:n.jsx(a,{error:h})},g))})]})]})]}):null},Z4=({children:e})=>n.jsx(H1,{children:e}),ma=({onClick:e,children:t,text:r="Button",type:o="button",...s})=>n.jsx("button",{type:o,onClick:e,...s,children:t||r}),G4=({text:e="Cancel",className:t="cancel",Button:r=ma,...o})=>n.jsx(r,{text:e,className:t,...o}),pr=({type:e="reset",text:t="Reset",className:r="reset",Button:o=ma,...s})=>{const{reset:i}=fn();return n.jsx(o,{type:e,text:t,className:r,onClick:i,...s})},W=({type:e="submit",text:t="Submit",className:r="submit",Button:o=ma,...s})=>{const{submit:i,status:l}=fn();return n.jsx(o,{type:e,text:t,className:r,onClick:i,disabled:l.submitting,...s})},Wr=({className:e,gap:t=4,space:r=!1,size:o,cancel:s={},submit:i={}})=>n.jsxs("div",{className:z1({className:e,gap:t,space:r},o,O1),children:[n.jsx(G4,{...s}),n.jsx(W,{...i})]}),ue=({className:e,gap:t=4,space:r=!1,size:o,reset:s={},submit:i={}})=>n.jsxs("div",{className:z1({className:e,gap:t,space:r},o,O1),children:[n.jsx(pr,{...s}),n.jsx(W,{...i})]}),K4=()=>{const[e,t]=lt.useState(!1),[r,o]=lt.useState({name:"Brian",animal:"Badger"}),s=i=>(o(i),t(!1),{ok:!0});return e?n.jsxs(y,{values:r,onSubmit:s,children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"animal",label:"Animal"}),n.jsx(Wr,{space:!0,cancel:{onClick:()=>t(!1),className:"grey outline"},submit:{className:"green"}})]}):n.jsxs("div",{className:"flex space",children:[n.jsxs("h3",{children:[r.name," ",r.animal]}),n.jsx(ma,{text:"Edit",onClick:()=>t(!0),className:"blue"})]})},Q4=`import { Form, Field, Button, CancelSubmit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Button, CancelSubmit } from '@abw/badger-form'

const ResetSubmitExample = () => {
  const [editing, setEditing] = React.useState(false)
  const [data, setData] = React.useState({
    name: 'Brian',
    animal: 'Badger'
  })
  const onSubmit = values => {
    setData(values)
    setEditing(false)
    return { ok: true }
  }
  return editing
    ? <Form values={data} onSubmit={onSubmit}>
        <Field name="name"  label="Name"/>
        <Field name="animal" label="Animal"/>
        <CancelSubmit
          space
          cancel={{
            onClick: () => setEditing(false),
            className: 'grey outline'
          }}
          submit={{
            className: 'green'
          }}
        />
      </Form>
    : <div className="flex space">
        <h3>{data.name} {data.animal}</h3>
        <Button
          text="Edit"
          onClick={() => setEditing(true)}
          className="blue"
        />
      </div>
}


export default ResetSubmitExample
`;function X4(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function J4(e,t){if(e==null)return{};var r=X4(e,t),o,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)o=i[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Gd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function eb(e){if(Array.isArray(e))return Gd(e)}function tb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nb(e,t){if(e){if(typeof e=="string")return Gd(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Gd(e,t)}}function rb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ob(e){return eb(e)||tb(e)||nb(e)||rb()}function ri(e){"@babel/helpers - typeof";return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ri(e)}function sb(e,t){if(ri(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(ri(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ib(e){var t=sb(e,"string");return ri(t)=="symbol"?t:String(t)}function Z1(e,t,r){return t=ib(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Kd(){return Kd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Kd.apply(this,arguments)}function pp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function wo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(r),!0).forEach(function(o){Z1(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function lb(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Za={};function ab(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Za[t]||(Za[t]=lb(e)),Za[t]}function db(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=e.filter(function(i){return i!=="token"}),s=ab(o);return s.reduce(function(i,l){return wo(wo({},i),r[l])},t)}function fp(e){return e.join(" ")}function cb(e,t){var r=0;return function(o){return r+=1,o.map(function(s,i){return G1({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(r,"-").concat(i)})})}}function G1(e){var t=e.node,r=e.stylesheet,o=e.style,s=o===void 0?{}:o,i=e.useInlineStyles,l=e.key,a=t.properties,d=t.type,c=t.tagName,u=t.value;if(d==="text")return u;if(c){var h=cb(r,i),g;if(!i)g=wo(wo({},a),{},{className:fp(a.className)});else{var C=Object.keys(r).reduce(function(b,m){return m.split(".").forEach(function(p){b.includes(p)||b.push(p)}),b},[]),_=a.className&&a.className.includes("token")?["token"]:[],E=a.className&&_.concat(a.className.filter(function(b){return!C.includes(b)}));g=wo(wo({},a),{},{className:fp(E)||void 0,style:db(a.className,Object.assign({},a.style,s),r)})}var N=h(t.children);return lt.createElement(c,Kd({key:l},g),N)}}const ub=function(e,t){var r=e.listLanguages();return r.indexOf(t)!==-1};var mb=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function hp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function sn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?hp(Object(r),!0).forEach(function(o){Z1(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var pb=/\n/g;function fb(e){return e.match(pb)}function hb(e){var t=e.lines,r=e.startingLineNumber,o=e.style;return t.map(function(s,i){var l=i+r;return lt.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function xb(e){var t=e.codeString,r=e.codeStyle,o=e.containerStyle,s=o===void 0?{float:"left",paddingRight:"10px"}:o,i=e.numberStyle,l=i===void 0?{}:i,a=e.startingLineNumber;return lt.createElement("code",{style:Object.assign({},r,s)},hb({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:a}))}function gb(e){return"".concat(e.toString().length,".25em")}function K1(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function Q1(e,t,r){var o={display:"inline-block",minWidth:gb(r),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,i=sn(sn({},o),s);return i}function fl(e){var t=e.children,r=e.lineNumber,o=e.lineNumberStyle,s=e.largestLineNumber,i=e.showInlineLineNumbers,l=e.lineProps,a=l===void 0?{}:l,d=e.className,c=d===void 0?[]:d,u=e.showLineNumbers,h=e.wrapLongLines,g=typeof a=="function"?a(r):a;if(g.className=c,r&&i){var C=Q1(o,r,s);t.unshift(K1(r,C))}return h&u&&(g.style=sn(sn({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:t}}function X1(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var s=e[o];if(s.type==="text")r.push(fl({children:[s],className:ob(new Set(t))}));else if(s.children){var i=t.concat(s.properties.className);X1(s.children,i).forEach(function(l){return r.push(l)})}}return r}function bb(e,t,r,o,s,i,l,a,d){var c,u=X1(e.value),h=[],g=-1,C=0;function _(S,x){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return fl({children:S,lineNumber:x,lineNumberStyle:a,largestLineNumber:l,showInlineLineNumbers:s,lineProps:r,className:F,showLineNumbers:o,wrapLongLines:d})}function E(S,x){if(o&&x&&s){var F=Q1(a,x,l);S.unshift(K1(x,F))}return S}function N(S,x){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||F.length>0?_(S,x,F):E(S,x)}for(var b=function(){var x=u[C],F=x.children[0].value,L=fb(F);if(L){var R=F.split(`
`);R.forEach(function(M,I){var J=o&&h.length+i,ee={type:"text",value:"".concat(M,`
`)};if(I===0){var pe=u.slice(g+1,C).concat(fl({children:[ee],className:x.properties.className})),we=N(pe,J);h.push(we)}else if(I===R.length-1){var ve=u[C+1]&&u[C+1].children&&u[C+1].children[0],ie={type:"text",value:"".concat(M)};if(ve){var P=fl({children:[ie],className:x.properties.className});u.splice(C+1,0,P)}else{var B=[ie],V=N(B,J,x.properties.className);h.push(V)}}else{var q=[ee],K=N(q,J,x.properties.className);h.push(K)}}),g=C}C++};C<u.length;)b();if(g!==u.length-1){var m=u.slice(g+1,u.length);if(m&&m.length){var p=o&&h.length+i,v=N(m,p);h.push(v)}}return t?h:(c=[]).concat.apply(c,h)}function vb(e){var t=e.rows,r=e.stylesheet,o=e.useInlineStyles;return t.map(function(s,i){return G1({node:s,stylesheet:r,useInlineStyles:o,key:"code-segement".concat(i)})})}function J1(e){return e&&typeof e.highlightAuto<"u"}function jb(e){var t=e.astGenerator,r=e.language,o=e.code,s=e.defaultCodeValue;if(J1(t)){var i=ub(t,r);return r==="text"?{value:s,language:"text"}:i?t.highlight(r,o):t.highlightAuto(o)}try{return r&&r!=="text"?{value:t.highlight(o,r)}:{value:s}}catch{return{value:s}}}function yb(e,t){return function(o){var s=o.language,i=o.children,l=o.style,a=l===void 0?t:l,d=o.customStyle,c=d===void 0?{}:d,u=o.codeTagProps,h=u===void 0?{className:s?"language-".concat(s):void 0,style:sn(sn({},a['code[class*="language-"]']),a['code[class*="language-'.concat(s,'"]')])}:u,g=o.useInlineStyles,C=g===void 0?!0:g,_=o.showLineNumbers,E=_===void 0?!1:_,N=o.showInlineLineNumbers,b=N===void 0?!0:N,m=o.startingLineNumber,p=m===void 0?1:m,v=o.lineNumberContainerStyle,S=o.lineNumberStyle,x=S===void 0?{}:S,F=o.wrapLines,L=o.wrapLongLines,R=L===void 0?!1:L,M=o.lineProps,I=M===void 0?{}:M,J=o.renderer,ee=o.PreTag,pe=ee===void 0?"pre":ee,we=o.CodeTag,ve=we===void 0?"code":we,ie=o.code,P=ie===void 0?(Array.isArray(i)?i[0]:i)||"":ie,B=o.astGenerator,V=J4(o,mb);B=B||e;var q=E?lt.createElement(xb,{containerStyle:v,codeStyle:h.style||{},numberStyle:x,startingLineNumber:p,codeString:P}):null,K=a.hljs||a['pre[class*="language-"]']||{backgroundColor:"#fff"},Qe=J1(B)?"hljs":"prismjs",ce=C?Object.assign({},V,{style:Object.assign({},K,c)}):Object.assign({},V,{className:V.className?"".concat(Qe," ").concat(V.className):Qe,style:Object.assign({},c)});if(R?h.style=sn(sn({},h.style),{},{whiteSpace:"pre-wrap"}):h.style=sn(sn({},h.style),{},{whiteSpace:"pre"}),!B)return lt.createElement(pe,ce,q,lt.createElement(ve,h,P));(F===void 0&&J||R)&&(F=!0),J=J||vb;var Ee=[{type:"text",value:P}],he=jb({astGenerator:B,language:s,code:P,defaultCodeValue:Ee});he.language===null&&(he.value=Ee);var $e=he.value.length+p,gr=bb(he,F,I,E,b,p,$e,x,R);return lt.createElement(pe,ce,lt.createElement(ve,h,!b&&q,J({rows:gr,stylesheet:a,useInlineStyles:C})))}}var Sb=wb,Fb=Object.prototype.hasOwnProperty;function wb(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var o in r)Fb.call(r,o)&&(e[o]=r[o])}return e}var e2=t2,mu=t2.prototype;mu.space=null;mu.normal={};mu.property={};function t2(e,t,r){this.property=e,this.normal=t,r&&(this.space=r)}var xp=Sb,Cb=e2,_b=Eb;function Eb(e){for(var t=e.length,r=[],o=[],s=-1,i,l;++s<t;)i=e[s],r.push(i.property),o.push(i.normal),l=i.space;return new Cb(xp.apply(null,r),xp.apply(null,o),l)}var pu=Tb;function Tb(e){return e.toLowerCase()}var n2=r2,qt=r2.prototype;qt.space=null;qt.attribute=null;qt.property=null;qt.boolean=!1;qt.booleanish=!1;qt.overloadedBoolean=!1;qt.number=!1;qt.commaSeparated=!1;qt.spaceSeparated=!1;qt.commaOrSpaceSeparated=!1;qt.mustUseProperty=!1;qt.defined=!1;function r2(e,t){this.property=e,this.attribute=t}var hn={},kb=0;hn.boolean=Zr();hn.booleanish=Zr();hn.overloadedBoolean=Zr();hn.number=Zr();hn.spaceSeparated=Zr();hn.commaSeparated=Zr();hn.commaOrSpaceSeparated=Zr();function Zr(){return Math.pow(2,++kb)}var o2=n2,gp=hn,s2=fu;fu.prototype=new o2;fu.prototype.defined=!0;var i2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Rb=i2.length;function fu(e,t,r,o){var s=-1,i;for(bp(this,"space",o),o2.call(this,e,t);++s<Rb;)i=i2[s],bp(this,i,(r&gp[i])===gp[i])}function bp(e,t,r){r&&(e[t]=r)}var vp=pu,Lb=e2,Nb=s2,bi=Ob;function Ob(e){var t=e.space,r=e.mustUseProperty||[],o=e.attributes||{},s=e.properties,i=e.transform,l={},a={},d,c;for(d in s)c=new Nb(d,i(o,d),s[d],t),r.indexOf(d)!==-1&&(c.mustUseProperty=!0),l[d]=c,a[vp(d)]=d,a[vp(c.attribute)]=d;return new Lb(l,a,t)}var Pb=bi,Ab=Pb({space:"xlink",transform:Mb,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Mb(e,t){return"xlink:"+t.slice(5).toLowerCase()}var Ib=bi,Db=Ib({space:"xml",transform:$b,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function $b(e,t){return"xml:"+t.slice(3).toLowerCase()}var zb=Bb;function Bb(e,t){return t in e?e[t]:t}var Vb=zb,l2=Ub;function Ub(e,t){return Vb(e,t.toLowerCase())}var qb=bi,Hb=l2,Yb=qb({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Hb,properties:{xmlns:null,xmlnsXLink:null}}),hu=hn,Wb=bi,xt=hu.booleanish,Pt=hu.number,yr=hu.spaceSeparated,Zb=Wb({transform:Gb,properties:{ariaActiveDescendant:null,ariaAtomic:xt,ariaAutoComplete:null,ariaBusy:xt,ariaChecked:xt,ariaColCount:Pt,ariaColIndex:Pt,ariaColSpan:Pt,ariaControls:yr,ariaCurrent:null,ariaDescribedBy:yr,ariaDetails:null,ariaDisabled:xt,ariaDropEffect:yr,ariaErrorMessage:null,ariaExpanded:xt,ariaFlowTo:yr,ariaGrabbed:xt,ariaHasPopup:null,ariaHidden:xt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:yr,ariaLevel:Pt,ariaLive:null,ariaModal:xt,ariaMultiLine:xt,ariaMultiSelectable:xt,ariaOrientation:null,ariaOwns:yr,ariaPlaceholder:null,ariaPosInSet:Pt,ariaPressed:xt,ariaReadOnly:xt,ariaRelevant:null,ariaRequired:xt,ariaRoleDescription:yr,ariaRowCount:Pt,ariaRowIndex:Pt,ariaRowSpan:Pt,ariaSelected:xt,ariaSetSize:Pt,ariaSort:null,ariaValueMax:Pt,ariaValueMin:Pt,ariaValueNow:Pt,ariaValueText:null,role:null}});function Gb(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var es=hn,Kb=bi,Qb=l2,se=es.boolean,Xb=es.overloadedBoolean,xs=es.booleanish,je=es.number,ut=es.spaceSeparated,Qi=es.commaSeparated,Jb=Kb({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Qb,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qi,acceptCharset:ut,accessKey:ut,action:null,allow:null,allowFullScreen:se,allowPaymentRequest:se,allowUserMedia:se,alt:null,as:null,async:se,autoCapitalize:null,autoComplete:ut,autoFocus:se,autoPlay:se,capture:se,charSet:null,checked:se,cite:null,className:ut,cols:je,colSpan:null,content:null,contentEditable:xs,controls:se,controlsList:ut,coords:je|Qi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:se,defer:se,dir:null,dirName:null,disabled:se,download:Xb,draggable:xs,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:se,formTarget:null,headers:ut,height:je,hidden:se,high:je,href:null,hrefLang:null,htmlFor:ut,httpEquiv:ut,id:null,imageSizes:null,imageSrcSet:Qi,inputMode:null,integrity:null,is:null,isMap:se,itemId:null,itemProp:ut,itemRef:ut,itemScope:se,itemType:ut,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:se,low:je,manifest:null,max:null,maxLength:je,media:null,method:null,min:null,minLength:je,multiple:se,muted:se,name:null,nonce:null,noModule:se,noValidate:se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:se,optimum:je,pattern:null,ping:ut,placeholder:null,playsInline:se,poster:null,preload:null,readOnly:se,referrerPolicy:null,rel:ut,required:se,reversed:se,rows:je,rowSpan:je,sandbox:ut,scope:null,scoped:se,seamless:se,selected:se,shape:null,size:je,sizes:null,slot:null,span:je,spellCheck:xs,src:null,srcDoc:null,srcLang:null,srcSet:Qi,start:je,step:null,style:null,tabIndex:je,target:null,title:null,translate:null,type:null,typeMustMatch:se,useMap:null,value:xs,width:je,wrap:null,align:null,aLink:null,archive:ut,axis:null,background:null,bgColor:null,border:je,borderColor:null,bottomMargin:je,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:se,declare:se,event:null,face:null,frame:null,frameBorder:null,hSpace:je,leftMargin:je,link:null,longDesc:null,lowSrc:null,marginHeight:je,marginWidth:je,noResize:se,noHref:se,noShade:se,noWrap:se,object:null,profile:null,prompt:null,rev:null,rightMargin:je,rules:null,scheme:null,scrolling:xs,standby:null,summary:null,text:null,topMargin:je,valueType:null,version:null,vAlign:null,vLink:null,vSpace:je,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:se,disableRemotePlayback:se,prefix:null,property:null,results:je,security:null,unselectable:null}}),e5=_b,t5=Ab,n5=Db,r5=Yb,o5=Zb,s5=Jb,i5=e5([n5,t5,r5,o5,s5]),l5=pu,a5=s2,d5=n2,xu="data",c5=p5,u5=/^data[-\w.:]+$/i,a2=/-[a-z]/g,m5=/[A-Z]/g;function p5(e,t){var r=l5(t),o=t,s=d5;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===xu&&u5.test(t)&&(t.charAt(4)==="-"?o=f5(t):t=h5(t),s=a5),new s(o,t))}function f5(e){var t=e.slice(5).replace(a2,g5);return xu+t.charAt(0).toUpperCase()+t.slice(1)}function h5(e){var t=e.slice(4);return a2.test(t)?e:(t=t.replace(m5,x5),t.charAt(0)!=="-"&&(t="-"+t),xu+t)}function x5(e){return"-"+e.toLowerCase()}function g5(e){return e.charAt(1).toUpperCase()}var b5=v5,jp=/[#.]/g;function v5(e,t){for(var r=e||"",o=t||"div",s={},i=0,l,a,d;i<r.length;)jp.lastIndex=i,d=jp.exec(r),l=r.slice(i,d?d.index:r.length),l&&(a?a==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:o=l,i+=l.length),d&&(a=d[0],i++);return{type:"element",tagName:o,properties:s,children:[]}}var gu={};gu.parse=S5;gu.stringify=F5;var yp="",j5=" ",y5=/[ \t\n\r\f]+/g;function S5(e){var t=String(e||yp).trim();return t===yp?[]:t.split(y5)}function F5(e){return e.join(j5).trim()}var bu={};bu.parse=w5;bu.stringify=C5;var Qd=",",Sp=" ",_s="";function w5(e){for(var t=[],r=String(e||_s),o=r.indexOf(Qd),s=0,i=!1,l;!i;)o===-1&&(o=r.length,i=!0),l=r.slice(s,o).trim(),(l||!i)&&t.push(l),s=o+1,o=r.indexOf(Qd,s);return t}function C5(e,t){var r=t||{},o=r.padLeft===!1?_s:Sp,s=r.padRight?Sp:_s;return e[e.length-1]===_s&&(e=e.concat(_s)),e.join(s+Qd+o).trim()}var _5=c5,Fp=pu,E5=b5,wp=gu.parse,Cp=bu.parse,T5=R5,k5={}.hasOwnProperty;function R5(e,t,r){var o=r?A5(r):null;return s;function s(l,a){var d=E5(l,t),c=Array.prototype.slice.call(arguments,2),u=d.tagName.toLowerCase(),h;if(d.tagName=o&&k5.call(o,u)?o[u]:u,a&&L5(a,d)&&(c.unshift(a),a=null),a)for(h in a)i(d.properties,h,a[h]);return d2(d.children,c),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function i(l,a,d){var c,u,h;d==null||d!==d||(c=_5(e,a),u=c.property,h=d,typeof h=="string"&&(c.spaceSeparated?h=wp(h):c.commaSeparated?h=Cp(h):c.commaOrSpaceSeparated&&(h=wp(Cp(h).join(" ")))),u==="style"&&typeof d!="string"&&(h=P5(h)),u==="className"&&l.className&&(h=l.className.concat(h)),l[u]=O5(c,u,h))}}function L5(e,t){return typeof e=="string"||"length"in e||N5(t.tagName,e)}function N5(e,t){var r=t.type;return e==="input"||!r||typeof r!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in t)}function d2(e,t){var r,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(r=-1,o=t.length;++r<o;)d2(e,t[r]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function O5(e,t,r){var o,s,i;if(typeof r!="object"||!("length"in r))return _p(e,t,r);for(s=r.length,o=-1,i=[];++o<s;)i[o]=_p(e,t,r[o]);return i}function _p(e,t,r){var o=r;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||Fp(r)===Fp(t))&&(o=!0),o}function P5(e){var t=[],r;for(r in e)t.push([r,e[r]].join(": "));return t.join("; ")}function A5(e){for(var t=e.length,r=-1,o={},s;++r<t;)s=e[r],o[s.toLowerCase()]=s;return o}var M5=i5,I5=T5,c2=I5(M5,"div");c2.displayName="html";var D5=c2,$5=D5;const z5="Æ",B5="&",V5="Á",U5="Â",q5="À",H5="Å",Y5="Ã",W5="Ä",Z5="©",G5="Ç",K5="Ð",Q5="É",X5="Ê",J5="È",e6="Ë",t6=">",n6="Í",r6="Î",o6="Ì",s6="Ï",i6="<",l6="Ñ",a6="Ó",d6="Ô",c6="Ò",u6="Ø",m6="Õ",p6="Ö",f6='"',h6="®",x6="Þ",g6="Ú",b6="Û",v6="Ù",j6="Ü",y6="Ý",S6="á",F6="â",w6="´",C6="æ",_6="à",E6="&",T6="å",k6="ã",R6="ä",L6="¦",N6="ç",O6="¸",P6="¢",A6="©",M6="¤",I6="°",D6="÷",$6="é",z6="ê",B6="è",V6="ð",U6="ë",q6="½",H6="¼",Y6="¾",W6=">",Z6="í",G6="î",K6="¡",Q6="ì",X6="¿",J6="ï",ev="«",tv="<",nv="¯",rv="µ",ov="·",sv=" ",iv="¬",lv="ñ",av="ó",dv="ô",cv="ò",uv="ª",mv="º",pv="ø",fv="õ",hv="ö",xv="¶",gv="±",bv="£",vv='"',jv="»",yv="®",Sv="§",Fv="­",wv="¹",Cv="²",_v="³",Ev="ß",Tv="þ",kv="×",Rv="ú",Lv="û",Nv="ù",Ov="¨",Pv="ü",Av="ý",Mv="¥",Iv="ÿ",Dv={AElig:z5,AMP:B5,Aacute:V5,Acirc:U5,Agrave:q5,Aring:H5,Atilde:Y5,Auml:W5,COPY:Z5,Ccedil:G5,ETH:K5,Eacute:Q5,Ecirc:X5,Egrave:J5,Euml:e6,GT:t6,Iacute:n6,Icirc:r6,Igrave:o6,Iuml:s6,LT:i6,Ntilde:l6,Oacute:a6,Ocirc:d6,Ograve:c6,Oslash:u6,Otilde:m6,Ouml:p6,QUOT:f6,REG:h6,THORN:x6,Uacute:g6,Ucirc:b6,Ugrave:v6,Uuml:j6,Yacute:y6,aacute:S6,acirc:F6,acute:w6,aelig:C6,agrave:_6,amp:E6,aring:T6,atilde:k6,auml:R6,brvbar:L6,ccedil:N6,cedil:O6,cent:P6,copy:A6,curren:M6,deg:I6,divide:D6,eacute:$6,ecirc:z6,egrave:B6,eth:V6,euml:U6,frac12:q6,frac14:H6,frac34:Y6,gt:W6,iacute:Z6,icirc:G6,iexcl:K6,igrave:Q6,iquest:X6,iuml:J6,laquo:ev,lt:tv,macr:nv,micro:rv,middot:ov,nbsp:sv,not:iv,ntilde:lv,oacute:av,ocirc:dv,ograve:cv,ordf:uv,ordm:mv,oslash:pv,otilde:fv,ouml:hv,para:xv,plusmn:gv,pound:bv,quot:vv,raquo:jv,reg:yv,sect:Sv,shy:Fv,sup1:wv,sup2:Cv,sup3:_v,szlig:Ev,thorn:Tv,times:kv,uacute:Rv,ucirc:Lv,ugrave:Nv,uml:Ov,uuml:Pv,yacute:Av,yen:Mv,yuml:Iv},$v={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var u2=zv;function zv(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var Bv=Vv;function Vv(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var Uv=qv;function qv(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var Hv=Uv,Yv=u2,Wv=Zv;function Zv(e){return Hv(e)||Yv(e)}var Xi,Gv=59,Kv=Qv;function Qv(e){var t="&"+e+";",r;return Xi=Xi||document.createElement("i"),Xi.innerHTML=t,r=Xi.textContent,r.charCodeAt(r.length-1)===Gv&&e!=="semi"||r===t?!1:r}var Ep=Dv,Tp=$v,Xv=u2,Jv=Bv,m2=Wv,e8=Kv,t8=f8,n8={}.hasOwnProperty,oo=String.fromCharCode,r8=Function.prototype,kp={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},o8=9,Rp=10,s8=12,i8=32,Lp=38,l8=59,a8=60,d8=61,c8=35,u8=88,m8=120,p8=65533,co="named",vu="hexadecimal",ju="decimal",yu={};yu[vu]=16;yu[ju]=10;var pa={};pa[co]=m2;pa[ju]=Xv;pa[vu]=Jv;var p2=1,f2=2,h2=3,x2=4,g2=5,Xd=6,b2=7,fr={};fr[p2]="Named character references must be terminated by a semicolon";fr[f2]="Numeric character references must be terminated by a semicolon";fr[h2]="Named character references cannot be empty";fr[x2]="Numeric character references cannot be empty";fr[g2]="Named character references must be known";fr[Xd]="Numeric character references cannot be disallowed";fr[b2]="Numeric character references cannot be outside the permissible Unicode range";function f8(e,t){var r={},o,s;t||(t={});for(s in kp)o=t[s],r[s]=o??kp[s];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),h8(e,r)}function h8(e,t){var r=t.additional,o=t.nonTerminated,s=t.text,i=t.reference,l=t.warning,a=t.textContext,d=t.referenceContext,c=t.warningContext,u=t.position,h=t.indent||[],g=e.length,C=0,_=-1,E=u.column||1,N=u.line||1,b="",m=[],p,v,S,x,F,L,R,M,I,J,ee,pe,we,ve,ie,P,B,V,q;for(typeof r=="string"&&(r=r.charCodeAt(0)),P=K(),M=l?Qe:r8,C--,g++;++C<g;)if(F===Rp&&(E=h[_]||1),F=e.charCodeAt(C),F===Lp){if(R=e.charCodeAt(C+1),R===o8||R===Rp||R===s8||R===i8||R===Lp||R===a8||R!==R||r&&R===r){b+=oo(F),E++;continue}for(we=C+1,pe=we,q=we,R===c8?(q=++pe,R=e.charCodeAt(q),R===u8||R===m8?(ve=vu,q=++pe):ve=ju):ve=co,p="",ee="",x="",ie=pa[ve],q--;++q<g&&(R=e.charCodeAt(q),!!ie(R));)x+=oo(R),ve===co&&n8.call(Ep,x)&&(p=x,ee=Ep[x]);S=e.charCodeAt(q)===l8,S&&(q++,v=ve===co?e8(x):!1,v&&(p=x,ee=v)),V=1+q-we,!S&&!o||(x?ve===co?(S&&!ee?M(g2,1):(p!==x&&(q=pe+p.length,V=1+q-pe,S=!1),S||(I=p?p2:h2,t.attribute?(R=e.charCodeAt(q),R===d8?(M(I,V),ee=null):m2(R)?ee=null:M(I,V)):M(I,V))),L=ee):(S||M(f2,V),L=parseInt(x,yu[ve]),x8(L)?(M(b2,V),L=oo(p8)):L in Tp?(M(Xd,V),L=Tp[L]):(J="",g8(L)&&M(Xd,V),L>65535&&(L-=65536,J+=oo(L>>>10|55296),L=56320|L&1023),L=J+oo(L))):ve!==co&&M(x2,V)),L?(ce(),P=K(),C=q-1,E+=q-we+1,m.push(L),B=K(),B.offset++,i&&i.call(d,L,{start:P,end:B},e.slice(we-1,q)),P=B):(x=e.slice(we-1,q),b+=x,E+=x.length,C=q-1)}else F===10&&(N++,_++,E=0),F===F?(b+=oo(F),E++):ce();return m.join("");function K(){return{line:N,column:E,offset:C+(u.offset||0)}}function Qe(Ee,he){var $e=K();$e.column+=he,$e.offset+=he,l.call(c,fr[Ee],$e,Ee)}function ce(){b&&(m.push(b),s&&s.call(a,b,{start:P,end:K()}),b="")}}function x8(e){return e>=55296&&e<=57343||e>1114111}function g8(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var v2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function m(p){return p instanceof d?new d(p.type,m(p.content),p.alias):Array.isArray(p)?p.map(m):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++i}),m.__id},clone:function m(p,v){v=v||{};var S,x;switch(a.util.type(p)){case"Object":if(x=a.util.objId(p),v[x])return v[x];S={},v[x]=S;for(var F in p)p.hasOwnProperty(F)&&(S[F]=m(p[F],v));return S;case"Array":return x=a.util.objId(p),v[x]?v[x]:(S=[],v[x]=S,p.forEach(function(L,R){S[R]=m(L,v)}),S);default:return p}},getLanguage:function(m){for(;m;){var p=s.exec(m.className);if(p)return p[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,p){m.className=m.className.replace(RegExp(s,"gi"),""),m.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(S){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(m){var p=document.getElementsByTagName("script");for(var v in p)if(p[v].src==m)return p[v]}return null}},isActive:function(m,p,v){for(var S="no-"+p;m;){var x=m.classList;if(x.contains(p))return!0;if(x.contains(S))return!1;m=m.parentElement}return!!v}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(m,p){var v=a.util.clone(a.languages[m]);for(var S in p)v[S]=p[S];return v},insertBefore:function(m,p,v,S){S=S||a.languages;var x=S[m],F={};for(var L in x)if(x.hasOwnProperty(L)){if(L==p)for(var R in v)v.hasOwnProperty(R)&&(F[R]=v[R]);v.hasOwnProperty(L)||(F[L]=x[L])}var M=S[m];return S[m]=F,a.languages.DFS(a.languages,function(I,J){J===M&&I!=m&&(this[I]=F)}),F},DFS:function m(p,v,S,x){x=x||{};var F=a.util.objId;for(var L in p)if(p.hasOwnProperty(L)){v.call(p,L,p[L],S||L);var R=p[L],M=a.util.type(R);M==="Object"&&!x[F(R)]?(x[F(R)]=!0,m(R,v,null,x)):M==="Array"&&!x[F(R)]&&(x[F(R)]=!0,m(R,v,L,x))}}},plugins:{},highlightAll:function(m,p){a.highlightAllUnder(document,m,p)},highlightAllUnder:function(m,p,v){var S={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",S),S.elements=Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)),a.hooks.run("before-all-elements-highlight",S);for(var x=0,F;F=S.elements[x++];)a.highlightElement(F,p===!0,S.callback)},highlightElement:function(m,p,v){var S=a.util.getLanguage(m),x=a.languages[S];a.util.setLanguage(m,S);var F=m.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(F,S);var L=m.textContent,R={element:m,language:S,grammar:x,code:L};function M(J){R.highlightedCode=J,a.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,a.hooks.run("after-highlight",R),a.hooks.run("complete",R),v&&v.call(R.element)}if(a.hooks.run("before-sanity-check",R),F=R.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!R.code){a.hooks.run("complete",R),v&&v.call(R.element);return}if(a.hooks.run("before-highlight",R),!R.grammar){M(a.util.encode(R.code));return}if(p&&o.Worker){var I=new Worker(a.filename);I.onmessage=function(J){M(J.data)},I.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else M(a.highlight(R.code,R.grammar,R.language))},highlight:function(m,p,v){var S={code:m,grammar:p,language:v};if(a.hooks.run("before-tokenize",S),!S.grammar)throw new Error('The language "'+S.language+'" has no grammar.');return S.tokens=a.tokenize(S.code,S.grammar),a.hooks.run("after-tokenize",S),d.stringify(a.util.encode(S.tokens),S.language)},tokenize:function(m,p){var v=p.rest;if(v){for(var S in v)p[S]=v[S];delete p.rest}var x=new h;return g(x,x.head,m),u(m,x,p,x.head,0),_(x)},hooks:{all:{},add:function(m,p){var v=a.hooks.all;v[m]=v[m]||[],v[m].push(p)},run:function(m,p){var v=a.hooks.all[m];if(!(!v||!v.length))for(var S=0,x;x=v[S++];)x(p)}},Token:d};o.Prism=a;function d(m,p,v,S){this.type=m,this.content=p,this.alias=v,this.length=(S||"").length|0}d.stringify=function m(p,v){if(typeof p=="string")return p;if(Array.isArray(p)){var S="";return p.forEach(function(M){S+=m(M,v)}),S}var x={type:p.type,content:m(p.content,v),tag:"span",classes:["token",p.type],attributes:{},language:v},F=p.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(x.classes,F):x.classes.push(F)),a.hooks.run("wrap",x);var L="";for(var R in x.attributes)L+=" "+R+'="'+(x.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+L+">"+x.content+"</"+x.tag+">"};function c(m,p,v,S){m.lastIndex=p;var x=m.exec(v);if(x&&S&&x[1]){var F=x[1].length;x.index+=F,x[0]=x[0].slice(F)}return x}function u(m,p,v,S,x,F){for(var L in v)if(!(!v.hasOwnProperty(L)||!v[L])){var R=v[L];R=Array.isArray(R)?R:[R];for(var M=0;M<R.length;++M){if(F&&F.cause==L+","+M)return;var I=R[M],J=I.inside,ee=!!I.lookbehind,pe=!!I.greedy,we=I.alias;if(pe&&!I.pattern.global){var ve=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,ve+"g")}for(var ie=I.pattern||I,P=S.next,B=x;P!==p.tail&&!(F&&B>=F.reach);B+=P.value.length,P=P.next){var V=P.value;if(p.length>m.length)return;if(!(V instanceof d)){var q=1,K;if(pe){if(K=c(ie,B,m,ee),!K||K.index>=m.length)break;var he=K.index,Qe=K.index+K[0].length,ce=B;for(ce+=P.value.length;he>=ce;)P=P.next,ce+=P.value.length;if(ce-=P.value.length,B=ce,P.value instanceof d)continue;for(var Ee=P;Ee!==p.tail&&(ce<Qe||typeof Ee.value=="string");Ee=Ee.next)q++,ce+=Ee.value.length;q--,V=m.slice(B,ce),K.index-=B}else if(K=c(ie,0,V,ee),!K)continue;var he=K.index,$e=K[0],gr=V.slice(0,he),ki=V.slice(he+$e.length),ss=B+V.length;F&&ss>F.reach&&(F.reach=ss);var He=P.prev;gr&&(He=g(p,He,gr),B+=gr.length),C(p,He,q);var br=new d(L,J?a.tokenize($e,J):$e,we,$e);if(P=g(p,He,br),ki&&g(p,P,ki),q>1){var Jr={cause:L+","+M,reach:ss};u(m,p,v,P.prev,B,Jr),F&&Jr.reach>F.reach&&(F.reach=Jr.reach)}}}}}}function h(){var m={value:null,prev:null,next:null},p={value:null,prev:m,next:null};m.next=p,this.head=m,this.tail=p,this.length=0}function g(m,p,v){var S=p.next,x={value:v,prev:p,next:S};return p.next=x,S.prev=x,m.length++,x}function C(m,p,v){for(var S=p.next,x=0;x<v&&S!==m.tail;x++)S=S.next;p.next=S,S.prev=p,m.length-=x}function _(m){for(var p=[],v=m.head.next;v!==m.tail;)p.push(v.value),v=v.next;return p}if(!o.document)return o.addEventListener&&(a.disableWorkerMessageHandler||o.addEventListener("message",function(m){var p=JSON.parse(m.data),v=p.language,S=p.code,x=p.immediateClose;o.postMessage(a.highlight(S,a.languages[v],v)),x&&o.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function N(){a.manual||a.highlightAll()}if(!a.manual){var b=document.readyState;b==="loading"||b==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",N):window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,16)}return a}(t);e.exports&&(e.exports=r),typeof hl<"u"&&(hl.Prism=r)})(v2);var b8=v2.exports,v8=Su;Su.displayName="markup";Su.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function Su(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};i["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var j2=Fu;Fu.displayName="css";Fu.aliases=[];function Fu(e){(function(t){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const j8=Ur(j2);var y8=wu;wu.displayName="clike";wu.aliases=[];function wu(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var S8=Cu;Cu.displayName="javascript";Cu.aliases=["js"];function Cu(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Es=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof hl=="object"?hl:{},F8=$8();Es.Prism={manual:!0,disableWorkerMessageHandler:!0};var w8=$5,C8=t8,y2=b8,_8=v8,E8=j2,T8=y8,k8=S8;F8();var _u={}.hasOwnProperty;function S2(){}S2.prototype=y2;var Ie=new S2,R8=Ie;Ie.highlight=N8;Ie.register=vi;Ie.alias=L8;Ie.registered=O8;Ie.listLanguages=P8;vi(_8);vi(E8);vi(T8);vi(k8);Ie.util.encode=I8;Ie.Token.stringify=A8;function vi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ie.languages[e.displayName]===void 0&&e(Ie)}function L8(e,t){var r=Ie.languages,o=e,s,i,l,a;t&&(o={},o[e]=t);for(s in o)for(i=o[s],i=typeof i=="string"?[i]:i,l=i.length,a=-1;++a<l;)r[i[a]]=r[s]}function N8(e,t){var r=y2.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ie.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(_u.call(Ie.languages,t))o=Ie.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return r.call(this,e,o,t)}function O8(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return _u.call(Ie.languages,e)}function P8(){var e=Ie.languages,t=[],r;for(r in e)_u.call(e,r)&&typeof e[r]=="object"&&t.push(r);return t}function A8(e,t,r){var o;return typeof e=="string"?{type:"text",value:e}:Ie.util.type(e)==="Array"?M8(e,t):(o={type:e.type,content:Ie.Token.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r},e.alias&&(o.classes=o.classes.concat(e.alias)),Ie.hooks.run("wrap",o),w8(o.tag+"."+o.classes.join("."),D8(o.attributes),o.content))}function M8(e,t){for(var r=[],o=e.length,s=-1,i;++s<o;)i=e[s],i!==""&&i!==null&&i!==void 0&&r.push(i);for(s=-1,o=r.length;++s<o;)i=r[s],r[s]=Ie.Token.stringify(i,t,r);return r}function I8(e){return e}function D8(e){var t;for(t in e)e[t]=C8(e[t]);return e}function $8(){var e="Prism"in Es,t=e?Es.Prism:void 0;return r;function r(){e?Es.Prism=t:delete Es.Prism,e=void 0,t=void 0}}const Eu=Ur(R8);var Gr=yb(Eu,{});Gr.registerLanguage=function(e,t){return Eu.register(t)};Gr.alias=function(e,t){return Eu.alias(e,t)};var z8=Tu;Tu.displayName="bash";Tu.aliases=["shell"];function Tu(e){(function(t){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:o,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,a=0;a<i.length;a++)l[i[a]]=t.languages.bash[i[a]];t.languages.shell=t.languages.bash})(e)}const B8=Ur(z8);var V8=ku;ku.displayName="jsx";ku.aliases=[];function ku(e){(function(t){var r=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(c,u){return c=c.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=l(i).source,t.languages.jsx=t.languages.extend("markup",r),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=r.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var a=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(a).join(""):""},d=function(c){for(var u=[],h=0;h<c.length;h++){var g=c[h],C=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(g.content[0].content[1])&&u.pop():g.content[g.content.length-1].content==="/>"||u.push({tagName:a(g.content[0].content[1]),openedBraces:0}):u.length>0&&g.type==="punctuation"&&g.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?u[u.length-1].openedBraces--:C=!0),(C||typeof g=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var _=a(g);h<c.length-1&&(typeof c[h+1]=="string"||c[h+1].type==="plain-text")&&(_+=a(c[h+1]),c.splice(h+1,1)),h>0&&(typeof c[h-1]=="string"||c[h-1].type==="plain-text")&&(_=a(c[h-1])+_,c.splice(h-1,1),h--),c[h]=new t.Token("plain-text",_,null,_)}g.content&&typeof g.content!="string"&&d(g.content)}};t.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||d(c.tokens)})})(e)}const U8=Ur(V8);var q8=Ru;Ru.displayName="scss";Ru.aliases=[];function Ru(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const H8=Ur(q8);Gr.registerLanguage("jsx",U8);Gr.registerLanguage("css",j8);Gr.registerLanguage("scss",H8);Gr.registerLanguage("bash",B8);const Ge=({code:e,language:t="jsx",caption:r,expand:o=!1,fixed:s=o,className:i="",undent:l=!1})=>{const[a,d]=T.useState(!1),[c,u]=T.useState(o),h=()=>{navigator.clipboard.writeText(e),d(!0),mn(2e3).then(()=>d(!1))};return n.jsxs("div",{className:`codeblock ${i} ${c?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!r&&n.jsx("h4",{className:"caption",children:r}),n.jsxs("div",{className:"controls",children:[n.jsx("div",{className:"expand",onClick:()=>u(!c),children:c?"Compress":"Expand"}),n.jsx("div",{className:`clipboard ${a?"copied":""}`,onClick:h,children:a?"Copied":"Copy"})]}),n.jsx(Gr,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:an(e,{undent:l})})]})},an=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),t.undent){const r=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(r,"")}return e},j=({Component:e,code:t,html:r,children:o,className:s="",caption:i,fixed:l,expand:a,language:d,undent:c})=>n.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[n.jsx("div",{className:"source",children:n.jsx(Ge,{caption:i,code:t||r,expand:a,fixed:l,undent:c,language:r?"html":d})}),!!o&&n.jsx("div",{className:"interim",children:o}),e?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx(e,{})]}):null,r?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx("div",{dangerouslySetInnerHTML:{__html:r}})]}):null]});/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Oe.apply(this,arguments)}var Pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pe||(Pe={}));const Np="popstate";function Y8(e){e===void 0&&(e={});function t(o,s){let{pathname:i,search:l,hash:a}=o.location;return oi("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:zr(s)}return Z8(t,r,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $r(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function W8(){return Math.random().toString(36).substr(2,8)}function Op(e,t){return{usr:e.state,key:e.key,idx:t}}function oi(e,t,r,o){return r===void 0&&(r=null),Oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nn(t):t,{state:r,key:t&&t.key||o||W8()})}function zr(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Nn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Z8(e,t,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=Pe.Pop,d=null,c=u();c==null&&(c=0,l.replaceState(Oe({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function h(){a=Pe.Pop;let N=u(),b=N==null?null:N-c;c=N,d&&d({action:a,location:E.location,delta:b})}function g(N,b){a=Pe.Push;let m=oi(E.location,N,b);r&&r(m,N),c=u()+1;let p=Op(m,c),v=E.createHref(m);try{l.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(v)}i&&d&&d({action:a,location:E.location,delta:1})}function C(N,b){a=Pe.Replace;let m=oi(E.location,N,b);r&&r(m,N),c=u();let p=Op(m,c),v=E.createHref(m);l.replaceState(p,"",v),i&&d&&d({action:a,location:E.location,delta:0})}function _(N){let b=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof N=="string"?N:zr(N);return re(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let E={get action(){return a},get location(){return e(s,l)},listen(N){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Np,h),d=N,()=>{s.removeEventListener(Np,h),d=null}},createHref(N){return t(s,N)},createURL:_,encodeLocation(N){let b=_(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:g,replace:C,go(N){return l.go(N)}};return E}var Le;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Le||(Le={}));const G8=new Set(["lazy","caseSensitive","path","id","index","children"]);function K8(e){return e.index===!0}function Jd(e,t,r,o){return r===void 0&&(r=[]),o===void 0&&(o={}),e.map((s,i)=>{let l=[...r,i],a=typeof s.id=="string"?s.id:l.join("-");if(re(s.index!==!0||!s.children,"Cannot specify children on an index route"),re(!o[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),K8(s)){let d=Oe({},s,t(s),{id:a});return o[a]=d,d}else{let d=Oe({},s,t(s),{id:a,children:void 0});return o[a]=d,s.children&&(d.children=Jd(s.children,t,l,o)),d}})}function Co(e,t,r){r===void 0&&(r="/");let o=typeof t=="string"?Nn(t):t,s=En(o.pathname||"/",r);if(s==null)return null;let i=F2(e);X8(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=lj(i[a],dj(s));return l}function Q8(e,t){let{route:r,pathname:o,params:s}=e;return{id:r.id,pathname:o,params:s,data:t[r.id],handle:r.handle}}function F2(e,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let d={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};d.relativePath.startsWith("/")&&(re(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let c=Sn([o,d.relativePath]),u=r.concat(d);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),F2(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:sj(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let d of w2(i.path))s(i,l,d)}),t}function w2(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=w2(o.join("/")),a=[];return a.push(...l.map(d=>d===""?i:[i,d].join("/"))),s&&a.push(...l),a.map(d=>e.startsWith("/")&&d===""?"/":d)}function X8(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ij(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const J8=/^:[\w-]+$/,ej=3,tj=2,nj=1,rj=10,oj=-2,Pp=e=>e==="*";function sj(e,t){let r=e.split("/"),o=r.length;return r.some(Pp)&&(o+=oj),t&&(o+=tj),r.filter(s=>!Pp(s)).reduce((s,i)=>s+(J8.test(i)?ej:i===""?nj:rj),o)}function ij(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function lj(e,t){let{routesMeta:r}=e,o={},s="/",i=[];for(let l=0;l<r.length;++l){let a=r[l],d=l===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",u=ec({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},c);if(!u)return null;Object.assign(o,u.params);let h=a.route;i.push({params:o,pathname:Sn([s,u.pathname]),pathnameBase:pj(Sn([s,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(s=Sn([s,u.pathnameBase]))}return i}function ec(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=aj(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((c,u,h)=>{let{paramName:g,isOptional:C}=u;if(g==="*"){let E=a[h]||"";l=i.slice(0,i.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[h];return C&&!_?c[g]=void 0:c[g]=cj(_||"",g),c},{}),pathname:i,pathnameBase:l,pattern:e}}function aj(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),$r(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,d)=>(o.push({paramName:a,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function dj(e){try{return decodeURI(e)}catch(t){return $r(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cj(e,t){try{return decodeURIComponent(e)}catch(r){return $r(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function En(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function uj(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:s=""}=typeof e=="string"?Nn(e):e;return{pathname:r?r.startsWith("/")?r:mj(r,t):t,search:fj(o),hash:hj(s)}}function mj(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Ga(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Lu(e,t){let r=C2(e);return t?r.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Nu(e,t,r,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=Nn(e):(s=Oe({},e),re(!s.pathname||!s.pathname.includes("?"),Ga("?","pathname","search",s)),re(!s.pathname||!s.pathname.includes("#"),Ga("#","pathname","hash",s)),re(!s.search||!s.search.includes("#"),Ga("#","search","hash",s)));let i=e===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let h=t.length-1;if(!o&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;s.pathname=g.join("/")}a=h>=0?t[h]:"/"}let d=uj(s,a),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),pj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ou{constructor(t,r,o,s){s===void 0&&(s=!1),this.status=t,this.statusText=r||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function _2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const E2=["post","put","patch","delete"],xj=new Set(E2),gj=["get",...E2],bj=new Set(gj),vj=new Set([301,302,303,307,308]),jj=new Set([307,308]),Ka={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yj={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},T2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sj=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),k2="remix-router-transitions";function Fj(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!r;re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;s=k=>({hasErrorBoundary:w(k)})}else s=Sj;let i={},l=Jd(e.routes,s,void 0,i),a,d=e.basename||"/",c=Oe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,h=new Set,g=null,C=null,_=null,E=e.hydrationData!=null,N=Co(l,e.history.location,d),b=null;if(N==null){let w=At(404,{pathname:e.history.location.pathname}),{matches:k,route:O}=Vp(l);N=k,b={[O.id]:w}}let m,p=N.some(w=>w.route.lazy),v=N.some(w=>w.route.loader);if(p)m=!1;else if(!v)m=!0;else if(c.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,k=e.hydrationData?e.hydrationData.errors:null;m=N.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(w&&w[O.route.id]!==void 0||k&&k[O.route.id]!==void 0))}else m=e.hydrationData!=null;let S,x={historyAction:e.history.action,location:e.history.location,matches:N,initialized:m,navigation:Ka,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},F=Pe.Pop,L=!1,R,M=!1,I=new Map,J=null,ee=!1,pe=!1,we=[],ve=[],ie=new Map,P=0,B=-1,V=new Map,q=new Set,K=new Map,Qe=new Map,ce=new Set,Ee=new Map,he=new Map,$e=!1;function gr(){if(u=e.history.listen(w=>{let{action:k,location:O,delta:z}=w;if($e){$e=!1;return}$r(he.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=Gu({currentLocation:x.location,nextLocation:O,historyAction:k});if(H&&z!=null){$e=!0,e.history.go(z*-1),Li(H,{state:"blocked",location:O,proceed(){Li(H,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(z)},reset(){let oe=new Map(x.blockers);oe.set(H,gs),He({blockers:oe})}});return}return vr(k,O)}),r){Pj(t,I);let w=()=>Aj(t,I);t.addEventListener("pagehide",w),J=()=>t.removeEventListener("pagehide",w)}return x.initialized||vr(Pe.Pop,x.location,{initialHydration:!0}),S}function ki(){u&&u(),J&&J(),h.clear(),R&&R.abort(),x.fetchers.forEach((w,k)=>Ri(k)),x.blockers.forEach((w,k)=>Zu(k))}function ss(w){return h.add(w),()=>h.delete(w)}function He(w,k){k===void 0&&(k={}),x=Oe({},x,w);let O=[],z=[];c.v7_fetcherPersist&&x.fetchers.forEach((H,oe)=>{H.state==="idle"&&(ce.has(oe)?z.push(oe):O.push(oe))}),[...h].forEach(H=>H(x,{deletedFetchers:z,unstable_viewTransitionOpts:k.viewTransitionOpts,unstable_flushSync:k.flushSync===!0})),c.v7_fetcherPersist&&(O.forEach(H=>x.fetchers.delete(H)),z.forEach(H=>Ri(H)))}function br(w,k,O){var z,H;let{flushSync:oe}=O===void 0?{}:O,Q=x.actionData!=null&&x.navigation.formMethod!=null&&Kt(x.navigation.formMethod)&&x.navigation.state==="loading"&&((z=w.state)==null?void 0:z._isRedirect)!==!0,Z;k.actionData?Object.keys(k.actionData).length>0?Z=k.actionData:Z=null:Q?Z=x.actionData:Z=null;let Y=k.loaderData?Bp(x.loaderData,k.loaderData,k.matches||[],k.errors):x.loaderData,ae=x.blockers;ae.size>0&&(ae=new Map(ae),ae.forEach((ge,Xe)=>ae.set(Xe,gs)));let Ye=L===!0||x.navigation.formMethod!=null&&Kt(x.navigation.formMethod)&&((H=w.state)==null?void 0:H._isRedirect)!==!0;a&&(l=a,a=void 0),ee||F===Pe.Pop||(F===Pe.Push?e.history.push(w,w.state):F===Pe.Replace&&e.history.replace(w,w.state));let ne;if(F===Pe.Pop){let ge=I.get(x.location.pathname);ge&&ge.has(w.pathname)?ne={currentLocation:x.location,nextLocation:w}:I.has(w.pathname)&&(ne={currentLocation:w,nextLocation:x.location})}else if(M){let ge=I.get(x.location.pathname);ge?ge.add(w.pathname):(ge=new Set([w.pathname]),I.set(x.location.pathname,ge)),ne={currentLocation:x.location,nextLocation:w}}He(Oe({},k,{actionData:Z,loaderData:Y,historyAction:F,location:w,initialized:!0,navigation:Ka,revalidation:"idle",restoreScrollPosition:Qu(w,k.matches||x.matches),preventScrollReset:Ye,blockers:ae}),{viewTransitionOpts:ne,flushSync:oe===!0}),F=Pe.Pop,L=!1,M=!1,ee=!1,pe=!1,we=[],ve=[]}async function Jr(w,k){if(typeof w=="number"){e.history.go(w);return}let O=tc(x.location,x.matches,d,c.v7_prependBasename,w,c.v7_relativeSplatPath,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:z,submission:H,error:oe}=Ap(c.v7_normalizeFormMethod,!1,O,k),Q=x.location,Z=oi(x.location,z,k&&k.state);Z=Oe({},Z,e.history.encodeLocation(Z));let Y=k&&k.replace!=null?k.replace:void 0,ae=Pe.Push;Y===!0?ae=Pe.Replace:Y===!1||H!=null&&Kt(H.formMethod)&&H.formAction===x.location.pathname+x.location.search&&(ae=Pe.Replace);let Ye=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ne=(k&&k.unstable_flushSync)===!0,ge=Gu({currentLocation:Q,nextLocation:Z,historyAction:ae});if(ge){Li(ge,{state:"blocked",location:Z,proceed(){Li(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Jr(w,k)},reset(){let Xe=new Map(x.blockers);Xe.set(ge,gs),He({blockers:Xe})}});return}return await vr(ae,Z,{submission:H,pendingError:oe,preventScrollReset:Ye,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition,flushSync:ne})}function Wx(){if(ha(),He({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){vr(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}vr(F||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function vr(w,k,O){R&&R.abort(),R=null,F=w,ee=(O&&O.startUninterruptedRevalidation)===!0,n3(x.location,x.matches),L=(O&&O.preventScrollReset)===!0,M=(O&&O.enableViewTransition)===!0;let z=a||l,H=O&&O.overrideNavigation,oe=Co(z,k,d),Q=(O&&O.flushSync)===!0;if(!oe){let Xe=At(404,{pathname:k.pathname}),{matches:Ot,route:We}=Vp(z);xa(),br(k,{matches:Ot,loaderData:{},errors:{[We.id]:Xe}},{flushSync:Q});return}if(x.initialized&&!pe&&Tj(x.location,k)&&!(O&&O.submission&&Kt(O.submission.formMethod))){br(k,{matches:oe},{flushSync:Q});return}R=new AbortController;let Z=vs(e.history,k,R.signal,O&&O.submission),Y,ae;if(O&&O.pendingError)ae={[Is(oe).route.id]:O.pendingError};else if(O&&O.submission&&Kt(O.submission.formMethod)){let Xe=await Zx(Z,k,O.submission,oe,{replace:O.replace,flushSync:Q});if(Xe.shortCircuited)return;Y=Xe.pendingActionData,ae=Xe.pendingActionError,H=Qa(k,O.submission),Q=!1,Z=new Request(Z.url,{signal:Z.signal})}let{shortCircuited:Ye,loaderData:ne,errors:ge}=await Gx(Z,k,oe,H,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,Q,Y,ae);Ye||(R=null,br(k,Oe({matches:oe},Y?{actionData:Y}:{},{loaderData:ne,errors:ge})))}async function Zx(w,k,O,z,H){H===void 0&&(H={}),ha();let oe=Nj(k,O);He({navigation:oe},{flushSync:H.flushSync===!0});let Q,Z=rc(z,k);if(!Z.route.action&&!Z.route.lazy)Q={type:Le.error,error:At(405,{method:w.method,pathname:k.pathname,routeId:Z.route.id})};else if(Q=await bs("action",w,Z,z,i,s,d,c.v7_relativeSplatPath),w.signal.aborted)return{shortCircuited:!0};if(kr(Q)){let Y;return H&&H.replace!=null?Y=H.replace:Y=Q.location===x.location.pathname+x.location.search,await is(x,Q,{submission:O,replace:Y}),{shortCircuited:!0}}if(_o(Q)){let Y=Is(z,Z.route.id);return(H&&H.replace)!==!0&&(F=Pe.Push),{pendingActionData:{},pendingActionError:{[Y.route.id]:Q.error}}}if(Tr(Q))throw At(400,{type:"defer-action"});return{pendingActionData:{[Z.route.id]:Q.data}}}async function Gx(w,k,O,z,H,oe,Q,Z,Y,ae,Ye){let ne=z||Qa(k,H),ge=H||oe||Hp(ne),Xe=a||l,[Ot,We]=Mp(e.history,x,O,ge,k,c.v7_partialHydration&&Z===!0,pe,we,ve,ce,K,q,Xe,d,ae,Ye);if(xa(xe=>!(O&&O.some(Ce=>Ce.route.id===xe))||Ot&&Ot.some(Ce=>Ce.route.id===xe)),B=++P,Ot.length===0&&We.length===0){let xe=Yu();return br(k,Oe({matches:O,loaderData:{},errors:Ye||null},ae?{actionData:ae}:{},xe?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!ee&&(!c.v7_partialHydration||!Z)){We.forEach(Ce=>{let tn=x.fetchers.get(Ce.key),Oi=js(void 0,tn?tn.data:void 0);x.fetchers.set(Ce.key,Oi)});let xe=ae||x.actionData;He(Oe({navigation:ne},xe?Object.keys(xe).length===0?{actionData:null}:{actionData:xe}:{},We.length>0?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Y})}We.forEach(xe=>{ie.has(xe.key)&&An(xe.key),xe.controller&&ie.set(xe.key,xe.controller)});let eo=()=>We.forEach(xe=>An(xe.key));R&&R.signal.addEventListener("abort",eo);let{results:ga,loaderResults:to,fetcherResults:Mn}=await Uu(x.matches,O,Ot,We,w);if(w.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",eo),We.forEach(xe=>ie.delete(xe.key));let jr=Up(ga);if(jr){if(jr.idx>=Ot.length){let xe=We[jr.idx-Ot.length].key;q.add(xe)}return await is(x,jr.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:ba,errors:va}=zp(x,O,Ot,to,Ye,We,Mn,Ee);Ee.forEach((xe,Ce)=>{xe.subscribe(tn=>{(tn||xe.done)&&Ee.delete(Ce)})});let ja=Yu(),no=Wu(B),Ni=ja||no||We.length>0;return Oe({loaderData:ba,errors:va},Ni?{fetchers:new Map(x.fetchers)}:{})}function Kx(w,k,O,z){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(w)&&An(w);let H=(z&&z.unstable_flushSync)===!0,oe=a||l,Q=tc(x.location,x.matches,d,c.v7_prependBasename,O,c.v7_relativeSplatPath,k,z==null?void 0:z.relative),Z=Co(oe,Q,d);if(!Z){ls(w,k,At(404,{pathname:Q}),{flushSync:H});return}let{path:Y,submission:ae,error:Ye}=Ap(c.v7_normalizeFormMethod,!0,Q,z);if(Ye){ls(w,k,Ye,{flushSync:H});return}let ne=rc(Z,Y);if(L=(z&&z.preventScrollReset)===!0,ae&&Kt(ae.formMethod)){Qx(w,k,Y,ne,Z,H,ae);return}K.set(w,{routeId:k,path:Y}),Xx(w,k,Y,ne,Z,H,ae)}async function Qx(w,k,O,z,H,oe,Q){if(ha(),K.delete(w),!z.route.action&&!z.route.lazy){let Ce=At(405,{method:Q.formMethod,pathname:O,routeId:k});ls(w,k,Ce,{flushSync:oe});return}let Z=x.fetchers.get(w);Pn(w,Oj(Q,Z),{flushSync:oe});let Y=new AbortController,ae=vs(e.history,O,Y.signal,Q);ie.set(w,Y);let Ye=P,ne=await bs("action",ae,z,H,i,s,d,c.v7_relativeSplatPath);if(ae.signal.aborted){ie.get(w)===Y&&ie.delete(w);return}if(c.v7_fetcherPersist&&ce.has(w)){if(kr(ne)||_o(ne)){Pn(w,Dn(void 0));return}}else{if(kr(ne))if(ie.delete(w),B>Ye){Pn(w,Dn(void 0));return}else return q.add(w),Pn(w,js(Q)),is(x,ne,{fetcherSubmission:Q});if(_o(ne)){ls(w,k,ne.error);return}}if(Tr(ne))throw At(400,{type:"defer-action"});let ge=x.navigation.location||x.location,Xe=vs(e.history,ge,Y.signal),Ot=a||l,We=x.navigation.state!=="idle"?Co(Ot,x.navigation.location,d):x.matches;re(We,"Didn't find any matches after fetcher action");let eo=++P;V.set(w,eo);let ga=js(Q,ne.data);x.fetchers.set(w,ga);let[to,Mn]=Mp(e.history,x,We,Q,ge,!1,pe,we,ve,ce,K,q,Ot,d,{[z.route.id]:ne.data},void 0);Mn.filter(Ce=>Ce.key!==w).forEach(Ce=>{let tn=Ce.key,Oi=x.fetchers.get(tn),o3=js(void 0,Oi?Oi.data:void 0);x.fetchers.set(tn,o3),ie.has(tn)&&An(tn),Ce.controller&&ie.set(tn,Ce.controller)}),He({fetchers:new Map(x.fetchers)});let jr=()=>Mn.forEach(Ce=>An(Ce.key));Y.signal.addEventListener("abort",jr);let{results:ba,loaderResults:va,fetcherResults:ja}=await Uu(x.matches,We,to,Mn,Xe);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",jr),V.delete(w),ie.delete(w),Mn.forEach(Ce=>ie.delete(Ce.key));let no=Up(ba);if(no){if(no.idx>=to.length){let Ce=Mn[no.idx-to.length].key;q.add(Ce)}return is(x,no.result)}let{loaderData:Ni,errors:xe}=zp(x,x.matches,to,va,void 0,Mn,ja,Ee);if(x.fetchers.has(w)){let Ce=Dn(ne.data);x.fetchers.set(w,Ce)}Wu(eo),x.navigation.state==="loading"&&eo>B?(re(F,"Expected pending action"),R&&R.abort(),br(x.navigation.location,{matches:We,loaderData:Ni,errors:xe,fetchers:new Map(x.fetchers)})):(He({errors:xe,loaderData:Bp(x.loaderData,Ni,We,xe),fetchers:new Map(x.fetchers)}),pe=!1)}async function Xx(w,k,O,z,H,oe,Q){let Z=x.fetchers.get(w);Pn(w,js(Q,Z?Z.data:void 0),{flushSync:oe});let Y=new AbortController,ae=vs(e.history,O,Y.signal);ie.set(w,Y);let Ye=P,ne=await bs("loader",ae,z,H,i,s,d,c.v7_relativeSplatPath);if(Tr(ne)&&(ne=await N2(ne,ae.signal,!0)||ne),ie.get(w)===Y&&ie.delete(w),!ae.signal.aborted){if(ce.has(w)){Pn(w,Dn(void 0));return}if(kr(ne))if(B>Ye){Pn(w,Dn(void 0));return}else{q.add(w),await is(x,ne);return}if(_o(ne)){ls(w,k,ne.error);return}re(!Tr(ne),"Unhandled fetcher deferred data"),Pn(w,Dn(ne.data))}}async function is(w,k,O){let{submission:z,fetcherSubmission:H,replace:oe}=O===void 0?{}:O;k.revalidate&&(pe=!0);let Q=oi(w.location,k.location,{_isRedirect:!0});if(re(Q,"Expected a location on the redirect navigation"),r){let ge=!1;if(k.reloadDocument)ge=!0;else if(T2.test(k.location)){const Xe=e.history.createURL(k.location);ge=Xe.origin!==t.location.origin||En(Xe.pathname,d)==null}if(ge){oe?t.location.replace(k.location):t.location.assign(k.location);return}}R=null;let Z=oe===!0?Pe.Replace:Pe.Push,{formMethod:Y,formAction:ae,formEncType:Ye}=w.navigation;!z&&!H&&Y&&ae&&Ye&&(z=Hp(w.navigation));let ne=z||H;if(jj.has(k.status)&&ne&&Kt(ne.formMethod))await vr(Z,Q,{submission:Oe({},ne,{formAction:k.location}),preventScrollReset:L});else{let ge=Qa(Q,z);await vr(Z,Q,{overrideNavigation:ge,fetcherSubmission:H,preventScrollReset:L})}}async function Uu(w,k,O,z,H){let oe=await Promise.all([...O.map(Y=>bs("loader",H,Y,k,i,s,d,c.v7_relativeSplatPath)),...z.map(Y=>Y.matches&&Y.match&&Y.controller?bs("loader",vs(e.history,Y.path,Y.controller.signal),Y.match,Y.matches,i,s,d,c.v7_relativeSplatPath):{type:Le.error,error:At(404,{pathname:Y.path})})]),Q=oe.slice(0,O.length),Z=oe.slice(O.length);return await Promise.all([qp(w,O,Q,Q.map(()=>H.signal),!1,x.loaderData),qp(w,z.map(Y=>Y.match),Z,z.map(Y=>Y.controller?Y.controller.signal:null),!0)]),{results:oe,loaderResults:Q,fetcherResults:Z}}function ha(){pe=!0,we.push(...xa()),K.forEach((w,k)=>{ie.has(k)&&(ve.push(k),An(k))})}function Pn(w,k,O){O===void 0&&(O={}),x.fetchers.set(w,k),He({fetchers:new Map(x.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function ls(w,k,O,z){z===void 0&&(z={});let H=Is(x.matches,k);Ri(w),He({errors:{[H.route.id]:O},fetchers:new Map(x.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function qu(w){return c.v7_fetcherPersist&&(Qe.set(w,(Qe.get(w)||0)+1),ce.has(w)&&ce.delete(w)),x.fetchers.get(w)||yj}function Ri(w){let k=x.fetchers.get(w);ie.has(w)&&!(k&&k.state==="loading"&&V.has(w))&&An(w),K.delete(w),V.delete(w),q.delete(w),ce.delete(w),x.fetchers.delete(w)}function Jx(w){if(c.v7_fetcherPersist){let k=(Qe.get(w)||0)-1;k<=0?(Qe.delete(w),ce.add(w)):Qe.set(w,k)}else Ri(w);He({fetchers:new Map(x.fetchers)})}function An(w){let k=ie.get(w);re(k,"Expected fetch controller: "+w),k.abort(),ie.delete(w)}function Hu(w){for(let k of w){let O=qu(k),z=Dn(O.data);x.fetchers.set(k,z)}}function Yu(){let w=[],k=!1;for(let O of q){let z=x.fetchers.get(O);re(z,"Expected fetcher: "+O),z.state==="loading"&&(q.delete(O),w.push(O),k=!0)}return Hu(w),k}function Wu(w){let k=[];for(let[O,z]of V)if(z<w){let H=x.fetchers.get(O);re(H,"Expected fetcher: "+O),H.state==="loading"&&(An(O),V.delete(O),k.push(O))}return Hu(k),k.length>0}function e3(w,k){let O=x.blockers.get(w)||gs;return he.get(w)!==k&&he.set(w,k),O}function Zu(w){x.blockers.delete(w),he.delete(w)}function Li(w,k){let O=x.blockers.get(w)||gs;re(O.state==="unblocked"&&k.state==="blocked"||O.state==="blocked"&&k.state==="blocked"||O.state==="blocked"&&k.state==="proceeding"||O.state==="blocked"&&k.state==="unblocked"||O.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+k.state);let z=new Map(x.blockers);z.set(w,k),He({blockers:z})}function Gu(w){let{currentLocation:k,nextLocation:O,historyAction:z}=w;if(he.size===0)return;he.size>1&&$r(!1,"A router only supports one blocker at a time");let H=Array.from(he.entries()),[oe,Q]=H[H.length-1],Z=x.blockers.get(oe);if(!(Z&&Z.state==="proceeding")&&Q({currentLocation:k,nextLocation:O,historyAction:z}))return oe}function xa(w){let k=[];return Ee.forEach((O,z)=>{(!w||w(z))&&(O.cancel(),k.push(z),Ee.delete(z))}),k}function t3(w,k,O){if(g=w,_=k,C=O||null,!E&&x.navigation===Ka){E=!0;let z=Qu(x.location,x.matches);z!=null&&He({restoreScrollPosition:z})}return()=>{g=null,_=null,C=null}}function Ku(w,k){return C&&C(w,k.map(z=>Q8(z,x.loaderData)))||w.key}function n3(w,k){if(g&&_){let O=Ku(w,k);g[O]=_()}}function Qu(w,k){if(g){let O=Ku(w,k),z=g[O];if(typeof z=="number")return z}return null}function r3(w){i={},a=Jd(w,s,void 0,i)}return S={get basename(){return d},get future(){return c},get state(){return x},get routes(){return l},get window(){return t},initialize:gr,subscribe:ss,enableScrollRestoration:t3,navigate:Jr,fetch:Kx,revalidate:Wx,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:qu,deleteFetcher:Jx,dispose:ki,getBlocker:e3,deleteBlocker:Zu,_internalFetchControllers:ie,_internalActiveDeferreds:Ee,_internalSetRoutes:r3},S}function wj(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function tc(e,t,r,o,s,i,l,a){let d,c;if(l){d=[];for(let h of t)if(d.push(h),h.route.id===l){c=h;break}}else d=t,c=t[t.length-1];let u=Nu(s||".",Lu(d,i),En(e.pathname,r)||e.pathname,a==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&c&&c.route.index&&!Pu(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&r!=="/"&&(u.pathname=u.pathname==="/"?r:Sn([r,u.pathname])),zr(u)}function Ap(e,t,r,o){if(!o||!wj(o))return{path:r};if(o.formMethod&&!Lj(o.formMethod))return{path:r,error:At(405,{method:o.formMethod})};let s=()=>({path:r,error:At(400,{type:"invalid-body"})}),i=o.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=L2(r);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Kt(l))return s();let g=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((C,_)=>{let[E,N]=_;return""+C+E+"="+N+`
`},""):String(o.body);return{path:r,submission:{formMethod:l,formAction:a,formEncType:o.formEncType,formData:void 0,json:void 0,text:g}}}else if(o.formEncType==="application/json"){if(!Kt(l))return s();try{let g=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:r,submission:{formMethod:l,formAction:a,formEncType:o.formEncType,formData:void 0,json:g,text:void 0}}}catch{return s()}}}re(typeof FormData=="function","FormData is not available in this environment");let d,c;if(o.formData)d=nc(o.formData),c=o.formData;else if(o.body instanceof FormData)d=nc(o.body),c=o.body;else if(o.body instanceof URLSearchParams)d=o.body,c=$p(d);else if(o.body==null)d=new URLSearchParams,c=new FormData;else try{d=new URLSearchParams(o.body),c=$p(d)}catch{return s()}let u={formMethod:l,formAction:a,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Kt(u.formMethod))return{path:r,submission:u};let h=Nn(r);return t&&h.search&&Pu(h.search)&&d.append("index",""),h.search="?"+d,{path:zr(h),submission:u}}function Cj(e,t){let r=e;if(t){let o=e.findIndex(s=>s.route.id===t);o>=0&&(r=e.slice(0,o))}return r}function Mp(e,t,r,o,s,i,l,a,d,c,u,h,g,C,_,E){let N=E?Object.values(E)[0]:_?Object.values(_)[0]:void 0,b=e.createURL(t.location),m=e.createURL(s),p=E?Object.keys(E)[0]:void 0,S=Cj(r,p).filter((F,L)=>{let{route:R}=F;if(R.lazy)return!0;if(R.loader==null)return!1;if(i)return R.loader.hydrate?!0:t.loaderData[R.id]===void 0&&(!t.errors||t.errors[R.id]===void 0);if(_j(t.loaderData,t.matches[L],F)||a.some(J=>J===F.route.id))return!0;let M=t.matches[L],I=F;return Ip(F,Oe({currentUrl:b,currentParams:M.params,nextUrl:m,nextParams:I.params},o,{actionResult:N,defaultShouldRevalidate:l||b.pathname+b.search===m.pathname+m.search||b.search!==m.search||R2(M,I)}))}),x=[];return u.forEach((F,L)=>{if(i||!r.some(ee=>ee.route.id===F.routeId)||c.has(L))return;let R=Co(g,F.path,C);if(!R){x.push({key:L,routeId:F.routeId,path:F.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(L),I=rc(R,F.path),J=!1;h.has(L)?J=!1:d.includes(L)?J=!0:M&&M.state!=="idle"&&M.data===void 0?J=l:J=Ip(I,Oe({currentUrl:b,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:r[r.length-1].params},o,{actionResult:N,defaultShouldRevalidate:l})),J&&x.push({key:L,routeId:F.routeId,path:F.path,matches:R,match:I,controller:new AbortController})}),[S,x]}function _j(e,t,r){let o=!t||r.route.id!==t.route.id,s=e[r.route.id]===void 0;return o||s}function R2(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ip(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function Dp(e,t,r){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let s=r[e.id];re(s,"No route found in manifest");let i={};for(let l in o){let d=s[l]!==void 0&&l!=="hasErrorBoundary";$r(!d,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!d&&!G8.has(l)&&(i[l]=o[l])}Object.assign(s,i),Object.assign(s,Oe({},t(s),{lazy:void 0}))}async function bs(e,t,r,o,s,i,l,a,d){d===void 0&&(d={});let c,u,h,g=E=>{let N,b=new Promise((m,p)=>N=p);return h=()=>N(),t.signal.addEventListener("abort",h),Promise.race([E({request:t,params:r.params,context:d.requestContext}),b])};try{let E=r.route[e];if(r.route.lazy)if(E){let N,b=await Promise.all([g(E).catch(m=>{N=m}),Dp(r.route,i,s)]);if(N)throw N;u=b[0]}else if(await Dp(r.route,i,s),E=r.route[e],E)u=await g(E);else if(e==="action"){let N=new URL(t.url),b=N.pathname+N.search;throw At(405,{method:t.method,pathname:b,routeId:r.route.id})}else return{type:Le.data,data:void 0};else if(E)u=await g(E);else{let N=new URL(t.url),b=N.pathname+N.search;throw At(404,{pathname:b})}re(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(E){c=Le.error,u=E}finally{h&&t.signal.removeEventListener("abort",h)}if(Rj(u)){let E=u.status;if(vj.has(E)){let b=u.headers.get("Location");if(re(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!T2.test(b))b=tc(new URL(t.url),o.slice(0,o.indexOf(r)+1),l,!0,b,a);else if(!d.isStaticRequest){let m=new URL(t.url),p=b.startsWith("//")?new URL(m.protocol+b):new URL(b),v=En(p.pathname,l)!=null;p.origin===m.origin&&v&&(b=p.pathname+p.search+p.hash)}if(d.isStaticRequest)throw u.headers.set("Location",b),u;return{type:Le.redirect,status:E,location:b,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(d.isRouteRequest)throw{type:c===Le.error?Le.error:Le.data,response:u};let N;try{let b=u.headers.get("Content-Type");b&&/\bapplication\/json\b/.test(b)?u.body==null?N=null:N=await u.json():N=await u.text()}catch(b){return{type:Le.error,error:b}}return c===Le.error?{type:c,error:new Ou(E,u.statusText,N),headers:u.headers}:{type:Le.data,data:N,statusCode:u.status,headers:u.headers}}if(c===Le.error)return{type:c,error:u};if(kj(u)){var C,_;return{type:Le.deferred,deferredData:u,statusCode:(C=u.init)==null?void 0:C.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Le.data,data:u}}function vs(e,t,r,o){let s=e.createURL(L2(t)).toString(),i={signal:r};if(o&&Kt(o.formMethod)){let{formMethod:l,formEncType:a}=o;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(o.json)):a==="text/plain"?i.body=o.text:a==="application/x-www-form-urlencoded"&&o.formData?i.body=nc(o.formData):i.body=o.formData}return new Request(s,i)}function nc(e){let t=new URLSearchParams;for(let[r,o]of e.entries())t.append(r,typeof o=="string"?o:o.name);return t}function $p(e){let t=new FormData;for(let[r,o]of e.entries())t.append(r,o);return t}function Ej(e,t,r,o,s){let i={},l=null,a,d=!1,c={};return r.forEach((u,h)=>{let g=t[h].route.id;if(re(!kr(u),"Cannot handle redirect results in processLoaderData"),_o(u)){let C=Is(e,g),_=u.error;o&&(_=Object.values(o)[0],o=void 0),l=l||{},l[C.route.id]==null&&(l[C.route.id]=_),i[g]=void 0,d||(d=!0,a=_2(u.error)?u.error.status:500),u.headers&&(c[g]=u.headers)}else Tr(u)?(s.set(g,u.deferredData),i[g]=u.deferredData.data):i[g]=u.data,u.statusCode!=null&&u.statusCode!==200&&!d&&(a=u.statusCode),u.headers&&(c[g]=u.headers)}),o&&(l=o,i[Object.keys(o)[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:c}}function zp(e,t,r,o,s,i,l,a){let{loaderData:d,errors:c}=Ej(t,r,o,s,a);for(let u=0;u<i.length;u++){let{key:h,match:g,controller:C}=i[u];re(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let _=l[u];if(!(C&&C.signal.aborted))if(_o(_)){let E=Is(e.matches,g==null?void 0:g.route.id);c&&c[E.route.id]||(c=Oe({},c,{[E.route.id]:_.error})),e.fetchers.delete(h)}else if(kr(_))re(!1,"Unhandled fetcher revalidation redirect");else if(Tr(_))re(!1,"Unhandled fetcher deferred data");else{let E=Dn(_.data);e.fetchers.set(h,E)}}return{loaderData:d,errors:c}}function Bp(e,t,r,o){let s=Oe({},t);for(let i of r){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&i.route.loader&&(s[l]=e[l]),o&&o.hasOwnProperty(l))break}return s}function Is(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function Vp(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function At(e,t){let{pathname:r,routeId:o,method:s,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&r&&o?a="You made a "+s+' request to "'+r+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+o+'" does not match URL "'+r+'"'):e===404?(l="Not Found",a='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",s&&r&&o?a="You made a "+s.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":s&&(a='Invalid request method "'+s.toUpperCase()+'"')),new Ou(e||500,l,new Error(a),!0)}function Up(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(kr(r))return{result:r,idx:t}}}function L2(e){let t=typeof e=="string"?Nn(e):e;return zr(Oe({},t,{hash:""}))}function Tj(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Tr(e){return e.type===Le.deferred}function _o(e){return e.type===Le.error}function kr(e){return(e&&e.type)===Le.redirect}function kj(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Rj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Lj(e){return bj.has(e.toLowerCase())}function Kt(e){return xj.has(e.toLowerCase())}async function qp(e,t,r,o,s,i){for(let l=0;l<r.length;l++){let a=r[l],d=t[l];if(!d)continue;let c=e.find(h=>h.route.id===d.route.id),u=c!=null&&!R2(c,d)&&(i&&i[d.route.id])!==void 0;if(Tr(a)&&(s||u)){let h=o[l];re(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await N2(a,h,s).then(g=>{g&&(r[l]=g||r[l])})}}}async function N2(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Le.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Le.error,error:s}}return{type:Le.data,data:e.deferredData.data}}}function Pu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function rc(e,t){let r=typeof t=="string"?Nn(t).search:t.search;if(e[e.length-1].route.index&&Pu(r||""))return e[e.length-1];let o=C2(e);return o[o.length-1]}function Hp(e){let{formMethod:t,formAction:r,formEncType:o,text:s,formData:i,json:l}=e;if(!(!t||!r||!o)){if(s!=null)return{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:void 0,text:s};if(i!=null)return{formMethod:t,formAction:r,formEncType:o,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:l,text:void 0}}}function Qa(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Nj(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function js(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Oj(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Dn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Pj(e,t){try{let r=e.sessionStorage.getItem(k2);if(r){let o=JSON.parse(r);for(let[s,i]of Object.entries(o||{}))i&&Array.isArray(i)&&t.set(s,new Set(i||[]))}}catch{}}function Aj(e,t){if(t.size>0){let r={};for(let[o,s]of t)r[o]=[...s];try{e.sessionStorage.setItem(k2,JSON.stringify(r))}catch(o){$r(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},si.apply(this,arguments)}const ji=T.createContext(null),Au=T.createContext(null),hr=T.createContext(null),fa=T.createContext(null),xr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),O2=T.createContext(null);function Mj(e,t){let{relative:r}=t===void 0?{}:t;yi()||re(!1);let{basename:o,navigator:s}=T.useContext(hr),{hash:i,pathname:l,search:a}=Si(e,{relative:r}),d=l;return o!=="/"&&(d=l==="/"?o:Sn([o,l])),s.createHref({pathname:d,search:a,hash:i})}function yi(){return T.useContext(fa)!=null}function Kr(){return yi()||re(!1),T.useContext(fa).location}function P2(e){T.useContext(hr).static||T.useLayoutEffect(e)}function Ij(){let{isDataRoute:e}=T.useContext(xr);return e?Qj():Dj()}function Dj(){yi()||re(!1);let e=T.useContext(ji),{basename:t,future:r,navigator:o}=T.useContext(hr),{matches:s}=T.useContext(xr),{pathname:i}=Kr(),l=JSON.stringify(Lu(s,r.v7_relativeSplatPath)),a=T.useRef(!1);return P2(()=>{a.current=!0}),T.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let h=Nu(c,JSON.parse(l),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Sn([t,h.pathname])),(u.replace?o.replace:o.push)(h,u.state,u)},[t,o,l,i,e])}const $j=T.createContext(null);function zj(e){let t=T.useContext(xr).outlet;return t&&T.createElement($j.Provider,{value:e},t)}function Si(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=T.useContext(hr),{matches:s}=T.useContext(xr),{pathname:i}=Kr(),l=JSON.stringify(Lu(s,o.v7_relativeSplatPath));return T.useMemo(()=>Nu(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function Bj(e,t,r,o){yi()||re(!1);let{navigator:s}=T.useContext(hr),{matches:i}=T.useContext(xr),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let c=Kr(),u;if(t){var h;let N=typeof t=="string"?Nn(t):t;d==="/"||(h=N.pathname)!=null&&h.startsWith(d)||re(!1),u=N}else u=c;let g=u.pathname||"/",C=d==="/"?g:g.slice(d.length)||"/",_=Co(e,{pathname:C}),E=Yj(_&&_.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Sn([d,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?d:Sn([d,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,r,o);return t&&E?T.createElement(fa.Provider,{value:{location:si({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pe.Pop}},E):E}function Vj(){let e=Kj(),t=_2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),r?T.createElement("pre",{style:s},r):null,null)}const Uj=T.createElement(Vj,null);class qj extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?T.createElement(xr.Provider,{value:this.props.routeContext},T.createElement(O2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hj(e){let{routeContext:t,match:r,children:o}=e,s=T.useContext(ji);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(xr.Provider,{value:t},o)}function Yj(e,t,r,o){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let l=e,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));u>=0||re(!1),l=l.slice(0,Math.min(l.length,u+1))}let d=!1,c=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let h=l[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:g,errors:C}=r,_=h.route.loader&&g[h.route.id]===void 0&&(!C||C[h.route.id]===void 0);if(h.route.lazy||_){d=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((u,h,g)=>{let C,_=!1,E=null,N=null;r&&(C=a&&h.route.id?a[h.route.id]:void 0,E=h.route.errorElement||Uj,d&&(c<0&&g===0?(Xj("route-fallback",!1),_=!0,N=null):c===g&&(_=!0,N=h.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,g+1)),m=()=>{let p;return C?p=E:_?p=N:h.route.Component?p=T.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=u,T.createElement(Hj,{match:h,routeContext:{outlet:u,matches:b,isDataRoute:r!=null},children:p})};return r&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?T.createElement(qj,{location:r.location,revalidation:r.revalidation,component:E,error:C,children:m(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):m()},null)}var A2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(A2||{}),Bl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bl||{});function Wj(e){let t=T.useContext(ji);return t||re(!1),t}function Zj(e){let t=T.useContext(Au);return t||re(!1),t}function Gj(e){let t=T.useContext(xr);return t||re(!1),t}function M2(e){let t=Gj(),r=t.matches[t.matches.length-1];return r.route.id||re(!1),r.route.id}function Kj(){var e;let t=T.useContext(O2),r=Zj(Bl.UseRouteError),o=M2(Bl.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function Qj(){let{router:e}=Wj(A2.UseNavigateStable),t=M2(Bl.UseNavigateStable),r=T.useRef(!1);return P2(()=>{r.current=!0}),T.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,si({fromRouteId:t},i)))},[e,t])}const Yp={};function Xj(e,t,r){!t&&!Yp[e]&&(Yp[e]=!0)}function Fe(e){return zj(e.context)}function Jj(e){let{basename:t="/",children:r=null,location:o,navigationType:s=Pe.Pop,navigator:i,static:l=!1,future:a}=e;yi()&&re(!1);let d=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:d,navigator:i,static:l,future:si({v7_relativeSplatPath:!1},a)}),[d,a,i,l]);typeof o=="string"&&(o=Nn(o));let{pathname:u="/",search:h="",hash:g="",state:C=null,key:_="default"}=o,E=T.useMemo(()=>{let N=En(u,d);return N==null?null:{location:{pathname:N,search:h,hash:g,state:C,key:_},navigationType:s}},[d,u,h,g,C,_,s]);return E==null?null:T.createElement(hr.Provider,{value:c},T.createElement(fa.Provider,{children:r,value:E}))}new Promise(()=>{});function ey(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:T.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Ho.apply(this,arguments)}function I2(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function ty(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ny(e,t){return e.button===0&&(!t||t==="_self")&&!ty(e)}const ry=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],oy=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],sy="6";try{window.__reactRouterVersion=sy}catch{}function iy(e,t){return Fj({basename:t==null?void 0:t.basename,future:Ho({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Y8({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||ly(),routes:e,mapRouteProperties:ey,window:t==null?void 0:t.window}).initialize()}function ly(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ho({},t,{errors:ay(t.errors)})),t}function ay(e){if(!e)return null;let t=Object.entries(e),r={};for(let[o,s]of t)if(s&&s.__type==="RouteErrorResponse")r[o]=new Ou(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let i=window[s.__subType];if(typeof i=="function")try{let l=new i(s.message);l.stack="",r[o]=l}catch{}}if(r[o]==null){let i=new Error(s.message);i.stack="",r[o]=i}}else r[o]=s;return r}const D2=T.createContext({isTransitioning:!1}),dy=T.createContext(new Map),cy="startTransition",Wp=S3[cy],uy="flushSync",Zp=O0[uy];function my(e){Wp?Wp(e):e()}function ys(e){Zp?Zp(e):e()}class py{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",r(o))}})}}function fy(e){let{fallbackElement:t,router:r,future:o}=e,[s,i]=T.useState(r.state),[l,a]=T.useState(),[d,c]=T.useState({isTransitioning:!1}),[u,h]=T.useState(),[g,C]=T.useState(),[_,E]=T.useState(),N=T.useRef(new Map),{v7_startTransition:b}=o||{},m=T.useCallback(F=>{b?my(F):F()},[b]),p=T.useCallback((F,L)=>{let{deletedFetchers:R,unstable_flushSync:M,unstable_viewTransitionOpts:I}=L;R.forEach(ee=>N.current.delete(ee)),F.fetchers.forEach((ee,pe)=>{ee.data!==void 0&&N.current.set(pe,ee.data)});let J=r.window==null||typeof r.window.document.startViewTransition!="function";if(!I||J){M?ys(()=>i(F)):m(()=>i(F));return}if(M){ys(()=>{g&&(u&&u.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:I.currentLocation,nextLocation:I.nextLocation})});let ee=r.window.document.startViewTransition(()=>{ys(()=>i(F))});ee.finished.finally(()=>{ys(()=>{h(void 0),C(void 0),a(void 0),c({isTransitioning:!1})})}),ys(()=>C(ee));return}g?(u&&u.resolve(),g.skipTransition(),E({state:F,currentLocation:I.currentLocation,nextLocation:I.nextLocation})):(a(F),c({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}))},[r.window,g,u,N,m]);T.useLayoutEffect(()=>r.subscribe(p),[r,p]),T.useEffect(()=>{d.isTransitioning&&!d.flushSync&&h(new py)},[d]),T.useEffect(()=>{if(u&&l&&r.window){let F=l,L=u.promise,R=r.window.document.startViewTransition(async()=>{m(()=>i(F)),await L});R.finished.finally(()=>{h(void 0),C(void 0),a(void 0),c({isTransitioning:!1})}),C(R)}},[m,l,u,r.window]),T.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,g,s.location,l]),T.useEffect(()=>{!d.isTransitioning&&_&&(a(_.state),c({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),E(void 0))},[d.isTransitioning,_]),T.useEffect(()=>{},[]);let v=T.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:F=>r.navigate(F),push:(F,L,R)=>r.navigate(F,{state:L,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(F,L,R)=>r.navigate(F,{replace:!0,state:L,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[r]),S=r.basename||"/",x=T.useMemo(()=>({router:r,navigator:v,static:!1,basename:S}),[r,v,S]);return T.createElement(T.Fragment,null,T.createElement(ji.Provider,{value:x},T.createElement(Au.Provider,{value:s},T.createElement(dy.Provider,{value:N.current},T.createElement(D2.Provider,{value:d},T.createElement(Jj,{basename:S,location:s.location,navigationType:s.historyAction,navigator:v,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},s.initialized||r.future.v7_partialHydration?T.createElement(hy,{routes:r.routes,future:r.future,state:s}):t))))),null)}function hy(e){let{routes:t,future:r,state:o}=e;return Bj(t,void 0,o,r)}const xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,by=T.forwardRef(function(t,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:d,to:c,preventScrollReset:u,unstable_viewTransition:h}=t,g=I2(t,ry),{basename:C}=T.useContext(hr),_,E=!1;if(typeof c=="string"&&gy.test(c)&&(_=c,xy))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),S=En(v.pathname,C);v.origin===p.origin&&S!=null?c=S+v.search+v.hash:E=!0}catch{}let N=Mj(c,{relative:s}),b=jy(c,{replace:l,state:a,target:d,preventScrollReset:u,relative:s,unstable_viewTransition:h});function m(p){o&&o(p),p.defaultPrevented||b(p)}return T.createElement("a",Ho({},g,{href:_||N,onClick:E||i?o:m,ref:r,target:d}))}),$2=T.forwardRef(function(t,r){let{"aria-current":o="page",caseSensitive:s=!1,className:i="",end:l=!1,style:a,to:d,unstable_viewTransition:c,children:u}=t,h=I2(t,oy),g=Si(d,{relative:h.relative}),C=Kr(),_=T.useContext(Au),{navigator:E,basename:N}=T.useContext(hr),b=_!=null&&yy(g)&&c===!0,m=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,p=C.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(p=p.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase()),v&&N&&(v=En(v,N)||v);const S=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let x=p===m||!l&&p.startsWith(m)&&p.charAt(S)==="/",F=v!=null&&(v===m||!l&&v.startsWith(m)&&v.charAt(m.length)==="/"),L={isActive:x,isPending:F,isTransitioning:b},R=x?o:void 0,M;typeof i=="function"?M=i(L):M=[i,x?"active":null,F?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(L):a;return T.createElement(by,Ho({},h,{"aria-current":R,className:M,ref:r,style:I,to:d,unstable_viewTransition:c}),typeof u=="function"?u(L):u)});var oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oc||(oc={}));var Gp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gp||(Gp={}));function vy(e){let t=T.useContext(ji);return t||re(!1),t}function jy(e,t){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,d=Ij(),c=Kr(),u=Si(e,{relative:l});return T.useCallback(h=>{if(ny(h,r)){h.preventDefault();let g=o!==void 0?o:zr(c)===zr(u);d(e,{replace:g,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:a})}},[c,d,u,o,s,r,e,i,l,a])}function yy(e,t){t===void 0&&(t={});let r=T.useContext(D2);r==null&&re(!1);let{basename:o}=vy(oc.useViewTransitionState),s=Si(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=En(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=En(r.nextLocation.pathname,o)||r.nextLocation.pathname;return ec(s.pathname,l)!=null||ec(s.pathname,i)!=null}const Fi=({to:e,className:t="",exact:r,children:o,text:s,onClick:i,label:l})=>n.jsx($2,{to:e,onClick:i,end:r&&"end",className:({isActive:a})=>`${t} ${a?"active":""}`,"aria-label":l,children:o||s}),Sy=({prev:e,next:t})=>n.jsxs("div",{className:"flex space",children:[n.jsx(Kp,{caption:"Previous",item:e,className:"prev"}),n.jsx(Kp,{caption:"Next",item:t,className:"next"})]}),Kp=({caption:e,item:t,className:r=""})=>t?n.jsxs(Fi,{to:t.to,className:`prev-next-link ${r}`,children:[n.jsx("h4",{children:e}),n.jsx("div",{children:t.text})]}):n.jsx("div",{}),qe=({menu:e})=>{const{pathname:t}=Kr(),r=e.items.flatMap(l=>l.items||l),o=r.findIndex(l=>l.to===t);if(o<0)return null;const s=o>0?r[o-1]:null,i=o<r.length-1?r[o+1]:null;return n.jsx(Sy,{prev:s,next:i})},Fy={title:"Getting Started",url:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/why-use-it",text:"Why Use It?"}]},Mu={title:"Tutorial",url:"/tutorial",items:[{to:"/tutorial/basic-form",text:"A Basic Form"},{to:"/tutorial/field-validation",text:"Field Validation"},{to:"/tutorial/form-validation",text:"Form Validation"},{to:"/tutorial/form-submission",text:"Form Submission"},{to:"/tutorial/submission-response",text:"Submission Response"},{to:"/tutorial/submission-errors",text:"Submission Errors"},{to:"/tutorial/complete-registration",text:"Registration Form"},{to:"/tutorial/edit-form",text:"Edit Form"},{to:"/tutorial/debugging",text:"Debugging"},{to:"/tutorial/headless-fields",text:"Headless Fields"}]},z2={title:"Form",url:"/form",items:[{to:"/form",code:"Form",exact:!0},{section:"Properties",items:[{to:"/form/properties/fields",code:"fields"},{to:"/form/properties/values",code:"values"},{to:"/form/properties/hidden",code:"hidden"},{to:"/form/properties/children",code:"children"},{to:"/form/properties/debug",code:"debug"},{to:"/form/properties/resetOnSuccess",code:"resetOnSuccess"},{to:"/form/properties/unvalidateOnSuccess",code:"unvalidateOnSuccess"}]},{section:"Validation",items:[{to:"/form/validation/validate",code:"validate"},{to:"/form/validation/validateOnBlur",code:"validateOnBlur"},{to:"/form/validation/validateOnChange",code:"validateOnChange"},{to:"/form/validation/validateOnInvalid",code:"validateOnInvalid"},{to:"/form/validation/minValidateLength",code:"minValidateLength"},{to:"/form/validation/showRequired",code:"showRequired"},{to:"/form/validation/requiredLabel",code:"requiredLabel"},{to:"/form/validation/requiredMessage",code:"requiredMessage"},{to:"/form/validation/showOptional",code:"showOptional"},{to:"/form/validation/optionalLabel",code:"optionalLabel"},{to:"/form/validation/focusInvalidField",code:"focusInvalidField"}]},{section:"Events",items:[{to:"/form/events/onLoad",code:"onLoad"},{to:"/form/events/onReset",code:"onReset"},{to:"/form/events/onSubmit",code:"onSubmit"},{to:"/form/events/onSuccess",code:"onSuccess"},{to:"/form/events/onError",code:"onError"}]},{section:"Functions",items:[{to:"/form/functions/reset",code:"reset"},{to:"/form/functions/unvalidate",code:"unvalidate"},{to:"/form/functions/setFocus",code:"setFocus"},{to:"/form/functions/setValues",code:"setValues"}]}]},B2={title:"Field",url:"/field",items:[{to:"/field",code:"Field",exact:!0},{section:"Properties",items:[{to:"/field/properties/name",code:"name"},{to:"/field/properties/label",code:"label"},{to:"/field/properties/type",code:"type"},{to:"/field/properties/placeholder",code:"placeholder"},{to:"/field/properties/default",code:"default"},{to:"/field/properties/help",code:"help"},{to:"/field/properties/prefix",code:"prefix"},{to:"/field/properties/suffix",code:"suffix"},{to:"/field/properties/className",code:"className"},{to:"/field/properties/children",code:"children"}]},{section:"Validation",items:[{to:"/field/validation/required",code:"required"},{to:"/field/validation/showRequired",code:"showRequired"},{to:"/field/validation/requiredLabel",code:"requiredLabel"},{to:"/field/validation/requiredMessage",code:"requiredMessage"},{to:"/field/validation/optional",code:"optional"},{to:"/field/validation/showOptional",code:"showOptional"},{to:"/field/validation/optionalLabel",code:"optionalLabel"},{to:"/field/validation/prepareValue",code:"prepareValue"},{to:"/field/validation/validate",code:"validate"},{to:"/field/validation/validateOnBlur",code:"validateOnBlur"},{to:"/field/validation/validateOnChange",code:"validateOnChange"},{to:"/field/validation/validateOnInvalid",code:"validateOnInvalid"},{to:"/field/validation/minValidateLength",code:"minValidateLength"}]},{section:"Events",items:[{to:"/field/events/onFocus",code:"onFocus"},{to:"/field/events/onBlur",code:"onBlur"},{to:"/field/events/onChange",code:"onChange"},{to:"/field/events/onValid",code:"onValid"},{to:"/field/events/onInvalid",code:"onInvalid"},{to:"/field/events/onLoad",code:"onLoad"}]},{section:"Functions",items:[{to:"/field/functions/setFocus",code:"setFocus"},{to:"/field/functions/setValue",code:"setValue"},{to:"/field/functions/setValid",code:"setValid"},{to:"/field/functions/setInvalid",code:"setInvalid"},{to:"/field/functions/reset",code:"reset"}]},{section:"Components",items:[{to:"/field/components/Layout",code:"Layout"},{to:"/field/components/Label",code:"Label"},{to:"/field/components/Input",code:"Input"},{to:"/field/components/Message",code:"Message"},{to:"/field/components/UseField",code:"UseField"}]}]},V2={title:"Fields",url:"/fields",items:[{to:"/fields",code:"Fields",exact:!0},{section:"Properties",items:[{to:"/fields/properties/names",code:"names"},{to:"/fields/properties/className",code:"className"},{to:"/fields/properties/grid",code:"grid"},{to:"/fields/properties/gap",code:"gap"},{to:"/fields/properties/stack",code:"stack"}]}]},U2={title:"Fieldset",url:"/fieldset",items:[{to:"/fieldset",code:"Fieldset",exact:!0},{section:"Properties",items:[{to:"/fieldset/properties/legend",code:"legend"},{to:"/fieldset/properties/fields",code:"fields"},{to:"/fieldset/properties/className",code:"className"}]}]},q2={title:"Submit",url:"/submit",items:[{to:"/submit",code:"Submit",exact:!0},{section:"Properties",items:[{to:"/submit/properties/text",code:"text"},{to:"/submit/properties/className",code:"className"},{to:"/submit/properties/onClick",code:"onClick"}]}]},H2={title:"Reset",url:"/reset",items:[{to:"/reset",code:"Reset",exact:!0},{section:"Properties",items:[{to:"/reset/properties/text",code:"text"},{to:"/reset/properties/className",code:"className"},{to:"/reset/properties/onClick",code:"onClick"}]}]},Y2={title:"ResetSubmit",url:"/reset-submit",items:[{to:"/reset-submit",code:"ResetSubmit",exact:!0},{section:"Properties",items:[{to:"/reset-submit/properties/gap",code:"gap"},{to:"/reset-submit/properties/space",code:"space"},{to:"/reset-submit/properties/size",code:"size"},{to:"/reset-submit/properties/reset",code:"reset"},{to:"/reset-submit/properties/submit",code:"submit"},{to:"/reset-submit/properties/className",code:"className"}]}]},W2={title:"CancelSubmit",url:"/cancel-submit",items:[{to:"/cancel-submit",code:"CancelSubmit",exact:!0},{section:"Properties",items:[{to:"/cancel-submit/properties/gap",code:"gap"},{to:"/cancel-submit/properties/space",code:"space"},{to:"/cancel-submit/properties/size",code:"size"},{to:"/cancel-submit/properties/cancel",code:"cancel"},{to:"/cancel-submit/properties/submit",code:"submit"},{to:"/cancel-submit/properties/className",code:"className"}]}]},Z2={title:"Errors",url:"/errors",items:[{to:"/errors",code:"Errors",exact:!0},{section:"Properties",items:[{to:"/errors/properties/fieldErrors",code:"fieldErrors"},{to:"/errors/properties/title",code:"title"},{to:"/errors/properties/prompt",code:"prompt"}]}]},G2={title:"Status",url:"/status",items:[{to:"/status",code:"Status",exact:!0},{section:"Properties",items:[{to:"/status/properties/changed",code:"changed"},{to:"/status/properties/validating",code:"validating"},{to:"/status/properties/valid",code:"valid"},{to:"/status/properties/invalid",code:"invalid"},{to:"/status/properties/submitting",code:"submitting"},{to:"/status/properties/submitted",code:"submitted"},{to:"/status/properties/any",code:"any"}]}]},K2={title:"Debug",url:"/debug",items:[{to:"/debug",code:"Debug",exact:!0},{section:"Properties",items:[{to:"/debug/properties/status",code:"status"},{to:"/debug/properties/values",code:"values"},{to:"/debug/properties/title",code:"title"},{to:"/debug/properties/valuesTitle",code:"valuesTitle"},{to:"/debug/properties/statusTitle",code:"statusTitle"},{to:"/debug/properties/color",code:"color"},{to:"/debug/properties/className",code:"className"}]}]},Q2={title:"text",url:"/text",items:[{to:"/text",code:"text",exact:!0},{section:"Properties",items:[{to:"/text/properties/inline",code:"inline"},{to:"/text/properties/size",code:"size"},{to:"/text/properties/type",code:"type"},{to:"/text/properties/placeholder",code:"placeholder"}]}]},X2={title:"textarea",url:"/textarea",items:[{to:"/textarea",code:"textarea",exact:!0},{section:"Properties",items:[{to:"/textarea/properties/inline",code:"inline"},{to:"/textarea/properties/cols",code:"cols"},{to:"/textarea/properties/rows",code:"rows"},{to:"/textarea/properties/placeholder",code:"placeholder"}]}]},J2={title:"checkbox",url:"/checkbox",items:[{to:"/checkbox",code:"checkbox",exact:!0},{section:"Properties",items:[{to:"/checkbox/properties/text",code:"text"},{to:"/checkbox/properties/border",code:"border"},{to:"/checkbox/properties/inline",code:"inline"},{to:"/checkbox/properties/inputClass",code:"inputClass"},{to:"/checkbox/properties/switch",code:"switch"}]}]},ex={title:"radio",url:"/radio",items:[{to:"/radio",code:"radio",exact:!0},{section:"Properties",items:[{to:"/radio/properties/options",code:"options"},{to:"/radio/properties/inline",code:"inline"},{to:"/radio/properties/border",code:"border"},{to:"/radio/properties/inputClass",code:"inputClass"},{to:"/radio/properties/optionClass",code:"optionClass"},{to:"/radio/properties/optionsClass",code:"optionsClass"}]}]},tx={title:"select",url:"/select",items:[{to:"/select",code:"select",exact:!0},{section:"Properties",items:[{to:"/select/properties/options",code:"options"},{to:"/select/properties/inline",code:"inline"},{to:"/select/properties/placeholder",code:"placeholder"}]}]},nx={title:"Utilities",url:"/utilities",items:[{to:"/utils/addInputType",code:"addInputType()"}]},rx=()=>n.jsx(qe,{menu:W2}),wy=(e,t)=>(r={})=>n.jsx(Fi,{to:e,text:t,...r}),D=(e,t)=>(r={})=>n.jsx(Fi,{to:e,text:n.jsx("code",{children:t}),...r}),me=D("/form","Form"),sc=D("/form/properties/values","values"),_t=D("/form/properties/fields","fields"),ox=D("/form/properties/hidden","hidden"),ic=D("/form/properties/debug","debug"),sx=D("/form/properties/resetOnSuccess","resetOnSuccess"),ix=D("/form/properties/unvalidateOnSuccess","unvalidateOnSuccess"),Cy=D("/form/validation/validate","validate"),_y=D("/form/events/onLoad","onLoad"),un=D("/form/events/onSubmit","onSubmit"),ii=D("/form/events/onSuccess","onSuccess"),Ao=D("/form/events/onError","onError"),Ey=D("/form/events/onReset","onReset"),lc=D("/form/functions/setFocus","setFocus"),Qp=D("/form/functions/setValues","setValues"),Iu=D("/form/functions/reset","reset"),lx=D("/form/functions/unvalidate","unvalidate"),X=D("/field","Field"),Br=D("/field/properties/name","name"),Tn=D("/field/properties/type","type"),Yo=D("/field/properties/label","label"),Ty=D("/field/properties/default","default"),ax=D("/field/properties/prefix","prefix"),dx=D("/field/properties/suffix","suffix"),ky=D("/field/properties/className","className"),Ry=D("/field/properties/children","children"),De=D("/field/validation/required","required"),kn=D("/field/validation/showRequired","showRequired"),ts=D("/field/validation/requiredLabel","requiredLabel"),Du=D("/field/validation/requiredMessage","requiredMessage"),rr=D("/field/validation/showOptional","showOptional"),Wo=D("/field/validation/optionalLabel","optionalLabel"),at=D("/field/validation/validate","validate"),Vt=D("/field/validation/validateOnBlur","validateOnBlur"),Ut=D("/field/validation/validateOnChange","validateOnChange"),Ly=D("/field/validation/validateOnInvalid","validateOnInvalid"),li=D("/field/validation/minValidateLength","minValidateLength"),or=D("/field/events/onFocus","onFocus"),Qr=D("/field/events/onBlur","onBlur"),sr=D("/field/events/onChange","onChange"),ns=D("/field/events/onValid","onValid"),rs=D("/field/events/onInvalid","onInvalid"),wi=D("/field/events/onLoad","onLoad"),Ny=D("/field/functions/setValid","setValid"),Oy=D("/field/functions/setInvalid","setInvalid"),Py=D("/field/functions/reset","reset"),Zo=D("/field/components/Layout","Layout"),Ay=D("/field/components/Label","Label"),ac=D("/field/components/Input","Input"),cx=D("/field/components/Message","Message"),Vl=D("/fields","Fields"),My=D("/fields/properties/names","names"),Iy=D("/fields/properties/grid","grid"),Xp=D("/fieldset","Fieldset"),Dy=D("/fieldset/properties/legend","legend"),Mo=D("/errors","Errors"),ux=D("/errors/properties/fieldErrors","fieldErrors"),Vr=D("/debug","Debug"),mx=D("/reset","Reset"),$y=D("/reset-submit/properties/gap","gap"),zy=D("/reset-submit/properties/space","space"),By=D("/reset-submit/properties/size","size"),Vy=D("/cancel-submit/properties/gap","gap"),Uy=D("/cancel-submit/properties/space","space"),Ci=D("/submit","Submit"),dc=D("/text","Text"),qy=D("/text/properties/inline","inline"),Hy=D("/text/properties/size","size"),Yy=D("/textarea","TextArea"),Wy=D("/textarea/properties/inline","inline"),Zy=D("/textarea/properties/cols","cols"),px=D("/checkbox","Checkbox"),Gy=D("/checkbox/properties/text","text"),fx=D("/radio","Radio"),Ky=D("/radio/properties/options","options"),Qy=D("/radio/properties/optionClass","optionClass"),Xy=D("/radio/properties/optionsClass","optionsClass"),hx=D("/select","Select"),Jy=D("/select/properties/options","options"),e7=D("/input/hidden","Hidden"),t7=wy("/input","Input Types"),n7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"CancelSubmit"}),n.jsxs("p",{className:"intro wide",children:["Renders a cancel button and a ",n.jsx(Ci,{})," button."]}),n.jsxs("p",{children:['This example shows how you might want to toggle between "view"'," ",'and "edit" mode.  Click on the edit button to start editing. The cancel button will then switch back to view mode without saving any changes']}),n.jsx(j,{Component:K4,code:Q4,caption:"CancelSubmit",expand:!0}),n.jsx(rx,{})]}),r7=Object.freeze(Object.defineProperty({__proto__:null,default:n7},Symbol.toStringTag,{value:"Module"})),o7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"CancelSubmit Properties"}),n.jsx(Fe,{}),n.jsx(rx,{})]}),s7=Object.freeze(Object.defineProperty({__proto__:null,default:o7},Symbol.toStringTag,{value:"Module"})),i7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(Wr,{cancel:{className:"outline",text:"Undo Changes"}})]}),l7=`import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const CancelSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit
      cancel={{
        className: 'outline',
        text: 'Undo Changes'
      }}
    />
  </Form>
  /* END */

export default CancelSubmitExample
`,a7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"cancel"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"cancel"})," property can be used to pass properties to the cancel button."]}),n.jsx(j,{Component:i7,code:l7,caption:"reset",undent:2,expand:!0})]}),d7=Object.freeze(Object.defineProperty({__proto__:null,default:a7},Symbol.toStringTag,{value:"Module"})),c7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(Wr,{className:"flex space pad-2 bgc-90 bgd-10 border bdr-2"})]}),u7=`import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

// PRETEND: import { Form, Field, CancelSubmit } from '@abw/badger-form'

const CancelSubmitClass = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit
      className="flex space pad-2 bgc-90 bgd-10 border bdr-2"
    />
  </Form>
  /* END */

export default CancelSubmitClass
`,$=({children:e,align:t="start"})=>n.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),m7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsx($,{children:n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to define your own CSS class for the container.  When this is defined the ",n.jsx(Vy,{})," ","and ",n.jsx(Uy,{})," properties have no effect."]})}),n.jsx(j,{Component:c7,code:u7,caption:"className",undent:2,expand:!0})]}),p7=Object.freeze(Object.defineProperty({__proto__:null,default:m7},Symbol.toStringTag,{value:"Module"})),f7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(Wr,{gap:8})]}),h7=`import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const CancelSubmitGap = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit gap={8}/>
  </Form>
  /* END */

export default CancelSubmitGap
`,x7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The default CSS class for the container uses flexbox and sets a gap of 1rem between the buttons (",n.jsx("code",{children:"flex gap-h-4"}),"). The ",n.jsx("code",{children:"gap"})," property can be passed to change the gap (in units of 0.25rem) between the buttons."]}),n.jsx(j,{Component:f7,code:h7,caption:"gap",undent:2,expand:!0})]}),g7=Object.freeze(Object.defineProperty({__proto__:null,default:x7},Symbol.toStringTag,{value:"Module"})),b7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(Wr,{space:!0,size:"small"})]}),v7=`import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const CancelSubmitSize = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit space size="small"/>
  </Form>
  /* END */

export default CancelSubmitSize
`,j7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"size"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be added to set the overall size of the buttons."]}),n.jsx(j,{Component:b7,code:v7,caption:"space",undent:2,expand:!0})]}),y7=Object.freeze(Object.defineProperty({__proto__:null,default:j7},Symbol.toStringTag,{value:"Module"})),S7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(Wr,{space:!0})]}),F7=`import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const ResetSubmitSpace = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit space/>
  </Form>
  /* END */

export default ResetSubmitSpace
`,w7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"space"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"space"})," property can be added to change the class to ",n.jsx("code",{children:"flex space controls"}),".  This will space the controls to either side of the container."]}),n.jsx(j,{Component:S7,code:F7,caption:"space",undent:2,expand:!0})]}),C7=Object.freeze(Object.defineProperty({__proto__:null,default:w7},Symbol.toStringTag,{value:"Module"})),_7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(Wr,{submit:{className:"blue",text:"Save"}})]}),E7=`import React from 'react'
import { Form, Field, CancelSubmit } from '@/lib/index.js'

const CancelSubmitExample = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <CancelSubmit
      submit={{
        className: 'blue',
        text: 'Save'
      }}
    />
  </Form>
  /* END */

export default CancelSubmitExample
`,T7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submit"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"submit"})," property can be used to pass properties to the ",n.jsx(Ci,{})," component."]}),n.jsx(j,{Component:_7,code:E7,caption:"submit",undent:2,expand:!0})]}),k7=Object.freeze(Object.defineProperty({__proto__:null,default:T7},Symbol.toStringTag,{value:"Module"})),R7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(f,{name:"field2",label:"Field Two",value:"Hello World!"}),n.jsx(U4,{children:n.jsx(ue,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),L7=`import { Form, Field, Changed, ResetSubmit } from '@/lib/index.js'

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

export default ChangedExample`,N7={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},O7=e=>{const t=N7[e]||cu(`Invalid icon name: ${e}`);return cr(t)?{path:t,width:512,height:512}:t},Jp=({path:e,onClick:t,width:r=512,height:o=512,style:s,className:i="",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:`${i} icon`,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${o}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),xx=({name:e,...t})=>e?n.jsx(Jp,{...t,...O7(e)}):n.jsx(Jp,{...t}),dt=({title:e,text:t,children:r})=>n.jsxs("div",{className:"info alert border flex start small shadow-2",children:[n.jsx(xx,{name:"info",className:"side-icon"}),n.jsxs("div",{children:[!!e&&n.jsx("h3",{className:"mar-b-2",children:e}),t||r]})]}),G=e=>n.jsx(dt,{title:"Try it out",...e}),P7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Changed"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),n.jsxs($,{children:[n.jsx("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),n.jsxs(G,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),n.jsx(j,{Component:R7,code:L7,caption:"Changed",expand:!0})]}),A7=Object.freeze(Object.defineProperty({__proto__:null,default:P7},Symbol.toStringTag,{value:"Module"})),M7=()=>n.jsxs(y,{debug:!0,children:[n.jsx(f,{name:"one",type:"checkbox",label:"Checkbox with label",default:!0,text:"I like badgers!"}),n.jsx(f,{name:"two",type:"checkbox",text:"I accept the terms and conditions"}),n.jsx(W,{})]}),I7=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const Checkbox = () =>
  <Form debug>
    <Field
      name="one"
      type="checkbox"
      label="Checkbox with label"
      default={true}
      text="I like badgers!"
    />
    <Field
      name="two"
      type="checkbox"
      text="I accept the terms and conditions"
    />
    <Submit/>
  </Form>

export default Checkbox
`,gx=()=>n.jsx(qe,{menu:J2}),D7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"checkbox"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"checkbox"})," for a checkbox. Use the ",n.jsx("code",{children:"text"})," property to define any text that you want to appear alongside the checkbox.  The ",n.jsx("code",{children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),n.jsx(j,{Component:M7,code:I7,caption:"checkbox",expand:!0}),n.jsx(gx,{})]}),$7=Object.freeze(Object.defineProperty({__proto__:null,default:D7},Symbol.toStringTag,{value:"Module"})),z7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Checkbox Properties"}),n.jsx(Fe,{}),n.jsx(gx,{})]}),B7=Object.freeze(Object.defineProperty({__proto__:null,default:z7},Symbol.toStringTag,{value:"Module"})),V7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",type:"checkbox",text:"Checkbox with a border",border:!0}),n.jsx(f,{name:"two",type:"checkbox",text:"Inline checkbox with border",border:!0,inline:!0})]}),U7=`import React from 'react'
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

export default Border`,q7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"border"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"border"})," property to add a border around the checkbox field."]}),n.jsx(j,{Component:V7,code:U7,caption:"border",undent:2,expand:!0})]}),H7=Object.freeze(Object.defineProperty({__proto__:null,default:q7},Symbol.toStringTag,{value:"Module"})),Y7=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",type:"checkbox",text:"Inline checkbox",inline:!0}),n.jsx(f,{name:"two",type:"checkbox",text:"Inline checkbox with border",border:!0,inline:!0})]}),W7=`import React from 'react'
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

export default Inline`,Z7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width."]}),n.jsx(j,{Component:Y7,code:W7,caption:"inline",undent:2,expand:!0})]}),G7=Object.freeze(Object.defineProperty({__proto__:null,default:Z7},Symbol.toStringTag,{value:"Module"})),K7=()=>n.jsx(y,{children:n.jsx(f,{name:"one",type:"checkbox",text:"Big old checkbox",inputClass:"larger"})}),Q7=`import React from 'react'
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

export default InputClass`,X7=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inputClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"inputClass"})," property can be used to add a CSS class to the checkbox input."]}),n.jsx(j,{Component:K7,code:Q7,caption:"inputClass",undent:2,expand:!0})]}),J7=Object.freeze(Object.defineProperty({__proto__:null,default:X7},Symbol.toStringTag,{value:"Module"})),e9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",type:"checkbox",text:"A switch",switch:!0}),n.jsx(f,{name:"two",type:"checkbox",text:"A round switch",round:!0,switch:!0}),n.jsx(f,{name:"three",type:"checkbox",text:"A square switch",square:!0,switch:!0})]}),t9=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Inline = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="A switch"
      switch
    />
    <Field
      name="two"
      type="checkbox"
      text="A round switch"
      round switch
    />
    <Field
      name="three"
      type="checkbox"
      text="A square switch"
      square switch
    />
  </Form>
  /* END */

export default Inline`,n9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"switch"}),n.jsxs("p",{children:["You can add the ",n.jsx("code",{children:"switch"})," property to render the checkbox as a switch.  The ",n.jsx("code",{children:"round"})," and ",n.jsx("code",{children:"square"})," properties can be added to change the style."]}),n.jsx(j,{Component:e9,code:t9,caption:"switch",undent:2,expand:!0})]}),r9=Object.freeze(Object.defineProperty({__proto__:null,default:n9},Symbol.toStringTag,{value:"Module"})),o9=()=>n.jsx(y,{children:n.jsx(f,{name:"one",type:"checkbox",text:"Checkbox with some text"})}),s9=`import React from 'react'
import { Form, Field } from '@/lib/index.js'

const Text = () =>
  /* START */
  <Form>
    <Field
      name="one"
      type="checkbox"
      text="Checkbox with some text"
    />
  </Form>
  /* END */

export default Text`,i9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"text"})," property to add some text to be displayed alongside the checkbox."]}),n.jsx(j,{Component:o9,code:s9,caption:"text",undent:2,expand:!0})]}),l9=Object.freeze(Object.defineProperty({__proto__:null,default:i9},Symbol.toStringTag,{value:"Module"})),a9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),n.jsx(f,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),n.jsx(f,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),n.jsx(ue,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),n.jsx(Nt,{})]}),d9=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebugForm`,te=({links:e})=>n.jsxs("div",{className:"see-also",children:[n.jsx("h3",{children:"See Also"}),n.jsx("ul",{className:"menu",children:e.map((t,r)=>n.jsx("li",{children:n.jsx(t,{})},r))})]}),bx=()=>n.jsx(qe,{menu:K2}),c9=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debug"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Debug"})," component can be used in development to debug your form."]}),n.jsxs($,{children:[n.jsxs("p",{children:['In the words of Robert "Mr T" Burns: ',n.jsx("i",{children:`"The best laid schemes of mice and men gang aft a-gley, and I pity the fool who doesn't have some good debugging tools on hand for when things go a bit pear-shaped"`}),". The example below shows the default behaviour which is to display the form values."]}),n.jsx(G,{children:"Try updating the form values and see how the debugging data changes."})]}),n.jsx(j,{Component:a9,code:d9,caption:"Debug",expand:!0}),n.jsx(te,{links:[ic]}),n.jsx(bx,{})]}),u9=Object.freeze(Object.defineProperty({__proto__:null,default:c9},Symbol.toStringTag,{value:"Module"})),m9=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debug Properties"}),n.jsx(Fe,{}),n.jsx(bx,{})]}),p9=Object.freeze(Object.defineProperty({__proto__:null,default:m9},Symbol.toStringTag,{value:"Module"})),f9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"message",label:"Message"}),n.jsx(Nt,{className:"blue surface-4 border bdr-2 pad-2"})]}),h9=`import React from 'react'
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

export default DebugForm`,x9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"className"})," property to set the CSS class for the debugging container element."]}),n.jsx(j,{Component:f9,code:h9,caption:"className",undent:2,expand:!0})]}),g9=Object.freeze(Object.defineProperty({__proto__:null,default:x9},Symbol.toStringTag,{value:"Module"})),b9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"message",label:"Message"}),n.jsx(Nt,{color:"orange"})]}),v9=`import React from 'react'
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

export default DebugForm`,j9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"color"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"color"})," property to set the color for the table(s).  The default value is ",n.jsx("code",{children:"brand"}),"."]}),n.jsx(j,{Component:b9,code:v9,caption:"color",undent:2,expand:!0})]}),y9=Object.freeze(Object.defineProperty({__proto__:null,default:j9},Symbol.toStringTag,{value:"Module"})),S9={onSubmit:e=>mn(1e3).then(()=>({ok:!0,values:e})),onSuccess:(e,t)=>mn(1e3).then(()=>t.reset()),resetOnSuccess:!1},F9=()=>n.jsxs(y,{debug:!0,...S9,children:[n.jsx(f,{name:"message",label:"Message",required:!0}),n.jsx(ue,{space:!0}),n.jsx(Nt,{status:!0})]}),w9=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebugForm`,C9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"status"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"status"})," property to view the form status. This example includes some dummy handlers to wait 1 second after submission before returning a fake response, and then wait 1 second after receiving that response to reset the form."]}),n.jsx(G,{children:"Try entering a message and then submit the form.  See how the form status changes when the form is submitted and after a response is received.  Also try NOT entering a message to see the invalid state."})]}),n.jsx(j,{Component:F9,code:w9,caption:"status",expand:!0})]}),_9=Object.freeze(Object.defineProperty({__proto__:null,default:C9},Symbol.toStringTag,{value:"Module"})),E9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"message",label:"Message"}),n.jsx(Nt,{status:!0,statusTitle:"Le Status",values:!1})]}),T9=`import React from 'react'
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

export default DebugForm`,k9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"statusTitle"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"statusTitle"})," property to change the title for the status table."]}),n.jsx(j,{Component:E9,code:T9,caption:"statusTitle",undent:2,expand:!0})]}),R9=Object.freeze(Object.defineProperty({__proto__:null,default:k9},Symbol.toStringTag,{value:"Module"})),L9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"message",label:"Message"}),n.jsx(Nt,{title:"Le Debug"})]}),N9=`import React from 'react'
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

export default DebugForm`,O9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"title"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"title"})," property to set the title."]}),n.jsx(j,{Component:L9,code:N9,caption:"title",undent:2,expand:!0})]}),P9=Object.freeze(Object.defineProperty({__proto__:null,default:O9},Symbol.toStringTag,{value:"Module"})),A9=()=>n.jsxs(y,{onSubmit:()=>mn(1e3).then(()=>({ok:!0})),children:[n.jsx(f,{name:"message",label:"Message",required:!0}),n.jsx(ue,{space:!0}),n.jsx(Nt,{status:!0,values:!1})]}),M9=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebugForm`,I9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"values"}),n.jsxs("p",{children:["The default behaviour is to show the form values.  If you don't want to display the values (e.g. if you're only interested in the form status) then you can set ",n.jsx("code",{children:"values"})," to be false."]}),n.jsx(j,{Component:A9,code:M9,caption:"values",expand:!0})]}),D9=Object.freeze(Object.defineProperty({__proto__:null,default:I9},Symbol.toStringTag,{value:"Module"})),$9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"message",label:"Message"}),n.jsx(Nt,{valuesTitle:"Les Values"})]}),z9=`import React from 'react'
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

export default DebugForm`,B9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"valuesTitle"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"valuesTitle"})," property to change the title for the values table."]}),n.jsx(j,{Component:$9,code:z9,caption:"valuesTitle",undent:2,expand:!0})]}),V9=Object.freeze(Object.defineProperty({__proto__:null,default:B9},Symbol.toStringTag,{value:"Module"})),U9=()=>n.jsxs(y,{onSubmit:()=>{throw"This is a simulated error"},children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(Ue,{fieldErrors:!0}),n.jsx(ue,{space:!0})]}),q9=`import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

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

export default ChangedExample`,vx=()=>n.jsx(qe,{menu:Z2}),H9=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Errors"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Errors"})," component can be used to display any form validation errors."]}),n.jsxs($,{children:[n.jsx("p",{children:"A typical example is shown below."}),n.jsx(G,{children:"TODO"})]}),n.jsx(j,{Component:U9,code:q9,caption:"Errors",expand:!0}),n.jsx(vx,{})]}),Y9=Object.freeze(Object.defineProperty({__proto__:null,default:H9},Symbol.toStringTag,{value:"Module"})),W9=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Errors Properties"}),n.jsx(Fe,{}),n.jsx(vx,{})]}),Z9=Object.freeze(Object.defineProperty({__proto__:null,default:W9},Symbol.toStringTag,{value:"Module"})),G9=()=>n.jsxs(y,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(Ue,{fieldErrors:!0}),n.jsx(ue,{space:!0})]}),K9=`import React from 'react'
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

export default ErrorsExample`,Q9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fieldErrors"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"fieldErrors"})," property can be set to have the component display any field validation errors."]}),n.jsx(G,{children:"Try submitting the form without entering anything for Field One."})]}),n.jsx(j,{Component:G9,code:K9,caption:"fieldErrors",undent:2,expand:!0})]}),X9=Object.freeze(Object.defineProperty({__proto__:null,default:Q9},Symbol.toStringTag,{value:"Module"})),J9=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(f,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ue,{fieldErrors:!0,prompt:"Oopsies!  Please try again."}),n.jsx(ue,{space:!0})]}),eS=`import React from 'react'
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

export default ErrorsExample`,tS=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(f,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ue,{fieldErrors:!0,prompt:!1}),n.jsx(ue,{space:!0})]}),nS=`import React from 'react'
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

export default ErrorsExample`,rS=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(f,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ue,{fieldErrors:!0,prompt:e=>e===1?"There is a single error":`There are ${e} errors`}),n.jsx(ue,{space:!0})]}),oS=`import React from 'react'
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

export default TitleFnExample`,sS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prompt"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can be used to set the prompt displayed before any field errors.  You must have the"," ",n.jsx(ux,{})," property set for this to have any effect."]}),n.jsx(G,{children:"Try leaving one or both fields empty to generate validation error(s)."})]}),n.jsx(j,{Component:J9,code:eS,caption:"prompt",undent:2,expand:!0}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"prompt"})," to false if you don't want it displayed."]}),n.jsx(j,{Component:tS,code:nS,caption:"no prompt",undent:2,expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can also be a function.  It will be passed the number of error message so that it can generate an appropriate title."]}),n.jsx(j,{Component:rS,code:oS,caption:"prompt function",undent:2,expand:!0})]}),iS=Object.freeze(Object.defineProperty({__proto__:null,default:sS},Symbol.toStringTag,{value:"Module"})),lS=()=>n.jsxs(y,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(Ue,{title:"Oh Noes!"}),n.jsx(ue,{space:!0})]}),aS=`import React from 'react'
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

export default ErrorsExample`,dS=()=>n.jsxs(y,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(Ue,{title:!1}),n.jsx(ue,{space:!0})]}),cS=`import React from 'react'
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

export default ErrorsExample`,uS=e=>{const t=Object.entries(e).filter(([,r])=>r.match(/[aeiou]/)).map(([r])=>({name:r,message:`${r} cannot contain vowels`}));return t.length?Promise.reject({errors:t}):Promise.resolve({ok:!0})},mS=()=>n.jsxs(y,{onSubmit:uS,children:[n.jsx("h3",{children:"No Vowels Allowed!"}),n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(f,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ue,{fieldErrors:!0,title:e=>e===1?"There is an error!":`There are ${e} errors`}),n.jsx(ue,{space:!0})]}),pS=`import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

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

export default TitleFnExample`,fS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"title"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can be used to set the title for the component."]}),n.jsx(j,{Component:lS,code:aS,caption:"title",undent:2,expand:!0}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"title"})," to false if you don't want it."]}),n.jsx(j,{Component:dS,code:cS,caption:"no title",undent:2,expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can also be a function.  It will be passed the number of error message so that it can generate an appropriate title."]}),n.jsx(G,{children:"Try entering vowels in the fields below.  The title bar for the errors component will depending on there being one or more errors."})]}),n.jsx(j,{Component:mS,code:pS,caption:"title function",expand:!0})]}),hS=Object.freeze(Object.defineProperty({__proto__:null,default:fS},Symbol.toStringTag,{value:"Module"})),xS=()=>n.jsx(y,{children:n.jsx(f,{name:"one",children:n.jsxs("div",{className:"field flex baseline gap-2",children:[n.jsx("label",{className:"nowrap",children:"Field Label"}),n.jsx(ua,{})]})})}),gS=`import { Form, Field, Input } from '@/lib/index.js'

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

export default FormInput`,bS="/badger-form/images/animals/badger.jpg",vS="/badger-form/images/animals/kitten.jpg",jS="/badger-form/images/animals/gorilla.jpg",yS={badger:bS,kitten:vS,gorilla:jS},SS=({animal:e,select:t,selected:r})=>n.jsx("div",{className:`animal ${r?"selected":""}`,onClick:t,children:n.jsx("img",{src:yS[e],width:"120",height:"120",alt:e})}),FS=["badger","gorilla","kitten"],wS=()=>{const{value:e,onChange:t}=rt();return n.jsx("div",{className:"animals",children:FS.map(r=>n.jsx(SS,{animal:r,selected:e===r,select:()=>t(r)},r))})},CS=()=>n.jsxs(y,{children:[n.jsx(f,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:wS}),n.jsx(ue,{reset:{className:"outline"},submit:{className:"blue"}})]}),_S=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PictureForm`,ES=`import { useField } from '@/lib/index.js'
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

export default PictureInput`,TS=`import badgerUrl  from '/images/animals/badger.jpg'
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

export default Picture`,kS=`div.animals {
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
}`,RS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Input"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Input"})," component is included by the ",n.jsx(Zo,{})," ","component to render the input for a field."]}),n.jsxs("p",{children:["You can define your own content for a field to replace the default"," ",n.jsx(Zo,{}),", but still use the default ",n.jsx("code",{children:"Input"})," component to render the correct input for the field type."]}),n.jsx(j,{Component:xS,code:gS,caption:"Default Input",expand:!0}),n.jsx("h2",{children:"Custom Input"}),n.jsxs("p",{children:["You can define your own component to handle the input for a field using the ",n.jsx("code",{children:"Input"})," field property."]}),n.jsxs($,{children:[n.jsx("div",{children:n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from.  We're still using the default field layout which provides us with the label and validation message."]})}),n.jsx(dt,{children:"Click on an animal to select it. Try submitting the form without selecting an animal to see the validation error message in effect."})]}),n.jsx(j,{Component:CS,code:_S,caption:"Picture Form",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"PictureInput"})," Component"]}),n.jsxs($,{children:[n.jsx(Ge,{code:an(ES),caption:"PictureInput",expand:!0}),n.jsxs("div",{children:[n.jsxs("p",{children:["Here's the implementation of the ",n.jsx("code",{children:"PictureInput"})," component."]}),n.jsxs("p",{children:["On line 8 we call ",n.jsx("code",{children:"useField()"})," to get the current field"," ",n.jsx("code",{children:"value"})," and the ",n.jsx("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 11 and render the"," ",n.jsx("code",{children:"Picture"})," component for each.  We pass the ",n.jsx("code",{children:"selected"})," ","flag on line 16 to indicate if the animal name matches the current"," ",n.jsx("code",{children:"value"}),".  We also pass a ",n.jsx("code",{children:"select"})," ","function on line 17 which calls the ",n.jsx("code",{children:"onChange"})," handler to select the animal."]})]})]}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Picture"})," Component"]}),n.jsxs($,{children:[n.jsx(Ge,{code:an(TS),caption:"Picture",expand:!0}),n.jsxs("p",{children:["Here's the ",n.jsx("code",{children:"Picture"})," component.  It simply renders a ",n.jsx("code",{children:"div"})," with an ",n.jsx("code",{children:"onClick"})," handler to call the ",n.jsx("code",{children:"select"})," function passed as a property.  The"," ",n.jsx("code",{children:"animal"})," CSS class is added, along with ",n.jsx("code",{children:"selected"})," ","if the animal is currently selected.  Inside the ",n.jsx("code",{children:"div"})," we render a picture of the animal in an ",n.jsx("code",{children:"img"})," element."]})]}),n.jsx("h2",{children:"Additional Styles"}),n.jsxs($,{children:[n.jsx(Ge,{code:kS,caption:"animals.css",language:"css",expand:!0}),n.jsx("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."})]}),n.jsx("h2",{className:"hint",children:"Picture Credits"}),n.jsxs("ul",{className:"credits",children:[n.jsxs("li",{children:["Badger photo by ",n.jsx("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",n.jsx("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n.jsxs("li",{children:["Gorilla photo by ",n.jsx("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",n.jsx("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n.jsxs("li",{children:["Kitten photo by ",n.jsx("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",n.jsx("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),LS=Object.freeze(Object.defineProperty({__proto__:null,default:RS},Symbol.toStringTag,{value:"Module"})),NS=()=>n.jsx(y,{children:n.jsx(f,{name:"field1",label:"Field One",children:n.jsxs("div",{className:"field",children:[n.jsx(Yr,{}),n.jsx(ni,{})]})})}),OS=`import { Form, Field, Text, Label } from '@/lib/index.js'

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

export default LabelExample`,PS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Label"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Label"})," component can be used to add a label to a"," ",n.jsx(X,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),n.jsx(j,{Component:NS,code:OS,caption:"Label",expand:!0})]}),AS=Object.freeze(Object.defineProperty({__proto__:null,default:PS},Symbol.toStringTag,{value:"Module"})),MS=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Field One",help:"This has implicit layout"}),n.jsx(f,{name:"two",label:"Field Two",help:"This has explicit layout",children:n.jsx(mr,{})})]}),IS=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FormLayout`,DS=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Field One",help:"This is what the layout component does",required:!0,children:e=>n.jsxs("div",{className:$1(e),children:[n.jsx(Yr,{}),n.jsx(ua,{}),n.jsx(gi,{})]})}),n.jsx(W,{})]}),$S=`import { Form, Field, Label, Input, Message, Submit, fieldClass } from '@/lib/index.js'

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

export default FormLayout`,zS=({id:e,topping:t,selected:r,select:o})=>n.jsx("div",{children:n.jsxs("label",{htmlFor:e,className:"checkbox",children:[n.jsx("input",{type:"checkbox",checked:r,onChange:o,id:e}),t]})}),BS=({id:e,toppings:t,selected:r,select:o})=>n.jsx("div",{className:"options",children:t.map(s=>n.jsx(zS,{topping:s,id:`${e}-${s}`,selected:r[s]||!1,select:()=>o(s)},s))}),VS=({value:e,free:t,price:r})=>n.jsx("div",{className:"summary",children:e.map((o,s)=>n.jsxs("div",{className:"selected",children:[n.jsx("div",{children:o}),n.jsx("div",{children:s<t?"Free":r})]},o))}),US=e=>e.reduce((t,r)=>(t[r]=!0,t),{}),qS=(e,t)=>r=>{e[r]=!e[r],t(Object.entries(e).filter(o=>o[1]).map(o=>o[0]))},HS=()=>{const{id:e,value:t,onChange:r,free:o,price:s,toppings:i}=rt(),l=US(t),a=qS(l,r);return n.jsxs("div",{className:"toppings field",children:[n.jsx("p",{className:"wide",children:"Select any extra toppings you want on your pizza."}),n.jsxs("p",{className:"pricing wide",children:["The first ",o," are free. Any additional toppings are ",n.jsx("span",{className:"price",children:s})," each."]}),n.jsx(Yr,{}),n.jsxs("div",{className:"selection",children:[n.jsx(BS,{id:e,toppings:i,value:t,selected:l,select:a}),n.jsx(VS,{value:t,free:o,price:s})]})]})},YS={toppings:{Layout:HS,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},WS=()=>n.jsxs(y,{fields:YS,children:[n.jsx(f,{name:"toppings"}),n.jsx(ue,{space:!0,submit:{text:"Order Pizza",className:"blue"}})]}),ZS=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PizzaForm`,GS=`import { Label, useField } from '@/lib/index.js'
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
export default Toppings`,KS=`// convert the toppings array to an object
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
  }`,QS=`import React from 'react'
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

export default Options`,XS=`import React from 'react'

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

export default Option`,JS=`import React from 'react'

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

export default Summary`,eF=`div.toppings {
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
}`,tF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Layout"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Layout"})," component is inserted as the default content for a ",n.jsx(X,{})," that doesn't have it's own content."]}),n.jsxs("p",{children:["The two fields in the example below both generate the same output. The first implicitly uses the ",n.jsx("code",{children:"Layout"})," for its content, the second includes it explicitly."]}),n.jsx(j,{Component:MS,code:IS,caption:"Default Layout",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Layout"})," component creates a ",n.jsx("code",{children:"div"})," containing the ",n.jsx(Yo,{}),", ",n.jsx(ac,{})," and ",n.jsx(cx,{})," components. The ",n.jsx("code",{children:"div"})," will have the ",n.jsx("code",{children:"field"})," CSS class and possibly other classes based on the state of the field (e.g."," ",n.jsx("code",{children:"valid"}),", ",n.jsx("code",{children:"invalid"}),", etc.)  The"," ",n.jsx("code",{children:"fieldClass()"})," utility function can be used to automatically return the correct CSS classes for the field."]}),n.jsxs("div",{children:[n.jsxs("p",{children:["The example below shows how you can roll your own layout that does the same thing as the default ",n.jsx("code",{children:"Layout"})," component."]}),n.jsxs(G,{children:["Try submitting the form without entering any value in the required field.  You should see that the ",n.jsx("code",{children:"invalid"})," CSS class is added to the field container."]})]})]}),n.jsx(j,{Component:DS,code:$S,caption:"Explicit Layout",expand:!0}),n.jsx("h2",{children:"Custom Layout"}),n.jsxs("p",{children:["You can define your own component to handle the layout for a field using the ",n.jsx("code",{children:"Layout"})," field property."]}),n.jsxs($,{children:[n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),n.jsx(G,{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})]}),n.jsx(j,{Component:WS,code:ZS,caption:"Pizza Form",expand:!0}),n.jsx($,{children:n.jsxs("p",{children:["We're defining the schema for the ",n.jsx("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",n.jsx("code",{children:"Form"})," as the"," ",n.jsx("code",{children:"fields"})," property (line 28). In addition to setting the ",n.jsx("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",n.jsx("code",{children:"free"})," toppings (line 11), the"," ",n.jsx("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",n.jsx("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]})}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Toppings"})," Component"]}),n.jsxs("p",{children:["Here's the implementation of the ",n.jsx("code",{children:"Toppings"})," component."]}),n.jsxs($,{children:[n.jsx(Ge,{code:an(GS),caption:"Toppings",expand:!0}),n.jsxs("div",{children:[n.jsxs("p",{children:["On line 8 we call ",n.jsx("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"value"})," and"," ",n.jsx("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",n.jsx("code",{children:"free"}),", ",n.jsx("code",{children:"price"})," and"," ",n.jsx("code",{children:"toppings"}),"."]}),n.jsxs("p",{children:["We've got two utility functions that we're importing from our ",n.jsx("code",{children:"Utils.js"})," file.  On line 9 we call"," ",n.jsx("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",n.jsx("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",n.jsx("code",{children:"true"}),"). On line 10 we call the ",n.jsx("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",n.jsx("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),n.jsxs("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",n.jsx("code",{children:"free"})," and ",n.jsx("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",n.jsx(Yo,{})," ","component to generate the field label. On line 23 we render a custom"," ",n.jsx("code",{children:"Options"})," component and on line 27 a custom"," ",n.jsx("code",{children:"Summary"})," component."]})]})]}),n.jsx("h2",{children:"Utility Functions"}),n.jsx("p",{children:"Here's the definitions for those utility functions."}),n.jsx(Ge,{code:an(KS),caption:"Utils.js",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Options"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Options"})," component iterates over the available toppings and renders the ",n.jsx("code",{children:"Option"})," component for each.  It passes a custom ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"selected"})," flag and"," ",n.jsx("code",{children:"select"})," function tailored to each option."]}),n.jsx(Ge,{code:an(QS),caption:"Options.jsx",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Option"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),n.jsx(Ge,{code:an(XS),caption:"Option.jsx",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Summary"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),n.jsx(Ge,{code:an(JS),caption:"Summary.jsx",expand:!0}),n.jsx("h2",{children:"Additional Styles"}),n.jsx("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),n.jsx(Ge,{code:eF,caption:"pizza.scss",language:"css",expand:!0})]}),nF=Object.freeze(Object.defineProperty({__proto__:null,default:tF},Symbol.toStringTag,{value:"Module"})),rF=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:n.jsxs(mr,{children:[n.jsx(Yr,{}),n.jsx(ua,{}),n.jsx(gi,{})]})}),n.jsx(W,{})]}),oF=`import { Form, Field, Layout, Label, Input, Message, Submit } from '@/lib/index.js'

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

export default MessageExample`,sF=()=>{const{message:e,help:t}=rt();return n.jsx("div",{className:"small bold mar-t-2 fgc-40 fgd-60",children:e??t})},iF=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",help:"Enter a value",validMessage:"This is fine!",requiredMessage:"You must enter a value",Message:sF,required:!0}),n.jsx(W,{})]}),lF=`import { Form, Field, Submit, useField } from '@/lib/index.js'

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

export default MessageExample`,aF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Message"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Message"})," component is used to add a message underneath a ",n.jsx(X,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),n.jsxs($,{children:[n.jsxs("p",{children:["If you have defined ",n.jsx("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",n.jsx("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",n.jsx("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),n.jsxs(G,{children:["Try submitting the form without entering a value.  You should see the ",n.jsx("code",{children:"help"})," message be replaced by the"," ",n.jsx("code",{children:"requiredMessage"})," error message."]})]}),n.jsx(j,{Component:rF,code:oF,caption:"Message",expand:!0}),n.jsx("h2",{children:"Custom Message Component"}),n.jsxs("p",{children:["You can define your own component to handle the message for a field using the ",n.jsx("code",{children:"Message"})," field property."]}),n.jsx(j,{Component:iF,code:lF,caption:"Custom Message Component",expand:!0})]}),dF=Object.freeze(Object.defineProperty({__proto__:null,default:aF},Symbol.toStringTag,{value:"Module"})),cF=()=>n.jsx(y,{children:n.jsxs(f,{name:"hello",label:"Enter a greeting",children:[n.jsx(mr,{}),e=>n.jsxs("div",{className:"info alert",children:["You have entered: ",e.value]})]})}),uF=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FieldChildrenExample`,mF=()=>n.jsx(y,{children:n.jsxs(f,{name:"hello",label:"Enter a greeting",children:[n.jsx(mr,{}),n.jsx("div",{className:"info alert",children:n.jsx(Z4,{children:e=>`You have entered: ${e.value}`})})]})}),pF=`import { Form, Field, Layout, UseField } from '@/lib/index.js'

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

export default UseFieldExample`,fF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"UseField"}),n.jsxs("p",{children:["The immediate ",n.jsx(Ry,{})," of a ",n.jsx(X,{})," component can be functions that will receive the field context as the first argument."]}),n.jsx(j,{Component:cF,code:uF,caption:"Field Children",expand:!0}),n.jsxs("p",{children:["However, this only works for the immediate children of the ",n.jsx(X,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",n.jsx("code",{children:"div"})," as shown in this example) then you can use the ",n.jsx("code",{children:"UseForm"})," component to provide it."]}),n.jsxs("p",{children:["Don't forget that defining any children of a ",n.jsx(X,{})," component will override the default ",n.jsx(Zo,{})," component, so you'll need to add it manually or define your own layout for the field."]}),n.jsx(j,{Component:mF,code:pF,caption:"UseField",expand:!0})]}),hF=Object.freeze(Object.defineProperty({__proto__:null,default:fF},Symbol.toStringTag,{value:"Module"})),os=()=>n.jsx(qe,{menu:B2}),xF=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Components"}),n.jsx(Fe,{}),n.jsx(os,{})]}),gF=Object.freeze(Object.defineProperty({__proto__:null,default:xF},Symbol.toStringTag,{value:"Module"})),bF=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Events"}),n.jsx(Fe,{}),n.jsx(os,{})]}),vF=Object.freeze(Object.defineProperty({__proto__:null,default:bF},Symbol.toStringTag,{value:"Module"})),jF=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} was blurred`);return n.jsxs(y,{children:[n.jsx(f,{name:"foo",label:"The Foo Field",onBlur:r}),n.jsx(f,{name:"bar",label:"The Bar Field",onBlur:r}),e]})},yF=`import { Form, Field } from '@/lib/index.js'

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
export default OnBlurExample`,SF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onBlur"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onBlur"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),n.jsx(G,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),n.jsx(j,{Component:jF,code:yF,caption:"onFocus",expand:!0}),n.jsx(te,{links:[Vt,or,sr,ns,rs]})]}),FF=Object.freeze(Object.defineProperty({__proto__:null,default:SF},Symbol.toStringTag,{value:"Module"})),wF=`import { Form, Field } from '@/lib/index.js'

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

export default OnChangeExample`,CF=()=>{const[e,t]=T.useState("");return n.jsxs(y,{children:[n.jsx(f,{name:"example",label:"Field with onChange",onChange:r=>t(r.value)}),"Current value: ",e]})},_F=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onChange"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onChange"})," handler to a ",n.jsx(X,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),n.jsx(G,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),n.jsx(j,{Component:CF,code:wF,caption:"onChange",expand:!0}),n.jsx(te,{links:[Ut,Qr,or,ns,rs]})]}),EF=Object.freeze(Object.defineProperty({__proto__:null,default:_F},Symbol.toStringTag,{value:"Module"})),TF=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} was focussed`);return n.jsxs(y,{children:[n.jsx(f,{name:"foo",label:"The Foo Field",onFocus:r}),n.jsx(f,{name:"bar",label:"The Bar Field",onFocus:r}),e]})},kF=`import { Form, Field } from '@/lib/index.js'

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

export default OnFocusExample`,RF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onFocus"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onFocus"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),n.jsx(G,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),n.jsx(j,{Component:TF,code:kF,caption:"onFocus",expand:!0}),n.jsx(te,{links:[Qr,sr,ns,rs]})]}),LF=Object.freeze(Object.defineProperty({__proto__:null,default:RF},Symbol.toStringTag,{value:"Module"})),NF=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} is invalid: ${o.message}`);return n.jsxs(y,{validateOnBlur:!0,children:[n.jsx(f,{name:"foo",label:"Foo Field",required:!0,onInvalid:r}),n.jsx(f,{name:"bar",label:"Bar Field",required:!0,onValid:r,requiredMessage:"You must enter a value"}),e]})},OF=`import { Form, Field } from '@/lib/index.js'

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

export default OnInvalidExample`,PF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onInvalid"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onInvalid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),n.jsxs(G,{children:[n.jsxs("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",n.jsx(Vt,{})," option on the"," ",n.jsx(me,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",n.jsx(De,{})," so they will fail validation (assuming you haven't entered anything) and the ",n.jsx("code",{children:"onInvalid"})," handler will be called."]}),n.jsxs("p",{children:["Also note the use of ",n.jsx(Du,{})," to set a custom message for the second field."]})]})]}),n.jsx(j,{Component:NF,code:OF,caption:"onInvalid",expand:!0}),n.jsx(te,{links:[at,Qr,or,sr,or,sr,ns]})]}),AF=Object.freeze(Object.defineProperty({__proto__:null,default:PF},Symbol.toStringTag,{value:"Module"})),MF=()=>{const[e,t]=T.useState();return n.jsxs(y,{children:[n.jsx(f,{name:"foo",label:"Foo Field",onLoad:t}),n.jsxs("div",{className:"grid-4 gap-2",children:[n.jsx("button",{type:"button",onClick:()=>e.reset(),children:"Reset"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Hello"),children:"Hello"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Goodbye"),children:"Goodbye"}),n.jsx("button",{type:"button",onClick:()=>e.setFocus(),children:"Focus"})]})]})},IF=`import { Form, Field } from '@/lib/index.js'

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

export default OnLoadExample`,DF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onLoad"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onInvalid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),n.jsx(G,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),n.jsx(j,{Component:MF,code:IF,caption:"onLoad"}),n.jsx(te,{links:[or,Qr,sr,ns,rs]})]}),$F=Object.freeze(Object.defineProperty({__proto__:null,default:DF},Symbol.toStringTag,{value:"Module"})),zF=()=>{const[e,t]=T.useState();return n.jsxs(y,{validateOnBlur:!0,children:[n.jsx(f,{name:"foo",label:"Foo Field",required:!0,onValid:r=>t(`${r.name} is valid: ${r.value}`)}),n.jsx(f,{name:"bar",label:"Bar Field",required:!0,onValid:r=>t(`${r.name} is valid: ${r.value}`)}),e]})},BF=`import { Form, Field } from '@/lib/index.js'

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

export default OnValidExample`,VF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onValid"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onValid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),n.jsxs(G,{children:["Enter some text in one of the fields below and then select the other field.  The ",n.jsx("code",{children:"validateOnBlur"})," option on the ",n.jsx(me,{})," ","means that the first field will be validated when it loses focus and the ",n.jsx("code",{children:"onValid"})," handler will be called."]})]}),n.jsx(j,{Component:zF,code:BF,caption:"onValid",expand:!0}),n.jsx(te,{links:[at,or,Qr,sr,rs]})]}),UF=Object.freeze(Object.defineProperty({__proto__:null,default:VF},Symbol.toStringTag,{value:"Module"})),qF=`import { Form, Field } from '@/lib/index.js'

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

export default ResetExample`,HF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(y,{children:[n.jsx(f,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(f,{onLoad:o,value:"Initial value",name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"blue",onClick:e.reset,children:"Reset Field One"}),n.jsx("button",{className:"blue",onClick:r.reset,children:"Reset Field Two"})]})]})},YF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"reset()"})," function can be called to reset a field to its initial state."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"reset()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),n.jsx(G,{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})]}),n.jsx(j,{Component:HF,code:qF,caption:"reset()"}),n.jsx(te,{links:[lc,or,Qr]})]}),WF=Object.freeze(Object.defineProperty({__proto__:null,default:YF},Symbol.toStringTag,{value:"Module"})),ZF=`import { Form, Field } from '@/lib/index.js'

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

export default SetFocusExample`,GF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(y,{children:[n.jsx(f,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(f,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus(),children:"Focus Field One"}),n.jsx("button",{onClick:()=>r==null?void 0:r.setFocus(),children:"Focus Field Two"})]})]})},KF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setFocus()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",n.jsx(wi,{})," property to save a reference to a field context object."]}),n.jsxs("p",{children:["Then call the ",n.jsx("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),n.jsx(G,{children:"Click on one of the buttons to focus the corresponding field."})]}),n.jsx(j,{Component:GF,code:ZF,caption:"setFocus()"}),n.jsxs("p",{children:["You can also focus on fields by name using the ",n.jsx(me,{})," ",n.jsx(lc,{})," method."]}),n.jsx(te,{links:[lc,or,Qr]})]}),QF=Object.freeze(Object.defineProperty({__proto__:null,default:KF},Symbol.toStringTag,{value:"Module"})),XF=`import { Form, Field } from '@/lib/index.js'

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

export default SetInvalidExample`,JF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(y,{children:[n.jsx(f,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(f,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"red",onClick:()=>e.setInvalid(),children:"Invalid Field One"}),n.jsx("button",{className:"red",onClick:()=>r.setInvalid("Naughty!"),children:"Invalid Field Two"})]})]})},ew=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setInvalid()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setInvalid()"})," function can be called to mark a field as invalid."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"setInvalid()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),n.jsx(G,{children:"Click on one of the buttons to set the corresponding field to be invalid."})]}),n.jsx(j,{Component:JF,code:XF,caption:"setFocus()"}),n.jsx(te,{links:[Ny,rs]})]}),tw=Object.freeze(Object.defineProperty({__proto__:null,default:ew},Symbol.toStringTag,{value:"Module"})),nw=`import { Form, Field } from '@/lib/index.js'

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

export default SetValidExample`,rw=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(y,{children:[n.jsx(f,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(f,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"green",onClick:()=>e==null?void 0:e.setValid(),children:"Valid Field One"}),n.jsx("button",{className:"green",onClick:()=>r==null?void 0:r.setValid("Nice one!"),children:"Valid Field Two"})]})]})},ow=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValid()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValid()"})," function can be called to mark a field as valid."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"setValid()"})," method on the field object to make it valid.  An optional argument can be provided as the message to display."]})]}),n.jsx(G,{children:"Click on one of the buttons to set the corresponding field to be valid."})]}),n.jsx(j,{Component:rw,code:nw,caption:"setFocus()"}),n.jsx(te,{links:[Oy,ns]})]}),sw=Object.freeze(Object.defineProperty({__proto__:null,default:ow},Symbol.toStringTag,{value:"Module"})),iw=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,lw=()=>{const[e,t]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(y,{children:n.jsx(f,{onLoad:t,name:"animal",label:"Animal"})}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>e.setValue("Antelope"),children:"Antelope"}),n.jsx("button",{onClick:()=>e.setValue("Badger"),children:"Badger"}),n.jsx("button",{onClick:()=>e.setValue("Camel"),children:"Camel"})]})]})},aw=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,dw=()=>{const[e,t]=T.useState(!1);return n.jsx(n.Fragment,{children:n.jsxs(y,{children:[n.jsx(f,{onLoad:t,name:"animal",label:"Animal"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"green",onClick:r=>{r.preventDefault(),e.setValue("Antelope")},children:"Antelope"}),n.jsx("button",{className:"green",onClick:r=>e.setValue("Badger",r),children:"Badger"}),n.jsx("button",{type:"button",className:"green",onClick:()=>e.setValue("Camel"),children:"Camel"}),n.jsx("button",{onClick:()=>e.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},cw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValue()"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",n.jsx(wi,{})," to capture a reference to the field context object"]}),n.jsx(G,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),n.jsx(j,{Component:lw,code:iw,caption:"setValue()"}),n.jsx("h2",{children:"Beware Buttons That Submit!"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["One thing to be aware of is that the default behaviour of a"," ",n.jsx("code",{children:"button"})," inside a ",n.jsx("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",n.jsx(me,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),n.jsxs("p",{children:['The first "Antelope" button calls the'," ",n.jsx("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",n.jsx("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",n.jsx("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),n.jsxs("div",{children:[n.jsxs("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',n.jsx("code",{children:"type"})," to ",n.jsx("code",{children:"button"})," to override the default button ",n.jsx("code",{children:"type"})," of ",n.jsx("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),n.jsx(G,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),n.jsx(j,{Component:dw,code:aw,caption:"setValue()"}),n.jsxs("p",{children:["You can also set values for one or more fields by name using the"," ",n.jsx(me,{})," ",n.jsx(Qp,{})," method."]}),n.jsx(te,{links:[Qp,Py]})]}),uw=Object.freeze(Object.defineProperty({__proto__:null,default:cw},Symbol.toStringTag,{value:"Module"})),mw=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Functions"}),n.jsx(Fe,{}),n.jsx(os,{})]}),pw=Object.freeze(Object.defineProperty({__proto__:null,default:mw},Symbol.toStringTag,{value:"Module"})),fw=`import { Form, Field } from '@/lib/index.js'

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

export default FieldExample`,hw=()=>n.jsx(y,{children:n.jsx(f,{name:"example",label:"An Example Field",type:"text",required:!0})}),xw=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Component"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Field"})," component is used to render a field inside a ",n.jsx(me,{}),"."]}),n.jsx(j,{Component:hw,code:fw,caption:"Field",expand:!0}),n.jsx(os,{})]}),gw=Object.freeze(Object.defineProperty({__proto__:null,default:xw},Symbol.toStringTag,{value:"Module"})),bw=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Properties"}),n.jsx(Fe,{}),n.jsx(os,{})]}),vw=Object.freeze(Object.defineProperty({__proto__:null,default:bw},Symbol.toStringTag,{value:"Module"})),jw=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default ChildFunctions`,yw=()=>n.jsx(y,{children:n.jsxs(f,{name:"greeting",label:"Enter a greeting",children:[e=>n.jsxs("h2",{className:"mar-t-none",children:["The ",e.name," field"]}),n.jsx(mr,{}),e=>n.jsxs("div",{children:["Current value is: ",e.value]}),e=>n.jsxs("div",{className:"flex gap-2 blue mar-t-4",children:[n.jsx("button",{type:"button",onClick:()=>e.setValue("Foo"),children:"Foo"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Bar"),children:"Bar"})]})]})}),Sw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"children"}),n.jsxs("p",{children:["You can define children of a field, either as components or functions. Components can access the field context via ",n.jsx("code",{children:"useField"}),". Functions receive the field context as the first argument."]}),n.jsxs("p",{children:["Note that if you define children for the field then it will replace the default ",n.jsx(Zo,{})," component.  In this case it's up to you to render the field content."]}),n.jsxs("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",n.jsx(Zo,{})," component manually."]}),n.jsx(j,{Component:yw,code:jw,caption:"children",expand:!0})]}),Fw=Object.freeze(Object.defineProperty({__proto__:null,default:Sw},Symbol.toStringTag,{value:"Module"})),ww=`import React from 'react'
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

export default ClassNameExample`,Cw=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Hello World!",className:"width-12rem"}),n.jsx(f,{name:"field2",label:"Hello World!",prefix:"£",suffix:".00",className:"width-12rem"})]}),_w=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the input container."]}),n.jsx(j,{Component:Cw,code:ww,caption:"className",expand:!0})]}),Ew=Object.freeze(Object.defineProperty({__proto__:null,default:_w},Symbol.toStringTag,{value:"Module"})),Tw=`import { Form, Field, Reset } from '@/lib/index.js'

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

export default DefaultExample`,kw=()=>n.jsxs(y,{children:[n.jsx(f,{name:"animal",label:"Favourite animal",default:"Badger"}),n.jsx(pr,{})]}),Rw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"default"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"default"})," property can be used to define a default value for a field."]}),n.jsx(j,{Component:kw,code:Tw,caption:"default"})]}),Lw=Object.freeze(Object.defineProperty({__proto__:null,default:Rw},Symbol.toStringTag,{value:"Module"})),Nw=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HelpExample`,Ow=()=>n.jsxs(y,{children:[n.jsx(f,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),n.jsx(W,{})]}),Pw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"help"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),n.jsx("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),n.jsx(G,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),n.jsx(j,{Component:Ow,code:Nw,caption:"help"}),n.jsx(te,{links:[Br,Yo,De,at,_t]})]}),Aw=Object.freeze(Object.defineProperty({__proto__:null,default:Pw},Symbol.toStringTag,{value:"Module"})),Mw=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,Iw=()=>n.jsx(y,{children:n.jsx(f,{name:"field1",label:"Hello World!"})}),Dw=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,$w={field1:{label:"This is field one"},field2:{label:"This is field two"}},zw=()=>n.jsxs(y,{fields:$w,children:[n.jsx(f,{name:"field1"}),n.jsx(f,{name:"field2",label:"A different label"})]}),Bw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"label"}),n.jsxs("p",{children:["Add a label to the field with the ",n.jsx("code",{children:"label"})," property."]}),n.jsx(j,{Component:Iw,code:Mw,caption:"name",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["Like all other field properties, they can be defined via ",n.jsx(_t,{})," ","on the ",n.jsx(me,{}),".  If you explicitly set a ",n.jsx("code",{children:"label"})," on the"," ",n.jsx(X,{})," then it will take precedence."]}),n.jsxs(dt,{children:["Note how the first field has the ",n.jsx("code",{children:"label"})," defined in the"," ",n.jsx(_t,{})," but the second defines its own ",n.jsx("code",{children:"label"})," ","which is used instead of the one defined in the ",n.jsx(_t,{}),"."]})]}),n.jsx(j,{Component:zw,code:Dw,caption:"Form fields",expand:!0}),n.jsx(te,{links:[Br,_t]})]}),Vw=Object.freeze(Object.defineProperty({__proto__:null,default:Bw},Symbol.toStringTag,{value:"Module"})),Uw=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default NameExample`,qw=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1"}),n.jsx(W,{})]}),Hw=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FormFieldsExample`,Yw={field1:{label:"This is field one",required:!0}},Ww=()=>n.jsxs(y,{fields:Yw,children:[n.jsx(f,{name:"field1"}),n.jsx(W,{})]}),Zw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"name"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"name"})," is the only required property for a ",n.jsx(X,{}),". It is used as the key to set the ",n.jsx(me,{})," value."]}),n.jsxs(G,{children:["Enter some text in the input field.  The ",n.jsx(Vr,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),n.jsx(j,{Component:qw,code:Uw,caption:"name",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["You can set the ",n.jsx(_t,{})," property on the ",n.jsx(me,{})," as an object containing additional properties for each field.  The"," ",n.jsx("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",n.jsx(X,{})," will override them."]}),n.jsxs(dt,{children:["Note how the ",n.jsx(X,{})," has now got a ",n.jsx(Yo,{})," and the"," ",n.jsx(De,{})," property is set."]})]}),n.jsx(j,{Component:Ww,code:Hw,caption:"Form fields",expand:!0}),n.jsx(te,{links:[Yo,_t]})]}),Gw=Object.freeze(Object.defineProperty({__proto__:null,default:Zw},Symbol.toStringTag,{value:"Module"})),Kw=`import { Form, Field } from '@/lib/index.js'

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

export default PlaceholderExample`,Qw=()=>n.jsx(y,{children:n.jsx(f,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),Xw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),n.jsx(j,{Component:Qw,code:Kw,caption:"placeholder",expand:!0}),n.jsx(te,{links:[Br,_t]})]}),Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Xw},Symbol.toStringTag,{value:"Module"})),eC=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default PrefixExample`,ef=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"icon",children:n.jsx("path",{d:"M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z",stroke:"currentColor"})}),tC=()=>n.jsxs(y,{children:[n.jsx(f,{name:"money",type:"number",label:"Price",prefix:"$"}),n.jsx(f,{name:"card1",type:"number",label:"Card Number",prefix:ef,required:!0}),n.jsx(f,{name:"card2",type:"number",label:"Card Number",prefix:ef,prefixClass:"shaded lined",required:!0}),n.jsx(W,{})]}),nC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prefix"}),n.jsxs("p",{children:["You can add a ",n.jsx("code",{children:"prefix"})," to a ",n.jsx("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",n.jsx("code",{children:"money"}),", ",n.jsx("code",{children:"date"}),", etc.  The prefix can be text, an SVG icon or any other JSX fragment."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prefixClass"})," property can be used to set a CSS class for the prefix.  Badger CSS provides two built in styles: "," ",n.jsx("code",{children:"lined"})," to add a dividing line, and ",n.jsx("code",{children:"shaded"})," to add some background shading."]}),n.jsx(j,{Component:tC,code:eC,caption:"prefix",expand:!0}),n.jsx(te,{links:[dx]})]}),rC=Object.freeze(Object.defineProperty({__proto__:null,default:nC},Symbol.toStringTag,{value:"Module"})),oC=`import { Form, Field } from '@/lib/index.js'

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

export default SuffixExample`,sC=()=>n.jsx(y,{children:n.jsx(f,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),iC=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default PrefixSuffixExample`,lC=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"icon",children:n.jsx("path",{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z",fill:"currentColor"})}),aC=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"icon",children:n.jsx("path",{d:"M326,364C312.322,364 298.962,362.46 286.149,359.542L266.846,378.846C258.412,387.279 246.994,392 235,392C235,392 224,392 224,392L224,403C224,427.938 203.938,448 179,448C179,448 168,448 168,448L168,459C168,483.937 147.938,504 123,504L53,504C28.062,504 8,483.937 8,459L8,389C8,377.006 12.721,365.588 21.154,357.154C21.154,357.154 152.458,225.851 152.458,225.851C149.54,213.038 148,199.678 148,186C148,87.695 227.695,8 326,8C424.305,8 504,87.695 504,186C504,284.305 424.305,364 326,364ZM56,456L120,456L120,424C120,410.745 130.745,400 144,400L176,400L176,368C176,354.745 186.745,344 200,344L233.809,344L262.042,315.767C268.394,309.415 277.761,307.142 286.317,309.876C298.805,313.866 312.182,316 326,316C397.795,316 456,257.795 456,186C456,114.205 397.795,56 326,56C254.205,56 196,114.205 196,186C196,199.818 198.134,213.195 202.124,225.683C204.858,234.239 202.585,243.606 196.233,249.958L56,390.191L56,456ZM363.942,110.391C384.731,110.391 401.609,127.269 401.609,148.058C401.609,168.847 384.731,185.725 363.942,185.725C343.153,185.725 326.275,168.847 326.275,148.058C326.275,127.269 343.153,110.391 363.942,110.391Z",fill:"currentColor"})}),dC=()=>n.jsxs(y,{children:[n.jsx(f,{name:"password",type:"password",label:"Password with both prefix and suffix",prefix:lC,suffix:aC,prefixClass:"lined shaded",suffixClass:"lined shaded",required:!0}),n.jsx(W,{})]}),cC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"suffix"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"suffix"})," property can be used to a a suffix to a field. This can be text, an SVG icon or other JSX fragment."]}),n.jsx(j,{Component:sC,code:oC,caption:"suffix",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"suffixClass"})," property can be used to set a CSS class for the suffix.  Badger CSS provides two built in styles: "," ",n.jsx("code",{children:"lined"})," to add a dividing line, and ",n.jsx("code",{children:"shaded"})," to add some background shading."]}),n.jsx(j,{Component:dC,code:iC,caption:"prefix and suffix",expand:!0}),n.jsx(te,{links:[ax]})]}),uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"})),mC=`import { Form, Field } from '@/lib/index.js'

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

export default TypeExample`,pC=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Text Field"}),n.jsx(f,{name:"field2",type:"textarea",label:"TextArea Field"}),n.jsx(f,{name:"field3",type:"number",label:"Number Field"}),n.jsx(f,{name:"field4",type:"date",label:"Date Field"}),n.jsx(f,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]}),n.jsx(f,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),n.jsx(f,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),fC=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,hC={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},xC=()=>n.jsxs(y,{fields:hC,children:[n.jsx(f,{name:"field1"}),n.jsx(f,{name:"field2"}),n.jsx(f,{name:"field3"}),n.jsx(f,{name:"field4"}),n.jsx(f,{name:"field5"}),n.jsx(f,{name:"field6"}),n.jsx(f,{name:"field7"})]}),gC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"type"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",n.jsx("code",{children:"text"})," corresponding to the ",n.jsx(dc,{})," input component.  Other values can be"," ",n.jsx("code",{children:"textarea"})," (see ",n.jsx(Yy,{}),"),"," ",n.jsx("code",{children:"checkbox"})," (see ",n.jsx(px,{}),"),"," ",n.jsx("code",{children:"radio"})," (see ",n.jsx(fx,{}),"),"," ",n.jsx("code",{children:"select"})," (see ",n.jsx(hx,{}),") and"," ",n.jsx("code",{children:"hidden"})," (see ",n.jsx(e7,{}),") corresponding to the basic HTML input types."]}),n.jsxs("p",{children:["You can also set ",n.jsx("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",n.jsx("code",{children:"password"}),", ",n.jsx("code",{children:"email"}),","," ",n.jsx("code",{children:"number"}),", ",n.jsx("code",{children:"date"}),", ",n.jsx("code",{children:"color"}),", and so on.  These use the same basic ",n.jsx(dc,{})," input component as for ",n.jsx("code",{children:"text"})," types, but with the ",n.jsx("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),n.jsx(G,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),n.jsx(j,{Component:pC,code:mC,caption:"type",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["As with all other ",n.jsx(X,{})," properties, they can be defined using"," ",n.jsx(_t,{})," set on the ",n.jsx(me,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),n.jsxs(dt,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",n.jsx(Vr,{})," component). Note that the form data will only include fields that are present in the ",n.jsx(me,{}),".  The ",n.jsx("code",{children:"field5"})," field definition is effectively ignored."]})]}),n.jsx(j,{Component:xC,code:fC,caption:"Form fields",expand:!0}),n.jsx(te,{links:[Br,Yo,_t,t7]})]}),bC=Object.freeze(Object.defineProperty({__proto__:null,default:gC},Symbol.toStringTag,{value:"Module"})),vC=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Validation"}),n.jsx(Fe,{}),n.jsx(os,{})]}),jC=Object.freeze(Object.defineProperty({__proto__:null,default:vC},Symbol.toStringTag,{value:"Module"})),yC={alice:!0,bob:!0,charlie:!0},SC={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(e,t,r,o)=>{e.length<3&&o({message:"Your username must be at least 3 characters"}),yC[e.toLowerCase()]?o({message:"Sorry, that username is taken"}):r({message:"That username is available"})}}},FC=()=>n.jsxs(y,{fields:SC,children:[n.jsx(f,{name:"username"}),n.jsx(W,{})]}),wC=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default MinValidateLengthExample`,CC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"minValidateLength"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can set the ",n.jsx(Ut,{})," property flag to enable validation any time the field value changes.  The"," ",n.jsx("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),n.jsxs(G,{children:["Enter a username in the form below.  The usernames ",n.jsx("code",{children:"alice"}),",",n.jsx("code",{children:"bob"})," and ",n.jsx("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),n.jsx(j,{Component:FC,code:wC,caption:"minValidateLength"}),n.jsx(te,{links:[De,at,Vt,Ut]})]}),_C=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"}));function Xr(e){this._maxSize=e,this.clear()}Xr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Xr.prototype.get=function(e){return this._values[e]};Xr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var EC=/[^.^\]^[]+|(?=\[\]|\.\.)/g,jx=/^\d+$/,TC=/^\d/,kC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,RC=/^\s*(['"]?)(.*?)(\1)\s*$/,$u=512,tf=new Xr($u),nf=new Xr($u),rf=new Xr($u),yx={Cache:Xr,split:cc,normalizePath:Xa,setter:function(e){var t=Xa(e);return nf.get(e)||nf.set(e,function(o,s){for(var i=0,l=t.length,a=o;i<l-1;){var d=t[i];if(d==="__proto__"||d==="constructor"||d==="prototype")return o;a=a[t[i++]]}a[t[i]]=s})},getter:function(e,t){var r=Xa(e);return rf.get(e)||rf.set(e,function(s){for(var i=0,l=r.length;i<l;)if(s!=null||!t)s=s[r[i++]];else return;return s})},join:function(e){return e.reduce(function(t,r){return t+(zu(r)||jx.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){LC(Array.isArray(e)?e:cc(e),t,r)}};function Xa(e){return tf.get(e)||tf.set(e,cc(e).map(function(t){return t.replace(RC,"$2")}))}function cc(e){return e.match(EC)||[""]}function LC(e,t,r){var o=e.length,s,i,l,a;for(i=0;i<o;i++)s=e[i],s&&(PC(s)&&(s='"'+s+'"'),a=zu(s),l=!a&&/^\d+$/.test(s),t.call(r,s,a,l,i,e))}function zu(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function NC(e){return e.match(TC)&&!e.match(jx)}function OC(e){return kC.test(e)}function PC(e){return!zu(e)&&(NC(e)||OC(e))}var Sx={exports:{}};Sx.exports=function(e){return Fx(AC(e),e)};Sx.exports.array=Fx;function Fx(e,t){var r=e.length,o=new Array(r),s={},i=r,l=MC(t),a=IC(e);for(t.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||d(e[i],i,new Set);return o;function d(c,u,h){if(h.has(c)){var g;try{g=", node was:"+JSON.stringify(c)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[u]){s[u]=!0;var C=l.get(c)||new Set;if(C=Array.from(C),u=C.length){h.add(c);do{var _=C[--u];d(_,a.get(_),h)}while(u);h.delete(c)}o[--r]=c}}}function AC(e){for(var t=new Set,r=0,o=e.length;r<o;r++){var s=e[r];t.add(s[0]),t.add(s[1])}return Array.from(t)}function MC(e){for(var t=new Map,r=0,o=e.length;r<o;r++){var s=e[r];t.has(s[0])||t.set(s[0],new Set),t.has(s[1])||t.set(s[1],new Set),t.get(s[0]).add(s[1])}return t}function IC(e){for(var t=new Map,r=0,o=e.length;r<o;r++)t.set(e[r],r);return t}const DC=Object.prototype.toString,$C=Error.prototype.toString,zC=RegExp.prototype.toString,BC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",VC=/^Symbol\((.*)\)(.*)$/;function UC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function of(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return UC(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return BC.call(e).replace(VC,"Symbol($1)");const o=DC.call(e).slice(8,-1);return o==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):o==="Error"||e instanceof Error?"["+$C.call(e)+"]":o==="RegExp"?zC.call(e):null}function Jn(e,t){let r=of(e,t);return r!==null?r:JSON.stringify(e,function(o,s){let i=of(this[o],t);return i!==null?i:s},2)}function wx(e){return e==null?[]:[].concat(e)}let Cx,qC=/\$\{\s*(\w+)\s*\}/g;Cx=Symbol.toStringTag;class bt extends Error{static formatError(t,r){const o=r.label||r.path||"this";return o!==r.path&&(r=Object.assign({},r,{path:o})),typeof t=="string"?t.replace(qC,(s,i)=>Jn(r[i])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,o,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Cx]="Error",this.name="ValidationError",this.value=r,this.path=o,this.type=s,this.errors=[],this.inner=[],wx(t).forEach(l=>{if(bt.isError(l)){this.errors.push(...l.errors);const a=l.inner.length?l.inner:[l];this.inner.push(...a)}else this.errors.push(l)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,bt)}}let on={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:o})=>{const s=o!=null&&o!==r?` (cast from the value \`${Jn(o,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Jn(r,!0)}\``+s:`${e} must match the configured type. The validated value was: \`${Jn(r,!0)}\``+s}},Wt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},HC={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},uc={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},YC={isValue:"${path} field must be ${value}"},WC={noUnknown:"${path} field has unspecified keys: ${unknown}"},ZC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},GC={notType:e=>{const{path:t,value:r,spec:o}=e,s=o.types.length;if(Array.isArray(r)){if(r.length<s)return`${t} tuple value has too few items, expected a length of ${s} but got ${r.length} for value: \`${Jn(r,!0)}\``;if(r.length>s)return`${t} tuple value has too many items, expected a length of ${s} but got ${r.length} for value: \`${Jn(r,!0)}\``}return bt.formatError(on.notType,e)}};Object.assign(Object.create(null),{mixed:on,string:Wt,number:HC,date:uc,object:WC,array:ZC,boolean:YC,tuple:GC});const _x=e=>e&&e.__isYupSchema__;class Ul{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:o,then:s,otherwise:i}=r,l=typeof o=="function"?o:(...a)=>a.every(d=>d===o);return new Ul(t,(a,d)=>{var c;let u=l(...a)?s:i;return(c=u==null?void 0:u(d))!=null?c:d})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let o=this.refs.map(i=>i.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),s=this.fn(o,t,r);if(s===void 0||s===t)return t;if(!_x(s))throw new TypeError("conditions must return a schema object");return s.resolve(r)}}const Ji={context:"$",value:"."};class _i{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ji.context,this.isValue=this.key[0]===Ji.value,this.isSibling=!this.isContext&&!this.isValue;let o=this.isContext?Ji.context:this.isValue?Ji.value:"";this.path=this.key.slice(o.length),this.getter=this.path&&yx.getter(this.path,!0),this.map=r.map}getValue(t,r,o){let s=this.isContext?o:this.isValue?t:r;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}_i.prototype.__isYupRef=!0;const Rr=e=>e==null;function so(e){function t({value:r,path:o="",options:s,originalValue:i,schema:l},a,d){const{name:c,test:u,params:h,message:g,skipAbsent:C}=e;let{parent:_,context:E,abortEarly:N=l.spec.abortEarly,disableStackTrace:b=l.spec.disableStackTrace}=s;function m(I){return _i.isRef(I)?I.getValue(r,_,E):I}function p(I={}){var J;const ee=Object.assign({value:r,originalValue:i,label:l.spec.label,path:I.path||o,spec:l.spec},h,I.params);for(const we of Object.keys(ee))ee[we]=m(ee[we]);const pe=new bt(bt.formatError(I.message||g,ee),r,ee.path,I.type||c,(J=I.disableStackTrace)!=null?J:b);return pe.params=ee,pe}const v=N?a:d;let S={path:o,parent:_,type:c,from:s.from,createError:p,resolve:m,options:s,originalValue:i,schema:l};const x=I=>{bt.isError(I)?v(I):I?d(null):v(p())},F=I=>{bt.isError(I)?v(I):a(I)};if(C&&Rr(r))return x(!0);let R;try{var M;if(R=u.call(S,r,S),typeof((M=R)==null?void 0:M.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(R).then(x,F)}}catch(I){F(I);return}x(R)}return t.OPTIONS=e,t}function KC(e,t,r,o=r){let s,i,l;return t?(yx.forEach(t,(a,d,c)=>{let u=d?a.slice(1,a.length-1):a;e=e.resolve({context:o,parent:s,value:r});let h=e.type==="tuple",g=c?parseInt(u,10):0;if(e.innerType||h){if(h&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${l}" must contain an index to the tuple element, e.g. "${l}[0]"`);if(r&&g>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);s=r,r=r&&r[g],e=h?e.spec.types[g]:e.innerType}if(!c){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${l} which is a type: "${e.type}")`);s=r,r=r&&r[u],e=e.fields[u]}i=u,l=d?"["+a+"]":"."+a}),{schema:e,parent:s,parentPath:i}):{parent:s,parentPath:t,schema:e}}class ql extends Set{describe(){const t=[];for(const r of this.values())t.push(_i.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const o of this.values())r.push(t(o));return r}clone(){return new ql(this.values())}merge(t,r){const o=this.clone();return t.forEach(s=>o.add(s)),r.forEach(s=>o.delete(s)),o}}function Eo(e,t=new Map){if(_x(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let o=0;o<e.length;o++)r[o]=Eo(e[o],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[o,s]of e.entries())r.set(o,Eo(s,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const o of e)r.add(Eo(o,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[o,s]of Object.entries(e))r[o]=Eo(s,t)}else throw Error(`Unable to clone ${e}`);return r}class ir{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new ql,this._blacklist=new ql,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(on.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=Eo(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let o=t(this);return this._mutate=r,o}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,o=t.clone();const s=Object.assign({},r.spec,o.spec);return o.spec=s,o.internalTests=Object.assign({},r.internalTests,o.internalTests),o._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),o._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),o.tests=r.tests,o.exclusiveTests=r.exclusiveTests,o.withMutation(i=>{t.tests.forEach(l=>{i.test(l.OPTIONS)})}),o.transforms=[...r.transforms,...o.transforms],o}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let o=r.conditions;r=r.clone(),r.conditions=[],r=o.reduce((s,i)=>i.resolve(s,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,o,s,i;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(o=t.abortEarly)!=null?o:this.spec.abortEarly,recursive:(s=t.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,r={}){let o=this.resolve(Object.assign({value:t},r)),s=r.assert==="ignore-optionality",i=o._cast(t,r);if(r.assert!==!1&&!o.isType(i)){if(s&&Rr(i))return i;let l=Jn(t),a=Jn(i);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${o.type}". 

attempted value: ${l} 
`+(a!==l?`result of cast: ${a}`:""))}return i}_cast(t,r){let o=t===void 0?t:this.transforms.reduce((s,i)=>i.call(this,s,t,this),t);return o===void 0&&(o=this.getDefault(r)),o}_validate(t,r={},o,s){let{path:i,originalValue:l=t,strict:a=this.spec.strict}=r,d=t;a||(d=this._cast(d,Object.assign({assert:!1},r)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:i,value:d,originalValue:l,options:r,tests:c},o,u=>{if(u.length)return s(u,d);this.runTests({path:i,value:d,originalValue:l,options:r,tests:this.tests},o,s)})}runTests(t,r,o){let s=!1,{tests:i,value:l,originalValue:a,path:d,options:c}=t,u=E=>{s||(s=!0,r(E,l))},h=E=>{s||(s=!0,o(E,l))},g=i.length,C=[];if(!g)return h([]);let _={value:l,originalValue:a,path:d,options:c,schema:this};for(let E=0;E<i.length;E++){const N=i[E];N(_,u,function(m){m&&(Array.isArray(m)?C.push(...m):C.push(m)),--g<=0&&h(C)})}}asNestedTest({key:t,index:r,parent:o,parentPath:s,originalParent:i,options:l}){const a=t??r;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const d=typeof a=="number";let c=o[a];const u=Object.assign({},l,{strict:!0,parent:o,value:c,originalValue:i[a],key:void 0,[d?"index":"key"]:a,path:d||a.includes(".")?`${s||""}[${c?a:`"${a}"`}]`:(s?`${s}.`:"")+t});return(h,g,C)=>this.resolve(u)._validate(c,u,g,C)}validate(t,r){var o;let s=this.resolve(Object.assign({},r,{value:t})),i=(o=r==null?void 0:r.disableStackTrace)!=null?o:s.spec.disableStackTrace;return new Promise((l,a)=>s._validate(t,r,(d,c)=>{bt.isError(d)&&(d.value=c),a(d)},(d,c)=>{d.length?a(new bt(d,c,void 0,void 0,i)):l(c)}))}validateSync(t,r){var o;let s=this.resolve(Object.assign({},r,{value:t})),i,l=(o=r==null?void 0:r.disableStackTrace)!=null?o:s.spec.disableStackTrace;return s._validate(t,Object.assign({},r,{sync:!0}),(a,d)=>{throw bt.isError(a)&&(a.value=d),a},(a,d)=>{if(a.length)throw new bt(a,t,void 0,void 0,l);i=d}),i}isValid(t,r){return this.validate(t,r).then(()=>!0,o=>{if(bt.isError(o))return!1;throw o})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(o){if(bt.isError(o))return!1;throw o}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):Eo(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const o=this.clone({nullable:t});return o.internalTests.nullable=so({message:r,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),o}optionality(t,r){const o=this.clone({optional:t});return o.internalTests.optionality=so({message:r,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),o}optional(){return this.optionality(!0)}defined(t=on.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=on.notNull){return this.nullability(!1,t)}required(t=on.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=on.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let o=this.clone(),s=so(r),i=r.exclusive||r.name&&o.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(o.exclusiveTests[r.name]=!!r.exclusive),o.tests=o.tests.filter(l=>!(l.OPTIONS.name===r.name&&(i||l.OPTIONS.test===s.OPTIONS.test))),o.tests.push(s),o}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let o=this.clone(),s=wx(t).map(i=>new _i(i));return s.forEach(i=>{i.isSibling&&o.deps.push(i.key)}),o.conditions.push(typeof r=="function"?new Ul(s,r):Ul.fromOptions(s,r)),o}typeError(t){let r=this.clone();return r.internalTests.typeError=so({message:t,name:"typeError",skipAbsent:!0,test(o){return this.schema._typeCheck(o)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=on.oneOf){let o=this.clone();return t.forEach(s=>{o._whitelist.add(s),o._blacklist.delete(s)}),o.internalTests.whiteList=so({message:r,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,l=i.resolveAll(this.resolve);return l.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:l}})}}),o}notOneOf(t,r=on.notOneOf){let o=this.clone();return t.forEach(s=>{o._blacklist.add(s),o._whitelist.delete(s)}),o.internalTests.blacklist=so({message:r,name:"notOneOf",test(s){let i=this.schema._blacklist,l=i.resolveAll(this.resolve);return l.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:l}}):!0}}),o}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:o,meta:s,optional:i,nullable:l}=r.spec;return{meta:s,label:o,optional:i,nullable:l,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(d=>({name:d.OPTIONS.name,params:d.OPTIONS.params})).filter((d,c,u)=>u.findIndex(h=>h.name===d.name)===c)}}}ir.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])ir.prototype[`${e}At`]=function(t,r,o={}){const{parent:s,parentPath:i,schema:l}=KC(this,t,r,o.context);return l[e](s&&s[i],Object.assign({},o,{parent:s,path:t}))};for(const e of["equals","is"])ir.prototype[e]=ir.prototype.oneOf;for(const e of["not","nope"])ir.prototype[e]=ir.prototype.notOneOf;let QC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,XC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,JC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,e_=e=>Rr(e)||e===e.trim(),t_={}.toString();function kt(){return new Ex}class Ex extends ir{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,o)=>{if(!o.spec.coerce||o.isType(t)||Array.isArray(t))return t;const s=t!=null&&t.toString?t.toString():t;return s===t_?t:s})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||on.required,name:"required",skipAbsent:!0,test:o=>!!o.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=Wt.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(o){return o.length===this.resolve(t)}})}min(t,r=Wt.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o.length>=this.resolve(t)}})}max(t,r=Wt.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(o){return o.length<=this.resolve(t)}})}matches(t,r){let o=!1,s,i;return r&&(typeof r=="object"?{excludeEmptyString:o=!1,message:s,name:i}=r:s=r),this.test({name:i||"matches",message:s||Wt.matches,params:{regex:t},skipAbsent:!0,test:l=>l===""&&o||l.search(t)!==-1})}email(t=Wt.email){return this.matches(QC,{name:"email",message:t,excludeEmptyString:!0})}url(t=Wt.url){return this.matches(XC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Wt.uuid){return this.matches(JC,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Wt.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:e_})}lowercase(t=Wt.lowercase){return this.transform(r=>Rr(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Rr(r)||r===r.toLowerCase()})}uppercase(t=Wt.uppercase){return this.transform(r=>Rr(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Rr(r)||r===r.toUpperCase()})}}kt.prototype=Ex.prototype;const n_=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function xn(e,t=0){return Number(e)||t}function r_(e){const t=n_.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:xn(t[1]),month:xn(t[2],1)-1,day:xn(t[3],1),hour:xn(t[4]),minute:xn(t[5]),second:xn(t[6]),millisecond:t[7]?xn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:xn(t[10]),minuteOffset:xn(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let o=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(o=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(o=0-o)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+o,r.second,r.millisecond)}let o_=new Date(""),s_=e=>Object.prototype.toString.call(e)==="[object Date]";class Bu extends ir{constructor(){super({type:"date",check(t){return s_(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,o)=>!o.spec.coerce||o.isType(t)||t===null?t:(t=r_(t),isNaN(t)?Bu.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let o;if(_i.isRef(t))o=t;else{let s=this.cast(t);if(!this._typeCheck(s))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);o=s}return o}min(t,r=uc.min){let o=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(s){return s>=this.resolve(o)}})}max(t,r=uc.max){let o=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(s){return s<=this.resolve(o)}})}}Bu.INVALID_DATE=o_;const sf=e=>kt().trim().min(3,"If you enter a value it must be 3 characters or more").validate(e),i_=()=>n.jsxs(y,{showOptional:!0,children:[n.jsx(f,{name:"field1",label:"This must have a value",validate:sf}),n.jsx(f,{name:"field2",label:"This may have a value",validate:sf,optional:!0}),n.jsx(W,{})]}),l_=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
import * as yup  from 'yup'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const validate = value => yup
  .string()
  .trim()
  .min(3, 'If you enter a value it must be 3 characters or more')
  .validate(value)

const Required = () =>
  <Form showOptional>
    <Field
      name="field1"
      label="This must have a value"
      validate={validate}
    />
    <Field
      name="field2"
      label="This may have a value"
      validate={validate}
      optional
    />
    <Submit/>
  </Form>

export default Required`,a_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optional"}),n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"optional"})," property to a field to explicitly mark it as being optional.  In many cases this won't have any effect as a field is assumed to be optional if it isn's explicitly marked as being ",n.jsx(De,{})," ","."]}),n.jsxs("p",{children:["However, if a ",n.jsx(at,{})," function is defined for a field then it will always be run, even if the field value is empty. If you only want the ",n.jsx(at,{})," function to be run if a value has been entered then you can add the ",n.jsx("code",{children:"optional"})," property to the field.  In this case an empty value will be accepted and the"," ",n.jsx(at,{})," function will only be run if the user has entered something in the field"]}),n.jsxs("p",{children:["In this example there is a ",n.jsx(at,{})," function which asserts that the value entered is at least 3 characters long.  The first field behaves as usual - you must enter a value and it must pass the validation function.  The second field has the ",n.jsx("code",{children:"optional"})," property set. In this case an empty value is acceptable, but if you do enter a value then it must pass validation."]}),n.jsx(j,{Component:i_,code:l_,caption:"optional",expand:!0}),n.jsx(te,{links:[rr,Wo]})]}),d_=Object.freeze(Object.defineProperty({__proto__:null,default:a_},Symbol.toStringTag,{value:"Module"})),c_=`import { Form, Field } from '@/lib/index.js'

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

export default OptionalLabel`,u_=()=>n.jsxs(y,{showOptional:!0,optionalLabel:"Not required",children:[n.jsx(f,{name:"field1",label:"Optional Field"}),n.jsx(f,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),m_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionalLabel"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",n.jsx(De,{}),") that have the"," ",n.jsx(rr,{})," option set.  You can set it on individual"," ",n.jsx(X,{})," components or on the parent ",n.jsx(me,{})," to act as a default for all fields."]}),n.jsx(j,{Component:u_,code:c_,caption:"optionalLabel",expand:!0}),n.jsx(te,{links:[De,kn,rr,ts]})]}),p_=Object.freeze(Object.defineProperty({__proto__:null,default:m_},Symbol.toStringTag,{value:"Module"})),f_=`import { Form, Field } from '@/lib/index.js'

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

export default PrepareValue`,h_={upper:{label:"Converted to UPPER CASE",prepareValue:e=>e.toUpperCase()}},x_=()=>n.jsx(y,{fields:h_,children:n.jsx(f,{name:"upper"})}),g_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prepareValue"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add a ",n.jsx("code",{className:"code",children:"prepareValue"})," function to a ",n.jsx(X,{})," to prepare the value before it's set."]}),n.jsx(G,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),n.jsx(j,{Component:x_,code:f_,caption:"onChange",expand:!0}),n.jsx(te,{links:[at,Vt,Ut]})]}),b_=Object.freeze(Object.defineProperty({__proto__:null,default:g_},Symbol.toStringTag,{value:"Module"})),v_=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Required Field",required:!0}),n.jsx(W,{})]}),j_=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,y_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"required"}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["You can add a ",n.jsx("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),n.jsx(G,{children:"Try submitting the form without entering anything in the field input."})]}),n.jsx(j,{Component:v_,code:j_,caption:"required",expand:!0}),n.jsx(te,{links:[kn,ts,Du,Vt,Ut]})]}),S_=Object.freeze(Object.defineProperty({__proto__:null,default:y_},Symbol.toStringTag,{value:"Module"})),F_=`import { Form, Field } from '@/lib/index.js'

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

export default RequiredLabel`,w_=()=>n.jsxs(y,{showRequired:!0,requiredLabel:"Important!",children:[n.jsx(f,{name:"field1",label:"Required Field",required:!0}),n.jsx(f,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0})]}),C_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredLabel"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",n.jsx(De,{})," fields that have the ",n.jsx(kn,{})," option enabled.  You can set it on individual ",n.jsx(X,{})," components or on the parent ",n.jsx(me,{}),"."]}),n.jsx(j,{Component:w_,code:F_,caption:"requiredLabel",expand:!0}),n.jsx(te,{links:[De,kn,rr,Wo]})]}),__=Object.freeze(Object.defineProperty({__proto__:null,default:C_},Symbol.toStringTag,{value:"Module"})),E_=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default RequiredLabel`,T_=()=>n.jsxs(y,{requiredMessage:"Nothing will come of nothing",children:[n.jsx(f,{name:"foo",label:"Foo",required:!0}),n.jsx(f,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),n.jsx(W,{})]}),k_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredMessage"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",n.jsx(De,{})," fields that aren't completed."]}),n.jsxs("p",{children:["You can set it on individual ",n.jsx(X,{})," components or on the parent"," ",n.jsx(me,{})," to act as the default for all fields."]})]}),n.jsxs(G,{children:["Try submitting the form without entering any values.  You should see the form-wide ",n.jsx("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),n.jsx(j,{Component:T_,code:E_,caption:"requiredMessage",expand:!0}),n.jsx(te,{links:[De,kn,ts,Ut,Vt]})]}),R_=Object.freeze(Object.defineProperty({__proto__:null,default:k_},Symbol.toStringTag,{value:"Module"})),L_=()=>n.jsxs(y,{showOptional:!0,children:[n.jsx(f,{name:"field1",label:"Required Field",required:!0}),n.jsx(f,{name:"field2",label:"Optional Field"})]}),N_=`import { Form, Field } from '@/lib/index.js'

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

export default ShowOptional`,O_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showOptional"}),n.jsxs("p",{children:["If a field is ",n.jsx("b",{children:"NOT"})," marked as ",n.jsx(De,{})," then it is optional. If you set the ",n.jsx("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",n.jsx(X,{})," components or on the parent ",n.jsx(me,{})," to act as a default for all fields."]}),n.jsxs("p",{children:["You can use the ",n.jsx(Wo,{})," property to change the text of the label that is displayed."]}),n.jsx(j,{Component:L_,code:N_,caption:"showOptional",expand:!0}),n.jsx(te,{links:[De,Wo,kn,ts]})]}),P_=Object.freeze(Object.defineProperty({__proto__:null,default:O_},Symbol.toStringTag,{value:"Module"})),A_=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),n.jsx(f,{name:"field2",label:"Optional Field"})]}),M_=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequired`,I_=()=>n.jsxs(y,{showRequired:!0,children:[n.jsx(f,{name:"field1",label:"Required Field",required:!0}),n.jsx(f,{name:"field2",label:"Optional Field"})]}),D_=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequiredForm`,$_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showRequired"}),n.jsxs("p",{children:["If a ",n.jsx(X,{})," is marked as ",n.jsx(De,{})," then the"," ",n.jsx("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),n.jsx(j,{Component:A_,code:M_,caption:"showRequired on Field",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"showRequired"})," property can also be added to the"," ",n.jsx(me,{})," to have it apply to all ",n.jsx(De,{})," fields."]}),n.jsx(j,{Component:I_,code:D_,caption:"showRequired on Form",expand:!0}),n.jsx(te,{links:[De,ts,rr,Wo]})]}),z_=Object.freeze(Object.defineProperty({__proto__:null,default:$_},Symbol.toStringTag,{value:"Module"})),B_={username:{label:"Username",help:"Enter your username",validate:e=>kt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>kt().trim().required("You must enter your password you muppet!").validate(e)}},V_=()=>n.jsxs(y,{fields:B_,children:[n.jsx(nt,{names:"username password"}),n.jsx(W,{})]}),U_=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,q_={username:{label:"Username",help:"Enter your username",validate:async(e,t,r,o)=>{e.match(/badger/i)?r({value:`${e} is a great name`}):o({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},H_=()=>n.jsxs(y,{fields:q_,children:[n.jsx(f,{name:"username"}),n.jsx(W,{})]}),Y_=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValidateExample`,W_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validate"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can use the ",n.jsx(De,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",n.jsx("code",{children:"validate"})," property to define an ",n.jsx("code",{children:"async"})," ","validation function."]}),n.jsxs("p",{children:["In this example we're using"," ",n.jsx("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),n.jsx(G,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),n.jsx(j,{Component:V_,code:U_,caption:"validate"}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",n.jsx("code",{children:"resolve"})," and ",n.jsx("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",n.jsx("code",{children:"resolve"})," function should be passed an object containing the ",n.jsx("code",{children:"value"}),", which may be modified by your function. The ",n.jsx("code",{children:"reject"})," function should be passed an object containing an error ",n.jsx("code",{children:"message"}),", and optionally a new ",n.jsx("code",{children:"value"})," ","for the field."]}),n.jsx(dt,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),n.jsx(j,{Component:H_,code:Y_,caption:"validate"}),n.jsx(te,{links:[De,Vt,Ut]})]}),Z_=Object.freeze(Object.defineProperty({__proto__:null,default:W_},Symbol.toStringTag,{value:"Module"})),G_={username:{label:"Username",help:"Enter your username",validate:e=>kt().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>kt().trim().required("You must enter your password you muppet!").validate(e)}},K_=()=>n.jsxs(y,{fields:G_,validateOnBlur:!0,children:[n.jsx(nt,{names:"username password"}),n.jsx(W,{})]}),Q_=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,X_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnBlur"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",n.jsx(X,{})," components or on the parent ",n.jsx(me,{})," to have it apply to all fields."]}),n.jsx(G,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),n.jsx(j,{Component:K_,code:Q_,caption:"validate"}),n.jsx(te,{links:[De,at,Ut]})]}),J_=Object.freeze(Object.defineProperty({__proto__:null,default:X_},Symbol.toStringTag,{value:"Module"})),eE=`import { Form, Field } from '@/lib/index.js'

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

export default ValidateOnChangeExample`,tE={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:e=>kt().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(e)}},nE=()=>n.jsx(y,{fields:tE,children:n.jsx(f,{name:"vowels"})}),rE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnChange"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",n.jsx(li,{})," ","property can be set to only trigger validation when the input length exceeds a threshold."]}),n.jsx(G,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),n.jsx(j,{Component:nE,code:eE,caption:"validateOnChange"}),n.jsx(te,{links:[De,at,Vt,li]})]}),oE=Object.freeze(Object.defineProperty({__proto__:null,default:rE},Symbol.toStringTag,{value:"Module"})),sE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnInvalid"}),n.jsxs("p",{children:["Fields are normally validated when the form is submitted. The ",n.jsx(Ut,{})," and ",n.jsx(Vt,{})," options can be set to change this."]}),n.jsxs("p",{children:["If a field fails validation it will then switch to validating on change.  This option can be set to ",n.jsx("code",{children:"false"})," to prevent this behaviour."]})]}),iE=Object.freeze(Object.defineProperty({__proto__:null,default:sE},Symbol.toStringTag,{value:"Module"})),lE={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},aE=()=>n.jsx(y,{fields:lE,children:n.jsx(nt,{names:"name message"})}),dE=`import { Form, Fields } from '@/lib/index.js'

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
`,Tx=()=>n.jsx(qe,{menu:V2}),cE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fields"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Fields"})," component can be used to render multiple fields."]}),n.jsxs($,{children:[n.jsx("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),n.jsxs("p",{children:["The ",n.jsx(My,{})," property should be used to specify the list of field names.  It renders each of the fields, collected together in a single"," ",n.jsx("code",{className:"code",children:"div"})," element"]})]}),n.jsx(j,{Component:aE,code:dE,caption:"Fields"}),n.jsx(Tx,{})]}),uE=Object.freeze(Object.defineProperty({__proto__:null,default:cE},Symbol.toStringTag,{value:"Module"})),mE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fields Properties"}),n.jsx(Fe,{}),n.jsx(Tx,{})]}),pE=Object.freeze(Object.defineProperty({__proto__:null,default:mE},Symbol.toStringTag,{value:"Module"})),fE={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},hE=()=>n.jsx(y,{fields:fE,children:n.jsx(nt,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2"})}),xE=`import { Form, Fields } from '@/lib/index.js'

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
`,gE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),n.jsx(j,{Component:hE,code:xE,caption:"className"})]}),bE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),vE={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},jE=()=>n.jsx(y,{fields:vE,children:n.jsx(nt,{names:"forename surname company job_title",grid:2,gap:8})}),yE=`import { Form, Fields } from '@/lib/index.js'

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
`,SE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields when the ",n.jsx(Iy,{})," option is set.  The value should be an integer number of margin units of 0.25rem. The default value is 4 (1rem)."]}),n.jsx(j,{Component:jE,code:yE,caption:"gap"})]}),FE=Object.freeze(Object.defineProperty({__proto__:null,default:SE},Symbol.toStringTag,{value:"Module"})),wE={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},CE=()=>n.jsx(y,{fields:wE,children:n.jsx(nt,{names:"name email",grid:2})}),_E=`import { Form, Fields } from '@/lib/index.js'

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
`,EE={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},TE=()=>n.jsx(y,{fields:EE,children:n.jsx(nt,{names:"one two three",grid:!0})}),kE=`import { Form, Fields } from '@/lib/index.js'

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
`,RE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"grid"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",n.jsx("code",{children:"gap-h-4"})," utility class provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),n.jsx(j,{Component:CE,code:_E,caption:"grid"}),n.jsxs("p",{children:["You can also specify ",n.jsx("code",{children:"grid"})," as the boolean value"," ",n.jsx("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),n.jsx(j,{Component:TE,code:kE,caption:"grid"})]}),LE=Object.freeze(Object.defineProperty({__proto__:null,default:RE},Symbol.toStringTag,{value:"Module"})),NE=`export const fields = {
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
`,kx={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},OE=()=>n.jsx(y,{fields:kx,children:n.jsx(nt,{names:"name message badgers animal"})}),PE=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names="name message badgers animal"/>
  </Form>

export default FieldsExample
`,AE=()=>n.jsx(y,{fields:kx,children:n.jsx(nt,{names:["name","message","badgers","animal"]})}),ME=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names={['name', 'message', 'badgers', 'animal']}/>
  </Form>

export default FieldsExample
`,IE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"names"}),n.jsxs("p",{children:["The ",n.jsx("code",{className:"code",children:"names"})," property should be used to specify the list of field names.  This can be a string of whitespace delimited field names that should be defined in the ",n.jsx(me,{})," ",n.jsx(_t,{}),"."]}),n.jsx(j,{Component:OE,code:PE,caption:"Fields",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"names"})," can also be an array of field names."]}),n.jsx(j,{Component:AE,code:ME,caption:"Fields",expand:!0}),n.jsxs("p",{children:["In the above examples the ",n.jsx("code",{children:"fields"})," are defined in a separate ",n.jsx("code",{children:"Fields.jsx"})," module, shown below."]}),n.jsx(Ge,{code:an(NE),caption:"Fields.jsx"})]}),DE=Object.freeze(Object.defineProperty({__proto__:null,default:IE},Symbol.toStringTag,{value:"Module"})),$E={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},zE=()=>n.jsx(y,{fields:$E,children:n.jsx(nt,{names:"alpha bravo charlie delta echo foxtrot",grid:3,stack:"tablet"})}),BE=`import { Form, Fields } from '@/lib/index.js'

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
`,VE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"stack"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"stack"})," property can be used to define a stacking breakpoint.  This will add the corresponding ",n.jsx("code",{children:"stack-XXX"})," CSS class.  Try resizing your browser window to see the effect.  With a width of less than 800px, the fields will be stacked, otherwise they will be displayed in three columns."]}),n.jsx(j,{Component:zE,code:BE,caption:"stack"})]}),UE=Object.freeze(Object.defineProperty({__proto__:null,default:VE},Symbol.toStringTag,{value:"Module"})),qE=()=>n.jsx(y,{children:n.jsxs(Dr,{children:[n.jsx(f,{name:"one",label:"Field One"}),n.jsx(f,{name:"one",label:"Field Two"})]})}),HE=`import { Form, Field, Fieldset } from '@/lib/index.js'

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
`,Rx=()=>n.jsx(qe,{menu:U2}),YE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fieldset"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Fieldset"})," component can be used to create a field set containing one or more ",n.jsx(X,{})," components."]}),n.jsx(j,{Component:qE,code:HE,caption:"Fieldset",expand:!0}),n.jsx(Rx,{})]}),WE=Object.freeze(Object.defineProperty({__proto__:null,default:YE},Symbol.toStringTag,{value:"Module"})),ZE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fieldset Properties"}),n.jsx(Fe,{}),n.jsx(Rx,{})]}),GE=Object.freeze(Object.defineProperty({__proto__:null,default:ZE},Symbol.toStringTag,{value:"Module"})),KE={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},QE=()=>n.jsx(y,{fields:KE,children:n.jsx(Dr,{legend:"Fieldset Two",fields:"name message",className:"prominent"})}),XE=`import { Form, Fieldset } from '@/lib/index.js'

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
`,JE=`fieldset.prominent {
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
}`,eT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the fieldset container."]}),n.jsx(j,{Component:QE,code:XE,caption:"Fieldset className",expand:!0}),n.jsx("h2",{children:"Additional Styles"}),n.jsx("p",{children:"For completeness, here's the additional CSS we're using to apply the styling in the above example."}),n.jsx(Ge,{code:JE,caption:"fieldset.scss",language:"css",expand:!0})]}),tT=Object.freeze(Object.defineProperty({__proto__:null,default:eT},Symbol.toStringTag,{value:"Module"})),nT={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},rT=()=>n.jsx(y,{fields:nT,children:n.jsx(Dr,{legend:"Fieldset Two",fields:"name message"})}),oT=`import React from 'react'
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
`,sT={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},iT=()=>n.jsx(y,{fields:sT,children:n.jsx(Dr,{legend:"Fieldset Grid",fields:"alpha bravo charlie delta echo foxtrot",grid:2,stack:"laptop"})}),lT=`import React from 'react'
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
`,aT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",n.jsx(Vl,{})," component."]}),n.jsx(j,{Component:rT,code:oT,caption:"fields",expand:!0}),n.jsxs("h2",{children:[n.jsx("span",{className:"font-mono",children:"grid"}),","," ",n.jsx("span",{className:"font-mono",children:"gap"})," and "," ",n.jsx("span",{className:"font-mono",children:"stack"})]}),n.jsxs("p",{children:["Any other properties are forwarded onto the ",n.jsx(Vl,{})," component. For example, you can set the ",n.jsx("code",{children:"grid"}),", ",n.jsx("code",{children:"gap"})," and"," ",n.jsx("code",{children:"stack"})," properties to set the layout to implement a grid layout."]}),n.jsx(j,{Component:iT,code:lT,caption:"Fieldset Grid",expand:!0})]}),dT=Object.freeze(Object.defineProperty({__proto__:null,default:aT},Symbol.toStringTag,{value:"Module"})),cT=()=>n.jsx(y,{children:n.jsxs(Dr,{legend:"Fieldset One",children:[n.jsx(f,{name:"one",label:"Field One"}),n.jsx(f,{name:"one",label:"Field Two"})]})}),uT=`import React from 'react'
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
`,mT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"legend"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"legend"})," property can be used to add a legend to the fieldset container."]}),n.jsx(j,{Component:cT,code:uT,caption:"legend",undent:2,expand:!0})]}),pT=Object.freeze(Object.defineProperty({__proto__:null,default:mT},Symbol.toStringTag,{value:"Module"})),Ei=()=>n.jsx(qe,{menu:z2}),fT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Events"}),n.jsx(Fe,{}),n.jsx(Ei,{})]}),hT=Object.freeze(Object.defineProperty({__proto__:null,default:fT},Symbol.toStringTag,{value:"Module"})),xT=()=>{const[e,t]=T.useState(),r=async s=>(await mn(1e3),Promise.reject({message:`Dummy failed API call with foo: ${s.foo}`})),o=s=>{t(s.message)};return n.jsxs(y,{onSubmit:r,onError:o,debug:!0,children:[n.jsx(f,{name:"foo",label:"Foo Field"}),n.jsx(W,{}),e&&n.jsx("div",{className:"error alert mar-t-2",children:e})]})},gT=`import { Form, Field, Submit } from '@/lib/index.js'
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

export default OnErrorExample`,bT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onError"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onError"})," property can be used to define a function that will be called in the event of a failed submission of the form."]}),n.jsx(j,{Component:xT,code:gT,caption:"onError"}),n.jsx(te,{links:[un,ii]})]}),vT=Object.freeze(Object.defineProperty({__proto__:null,default:bT},Symbol.toStringTag,{value:"Module"})),jT=()=>{const[e,t]=T.useState(),r=o=>e==null?void 0:e.setValues({animal:o});return n.jsxs(n.Fragment,{children:[n.jsx(y,{onLoad:t,children:n.jsx(f,{name:"animal",label:"Animal"})}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx("button",{onClick:()=>r("Badger"),children:"Badger"}),n.jsx("button",{onClick:()=>r("Ferret"),children:"Ferret"})]})]})},yT=`import { Form, Field } from '@/lib/index.js'

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

export default OnLoadExample`,ST=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onLoad"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onLoad"})," property can be used to define a function that will be called when the form is loaded.  This allows you to capture a reference to the form context object for manipulating the form programmatically."]}),n.jsx(j,{Component:jT,code:yT,caption:"onLoad"})]}),FT=Object.freeze(Object.defineProperty({__proto__:null,default:ST},Symbol.toStringTag,{value:"Module"})),wT=()=>{const[e,t]=T.useState();return n.jsxs(y,{onReset:()=>t("The form was reset"),children:[n.jsx(f,{name:"foo",label:"Foo Field"}),n.jsx(pr,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},CT=`import { Form, Field, Reset } from '@/lib/index.js'

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

export default OnResetExample`,_T=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onReset"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onReset"})," property can be used to define a function that will be called when the form is reset."]}),n.jsx(j,{Component:wT,code:CT,caption:"onReset"}),n.jsx(te,{links:[un,ii,Ao]})]}),ET=Object.freeze(Object.defineProperty({__proto__:null,default:_T},Symbol.toStringTag,{value:"Module"})),TT=()=>{const[e,t]=T.useState(),r=o=>t(`Form submitted, foo is ${o.foo}`);return n.jsxs(y,{onSubmit:r,children:[n.jsx(f,{name:"foo",label:"Foo Field"}),n.jsx(W,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},kT=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default OnSubmitExample`,RT=()=>{throw"The server is on fire.  Please try again later."},LT=()=>n.jsxs(y,{onSubmit:RT,children:[n.jsx(f,{name:"username",label:"Pick a username"}),n.jsx(Ue,{}),n.jsx(W,{})]}),NT=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default OnSubmitThrow`,OT=()=>Promise.reject({error:"Dear Sir/Madam, Fire! Fire! Help me!"}),PT=()=>n.jsxs(y,{onSubmit:OT,children:[n.jsx(f,{name:"message",label:"Message"}),n.jsx(Ue,{}),n.jsx(W,{})]}),AT=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default OnSubmitReject`,MT=e=>Promise.reject({errors:{username:`Sorry, ${e.username} is already taken`}}),IT=()=>n.jsxs(y,{onSubmit:MT,debug:!0,children:[n.jsx(f,{name:"username",label:"Pick a username",required:!0}),n.jsx(f,{name:"password",label:"Enter a password",required:!0}),n.jsx(Ue,{fieldErrors:!0}),n.jsx(W,{})]}),DT=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default OnSubmitFail`,$T=e=>Promise.reject({errors:[{name:"username",message:`Sorry, ${e.username} is already taken`},{field:"password",error:"Your password is too easy to guess"}]}),zT=()=>n.jsxs(y,{onSubmit:$T,children:[n.jsx(f,{name:"username",label:"Pick a username",required:!0}),n.jsx(f,{name:"password",label:"Choose a password",type:"password",required:!0}),n.jsx(Ue,{fieldErrors:!0}),n.jsx(W,{})]}),BT=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default OnSubmitErrors`,VT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onSubmit"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," property can be used to define a function that will be called when the form is submitted and has passed all the relevant validation checks."]}),n.jsx("p",{children:"In most cases this function will be making an API call to submit the form data.  The form values are passed to the function as the first argument.  The second argument is an object containing the form context in case you need it."})]}),n.jsx(j,{Component:TT,code:kT,caption:"onSubmit"}),n.jsx("h2",{children:"Server Error"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["In many cases the ",n.jsx("code",{children:"onSubmit"})," handler will be an asynchronous function which makes an API call.  The server should implement server-side form validation and may need to return a response indicating problems with the submitted fields."]}),n.jsxs("p",{children:["If an ",n.jsx("code",{children:"onSubmit"})," handler throws an error then it will be stored as the ",n.jsx("code",{children:"error"})," property in the form state"," ",". The ",n.jsx(Mo,{})," component can be used to display errors."]})]}),n.jsxs(G,{children:["Try submitting the form.  The ",n.jsx("code",{children:"onSubmit"})," handler throws an error which will be displayed by the ",n.jsx(Mo,{})," component."]})]}),n.jsx(j,{Component:LT,code:NT,caption:"onSubmit Throw",expand:!0}),n.jsxs("p",{children:["An ",n.jsx("code",{children:"onSubmit"})," handler can also return a rejected Promise. It should be an object containing an ",n.jsx("code",{children:"error"})," property."]}),n.jsx(j,{Component:PT,code:AT,caption:"onSubmit Reject",expand:!0}),n.jsx("h2",{children:"Field Errors"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," handler can return an ",n.jsx("code",{children:"errors"})," object as a rejected Promise. This can be an object in which the keys correspond to field names and the values are the error messages for the fields."]}),n.jsxs("p",{children:["The error messages will be set and displayed in the appropriate fields. You can also use the ",n.jsx(Mo,{})," component with the"," ",n.jsx(ux,{})," property to display them."]}),n.jsx(j,{Component:IT,code:DT,caption:"onSubmit errors",expand:!0}),n.jsxs("p",{children:["Alternately, the ",n.jsx("code",{children:"errors"})," returned can be an array of objects. Each object should have a ",n.jsx("code",{children:"name"}),", ",n.jsx("code",{children:"field"})," or"," ",n.jsx("code",{children:"param"})," property to identify the field name, and either an"," ",n.jsx("code",{children:"message"})," or ",n.jsx("code",{children:"error"})," string to provide the error."]}),n.jsx(j,{Component:zT,code:BT,caption:"onSubmit errors",expand:!0}),n.jsx(te,{links:[ii,Ao]})]}),UT=Object.freeze(Object.defineProperty({__proto__:null,default:VT},Symbol.toStringTag,{value:"Module"})),qT=()=>{const[e,t]=T.useState(),r=async s=>(await mn(1e3),Promise.resolve({ok:!0,message:`Dummy API call with foo: ${s.foo}`})),o=s=>{t(s.message)};return n.jsxs(y,{onSubmit:r,onSuccess:o,children:[n.jsx(f,{name:"foo",label:"Foo Field"}),n.jsx(W,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},HT=`import { Form, Field, Submit } from '@/lib/index.js'
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

export default OnSuccessExample`,YT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSuccess"})," property can be used to define a function that will be called in the event of a successful submission of the form."]}),n.jsxs("p",{children:["It will be passed the response data returned from the ",n.jsx(un,{})," ","handler."]}),n.jsx(j,{Component:qT,code:HT,caption:"onSuccess"}),n.jsx(te,{links:[un,Ao]})]}),WT=Object.freeze(Object.defineProperty({__proto__:null,default:YT},Symbol.toStringTag,{value:"Module"})),ZT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Functions"}),n.jsx(Fe,{}),n.jsx(Ei,{})]}),GT=Object.freeze(Object.defineProperty({__proto__:null,default:ZT},Symbol.toStringTag,{value:"Module"})),KT=()=>n.jsxs(y,{children:[n.jsx(f,{name:"color",label:"Color"}),n.jsx(f,{name:"animal",label:"Animal"}),e=>n.jsx("button",{onClick:e.reset,children:"Reset"})]}),QT=`import { Form, Field } from '@/lib/index.js'

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

export default ResetExample`,XT=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(f,{name:"field2",label:"Field Two"}),n.jsx(JT,{})]}),JT=()=>{const{reset:e}=fn();return n.jsx("button",{onClick:e,children:"Reset the Form"})},ek=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseFormReset`,tk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset()"}),n.jsxs($,{children:[n.jsx("div",{children:n.jsxs("p",{children:["You can programmatically reset a form by calling the the ",n.jsx("code",{children:"reset()"})," method."]})}),n.jsx(G,{children:"Enter some values in the fields and then click on the reset button."})]}),n.jsx(j,{Component:KT,code:QT,caption:"reset"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If the buttons (or other controls) that you want to use to reset the form are contained within the form then you can call the ",n.jsx("code",{children:"useForm()"})," function to gain access to the form context."]}),n.jsx(j,{Component:XT,code:ek,caption:"useForm() and reset()"}),n.jsx(te,{links:[sx,lx]})]}),nk=Object.freeze(Object.defineProperty({__proto__:null,default:tk},Symbol.toStringTag,{value:"Module"})),rk=`import { Form, Field } from '@/lib/index.js'

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

export default SetFocusExample`,ok=()=>{const[e,t]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(y,{onLoad:t,children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(f,{name:"field2",label:"Field Two",type:"textarea"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(f,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),n.jsx(f,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]})]}),n.jsx(f,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",optionClass:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),n.jsxs("div",{className:"mar-t-4 grid-fit gap-2",children:[n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field1"),children:"Focus One"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field2"),children:"Focus Two"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field3"),children:"Focus Three"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field4"),children:"Focus Four"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field5"),children:"Focus Five"})]})]})},sk=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseFormFocus`,ik=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(f,{name:"field2",label:"Field Two"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(lf,{name:"field1",caption:"Focus Field One"}),n.jsx(lf,{name:"field2",caption:"Focus Field Two"})]})]}),lf=({name:e,caption:t})=>{const{setFocus:r}=fn();return n.jsx("button",{onClick:o=>{o.preventDefault(),r(e)},children:t})},lk=`import { useForm } from '@/lib/index.js'

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

export default FieldFocusButton`,ak=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setFocus()"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can programmatically set the focus on a ",n.jsx(X,{})," by calling the ",n.jsx("code",{children:"setFocus()"})," method on the ",n.jsx(me,{}),", passing the name of the field that you want to focus as an argument."]}),n.jsxs("p",{children:["You can capture a reference to the form using the ",n.jsx(_y,{})," ","property to set a state variable, as shown in this example."]})]}),n.jsx(G,{children:"Click on one of the buttons to focus on a field."})]}),n.jsx(j,{Component:ok,code:rk,caption:"onLoad() and setFocus()"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",n.jsx(me,{})," then you can call the ",n.jsx("code",{children:"useForm()"})," function to gain access to the form context."]}),n.jsx(j,{Component:ik,code:sk,caption:"useForm() and setFocus()"}),n.jsx("h2",{children:"Preventing Default Event"}),n.jsxs($,{children:[n.jsxs("p",{children:["Be careful to make sure that your buttons call"," ",n.jsx("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",n.jsx("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),n.jsx(Ge,{code:an(lk),expand:!0})]})]}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:ak},Symbol.toStringTag,{value:"Module"})),ck=`import { Form, Field } from '@/lib/index.js'

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

export default SetValues`,uk=()=>{const[e,t]=T.useState(),r=(o,s)=>e==null?void 0:e.setValues({color:o,animal:s});return n.jsxs(n.Fragment,{children:[n.jsxs(y,{onLoad:t,children:[n.jsx(f,{name:"color",label:"Color"}),n.jsx(f,{name:"animal",label:"Animal"})]}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx("button",{onClick:()=>r("Grey","Elephant"),children:"Grey Elephant"}),n.jsx("button",{onClick:()=>r("Red","Fox"),children:"Red Fox"})]})]})},mk=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseSetValues`,pk=()=>n.jsx(n.Fragment,{children:n.jsxs(y,{children:[n.jsx(f,{name:"color",label:"Color"}),n.jsx(f,{name:"animal",label:"Animal"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(af,{color:"Grey",animal:"Elephant"}),n.jsx(af,{color:"Red",animal:"Fox"})]})]})}),af=({color:e,animal:t})=>{const{setValues:r}=fn();return n.jsxs("button",{onClick:o=>{o.preventDefault(),r({color:e,animal:t},o)},children:[e," ",t]})},fk=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseSetValues`,hk=()=>n.jsx(n.Fragment,{children:n.jsxs(y,{children:[n.jsx(f,{name:"color",label:"Color"}),n.jsx(f,{name:"animal",label:"Animal"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(df,{color:"Grey",animal:"Elephant"}),n.jsx(df,{color:"Red",animal:"Fox"})]})]})}),df=({color:e,animal:t})=>{const{setValues:r}=fn();return n.jsxs("button",{onClick:o=>r({color:e,animal:t},o),children:[e," ",t]})},xk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValues()"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",n.jsx("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),n.jsx(G,{children:"Click on one of the buttons to update the form values."})]}),n.jsx(j,{Component:uk,code:ck,caption:"setValues"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If you want to set the values from a component placed inside the"," ",n.jsx("code",{children:"Form"})," component then you can use ",n.jsx("code",{children:"useForm()"})," to get access to the form context."]}),n.jsx(j,{Component:pk,code:mk,caption:"setValues"}),n.jsx("h2",{children:"Preventing Default Event"}),n.jsxs("p",{children:["If you're using a ",n.jsx("code",{children:"button"})," to trigger the call to"," ",n.jsx("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",n.jsx("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",n.jsx("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),n.jsx(j,{Component:hk,code:fk,caption:"setValues"})]}),gk=Object.freeze(Object.defineProperty({__proto__:null,default:xk},Symbol.toStringTag,{value:"Module"})),bk=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name",required:!0}),n.jsx(f,{name:"email",label:"Email Address",required:!0}),e=>n.jsxs("div",{className:"flex space small",children:[n.jsx("button",{type:"button",onClick:()=>e.validate(),children:"Validate"}),n.jsx("button",{type:"button",onClick:()=>e.unvalidate(),children:"Unvalidate"})]}),n.jsx(Nt,{status:!0})]}),vk=`import { Form, Field, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/badger-form'

const UnvalidateExample = () =>
  <Form>
    <Field name="name" label="Name" required/>
    <Field name="email" label="Email Address" required/>
    { form =>
      <div className="flex space small">
        <button type="button" onClick={() => form.validate()}>
          Validate
        </button>
        <button type="button" onClick={() => form.unvalidate()}>
          Unvalidate
        </button>
      </div>
    }
    <Debug status/>
  </Form>

export default UnvalidateExample`,jk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"unvalidate"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"unvalidate"})," function can be called to reset any validation state."]}),n.jsx(j,{Component:bk,code:vk,caption:"unvalidate",expand:!0}),n.jsx(te,{links:[ix,Iu]})]}),yk=Object.freeze(Object.defineProperty({__proto__:null,default:jk},Symbol.toStringTag,{value:"Module"})),Sk=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FormExample`,Fk=()=>n.jsxs(y,{children:[n.jsx(f,{name:"email",label:"Email Address",type:"text",required:!0}),n.jsx(f,{name:"password",label:"Password",type:"password",required:!0}),n.jsx(W,{})]}),wk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",n.jsx(X,{})," components to render the fields and a ",n.jsx(Ci,{})," component to add a submit button."]}),n.jsx(j,{Component:Fk,code:Sk,caption:"Form",expand:!0}),n.jsx(Ei,{})]}),Ck=Object.freeze(Object.defineProperty({__proto__:null,default:wk},Symbol.toStringTag,{value:"Module"})),_k=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Properties"}),n.jsx(Fe,{}),n.jsx(Ei,{})]}),Ek=Object.freeze(Object.defineProperty({__proto__:null,default:_k},Symbol.toStringTag,{value:"Module"})),Tk=`import { Form, Field } from '@/lib/index.js'

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

export default ChildFunctions`,kk=()=>n.jsxs(y,{children:[n.jsx(f,{name:"greeting",label:"Enter a greeting"}),e=>n.jsxs("div",{className:"flex gap-2 blue mar-t-4",children:[n.jsx("button",{type:"button",onClick:()=>e.setValues({greeting:"Hello"}),children:"Say Hello"}),n.jsx("button",{type:"button",onClick:()=>e.setValues({greeting:"Goodbye"}),children:"Say Goodbye"})]})]}),Rk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"children"}),n.jsxs("p",{children:["You can define children of a form, either as components or functions. Components can access the form context via ",n.jsx("code",{children:"useForm"}),". Functions receive the form context as the first argument."]}),n.jsx(j,{Component:kk,code:Tk,caption:"children",expand:!0})]}),Lk=Object.freeze(Object.defineProperty({__proto__:null,default:Rk},Symbol.toStringTag,{value:"Module"})),Nk=()=>n.jsxs(y,{debug:!0,children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email Address"}),n.jsx(W,{})]}),Ok=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const DebugExample = () =>
  <Form debug>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email Address"/>
    <Submit/>
  </Form>

export default DebugExample`,Pk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"debug"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"debug"})," property is your friend when it's 5pm on a Friday and you promised your boss/client that you would get the form changes made before you went home, but you can't figure out why it's not working."]}),n.jsx(G,{children:"Open up the Javascript console and watch the pretty messages go flying by!"})]}),n.jsx(j,{Component:Nk,code:Ok,caption:"debug",expand:!0}),n.jsx(te,{links:[Vr]})]}),Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Pk},Symbol.toStringTag,{value:"Module"})),Mk=()=>{const e={name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}};return n.jsxs(y,{fields:e,children:[n.jsx(f,{name:"name"}),n.jsx(f,{name:"email"}),n.jsx(W,{})]})},Ik=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FieldsExample`,Dk=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Your name",required:!0}),n.jsx(f,{name:"email",label:"Your email address",required:!0}),n.jsx(W,{})]}),$k=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,zk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",n.jsx(X,{})," ",n.jsx(Br,{})," property is used to associate a field to its definition."]}),n.jsx(j,{Component:Mk,code:Ik,caption:"fields"}),n.jsxs("p",{children:["This is the same as defining the properties on the ",n.jsx(X,{})," components."]}),n.jsx(j,{Component:Dk,code:$k,caption:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",n.jsx(X,{})," component will be considered part of the form."]}),n.jsx("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),n.jsxs("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",n.jsx("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),Bk=Object.freeze(Object.defineProperty({__proto__:null,default:zk},Symbol.toStringTag,{value:"Module"})),Vk=()=>{const e={user_id:12345},t={name:"Bobby Badger",email:"bobby@badgerpower.com"};return n.jsxs(y,{values:t,hidden:e,children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email Address"}),n.jsx(W,{})]})},Uk=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HiddenExample`,qk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"hidden"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),n.jsxs("p",{children:["Any ",n.jsx("code",{children:"hidden"})," fields and their values will be included in the submitted data."]})]}),n.jsx(G,{children:"Submit the form below.  You should see an alert showing that the two visible fields and the hidden data were all submitted."})]}),n.jsx(j,{Component:Vk,code:Uk,caption:"hidden",expand:!0})]}),Hk=Object.freeze(Object.defineProperty({__proto__:null,default:qk},Symbol.toStringTag,{value:"Module"})),Yk=()=>{const[e,t]=lt.useState(!1),r=()=>mn(1e3).then(()=>({ok:!0}));return n.jsxs(y,{onSubmit:r,resetOnSuccess:e,children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email Address"}),n.jsxs("div",{className:"flex space gap-2",children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",onChange:o=>t(o.target.checked),checked:e}),"resetOnSuccess"]}),n.jsx(W,{})]}),n.jsx(Nt,{status:!0})]})},Wk=`import { Form, Field, Submit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
import { sleep } from '@abw/badger-utils'
// PRETEND: import { Form, Field, Submit, Debug } from '@abw/badger-form'

const ResetOnSuccessExample = () => {
  const [reset, setReset] = React.useState(false)
  const onSubmit = () => sleep(1000)
    .then( () => ({ ok: true }) )

  return (
    <Form onSubmit={onSubmit} resetOnSuccess={reset}>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <div className="flex space gap-2">
        <label>
          <input
            type="checkbox"
            onChange={e => setReset(e.target.checked)}
            checked={reset}
          />
          resetOnSuccess
        </label>
        <Submit/>
      </div>
      <Debug status/>
    </Form>
  )
}

export default ResetOnSuccessExample`,Zk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"resetOnSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"resetOnSuccess"})," property can be set to automatically reset the form on successful submission."]}),n.jsx(j,{Component:Yk,code:Wk,caption:"resetOnSuccess",expand:!0}),n.jsx(te,{links:[Iu,ix]})]}),Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Zk},Symbol.toStringTag,{value:"Module"})),Kk=()=>{const e=()=>mn(1e3).then(()=>({ok:!0}));return n.jsxs(y,{onSubmit:e,unvalidateOnSuccess:!0,children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email Address"}),n.jsx(ue,{space:!0}),n.jsx(Nt,{status:!0})]})},Qk=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

{/* START */}
import React from 'react'
import { sleep } from '@abw/badger-utils'
// PRETEND: import { Form, Field, ResetSubmit, Debug } from '@abw/badger-form'

const UnvalidateOnSuccessExample = () => {
  const onSubmit = () => sleep(1000)
    .then( () => ({ ok: true }) )

  return (
    <Form onSubmit={onSubmit} unvalidateOnSuccess>
      <Field name="name" label="Name"/>
      <Field name="email" label="Email Address"/>
      <ResetSubmit space/>
      <Debug status/>
    </Form>
  )
}

export default UnvalidateOnSuccessExample`,Xk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"unvalidateOnSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"unvalidateOnSuccess"})," property can be set to automatically clear any validation state on the form."]}),n.jsx(j,{Component:Kk,code:Qk,caption:"unvalidateOnSuccess",expand:!0}),n.jsx(te,{links:[lx,sx]})]}),Jk=Object.freeze(Object.defineProperty({__proto__:null,default:Xk},Symbol.toStringTag,{value:"Module"})),eR=()=>{const e={name:"Bobby Badger",email:"bobby@badgerpower.com"};return n.jsxs(y,{values:e,children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email Address"}),n.jsx(W,{})]})},tR=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValuesExample`,nR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"values"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),n.jsx(j,{Component:eR,code:tR,caption:"fields",expand:!0}),n.jsx(te,{links:[ox]})]}),rR=Object.freeze(Object.defineProperty({__proto__:null,default:nR},Symbol.toStringTag,{value:"Module"})),oR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Validation"}),n.jsx(Fe,{}),n.jsx(Ei,{})]}),sR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),iR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"focusInvalidField"}),n.jsxs("p",{children:["This property defaults to ",n.jsx("code",{children:"true"}),".  In this case the first field that fails validation will be automatically focussed."]}),n.jsxs("p",{children:["You can explicitly set it to ",n.jsx("code",{children:"false"})," if you need to."]})]}),lR=Object.freeze(Object.defineProperty({__proto__:null,default:iR},Symbol.toStringTag,{value:"Module"})),aR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"minValidateLength"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(li,{})," option for all fields. Individual fields can set their own values to override it."]})]}),dR=Object.freeze(Object.defineProperty({__proto__:null,default:aR},Symbol.toStringTag,{value:"Module"})),cR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionalLabel"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(Wo,{})," option for all fields. Individual fields can set their own values to override it."]})]}),uR=Object.freeze(Object.defineProperty({__proto__:null,default:cR},Symbol.toStringTag,{value:"Module"})),mR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredLabel"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(ts,{})," option for all fields. Individual fields can set their own values to override it."]})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:mR},Symbol.toStringTag,{value:"Module"})),fR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredMessage"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(Du,{})," option for all fields. Individual fields can set their own values to override it."]})]}),hR=Object.freeze(Object.defineProperty({__proto__:null,default:fR},Symbol.toStringTag,{value:"Module"})),xR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showOptional"}),n.jsxs("p",{children:["This option can be set ",n.jsx("code",{children:"true"})," to enable the"," ",n.jsx(rr,{})," option as the default for all fields. Individual fields can set it ",n.jsx("code",{children:"false"})," to override the default."]}),n.jsx("p",{children:'When enabled, optional fields will be display an "Optional" tag in the label.'})]}),gR=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"})),bR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showRequired"}),n.jsxs("p",{children:["This option can be set ",n.jsx("code",{children:"true"})," to enable the"," ",n.jsx(kn,{})," option as the default for all fields. Individual fields can set it ",n.jsx("code",{children:"false"})," to override the default."]}),n.jsx("p",{children:'When enabled, required fields will display a "Required" tag in the label.'})]}),vR=Object.freeze(Object.defineProperty({__proto__:null,default:bR},Symbol.toStringTag,{value:"Module"})),jR=e=>e.password1!==e.password2?Promise.reject({error:"The two passwords you entered don't match",errors:[{name:"password1",message:"This password..."},{name:"password2",message:"...doesn't match this one"}]}):(e.checkedMessage="Passwords were checked!",Promise.resolve(e)),yR=()=>n.jsxs(y,{validate:jR,children:[n.jsx(Ue,{fieldErrors:!1}),n.jsx(f,{name:"password1",type:"password",label:"New Password",required:!0}),n.jsx(f,{name:"password2",type:"password",label:"Confirm Password",required:!0}),n.jsx(W,{})]}),SR=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default PasswordsExample`,FR=(e,t)=>{const r=e.password1.trim(),o=e.password2.trim();return r===o?Promise.resolve({password:r}):(t.reset(),Promise.reject({error:"The two passwords you entered don't match"}))},wR=()=>n.jsxs(y,{validate:FR,debug:!0,children:[n.jsx(Ue,{fieldErrors:!1}),n.jsx(f,{name:"password1",type:"password",label:"New Password",required:!0}),n.jsx(f,{name:"password2",type:"password",label:"Confirm Password",required:!0}),n.jsx(W,{})]}),CR=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default PasswordsExample`,_R=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validate"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," property can be used to provide a validation function for all the form data.  You can also define ",n.jsx(at,{})," ","function on individual fields.  The form validation will be run after all the fields have validated successfully.  If any individual fields fail validation then the form validation is not run."]}),n.jsx("h2",{children:"Simple Example"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed the form values as the first argument."]}),n.jsxs("p",{children:["If the form validation fails then the function should return a rejected promise.  The rejected value should be an object containing either an ",n.jsx("code",{children:"error"})," message, used to indicate a generic error and/or an array of ",n.jsx("code",{children:"errors"})," to indicate errors in particular fields."]}),n.jsx("p",{children:"If the validation passes then the function should return a resolved promise with the form values. The form values can be modified or augmented by the function."})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["You should include the ",n.jsx(Mo,{})," component somewhere in your form to report any validation errors.  In this example we're setting the ",n.jsx("code",{children:"fieldErrors"})," property to ",n.jsx("code",{children:"false"})," ","so that the component only displays the generic ",n.jsx("code",{children:"error"}),". The separate field ",n.jsx("code",{children:"errors"})," are already being displayed beneath each field input."]}),n.jsx(G,{children:"Try entering two different passwords in the form below then click on the Submit button."})]})]}),n.jsx(j,{Component:yR,code:SR,caption:"Form Validation"}),n.jsx("h2",{children:"More Advanced Example"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed the form context as the second argument.  In this example we call the ",n.jsx(Iu,{})," ","method to reset the form if the passwords don't match."]}),n.jsxs("p",{children:["Also note that in this example we're trimming any whitespace from the passwords and, if they match, we return a single",n.jsx("code",{children:"password"})," value in the submission values."]})]}),n.jsx(G,{children:"Try entering two passwords in the fields below then click on the submit button.  Additional leading and trailing whitespace on the passwords is removed."})]}),n.jsx(j,{Component:wR,code:CR,caption:"Form Validation"}),n.jsx(te,{links:[at]})]}),ER=Object.freeze(Object.defineProperty({__proto__:null,default:_R},Symbol.toStringTag,{value:"Module"})),TR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnBlur"}),n.jsxs("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",n.jsx(Vt,{})," property to ",n.jsx("code",{children:"true"})," ","on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"When enabled, fields will be validated whenever the input loses focus."})]}),kR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"})),RR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnChange"}),n.jsxs("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",n.jsx(Ut,{})," property to ",n.jsx("code",{children:"true"})," "," on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"When enabled, fields will be validated whenever the input changes."})]}),LR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),NR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnInvalid"}),n.jsxs("p",{children:["This option is set ",n.jsx("code",{children:"true"})," by default. You can set the ",n.jsx(Ly,{})," property to ",n.jsx("code",{children:"false"})," on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"If a field fails validation then this option switches it to validate whenever the input changes."})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),PR=`## using npm
$ npm add @abw/badger-form

## using yarn
$ yarn add @abw/badger-form

## using pnpm
$ pnpm add @abw/badger-form`,AR="import { Form, Field, Submit } from '@abw/badger-form'",MR=`// ...then you can do this
import '@abw/badger-form/styles/badger-form.min.css'`,IR=`// If you're not already doing this...
import '@abw/badger-css/styles/badger.min.css';`,DR=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Getting Started"}),n.jsx("h2",{children:"Add the Module"}),n.jsxs("p",{children:["Add the ",n.jsx("code",{className:"code",children:"@abw/badger-form"})," module to your project using your favourite package manager."]}),n.jsx(Ge,{code:PR,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Import the Components"}),n.jsx("p",{children:"You can then import the form components and start using them."}),n.jsx(Ge,{code:AR,caption:"Importing",language:"js",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Import the CSS"}),n.jsxs("p",{children:["Badger Form works out of the box with the form styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),".  If you're already using Badger CSS then you don't need to do anything else as you should already have something like this in your app."]}),n.jsx(Ge,{code:IR,caption:"Importing Badger CSS",language:"js",className:"mar-b-8",expand:!0}),n.jsxs("p",{children:["If you're not already using Badger CSS then you'll need to import the relevant CSS styles. As a convenience, they're bundled with this module.  Note that you only need to import ",n.jsx("b",{children:"either"})," the Badger CSS styles as shown above, ",n.jsx("b",{children:"or"})," the Badger Form styles as shown below."]}),n.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),n.jsx(Ge,{code:MR,caption:"Importing Badger Form CSS",language:"js",className:"mar-b-8",expand:!0})]}),$R=Object.freeze(Object.defineProperty({__proto__:null,default:DR},Symbol.toStringTag,{value:"Module"})),wr=({to:e,className:t="",exact:r,children:o,text:s,onClick:i,label:l,style:a})=>n.jsx($2,{to:e,onClick:i,end:r&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":l,style:a,children:o||s}),zR=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Why Use It?"}),n.jsx("h2",{children:" I know what you're thinking... "}),n.jsxs("ul",{children:[n.jsx("li",{children:"What does the World need with another React form library?"}),n.jsx("li",{children:"What makes this different, better, and/or worse than all the other form libraries?  "}),n.jsx("li",{children:"Will this guy do my homework for me?"}),n.jsx("li",{children:"Why do we exist?  "}),n.jsx("li",{children:"What is the meaning of life? "}),n.jsx("li",{children:"Where did I leave my car keys? "}),n.jsx("li",{children:"And what is it with all the badgers?"})]}),n.jsxs("p",{children:[n.jsx("b",{children:"None"})," of these questions will be answered, at least not directly. You can read the copious documentation provided here if you want to find out more.  Or don't.  It makes no difference to me.  Seriously, I'm not looking to convince you that this is any better or worse than any other form library.  I'm not interested in attracting new users or changing the world.  Been there, done that, burned out."]}),n.jsx("h2",{children:"Still With Me?"}),n.jsx("p",{className:"subintro",children:"OK then, but proceed at your own risk."}),n.jsxs("p",{children:["Read on for more information about what this library sets out to achieve.  If you just want to see it in action then feel free to skip the rest of this page and go straight to the"," ",n.jsx(wr,{to:"/tutorial/basic-form",text:"tutorial"}),"."]}),n.jsx("h2",{children:"Key Features"}),n.jsx("p",{className:"subintro",children:"These are some of the things that I think are important in a form library and have influenced the design."}),n.jsxs("ul",{className:"li-space",children:[n.jsxs("li",{children:["Above all else, ",n.jsx("b",{children:"simplicity"}),".  Building a form with"," ",n.jsx("code",{children:"badger-form"})," should be ",n.jsx("i",{children:"at least"})," as easy as defining a vanilla HTML form, and ideally, easier. I don't want to have to build every field manually from separate components.  In most cases I want my fields to include a label, an input, and somewhere for validation messages to go.  So there should be a sensible default layout that takes care of that for me."]}),n.jsxs("li",{children:["Closely related to that is ",n.jsx("b",{children:"consistency"}),`. In the vast majority of cases I want all my forms and fields to look the same and conform to whatever branding and/or style guide I've got in place.  I don't mind spending a bit of time up front to get everything looking right, but after that I just want to "push a button" and get the same results every time with the minimum of fuss.`]}),n.jsxs("li",{children:["And that brings us on to ",n.jsx("b",{children:"maintainability"}),".  The less markup I have to write, the less I have to maintain, and the easier it will be to do so.  If the client or a designer decides they want all the form fields to have the label in a different place, be aligned differently, have more padding, or something else, then I want to be able to change that in a single place.  It might mean changing some CSS, re-defining a style, or updating a single field layout component.  But I certainly don't want to have to go and edit every field in every form to make the change."]}),n.jsxs("li",{children:["Of course there are times when you want to do something a bit different, so ",n.jsx("b",{children:"flexibility"})," is also important.  It's good to have a default layout for ",n.jsx("i",{children:"most"})," of your form fields, but you also need to be able to switch something else in for those special cases. This should be easy, not hard."]}),n.jsxs("li",{children:[n.jsx("b",{children:"Extensibility"})," is also important for those times when there isn't something available off-the-shelf and you need to get your hands dirty and write a custom component.  Maybe you need a custom autocomplete component or search widget.  Maybe you need to include Recaptcha validation, or something else that requires aynchronous calls to an API.  I don't know what you might need.  I can't even predict what I might need this time next week.  So it's important that the library exposes enough of the internal workings to allow you to plug new things in.  It might not be easy, but it should be possible."]}),n.jsxs("li",{children:["None of that would be possible without ",n.jsx("b",{children:"reliability"}),'.  We need to be able to trust the library to "Do The Right Thing" and that means it has to be well tested.  This library has ',n.jsx("i",{children:"lots"})," of automated tests with almost 100% coverage (the exceptions are a few edge cases that would be pointless to try and cover just for the sake of hitting 100%)."]}),n.jsxs("li",{children:["Another concern is ",n.jsx("b",{children:"security"}),". It supports client-side and server-side validation.  If for some reason an invalid input gets past the client-side validation and generates an angry response from the server then it can update the form to display the errors and highlight the invalid field(s).  Although it's not in the library yet, I've been toying with the idea of ",n.jsx("i",{children:"isomorphic validation"}),", allowing you to use the same validation rules for both client-side and server-side code."]}),n.jsxs("li",{children:["And talking of concerns, we like to separate them, so ",n.jsx("b",{children:"modularity"})," ",'is important.  You should be able to define the schema for a form and all of its fields (including validation) in a single place, possibly away from the markup used to render the form.  Being able to separate the "logic" of a form from the presentational aspects make it easier to update both in isolation.']}),n.jsxs("li",{children:["One often overlooked aspect is ",n.jsx("b",{children:"accessibility"}),".  The library uses vanilla HTML form elements by default because they offer the best accessibility across different browsers and devices (anyone who has ever tried to use some of the popular select widgets or date pickers on a mobile device may know what I mean). You can always plug in different input components if you want to, but you shouldn't overlook ",n.jsx("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/",children:"WAI-ARIA"})," ","compliance.  Your design may look great but if it's not usable by people with disabilities (or people who just prefer to use the keyboard for form navigation) then it's broken and you should feel bad."]}),n.jsxs("li",{children:["Functionality is paramount, but we also care about ",n.jsx("b",{children:"presentability"}),". It comes with a default stylesheet that provides reasonable defaults for styling different form components and all their states (focussed, valid, invalid, disabled, etc).  It comes with both light and dark themes and is written using SASS and CSS variables so you can easily change the styling. There's a single variable that you can set to change the basic theme colour to match your brand so you can get up and running really quickly.  As and when you need to change styles, add new components, or make other changes then you generally can with the minimum of fuss."]}),n.jsxs("li",{children:["And last, but not least, ",n.jsx("b",{children:"efficiency"}),".  The library is comparatively small and simple (less than 10kB for the compressed bundle at the time of writing). It only works with modern (v18+) versions of React and there are no plans to port it to other web frameworks.  It doesn't set out to please all of the people all of the time.  Rather, it is designed to please me, most of the time, and as such it may not have (and may never have) all the features that other people might want.  You are, of course, free to go and write your own form library."]})]}),n.jsxs("h2",{children:["Why Not Just Use ",n.jsx("code",{children:"<ANOTHER FORM LIBRARY>"}),"?"]}),n.jsx("p",{className:"subintro",children:"Go for it.  This is software that I wrote for me.  I'm not suggesting that it's the right solution for you.  But if you want to know why I wrote it, then read on..."}),n.jsx("p",{children:"This library started out a few years back when the state of the art in React form libraries wasn't quite where it is today. React 16.3 had just been released with its shiny new contexts and I thought it might be a better way to build a form library than what we had at the time.  So I did and it turned out pretty well.  It was designed by me, for me, and unsurprisingly it met my particular needs particularly well.  It may not meet yours."}),n.jsxs("p",{children:["Over the years I've built a ",n.jsx("i",{children:"lot"})," of forms with it for various different customers.  I don't much fancy the idea of having to re-write hundreds of forms that already work Just Fine™ and I don't imagine my customers would want to pay me to do it either. So I still use it, and have occasional bursts of development/maintenance where I add new features, clean up ugly bits of code, fix minor bugs or limitations that have been annoying me for a while, or update the documentation and examples."]}),n.jsxs("p",{children:["For a number of years it was an integral part of my personal ",n.jsx("a",{href:"https://github.com/abw/badger-ui",children:"badger-ui"})," library. That has now been cleaned up and split up into"," ",n.jsx("a",{href:"https://github.com/abw/badger-css",children:"Badger CSS"}),","," ",n.jsx("a",{href:"https://github.com/abw/badger-react-ui",children:"Badger React UI"})," and"," ",n.jsx("a",{href:"https://github.com/abw/badger-icon",children:"Badger Icon"}),", with"," ",n.jsx("a",{href:"https://github.com/abw/badger-color",children:"Badger Color"})," in a supporting role. All of the form functionality was separated out into this module.  So that's how we got here."]}),n.jsxs("p",{children:["But the best reason of all is that I built it because I ",n.jsx("i",{children:"wanted"})," to. I like writing software.  I like solving problems.  Sometimes that means spending my weekends re-inventing wheels that happen to fit my skateboard a bit better than all the other wheels out there.  That's all the justification I need.  You are, of course, free to have a different opinion and use whatever tools best fit your needs."]})]}),BR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),VR=e=>T.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},T.createElement("path",{className:"form",d:"M464.349,148.481C464.349,144.531 465.027,141.143 466.383,138.316C467.738,135.489 469.577,133.165 471.901,131.345C474.225,129.525 476.955,128.189 480.092,127.337C483.228,126.485 486.578,126.059 490.141,126.059C495.872,126.059 500.094,126.814 502.804,128.324C505.515,129.835 506.871,132.41 506.871,136.05C506.871,137.599 506.541,138.993 505.883,140.232C505.225,141.472 504.508,142.401 503.734,143.021C502.262,142.634 500.733,142.304 499.145,142.033C497.557,141.762 495.718,141.627 493.626,141.627C490.296,141.627 487.701,142.188 485.842,143.311C483.984,144.434 483.054,146.39 483.054,149.178L483.054,152.896L502.107,152.896C502.572,153.748 503.017,154.813 503.443,156.091C503.869,157.369 504.082,158.782 504.082,160.331C504.082,163.042 503.482,164.998 502.282,166.198C501.081,167.399 499.474,167.999 497.46,167.999L484.1,167.999L484.1,204.828C483.325,205.06 482.105,205.292 480.44,205.525C478.775,205.757 477.052,205.873 475.27,205.873C473.566,205.873 472.037,205.757 470.681,205.525C469.326,205.292 468.183,204.828 467.254,204.13C466.324,203.433 465.608,202.485 465.105,201.284C464.601,200.084 464.349,198.515 464.349,196.579L464.349,148.481ZM569.955,176.712C569.955,181.514 569.22,185.794 567.748,189.55C566.276,193.307 564.205,196.463 561.532,199.019C558.86,201.575 555.665,203.511 551.948,204.828C548.23,206.144 544.086,206.803 539.517,206.803C534.947,206.803 530.803,206.106 527.086,204.711C523.368,203.317 520.173,201.323 517.501,198.728C514.829,196.134 512.757,192.977 511.285,189.26C509.814,185.542 509.078,181.36 509.078,176.712C509.078,172.143 509.814,167.999 511.285,164.281C512.757,160.564 514.829,157.407 517.501,154.813C520.173,152.218 523.368,150.224 527.086,148.83C530.803,147.436 534.947,146.738 539.517,146.738C544.086,146.738 548.23,147.455 551.948,148.888C555.665,150.321 558.86,152.334 561.532,154.929C564.205,157.524 566.276,160.68 567.748,164.398C569.22,168.115 569.955,172.22 569.955,176.712ZM529.293,176.712C529.293,181.437 530.203,185.058 532.023,187.575C533.843,190.092 536.38,191.351 539.633,191.351C542.886,191.351 545.384,190.073 547.126,187.517C548.869,184.961 549.74,181.36 549.74,176.712C549.74,172.065 548.85,168.483 547.068,165.966C545.287,163.449 542.77,162.19 539.517,162.19C536.264,162.19 533.747,163.449 531.965,165.966C530.184,168.483 529.293,172.065 529.293,176.712ZM599.348,204.828C598.574,205.06 597.354,205.292 595.689,205.525C594.024,205.757 592.3,205.873 590.519,205.873C588.815,205.873 587.285,205.757 585.93,205.525C584.574,205.292 583.432,204.828 582.503,204.13C581.573,203.433 580.857,202.485 580.353,201.284C579.85,200.084 579.598,198.515 579.598,196.579L579.598,161.725C579.598,159.944 579.927,158.414 580.586,157.136C581.244,155.858 582.193,154.716 583.432,153.709C584.671,152.702 586.201,151.792 588.021,150.979C589.841,150.166 591.797,149.449 593.888,148.83C595.979,148.21 598.148,147.726 600.394,147.377C602.64,147.029 604.886,146.855 607.132,146.855C610.85,146.855 613.793,147.571 615.962,149.004C618.131,150.437 619.215,152.78 619.215,156.033C619.215,157.117 619.06,158.182 618.75,159.228C618.44,160.273 618.053,161.222 617.588,162.074C615.962,162.074 614.297,162.151 612.593,162.306C610.889,162.461 609.224,162.694 607.597,163.003C605.971,163.313 604.441,163.642 603.008,163.991C601.575,164.339 600.355,164.746 599.348,165.211L599.348,204.828ZM653.255,146.738C656.431,146.738 659.548,147.184 662.607,148.075C665.667,148.965 668.32,150.301 670.566,152.083C672.889,150.534 675.503,149.256 678.408,148.249C681.312,147.242 684.817,146.738 688.922,146.738C691.865,146.738 694.75,147.126 697.577,147.9C700.404,148.675 702.921,149.895 705.129,151.56C707.336,153.225 709.098,155.432 710.415,158.182C711.731,160.932 712.39,164.281 712.39,168.231L712.39,204.828C711.615,205.06 710.395,205.292 708.73,205.525C707.065,205.757 705.342,205.873 703.56,205.873C701.856,205.873 700.327,205.757 698.971,205.525C697.616,205.292 696.473,204.828 695.544,204.13C694.615,203.433 693.898,202.485 693.395,201.284C692.891,200.084 692.64,198.515 692.64,196.579L692.64,168.812C692.64,166.489 691.981,164.804 690.665,163.759C689.348,162.713 687.566,162.19 685.32,162.19C684.236,162.19 683.074,162.442 681.835,162.945C680.596,163.449 679.666,163.972 679.047,164.514C679.124,164.824 679.163,165.114 679.163,165.385L679.163,204.828C678.311,205.06 677.052,205.292 675.387,205.525C673.722,205.757 672.037,205.873 670.333,205.873C668.629,205.873 667.1,205.757 665.744,205.525C664.389,205.292 663.246,204.828 662.317,204.13C661.388,203.433 660.671,202.485 660.168,201.284C659.664,200.084 659.413,198.515 659.413,196.579L659.413,168.812C659.413,166.489 658.696,164.804 657.263,163.759C655.83,162.713 654.107,162.19 652.093,162.19C650.699,162.19 649.499,162.403 648.492,162.829C647.485,163.255 646.633,163.662 645.936,164.049L645.936,204.828C645.161,205.06 643.942,205.292 642.276,205.525C640.611,205.757 638.888,205.873 637.106,205.873C635.402,205.873 633.873,205.757 632.517,205.525C631.162,205.292 630.02,204.828 629.09,204.13C628.161,203.433 627.444,202.485 626.941,201.284C626.437,200.084 626.186,198.515 626.186,196.579L626.186,161.493C626.186,159.402 626.631,157.737 627.522,156.497C628.412,155.258 629.632,154.096 631.181,153.012C633.815,151.153 637.087,149.643 640.998,148.481C644.91,147.319 648.995,146.738 653.255,146.738Z"}),T.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),T.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z"}),T.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"})),UR=e=>T.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},T.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),T.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),T.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),T.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),T.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),T.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),T.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),qR=()=>n.jsxs("div",{className:"pad-t-8",children:[n.jsxs("div",{className:"grid-2 gap-12 start stack-laptop",children:[n.jsx("div",{children:n.jsx(VR,{className:"badger-form mar-t-4"})}),n.jsx("div",{children:n.jsxs("p",{className:"larger",children:["Badger Form is a yet another module for building forms in React.  It implements state management for forms with styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),"."]})})]}),n.jsx("p",{className:"intro",children:"It provides default components for rendering form fields which simplifies the process of creating and using forms.  You can override them with your own field input components, or manually implement the layout for individual fields any way you like."}),n.jsx("h2",{className:"mar-t-8 mar-b-none",children:"Read the Fine Documentation"}),n.jsx("p",{className:"mar-b-none intro",children:"There's lots of it, complete with numerous examples.  Here are some good places to start."}),n.jsxs("ul",{className:"large menu mar-t-none pad-l-4",children:[n.jsxs("li",{children:[n.jsx(wr,{to:"/getting-started/installation",text:"Installation"})," - adding the module to your project."]}),n.jsxs("li",{children:[n.jsx(wr,{to:"/tutorial/basic-form",text:"A Basic Form"})," - rendering your first form"]}),n.jsxs("li",{children:[n.jsx(wr,{to:"/form",text:"The Form Component"})," - a detailed look at the form container"]}),n.jsxs("li",{children:[n.jsx(wr,{to:"/field",text:"The Field Component"})," - adding a field to a form"]}),n.jsxs("li",{children:[n.jsx(wr,{to:"/fields",text:"The Fields Component"})," - a handy shortcut to add multiple fields"]})]}),n.jsx("div",{className:"text-center",children:n.jsx(UR,{className:"width-12rem"})}),n.jsx("h2",{children:"This is Opinionated and Selfish Software..."}),n.jsxs("p",{children:["I wrote this library to help me do my job and make the process of working with forms less painful than I found it using other modules. It is ",n.jsx("i",{children:"opinionated"})," because it does things the way I like them to be done, and it's ",n.jsx("i",{children:"selfish"})," because I have no intention of adding things that I don't need or want."]}),n.jsx("h2",{children:"...because it's Open Source Software"}),n.jsxs("p",{children:["It's Open Source Software and you can use it if you want to for ",n.jsx("b",{children:"free"}),". You have full access to the source code which you can adapt if you need to.  If it proves useful in helping you get your job done then that's great.  But please don't expect me to commit ",n.jsx("i",{children:"my"})," time to helping ",n.jsx("i",{children:"you"})," get your job done."]}),n.jsxs("p",{children:["If you're now wondering why you should use this software, the short answer is that you probably shouldn't.  There are now numerous other form libraries for React that are probably better suited to your needs than this.  The longer answer explaining why I wrote it (because those libraries didn't exist back then) and why I continue to use it (because it works for me) can be found"," ",n.jsx(wr,{to:"/getting-started/why-use-it",text:"here"}),"."]})]}),HR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),YR=()=>n.jsx(y,{children:n.jsx(f,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),WR=`import { Form, Field } from '@/lib/index.js'

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
`,Lx=()=>n.jsx(qe,{menu:ex}),ZR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"radio"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"radio"})," for a radio button set."]}),n.jsx(j,{Component:YR,code:WR,caption:"checkbox",expand:!0}),n.jsx(Lx,{})]}),GR=Object.freeze(Object.defineProperty({__proto__:null,default:ZR},Symbol.toStringTag,{value:"Module"})),KR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Radio Properties"}),n.jsx(Fe,{}),n.jsx(Lx,{})]}),QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),XR=()=>n.jsxs(y,{children:[n.jsx(f,{type:"radio",name:"animal1",label:"Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-b-2",border:!0}),n.jsx(f,{type:"radio",name:"animal1",label:"Inline Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-r-2",border:!0,inline:!0})]}),JR=`import React from 'react'
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

export default Border`,eL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"border"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"border"})," property to add a border around each option. Note that margins aren't automatically added between each option, but you can use the ",n.jsx(Qy,{})," and/or"," ",n.jsx(Xy,{})," properties to add CSS classes to apply margins."]}),n.jsx(j,{Component:XR,code:JR,caption:"border",undent:2,expand:!0})]}),tL=Object.freeze(Object.defineProperty({__proto__:null,default:eL},Symbol.toStringTag,{value:"Module"})),nL=()=>n.jsx(y,{children:n.jsx(f,{type:"radio",name:"animal",label:"Inline Options",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),rL=`import React from 'react'
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

export default Inline`,oL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["The default behaviour is for radio button options to be displayed as blocks that extend to the full width of the container. You can set the ",n.jsx("code",{children:"inline"})," property on the field to display the options inline."]}),n.jsx(j,{Component:nL,code:rL,caption:"inline",undent:2,expand:!0})]}),sL=Object.freeze(Object.defineProperty({__proto__:null,default:oL},Symbol.toStringTag,{value:"Module"})),iL=()=>n.jsx(y,{children:n.jsx(f,{type:"radio",name:"animal",label:"Input Class",options:["Badger","Ferret","Stoat","Weasel"],inputClass:"larger"})}),lL=`import React from 'react'
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

export default InputClass`,aL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inputClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"inputClass"})," property can be used to add a CSS class to the radio button input for each option."]}),n.jsx(j,{Component:iL,code:lL,caption:"inputClass",undent:2,expand:!0})]}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:aL},Symbol.toStringTag,{value:"Module"})),cL=()=>n.jsxs(y,{children:[n.jsx(f,{type:"radio",name:"animal1",label:"Options With Margins on Right and Extra Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"inline mar-r-4 mar-b-4 pad-h-4",border:!0}),n.jsx(f,{type:"radio",name:"animal2",label:"Large Options With Margins and Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"large mar-b-4 pad-v-2 pad-h-4",border:!0})]}),uL=`import React from 'react'
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

export default OptionClass`,mL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"optionClass"})," property can be used to add a CSS class to each option."]}),n.jsx(j,{Component:cL,code:uL,caption:"optionClass",undent:2,expand:!0})]}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:mL},Symbol.toStringTag,{value:"Module"})),fL=()=>n.jsx(y,{children:n.jsx(f,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger",className:"underline"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),hL=`import React from 'react'
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

export default Options`,xL=()=>n.jsx(y,{children:n.jsx(f,{type:"radio",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),gL=`import React from 'react'
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

export default Options`,bL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"options"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"options"})," property to define the options for the radio button set.  It should be an array of objects that contain"," ",n.jsx("code",{children:"value"})," (used to set the field value) and ",n.jsx("code",{children:"text"})," ","(used as the text label) properties.  You can also add a ",n.jsx("code",{children:"className"})," ","property to add a CSS class to a particular option."]}),n.jsx(j,{Component:fL,code:hL,caption:"options",undent:2,expand:!0}),n.jsxs("p",{children:["In simple cases where the value and text are the same, you can define the ",n.jsx("code",{children:"options"})," as an array of strings."]}),n.jsx(j,{Component:xL,code:gL,caption:"options",undent:2,expand:!0})]}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),jL=()=>n.jsxs(y,{children:[n.jsx(f,{type:"radio",name:"animal1",label:"Flex Options With Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"flex gap-4",border:!0}),n.jsx(f,{type:"radio",name:"animal2",label:"Grid Options with Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"grid-2 gap-4",border:!0})]}),yL=`import React from 'react'
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

export default OptionsClass`,SL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionsClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"optionsClass"})," property can be used to add a CSS class to each option."]}),n.jsx(j,{Component:jL,code:yL,caption:"optionsClass",undent:2,expand:!0})]}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:SL},Symbol.toStringTag,{value:"Module"})),wL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name",wide:!0}),n.jsx(f,{name:"email",label:"Email",wide:!0}),n.jsx(ue,{})]}),CL=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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
`,Nx=()=>n.jsx(qe,{menu:Y2}),_L=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"ResetSubmit"}),n.jsxs("p",{className:"intro wide",children:["Renders a ",n.jsx(mx,{})," button and a ",n.jsx(Ci,{})," button."]}),n.jsx(j,{Component:wL,code:CL,caption:"ResetSubmit",expand:!0}),n.jsx(Nx,{})]}),EL=Object.freeze(Object.defineProperty({__proto__:null,default:_L},Symbol.toStringTag,{value:"Module"})),TL=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"ResetSubmit Properties"}),n.jsx(Fe,{}),n.jsx(Nx,{})]}),kL=Object.freeze(Object.defineProperty({__proto__:null,default:TL},Symbol.toStringTag,{value:"Module"})),RL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(ue,{className:"flex space pad-2 bgc-90 bgd-10 border bdr-2"})]}),LL=`import React from 'react'
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
`,NL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to define your own CSS class for the container.  When this is defined the ",n.jsx($y,{})," ",n.jsx(zy,{})," and ",n.jsx(By,{})," properties have no effect."]}),n.jsxs("p",{children:["In this example we use ",n.jsx("code",{children:"flex space"})," to separate the buttons, along with ",n.jsx("code",{children:"pad-2"})," to add some padding.  The"," ",n.jsx("code",{children:"bgc-90"})," class sets the background color to ",n.jsx("code",{children:"grey-90"})," ","and ",n.jsx("code",{children:"bgd-10"})," sets it to ",n.jsx("code",{children:"grey-10"})," when the dark theme is selected.  The ",n.jsx("code",{children:"border"})," class adds a border and"," ",n.jsx("code",{children:"bdr-2"})," sets the border radius to 0.5em.  These are all utility classes provided by ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),", but it works equally well with your own styles or those provided by a different CSS toolkit."]})]}),n.jsx(j,{Component:RL,code:LL,caption:"className",undent:2,expand:!0})]}),OL=Object.freeze(Object.defineProperty({__proto__:null,default:NL},Symbol.toStringTag,{value:"Module"})),PL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(ue,{gap:8})]}),AL=`import React from 'react'
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
`,ML=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The default CSS class for the container uses flexbox and sets a gap of 1rem between the buttons (",n.jsx("code",{children:"flex gap-h-4"}),"). The ",n.jsx("code",{children:"gap"})," property can be passed to change the gap (in units of 0.25rem) between the buttons."]}),n.jsx(j,{Component:PL,code:AL,caption:"gap",undent:2,expand:!0})]}),IL=Object.freeze(Object.defineProperty({__proto__:null,default:ML},Symbol.toStringTag,{value:"Module"})),DL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(ue,{reset:{className:"outline",text:"Undo Changes"}})]}),$L=`import React from 'react'
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
`,zL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"reset"})," property can be used to pass properties to the ",n.jsx(mx,{})," component."]}),n.jsx(j,{Component:DL,code:$L,caption:"reset",undent:2,expand:!0})]}),BL=Object.freeze(Object.defineProperty({__proto__:null,default:zL},Symbol.toStringTag,{value:"Module"})),VL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(ue,{space:!0,size:"small"})]}),UL=`import React from 'react'
import { Form, Field, ResetSubmit } from '@/lib/index.js'

const ResetSubmitSize = () =>
  /* START */
  <Form>
    <Field name="name"  label="Name"/>
    <Field name="email" label="Email"/>
    <ResetSubmit space size="small"/>
  </Form>
  /* END */

export default ResetSubmitSize
`,qL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"size"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be added to set the overall size of the buttons."]}),n.jsx(j,{Component:VL,code:UL,caption:"space",undent:2,expand:!0})]}),HL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),YL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(ue,{space:!0})]}),WL=`import React from 'react'
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
`,ZL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"space"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"space"})," property can be added to change the class to ",n.jsx("code",{children:"flex space controls"}),".  This will space the controls to either side of the container."]}),n.jsx(j,{Component:YL,code:WL,caption:"space",undent:2,expand:!0})]}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:ZL},Symbol.toStringTag,{value:"Module"})),KL=()=>n.jsxs(y,{children:[n.jsx(f,{name:"name",label:"Name"}),n.jsx(f,{name:"email",label:"Email"}),n.jsx(ue,{submit:{className:"blue",text:"Save"}})]}),QL=`import React from 'react'
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
`,XL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submit"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"submit"})," property can be used to pass properties to the ",n.jsx(Ci,{})," component."]}),n.jsx(j,{Component:KL,code:QL,caption:"submit",undent:2,expand:!0})]}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:XL},Symbol.toStringTag,{value:"Module"})),eN=()=>n.jsxs(y,{values:{three:"The third field"},onReset:()=>alert("You reset the form"),children:[n.jsx(f,{name:"one",label:"Field one"}),n.jsx(f,{name:"two",label:"Field two with default value",default:"Badger"}),n.jsx(f,{name:"three",label:"Field three with pre-defined form value"}),n.jsx(pr,{})]}),tN=`import { Form, Field, Reset } from '@/lib/index.js'

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

export default ResetExample`,Ox=()=>n.jsx(qe,{menu:H2}),nN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Reset"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state."]}),n.jsxs($,{children:[n.jsxs("p",{children:["Any"," ",n.jsx(sc,{})," defined on the ",n.jsx(me,{})," will be restored. Any fields that have a ",n.jsx(Ty,{})," value will be reset to that value.  You can also define a ",n.jsx(me,{})," ",n.jsx(Ey,{})," handler which will be called when the form is reset."]}),n.jsx(G,{children:"Try entering some values in the form below and then click on the reset button."})]}),n.jsx(j,{Component:eN,code:tN,caption:"Reset",expand:!0}),n.jsx(Ox,{})]}),rN=Object.freeze(Object.defineProperty({__proto__:null,default:nN},Symbol.toStringTag,{value:"Module"})),oN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Reset Properties"}),n.jsx(Fe,{}),n.jsx(Ox,{})]}),sN=Object.freeze(Object.defineProperty({__proto__:null,default:oN},Symbol.toStringTag,{value:"Module"})),iN=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Field one"}),n.jsx(f,{name:"two",label:"Field two"}),n.jsx(pr,{className:"outline"})]}),lN=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const ClassNameExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset className="outline"/>
  </Form>
  /* END */

export default ClassNameExample`,aN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a custom CSS class."]}),n.jsx(j,{Component:iN,code:lN,caption:"className",undent:2,expand:!0})]}),dN=Object.freeze(Object.defineProperty({__proto__:null,default:aN},Symbol.toStringTag,{value:"Module"})),cN=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(pr,{onClick:()=>alert("reset intercepted")})]}),uN=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const OnClickExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Reset onClick={() => alert('reset intercepted')}/>
  </Form>
  /* END */

export default OnClickExample`,mN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onClick"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onClick"})," property to handle a click on the button."]}),n.jsx(j,{Component:cN,code:uN,caption:"onClick",undent:2,expand:!0})]}),pN=Object.freeze(Object.defineProperty({__proto__:null,default:mN},Symbol.toStringTag,{value:"Module"})),fN=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Field one"}),n.jsx(f,{name:"two",label:"Field two"}),n.jsx(pr,{text:"Undo Changes"})]}),hN=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const TextExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset text="Undo Changes"/>
  </Form>
  /* END */

export default TextExample`,xN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"text"})," property to change the text that's displayed on the button."]}),n.jsx(j,{Component:fN,code:hN,caption:"text",undent:2,expand:!0})]}),gN=Object.freeze(Object.defineProperty({__proto__:null,default:xN},Symbol.toStringTag,{value:"Module"})),bN=()=>n.jsx(y,{children:n.jsx(f,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[{value:11,text:"Eleven"},{value:42,text:"Forty-Two"},{value:69,text:"Sixty nine, dude!"}]})}),vN=`import { Form, Field } from '@/lib/index.js'

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
`,Px=()=>n.jsx(qe,{menu:tx}),jN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"select"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"select"})," for a drop-down select list."]}),n.jsx(j,{Component:bN,code:vN,caption:"select",expand:!0}),n.jsx(Px,{})]}),yN=Object.freeze(Object.defineProperty({__proto__:null,default:jN},Symbol.toStringTag,{value:"Module"})),SN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Select Properties"}),n.jsx(Fe,{}),n.jsx(Px,{})]}),FN=Object.freeze(Object.defineProperty({__proto__:null,default:SN},Symbol.toStringTag,{value:"Module"})),wN=()=>n.jsx(y,{children:n.jsx(f,{name:"animal",type:"select",label:"Pick an animal",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),CN=`import React from 'react'
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

export default Inline`,_N=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["The default behaviour is for the select input to be displayed as blocks that extends to the full width of the container. You can set the ",n.jsx("code",{children:"inline"})," property on the field to display it inline."]}),n.jsx(j,{Component:wN,code:CN,caption:"inline",undent:2,expand:!0})]}),EN=Object.freeze(Object.defineProperty({__proto__:null,default:_N},Symbol.toStringTag,{value:"Module"})),TN=()=>n.jsx(y,{children:n.jsx(f,{type:"select",name:"animal",label:"Select Options",options:[{value:"badger",text:"Bobby Badger"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),kN=`import React from 'react'
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

export default Options`,RN=()=>n.jsx(y,{children:n.jsx(f,{type:"select",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),LN=`import React from 'react'
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

export default Options`,NN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"options"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"options"})," property to define the options for the select input.  It should be an array of objects that contain"," ",n.jsx("code",{children:"value"})," (used to set the field value) and ",n.jsx("code",{children:"text"})," ","(used as the text label) properties."]}),n.jsx(j,{Component:TN,code:kN,caption:"options",undent:2,expand:!0}),n.jsxs("p",{children:["In simple cases where the value and text are the same, you can define the ",n.jsx("code",{children:"options"})," as an array of strings."]}),n.jsx(j,{Component:RN,code:LN,caption:"options",undent:2,expand:!0})]}),ON=Object.freeze(Object.defineProperty({__proto__:null,default:NN},Symbol.toStringTag,{value:"Module"})),PN=()=>n.jsx(y,{children:n.jsx(f,{type:"select",name:"animal",label:"Select Options",placeholder:"Pick an animal",options:["Badger","Ferret","Stoat","Weasel"]})}),AN=`import React from 'react'
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

export default Placeholder`,MN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(j,{Component:PN,code:AN,caption:"placeholder",undent:2,expand:!0})]}),IN=Object.freeze(Object.defineProperty({__proto__:null,default:MN},Symbol.toStringTag,{value:"Module"})),DN=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(f,{name:"field2",label:"Field Two",value:"Hello World!"}),n.jsx(Ln,{changed:!0,children:n.jsx(ue,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),$N=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default ChangedExample`,Ax=()=>n.jsx(qe,{menu:G2}),zN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Status"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Status"})," component will only render its child components when the form status matches a particular condition."]}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The component expects one or more properties relating to different form status conditions:"," ",n.jsx("code",{children:"changed"}),","," ",n.jsx("code",{children:"validating"}),","," ",n.jsx("code",{children:"valid"}),","," ",n.jsx("code",{children:"invalid"}),","," ",n.jsx("code",{children:"submitting"})," and"," ",n.jsx("code",{children:"submitted"}),". The default behaviour is to only render the children when all of the specified conditions are met.  The ",n.jsx("code",{children:"any"})," property can be provided to change that to match any condition."]}),n.jsxs("p",{children:['A simple example is shown below. The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field and the form ',n.jsx("code",{children:"changed"})," status flag is true."]})]}),n.jsxs(G,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),n.jsx(j,{Component:DN,code:$N,caption:"Status",expand:!0}),n.jsx(Ax,{})]}),BN=Object.freeze(Object.defineProperty({__proto__:null,default:zN},Symbol.toStringTag,{value:"Module"})),VN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Status Properties"}),n.jsx(Fe,{}),n.jsx(Ax,{})]}),UN=Object.freeze(Object.defineProperty({__proto__:null,default:VN},Symbol.toStringTag,{value:"Module"})),qN=()=>n.jsxs(y,{onSubmit:()=>({ok:!0}),children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(Ln,{any:!0,valid:!0,invalid:!0,children:n.jsx("div",{className:"info alert",children:"Validation is complete"})}),n.jsx(ue,{space:!0}),n.jsx(Nt,{status:!0})]}),HN=`import React from 'react'
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

export default AnyExample`,YN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"any"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"any"})," property indicates that the child content should only be rendered when any of the specified conditions are true.  This changes the default behaviour which is to required that all specified conditions are met."]}),n.jsxs("p",{children:["The example below includes the ",n.jsx(Vr,{})," component so that you can see the form status changing."]})]}),n.jsx(G,{children:"The field here is required.  If you enter a value and then click on the submit button the form will become valid.  If you don't enter a value then it will be invalid.  Either way the alert will be shown because it satisfied the condition that any of the valid or invalid states are true."})]}),n.jsx(j,{Component:qN,code:HN,caption:"any",undent:2,expand:!0})]}),WN=Object.freeze(Object.defineProperty({__proto__:null,default:YN},Symbol.toStringTag,{value:"Module"})),ZN=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsxs(Ln,{changed:!0,children:[n.jsx("div",{className:"info alert",children:"The form has changed!"}),n.jsx(pr,{})]})]}),GN=`import React from 'react'
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

export default ChangedExample`,KN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"changed"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"changed"})," property indicates that the child content should only be rendered when a form field has been changed."]}),n.jsx(j,{Component:ZN,code:GN,caption:"changed",undent:2,expand:!0})]}),QN=Object.freeze(Object.defineProperty({__proto__:null,default:KN},Symbol.toStringTag,{value:"Module"})),XN=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(Ln,{invalid:!0,children:n.jsx("div",{className:"warning alert",children:"The form is invalid!"})}),n.jsx(ue,{space:!0})]}),JN=`import React from 'react'
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

export default InvalidExample`,eO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"invalid"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"invalid"})," property indicates that the child content should only be rendered when the form has been validated and found to be invalid."]}),n.jsx(G,{children:"The field here is required.  If you submit without entering a value you should see the form becomes invalid."})]}),n.jsx(j,{Component:XN,code:JN,caption:"invalid",undent:2,expand:!0})]}),tO=Object.freeze(Object.defineProperty({__proto__:null,default:eO},Symbol.toStringTag,{value:"Module"})),nO=()=>n.jsxs(y,{onSubmit:()=>({ok:!0}),children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(Ln,{submitted:!0,children:n.jsx("div",{className:"info alert",children:"The form has been submitted!"})}),n.jsx(ue,{space:!0})]}),rO=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default SubmittedExample`,oO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submitted"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"submitted"})," property indicates that the child content should only be rendered after the form has been submitted."]}),n.jsxs(G,{children:["Try submitting the form.  You can see the form change to the ",n.jsx("code",{children:"submitted"})," state."]})]}),n.jsx(j,{Component:nO,code:rO,caption:"submitted",expand:!0})]}),sO=Object.freeze(Object.defineProperty({__proto__:null,default:oO},Symbol.toStringTag,{value:"Module"})),iO=()=>n.jsxs(y,{onSubmit:()=>mn(1e3).then(()=>({ok:!0})),children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(Ln,{submitting:!0,children:n.jsx("div",{className:"info alert",children:"The form is submitting!"})}),n.jsx(ue,{space:!0})]}),lO=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default SubmittingExample`,aO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submitting"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"submitting"})," property indicates that the child content should only be rendered while the form is submitting."]}),n.jsxs(G,{children:["Try submitting the form.  There's a dummy ",n.jsx(un,{})," function defined for the form which will wait for 1 second before returning so you can see the form change to the ",n.jsx("code",{children:"submitting"})," state."]})]}),n.jsx(j,{Component:iO,code:lO,caption:"submitting",expand:!0})]}),dO=Object.freeze(Object.defineProperty({__proto__:null,default:aO},Symbol.toStringTag,{value:"Module"})),cO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",required:!0}),n.jsx(Ln,{valid:!0,children:n.jsx("div",{className:"success alert",children:"The form is valid!"})}),n.jsx(ue,{space:!0})]}),uO=`import React from 'react'
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

export default ValidatingExample`,mO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"valid"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"valid"})," property indicates that the child content should only be rendered when the form has successfully validated."]}),n.jsx(G,{children:"The field here is required.  If you enter a value and then click on the submit button you should see the form becomes valid."})]}),n.jsx(j,{Component:cO,code:uO,caption:"valid",undent:2,expand:!0})]}),pO=Object.freeze(Object.defineProperty({__proto__:null,default:mO},Symbol.toStringTag,{value:"Module"})),fO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One",validate:e=>mn(1e3).then(()=>e)}),n.jsx(Ln,{validating:!0,children:n.jsx("div",{className:"info alert",children:"The form is validating!"})}),n.jsx(ue,{space:!0})]}),hO=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default ValidatingExample`,xO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validating"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validating"})," property indicates that the child content should only be rendered while the form is validating."]}),n.jsxs(G,{children:["Try submitting the form.  There's a dummy ",n.jsx(at,{})," function defined for the field which will wait for 1 second before returning so you can see the form change to the ",n.jsx("code",{children:"validating"})," state."]})]}),n.jsx(j,{Component:fO,code:hO,caption:"validating",expand:!0})]}),gO=Object.freeze(Object.defineProperty({__proto__:null,default:xO},Symbol.toStringTag,{value:"Module"})),bO=()=>n.jsxs(y,{onSubmit:()=>alert("Form was submitted"),children:[n.jsx(f,{name:"one",label:"Field one"}),n.jsx(f,{name:"two",label:"Field two"}),n.jsx(W,{})]}),vO=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitExample = () =>
  <Form onSubmit={() => alert('Form was submitted')}>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,Mx=()=>n.jsx(qe,{menu:q2}),jO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submit"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Submit"})," component can be used to add a button to submit the form. You can use the ",n.jsx(un,{})," form property to handle the submission."]}),n.jsx(j,{Component:bO,code:vO,caption:"Submit",expand:!0}),n.jsx(Mx,{})]}),yO=Object.freeze(Object.defineProperty({__proto__:null,default:jO},Symbol.toStringTag,{value:"Module"})),SO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submit Properties"}),n.jsx(Fe,{}),n.jsx(Mx,{})]}),FO=Object.freeze(Object.defineProperty({__proto__:null,default:SO},Symbol.toStringTag,{value:"Module"})),wO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Field one"}),n.jsx(f,{name:"two",label:"Field two"}),n.jsx(W,{className:"blue"})]}),CO=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitClassName = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="blue"/>
  </Form>
  /* END */

export default SubmitClassName`,_O=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a custom CSS class."]}),n.jsx(j,{Component:wO,code:CO,caption:"className",undent:2,expand:!0})]}),EO=Object.freeze(Object.defineProperty({__proto__:null,default:_O},Symbol.toStringTag,{value:"Module"})),TO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"field1",label:"Field One"}),n.jsx(W,{onClick:e=>{e.preventDefault(),alert("Submit button was clicked!")}})]}),kO=`import React from 'react'
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

export default OnClick`,RO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onClick"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onClick"})," property to handle a click on the button.  You will need to call ",n.jsx("code",{children:"preventDefault()"})," on the event if you want to stop the form from being submitted."]}),n.jsx(j,{Component:TO,code:kO,caption:"onClick",undent:2,expand:!0})]}),LO=Object.freeze(Object.defineProperty({__proto__:null,default:RO},Symbol.toStringTag,{value:"Module"})),NO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Field one"}),n.jsx(f,{name:"two",label:"Field two"}),n.jsx(W,{text:"Save Changes"})]}),OO=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitText = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit text="Save Changes"/>
  </Form>
  /* END */

export default SubmitText`,PO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",n.jsx("code",{children:"className"}),"."]}),n.jsx(j,{Component:NO,code:OO,caption:"text",undent:2,expand:!0})]}),AO=Object.freeze(Object.defineProperty({__proto__:null,default:PO},Symbol.toStringTag,{value:"Module"})),MO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one"}),n.jsx(f,{name:"two",label:"A text input with a label"}),n.jsx(f,{name:"three",label:"Another text input",type:"text"}),n.jsx(f,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),n.jsx(f,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00",prefixClass:"lined shaded",suffixClass:"lined shaded"})]}),IO=`import React from 'react'
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

export default InputExample`,Ix=()=>n.jsx(qe,{menu:Q2}),DO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"text"})," input is the default ",n.jsx(Tn,{})," for a ",n.jsx(X,{}),".  You can specify it explicitly if you like, but it's entirely optional."]}),n.jsx(j,{Component:MO,code:IO,caption:"text",undent:2,expand:!0}),n.jsx(Ix,{})]}),$O=Object.freeze(Object.defineProperty({__proto__:null,default:DO},Symbol.toStringTag,{value:"Module"})),zO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Text Properties"}),n.jsx(Fe,{}),n.jsx(Ix,{})]}),BO=Object.freeze(Object.defineProperty({__proto__:null,default:zO},Symbol.toStringTag,{value:"Module"})),VO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"An inline text field",inline:!0}),n.jsx(f,{name:"two",label:"Same with prefix and suffix",prefix:"£",suffix:".00",inline:!0}),n.jsx(f,{name:"two",label:"Default text field"})]}),UO=`import React from 'react'
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

export default Inline`,qO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsx("p",{children:"The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements."}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width.  The ",n.jsx(Hy,{})," can be used to set the input size."]}),n.jsx(j,{Component:VO,code:UO,caption:"inline",undent:2,expand:!0})]}),HO=Object.freeze(Object.defineProperty({__proto__:null,default:qO},Symbol.toStringTag,{value:"Module"})),YO=()=>n.jsx(y,{children:n.jsx(f,{name:"one",label:"Name",placeholder:"Your name"})}),WO=`import React from 'react'
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

export default Placeholder`,ZO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(j,{Component:YO,code:WO,caption:"placeholder",undent:2,expand:!0})]}),GO=Object.freeze(Object.defineProperty({__proto__:null,default:ZO},Symbol.toStringTag,{value:"Module"})),KO=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"An inline text field",inline:!0}),n.jsx(f,{name:"two",label:"With explicit size=25",size:"25",inline:!0}),n.jsx(f,{name:"two",label:"Same size with prefix and suffix",prefix:"£",suffix:".00",size:"25",inline:!0})]}),QO=`import React from 'react'
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

export default Inline`,XO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"size"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the size (in characters) of a text input.  This will only take effect when the ",n.jsx(qy,{})," property is set.  The default value is 20."]}),n.jsxs("p",{children:["Note that this controls the size of the input field.  If you have a ",n.jsx(ax,{})," or ",n.jsx(dx,{})," defined for the field then they will increase the overall width of the field.  If you want to control the overall width of the field then you can do so using the ",n.jsx(ky,{})," property."]}),n.jsx(j,{Component:KO,code:QO,caption:"inline",undent:2,expand:!0})]}),JO=Object.freeze(Object.defineProperty({__proto__:null,default:XO},Symbol.toStringTag,{value:"Module"})),eP=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",type:"number",label:"A number field"}),n.jsx(f,{name:"two",type:"date",label:"A date field"}),n.jsx(f,{name:"three",type:"password",label:"A password field"}),n.jsx(f,{name:"four",type:"color",label:"A color field"})]}),tP=`import React from 'react'
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

export default TypeExample`,nP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"type"}),n.jsxs("p",{children:["The ",n.jsx(Tn,{})," property can also be set to one of the other input types that are based on the text input: ",n.jsx("code",{children:"number"}),","," ",n.jsx("code",{children:"date"}),", ",n.jsx("code",{children:"password"}),", ",n.jsx("code",{children:"color"})," and so on."]}),n.jsx(j,{Component:eP,code:tP,caption:"type",undent:2,expand:!0})]}),rP=Object.freeze(Object.defineProperty({__proto__:null,default:nP},Symbol.toStringTag,{value:"Module"})),oP=()=>n.jsx(y,{children:n.jsx(f,{name:"one",label:"A text area input",type:"textarea"})}),sP=`import React from 'react'
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

export default InputExample`,Dx=()=>n.jsx(qe,{menu:X2}),iP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"textarea"}),n.jsxs("p",{className:"intro wide",children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"textarea"})," for a text area input."]}),n.jsx(j,{Component:oP,code:sP,caption:"textarea",undent:2,expand:!0}),n.jsx(Dx,{})]}),lP=Object.freeze(Object.defineProperty({__proto__:null,default:iP},Symbol.toStringTag,{value:"Module"})),aP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Textarea Properties"}),n.jsx(Fe,{}),n.jsx(Dx,{})]}),dP=Object.freeze(Object.defineProperty({__proto__:null,default:aP},Symbol.toStringTag,{value:"Module"})),cP=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"12 Columns",type:"textarea",cols:12,inline:!0}),n.jsx(f,{name:"two",label:"30 Columns",type:"textarea",cols:30,inline:!0})]}),uP=`import React from 'react'
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

export default ColsExample`,mP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"cols"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"cols"})," property can be used to set the number of columns. This will only have any effect when the ",n.jsx(Wy,{})," property is set."]}),n.jsx(j,{Component:cP,code:uP,caption:"cols",undent:2,expand:!0})]}),pP=Object.freeze(Object.defineProperty({__proto__:null,default:mP},Symbol.toStringTag,{value:"Module"})),fP=()=>n.jsx(y,{children:n.jsx(f,{name:"one",label:"An inline textarea field",type:"textarea",inline:!0})}),hP=`import React from 'react'
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

export default Inline`,xP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width.  ",n.jsx(Zy,{})," property can be used to set the width as the number of columns.  The default width is 20."]}),n.jsx(j,{Component:fP,code:hP,caption:"inline",undent:2,expand:!0})]}),gP=Object.freeze(Object.defineProperty({__proto__:null,default:xP},Symbol.toStringTag,{value:"Module"})),bP=()=>n.jsx(y,{children:n.jsx(f,{name:"one",label:"Summary",type:"textarea",placeholder:"Enter a summary"})}),vP=`import React from 'react'
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

export default Placeholder`,jP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(j,{Component:bP,code:vP,caption:"placeholder",undent:2,expand:!0})]}),yP=Object.freeze(Object.defineProperty({__proto__:null,default:jP},Symbol.toStringTag,{value:"Module"})),SP=()=>n.jsxs(y,{children:[n.jsx(f,{name:"one",label:"Two rows",type:"textarea",rows:2}),n.jsx(f,{name:"two",label:"Ten Rows",type:"textarea",rows:10})]}),FP=`import React from 'react'
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

export default RowsExample`,wP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"rows"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"rows"})," property can be used to set the number of rows."]}),n.jsx(j,{Component:SP,code:FP,caption:"rows",undent:2,expand:!0})]}),CP=Object.freeze(Object.defineProperty({__proto__:null,default:wP},Symbol.toStringTag,{value:"Module"})),_P=()=>n.jsxs(y,{children:[n.jsx("h2",{children:"Login Form"}),n.jsx(f,{required:!0,name:"email",label:"Email Address"}),n.jsx(f,{required:!0,name:"password",type:"password",label:"Password"}),n.jsx(W,{text:"Login"})]}),EP=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default BasicLoginForm`,TP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"A Basic Form"}),n.jsxs("p",{className:"intro wide",children:["One of the underlying principles of this library is that it should be just as easy, if not easier, to create a form using"," ","Badger Form as it should be using vanilla HTML."]}),n.jsx("h2",{children:"Login Form"}),n.jsxs($,{align:"start",children:[n.jsx("div",{children:n.jsx("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form.  In this simple example there are fields for the user to enter their email address and password."})}),n.jsx("div",{children:n.jsx(dt,{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})})]}),n.jsx(j,{Component:_P,code:EP,caption:"Basic Login Form",expand:!0}),n.jsxs($,{align:"start",children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Form"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Form"})," component can contain any content so you can intersperse form fields with other markup."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," property should be defined to handle the form submission.  If you don't define one then a window alert will be shown when the form is submitted, as demonstrated in this example."]})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Field"}),n.jsxs("p",{children:["The only mandatory property for all ",n.jsx("code",{children:"Field"})," components is"," ",n.jsx("code",{children:"name"}),".  The default ",n.jsx("code",{children:"type"})," is ",n.jsx("code",{children:"text"})," ","and must be provided if you want any other kind of field input type. Some additional properties may be required depending on the field type.  For example, a ",n.jsx("code",{children:"select"})," input will also require"," ",n.jsx("code",{children:"options"})," to be defined."]}),n.jsx("h3",{children:"Submit"}),n.jsxs("p",{children:['A button used to submit the form.  The default text displayed is "Submit" which you can change via the ',n.jsx("code",{children:"text"})," property as shown here."]})]})]}),n.jsx(qe,{menu:Mu})]}),kP=Object.freeze(Object.defineProperty({__proto__:null,default:TP},Symbol.toStringTag,{value:"Module"})),On=()=>n.jsx(qe,{menu:Mu}),RP=e=>new Promise((t,r)=>e.password===e.passcheck?t(e):r({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),LP=e=>kt().trim().email().required("You must enter your email address!").validate(e),cf=e=>kt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),NP={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:LP},password:{label:"Password",type:"password",required:!0,validate:cf},passcheck:{label:"Confirm",type:"password",required:!0,validate:cf},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"]},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"Your donation?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"Your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"Your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"fluid",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},OP=()=>{const[e,t]=T.useState();return n.jsxs(y,{fields:NP,validate:RP,showRequired:!0,children:[n.jsx(Dr,{legend:"Your Details",children:n.jsx(nt,{names:"name email password passcheck",grid:2,stack:"laptop"})}),n.jsx(Ue,{fieldErrors:!1}),n.jsxs(Dr,{legend:"Other Information",children:[n.jsx(nt,{names:"dob price",grid:2,stack:"laptop"}),n.jsx(f,{name:"experience"}),n.jsxs("div",{className:"grid-2 gap-v-none gap-h-4 stack-laptop",children:[n.jsx(f,{name:"animal"}),n.jsx(f,{name:"color",onChange:t})]}),(e==null?void 0:e.value)&&n.jsxs("div",{style:{color:e.value,backgroundColor:"#444",marginTop:"1em",padding:"0.25rem 0.5rem",textAlign:"center"},children:[e.value," is a great color!"]})]}),n.jsx(f,{name:"terms"}),n.jsx(W,{text:"Register"})]})},PP=`import { Form, Field, Fields, Fieldset, Errors, Submit } from '@/lib/index.js'

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

export default RegistrationForm`,AP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Complete Registration Form"}),n.jsx("p",{className:"intro wide",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),n.jsx("h2",{children:"Input Types"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsx("p",{children:"This example demonstrates some of the other fields input types."}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"radio"})," for a ",n.jsx(fx,{})," button input and provide some ",n.jsx(Ky,{}),", as shown here for the ",n.jsx("code",{children:"experience"})," field."]}),n.jsxs("p",{children:["Or set it to ",n.jsx("code",{children:"select"})," for a ",n.jsx(hx,{})," input and provide some ",n.jsx(Jy,{}),", as shown in the ",n.jsx("code",{children:"animal"})," field."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["Set it to ",n.jsx("code",{children:"checkbox"})," for a ",n.jsx(px,{})," and provide some ",n.jsx(Gy,{})," to go alongside it."]}),n.jsxs("p",{children:["You can also use the ",n.jsx(Tn,{})," to set other text input types, like ",n.jsx("code",{children:"number"})," and ",n.jsx("code",{children:"date"}),"."]})]})]}),n.jsx(j,{Component:OP,code:PP,caption:"Registration Form"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Components and Properties"}),n.jsxs("dl",{children:[n.jsxs("dt",{children:[n.jsx(Xp,{})," Component"]}),n.jsx("dd",{children:n.jsxs("p",{children:["The example includes the ",n.jsx(Xp,{})," component which can be used to group fields together in a set, complete with a ",n.jsx(Dy,{}),"."]})}),n.jsxs("dt",{children:[n.jsx(kn,{})," and ",n.jsx(rr,{})]}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(rr,{})," and ",n.jsx(kn,{})," properties can be set on the ",n.jsx(me,{})," or individual ",n.jsx(X,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]})}),n.jsx("dt",{children:n.jsx(sr,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(sr,{})," property can be added to a ",n.jsx(X,{})," to watch for changes in the field value.  You can see it in use above in the ",n.jsx("code",{children:"color"})," field."]})})]})]}),n.jsxs("div",{children:[n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"There's a lot to take in there.  For the next example we'll scale things back a bit and look at the common case where you want to edit some existing data using a form."})]})]}),n.jsx(On,{uri:"complete-registration"})]}),MP=Object.freeze(Object.defineProperty({__proto__:null,default:AP},Symbol.toStringTag,{value:"Module"})),IP={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,placeholder:"Select manufacturer",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},DP=()=>n.jsxs(y,{fields:IP,debug:!0,children:[n.jsx(f,{name:"name",debug:!0,wide:!0}),n.jsx(f,{name:"description",debug:!0,wide:!0}),n.jsx(nt,{names:"manufacturer price",grid:2,debug:!0,wide:!0}),n.jsx(ue,{className:"flex space"}),n.jsx(Nt,{status:!0})]}),$P=`import { Form, Field, Fields, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebuggingForm`,zP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debugging"}),n.jsx("p",{className:"intro wide",children:"Let't face it, things don't always work right first time, so being able to debug your forms is an important requirement."}),n.jsxs("h2",{children:[n.jsx(Vr,{})," Component and ",n.jsx(ic,{})," Property"]}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx(Vr,{})," component can be added to a form to display information about the form values and other state variables.  By default it shows only the form values, but you can use the ",n.jsx("code",{children:"status"})," option to also show the form status.  If for some reason you don't want to see the values you can set ",n.jsx("code",{children:"values"})," to ",n.jsx("code",{children:"false"}),"."]}),n.jsxs("p",{children:["If you add the ",n.jsx(ic,{})," property to a ",n.jsx(me,{})," or"," ",n.jsx(X,{})," then it will enable debugging messages for that component. These will be output to the Javascript console.  Any properties (like"," ",n.jsx("code",{children:"debug"}),") that are passed to the ",n.jsx(Vl,{})," component will be forwarded onto the respective ",n.jsx(X,{})," components, so it works there too."]})]}),n.jsx(dt,{children:"Try changing some of the values in the form.  Watch the form values and status change in the debugging panel.  Also check out the Javascript console for further debugging messages."})]}),n.jsx(j,{Component:DP,code:$P,caption:"Debugging"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"On the next page we'll look at how you can define your own field layout."}),n.jsx(On,{uri:"debugging"})]}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:zP},Symbol.toStringTag,{value:"Module"})),VP={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},mc={id:"9876",version:123,name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},UP={id:mc.id,version:mc.version},qP=()=>n.jsxs(y,{fields:VP,values:mc,hidden:UP,children:[n.jsx(nt,{names:"name description",wide:!0}),n.jsx(nt,{names:"manufacturer price",grid:2,wide:!0}),n.jsx(ue,{submit:{text:"Save Changes",className:"blue"},reset:{className:"outline"},className:"flex space"})]}),HP=`import { Form, Fields, ResetSubmit } from '@/lib/index.js'

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

export default EditForm`,YP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Edit Form"}),n.jsx("p",{className:"intro wide",children:"Another common use case for forms is in editing existing data records."}),n.jsx("h2",{children:n.jsx(sc,{})}),n.jsxs($,{children:[n.jsxs("p",{children:["You can pass the ",n.jsx(sc,{})," property to a ",n.jsx(me,{})," to seed it with initial values for fields.  If there are additional hidden values that you want to include when you submit the form then you can provide them using the ",n.jsx(ox,{})," property."]}),n.jsxs(dt,{children:["Try changing some of the values in the form and then click on the ",n.jsx("b",{children:"Reset"})," button.  The fields will reset to their original values."]})]}),n.jsx(j,{Component:qP,code:HP,caption:"Edit Form"}),n.jsx("h2",{children:"Where Next?"}),n.jsxs("p",{children:["You've seen an example of the ",n.jsx(Vr,{})," component in action. Now it's time to talk about debugging in a little more detail."]}),n.jsx(On,{uri:"edit-form"})]}),WP=Object.freeze(Object.defineProperty({__proto__:null,default:YP},Symbol.toStringTag,{value:"Module"})),ZP={email:{label:"Email Address",validate:e=>kt().trim().email("That doesn't look like an email address").required("You must enter your email address!").validate(e)},password:{label:"Password",type:"password",validate:e=>kt().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(e)}},GP=()=>n.jsxs(y,{fields:ZP,children:[n.jsx(f,{name:"email"}),n.jsx(f,{name:"password"}),n.jsx(W,{text:"Login"})]}),KP=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default LoginWithValidation`,QP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Validation"}),n.jsxs("p",{className:"intro wide",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",n.jsx("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),n.jsx("h2",{children:"Login Form With Field Validation"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can add a ",n.jsx(at,{})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",n.jsx("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),n.jsxs("p",{children:["You can add the ",n.jsx(at,{})," function to the ",n.jsx(X,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",n.jsx(me,{})," ","component as the ",n.jsx(_t,{})," property.  When you include a ",n.jsx(X,{})," the ",n.jsx(Br,{})," will be used to lookup the default properties for the field from the ",n.jsx(_t,{})," you've provided."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",n.jsx(X,{})," element around, or just edit the ",n.jsx(Br,{})," property than it is to cut and paste large blocks of code."]}),n.jsxs(dt,{children:["Try entering some values in the form below and click on the"," ",n.jsx("b",{children:"Login"})," button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors."]})]})]}),n.jsx(j,{Component:GP,code:KP,caption:"Field Validation",expand:!0}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Validation Properties"}),n.jsxs("dl",{children:[n.jsx("dt",{children:n.jsx(Vt,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["By default, field validation happens when the form is submitted. You can add the ",n.jsx(Vt,{})," property to either the"," ",n.jsx(me,{})," or individual ",n.jsx(X,{})," components if you want the validation to happen when a field is blurred."]})}),n.jsx("dt",{children:n.jsx(Ut,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["You can add the ",n.jsx(Ut,{})," property to either the"," ",n.jsx(me,{})," or individual ",n.jsx(X,{})," components if you want validation to happen any time the field value changes, i.e. as the user types."]})}),n.jsx("dt",{children:n.jsx(li,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(li,{})," can be set if you only want validation to start after the user has entered a particular number of characters. The default values is ",n.jsx("code",{children:"1"}),"."]})})]})]}),n.jsxs("div",{children:[n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."})]})]}),n.jsx(On,{uri:"field-validation"})]}),XP=Object.freeze(Object.defineProperty({__proto__:null,default:QP},Symbol.toStringTag,{value:"Module"})),JP=()=>{const[e,t]=T.useState(),r=o=>Promise.resolve(t(o));return n.jsxs(n.Fragment,{children:[n.jsxs(y,{onSubmit:r,debug:!0,children:[n.jsx(f,{name:"email",label:"Email Address",required:!0}),n.jsx(f,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert border mar-t-4",children:[n.jsx("h4",{children:"Submitted Values"}),n.jsx("pre",{children:JSON.stringify(e)})]}):null]})},eA=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default DummySubmit`,tA=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Submission"}),n.jsxs("p",{className:"intro wide",children:["To handle submission of a form we need to add an ",n.jsx(un,{})," ","handler to the ",n.jsx(me,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),n.jsx("h2",{children:n.jsx(un,{})}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["We'll create a function which stores the submitted"," ",n.jsx("code",{children:"values"})," in a state variable and displays them on the screen.  The ",n.jsx(un,{})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",n.jsx("code",{children:"error"})," and/or an array of ",n.jsx("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),n.jsx(dt,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})]}),n.jsx(j,{Component:JP,code:eA,caption:"Dummy Submission"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"When the form is submitted there are two possible outcomes.  Either the submission is successful, or there's an error (or errors) that need to be handled.  We'll look at these in the next few pages."}),n.jsx(On,{uri:"form-submission"})]}),nA=Object.freeze(Object.defineProperty({__proto__:null,default:tA},Symbol.toStringTag,{value:"Module"})),rA=e=>new Promise((t,r)=>e.password===e.passcheck?t(e):r({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),oA=e=>kt().trim().email().required("You must enter your email address!").validate(e),uf=e=>kt().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),sA={email:{label:"Email Address",validate:oA},password:{label:"Password",type:"password",validate:uf},passcheck:{label:"Confirm Password",type:"password",validate:uf}},iA=()=>n.jsxs(y,{fields:sA,validate:rA,children:[n.jsx(nt,{names:"email password passcheck"}),n.jsx(Ue,{title:"Registration Error",fieldErrors:!1}),n.jsx(W,{text:"Register"})]}),lA=`import { Form, Fields, Errors, Submit } from '@/lib/index.js'

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

export default LoginWithValidation`,aA={title:"Form Validation"},dA=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Validation"}),n.jsx("p",{className:"intro wide",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),n.jsx("h2",{children:"Registration Form With Validation"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can add a ",n.jsx(Cy,{})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),n.jsxs("p",{children:["The function will be passed a ",n.jsx("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",n.jsx("code",{children:"error"})," and/or array of ",n.jsx("code",{children:"errors"})," if not."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"error"})," can be used to define an error for the form that isn't specific to any particular field.  In this case it's being used to raise an error indicating that the two passwords entered don't match."]}),n.jsxs("p",{children:["Each item in the ",n.jsx("code",{children:"errors"})," array should relate to a field identified by ",n.jsx("code",{children:"name"}),", with an additional ",n.jsx("code",{children:"message"})," ","indicating why it is invalid.  In this case we're also raising errors for both password fields."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx(Mo,{})," component can used to insert a prominent alert anywhere in the form, warning the user about what's gone wrong.  By default it will display any generic ",n.jsx("code",{children:"error"})," ","and also a list of any field-specific ",n.jsx("code",{children:"errors"}),".  But here we're relying on the fact that the field errors will be displayed underneath each field input, so we're setting the "," ",n.jsx("code",{children:"fieldErrors"})," flag to ",n.jsx("code",{children:"false"})," to suppress the"," ",n.jsx("code",{children:"errors"})," list."]}),n.jsxs("p",{children:["We're also using this opportunity to introduce you to the"," ",n.jsx(Vl,{})," component which allows you to add multiple fields to a ",n.jsx(me,{})," in one fell swoop."]}),n.jsxs(dt,{children:["Try entering some values in the form below and click on the"," ",n.jsx("b",{children:"Register"})," button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors."]})]})]}),n.jsx(j,{Component:iA,code:lA,caption:"Form Validation"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),n.jsx(On,{uri:"form-validation"})]}),cA=Object.freeze(Object.defineProperty({__proto__:null,default:dA,metadata:aA},Symbol.toStringTag,{value:"Module"})),uA={email:{label:"Email Address",required:!0}},mA=()=>n.jsxs(y,{fields:uA,children:[n.jsx(f,{name:"email",children:e=>n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:e.id,children:e.label}),n.jsx("div",{className:"inputs",children:n.jsx("input",{className:"input",ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:t=>e.onChange(t.target.value)})})]})}),n.jsx(W,{text:"Login"})]}),pA=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HeadlessFields`,fA={email:{label:"Email Address"}},hA=()=>n.jsx(y,{fields:fA,children:n.jsx(f,{name:"email",children:e=>n.jsxs("div",{className:"border pad",children:["This is where you render the ",e.name,' field with an "',e.label,'" label']})})}),xA=`import { Form, Field } from '@/lib/index.js'

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

export default HeadlessBlank`,gA={email:{label:"Email Address",required:!0}},bA=()=>n.jsxs(y,{fields:gA,children:[n.jsx(f,{name:"email",children:e=>n.jsxs(mr,{children:[n.jsxs("h2",{className:"mar-t-none",children:["Custom Layout for ",e.name]}),n.jsx(Yr,{}),n.jsx(ni,{}),n.jsx(gi,{})]})}),n.jsx(W,{text:"Login"})]}),vA=`import {
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

export default HeadlessBuiltins`,jA={email:{label:"Email Address",required:!0}},yA=()=>n.jsxs(y,{fields:jA,children:[n.jsx(f,{name:"email",children:n.jsxs(mr,{children:[n.jsx("h2",{className:"mar-t-none",children:"Custom Layout for Email field"}),n.jsx(Yr,{}),n.jsx(ni,{}),n.jsx(gi,{})]})}),n.jsx(W,{text:"Login"})]}),SA=`import {
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

export default HeadlessBuiltins`,FA=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Headless Fields"}),n.jsx("p",{className:"intro wide",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),n.jsx("h2",{children:"Field Render Function"}),n.jsx("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),n.jsx(j,{Component:hA,code:xA,caption:"Headless Fields"}),n.jsx("h2",{children:"Typical Render Function"}),n.jsx("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),n.jsx(j,{Component:mA,code:pA,caption:"Headless Fields"}),n.jsx("h2",{children:"Builtin Components"}),n.jsxs("p",{children:["You can mix and match your own layout with the builtin components. This example shows how you can use the ",n.jsx(Zo,{}),", ",n.jsx(Ay,{}),","," ",n.jsx(dc,{})," and ",n.jsx(cx,{})," components to build up the field content."]}),n.jsx(j,{Component:bA,code:vA,caption:"Builtin Components"}),n.jsx("h2",{children:"Child Components"}),n.jsxs("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",n.jsx("code",{children:"useField"})," ","then you don't need to define a function for the ",n.jsx(X,{})," body. You can just include them as children of the field component."]}),n.jsx(j,{Component:yA,code:SA,caption:"Builtin Components"}),n.jsx(On,{uri:"headless-fields"})]}),wA=Object.freeze(Object.defineProperty({__proto__:null,default:FA},Symbol.toStringTag,{value:"Module"})),CA=()=>{const e=()=>{throw"Oh noes! An error occurred"};return n.jsx(n.Fragment,{children:n.jsxs(y,{onSubmit:e,children:[n.jsx(Ue,{}),n.jsx(f,{name:"email",label:"Email Address",required:!0}),n.jsx(f,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]})})},_A=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default SubmitThrow`,EA=()=>{const e=()=>{throw new Error("Oh noes! An error occurred")};return n.jsx(n.Fragment,{children:n.jsxs(y,{onSubmit:e,debug:!0,children:[n.jsx(Ue,{}),n.jsx(f,{name:"email",label:"Email Address",required:!0}),n.jsx(f,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]})})},TA=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default SubmitThrow`,kA=()=>{const e=()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]});return n.jsx(n.Fragment,{children:n.jsxs(y,{onSubmit:e,children:[n.jsx(Ue,{}),n.jsx(f,{name:"email",label:"Email Address",required:!0}),n.jsx(f,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]})})},RA=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default SubmitReject`,LA=()=>{const[e,t]=T.useState(),r=()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]});return n.jsxs(n.Fragment,{children:[n.jsxs(y,{onSubmit:r,onError:t,children:[n.jsx(f,{name:"email",label:"Email Address",required:!0}),n.jsx(f,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert mar-t-4 mar-b-none",children:[n.jsx("h4",{children:"Submission Error"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]}):null]})},NA=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default SubmitThrow`,OA=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submission Errors"}),n.jsxs("p",{className:"intro wide",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",n.jsx("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),n.jsx("h2",{children:"Simple Error"}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",n.jsx("code",{children:"error"})," state variable. See the ",n.jsx(Mo,{})," component for more information about changing how and if errors are displayed."]}),n.jsx(dt,{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})]}),n.jsx(j,{Component:CA,code:_A,caption:"Error Thrown"}),n.jsxs("p",{children:["As well as calling the ",n.jsx("code",{children:"throw()"})," function with a string, you can ",n.jsx("code",{children:"throw"})," an ",n.jsx("code",{children:"Error"})," object."]}),n.jsx(j,{Component:EA,code:TA,caption:"Error Thrown"}),n.jsx("h2",{children:"Rejected Promise"}),n.jsxs($,{align:"start",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single"," ",n.jsx("code",{children:"error"})," string (or object containing a ",n.jsx("code",{children:"message"}),"), or an array of ",n.jsx("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",n.jsx("code",{children:"message"}),"."]}),n.jsxs("p",{children:["The benefit of this approach is that error objects can also contain the ",n.jsx("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]})]}),n.jsxs("div",{children:[n.jsx("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),n.jsx(dt,{title:"Try it out",children:"Try submitting the form to see the errors generated."})]})]}),n.jsx(j,{Component:kA,code:RA,caption:"Error Thrown"}),n.jsx("h2",{children:n.jsx(Ao,{})}),n.jsxs($,{children:[n.jsxs("p",{children:["You can provide an ",n.jsx(Ao,{})," handler which will be called when an error response is received.  In this example we simply call a ",n.jsx("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),n.jsxs(dt,{children:["Try submitting the form to see the errors generated.  The "," ",n.jsx(Ao,{})," handler will store them in the state variable and display them beneath the form."]})]}),n.jsx(j,{Component:LA,code:NA,caption:"onError"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"We've now enough in place to look at a more complete example."}),n.jsx(On,{uri:"submission-errors"})]}),PA=Object.freeze(Object.defineProperty({__proto__:null,default:OA},Symbol.toStringTag,{value:"Module"})),AA=()=>{const[e,t]=T.useState(),r=s=>t(s.data),o=s=>Promise.resolve({status:200,data:{message:"Welcome back!",user:{id:12345,email:s.email,name:"Bobby Badger"}}});return n.jsxs(n.Fragment,{children:[n.jsxs(y,{onSubmit:o,onSuccess:r,children:[n.jsx(f,{name:"email",label:"Email Address",required:!0}),n.jsx(f,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert mar-t-4",children:[n.jsx("h4",{children:"Emulated Response"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]}):null]})},MA=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitResponse = () => {
  const [response, setResponse] = useState()

  // handle successful response
  const onSuccess = response =>
    setResponse(response.data)

  // dummy submission in the style of fetch or axios
  const onSubmit = values =>
    Promise.resolve({
      status: 200,
      data:   {
        message: 'Welcome back!',
        user:    {
          id:    12345,
          email: values.email,
          name:  'Bobby Badger',
        },
      }
    })

  return (
    <>
      <Form
        onSubmit={onSubmit}
        onSuccess={onSuccess}
      >
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

export default SubmitResponse`,IA=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submission Response"}),n.jsx("p",{className:"intro wide",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),n.jsx("h2",{children:n.jsx(ii,{})}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",n.jsx(un,{})," function which returns a resolved promise.  This is emulating how both"," ",n.jsx("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",n.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","work."]}),n.jsxs("p",{children:["The additional step is to define an ",n.jsx(ii,{})," handler which can do something to handle the successful response.  In this case we're calling the ",n.jsx("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]})]}),n.jsx(dt,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})]}),n.jsx(j,{Component:AA,code:MA,caption:"Submission Response"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"What happens if the submission isn't successful?  We'll look at handling submission errors on the next page."}),n.jsx(On,{uri:"submission-response"})]}),DA=Object.freeze(Object.defineProperty({__proto__:null,default:IA},Symbol.toStringTag,{value:"Module"})),$A=()=>n.jsx(qe,{menu:nx}),zA=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Utilities"}),n.jsx(Fe,{}),n.jsx($A,{})]}),BA=Object.freeze(Object.defineProperty({__proto__:null,default:zA},Symbol.toStringTag,{value:"Module"})),$x=()=>{const{value:e,onChange:t}=rt(),r=["red","green","blue"];return n.jsxs("div",{children:[n.jsx("div",{className:"flex gap-2",children:r.map(o=>n.jsx("button",{type:"button",className:`solid ${o}`,onClick:()=>t(o),children:o},o))}),e?n.jsxs("p",{children:["You have selected ",e]}):n.jsx("p",{children:"Select a color"})]})},VA=()=>n.jsx(y,{children:n.jsx(f,{name:"color",Input:$x})}),UA=`import { Form, Field } from '@/lib/index.js'

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

export default UseInput`;z4("colorButton",$x);const qA=()=>n.jsxs(y,{children:[n.jsx(f,{name:"color",type:"colorButton"}),n.jsx(f,{name:"color",type:"color-button"}),n.jsx(f,{name:"color",type:"colorbutton"})]}),HA=`import { Form, Field, addInputType } from '@/lib/index.js'

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
    <Field
      name="color"
      type="color-button"
    />
    <Field
      name="color"
      type="colorbutton"
    />
  </Form>

export default AddInput`,YA=`import { useField } from '@/lib/index.js'

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

export default ColorButtonInput`,WA=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"addInputType()"}),n.jsxs("p",{className:"wide",children:["The ",n.jsx("code",{children:"addInputType()"})," function can be used to add your own custom ",n.jsx(ac,{})," components."]}),n.jsxs("p",{className:"wide",children:["Here's a trivial example where we implement a"," ",n.jsx("code",{children:"ColorButtonInput"})," input, allowing a user to click on a button to select a color."]}),n.jsx(Ge,{code:YA,caption:"ColorButtonInput.jsx"}),n.jsxs("h2",{children:["Using ",n.jsx("span",{className:"font-mono",children:"Input"})]}),n.jsxs("p",{className:"wide",children:["You can use the ",n.jsx(ac,{})," property on a field to directly reference the custom input component."]}),n.jsx(j,{Component:VA,code:UA,caption:"Input"}),n.jsxs("h2",{children:["Using ",n.jsx("span",{className:"font-mono",children:"addInput()"})]}),n.jsxs("p",{className:"wide",children:["The other approach is to use ",n.jsx("code",{children:"addInputType()"})," to register your component.  You can then use the ",n.jsx(Tn,{})," property to access it using the name you give it.  In this example we give it the name ",n.jsx("code",{children:"colorButton"}),"."]}),n.jsxs("p",{children:["Note that input type names are converted to a canonical form, both when being defined and being accessed.  Non-word characters are removed and the name is converted to lower case.  As shown in this example, input types of ",n.jsx("code",{children:"colorButton"}),", ",n.jsx("code",{children:"color-button"})," and"," ",n.jsx("code",{children:"colorbutton"})," are all considered to be the same thing."]}),n.jsx(j,{Component:qA,code:HA,caption:"addInput()"})]}),ZA=Object.freeze(Object.defineProperty({__proto__:null,default:WA},Symbol.toStringTag,{value:"Module"})),GA=({render:e})=>{const[t,r]=T.useState({}),o=T.useRef();return e({tocs:t,addToc:(l,a,d,c)=>{const u=t[l]||(t[l]={});u[a]={text:d,ref:c},r({...t})},addTocHeading:(l,a,d,c)=>{const u=t[l]||(t[l]={});u[a]={heading:d,ref:c},r({...t})},contentRef:o})},Vu=au(GA),zx=({path:e,onClick:t,width:r=512,height:o=512,style:s,className:i="night-and-day--icon",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:i,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${o}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),KA=e=>n.jsx(zx,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Bx=({Icon:e,caption:t,onClick:r,iconClass:o,iconStyle:s,captionStyle:i,className:l="night-and-day--switcher",captionClass:a="night-and-day--caption",style:d={display:"inline-block"}})=>n.jsxs("div",{className:l,onClick:r,style:d,children:[n.jsx(e,{style:s,className:o}),!!t&&n.jsx("div",{className:a,style:i,children:t})]}),QA=e=>{const{setDark:t}=Ti();return n.jsx(Bx,{Icon:KA,onClick:t,...e})},XA=e=>n.jsx(zx,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),JA=e=>{const{setLight:t}=Ti();return n.jsx(Bx,{Icon:XA,onClick:t,...e})},eM=({sunrise:e={},nightfall:t={}})=>{const{isLight:r,setLight:o,setDark:s}=Ti();return r?n.jsx(JA,{onClick:s,...e}):n.jsx(QA,{onClick:o,...t})},Vx=T.createContext(),Ti=()=>T.useContext(Vx),el="dark",Ja="light",Ux="(prefers-color-scheme: dark)",tM=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Ux).matches},io=window==null?void 0:window.localStorage,nM=e=>e.split(" "),mf=(e,t="")=>`${e} ${t}`,rM=({storageKey:e,defaultVariant:t,children:r})=>{const o=e?io==null?void 0:io.getItem(e):null,[s,i=""]=o?nM(o):[tM(),null],[l,a]=T.useState(s===el),[d,c]=T.useState(i||t),u=_=>{a(_),e&&io&&io.setItem(e,mf(_?el:Ja,d))},h=_=>{c(_),e&&io&&io.setItem(e,mf(l?el:Ja,_))},g=_=>u(_.matches);T.useEffect(()=>{if(window&&window.matchMedia){const _=window.matchMedia(Ux);return _.addEventListener("change",g),()=>_==null?void 0:_.removeEventListener("change",g)}},[]);const C={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:a,toggleTheme:()=>u(!l),theme:l?el:Ja,variant:d,setVariant:h};return n.jsx(Vx.Provider,{value:C,children:r})},oM=e=>T.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),pf="sidebar",sM="no-sidebar",qx="1.1.1",Hx="2024-07-06",ff="2018",ed=Hx.match(/^(\d+)/)[1],iM=ed===ff?ed:`${ff} - ${ed}`,lM=()=>{const{variant:e,setVariant:t}=Ti();return n.jsx("header",{children:n.jsxs("nav",{children:[n.jsxs("div",{children:[n.jsx(xx,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===pf?sM:pf)}),n.jsx(Fi,{to:"/",className:"home mar-l-2",text:"Badger Form"}),n.jsxs("span",{className:"small mar-l-2",children:["v",qx]})]}),n.jsxs("div",{children:[n.jsx("a",{href:"https://github.com/abw/badger-form",children:n.jsx(oM,{className:"night-and-day--icon mar-r-2"})}),n.jsx(eM,{})]})]})})},aM=({item:e,url:t})=>{if(Xo(e))return e.section?n.jsxs("li",{className:"section",children:[n.jsx("h4",{children:e.section}),n.jsx(Yx,{url:t,items:e.items})]}):(e.text||(e.text=e.code),n.jsx("li",{children:n.jsx(Fi,{className:`item ${e.code?"font-mono":""}`,...e})}));cu(`Invalid menu item: ${e}`)},Yx=({url:e,items:t=[]})=>n.jsx("ul",{className:"menu",children:t.map((r,o)=>n.jsx(aM,{item:r,url:e,open:!0},o))}),dM=({title:e,code:t,url:r,items:o})=>{const s=Si(),i=s.pathname===r||s.pathname.slice(0,r.length+1)===`${r}/`;return n.jsxs("details",{className:"menu",open:i,children:[n.jsx("summary",{className:t?"font-mono":"",children:t||e}),n.jsx(Yx,{url:r,items:o})]})},ze=Vu.Consumer(dM),cM=()=>n.jsxs("div",{children:[n.jsx(ze,{...Fy}),n.jsx(ze,{...Mu}),n.jsx("h4",{className:"mar-b-none",children:"Components"}),n.jsx(ze,{...z2}),n.jsx(ze,{...B2}),n.jsx(ze,{...V2}),n.jsx(ze,{...U2}),n.jsx(ze,{...q2}),n.jsx(ze,{...H2}),n.jsx(ze,{...Y2}),n.jsx(ze,{...W2}),n.jsx(ze,{...Z2}),n.jsx(ze,{...G2}),n.jsx(ze,{...K2}),n.jsx("h4",{className:"mar-b-none",children:"Input Types"}),n.jsx(ze,{...Q2}),n.jsx(ze,{...X2}),n.jsx(ze,{...J2}),n.jsx(ze,{...ex}),n.jsx(ze,{...tx}),n.jsx("h4",{className:"mar-b-none",children:"Miscellaneous"}),n.jsx(ze,{...nx})]}),uM=()=>n.jsx("footer",{children:n.jsxs("div",{className:"flex space",children:[n.jsxs("div",{children:["© Copyright ",iM," Andy Wardley"]}),n.jsxs("div",{children:["Version ",qx," ",Hx]})]})});function mM(){const{pathname:e}=Kr();return T.useEffect(()=>pM(document.getElementById("content")),[e]),null}function pM(e){e==null||e.scrollTo({top:0,left:0,behavior:"smooth"})}const fM=({contentRef:e})=>{const{theme:t,variant:r}=Ti(),o=[t,r].join(" ");return n.jsxs("div",{id:"site",className:o,children:[n.jsx(lM,{}),n.jsxs("div",{id:"app",children:[n.jsx(mM,{}),n.jsx("aside",{children:n.jsx(cM,{})}),n.jsx("main",{id:"content",ref:e,children:n.jsx("div",{className:"Xdesktop Xblock-center",children:n.jsx(Fe,{})})})]}),n.jsx(uM,{})]})},hM=Vu.Consumer(fM),xM=/\/_layout$/,gM=/\/_(examples|snippets)\//,bM=vM(Object.assign({"../pages/cancel-submit/index.jsx":r7,"../pages/cancel-submit/properties/_layout.jsx":s7,"../pages/cancel-submit/properties/cancel/index.jsx":d7,"../pages/cancel-submit/properties/className/index.jsx":p7,"../pages/cancel-submit/properties/gap/index.jsx":g7,"../pages/cancel-submit/properties/size/index.jsx":y7,"../pages/cancel-submit/properties/space/index.jsx":C7,"../pages/cancel-submit/properties/submit/index.jsx":k7,"../pages/changed/index.jsx":A7,"../pages/checkbox/index.jsx":$7,"../pages/checkbox/properties/_layout.jsx":B7,"../pages/checkbox/properties/border/index.jsx":H7,"../pages/checkbox/properties/inline/index.jsx":G7,"../pages/checkbox/properties/inputClass/index.jsx":J7,"../pages/checkbox/properties/switch/index.jsx":r9,"../pages/checkbox/properties/text/index.jsx":l9,"../pages/debug/index.jsx":u9,"../pages/debug/properties/_layout.jsx":p9,"../pages/debug/properties/className/index.jsx":g9,"../pages/debug/properties/color/index.jsx":y9,"../pages/debug/properties/status/index.jsx":_9,"../pages/debug/properties/statusTitle/index.jsx":R9,"../pages/debug/properties/title/index.jsx":P9,"../pages/debug/properties/values/index.jsx":D9,"../pages/debug/properties/valuesTitle/index.jsx":V9,"../pages/errors/index.jsx":Y9,"../pages/errors/properties/_layout.jsx":Z9,"../pages/errors/properties/fieldErrors/index.jsx":X9,"../pages/errors/properties/prompt/index.jsx":iS,"../pages/errors/properties/title/index.jsx":hS,"../pages/field/components/Input/index.jsx":LS,"../pages/field/components/Label/index.jsx":AS,"../pages/field/components/Layout/index.jsx":nF,"../pages/field/components/Message/index.jsx":dF,"../pages/field/components/UseField/index.jsx":hF,"../pages/field/components/_layout.jsx":gF,"../pages/field/events/_layout.jsx":vF,"../pages/field/events/onBlur/index.jsx":FF,"../pages/field/events/onChange/index.jsx":EF,"../pages/field/events/onFocus/index.jsx":LF,"../pages/field/events/onInvalid/index.jsx":AF,"../pages/field/events/onLoad/index.jsx":$F,"../pages/field/events/onValid/index.jsx":UF,"../pages/field/functions/Reset/index.jsx":WF,"../pages/field/functions/SetFocus/index.jsx":QF,"../pages/field/functions/SetInvalid/index.jsx":tw,"../pages/field/functions/SetValid/index.jsx":sw,"../pages/field/functions/SetValue/index.jsx":uw,"../pages/field/functions/_layout.jsx":pw,"../pages/field/index.jsx":gw,"../pages/field/properties/_layout.jsx":vw,"../pages/field/properties/children/index.jsx":Fw,"../pages/field/properties/className/index.jsx":Ew,"../pages/field/properties/default/index.jsx":Lw,"../pages/field/properties/help/index.jsx":Aw,"../pages/field/properties/label/index.jsx":Vw,"../pages/field/properties/name/index.jsx":Gw,"../pages/field/properties/placeholder/index.jsx":Jw,"../pages/field/properties/prefix/index.jsx":rC,"../pages/field/properties/suffix/index.jsx":uC,"../pages/field/properties/type/index.jsx":bC,"../pages/field/validation/_layout.jsx":jC,"../pages/field/validation/minValidateLength/index.jsx":_C,"../pages/field/validation/optional/index.jsx":d_,"../pages/field/validation/optionalLabel/index.jsx":p_,"../pages/field/validation/prepareValue/index.jsx":b_,"../pages/field/validation/required/index.jsx":S_,"../pages/field/validation/requiredLabel/index.jsx":__,"../pages/field/validation/requiredMessage/index.jsx":R_,"../pages/field/validation/showOptional/index.jsx":P_,"../pages/field/validation/showRequired/index.jsx":z_,"../pages/field/validation/validate/index.jsx":Z_,"../pages/field/validation/validateOnBlur/index.jsx":J_,"../pages/field/validation/validateOnChange/index.jsx":oE,"../pages/field/validation/validateOnInvalid/index.jsx":iE,"../pages/fields/index.jsx":uE,"../pages/fields/properties/_layout.jsx":pE,"../pages/fields/properties/className/index.jsx":bE,"../pages/fields/properties/gap/index.jsx":FE,"../pages/fields/properties/grid/index.jsx":LE,"../pages/fields/properties/names/index.jsx":DE,"../pages/fields/properties/stack/index.jsx":UE,"../pages/fieldset/index.jsx":WE,"../pages/fieldset/properties/_layout.jsx":GE,"../pages/fieldset/properties/className/index.jsx":tT,"../pages/fieldset/properties/fields/index.jsx":dT,"../pages/fieldset/properties/legend/index.jsx":pT,"../pages/form/events/_layout.jsx":hT,"../pages/form/events/onError/index.jsx":vT,"../pages/form/events/onLoad/index.jsx":FT,"../pages/form/events/onReset/index.jsx":ET,"../pages/form/events/onSubmit/index.jsx":UT,"../pages/form/events/onSuccess/index.jsx":WT,"../pages/form/functions/_layout.jsx":GT,"../pages/form/functions/reset/index.jsx":nk,"../pages/form/functions/setFocus/index.jsx":dk,"../pages/form/functions/setValues/index.jsx":gk,"../pages/form/functions/unvalidate/index.jsx":yk,"../pages/form/index.jsx":Ck,"../pages/form/properties/_layout.jsx":Ek,"../pages/form/properties/children/index.jsx":Lk,"../pages/form/properties/debug/index.jsx":Ak,"../pages/form/properties/fields/index.jsx":Bk,"../pages/form/properties/hidden/index.jsx":Hk,"../pages/form/properties/resetOnSuccess/index.jsx":Gk,"../pages/form/properties/unvalidateOnSuccess/index.jsx":Jk,"../pages/form/properties/values/index.jsx":rR,"../pages/form/validation/_layout.jsx":sR,"../pages/form/validation/focusInvalidField/index.jsx":lR,"../pages/form/validation/minValidateLength/index.jsx":dR,"../pages/form/validation/optionalLabel/index.jsx":uR,"../pages/form/validation/requiredLabel/index.jsx":pR,"../pages/form/validation/requiredMessage/index.jsx":hR,"../pages/form/validation/showOptional/index.jsx":gR,"../pages/form/validation/showRequired/index.jsx":vR,"../pages/form/validation/validate/index.jsx":ER,"../pages/form/validation/validateOnBlur/index.jsx":kR,"../pages/form/validation/validateOnChange/index.jsx":LR,"../pages/form/validation/validateOnInvalid/index.jsx":OR,"../pages/getting-started/installation.jsx":$R,"../pages/getting-started/why-use-it.jsx":BR,"../pages/index.jsx":HR,"../pages/radio/index.jsx":GR,"../pages/radio/properties/_layout.jsx":QR,"../pages/radio/properties/border/index.jsx":tL,"../pages/radio/properties/inline/index.jsx":sL,"../pages/radio/properties/inputClass/index.jsx":dL,"../pages/radio/properties/optionClass/index.jsx":pL,"../pages/radio/properties/options/index.jsx":vL,"../pages/radio/properties/optionsClass/index.jsx":FL,"../pages/reset-submit/index.jsx":EL,"../pages/reset-submit/properties/_layout.jsx":kL,"../pages/reset-submit/properties/className/index.jsx":OL,"../pages/reset-submit/properties/gap/index.jsx":IL,"../pages/reset-submit/properties/reset/index.jsx":BL,"../pages/reset-submit/properties/size/index.jsx":HL,"../pages/reset-submit/properties/space/index.jsx":GL,"../pages/reset-submit/properties/submit/index.jsx":JL,"../pages/reset/index.jsx":rN,"../pages/reset/properties/_layout.jsx":sN,"../pages/reset/properties/className/index.jsx":dN,"../pages/reset/properties/onClick/index.jsx":pN,"../pages/reset/properties/text/index.jsx":gN,"../pages/select/index.jsx":yN,"../pages/select/properties/_layout.jsx":FN,"../pages/select/properties/inline/index.jsx":EN,"../pages/select/properties/options/index.jsx":ON,"../pages/select/properties/placeholder/index.jsx":IN,"../pages/status/index.jsx":BN,"../pages/status/properties/_layout.jsx":UN,"../pages/status/properties/any/index.jsx":WN,"../pages/status/properties/changed/index.jsx":QN,"../pages/status/properties/invalid/index.jsx":tO,"../pages/status/properties/submitted/index.jsx":sO,"../pages/status/properties/submitting/index.jsx":dO,"../pages/status/properties/valid/index.jsx":pO,"../pages/status/properties/validating/index.jsx":gO,"../pages/submit/index.jsx":yO,"../pages/submit/properties/_layout.jsx":FO,"../pages/submit/properties/className/index.jsx":EO,"../pages/submit/properties/onClick/index.jsx":LO,"../pages/submit/properties/text/index.jsx":AO,"../pages/text/index.jsx":$O,"../pages/text/properties/_layout.jsx":BO,"../pages/text/properties/inline/index.jsx":HO,"../pages/text/properties/placeholder/index.jsx":GO,"../pages/text/properties/size/index.jsx":JO,"../pages/text/properties/type/index.jsx":rP,"../pages/textarea/index.jsx":lP,"../pages/textarea/properties/_layout.jsx":dP,"../pages/textarea/properties/cols/index.jsx":pP,"../pages/textarea/properties/inline/index.jsx":gP,"../pages/textarea/properties/placeholder/index.jsx":yP,"../pages/textarea/properties/rows/index.jsx":CP,"../pages/tutorial/basic-form.jsx":kP,"../pages/tutorial/complete-registration.jsx":MP,"../pages/tutorial/debugging.jsx":BP,"../pages/tutorial/edit-form.jsx":WP,"../pages/tutorial/field-validation.jsx":XP,"../pages/tutorial/form-submission.jsx":nA,"../pages/tutorial/form-validation.jsx":cA,"../pages/tutorial/headless-fields.jsx":wA,"../pages/tutorial/submission-errors.jsx":PA,"../pages/tutorial/submission-response.jsx":DA,"../pages/utils/_layout.jsx":BA,"../pages/utils/addInputType/index.jsx":ZA}));function vM(e){const r=Object.entries(e).map(jM).filter(s=>!s.path.match(gM)).reduce((s,i)=>(s[i.path]=i,s),{}),o=Object.keys(r).filter(s=>s.match(xM)).sort((s,i)=>i.length-s.length);for(let s of o){const i=r[s];delete r[s];const l=s.replace(/_layout$/,""),a=l.length;i.path=l,i.children=[];const d=r[l];d&&(delete d.path,d.index=!0,i.children.push(d),delete r[l]);const c=Object.keys(r).filter(u=>u.slice(0,a)===l);for(let u of c){const h=r[u];delete r[u],u=u.slice(a),h.path=u.length?u:"/",i.children.push(h)}r[l]=i}return Object.values(r)}function jM([e,t]){const r=e.replace(/^[./]*pages/,"").replace(/\.[jt]sx?$/,""),o=r.replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),s=t.default,i=t.metadata||{};return i.source=e,i.stub=r,{path:o,Component:s,metadata:i}}const yM=iy([{path:"/",element:n.jsx(hM,{}),children:bM}],{basename:"/badger-form/"});td.createRoot(document.getElementById("root")).render(n.jsx(lt.StrictMode,{children:n.jsx(rM,{storageKey:"theme",children:n.jsx(Vu.Provider,{children:n.jsx(fy,{router:yM})})})}));
