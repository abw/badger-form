var Qx=Object.defineProperty;var Xx=(e,t,r)=>t in e?Qx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ht=(e,t,r)=>(Xx(e,typeof t!="symbol"?t+"":t,r),r);function uf(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(o,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mf={exports:{}},ql={},pf={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Jx=Symbol.for("react.portal"),e3=Symbol.for("react.fragment"),t3=Symbol.for("react.strict_mode"),n3=Symbol.for("react.profiler"),r3=Symbol.for("react.provider"),o3=Symbol.for("react.context"),s3=Symbol.for("react.forward_ref"),i3=Symbol.for("react.suspense"),l3=Symbol.for("react.memo"),a3=Symbol.for("react.lazy"),Gu=Symbol.iterator;function d3(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf=Object.assign,xf={};function Zo(e,t,r){this.props=e,this.context=t,this.refs=xf,this.updater=r||ff}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gf(){}gf.prototype=Zo.prototype;function cc(e,t,r){this.props=e,this.context=t,this.refs=xf,this.updater=r||ff}var uc=cc.prototype=new gf;uc.constructor=cc;hf(uc,Zo.prototype);uc.isPureReactComponent=!0;var Ku=Array.isArray,bf=Object.prototype.hasOwnProperty,mc={current:null},vf={key:!0,ref:!0,__self:!0,__source:!0};function jf(e,t,r){var o,s={},i=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)bf.call(t,o)&&!vf.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(a===1)s.children=r;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(o in a=e.defaultProps,a)s[o]===void 0&&(s[o]=a[o]);return{$$typeof:ai,type:e,key:i,ref:l,props:s,_owner:mc.current}}function c3(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function u3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Qu=/\/+/g;function va(e,t){return typeof e=="object"&&e!==null&&e.key!=null?u3(""+e.key):t.toString(36)}function el(e,t,r,o,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ai:case Jx:l=!0}}if(l)return l=e,s=s(l),e=o===""?"."+va(l,0):o,Ku(s)?(r="",e!=null&&(r=e.replace(Qu,"$&/")+"/"),el(s,t,r,"",function(c){return c})):s!=null&&(pc(s)&&(s=c3(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Qu,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=o===""?".":o+":",Ku(e))for(var a=0;a<e.length;a++){i=e[a];var d=o+va(i,a);l+=el(i,t,r,d,s)}else if(d=d3(e),typeof d=="function")for(e=d.call(e),a=0;!(i=e.next()).done;)i=i.value,d=o+va(i,a++),l+=el(i,t,r,d,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Oi(e,t,r){if(e==null)return e;var o=[],s=0;return el(e,o,"","",function(i){return t.call(r,i,s++)}),o}function m3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},tl={transition:null},p3={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:tl,ReactCurrentOwner:mc};le.Children={map:Oi,forEach:function(e,t,r){Oi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Zo;le.Fragment=e3;le.Profiler=n3;le.PureComponent=cc;le.StrictMode=t3;le.Suspense=i3;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p3;le.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=hf({},e.props),s=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=mc.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in t)bf.call(t,d)&&!vf.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&a!==void 0?a[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];o.children=a}return{$$typeof:ai,type:e.type,key:s,ref:i,props:o,_owner:l}};le.createContext=function(e){return e={$$typeof:o3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r3,_context:e},e.Consumer=e};le.createElement=jf;le.createFactory=function(e){var t=jf.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:s3,render:e}};le.isValidElement=pc;le.lazy=function(e){return{$$typeof:a3,_payload:{_status:-1,_result:e},_init:m3}};le.memo=function(e,t){return{$$typeof:l3,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=tl.transition;tl.transition={};try{e()}finally{tl.transition=t}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(e,t){return mt.current.useCallback(e,t)};le.useContext=function(e){return mt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};le.useEffect=function(e,t){return mt.current.useEffect(e,t)};le.useId=function(){return mt.current.useId()};le.useImperativeHandle=function(e,t,r){return mt.current.useImperativeHandle(e,t,r)};le.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return mt.current.useMemo(e,t)};le.useReducer=function(e,t,r){return mt.current.useReducer(e,t,r)};le.useRef=function(e){return mt.current.useRef(e)};le.useState=function(e){return mt.current.useState(e)};le.useSyncExternalStore=function(e,t,r){return mt.current.useSyncExternalStore(e,t,r)};le.useTransition=function(){return mt.current.useTransition()};le.version="18.2.0";pf.exports=le;var T=pf.exports;const gt=Br(T),f3=uf({__proto__:null,default:gt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h3=T,x3=Symbol.for("react.element"),g3=Symbol.for("react.fragment"),b3=Object.prototype.hasOwnProperty,v3=h3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j3={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,r){var o,s={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)b3.call(t,o)&&!j3.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:x3,type:e,key:i,ref:l,props:s,_owner:v3.current}}ql.Fragment=g3;ql.jsx=yf;ql.jsxs=yf;mf.exports=ql;var n=mf.exports,Ja={},Sf={exports:{}},Tt={},Ff={exports:{}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var V=P.length;P.push(B);e:for(;0<V;){var q=V-1>>>1,K=P[q];if(0<s(K,B))P[q]=B,P[V]=K,V=q;else break e}}function r(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var B=P[0],V=P.pop();if(V!==B){P[0]=V;e:for(var q=0,K=P.length,Qe=K>>>1;q<Qe;){var ce=2*(q+1)-1,Ee=P[ce],he=ce+1,De=P[he];if(0>s(Ee,V))he<K&&0>s(De,Ee)?(P[q]=De,P[he]=V,q=he):(P[q]=Ee,P[ce]=V,q=ce);else if(he<K&&0>s(De,V))P[q]=De,P[he]=V,q=he;else break e}}return B}function s(P,B){var V=P.sortIndex-B.sortIndex;return V!==0?V:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var d=[],c=[],u=1,f=null,g=3,C=!1,_=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var B=r(c);B!==null;){if(B.callback===null)o(c);else if(B.startTime<=P)o(c),B.sortIndex=B.expirationTime,t(d,B);else break;B=r(c)}}function v(P){if(E=!1,p(P),!_)if(r(d)!==null)_=!0,ve(j);else{var B=r(c);B!==null&&ie(v,B.startTime-P)}}function j(P,B){_=!1,E&&(E=!1,b(R),R=-1),C=!0;var V=g;try{for(p(B),f=r(d);f!==null&&(!(f.expirationTime>B)||P&&!I());){var q=f.callback;if(typeof q=="function"){f.callback=null,g=f.priorityLevel;var K=q(f.expirationTime<=B);B=e.unstable_now(),typeof K=="function"?f.callback=K:f===r(d)&&o(d),p(B)}else o(d);f=r(d)}if(f!==null)var Qe=!0;else{var ce=r(c);ce!==null&&ie(v,ce.startTime-B),Qe=!1}return Qe}finally{f=null,g=V,C=!1}}var h=!1,F=null,R=-1,k=5,M=-1;function I(){return!(e.unstable_now()-M<k)}function J(){if(F!==null){var P=e.unstable_now();M=P;var B=!0;try{B=F(!0,P)}finally{B?ee():(h=!1,F=null)}}else h=!1}var ee;if(typeof m=="function")ee=function(){m(J)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Fe=pe.port2;pe.port1.onmessage=J,ee=function(){Fe.postMessage(null)}}else ee=function(){N(J,0)};function ve(P){F=P,h||(h=!0,ee())}function ie(P,B){R=N(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){_||C||(_=!0,ve(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var V=g;g=B;try{return P()}finally{g=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=g;g=P;try{return B()}finally{g=V}},e.unstable_scheduleCallback=function(P,B,V){var q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?q+V:q):V=q,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=V+K,P={id:u++,callback:B,priorityLevel:P,startTime:V,expirationTime:K,sortIndex:-1},V>q?(P.sortIndex=V,t(c,P),r(d)===null&&P===r(c)&&(E?(b(R),R=-1):E=!0,ie(v,V-q))):(P.sortIndex=K,t(d,P),_||C||(_=!0,ve(j))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var B=g;return function(){var V=g;g=B;try{return P.apply(this,arguments)}finally{g=V}}}})(wf);Ff.exports=wf;var y3=Ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=T,Et=y3;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _f=new Set,Ms={};function Vr(e,t){Io(e,t),Io(e+"Capture",t)}function Io(e,t){for(Ms[e]=t,e=0;e<t.length;e++)_f.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,S3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Ju={};function F3(e){return ed.call(Ju,e)?!0:ed.call(Xu,e)?!1:S3.test(e)?Ju[e]=!0:(Xu[e]=!0,!1)}function w3(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function C3(e,t,r,o){if(t===null||typeof t>"u"||w3(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,r,o,s,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fc=/[\-:]([a-z])/g;function hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fc,hc);tt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fc,hc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fc,hc);tt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xc(e,t,r,o){var s=tt.hasOwnProperty(t)?tt[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(C3(t,r,s,o)&&(r=null),o||s===null?F3(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var kn=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pi=Symbol.for("react.element"),uo=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),Tf=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Lf=Symbol.for("react.offscreen"),em=Symbol.iterator;function is(e){return e===null||typeof e!="object"?null:(e=em&&e[em]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,ja;function js(e){if(ja===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ja=t&&t[1]||""}return`
`+ja+e}var ya=!1;function Sa(e,t){if(!e||ya)return"";ya=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=o.stack.split(`
`),l=s.length-1,a=i.length-1;1<=l&&0<=a&&s[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==i[a]){var d=`
`+s[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{ya=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?js(e):""}function _3(e){switch(e.tag){case 5:return js(e.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return e=Sa(e.type,!1),e;case 11:return e=Sa(e.type.render,!1),e;case 1:return e=Sa(e.type,!0),e;default:return""}}function od(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case uo:return"Portal";case td:return"Profiler";case gc:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tf:return(e.displayName||"Context")+".Consumer";case Ef:return(e._context.displayName||"Context")+".Provider";case bc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:od(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return od(e(t))}catch{}}return null}function E3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(t);case 8:return t===gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T3(e){var t=kf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){o=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ai(e){e._valueTracker||(e._valueTracker=T3(e))}function Rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=kf(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sd(e,t){var r=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function tm(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=er(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nf(e,t){t=t.checked,t!=null&&xc(e,"checked",t,!1)}function id(e,t){Nf(e,t);var r=er(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ld(e,t.type,r):t.hasOwnProperty("defaultValue")&&ld(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ld(e,t,r){(t!=="number"||hl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ys=Array.isArray;function To(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+er(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ad(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(ys(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:er(r)}}function Of(e,t){var r=er(t.value),o=er(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function om(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mi,Af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mi=Mi||document.createElement("div"),Mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Is(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L3=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(e){L3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_s[t]=_s[e]})});function Mf(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||_s.hasOwnProperty(e)&&_s[e]?(""+t).trim():t+"px"}function If(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Mf(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var k3=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(e,t){if(t){if(k3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function ud(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pd=null,Lo=null,ko=null;function sm(e){if(e=ui(e)){if(typeof pd!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Gl(t),pd(e.stateNode,e.type,t))}}function Df(e){Lo?ko?ko.push(e):ko=[e]:Lo=e}function $f(){if(Lo){var e=Lo,t=ko;if(ko=Lo=null,sm(e),t)for(e=0;e<t.length;e++)sm(t[e])}}function zf(e,t){return e(t)}function Bf(){}var Fa=!1;function Vf(e,t,r){if(Fa)return e(t,r);Fa=!0;try{return zf(e,t,r)}finally{Fa=!1,(Lo!==null||ko!==null)&&(Bf(),$f())}}function Ds(e,t){var r=e.stateNode;if(r===null)return null;var o=Gl(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var fd=!1;if(Fn)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){fd=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{fd=!1}function R3(e,t,r,o,s,i,l,a,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Es=!1,xl=null,gl=!1,hd=null,N3={onError:function(e){Es=!0,xl=e}};function O3(e,t,r,o,s,i,l,a,d){Es=!1,xl=null,R3.apply(N3,arguments)}function P3(e,t,r,o,s,i,l,a,d){if(O3.apply(this,arguments),Es){if(Es){var c=xl;Es=!1,xl=null}else throw Error(A(198));gl||(gl=!0,hd=c)}}function Ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function im(e){if(Ur(e)!==e)throw Error(A(188))}function A3(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var i=s.alternate;if(i===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===r)return im(s),e;if(i===o)return im(s),t;i=i.sibling}throw Error(A(188))}if(r.return!==o.return)r=s,o=i;else{for(var l=!1,a=s.child;a;){if(a===r){l=!0,r=s,o=i;break}if(a===o){l=!0,o=s,r=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===r){l=!0,r=i,o=s;break}if(a===o){l=!0,o=i,r=s;break}a=a.sibling}if(!l)throw Error(A(189))}}if(r.alternate!==o)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function qf(e){return e=A3(e),e!==null?Hf(e):null}function Hf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hf(e);if(t!==null)return t;e=e.sibling}return null}var Yf=Et.unstable_scheduleCallback,lm=Et.unstable_cancelCallback,M3=Et.unstable_shouldYield,I3=Et.unstable_requestPaint,Ae=Et.unstable_now,D3=Et.unstable_getCurrentPriorityLevel,yc=Et.unstable_ImmediatePriority,Wf=Et.unstable_UserBlockingPriority,bl=Et.unstable_NormalPriority,$3=Et.unstable_LowPriority,Zf=Et.unstable_IdlePriority,Hl=null,dn=null;function z3(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:U3,B3=Math.log,V3=Math.LN2;function U3(e){return e>>>=0,e===0?32:31-(B3(e)/V3|0)|0}var Ii=64,Di=4194304;function Ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vl(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var a=l&~s;a!==0?o=Ss(a):(i&=l,i!==0&&(o=Ss(i)))}else l=r&~s,l!==0?o=Ss(l):i!==0&&(o=Ss(i));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Xt(t),s=1<<r,o|=e[r],t&=~s;return o}function q3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H3(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Xt(i),a=1<<l,d=s[l];d===-1?(!(a&r)||a&o)&&(s[l]=q3(a,t)):d<=t&&(e.expiredLanes|=a),i&=~a}}function xd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gf(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function wa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function di(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=r}function Y3(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Xt(r),i=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~i}}function Sc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Xt(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var fe=0;function Kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qf,Fc,Xf,Jf,eh,gd=!1,$i=[],Hn=null,Yn=null,Wn=null,$s=new Map,zs=new Map,Bn=[],W3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":$s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(t.pointerId)}}function as(e,t,r,o,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ui(t),t!==null&&Fc(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Z3(e,t,r,o,s){switch(t){case"focusin":return Hn=as(Hn,e,t,r,o,s),!0;case"dragenter":return Yn=as(Yn,e,t,r,o,s),!0;case"mouseover":return Wn=as(Wn,e,t,r,o,s),!0;case"pointerover":var i=s.pointerId;return $s.set(i,as($s.get(i)||null,e,t,r,o,s)),!0;case"gotpointercapture":return i=s.pointerId,zs.set(i,as(zs.get(i)||null,e,t,r,o,s)),!0}return!1}function th(e){var t=Sr(e.target);if(t!==null){var r=Ur(t);if(r!==null){if(t=r.tag,t===13){if(t=Uf(r),t!==null){e.blockedOn=t,eh(e.priority,function(){Xf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=bd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);md=o,r.target.dispatchEvent(o),md=null}else return t=ui(r),t!==null&&Fc(t),e.blockedOn=r,!1;t.shift()}return!0}function dm(e,t,r){nl(e)&&r.delete(t)}function G3(){gd=!1,Hn!==null&&nl(Hn)&&(Hn=null),Yn!==null&&nl(Yn)&&(Yn=null),Wn!==null&&nl(Wn)&&(Wn=null),$s.forEach(dm),zs.forEach(dm)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,gd||(gd=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,G3)))}function Bs(e){function t(s){return ds(s,e)}if(0<$i.length){ds($i[0],e);for(var r=1;r<$i.length;r++){var o=$i[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Hn!==null&&ds(Hn,e),Yn!==null&&ds(Yn,e),Wn!==null&&ds(Wn,e),$s.forEach(t),zs.forEach(t),r=0;r<Bn.length;r++)o=Bn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Bn.length&&(r=Bn[0],r.blockedOn===null);)th(r),r.blockedOn===null&&Bn.shift()}var Ro=kn.ReactCurrentBatchConfig,jl=!0;function K3(e,t,r,o){var s=fe,i=Ro.transition;Ro.transition=null;try{fe=1,wc(e,t,r,o)}finally{fe=s,Ro.transition=i}}function Q3(e,t,r,o){var s=fe,i=Ro.transition;Ro.transition=null;try{fe=4,wc(e,t,r,o)}finally{fe=s,Ro.transition=i}}function wc(e,t,r,o){if(jl){var s=bd(e,t,r,o);if(s===null)Pa(e,t,o,yl,r),am(e,o);else if(Z3(s,e,t,r,o))o.stopPropagation();else if(am(e,o),t&4&&-1<W3.indexOf(e)){for(;s!==null;){var i=ui(s);if(i!==null&&Qf(i),i=bd(e,t,r,o),i===null&&Pa(e,t,o,yl,r),i===s)break;s=i}s!==null&&o.stopPropagation()}else Pa(e,t,o,null,r)}}var yl=null;function bd(e,t,r,o){if(yl=null,e=jc(o),e=Sr(e),e!==null)if(t=Ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Uf(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yl=e,null}function nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D3()){case yc:return 1;case Wf:return 4;case bl:case $3:return 16;case Zf:return 536870912;default:return 16}default:return 16}}var Un=null,Cc=null,rl=null;function rh(){if(rl)return rl;var e,t=Cc,r=t.length,o,s="value"in Un?Un.value:Un.textContent,i=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(o=1;o<=l&&t[r-o]===s[i-o];o++);return rl=s.slice(e,1<o?1-o:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function cm(){return!1}function Lt(e){function t(r,o,s,i,l){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zi:cm,this.isPropagationStopped=cm,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Lt(Go),ci=ke({},Go,{view:0,detail:0}),X3=Lt(ci),Ca,_a,cs,Yl=ke({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cs&&(cs&&e.type==="mousemove"?(Ca=e.screenX-cs.screenX,_a=e.screenY-cs.screenY):_a=Ca=0,cs=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),um=Lt(Yl),J3=ke({},Yl,{dataTransfer:0}),eg=Lt(J3),tg=ke({},ci,{relatedTarget:0}),Ea=Lt(tg),ng=ke({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=Lt(ng),og=ke({},Go,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=Lt(og),ig=ke({},Go,{data:0}),mm=Lt(ig),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dg[e])?!!t[e]:!1}function Ec(){return cg}var ug=ke({},ci,{key:function(e){if(e.key){var t=lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Lt(ug),pg=ke({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=Lt(pg),fg=ke({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),hg=Lt(fg),xg=ke({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Lt(xg),bg=ke({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=Lt(bg),jg=[9,13,27,32],Tc=Fn&&"CompositionEvent"in window,Ts=null;Fn&&"documentMode"in document&&(Ts=document.documentMode);var yg=Fn&&"TextEvent"in window&&!Ts,oh=Fn&&(!Tc||Ts&&8<Ts&&11>=Ts),fm=" ",hm=!1;function sh(e,t){switch(e){case"keyup":return jg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var po=!1;function Sg(e,t){switch(e){case"compositionend":return ih(t);case"keypress":return t.which!==32?null:(hm=!0,fm);case"textInput":return e=t.data,e===fm&&hm?null:e;default:return null}}function Fg(e,t){if(po)return e==="compositionend"||!Tc&&sh(e,t)?(e=rh(),rl=Cc=Un=null,po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oh&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function lh(e,t,r,o){Df(o),t=Sl(t,"onChange"),0<t.length&&(r=new _c("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Ls=null,Vs=null;function Cg(e){bh(e,0)}function Wl(e){var t=xo(e);if(Rf(t))return e}function _g(e,t){if(e==="change")return t}var ah=!1;if(Fn){var Ta;if(Fn){var La="oninput"in document;if(!La){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),La=typeof gm.oninput=="function"}Ta=La}else Ta=!1;ah=Ta&&(!document.documentMode||9<document.documentMode)}function bm(){Ls&&(Ls.detachEvent("onpropertychange",dh),Vs=Ls=null)}function dh(e){if(e.propertyName==="value"&&Wl(Vs)){var t=[];lh(t,Vs,e,jc(e)),Vf(Cg,t)}}function Eg(e,t,r){e==="focusin"?(bm(),Ls=t,Vs=r,Ls.attachEvent("onpropertychange",dh)):e==="focusout"&&bm()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Vs)}function Lg(e,t){if(e==="click")return Wl(t)}function kg(e,t){if(e==="input"||e==="change")return Wl(t)}function Rg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:Rg;function Us(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!ed.call(t,s)||!en(e[s],t[s]))return!1}return!0}function vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jm(e,t){var r=vm(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vm(r)}}function ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uh(){for(var e=window,t=hl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=hl(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ng(e){var t=uh(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ch(r.ownerDocument.documentElement,r)){if(o!==null&&Lc(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,i=Math.min(o.start,s);o=o.end===void 0?i:Math.min(o.end,s),!e.extend&&i>o&&(s=o,o=i,i=s),s=jm(r,i);var l=jm(r,o);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Og=Fn&&"documentMode"in document&&11>=document.documentMode,fo=null,vd=null,ks=null,jd=!1;function ym(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jd||fo==null||fo!==hl(o)||(o=fo,"selectionStart"in o&&Lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ks&&Us(ks,o)||(ks=o,o=Sl(vd,"onSelect"),0<o.length&&(t=new _c("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=fo)))}function Bi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ho={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},ka={},mh={};Fn&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function Zl(e){if(ka[e])return ka[e];if(!ho[e])return e;var t=ho[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in mh)return ka[e]=t[r];return e}var ph=Zl("animationend"),fh=Zl("animationiteration"),hh=Zl("animationstart"),xh=Zl("transitionend"),gh=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){gh.set(e,t),Vr(t,[e])}for(var Ra=0;Ra<Sm.length;Ra++){var Na=Sm[Ra],Pg=Na.toLowerCase(),Ag=Na[0].toUpperCase()+Na.slice(1);ir(Pg,"on"+Ag)}ir(ph,"onAnimationEnd");ir(fh,"onAnimationIteration");ir(hh,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(xh,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function Fm(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,P3(o,t,void 0,e),e.currentTarget=null}function bh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var i=void 0;if(t)for(var l=o.length-1;0<=l;l--){var a=o[l],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==i&&s.isPropagationStopped())break e;Fm(s,a,c),i=d}else for(l=0;l<o.length;l++){if(a=o[l],d=a.instance,c=a.currentTarget,a=a.listener,d!==i&&s.isPropagationStopped())break e;Fm(s,a,c),i=d}}}if(gl)throw e=hd,gl=!1,hd=null,e}function ye(e,t){var r=t[Cd];r===void 0&&(r=t[Cd]=new Set);var o=e+"__bubble";r.has(o)||(vh(t,e,2,!1),r.add(o))}function Oa(e,t,r){var o=0;t&&(o|=4),vh(r,e,o,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[Vi]){e[Vi]=!0,_f.forEach(function(r){r!=="selectionchange"&&(Mg.has(r)||Oa(r,!1,e),Oa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Oa("selectionchange",!1,t))}}function vh(e,t,r,o){switch(nh(t)){case 1:var s=K3;break;case 4:s=Q3;break;default:s=wc}r=s.bind(null,t,r,e),s=void 0,!fd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Pa(e,t,r,o,s){var i=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var a=o.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Sr(a),l===null)return;if(d=l.tag,d===5||d===6){o=i=l;continue e}a=a.parentNode}}o=o.return}Vf(function(){var c=i,u=jc(r),f=[];e:{var g=gh.get(e);if(g!==void 0){var C=_c,_=e;switch(e){case"keypress":if(ol(r)===0)break e;case"keydown":case"keyup":C=mg;break;case"focusin":_="focus",C=Ea;break;case"focusout":_="blur",C=Ea;break;case"beforeblur":case"afterblur":C=Ea;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=hg;break;case ph:case fh:case hh:C=rg;break;case xh:C=gg;break;case"scroll":C=X3;break;case"wheel":C=vg;break;case"copy":case"cut":case"paste":C=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=pm}var E=(t&4)!==0,N=!E&&e==="scroll",b=E?g!==null?g+"Capture":null:g;E=[];for(var m=c,p;m!==null;){p=m;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,b!==null&&(v=Ds(m,b),v!=null&&E.push(Hs(m,v,p)))),N)break;m=m.return}0<E.length&&(g=new C(g,_,null,r,u),f.push({event:g,listeners:E}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&r!==md&&(_=r.relatedTarget||r.fromElement)&&(Sr(_)||_[wn]))break e;if((C||g)&&(g=u.window===u?u:(g=u.ownerDocument)?g.defaultView||g.parentWindow:window,C?(_=r.relatedTarget||r.toElement,C=c,_=_?Sr(_):null,_!==null&&(N=Ur(_),_!==N||_.tag!==5&&_.tag!==6)&&(_=null)):(C=null,_=c),C!==_)){if(E=um,v="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=pm,v="onPointerLeave",b="onPointerEnter",m="pointer"),N=C==null?g:xo(C),p=_==null?g:xo(_),g=new E(v,m+"leave",C,r,u),g.target=N,g.relatedTarget=p,v=null,Sr(u)===c&&(E=new E(b,m+"enter",_,r,u),E.target=p,E.relatedTarget=N,v=E),N=v,C&&_)t:{for(E=C,b=_,m=0,p=E;p;p=no(p))m++;for(p=0,v=b;v;v=no(v))p++;for(;0<m-p;)E=no(E),m--;for(;0<p-m;)b=no(b),p--;for(;m--;){if(E===b||b!==null&&E===b.alternate)break t;E=no(E),b=no(b)}E=null}else E=null;C!==null&&wm(f,g,C,E,!1),_!==null&&N!==null&&wm(f,N,_,E,!0)}}e:{if(g=c?xo(c):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var j=_g;else if(xm(g))if(ah)j=kg;else{j=Tg;var h=Eg}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Lg);if(j&&(j=j(e,c))){lh(f,j,r,u);break e}h&&h(e,g,c),e==="focusout"&&(h=g._wrapperState)&&h.controlled&&g.type==="number"&&ld(g,"number",g.value)}switch(h=c?xo(c):window,e){case"focusin":(xm(h)||h.contentEditable==="true")&&(fo=h,vd=c,ks=null);break;case"focusout":ks=vd=fo=null;break;case"mousedown":jd=!0;break;case"contextmenu":case"mouseup":case"dragend":jd=!1,ym(f,r,u);break;case"selectionchange":if(Og)break;case"keydown":case"keyup":ym(f,r,u)}var F;if(Tc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else po?sh(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(oh&&r.locale!=="ko"&&(po||R!=="onCompositionStart"?R==="onCompositionEnd"&&po&&(F=rh()):(Un=u,Cc="value"in Un?Un.value:Un.textContent,po=!0)),h=Sl(c,R),0<h.length&&(R=new mm(R,e,null,r,u),f.push({event:R,listeners:h}),F?R.data=F:(F=ih(r),F!==null&&(R.data=F)))),(F=yg?Sg(e,r):Fg(e,r))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(u=new mm("onBeforeInput","beforeinput",null,r,u),f.push({event:u,listeners:c}),u.data=F))}bh(f,t)})}function Hs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Sl(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ds(e,r),i!=null&&o.unshift(Hs(e,i,s)),i=Ds(e,t),i!=null&&o.push(Hs(e,i,s))),e=e.return}return o}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wm(e,t,r,o,s){for(var i=t._reactName,l=[];r!==null&&r!==o;){var a=r,d=a.alternate,c=a.stateNode;if(d!==null&&d===o)break;a.tag===5&&c!==null&&(a=c,s?(d=Ds(r,i),d!=null&&l.unshift(Hs(r,d,a))):s||(d=Ds(r,i),d!=null&&l.push(Hs(r,d,a)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Ig=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function Cm(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Dg,"")}function Ui(e,t,r){if(t=Cm(t),Cm(e)!==t&&r)throw Error(A(425))}function Fl(){}var yd=null,Sd=null;function Fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,zg=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(e){return _m.resolve(null).then(e).catch(Bg)}:wd;function Bg(e){setTimeout(function(){throw e})}function Aa(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),Bs(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);Bs(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Em(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ko,Ys="__reactProps$"+Ko,wn="__reactContainer$"+Ko,Cd="__reactEvents$"+Ko,Vg="__reactListeners$"+Ko,Ug="__reactHandles$"+Ko;function Sr(e){var t=e[ln];if(t)return t;for(var r=e.parentNode;r;){if(t=r[wn]||r[ln]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Em(e);e!==null;){if(r=e[ln])return r;e=Em(e)}return t}e=r,r=e.parentNode}return null}function ui(e){return e=e[ln]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Gl(e){return e[Ys]||null}var _d=[],go=-1;function lr(e){return{current:e}}function Se(e){0>go||(e.current=_d[go],_d[go]=null,go--)}function be(e,t){go++,_d[go]=e.current,e.current=t}var tr={},at=lr(tr),vt=lr(!1),kr=tr;function Do(e,t){var r=e.type.contextTypes;if(!r)return tr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in r)s[i]=t[i];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function jt(e){return e=e.childContextTypes,e!=null}function wl(){Se(vt),Se(at)}function Tm(e,t,r){if(at.current!==tr)throw Error(A(168));be(at,t),be(vt,r)}function jh(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(A(108,E3(e)||"Unknown",s));return ke({},r,o)}function Cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,kr=at.current,be(at,e),be(vt,vt.current),!0}function Lm(e,t,r){var o=e.stateNode;if(!o)throw Error(A(169));r?(e=jh(e,t,kr),o.__reactInternalMemoizedMergedChildContext=e,Se(vt),Se(at),be(at,e)):Se(vt),be(vt,r)}var bn=null,Kl=!1,Ma=!1;function yh(e){bn===null?bn=[e]:bn.push(e)}function qg(e){Kl=!0,yh(e)}function ar(){if(!Ma&&bn!==null){Ma=!0;var e=0,t=fe;try{var r=bn;for(fe=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}bn=null,Kl=!1}catch(s){throw bn!==null&&(bn=bn.slice(e+1)),Yf(yc,ar),s}finally{fe=t,Ma=!1}}return null}var bo=[],vo=0,_l=null,El=0,Pt=[],At=0,Rr=null,vn=1,jn="";function jr(e,t){bo[vo++]=El,bo[vo++]=_l,_l=e,El=t}function Sh(e,t,r){Pt[At++]=vn,Pt[At++]=jn,Pt[At++]=Rr,Rr=e;var o=vn;e=jn;var s=32-Xt(o)-1;o&=~(1<<s),r+=1;var i=32-Xt(t)+s;if(30<i){var l=s-s%5;i=(o&(1<<l)-1).toString(32),o>>=l,s-=l,vn=1<<32-Xt(t)+s|r<<s|o,jn=i+e}else vn=1<<i|r<<s|o,jn=e}function kc(e){e.return!==null&&(jr(e,1),Sh(e,1,0))}function Rc(e){for(;e===_l;)_l=bo[--vo],bo[vo]=null,El=bo[--vo],bo[vo]=null;for(;e===Rr;)Rr=Pt[--At],Pt[At]=null,jn=Pt[--At],Pt[At]=null,vn=Pt[--At],Pt[At]=null}var _t=null,wt=null,Ce=!1,Qt=null;function Fh(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function km(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,wt=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Rr!==null?{id:vn,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,_t=e,wt=null,!0):!1;default:return!1}}function Ed(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Td(e){if(Ce){var t=wt;if(t){var r=t;if(!km(e,t)){if(Ed(e))throw Error(A(418));t=Zn(r.nextSibling);var o=_t;t&&km(e,t)?Fh(o,r):(e.flags=e.flags&-4097|2,Ce=!1,_t=e)}}else{if(Ed(e))throw Error(A(418));e.flags=e.flags&-4097|2,Ce=!1,_t=e}}}function Rm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function qi(e){if(e!==_t)return!1;if(!Ce)return Rm(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fd(e.type,e.memoizedProps)),t&&(t=wt)){if(Ed(e))throw wh(),Error(A(418));for(;t;)Fh(e,t),t=Zn(t.nextSibling)}if(Rm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){wt=Zn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=_t?Zn(e.stateNode.nextSibling):null;return!0}function wh(){for(var e=wt;e;)e=Zn(e.nextSibling)}function $o(){wt=_t=null,Ce=!1}function Nc(e){Qt===null?Qt=[e]:Qt.push(e)}var Hg=kn.ReactCurrentBatchConfig;function Zt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Tl=lr(null),Ll=null,jo=null,Oc=null;function Pc(){Oc=jo=Ll=null}function Ac(e){var t=Tl.current;Se(Tl),e._currentValue=t}function Ld(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function No(e,t){Ll=e,Oc=jo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:t,next:null},jo===null){if(Ll===null)throw Error(A(308));jo=e,Ll.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return t}var Fr=null;function Mc(e){Fr===null?Fr=[e]:Fr.push(e)}function Ch(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,Mc(t)):(r.next=s.next,s.next=r),t.interleaved=r,Cn(e,o)}function Cn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zn=!1;function Ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,de&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Cn(e,r)}return s=o.interleaved,s===null?(t.next=t,Mc(o)):(t.next=s.next,s.next=t),o.interleaved=t,Cn(e,r)}function sl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Sc(e,r)}}function Nm(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?s=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?s=i=t:i=i.next=t}else s=i=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function kl(e,t,r,o){var s=e.updateQueue;zn=!1;var i=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var d=a,c=d.next;d.next=null,l===null?i=c:l.next=c,l=d;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=d))}if(i!==null){var f=s.baseState;l=0,u=c=d=null,a=i;do{var g=a.lane,C=a.eventTime;if((o&g)===g){u!==null&&(u=u.next={eventTime:C,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,E=a;switch(g=t,C=r,E.tag){case 1:if(_=E.payload,typeof _=="function"){f=_.call(C,f,g);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,g=typeof _=="function"?_.call(C,f,g):_,g==null)break e;f=ke({},f,g);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else C={eventTime:C,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=C,d=f):u=u.next=C,l|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(u===null&&(d=f),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=u,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Or|=l,e.lanes=l,e.memoizedState=f}}function Om(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(A(191,s));s.call(o)}}}var Eh=new Cf.Component().refs;function kd(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:ke({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ql={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=ut(),s=Qn(e),i=yn(o,s);i.payload=t,r!=null&&(i.callback=r),t=Gn(e,i,s),t!==null&&(Jt(t,e,s,o),sl(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=ut(),s=Qn(e),i=yn(o,s);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Gn(e,i,s),t!==null&&(Jt(t,e,s,o),sl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ut(),o=Qn(e),s=yn(r,o);s.tag=2,t!=null&&(s.callback=t),t=Gn(e,s,o),t!==null&&(Jt(t,e,o,r),sl(t,e,o))}};function Pm(e,t,r,o,s,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,i,l):t.prototype&&t.prototype.isPureReactComponent?!Us(r,o)||!Us(s,i):!0}function Th(e,t,r){var o=!1,s=tr,i=t.contextType;return typeof i=="object"&&i!==null?i=Dt(i):(s=jt(t)?kr:at.current,o=t.contextTypes,i=(o=o!=null)?Do(e,s):tr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Am(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function Rd(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs=Eh,Ic(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Dt(i):(i=jt(t)?kr:at.current,s.context=Do(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(kd(e,t,i,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ql.enqueueReplaceState(s,s.state,null),kl(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var o=r.stateNode}if(!o)throw Error(A(147,e));var s=o,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=s.refs;a===Eh&&(a=s.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function Hi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mm(e){var t=e._init;return t(e._payload)}function Lh(e){function t(b,m){if(e){var p=b.deletions;p===null?(b.deletions=[m],b.flags|=16):p.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function o(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function s(b,m){return b=Xn(b,m),b.index=0,b.sibling=null,b}function i(b,m,p){return b.index=p,e?(p=b.alternate,p!==null?(p=p.index,p<m?(b.flags|=2,m):p):(b.flags|=2,m)):(b.flags|=1048576,m)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,m,p,v){return m===null||m.tag!==6?(m=Ua(p,b.mode,v),m.return=b,m):(m=s(m,p),m.return=b,m)}function d(b,m,p,v){var j=p.type;return j===mo?u(b,m,p.props.children,v,p.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&Mm(j)===m.type)?(v=s(m,p.props),v.ref=us(b,m,p),v.return=b,v):(v=ul(p.type,p.key,p.props,null,b.mode,v),v.ref=us(b,m,p),v.return=b,v)}function c(b,m,p,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=qa(p,b.mode,v),m.return=b,m):(m=s(m,p.children||[]),m.return=b,m)}function u(b,m,p,v,j){return m===null||m.tag!==7?(m=Lr(p,b.mode,v,j),m.return=b,m):(m=s(m,p),m.return=b,m)}function f(b,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ua(""+m,b.mode,p),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pi:return p=ul(m.type,m.key,m.props,null,b.mode,p),p.ref=us(b,null,m),p.return=b,p;case uo:return m=qa(m,b.mode,p),m.return=b,m;case $n:var v=m._init;return f(b,v(m._payload),p)}if(ys(m)||is(m))return m=Lr(m,b.mode,p,null),m.return=b,m;Hi(b,m)}return null}function g(b,m,p,v){var j=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(b,m,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pi:return p.key===j?d(b,m,p,v):null;case uo:return p.key===j?c(b,m,p,v):null;case $n:return j=p._init,g(b,m,j(p._payload),v)}if(ys(p)||is(p))return j!==null?null:u(b,m,p,v,null);Hi(b,p)}return null}function C(b,m,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return b=b.get(p)||null,a(m,b,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pi:return b=b.get(v.key===null?p:v.key)||null,d(m,b,v,j);case uo:return b=b.get(v.key===null?p:v.key)||null,c(m,b,v,j);case $n:var h=v._init;return C(b,m,p,h(v._payload),j)}if(ys(v)||is(v))return b=b.get(p)||null,u(m,b,v,j,null);Hi(m,v)}return null}function _(b,m,p,v){for(var j=null,h=null,F=m,R=m=0,k=null;F!==null&&R<p.length;R++){F.index>R?(k=F,F=null):k=F.sibling;var M=g(b,F,p[R],v);if(M===null){F===null&&(F=k);break}e&&F&&M.alternate===null&&t(b,F),m=i(M,m,R),h===null?j=M:h.sibling=M,h=M,F=k}if(R===p.length)return r(b,F),Ce&&jr(b,R),j;if(F===null){for(;R<p.length;R++)F=f(b,p[R],v),F!==null&&(m=i(F,m,R),h===null?j=F:h.sibling=F,h=F);return Ce&&jr(b,R),j}for(F=o(b,F);R<p.length;R++)k=C(F,b,R,p[R],v),k!==null&&(e&&k.alternate!==null&&F.delete(k.key===null?R:k.key),m=i(k,m,R),h===null?j=k:h.sibling=k,h=k);return e&&F.forEach(function(I){return t(b,I)}),Ce&&jr(b,R),j}function E(b,m,p,v){var j=is(p);if(typeof j!="function")throw Error(A(150));if(p=j.call(p),p==null)throw Error(A(151));for(var h=j=null,F=m,R=m=0,k=null,M=p.next();F!==null&&!M.done;R++,M=p.next()){F.index>R?(k=F,F=null):k=F.sibling;var I=g(b,F,M.value,v);if(I===null){F===null&&(F=k);break}e&&F&&I.alternate===null&&t(b,F),m=i(I,m,R),h===null?j=I:h.sibling=I,h=I,F=k}if(M.done)return r(b,F),Ce&&jr(b,R),j;if(F===null){for(;!M.done;R++,M=p.next())M=f(b,M.value,v),M!==null&&(m=i(M,m,R),h===null?j=M:h.sibling=M,h=M);return Ce&&jr(b,R),j}for(F=o(b,F);!M.done;R++,M=p.next())M=C(F,b,R,M.value,v),M!==null&&(e&&M.alternate!==null&&F.delete(M.key===null?R:M.key),m=i(M,m,R),h===null?j=M:h.sibling=M,h=M);return e&&F.forEach(function(J){return t(b,J)}),Ce&&jr(b,R),j}function N(b,m,p,v){if(typeof p=="object"&&p!==null&&p.type===mo&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Pi:e:{for(var j=p.key,h=m;h!==null;){if(h.key===j){if(j=p.type,j===mo){if(h.tag===7){r(b,h.sibling),m=s(h,p.props.children),m.return=b,b=m;break e}}else if(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===$n&&Mm(j)===h.type){r(b,h.sibling),m=s(h,p.props),m.ref=us(b,h,p),m.return=b,b=m;break e}r(b,h);break}else t(b,h);h=h.sibling}p.type===mo?(m=Lr(p.props.children,b.mode,v,p.key),m.return=b,b=m):(v=ul(p.type,p.key,p.props,null,b.mode,v),v.ref=us(b,m,p),v.return=b,b=v)}return l(b);case uo:e:{for(h=p.key;m!==null;){if(m.key===h)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){r(b,m.sibling),m=s(m,p.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=qa(p,b.mode,v),m.return=b,b=m}return l(b);case $n:return h=p._init,N(b,m,h(p._payload),v)}if(ys(p))return _(b,m,p,v);if(is(p))return E(b,m,p,v);Hi(b,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(r(b,m.sibling),m=s(m,p),m.return=b,b=m):(r(b,m),m=Ua(p,b.mode,v),m.return=b,b=m),l(b)):r(b,m)}return N}var zo=Lh(!0),kh=Lh(!1),mi={},cn=lr(mi),Ws=lr(mi),Zs=lr(mi);function wr(e){if(e===mi)throw Error(A(174));return e}function Dc(e,t){switch(be(Zs,t),be(Ws,e),be(cn,mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dd(t,e)}Se(cn),be(cn,t)}function Bo(){Se(cn),Se(Ws),Se(Zs)}function Rh(e){wr(Zs.current);var t=wr(cn.current),r=dd(t,e.type);t!==r&&(be(Ws,e),be(cn,r))}function $c(e){Ws.current===e&&(Se(cn),Se(Ws))}var Te=lr(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function zc(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var il=kn.ReactCurrentDispatcher,Da=kn.ReactCurrentBatchConfig,Nr=0,Le=null,$e=null,We=null,Nl=!1,Rs=!1,Gs=0,Yg=0;function ot(){throw Error(A(321))}function Bc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!en(e[r],t[r]))return!1;return!0}function Vc(e,t,r,o,s,i){if(Nr=i,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?Kg:Qg,e=r(o,s),Rs){i=0;do{if(Rs=!1,Gs=0,25<=i)throw Error(A(301));i+=1,We=$e=null,t.updateQueue=null,il.current=Xg,e=r(o,s)}while(Rs)}if(il.current=Ol,t=$e!==null&&$e.next!==null,Nr=0,We=$e=Le=null,Nl=!1,t)throw Error(A(300));return e}function Uc(){var e=Gs!==0;return Gs=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Le.memoizedState=We=e:We=We.next=e,We}function $t(){if($e===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=We===null?Le.memoizedState:We.next;if(t!==null)We=t,$e=e;else{if(e===null)throw Error(A(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},We===null?Le.memoizedState=We=e:We=We.next=e}return We}function Ks(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=$t(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var o=$e,s=o.baseQueue,i=r.pending;if(i!==null){if(s!==null){var l=s.next;s.next=i.next,i.next=l}o.baseQueue=s=i,r.pending=null}if(s!==null){i=s.next,o=o.baseState;var a=l=null,d=null,c=i;do{var u=c.lane;if((Nr&u)===u)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=f,l=o):d=d.next=f,Le.lanes|=u,Or|=u}c=c.next}while(c!==null&&c!==i);d===null?l=o:d.next=a,en(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do i=s.lane,Le.lanes|=i,Or|=i,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function za(e){var t=$t(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,i=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do i=e(i,l.action),l=l.next;while(l!==s);en(i,t.memoizedState)||(bt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,o]}function Nh(){}function Oh(e,t){var r=Le,o=$t(),s=t(),i=!en(o.memoizedState,s);if(i&&(o.memoizedState=s,bt=!0),o=o.queue,qc(Mh.bind(null,r,o,e),[e]),o.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(r.flags|=2048,Qs(9,Ah.bind(null,r,o,s,t),void 0,null),Ge===null)throw Error(A(349));Nr&30||Ph(r,t,s)}return s}function Ph(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ah(e,t,r,o){t.value=r,t.getSnapshot=o,Ih(t)&&Dh(e)}function Mh(e,t,r){return r(function(){Ih(t)&&Dh(e)})}function Ih(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!en(e,r)}catch{return!0}}function Dh(e){var t=Cn(e,1);t!==null&&Jt(t,e,1,-1)}function Im(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:e},t.queue=e,e=e.dispatch=Gg.bind(null,Le,e),[t.memoizedState,e]}function Qs(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function $h(){return $t().memoizedState}function ll(e,t,r,o){var s=rn();Le.flags|=e,s.memoizedState=Qs(1|t,r,void 0,o===void 0?null:o)}function Xl(e,t,r,o){var s=$t();o=o===void 0?null:o;var i=void 0;if($e!==null){var l=$e.memoizedState;if(i=l.destroy,o!==null&&Bc(o,l.deps)){s.memoizedState=Qs(t,r,i,o);return}}Le.flags|=e,s.memoizedState=Qs(1|t,r,i,o)}function Dm(e,t){return ll(8390656,8,e,t)}function qc(e,t){return Xl(2048,8,e,t)}function zh(e,t){return Xl(4,2,e,t)}function Bh(e,t){return Xl(4,4,e,t)}function Vh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uh(e,t,r){return r=r!=null?r.concat([e]):null,Xl(4,4,Vh.bind(null,t,e),r)}function Hc(){}function qh(e,t){var r=$t();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Bc(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Hh(e,t){var r=$t();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Bc(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Yh(e,t,r){return Nr&21?(en(r,t)||(r=Gf(),Le.lanes|=r,Or|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=r)}function Wg(e,t){var r=fe;fe=r!==0&&4>r?r:4,e(!0);var o=Da.transition;Da.transition={};try{e(!1),t()}finally{fe=r,Da.transition=o}}function Wh(){return $t().memoizedState}function Zg(e,t,r){var o=Qn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Zh(e))Gh(t,r);else if(r=Ch(e,t,r,o),r!==null){var s=ut();Jt(r,e,o,s),Kh(r,t,o)}}function Gg(e,t,r){var o=Qn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Zh(e))Gh(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,r);if(s.hasEagerState=!0,s.eagerState=a,en(a,l)){var d=t.interleaved;d===null?(s.next=s,Mc(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}r=Ch(e,t,s,o),r!==null&&(s=ut(),Jt(r,e,o,s),Kh(r,t,o))}}function Zh(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function Gh(e,t){Rs=Nl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Kh(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Sc(e,r)}}var Ol={readContext:Dt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Kg={readContext:Dt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:Dm,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ll(4194308,4,Vh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return ll(4,2,e,t)},useMemo:function(e,t){var r=rn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=rn();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Zg.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:Im,useDebugValue:Hc,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=Im(!1),t=e[0];return e=Wg.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Le,s=rn();if(Ce){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),Ge===null)throw Error(A(349));Nr&30||Ph(o,t,r)}s.memoizedState=r;var i={value:r,getSnapshot:t};return s.queue=i,Dm(Mh.bind(null,o,i,e),[e]),o.flags|=2048,Qs(9,Ah.bind(null,o,i,r,t),void 0,null),r},useId:function(){var e=rn(),t=Ge.identifierPrefix;if(Ce){var r=jn,o=vn;r=(o&~(1<<32-Xt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Gs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Yg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qg={readContext:Dt,useCallback:qh,useContext:Dt,useEffect:qc,useImperativeHandle:Uh,useInsertionEffect:zh,useLayoutEffect:Bh,useMemo:Hh,useReducer:$a,useRef:$h,useState:function(){return $a(Ks)},useDebugValue:Hc,useDeferredValue:function(e){var t=$t();return Yh(t,$e.memoizedState,e)},useTransition:function(){var e=$a(Ks)[0],t=$t().memoizedState;return[e,t]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:Wh,unstable_isNewReconciler:!1},Xg={readContext:Dt,useCallback:qh,useContext:Dt,useEffect:qc,useImperativeHandle:Uh,useInsertionEffect:zh,useLayoutEffect:Bh,useMemo:Hh,useReducer:za,useRef:$h,useState:function(){return za(Ks)},useDebugValue:Hc,useDeferredValue:function(e){var t=$t();return $e===null?t.memoizedState=e:Yh(t,$e.memoizedState,e)},useTransition:function(){var e=za(Ks)[0],t=$t().memoizedState;return[e,t]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:Wh,unstable_isNewReconciler:!1};function Vo(e,t){try{var r="",o=t;do r+=_3(o),o=o.return;while(o);var s=r}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Ba(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Nd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Jg=typeof WeakMap=="function"?WeakMap:Map;function Qh(e,t,r){r=yn(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Al||(Al=!0,Vd=o),Nd(e,t)},r}function Xh(e,t,r){r=yn(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Nd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Nd(e,t),typeof o!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function $m(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Jg;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=p0.bind(null,e,t,r),t.then(e,e))}function zm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bm(e,t,r,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=yn(-1,1),t.tag=2,Gn(r,t,1))),r.lanes|=1),e)}var e0=kn.ReactCurrentOwner,bt=!1;function ct(e,t,r,o){t.child=e===null?kh(t,null,r,o):zo(t,e.child,r,o)}function Vm(e,t,r,o,s){r=r.render;var i=t.ref;return No(t,s),o=Vc(e,t,r,o,i,s),r=Uc(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,_n(e,t,s)):(Ce&&r&&kc(t),t.flags|=1,ct(e,t,o,s),t.child)}function Um(e,t,r,o,s){if(e===null){var i=r.type;return typeof i=="function"&&!Jc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Jh(e,t,i,o,s)):(e=ul(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:Us,r(l,o)&&e.ref===t.ref)return _n(e,t,s)}return t.flags|=1,e=Xn(i,o),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,r,o,s){if(e!==null){var i=e.memoizedProps;if(Us(i,o)&&e.ref===t.ref)if(bt=!1,t.pendingProps=o=i,(e.lanes&s)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,_n(e,t,s)}return Od(e,t,r,o,s)}function e1(e,t,r){var o=t.pendingProps,s=o.children,i=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(So,St),St|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(So,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=i!==null?i.baseLanes:r,be(So,St),St|=o}else i!==null?(o=i.baseLanes|r,t.memoizedState=null):o=r,be(So,St),St|=o;return ct(e,t,s,r),t.child}function t1(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Od(e,t,r,o,s){var i=jt(r)?kr:at.current;return i=Do(t,i),No(t,s),r=Vc(e,t,r,o,i,s),o=Uc(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,_n(e,t,s)):(Ce&&o&&kc(t),t.flags|=1,ct(e,t,r,s),t.child)}function qm(e,t,r,o,s){if(jt(r)){var i=!0;Cl(t)}else i=!1;if(No(t,s),t.stateNode===null)al(e,t),Th(t,r,o),Rd(t,r,o,s),o=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var d=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=jt(r)?kr:at.current,c=Do(t,c));var u=r.getDerivedStateFromProps,f=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==o||d!==c)&&Am(t,l,o,c),zn=!1;var g=t.memoizedState;l.state=g,kl(t,o,l,s),d=t.memoizedState,a!==o||g!==d||vt.current||zn?(typeof u=="function"&&(kd(t,r,u,o),d=t.memoizedState),(a=zn||Pm(t,r,a,o,g,d,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=c,o=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,_h(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Zt(t.type,a),l.props=c,f=t.pendingProps,g=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=Dt(d):(d=jt(r)?kr:at.current,d=Do(t,d));var C=r.getDerivedStateFromProps;(u=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==d)&&Am(t,l,o,d),zn=!1,g=t.memoizedState,l.state=g,kl(t,o,l,s);var _=t.memoizedState;a!==f||g!==_||vt.current||zn?(typeof C=="function"&&(kd(t,r,C,o),_=t.memoizedState),(c=zn||Pm(t,r,c,o,g,_,d)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,_,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,_,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=_),l.props=o,l.state=_,l.context=d,o=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return Pd(e,t,r,o,i,s)}function Pd(e,t,r,o,s,i){t1(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return s&&Lm(t,r,!1),_n(e,t,i);o=t.stateNode,e0.current=t;var a=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=zo(t,e.child,null,i),t.child=zo(t,null,a,i)):ct(e,t,a,i),t.memoizedState=o.state,s&&Lm(t,r,!0),t.child}function n1(e){var t=e.stateNode;t.pendingContext?Tm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tm(e,t.context,!1),Dc(e,t.containerInfo)}function Hm(e,t,r,o,s){return $o(),Nc(s),t.flags|=256,ct(e,t,r,o),t.child}var Ad={dehydrated:null,treeContext:null,retryLane:0};function Md(e){return{baseLanes:e,cachePool:null,transitions:null}}function r1(e,t,r){var o=t.pendingProps,s=Te.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),be(Te,s&1),e===null)return Td(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,i?(o=t.mode,i=t.child,l={mode:"hidden",children:l},!(o&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ta(l,o,0,null),e=Lr(e,o,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Md(r),t.memoizedState=Ad,e):Yc(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return t0(e,t,l,o,a,s,r);if(i){i=o.fallback,l=t.mode,s=e.child,a=s.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=Xn(s,d),o.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Xn(a,i):(i=Lr(i,l,r,null),i.flags|=2),i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,l=e.child.memoizedState,l=l===null?Md(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=Ad,o}return i=e.child,e=i.sibling,o=Xn(i,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Yc(e,t){return t=ta({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,r,o){return o!==null&&Nc(o),zo(t,e.child,null,r),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t0(e,t,r,o,s,i,l){if(r)return t.flags&256?(t.flags&=-257,o=Ba(Error(A(422))),Yi(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=o.fallback,s=t.mode,o=ta({mode:"visible",children:o.children},s,0,null),i=Lr(i,s,l,null),i.flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,t.mode&1&&zo(t,e.child,null,l),t.child.memoizedState=Md(l),t.memoizedState=Ad,i);if(!(t.mode&1))return Yi(e,t,l,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var a=o.dgst;return o=a,i=Error(A(419)),o=Ba(i,o,void 0),Yi(e,t,l,o)}if(a=(l&e.childLanes)!==0,bt||a){if(o=Ge,o!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|l)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Cn(e,s),Jt(o,e,s,-1))}return Xc(),o=Ba(Error(A(421))),Yi(e,t,l,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=f0.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,wt=Zn(s.nextSibling),_t=t,Ce=!0,Qt=null,e!==null&&(Pt[At++]=vn,Pt[At++]=jn,Pt[At++]=Rr,vn=e.id,jn=e.overflow,Rr=t),t=Yc(t,o.children),t.flags|=4096,t)}function Ym(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ld(e.return,t,r)}function Va(e,t,r,o,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=o,i.tail=r,i.tailMode=s)}function o1(e,t,r){var o=t.pendingProps,s=o.revealOrder,i=o.tail;if(ct(e,t,o.children,r),o=Te.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ym(e,r,t);else if(e.tag===19)Ym(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(be(Te,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Rl(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Va(t,!1,s,r,i);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Rl(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Va(t,!0,r,null,i);break;case"together":Va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function al(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _n(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=Xn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Xn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function n0(e,t,r){switch(t.tag){case 3:n1(t),$o();break;case 5:Rh(t);break;case 1:jt(t.type)&&Cl(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;be(Tl,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):r&t.child.childLanes?r1(e,t,r):(be(Te,Te.current&1),e=_n(e,t,r),e!==null?e.sibling:null);be(Te,Te.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return o1(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Te,Te.current),o)break;return null;case 22:case 23:return t.lanes=0,e1(e,t,r)}return _n(e,t,r)}var s1,Id,i1,l1;s1=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Id=function(){};i1=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,wr(cn.current);var i=null;switch(r){case"input":s=sd(e,s),o=sd(e,o),i=[];break;case"select":s=ke({},s,{value:void 0}),o=ke({},o,{value:void 0}),i=[];break;case"textarea":s=ad(e,s),o=ad(e,o),i=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fl)}cd(r,o);var l;r=null;for(c in s)if(!o.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ms.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in o){var d=o[c];if(a=s!=null?s[c]:void 0,o.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&a[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(i||(i=[]),i.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(i=i||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&ye("scroll",e),i||a===d||(i=[])):(i=i||[]).push(c,d))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};l1=function(e,t,r,o){r!==o&&(t.flags|=4)};function ms(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function r0(e,t,r){var o=t.pendingProps;switch(Rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return jt(t.type)&&wl(),st(t),null;case 3:return o=t.stateNode,Bo(),Se(vt),Se(at),zc(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(Hd(Qt),Qt=null))),Id(e,t),st(t),null;case 5:$c(t);var s=wr(Zs.current);if(r=t.type,e!==null&&t.stateNode!=null)i1(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(A(166));return st(t),null}if(e=wr(cn.current),qi(t)){o=t.stateNode,r=t.type;var i=t.memoizedProps;switch(o[ln]=t,o[Ys]=i,e=(t.mode&1)!==0,r){case"dialog":ye("cancel",o),ye("close",o);break;case"iframe":case"object":case"embed":ye("load",o);break;case"video":case"audio":for(s=0;s<Fs.length;s++)ye(Fs[s],o);break;case"source":ye("error",o);break;case"img":case"image":case"link":ye("error",o),ye("load",o);break;case"details":ye("toggle",o);break;case"input":tm(o,i),ye("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},ye("invalid",o);break;case"textarea":rm(o,i),ye("invalid",o)}cd(r,i),s=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?o.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ui(o.textContent,a,e),s=["children",a]):typeof a=="number"&&o.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ui(o.textContent,a,e),s=["children",""+a]):Ms.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ye("scroll",o)}switch(r){case"input":Ai(o),nm(o,i,!0);break;case"textarea":Ai(o),om(o);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(o.onclick=Fl)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pf(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(r,{is:o.is}):(e=l.createElement(r),r==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,r),e[ln]=t,e[Ys]=o,s1(e,t,!1,!1),t.stateNode=e;e:{switch(l=ud(r,o),r){case"dialog":ye("cancel",e),ye("close",e),s=o;break;case"iframe":case"object":case"embed":ye("load",e),s=o;break;case"video":case"audio":for(s=0;s<Fs.length;s++)ye(Fs[s],e);s=o;break;case"source":ye("error",e),s=o;break;case"img":case"image":case"link":ye("error",e),ye("load",e),s=o;break;case"details":ye("toggle",e),s=o;break;case"input":tm(e,o),s=sd(e,o),ye("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=ke({},o,{value:void 0}),ye("invalid",e);break;case"textarea":rm(e,o),s=ad(e,o),ye("invalid",e);break;default:s=o}cd(r,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];i==="style"?If(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Af(e,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Is(e,d):typeof d=="number"&&Is(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ms.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ye("scroll",e):d!=null&&xc(e,i,d,l))}switch(r){case"input":Ai(e),nm(e,o,!1);break;case"textarea":Ai(e),om(e);break;case"option":o.value!=null&&e.setAttribute("value",""+er(o.value));break;case"select":e.multiple=!!o.multiple,i=o.value,i!=null?To(e,!!o.multiple,i,!1):o.defaultValue!=null&&To(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Fl)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)l1(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(A(166));if(r=wr(Zs.current),wr(cn.current),qi(t)){if(o=t.stateNode,r=t.memoizedProps,o[ln]=t,(i=o.nodeValue!==r)&&(e=_t,e!==null))switch(e.tag){case 3:Ui(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ui(o.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[ln]=t,t.stateNode=o}return st(t),null;case 13:if(Se(Te),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&wt!==null&&t.mode&1&&!(t.flags&128))wh(),$o(),t.flags|=98560,i=!1;else if(i=qi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[ln]=t}else $o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),i=!1}else Qt!==null&&(Hd(Qt),Qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?ze===0&&(ze=3):Xc())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Bo(),Id(e,t),e===null&&qs(t.stateNode.containerInfo),st(t),null;case 10:return Ac(t.type._context),st(t),null;case 17:return jt(t.type)&&wl(),st(t),null;case 19:if(Se(Te),i=t.memoizedState,i===null)return st(t),null;if(o=(t.flags&128)!==0,l=i.rendering,l===null)if(o)ms(i,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Rl(e),l!==null){for(t.flags|=128,ms(i,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)i=r,e=o,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Te,Te.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ae()>Uo&&(t.flags|=128,o=!0,ms(i,!1),t.lanes=4194304)}else{if(!o)if(e=Rl(l),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ms(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Ce)return st(t),null}else 2*Ae()-i.renderingStartTime>Uo&&r!==1073741824&&(t.flags|=128,o=!0,ms(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ae(),t.sibling=null,r=Te.current,be(Te,o?r&1|2:r&1),t):(st(t),null);case 22:case 23:return Qc(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?St&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function o0(e,t){switch(Rc(t),t.tag){case 1:return jt(t.type)&&wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bo(),Se(vt),Se(at),zc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $c(t),null;case 13:if(Se(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Te),null;case 4:return Bo(),null;case 10:return Ac(t.type._context),null;case 22:case 23:return Qc(),null;case 24:return null;default:return null}}var Wi=!1,it=!1,s0=typeof WeakSet=="function"?WeakSet:Set,U=null;function yo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ne(e,t,o)}else r.current=null}function Dd(e,t,r){try{r()}catch(o){Ne(e,t,o)}}var Wm=!1;function i0(e,t){if(yd=jl,e=uh(),Lc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,a=-1,d=-1,c=0,u=0,f=e,g=null;t:for(;;){for(var C;f!==r||s!==0&&f.nodeType!==3||(a=l+s),f!==i||o!==0&&f.nodeType!==3||(d=l+o),f.nodeType===3&&(l+=f.nodeValue.length),(C=f.firstChild)!==null;)g=f,f=C;for(;;){if(f===e)break t;if(g===r&&++c===s&&(a=l),g===i&&++u===o&&(d=l),(C=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=C}r=a===-1||d===-1?null:{start:a,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Sd={focusedElem:e,selectionRange:r},jl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,N=_.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?E:Zt(t.type,E),N);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(v){Ne(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return _=Wm,Wm=!1,_}function Ns(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Dd(t,r,i)}s=s.next}while(s!==o)}}function Jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function $d(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function a1(e){var t=e.alternate;t!==null&&(e.alternate=null,a1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[Ys],delete t[Cd],delete t[Vg],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function d1(e){return e.tag===5||e.tag===3||e.tag===4}function Zm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zd(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Fl));else if(o!==4&&(e=e.child,e!==null))for(zd(e,t,r),e=e.sibling;e!==null;)zd(e,t,r),e=e.sibling}function Bd(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Bd(e,t,r),e=e.sibling;e!==null;)Bd(e,t,r),e=e.sibling}var Je=null,Gt=!1;function In(e,t,r){for(r=r.child;r!==null;)c1(e,t,r),r=r.sibling}function c1(e,t,r){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Hl,r)}catch{}switch(r.tag){case 5:it||yo(r,t);case 6:var o=Je,s=Gt;Je=null,In(e,t,r),Je=o,Gt=s,Je!==null&&(Gt?(e=Je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Je.removeChild(r.stateNode));break;case 18:Je!==null&&(Gt?(e=Je,r=r.stateNode,e.nodeType===8?Aa(e.parentNode,r):e.nodeType===1&&Aa(e,r),Bs(e)):Aa(Je,r.stateNode));break;case 4:o=Je,s=Gt,Je=r.stateNode.containerInfo,Gt=!0,In(e,t,r),Je=o,Gt=s;break;case 0:case 11:case 14:case 15:if(!it&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var i=s,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Dd(r,t,l),s=s.next}while(s!==o)}In(e,t,r);break;case 1:if(!it&&(yo(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(a){Ne(r,t,a)}In(e,t,r);break;case 21:In(e,t,r);break;case 22:r.mode&1?(it=(o=it)||r.memoizedState!==null,In(e,t,r),it=o):In(e,t,r);break;default:In(e,t,r)}}function Gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new s0),t.forEach(function(o){var s=h0.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function Yt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,Gt=!1;break e;case 3:Je=a.stateNode.containerInfo,Gt=!0;break e;case 4:Je=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(Je===null)throw Error(A(160));c1(i,l,s),Je=null,Gt=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){Ne(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)u1(t,e),t=t.sibling}function u1(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),nn(e),o&4){try{Ns(3,e,e.return),Jl(3,e)}catch(E){Ne(e,e.return,E)}try{Ns(5,e,e.return)}catch(E){Ne(e,e.return,E)}}break;case 1:Yt(t,e),nn(e),o&512&&r!==null&&yo(r,r.return);break;case 5:if(Yt(t,e),nn(e),o&512&&r!==null&&yo(r,r.return),e.flags&32){var s=e.stateNode;try{Is(s,"")}catch(E){Ne(e,e.return,E)}}if(o&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Nf(s,i),ud(a,l);var c=ud(a,i);for(l=0;l<d.length;l+=2){var u=d[l],f=d[l+1];u==="style"?If(s,f):u==="dangerouslySetInnerHTML"?Af(s,f):u==="children"?Is(s,f):xc(s,u,f,c)}switch(a){case"input":id(s,i);break;case"textarea":Of(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?To(s,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?To(s,!!i.multiple,i.defaultValue,!0):To(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ys]=i}catch(E){Ne(e,e.return,E)}}break;case 6:if(Yt(t,e),nn(e),o&4){if(e.stateNode===null)throw Error(A(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(E){Ne(e,e.return,E)}}break;case 3:if(Yt(t,e),nn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Bs(t.containerInfo)}catch(E){Ne(e,e.return,E)}break;case 4:Yt(t,e),nn(e);break;case 13:Yt(t,e),nn(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Gc=Ae())),o&4&&Gm(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(it=(c=it)||u,Yt(t,e),it=c):Yt(t,e),nn(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(f=U=u;U!==null;){switch(g=U,C=g.child,g.tag){case 0:case 11:case 14:case 15:Ns(4,g,g.return);break;case 1:yo(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){o=g,r=g.return;try{t=o,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(E){Ne(o,r,E)}}break;case 5:yo(g,g.return);break;case 22:if(g.memoizedState!==null){Qm(f);continue}}C!==null?(C.return=g,U=C):Qm(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,d=f.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=Mf("display",l))}catch(E){Ne(e,e.return,E)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){Ne(e,e.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yt(t,e),nn(e),o&4&&Gm(e);break;case 21:break;default:Yt(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(d1(r)){var o=r;break e}r=r.return}throw Error(A(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Is(s,""),o.flags&=-33);var i=Zm(e);Bd(e,i,s);break;case 3:case 4:var l=o.stateNode.containerInfo,a=Zm(e);zd(e,a,l);break;default:throw Error(A(161))}}catch(d){Ne(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l0(e,t,r){U=e,m1(e)}function m1(e,t,r){for(var o=(e.mode&1)!==0;U!==null;){var s=U,i=s.child;if(s.tag===22&&o){var l=s.memoizedState!==null||Wi;if(!l){var a=s.alternate,d=a!==null&&a.memoizedState!==null||it;a=Wi;var c=it;if(Wi=l,(it=d)&&!c)for(U=s;U!==null;)l=U,d=l.child,l.tag===22&&l.memoizedState!==null?Xm(s):d!==null?(d.return=l,U=d):Xm(s);for(;i!==null;)U=i,m1(i),i=i.sibling;U=s,Wi=a,it=c}Km(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,U=i):Km(e)}}function Km(e){for(;U!==null;){var t=U;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||Jl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Zt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Om(t,i,o);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Om(t,l,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Bs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}it||t.flags&512&&$d(t)}catch(g){Ne(t,t.return,g)}}if(t===e){U=null;break}if(r=t.sibling,r!==null){r.return=t.return,U=r;break}U=t.return}}function Qm(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var r=t.sibling;if(r!==null){r.return=t.return,U=r;break}U=t.return}}function Xm(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Jl(4,t)}catch(d){Ne(t,r,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(d){Ne(t,s,d)}}var i=t.return;try{$d(t)}catch(d){Ne(t,i,d)}break;case 5:var l=t.return;try{$d(t)}catch(d){Ne(t,l,d)}}}catch(d){Ne(t,t.return,d)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var a0=Math.ceil,Pl=kn.ReactCurrentDispatcher,Wc=kn.ReactCurrentOwner,It=kn.ReactCurrentBatchConfig,de=0,Ge=null,Me=null,et=0,St=0,So=lr(0),ze=0,Xs=null,Or=0,ea=0,Zc=0,Os=null,ht=null,Gc=0,Uo=1/0,gn=null,Al=!1,Vd=null,Kn=null,Zi=!1,qn=null,Ml=0,Ps=0,Ud=null,dl=-1,cl=0;function ut(){return de&6?Ae():dl!==-1?dl:dl=Ae()}function Qn(e){return e.mode&1?de&2&&et!==0?et&-et:Hg.transition!==null?(cl===0&&(cl=Gf()),cl):(e=fe,e!==0||(e=window.event,e=e===void 0?16:nh(e.type)),e):1}function Jt(e,t,r,o){if(50<Ps)throw Ps=0,Ud=null,Error(A(185));di(e,r,o),(!(de&2)||e!==Ge)&&(e===Ge&&(!(de&2)&&(ea|=r),ze===4&&Vn(e,et)),yt(e,o),r===1&&de===0&&!(t.mode&1)&&(Uo=Ae()+500,Kl&&ar()))}function yt(e,t){var r=e.callbackNode;H3(e,t);var o=vl(e,e===Ge?et:0);if(o===0)r!==null&&lm(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&lm(r),t===1)e.tag===0?qg(Jm.bind(null,e)):yh(Jm.bind(null,e)),zg(function(){!(de&6)&&ar()}),r=null;else{switch(Kf(o)){case 1:r=yc;break;case 4:r=Wf;break;case 16:r=bl;break;case 536870912:r=Zf;break;default:r=bl}r=j1(r,p1.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function p1(e,t){if(dl=-1,cl=0,de&6)throw Error(A(327));var r=e.callbackNode;if(Oo()&&e.callbackNode!==r)return null;var o=vl(e,e===Ge?et:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Il(e,o);else{t=o;var s=de;de|=2;var i=h1();(Ge!==e||et!==t)&&(gn=null,Uo=Ae()+500,Tr(e,t));do try{u0();break}catch(a){f1(e,a)}while(!0);Pc(),Pl.current=i,de=s,Me!==null?t=0:(Ge=null,et=0,t=ze)}if(t!==0){if(t===2&&(s=xd(e),s!==0&&(o=s,t=qd(e,s))),t===1)throw r=Xs,Tr(e,0),Vn(e,o),yt(e,Ae()),r;if(t===6)Vn(e,o);else{if(s=e.current.alternate,!(o&30)&&!d0(s)&&(t=Il(e,o),t===2&&(i=xd(e),i!==0&&(o=i,t=qd(e,i))),t===1))throw r=Xs,Tr(e,0),Vn(e,o),yt(e,Ae()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(A(345));case 2:yr(e,ht,gn);break;case 3:if(Vn(e,o),(o&130023424)===o&&(t=Gc+500-Ae(),10<t)){if(vl(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){ut(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=wd(yr.bind(null,e,ht,gn),t);break}yr(e,ht,gn);break;case 4:if(Vn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var l=31-Xt(o);i=1<<l,l=t[l],l>s&&(s=l),o&=~i}if(o=s,o=Ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*a0(o/1960))-o,10<o){e.timeoutHandle=wd(yr.bind(null,e,ht,gn),o);break}yr(e,ht,gn);break;case 5:yr(e,ht,gn);break;default:throw Error(A(329))}}}return yt(e,Ae()),e.callbackNode===r?p1.bind(null,e):null}function qd(e,t){var r=Os;return e.current.memoizedState.isDehydrated&&(Tr(e,t).flags|=256),e=Il(e,t),e!==2&&(t=ht,ht=r,t!==null&&Hd(t)),e}function Hd(e){ht===null?ht=e:ht.push.apply(ht,e)}function d0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],i=s.getSnapshot;s=s.value;try{if(!en(i(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Zc,t&=~ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xt(t),o=1<<r;e[r]=-1,t&=~o}}function Jm(e){if(de&6)throw Error(A(327));Oo();var t=vl(e,0);if(!(t&1))return yt(e,Ae()),null;var r=Il(e,t);if(e.tag!==0&&r===2){var o=xd(e);o!==0&&(t=o,r=qd(e,o))}if(r===1)throw r=Xs,Tr(e,0),Vn(e,t),yt(e,Ae()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yr(e,ht,gn),yt(e,Ae()),null}function Kc(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(Uo=Ae()+500,Kl&&ar())}}function Pr(e){qn!==null&&qn.tag===0&&!(de&6)&&Oo();var t=de;de|=1;var r=It.transition,o=fe;try{if(It.transition=null,fe=1,e)return e()}finally{fe=o,It.transition=r,de=t,!(de&6)&&ar()}}function Qc(){St=So.current,Se(So)}function Tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,$g(r)),Me!==null)for(r=Me.return;r!==null;){var o=r;switch(Rc(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&wl();break;case 3:Bo(),Se(vt),Se(at),zc();break;case 5:$c(o);break;case 4:Bo();break;case 13:Se(Te);break;case 19:Se(Te);break;case 10:Ac(o.type._context);break;case 22:case 23:Qc()}r=r.return}if(Ge=e,Me=e=Xn(e.current,null),et=St=t,ze=0,Xs=null,Zc=ea=Or=0,ht=Os=null,Fr!==null){for(t=0;t<Fr.length;t++)if(r=Fr[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,i=r.pending;if(i!==null){var l=i.next;i.next=s,o.next=l}r.pending=o}Fr=null}return e}function f1(e,t){do{var r=Me;try{if(Pc(),il.current=Ol,Nl){for(var o=Le.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Nl=!1}if(Nr=0,We=$e=Le=null,Rs=!1,Gs=0,Wc.current=null,r===null||r.return===null){ze=1,Xs=t,Me=null;break}e:{var i=e,l=r.return,a=r,d=t;if(t=et,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var g=u.alternate;g?(u.updateQueue=g.updateQueue,u.memoizedState=g.memoizedState,u.lanes=g.lanes):(u.updateQueue=null,u.memoizedState=null)}var C=zm(l);if(C!==null){C.flags&=-257,Bm(C,l,a,i,t),C.mode&1&&$m(i,c,t),t=C,d=c;var _=t.updateQueue;if(_===null){var E=new Set;E.add(d),t.updateQueue=E}else _.add(d);break e}else{if(!(t&1)){$m(i,c,t),Xc();break e}d=Error(A(426))}}else if(Ce&&a.mode&1){var N=zm(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Bm(N,l,a,i,t),Nc(Vo(d,a));break e}}i=d=Vo(d,a),ze!==4&&(ze=2),Os===null?Os=[i]:Os.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=Qh(i,d,t);Nm(i,b);break e;case 1:a=d;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Kn===null||!Kn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Xh(i,a,t);Nm(i,v);break e}}i=i.return}while(i!==null)}g1(r)}catch(j){t=j,Me===r&&r!==null&&(Me=r=r.return);continue}break}while(!0)}function h1(){var e=Pl.current;return Pl.current=Ol,e===null?Ol:e}function Xc(){(ze===0||ze===3||ze===2)&&(ze=4),Ge===null||!(Or&268435455)&&!(ea&268435455)||Vn(Ge,et)}function Il(e,t){var r=de;de|=2;var o=h1();(Ge!==e||et!==t)&&(gn=null,Tr(e,t));do try{c0();break}catch(s){f1(e,s)}while(!0);if(Pc(),de=r,Pl.current=o,Me!==null)throw Error(A(261));return Ge=null,et=0,ze}function c0(){for(;Me!==null;)x1(Me)}function u0(){for(;Me!==null&&!M3();)x1(Me)}function x1(e){var t=v1(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?g1(e):Me=t,Wc.current=null}function g1(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=o0(r,t),r!==null){r.flags&=32767,Me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Me=null;return}}else if(r=r0(r,t,St),r!==null){Me=r;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);ze===0&&(ze=5)}function yr(e,t,r){var o=fe,s=It.transition;try{It.transition=null,fe=1,m0(e,t,r,o)}finally{It.transition=s,fe=o}return null}function m0(e,t,r,o){do Oo();while(qn!==null);if(de&6)throw Error(A(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Y3(e,i),e===Ge&&(Me=Ge=null,et=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Zi||(Zi=!0,j1(bl,function(){return Oo(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=It.transition,It.transition=null;var l=fe;fe=1;var a=de;de|=4,Wc.current=null,i0(e,r),u1(r,e),Ng(Sd),jl=!!yd,Sd=yd=null,e.current=r,l0(r),I3(),de=a,fe=l,It.transition=i}else e.current=r;if(Zi&&(Zi=!1,qn=e,Ml=s),i=e.pendingLanes,i===0&&(Kn=null),z3(r.stateNode),yt(e,Ae()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(Al)throw Al=!1,e=Vd,Vd=null,e;return Ml&1&&e.tag!==0&&Oo(),i=e.pendingLanes,i&1?e===Ud?Ps++:(Ps=0,Ud=e):Ps=0,ar(),null}function Oo(){if(qn!==null){var e=Kf(Ml),t=It.transition,r=fe;try{if(It.transition=null,fe=16>e?16:e,qn===null)var o=!1;else{if(e=qn,qn=null,Ml=0,de&6)throw Error(A(331));var s=de;for(de|=4,U=e.current;U!==null;){var i=U,l=i.child;if(U.flags&16){var a=i.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(U=c;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:Ns(8,u,i)}var f=u.child;if(f!==null)f.return=u,U=f;else for(;U!==null;){u=U;var g=u.sibling,C=u.return;if(a1(u),u===c){U=null;break}if(g!==null){g.return=C,U=g;break}U=C}}}var _=i.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var N=E.sibling;E.sibling=null,E=N}while(E!==null)}}U=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,U=l;else e:for(;U!==null;){if(i=U,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ns(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,U=b;break e}U=i.return}}var m=e.current;for(U=m;U!==null;){l=U;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,U=p;else e:for(l=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jl(9,a)}}catch(j){Ne(a,a.return,j)}if(a===l){U=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,U=v;break e}U=a.return}}if(de=s,ar(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Hl,e)}catch{}o=!0}return o}finally{fe=r,It.transition=t}}return!1}function ep(e,t,r){t=Vo(r,t),t=Qh(e,t,1),e=Gn(e,t,1),t=ut(),e!==null&&(di(e,1,t),yt(e,t))}function Ne(e,t,r){if(e.tag===3)ep(e,e,r);else for(;t!==null;){if(t.tag===3){ep(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Kn===null||!Kn.has(o))){e=Vo(r,e),e=Xh(t,e,1),t=Gn(t,e,1),e=ut(),t!==null&&(di(t,1,e),yt(t,e));break}}t=t.return}}function p0(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&r,Ge===e&&(et&r)===r&&(ze===4||ze===3&&(et&130023424)===et&&500>Ae()-Gc?Tr(e,0):Zc|=r),yt(e,t)}function b1(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var r=ut();e=Cn(e,t),e!==null&&(di(e,t,r),yt(e,r))}function f0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),b1(e,r)}function h0(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(A(314))}o!==null&&o.delete(t),b1(e,r)}var v1;v1=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)bt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return bt=!1,n0(e,t,r);bt=!!(e.flags&131072)}else bt=!1,Ce&&t.flags&1048576&&Sh(t,El,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;al(e,t),e=t.pendingProps;var s=Do(t,at.current);No(t,r),s=Vc(null,t,o,e,s,r);var i=Uc();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(o)?(i=!0,Cl(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ic(t),s.updater=Ql,t.stateNode=s,s._reactInternals=t,Rd(t,o,e,r),t=Pd(null,t,o,!0,i,r)):(t.tag=0,Ce&&i&&kc(t),ct(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(al(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=g0(o),e=Zt(o,e),s){case 0:t=Od(null,t,o,e,r);break e;case 1:t=qm(null,t,o,e,r);break e;case 11:t=Vm(null,t,o,e,r);break e;case 14:t=Um(null,t,o,Zt(o.type,e),r);break e}throw Error(A(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),Od(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),qm(e,t,o,s,r);case 3:e:{if(n1(t),e===null)throw Error(A(387));o=t.pendingProps,i=t.memoizedState,s=i.element,_h(e,t),kl(t,o,null,r);var l=t.memoizedState;if(o=l.element,i.isDehydrated)if(i={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Vo(Error(A(423)),t),t=Hm(e,t,o,r,s);break e}else if(o!==s){s=Vo(Error(A(424)),t),t=Hm(e,t,o,r,s);break e}else for(wt=Zn(t.stateNode.containerInfo.firstChild),_t=t,Ce=!0,Qt=null,r=kh(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($o(),o===s){t=_n(e,t,r);break e}ct(e,t,o,r)}t=t.child}return t;case 5:return Rh(t),e===null&&Td(t),o=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,Fd(o,s)?l=null:i!==null&&Fd(o,i)&&(t.flags|=32),t1(e,t),ct(e,t,l,r),t.child;case 6:return e===null&&Td(t),null;case 13:return r1(e,t,r);case 4:return Dc(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=zo(t,null,o,r):ct(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),Vm(e,t,o,s,r);case 7:return ct(e,t,t.pendingProps,r),t.child;case 8:return ct(e,t,t.pendingProps.children,r),t.child;case 12:return ct(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,i=t.memoizedProps,l=s.value,be(Tl,o._currentValue),o._currentValue=l,i!==null)if(en(i.value,l)){if(i.children===s.children&&!vt.current){t=_n(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var d=a.firstContext;d!==null;){if(d.context===o){if(i.tag===1){d=yn(-1,r&-r),d.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?d.next=d:(d.next=u.next,u.next=d),c.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),Ld(i.return,r,t),a.lanes|=r;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),Ld(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ct(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,No(t,r),s=Dt(s),o=o(s),t.flags|=1,ct(e,t,o,r),t.child;case 14:return o=t.type,s=Zt(o,t.pendingProps),s=Zt(o.type,s),Um(e,t,o,s,r);case 15:return Jh(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:Zt(o,s),al(e,t),t.tag=1,jt(o)?(e=!0,Cl(t)):e=!1,No(t,r),Th(t,o,s),Rd(t,o,s,r),Pd(null,t,o,!0,e,r);case 19:return o1(e,t,r);case 22:return e1(e,t,r)}throw Error(A(156,t.tag))};function j1(e,t){return Yf(e,t)}function x0(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,o){return new x0(e,t,r,o)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g0(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bc)return 11;if(e===vc)return 14}return 2}function Xn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ul(e,t,r,o,s,i){var l=2;if(o=e,typeof e=="function")Jc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mo:return Lr(r.children,s,i,t);case gc:l=8,s|=8;break;case td:return e=Mt(12,r,t,s|2),e.elementType=td,e.lanes=i,e;case nd:return e=Mt(13,r,t,s),e.elementType=nd,e.lanes=i,e;case rd:return e=Mt(19,r,t,s),e.elementType=rd,e.lanes=i,e;case Lf:return ta(r,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ef:l=10;break e;case Tf:l=9;break e;case bc:l=11;break e;case vc:l=14;break e;case $n:l=16,o=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Mt(l,r,t,s),t.elementType=e,t.type=o,t.lanes=i,t}function Lr(e,t,r,o){return e=Mt(7,e,o,t),e.lanes=r,e}function ta(e,t,r,o){return e=Mt(22,e,o,t),e.elementType=Lf,e.lanes=r,e.stateNode={isHidden:!1},e}function Ua(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function qa(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b0(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function eu(e,t,r,o,s,i,l,a,d){return e=new b0(e,t,r,a,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(i),e}function v0(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function y1(e){if(!e)return tr;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(jt(r))return jh(e,r,t)}return t}function S1(e,t,r,o,s,i,l,a,d){return e=eu(r,o,!0,e,s,i,l,a,d),e.context=y1(null),r=e.current,o=ut(),s=Qn(r),i=yn(o,s),i.callback=t??null,Gn(r,i,s),e.current.lanes=s,di(e,s,o),yt(e,o),e}function na(e,t,r,o){var s=t.current,i=ut(),l=Qn(s);return r=y1(r),t.context===null?t.context=r:t.pendingContext=r,t=yn(i,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Gn(s,t,l),e!==null&&(Jt(e,s,l,i),sl(e,s,l)),l}function Dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function tu(e,t){tp(e,t),(e=e.alternate)&&tp(e,t)}function j0(){return null}var F1=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}ra.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));na(e,t,null,null)};ra.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){na(null,e,null,null)}),t[wn]=null}};function ra(e){this._internalRoot=e}ra.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Bn.length&&t!==0&&t<Bn[r].priority;r++);Bn.splice(r,0,e),r===0&&th(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function np(){}function y0(e,t,r,o,s){if(s){if(typeof o=="function"){var i=o;o=function(){var c=Dl(l);i.call(c)}}var l=S1(t,o,e,0,null,!1,!1,"",np);return e._reactRootContainer=l,e[wn]=l.current,qs(e.nodeType===8?e.parentNode:e),Pr(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var a=o;o=function(){var c=Dl(d);a.call(c)}}var d=eu(e,0,!1,null,null,!1,!1,"",np);return e._reactRootContainer=d,e[wn]=d.current,qs(e.nodeType===8?e.parentNode:e),Pr(function(){na(t,d,r,o)}),d}function sa(e,t,r,o,s){var i=r._reactRootContainer;if(i){var l=i;if(typeof s=="function"){var a=s;s=function(){var d=Dl(l);a.call(d)}}na(t,l,e,s)}else l=y0(r,t,e,s,o);return Dl(l)}Qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ss(t.pendingLanes);r!==0&&(Sc(t,r|1),yt(t,Ae()),!(de&6)&&(Uo=Ae()+500,ar()))}break;case 13:Pr(function(){var o=Cn(e,1);if(o!==null){var s=ut();Jt(o,e,1,s)}}),tu(e,1)}};Fc=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var r=ut();Jt(t,e,134217728,r)}tu(e,134217728)}};Xf=function(e){if(e.tag===13){var t=Qn(e),r=Cn(e,t);if(r!==null){var o=ut();Jt(r,e,t,o)}tu(e,t)}};Jf=function(){return fe};eh=function(e,t){var r=fe;try{return fe=e,t()}finally{fe=r}};pd=function(e,t,r){switch(t){case"input":if(id(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=Gl(o);if(!s)throw Error(A(90));Rf(o),id(o,s)}}}break;case"textarea":Of(e,r);break;case"select":t=r.value,t!=null&&To(e,!!r.multiple,t,!1)}};zf=Kc;Bf=Pr;var S0={usingClientEntryPoint:!1,Events:[ui,xo,Gl,Df,$f,Kc]},ps={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F0={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qf(e),e===null?null:e.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Hl=Gi.inject(F0),dn=Gi}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;Tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(A(200));return v0(e,t,null,r)};Tt.createRoot=function(e,t){if(!ru(e))throw Error(A(299));var r=!1,o="",s=F1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=eu(e,1,!1,null,null,r,!1,o,s),e[wn]=t.current,qs(e.nodeType===8?e.parentNode:e),new nu(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=qf(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return Pr(e)};Tt.hydrate=function(e,t,r){if(!oa(t))throw Error(A(200));return sa(null,e,t,!0,r)};Tt.hydrateRoot=function(e,t,r){if(!ru(e))throw Error(A(405));var o=r!=null&&r.hydratedSources||null,s=!1,i="",l=F1;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=S1(t,null,e,1,r??null,s,!1,i,l),e[wn]=t.current,qs(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new ra(t)};Tt.render=function(e,t,r){if(!oa(t))throw Error(A(200));return sa(null,e,t,!1,r)};Tt.unmountComponentAtNode=function(e){if(!oa(e))throw Error(A(40));return e._reactRootContainer?(Pr(function(){sa(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Kc;Tt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!oa(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return sa(e,t,r,!1,o)};Tt.version="18.2.0-next-9e3b772b8-20220608";function w1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w1)}catch(e){console.error(e)}}w1(),Sf.exports=Tt;var ou=Sf.exports;const w0=Br(ou),C0=uf({__proto__:null,default:w0},[ou]);var rp=ou;Ja.createRoot=rp.createRoot,Ja.hydrateRoot=rp.hydrateRoot;var _0=Object.defineProperty,E0=(e,t,r)=>t in e?_0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ha=(e,t,r)=>(E0(e,typeof t!="symbol"?t+"":t,r),r);function T0(e={},t={},r={}){return Object.entries(t).reduce((o,[s,i])=>{const l=r[i];return l!==null&&typeof l<"u"&&(o[s]=l),o},{...e})}function L0(e,t=[]){return(typeof t=="string"?t.split(/,\s*|\s+/):t).reduce((r,o)=>{const s=e[o]||O0(`Cannot expose non-existent action method: ${o}`);return r[o]=s.bind(e),r},{})}function k0(e,t){const r=e.debug??t.debug,o=op(e.debugPrefix??t.debugPrefix,e),s=op(e.debugColor??t.debugColor,e);return r?o?(i,...l)=>console.log(`%c${o}%c${i}`,`color: ${s}`,"color:black",...l):console.log.bind(console):()=>{}}function R0(e){return Array.isArray(e)}function C1(e){return typeof e=="function"}function op(e,t){return C1(e)?e(t):e}function N0(e){return R0(e)?e:[e]}function O0(...e){throw new Error(e.join(""))}const su=(e,t={})=>{const r=gt.createContext(t);return{Context:r,Provider:o=>n.jsx(e,{...o,render:s=>n.jsx(r.Provider,{value:s,children:o.children})}),Consumer:o=>s=>n.jsx(r.Consumer,{children:i=>n.jsx(o,{...i,...s})}),Children:({children:o})=>N0(o).map((s,i)=>C1(s)?n.jsx(r.Consumer,{children:s},i):s),Use:()=>gt.useContext(r)}};let ml=class extends gt.Component{constructor(t){super(t);const r=this.constructor;this.debug=k0(t,r),this.state=T0(r.initialState,r.initialProps,t),this.actions=L0(this,r.actions)}getContext(){return{...this.props,...this.state,...this.actions}}getRenderProps(){return this.getContext()}render(){return this.props.render(this.getRenderProps())}};Ha(ml,"initialState",{}),Ha(ml,"initialProps",{}),Ha(ml,"actions",[]);function _1(e){return typeof e=="boolean"}function qr(e){return typeof e=="string"}function Js(e){return Array.isArray(e)}function ia(e){return typeof e=="function"}function P0(e){return e instanceof RegExp}function Hr(e){return typeof e=="object"&&!Js(e)&&!E1(e)}function A0(e){return e===void 0}function E1(e){return e===null}function Ft(e){return!(A0(e)||E1(e))}function M0(e){return!Ft(e)}function iu(...e){throw new Error(e.join(""))}const sp=(e,...t)=>ia(e)?e(...t):e;function Po(){}function I0(){return Intl.DateTimeFormat().resolvedOptions().locale}I0();function T1(e,t=/,\s*|\s+/){return M0(e)?[]:qr(e)?e.length?e.split(t):[]:Js(e)?e:[e]}function L1(e,t=!0,r={}){return Hr(e)?e:T1(e).reduce((o,s)=>(o[s]=ia(t)?t(s):t,o),r)}function D0(e){if(ia(e))return e;if(P0(e))return t=>e.test(t);if(Hr(e))return t=>!!e[t];if(Js(e)||qr(e)){const t=L1(e);return r=>!!t[r]}iu("Invalid selector() specification: "+e)}const $0=(e,t,r={})=>{let o={},s={delete:!1,...r};const i=D0(t);return Object.keys(e).map(l=>{if(i(l)){let a=e[l];s.delete&&delete e[l],s.key&&(l=s.key(l)),s.value&&(a=s.value(a)),o[l]=a}}),o};function mn(e){return new Promise(t=>setTimeout(t,e))}const z0="",B0="blur",pi="changed",V0="controls",U0="disabled",la="focus",q0="fulfilled",fi="invalid",k1="Optional",H0="radio",R1="Required",Y0="A value is required",ip="reset",hi="submitted",Qo="submitting",lu="text",W0="unvalidated",xi="valid",dr="validating",Z0=["id","name","type","value","checked","disabled","placeholder","autoComplete","onFocus","onBlur","size","rows","min","max","step","minLength","maxLength","pattern","list"],G0=["id","name","action","method","encType"];let N1=class extends ml{constructor(t){super(t),this.newStatus=this.constructor.newStatus(t),this.state={status:this.newStatus(ip)}}setStatus(t,r={},o=Po){this.mounted&&this.setState(s=>({...ia(r)?r(s):r,status:this.newStatus(t,s.status)}),o)}setResetState(t,r){this.setStatus(ip,t,r)}setChangedState(t,r){this.setStatus(pi,t,r)}setValidatingState(t,r){this.setStatus(dr,t,r)}setInvalidState(t,r){this.setStatus(fi,t,r)}setValidState(t,r){this.setStatus(xi,t,r)}setUnvalidatedState(t,r){this.setStatus(W0,t,r)}};function O1(e,t){return t.reduce((r,o)=>(Ft(e[o])&&(r[o]=e[o]),r),{})}const aa=e=>O1(e,Z0),K0=e=>O1(e,G0),P1=e=>e.filter(Ft).join(" "),Q0=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),pn=(...e)=>P1(e.flatMap(t=>Hr(t)?Q0(t):t)),da=e=>pn(e.inputClass,e.inline&&"inline"),Fo=(e,t,r=t)=>(e==null?void 0:e[t])||r,X0=(e,t={},...r)=>P1(Object.entries(e).reduce((o,[s,i])=>(i&&o.push(t[s]||s),o),[...r])),A1=e=>{const{status:t,className:r,classes:o,required:s,showRequired:i,showOptional:l}=e;return X0(t,o,Fo(o,"field"),r,i&&s?"required":null,l&&!s?"optional":null)},J0=(e,...t)=>{const{gap:r,space:o,stack:s,className:i}=e;return i||(o?pn("flex","space",...t):pn("flex",r?`gap-v-none gap-h-${r}`:null,s?`stack-${s}`:null,...t))},e4=(e,...t)=>{const{grid:r,gap:o,stack:s,className:i}=e;return i||(r?pn(`grid-${r}`,o?`gap-v-none gap-h-${o}`:null,s?`stack-${s}`:null,...t):pn(...t))},t4={boolean:!0,string:!0,number:!0},M1=e=>t4[typeof e]?{value:e,text:e}:e,$l=(...e)=>function(...t){for(let r of e.filter(Boolean))r(...t)};function lp(e){if(_1(e))return[1,!1];if(Ft(e)){const t=(e==null?void 0:e.toString().length)??0;return[t,t===0]}return[0,!0]}const n4=(e,t)=>qr(e)?{[t]:e}:e,r4={submittingClass:Qo,validatingClass:dr,resetOnSuccess:!0,focusInvalidField:!0,enctype:"application/x-www-form-urlencoded",method:"post",errorsTitle:e=>`Form Error${e>1?"s":""}`,errorsPrompt:e=>`Please correct ${e===1?"this problem":"these problems"} and re-submit:`},ap={validateOnChange:!1,validateOnBlur:!1,validateOnInvalid:!0,showRequired:!1,showOptional:!1,validMessage:null,minValidateLength:1,requiredMessage:Y0,requiredLabel:R1,optionalLabel:k1},o4=L1(["showRequired","requiredLabel","showOptional","optionalLabel","validateOnChange","validateOnBlur","validateOnInvalid","minValidateLength","validMessage","requiredMessage","classes","wide"]),qo={[xi]:!1,[fi]:!1},s4={...qo,[pi]:!0},i4={...qo,[dr]:!0},l4={[xi]:!1,[fi]:!0,[dr]:!1},a4={[xi]:!0,[fi]:!1,[dr]:!1},d4={[la]:!1},c4={[la]:!0},u4={[Qo]:!0,[hi]:!1},m4={[Qo]:!1,[hi]:!0},I1={changed:s4,validating:i4,invalid:l4,valid:a4},D1=e=>(t,r={})=>({...r,...e[t]||{[t]:!0}}),p4=()=>{const e={...qo,[pi]:!1,[dr]:!1,[hi]:!1,[Qo]:!1};return D1({...I1,reset:e,submitting:u4,submitted:m4,unvalidated:qo})},f4=(e={})=>{const t={...qo,[pi]:!1,[dr]:!1,[la]:!1,[U0]:e.disabled||!1};return D1({...I1,reset:t,focus:c4,blur:d4,unvalidated:qo})},h4=({status:e,any:t=!1,...r})=>{const o=[pi,dr,xi,fi,Qo,hi].filter(s=>Ft(r[s])).map(s=>e[s]);return t?o.some(Boolean):o.every(Boolean)};class io extends N1{constructor(t){super(t),this.fields={};const{hidden:r={}}=t,o={...r},s={...r4,...this.props};this.state={...s,...this.state,initialValues:o,values:{...o},errors:[],error:null},this.props.onLoad&&this.props.onLoad(this)}componentDidMount(){this.debug("componentDidMount()"),this.mounted=!0}componentWillUnmount(){this.debug("componentWillUnmount()"),this.mounted=!1}fieldSpec(t,r){var i,l;const o=((i=this.props.fields)==null?void 0:i[t])??{},s=r.value??((l=this.props.values)==null?void 0:l[t]);return{name:t,...$0(this.props,o4),...o,...r,value:s}}attachField(t,r){this.debug(`attaching ${t} field`),this.fields[t]=r,this.setState(o=>({values:{...o.values,[t]:r.state.value}}))}detachField(t){this.debug(`detaching ${t} field`),delete this.fields[t]}setSubmittingState(t,r){this.setStatus(Qo,t,r)}setSubmittedState(t,r){this.setStatus(hi,t,r)}setFocus(t,r){var o;r==null||r.preventDefault(),(o=this.fields[t])==null||o.setFocus()}reset(t){this.mounted&&(this.debug("reset()"),t==null||t.preventDefault(),this.resetFields(),this.setResetState({errors:[],error:null},this.props.onReset))}resetFields(){this.debug("resetFields()"),Object.values(this.fields).forEach(t=>t.reset())}setValue(t,r){this.debug(`setValue(${t}, ${r})`),this.setChangedState(o=>({...o,values:{...o.values,[t]:r}}))}setValues(t,r){this.debug("setValues():",t),r==null||r.preventDefault(),Object.entries(t).forEach(([o,s])=>{var i;return(i=this.fields[o])==null?void 0:i.setValue(s)})}setHidden(t){const r={...this.state.hidden,...t};this.setState({hidden:r})}submit(t){this.debug("submit()"),t==null||t.preventDefault(),this.validate().then(r=>this.handleSubmit(r)).catch(r=>this.debug("Form is NOT valid:",r))}validate(){return this.debug("validate()"),this.setValidatingState(),new Promise(this.validator()).then(t=>(this.debug("validate passed: ",t),this.setValidState({submit:t,error:null,errors:[]},this.props.onValid),t)).catch(t=>{throw this.debug("validate failed: ",t),this.handleError({error:t.error,errors:t.errors}),t})}validator(){return(t,r)=>Promise.allSettled(Object.values(this.fields).map(o=>o.validate())).then(o=>o.reduce((s,{status:i,value:l,reason:a})=>(i===q0?Object.assign(s.values,l.data||{[l.name]:l.value}):s.errors.push(a),s),{values:{...this.state.values},errors:[]})).then(o=>{var s;return this.debug("field validation complete: ",o),(s=o.errors)!=null&&s.length?(this.debug("errors detected, rejecting: ",o),r(o)):this.props.validate?(this.debug("validating form: ",o),this.props.validate(o.values,this.getContext()).then(i=>t({...o,values:i})).catch(i=>r(i))):t(o)})}unvalidate(){Object.values(this.fields).map(t=>t.unvalidate()),this.setUnvalidatedState()}handleSubmit(t){if(this.debug("Form is valid, handling submission:",t),!this.props.onSubmit){window.alert("You haven't defined an onSubmit handler: "+JSON.stringify(t.values));return}this.setSubmittingState({},async()=>{this.debug("calling onSubmit handler: ",t);try{const r=await this.props.onSubmit(t.values,this.getContext());if(this.debug("onSubmit response:",r),this.setSubmittedState(),r!=null&&r.ok||(r==null?void 0:r.status)===200)this.debug(`Success response ok:${r==null?void 0:r.ok} status:${r==null?void 0:r.status}`),this.handleSuccess(r);else if((r==null?void 0:r.status)>=400&&r.status<=500)this.debug(`Error response status:${r==null?void 0:r.status}`),this.handleError(r.data);else throw new Error(`Unknown response: ${r==null?void 0:r.status}`)}catch(r){this.debug("onSubmit error:",r),this.setSubmittedState(),this.handleError(qr(r)?{error:r}:r instanceof Error?{error:r.message}:r)}})}handleSuccess(t){this.debug("handleSuccess()",t);const r=this.props.onSuccess||Po;this.setValidState({},$l(()=>r(t,this),this.props.resetOnSuccess&&(()=>this.reset()),this.props.unvalidateOnSuccess&&(()=>this.unvalidate())))}handleError(t={}){this.debug("handleError()",t),t.errors&&(t.errors=this.sanitiseErrors(t.errors));const r=Js(t==null?void 0:t.errors)&&this.fieldErrors(t.errors),o=this.props.onError||this.props.onFailure||Po;this.setInvalidState(t,$l(()=>o(t),r?()=>r.setFocus():null))}fieldErrors(t){this.debug("fieldErrors: ",t);const r=t.reduce((o,s)=>{const i=s.name??s.param??s.field,{message:l}=s,a=i&&this.fields[i];return a&&(s.label||(s.label=a.props.label),a.setInvalidState({message:l}),o.push(a)),o},[]);return this.state.focusInvalidField&&r.length?r[0]:null}sanitiseErrors(t){if(Hr(t)&&(t=Object.entries(t).map(([r,o])=>({name:r,...n4(o,"message")}))),!Js(t))throw new Error("Invalid errors type (not an array or object)");return t.forEach(r=>r.message??(r.message=r.error)),t}getContext(){return{...this.props,...this.state,...this.actions}}}Ht(io,"newStatus",p4),Ht(io,"debug",!1),Ht(io,"debugPrefix","Form > "),Ht(io,"debugColor","rebeccapurple"),Ht(io,"actions",["fieldSpec","attachField","detachField","setFocus","reset","validate","unvalidate","submit","setValue","setValues","setHidden","setStatus","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setSubmittingState","setSubmittedState","handleError"]);const x4=su(io),{Context:CA,Provider:g4,Consumer:b4,Children:v4,Use:fn}=x4,j4=({children:e})=>{const t=fn(),r=K0(t),{submit:o,className:s}=t;return n.jsx("form",{className:s,...r,onSubmit:o,noValidate:!0,children:n.jsx(v4,{children:e})})},S=({children:e,Layout:t=j4,...r})=>n.jsx(g4,{...r,children:n.jsx(t,{children:e})}),y4=e=>{const{id:t,value:r}=e;return{...e,id:t||T.useId(),value:r??e.default??z0}};class lo extends N1{constructor(t){super(t),this.name=t.name;const{value:r}=t,o=r;this.form=this.props.form,this.state={...this.state,initialValue:o,value:r,error:null},this.debug("initial state:",this.state),this.inputRef=T.createRef(),this.resetRef=T.createRef(),this.on={load:this.contextFunction(this.props.onLoad),focus:this.contextFunction(this.props.onFocus),blur:this.contextFunction(this.props.onBlur),change:this.contextFunction(this.props.onChange),valid:this.contextFunction(this.props.onValid),invalid:this.contextFunction(this.props.onInvalid),unvalidate:this.contextFunction(this.props.onUnvalidate),reset:this.contextFunction(this.props.onReset)},this.on.load()}contextFunction(t){return t?()=>t(this.getContext()):Po}componentDidMount(){this.debug("componentDidMount"),this.mounted=!0,this.form.attachField(this.props.name,this)}componentWillUnmount(){this.debug("componentWillUnmount"),this.mounted=!1,this.form.detachField(this.props.name)}setFocusState(t,r){return this.setStatus(la,t,r)}setBlurState(t,r){return this.setStatus(B0,t,r)}onFocus(){this.setFocusState({},this.on.focus)}onBlur(){this.setBlurState({},this.props.validateOnBlur?()=>this.validation(this.on.blur):this.on.blur)}setFocus(t){var r,o;t==null||t.preventDefault(),(o=(r=this.inputRef)==null?void 0:r.current)==null||o.focus()}onChange(t){this.debug(`onChange(${t})`);const r=this.props.prepareValue?this.props.prepareValue(t):t,{invalid:o}=this.state.status,{validateOnChange:s,validateOnInvalid:i=!0,minValidateLength:l=1}=this.props,[a]=lp(r);let d=s||i&&o;a<l&&!o&&(d=!1),this.setChangedState({value:r},()=>{this.form.setValue(this.props.name,r),d?this.validation(this.on.change):this.on.change()})}setValue(t,r){r==null||r.preventDefault(),this.onChange(t)}reset(t){t==null||t.preventDefault();const r=this.props.prepareValue?this.props.prepareValue(this.state.initialValue):this.state.initialValue;return this.debug(`reset initialValue:${this.state.initialValue} => ${r}`),this.form.setValue(this.props.name,r),this.setResetState({value:r,message:this.props.message},()=>{var o,s;return(s=(o=this.resetRef)==null?void 0:o.current)==null?void 0:s.reset()}),r}validation(t){this.validate(t).then(Po).catch(Po)}validate(t){this.debug("validate()");const r={name:this.name,label:this.props.label};return new Promise(this.validator()).then(o=>(this.debug("validate() passed:",o),this.setValidState(o,$l(this.on.valid,t)),{...r,...o})).catch(o=>{throw this.debug("validate() failed:",o),this.setInvalidState(o,$l(this.on.invalid,t)),{...r,...o}})}validator(){return async(t,r)=>{const{value:o=""}=this.state,{validate:s,required:i,requiredMessage:l,validMessage:a}={...ap,...this.props},[,d]=lp(o);if(this.setValidatingState(),s)return await this.validateValidator(t,r,s,a);if(d)return await this.validateEmpty(t,r,i,a,l);this.debug("no validation defined"),t({value:o,message:a})}}async validateValidator(t,r,o,s){this.debug("calling validate function");const i=this.getContext();try{this.debug(`calling validate function with value [${i.value}]`);const l=await o(i.value,i,t,r);this.debug("validate function passed:",l),t(Hr(l)?{message:s,...l}:{value:l,message:s})}catch(l){this.debug("validate threw an error:",l);const a=qr(l)?l:l.message;this.debug("rejecting with message:",a),r({message:a})}}validateEmpty(t,r,o,s,i){o?(this.debug("failing validation - required field is empty"),r({message:i})):(this.debug("passing validation - value is empty but not required"),t({message:s}))}setValid(t,r){r==null||r.preventDefault(),this.setValidState({message:t},this.on.valid)}setInvalid(t,r){r==null||r.preventDefault(),this.setInvalidState({message:t},this.on.invalid)}unvalidate(){this.setUnvalidatedState({message:this.props.message})}getContext(){const t={...ap,...this.props,...this.state,...this.actions,name:this.name,inputRef:this.inputRef,resetRef:this.resetRef,setRef:this.resetRef};return delete t.form,delete t.children,delete t.render,t}}Ht(lo,"newStatus",f4),Ht(lo,"debug",!1),Ht(lo,"debugPrefix",t=>`Field [${t.name}] > `),Ht(lo,"debugColor","teal"),Ht(lo,"actions",["onFocus","onBlur","onChange","setFocus","setValue","setValid","setInvalid","reset","setResetState","setChangedState","setValidatingState","setValidState","setInvalidState","setFocusState","setBlurState"]);const S4=su(lo),{Context:_A,Provider:F4,Consumer:EA,Children:$1,Use:rt}=S4,Yr=({field:e=rt()})=>{const{label:t,id:r,required:o}=e,s=e.showRequired&&o,i=e.showOptional&&!o,l=t||s||i,a=e.labelClass,d={};return s&&e.requiredLabel!==R1&&(d["--required-text"]=`"${e.requiredLabel}"`),i&&e.optionalLabel!==k1&&(d["--optional-text"]=`"${e.optionalLabel}"`),l&&n.jsx("label",{htmlFor:r,className:a,style:d,children:t||n.jsx("span",{children:" "})})},w4=e=>t=>e.onChange(t.target.value),C4=e=>t=>e.onChange(t.target.checked),nr={default:w4,checkbox:C4},_4=({field:e=rt()})=>{const{id:t,text:r,inline:o,border:s,labelClass:i,type:l="checkbox",handler:a=nr[l]||nr.default}=e,d=aa(e),c=pn("checkbox",i,{inline:o,border:s});return n.jsxs("label",{htmlFor:t,className:c,children:[n.jsx("input",{type:l,ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:a(e),className:da(e),...d,checked:e.value}),r]})},z1=({field:e=rt()})=>n.jsx("input",{type:"hidden",name:e.name,value:e.value}),E4=({field:e=rt()})=>{const{inline:t,border:r,options:o=[],inputClass:s,optionClass:i,optionsClass:l="options",type:a="radio",handler:d=nr[a]||nr.default}=e,c=aa(e);return n.jsx("div",{className:pn(l),children:o.map((u,f)=>{u=M1(u);const g=`${e.id}-${u.value}`,C=e.value==u.value,E=(e.value?C:f==0)?e.inputRef:null,N=pn("radio",i,u.className,{inline:t,border:r});return n.jsxs("label",{className:N,disabled:u.disabled,htmlFor:g,children:[n.jsx("input",{type:a,className:s,ref:E,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onChange:d(e),...c,id:g,checked:C,value:u.value}),u.text]},u.value)})})},T4=({field:e=rt()})=>{const{options:t=[],placeholder:r,type:o="select",optionClass:s="option",handler:i=nr[o]||nr.default}=e,l=aa(e);return n.jsxs("select",{ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,className:da(e),onChange:i(e),...l,value:e.value,required:e.required||!!r,children:[!!r&&n.jsx("option",{value:"",hidden:!0,disabled:!0,children:r}),t.map(a=>(a=M1(a),n.jsx("option",{className:s,value:a.value,disabled:a.disabled,children:a.text},a.value)))]})},ei=({field:e=rt()})=>{const{type:t=lu,handler:r=nr[t]||nr.default}=e,o=aa(e);return n.jsx("input",{type:t,ref:e.inputRef,className:da(e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:r(e),...o})},L4=({field:e=rt()})=>{const{rows:t=5,cols:r=20}=e;return n.jsx("textarea",{id:e.id,ref:e.inputRef,className:da(e),name:e.name,value:e.value,disabled:e.disabled,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,placeholder:e.placeholder,autoComplete:e.autocomplete,onChange:o=>e.onChange(o.target.value),onFocus:e.onFocus,onBlur:e.onBlur,rows:t,cols:r})},ti={default:ei,checkbox:_4,hidden:z1,radio:E4,select:T4,text:ei,textarea:L4},k4=(e,t)=>ti[e]=t,R4=({field:e=rt()})=>n.jsx("div",{className:pn("prefix",e.prefixClass),children:e.prefix}),N4=({field:e=rt()})=>n.jsx("div",{className:pn("suffix",e.suffixClass),children:e.suffix}),O4=({field:e=rt()})=>{const{classes:t,prefix:r,suffix:o,inputsClass:s,inline:i,type:l=lu,Prefix:a=R4,Suffix:d=N4}=e,c=ti[l]||ti.default;let u=[Fo(t,"inputs")];Ft(r)&&u.push(Fo(t,"prefixed")),Ft(o)&&u.push(Fo(t,"suffixed")),i&&u.push(Fo(t,"inline")),Ft(s)&&u.push(s);const f=u.join(" ");return n.jsxs("div",{className:f,children:[Ft(r)&&n.jsx(a,{field:e}),n.jsx(c,{field:e}),Ft(o)&&n.jsx(d,{field:e})]})},ca=({field:e=rt()})=>{const{prefix:t,suffix:r,type:o=lu}=e,s=ti[o]||ti.default;return o==H0?n.jsx(s,{field:e}):Ft(t)||Ft(r)?n.jsx(O4,{}):n.jsx(s,{field:e})},gi=({field:e=rt()})=>{const{help:t,message:r,classes:o}=e,s=r??t,i=Fo(o,"help");return s?n.jsx("div",{className:i,children:s}):null},cr=({field:e=rt(),children:t})=>{const{type:r,Label:o=Yr,Message:s=gi,Input:i=ca}=e,l=A1(e);return r==="hidden"?n.jsx(z1,{field:e}):n.jsx("div",{className:l,children:t||n.jsxs(n.Fragment,{children:[n.jsx(o,{field:e}),n.jsx(i,{field:e}),n.jsx(s,{field:e})]})})},x=({name:e,children:t,...r})=>{const o=fn(),s=y4(o.fieldSpec(e,r)),i=s.Layout||cr;return n.jsx(F4,{form:o,...s,children:t?n.jsx($1,{children:t}):n.jsx(i,{})})},nt=({names:e,className:t,grid:r=!1,gap:o=4,stack:s,...i})=>{const l=T1(e);return _1(r)&&r&&(r=l.length),n.jsx("div",{className:e4({grid:r,gap:o,stack:s,props:i},t),children:l.map(a=>n.jsx(x,{name:a,...i},a))})},Ar=({className:e="",legend:t,children:r,fields:o,...s})=>n.jsxs("fieldset",{className:e,children:[!!t&&n.jsx("legend",{children:t}),!!o&&n.jsx(nt,{names:o,...s}),r]}),P4=({children:e,...t})=>h4(t)&&e,Rn=b4(P4),A4=e=>n.jsx(Rn,{changed:!0,...e}),kt=({values:e=!0,status:t=!1,all:r=!1,className:o="border bdr-2 shadow-2 mar-v-4 pad-4 form-debug",title:s="Form Debugging",valuesTitle:i="Values",statusTitle:l="Status",...a})=>{const d=fn();return n.jsxs("div",{className:o,children:[s&&n.jsx("h3",{className:"mar-v-none",children:s}),n.jsxs("div",{className:"grid-1 gap-4",children:[e&&n.jsxs("div",{children:[i&&n.jsx("h4",{className:"mar-v-none",children:i}),n.jsx(dp,{rows:Object.entries(d.values),...a})]}),(t||r)&&d.status&&n.jsxs("div",{children:[l&&n.jsx("h4",{children:l}),n.jsx(dp,{title:"Status",rows:Object.entries(d.status),...a})]})]})]})},dp=({rows:e,children:t,color:r="brand",tableClass:o=`${r} shaded celled wide small pad-none mar-b-0`,...s})=>n.jsx("table",{className:o,children:n.jsx("tbody",{children:t||e.map(([i,l])=>n.jsx(M4,{name:i,value:l,...s},i))})}),M4=({name:e,value:t,keyClass:r="text-right split-3",valueClass:o="font-mono bgc-95 bgd-5"})=>n.jsxs("tr",{valign:"top",children:[n.jsx("th",{className:r,children:e}),n.jsx("td",{className:o,children:n.jsx(I4,{value:t})})]}),I4=({value:e})=>Hr(e)?JSON.stringify(e):Ft(e)?e.toString():"",D4=({error:e})=>{const t=e.label||e.name;return n.jsxs(n.Fragment,{children:[!!t&&n.jsxs("b",{children:[t,": "]}),e.message]})},$4=({error:e})=>qr(e)?e:n.jsx(D4,{error:e}),Ve=({form:e=fn(),title:t=e.errorsTitle,prompt:r=e.errorsPrompt,fieldErrors:o=!1,className:s="error alert border"})=>{const{error:i,errors:l,Error:a=$4}=e,d=!!i,c=(o?l.length:0)+(d?1:0);return c!==0?n.jsxs("div",{className:s,children:[!!t&&n.jsx("div",{className:"headline",children:sp(t,c)}),n.jsxs("div",{children:[d&&n.jsx("h4",{children:n.jsx(a,{error:i})}),o&&l.length!==0&&n.jsxs(n.Fragment,{children:[!!r&&n.jsx("p",{className:"wide",children:sp(r,l.length)}),n.jsx("ul",{children:l.map((f,g)=>n.jsx("li",{children:n.jsx(a,{error:f})},g))})]})]})]}):null},z4=({children:e})=>n.jsx($1,{children:e}),B1=({onClick:e,children:t,text:r="Button",type:o="button",...s})=>n.jsx("button",{type:o,onClick:e,...s,children:t||r}),ur=({type:e="reset",text:t="Reset",className:r="reset",Button:o=B1,...s})=>{const{reset:i}=fn();return n.jsx(o,{type:e,text:t,className:r,onClick:i,...s})},W=({type:e="submit",text:t="Submit",className:r="submit",Button:o=B1,...s})=>{const{submit:i,status:l}=fn();return n.jsx(o,{type:e,text:t,className:r,onClick:i,disabled:l.submitting,...s})},me=({className:e,gap:t=4,space:r=!1,reset:o={},submit:s={}})=>n.jsxs("div",{className:J0({className:e,gap:t,space:r},V0),children:[n.jsx(ur,{...o}),n.jsx(W,{...s})]}),B4=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two",value:"Hello World!"}),n.jsx(A4,{children:n.jsx(me,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),V4=`import { Form, Field, Changed, ResetSubmit } from '@/lib/index.js'

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

export default ChangedExample`;function U4(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function q4(e,t){if(e==null)return{};var r=U4(e,t),o,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)o=i[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Yd(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function H4(e){if(Array.isArray(e))return Yd(e)}function Y4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function W4(e,t){if(e){if(typeof e=="string")return Yd(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Yd(e,t)}}function Z4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G4(e){return H4(e)||Y4(e)||W4(e)||Z4()}function ni(e){"@babel/helpers - typeof";return ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(e)}function K4(e,t){if(ni(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(ni(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Q4(e){var t=K4(e,"string");return ni(t)=="symbol"?t:String(t)}function V1(e,t,r){return t=Q4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wd(){return Wd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Wd.apply(this,arguments)}function cp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function wo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?cp(Object(r),!0).forEach(function(o){V1(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):cp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function X4(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Ya={};function J4(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Ya[t]||(Ya[t]=X4(e)),Ya[t]}function e5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=e.filter(function(i){return i!=="token"}),s=J4(o);return s.reduce(function(i,l){return wo(wo({},i),r[l])},t)}function up(e){return e.join(" ")}function t5(e,t){var r=0;return function(o){return r+=1,o.map(function(s,i){return U1({node:s,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(r,"-").concat(i)})})}}function U1(e){var t=e.node,r=e.stylesheet,o=e.style,s=o===void 0?{}:o,i=e.useInlineStyles,l=e.key,a=t.properties,d=t.type,c=t.tagName,u=t.value;if(d==="text")return u;if(c){var f=t5(r,i),g;if(!i)g=wo(wo({},a),{},{className:up(a.className)});else{var C=Object.keys(r).reduce(function(b,m){return m.split(".").forEach(function(p){b.includes(p)||b.push(p)}),b},[]),_=a.className&&a.className.includes("token")?["token"]:[],E=a.className&&_.concat(a.className.filter(function(b){return!C.includes(b)}));g=wo(wo({},a),{},{className:up(E)||void 0,style:e5(a.className,Object.assign({},a.style,s),r)})}var N=f(t.children);return gt.createElement(c,Wd({key:l},g),N)}}const n5=function(e,t){var r=e.listLanguages();return r.indexOf(t)!==-1};var r5=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function mp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function sn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?mp(Object(r),!0).forEach(function(o){V1(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mp(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}var o5=/\n/g;function s5(e){return e.match(o5)}function i5(e){var t=e.lines,r=e.startingLineNumber,o=e.style;return t.map(function(s,i){var l=i+r;return gt.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(l):o},"".concat(l,`
`))})}function l5(e){var t=e.codeString,r=e.codeStyle,o=e.containerStyle,s=o===void 0?{float:"left",paddingRight:"10px"}:o,i=e.numberStyle,l=i===void 0?{}:i,a=e.startingLineNumber;return gt.createElement("code",{style:Object.assign({},r,s)},i5({lines:t.replace(/\n$/,"").split(`
`),style:l,startingLineNumber:a}))}function a5(e){return"".concat(e.toString().length,".25em")}function q1(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function H1(e,t,r){var o={display:"inline-block",minWidth:a5(r),paddingRight:"1em",textAlign:"right",userSelect:"none"},s=typeof e=="function"?e(t):e,i=sn(sn({},o),s);return i}function pl(e){var t=e.children,r=e.lineNumber,o=e.lineNumberStyle,s=e.largestLineNumber,i=e.showInlineLineNumbers,l=e.lineProps,a=l===void 0?{}:l,d=e.className,c=d===void 0?[]:d,u=e.showLineNumbers,f=e.wrapLongLines,g=typeof a=="function"?a(r):a;if(g.className=c,r&&i){var C=H1(o,r,s);t.unshift(q1(r,C))}return f&u&&(g.style=sn(sn({},g.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:g,children:t}}function Y1(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<e.length;o++){var s=e[o];if(s.type==="text")r.push(pl({children:[s],className:G4(new Set(t))}));else if(s.children){var i=t.concat(s.properties.className);Y1(s.children,i).forEach(function(l){return r.push(l)})}}return r}function d5(e,t,r,o,s,i,l,a,d){var c,u=Y1(e.value),f=[],g=-1,C=0;function _(j,h){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return pl({children:j,lineNumber:h,lineNumberStyle:a,largestLineNumber:l,showInlineLineNumbers:s,lineProps:r,className:F,showLineNumbers:o,wrapLongLines:d})}function E(j,h){if(o&&h&&s){var F=H1(a,h,l);j.unshift(q1(h,F))}return j}function N(j,h){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||F.length>0?_(j,h,F):E(j,h)}for(var b=function(){var h=u[C],F=h.children[0].value,R=s5(F);if(R){var k=F.split(`
`);k.forEach(function(M,I){var J=o&&f.length+i,ee={type:"text",value:"".concat(M,`
`)};if(I===0){var pe=u.slice(g+1,C).concat(pl({children:[ee],className:h.properties.className})),Fe=N(pe,J);f.push(Fe)}else if(I===k.length-1){var ve=u[C+1]&&u[C+1].children&&u[C+1].children[0],ie={type:"text",value:"".concat(M)};if(ve){var P=pl({children:[ie],className:h.properties.className});u.splice(C+1,0,P)}else{var B=[ie],V=N(B,J,h.properties.className);f.push(V)}}else{var q=[ee],K=N(q,J,h.properties.className);f.push(K)}}),g=C}C++};C<u.length;)b();if(g!==u.length-1){var m=u.slice(g+1,u.length);if(m&&m.length){var p=o&&f.length+i,v=N(m,p);f.push(v)}}return t?f:(c=[]).concat.apply(c,f)}function c5(e){var t=e.rows,r=e.stylesheet,o=e.useInlineStyles;return t.map(function(s,i){return U1({node:s,stylesheet:r,useInlineStyles:o,key:"code-segement".concat(i)})})}function W1(e){return e&&typeof e.highlightAuto<"u"}function u5(e){var t=e.astGenerator,r=e.language,o=e.code,s=e.defaultCodeValue;if(W1(t)){var i=n5(t,r);return r==="text"?{value:s,language:"text"}:i?t.highlight(r,o):t.highlightAuto(o)}try{return r&&r!=="text"?{value:t.highlight(o,r)}:{value:s}}catch{return{value:s}}}function m5(e,t){return function(o){var s=o.language,i=o.children,l=o.style,a=l===void 0?t:l,d=o.customStyle,c=d===void 0?{}:d,u=o.codeTagProps,f=u===void 0?{className:s?"language-".concat(s):void 0,style:sn(sn({},a['code[class*="language-"]']),a['code[class*="language-'.concat(s,'"]')])}:u,g=o.useInlineStyles,C=g===void 0?!0:g,_=o.showLineNumbers,E=_===void 0?!1:_,N=o.showInlineLineNumbers,b=N===void 0?!0:N,m=o.startingLineNumber,p=m===void 0?1:m,v=o.lineNumberContainerStyle,j=o.lineNumberStyle,h=j===void 0?{}:j,F=o.wrapLines,R=o.wrapLongLines,k=R===void 0?!1:R,M=o.lineProps,I=M===void 0?{}:M,J=o.renderer,ee=o.PreTag,pe=ee===void 0?"pre":ee,Fe=o.CodeTag,ve=Fe===void 0?"code":Fe,ie=o.code,P=ie===void 0?(Array.isArray(i)?i[0]:i)||"":ie,B=o.astGenerator,V=q4(o,r5);B=B||e;var q=E?gt.createElement(l5,{containerStyle:v,codeStyle:f.style||{},numberStyle:h,startingLineNumber:p,codeString:P}):null,K=a.hljs||a['pre[class*="language-"]']||{backgroundColor:"#fff"},Qe=W1(B)?"hljs":"prismjs",ce=C?Object.assign({},V,{style:Object.assign({},K,c)}):Object.assign({},V,{className:V.className?"".concat(Qe," ").concat(V.className):Qe,style:Object.assign({},c)});if(k?f.style=sn(sn({},f.style),{},{whiteSpace:"pre-wrap"}):f.style=sn(sn({},f.style),{},{whiteSpace:"pre"}),!B)return gt.createElement(pe,ce,q,gt.createElement(ve,f,P));(F===void 0&&J||k)&&(F=!0),J=J||c5;var Ee=[{type:"text",value:P}],he=u5({astGenerator:B,language:s,code:P,defaultCodeValue:Ee});he.language===null&&(he.value=Ee);var De=he.value.length+p,hr=d5(he,F,I,E,b,p,De,h,k);return gt.createElement(pe,ce,gt.createElement(ve,f,!b&&q,J({rows:hr,stylesheet:a,useInlineStyles:C})))}}var p5=h5,f5=Object.prototype.hasOwnProperty;function h5(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var o in r)f5.call(r,o)&&(e[o]=r[o])}return e}var Z1=G1,au=G1.prototype;au.space=null;au.normal={};au.property={};function G1(e,t,r){this.property=e,this.normal=t,r&&(this.space=r)}var pp=p5,x5=Z1,g5=b5;function b5(e){for(var t=e.length,r=[],o=[],s=-1,i,l;++s<t;)i=e[s],r.push(i.property),o.push(i.normal),l=i.space;return new x5(pp.apply(null,r),pp.apply(null,o),l)}var du=v5;function v5(e){return e.toLowerCase()}var K1=Q1,qt=Q1.prototype;qt.space=null;qt.attribute=null;qt.property=null;qt.boolean=!1;qt.booleanish=!1;qt.overloadedBoolean=!1;qt.number=!1;qt.commaSeparated=!1;qt.spaceSeparated=!1;qt.commaOrSpaceSeparated=!1;qt.mustUseProperty=!1;qt.defined=!1;function Q1(e,t){this.property=e,this.attribute=t}var hn={},j5=0;hn.boolean=Wr();hn.booleanish=Wr();hn.overloadedBoolean=Wr();hn.number=Wr();hn.spaceSeparated=Wr();hn.commaSeparated=Wr();hn.commaOrSpaceSeparated=Wr();function Wr(){return Math.pow(2,++j5)}var X1=K1,fp=hn,J1=cu;cu.prototype=new X1;cu.prototype.defined=!0;var e2=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],y5=e2.length;function cu(e,t,r,o){var s=-1,i;for(hp(this,"space",o),X1.call(this,e,t);++s<y5;)i=e2[s],hp(this,i,(r&fp[i])===fp[i])}function hp(e,t,r){r&&(e[t]=r)}var xp=du,S5=Z1,F5=J1,bi=w5;function w5(e){var t=e.space,r=e.mustUseProperty||[],o=e.attributes||{},s=e.properties,i=e.transform,l={},a={},d,c;for(d in s)c=new F5(d,i(o,d),s[d],t),r.indexOf(d)!==-1&&(c.mustUseProperty=!0),l[d]=c,a[xp(d)]=d,a[xp(c.attribute)]=d;return new S5(l,a,t)}var C5=bi,_5=C5({space:"xlink",transform:E5,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function E5(e,t){return"xlink:"+t.slice(5).toLowerCase()}var T5=bi,L5=T5({space:"xml",transform:k5,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function k5(e,t){return"xml:"+t.slice(3).toLowerCase()}var R5=N5;function N5(e,t){return t in e?e[t]:t}var O5=R5,t2=P5;function P5(e,t){return O5(e,t.toLowerCase())}var A5=bi,M5=t2,I5=A5({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:M5,properties:{xmlns:null,xmlnsXLink:null}}),uu=hn,D5=bi,ft=uu.booleanish,Nt=uu.number,vr=uu.spaceSeparated,$5=D5({transform:z5,properties:{ariaActiveDescendant:null,ariaAtomic:ft,ariaAutoComplete:null,ariaBusy:ft,ariaChecked:ft,ariaColCount:Nt,ariaColIndex:Nt,ariaColSpan:Nt,ariaControls:vr,ariaCurrent:null,ariaDescribedBy:vr,ariaDetails:null,ariaDisabled:ft,ariaDropEffect:vr,ariaErrorMessage:null,ariaExpanded:ft,ariaFlowTo:vr,ariaGrabbed:ft,ariaHasPopup:null,ariaHidden:ft,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:vr,ariaLevel:Nt,ariaLive:null,ariaModal:ft,ariaMultiLine:ft,ariaMultiSelectable:ft,ariaOrientation:null,ariaOwns:vr,ariaPlaceholder:null,ariaPosInSet:Nt,ariaPressed:ft,ariaReadOnly:ft,ariaRelevant:null,ariaRequired:ft,ariaRoleDescription:vr,ariaRowCount:Nt,ariaRowIndex:Nt,ariaRowSpan:Nt,ariaSelected:ft,ariaSetSize:Nt,ariaSort:null,ariaValueMax:Nt,ariaValueMin:Nt,ariaValueNow:Nt,ariaValueText:null,role:null}});function z5(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}var Xo=hn,B5=bi,V5=t2,se=Xo.boolean,U5=Xo.overloadedBoolean,fs=Xo.booleanish,je=Xo.number,dt=Xo.spaceSeparated,Ki=Xo.commaSeparated,q5=B5({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:V5,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ki,acceptCharset:dt,accessKey:dt,action:null,allow:null,allowFullScreen:se,allowPaymentRequest:se,allowUserMedia:se,alt:null,as:null,async:se,autoCapitalize:null,autoComplete:dt,autoFocus:se,autoPlay:se,capture:se,charSet:null,checked:se,cite:null,className:dt,cols:je,colSpan:null,content:null,contentEditable:fs,controls:se,controlsList:dt,coords:je|Ki,crossOrigin:null,data:null,dateTime:null,decoding:null,default:se,defer:se,dir:null,dirName:null,disabled:se,download:U5,draggable:fs,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:se,formTarget:null,headers:dt,height:je,hidden:se,high:je,href:null,hrefLang:null,htmlFor:dt,httpEquiv:dt,id:null,imageSizes:null,imageSrcSet:Ki,inputMode:null,integrity:null,is:null,isMap:se,itemId:null,itemProp:dt,itemRef:dt,itemScope:se,itemType:dt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:se,low:je,manifest:null,max:null,maxLength:je,media:null,method:null,min:null,minLength:je,multiple:se,muted:se,name:null,nonce:null,noModule:se,noValidate:se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:se,optimum:je,pattern:null,ping:dt,placeholder:null,playsInline:se,poster:null,preload:null,readOnly:se,referrerPolicy:null,rel:dt,required:se,reversed:se,rows:je,rowSpan:je,sandbox:dt,scope:null,scoped:se,seamless:se,selected:se,shape:null,size:je,sizes:null,slot:null,span:je,spellCheck:fs,src:null,srcDoc:null,srcLang:null,srcSet:Ki,start:je,step:null,style:null,tabIndex:je,target:null,title:null,translate:null,type:null,typeMustMatch:se,useMap:null,value:fs,width:je,wrap:null,align:null,aLink:null,archive:dt,axis:null,background:null,bgColor:null,border:je,borderColor:null,bottomMargin:je,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:se,declare:se,event:null,face:null,frame:null,frameBorder:null,hSpace:je,leftMargin:je,link:null,longDesc:null,lowSrc:null,marginHeight:je,marginWidth:je,noResize:se,noHref:se,noShade:se,noWrap:se,object:null,profile:null,prompt:null,rev:null,rightMargin:je,rules:null,scheme:null,scrolling:fs,standby:null,summary:null,text:null,topMargin:je,valueType:null,version:null,vAlign:null,vLink:null,vSpace:je,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:se,disableRemotePlayback:se,prefix:null,property:null,results:je,security:null,unselectable:null}}),H5=g5,Y5=_5,W5=L5,Z5=I5,G5=$5,K5=q5,Q5=H5([W5,Y5,Z5,G5,K5]),X5=du,J5=J1,e6=K1,mu="data",t6=o6,n6=/^data[-\w.:]+$/i,n2=/-[a-z]/g,r6=/[A-Z]/g;function o6(e,t){var r=X5(t),o=t,s=e6;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===mu&&n6.test(t)&&(t.charAt(4)==="-"?o=s6(t):t=i6(t),s=J5),new s(o,t))}function s6(e){var t=e.slice(5).replace(n2,a6);return mu+t.charAt(0).toUpperCase()+t.slice(1)}function i6(e){var t=e.slice(4);return n2.test(t)?e:(t=t.replace(r6,l6),t.charAt(0)!=="-"&&(t="-"+t),mu+t)}function l6(e){return"-"+e.toLowerCase()}function a6(e){return e.charAt(1).toUpperCase()}var d6=c6,gp=/[#.]/g;function c6(e,t){for(var r=e||"",o=t||"div",s={},i=0,l,a,d;i<r.length;)gp.lastIndex=i,d=gp.exec(r),l=r.slice(i,d?d.index:r.length),l&&(a?a==="#"?s.id=l:s.className?s.className.push(l):s.className=[l]:o=l,i+=l.length),d&&(a=d[0],i++);return{type:"element",tagName:o,properties:s,children:[]}}var pu={};pu.parse=p6;pu.stringify=f6;var bp="",u6=" ",m6=/[ \t\n\r\f]+/g;function p6(e){var t=String(e||bp).trim();return t===bp?[]:t.split(m6)}function f6(e){return e.join(u6).trim()}var fu={};fu.parse=h6;fu.stringify=x6;var Zd=",",vp=" ",ws="";function h6(e){for(var t=[],r=String(e||ws),o=r.indexOf(Zd),s=0,i=!1,l;!i;)o===-1&&(o=r.length,i=!0),l=r.slice(s,o).trim(),(l||!i)&&t.push(l),s=o+1,o=r.indexOf(Zd,s);return t}function x6(e,t){var r=t||{},o=r.padLeft===!1?ws:vp,s=r.padRight?vp:ws;return e[e.length-1]===ws&&(e=e.concat(ws)),e.join(s+Zd+o).trim()}var g6=t6,jp=du,b6=d6,yp=pu.parse,Sp=fu.parse,v6=y6,j6={}.hasOwnProperty;function y6(e,t,r){var o=r?_6(r):null;return s;function s(l,a){var d=b6(l,t),c=Array.prototype.slice.call(arguments,2),u=d.tagName.toLowerCase(),f;if(d.tagName=o&&j6.call(o,u)?o[u]:u,a&&S6(a,d)&&(c.unshift(a),a=null),a)for(f in a)i(d.properties,f,a[f]);return r2(d.children,c),d.tagName==="template"&&(d.content={type:"root",children:d.children},d.children=[]),d}function i(l,a,d){var c,u,f;d==null||d!==d||(c=g6(e,a),u=c.property,f=d,typeof f=="string"&&(c.spaceSeparated?f=yp(f):c.commaSeparated?f=Sp(f):c.commaOrSpaceSeparated&&(f=yp(Sp(f).join(" ")))),u==="style"&&typeof d!="string"&&(f=C6(f)),u==="className"&&l.className&&(f=l.className.concat(f)),l[u]=w6(c,u,f))}}function S6(e,t){return typeof e=="string"||"length"in e||F6(t.tagName,e)}function F6(e,t){var r=t.type;return e==="input"||!r||typeof r!="string"?!1:typeof t.children=="object"&&"length"in t.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in t)}function r2(e,t){var r,o;if(typeof t=="string"||typeof t=="number"){e.push({type:"text",value:String(t)});return}if(typeof t=="object"&&"length"in t){for(r=-1,o=t.length;++r<o;)r2(e,t[r]);return}if(typeof t!="object"||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}function w6(e,t,r){var o,s,i;if(typeof r!="object"||!("length"in r))return Fp(e,t,r);for(s=r.length,o=-1,i=[];++o<s;)i[o]=Fp(e,t,r[o]);return i}function Fp(e,t,r){var o=r;return e.number||e.positiveNumber?!isNaN(o)&&o!==""&&(o=Number(o)):(e.boolean||e.overloadedBoolean)&&typeof o=="string"&&(o===""||jp(r)===jp(t))&&(o=!0),o}function C6(e){var t=[],r;for(r in e)t.push([r,e[r]].join(": "));return t.join("; ")}function _6(e){for(var t=e.length,r=-1,o={},s;++r<t;)s=e[r],o[s.toLowerCase()]=s;return o}var E6=Q5,T6=v6,o2=T6(E6,"div");o2.displayName="html";var L6=o2,k6=L6;const R6="Æ",N6="&",O6="Á",P6="Â",A6="À",M6="Å",I6="Ã",D6="Ä",$6="©",z6="Ç",B6="Ð",V6="É",U6="Ê",q6="È",H6="Ë",Y6=">",W6="Í",Z6="Î",G6="Ì",K6="Ï",Q6="<",X6="Ñ",J6="Ó",eb="Ô",tb="Ò",nb="Ø",rb="Õ",ob="Ö",sb='"',ib="®",lb="Þ",ab="Ú",db="Û",cb="Ù",ub="Ü",mb="Ý",pb="á",fb="â",hb="´",xb="æ",gb="à",bb="&",vb="å",jb="ã",yb="ä",Sb="¦",Fb="ç",wb="¸",Cb="¢",_b="©",Eb="¤",Tb="°",Lb="÷",kb="é",Rb="ê",Nb="è",Ob="ð",Pb="ë",Ab="½",Mb="¼",Ib="¾",Db=">",$b="í",zb="î",Bb="¡",Vb="ì",Ub="¿",qb="ï",Hb="«",Yb="<",Wb="¯",Zb="µ",Gb="·",Kb=" ",Qb="¬",Xb="ñ",Jb="ó",ev="ô",tv="ò",nv="ª",rv="º",ov="ø",sv="õ",iv="ö",lv="¶",av="±",dv="£",cv='"',uv="»",mv="®",pv="§",fv="­",hv="¹",xv="²",gv="³",bv="ß",vv="þ",jv="×",yv="ú",Sv="û",Fv="ù",wv="¨",Cv="ü",_v="ý",Ev="¥",Tv="ÿ",Lv={AElig:R6,AMP:N6,Aacute:O6,Acirc:P6,Agrave:A6,Aring:M6,Atilde:I6,Auml:D6,COPY:$6,Ccedil:z6,ETH:B6,Eacute:V6,Ecirc:U6,Egrave:q6,Euml:H6,GT:Y6,Iacute:W6,Icirc:Z6,Igrave:G6,Iuml:K6,LT:Q6,Ntilde:X6,Oacute:J6,Ocirc:eb,Ograve:tb,Oslash:nb,Otilde:rb,Ouml:ob,QUOT:sb,REG:ib,THORN:lb,Uacute:ab,Ucirc:db,Ugrave:cb,Uuml:ub,Yacute:mb,aacute:pb,acirc:fb,acute:hb,aelig:xb,agrave:gb,amp:bb,aring:vb,atilde:jb,auml:yb,brvbar:Sb,ccedil:Fb,cedil:wb,cent:Cb,copy:_b,curren:Eb,deg:Tb,divide:Lb,eacute:kb,ecirc:Rb,egrave:Nb,eth:Ob,euml:Pb,frac12:Ab,frac14:Mb,frac34:Ib,gt:Db,iacute:$b,icirc:zb,iexcl:Bb,igrave:Vb,iquest:Ub,iuml:qb,laquo:Hb,lt:Yb,macr:Wb,micro:Zb,middot:Gb,nbsp:Kb,not:Qb,ntilde:Xb,oacute:Jb,ocirc:ev,ograve:tv,ordf:nv,ordm:rv,oslash:ov,otilde:sv,ouml:iv,para:lv,plusmn:av,pound:dv,quot:cv,raquo:uv,reg:mv,sect:pv,shy:fv,sup1:hv,sup2:xv,sup3:gv,szlig:bv,thorn:vv,times:jv,uacute:yv,ucirc:Sv,ugrave:Fv,uml:wv,uuml:Cv,yacute:_v,yen:Ev,yuml:Tv},kv={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var s2=Rv;function Rv(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}var Nv=Ov;function Ov(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}var Pv=Av;function Av(e){var t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}var Mv=Pv,Iv=s2,Dv=$v;function $v(e){return Mv(e)||Iv(e)}var Qi,zv=59,Bv=Vv;function Vv(e){var t="&"+e+";",r;return Qi=Qi||document.createElement("i"),Qi.innerHTML=t,r=Qi.textContent,r.charCodeAt(r.length-1)===zv&&e!=="semi"||r===t?!1:r}var wp=Lv,Cp=kv,Uv=s2,qv=Nv,i2=Dv,Hv=Bv,Yv=s8,Wv={}.hasOwnProperty,ro=String.fromCharCode,Zv=Function.prototype,_p={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Gv=9,Ep=10,Kv=12,Qv=32,Tp=38,Xv=59,Jv=60,e8=61,t8=35,n8=88,r8=120,o8=65533,ao="named",hu="hexadecimal",xu="decimal",gu={};gu[hu]=16;gu[xu]=10;var ua={};ua[ao]=i2;ua[xu]=Uv;ua[hu]=qv;var l2=1,a2=2,d2=3,c2=4,u2=5,Gd=6,m2=7,mr={};mr[l2]="Named character references must be terminated by a semicolon";mr[a2]="Numeric character references must be terminated by a semicolon";mr[d2]="Named character references cannot be empty";mr[c2]="Numeric character references cannot be empty";mr[u2]="Named character references must be known";mr[Gd]="Numeric character references cannot be disallowed";mr[m2]="Numeric character references cannot be outside the permissible Unicode range";function s8(e,t){var r={},o,s;t||(t={});for(s in _p)o=t[s],r[s]=o??_p[s];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),i8(e,r)}function i8(e,t){var r=t.additional,o=t.nonTerminated,s=t.text,i=t.reference,l=t.warning,a=t.textContext,d=t.referenceContext,c=t.warningContext,u=t.position,f=t.indent||[],g=e.length,C=0,_=-1,E=u.column||1,N=u.line||1,b="",m=[],p,v,j,h,F,R,k,M,I,J,ee,pe,Fe,ve,ie,P,B,V,q;for(typeof r=="string"&&(r=r.charCodeAt(0)),P=K(),M=l?Qe:Zv,C--,g++;++C<g;)if(F===Ep&&(E=f[_]||1),F=e.charCodeAt(C),F===Tp){if(k=e.charCodeAt(C+1),k===Gv||k===Ep||k===Kv||k===Qv||k===Tp||k===Jv||k!==k||r&&k===r){b+=ro(F),E++;continue}for(Fe=C+1,pe=Fe,q=Fe,k===t8?(q=++pe,k=e.charCodeAt(q),k===n8||k===r8?(ve=hu,q=++pe):ve=xu):ve=ao,p="",ee="",h="",ie=ua[ve],q--;++q<g&&(k=e.charCodeAt(q),!!ie(k));)h+=ro(k),ve===ao&&Wv.call(wp,h)&&(p=h,ee=wp[h]);j=e.charCodeAt(q)===Xv,j&&(q++,v=ve===ao?Hv(h):!1,v&&(p=h,ee=v)),V=1+q-Fe,!j&&!o||(h?ve===ao?(j&&!ee?M(u2,1):(p!==h&&(q=pe+p.length,V=1+q-pe,j=!1),j||(I=p?l2:d2,t.attribute?(k=e.charCodeAt(q),k===e8?(M(I,V),ee=null):i2(k)?ee=null:M(I,V)):M(I,V))),R=ee):(j||M(a2,V),R=parseInt(h,gu[ve]),l8(R)?(M(m2,V),R=ro(o8)):R in Cp?(M(Gd,V),R=Cp[R]):(J="",a8(R)&&M(Gd,V),R>65535&&(R-=65536,J+=ro(R>>>10|55296),R=56320|R&1023),R=J+ro(R))):ve!==ao&&M(c2,V)),R?(ce(),P=K(),C=q-1,E+=q-Fe+1,m.push(R),B=K(),B.offset++,i&&i.call(d,R,{start:P,end:B},e.slice(Fe-1,q)),P=B):(h=e.slice(Fe-1,q),b+=h,E+=h.length,C=q-1)}else F===10&&(N++,_++,E=0),F===F?(b+=ro(F),E++):ce();return m.join("");function K(){return{line:N,column:E,offset:C+(u.offset||0)}}function Qe(Ee,he){var De=K();De.column+=he,De.offset+=he,l.call(c,mr[Ee],De,Ee)}function ce(){b&&(m.push(b),s&&s.call(a,b,{start:P,end:K()}),b="")}}function l8(e){return e>=55296&&e<=57343||e>1114111}function a8(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var p2={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(o){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},a={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function m(p){return p instanceof d?new d(p.type,m(p.content),p.alias):Array.isArray(p)?p.map(m):p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++i}),m.__id},clone:function m(p,v){v=v||{};var j,h;switch(a.util.type(p)){case"Object":if(h=a.util.objId(p),v[h])return v[h];j={},v[h]=j;for(var F in p)p.hasOwnProperty(F)&&(j[F]=m(p[F],v));return j;case"Array":return h=a.util.objId(p),v[h]?v[h]:(j=[],v[h]=j,p.forEach(function(R,k){j[k]=m(R,v)}),j);default:return p}},getLanguage:function(m){for(;m;){var p=s.exec(m.className);if(p)return p[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,p){m.className=m.className.replace(RegExp(s,"gi"),""),m.classList.add("language-"+p)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(j){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(j.stack)||[])[1];if(m){var p=document.getElementsByTagName("script");for(var v in p)if(p[v].src==m)return p[v]}return null}},isActive:function(m,p,v){for(var j="no-"+p;m;){var h=m.classList;if(h.contains(p))return!0;if(h.contains(j))return!1;m=m.parentElement}return!!v}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(m,p){var v=a.util.clone(a.languages[m]);for(var j in p)v[j]=p[j];return v},insertBefore:function(m,p,v,j){j=j||a.languages;var h=j[m],F={};for(var R in h)if(h.hasOwnProperty(R)){if(R==p)for(var k in v)v.hasOwnProperty(k)&&(F[k]=v[k]);v.hasOwnProperty(R)||(F[R]=h[R])}var M=j[m];return j[m]=F,a.languages.DFS(a.languages,function(I,J){J===M&&I!=m&&(this[I]=F)}),F},DFS:function m(p,v,j,h){h=h||{};var F=a.util.objId;for(var R in p)if(p.hasOwnProperty(R)){v.call(p,R,p[R],j||R);var k=p[R],M=a.util.type(k);M==="Object"&&!h[F(k)]?(h[F(k)]=!0,m(k,v,null,h)):M==="Array"&&!h[F(k)]&&(h[F(k)]=!0,m(k,v,R,h))}}},plugins:{},highlightAll:function(m,p){a.highlightAllUnder(document,m,p)},highlightAllUnder:function(m,p,v){var j={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",j),j.elements=Array.prototype.slice.apply(j.container.querySelectorAll(j.selector)),a.hooks.run("before-all-elements-highlight",j);for(var h=0,F;F=j.elements[h++];)a.highlightElement(F,p===!0,j.callback)},highlightElement:function(m,p,v){var j=a.util.getLanguage(m),h=a.languages[j];a.util.setLanguage(m,j);var F=m.parentElement;F&&F.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(F,j);var R=m.textContent,k={element:m,language:j,grammar:h,code:R};function M(J){k.highlightedCode=J,a.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,a.hooks.run("after-highlight",k),a.hooks.run("complete",k),v&&v.call(k.element)}if(a.hooks.run("before-sanity-check",k),F=k.element.parentElement,F&&F.nodeName.toLowerCase()==="pre"&&!F.hasAttribute("tabindex")&&F.setAttribute("tabindex","0"),!k.code){a.hooks.run("complete",k),v&&v.call(k.element);return}if(a.hooks.run("before-highlight",k),!k.grammar){M(a.util.encode(k.code));return}if(p&&o.Worker){var I=new Worker(a.filename);I.onmessage=function(J){M(J.data)},I.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else M(a.highlight(k.code,k.grammar,k.language))},highlight:function(m,p,v){var j={code:m,grammar:p,language:v};if(a.hooks.run("before-tokenize",j),!j.grammar)throw new Error('The language "'+j.language+'" has no grammar.');return j.tokens=a.tokenize(j.code,j.grammar),a.hooks.run("after-tokenize",j),d.stringify(a.util.encode(j.tokens),j.language)},tokenize:function(m,p){var v=p.rest;if(v){for(var j in v)p[j]=v[j];delete p.rest}var h=new f;return g(h,h.head,m),u(m,h,p,h.head,0),_(h)},hooks:{all:{},add:function(m,p){var v=a.hooks.all;v[m]=v[m]||[],v[m].push(p)},run:function(m,p){var v=a.hooks.all[m];if(!(!v||!v.length))for(var j=0,h;h=v[j++];)h(p)}},Token:d};o.Prism=a;function d(m,p,v,j){this.type=m,this.content=p,this.alias=v,this.length=(j||"").length|0}d.stringify=function m(p,v){if(typeof p=="string")return p;if(Array.isArray(p)){var j="";return p.forEach(function(M){j+=m(M,v)}),j}var h={type:p.type,content:m(p.content,v),tag:"span",classes:["token",p.type],attributes:{},language:v},F=p.alias;F&&(Array.isArray(F)?Array.prototype.push.apply(h.classes,F):h.classes.push(F)),a.hooks.run("wrap",h);var R="";for(var k in h.attributes)R+=" "+k+'="'+(h.attributes[k]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+R+">"+h.content+"</"+h.tag+">"};function c(m,p,v,j){m.lastIndex=p;var h=m.exec(v);if(h&&j&&h[1]){var F=h[1].length;h.index+=F,h[0]=h[0].slice(F)}return h}function u(m,p,v,j,h,F){for(var R in v)if(!(!v.hasOwnProperty(R)||!v[R])){var k=v[R];k=Array.isArray(k)?k:[k];for(var M=0;M<k.length;++M){if(F&&F.cause==R+","+M)return;var I=k[M],J=I.inside,ee=!!I.lookbehind,pe=!!I.greedy,Fe=I.alias;if(pe&&!I.pattern.global){var ve=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,ve+"g")}for(var ie=I.pattern||I,P=j.next,B=h;P!==p.tail&&!(F&&B>=F.reach);B+=P.value.length,P=P.next){var V=P.value;if(p.length>m.length)return;if(!(V instanceof d)){var q=1,K;if(pe){if(K=c(ie,B,m,ee),!K||K.index>=m.length)break;var he=K.index,Qe=K.index+K[0].length,ce=B;for(ce+=P.value.length;he>=ce;)P=P.next,ce+=P.value.length;if(ce-=P.value.length,B=ce,P.value instanceof d)continue;for(var Ee=P;Ee!==p.tail&&(ce<Qe||typeof Ee.value=="string");Ee=Ee.next)q++,ce+=Ee.value.length;q--,V=m.slice(B,ce),K.index-=B}else if(K=c(ie,0,V,ee),!K)continue;var he=K.index,De=K[0],hr=V.slice(0,he),Ti=V.slice(he+De.length),rs=B+V.length;F&&rs>F.reach&&(F.reach=rs);var Ue=P.prev;hr&&(Ue=g(p,Ue,hr),B+=hr.length),C(p,Ue,q);var xr=new d(R,J?a.tokenize(De,J):De,Fe,De);if(P=g(p,Ue,xr),Ti&&g(p,P,Ti),q>1){var Xr={cause:R+","+M,reach:rs};u(m,p,v,P.prev,B,Xr),F&&Xr.reach>F.reach&&(F.reach=Xr.reach)}}}}}}function f(){var m={value:null,prev:null,next:null},p={value:null,prev:m,next:null};m.next=p,this.head=m,this.tail=p,this.length=0}function g(m,p,v){var j=p.next,h={value:v,prev:p,next:j};return p.next=h,j.prev=h,m.length++,h}function C(m,p,v){for(var j=p.next,h=0;h<v&&j!==m.tail;h++)j=j.next;p.next=j,j.prev=p,m.length-=h}function _(m){for(var p=[],v=m.head.next;v!==m.tail;)p.push(v.value),v=v.next;return p}if(!o.document)return o.addEventListener&&(a.disableWorkerMessageHandler||o.addEventListener("message",function(m){var p=JSON.parse(m.data),v=p.language,j=p.code,h=p.immediateClose;o.postMessage(a.highlight(j,a.languages[v],v)),h&&o.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function N(){a.manual||a.highlightAll()}if(!a.manual){var b=document.readyState;b==="loading"||b==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",N):window.requestAnimationFrame?window.requestAnimationFrame(N):window.setTimeout(N,16)}return a}(t);e.exports&&(e.exports=r),typeof fl<"u"&&(fl.Prism=r)})(p2);var d8=p2.exports,c8=bu;bu.displayName="markup";bu.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function bu(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,o){var s={};s["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[o]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};i["language-"+o]={pattern:/[\s\S]+/,inside:e.languages[o]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}var f2=vu;vu.displayName="css";vu.aliases=[];function vu(e){(function(t){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(e)}const u8=Br(f2);var m8=ju;ju.displayName="clike";ju.aliases=[];function ju(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}var p8=yu;yu.displayName="javascript";yu.aliases=["js"];function yu(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}var Cs=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof fl=="object"?fl:{},f8=k8();Cs.Prism={manual:!0,disableWorkerMessageHandler:!0};var h8=k6,x8=Yv,h2=d8,g8=c8,b8=f2,v8=m8,j8=p8;f8();var Su={}.hasOwnProperty;function x2(){}x2.prototype=h2;var Ie=new x2,y8=Ie;Ie.highlight=F8;Ie.register=vi;Ie.alias=S8;Ie.registered=w8;Ie.listLanguages=C8;vi(g8);vi(b8);vi(v8);vi(j8);Ie.util.encode=T8;Ie.Token.stringify=_8;function vi(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");Ie.languages[e.displayName]===void 0&&e(Ie)}function S8(e,t){var r=Ie.languages,o=e,s,i,l,a;t&&(o={},o[e]=t);for(s in o)for(i=o[s],i=typeof i=="string"?[i]:i,l=i.length,a=-1;++a<l;)r[i[a]]=r[s]}function F8(e,t){var r=h2.highlight,o;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(Ie.util.type(t)==="Object")o=t,t=null;else{if(typeof t!="string")throw new Error("Expected `string` for `name`, got `"+t+"`");if(Su.call(Ie.languages,t))o=Ie.languages[t];else throw new Error("Unknown language: `"+t+"` is not registered")}return r.call(this,e,o,t)}function w8(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Su.call(Ie.languages,e)}function C8(){var e=Ie.languages,t=[],r;for(r in e)Su.call(e,r)&&typeof e[r]=="object"&&t.push(r);return t}function _8(e,t,r){var o;return typeof e=="string"?{type:"text",value:e}:Ie.util.type(e)==="Array"?E8(e,t):(o={type:e.type,content:Ie.Token.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r},e.alias&&(o.classes=o.classes.concat(e.alias)),Ie.hooks.run("wrap",o),h8(o.tag+"."+o.classes.join("."),L8(o.attributes),o.content))}function E8(e,t){for(var r=[],o=e.length,s=-1,i;++s<o;)i=e[s],i!==""&&i!==null&&i!==void 0&&r.push(i);for(s=-1,o=r.length;++s<o;)i=r[s],r[s]=Ie.Token.stringify(i,t,r);return r}function T8(e){return e}function L8(e){var t;for(t in e)e[t]=x8(e[t]);return e}function k8(){var e="Prism"in Cs,t=e?Cs.Prism:void 0;return r;function r(){e?Cs.Prism=t:delete Cs.Prism,e=void 0,t=void 0}}const Fu=Br(y8);var Zr=m5(Fu,{});Zr.registerLanguage=function(e,t){return Fu.register(t)};Zr.alias=function(e,t){return Fu.alias(e,t)};var R8=wu;wu.displayName="bash";wu.aliases=["shell"];function wu(e){(function(t){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",o={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:o,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:o}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},o.inside=t.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=s.variable[1].inside,a=0;a<i.length;a++)l[i[a]]=t.languages.bash[i[a]];t.languages.shell=t.languages.bash})(e)}const N8=Br(R8);var O8=Cu;Cu.displayName="jsx";Cu.aliases=[];function Cu(e){(function(t){var r=t.util.clone(t.languages.javascript),o=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,s=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(c,u){return c=c.replace(/<S>/g,function(){return o}).replace(/<BRACES>/g,function(){return s}).replace(/<SPREAD>/g,function(){return i}),RegExp(c,u)}i=l(i).source,t.languages.jsx=t.languages.extend("markup",r),t.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=r.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var a=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(a).join(""):""},d=function(c){for(var u=[],f=0;f<c.length;f++){var g=c[f],C=!1;if(typeof g!="string"&&(g.type==="tag"&&g.content[0]&&g.content[0].type==="tag"?g.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===a(g.content[0].content[1])&&u.pop():g.content[g.content.length-1].content==="/>"||u.push({tagName:a(g.content[0].content[1]),openedBraces:0}):u.length>0&&g.type==="punctuation"&&g.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&g.type==="punctuation"&&g.content==="}"?u[u.length-1].openedBraces--:C=!0),(C||typeof g=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var _=a(g);f<c.length-1&&(typeof c[f+1]=="string"||c[f+1].type==="plain-text")&&(_+=a(c[f+1]),c.splice(f+1,1)),f>0&&(typeof c[f-1]=="string"||c[f-1].type==="plain-text")&&(_=a(c[f-1])+_,c.splice(f-1,1),f--),c[f]=new t.Token("plain-text",_,null,_)}g.content&&typeof g.content!="string"&&d(g.content)}};t.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||d(c.tokens)})})(e)}const P8=Br(O8);var A8=_u;_u.displayName="scss";_u.aliases=[];function _u(e){e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}const M8=Br(A8);Zr.registerLanguage("jsx",P8);Zr.registerLanguage("css",u8);Zr.registerLanguage("scss",M8);Zr.registerLanguage("bash",N8);const Ze=({code:e,language:t="jsx",caption:r,expand:o=!1,fixed:s=o,className:i="",undent:l=!1})=>{const[a,d]=T.useState(!1),[c,u]=T.useState(o),f=()=>{navigator.clipboard.writeText(e),d(!0),mn(2e3).then(()=>d(!1))};return n.jsxs("div",{className:`codeblock ${i} ${c?"expanded":""} ${s?"fixed-open":"expandable"}`,children:[!!r&&n.jsx("h4",{className:"caption",children:r}),n.jsxs("div",{className:"controls",children:[n.jsx("div",{className:"expand",onClick:()=>u(!c),children:c?"Compress":"Expand"}),n.jsx("div",{className:`clipboard ${a?"copied":""}`,onClick:f,children:a?"Copied":"Copy"})]}),n.jsx(Zr,{language:t,showLineNumbers:!0,useInlineStyles:!1,customStyle:{},children:an(e,{undent:l})})]})},an=(e,t={})=>{if(e=e.replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/,"").replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/,"").replaceAll(/\/\/\s*PRETEND:\s/g,"").replaceAll(/{?\/\*\s*PRETEND:\s(.*?)\s+\*\/}?/g,"$1").replaceAll(/\/\*\s*REAL\s*\*\/.*?\/\*\s*UNREAL\s*\*\//g,"").replaceAll(/{\/\*\s*(UN?)PRETEND\s*\*\/}/g,"").replace(/\n+$/,""),t.undent){const r=new RegExp("^"+" ".repeat(t.undent),"gm");e=e.replaceAll(r,"")}return e},y=({Component:e,code:t,html:r,children:o,className:s="",caption:i,fixed:l,expand:a,language:d,undent:c})=>n.jsxs("div",{className:`example grid-2 gap-8 stack-desktop ${s}`,children:[n.jsx("div",{className:"source",children:n.jsx(Ze,{caption:i,code:t||r,expand:a,fixed:l,undent:c,language:r?"html":d})}),!!o&&n.jsx("div",{className:"interim",children:o}),e?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx(e,{})]}):null,r?n.jsxs("div",{className:"output",children:[n.jsx("h4",{className:"caption",children:"Output"}),n.jsx("div",{dangerouslySetInnerHTML:{__html:r}})]}):null]}),$=({children:e,align:t="start"})=>n.jsx("div",{className:`grid-2 gap-h-8 stack-desktop ${t}`,style:{"--prose-width":"100%"},children:e}),I8={bars:"M0 96C0 78 14 64 32 64H416c18 0 32 14 32 32s-14 32-32 32H32C14 128 0 114 0 96zM0 256c0-18 14-32 32-32H416c18 0 32 14 32 32s-14 32-32 32H32c-18 0-32-14-32-32zM448 416c0 18-14 32-32 32H32c-18 0-32-14-32-32s14-32 32-32H416c18 0 32 14 32 32z",check:"M486,91C499,104 499,127 486,140L212,422C198,435 177,435 163,422L26,281C13,267 13,245 26,231C39,217 61,217 75,231L187,347L438,91C451,77 473,77 486,91L486,91Z",cross:"M456,109C470,94 470,71 456,56C441,42 418,42 403,56L256,204L109,56C94,42 71,42 56,56C42,71 42,94 56,109L204,256L56,403C42,418 42,441 56,456C71,470 94,470 109,456L256,308L403,456C418,470 441,470 456,456C470,441 470,418 456,403L308,256L456,109Z",github:"M256,0C115,0 0,115 0,256C0,369 73,465 175,499C188,501 193,493 193,487C193,481 192,460 192,439C128,451 111,423 106,409C103,402 91,379 80,373C71,368 58,356 80,356C100,356 114,374 119,382C142,421 179,410 194,403C196,387 203,375 210,369C153,363 93,340 93,243C93,215 103,192 120,174C117,167 108,141 122,106C122,106 144,99 193,132C213,126 235,124 257,124C278,124 300,126 321,132C370,99 391,106 391,106C405,141 396,167 394,174C410,192 420,214 420,243C420,341 360,363 303,369C312,377 320,392 320,416C320,451 320,478 320,487C320,493 325,501 338,499C439,465 512,369 512,256C512,115 397,0 256,0Z",info:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13 0-24-11-24-24s11-24 24-24h48c13 0 24 11 24 24v88h8c13 0 24 11 24 24s-11 24-24 24H216c-13 0-24-11-24-24s11-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",lock:"M159,133L159,226L301,226L301,133C301,94 269,62 230,62C191,62 159,94 159,133ZM101,226L101,133C101,62 159,4 230,4C301,4 359,62 359,133L359,226L373,226C404,226 430,252 430,283L430,455C430,486 404,512 373,512L87,512C56,512 30,486 30,455L30,283C30,252 56,226 87,226L101,226Z",pen:"M356,34L311,79L433,201L478,156C502,132 502,94 478,71L441,34C418,10 380,10 356,34L356,34ZM290,100L71,319C61,329 54,341 50,355L16,468C14,476 16,484 22,490C28,496 36,498 44,496L157,462C171,458 183,451 192,442L412,222L290,100Z",plus:"M292,56C292,36 276,20 256,20C236,20 220,36 220,56L220,220L56,220C36,220 20,236 20,256C20,276 36,292 56,292L220,292L220,456C220,476 236,492 256,492C276,492 292,476 292,456L292,292L456,292C476,292 492,276 492,256C492,236 476,220 456,220L292,220L292,56Z",trash:"M173,33L166,46L76,46C59,46 46,59 46,76C46,93 59,106 76,106L436,106C453,106 466,93 466,76C466,59 453,46 436,46L346,46L339,33C334,22 324,16 312,16L200,16C188,16 178,22 173,33ZM436,136L76,136L96,454C97,478 117,496 141,496L371,496C395,496 415,478 416,454L436,136Z",undo:"M168,224L40,224C27,224 16,213 16,200L16,72C16,62 22,54 31,50C40,46 50,48 57,55L99,97C186,10 327,10 414,98C502,185 502,327 414,414C327,502 185,502 98,414C85,402 85,382 98,369C110,357 130,357 143,369C205,432 307,432 369,369C432,307 432,205 369,143C307,81 207,80 144,142L185,183C192,190 194,200 190,209C187,218 178,224 168,224Z",unlock:"M313,131C313,92 345,60 384,60C423,60 455,92 455,131L455,174C455,190 468,203 484,203C499,203 512,190 512,174L512,131C512,61 455,3 384,3C313,3 256,61 256,131L256,227L57,227C26,227 0,253 0,284L0,455C0,486 26,512 57,512L341,512C373,512 398,486 398,455L398,284C398,253 373,227 341,227L313,227L313,131Z",checked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083ZM88.43,298.82C75.421,285.811 75.421,264.689 88.43,251.68C101.439,238.671 122.561,238.671 135.57,251.68L202,318.11L376.43,143.68C389.439,130.671 410.561,130.671 423.57,143.68C436.579,156.689 436.579,177.811 423.57,190.82L225.57,388.82C212.553,401.838 191.447,401.838 178.43,388.82L88.43,298.82Z",unchecked:"M507.083,32L507.083,480C507.083,494.958 494.958,507.083 480,507.083L32,507.083C17.042,507.083 4.917,494.958 4.917,480L4.917,32C4.917,17.042 17.042,4.917 32,4.917L480,4.917C494.958,4.917 507.083,17.042 507.083,32ZM452.917,59.083L59.083,59.083L59.083,452.917L452.917,452.917L452.917,59.083Z"},D8=e=>{const t=I8[e]||iu(`Invalid icon name: ${e}`);return qr(t)?{path:t,width:512,height:512}:t},Lp=({path:e,onClick:t,width:r=512,height:o=512,style:s,className:i="",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:`${i} icon`,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${o}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),g2=({name:e,...t})=>e?n.jsx(Lp,{...t,...D8(e)}):n.jsx(Lp,{...t}),lt=({title:e,text:t,children:r})=>n.jsxs("div",{className:"info alert border flex start small shadow-2",children:[n.jsx(g2,{name:"info",className:"side-icon"}),n.jsxs("div",{children:[!!e&&n.jsx("h3",{className:"mar-b-2",children:e}),t||r]})]}),G=e=>n.jsx(lt,{title:"Try it out",...e}),$8=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Changed"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Changed"})," component will only render its child components when the form state has changed."]}),n.jsxs($,{children:[n.jsx("p",{children:'A typical example is shown below.  The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field.'}),n.jsxs(G,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),n.jsx(y,{Component:B4,code:V4,caption:"Changed",expand:!0})]}),z8=Object.freeze(Object.defineProperty({__proto__:null,default:$8},Symbol.toStringTag,{value:"Module"})),B8=()=>n.jsxs(S,{debug:!0,children:[n.jsx(x,{name:"one",type:"checkbox",label:"Checkbox with label",default:!0,text:"I like badgers!"}),n.jsx(x,{name:"two",type:"checkbox",text:"I accept the terms and conditions"}),n.jsx(W,{})]}),V8=`import { Form, Field, Submit } from '@/lib/index.js'

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
`;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Oe.apply(this,arguments)}var Pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pe||(Pe={}));const kp="popstate";function U8(e){e===void 0&&(e={});function t(o,s){let{pathname:i,search:l,hash:a}=o.location;return ri("",{pathname:i,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){return typeof s=="string"?s:Ir(s)}return H8(t,r,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q8(){return Math.random().toString(36).substr(2,8)}function Rp(e,t){return{usr:e.state,key:e.key,idx:t}}function ri(e,t,r,o){return r===void 0&&(r=null),Oe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nn(t):t,{state:r,key:t&&t.key||o||q8()})}function Ir(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Nn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function H8(e,t,r,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:i=!1}=o,l=s.history,a=Pe.Pop,d=null,c=u();c==null&&(c=0,l.replaceState(Oe({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function f(){a=Pe.Pop;let N=u(),b=N==null?null:N-c;c=N,d&&d({action:a,location:E.location,delta:b})}function g(N,b){a=Pe.Push;let m=ri(E.location,N,b);r&&r(m,N),c=u()+1;let p=Rp(m,c),v=E.createHref(m);try{l.pushState(p,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(v)}i&&d&&d({action:a,location:E.location,delta:1})}function C(N,b){a=Pe.Replace;let m=ri(E.location,N,b);r&&r(m,N),c=u();let p=Rp(m,c),v=E.createHref(m);l.replaceState(p,"",v),i&&d&&d({action:a,location:E.location,delta:0})}function _(N){let b=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof N=="string"?N:Ir(N);return re(b,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,b)}let E={get action(){return a},get location(){return e(s,l)},listen(N){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(kp,f),d=N,()=>{s.removeEventListener(kp,f),d=null}},createHref(N){return t(s,N)},createURL:_,encodeLocation(N){let b=_(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:g,replace:C,go(N){return l.go(N)}};return E}var Re;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Re||(Re={}));const Y8=new Set(["lazy","caseSensitive","path","id","index","children"]);function W8(e){return e.index===!0}function Kd(e,t,r,o){return r===void 0&&(r=[]),o===void 0&&(o={}),e.map((s,i)=>{let l=[...r,i],a=typeof s.id=="string"?s.id:l.join("-");if(re(s.index!==!0||!s.children,"Cannot specify children on an index route"),re(!o[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),W8(s)){let d=Oe({},s,t(s),{id:a});return o[a]=d,d}else{let d=Oe({},s,t(s),{id:a,children:void 0});return o[a]=d,s.children&&(d.children=Kd(s.children,t,l,o)),d}})}function Co(e,t,r){r===void 0&&(r="/");let o=typeof t=="string"?Nn(t):t,s=En(o.pathname||"/",r);if(s==null)return null;let i=b2(e);G8(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=oj(i[a],ij(s));return l}function Z8(e,t){let{route:r,pathname:o,params:s}=e;return{id:r.id,pathname:o,params:s,data:t[r.id],handle:r.handle}}function b2(e,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let s=(i,l,a)=>{let d={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};d.relativePath.startsWith("/")&&(re(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let c=Sn([o,d.relativePath]),u=r.concat(d);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),b2(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:nj(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,l);else for(let d of v2(i.path))s(i,l,d)}),t}function v2(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,s=r.endsWith("?"),i=r.replace(/\?$/,"");if(o.length===0)return s?[i,""]:[i];let l=v2(o.join("/")),a=[];return a.push(...l.map(d=>d===""?i:[i,d].join("/"))),s&&a.push(...l),a.map(d=>e.startsWith("/")&&d===""?"/":d)}function G8(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:rj(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const K8=/^:[\w-]+$/,Q8=3,X8=2,J8=1,ej=10,tj=-2,Np=e=>e==="*";function nj(e,t){let r=e.split("/"),o=r.length;return r.some(Np)&&(o+=tj),t&&(o+=X8),r.filter(s=>!Np(s)).reduce((s,i)=>s+(K8.test(i)?Q8:i===""?J8:ej),o)}function rj(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function oj(e,t){let{routesMeta:r}=e,o={},s="/",i=[];for(let l=0;l<r.length;++l){let a=r[l],d=l===r.length-1,c=s==="/"?t:t.slice(s.length)||"/",u=Qd({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},c);if(!u)return null;Object.assign(o,u.params);let f=a.route;i.push({params:o,pathname:Sn([s,u.pathname]),pathnameBase:cj(Sn([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=Sn([s,u.pathnameBase]))}return i}function Qd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=sj(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let i=s[0],l=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:o.reduce((c,u,f)=>{let{paramName:g,isOptional:C}=u;if(g==="*"){let E=a[f]||"";l=i.slice(0,i.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[f];return C&&!_?c[g]=void 0:c[g]=lj(_||"",g),c},{}),pathname:i,pathnameBase:l,pattern:e}}function sj(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Mr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,d)=>(o.push({paramName:a,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function ij(e){try{return decodeURI(e)}catch(t){return Mr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lj(e,t){try{return decodeURIComponent(e)}catch(r){return Mr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function En(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function aj(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:s=""}=typeof e=="string"?Nn(e):e;return{pathname:r?r.startsWith("/")?r:dj(r,t):t,search:uj(o),hash:mj(s)}}function dj(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Wa(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Eu(e,t){let r=j2(e);return t?r.map((o,s)=>s===e.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Tu(e,t,r,o){o===void 0&&(o=!1);let s;typeof e=="string"?s=Nn(e):(s=Oe({},e),re(!s.pathname||!s.pathname.includes("?"),Wa("?","pathname","search",s)),re(!s.pathname||!s.pathname.includes("#"),Wa("#","pathname","hash",s)),re(!s.search||!s.search.includes("#"),Wa("#","search","hash",s)));let i=e===""||s.pathname==="",l=i?"/":s.pathname,a;if(l==null)a=r;else{let f=t.length-1;if(!o&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;s.pathname=g.join("/")}a=f>=0?t[f]:"/"}let d=aj(s,a),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),cj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Lu{constructor(t,r,o,s){s===void 0&&(s=!1),this.status=t,this.statusText=r||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}}function y2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const S2=["post","put","patch","delete"],pj=new Set(S2),fj=["get",...S2],hj=new Set(fj),xj=new Set([301,302,303,307,308]),gj=new Set([307,308]),Za={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},bj={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hs={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},F2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vj=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),w2="remix-router-transitions";function jj(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",o=!r;re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let s;if(e.mapRouteProperties)s=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;s=L=>({hasErrorBoundary:w(L)})}else s=vj;let i={},l=Kd(e.routes,s,void 0,i),a,d=e.basename||"/",c=Oe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),u=null,f=new Set,g=null,C=null,_=null,E=e.hydrationData!=null,N=Co(l,e.history.location,d),b=null;if(N==null){let w=Ot(404,{pathname:e.history.location.pathname}),{matches:L,route:O}=zp(l);N=L,b={[O.id]:w}}let m,p=N.some(w=>w.route.lazy),v=N.some(w=>w.route.loader);if(p)m=!1;else if(!v)m=!0;else if(c.v7_partialHydration){let w=e.hydrationData?e.hydrationData.loaderData:null,L=e.hydrationData?e.hydrationData.errors:null;m=N.every(O=>O.route.loader&&O.route.loader.hydrate!==!0&&(w&&w[O.route.id]!==void 0||L&&L[O.route.id]!==void 0))}else m=e.hydrationData!=null;let j,h={historyAction:e.history.action,location:e.history.location,matches:N,initialized:m,navigation:Za,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},F=Pe.Pop,R=!1,k,M=!1,I=new Map,J=null,ee=!1,pe=!1,Fe=[],ve=[],ie=new Map,P=0,B=-1,V=new Map,q=new Set,K=new Map,Qe=new Map,ce=new Set,Ee=new Map,he=new Map,De=!1;function hr(){if(u=e.history.listen(w=>{let{action:L,location:O,delta:z}=w;if(De){De=!1;return}Mr(he.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=Yu({currentLocation:h.location,nextLocation:O,historyAction:L});if(H&&z!=null){De=!0,e.history.go(z*-1),ki(H,{state:"blocked",location:O,proceed(){ki(H,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(z)},reset(){let oe=new Map(h.blockers);oe.set(H,hs),Ue({blockers:oe})}});return}return gr(L,O)}),r){Rj(t,I);let w=()=>Nj(t,I);t.addEventListener("pagehide",w),J=()=>t.removeEventListener("pagehide",w)}return h.initialized||gr(Pe.Pop,h.location,{initialHydration:!0}),j}function Ti(){u&&u(),J&&J(),f.clear(),k&&k.abort(),h.fetchers.forEach((w,L)=>Li(L)),h.blockers.forEach((w,L)=>Hu(L))}function rs(w){return f.add(w),()=>f.delete(w)}function Ue(w,L){L===void 0&&(L={}),h=Oe({},h,w);let O=[],z=[];c.v7_fetcherPersist&&h.fetchers.forEach((H,oe)=>{H.state==="idle"&&(ce.has(oe)?z.push(oe):O.push(oe))}),[...f].forEach(H=>H(h,{deletedFetchers:z,unstable_viewTransitionOpts:L.viewTransitionOpts,unstable_flushSync:L.flushSync===!0})),c.v7_fetcherPersist&&(O.forEach(H=>h.fetchers.delete(H)),z.forEach(H=>Li(H)))}function xr(w,L,O){var z,H;let{flushSync:oe}=O===void 0?{}:O,Q=h.actionData!=null&&h.navigation.formMethod!=null&&Kt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((z=w.state)==null?void 0:z._isRedirect)!==!0,Z;L.actionData?Object.keys(L.actionData).length>0?Z=L.actionData:Z=null:Q?Z=h.actionData:Z=null;let Y=L.loaderData?$p(h.loaderData,L.loaderData,L.matches||[],L.errors):h.loaderData,ae=h.blockers;ae.size>0&&(ae=new Map(ae),ae.forEach((ge,Xe)=>ae.set(Xe,hs)));let qe=R===!0||h.navigation.formMethod!=null&&Kt(h.navigation.formMethod)&&((H=w.state)==null?void 0:H._isRedirect)!==!0;a&&(l=a,a=void 0),ee||F===Pe.Pop||(F===Pe.Push?e.history.push(w,w.state):F===Pe.Replace&&e.history.replace(w,w.state));let ne;if(F===Pe.Pop){let ge=I.get(h.location.pathname);ge&&ge.has(w.pathname)?ne={currentLocation:h.location,nextLocation:w}:I.has(w.pathname)&&(ne={currentLocation:w,nextLocation:h.location})}else if(M){let ge=I.get(h.location.pathname);ge?ge.add(w.pathname):(ge=new Set([w.pathname]),I.set(h.location.pathname,ge)),ne={currentLocation:h.location,nextLocation:w}}Ue(Oe({},L,{actionData:Z,loaderData:Y,historyAction:F,location:w,initialized:!0,navigation:Za,revalidation:"idle",restoreScrollPosition:Zu(w,L.matches||h.matches),preventScrollReset:qe,blockers:ae}),{viewTransitionOpts:ne,flushSync:oe===!0}),F=Pe.Pop,R=!1,M=!1,ee=!1,pe=!1,Fe=[],ve=[]}async function Xr(w,L){if(typeof w=="number"){e.history.go(w);return}let O=Xd(h.location,h.matches,d,c.v7_prependBasename,w,c.v7_relativeSplatPath,L==null?void 0:L.fromRouteId,L==null?void 0:L.relative),{path:z,submission:H,error:oe}=Op(c.v7_normalizeFormMethod,!1,O,L),Q=h.location,Z=ri(h.location,z,L&&L.state);Z=Oe({},Z,e.history.encodeLocation(Z));let Y=L&&L.replace!=null?L.replace:void 0,ae=Pe.Push;Y===!0?ae=Pe.Replace:Y===!1||H!=null&&Kt(H.formMethod)&&H.formAction===h.location.pathname+h.location.search&&(ae=Pe.Replace);let qe=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,ne=(L&&L.unstable_flushSync)===!0,ge=Yu({currentLocation:Q,nextLocation:Z,historyAction:ae});if(ge){ki(ge,{state:"blocked",location:Z,proceed(){ki(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Xr(w,L)},reset(){let Xe=new Map(h.blockers);Xe.set(ge,hs),Ue({blockers:Xe})}});return}return await gr(ae,Z,{submission:H,pendingError:oe,preventScrollReset:qe,replace:L&&L.replace,enableViewTransition:L&&L.unstable_viewTransition,flushSync:ne})}function $x(){if(pa(),Ue({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){gr(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}gr(F||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function gr(w,L,O){k&&k.abort(),k=null,F=w,ee=(O&&O.startUninterruptedRevalidation)===!0,Zx(h.location,h.matches),R=(O&&O.preventScrollReset)===!0,M=(O&&O.enableViewTransition)===!0;let z=a||l,H=O&&O.overrideNavigation,oe=Co(z,L,d),Q=(O&&O.flushSync)===!0;if(!oe){let Xe=Ot(404,{pathname:L.pathname}),{matches:Rt,route:He}=zp(z);fa(),xr(L,{matches:Rt,loaderData:{},errors:{[He.id]:Xe}},{flushSync:Q});return}if(h.initialized&&!pe&&Cj(h.location,L)&&!(O&&O.submission&&Kt(O.submission.formMethod))){xr(L,{matches:oe},{flushSync:Q});return}k=new AbortController;let Z=gs(e.history,L,k.signal,O&&O.submission),Y,ae;if(O&&O.pendingError)ae={[As(oe).route.id]:O.pendingError};else if(O&&O.submission&&Kt(O.submission.formMethod)){let Xe=await zx(Z,L,O.submission,oe,{replace:O.replace,flushSync:Q});if(Xe.shortCircuited)return;Y=Xe.pendingActionData,ae=Xe.pendingActionError,H=Ga(L,O.submission),Q=!1,Z=new Request(Z.url,{signal:Z.signal})}let{shortCircuited:qe,loaderData:ne,errors:ge}=await Bx(Z,L,oe,H,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,O&&O.initialHydration===!0,Q,Y,ae);qe||(k=null,xr(L,Oe({matches:oe},Y?{actionData:Y}:{},{loaderData:ne,errors:ge})))}async function zx(w,L,O,z,H){H===void 0&&(H={}),pa();let oe=Lj(L,O);Ue({navigation:oe},{flushSync:H.flushSync===!0});let Q,Z=ec(z,L);if(!Z.route.action&&!Z.route.lazy)Q={type:Re.error,error:Ot(405,{method:w.method,pathname:L.pathname,routeId:Z.route.id})};else if(Q=await xs("action",w,Z,z,i,s,d,c.v7_relativeSplatPath),w.signal.aborted)return{shortCircuited:!0};if(_r(Q)){let Y;return H&&H.replace!=null?Y=H.replace:Y=Q.location===h.location.pathname+h.location.search,await os(h,Q,{submission:O,replace:Y}),{shortCircuited:!0}}if(_o(Q)){let Y=As(z,Z.route.id);return(H&&H.replace)!==!0&&(F=Pe.Push),{pendingActionData:{},pendingActionError:{[Y.route.id]:Q.error}}}if(Cr(Q))throw Ot(400,{type:"defer-action"});return{pendingActionData:{[Z.route.id]:Q.data}}}async function Bx(w,L,O,z,H,oe,Q,Z,Y,ae,qe){let ne=z||Ga(L,H),ge=H||oe||Up(ne),Xe=a||l,[Rt,He]=Pp(e.history,h,O,ge,L,c.v7_partialHydration&&Z===!0,pe,Fe,ve,ce,K,q,Xe,d,ae,qe);if(fa(xe=>!(O&&O.some(we=>we.route.id===xe))||Rt&&Rt.some(we=>we.route.id===xe)),B=++P,Rt.length===0&&He.length===0){let xe=Uu();return xr(L,Oe({matches:O,loaderData:{},errors:qe||null},ae?{actionData:ae}:{},xe?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(!ee&&(!c.v7_partialHydration||!Z)){He.forEach(we=>{let tn=h.fetchers.get(we.key),Ni=bs(void 0,tn?tn.data:void 0);h.fetchers.set(we.key,Ni)});let xe=ae||h.actionData;Ue(Oe({navigation:ne},xe?Object.keys(xe).length===0?{actionData:null}:{actionData:xe}:{},He.length>0?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Y})}He.forEach(xe=>{ie.has(xe.key)&&An(xe.key),xe.controller&&ie.set(xe.key,xe.controller)});let Jr=()=>He.forEach(xe=>An(xe.key));k&&k.signal.addEventListener("abort",Jr);let{results:ha,loaderResults:eo,fetcherResults:Mn}=await zu(h.matches,O,Rt,He,w);if(w.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Jr),He.forEach(xe=>ie.delete(xe.key));let br=Bp(ha);if(br){if(br.idx>=Rt.length){let xe=He[br.idx-Rt.length].key;q.add(xe)}return await os(h,br.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:xa,errors:ga}=Dp(h,O,Rt,eo,qe,He,Mn,Ee);Ee.forEach((xe,we)=>{xe.subscribe(tn=>{(tn||xe.done)&&Ee.delete(we)})});let ba=Uu(),to=qu(B),Ri=ba||to||He.length>0;return Oe({loaderData:xa,errors:ga},Ri?{fetchers:new Map(h.fetchers)}:{})}function Vx(w,L,O,z){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ie.has(w)&&An(w);let H=(z&&z.unstable_flushSync)===!0,oe=a||l,Q=Xd(h.location,h.matches,d,c.v7_prependBasename,O,c.v7_relativeSplatPath,L,z==null?void 0:z.relative),Z=Co(oe,Q,d);if(!Z){ss(w,L,Ot(404,{pathname:Q}),{flushSync:H});return}let{path:Y,submission:ae,error:qe}=Op(c.v7_normalizeFormMethod,!0,Q,z);if(qe){ss(w,L,qe,{flushSync:H});return}let ne=ec(Z,Y);if(R=(z&&z.preventScrollReset)===!0,ae&&Kt(ae.formMethod)){Ux(w,L,Y,ne,Z,H,ae);return}K.set(w,{routeId:L,path:Y}),qx(w,L,Y,ne,Z,H,ae)}async function Ux(w,L,O,z,H,oe,Q){if(pa(),K.delete(w),!z.route.action&&!z.route.lazy){let we=Ot(405,{method:Q.formMethod,pathname:O,routeId:L});ss(w,L,we,{flushSync:oe});return}let Z=h.fetchers.get(w);Pn(w,kj(Q,Z),{flushSync:oe});let Y=new AbortController,ae=gs(e.history,O,Y.signal,Q);ie.set(w,Y);let qe=P,ne=await xs("action",ae,z,H,i,s,d,c.v7_relativeSplatPath);if(ae.signal.aborted){ie.get(w)===Y&&ie.delete(w);return}if(c.v7_fetcherPersist&&ce.has(w)){if(_r(ne)||_o(ne)){Pn(w,Dn(void 0));return}}else{if(_r(ne))if(ie.delete(w),B>qe){Pn(w,Dn(void 0));return}else return q.add(w),Pn(w,bs(Q)),os(h,ne,{fetcherSubmission:Q});if(_o(ne)){ss(w,L,ne.error);return}}if(Cr(ne))throw Ot(400,{type:"defer-action"});let ge=h.navigation.location||h.location,Xe=gs(e.history,ge,Y.signal),Rt=a||l,He=h.navigation.state!=="idle"?Co(Rt,h.navigation.location,d):h.matches;re(He,"Didn't find any matches after fetcher action");let Jr=++P;V.set(w,Jr);let ha=bs(Q,ne.data);h.fetchers.set(w,ha);let[eo,Mn]=Pp(e.history,h,He,Q,ge,!1,pe,Fe,ve,ce,K,q,Rt,d,{[z.route.id]:ne.data},void 0);Mn.filter(we=>we.key!==w).forEach(we=>{let tn=we.key,Ni=h.fetchers.get(tn),Kx=bs(void 0,Ni?Ni.data:void 0);h.fetchers.set(tn,Kx),ie.has(tn)&&An(tn),we.controller&&ie.set(tn,we.controller)}),Ue({fetchers:new Map(h.fetchers)});let br=()=>Mn.forEach(we=>An(we.key));Y.signal.addEventListener("abort",br);let{results:xa,loaderResults:ga,fetcherResults:ba}=await zu(h.matches,He,eo,Mn,Xe);if(Y.signal.aborted)return;Y.signal.removeEventListener("abort",br),V.delete(w),ie.delete(w),Mn.forEach(we=>ie.delete(we.key));let to=Bp(xa);if(to){if(to.idx>=eo.length){let we=Mn[to.idx-eo.length].key;q.add(we)}return os(h,to.result)}let{loaderData:Ri,errors:xe}=Dp(h,h.matches,eo,ga,void 0,Mn,ba,Ee);if(h.fetchers.has(w)){let we=Dn(ne.data);h.fetchers.set(w,we)}qu(Jr),h.navigation.state==="loading"&&Jr>B?(re(F,"Expected pending action"),k&&k.abort(),xr(h.navigation.location,{matches:He,loaderData:Ri,errors:xe,fetchers:new Map(h.fetchers)})):(Ue({errors:xe,loaderData:$p(h.loaderData,Ri,He,xe),fetchers:new Map(h.fetchers)}),pe=!1)}async function qx(w,L,O,z,H,oe,Q){let Z=h.fetchers.get(w);Pn(w,bs(Q,Z?Z.data:void 0),{flushSync:oe});let Y=new AbortController,ae=gs(e.history,O,Y.signal);ie.set(w,Y);let qe=P,ne=await xs("loader",ae,z,H,i,s,d,c.v7_relativeSplatPath);if(Cr(ne)&&(ne=await E2(ne,ae.signal,!0)||ne),ie.get(w)===Y&&ie.delete(w),!ae.signal.aborted){if(ce.has(w)){Pn(w,Dn(void 0));return}if(_r(ne))if(B>qe){Pn(w,Dn(void 0));return}else{q.add(w),await os(h,ne);return}if(_o(ne)){ss(w,L,ne.error);return}re(!Cr(ne),"Unhandled fetcher deferred data"),Pn(w,Dn(ne.data))}}async function os(w,L,O){let{submission:z,fetcherSubmission:H,replace:oe}=O===void 0?{}:O;L.revalidate&&(pe=!0);let Q=ri(w.location,L.location,{_isRedirect:!0});if(re(Q,"Expected a location on the redirect navigation"),r){let ge=!1;if(L.reloadDocument)ge=!0;else if(F2.test(L.location)){const Xe=e.history.createURL(L.location);ge=Xe.origin!==t.location.origin||En(Xe.pathname,d)==null}if(ge){oe?t.location.replace(L.location):t.location.assign(L.location);return}}k=null;let Z=oe===!0?Pe.Replace:Pe.Push,{formMethod:Y,formAction:ae,formEncType:qe}=w.navigation;!z&&!H&&Y&&ae&&qe&&(z=Up(w.navigation));let ne=z||H;if(gj.has(L.status)&&ne&&Kt(ne.formMethod))await gr(Z,Q,{submission:Oe({},ne,{formAction:L.location}),preventScrollReset:R});else{let ge=Ga(Q,z);await gr(Z,Q,{overrideNavigation:ge,fetcherSubmission:H,preventScrollReset:R})}}async function zu(w,L,O,z,H){let oe=await Promise.all([...O.map(Y=>xs("loader",H,Y,L,i,s,d,c.v7_relativeSplatPath)),...z.map(Y=>Y.matches&&Y.match&&Y.controller?xs("loader",gs(e.history,Y.path,Y.controller.signal),Y.match,Y.matches,i,s,d,c.v7_relativeSplatPath):{type:Re.error,error:Ot(404,{pathname:Y.path})})]),Q=oe.slice(0,O.length),Z=oe.slice(O.length);return await Promise.all([Vp(w,O,Q,Q.map(()=>H.signal),!1,h.loaderData),Vp(w,z.map(Y=>Y.match),Z,z.map(Y=>Y.controller?Y.controller.signal:null),!0)]),{results:oe,loaderResults:Q,fetcherResults:Z}}function pa(){pe=!0,Fe.push(...fa()),K.forEach((w,L)=>{ie.has(L)&&(ve.push(L),An(L))})}function Pn(w,L,O){O===void 0&&(O={}),h.fetchers.set(w,L),Ue({fetchers:new Map(h.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function ss(w,L,O,z){z===void 0&&(z={});let H=As(h.matches,L);Li(w),Ue({errors:{[H.route.id]:O},fetchers:new Map(h.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function Bu(w){return c.v7_fetcherPersist&&(Qe.set(w,(Qe.get(w)||0)+1),ce.has(w)&&ce.delete(w)),h.fetchers.get(w)||bj}function Li(w){let L=h.fetchers.get(w);ie.has(w)&&!(L&&L.state==="loading"&&V.has(w))&&An(w),K.delete(w),V.delete(w),q.delete(w),ce.delete(w),h.fetchers.delete(w)}function Hx(w){if(c.v7_fetcherPersist){let L=(Qe.get(w)||0)-1;L<=0?(Qe.delete(w),ce.add(w)):Qe.set(w,L)}else Li(w);Ue({fetchers:new Map(h.fetchers)})}function An(w){let L=ie.get(w);re(L,"Expected fetch controller: "+w),L.abort(),ie.delete(w)}function Vu(w){for(let L of w){let O=Bu(L),z=Dn(O.data);h.fetchers.set(L,z)}}function Uu(){let w=[],L=!1;for(let O of q){let z=h.fetchers.get(O);re(z,"Expected fetcher: "+O),z.state==="loading"&&(q.delete(O),w.push(O),L=!0)}return Vu(w),L}function qu(w){let L=[];for(let[O,z]of V)if(z<w){let H=h.fetchers.get(O);re(H,"Expected fetcher: "+O),H.state==="loading"&&(An(O),V.delete(O),L.push(O))}return Vu(L),L.length>0}function Yx(w,L){let O=h.blockers.get(w)||hs;return he.get(w)!==L&&he.set(w,L),O}function Hu(w){h.blockers.delete(w),he.delete(w)}function ki(w,L){let O=h.blockers.get(w)||hs;re(O.state==="unblocked"&&L.state==="blocked"||O.state==="blocked"&&L.state==="blocked"||O.state==="blocked"&&L.state==="proceeding"||O.state==="blocked"&&L.state==="unblocked"||O.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+L.state);let z=new Map(h.blockers);z.set(w,L),Ue({blockers:z})}function Yu(w){let{currentLocation:L,nextLocation:O,historyAction:z}=w;if(he.size===0)return;he.size>1&&Mr(!1,"A router only supports one blocker at a time");let H=Array.from(he.entries()),[oe,Q]=H[H.length-1],Z=h.blockers.get(oe);if(!(Z&&Z.state==="proceeding")&&Q({currentLocation:L,nextLocation:O,historyAction:z}))return oe}function fa(w){let L=[];return Ee.forEach((O,z)=>{(!w||w(z))&&(O.cancel(),L.push(z),Ee.delete(z))}),L}function Wx(w,L,O){if(g=w,_=L,C=O||null,!E&&h.navigation===Za){E=!0;let z=Zu(h.location,h.matches);z!=null&&Ue({restoreScrollPosition:z})}return()=>{g=null,_=null,C=null}}function Wu(w,L){return C&&C(w,L.map(z=>Z8(z,h.loaderData)))||w.key}function Zx(w,L){if(g&&_){let O=Wu(w,L);g[O]=_()}}function Zu(w,L){if(g){let O=Wu(w,L),z=g[O];if(typeof z=="number")return z}return null}function Gx(w){i={},a=Kd(w,s,void 0,i)}return j={get basename(){return d},get future(){return c},get state(){return h},get routes(){return l},get window(){return t},initialize:hr,subscribe:rs,enableScrollRestoration:Wx,navigate:Xr,fetch:Vx,revalidate:$x,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Bu,deleteFetcher:Hx,dispose:Ti,getBlocker:Yx,deleteBlocker:Hu,_internalFetchControllers:ie,_internalActiveDeferreds:Ee,_internalSetRoutes:Gx},j}function yj(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Xd(e,t,r,o,s,i,l,a){let d,c;if(l){d=[];for(let f of t)if(d.push(f),f.route.id===l){c=f;break}}else d=t,c=t[t.length-1];let u=Tu(s||".",Eu(d,i),En(e.pathname,r)||e.pathname,a==="path");return s==null&&(u.search=e.search,u.hash=e.hash),(s==null||s===""||s===".")&&c&&c.route.index&&!ku(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o&&r!=="/"&&(u.pathname=u.pathname==="/"?r:Sn([r,u.pathname])),Ir(u)}function Op(e,t,r,o){if(!o||!yj(o))return{path:r};if(o.formMethod&&!Tj(o.formMethod))return{path:r,error:Ot(405,{method:o.formMethod})};let s=()=>({path:r,error:Ot(400,{type:"invalid-body"})}),i=o.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=_2(r);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!Kt(l))return s();let g=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((C,_)=>{let[E,N]=_;return""+C+E+"="+N+`
`},""):String(o.body);return{path:r,submission:{formMethod:l,formAction:a,formEncType:o.formEncType,formData:void 0,json:void 0,text:g}}}else if(o.formEncType==="application/json"){if(!Kt(l))return s();try{let g=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:r,submission:{formMethod:l,formAction:a,formEncType:o.formEncType,formData:void 0,json:g,text:void 0}}}catch{return s()}}}re(typeof FormData=="function","FormData is not available in this environment");let d,c;if(o.formData)d=Jd(o.formData),c=o.formData;else if(o.body instanceof FormData)d=Jd(o.body),c=o.body;else if(o.body instanceof URLSearchParams)d=o.body,c=Ip(d);else if(o.body==null)d=new URLSearchParams,c=new FormData;else try{d=new URLSearchParams(o.body),c=Ip(d)}catch{return s()}let u={formMethod:l,formAction:a,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Kt(u.formMethod))return{path:r,submission:u};let f=Nn(r);return t&&f.search&&ku(f.search)&&d.append("index",""),f.search="?"+d,{path:Ir(f),submission:u}}function Sj(e,t){let r=e;if(t){let o=e.findIndex(s=>s.route.id===t);o>=0&&(r=e.slice(0,o))}return r}function Pp(e,t,r,o,s,i,l,a,d,c,u,f,g,C,_,E){let N=E?Object.values(E)[0]:_?Object.values(_)[0]:void 0,b=e.createURL(t.location),m=e.createURL(s),p=E?Object.keys(E)[0]:void 0,j=Sj(r,p).filter((F,R)=>{let{route:k}=F;if(k.lazy)return!0;if(k.loader==null)return!1;if(i)return k.loader.hydrate?!0:t.loaderData[k.id]===void 0&&(!t.errors||t.errors[k.id]===void 0);if(Fj(t.loaderData,t.matches[R],F)||a.some(J=>J===F.route.id))return!0;let M=t.matches[R],I=F;return Ap(F,Oe({currentUrl:b,currentParams:M.params,nextUrl:m,nextParams:I.params},o,{actionResult:N,defaultShouldRevalidate:l||b.pathname+b.search===m.pathname+m.search||b.search!==m.search||C2(M,I)}))}),h=[];return u.forEach((F,R)=>{if(i||!r.some(ee=>ee.route.id===F.routeId)||c.has(R))return;let k=Co(g,F.path,C);if(!k){h.push({key:R,routeId:F.routeId,path:F.path,matches:null,match:null,controller:null});return}let M=t.fetchers.get(R),I=ec(k,F.path),J=!1;f.has(R)?J=!1:d.includes(R)?J=!0:M&&M.state!=="idle"&&M.data===void 0?J=l:J=Ap(I,Oe({currentUrl:b,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:r[r.length-1].params},o,{actionResult:N,defaultShouldRevalidate:l})),J&&h.push({key:R,routeId:F.routeId,path:F.path,matches:k,match:I,controller:new AbortController})}),[j,h]}function Fj(e,t,r){let o=!t||r.route.id!==t.route.id,s=e[r.route.id]===void 0;return o||s}function C2(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ap(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function Mp(e,t,r){if(!e.lazy)return;let o=await e.lazy();if(!e.lazy)return;let s=r[e.id];re(s,"No route found in manifest");let i={};for(let l in o){let d=s[l]!==void 0&&l!=="hasErrorBoundary";Mr(!d,'Route "'+s.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!d&&!Y8.has(l)&&(i[l]=o[l])}Object.assign(s,i),Object.assign(s,Oe({},t(s),{lazy:void 0}))}async function xs(e,t,r,o,s,i,l,a,d){d===void 0&&(d={});let c,u,f,g=E=>{let N,b=new Promise((m,p)=>N=p);return f=()=>N(),t.signal.addEventListener("abort",f),Promise.race([E({request:t,params:r.params,context:d.requestContext}),b])};try{let E=r.route[e];if(r.route.lazy)if(E){let N,b=await Promise.all([g(E).catch(m=>{N=m}),Mp(r.route,i,s)]);if(N)throw N;u=b[0]}else if(await Mp(r.route,i,s),E=r.route[e],E)u=await g(E);else if(e==="action"){let N=new URL(t.url),b=N.pathname+N.search;throw Ot(405,{method:t.method,pathname:b,routeId:r.route.id})}else return{type:Re.data,data:void 0};else if(E)u=await g(E);else{let N=new URL(t.url),b=N.pathname+N.search;throw Ot(404,{pathname:b})}re(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(E){c=Re.error,u=E}finally{f&&t.signal.removeEventListener("abort",f)}if(Ej(u)){let E=u.status;if(xj.has(E)){let b=u.headers.get("Location");if(re(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!F2.test(b))b=Xd(new URL(t.url),o.slice(0,o.indexOf(r)+1),l,!0,b,a);else if(!d.isStaticRequest){let m=new URL(t.url),p=b.startsWith("//")?new URL(m.protocol+b):new URL(b),v=En(p.pathname,l)!=null;p.origin===m.origin&&v&&(b=p.pathname+p.search+p.hash)}if(d.isStaticRequest)throw u.headers.set("Location",b),u;return{type:Re.redirect,status:E,location:b,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(d.isRouteRequest)throw{type:c===Re.error?Re.error:Re.data,response:u};let N;try{let b=u.headers.get("Content-Type");b&&/\bapplication\/json\b/.test(b)?u.body==null?N=null:N=await u.json():N=await u.text()}catch(b){return{type:Re.error,error:b}}return c===Re.error?{type:c,error:new Lu(E,u.statusText,N),headers:u.headers}:{type:Re.data,data:N,statusCode:u.status,headers:u.headers}}if(c===Re.error)return{type:c,error:u};if(_j(u)){var C,_;return{type:Re.deferred,deferredData:u,statusCode:(C=u.init)==null?void 0:C.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Re.data,data:u}}function gs(e,t,r,o){let s=e.createURL(_2(t)).toString(),i={signal:r};if(o&&Kt(o.formMethod)){let{formMethod:l,formEncType:a}=o;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(o.json)):a==="text/plain"?i.body=o.text:a==="application/x-www-form-urlencoded"&&o.formData?i.body=Jd(o.formData):i.body=o.formData}return new Request(s,i)}function Jd(e){let t=new URLSearchParams;for(let[r,o]of e.entries())t.append(r,typeof o=="string"?o:o.name);return t}function Ip(e){let t=new FormData;for(let[r,o]of e.entries())t.append(r,o);return t}function wj(e,t,r,o,s){let i={},l=null,a,d=!1,c={};return r.forEach((u,f)=>{let g=t[f].route.id;if(re(!_r(u),"Cannot handle redirect results in processLoaderData"),_o(u)){let C=As(e,g),_=u.error;o&&(_=Object.values(o)[0],o=void 0),l=l||{},l[C.route.id]==null&&(l[C.route.id]=_),i[g]=void 0,d||(d=!0,a=y2(u.error)?u.error.status:500),u.headers&&(c[g]=u.headers)}else Cr(u)?(s.set(g,u.deferredData),i[g]=u.deferredData.data):i[g]=u.data,u.statusCode!=null&&u.statusCode!==200&&!d&&(a=u.statusCode),u.headers&&(c[g]=u.headers)}),o&&(l=o,i[Object.keys(o)[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:c}}function Dp(e,t,r,o,s,i,l,a){let{loaderData:d,errors:c}=wj(t,r,o,s,a);for(let u=0;u<i.length;u++){let{key:f,match:g,controller:C}=i[u];re(l!==void 0&&l[u]!==void 0,"Did not find corresponding fetcher result");let _=l[u];if(!(C&&C.signal.aborted))if(_o(_)){let E=As(e.matches,g==null?void 0:g.route.id);c&&c[E.route.id]||(c=Oe({},c,{[E.route.id]:_.error})),e.fetchers.delete(f)}else if(_r(_))re(!1,"Unhandled fetcher revalidation redirect");else if(Cr(_))re(!1,"Unhandled fetcher deferred data");else{let E=Dn(_.data);e.fetchers.set(f,E)}}return{loaderData:d,errors:c}}function $p(e,t,r,o){let s=Oe({},t);for(let i of r){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(s[l]=t[l]):e[l]!==void 0&&i.route.loader&&(s[l]=e[l]),o&&o.hasOwnProperty(l))break}return s}function As(e,t){return(t?e.slice(0,e.findIndex(o=>o.route.id===t)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function zp(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ot(e,t){let{pathname:r,routeId:o,method:s,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",s&&r&&o?a="You made a "+s+' request to "'+r+'" but '+('did not provide a `loader` for route "'+o+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+o+'" does not match URL "'+r+'"'):e===404?(l="Not Found",a='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",s&&r&&o?a="You made a "+s.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+o+'", ')+"so there is no way to handle the request.":s&&(a='Invalid request method "'+s.toUpperCase()+'"')),new Lu(e||500,l,new Error(a),!0)}function Bp(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(_r(r))return{result:r,idx:t}}}function _2(e){let t=typeof e=="string"?Nn(e):e;return Ir(Oe({},t,{hash:""}))}function Cj(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Cr(e){return e.type===Re.deferred}function _o(e){return e.type===Re.error}function _r(e){return(e&&e.type)===Re.redirect}function _j(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Ej(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Tj(e){return hj.has(e.toLowerCase())}function Kt(e){return pj.has(e.toLowerCase())}async function Vp(e,t,r,o,s,i){for(let l=0;l<r.length;l++){let a=r[l],d=t[l];if(!d)continue;let c=e.find(f=>f.route.id===d.route.id),u=c!=null&&!C2(c,d)&&(i&&i[d.route.id])!==void 0;if(Cr(a)&&(s||u)){let f=o[l];re(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await E2(a,f,s).then(g=>{g&&(r[l]=g||r[l])})}}}async function E2(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:Re.data,data:e.deferredData.unwrappedData}}catch(s){return{type:Re.error,error:s}}return{type:Re.data,data:e.deferredData.data}}}function ku(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ec(e,t){let r=typeof t=="string"?Nn(t).search:t.search;if(e[e.length-1].route.index&&ku(r||""))return e[e.length-1];let o=j2(e);return o[o.length-1]}function Up(e){let{formMethod:t,formAction:r,formEncType:o,text:s,formData:i,json:l}=e;if(!(!t||!r||!o)){if(s!=null)return{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:void 0,text:s};if(i!=null)return{formMethod:t,formAction:r,formEncType:o,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:l,text:void 0}}}function Ga(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Lj(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function bs(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function kj(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Dn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Rj(e,t){try{let r=e.sessionStorage.getItem(w2);if(r){let o=JSON.parse(r);for(let[s,i]of Object.entries(o||{}))i&&Array.isArray(i)&&t.set(s,new Set(i||[]))}}catch{}}function Nj(e,t){if(t.size>0){let r={};for(let[o,s]of t)r[o]=[...s];try{e.sessionStorage.setItem(w2,JSON.stringify(r))}catch(o){Mr(!1,"Failed to save applied view transitions in sessionStorage ("+o+").")}}}/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},oi.apply(this,arguments)}const ji=T.createContext(null),Ru=T.createContext(null),pr=T.createContext(null),ma=T.createContext(null),fr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),T2=T.createContext(null);function Oj(e,t){let{relative:r}=t===void 0?{}:t;yi()||re(!1);let{basename:o,navigator:s}=T.useContext(pr),{hash:i,pathname:l,search:a}=Si(e,{relative:r}),d=l;return o!=="/"&&(d=l==="/"?o:Sn([o,l])),s.createHref({pathname:d,search:a,hash:i})}function yi(){return T.useContext(ma)!=null}function Gr(){return yi()||re(!1),T.useContext(ma).location}function L2(e){T.useContext(pr).static||T.useLayoutEffect(e)}function Pj(){let{isDataRoute:e}=T.useContext(fr);return e?Zj():Aj()}function Aj(){yi()||re(!1);let e=T.useContext(ji),{basename:t,future:r,navigator:o}=T.useContext(pr),{matches:s}=T.useContext(fr),{pathname:i}=Gr(),l=JSON.stringify(Eu(s,r.v7_relativeSplatPath)),a=T.useRef(!1);return L2(()=>{a.current=!0}),T.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){o.go(c);return}let f=Tu(c,JSON.parse(l),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Sn([t,f.pathname])),(u.replace?o.replace:o.push)(f,u.state,u)},[t,o,l,i,e])}const Mj=T.createContext(null);function Ij(e){let t=T.useContext(fr).outlet;return t&&T.createElement(Mj.Provider,{value:e},t)}function Si(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=T.useContext(pr),{matches:s}=T.useContext(fr),{pathname:i}=Gr(),l=JSON.stringify(Eu(s,o.v7_relativeSplatPath));return T.useMemo(()=>Tu(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function Dj(e,t,r,o){yi()||re(!1);let{navigator:s}=T.useContext(pr),{matches:i}=T.useContext(fr),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let c=Gr(),u;if(t){var f;let N=typeof t=="string"?Nn(t):t;d==="/"||(f=N.pathname)!=null&&f.startsWith(d)||re(!1),u=N}else u=c;let g=u.pathname||"/",C=d==="/"?g:g.slice(d.length)||"/",_=Co(e,{pathname:C}),E=Uj(_&&_.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Sn([d,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?d:Sn([d,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,r,o);return t&&E?T.createElement(ma.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pe.Pop}},E):E}function $j(){let e=Wj(),t=y2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),r?T.createElement("pre",{style:s},r):null,null)}const zj=T.createElement($j,null);class Bj extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?T.createElement(fr.Provider,{value:this.props.routeContext},T.createElement(T2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vj(e){let{routeContext:t,match:r,children:o}=e,s=T.useContext(ji);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(fr.Provider,{value:t},o)}function Uj(e,t,r,o){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let l=e,a=(s=r)==null?void 0:s.errors;if(a!=null){let u=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));u>=0||re(!1),l=l.slice(0,Math.min(l.length,u+1))}let d=!1,c=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<l.length;u++){let f=l[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:g,errors:C}=r,_=f.route.loader&&g[f.route.id]===void 0&&(!C||C[f.route.id]===void 0);if(f.route.lazy||_){d=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((u,f,g)=>{let C,_=!1,E=null,N=null;r&&(C=a&&f.route.id?a[f.route.id]:void 0,E=f.route.errorElement||zj,d&&(c<0&&g===0?(Gj("route-fallback",!1),_=!0,N=null):c===g&&(_=!0,N=f.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,g+1)),m=()=>{let p;return C?p=E:_?p=N:f.route.Component?p=T.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=u,T.createElement(Vj,{match:f,routeContext:{outlet:u,matches:b,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?T.createElement(Bj,{location:r.location,revalidation:r.revalidation,component:E,error:C,children:m(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):m()},null)}var k2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(k2||{}),zl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zl||{});function qj(e){let t=T.useContext(ji);return t||re(!1),t}function Hj(e){let t=T.useContext(Ru);return t||re(!1),t}function Yj(e){let t=T.useContext(fr);return t||re(!1),t}function R2(e){let t=Yj(),r=t.matches[t.matches.length-1];return r.route.id||re(!1),r.route.id}function Wj(){var e;let t=T.useContext(T2),r=Hj(zl.UseRouteError),o=R2(zl.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function Zj(){let{router:e}=qj(k2.UseNavigateStable),t=R2(zl.UseNavigateStable),r=T.useRef(!1);return L2(()=>{r.current=!0}),T.useCallback(function(s,i){i===void 0&&(i={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,oi({fromRouteId:t},i)))},[e,t])}const qp={};function Gj(e,t,r){!t&&!qp[e]&&(qp[e]=!0)}function _e(e){return Ij(e.context)}function Kj(e){let{basename:t="/",children:r=null,location:o,navigationType:s=Pe.Pop,navigator:i,static:l=!1,future:a}=e;yi()&&re(!1);let d=t.replace(/^\/*/,"/"),c=T.useMemo(()=>({basename:d,navigator:i,static:l,future:oi({v7_relativeSplatPath:!1},a)}),[d,a,i,l]);typeof o=="string"&&(o=Nn(o));let{pathname:u="/",search:f="",hash:g="",state:C=null,key:_="default"}=o,E=T.useMemo(()=>{let N=En(u,d);return N==null?null:{location:{pathname:N,search:f,hash:g,state:C,key:_},navigationType:s}},[d,u,f,g,C,_,s]);return E==null?null:T.createElement(pr.Provider,{value:c},T.createElement(ma.Provider,{children:r,value:E}))}new Promise(()=>{});function Qj(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:T.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Ho.apply(this,arguments)}function N2(e,t){if(e==null)return{};var r={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function Xj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jj(e,t){return e.button===0&&(!t||t==="_self")&&!Xj(e)}const e7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],t7=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],n7="6";try{window.__reactRouterVersion=n7}catch{}function r7(e,t){return jj({basename:t==null?void 0:t.basename,future:Ho({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:U8({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||o7(),routes:e,mapRouteProperties:Qj,window:t==null?void 0:t.window}).initialize()}function o7(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ho({},t,{errors:s7(t.errors)})),t}function s7(e){if(!e)return null;let t=Object.entries(e),r={};for(let[o,s]of t)if(s&&s.__type==="RouteErrorResponse")r[o]=new Lu(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let i=window[s.__subType];if(typeof i=="function")try{let l=new i(s.message);l.stack="",r[o]=l}catch{}}if(r[o]==null){let i=new Error(s.message);i.stack="",r[o]=i}}else r[o]=s;return r}const O2=T.createContext({isTransitioning:!1}),i7=T.createContext(new Map),l7="startTransition",Hp=f3[l7],a7="flushSync",Yp=C0[a7];function d7(e){Hp?Hp(e):e()}function vs(e){Yp?Yp(e):e()}class c7{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",r(o))}})}}function u7(e){let{fallbackElement:t,router:r,future:o}=e,[s,i]=T.useState(r.state),[l,a]=T.useState(),[d,c]=T.useState({isTransitioning:!1}),[u,f]=T.useState(),[g,C]=T.useState(),[_,E]=T.useState(),N=T.useRef(new Map),{v7_startTransition:b}=o||{},m=T.useCallback(F=>{b?d7(F):F()},[b]),p=T.useCallback((F,R)=>{let{deletedFetchers:k,unstable_flushSync:M,unstable_viewTransitionOpts:I}=R;k.forEach(ee=>N.current.delete(ee)),F.fetchers.forEach((ee,pe)=>{ee.data!==void 0&&N.current.set(pe,ee.data)});let J=r.window==null||typeof r.window.document.startViewTransition!="function";if(!I||J){M?vs(()=>i(F)):m(()=>i(F));return}if(M){vs(()=>{g&&(u&&u.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:I.currentLocation,nextLocation:I.nextLocation})});let ee=r.window.document.startViewTransition(()=>{vs(()=>i(F))});ee.finished.finally(()=>{vs(()=>{f(void 0),C(void 0),a(void 0),c({isTransitioning:!1})})}),vs(()=>C(ee));return}g?(u&&u.resolve(),g.skipTransition(),E({state:F,currentLocation:I.currentLocation,nextLocation:I.nextLocation})):(a(F),c({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}))},[r.window,g,u,N,m]);T.useLayoutEffect(()=>r.subscribe(p),[r,p]),T.useEffect(()=>{d.isTransitioning&&!d.flushSync&&f(new c7)},[d]),T.useEffect(()=>{if(u&&l&&r.window){let F=l,R=u.promise,k=r.window.document.startViewTransition(async()=>{m(()=>i(F)),await R});k.finished.finally(()=>{f(void 0),C(void 0),a(void 0),c({isTransitioning:!1})}),C(k)}},[m,l,u,r.window]),T.useEffect(()=>{u&&l&&s.location.key===l.location.key&&u.resolve()},[u,g,s.location,l]),T.useEffect(()=>{!d.isTransitioning&&_&&(a(_.state),c({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),E(void 0))},[d.isTransitioning,_]),T.useEffect(()=>{},[]);let v=T.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:F=>r.navigate(F),push:(F,R,k)=>r.navigate(F,{state:R,preventScrollReset:k==null?void 0:k.preventScrollReset}),replace:(F,R,k)=>r.navigate(F,{replace:!0,state:R,preventScrollReset:k==null?void 0:k.preventScrollReset})}),[r]),j=r.basename||"/",h=T.useMemo(()=>({router:r,navigator:v,static:!1,basename:j}),[r,v,j]);return T.createElement(T.Fragment,null,T.createElement(ji.Provider,{value:h},T.createElement(Ru.Provider,{value:s},T.createElement(i7.Provider,{value:N.current},T.createElement(O2.Provider,{value:d},T.createElement(Kj,{basename:j,location:s.location,navigationType:s.historyAction,navigator:v,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},s.initialized||r.future.v7_partialHydration?T.createElement(m7,{routes:r.routes,future:r.future,state:s}):t))))),null)}function m7(e){let{routes:t,future:r,state:o}=e;return Dj(t,void 0,o,r)}const p7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h7=T.forwardRef(function(t,r){let{onClick:o,relative:s,reloadDocument:i,replace:l,state:a,target:d,to:c,preventScrollReset:u,unstable_viewTransition:f}=t,g=N2(t,e7),{basename:C}=T.useContext(pr),_,E=!1;if(typeof c=="string"&&f7.test(c)&&(_=c,p7))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),j=En(v.pathname,C);v.origin===p.origin&&j!=null?c=j+v.search+v.hash:E=!0}catch{}let N=Oj(c,{relative:s}),b=g7(c,{replace:l,state:a,target:d,preventScrollReset:u,relative:s,unstable_viewTransition:f});function m(p){o&&o(p),p.defaultPrevented||b(p)}return T.createElement("a",Ho({},g,{href:_||N,onClick:E||i?o:m,ref:r,target:d}))}),P2=T.forwardRef(function(t,r){let{"aria-current":o="page",caseSensitive:s=!1,className:i="",end:l=!1,style:a,to:d,unstable_viewTransition:c,children:u}=t,f=N2(t,t7),g=Si(d,{relative:f.relative}),C=Gr(),_=T.useContext(Ru),{navigator:E,basename:N}=T.useContext(pr),b=_!=null&&b7(g)&&c===!0,m=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,p=C.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(p=p.toLowerCase(),v=v?v.toLowerCase():null,m=m.toLowerCase()),v&&N&&(v=En(v,N)||v);const j=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let h=p===m||!l&&p.startsWith(m)&&p.charAt(j)==="/",F=v!=null&&(v===m||!l&&v.startsWith(m)&&v.charAt(m.length)==="/"),R={isActive:h,isPending:F,isTransitioning:b},k=h?o:void 0,M;typeof i=="function"?M=i(R):M=[i,h?"active":null,F?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(R):a;return T.createElement(h7,Ho({},f,{"aria-current":k,className:M,ref:r,style:I,to:d,unstable_viewTransition:c}),typeof u=="function"?u(R):u)});var tc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tc||(tc={}));var Wp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));function x7(e){let t=T.useContext(ji);return t||re(!1),t}function g7(e,t){let{target:r,replace:o,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,d=Pj(),c=Gr(),u=Si(e,{relative:l});return T.useCallback(f=>{if(Jj(f,r)){f.preventDefault();let g=o!==void 0?o:Ir(c)===Ir(u);d(e,{replace:g,state:s,preventScrollReset:i,relative:l,unstable_viewTransition:a})}},[c,d,u,o,s,r,e,i,l,a])}function b7(e,t){t===void 0&&(t={});let r=T.useContext(O2);r==null&&re(!1);let{basename:o}=x7(tc.useViewTransitionState),s=Si(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=En(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=En(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Qd(s.pathname,l)!=null||Qd(s.pathname,i)!=null}const Fi=({to:e,className:t="",exact:r,children:o,text:s,onClick:i,label:l})=>n.jsx(P2,{to:e,onClick:i,end:r&&"end",className:({isActive:a})=>`${t} ${a?"active":""}`,"aria-label":l,children:o||s}),v7=({prev:e,next:t})=>n.jsxs("div",{className:"flex space",children:[n.jsx(Zp,{caption:"Previous",item:e,className:"prev"}),n.jsx(Zp,{caption:"Next",item:t,className:"next"})]}),Zp=({caption:e,item:t,className:r=""})=>t?n.jsxs(Fi,{to:t.to,className:`prev-next-link ${r}`,children:[n.jsx("h4",{children:e}),n.jsx("div",{children:t.text})]}):n.jsx("div",{}),Ke=({menu:e})=>{const{pathname:t}=Gr(),r=e.items.flatMap(l=>l.items||l),o=r.findIndex(l=>l.to===t);if(o<0)return null;const s=o>0?r[o-1]:null,i=o<r.length-1?r[o+1]:null;return n.jsx(v7,{prev:s,next:i})},j7={title:"Getting Started",url:"/getting-started",items:[{to:"/getting-started/installation",text:"Installation"},{to:"/getting-started/why-use-it",text:"Why Use It?"}]},Nu={title:"Tutorial",url:"/tutorial",items:[{to:"/tutorial/basic-form",text:"A Basic Form"},{to:"/tutorial/field-validation",text:"Field Validation"},{to:"/tutorial/form-validation",text:"Form Validation"},{to:"/tutorial/form-submission",text:"Form Submission"},{to:"/tutorial/submission-response",text:"Submission Response"},{to:"/tutorial/submission-errors",text:"Submission Errors"},{to:"/tutorial/complete-registration",text:"Registration Form"},{to:"/tutorial/edit-form",text:"Edit Form"},{to:"/tutorial/debugging",text:"Debugging"},{to:"/tutorial/headless-fields",text:"Headless Fields"}]},A2={title:"Form",url:"/form",items:[{to:"/form",code:"Form",exact:!0},{section:"Properties",items:[{to:"/form/properties/fields",code:"fields"},{to:"/form/properties/values",code:"values"},{to:"/form/properties/hidden",code:"hidden"},{to:"/form/properties/children",code:"children"},{to:"/form/properties/debug",code:"debug"},{to:"/form/properties/resetOnSuccess",code:"resetOnSuccess"},{to:"/form/properties/unvalidateOnSuccess",code:"unvalidateOnSuccess"}]},{section:"Validation",items:[{to:"/form/validation/validate",code:"validate"},{to:"/form/validation/validateOnBlur",code:"validateOnBlur"},{to:"/form/validation/validateOnChange",code:"validateOnChange"},{to:"/form/validation/validateOnInvalid",code:"validateOnInvalid"},{to:"/form/validation/minValidateLength",code:"minValidateLength"},{to:"/form/validation/showRequired",code:"showRequired"},{to:"/form/validation/requiredLabel",code:"requiredLabel"},{to:"/form/validation/requiredMessage",code:"requiredMessage"},{to:"/form/validation/showOptional",code:"showOptional"},{to:"/form/validation/optionalLabel",code:"optionalLabel"},{to:"/form/validation/focusInvalidField",code:"focusInvalidField"}]},{section:"Events",items:[{to:"/form/events/onLoad",code:"onLoad"},{to:"/form/events/onReset",code:"onReset"},{to:"/form/events/onSubmit",code:"onSubmit"},{to:"/form/events/onSuccess",code:"onSuccess"},{to:"/form/events/onError",code:"onError"}]},{section:"Functions",items:[{to:"/form/functions/reset",code:"reset"},{to:"/form/functions/unvalidate",code:"unvalidate"},{to:"/form/functions/setFocus",code:"setFocus"},{to:"/form/functions/setValues",code:"setValues"}]}]},M2={title:"Field",url:"/field",items:[{to:"/field",code:"Field",exact:!0},{section:"Properties",items:[{to:"/field/properties/name",code:"name"},{to:"/field/properties/label",code:"label"},{to:"/field/properties/type",code:"type"},{to:"/field/properties/placeholder",code:"placeholder"},{to:"/field/properties/default",code:"default"},{to:"/field/properties/help",code:"help"},{to:"/field/properties/prefix",code:"prefix"},{to:"/field/properties/suffix",code:"suffix"},{to:"/field/properties/className",code:"className"},{to:"/field/properties/children",code:"children"}]},{section:"Validation",items:[{to:"/field/validation/required",code:"required"},{to:"/field/validation/showRequired",code:"showRequired"},{to:"/field/validation/requiredLabel",code:"requiredLabel"},{to:"/field/validation/requiredMessage",code:"requiredMessage"},{to:"/field/validation/showOptional",code:"showOptional"},{to:"/field/validation/optionalLabel",code:"optionalLabel"},{to:"/field/validation/prepareValue",code:"prepareValue"},{to:"/field/validation/validate",code:"validate"},{to:"/field/validation/validateOnBlur",code:"validateOnBlur"},{to:"/field/validation/validateOnChange",code:"validateOnChange"},{to:"/field/validation/validateOnInvalid",code:"validateOnInvalid"},{to:"/field/validation/minValidateLength",code:"minValidateLength"}]},{section:"Events",items:[{to:"/field/events/onFocus",code:"onFocus"},{to:"/field/events/onBlur",code:"onBlur"},{to:"/field/events/onChange",code:"onChange"},{to:"/field/events/onValid",code:"onValid"},{to:"/field/events/onInvalid",code:"onInvalid"},{to:"/field/events/onLoad",code:"onLoad"}]},{section:"Functions",items:[{to:"/field/functions/setFocus",code:"setFocus"},{to:"/field/functions/setValue",code:"setValue"},{to:"/field/functions/setValid",code:"setValid"},{to:"/field/functions/setInvalid",code:"setInvalid"},{to:"/field/functions/reset",code:"reset"}]},{section:"Components",items:[{to:"/field/components/Layout",code:"Layout"},{to:"/field/components/Label",code:"Label"},{to:"/field/components/Input",code:"Input"},{to:"/field/components/Message",code:"Message"},{to:"/field/components/UseField",code:"UseField"}]}]},I2={title:"Fields",url:"/fields",items:[{to:"/fields",code:"Fields",exact:!0},{section:"Properties",items:[{to:"/fields/properties/names",code:"names"},{to:"/fields/properties/className",code:"className"},{to:"/fields/properties/grid",code:"grid"},{to:"/fields/properties/gap",code:"gap"},{to:"/fields/properties/stack",code:"stack"}]}]},D2={title:"Fieldset",url:"/fieldset",items:[{to:"/fieldset",code:"Fieldset",exact:!0},{section:"Properties",items:[{to:"/fieldset/properties/legend",code:"legend"},{to:"/fieldset/properties/fields",code:"fields"},{to:"/fieldset/properties/className",code:"className"}]}]},$2={title:"Submit",url:"/submit",items:[{to:"/submit",code:"Submit",exact:!0},{section:"Properties",items:[{to:"/submit/properties/text",code:"text"},{to:"/submit/properties/className",code:"className"},{to:"/submit/properties/onClick",code:"onClick"}]}]},z2={title:"Reset",url:"/reset",items:[{to:"/reset",code:"Reset",exact:!0},{section:"Properties",items:[{to:"/reset/properties/text",code:"text"},{to:"/reset/properties/className",code:"className"},{to:"/reset/properties/onClick",code:"onClick"}]}]},B2={title:"ResetSubmit",url:"/reset-submit",items:[{to:"/reset-submit",code:"ResetSubmit",exact:!0},{section:"Properties",items:[{to:"/reset-submit/properties/gap",code:"gap"},{to:"/reset-submit/properties/space",code:"space"},{to:"/reset-submit/properties/reset",code:"reset"},{to:"/reset-submit/properties/submit",code:"submit"},{to:"/reset-submit/properties/className",code:"className"}]}]},V2={title:"Errors",url:"/errors",items:[{to:"/errors",code:"Errors",exact:!0},{section:"Properties",items:[{to:"/errors/properties/fieldErrors",code:"fieldErrors"},{to:"/errors/properties/title",code:"title"},{to:"/errors/properties/prompt",code:"prompt"}]}]},U2={title:"Status",url:"/status",items:[{to:"/status",code:"Status",exact:!0},{section:"Properties",items:[{to:"/status/properties/changed",code:"changed"},{to:"/status/properties/validating",code:"validating"},{to:"/status/properties/valid",code:"valid"},{to:"/status/properties/invalid",code:"invalid"},{to:"/status/properties/submitting",code:"submitting"},{to:"/status/properties/submitted",code:"submitted"},{to:"/status/properties/any",code:"any"}]}]},q2={title:"Debug",url:"/debug",items:[{to:"/debug",code:"Debug",exact:!0},{section:"Properties",items:[{to:"/debug/properties/status",code:"status"},{to:"/debug/properties/values",code:"values"},{to:"/debug/properties/title",code:"title"},{to:"/debug/properties/valuesTitle",code:"valuesTitle"},{to:"/debug/properties/statusTitle",code:"statusTitle"},{to:"/debug/properties/color",code:"color"},{to:"/debug/properties/className",code:"className"}]}]},H2={title:"text",url:"/text",items:[{to:"/text",code:"text",exact:!0},{section:"Properties",items:[{to:"/text/properties/inline",code:"inline"},{to:"/text/properties/size",code:"size"},{to:"/text/properties/type",code:"type"},{to:"/text/properties/placeholder",code:"placeholder"}]}]},Y2={title:"textarea",url:"/textarea",items:[{to:"/textarea",code:"textarea",exact:!0},{section:"Properties",items:[{to:"/textarea/properties/inline",code:"inline"},{to:"/textarea/properties/cols",code:"cols"},{to:"/textarea/properties/rows",code:"rows"},{to:"/textarea/properties/placeholder",code:"placeholder"}]}]},W2={title:"checkbox",url:"/checkbox",items:[{to:"/checkbox",code:"checkbox",exact:!0},{section:"Properties",items:[{to:"/checkbox/properties/text",code:"text"},{to:"/checkbox/properties/border",code:"border"},{to:"/checkbox/properties/inline",code:"inline"},{to:"/checkbox/properties/inputClass",code:"inputClass"}]}]},Z2={title:"radio",url:"/radio",items:[{to:"/radio",code:"radio",exact:!0},{section:"Properties",items:[{to:"/radio/properties/options",code:"options"},{to:"/radio/properties/inline",code:"inline"},{to:"/radio/properties/border",code:"border"},{to:"/radio/properties/inputClass",code:"inputClass"},{to:"/radio/properties/optionClass",code:"optionClass"},{to:"/radio/properties/optionsClass",code:"optionsClass"}]}]},G2={title:"select",url:"/select",items:[{to:"/select",code:"select",exact:!0},{section:"Properties",items:[{to:"/select/properties/options",code:"options"},{to:"/select/properties/inline",code:"inline"},{to:"/select/properties/placeholder",code:"placeholder"}]}]},K2={title:"Utilities",url:"/utilities",items:[{to:"/utils/addInputType",code:"addInputType()"}]},Q2=()=>n.jsx(Ke,{menu:W2}),y7=(e,t)=>(r={})=>n.jsx(Fi,{to:e,text:t,...r}),D=(e,t)=>(r={})=>n.jsx(Fi,{to:e,text:n.jsx("code",{children:t}),...r}),ue=D("/form","Form"),nc=D("/form/properties/values","values"),Ct=D("/form/properties/fields","fields"),X2=D("/form/properties/hidden","hidden"),rc=D("/form/properties/debug","debug"),J2=D("/form/properties/resetOnSuccess","resetOnSuccess"),ex=D("/form/properties/unvalidateOnSuccess","unvalidateOnSuccess"),S7=D("/form/validation/validate","validate"),F7=D("/form/events/onLoad","onLoad"),un=D("/form/events/onSubmit","onSubmit"),si=D("/form/events/onSuccess","onSuccess"),Ao=D("/form/events/onError","onError"),w7=D("/form/events/onReset","onReset"),oc=D("/form/functions/setFocus","setFocus"),Gp=D("/form/functions/setValues","setValues"),Ou=D("/form/functions/reset","reset"),tx=D("/form/functions/unvalidate","unvalidate"),X=D("/field","Field"),Dr=D("/field/properties/name","name"),Tn=D("/field/properties/type","type"),Yo=D("/field/properties/label","label"),C7=D("/field/properties/default","default"),nx=D("/field/properties/prefix","prefix"),rx=D("/field/properties/suffix","suffix"),_7=D("/field/properties/className","className"),E7=D("/field/properties/children","children"),Be=D("/field/validation/required","required"),Ln=D("/field/validation/showRequired","showRequired"),Jo=D("/field/validation/requiredLabel","requiredLabel"),Pu=D("/field/validation/requiredMessage","requiredMessage"),$r=D("/field/validation/showOptional","showOptional"),ii=D("/field/validation/optionalLabel","optionalLabel"),zt=D("/field/validation/validate","validate"),Bt=D("/field/validation/validateOnBlur","validateOnBlur"),Vt=D("/field/validation/validateOnChange","validateOnChange"),T7=D("/field/validation/validateOnInvalid","validateOnInvalid"),li=D("/field/validation/minValidateLength","minValidateLength"),rr=D("/field/events/onFocus","onFocus"),Kr=D("/field/events/onBlur","onBlur"),or=D("/field/events/onChange","onChange"),es=D("/field/events/onValid","onValid"),ts=D("/field/events/onInvalid","onInvalid"),wi=D("/field/events/onLoad","onLoad"),L7=D("/field/functions/setValid","setValid"),k7=D("/field/functions/setInvalid","setInvalid"),R7=D("/field/functions/reset","reset"),Wo=D("/field/components/Layout","Layout"),N7=D("/field/components/Label","Label"),sc=D("/field/components/Input","Input"),ox=D("/field/components/Message","Message"),Bl=D("/fields","Fields"),O7=D("/fields/properties/names","names"),P7=D("/fields/properties/grid","grid"),Kp=D("/fieldset","Fieldset"),A7=D("/fieldset/properties/legend","legend"),Mo=D("/errors","Errors"),sx=D("/errors/properties/fieldErrors","fieldErrors"),zr=D("/debug","Debug"),ix=D("/reset","Reset"),M7=D("/reset/properties/gap","gap"),I7=D("/reset/properties/space","space"),Au=D("/submit","Submit"),ic=D("/text","Text"),D7=D("/text/properties/inline","inline"),$7=D("/text/properties/size","size"),z7=D("/textarea","TextArea"),B7=D("/textarea/properties/inline","inline"),V7=D("/textarea/properties/cols","cols"),lx=D("/checkbox","Checkbox"),U7=D("/checkbox/properties/text","text"),ax=D("/radio","Radio"),q7=D("/radio/properties/options","options"),H7=D("/radio/properties/optionClass","optionClass"),Y7=D("/radio/properties/optionsClass","optionsClass"),dx=D("/select","Select"),W7=D("/select/properties/options","options"),Z7=D("/input/hidden","Hidden"),G7=y7("/input","Input Types"),K7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"checkbox"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"checkbox"})," for a checkbox. Use the ",n.jsx("code",{children:"text"})," property to define any text that you want to appear alongside the checkbox.  The ",n.jsx("code",{children:"label"})," is optional on all fields, so depending on what your checkbox text says, you might want to leave it out."]}),n.jsx(y,{Component:B8,code:V8,caption:"checkbox",expand:!0}),n.jsx(Q2,{})]}),Q7=Object.freeze(Object.defineProperty({__proto__:null,default:K7},Symbol.toStringTag,{value:"Module"})),X7=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Checkbox Properties"}),n.jsx(_e,{}),n.jsx(Q2,{})]}),J7=Object.freeze(Object.defineProperty({__proto__:null,default:X7},Symbol.toStringTag,{value:"Module"})),ey=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",type:"checkbox",text:"Checkbox with a border",border:!0}),n.jsx(x,{name:"two",type:"checkbox",text:"Inline checkbox with border",border:!0,inline:!0})]}),ty=`import React from 'react'
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

export default Border`,ny=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"border"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"border"})," property to add a border around the checkbox field."]}),n.jsx(y,{Component:ey,code:ty,caption:"border",undent:2,expand:!0})]}),ry=Object.freeze(Object.defineProperty({__proto__:null,default:ny},Symbol.toStringTag,{value:"Module"})),oy=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",type:"checkbox",text:"Inline checkbox",inline:!0}),n.jsx(x,{name:"two",type:"checkbox",text:"Inline checkbox with border",border:!0,inline:!0})]}),sy=`import React from 'react'
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

export default Inline`,iy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width."]}),n.jsx(y,{Component:oy,code:sy,caption:"inline",undent:2,expand:!0})]}),ly=Object.freeze(Object.defineProperty({__proto__:null,default:iy},Symbol.toStringTag,{value:"Module"})),ay=()=>n.jsx(S,{children:n.jsx(x,{name:"one",type:"checkbox",text:"Big old checkbox",inputClass:"larger"})}),dy=`import React from 'react'
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

export default InputClass`,cy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inputClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"inputClass"})," property can be used to add a CSS class to the checkbox input."]}),n.jsx(y,{Component:ay,code:dy,caption:"inputClass",undent:2,expand:!0})]}),uy=Object.freeze(Object.defineProperty({__proto__:null,default:cy},Symbol.toStringTag,{value:"Module"})),my=()=>n.jsx(S,{children:n.jsx(x,{name:"one",type:"checkbox",text:"Checkbox with some text"})}),py=`import React from 'react'
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

export default Text`,fy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"text"})," property to add some text to be displayed alongside the checkbox."]}),n.jsx(y,{Component:my,code:py,caption:"text",undent:2,expand:!0})]}),hy=Object.freeze(Object.defineProperty({__proto__:null,default:fy},Symbol.toStringTag,{value:"Module"})),xy=()=>n.jsxs(S,{children:[n.jsx(x,{name:"message",label:"Message",placeholder:"Enter a message",required:!0}),n.jsx(x,{name:"animal",label:"Animal",type:"select",options:["Anteater","Badger","Camel"],placeholder:"Select an animal",required:!0}),n.jsx(x,{name:"terms",label:"Terms and Conditions",type:"checkbox",text:"I agree to the Terms and Conditions",required:!0}),n.jsx(me,{space:!0,reset:{className:"outline"},submit:{className:"blue"}}),n.jsx(kt,{})]}),gy=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebugForm`,te=({links:e})=>n.jsxs("div",{className:"see-also",children:[n.jsx("h3",{children:"See Also"}),n.jsx("ul",{className:"menu",children:e.map((t,r)=>n.jsx("li",{children:n.jsx(t,{})},r))})]}),cx=()=>n.jsx(Ke,{menu:q2}),by=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debug"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Debug"})," component can be used in development to debug your form."]}),n.jsxs($,{children:[n.jsxs("p",{children:['In the words of Robert "Mr T" Burns: ',n.jsx("i",{children:`"The best laid schemes of mice and men gang aft a-gley, and I pity the fool who doesn't have some good debugging tools on hand for when things go a bit pear-shaped"`}),". The example below shows the default behaviour which is to display the form values."]}),n.jsx(G,{children:"Try updating the form values and see how the debugging data changes."})]}),n.jsx(y,{Component:xy,code:gy,caption:"Debug",expand:!0}),n.jsx(te,{links:[rc]}),n.jsx(cx,{})]}),vy=Object.freeze(Object.defineProperty({__proto__:null,default:by},Symbol.toStringTag,{value:"Module"})),jy=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debug Properties"}),n.jsx(_e,{}),n.jsx(cx,{})]}),yy=Object.freeze(Object.defineProperty({__proto__:null,default:jy},Symbol.toStringTag,{value:"Module"})),Sy=()=>n.jsxs(S,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(kt,{className:"blue surface-4 border bdr-2 pad-2"})]}),Fy=`import React from 'react'
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

export default DebugForm`,wy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"className"})," property to set the CSS class for the debugging container element."]}),n.jsx(y,{Component:Sy,code:Fy,caption:"className",undent:2,expand:!0})]}),Cy=Object.freeze(Object.defineProperty({__proto__:null,default:wy},Symbol.toStringTag,{value:"Module"})),_y=()=>n.jsxs(S,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(kt,{color:"orange"})]}),Ey=`import React from 'react'
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

export default DebugForm`,Ty=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"color"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"color"})," property to set the color for the table(s).  The default value is ",n.jsx("code",{children:"brand"}),"."]}),n.jsx(y,{Component:_y,code:Ey,caption:"color",undent:2,expand:!0})]}),Ly=Object.freeze(Object.defineProperty({__proto__:null,default:Ty},Symbol.toStringTag,{value:"Module"})),ky={onSubmit:e=>mn(1e3).then(()=>({ok:!0,values:e})),onSuccess:(e,t)=>mn(1e3).then(()=>t.reset()),resetOnSuccess:!1},Ry=()=>n.jsxs(S,{debug:!0,...ky,children:[n.jsx(x,{name:"message",label:"Message",required:!0}),n.jsx(me,{space:!0}),n.jsx(kt,{status:!0})]}),Ny=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebugForm`,Oy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"status"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"status"})," property to view the form status. This example includes some dummy handlers to wait 1 second after submission before returning a fake response, and then wait 1 second after receiving that response to reset the form."]}),n.jsx(G,{children:"Try entering a message and then submit the form.  See how the form status changes when the form is submitted and after a response is received.  Also try NOT entering a message to see the invalid state."})]}),n.jsx(y,{Component:Ry,code:Ny,caption:"status",expand:!0})]}),Py=Object.freeze(Object.defineProperty({__proto__:null,default:Oy},Symbol.toStringTag,{value:"Module"})),Ay=()=>n.jsxs(S,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(kt,{status:!0,statusTitle:"Le Status",values:!1})]}),My=`import React from 'react'
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

export default DebugForm`,Iy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"statusTitle"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"statusTitle"})," property to change the title for the status table."]}),n.jsx(y,{Component:Ay,code:My,caption:"statusTitle",undent:2,expand:!0})]}),Dy=Object.freeze(Object.defineProperty({__proto__:null,default:Iy},Symbol.toStringTag,{value:"Module"})),$y=()=>n.jsxs(S,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(kt,{title:"Le Debug"})]}),zy=`import React from 'react'
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

export default DebugForm`,By=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"title"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"title"})," property to set the title."]}),n.jsx(y,{Component:$y,code:zy,caption:"title",undent:2,expand:!0})]}),Vy=Object.freeze(Object.defineProperty({__proto__:null,default:By},Symbol.toStringTag,{value:"Module"})),Uy=()=>n.jsxs(S,{onSubmit:()=>mn(1e3).then(()=>({ok:!0})),children:[n.jsx(x,{name:"message",label:"Message",required:!0}),n.jsx(me,{space:!0}),n.jsx(kt,{status:!0,values:!1})]}),qy=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebugForm`,Hy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"values"}),n.jsxs("p",{children:["The default behaviour is to show the form values.  If you don't want to display the values (e.g. if you're only interested in the form status) then you can set ",n.jsx("code",{children:"values"})," to be false."]}),n.jsx(y,{Component:Uy,code:qy,caption:"values",expand:!0})]}),Yy=Object.freeze(Object.defineProperty({__proto__:null,default:Hy},Symbol.toStringTag,{value:"Module"})),Wy=()=>n.jsxs(S,{children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(kt,{valuesTitle:"Les Values"})]}),Zy=`import React from 'react'
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

export default DebugForm`,Gy=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"valuesTitle"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"valuesTitle"})," property to change the title for the values table."]}),n.jsx(y,{Component:Wy,code:Zy,caption:"valuesTitle",undent:2,expand:!0})]}),Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Gy},Symbol.toStringTag,{value:"Module"})),Qy=()=>n.jsxs(S,{onSubmit:()=>{throw"This is a simulated error"},children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(me,{space:!0})]}),Xy=`import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

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

export default ChangedExample`,ux=()=>n.jsx(Ke,{menu:V2}),Jy=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Errors"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Errors"})," component can be used to display any form validation errors."]}),n.jsxs($,{children:[n.jsx("p",{children:"A typical example is shown below."}),n.jsx(G,{children:"TODO"})]}),n.jsx(y,{Component:Qy,code:Xy,caption:"Errors",expand:!0}),n.jsx(ux,{})]}),e9=Object.freeze(Object.defineProperty({__proto__:null,default:Jy},Symbol.toStringTag,{value:"Module"})),t9=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Errors Properties"}),n.jsx(_e,{}),n.jsx(ux,{})]}),n9=Object.freeze(Object.defineProperty({__proto__:null,default:t9},Symbol.toStringTag,{value:"Module"})),r9=()=>n.jsxs(S,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(me,{space:!0})]}),o9=`import React from 'react'
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

export default ErrorsExample`,s9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fieldErrors"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"fieldErrors"})," property can be set to have the component display any field validation errors."]}),n.jsx(G,{children:"Try submitting the form without entering anything for Field One."})]}),n.jsx(y,{Component:r9,code:o9,caption:"fieldErrors",undent:2,expand:!0})]}),i9=Object.freeze(Object.defineProperty({__proto__:null,default:s9},Symbol.toStringTag,{value:"Module"})),l9=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,prompt:"Oopsies!  Please try again."}),n.jsx(me,{space:!0})]}),a9=`import React from 'react'
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

export default ErrorsExample`,d9=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,prompt:!1}),n.jsx(me,{space:!0})]}),c9=`import React from 'react'
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

export default ErrorsExample`,u9=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,prompt:e=>e===1?"There is a single error":`There are ${e} errors`}),n.jsx(me,{space:!0})]}),m9=`import React from 'react'
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

export default TitleFnExample`,p9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prompt"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can be used to set the prompt displayed before any field errors.  You must have the"," ",n.jsx(sx,{})," property set for this to have any effect."]}),n.jsx(G,{children:"Try leaving one or both fields empty to generate validation error(s)."})]}),n.jsx(y,{Component:l9,code:a9,caption:"prompt",undent:2,expand:!0}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"prompt"})," to false if you don't want it displayed."]}),n.jsx(y,{Component:d9,code:c9,caption:"no prompt",undent:2,expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prompt"})," property can also be a function.  It will be passed the number of error message so that it can generate an appropriate title."]}),n.jsx(y,{Component:u9,code:m9,caption:"prompt function",undent:2,expand:!0})]}),f9=Object.freeze(Object.defineProperty({__proto__:null,default:p9},Symbol.toStringTag,{value:"Module"})),h9=()=>n.jsxs(S,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(Ve,{title:"Oh Noes!"}),n.jsx(me,{space:!0})]}),x9=`import React from 'react'
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

export default ErrorsExample`,g9=()=>n.jsxs(S,{onSubmit:()=>{throw"This is a simulated server error"},children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(Ve,{title:!1}),n.jsx(me,{space:!0})]}),b9=`import React from 'react'
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

export default ErrorsExample`,v9=e=>{const t=Object.entries(e).filter(([,r])=>r.match(/[aeiou]/)).map(([r])=>({name:r,message:`${r} cannot contain vowels`}));return t.length?Promise.reject({errors:t}):Promise.resolve({ok:!0})},j9=()=>n.jsxs(S,{onSubmit:v9,children:[n.jsx("h3",{children:"No Vowels Allowed!"}),n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(x,{name:"field2",label:"Field Two",required:!0}),n.jsx(Ve,{fieldErrors:!0,title:e=>e===1?"There is an error!":`There are ${e} errors`}),n.jsx(me,{space:!0})]}),y9=`import { Form, Field, Errors, ResetSubmit } from '@/lib/index.js'

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

export default TitleFnExample`,S9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"title"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can be used to set the title for the component."]}),n.jsx(y,{Component:h9,code:x9,caption:"title",undent:2,expand:!0}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"title"})," to false if you don't want it."]}),n.jsx(y,{Component:g9,code:b9,caption:"no title",undent:2,expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"title"})," property can also be a function.  It will be passed the number of error message so that it can generate an appropriate title."]}),n.jsx(G,{children:"Try entering vowels in the fields below.  The title bar for the errors component will depending on there being one or more errors."})]}),n.jsx(y,{Component:j9,code:y9,caption:"title function",expand:!0})]}),F9=Object.freeze(Object.defineProperty({__proto__:null,default:S9},Symbol.toStringTag,{value:"Module"})),w9=()=>n.jsx(S,{children:n.jsx(x,{name:"one",children:n.jsxs("div",{className:"field flex baseline gap-2",children:[n.jsx("label",{className:"nowrap",children:"Field Label"}),n.jsx(ca,{})]})})}),C9=`import { Form, Field, Input } from '@/lib/index.js'

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

export default FormInput`,_9="/badger-form/images/animals/badger.jpg",E9="/badger-form/images/animals/kitten.jpg",T9="/badger-form/images/animals/gorilla.jpg",L9={badger:_9,kitten:E9,gorilla:T9},k9=({animal:e,select:t,selected:r})=>n.jsx("div",{className:`animal ${r?"selected":""}`,onClick:t,children:n.jsx("img",{src:L9[e],width:"120",height:"120",alt:e})}),R9=["badger","gorilla","kitten"],N9=()=>{const{value:e,onChange:t}=rt();return n.jsx("div",{className:"animals",children:R9.map(r=>n.jsx(k9,{animal:r,selected:e===r,select:()=>t(r)},r))})},O9=()=>n.jsxs(S,{children:[n.jsx(x,{name:"animal",label:"Pick an animal guide",requiredMessage:"You must pick an animal",required:!0,Input:N9}),n.jsx(me,{reset:{className:"outline"},submit:{className:"blue"}})]}),P9=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PictureForm`,A9=`import { useField } from '@/lib/index.js'
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

export default PictureInput`,M9=`import badgerUrl  from '/images/animals/badger.jpg'
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

export default Picture`,I9=`div.animals {
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
}`,D9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Input"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Input"})," component is included by the ",n.jsx(Wo,{})," ","component to render the input for a field."]}),n.jsxs("p",{children:["You can define your own content for a field to replace the default"," ",n.jsx(Wo,{}),", but still use the default ",n.jsx("code",{children:"Input"})," component to render the correct input for the field type."]}),n.jsx(y,{Component:w9,code:C9,caption:"Default Input",expand:!0}),n.jsx("h2",{children:"Custom Input"}),n.jsxs("p",{children:["You can define your own component to handle the input for a field using the ",n.jsx("code",{children:"Input"})," field property."]}),n.jsxs($,{children:[n.jsx("div",{children:n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"PictureInput"})," component to show some pictures of animals for the user to select an animal guide from.  We're still using the default field layout which provides us with the label and validation message."]})}),n.jsx(lt,{children:"Click on an animal to select it. Try submitting the form without selecting an animal to see the validation error message in effect."})]}),n.jsx(y,{Component:O9,code:P9,caption:"Picture Form",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"PictureInput"})," Component"]}),n.jsxs($,{children:[n.jsx(Ze,{code:an(A9),caption:"PictureInput",expand:!0}),n.jsxs("div",{children:[n.jsxs("p",{children:["Here's the implementation of the ",n.jsx("code",{children:"PictureInput"})," component."]}),n.jsxs("p",{children:["On line 8 we call ",n.jsx("code",{children:"useField()"})," to get the current field"," ",n.jsx("code",{children:"value"})," and the ",n.jsx("code",{children:"onChange"})," function to set the value.  We iterate over a list of animals on line 11 and render the"," ",n.jsx("code",{children:"Picture"})," component for each.  We pass the ",n.jsx("code",{children:"selected"})," ","flag on line 16 to indicate if the animal name matches the current"," ",n.jsx("code",{children:"value"}),".  We also pass a ",n.jsx("code",{children:"select"})," ","function on line 17 which calls the ",n.jsx("code",{children:"onChange"})," handler to select the animal."]})]})]}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Picture"})," Component"]}),n.jsxs($,{children:[n.jsx(Ze,{code:an(M9),caption:"Picture",expand:!0}),n.jsxs("p",{children:["Here's the ",n.jsx("code",{children:"Picture"})," component.  It simply renders a ",n.jsx("code",{children:"div"})," with an ",n.jsx("code",{children:"onClick"})," handler to call the ",n.jsx("code",{children:"select"})," function passed as a property.  The"," ",n.jsx("code",{children:"animal"})," CSS class is added, along with ",n.jsx("code",{children:"selected"})," ","if the animal is currently selected.  Inside the ",n.jsx("code",{children:"div"})," we render a picture of the animal in an ",n.jsx("code",{children:"img"})," element."]})]}),n.jsx("h2",{children:"Additional Styles"}),n.jsxs($,{children:[n.jsx(Ze,{code:I9,caption:"animals.css",language:"css",expand:!0}),n.jsx("p",{children:"For completeness, here's the additional CSS we're using to apply the styling."})]}),n.jsx("h2",{className:"hint",children:"Picture Credits"}),n.jsxs("ul",{className:"credits",children:[n.jsxs("li",{children:["Badger photo by ",n.jsx("a",{href:"https://unsplash.com/es/@vincentvanzalinge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Vincent van Zalinge"})," on ",n.jsx("a",{href:"https://unsplash.com/photos/jd8s5zhWEug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n.jsxs("li",{children:["Gorilla photo by ",n.jsx("a",{href:"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Kelly Sikkema"})," on ",n.jsx("a",{href:"https://unsplash.com/images/animals/monkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),n.jsxs("li",{children:["Kitten photo by ",n.jsx("a",{href:"https://unsplash.com/@feneek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Sergey Semin"})," on ",n.jsx("a",{href:"https://unsplash.com/images/animals/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})]}),$9=Object.freeze(Object.defineProperty({__proto__:null,default:D9},Symbol.toStringTag,{value:"Module"})),z9=()=>n.jsx(S,{children:n.jsx(x,{name:"field1",label:"Field One",children:n.jsxs("div",{className:"field",children:[n.jsx(Yr,{}),n.jsx(ei,{})]})})}),B9=`import { Form, Field, Text, Label } from '@/lib/index.js'

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

export default LabelExample`,V9=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Label"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Label"})," component can be used to add a label to a"," ",n.jsx(X,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),n.jsx(y,{Component:z9,code:B9,caption:"Label",expand:!0})]}),U9=Object.freeze(Object.defineProperty({__proto__:null,default:V9},Symbol.toStringTag,{value:"Module"})),q9=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Field One",help:"This has implicit layout"}),n.jsx(x,{name:"two",label:"Field Two",help:"This has explicit layout",children:n.jsx(cr,{})})]}),H9=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FormLayout`,Y9=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Field One",help:"This is what the layout component does",required:!0,children:e=>n.jsxs("div",{className:A1(e),children:[n.jsx(Yr,{}),n.jsx(ca,{}),n.jsx(gi,{})]})}),n.jsx(W,{})]}),W9=`import { Form, Field, Label, Input, Message, Submit, fieldClass } from '@/lib/index.js'

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

export default FormLayout`,Z9=({id:e,topping:t,selected:r,select:o})=>n.jsx("div",{children:n.jsxs("label",{htmlFor:e,className:"checkbox",children:[n.jsx("input",{type:"checkbox",checked:r,onChange:o,id:e}),t]})}),G9=({id:e,toppings:t,selected:r,select:o})=>n.jsx("div",{className:"options",children:t.map(s=>n.jsx(Z9,{topping:s,id:`${e}-${s}`,selected:r[s]||!1,select:()=>o(s)},s))}),K9=({value:e,free:t,price:r})=>n.jsx("div",{className:"summary",children:e.map((o,s)=>n.jsxs("div",{className:"selected",children:[n.jsx("div",{children:o}),n.jsx("div",{children:s<t?"Free":r})]},o))}),Q9=e=>e.reduce((t,r)=>(t[r]=!0,t),{}),X9=(e,t)=>r=>{e[r]=!e[r],t(Object.entries(e).filter(o=>o[1]).map(o=>o[0]))},J9=()=>{const{id:e,value:t,onChange:r,free:o,price:s,toppings:i}=rt(),l=Q9(t),a=X9(l,r);return n.jsxs("div",{className:"toppings field",children:[n.jsx("p",{className:"wide",children:"Select any extra toppings you want on your pizza."}),n.jsxs("p",{className:"pricing wide",children:["The first ",o," are free. Any additional toppings are ",n.jsx("span",{className:"price",children:s})," each."]}),n.jsx(Yr,{}),n.jsxs("div",{className:"selection",children:[n.jsx(G9,{id:e,toppings:i,value:t,selected:l,select:a}),n.jsx(K9,{value:t,free:o,price:s})]})]})},eS={toppings:{Layout:J9,label:"Pick your toppings",default:[],free:3,price:"£1.00",toppings:["Ham","Bacon","Onions","Sausage","Pepperoni","Mushrooms","Sweetcorn","Pineapple","Extra Cheese"]}},tS=()=>n.jsxs(S,{fields:eS,children:[n.jsx(x,{name:"toppings"}),n.jsx(me,{space:!0,submit:{text:"Order Pizza",className:"blue"}})]}),nS=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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

export default PizzaForm`,rS=`import { Label, useField } from '@/lib/index.js'
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
export default Toppings`,oS=`// convert the toppings array to an object
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
  }`,sS=`import React from 'react'
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

export default Options`,iS=`import React from 'react'

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

export default Option`,lS=`import React from 'react'

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

export default Summary`,aS=`div.toppings {
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
}`,dS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Layout"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Layout"})," component is inserted as the default content for a ",n.jsx(X,{})," that doesn't have it's own content."]}),n.jsxs("p",{children:["The two fields in the example below both generate the same output. The first implicitly uses the ",n.jsx("code",{children:"Layout"})," for its content, the second includes it explicitly."]}),n.jsx(y,{Component:q9,code:H9,caption:"Default Layout",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"Layout"})," component creates a ",n.jsx("code",{children:"div"})," containing the ",n.jsx(Yo,{}),", ",n.jsx(sc,{})," and ",n.jsx(ox,{})," components. The ",n.jsx("code",{children:"div"})," will have the ",n.jsx("code",{children:"field"})," CSS class and possibly other classes based on the state of the field (e.g."," ",n.jsx("code",{children:"valid"}),", ",n.jsx("code",{children:"invalid"}),", etc.)  The"," ",n.jsx("code",{children:"fieldClass()"})," utility function can be used to automatically return the correct CSS classes for the field."]}),n.jsxs("div",{children:[n.jsxs("p",{children:["The example below shows how you can roll your own layout that does the same thing as the default ",n.jsx("code",{children:"Layout"})," component."]}),n.jsxs(G,{children:["Try submitting the form without entering any value in the required field.  You should see that the ",n.jsx("code",{children:"invalid"})," CSS class is added to the field container."]})]})]}),n.jsx(y,{Component:Y9,code:W9,caption:"Explicit Layout",expand:!0}),n.jsx("h2",{children:"Custom Layout"}),n.jsxs("p",{children:["You can define your own component to handle the layout for a field using the ",n.jsx("code",{children:"Layout"})," field property."]}),n.jsxs($,{children:[n.jsxs("p",{children:["In this example we define a ",n.jsx("code",{children:"Toppings"})," layout component to render a field allowing a user to select some toppings for a pizza."]}),n.jsx(G,{children:"Before we go any further into the code, let's see how it looks. Select some toppings for your pizza!"})]}),n.jsx(y,{Component:tS,code:nS,caption:"Pizza Form",expand:!0}),n.jsx($,{children:n.jsxs("p",{children:["We're defining the schema for the ",n.jsx("code",{children:"fields"})," externally (lines 6 to 25) and passing them into the ",n.jsx("code",{children:"Form"})," as the"," ",n.jsx("code",{children:"fields"})," property (line 28). In addition to setting the ",n.jsx("code",{children:"Layout"})," component on line 8, we're also defining some extra data that the field will require: the number of ",n.jsx("code",{children:"free"})," toppings (line 11), the"," ",n.jsx("code",{children:"price"})," of additional toppings after that (line 12), and a list of available ",n.jsx("code",{children:"toppings"})," (lines 13 to 23).  This is the kind of data that we want defined up front and not buried in the form markup."]})}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Toppings"})," Component"]}),n.jsxs("p",{children:["Here's the implementation of the ",n.jsx("code",{children:"Toppings"})," component."]}),n.jsxs($,{children:[n.jsx(Ze,{code:an(rS),caption:"Toppings",expand:!0}),n.jsxs("div",{children:[n.jsxs("p",{children:["On line 8 we call ",n.jsx("code",{children:"useField()"})," to get the current field"," ","context.  As well as the ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"value"})," and"," ",n.jsx("code",{children:"onChange"})," function to set the value, we're also getting our additional data fields: ",n.jsx("code",{children:"free"}),", ",n.jsx("code",{children:"price"})," and"," ",n.jsx("code",{children:"toppings"}),"."]}),n.jsxs("p",{children:["We've got two utility functions that we're importing from our ",n.jsx("code",{children:"Utils.js"})," file.  On line 9 we call"," ",n.jsx("code",{children:"selectedToppings()"})," to convert the array of toppings in"," ",n.jsx("code",{children:"value"})," into an object so we can easily tell which toppings are selected (each selected topping will be set ",n.jsx("code",{children:"true"}),"). On line 10 we call the ",n.jsx("code",{children:"toppingSelector()"})," factory function which returns a function for selecting a topping (or unselecting one that's already selected) and calling the ",n.jsx("code",{children:"onChange"})," handler to update the field.  We'll look at the definitions of those functions shortly."]}),n.jsxs("p",{children:["We have some explanatory text from lines 14 to 20.  Note how this includes the ",n.jsx("code",{children:"free"})," and ",n.jsx("code",{children:"price"})," values defined in our field schema. On line 21 we render the default ",n.jsx(Yo,{})," ","component to generate the field label. On line 23 we render a custom"," ",n.jsx("code",{children:"Options"})," component and on line 27 a custom"," ",n.jsx("code",{children:"Summary"})," component."]})]})]}),n.jsx("h2",{children:"Utility Functions"}),n.jsx("p",{children:"Here's the definitions for those utility functions."}),n.jsx(Ze,{code:an(oS),caption:"Utils.js",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Options"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Options"})," component iterates over the available toppings and renders the ",n.jsx("code",{children:"Option"})," component for each.  It passes a custom ",n.jsx("code",{children:"id"}),", ",n.jsx("code",{children:"selected"})," flag and"," ",n.jsx("code",{children:"select"})," function tailored to each option."]}),n.jsx(Ze,{code:an(sS),caption:"Options.jsx",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Option"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Option"})," component simply renders a checkbox in a label using those properties."]}),n.jsx(Ze,{code:an(iS),caption:"Option.jsx",expand:!0}),n.jsxs("h2",{children:["The ",n.jsx("code",{children:"Summary"})," Component"]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Summary"})," component displays a summary of the selected toppings."]}),n.jsx(Ze,{code:an(lS),caption:"Summary.jsx",expand:!0}),n.jsx("h2",{children:"Additional Styles"}),n.jsx("p",{children:"And finally, here's the additional SCSS we're using to apply the styling."}),n.jsx(Ze,{code:aS,caption:"pizza.scss",language:"css",expand:!0})]}),cS=Object.freeze(Object.defineProperty({__proto__:null,default:dS},Symbol.toStringTag,{value:"Module"})),uS=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",help:"Additional help message",validMessage:"This is fine!",requiredMessage:"You must enter a value",required:!0,children:n.jsxs(cr,{children:[n.jsx(Yr,{}),n.jsx(ca,{}),n.jsx(gi,{})]})}),n.jsx(W,{})]}),mS=`import { Form, Field, Layout, Label, Input, Message, Submit } from '@/lib/index.js'

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

export default MessageExample`,pS=()=>{const{message:e,help:t}=rt();return n.jsx("div",{className:"small bold mar-t-2 fgc-40 fgd-60",children:e??t})},fS=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",help:"Enter a value",validMessage:"This is fine!",requiredMessage:"You must enter a value",Message:pS,required:!0}),n.jsx(W,{})]}),hS=`import { Form, Field, Submit, useField } from '@/lib/index.js'

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

export default MessageExample`,xS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"Message"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Message"})," component is used to add a message underneath a ",n.jsx(X,{}),". It's usually added automatically, but it's useful if you're implementing your own layout for a field."]}),n.jsxs($,{children:[n.jsxs("p",{children:["If you have defined ",n.jsx("code",{children:"help"})," for your field then it will be displayed here.  If the field fails to validate then the validation error message will be displayed.  In this example we're setting an explicit ",n.jsx("code",{children:"requiredMessage"})," to override the default message. We're also setting a ",n.jsx("code",{children:"validMessage"})," to provide a custom message if the field is valid."]}),n.jsxs(G,{children:["Try submitting the form without entering a value.  You should see the ",n.jsx("code",{children:"help"})," message be replaced by the"," ",n.jsx("code",{children:"requiredMessage"})," error message."]})]}),n.jsx(y,{Component:uS,code:mS,caption:"Message",expand:!0}),n.jsx("h2",{children:"Custom Message Component"}),n.jsxs("p",{children:["You can define your own component to handle the message for a field using the ",n.jsx("code",{children:"Message"})," field property."]}),n.jsx(y,{Component:fS,code:hS,caption:"Custom Message Component",expand:!0})]}),gS=Object.freeze(Object.defineProperty({__proto__:null,default:xS},Symbol.toStringTag,{value:"Module"})),bS=()=>n.jsx(S,{children:n.jsxs(x,{name:"hello",label:"Enter a greeting",children:[n.jsx(cr,{}),e=>n.jsxs("div",{className:"info alert",children:["You have entered: ",e.value]})]})}),vS=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default FieldChildrenExample`,jS=()=>n.jsx(S,{children:n.jsxs(x,{name:"hello",label:"Enter a greeting",children:[n.jsx(cr,{}),n.jsx("div",{className:"info alert",children:n.jsx(z4,{children:e=>`You have entered: ${e.value}`})})]})}),yS=`import { Form, Field, Layout, UseField } from '@/lib/index.js'

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

export default UseFieldExample`,SS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"UseField"}),n.jsxs("p",{children:["The immediate ",n.jsx(E7,{})," of a ",n.jsx(X,{})," component can be functions that will receive the field context as the first argument."]}),n.jsx(y,{Component:bS,code:vS,caption:"Field Children",expand:!0}),n.jsxs("p",{children:["However, this only works for the immediate children of the ",n.jsx(X,{}),". If you want to include a function that is nested inside another element (e.g. inside a ",n.jsx("code",{children:"div"})," as shown in this example) then you can use the ",n.jsx("code",{children:"UseForm"})," component to provide it."]}),n.jsxs("p",{children:["Don't forget that defining any children of a ",n.jsx(X,{})," component will override the default ",n.jsx(Wo,{})," component, so you'll need to add it manually or define your own layout for the field."]}),n.jsx(y,{Component:jS,code:yS,caption:"UseField",expand:!0})]}),FS=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"})),ns=()=>n.jsx(Ke,{menu:M2}),wS=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Components"}),n.jsx(_e,{}),n.jsx(ns,{})]}),CS=Object.freeze(Object.defineProperty({__proto__:null,default:wS},Symbol.toStringTag,{value:"Module"})),_S=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Events"}),n.jsx(_e,{}),n.jsx(ns,{})]}),ES=Object.freeze(Object.defineProperty({__proto__:null,default:_S},Symbol.toStringTag,{value:"Module"})),TS=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} was blurred`);return n.jsxs(S,{children:[n.jsx(x,{name:"foo",label:"The Foo Field",onBlur:r}),n.jsx(x,{name:"bar",label:"The Bar Field",onBlur:r}),e]})},LS=`import { Form, Field } from '@/lib/index.js'

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
export default OnBlurExample`,kS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onBlur"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onBlur"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is blurred (i.e. unselected). The field context will be passed as an argument."]}),n.jsx(G,{children:"Focus on one of the fields below and then select the other field. A message should be displayed each time a field loses focus."})]}),n.jsx(y,{Component:TS,code:LS,caption:"onFocus",expand:!0}),n.jsx(te,{links:[Bt,rr,or,es,ts]})]}),RS=Object.freeze(Object.defineProperty({__proto__:null,default:kS},Symbol.toStringTag,{value:"Module"})),NS=`import { Form, Field } from '@/lib/index.js'

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

export default OnChangeExample`,OS=()=>{const[e,t]=T.useState("");return n.jsxs(S,{children:[n.jsx(x,{name:"example",label:"Field with onChange",onChange:r=>t(r.value)}),"Current value: ",e]})},PS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onChange"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onChange"})," handler to a ",n.jsx(X,{})," ","which will be called when the field value is changed.  The field context will be passed as an argument."]}),n.jsx(G,{children:'Try entering some text in the field below.  You should see the "Current value" display update to reflect the field content.'})]}),n.jsx(y,{Component:OS,code:NS,caption:"onChange",expand:!0}),n.jsx(te,{links:[Vt,Kr,rr,es,ts]})]}),AS=Object.freeze(Object.defineProperty({__proto__:null,default:PS},Symbol.toStringTag,{value:"Module"})),MS=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} was focussed`);return n.jsxs(S,{children:[n.jsx(x,{name:"foo",label:"The Foo Field",onFocus:r}),n.jsx(x,{name:"bar",label:"The Bar Field",onFocus:r}),e]})},IS=`import { Form, Field } from '@/lib/index.js'

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

export default OnFocusExample`,DS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onFocus"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onFocus"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is focussed (i.e. selected). The field context will be passed as an argument."]}),n.jsx(G,{children:"Focus on each of the fields below.  A message should be displayed each time a field gains focus."})]}),n.jsx(y,{Component:MS,code:IS,caption:"onFocus",expand:!0}),n.jsx(te,{links:[Kr,or,es,ts]})]}),$S=Object.freeze(Object.defineProperty({__proto__:null,default:DS},Symbol.toStringTag,{value:"Module"})),zS=()=>{const[e,t]=T.useState(),r=o=>t(`${o.label} is invalid: ${o.message}`);return n.jsxs(S,{validateOnBlur:!0,children:[n.jsx(x,{name:"foo",label:"Foo Field",required:!0,onInvalid:r}),n.jsx(x,{name:"bar",label:"Bar Field",required:!0,onValid:r,requiredMessage:"You must enter a value"}),e]})},BS=`import { Form, Field } from '@/lib/index.js'

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

export default OnInvalidExample`,VS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onInvalid"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onInvalid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field fails validation. The field context will be passed as an argument."]}),n.jsxs(G,{children:[n.jsxs("p",{children:["Click one of the fields below and then select the other field without entering any text. The ",n.jsx(Bt,{})," option on the"," ",n.jsx(ue,{})," "," means that the fields will be validated when they lose focus. They're both marked as ",n.jsx(Be,{})," so they will fail validation (assuming you haven't entered anything) and the ",n.jsx("code",{children:"onInvalid"})," handler will be called."]}),n.jsxs("p",{children:["Also note the use of ",n.jsx(Pu,{})," to set a custom message for the second field."]})]})]}),n.jsx(y,{Component:zS,code:BS,caption:"onInvalid",expand:!0}),n.jsx(te,{links:[zt,Kr,rr,or,rr,or,es]})]}),US=Object.freeze(Object.defineProperty({__proto__:null,default:VS},Symbol.toStringTag,{value:"Module"})),qS=()=>{const[e,t]=T.useState();return n.jsxs(S,{children:[n.jsx(x,{name:"foo",label:"Foo Field",onLoad:t}),n.jsxs("div",{className:"grid-4 gap-2",children:[n.jsx("button",{type:"button",onClick:()=>e.reset(),children:"Reset"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Hello"),children:"Hello"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Goodbye"),children:"Goodbye"}),n.jsx("button",{type:"button",onClick:()=>e.setFocus(),children:"Focus"})]})]})},HS=`import { Form, Field } from '@/lib/index.js'

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

export default OnLoadExample`,YS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onLoad"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onInvalid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is initialised.  This is useful if you want to programmatically control the field."]}),n.jsx(G,{children:"Click on the buttons to programmatically call field methods. The first resets the field, the next two set the field value, and the last one focusses the field."})]}),n.jsx(y,{Component:qS,code:HS,caption:"onLoad"}),n.jsx(te,{links:[rr,Kr,or,es,ts]})]}),WS=Object.freeze(Object.defineProperty({__proto__:null,default:YS},Symbol.toStringTag,{value:"Module"})),ZS=()=>{const[e,t]=T.useState();return n.jsxs(S,{validateOnBlur:!0,children:[n.jsx(x,{name:"foo",label:"Foo Field",required:!0,onValid:r=>t(`${r.name} is valid: ${r.value}`)}),n.jsx(x,{name:"bar",label:"Bar Field",required:!0,onValid:r=>t(`${r.name} is valid: ${r.value}`)}),e]})},GS=`import { Form, Field } from '@/lib/index.js'

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

export default OnValidExample`,KS=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onValid"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add an ",n.jsx("code",{children:"onValid"})," handler to a ",n.jsx(X,{})," ","which will be called when the field is successfully validated. The field context will be passed as an argument."]}),n.jsxs(G,{children:["Enter some text in one of the fields below and then select the other field.  The ",n.jsx("code",{children:"validateOnBlur"})," option on the ",n.jsx(ue,{})," ","means that the first field will be validated when it loses focus and the ",n.jsx("code",{children:"onValid"})," handler will be called."]})]}),n.jsx(y,{Component:ZS,code:GS,caption:"onValid",expand:!0}),n.jsx(te,{links:[zt,rr,Kr,or,ts]})]}),QS=Object.freeze(Object.defineProperty({__proto__:null,default:KS},Symbol.toStringTag,{value:"Module"})),XS=`import { Form, Field } from '@/lib/index.js'

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

export default ResetExample`,JS=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(S,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,value:"Initial value",name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"blue",onClick:e.reset,children:"Reset Field One"}),n.jsx("button",{className:"blue",onClick:r.reset,children:"Reset Field Two"})]})]})},eF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"reset()"})," function can be called to reset a field to its initial state."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"reset()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),n.jsx(G,{children:"Enter some text in either of the inputs below and then click on the corresponding button to reset it to the original value."})]}),n.jsx(y,{Component:JS,code:XS,caption:"reset()"}),n.jsx(te,{links:[oc,rr,Kr]})]}),tF=Object.freeze(Object.defineProperty({__proto__:null,default:eF},Symbol.toStringTag,{value:"Module"})),nF=`import { Form, Field } from '@/lib/index.js'

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

export default SetFocusExample`,rF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(S,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus(),children:"Focus Field One"}),n.jsx("button",{onClick:()=>r==null?void 0:r.setFocus(),children:"Focus Field Two"})]})]})},oF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setFocus()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setFocus()"})," function can be called to focus a field. You can use the ",n.jsx(wi,{})," property to save a reference to a field context object."]}),n.jsxs("p",{children:["Then call the ",n.jsx("code",{children:"setFocus()"})," method on the field object to focus it."]})]}),n.jsx(G,{children:"Click on one of the buttons to focus the corresponding field."})]}),n.jsx(y,{Component:rF,code:nF,caption:"setFocus()"}),n.jsxs("p",{children:["You can also focus on fields by name using the ",n.jsx(ue,{})," ",n.jsx(oc,{})," method."]}),n.jsx(te,{links:[oc,rr,Kr]})]}),sF=Object.freeze(Object.defineProperty({__proto__:null,default:oF},Symbol.toStringTag,{value:"Module"})),iF=`import { Form, Field } from '@/lib/index.js'

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

export default SetInvalidExample`,lF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(S,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"red",onClick:()=>e.setInvalid(),children:"Invalid Field One"}),n.jsx("button",{className:"red",onClick:()=>r.setInvalid("Naughty!"),children:"Invalid Field Two"})]})]})},aF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setInvalid()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setInvalid()"})," function can be called to mark a field as invalid."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"setInvalid()"})," method on the field object to make it invalid.  An optional argument can be provided as the message to display."]})]}),n.jsx(G,{children:"Click on one of the buttons to set the corresponding field to be invalid."})]}),n.jsx(y,{Component:lF,code:iF,caption:"setFocus()"}),n.jsx(te,{links:[L7,ts]})]}),dF=Object.freeze(Object.defineProperty({__proto__:null,default:aF},Symbol.toStringTag,{value:"Module"})),cF=`import { Form, Field } from '@/lib/index.js'

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

export default SetValidExample`,uF=()=>{const[e,t]=T.useState(!1),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(S,{children:[n.jsx(x,{onLoad:t,name:"field1",label:"Field One"}),n.jsx(x,{onLoad:o,name:"field2",label:"Field Two"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"green",onClick:()=>e==null?void 0:e.setValid(),children:"Valid Field One"}),n.jsx("button",{className:"green",onClick:()=>r==null?void 0:r.setValid("Nice one!"),children:"Valid Field Two"})]})]})},mF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValid()"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValid()"})," function can be called to mark a field as valid."]}),n.jsxs("p",{children:["You can use the ",n.jsx(wi,{})," property to save a reference to a field context object. Then call the ",n.jsx("code",{children:"setValid()"})," method on the field object to make it valid.  An optional argument can be provided as the message to display."]})]}),n.jsx(G,{children:"Click on one of the buttons to set the corresponding field to be valid."})]}),n.jsx(y,{Component:uF,code:cF,caption:"setFocus()"}),n.jsx(te,{links:[k7,es]})]}),pF=Object.freeze(Object.defineProperty({__proto__:null,default:mF},Symbol.toStringTag,{value:"Module"})),fF=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,hF=()=>{const[e,t]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(S,{children:n.jsx(x,{onLoad:t,name:"animal",label:"Animal"})}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>e.setValue("Antelope"),children:"Antelope"}),n.jsx("button",{onClick:()=>e.setValue("Badger"),children:"Badger"}),n.jsx("button",{onClick:()=>e.setValue("Camel"),children:"Camel"})]})]})},xF=`import { Form, Field } from '@/lib/index.js'

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

export default SetValueExample`,gF=()=>{const[e,t]=T.useState(!1);return n.jsx(n.Fragment,{children:n.jsxs(S,{children:[n.jsx(x,{onLoad:t,name:"animal",label:"Animal"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{className:"green",onClick:r=>{r.preventDefault(),e.setValue("Antelope")},children:"Antelope"}),n.jsx("button",{className:"green",onClick:r=>e.setValue("Badger",r),children:"Badger"}),n.jsx("button",{type:"button",className:"green",onClick:()=>e.setValue("Camel"),children:"Camel"}),n.jsx("button",{onClick:()=>e.setValue("Danger!"),className:"red",children:"Danger!"})]})]})})},bF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValue()"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValue()"})," method can be called on a field to set the value.  You can use ",n.jsx(wi,{})," to capture a reference to the field context object"]}),n.jsx(G,{children:"Click on one of the buttons to set the field to have the corresponding value."})]}),n.jsx(y,{Component:hF,code:fF,caption:"setValue()"}),n.jsx("h2",{children:"Beware Buttons That Submit!"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["One thing to be aware of is that the default behaviour of a"," ",n.jsx("code",{children:"button"})," inside a ",n.jsx("code",{children:"form"})," is to submit the form. This is an innate property of HTML and not something that's specific to this library.  In the example above we put the buttons outside the"," ",n.jsx(ue,{})," to avoid this behaviour, but it's not always possible to do that. There are a number of ways to work around it, shown in the example below."]}),n.jsxs("p",{children:['The first "Antelope" button calls the'," ",n.jsx("code",{children:"preventDefault()"})," "," method on the event.  Given that this is a bit clumsy, the ",n.jsx("code",{children:"setValue()"})," method allows you to pass the event as the second argument and it will call"," ",n.jsx("code",{children:"preventDefault()"}),' for you, as shown on the second "Badger" button.']})]}),n.jsxs("div",{children:[n.jsxs("p",{children:['The third approach, shown on the "Camel" button, is to explicitly set the ',n.jsx("code",{children:"type"})," to ",n.jsx("code",{children:"button"})," to override the default button ",n.jsx("code",{children:"type"})," of ",n.jsx("code",{children:"submit"}),"."," ",`The fourth "Danger!" button doesn't do anything and will cause the form to submit, just in case you don't believe me that it's really a problem.`]}),n.jsx(G,{children:"Click on one of the buttons to set the input value.  Be warned that the fourth button will cause the form to submit."})]})]}),n.jsx(y,{Component:gF,code:xF,caption:"setValue()"}),n.jsxs("p",{children:["You can also set values for one or more fields by name using the"," ",n.jsx(ue,{})," ",n.jsx(Gp,{})," method."]}),n.jsx(te,{links:[Gp,R7]})]}),vF=Object.freeze(Object.defineProperty({__proto__:null,default:bF},Symbol.toStringTag,{value:"Module"})),jF=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Functions"}),n.jsx(_e,{}),n.jsx(ns,{})]}),yF=Object.freeze(Object.defineProperty({__proto__:null,default:jF},Symbol.toStringTag,{value:"Module"})),SF=`import { Form, Field } from '@/lib/index.js'

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

export default FieldExample`,FF=()=>n.jsx(S,{children:n.jsx(x,{name:"example",label:"An Example Field",type:"text",required:!0})}),wF=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Component"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Field"})," component is used to render a field inside a ",n.jsx(ue,{}),"."]}),n.jsx(y,{Component:FF,code:SF,caption:"Field",expand:!0}),n.jsx(ns,{})]}),CF=Object.freeze(Object.defineProperty({__proto__:null,default:wF},Symbol.toStringTag,{value:"Module"})),_F=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Properties"}),n.jsx(_e,{}),n.jsx(ns,{})]}),EF=Object.freeze(Object.defineProperty({__proto__:null,default:_F},Symbol.toStringTag,{value:"Module"})),TF=`import { Form, Field, Layout } from '@/lib/index.js'

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

export default ChildFunctions`,LF=()=>n.jsx(S,{children:n.jsxs(x,{name:"greeting",label:"Enter a greeting",children:[e=>n.jsxs("h2",{className:"mar-t-none",children:["The ",e.name," field"]}),n.jsx(cr,{}),e=>n.jsxs("div",{children:["Current value is: ",e.value]}),e=>n.jsxs("div",{className:"flex gap-2 blue mar-t-4",children:[n.jsx("button",{type:"button",onClick:()=>e.setValue("Foo"),children:"Foo"}),n.jsx("button",{type:"button",onClick:()=>e.setValue("Bar"),children:"Bar"})]})]})}),kF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"children"}),n.jsxs("p",{children:["You can define children of a field, either as components or functions. Components can access the field context via ",n.jsx("code",{children:"useField"}),". Functions receive the field context as the first argument."]}),n.jsxs("p",{children:["Note that if you define children for the field then it will replace the default ",n.jsx(Wo,{})," component.  In this case it's up to you to render the field content."]}),n.jsxs("p",{children:["If you want to include the default layout for a field and add some content of your own then you can include the ",n.jsx(Wo,{})," component manually."]}),n.jsx(y,{Component:LF,code:TF,caption:"children",expand:!0})]}),RF=Object.freeze(Object.defineProperty({__proto__:null,default:kF},Symbol.toStringTag,{value:"Module"})),NF=`import React from 'react'
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

export default ClassNameExample`,OF=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Hello World!",className:"width-12rem"}),n.jsx(x,{name:"field2",label:"Hello World!",prefix:"£",suffix:".00",className:"width-12rem"})]}),PF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the input container."]}),n.jsx(y,{Component:OF,code:NF,caption:"className",expand:!0})]}),AF=Object.freeze(Object.defineProperty({__proto__:null,default:PF},Symbol.toStringTag,{value:"Module"})),MF=`import { Form, Field, Reset } from '@/lib/index.js'

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

export default DefaultExample`,IF=()=>n.jsxs(S,{children:[n.jsx(x,{name:"animal",label:"Favourite animal",default:"Badger"}),n.jsx(ur,{})]}),DF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"default"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"default"})," property can be used to define a default value for a field."]}),n.jsx(y,{Component:IF,code:MF,caption:"default"})]}),$F=Object.freeze(Object.defineProperty({__proto__:null,default:DF},Symbol.toStringTag,{value:"Module"})),zF=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HelpExample`,BF=()=>n.jsxs(S,{children:[n.jsx(x,{name:"email",label:"Email Address",help:"Enter the email address that you registered with",required:!0}),n.jsx(W,{})]}),VF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"help"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"help"})," property can be used to define some additional help for the user.  By default it is displayed underneath the field input."]}),n.jsx("p",{children:"If the field input fails to validate then the validation error message will be displayed in its place."})]}),n.jsx(G,{children:"Try submitting the form without entering any value.  You should see the help message replaced by the validation error."})]}),n.jsx(y,{Component:BF,code:zF,caption:"help"}),n.jsx(te,{links:[Dr,Yo,Be,zt,Ct]})]}),UF=Object.freeze(Object.defineProperty({__proto__:null,default:VF},Symbol.toStringTag,{value:"Module"})),qF=`import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/badger-form'

const LabelExample = () =>
  <Form>
    <Field name="field1" label="Hello World!"/>
  </Form>

export default LabelExample`,HF=()=>n.jsx(S,{children:n.jsx(x,{name:"field1",label:"Hello World!"})}),YF=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,WF={field1:{label:"This is field one"},field2:{label:"This is field two"}},ZF=()=>n.jsxs(S,{fields:WF,children:[n.jsx(x,{name:"field1"}),n.jsx(x,{name:"field2",label:"A different label"})]}),GF=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"label"}),n.jsxs("p",{children:["Add a label to the field with the ",n.jsx("code",{children:"label"})," property."]}),n.jsx(y,{Component:HF,code:qF,caption:"name",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["Like all other field properties, they can be defined via ",n.jsx(Ct,{})," ","on the ",n.jsx(ue,{}),".  If you explicitly set a ",n.jsx("code",{children:"label"})," on the"," ",n.jsx(X,{})," then it will take precedence."]}),n.jsxs(lt,{children:["Note how the first field has the ",n.jsx("code",{children:"label"})," defined in the"," ",n.jsx(Ct,{})," but the second defines its own ",n.jsx("code",{children:"label"})," ","which is used instead of the one defined in the ",n.jsx(Ct,{}),"."]})]}),n.jsx(y,{Component:ZF,code:YF,caption:"Form fields",expand:!0}),n.jsx(te,{links:[Dr,Ct]})]}),KF=Object.freeze(Object.defineProperty({__proto__:null,default:GF},Symbol.toStringTag,{value:"Module"})),QF=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const NameExample = () =>
  <Form>
    <Field name="field1"/>
    <Submit/>
  </Form>

export default NameExample`,XF=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1"}),n.jsx(W,{})]}),JF=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FormFieldsExample`,ew={field1:{label:"This is field one",required:!0}},tw=()=>n.jsxs(S,{fields:ew,children:[n.jsx(x,{name:"field1"}),n.jsx(W,{})]}),nw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"name"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"name"})," is the only required property for a ",n.jsx(X,{}),". It is used as the key to set the ",n.jsx(ue,{})," value."]}),n.jsxs(G,{children:["Enter some text in the input field.  The ",n.jsx(zr,{}),` component is included in this example to show the form data as it's being set.  Click on the "Submit" button and you'll see an alert showing the data that would be submitted.`]})]}),n.jsx(y,{Component:XF,code:QF,caption:"name",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["You can set the ",n.jsx(Ct,{})," property on the ",n.jsx(ue,{})," as an object containing additional properties for each field.  The"," ",n.jsx("code",{children:"name"})," is used as the key to fetch those properties. Any properties explicitly set on the ",n.jsx(X,{})," will override them."]}),n.jsxs(lt,{children:["Note how the ",n.jsx(X,{})," has now got a ",n.jsx(Yo,{})," and the"," ",n.jsx(Be,{})," property is set."]})]}),n.jsx(y,{Component:tw,code:JF,caption:"Form fields",expand:!0}),n.jsx(te,{links:[Yo,Ct]})]}),rw=Object.freeze(Object.defineProperty({__proto__:null,default:nw},Symbol.toStringTag,{value:"Module"})),ow=`import { Form, Field } from '@/lib/index.js'

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

export default PlaceholderExample`,sw=()=>n.jsx(S,{children:n.jsx(x,{name:"name",label:"Your Name",placeholder:"Enter your name"})}),iw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"placeholder"})," property to add some text as a placeholder in the input."]}),n.jsx(y,{Component:sw,code:ow,caption:"placeholder",expand:!0}),n.jsx(te,{links:[Dr,Ct]})]}),lw=Object.freeze(Object.defineProperty({__proto__:null,default:iw},Symbol.toStringTag,{value:"Module"})),aw=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default PrefixExample`,Qp=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"icon",children:n.jsx("path",{d:"M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z",stroke:"currentColor"})}),dw=()=>n.jsxs(S,{children:[n.jsx(x,{name:"money",type:"number",label:"Price",prefix:"$"}),n.jsx(x,{name:"card1",type:"number",label:"Card Number",prefix:Qp,required:!0}),n.jsx(x,{name:"card2",type:"number",label:"Card Number",prefix:Qp,prefixClass:"shaded lined",required:!0}),n.jsx(W,{})]}),cw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prefix"}),n.jsxs("p",{children:["You can add a ",n.jsx("code",{children:"prefix"})," to a ",n.jsx("code",{children:"text"})," field or any of the other types using the basic text input, e.g."," ",n.jsx("code",{children:"money"}),", ",n.jsx("code",{children:"date"}),", etc.  The prefix can be text, an SVG icon or any other JSX fragment."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"prefixClass"})," property can be used to set a CSS class for the prefix.  Badger CSS provides two built in styles: "," ",n.jsx("code",{children:"lined"})," to add a dividing line, and ",n.jsx("code",{children:"shaded"})," to add some background shading."]}),n.jsx(y,{Component:dw,code:aw,caption:"prefix",expand:!0}),n.jsx(te,{links:[rx]})]}),uw=Object.freeze(Object.defineProperty({__proto__:null,default:cw},Symbol.toStringTag,{value:"Module"})),mw=`import { Form, Field } from '@/lib/index.js'

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

export default SuffixExample`,pw=()=>n.jsx(S,{children:n.jsx(x,{name:"suffix",type:"password",label:"Enter your password",suffix:"🔒"})}),fw=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default PrefixSuffixExample`,hw=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"icon",children:n.jsx("path",{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z",fill:"currentColor"})}),xw=n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"icon",children:n.jsx("path",{d:"M326,364C312.322,364 298.962,362.46 286.149,359.542L266.846,378.846C258.412,387.279 246.994,392 235,392C235,392 224,392 224,392L224,403C224,427.938 203.938,448 179,448C179,448 168,448 168,448L168,459C168,483.937 147.938,504 123,504L53,504C28.062,504 8,483.937 8,459L8,389C8,377.006 12.721,365.588 21.154,357.154C21.154,357.154 152.458,225.851 152.458,225.851C149.54,213.038 148,199.678 148,186C148,87.695 227.695,8 326,8C424.305,8 504,87.695 504,186C504,284.305 424.305,364 326,364ZM56,456L120,456L120,424C120,410.745 130.745,400 144,400L176,400L176,368C176,354.745 186.745,344 200,344L233.809,344L262.042,315.767C268.394,309.415 277.761,307.142 286.317,309.876C298.805,313.866 312.182,316 326,316C397.795,316 456,257.795 456,186C456,114.205 397.795,56 326,56C254.205,56 196,114.205 196,186C196,199.818 198.134,213.195 202.124,225.683C204.858,234.239 202.585,243.606 196.233,249.958L56,390.191L56,456ZM363.942,110.391C384.731,110.391 401.609,127.269 401.609,148.058C401.609,168.847 384.731,185.725 363.942,185.725C343.153,185.725 326.275,168.847 326.275,148.058C326.275,127.269 343.153,110.391 363.942,110.391Z",fill:"currentColor"})}),gw=()=>n.jsxs(S,{children:[n.jsx(x,{name:"password",type:"password",label:"Password with both prefix and suffix",prefix:hw,suffix:xw,prefixClass:"lined shaded",suffixClass:"lined shaded",required:!0}),n.jsx(W,{})]}),bw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"suffix"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"suffix"})," property can be used to a a suffix to a field. This can be text, an SVG icon or other JSX fragment."]}),n.jsx(y,{Component:pw,code:mw,caption:"suffix",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"suffixClass"})," property can be used to set a CSS class for the suffix.  Badger CSS provides two built in styles: "," ",n.jsx("code",{children:"lined"})," to add a dividing line, and ",n.jsx("code",{children:"shaded"})," to add some background shading."]}),n.jsx(y,{Component:gw,code:fw,caption:"prefix and suffix",expand:!0}),n.jsx(te,{links:[nx]})]}),vw=Object.freeze(Object.defineProperty({__proto__:null,default:bw},Symbol.toStringTag,{value:"Module"})),jw=`import { Form, Field } from '@/lib/index.js'

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

export default TypeExample`,yw=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Text Field"}),n.jsx(x,{name:"field2",type:"textarea",label:"TextArea Field"}),n.jsx(x,{name:"field3",type:"number",label:"Number Field"}),n.jsx(x,{name:"field4",type:"date",label:"Date Field"}),n.jsx(x,{name:"field5",type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]}),n.jsx(x,{name:"field6",type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]}),n.jsx(x,{name:"field7",type:"checkbox",label:"Checkbox Field",text:"I like badgers"})]}),Sw=`import { Form, Field } from '@/lib/index.js'

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

export default FormFieldsExample`,Fw={field1:{label:"Text Field"},field2:{type:"textarea",label:"TextArea Field"},field3:{type:"number",label:"Number Field"},field4:{type:"date",label:"Date Field"},field5:{type:"select",label:"Select Field",options:["Badger","Ferret","Stoat"]},field6:{type:"radio",label:"Radio Button Field",options:["No","Maybe","Yes"]},field7:{type:"checkbox",label:"Checkbox Field",text:"I like badgers"}},ww=()=>n.jsxs(S,{fields:Fw,children:[n.jsx(x,{name:"field1"}),n.jsx(x,{name:"field2"}),n.jsx(x,{name:"field3"}),n.jsx(x,{name:"field4"}),n.jsx(x,{name:"field5"}),n.jsx(x,{name:"field6"}),n.jsx(x,{name:"field7"})]}),Cw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"type"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"type"})," property specifies what kind of input should be displayed.  The default value is ",n.jsx("code",{children:"text"})," corresponding to the ",n.jsx(ic,{})," input component.  Other values can be"," ",n.jsx("code",{children:"textarea"})," (see ",n.jsx(z7,{}),"),"," ",n.jsx("code",{children:"checkbox"})," (see ",n.jsx(lx,{}),"),"," ",n.jsx("code",{children:"radio"})," (see ",n.jsx(ax,{}),"),"," ",n.jsx("code",{children:"select"})," (see ",n.jsx(dx,{}),") and"," ",n.jsx("code",{children:"hidden"})," (see ",n.jsx(Z7,{}),") corresponding to the basic HTML input types."]}),n.jsxs("p",{children:["You can also set ",n.jsx("code",{children:"type"})," to be one of the other valid HTML input types, e.g. ",n.jsx("code",{children:"password"}),", ",n.jsx("code",{children:"email"}),","," ",n.jsx("code",{children:"number"}),", ",n.jsx("code",{children:"date"}),", ",n.jsx("code",{children:"color"}),", and so on.  These use the same basic ",n.jsx(ic,{})," input component as for ",n.jsx("code",{children:"text"})," types, but with the ",n.jsx("code",{children:"type"})," attribute set appropriately to use the browser-specific functionality."]})]}),n.jsx(G,{children:"Enter some text in the input fields below. Note how the number field uses the browser's built-in functionality to accept only numbers, and the date field provides a date picker."})]}),n.jsx(y,{Component:yw,code:jw,caption:"type",expand:!0}),n.jsxs($,{children:[n.jsxs("p",{children:["As with all other ",n.jsx(X,{})," properties, they can be defined using"," ",n.jsx(Ct,{})," set on the ",n.jsx(ue,{}),". The benefit of this approach is that it keeps the field definitions and markup separate.  As well as making them easier to read and maintain, it also has the benefit that field definitions can be reused across multiple forms."]}),n.jsxs(lt,{children:["The example below generates exactly the same form as the one above (with the exception of the additional ",n.jsx(zr,{})," component). Note that the form data will only include fields that are present in the ",n.jsx(ue,{}),".  The ",n.jsx("code",{children:"field5"})," field definition is effectively ignored."]})]}),n.jsx(y,{Component:ww,code:Sw,caption:"Form fields",expand:!0}),n.jsx(te,{links:[Dr,Yo,Ct,G7]})]}),_w=Object.freeze(Object.defineProperty({__proto__:null,default:Cw},Symbol.toStringTag,{value:"Module"})),Ew=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Validation"}),n.jsx(_e,{}),n.jsx(ns,{})]}),Tw=Object.freeze(Object.defineProperty({__proto__:null,default:Ew},Symbol.toStringTag,{value:"Module"})),Lw={alice:!0,bob:!0,charlie:!0},kw={username:{label:"Username",help:"Choose a username (minimum length: 3)",validateOnChange:!0,minValidateLength:3,validate:(e,t,r,o)=>{e.length<3&&o({message:"Your username must be at least 3 characters"}),Lw[e.toLowerCase()]?o({message:"Sorry, that username is taken"}):r({message:"That username is available"})}}},Rw=()=>n.jsxs(S,{fields:kw,children:[n.jsx(x,{name:"username"}),n.jsx(W,{})]}),Nw=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default MinValidateLengthExample`,Ow=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"minValidateLength"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can set the ",n.jsx(Vt,{})," property flag to enable validation any time the field value changes.  The"," ",n.jsx("code",{children:"minValidateLength"})," property can be set to only trigger validation when the input length exceeds a threshold."]}),n.jsxs(G,{children:["Enter a username in the form below.  The usernames ",n.jsx("code",{children:"alice"}),",",n.jsx("code",{children:"bob"})," and ",n.jsx("code",{children:"charlie"})," will return a validation error saying that they're not available.  There's a minimum length for a username so we wait until at least three characters have been entered before checking to see if the username is available.  Note that the validation will also be triggered when the form is submitted, regardless of how many characters have been entered.  For that reason the validation function also rejects any username that is too short."]})]}),n.jsx(y,{Component:Rw,code:Nw,caption:"minValidateLength"}),n.jsx(te,{links:[Be,zt,Bt,Vt]})]}),Pw=Object.freeze(Object.defineProperty({__proto__:null,default:Ow},Symbol.toStringTag,{value:"Module"})),Aw=`import { Form, Field } from '@/lib/index.js'

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

export default OptionalLabel`,Mw=()=>n.jsxs(S,{showOptional:!0,optionalLabel:"Not required",children:[n.jsx(x,{name:"field1",label:"Optional Field"}),n.jsx(x,{name:"field2",label:"Another Optional Field",optionalLabel:"Nice to have"})]}),Iw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionalLabel"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"optionalLabel"})," property to change the label that is display for optional fields (i.e. those that aren't marked as ",n.jsx(Be,{}),") that have the"," ",n.jsx($r,{})," option set.  You can set it on individual"," ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{})," to act as a default for all fields."]}),n.jsx(y,{Component:Mw,code:Aw,caption:"optionalLabel",expand:!0}),n.jsx(te,{links:[Be,Ln,$r,Jo]})]}),Dw=Object.freeze(Object.defineProperty({__proto__:null,default:Iw},Symbol.toStringTag,{value:"Module"})),$w=`import { Form, Field } from '@/lib/index.js'

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

export default PrepareValue`,zw={upper:{label:"Converted to UPPER CASE",prepareValue:e=>e.toUpperCase()}},Bw=()=>n.jsx(S,{fields:zw,children:n.jsx(x,{name:"upper"})}),Vw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"prepareValue"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can add a ",n.jsx("code",{className:"code",children:"prepareValue"})," function to a ",n.jsx(X,{})," to prepare the value before it's set."]}),n.jsx(G,{children:"Try entering some letters in the field below.  You should see that they get converted to upper case."})]}),n.jsx(y,{Component:Bw,code:$w,caption:"onChange",expand:!0}),n.jsx(te,{links:[zt,Bt,Vt]})]}),Uw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),qw=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(W,{})]}),Hw=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const Required = () =>
  <Form>
    <Field name="field1" label="Required Field" required/>
    <Submit/>
  </Form>

export default Required`,Yw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"required"}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["You can add a ",n.jsx("code",{children:"required"})," property to a field to mark it as being required.  This automatically adds a validator to the field to ensure that a value is provided when the form is submitted."]}),n.jsx(G,{children:"Try submitting the form without entering anything in the field input."})]}),n.jsx(y,{Component:qw,code:Hw,caption:"required",expand:!0}),n.jsx(te,{links:[Ln,Jo,Pu,Bt,Vt]})]}),Ww=Object.freeze(Object.defineProperty({__proto__:null,default:Yw},Symbol.toStringTag,{value:"Module"})),Zw=`import { Form, Field } from '@/lib/index.js'

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

export default RequiredLabel`,Gw=()=>n.jsxs(S,{showRequired:!0,requiredLabel:"Important!",children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(x,{name:"field2",label:"Another Required Field",requiredLabel:"Very Important!",required:!0})]}),Kw=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredLabel"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"requiredLabel"})," property to change the label that is displayed for ",n.jsx(Be,{})," fields that have the ",n.jsx(Ln,{})," option enabled.  You can set it on individual ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{}),"."]}),n.jsx(y,{Component:Gw,code:Zw,caption:"requiredLabel",expand:!0}),n.jsx(te,{links:[Be,Ln,$r,ii]})]}),Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw},Symbol.toStringTag,{value:"Module"})),Xw=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default RequiredLabel`,Jw=()=>n.jsxs(S,{requiredMessage:"Nothing will come of nothing",children:[n.jsx(x,{name:"foo",label:"Foo",required:!0}),n.jsx(x,{name:"bar",label:"Bar",required:!0,requiredMessage:"You really MUST enter a value"}),n.jsx(W,{})]}),eC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredMessage"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can use the ",n.jsx("code",{className:"code",children:"requiredMessage"})," property to change the error message that is generated for ",n.jsx(Be,{})," fields that aren't completed."]}),n.jsxs("p",{children:["You can set it on individual ",n.jsx(X,{})," components or on the parent"," ",n.jsx(ue,{})," to act as the default for all fields."]})]}),n.jsxs(G,{children:["Try submitting the form without entering any values.  You should see the form-wide ",n.jsx("code",{children:"requiredMessage"})," displayed for the first field, and the field-specific value for the second."]})]}),n.jsx(y,{Component:Jw,code:Xw,caption:"requiredMessage",expand:!0}),n.jsx(te,{links:[Be,Ln,Jo,Vt,Bt]})]}),tC=Object.freeze(Object.defineProperty({__proto__:null,default:eC},Symbol.toStringTag,{value:"Module"})),nC=()=>n.jsxs(S,{showOptional:!0,children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(x,{name:"field2",label:"Optional Field"})]}),rC=`import { Form, Field } from '@/lib/index.js'

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

export default ShowOptional`,oC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showOptional"}),n.jsxs("p",{children:["If a field is ",n.jsx("b",{children:"NOT"})," marked as ",n.jsx(Be,{})," then it is optional. If you set the ",n.jsx("code",{children:"showOptional"})," property then it will add an additional label to a field to indicate that it's optional.  You can set the property on individual ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{})," to act as a default for all fields."]}),n.jsxs("p",{children:["You can use the ",n.jsx(ii,{})," property to change the text of the label that is displayed."]}),n.jsx(y,{Component:nC,code:rC,caption:"showOptional",expand:!0}),n.jsx(te,{links:[Be,ii,Ln,Jo]})]}),sC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"})),iC=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0,showRequired:!0}),n.jsx(x,{name:"field2",label:"Optional Field"})]}),lC=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequired`,aC=()=>n.jsxs(S,{showRequired:!0,children:[n.jsx(x,{name:"field1",label:"Required Field",required:!0}),n.jsx(x,{name:"field2",label:"Optional Field"})]}),dC=`import { Form, Field } from '@/lib/index.js'

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

export default ShowRequiredForm`,cC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showRequired"}),n.jsxs("p",{children:["If a ",n.jsx(X,{})," is marked as ",n.jsx(Be,{})," then the"," ",n.jsx("code",{children:"showRequired"})," property can be added to have an additional label displayed indicating that it is required."]}),n.jsx(y,{Component:iC,code:lC,caption:"showRequired on Field",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"showRequired"})," property can also be added to the"," ",n.jsx(ue,{})," to have it apply to all ",n.jsx(Be,{})," fields."]}),n.jsx(y,{Component:aC,code:dC,caption:"showRequired on Form",expand:!0}),n.jsx(te,{links:[Be,Jo,$r,ii]})]}),uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"}));function Qr(e){this._maxSize=e,this.clear()}Qr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Qr.prototype.get=function(e){return this._values[e]};Qr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var mC=/[^.^\]^[]+|(?=\[\]|\.\.)/g,mx=/^\d+$/,pC=/^\d/,fC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,hC=/^\s*(['"]?)(.*?)(\1)\s*$/,Mu=512,Xp=new Qr(Mu),Jp=new Qr(Mu),ef=new Qr(Mu),px={Cache:Qr,split:lc,normalizePath:Ka,setter:function(e){var t=Ka(e);return Jp.get(e)||Jp.set(e,function(o,s){for(var i=0,l=t.length,a=o;i<l-1;){var d=t[i];if(d==="__proto__"||d==="constructor"||d==="prototype")return o;a=a[t[i++]]}a[t[i]]=s})},getter:function(e,t){var r=Ka(e);return ef.get(e)||ef.set(e,function(s){for(var i=0,l=r.length;i<l;)if(s!=null||!t)s=s[r[i++]];else return;return s})},join:function(e){return e.reduce(function(t,r){return t+(Iu(r)||mx.test(r)?"["+r+"]":(t?".":"")+r)},"")},forEach:function(e,t,r){xC(Array.isArray(e)?e:lc(e),t,r)}};function Ka(e){return Xp.get(e)||Xp.set(e,lc(e).map(function(t){return t.replace(hC,"$2")}))}function lc(e){return e.match(mC)||[""]}function xC(e,t,r){var o=e.length,s,i,l,a;for(i=0;i<o;i++)s=e[i],s&&(vC(s)&&(s='"'+s+'"'),a=Iu(s),l=!a&&/^\d+$/.test(s),t.call(r,s,a,l,i,e))}function Iu(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function gC(e){return e.match(pC)&&!e.match(mx)}function bC(e){return fC.test(e)}function vC(e){return!Iu(e)&&(gC(e)||bC(e))}var fx={exports:{}};fx.exports=function(e){return hx(jC(e),e)};fx.exports.array=hx;function hx(e,t){var r=e.length,o=new Array(r),s={},i=r,l=yC(t),a=SC(e);for(t.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||d(e[i],i,new Set);return o;function d(c,u,f){if(f.has(c)){var g;try{g=", node was:"+JSON.stringify(c)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!s[u]){s[u]=!0;var C=l.get(c)||new Set;if(C=Array.from(C),u=C.length){f.add(c);do{var _=C[--u];d(_,a.get(_),f)}while(u);f.delete(c)}o[--r]=c}}}function jC(e){for(var t=new Set,r=0,o=e.length;r<o;r++){var s=e[r];t.add(s[0]),t.add(s[1])}return Array.from(t)}function yC(e){for(var t=new Map,r=0,o=e.length;r<o;r++){var s=e[r];t.has(s[0])||t.set(s[0],new Set),t.has(s[1])||t.set(s[1],new Set),t.get(s[0]).add(s[1])}return t}function SC(e){for(var t=new Map,r=0,o=e.length;r<o;r++)t.set(e[r],r);return t}const FC=Object.prototype.toString,wC=Error.prototype.toString,CC=RegExp.prototype.toString,_C=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",EC=/^Symbol\((.*)\)(.*)$/;function TC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function tf(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const r=typeof e;if(r==="number")return TC(e);if(r==="string")return t?`"${e}"`:e;if(r==="function")return"[Function "+(e.name||"anonymous")+"]";if(r==="symbol")return _C.call(e).replace(EC,"Symbol($1)");const o=FC.call(e).slice(8,-1);return o==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):o==="Error"||e instanceof Error?"["+wC.call(e)+"]":o==="RegExp"?CC.call(e):null}function Jn(e,t){let r=tf(e,t);return r!==null?r:JSON.stringify(e,function(o,s){let i=tf(this[o],t);return i!==null?i:s},2)}function xx(e){return e==null?[]:[].concat(e)}let gx,LC=/\$\{\s*(\w+)\s*\}/g;gx=Symbol.toStringTag;class xt extends Error{static formatError(t,r){const o=r.label||r.path||"this";return o!==r.path&&(r=Object.assign({},r,{path:o})),typeof t=="string"?t.replace(LC,(s,i)=>Jn(r[i])):typeof t=="function"?t(r):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,r,o,s,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[gx]="Error",this.name="ValidationError",this.value=r,this.path=o,this.type=s,this.errors=[],this.inner=[],xx(t).forEach(l=>{if(xt.isError(l)){this.errors.push(...l.errors);const a=l.inner.length?l.inner:[l];this.inner.push(...a)}else this.errors.push(l)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,xt)}}let on={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:o})=>{const s=o!=null&&o!==r?` (cast from the value \`${Jn(o,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Jn(r,!0)}\``+s:`${e} must match the configured type. The validated value was: \`${Jn(r,!0)}\``+s}},Wt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},kC={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},ac={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},RC={isValue:"${path} field must be ${value}"},NC={noUnknown:"${path} field has unspecified keys: ${unknown}"},OC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},PC={notType:e=>{const{path:t,value:r,spec:o}=e,s=o.types.length;if(Array.isArray(r)){if(r.length<s)return`${t} tuple value has too few items, expected a length of ${s} but got ${r.length} for value: \`${Jn(r,!0)}\``;if(r.length>s)return`${t} tuple value has too many items, expected a length of ${s} but got ${r.length} for value: \`${Jn(r,!0)}\``}return xt.formatError(on.notType,e)}};Object.assign(Object.create(null),{mixed:on,string:Wt,number:kC,date:ac,object:NC,array:OC,boolean:RC,tuple:PC});const bx=e=>e&&e.__isYupSchema__;class Vl{static fromOptions(t,r){if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:o,then:s,otherwise:i}=r,l=typeof o=="function"?o:(...a)=>a.every(d=>d===o);return new Vl(t,(a,d)=>{var c;let u=l(...a)?s:i;return(c=u==null?void 0:u(d))!=null?c:d})}constructor(t,r){this.fn=void 0,this.refs=t,this.refs=t,this.fn=r}resolve(t,r){let o=this.refs.map(i=>i.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),s=this.fn(o,t,r);if(s===void 0||s===t)return t;if(!bx(s))throw new TypeError("conditions must return a schema object");return s.resolve(r)}}const Xi={context:"$",value:"."};class Ci{constructor(t,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Xi.context,this.isValue=this.key[0]===Xi.value,this.isSibling=!this.isContext&&!this.isValue;let o=this.isContext?Xi.context:this.isValue?Xi.value:"";this.path=this.key.slice(o.length),this.getter=this.path&&px.getter(this.path,!0),this.map=r.map}getValue(t,r,o){let s=this.isContext?o:this.isValue?t:r;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(t,r){return this.getValue(t,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Ci.prototype.__isYupRef=!0;const Er=e=>e==null;function oo(e){function t({value:r,path:o="",options:s,originalValue:i,schema:l},a,d){const{name:c,test:u,params:f,message:g,skipAbsent:C}=e;let{parent:_,context:E,abortEarly:N=l.spec.abortEarly,disableStackTrace:b=l.spec.disableStackTrace}=s;function m(I){return Ci.isRef(I)?I.getValue(r,_,E):I}function p(I={}){var J;const ee=Object.assign({value:r,originalValue:i,label:l.spec.label,path:I.path||o,spec:l.spec},f,I.params);for(const Fe of Object.keys(ee))ee[Fe]=m(ee[Fe]);const pe=new xt(xt.formatError(I.message||g,ee),r,ee.path,I.type||c,(J=I.disableStackTrace)!=null?J:b);return pe.params=ee,pe}const v=N?a:d;let j={path:o,parent:_,type:c,from:s.from,createError:p,resolve:m,options:s,originalValue:i,schema:l};const h=I=>{xt.isError(I)?v(I):I?d(null):v(p())},F=I=>{xt.isError(I)?v(I):a(I)};if(C&&Er(r))return h(!0);let k;try{var M;if(k=u.call(j,r,j),typeof((M=k)==null?void 0:M.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${j.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(k).then(h,F)}}catch(I){F(I);return}h(k)}return t.OPTIONS=e,t}function AC(e,t,r,o=r){let s,i,l;return t?(px.forEach(t,(a,d,c)=>{let u=d?a.slice(1,a.length-1):a;e=e.resolve({context:o,parent:s,value:r});let f=e.type==="tuple",g=c?parseInt(u,10):0;if(e.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${l}" must contain an index to the tuple element, e.g. "${l}[0]"`);if(r&&g>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);s=r,r=r&&r[g],e=f?e.spec.types[g]:e.innerType}if(!c){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${l} which is a type: "${e.type}")`);s=r,r=r&&r[u],e=e.fields[u]}i=u,l=d?"["+a+"]":"."+a}),{schema:e,parent:s,parentPath:i}):{parent:s,parentPath:t,schema:e}}class Ul extends Set{describe(){const t=[];for(const r of this.values())t.push(Ci.isRef(r)?r.describe():r);return t}resolveAll(t){let r=[];for(const o of this.values())r.push(t(o));return r}clone(){return new Ul(this.values())}merge(t,r){const o=this.clone();return t.forEach(s=>o.add(s)),r.forEach(s=>o.delete(s)),o}}function Eo(e,t=new Map){if(bx(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let r;if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=new Array(e.length),t.set(e,r);for(let o=0;o<e.length;o++)r[o]=Eo(e[o],t)}else if(e instanceof Map){r=new Map,t.set(e,r);for(const[o,s]of e.entries())r.set(o,Eo(s,t))}else if(e instanceof Set){r=new Set,t.set(e,r);for(const o of e)r.add(Eo(o,t))}else if(e instanceof Object){r={},t.set(e,r);for(const[o,s]of Object.entries(e))r[o]=Eo(s,t)}else throw Error(`Unable to clone ${e}`);return r}class sr{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Ul,this._blacklist=new Ul,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(on.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(r=>{r.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeCheck=this._typeCheck,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.internalTests=Object.assign({},this.internalTests),r.exclusiveTests=Object.assign({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=Eo(Object.assign({},this.spec,t)),r}label(t){let r=this.clone();return r.spec.label=t,r}meta(...t){if(t.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},t[0]),r}withMutation(t){let r=this._mutate;this._mutate=!0;let o=t(this);return this._mutate=r,o}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let r=this,o=t.clone();const s=Object.assign({},r.spec,o.spec);return o.spec=s,o.internalTests=Object.assign({},r.internalTests,o.internalTests),o._whitelist=r._whitelist.merge(t._whitelist,t._blacklist),o._blacklist=r._blacklist.merge(t._blacklist,t._whitelist),o.tests=r.tests,o.exclusiveTests=r.exclusiveTests,o.withMutation(i=>{t.tests.forEach(l=>{i.test(l.OPTIONS)})}),o.transforms=[...r.transforms,...o.transforms],o}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let r=this;if(r.conditions.length){let o=r.conditions;r=r.clone(),r.conditions=[],r=o.reduce((s,i)=>i.resolve(s,t),r),r=r.resolve(t)}return r}resolveOptions(t){var r,o,s,i;return Object.assign({},t,{from:t.from||[],strict:(r=t.strict)!=null?r:this.spec.strict,abortEarly:(o=t.abortEarly)!=null?o:this.spec.abortEarly,recursive:(s=t.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,r={}){let o=this.resolve(Object.assign({value:t},r)),s=r.assert==="ignore-optionality",i=o._cast(t,r);if(r.assert!==!1&&!o.isType(i)){if(s&&Er(i))return i;let l=Jn(t),a=Jn(i);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${o.type}". 

attempted value: ${l} 
`+(a!==l?`result of cast: ${a}`:""))}return i}_cast(t,r){let o=t===void 0?t:this.transforms.reduce((s,i)=>i.call(this,s,t,this),t);return o===void 0&&(o=this.getDefault(r)),o}_validate(t,r={},o,s){let{path:i,originalValue:l=t,strict:a=this.spec.strict}=r,d=t;a||(d=this._cast(d,Object.assign({assert:!1},r)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:i,value:d,originalValue:l,options:r,tests:c},o,u=>{if(u.length)return s(u,d);this.runTests({path:i,value:d,originalValue:l,options:r,tests:this.tests},o,s)})}runTests(t,r,o){let s=!1,{tests:i,value:l,originalValue:a,path:d,options:c}=t,u=E=>{s||(s=!0,r(E,l))},f=E=>{s||(s=!0,o(E,l))},g=i.length,C=[];if(!g)return f([]);let _={value:l,originalValue:a,path:d,options:c,schema:this};for(let E=0;E<i.length;E++){const N=i[E];N(_,u,function(m){m&&(Array.isArray(m)?C.push(...m):C.push(m)),--g<=0&&f(C)})}}asNestedTest({key:t,index:r,parent:o,parentPath:s,originalParent:i,options:l}){const a=t??r;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const d=typeof a=="number";let c=o[a];const u=Object.assign({},l,{strict:!0,parent:o,value:c,originalValue:i[a],key:void 0,[d?"index":"key"]:a,path:d||a.includes(".")?`${s||""}[${c?a:`"${a}"`}]`:(s?`${s}.`:"")+t});return(f,g,C)=>this.resolve(u)._validate(c,u,g,C)}validate(t,r){var o;let s=this.resolve(Object.assign({},r,{value:t})),i=(o=r==null?void 0:r.disableStackTrace)!=null?o:s.spec.disableStackTrace;return new Promise((l,a)=>s._validate(t,r,(d,c)=>{xt.isError(d)&&(d.value=c),a(d)},(d,c)=>{d.length?a(new xt(d,c,void 0,void 0,i)):l(c)}))}validateSync(t,r){var o;let s=this.resolve(Object.assign({},r,{value:t})),i,l=(o=r==null?void 0:r.disableStackTrace)!=null?o:s.spec.disableStackTrace;return s._validate(t,Object.assign({},r,{sync:!0}),(a,d)=>{throw xt.isError(a)&&(a.value=d),a},(a,d)=>{if(a.length)throw new xt(a,t,void 0,void 0,l);i=d}),i}isValid(t,r){return this.validate(t,r).then(()=>!0,o=>{if(xt.isError(o))return!1;throw o})}isValidSync(t,r){try{return this.validateSync(t,r),!0}catch(o){if(xt.isError(o))return!1;throw o}}_getDefault(t){let r=this.spec.default;return r==null?r:typeof r=="function"?r.call(this,t):Eo(r)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,r){const o=this.clone({nullable:t});return o.internalTests.nullable=oo({message:r,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),o}optionality(t,r){const o=this.clone({optional:t});return o.internalTests.optionality=oo({message:r,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),o}optional(){return this.optionality(!0)}defined(t=on.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=on.notNull){return this.nullability(!1,t)}required(t=on.required){return this.clone().withMutation(r=>r.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let r=this.clone();return r.transforms.push(t),r}test(...t){let r;if(t.length===1?typeof t[0]=="function"?r={test:t[0]}:r=t[0]:t.length===2?r={name:t[0],test:t[1]}:r={name:t[0],message:t[1],test:t[2]},r.message===void 0&&(r.message=on.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let o=this.clone(),s=oo(r),i=r.exclusive||r.name&&o.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(o.exclusiveTests[r.name]=!!r.exclusive),o.tests=o.tests.filter(l=>!(l.OPTIONS.name===r.name&&(i||l.OPTIONS.test===s.OPTIONS.test))),o.tests.push(s),o}when(t,r){!Array.isArray(t)&&typeof t!="string"&&(r=t,t=".");let o=this.clone(),s=xx(t).map(i=>new Ci(i));return s.forEach(i=>{i.isSibling&&o.deps.push(i.key)}),o.conditions.push(typeof r=="function"?new Vl(s,r):Vl.fromOptions(s,r)),o}typeError(t){let r=this.clone();return r.internalTests.typeError=oo({message:t,name:"typeError",skipAbsent:!0,test(o){return this.schema._typeCheck(o)?!0:this.createError({params:{type:this.schema.type}})}}),r}oneOf(t,r=on.oneOf){let o=this.clone();return t.forEach(s=>{o._whitelist.add(s),o._blacklist.delete(s)}),o.internalTests.whiteList=oo({message:r,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,l=i.resolveAll(this.resolve);return l.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:l}})}}),o}notOneOf(t,r=on.notOneOf){let o=this.clone();return t.forEach(s=>{o._blacklist.add(s),o._whitelist.delete(s)}),o.internalTests.blacklist=oo({message:r,name:"notOneOf",test(s){let i=this.schema._blacklist,l=i.resolveAll(this.resolve);return l.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:l}}):!0}}),o}strip(t=!0){let r=this.clone();return r.spec.strip=t,r}describe(t){const r=(t?this.resolve(t):this).clone(),{label:o,meta:s,optional:i,nullable:l}=r.spec;return{meta:s,label:o,optional:i,nullable:l,default:r.getDefault(t),type:r.type,oneOf:r._whitelist.describe(),notOneOf:r._blacklist.describe(),tests:r.tests.map(d=>({name:d.OPTIONS.name,params:d.OPTIONS.params})).filter((d,c,u)=>u.findIndex(f=>f.name===d.name)===c)}}}sr.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])sr.prototype[`${e}At`]=function(t,r,o={}){const{parent:s,parentPath:i,schema:l}=AC(this,t,r,o.context);return l[e](s&&s[i],Object.assign({},o,{parent:s,path:t}))};for(const e of["equals","is"])sr.prototype[e]=sr.prototype.oneOf;for(const e of["not","nope"])sr.prototype[e]=sr.prototype.notOneOf;let MC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,IC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,DC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,$C=e=>Er(e)||e===e.trim(),zC={}.toString();function Ut(){return new vx}class vx extends sr{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,r,o)=>{if(!o.spec.coerce||o.isType(t)||Array.isArray(t))return t;const s=t!=null&&t.toString?t.toString():t;return s===zC?t:s})})}required(t){return super.required(t).withMutation(r=>r.test({message:t||on.required,name:"required",skipAbsent:!0,test:o=>!!o.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(r=>r.OPTIONS.name!=="required"),t))}length(t,r=Wt.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(o){return o.length===this.resolve(t)}})}min(t,r=Wt.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o.length>=this.resolve(t)}})}max(t,r=Wt.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:t},skipAbsent:!0,test(o){return o.length<=this.resolve(t)}})}matches(t,r){let o=!1,s,i;return r&&(typeof r=="object"?{excludeEmptyString:o=!1,message:s,name:i}=r:s=r),this.test({name:i||"matches",message:s||Wt.matches,params:{regex:t},skipAbsent:!0,test:l=>l===""&&o||l.search(t)!==-1})}email(t=Wt.email){return this.matches(MC,{name:"email",message:t,excludeEmptyString:!0})}url(t=Wt.url){return this.matches(IC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Wt.uuid){return this.matches(DC,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Wt.trim){return this.transform(r=>r!=null?r.trim():r).test({message:t,name:"trim",test:$C})}lowercase(t=Wt.lowercase){return this.transform(r=>Er(r)?r:r.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Er(r)||r===r.toLowerCase()})}uppercase(t=Wt.uppercase){return this.transform(r=>Er(r)?r:r.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:r=>Er(r)||r===r.toUpperCase()})}}Ut.prototype=vx.prototype;const BC=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function xn(e,t=0){return Number(e)||t}function VC(e){const t=BC.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const r={year:xn(t[1]),month:xn(t[2],1)-1,day:xn(t[3],1),hour:xn(t[4]),minute:xn(t[5]),second:xn(t[6]),millisecond:t[7]?xn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:xn(t[10]),minuteOffset:xn(t[11])};if(r.z===void 0&&r.plusMinus===void 0)return new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond).valueOf();let o=0;return r.z!=="Z"&&r.plusMinus!==void 0&&(o=r.hourOffset*60+r.minuteOffset,r.plusMinus==="+"&&(o=0-o)),Date.UTC(r.year,r.month,r.day,r.hour,r.minute+o,r.second,r.millisecond)}let UC=new Date(""),qC=e=>Object.prototype.toString.call(e)==="[object Date]";class Du extends sr{constructor(){super({type:"date",check(t){return qC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,r,o)=>!o.spec.coerce||o.isType(t)||t===null?t:(t=VC(t),isNaN(t)?Du.INVALID_DATE:new Date(t)))})}prepareParam(t,r){let o;if(Ci.isRef(t))o=t;else{let s=this.cast(t);if(!this._typeCheck(s))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);o=s}return o}min(t,r=ac.min){let o=this.prepareParam(t,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(s){return s>=this.resolve(o)}})}max(t,r=ac.max){let o=this.prepareParam(t,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(s){return s<=this.resolve(o)}})}}Du.INVALID_DATE=UC;const HC={username:{label:"Username",help:"Enter your username",validate:e=>Ut().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Ut().trim().required("You must enter your password you muppet!").validate(e)}},YC=()=>n.jsxs(S,{fields:HC,children:[n.jsx(nt,{names:"username password"}),n.jsx(W,{})]}),WC=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,ZC={username:{label:"Username",help:"Enter your username",validate:async(e,t,r,o)=>{e.match(/badger/i)?r({value:`${e} is a great name`}):o({value:"Mr Badger",message:'Your username must contain the word "badger"'})}}},GC=()=>n.jsxs(S,{fields:ZC,children:[n.jsx(x,{name:"username"}),n.jsx(W,{})]}),KC=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValidateExample`,QC=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validate"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can use the ",n.jsx(Be,{})," property to mark a field as being required, but it's a blunt instrument.  All it will do is check that a field has some value entered. For more robust validation you can use the ",n.jsx("code",{children:"validate"})," property to define an ",n.jsx("code",{children:"async"})," ","validation function."]}),n.jsxs("p",{children:["In this example we're using"," ",n.jsx("a",{href:"https://www.npmjs.com/package/yup",children:"Yup"})," but you can use anything you like.  It should return the validated value on success or throw an error if the valid is invalid."]})]}),n.jsx(G,{children:"Try submitting the form without entering any values for either of the fields. You should see the custom validation errors."})]}),n.jsx(y,{Component:YC,code:WC,caption:"validate"}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed four arguments.  The first is the field value for common cases where that's all you need to determine if the field is valid.  The second argument is the field context containing everything you need to know about the field state and callable actions to change it.  The third and fourth arguments are"," ",n.jsx("code",{children:"resolve"})," and ",n.jsx("code",{children:"reject"})," functions which can be called to validate or invalidate the field, respectively.  The"," ",n.jsx("code",{children:"resolve"})," function should be passed an object containing the ",n.jsx("code",{children:"value"}),", which may be modified by your function. The ",n.jsx("code",{children:"reject"})," function should be passed an object containing an error ",n.jsx("code",{children:"message"}),", and optionally a new ",n.jsx("code",{children:"value"})," ","for the field."]}),n.jsx(lt,{children:'In this somewhat contrived example we require the user to enter a username containing the word "badger".'})]}),n.jsx(y,{Component:GC,code:KC,caption:"validate"}),n.jsx(te,{links:[Be,Bt,Vt]})]}),XC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),JC={username:{label:"Username",help:"Enter your username",validate:e=>Ut().trim().required("You must enter your username you numpty!").validate(e)},password:{label:"Password",type:"password",help:"Enter your password",validate:e=>Ut().trim().required("You must enter your password you muppet!").validate(e)}},e_=()=>n.jsxs(S,{fields:JC,validateOnBlur:!0,children:[n.jsx(nt,{names:"username password"}),n.jsx(W,{})]}),t_=`import { Form, Fields, Submit } from '@/lib/index.js'

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

export default ValidateExample`,n_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnBlur"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validateOnBlur"})," property can be set to trigger validation whenever a field is blurred.  You can set it on individual"," ",n.jsx(X,{})," components or on the parent ",n.jsx(ue,{})," to have it apply to all fields."]}),n.jsx(G,{children:"Try switching focus from one field to another without entering anything.  You should see the custom validation errors when each field is blurred."})]}),n.jsx(y,{Component:e_,code:t_,caption:"validate"}),n.jsx(te,{links:[Be,zt,Vt]})]}),r_=Object.freeze(Object.defineProperty({__proto__:null,default:n_},Symbol.toStringTag,{value:"Module"})),o_=`import { Form, Field } from '@/lib/index.js'

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

export default ValidateOnChangeExample`,s_={vowels:{label:"Vowels",help:"Enter between 3 and 5 vowels",validateOnChange:!0,minValidateLength:3,validate:e=>Ut().trim().matches(/^[^y]*$/i,"Sorry, but y is not allowed").matches(/^[aeiou]*$/i,"You should only type vowels").min(3,"You must enter at least three vowels").max(5,"You should not enter more than 5 vowels").validate(e)}},i_=()=>n.jsx(S,{fields:s_,children:n.jsx(x,{name:"vowels"})}),l_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnChange"}),n.jsxs($,{children:[n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"validateOnChange"})," flag to enable validation any time the field value changes.  The ",n.jsx(li,{})," ","property can be set to only trigger validation when the input length exceeds a threshold."]}),n.jsx(G,{children:"Enter some text in the field below.  Once you've entered three letters the validation will kick in.  You should see an error if you enter any letters that aren't vowels."})]}),n.jsx(y,{Component:i_,code:o_,caption:"validateOnChange"}),n.jsx(te,{links:[Be,zt,Bt,li]})]}),a_=Object.freeze(Object.defineProperty({__proto__:null,default:l_},Symbol.toStringTag,{value:"Module"})),d_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnInvalid"}),n.jsxs("p",{children:["Fields are normally validated when the form is submitted. The ",n.jsx(Vt,{})," and ",n.jsx(Bt,{})," options can be set to change this."]}),n.jsxs("p",{children:["If a field fails validation it will then switch to validating on change.  This option can be set to ",n.jsx("code",{children:"false"})," to prevent this behaviour."]})]}),c_=Object.freeze(Object.defineProperty({__proto__:null,default:d_},Symbol.toStringTag,{value:"Module"})),u_={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},m_=()=>n.jsx(S,{fields:u_,children:n.jsx(nt,{names:"name message"})}),p_=`import { Form, Fields } from '@/lib/index.js'

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
`,jx=()=>n.jsx(Ke,{menu:I2}),f_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fields"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Fields"})," component can be used to render multiple fields."]}),n.jsxs($,{children:[n.jsx("p",{children:"This is a shortcut for convenience, but it depends on you having all your form fields defined in a separate schema so you can reference them only by name."}),n.jsxs("p",{children:["The ",n.jsx(O7,{})," property should be used to specify the list of field names.  It renders each of the fields, collected together in a single"," ",n.jsx("code",{className:"code",children:"div"})," element"]})]}),n.jsx(y,{Component:m_,code:p_,caption:"Fields"}),n.jsx(jx,{})]}),h_=Object.freeze(Object.defineProperty({__proto__:null,default:f_},Symbol.toStringTag,{value:"Module"})),x_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fields Properties"}),n.jsx(_e,{}),n.jsx(jx,{})]}),g_=Object.freeze(Object.defineProperty({__proto__:null,default:x_},Symbol.toStringTag,{value:"Module"})),b_={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},v_=()=>n.jsx(S,{fields:b_,children:n.jsx(nt,{names:"name email",className:"border pad-4 bgc-95 bgd-5 bdr-2"})}),j_=`import { Form, Fields } from '@/lib/index.js'

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
`,y_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to add a CSS class to the fields container."]}),n.jsx(y,{Component:v_,code:j_,caption:"className"})]}),S_=Object.freeze(Object.defineProperty({__proto__:null,default:y_},Symbol.toStringTag,{value:"Module"})),F_={forename:{label:"First Name",required:!0},surname:{label:"Surname",required:!0},company:{label:"Company",required:!0},job_title:{label:"Job Title",required:!0}},w_=()=>n.jsx(S,{fields:F_,children:n.jsx(nt,{names:"forename surname company job_title",grid:2,gap:8})}),C_=`import { Form, Fields } from '@/lib/index.js'

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
`,__=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"gap"})," property can be used to set a custom horizontal gap between fields when the ",n.jsx(P7,{})," option is set.  The value should be an integer number of margin units of 0.25rem. The default value is 4 (1rem)."]}),n.jsx(y,{Component:w_,code:C_,caption:"gap"})]}),E_=Object.freeze(Object.defineProperty({__proto__:null,default:__},Symbol.toStringTag,{value:"Module"})),T_={name:{label:"Name",required:!0},email:{label:"Email Address",required:!0}},L_=()=>n.jsx(S,{fields:T_,children:n.jsx(nt,{names:"name email",grid:2})}),k_=`import { Form, Fields } from '@/lib/index.js'

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
`,R_={one:{label:"One"},two:{label:"Two"},three:{label:"Three"}},N_=()=>n.jsx(S,{fields:R_,children:n.jsx(nt,{names:"one two three",grid:!0})}),O_=`import { Form, Fields } from '@/lib/index.js'

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
`,P_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"grid"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"grid"})," property can be used to layout the fields in a grid.  Set the property to the number of columns you want.  The default gap between the fields will be 1rem (using the"," ",n.jsx("code",{children:"gap-h-4"})," utility class provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/utilities/grid",children:"Badger-CSS"}),")."]}),n.jsx(y,{Component:L_,code:k_,caption:"grid"}),n.jsxs("p",{children:["You can also specify ",n.jsx("code",{children:"grid"})," as the boolean value"," ",n.jsx("code",{children:"true"})," (which React will conveniently set for you if you include it as a valueless property) and it will automatically select the correct number of columns based on how many fields it is rendering."]}),n.jsx(y,{Component:N_,code:O_,caption:"grid"})]}),A_=Object.freeze(Object.defineProperty({__proto__:null,default:P_},Symbol.toStringTag,{value:"Module"})),M_=`export const fields = {
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
`,yx={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"},badgers:{label:"Do you like badgers?",type:"checkbox",text:"Yes, of course I do"},animal:{label:"What is your favourite animal?",type:"radio",options:["Badger","Ferret","Stoat"]}},I_=()=>n.jsx(S,{fields:yx,children:n.jsx(nt,{names:"name message badgers animal"})}),D_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names="name message badgers animal"/>
  </Form>

export default FieldsExample
`,$_=()=>n.jsx(S,{fields:yx,children:n.jsx(nt,{names:["name","message","badgers","animal"]})}),z_=`import { Form, Fields } from '@/lib/index.js'

{/* START */}
import React from 'react'
import fields from './Fields.jsx'
// PRETEND: import { Form, Fields } from '@abw/badger-form'

const FieldsExample = () =>
  <Form fields={fields}>
    <Fields names={['name', 'message', 'badgers', 'animal']}/>
  </Form>

export default FieldsExample
`,B_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"names"}),n.jsxs("p",{children:["The ",n.jsx("code",{className:"code",children:"names"})," property should be used to specify the list of field names.  This can be a string of whitespace delimited field names that should be defined in the ",n.jsx(ue,{})," ",n.jsx(Ct,{}),"."]}),n.jsx(y,{Component:I_,code:D_,caption:"Fields",expand:!0}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"names"})," can also be an array of field names."]}),n.jsx(y,{Component:$_,code:z_,caption:"Fields",expand:!0}),n.jsxs("p",{children:["In the above examples the ",n.jsx("code",{children:"fields"})," are defined in a separate ",n.jsx("code",{children:"Fields.jsx"})," module, shown below."]}),n.jsx(Ze,{code:an(M_),caption:"Fields.jsx"})]}),V_=Object.freeze(Object.defineProperty({__proto__:null,default:B_},Symbol.toStringTag,{value:"Module"})),U_={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},q_=()=>n.jsx(S,{fields:U_,children:n.jsx(nt,{names:"alpha bravo charlie delta echo foxtrot",grid:3,stack:"tablet"})}),H_=`import { Form, Fields } from '@/lib/index.js'

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
`,Y_=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"stack"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"stack"})," property can be used to define a stacking breakpoint.  This will add the corresponding ",n.jsx("code",{children:"stack-XXX"})," CSS class.  Try resizing your browser window to see the effect.  With a width of less than 800px, the fields will be stacked, otherwise they will be displayed in three columns."]}),n.jsx(y,{Component:q_,code:H_,caption:"stack"})]}),W_=Object.freeze(Object.defineProperty({__proto__:null,default:Y_},Symbol.toStringTag,{value:"Module"})),Z_=()=>n.jsx(S,{children:n.jsxs(Ar,{children:[n.jsx(x,{name:"one",label:"Field One"}),n.jsx(x,{name:"one",label:"Field Two"})]})}),G_=`import { Form, Field, Fieldset } from '@/lib/index.js'

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
`,Sx=()=>n.jsx(Ke,{menu:D2}),K_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fieldset"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Fieldset"})," component can be used to create a field set containing one or more ",n.jsx(X,{})," components."]}),n.jsx(y,{Component:Z_,code:G_,caption:"Fieldset",expand:!0}),n.jsx(Sx,{})]}),Q_=Object.freeze(Object.defineProperty({__proto__:null,default:K_},Symbol.toStringTag,{value:"Module"})),X_=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Fieldset Properties"}),n.jsx(_e,{}),n.jsx(Sx,{})]}),J_=Object.freeze(Object.defineProperty({__proto__:null,default:X_},Symbol.toStringTag,{value:"Module"})),eE={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},tE=()=>n.jsx(S,{fields:eE,children:n.jsx(Ar,{legend:"Fieldset Two",fields:"name message",className:"prominent"})}),nE=`import { Form, Fieldset } from '@/lib/index.js'

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
`,rE=`fieldset.prominent {
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
}`,oE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a CSS class to the fieldset container."]}),n.jsx(y,{Component:tE,code:nE,caption:"Fieldset className",expand:!0}),n.jsx("h2",{children:"Additional Styles"}),n.jsx("p",{children:"For completeness, here's the additional CSS we're using to apply the styling in the above example."}),n.jsx(Ze,{code:rE,caption:"fieldset.scss",language:"css",expand:!0})]}),sE=Object.freeze(Object.defineProperty({__proto__:null,default:oE},Symbol.toStringTag,{value:"Module"})),iE={name:{label:"Enter your name",placeholder:"Your name"},message:{label:"Enter a message",placeholder:"Hello World"}},lE=()=>n.jsx(S,{fields:iE,children:n.jsx(Ar,{legend:"Fieldset Two",fields:"name message"})}),aE=`import React from 'react'
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
`,dE={alpha:{label:"Alpha"},bravo:{label:"Bravo"},charlie:{label:"Charlie"},delta:{label:"Delta"},echo:{label:"Echo"},foxtrot:{label:"Foxtrot"}},cE=()=>n.jsx(S,{fields:dE,children:n.jsx(Ar,{legend:"Fieldset Grid",fields:"alpha bravo charlie delta echo foxtrot",grid:2,stack:"laptop"})}),uE=`import React from 'react'
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
`,mE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," property can be used as a shortcut to render a set of named fields using the"," ",n.jsx(Bl,{})," component."]}),n.jsx(y,{Component:lE,code:aE,caption:"fields",expand:!0}),n.jsxs("h2",{children:[n.jsx("span",{className:"font-mono",children:"grid"}),","," ",n.jsx("span",{className:"font-mono",children:"gap"})," and "," ",n.jsx("span",{className:"font-mono",children:"stack"})]}),n.jsxs("p",{children:["Any other properties are forwarded onto the ",n.jsx(Bl,{})," component. For example, you can set the ",n.jsx("code",{children:"grid"}),", ",n.jsx("code",{children:"gap"})," and"," ",n.jsx("code",{children:"stack"})," properties to set the layout to implement a grid layout."]}),n.jsx(y,{Component:cE,code:uE,caption:"Fieldset Grid",expand:!0})]}),pE=Object.freeze(Object.defineProperty({__proto__:null,default:mE},Symbol.toStringTag,{value:"Module"})),fE=()=>n.jsx(S,{children:n.jsxs(Ar,{legend:"Fieldset One",children:[n.jsx(x,{name:"one",label:"Field One"}),n.jsx(x,{name:"one",label:"Field Two"})]})}),hE=`import React from 'react'
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
`,xE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"legend"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"legend"})," property can be used to add a legend to the fieldset container."]}),n.jsx(y,{Component:fE,code:hE,caption:"legend",undent:2,expand:!0})]}),gE=Object.freeze(Object.defineProperty({__proto__:null,default:xE},Symbol.toStringTag,{value:"Module"})),_i=()=>n.jsx(Ke,{menu:A2}),bE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Events"}),n.jsx(_e,{}),n.jsx(_i,{})]}),vE=Object.freeze(Object.defineProperty({__proto__:null,default:bE},Symbol.toStringTag,{value:"Module"})),jE=()=>{const[e,t]=T.useState(),r=async s=>(await mn(1e3),Promise.reject({message:`Dummy failed API call with foo: ${s.foo}`})),o=s=>{t(s.message)};return n.jsxs(S,{onSubmit:r,onError:o,debug:!0,children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(W,{}),e&&n.jsx("div",{className:"error alert mar-t-2",children:e})]})},yE=`import { Form, Field, Submit } from '@/lib/index.js'
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

export default OnErrorExample`,SE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onError"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onError"})," property can be used to define a function that will be called in the event of a failed submission of the form."]}),n.jsx(y,{Component:jE,code:yE,caption:"onError"}),n.jsx(te,{links:[un,si]})]}),FE=Object.freeze(Object.defineProperty({__proto__:null,default:SE},Symbol.toStringTag,{value:"Module"})),wE=()=>{const[e,t]=T.useState(),r=o=>e==null?void 0:e.setValues({animal:o});return n.jsxs(n.Fragment,{children:[n.jsx(S,{onLoad:t,children:n.jsx(x,{name:"animal",label:"Animal"})}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx("button",{onClick:()=>r("Badger"),children:"Badger"}),n.jsx("button",{onClick:()=>r("Ferret"),children:"Ferret"})]})]})},CE=`import { Form, Field } from '@/lib/index.js'

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

export default OnLoadExample`,_E=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onLoad"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onLoad"})," property can be used to define a function that will be called when the form is loaded.  This allows you to capture a reference to the form context object for manipulating the form programmatically."]}),n.jsx(y,{Component:wE,code:CE,caption:"onLoad"})]}),EE=Object.freeze(Object.defineProperty({__proto__:null,default:_E},Symbol.toStringTag,{value:"Module"})),TE=()=>{const[e,t]=T.useState();return n.jsxs(S,{onReset:()=>t("The form was reset"),children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(ur,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},LE=`import { Form, Field, Reset } from '@/lib/index.js'

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

export default OnResetExample`,kE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onReset"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onReset"})," property can be used to define a function that will be called when the form is reset."]}),n.jsx(y,{Component:TE,code:LE,caption:"onReset"}),n.jsx(te,{links:[un,si,Ao]})]}),RE=Object.freeze(Object.defineProperty({__proto__:null,default:kE},Symbol.toStringTag,{value:"Module"})),NE=()=>{const[e,t]=T.useState(),r=o=>t(`Form submitted, foo is ${o.foo}`);return n.jsxs(S,{onSubmit:r,children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(W,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},OE=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default OnSubmitExample`,PE=()=>{throw"The server is on fire.  Please try again later."},AE=()=>n.jsxs(S,{onSubmit:PE,children:[n.jsx(x,{name:"username",label:"Pick a username"}),n.jsx(Ve,{}),n.jsx(W,{})]}),ME=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default OnSubmitThrow`,IE=()=>Promise.reject({error:"Dear Sir/Madam, Fire! Fire! Help me!"}),DE=()=>n.jsxs(S,{onSubmit:IE,children:[n.jsx(x,{name:"message",label:"Message"}),n.jsx(Ve,{}),n.jsx(W,{})]}),$E=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default OnSubmitReject`,zE=e=>Promise.reject({errors:{username:`Sorry, ${e.username} is already taken`}}),BE=()=>n.jsxs(S,{onSubmit:zE,debug:!0,children:[n.jsx(x,{name:"username",label:"Pick a username",required:!0}),n.jsx(x,{name:"password",label:"Enter a password",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(W,{})]}),VE=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default OnSubmitFail`,UE=e=>Promise.reject({errors:[{name:"username",message:`Sorry, ${e.username} is already taken`},{field:"password",error:"Your password is too easy to guess"}]}),qE=()=>n.jsxs(S,{onSubmit:UE,children:[n.jsx(x,{name:"username",label:"Pick a username",required:!0}),n.jsx(x,{name:"password",label:"Choose a password",type:"password",required:!0}),n.jsx(Ve,{fieldErrors:!0}),n.jsx(W,{})]}),HE=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default OnSubmitErrors`,YE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onSubmit"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," property can be used to define a function that will be called when the form is submitted and has passed all the relevant validation checks."]}),n.jsx("p",{children:"In most cases this function will be making an API call to submit the form data.  The form values are passed to the function as the first argument.  The second argument is an object containing the form context in case you need it."})]}),n.jsx(y,{Component:NE,code:OE,caption:"onSubmit"}),n.jsx("h2",{children:"Server Error"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["In many cases the ",n.jsx("code",{children:"onSubmit"})," handler will be an asynchronous function which makes an API call.  The server should implement server-side form validation and may need to return a response indicating problems with the submitted fields."]}),n.jsxs("p",{children:["If an ",n.jsx("code",{children:"onSubmit"})," handler throws an error then it will be stored as the ",n.jsx("code",{children:"error"})," property in the form state"," ",". The ",n.jsx(Mo,{})," component can be used to display errors."]})]}),n.jsxs(G,{children:["Try submitting the form.  The ",n.jsx("code",{children:"onSubmit"})," handler throws an error which will be displayed by the ",n.jsx(Mo,{})," component."]})]}),n.jsx(y,{Component:AE,code:ME,caption:"onSubmit Throw",expand:!0}),n.jsxs("p",{children:["An ",n.jsx("code",{children:"onSubmit"})," handler can also return a rejected Promise. It should be an object containing an ",n.jsx("code",{children:"error"})," property."]}),n.jsx(y,{Component:DE,code:$E,caption:"onSubmit Reject",expand:!0}),n.jsx("h2",{children:"Field Errors"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," handler can return an ",n.jsx("code",{children:"errors"})," object as a rejected Promise. This can be an object in which the keys correspond to field names and the values are the error messages for the fields."]}),n.jsxs("p",{children:["The error messages will be set and displayed in the appropriate fields. You can also use the ",n.jsx(Mo,{})," component with the"," ",n.jsx(sx,{})," property to display them."]}),n.jsx(y,{Component:BE,code:VE,caption:"onSubmit errors",expand:!0}),n.jsxs("p",{children:["Alternately, the ",n.jsx("code",{children:"errors"})," returned can be an array of objects. Each object should have a ",n.jsx("code",{children:"name"}),", ",n.jsx("code",{children:"field"})," or"," ",n.jsx("code",{children:"param"})," property to identify the field name, and either an"," ",n.jsx("code",{children:"message"})," or ",n.jsx("code",{children:"error"})," string to provide the error."]}),n.jsx(y,{Component:qE,code:HE,caption:"onSubmit errors",expand:!0}),n.jsx(te,{links:[si,Ao]})]}),WE=Object.freeze(Object.defineProperty({__proto__:null,default:YE},Symbol.toStringTag,{value:"Module"})),ZE=()=>{const[e,t]=T.useState(),r=async s=>(await mn(1e3),Promise.resolve({ok:!0,message:`Dummy API call with foo: ${s.foo}`})),o=s=>{t(s.message)};return n.jsxs(S,{onSubmit:r,onSuccess:o,children:[n.jsx(x,{name:"foo",label:"Foo Field"}),n.jsx(W,{}),e&&n.jsx("div",{className:"info alert mar-t-2",children:e})]})},GE=`import { Form, Field, Submit } from '@/lib/index.js'
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

export default OnSuccessExample`,KE=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSuccess"})," property can be used to define a function that will be called in the event of a successful submission of the form."]}),n.jsxs("p",{children:["It will be passed the response data returned from the ",n.jsx(un,{})," ","handler."]}),n.jsx(y,{Component:ZE,code:GE,caption:"onSuccess"}),n.jsx(te,{links:[un,Ao]})]}),QE=Object.freeze(Object.defineProperty({__proto__:null,default:KE},Symbol.toStringTag,{value:"Module"})),XE=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Functions"}),n.jsx(_e,{}),n.jsx(_i,{})]}),JE=Object.freeze(Object.defineProperty({__proto__:null,default:XE},Symbol.toStringTag,{value:"Module"})),eT=()=>n.jsxs(S,{children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"}),e=>n.jsx("button",{onClick:e.reset,children:"Reset"})]}),tT=`import { Form, Field } from '@/lib/index.js'

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

export default ResetExample`,nT=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two"}),n.jsx(rT,{})]}),rT=()=>{const{reset:e}=fn();return n.jsx("button",{onClick:e,children:"Reset the Form"})},oT=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseFormReset`,sT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset()"}),n.jsxs($,{children:[n.jsx("div",{children:n.jsxs("p",{children:["You can programmatically reset a form by calling the the ",n.jsx("code",{children:"reset()"})," method."]})}),n.jsx(G,{children:"Enter some values in the fields and then click on the reset button."})]}),n.jsx(y,{Component:eT,code:tT,caption:"reset"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If the buttons (or other controls) that you want to use to reset the form are contained within the form then you can call the ",n.jsx("code",{children:"useForm()"})," function to gain access to the form context."]}),n.jsx(y,{Component:nT,code:oT,caption:"useForm() and reset()"}),n.jsx(te,{links:[J2,tx]})]}),iT=Object.freeze(Object.defineProperty({__proto__:null,default:sT},Symbol.toStringTag,{value:"Module"})),lT=`import { Form, Field } from '@/lib/index.js'

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

export default SetFocusExample`,aT=()=>{const[e,t]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(S,{onLoad:t,children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two",type:"textarea"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(x,{name:"field3",label:"Field Three",type:"checkbox",text:"One Louder"}),n.jsx(x,{name:"field4",label:"Field Four",type:"select",options:["Nigel","David","Derek"]})]}),n.jsx(x,{name:"field5",label:"Field Five",type:"radio",default:"Keyboards",optionClass:"inline",options:["Vocals","Guitar","Bass","Keyboards","Drums"]})]}),n.jsxs("div",{className:"mar-t-4 grid-fit gap-2",children:[n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field1"),children:"Focus One"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field2"),children:"Focus Two"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field3"),children:"Focus Three"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field4"),children:"Focus Four"}),n.jsx("button",{onClick:()=>e==null?void 0:e.setFocus("field5"),children:"Focus Five"})]})]})},dT=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseFormFocus`,cT=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(nf,{name:"field1",caption:"Focus Field One"}),n.jsx(nf,{name:"field2",caption:"Focus Field Two"})]})]}),nf=({name:e,caption:t})=>{const{setFocus:r}=fn();return n.jsx("button",{onClick:o=>{o.preventDefault(),r(e)},children:t})},uT=`import { useForm } from '@/lib/index.js'

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

export default FieldFocusButton`,mT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setFocus()"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can programmatically set the focus on a ",n.jsx(X,{})," by calling the ",n.jsx("code",{children:"setFocus()"})," method on the ",n.jsx(ue,{}),", passing the name of the field that you want to focus as an argument."]}),n.jsxs("p",{children:["You can capture a reference to the form using the ",n.jsx(F7,{})," ","property to set a state variable, as shown in this example."]})]}),n.jsx(G,{children:"Click on one of the buttons to focus on a field."})]}),n.jsx(y,{Component:aT,code:lT,caption:"onLoad() and setFocus()"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If the buttons (or other controls) that you want to use to focus the fields are contained within the ",n.jsx(ue,{})," then you can call the ",n.jsx("code",{children:"useForm()"})," function to gain access to the form context."]}),n.jsx(y,{Component:cT,code:dT,caption:"useForm() and setFocus()"}),n.jsx("h2",{children:"Preventing Default Event"}),n.jsxs($,{children:[n.jsxs("p",{children:["Be careful to make sure that your buttons call"," ",n.jsx("code",{children:"e.preventDefault()"})," on the event, as shown in the example above, otherwise the form may be submitted.  Alternately you can pass the event to the ",n.jsx("code",{children:"setFocus()"})," method as the second argument and it will do it for you, as shown below."]}),n.jsx(Ze,{code:an(uT),expand:!0})]})]}),pT=Object.freeze(Object.defineProperty({__proto__:null,default:mT},Symbol.toStringTag,{value:"Module"})),fT=`import { Form, Field } from '@/lib/index.js'

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

export default SetValues`,hT=()=>{const[e,t]=T.useState(),r=(o,s)=>e==null?void 0:e.setValues({color:o,animal:s});return n.jsxs(n.Fragment,{children:[n.jsxs(S,{onLoad:t,children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"})]}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx("button",{onClick:()=>r("Grey","Elephant"),children:"Grey Elephant"}),n.jsx("button",{onClick:()=>r("Red","Fox"),children:"Red Fox"})]})]})},xT=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseSetValues`,gT=()=>n.jsx(n.Fragment,{children:n.jsxs(S,{children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(rf,{color:"Grey",animal:"Elephant"}),n.jsx(rf,{color:"Red",animal:"Fox"})]})]})}),rf=({color:e,animal:t})=>{const{setValues:r}=fn();return n.jsxs("button",{onClick:o=>{o.preventDefault(),r({color:e,animal:t},o)},children:[e," ",t]})},bT=`import { Form, Field, useForm } from '@/lib/index.js'

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

export default UseSetValues`,vT=()=>n.jsx(n.Fragment,{children:n.jsxs(S,{children:[n.jsx(x,{name:"color",label:"Color"}),n.jsx(x,{name:"animal",label:"Animal"}),n.jsxs("div",{className:"grid-2 gap-4",children:[n.jsx(of,{color:"Grey",animal:"Elephant"}),n.jsx(of,{color:"Red",animal:"Fox"})]})]})}),of=({color:e,animal:t})=>{const{setValues:r}=fn();return n.jsxs("button",{onClick:o=>r({color:e,animal:t},o),children:[e," ",t]})},jT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"setValues()"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"setValues"})," function can be used to programmatically set form values.  You can use the ",n.jsx("code",{children:"onLoad"})," handler to save a reference to the form context as show in this example."]}),n.jsx(G,{children:"Click on one of the buttons to update the form values."})]}),n.jsx(y,{Component:hT,code:fT,caption:"setValues"}),n.jsx("h2",{className:"font-mono",children:"useForm"}),n.jsxs("p",{children:["If you want to set the values from a component placed inside the"," ",n.jsx("code",{children:"Form"})," component then you can use ",n.jsx("code",{children:"useForm()"})," to get access to the form context."]}),n.jsx(y,{Component:gT,code:xT,caption:"setValues"}),n.jsx("h2",{children:"Preventing Default Event"}),n.jsxs("p",{children:["If you're using a ",n.jsx("code",{children:"button"})," to trigger the call to"," ",n.jsx("code",{children:"setValues()"}),", as shown in the example above, then you need to make sure you call ",n.jsx("code",{children:"e.preventDefault()"})," event.  Otherwise the form may be submitted. Alternately you can pass the event as the second argument to the ",n.jsx("code",{children:"setValues()"})," method as shown below and it will do it for you."]}),n.jsx(y,{Component:vT,code:bT,caption:"setValues"})]}),yT=Object.freeze(Object.defineProperty({__proto__:null,default:jT},Symbol.toStringTag,{value:"Module"})),ST=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name",required:!0}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),e=>n.jsxs("div",{className:"flex space small",children:[n.jsx("button",{type:"button",onClick:()=>e.validate(),children:"Validate"}),n.jsx("button",{type:"button",onClick:()=>e.unvalidate(),children:"Unvalidate"})]}),n.jsx(kt,{status:!0})]}),FT=`import { Form, Field, Debug } from '@/lib/index.js'

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

export default UnvalidateExample`,wT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"unvalidate"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"unvalidate"})," function can be called to reset any validation state."]}),n.jsx(y,{Component:ST,code:FT,caption:"unvalidate",expand:!0}),n.jsx(te,{links:[ex,Ou]})]}),CT=Object.freeze(Object.defineProperty({__proto__:null,default:wT},Symbol.toStringTag,{value:"Module"})),_T=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FormExample`,ET=()=>n.jsxs(S,{children:[n.jsx(x,{name:"email",label:"Email Address",type:"text",required:!0}),n.jsx(x,{name:"password",label:"Password",type:"password",required:!0}),n.jsx(W,{})]}),TT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Form"})," component is used to render a form. Inside the form you will typically have one or more"," ",n.jsx(X,{})," components to render the fields and a ",n.jsx(Au,{})," component to add a submit button."]}),n.jsx(y,{Component:ET,code:_T,caption:"Form",expand:!0}),n.jsx(_i,{})]}),LT=Object.freeze(Object.defineProperty({__proto__:null,default:TT},Symbol.toStringTag,{value:"Module"})),kT=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Properties"}),n.jsx(_e,{}),n.jsx(_i,{})]}),RT=Object.freeze(Object.defineProperty({__proto__:null,default:kT},Symbol.toStringTag,{value:"Module"})),NT=`import { Form, Field } from '@/lib/index.js'

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

export default ChildFunctions`,OT=()=>n.jsxs(S,{children:[n.jsx(x,{name:"greeting",label:"Enter a greeting"}),e=>n.jsxs("div",{className:"flex gap-2 blue mar-t-4",children:[n.jsx("button",{type:"button",onClick:()=>e.setValues({greeting:"Hello"}),children:"Say Hello"}),n.jsx("button",{type:"button",onClick:()=>e.setValues({greeting:"Goodbye"}),children:"Say Goodbye"})]})]}),PT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"children"}),n.jsxs("p",{children:["You can define children of a form, either as components or functions. Components can access the form context via ",n.jsx("code",{children:"useForm"}),". Functions receive the form context as the first argument."]}),n.jsx(y,{Component:OT,code:NT,caption:"children",expand:!0})]}),AT=Object.freeze(Object.defineProperty({__proto__:null,default:PT},Symbol.toStringTag,{value:"Module"})),MT=()=>n.jsxs(S,{debug:!0,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(W,{})]}),IT=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const DebugExample = () =>
  <Form debug>
    <Field name="name" label="Name"/>
    <Field name="email" label="Email Address"/>
    <Submit/>
  </Form>

export default DebugExample`,DT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"debug"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"debug"})," property is your friend when it's 5pm on a Friday and you promised your boss/client that you would get the form changes made before you went home, but you can't figure out why it's not working."]}),n.jsx(G,{children:"Open up the Javascript console and watch the pretty messages go flying by!"})]}),n.jsx(y,{Component:MT,code:IT,caption:"debug",expand:!0}),n.jsx(te,{links:[zr]})]}),$T=Object.freeze(Object.defineProperty({__proto__:null,default:DT},Symbol.toStringTag,{value:"Module"})),zT=()=>{const e={name:{label:"Your name",required:!0},email:{label:"Your email address",required:!0}};return n.jsxs(S,{fields:e,children:[n.jsx(x,{name:"name"}),n.jsx(x,{name:"email"}),n.jsx(W,{})]})},BT=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default FieldsExample`,VT=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Your name",required:!0}),n.jsx(x,{name:"email",label:"Your email address",required:!0}),n.jsx(W,{})]}),UT=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const FieldsExample = () =>
  <Form>
    <Field name="name" label="Your name" required/>
    <Field name="email" label="Your email address" required/>
    <Submit/>
  </Form>

export default FieldsExample`,qT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," property allows you to define properties for form fields externally.  The ",n.jsx(X,{})," ",n.jsx(Dr,{})," property is used to associate a field to its definition."]}),n.jsx(y,{Component:zT,code:BT,caption:"fields"}),n.jsxs("p",{children:["This is the same as defining the properties on the ",n.jsx(X,{})," components."]}),n.jsx(y,{Component:VT,code:UT,caption:"fields"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"fields"})," definition can contain any number of fields, including those that aren't used by any particular form.  Only the fields that are referenced by a ",n.jsx(X,{})," component will be considered part of the form."]}),n.jsx("p",{children:"Although it requires a little more work to define fields externally, there are a number of benefits.  The first is that you're separating the field definition from the presentational markup.  When a form gets more complex it's usually easier to have them separated, particularly if you have more complicated validation functions attached to the fields."}),n.jsxs("p",{children:["Another benefit is that you can share field definitions across multiple forms.  For example, you might want to define a single set of field definitions for all forms relating to user authentication: login, registration, password reset, and so on.  The ",n.jsx("code",{children:"email"})," ","field will be the same for each, so it makes sense to define it in one place."]})]}),HT=Object.freeze(Object.defineProperty({__proto__:null,default:qT},Symbol.toStringTag,{value:"Module"})),YT=()=>{const e={user_id:12345},t={name:"Bobby Badger",email:"bobby@badgerpower.com"};return n.jsxs(S,{values:t,hidden:e,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(W,{})]})},WT=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HiddenExample`,ZT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"hidden"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"hidden"})," property can be used to define hidden values for the form.  This is typically used to include identifiers when editing existing data records."]}),n.jsxs("p",{children:["Any ",n.jsx("code",{children:"hidden"})," fields and their values will be included in the submitted data."]})]}),n.jsx(G,{children:"Submit the form below.  You should see an alert showing that the two visible fields and the hidden data were all submitted."})]}),n.jsx(y,{Component:YT,code:WT,caption:"hidden",expand:!0})]}),GT=Object.freeze(Object.defineProperty({__proto__:null,default:ZT},Symbol.toStringTag,{value:"Module"})),KT=()=>{const[e,t]=gt.useState(!1),r=()=>mn(1e3).then(()=>({ok:!0}));return n.jsxs(S,{onSubmit:r,resetOnSuccess:e,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsxs("div",{className:"flex space gap-2",children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",onChange:o=>t(o.target.checked),checked:e}),"resetOnSuccess"]}),n.jsx(W,{})]}),n.jsx(kt,{status:!0})]})},QT=`import { Form, Field, Submit, Debug } from '@/lib/index.js'

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

export default ResetOnSuccessExample`,XT=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"resetOnSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"resetOnSuccess"})," property can be set to automatically reset the form on successful submission."]}),n.jsx(y,{Component:KT,code:QT,caption:"resetOnSuccess",expand:!0}),n.jsx(te,{links:[Ou,ex]})]}),JT=Object.freeze(Object.defineProperty({__proto__:null,default:XT},Symbol.toStringTag,{value:"Module"})),eL=()=>{const e=()=>mn(1e3).then(()=>({ok:!0}));return n.jsxs(S,{onSubmit:e,unvalidateOnSuccess:!0,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(me,{space:!0}),n.jsx(kt,{status:!0})]})},tL=`import { Form, Field, ResetSubmit, Debug } from '@/lib/index.js'

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

export default UnvalidateOnSuccessExample`,nL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"unvalidateOnSuccess"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"unvalidateOnSuccess"})," property can be set to automatically clear any validation state on the form."]}),n.jsx(y,{Component:eL,code:tL,caption:"unvalidateOnSuccess",expand:!0}),n.jsx(te,{links:[tx,J2]})]}),rL=Object.freeze(Object.defineProperty({__proto__:null,default:nL},Symbol.toStringTag,{value:"Module"})),oL=()=>{const e={name:"Bobby Badger",email:"bobby@badgerpower.com"};return n.jsxs(S,{values:e,children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email Address"}),n.jsx(W,{})]})},sL=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default ValuesExample`,iL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"values"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"values"})," property can be used to pre-define values for fields in the form.  This is typically used when editing existing data records."]}),n.jsx(y,{Component:oL,code:sL,caption:"fields",expand:!0}),n.jsx(te,{links:[X2]})]}),lL=Object.freeze(Object.defineProperty({__proto__:null,default:iL},Symbol.toStringTag,{value:"Module"})),aL=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Validation"}),n.jsx(_e,{}),n.jsx(_i,{})]}),dL=Object.freeze(Object.defineProperty({__proto__:null,default:aL},Symbol.toStringTag,{value:"Module"})),cL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"focusInvalidField"}),n.jsxs("p",{children:["This property defaults to ",n.jsx("code",{children:"true"}),".  In this case the first field that fails validation will be automatically focussed."]}),n.jsxs("p",{children:["You can explicitly set it to ",n.jsx("code",{children:"false"})," if you need to."]})]}),uL=Object.freeze(Object.defineProperty({__proto__:null,default:cL},Symbol.toStringTag,{value:"Module"})),mL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"minValidateLength"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(li,{})," option for all fields. Individual fields can set their own values to override it."]})]}),pL=Object.freeze(Object.defineProperty({__proto__:null,default:mL},Symbol.toStringTag,{value:"Module"})),fL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionalLabel"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(ii,{})," option for all fields. Individual fields can set their own values to override it."]})]}),hL=Object.freeze(Object.defineProperty({__proto__:null,default:fL},Symbol.toStringTag,{value:"Module"})),xL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredLabel"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(Jo,{})," option for all fields. Individual fields can set their own values to override it."]})]}),gL=Object.freeze(Object.defineProperty({__proto__:null,default:xL},Symbol.toStringTag,{value:"Module"})),bL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"requiredMessage"}),n.jsxs("p",{children:["This option can be set to provide a default value for the"," ",n.jsx(Pu,{})," option for all fields. Individual fields can set their own values to override it."]})]}),vL=Object.freeze(Object.defineProperty({__proto__:null,default:bL},Symbol.toStringTag,{value:"Module"})),jL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showOptional"}),n.jsxs("p",{children:["This option can be set ",n.jsx("code",{children:"true"})," to enable the"," ",n.jsx($r,{})," option as the default for all fields. Individual fields can set it ",n.jsx("code",{children:"false"})," to override the default."]}),n.jsx("p",{children:'When enabled, optional fields will be display an "Optional" tag in the label.'})]}),yL=Object.freeze(Object.defineProperty({__proto__:null,default:jL},Symbol.toStringTag,{value:"Module"})),SL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"showRequired"}),n.jsxs("p",{children:["This option can be set ",n.jsx("code",{children:"true"})," to enable the"," ",n.jsx(Ln,{})," option as the default for all fields. Individual fields can set it ",n.jsx("code",{children:"false"})," to override the default."]}),n.jsx("p",{children:'When enabled, required fields will display a "Required" tag in the label.'})]}),FL=Object.freeze(Object.defineProperty({__proto__:null,default:SL},Symbol.toStringTag,{value:"Module"})),wL=e=>e.password1!==e.password2?Promise.reject({error:"The two passwords you entered don't match",errors:[{name:"password1",message:"This password..."},{name:"password2",message:"...doesn't match this one"}]}):(e.checkedMessage="Passwords were checked!",Promise.resolve(e)),CL=()=>n.jsxs(S,{validate:wL,children:[n.jsx(Ve,{fieldErrors:!1}),n.jsx(x,{name:"password1",type:"password",label:"New Password",required:!0}),n.jsx(x,{name:"password2",type:"password",label:"Confirm Password",required:!0}),n.jsx(W,{})]}),_L=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default PasswordsExample`,EL=(e,t)=>{const r=e.password1.trim(),o=e.password2.trim();return r===o?Promise.resolve({password:r}):(t.reset(),Promise.reject({error:"The two passwords you entered don't match"}))},TL=()=>n.jsxs(S,{validate:EL,debug:!0,children:[n.jsx(Ve,{fieldErrors:!1}),n.jsx(x,{name:"password1",type:"password",label:"New Password",required:!0}),n.jsx(x,{name:"password2",type:"password",label:"Confirm Password",required:!0}),n.jsx(W,{})]}),LL=`import { Form, Field, Errors, Submit } from '@/lib/index.js'

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

export default PasswordsExample`,kL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validate"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," property can be used to provide a validation function for all the form data.  You can also define ",n.jsx(zt,{})," ","function on individual fields.  The form validation will be run after all the fields have validated successfully.  If any individual fields fail validation then the form validation is not run."]}),n.jsx("h2",{children:"Simple Example"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed the form values as the first argument."]}),n.jsxs("p",{children:["If the form validation fails then the function should return a rejected promise.  The rejected value should be an object containing either an ",n.jsx("code",{children:"error"})," message, used to indicate a generic error and/or an array of ",n.jsx("code",{children:"errors"})," to indicate errors in particular fields."]}),n.jsx("p",{children:"If the validation passes then the function should return a resolved promise with the form values. The form values can be modified or augmented by the function."})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["You should include the ",n.jsx(Mo,{})," component somewhere in your form to report any validation errors.  In this example we're setting the ",n.jsx("code",{children:"fieldErrors"})," property to ",n.jsx("code",{children:"false"})," ","so that the component only displays the generic ",n.jsx("code",{children:"error"}),". The separate field ",n.jsx("code",{children:"errors"})," are already being displayed beneath each field input."]}),n.jsx(G,{children:"Try entering two different passwords in the form below then click on the Submit button."})]})]}),n.jsx(y,{Component:CL,code:_L,caption:"Form Validation"}),n.jsx("h2",{children:"More Advanced Example"}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validate"})," function is passed the form context as the second argument.  In this example we call the ",n.jsx(Ou,{})," ","method to reset the form if the passwords don't match."]}),n.jsxs("p",{children:["Also note that in this example we're trimming any whitespace from the passwords and, if they match, we return a single",n.jsx("code",{children:"password"})," value in the submission values."]})]}),n.jsx(G,{children:"Try entering two passwords in the fields below then click on the submit button.  Additional leading and trailing whitespace on the passwords is removed."})]}),n.jsx(y,{Component:TL,code:LL,caption:"Form Validation"}),n.jsx(te,{links:[zt]})]}),RL=Object.freeze(Object.defineProperty({__proto__:null,default:kL},Symbol.toStringTag,{value:"Module"})),NL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnBlur"}),n.jsxs("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",n.jsx(Bt,{})," property to ",n.jsx("code",{children:"true"})," ","on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"When enabled, fields will be validated whenever the input loses focus."})]}),OL=Object.freeze(Object.defineProperty({__proto__:null,default:NL},Symbol.toStringTag,{value:"Module"})),PL=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnChange"}),n.jsxs("p",{children:["Fields are usually only validated when the form is submitted. You can set the ",n.jsx(Vt,{})," property to ",n.jsx("code",{children:"true"})," "," on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"When enabled, fields will be validated whenever the input changes."})]}),AL=Object.freeze(Object.defineProperty({__proto__:null,default:PL},Symbol.toStringTag,{value:"Module"})),ML=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validateOnInvalid"}),n.jsxs("p",{children:["This option is set ",n.jsx("code",{children:"true"})," by default. You can set the ",n.jsx(T7,{})," property to ",n.jsx("code",{children:"false"})," on individual fields, or on the form to set it as the default for all fields."]}),n.jsx("p",{children:"If a field fails validation then this option switches it to validate whenever the input changes."})]}),IL=Object.freeze(Object.defineProperty({__proto__:null,default:ML},Symbol.toStringTag,{value:"Module"})),DL=`## using npm
$ npm add @abw/badger-form

## using yarn
$ yarn add @abw/badger-form

## using pnpm
$ pnpm add @abw/badger-form`,$L="import { Form, Field, Submit } from '@abw/badger-form'",zL=`// ...then you can do this
import '@abw/badger-form/styles/badger-form.min.css'`,BL=`// If you're not already doing this...
import '@abw/badger-css/styles/badger.min.css';`,VL=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Getting Started"}),n.jsx("h2",{children:"Add the Module"}),n.jsxs("p",{children:["Add the ",n.jsx("code",{className:"code",children:"@abw/badger-form"})," module to your project using your favourite package manager."]}),n.jsx(Ze,{code:DL,caption:"Installing",language:"shell",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Import the Components"}),n.jsx("p",{children:"You can then import the form components and start using them."}),n.jsx(Ze,{code:$L,caption:"Importing",language:"js",className:"mar-b-8",expand:!0}),n.jsx("h2",{children:"Import the CSS"}),n.jsxs("p",{children:["Badger Form works out of the box with the form styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),".  If you're already using Badger CSS then you don't need to do anything else as you should already have something like this in your app."]}),n.jsx(Ze,{code:BL,caption:"Importing Badger CSS",language:"js",className:"mar-b-8",expand:!0}),n.jsxs("p",{children:["If you're not already using Badger CSS then you'll need to import the relevant CSS styles. As a convenience, they're bundled with this module.  Note that you only need to import ",n.jsx("b",{children:"either"})," the Badger CSS styles as shown above, ",n.jsx("b",{children:"or"})," the Badger Form styles as shown below."]}),n.jsx("p",{children:"The precise details on how you import the CSS will vary depending on what framework and bundler you're using.  For a React app using Vite or running under Next.js, for example, you can add the CSS file to your main application script like so:"}),n.jsx(Ze,{code:zL,caption:"Importing Badger Form CSS",language:"js",className:"mar-b-8",expand:!0})]}),UL=Object.freeze(Object.defineProperty({__proto__:null,default:VL},Symbol.toStringTag,{value:"Module"})),co=({to:e,className:t="",exact:r,children:o,text:s,onClick:i,label:l,style:a})=>n.jsx(P2,{to:e,onClick:i,end:r&&"end",className:({isActive:d})=>`${t} ${d?"active":""}`,"aria-label":l,style:a,children:o||s}),qL=()=>n.jsxs("div",{className:"flow",children:[n.jsx("h1",{children:"Why Use It?"}),n.jsx("h2",{children:" I know what you're thinking... "}),n.jsxs("ul",{children:[n.jsx("li",{children:"What does the World need with another React form library?"}),n.jsx("li",{children:"What makes this different, better, and/or worse than all the other form libraries?  "}),n.jsx("li",{children:"Will this guy do my homework for me?"}),n.jsx("li",{children:"Why do we exist?  "}),n.jsx("li",{children:"What is the meaning of life? "}),n.jsx("li",{children:"Where did I leave my car keys? "}),n.jsx("li",{children:"And what is it with all the badgers?"})]}),n.jsxs("p",{children:[n.jsx("b",{children:"None"})," of these questions will be answered, at least not directly. You can read the copious documentation provided here if you want to find out more.  Or don't.  It makes no difference to me.  Seriously, I'm not looking to convince you that this is any better or worse than any other form library.  I'm not interested in attracting new users or changing the world.  Been there, done that, burned out."]}),n.jsx("h2",{children:"Still With Me?"}),n.jsx("p",{className:"subintro",children:"OK then, but proceed at your own risk."}),n.jsxs("p",{children:["Read on for more information about what this library sets out to achieve.  If you just want to see it in action then feel free to skip the rest of this page and go straight to the"," ",n.jsx(co,{to:"/tutorial/basic-form",text:"tutorial"}),"."]}),n.jsx("h2",{children:"Key Features"}),n.jsx("p",{className:"subintro",children:"These are some of the things that I think are important in a form library and have influenced the design."}),n.jsxs("ul",{className:"li-space",children:[n.jsxs("li",{children:["Above all else, ",n.jsx("b",{children:"simplicity"}),".  Building a form with"," ",n.jsx("code",{children:"badger-form"})," should be ",n.jsx("i",{children:"at least"})," as easy as defining a vanilla HTML form, and ideally, easier. I don't want to have to build every field manually from separate components.  In most cases I want my fields to include a label, an input, and somewhere for validation messages to go.  So there should be a sensible default layout that takes care of that for me."]}),n.jsxs("li",{children:["Closely related to that is ",n.jsx("b",{children:"consistency"}),`. In the vast majority of cases I want all my forms and fields to look the same and conform to whatever branding and/or style guide I've got in place.  I don't mind spending a bit of time up front to get everything looking right, but after that I just want to "push a button" and get the same results every time with the minimum of fuss.`]}),n.jsxs("li",{children:["And that brings us on to ",n.jsx("b",{children:"maintainability"}),".  The less markup I have to write, the less I have to maintain, and the easier it will be to do so.  If the client or a designer decides they want all the form fields to have the label in a different place, be aligned differently, have more padding, or something else, then I want to be able to change that in a single place.  It might mean changing some CSS, re-defining a style, or updating a single field layout component.  But I certainly don't want to have to go and edit every field in every form to make the change."]}),n.jsxs("li",{children:["Of course there are times when you want to do something a bit different, so ",n.jsx("b",{children:"flexibility"})," is also important.  It's good to have a default layout for ",n.jsx("i",{children:"most"})," of your form fields, but you also need to be able to switch something else in for those special cases. This should be easy, not hard."]}),n.jsxs("li",{children:[n.jsx("b",{children:"Extensibility"})," is also important for those times when there isn't something available off-the-shelf and you need to get your hands dirty and write a custom component.  Maybe you need a custom autocomplete component or search widget.  Maybe you need to include Recaptcha validation, or something else that requires aynchronous calls to an API.  I don't know what you might need.  I can't even predict what I might need this time next week.  So it's important that the library exposes enough of the internal workings to allow you to plug new things in.  It might not be easy, but it should be possible."]}),n.jsxs("li",{children:["None of that would be possible without ",n.jsx("b",{children:"reliability"}),'.  We need to be able to trust the library to "Do The Right Thing" and that means it has to be well tested.  This library has ',n.jsx("i",{children:"lots"})," of automated tests with almost 100% coverage (the exceptions are a few edge cases that would be pointless to try and cover just for the sake of hitting 100%)."]}),n.jsxs("li",{children:["Another concern is ",n.jsx("b",{children:"security"}),". It supports client-side and server-side validation.  If for some reason an invalid input gets past the client-side validation and generates an angry response from the server then it can update the form to display the errors and highlight the invalid field(s).  Although it's not in the library yet, I've been toying with the idea of ",n.jsx("i",{children:"isomorphic validation"}),", allowing you to use the same validation rules for both client-side and server-side code."]}),n.jsxs("li",{children:["And talking of concerns, we like to separate them, so ",n.jsx("b",{children:"modularity"})," ",'is important.  You should be able to define the schema for a form and all of its fields (including validation) in a single place, possibly away from the markup used to render the form.  Being able to separate the "logic" of a form from the presentational aspects make it easier to update both in isolation.']}),n.jsxs("li",{children:["One often overlooked aspect is ",n.jsx("b",{children:"accessibility"}),".  The library uses vanilla HTML form elements by default because they offer the best accessibility across different browsers and devices (anyone who has ever tried to use some of the popular select widgets or date pickers on a mobile device may know what I mean). You can always plug in different input components if you want to, but you shouldn't overlook ",n.jsx("a",{href:"https://www.w3.org/WAI/standards-guidelines/aria/",children:"WAI-ARIA"})," ","compliance.  Your design may look great but if it's not usable by people with disabilities (or people who just prefer to use the keyboard for form navigation) then it's broken and you should feel bad."]}),n.jsxs("li",{children:["Functionality is paramount, but we also care about ",n.jsx("b",{children:"presentability"}),". It comes with a default stylesheet that provides reasonable defaults for styling different form components and all their states (focussed, valid, invalid, disabled, etc).  It comes with both light and dark themes and is written using SASS and CSS variables so you can easily change the styling. There's a single variable that you can set to change the basic theme colour to match your brand so you can get up and running really quickly.  As and when you need to change styles, add new components, or make other changes then you generally can with the minimum of fuss."]}),n.jsxs("li",{children:["And last, but not least, ",n.jsx("b",{children:"efficiency"}),".  The library is comparatively small and simple (less than 10kB for the compressed bundle at the time of writing). It only works with modern (v18+) versions of React and there are no plans to port it to other web frameworks.  It doesn't set out to please all of the people all of the time.  Rather, it is designed to please me, most of the time, and as such it may not have (and may never have) all the features that other people might want.  You are, of course, free to go and write your own form library."]})]}),n.jsxs("h2",{children:["Why Not Just Use ",n.jsx("code",{children:"<ANOTHER FORM LIBRARY>"}),"?"]}),n.jsx("p",{className:"subintro",children:"Go for it.  This is software that I wrote for me.  I'm not suggesting that it's the right solution for you.  But if you want to know why I wrote it, then read on..."}),n.jsx("p",{children:"This library started out a few years back when the state of the art in React form libraries wasn't quite where it is today. React 16.3 had just been released with its shiny new contexts and I thought it might be a better way to build a form library than what we had at the time.  So I did and it turned out pretty well.  It was designed by me, for me, and unsurprisingly it met my particular needs particularly well.  It may not meet yours."}),n.jsxs("p",{children:["Over the years I've built a ",n.jsx("i",{children:"lot"})," of forms with it for various different customers.  I don't much fancy the idea of having to re-write hundreds of forms that already work Just Fine™ and I don't imagine my customers would want to pay me to do it either. So I still use it, and have occasional bursts of development/maintenance where I add new features, clean up ugly bits of code, fix minor bugs or limitations that have been annoying me for a while, or update the documentation and examples.  That's what I'm doing right now, as it happens."]}),n.jsxs("p",{children:["For the last few years it's been an integral part of my ",n.jsx("a",{href:"https://github.com/abw/badger-ui",children:"badger-ui"})," library but I'm now trying to break things up a little bit and extract some of the reusable functionality into different modules.  So that's how we got here."]}),n.jsxs("p",{children:["But the best reason of all is that I built it because I ",n.jsx("i",{children:"wanted"})," to. I like writing software.  I like solving problems.  Sometimes that means spending my weekends re-inventing wheels that happen to fit my skateboard a bit better than all the other wheels out there.  That's all the justification I need.  You are, of course, free to have a different opinion and use whatever tools best fit your needs."]})]}),HL=Object.freeze(Object.defineProperty({__proto__:null,default:qL},Symbol.toStringTag,{value:"Module"})),YL=e=>T.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 717 337",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},...e},T.createElement("path",{className:"form",d:"M464.349,148.481C464.349,144.531 465.027,141.143 466.383,138.316C467.738,135.489 469.577,133.165 471.901,131.345C474.225,129.525 476.955,128.189 480.092,127.337C483.228,126.485 486.578,126.059 490.141,126.059C495.872,126.059 500.094,126.814 502.804,128.324C505.515,129.835 506.871,132.41 506.871,136.05C506.871,137.599 506.541,138.993 505.883,140.232C505.225,141.472 504.508,142.401 503.734,143.021C502.262,142.634 500.733,142.304 499.145,142.033C497.557,141.762 495.718,141.627 493.626,141.627C490.296,141.627 487.701,142.188 485.842,143.311C483.984,144.434 483.054,146.39 483.054,149.178L483.054,152.896L502.107,152.896C502.572,153.748 503.017,154.813 503.443,156.091C503.869,157.369 504.082,158.782 504.082,160.331C504.082,163.042 503.482,164.998 502.282,166.198C501.081,167.399 499.474,167.999 497.46,167.999L484.1,167.999L484.1,204.828C483.325,205.06 482.105,205.292 480.44,205.525C478.775,205.757 477.052,205.873 475.27,205.873C473.566,205.873 472.037,205.757 470.681,205.525C469.326,205.292 468.183,204.828 467.254,204.13C466.324,203.433 465.608,202.485 465.105,201.284C464.601,200.084 464.349,198.515 464.349,196.579L464.349,148.481ZM569.955,176.712C569.955,181.514 569.22,185.794 567.748,189.55C566.276,193.307 564.205,196.463 561.532,199.019C558.86,201.575 555.665,203.511 551.948,204.828C548.23,206.144 544.086,206.803 539.517,206.803C534.947,206.803 530.803,206.106 527.086,204.711C523.368,203.317 520.173,201.323 517.501,198.728C514.829,196.134 512.757,192.977 511.285,189.26C509.814,185.542 509.078,181.36 509.078,176.712C509.078,172.143 509.814,167.999 511.285,164.281C512.757,160.564 514.829,157.407 517.501,154.813C520.173,152.218 523.368,150.224 527.086,148.83C530.803,147.436 534.947,146.738 539.517,146.738C544.086,146.738 548.23,147.455 551.948,148.888C555.665,150.321 558.86,152.334 561.532,154.929C564.205,157.524 566.276,160.68 567.748,164.398C569.22,168.115 569.955,172.22 569.955,176.712ZM529.293,176.712C529.293,181.437 530.203,185.058 532.023,187.575C533.843,190.092 536.38,191.351 539.633,191.351C542.886,191.351 545.384,190.073 547.126,187.517C548.869,184.961 549.74,181.36 549.74,176.712C549.74,172.065 548.85,168.483 547.068,165.966C545.287,163.449 542.77,162.19 539.517,162.19C536.264,162.19 533.747,163.449 531.965,165.966C530.184,168.483 529.293,172.065 529.293,176.712ZM599.348,204.828C598.574,205.06 597.354,205.292 595.689,205.525C594.024,205.757 592.3,205.873 590.519,205.873C588.815,205.873 587.285,205.757 585.93,205.525C584.574,205.292 583.432,204.828 582.503,204.13C581.573,203.433 580.857,202.485 580.353,201.284C579.85,200.084 579.598,198.515 579.598,196.579L579.598,161.725C579.598,159.944 579.927,158.414 580.586,157.136C581.244,155.858 582.193,154.716 583.432,153.709C584.671,152.702 586.201,151.792 588.021,150.979C589.841,150.166 591.797,149.449 593.888,148.83C595.979,148.21 598.148,147.726 600.394,147.377C602.64,147.029 604.886,146.855 607.132,146.855C610.85,146.855 613.793,147.571 615.962,149.004C618.131,150.437 619.215,152.78 619.215,156.033C619.215,157.117 619.06,158.182 618.75,159.228C618.44,160.273 618.053,161.222 617.588,162.074C615.962,162.074 614.297,162.151 612.593,162.306C610.889,162.461 609.224,162.694 607.597,163.003C605.971,163.313 604.441,163.642 603.008,163.991C601.575,164.339 600.355,164.746 599.348,165.211L599.348,204.828ZM653.255,146.738C656.431,146.738 659.548,147.184 662.607,148.075C665.667,148.965 668.32,150.301 670.566,152.083C672.889,150.534 675.503,149.256 678.408,148.249C681.312,147.242 684.817,146.738 688.922,146.738C691.865,146.738 694.75,147.126 697.577,147.9C700.404,148.675 702.921,149.895 705.129,151.56C707.336,153.225 709.098,155.432 710.415,158.182C711.731,160.932 712.39,164.281 712.39,168.231L712.39,204.828C711.615,205.06 710.395,205.292 708.73,205.525C707.065,205.757 705.342,205.873 703.56,205.873C701.856,205.873 700.327,205.757 698.971,205.525C697.616,205.292 696.473,204.828 695.544,204.13C694.615,203.433 693.898,202.485 693.395,201.284C692.891,200.084 692.64,198.515 692.64,196.579L692.64,168.812C692.64,166.489 691.981,164.804 690.665,163.759C689.348,162.713 687.566,162.19 685.32,162.19C684.236,162.19 683.074,162.442 681.835,162.945C680.596,163.449 679.666,163.972 679.047,164.514C679.124,164.824 679.163,165.114 679.163,165.385L679.163,204.828C678.311,205.06 677.052,205.292 675.387,205.525C673.722,205.757 672.037,205.873 670.333,205.873C668.629,205.873 667.1,205.757 665.744,205.525C664.389,205.292 663.246,204.828 662.317,204.13C661.388,203.433 660.671,202.485 660.168,201.284C659.664,200.084 659.413,198.515 659.413,196.579L659.413,168.812C659.413,166.489 658.696,164.804 657.263,163.759C655.83,162.713 654.107,162.19 652.093,162.19C650.699,162.19 649.499,162.403 648.492,162.829C647.485,163.255 646.633,163.662 645.936,164.049L645.936,204.828C645.161,205.06 643.942,205.292 642.276,205.525C640.611,205.757 638.888,205.873 637.106,205.873C635.402,205.873 633.873,205.757 632.517,205.525C631.162,205.292 630.02,204.828 629.09,204.13C628.161,203.433 627.444,202.485 626.941,201.284C626.437,200.084 626.186,198.515 626.186,196.579L626.186,161.493C626.186,159.402 626.631,157.737 627.522,156.497C628.412,155.258 629.632,154.096 631.181,153.012C633.815,151.153 637.087,149.643 640.998,148.481C644.91,147.319 648.995,146.738 653.255,146.738Z"}),T.createElement("path",{className:"badger",d:"M347.242,14.148C348.016,13.915 349.256,13.664 350.96,13.392C352.664,13.121 354.406,12.986 356.188,12.986C357.892,12.986 359.421,13.102 360.777,13.334C362.132,13.567 363.274,14.031 364.204,14.729C365.133,15.426 365.83,16.374 366.295,17.575C366.76,18.775 366.992,20.344 366.992,22.28L366.992,33.666C368.928,32.891 370.768,32.349 372.511,32.039C374.253,31.729 376.17,31.574 378.261,31.574C381.979,31.574 385.503,32.233 388.834,33.549C392.164,34.866 395.107,36.783 397.663,39.3C400.219,41.817 402.233,44.935 403.704,48.653C405.176,52.37 405.912,56.669 405.912,61.548C405.912,66.583 405.157,70.978 403.646,74.735C402.136,78.491 400.025,81.608 397.315,84.087C394.604,86.565 391.293,88.444 387.381,89.722C383.47,90.999 379.152,91.638 374.428,91.638C369.316,91.638 364.978,91.038 361.416,89.838C357.853,88.637 354.832,87.146 352.354,85.365C348.946,82.964 347.242,79.866 347.242,76.071L347.242,14.148ZM374.428,76.071C377.99,76.071 380.759,74.851 382.734,72.411C384.709,69.971 385.697,66.35 385.697,61.548C385.697,56.669 384.69,53.029 382.676,50.628C380.662,48.227 377.952,47.026 374.544,47.026C372.995,47.026 371.659,47.181 370.536,47.491C369.413,47.801 368.193,48.265 366.876,48.885L366.876,74.212C367.728,74.754 368.754,75.199 369.955,75.548C371.155,75.896 372.646,76.071 374.428,76.071ZM439.023,31.574C443.205,31.574 447.02,32 450.466,32.852C453.913,33.704 456.856,35.002 459.296,36.744C461.735,38.487 463.614,40.694 464.93,43.366C466.247,46.039 466.905,49.195 466.905,52.835L466.905,78.859C466.905,80.873 466.344,82.518 465.221,83.796C464.098,85.074 462.762,86.178 461.213,87.108C456.178,90.128 449.091,91.638 439.952,91.638C435.847,91.638 432.149,91.251 428.857,90.477C425.565,89.702 422.738,88.54 420.376,86.991C418.014,85.442 416.194,83.467 414.916,81.066C413.638,78.665 412.999,75.877 412.999,72.701C412.999,67.357 414.586,63.252 417.762,60.387C420.938,57.521 425.856,55.739 432.517,55.042L447.736,53.416L447.736,52.603C447.736,50.356 446.748,48.749 444.773,47.781C442.798,46.813 439.952,46.329 436.234,46.329C433.291,46.329 430.425,46.639 427.637,47.258C424.849,47.878 422.332,48.653 420.086,49.582C419.079,48.885 418.227,47.82 417.53,46.387C416.833,44.954 416.484,43.463 416.484,41.914C416.484,39.9 416.968,38.293 417.936,37.093C418.904,35.892 420.395,34.866 422.409,34.014C424.655,33.162 427.308,32.542 430.367,32.155C433.427,31.768 436.312,31.574 439.023,31.574ZM439.952,77.232C441.269,77.232 442.721,77.097 444.309,76.826C445.896,76.555 447.078,76.187 447.852,75.722L447.852,66.428L439.487,67.125C437.319,67.28 435.537,67.744 434.143,68.519C432.749,69.294 432.052,70.455 432.052,72.004C432.052,73.553 432.652,74.812 433.853,75.78C435.053,76.748 437.086,77.232 439.952,77.232ZM476.548,61.548C476.548,56.436 477.323,52.002 478.872,48.246C480.421,44.489 482.57,41.372 485.32,38.894C488.069,36.415 491.283,34.576 494.962,33.375C498.641,32.175 502.611,31.574 506.871,31.574C508.42,31.574 509.93,31.71 511.402,31.981C512.873,32.252 514.074,32.581 515.003,32.968L515.003,14.148C515.778,13.915 517.017,13.664 518.721,13.392C520.425,13.121 522.167,12.986 523.949,12.986C525.653,12.986 527.182,13.102 528.538,13.334C529.893,13.567 531.036,14.031 531.965,14.729C532.895,15.426 533.592,16.374 534.056,17.575C534.521,18.775 534.753,20.344 534.753,22.28L534.753,77.349C534.753,80.989 533.049,83.893 529.642,86.062C527.395,87.533 524.491,88.831 520.928,89.954C517.365,91.077 513.26,91.638 508.613,91.638C503.579,91.638 499.067,90.941 495.079,89.547C491.09,88.153 487.721,86.139 484.971,83.506C482.222,80.873 480.13,77.716 478.697,74.037C477.265,70.358 476.548,66.195 476.548,61.548ZM509.543,47.026C505.36,47.026 502.146,48.227 499.9,50.628C497.654,53.029 496.531,56.669 496.531,61.548C496.531,66.35 497.576,69.971 499.668,72.411C501.759,74.851 504.779,76.071 508.73,76.071C510.124,76.071 511.382,75.858 512.505,75.432C513.628,75.006 514.5,74.522 515.119,73.979L515.119,48.42C513.57,47.491 511.711,47.026 509.543,47.026ZM574.603,31.574C579.017,31.574 583.025,32.136 586.627,33.259C590.228,34.382 593.268,35.834 595.747,37.616C597.296,38.7 598.516,39.9 599.407,41.217C600.297,42.534 600.743,44.238 600.743,46.329L600.743,86.991C600.743,91.096 599.968,94.64 598.419,97.622C596.87,100.604 594.759,103.082 592.087,105.057C589.415,107.032 586.278,108.484 582.677,109.414C579.075,110.343 575.222,110.808 571.117,110.808C564.069,110.808 558.531,109.859 554.504,107.961C550.476,106.064 548.462,102.985 548.462,98.725C548.462,96.944 548.83,95.376 549.566,94.02C550.302,92.665 551.135,91.638 552.064,90.941C554.31,92.181 556.847,93.226 559.674,94.078C562.501,94.93 565.424,95.356 568.445,95.356C572.627,95.356 575.958,94.659 578.436,93.265C580.915,91.871 582.154,89.625 582.154,86.527L582.154,84.668C578.979,86.062 575.106,86.759 570.536,86.759C567.051,86.759 563.74,86.236 560.603,85.191C557.466,84.145 554.717,82.518 552.354,80.311C549.992,78.104 548.095,75.257 546.662,71.772C545.229,68.287 544.512,64.143 544.512,59.341C544.512,54.616 545.268,50.511 546.778,47.026C548.288,43.541 550.379,40.656 553.051,38.371C555.724,36.086 558.899,34.382 562.578,33.259C566.257,32.136 570.265,31.574 574.603,31.574ZM581.806,48.42C581.263,48.11 580.47,47.801 579.424,47.491C578.378,47.181 577.081,47.026 575.532,47.026C571.737,47.026 568.89,48.091 566.993,50.221C565.095,52.351 564.146,55.391 564.146,59.341C564.146,63.833 565.095,67.067 566.993,69.042C568.89,71.017 571.311,72.004 574.254,72.004C577.43,72.004 579.947,71.269 581.806,69.797L581.806,48.42ZM642.799,91.638C638.229,91.638 633.989,90.999 630.078,89.722C626.166,88.444 622.758,86.527 619.854,83.971C616.949,81.415 614.665,78.201 612.999,74.328C611.334,70.455 610.502,65.924 610.502,60.735C610.502,55.623 611.334,51.228 612.999,47.549C614.665,43.87 616.853,40.849 619.563,38.487C622.274,36.125 625.372,34.382 628.858,33.259C632.343,32.136 635.906,31.574 639.546,31.574C643.651,31.574 647.388,32.194 650.757,33.433C654.126,34.672 657.031,36.376 659.471,38.545C661.91,40.714 663.808,43.308 665.163,46.329C666.519,49.35 667.197,52.641 667.197,56.204C667.197,58.837 666.461,60.851 664.989,62.245C663.518,63.64 661.465,64.53 658.832,64.917L630.136,69.216C630.988,71.772 632.73,73.689 635.364,74.967C637.997,76.245 641.018,76.884 644.426,76.884C647.601,76.884 650.602,76.477 653.429,75.664C656.256,74.851 658.561,73.902 660.342,72.818C661.581,73.592 662.627,74.676 663.479,76.071C664.331,77.465 664.757,78.936 664.757,80.485C664.757,83.971 663.13,86.565 659.877,88.269C657.399,89.586 654.611,90.477 651.512,90.941C648.414,91.406 645.51,91.638 642.799,91.638ZM639.546,45.98C637.687,45.98 636.08,46.29 634.725,46.91C633.369,47.529 632.266,48.323 631.414,49.292C630.562,50.26 629.923,51.344 629.497,52.545C629.071,53.745 628.819,54.965 628.742,56.204L648.608,52.951C648.376,51.402 647.524,49.853 646.052,48.304C644.581,46.755 642.412,45.98 639.546,45.98ZM696.473,89.663C695.699,89.896 694.479,90.128 692.814,90.36C691.149,90.593 689.425,90.709 687.644,90.709C685.94,90.709 684.41,90.593 683.055,90.36C681.699,90.128 680.557,89.663 679.628,88.966C678.698,88.269 677.982,87.321 677.478,86.12C676.975,84.919 676.723,83.351 676.723,81.415L676.723,46.561C676.723,44.78 677.052,43.25 677.711,41.972C678.369,40.694 679.318,39.552 680.557,38.545C681.796,37.538 683.326,36.628 685.146,35.815C686.966,35.002 688.922,34.285 691.013,33.666C693.104,33.046 695.273,32.562 697.519,32.213C699.765,31.865 702.011,31.691 704.257,31.691C707.975,31.691 710.918,32.407 713.087,33.84C715.256,35.273 716.34,37.616 716.34,40.869C716.34,41.953 716.185,43.018 715.875,44.063C715.565,45.109 715.178,46.058 714.713,46.91C713.087,46.91 711.422,46.987 709.718,47.142C708.014,47.297 706.349,47.529 704.722,47.839C703.096,48.149 701.566,48.478 700.133,48.827C698.7,49.175 697.48,49.582 696.473,50.047L696.473,89.663Z"}),T.createElement("path",{className:"white",d:"M248.362,204.8C251.303,208.841 251.506,216.92 246.886,220.486C247.235,215.811 245.076,210.416 243.385,207.987C242.142,206.2 237.32,201.909 232.525,201.457C236.319,199.212 245.27,200.55 248.362,204.8ZM380.931,288.851C382.012,292.919 365.895,290.457 365.767,303.096C365.703,309.466 368.575,313.608 364.949,314.116C360.977,314.673 360.493,310.692 359.8,305.449C358.316,294.227 366.194,290.723 373.729,288.466C380.03,286.58 380.512,287.273 380.931,288.851ZM250.509,198.166C250.116,197.944 249.715,197.73 249.306,197.524C237.097,191.351 222.986,194.646 217.814,204.876C213.744,212.926 216.415,222.888 223.688,229.775C220.646,228.505 217.677,226.862 214.911,224.779C198.663,212.542 195.441,190.333 199.289,185.248C202.588,180.888 226.299,177.823 242.548,190.06C245.688,192.424 248.324,195.199 250.509,198.166ZM234.492,31.758C231.75,33.423 225.901,22.543 215.941,24.48C210.088,25.619 206.755,23.124 210.523,20.119C221.225,11.585 239.546,28.689 234.492,31.758ZM99.149,58.412C89.72,51.898 79.11,48.569 67.051,51.951C58.397,54.378 52.734,60.065 49.994,67.45C48.707,67.555 47.4,67.691 46.084,67.853C38.149,68.832 29.859,70.741 23.646,72.288C42.126,47.476 64.861,38.817 87.003,38.714L88.566,38.707L88.864,37.173C90.304,29.757 86.13,22.597 75.216,17.044C99.723,11.821 129.948,17.277 146.178,26.501L148.305,27.709L148.955,25.351C149.908,21.892 149.675,13.343 143.798,5.723C174.533,11.177 197.842,21.068 216.166,33.985C250.062,62.777 267.98,100.361 283.213,136.181C299.907,175.44 313.396,212.581 341.026,233.82C341.522,234.342 342.023,234.861 342.528,235.377C350.993,244.039 366.478,256.93 385.23,273.49C387.358,275.369 389.327,277.224 391.08,279.038C386.966,279.245 381.675,280.641 374.911,282.18C352.689,287.237 351.849,297.009 354.41,312.963C355.723,321.141 359.376,324.914 364.644,326.161C344.448,331.711 334.138,335.299 309.216,330.594C270.323,323.25 233.474,308.826 222.734,303.773C222.54,303.387 222.214,303.065 221.786,302.881C207.397,296.693 197.713,288.82 193.624,279.767C195.586,278.724 197.158,277.535 198.531,276.583C199.395,275.985 199.61,274.797 199.011,273.933C198.412,273.069 197.225,272.854 196.361,273.453C193.368,275.527 189.319,279.035 181.419,278.358C180.371,278.268 179.448,279.046 179.359,280.093C179.269,281.14 180.046,282.063 181.094,282.153C184.73,282.464 187.673,282.036 190.117,281.255C194.043,289.991 202.664,297.858 215.527,304.192C190.321,313.397 168.064,307.288 148.128,295.655C126.82,283.221 108.129,264.526 91.308,250.982C77.307,239.708 64.463,232.065 52.581,233.695C45.172,234.711 38.017,239.243 31.166,248.886C20.017,224.385 34.815,199.803 49.449,184.213L50.995,182.566L49.11,181.321C34.813,171.879 18.601,177.687 7.799,189.755C6.995,180.056 11.532,165.892 18.973,152.99C26.481,139.972 37,128.18 48.427,123.711C118.961,110.252 153.156,169.713 188.827,221.409C209.775,251.767 256.49,287.586 345.223,316.241C340.436,301.054 342.628,293.783 346.067,286.802C324.7,276.815 298.269,260.277 280.877,228.797C233.283,142.653 212.43,81.347 143.665,64.082C131.685,61.074 116.053,57.87 99.149,58.412ZM99.066,72.542C97.614,80.151 74.887,58.073 70.407,69.969C62.107,92.007 54.173,79.428 56.142,73.447C66.246,42.754 100.4,65.551 99.066,72.542Z"}),T.createElement("path",{className:"black",d:"M48.845,71.376C48.085,71.452 47.319,71.538 46.55,71.633C36.384,72.888 25.625,75.704 19.567,77.251L14.706,78.493L17.519,74.338C36.933,45.669 61.411,35.483 85.316,34.929C85.679,28.465 80.142,22.804 68.715,18.305L63.513,16.258L68.883,14.704C94.004,7.433 126.953,12.429 145.602,21.872C145.715,17.476 143.99,10.119 137.262,4.358L132.173,0L138.793,1.03C164.858,5.083 185.888,12.137 203.193,21.438C203.366,21.5 203.539,21.563 203.712,21.626C205.114,17.121 209.176,13.252 216.656,13.924C236.466,15.704 240.708,25.62 241.751,43.904C266.891,65.236 284.026,95.363 297.467,125.916C309.511,153.29 318.589,181.001 327.822,202.999C331.443,211.626 335.086,219.374 338.942,225.872C340.965,228.196 343.066,230.479 345.252,232.715C353.685,241.344 369.071,254.139 387.751,270.635C391.391,273.849 394.564,277.022 397.067,280.061C399.65,281.424 401.411,284.251 402.569,289.316C402.766,289.952 402.91,290.575 403,291.183C403.044,291.476 403.078,291.773 403.104,292.073C403.406,293.909 403.652,295.979 403.849,298.307C404.631,307.557 401.813,319.773 387.422,323.48C384.617,324.202 381.912,324.872 379.338,325.409C375.566,326.623 372.295,327.675 372.296,327.675C350.779,335.844 336.841,339.686 308.509,334.336C267.627,326.617 228.986,311.137 219.844,306.606C192.192,317.895 167.885,311.593 146.209,298.945C124.732,286.413 105.872,267.6 88.919,253.949C82.285,248.607 75.954,244.066 69.867,241.062C64.049,238.191 58.481,236.73 53.099,237.468C45.892,238.456 39.128,243.397 32.519,253.689L30.774,256.406L29.24,253.565C15.116,227.399 29.491,200.652 45.081,183.337C31.813,176.104 17.177,183.299 8.174,195.3L5.878,198.362L4.821,194.683C1.901,184.524 6.568,166.875 15.674,151.087C21.122,141.64 28.135,132.887 35.912,126.766C24.827,130.039 12.898,135.014 0,141.953C13.007,107.592 30.082,86.63 48.343,74.289C48.468,73.299 48.636,72.327 48.845,71.376ZM248.362,204.8C245.27,200.55 236.319,199.212 232.525,201.457C237.32,201.909 242.142,206.2 243.385,207.987C245.076,210.416 247.235,215.811 246.886,220.486C251.506,216.92 251.303,208.841 248.362,204.8ZM380.931,288.851C380.512,287.273 380.03,286.58 373.729,288.466C366.194,290.723 358.316,294.227 359.8,305.449C360.493,310.692 360.977,314.673 364.949,314.116C368.575,313.608 365.703,309.466 365.767,303.096C365.895,290.457 382.012,292.919 380.931,288.851ZM250.509,198.166C248.324,195.199 245.688,192.424 242.548,190.06C226.299,177.823 202.588,180.888 199.289,185.248C195.441,190.333 198.663,212.542 214.911,224.779C217.677,226.862 220.646,228.505 223.688,229.775C216.415,222.888 213.744,212.926 217.814,204.876C222.986,194.646 237.097,191.351 249.306,197.524C249.715,197.73 250.116,197.944 250.509,198.166ZM234.492,31.758C239.546,28.689 221.225,11.585 210.523,20.119C206.755,23.124 210.088,25.619 215.941,24.48C225.901,22.543 231.75,33.423 234.492,31.758ZM99.149,58.412C116.053,57.87 131.685,61.074 143.665,64.082C212.43,81.347 233.283,142.653 280.877,228.797C298.269,260.277 324.7,276.815 346.067,286.802C342.628,293.783 340.436,301.054 345.223,316.241C256.49,287.586 209.775,251.767 188.827,221.409C153.156,169.713 118.961,110.252 48.427,123.711C37,128.18 26.481,139.972 18.973,152.99C11.532,165.892 6.995,180.056 7.799,189.755C18.601,177.687 34.813,171.879 49.11,181.321L50.995,182.566L49.449,184.213C34.815,199.803 20.017,224.385 31.166,248.886C38.017,239.243 45.172,234.711 52.581,233.695C64.463,232.065 77.307,239.708 91.308,250.982C108.129,264.526 126.82,283.221 148.128,295.655C168.064,307.288 190.321,313.397 215.527,304.192C202.664,297.858 194.043,289.991 190.117,281.255C187.673,282.036 184.73,282.464 181.094,282.153C180.046,282.063 179.269,281.14 179.359,280.093C179.448,279.046 180.371,278.268 181.419,278.358C189.319,279.035 193.368,275.527 196.361,273.453C197.225,272.854 198.412,273.069 199.011,273.933C199.61,274.797 199.395,275.985 198.531,276.583C197.158,277.535 195.586,278.724 193.624,279.767C197.713,288.82 207.397,296.693 221.786,302.881C222.214,303.065 222.54,303.387 222.734,303.773C233.474,308.826 270.323,323.25 309.216,330.594C334.138,335.299 344.448,331.711 364.644,326.161C359.376,324.914 355.723,321.141 354.41,312.963C351.849,297.009 352.689,287.237 374.911,282.18C381.675,280.641 386.966,279.245 391.08,279.038C389.327,277.224 387.358,275.369 385.23,273.49C366.478,256.93 350.993,244.039 342.528,235.377C342.023,234.861 341.522,234.342 341.026,233.82C313.396,212.581 299.907,175.44 283.213,136.181C267.98,100.361 250.062,62.777 216.166,33.985C197.842,21.068 174.533,11.177 143.798,5.723C149.675,13.343 149.908,21.892 148.955,25.351L148.305,27.709L146.178,26.501C129.948,17.277 99.723,11.821 75.216,17.044C86.13,22.597 90.304,29.757 88.864,37.173L88.566,38.707L87.003,38.714C64.861,38.817 42.126,47.476 23.646,72.288C29.859,70.741 38.149,68.832 46.084,67.853C47.4,67.691 48.707,67.555 49.994,67.45C52.734,60.065 58.397,54.378 67.051,51.951C79.11,48.569 89.72,51.898 99.149,58.412ZM99.066,72.542C100.4,65.551 66.246,42.754 56.142,73.447C54.173,79.428 62.107,92.007 70.407,69.969C74.887,58.073 97.614,80.151 99.066,72.542Z"})),WL=e=>T.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 440 440",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},...e},T.createElement("circle",{cx:220,cy:220,r:144,style:{fill:"rgb(136,136,136)",stroke:"black",strokeWidth:"0.33px"}}),T.createElement("path",{d:"M220,12C334.798,12 428,105.202 428,220C428,334.798 334.798,428 220,428C105.202,428 12,334.798 12,220C12,105.202 105.202,12 220,12ZM220,76C140.524,76 76,140.524 76,220C76,299.476 140.524,364 220,364C299.476,364 364,299.476 364,220C364,140.524 299.476,76 220,76Z",style:{fill:"rgb(206,206,206)",stroke:"black",strokeWidth:"6.67px"}}),T.createElement("path",{d:"M41.319,232.772C38.119,232.829 35.878,232.789 34.556,232.652C33.233,232.516 32.025,232.097 30.891,231.317C29.797,230.537 28.939,229.512 28.315,228.163C27.731,226.853 27.383,225.299 27.351,223.499C27.321,221.82 27.574,220.295 28.11,218.925C28.645,217.555 29.466,216.461 30.532,215.641C31.636,214.782 32.828,214.28 34.145,214.097C35.421,213.914 37.7,213.793 40.979,213.735L46.378,213.638C49.538,213.582 51.819,213.621 53.142,213.758C54.464,213.894 55.672,214.313 56.766,215.093C57.9,215.873 58.758,216.898 59.343,218.248C59.966,219.557 60.274,221.112 60.306,222.912C60.336,224.591 60.083,226.116 59.547,227.486C59.052,228.855 58.231,229.95 57.126,230.769C56.021,231.629 54.829,232.131 53.553,232.313C52.236,232.497 49.957,232.618 46.718,232.675L41.319,232.772ZM51.53,224.348C53.01,224.322 53.968,224.225 54.365,224.058C54.762,223.891 54.957,223.567 54.947,223.047C54.94,222.607 54.774,222.29 54.45,222.056C54.126,221.862 53.124,221.759 51.484,221.789L36.727,222.052C34.887,222.085 33.769,222.185 33.331,222.313C32.934,222.48 32.7,222.844 32.71,223.364C32.72,223.924 32.966,224.279 33.489,224.43C33.972,224.581 35.173,224.64 37.012,224.607L51.53,224.348ZM60.115,235.306L61.347,243.494C61.681,245.709 61.739,247.439 61.562,248.68C61.424,249.914 61.047,250.901 60.464,251.596C59.92,252.284 59.189,252.799 58.275,253.179C57.356,253.52 55.95,253.853 53.972,254.151L51.243,254.562C49.265,254.859 47.772,254.882 46.796,254.584C45.827,254.325 45.002,253.681 44.361,252.645C43.719,251.609 43.228,250.226 42.96,248.447L42.632,246.271L30.054,248.165L28.827,240.017L60.115,235.306ZM55.962,244.264L48.012,245.461L48.101,246.054C48.214,246.806 48.45,247.296 48.887,247.514C49.285,247.737 50.06,247.782 51.207,247.609L53.778,247.222C54.846,247.061 55.534,246.796 55.797,246.392C56.066,246.028 56.117,245.293 55.962,244.264ZM65.668,263.888L35.019,271.744L32.973,263.762L63.622,255.906L65.668,263.888ZM73.017,284.844L43.393,295.958L40.864,289.217L52.805,280.165L39.36,285.21L36.944,278.768L66.567,267.654L68.984,274.095L57.267,283.404L70.6,278.402L73.017,284.844ZM78.538,295.659L50.283,309.897L46.575,302.539L74.83,288.301L78.538,295.659ZM74.884,324.988C72.198,326.727 70.274,327.877 69.079,328.459C67.884,329.042 66.637,329.325 65.262,329.262C63.921,329.177 62.651,328.76 61.408,327.945C60.221,327.141 59.105,326.005 58.127,324.494C57.214,323.084 56.623,321.655 56.354,320.209C56.085,318.763 56.204,317.4 56.676,316.142C57.159,314.828 57.906,313.773 58.927,312.922C59.915,312.092 61.786,310.786 64.539,309.004L69.073,306.07C71.725,304.353 73.683,303.181 74.878,302.598C76.073,302.015 77.32,301.733 78.661,301.817C80.036,301.88 81.306,302.297 82.515,303.135C83.736,303.917 84.819,305.074 85.797,306.585C86.71,307.996 87.3,309.424 87.569,310.87C87.872,312.294 87.753,313.657 87.248,314.937C86.764,316.251 86.017,317.306 85.03,318.136C84.008,318.987 82.138,320.293 79.418,322.054L74.884,324.988ZM79.105,312.441C80.347,311.637 81.11,311.048 81.358,310.697C81.607,310.345 81.601,309.968 81.319,309.531C81.08,309.162 80.772,308.98 80.372,308.952C79.995,308.958 79.09,309.401 77.714,310.292L65.322,318.312C63.778,319.312 62.881,319.987 62.577,320.327C62.328,320.679 62.322,321.111 62.605,321.548C62.909,322.018 63.306,322.19 63.829,322.042C64.319,321.915 65.37,321.33 66.915,320.331L79.105,312.441ZM104.097,331.146L80.061,351.721L75.379,346.251L83.505,333.662L72.595,343L68.121,337.773L92.158,317.198L96.632,322.425L88.805,335.179L99.624,325.92L104.097,331.146ZM116.973,342.973L99.303,369.64L93.032,363.991L96.536,359.503L94.337,357.522L90.179,361.421L83.849,355.718L108.146,335.022L116.973,342.973ZM100.106,355.182C102.219,352.239 104.837,348.676 108.073,344.485C103.407,348.41 100.049,351.361 98.026,353.308L100.106,355.182ZM133.778,355.495L130.062,360.657L126.102,357.806L111.332,378.323L104.645,373.509L119.414,352.992L115.486,350.164L119.202,345.002L133.778,355.495ZM135.754,356.629L147.731,363.322L144.628,368.874L139.845,366.2L136.918,371.438L141.387,373.936L138.46,379.173L133.991,376.676L130.596,382.752L135.833,385.678L132.75,391.196L120.32,384.249L135.754,356.629ZM150.451,364.831L156.15,367.169C159.813,368.672 162.217,369.874 163.376,370.738C164.534,371.603 165.306,372.568 165.653,373.618C166,374.669 166.095,375.702 165.849,376.725C165.654,377.726 164.969,379.607 163.83,382.382L159.625,392.633C158.547,395.261 157.708,396.991 157.099,397.736C156.476,398.518 155.781,399.054 154.939,399.314C154.149,399.553 153.22,399.604 152.256,399.424C151.255,399.23 149.84,398.779 148.027,398.035L138.442,394.103L150.451,364.831ZM156.01,372.991L148.115,392.235C149.188,392.675 149.946,392.726 150.387,392.388C150.828,392.051 151.462,390.927 152.267,388.966L156.927,377.605C157.474,376.272 157.749,375.391 157.827,374.99C157.904,374.59 157.826,374.255 157.569,373.933C157.348,373.627 156.824,373.325 156.01,372.991ZM194.889,388.345L187.399,386.838L187.865,384.525C188.078,383.466 188.102,382.736 187.961,382.422C187.828,382.069 187.538,381.888 187.107,381.802C186.636,381.707 186.205,381.824 185.891,382.169C185.537,382.506 185.301,383.07 185.135,383.894C184.93,384.913 184.929,385.729 185.101,386.294C185.265,386.899 185.884,387.676 186.989,388.673C190.171,391.517 192.051,393.731 192.724,395.254C193.389,396.816 193.418,399.106 192.802,402.165C192.361,404.361 191.755,405.953 191.04,406.87C190.317,407.826 189.124,408.484 187.484,408.929C185.891,409.343 184.095,409.349 182.134,408.954C179.977,408.52 178.221,407.718 176.857,406.587C175.486,405.495 174.679,404.231 174.461,402.882C174.243,401.532 174.37,399.681 174.836,397.367L175.246,395.328L182.736,396.835L181.979,400.599C181.742,401.776 181.71,402.545 181.843,402.898C182.007,403.298 182.328,403.526 182.877,403.636C183.387,403.739 183.866,403.59 184.18,403.246C184.541,402.869 184.785,402.266 184.951,401.442C185.322,399.599 185.323,398.375 184.924,397.724C184.532,397.033 183.467,395.839 181.727,394.143C179.995,392.407 178.859,391.159 178.35,390.444C177.802,389.722 177.419,388.788 177.2,387.642C176.982,386.497 177.062,385.085 177.393,383.438C177.875,381.046 178.535,379.384 179.345,378.404C180.193,377.432 181.347,376.767 182.798,376.447C184.297,376.095 185.968,376.105 187.89,376.492C189.968,376.91 191.709,377.586 193.057,378.592C194.374,379.551 195.18,380.611 195.446,381.725C195.711,382.839 195.631,384.659 195.142,387.09L194.889,388.345ZM200.214,379.311L213.892,380.38L213.397,386.721L207.933,386.294L207.466,392.276L212.57,392.675L212.102,398.657L206.998,398.257L206.456,405.196L212.437,405.664L211.945,411.965L197.748,410.855L200.214,379.311ZM225.777,380.267L226.42,405.578L231.418,405.452L231.578,411.77L218.342,412.105L217.54,380.476L225.777,380.267ZM233.537,379.948L247.346,378.191L248.149,384.5L242.514,385.217L243.272,391.169L248.311,390.528L249.069,396.479L244.029,397.121L245.706,410.295L237.532,411.335L233.537,379.948ZM258.549,375.749L265.335,406.653L257.287,408.42L250.501,377.517L258.549,375.749ZM281.962,378.541L274.713,380.955L273.968,378.716C273.626,377.691 273.285,377.046 273.007,376.844C272.716,376.603 272.374,376.591 271.957,376.73C271.501,376.882 271.185,377.198 271.084,377.653C270.945,378.121 271.02,378.728 271.286,379.525C271.615,380.512 272.019,381.22 272.449,381.625C272.892,382.068 273.815,382.435 275.27,382.751C279.444,383.638 282.176,384.625 283.516,385.612C284.869,386.637 286.033,388.61 287.019,391.57C287.727,393.696 287.992,395.378 287.827,396.529C287.675,397.718 286.967,398.882 285.765,400.083C284.588,401.234 283.032,402.132 281.135,402.764C279.047,403.459 277.125,403.636 275.379,403.332C273.646,403.066 272.318,402.37 271.458,401.307C270.598,400.244 269.789,398.574 269.043,396.335L268.386,394.362L275.635,391.947L276.848,395.591C277.227,396.729 277.581,397.412 277.872,397.653C278.214,397.918 278.606,397.956 279.137,397.779C279.63,397.615 279.972,397.248 280.073,396.793C280.2,396.287 280.112,395.642 279.846,394.845C279.252,393.061 278.645,391.999 277.975,391.632C277.292,391.227 275.774,390.721 273.421,390.113C271.056,389.467 269.45,388.948 268.653,388.581C267.818,388.227 267.021,387.607 266.263,386.721C265.504,385.836 264.872,384.571 264.341,382.977C263.57,380.662 263.317,378.891 263.532,377.639C263.786,376.374 264.456,375.223 265.557,374.224C266.683,373.174 268.138,372.352 269.997,371.733C272.009,371.063 273.855,370.785 275.525,370.988C277.144,371.165 278.371,371.684 279.155,372.519C279.939,373.354 280.774,374.973 281.557,377.326L281.962,378.541ZM298.791,359.997L312.694,388.418L305.293,392.039L299.457,380.11L297.265,381.182L303.101,393.111L295.699,396.732L281.795,368.311L289.197,364.69L294.172,374.858L296.363,373.786L291.389,363.618L298.791,359.997ZM328.977,350.672L322.871,355.265L321.453,353.379C320.804,352.515 320.275,352.012 319.947,351.909C319.595,351.773 319.267,351.87 318.915,352.134C318.532,352.423 318.332,352.823 318.381,353.287C318.397,353.775 318.662,354.326 319.167,354.998C319.792,355.829 320.401,356.372 320.937,356.619C321.498,356.898 322.49,356.953 323.97,356.791C328.209,356.305 331.113,356.373 332.698,356.883C334.306,357.425 336.036,358.927 337.912,361.42C339.258,363.21 340.044,364.721 340.254,365.865C340.488,367.04 340.185,368.369 339.428,369.89C338.678,371.355 337.487,372.701 335.889,373.903C334.131,375.225 332.364,376.004 330.612,376.27C328.885,376.568 327.404,376.33 326.251,375.596C325.098,374.862 323.8,373.535 322.382,371.649L321.132,369.987L327.237,365.395L329.546,368.463C330.267,369.422 330.82,369.958 331.172,370.093C331.58,370.237 331.964,370.148 332.411,369.812C332.827,369.499 333.034,369.043 332.986,368.579C332.945,368.059 332.656,367.475 332.151,366.804C331.021,365.301 330.108,364.487 329.356,364.352C328.58,364.185 326.98,364.187 324.556,364.358C322.108,364.498 320.42,364.516 319.548,364.421C318.644,364.35 317.691,364.016 316.691,363.417C315.69,362.818 314.688,361.82 313.679,360.477C312.212,358.527 311.41,356.928 311.216,355.673C311.054,354.393 311.324,353.088 312.051,351.791C312.785,350.438 313.903,349.197 315.47,348.019C317.164,346.744 318.827,345.894 320.474,345.556C322.066,345.21 323.394,345.312 324.403,345.854C325.411,346.397 326.717,347.667 328.208,349.649L328.977,350.672ZM352.018,341.021C354.259,343.305 355.771,344.96 356.581,346.015C357.391,347.069 357.917,348.234 358.13,349.594C358.315,350.925 358.161,352.253 357.61,353.634C357.06,354.958 356.17,356.279 354.885,357.539C353.686,358.715 352.405,359.58 351.041,360.132C349.678,360.685 348.319,360.841 346.992,360.631C345.608,360.419 344.425,359.899 343.386,359.068C342.376,358.266 340.722,356.695 338.425,354.353L334.644,350.498C332.431,348.242 330.892,346.558 330.082,345.504C329.272,344.449 328.746,343.285 328.561,341.953C328.348,340.594 328.502,339.266 329.081,337.914C329.603,336.561 330.521,335.269 331.806,334.008C333.005,332.832 334.286,331.967 335.649,331.415C336.984,330.834 338.343,330.677 339.699,330.917C341.083,331.128 342.266,331.649 343.276,332.45C344.315,333.281 345.968,334.852 348.237,337.166L352.018,341.021ZM338.881,339.394C337.845,338.338 337.116,337.708 336.721,337.535C336.327,337.361 335.959,337.443 335.587,337.807C335.273,338.115 335.157,338.453 335.21,338.85C335.291,339.218 335.905,340.016 337.054,341.187L347.389,351.724C348.678,353.038 349.519,353.782 349.913,354.012C350.307,354.185 350.732,354.104 351.103,353.74C351.503,353.348 351.592,352.925 351.342,352.442C351.12,351.987 350.337,351.074 349.049,349.76L338.881,339.394ZM341.099,325.297L349.778,314.415L354.751,318.38L351.209,322.821L355.9,326.562L359.067,322.591L363.758,326.332L360.59,330.303L370.973,338.584L365.835,345.026L341.099,325.297ZM360.217,298.339L365.582,301.754L362.962,305.871L384.287,319.447L379.862,326.398L358.537,312.822L355.937,316.905L350.572,313.489L360.217,298.339ZM373.724,268.616L401.315,284.523L397.232,293.957C392.425,292.879 387.026,291.458 381.05,289.656C383.345,290.998 388.109,293.888 395.342,298.326L391.291,307.687L360.792,298.497L363.969,291.155L374.435,294.769L384.533,298.224C379.631,295.754 373.288,292.181 365.542,287.521L368.942,279.665C369.87,279.936 373.139,281.046 378.872,283.004L390.287,286.942C383.414,283.488 376.851,279.819 370.562,275.921L373.724,268.616ZM376.781,254.323L408.604,257.594L406.512,265.77L400.91,264.75L400.176,267.617L405.56,269.49L403.448,277.745L373.836,265.832L376.781,254.323ZM395.425,263.594C391.838,263.089 387.466,262.425 382.252,261.503C387.895,263.814 392.068,265.419 394.731,266.307L395.425,263.594ZM378.103,248.493L378.802,242.694C379.266,238.842 379.736,236.28 380.221,234.928C380.661,233.612 381.55,232.591 382.886,231.865C384.218,231.18 386.216,230.977 388.877,231.298C391.339,231.594 392.929,232.108 393.691,232.804C394.454,233.5 394.826,234.754 394.77,236.56C395.359,235.02 396.048,233.975 396.791,233.5C397.533,233.025 398.167,232.779 398.781,232.692C399.352,232.64 400.91,232.747 403.452,233.053L411.712,234.049L410.798,241.634L400.354,240.375C398.686,240.175 397.639,240.169 397.208,240.399C396.778,240.63 396.498,241.281 396.364,242.393L410.502,244.096L409.516,252.277L378.103,248.493ZM384.49,240.962L391.479,241.804C391.589,240.891 391.507,240.236 391.312,239.85C391.116,239.464 390.306,239.165 388.916,238.998L387.209,238.792C386.216,238.672 385.522,238.75 385.161,239.069C384.84,239.393 384.6,240.049 384.49,240.962ZM380.371,226.869L380.35,213.149L386.71,213.139L386.718,218.619L392.718,218.61L392.71,213.49L398.71,213.48L398.718,218.6L405.678,218.589L405.669,212.589L411.989,212.579L412.011,226.819L380.371,226.869Z"}),T.createElement("path",{d:"M65.814,139.849C68.729,141.171 70.736,142.169 71.872,142.859C73.008,143.55 73.919,144.446 74.609,145.637C75.262,146.812 75.598,148.106 75.583,149.592C75.548,151.026 75.195,152.579 74.452,154.218C73.759,155.748 72.876,157.017 71.804,158.024C70.733,159.032 69.522,159.669 68.208,159.951C66.841,160.254 65.55,160.196 64.281,159.796C63.05,159.414 60.94,158.545 57.953,157.191L53.034,154.961C50.156,153.656 48.113,152.642 46.977,151.951C45.841,151.261 44.929,150.364 44.276,149.19C43.586,147.999 43.251,146.705 43.302,145.235C43.301,143.785 43.69,142.248 44.433,140.609C45.127,139.079 46.009,137.81 47.081,136.803C48.116,135.779 49.327,135.142 50.677,134.876C52.044,134.573 53.335,134.631 54.567,135.014C55.836,135.414 57.945,136.282 60.896,137.62L65.814,139.849ZM52.976,143.077C51.628,142.466 50.721,142.142 50.291,142.123C49.86,142.103 49.546,142.312 49.331,142.786C49.15,143.186 49.163,143.544 49.356,143.895C49.564,144.209 50.426,144.731 51.919,145.408L65.362,151.503C67.038,152.262 68.091,152.652 68.542,152.724C68.972,152.744 69.339,152.515 69.554,152.041C69.785,151.531 69.715,151.104 69.308,150.744C68.937,150.4 67.877,149.832 66.201,149.072L52.976,143.077ZM52.319,126.004L56.705,118.981C57.892,117.081 58.972,115.728 59.913,114.901C60.82,114.053 61.749,113.548 62.643,113.399C63.504,113.229 64.394,113.314 65.336,113.619C66.256,113.958 67.541,114.619 69.237,115.678L71.578,117.14C73.275,118.2 74.424,119.153 74.971,120.014C75.54,120.84 75.748,121.866 75.562,123.07C75.376,124.275 74.85,125.644 73.897,127.171L72.732,129.037L83.52,135.775L79.156,142.764L52.319,126.004ZM61.298,121.897L68.117,126.156L68.435,125.647C68.838,125.002 68.978,124.476 68.787,124.027C68.63,123.599 68.07,123.06 67.086,122.446L64.88,121.069C63.964,120.497 63.269,120.251 62.807,120.387C62.366,120.489 61.849,121.015 61.298,121.897ZM65.491,105.806L74.058,95.089L79.026,99.06L75.604,103.341L80.291,107.087L83.488,103.088L88.174,106.834L84.977,110.834L90.414,115.179L94.16,110.493L99.097,114.439L90.205,125.562L65.491,105.806ZM91.595,76.985L113.834,99.49L108.713,104.551L95.575,97.345L105.668,107.559L100.775,112.395L78.535,89.89L83.429,85.054L96.71,91.949L86.701,81.82L91.595,76.985ZM125.69,63.611L119.349,67.872L118.033,65.913C117.43,65.017 116.929,64.486 116.607,64.365C116.262,64.211 115.93,64.29 115.565,64.536C115.166,64.803 114.946,65.192 114.97,65.658C114.961,66.146 115.196,66.711 115.664,67.409C116.244,68.272 116.823,68.846 117.346,69.122C117.89,69.431 118.878,69.538 120.364,69.455C124.624,69.195 127.52,69.417 129.075,70.011C130.653,70.637 132.301,72.229 134.041,74.818C135.29,76.677 135.995,78.228 136.144,79.381C136.314,80.568 135.942,81.878 135.104,83.357C134.277,84.78 133.017,86.06 131.357,87.176C129.531,88.403 127.726,89.086 125.962,89.259C124.221,89.465 122.756,89.149 121.643,88.354C120.531,87.56 119.306,86.166 117.989,84.207L116.829,82.481L123.17,78.22L125.312,81.407C125.981,82.403 126.505,82.967 126.849,83.121C127.249,83.286 127.637,83.218 128.102,82.905C128.534,82.615 128.765,82.171 128.741,81.705C128.728,81.184 128.471,80.585 128.002,79.888C126.954,78.328 126.085,77.466 125.341,77.291C124.575,77.083 122.977,77 120.548,77.042C118.096,77.051 116.409,76.98 115.544,76.839C114.645,76.72 113.711,76.335 112.744,75.684C111.776,75.033 110.829,73.983 109.892,72.589C108.531,70.563 107.815,68.924 107.688,67.66C107.595,66.373 107.934,65.085 108.728,63.829C109.533,62.516 110.716,61.336 112.343,60.243C114.102,59.06 115.808,58.3 117.471,58.05C119.079,57.788 120.4,57.961 121.378,58.557C122.357,59.152 123.593,60.49 124.976,62.548L125.69,63.611ZM151.705,60.191C153.126,63.059 154.048,65.102 154.491,66.356C154.934,67.609 155.072,68.88 154.852,70.239C154.615,71.562 154.056,72.776 153.103,73.917C152.169,75.005 150.913,75.984 149.3,76.783C147.795,77.529 146.308,77.953 144.841,78.055C143.374,78.156 142.033,77.883 140.837,77.27C139.587,76.64 138.624,75.777 137.895,74.666C137.184,73.59 136.1,71.582 134.644,68.643L132.247,63.804C130.844,60.972 129.904,58.894 129.461,57.64C129.019,56.386 128.881,55.115 129.118,53.793C129.338,52.434 129.897,51.219 130.867,50.114C131.783,48.99 133.057,48.047 134.67,47.248C136.175,46.502 137.662,46.079 139.129,45.977C140.579,45.839 141.919,46.112 143.133,46.761C144.383,47.392 145.346,48.254 146.057,49.33C146.787,50.442 147.87,52.449 149.309,55.353L151.705,60.191ZM139.723,54.566C139.066,53.239 138.568,52.415 138.247,52.127C137.927,51.84 137.551,51.803 137.085,52.033C136.691,52.229 136.475,52.514 136.402,52.907C136.365,53.283 136.701,54.232 137.429,55.702L143.981,68.928C144.797,70.577 145.366,71.545 145.669,71.886C145.99,72.173 146.419,72.229 146.885,71.998C147.387,71.749 147.603,71.375 147.516,70.838C147.446,70.336 146.985,69.226 146.168,67.577L139.723,54.566ZM167.692,34.963L174.441,55.018C175.206,57.293 175.666,58.911 175.821,59.871C176.013,60.82 175.878,61.92 175.489,63.149C175.088,64.339 174.357,65.429 173.348,66.317C172.3,67.218 170.987,67.956 169.395,68.491C167.613,69.091 165.919,69.324 164.35,69.176C162.794,69.067 161.502,68.615 160.501,67.897C159.499,67.179 158.751,66.334 158.28,65.311C157.809,64.287 156.98,62.076 155.845,58.702L149.874,40.96L157.683,38.332L165.249,60.813C165.696,62.14 166.052,62.948 166.281,63.251C166.56,63.579 166.927,63.667 167.344,63.526C167.837,63.36 168.076,63.069 168.088,62.601C168.099,62.133 167.856,61.159 167.358,59.681L159.92,37.579L167.692,34.963ZM174.727,33.131L180.462,32.033C184.273,31.303 186.857,30.972 188.292,31.023C189.681,31.042 190.923,31.578 192.021,32.631C193.079,33.691 193.88,35.533 194.383,38.165C194.85,40.601 194.844,42.272 194.412,43.21C193.981,44.147 192.9,44.884 191.162,45.379C192.809,45.471 194.014,45.811 194.692,46.373C195.37,46.936 195.797,47.465 196.067,48.024C196.29,48.552 196.662,50.069 197.143,52.583L198.707,60.755L191.204,62.191L189.226,51.859C188.91,50.209 188.597,49.21 188.246,48.87C187.896,48.53 187.191,48.461 186.091,48.671L188.768,62.658L180.675,64.207L174.727,33.131ZM183.842,36.925L185.166,43.839C186.069,43.666 186.668,43.389 186.976,43.085C187.285,42.782 187.323,41.919 187.06,40.544L186.737,38.855C186.549,37.873 186.264,37.235 185.85,36.988C185.444,36.781 184.746,36.752 183.842,36.925ZM219.815,41.52L211.587,41.97L211.288,36.498C211.198,34.861 211.064,33.867 210.884,33.516C210.663,33.128 210.292,32.947 209.693,32.98C209.014,33.017 208.588,33.281 208.454,33.769C208.281,34.259 208.258,35.302 208.345,36.9L209.148,51.558C209.231,53.076 209.367,54.11 209.591,54.538C209.777,55.009 210.19,55.226 210.829,55.191C211.468,55.156 211.854,54.895 211.987,54.407C212.163,53.957 212.182,52.834 212.088,51.116L211.871,47.162L220.099,46.712L220.165,47.91C220.344,51.185 220.231,53.515 219.866,54.897C219.461,56.281 218.528,57.534 216.987,58.66C215.447,59.786 213.558,60.41 211.241,60.537C208.845,60.668 206.824,60.338 205.218,59.545C203.612,58.751 202.508,57.61 201.904,56.08C201.342,54.589 200.935,52.288 200.765,49.172L200.26,39.946C200.135,37.67 200.123,35.988 200.22,34.821C200.318,33.694 200.736,32.549 201.438,31.469C202.138,30.349 203.173,29.491 204.498,28.818C205.861,28.102 207.403,27.738 209.2,27.639C211.597,27.508 213.62,27.878 215.268,28.709C216.876,29.543 217.98,30.684 218.536,32.056C219.132,33.425 219.489,35.569 219.651,38.524L219.815,41.52ZM226.051,27.944L239.739,28.872L239.309,35.218L233.841,34.847L233.435,40.833L238.544,41.179L238.137,47.166L233.029,46.819L232.558,53.763L238.544,54.169L238.117,60.475L223.909,59.511L226.051,27.944ZM272.132,44.93L264.713,43.105L265.276,40.813C265.534,39.765 265.59,39.037 265.462,38.717C265.344,38.359 265.062,38.166 264.635,38.061C264.169,37.946 263.733,38.045 263.404,38.376C263.037,38.697 262.777,39.251 262.576,40.067C262.328,41.077 262.292,41.892 262.44,42.464C262.578,43.074 263.163,43.877 264.225,44.921C267.282,47.898 269.067,50.19 269.674,51.74C270.272,53.329 270.203,55.618 269.458,58.648C268.923,60.823 268.25,62.388 267.497,63.274C266.734,64.198 265.514,64.804 263.856,65.179C262.247,65.525 260.452,65.454 258.51,64.977C256.373,64.451 254.653,63.575 253.339,62.387C252.015,61.237 251.263,59.94 251.102,58.583C250.942,57.225 251.148,55.381 251.712,53.089L252.209,51.069L259.628,52.894L258.711,56.623C258.424,57.788 258.359,58.555 258.477,58.913C258.624,59.32 258.935,59.562 259.479,59.695C259.984,59.82 260.469,59.692 260.797,59.36C261.174,59 261.444,58.407 261.644,57.592C262.093,55.766 262.147,54.543 261.775,53.875C261.414,53.169 260.4,51.931 258.734,50.162C257.078,48.354 255.996,47.058 255.518,46.322C255.001,45.577 254.658,44.628 254.489,43.474C254.319,42.32 254.459,40.913 254.861,39.282C255.443,36.912 256.174,35.28 257.025,34.335C257.913,33.401 259.095,32.785 260.559,32.527C262.071,32.24 263.74,32.321 265.643,32.789C267.702,33.295 269.412,34.045 270.716,35.108C271.991,36.121 272.752,37.215 272.97,38.339C273.187,39.464 273.029,41.279 272.437,43.687L272.132,44.93ZM292.077,61.866C290.909,64.845 290.018,66.902 289.387,68.072C288.756,69.243 287.909,70.199 286.755,70.95C285.616,71.664 284.341,72.066 282.856,72.129C281.423,72.168 279.854,71.897 278.178,71.24C276.614,70.627 275.301,69.812 274.239,68.794C273.177,67.776 272.478,66.6 272.127,65.303C271.754,63.953 271.745,62.661 272.078,61.374C272.396,60.123 273.153,57.972 274.35,54.918L276.321,49.89C277.474,46.948 278.381,44.854 279.011,43.684C279.642,42.513 280.49,41.557 281.629,40.843C282.782,40.092 284.057,39.69 285.527,39.665C286.975,39.588 288.53,39.896 290.206,40.553C291.77,41.166 293.083,41.982 294.145,42.999C295.221,43.98 295.92,45.156 296.256,46.491C296.63,47.84 296.639,49.132 296.321,50.383C295.988,51.67 295.23,53.822 294.048,56.838L292.077,61.866ZM288.186,49.213C288.726,47.836 289.002,46.913 288.999,46.482C288.996,46.051 288.771,45.748 288.287,45.558C287.877,45.398 287.521,45.43 287.181,45.64C286.878,45.865 286.401,46.752 285.803,48.279L280.416,62.021C279.745,63.734 279.411,64.806 279.362,65.26C279.365,65.691 279.612,66.045 280.097,66.235C280.618,66.44 281.041,66.347 281.379,65.922C281.704,65.533 282.216,64.445 282.887,62.732L288.186,49.213ZM305.248,47.78L317.483,54.419L314.45,60.009L309.458,57.3L306.596,62.574L311.062,64.997L308.2,70.27L303.735,67.848L297.402,79.521L290.16,75.591L305.248,47.78ZM336.214,66.91L332.603,72.146L328.586,69.376L314.235,90.188L307.451,85.51L321.802,64.698L317.818,61.951L321.428,56.715L336.214,66.91ZM364.183,92.203L339.722,112.6L332.279,105.509C334.952,101.37 338.151,96.794 341.907,91.809C339.854,93.499 335.496,96.971 328.833,102.225L321.448,95.189L340.609,69.743L346.401,75.262L339.394,83.834L332.663,92.117C336.674,88.37 342.219,83.653 349.268,77.993L355.466,83.898C354.89,84.676 352.72,87.36 348.901,92.064L341.262,101.415C346.878,96.158 352.588,91.267 358.42,86.712L364.183,92.203ZM375.916,107.812L353.681,130.812L348.545,124.115L352.809,120.341L351.008,117.992L346.209,121.067L341.024,114.307L368.687,98.385L375.916,107.812ZM357.107,116.742C359.72,114.234 362.944,111.208 366.89,107.677C361.586,110.686 357.747,112.975 355.403,114.521L357.107,116.742ZM381.75,116.129L384.673,121.184C386.616,124.543 387.779,126.874 388.203,128.246C388.641,129.564 388.544,130.914 387.911,132.296C387.258,133.644 385.782,135.006 383.462,136.348C381.315,137.589 379.735,138.133 378.708,138.035C377.68,137.936 376.629,137.157 375.589,135.679C376.044,137.264 376.12,138.514 375.812,139.34C375.504,140.165 375.144,140.742 374.705,141.181C374.28,141.565 372.97,142.416 370.754,143.697L363.551,147.862L359.727,141.249L368.834,135.982C370.288,135.141 371.128,134.516 371.334,134.074C371.54,133.631 371.373,132.942 370.812,131.973L358.485,139.102L354.36,131.969L381.75,116.129ZM381.166,125.985L375.071,129.51C375.532,130.306 375.991,130.78 376.379,130.972C376.767,131.163 377.594,130.916 378.806,130.215L380.295,129.354C381.161,128.853 381.669,128.374 381.766,127.902C381.828,127.451 381.626,126.782 381.166,125.985ZM394.047,138.523L399.41,151.152L393.555,153.638L391.414,148.594L385.891,150.939L387.892,155.651L382.369,157.996L380.368,153.284L373.962,156.004L376.307,161.527L370.49,163.997L364.924,150.89L394.047,138.523Z"}),T.createElement("path",{d:"M184.955,228.867C188.721,238.945 188.513,248.571 184.331,257.744C180.149,266.917 173.328,273.271 163.868,276.806C162.694,277.245 161.783,276.599 161.136,274.868C160.466,273.075 160.618,271.785 161.592,270.998C165.55,268.391 167.432,264.376 167.237,258.953C167.118,255.615 165.001,248.444 160.888,237.438C158.162,230.143 155.958,225.188 154.277,222.575C150.745,216.708 146.627,213.702 141.923,213.557C140.501,214.089 139.223,212.84 138.091,209.81C137.167,207.337 137.447,205.823 138.931,205.269C147.834,201.941 156.818,202.6 165.882,207.246C174.969,211.953 181.327,219.16 184.955,228.867ZM154.841,276.691C155.65,278.855 155.467,280.157 154.292,280.596C144.462,284.27 134.975,283.869 125.834,279.394C116.823,275.08 110.469,267.978 106.772,258.085C103.145,248.378 103.217,238.768 106.99,229.254C110.725,219.826 117.074,213.437 126.039,210.086C127.029,209.717 127.959,210.038 128.831,211.051C129.61,211.817 130.208,212.756 130.624,213.869C131.017,214.92 131.112,215.836 130.911,216.616C130.678,217.125 129.963,217.851 128.764,218.792C127.404,219.864 126.471,220.952 125.968,222.057C125.054,223.948 124.673,226.416 124.824,229.46C125.129,232.728 126.46,237.515 128.817,243.822L132.768,254.395C136.096,263.298 139.268,269.053 142.286,271.66C145.11,274.127 148.362,275.097 152.04,274.568C152.395,274.576 152.932,274.692 153.65,274.917C154.144,275.296 154.541,275.888 154.841,276.691ZM242.304,166.531L250.75,188.847L244.327,191.459C243.207,191.102 241.934,189.957 240.507,188.025C238.841,185.829 237.838,184.653 237.498,184.498C232.627,181.457 228.398,180.606 224.812,181.946C223.452,182.455 222.252,181.318 221.212,178.535C220.38,176.31 220.332,174.954 221.066,174.468L222.364,173.983C223.539,173.544 225.332,173.437 227.742,173.664C230.152,173.891 231.851,173.82 232.84,173.45C234.51,172.826 235.717,171.247 236.461,168.714L242.304,166.531ZM263.863,212.907C266.451,219.832 265.806,226.591 261.928,233.184C258.136,239.252 252.716,243.602 245.667,246.237C244.493,246.676 243.374,245.473 242.311,242.629C241.294,239.908 241.254,238.197 242.189,237.495C242.638,237.187 243.283,236.84 244.126,236.455C246.622,235.028 248.416,233.512 249.508,231.907C250.599,230.301 250.832,228.663 250.208,226.994C248.984,223.717 246.104,222.045 241.569,221.978C240.125,221.884 235.883,222.412 228.844,223.563C221.782,224.652 215.452,224.023 209.854,221.676C203.537,219.104 199.281,214.881 197.086,209.008C194.845,203.01 194.983,196.969 197.501,190.885C200.103,184.839 204.403,180.695 210.401,178.454C211.204,178.153 212.042,178.51 212.914,179.523C213.608,180.25 214.129,181.077 214.476,182.004C215.284,184.168 215.171,185.655 214.134,186.465C212.318,187.637 210.964,189.2 210.073,191.154C209.02,193.238 208.864,195.27 209.603,197.248C209.973,198.238 210.694,199.131 211.767,199.928C215.673,202.837 220.643,203.41 226.679,201.648C228.703,201.032 230.917,200.451 233.321,199.906C235.724,199.36 238.366,198.795 241.249,198.211C245.088,198.115 248.954,199.031 252.845,200.959C258.25,203.731 261.922,207.713 263.863,212.907ZM214.54,257.975L205.898,235.415L212.483,232.954C213.603,233.311 214.888,234.486 216.338,236.481C217.857,238.661 218.829,239.848 219.254,240.042C224.063,243.107 228.323,243.946 232.032,242.559C233.393,242.051 234.593,243.188 235.632,245.97C236.464,248.196 236.471,249.533 235.651,249.98C235.489,250.111 235.098,250.292 234.48,250.523C233.244,250.985 231.42,251.103 229.01,250.876C226.6,250.649 224.931,250.709 224.004,251.056C222.335,251.68 221.128,253.258 220.383,255.791L214.54,257.975ZM316.313,138.873L324.758,161.189L318.336,163.801C317.216,163.444 315.942,162.299 314.515,160.366C312.849,158.171 311.846,156.995 311.507,156.84C306.635,153.799 302.407,152.948 298.821,154.288C297.46,154.797 296.26,153.66 295.221,150.877C294.389,148.652 294.34,147.296 295.075,146.81L296.373,146.325C297.548,145.886 299.34,145.779 301.75,146.006C304.16,146.233 305.86,146.161 306.849,145.792C308.518,145.168 309.725,143.589 310.47,141.056L316.313,138.873ZM337.872,185.249C340.46,192.174 339.815,198.933 335.937,205.526C332.145,211.593 326.724,215.944 319.676,218.579C318.501,219.018 317.382,217.815 316.32,214.971C315.303,212.25 315.262,210.539 316.198,209.837C316.646,209.529 317.292,209.182 318.134,208.797C320.631,207.37 322.425,205.854 323.516,204.249C324.607,202.643 324.841,201.005 324.217,199.336C322.992,196.059 320.113,194.387 315.578,194.32C314.133,194.226 309.892,194.754 302.853,195.905C295.791,196.994 289.46,196.365 283.862,194.018C277.546,191.446 273.29,187.223 271.095,181.35C268.854,175.352 268.992,169.311 271.509,163.227C274.112,157.181 278.412,153.037 284.409,150.796C285.213,150.495 286.051,150.852 286.923,151.865C287.617,152.592 288.138,153.419 288.484,154.346C289.293,156.51 289.179,157.997 288.143,158.807C286.326,159.979 284.973,161.542 284.082,163.496C283.029,165.58 282.872,167.612 283.612,169.59C283.981,170.58 284.703,171.473 285.776,172.27C289.681,175.179 294.652,175.752 300.687,173.99C302.712,173.374 304.926,172.793 307.329,172.248C309.732,171.702 312.375,171.137 315.257,170.553C319.097,170.457 322.962,171.373 326.854,173.301C332.258,176.073 335.931,180.055 337.872,185.249ZM288.549,230.317L279.907,207.757L286.491,205.296C287.611,205.653 288.896,206.828 290.346,208.823C291.866,211.003 292.838,212.19 293.262,212.384C298.072,215.449 302.331,216.288 306.041,214.901C307.401,214.393 308.601,215.53 309.641,218.312C310.473,220.538 310.479,221.875 309.66,222.322C309.497,222.453 309.107,222.634 308.489,222.865C307.252,223.327 305.429,223.445 303.019,223.218C300.609,222.991 298.94,223.051 298.013,223.398C296.343,224.022 295.136,225.6 294.392,228.133L288.549,230.317Z"}),T.createElement("path",{d:"M394.606,195.569C388.976,196.699 383.488,193.046 382.359,187.416C381.229,181.786 384.882,176.298 390.512,175.168C396.142,174.038 401.63,177.692 402.76,183.321C403.89,188.951 400.236,194.439 394.606,195.569Z"}),T.createElement("path",{d:"M49.46,175.274C55.091,176.4 58.748,181.886 57.621,187.517C56.495,193.147 51.009,196.804 45.378,195.678C39.748,194.551 36.091,189.066 37.217,183.435C38.344,177.804 43.83,174.148 49.46,175.274Z"})),ZL=()=>n.jsxs("div",{className:"pad-t-8",children:[n.jsxs("div",{className:"grid-2 gap-12 start stack-laptop",children:[n.jsx("div",{children:n.jsx(YL,{className:"badger-form mar-t-4"})}),n.jsx("div",{children:n.jsxs("p",{className:"larger",children:["Badger Form is a yet another module for building forms in React.  It implements state management for forms with styles provided by"," ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),"."]})})]}),n.jsx("p",{className:"intro",children:"It provides default components for rendering form fields which simplifies the process of creating and using forms.  You can override them with your own field input components, or manually implement the layout for individual fields any way you like."}),n.jsxs("div",{className:"error alert border bdw-2 shadow-2 mar-v-16",children:[n.jsx("div",{className:"headline",children:"WARNING - Work in Progress"}),n.jsx("p",{className:"bold large",children:"Do not use this library unless you like living dangerously!"}),n.jsx("p",{children:"It's in the process of being re-written and it's special. Look... see... still got the uh... the ol' tagger on it... see... never even played it... Don't touch it!  Don't touch it! No one... no one... no!  Don't touch it. Don't point, even. No.  It can't be played... never... I mean..."}),n.jsx("p",{className:"mar-b-0 bold fgc-30 fgd-80",children:"Don't even look at it.  You've seen enough of that one."})]}),n.jsx("h2",{className:"mar-t-8 mar-b-none",children:"Read the Fine Documentation"}),n.jsxs("ul",{className:"large menu mar-t-none",children:[n.jsxs("li",{children:[n.jsx(co,{to:"/getting-started/installation",text:"Installation"})," - adding the module to your project."]}),n.jsxs("li",{children:[n.jsx(co,{to:"/tutorial/basic-form",text:"A Basic Form"})," - rendering your first form"]}),n.jsxs("li",{children:[n.jsx(co,{to:"/form",text:"The Form Component"})," - a detailed look at the form container"]}),n.jsxs("li",{children:[n.jsx(co,{to:"/field",text:"The Field Component"})," - adding a field to a form"]})]}),n.jsx("div",{className:"text-center",children:n.jsx(WL,{className:"width-12rem"})}),n.jsx("h2",{children:"This is Opinionated and Selfish Software..."}),n.jsxs("p",{children:["I wrote this library to help me do my job and make the process of working with forms less painful than I found it using other modules. It is ",n.jsx("i",{children:"opinionated"})," because it does things the way I like them to be done, and it's ",n.jsx("i",{children:"selfish"})," because I have no intention of adding things that I don't need or want."]}),n.jsx("h2",{children:"...because it's Open Source Software"}),n.jsxs("p",{children:["It's Open Source Software and you can use it if you want to for ",n.jsx("b",{children:"free"}),". You have full access to the source code which you can adapt if you need to.  If it proves useful in helping you get your job done then that's great.  But please don't expect me to commit ",n.jsx("i",{children:"my"})," time to helping ",n.jsx("i",{children:"you"})," get your job done."]}),n.jsxs("p",{children:["If you're now wondering why you should use this software, the short answer is that you probably shouldn't.  There are now numerous other form libraries for React that are probably better suited to your needs than this.  The longer answer explaining why I wrote it (because those libraries didn't exist back then) and why I continue to use it (because it works for me) can be found"," ",n.jsx(co,{to:"/getting-started/why-use-it",text:"here"}),"."]})]}),GL=Object.freeze(Object.defineProperty({__proto__:null,default:ZL},Symbol.toStringTag,{value:"Module"})),KL=()=>n.jsx(S,{children:n.jsx(x,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),QL=`import { Form, Field } from '@/lib/index.js'

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
`,Fx=()=>n.jsx(Ke,{menu:Z2}),XL=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"radio"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"radio"})," for a radio button set."]}),n.jsx(y,{Component:KL,code:QL,caption:"checkbox",expand:!0}),n.jsx(Fx,{})]}),JL=Object.freeze(Object.defineProperty({__proto__:null,default:XL},Symbol.toStringTag,{value:"Module"})),ek=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Radio Properties"}),n.jsx(_e,{}),n.jsx(Fx,{})]}),tk=Object.freeze(Object.defineProperty({__proto__:null,default:ek},Symbol.toStringTag,{value:"Module"})),nk=()=>n.jsxs(S,{children:[n.jsx(x,{type:"radio",name:"animal1",label:"Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-b-2",border:!0}),n.jsx(x,{type:"radio",name:"animal1",label:"Inline Border Options",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"mar-r-2",border:!0,inline:!0})]}),rk=`import React from 'react'
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

export default Border`,ok=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"border"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"border"})," property to add a border around each option. Note that margins aren't automatically added between each option, but you can use the ",n.jsx(H7,{})," and/or"," ",n.jsx(Y7,{})," properties to add CSS classes to apply margins."]}),n.jsx(y,{Component:nk,code:rk,caption:"border",undent:2,expand:!0})]}),sk=Object.freeze(Object.defineProperty({__proto__:null,default:ok},Symbol.toStringTag,{value:"Module"})),ik=()=>n.jsx(S,{children:n.jsx(x,{type:"radio",name:"animal",label:"Inline Options",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),lk=`import React from 'react'
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

export default Inline`,ak=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["The default behaviour is for radio button options to be displayed as blocks that extend to the full width of the container. You can set the ",n.jsx("code",{children:"inline"})," property on the field to display the options inline."]}),n.jsx(y,{Component:ik,code:lk,caption:"inline",undent:2,expand:!0})]}),dk=Object.freeze(Object.defineProperty({__proto__:null,default:ak},Symbol.toStringTag,{value:"Module"})),ck=()=>n.jsx(S,{children:n.jsx(x,{type:"radio",name:"animal",label:"Input Class",options:["Badger","Ferret","Stoat","Weasel"],inputClass:"larger"})}),uk=`import React from 'react'
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

export default InputClass`,mk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inputClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"inputClass"})," property can be used to add a CSS class to the radio button input for each option."]}),n.jsx(y,{Component:ck,code:uk,caption:"inputClass",undent:2,expand:!0})]}),pk=Object.freeze(Object.defineProperty({__proto__:null,default:mk},Symbol.toStringTag,{value:"Module"})),fk=()=>n.jsxs(S,{children:[n.jsx(x,{type:"radio",name:"animal1",label:"Options With Margins on Right and Extra Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"inline mar-r-4 mar-b-4 pad-h-4",border:!0}),n.jsx(x,{type:"radio",name:"animal2",label:"Large Options With Margins and Padding",options:["Badger","Ferret","Stoat","Weasel"],optionClass:"large mar-b-4 pad-v-2 pad-h-4",border:!0})]}),hk=`import React from 'react'
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

export default OptionClass`,xk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"optionClass"})," property can be used to add a CSS class to each option."]}),n.jsx(y,{Component:fk,code:hk,caption:"optionClass",undent:2,expand:!0})]}),gk=Object.freeze(Object.defineProperty({__proto__:null,default:xk},Symbol.toStringTag,{value:"Module"})),bk=()=>n.jsx(S,{children:n.jsx(x,{type:"radio",name:"animal",label:"Radio Buttons",options:[{value:"badger",text:"Bobby Badger",className:"underline"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),vk=`import React from 'react'
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

export default Options`,jk=()=>n.jsx(S,{children:n.jsx(x,{type:"radio",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),yk=`import React from 'react'
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

export default Options`,Sk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"options"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"options"})," property to define the options for the radio button set.  It should be an array of objects that contain"," ",n.jsx("code",{children:"value"})," (used to set the field value) and ",n.jsx("code",{children:"text"})," ","(used as the text label) properties.  You can also add a ",n.jsx("code",{children:"className"})," ","property to add a CSS class to a particular option."]}),n.jsx(y,{Component:bk,code:vk,caption:"options",undent:2,expand:!0}),n.jsxs("p",{children:["In simple cases where the value and text are the same, you can define the ",n.jsx("code",{children:"options"})," as an array of strings."]}),n.jsx(y,{Component:jk,code:yk,caption:"options",undent:2,expand:!0})]}),Fk=Object.freeze(Object.defineProperty({__proto__:null,default:Sk},Symbol.toStringTag,{value:"Module"})),wk=()=>n.jsxs(S,{children:[n.jsx(x,{type:"radio",name:"animal1",label:"Flex Options With Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"flex gap-4",border:!0}),n.jsx(x,{type:"radio",name:"animal2",label:"Grid Options with Gaps",options:["Badger","Ferret","Stoat","Weasel"],optionsClass:"grid-2 gap-4",border:!0})]}),Ck=`import React from 'react'
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

export default OptionsClass`,_k=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"optionsClass"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"optionsClass"})," property can be used to add a CSS class to each option."]}),n.jsx(y,{Component:wk,code:Ck,caption:"optionsClass",undent:2,expand:!0})]}),Ek=Object.freeze(Object.defineProperty({__proto__:null,default:_k},Symbol.toStringTag,{value:"Module"})),Tk=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name",wide:!0}),n.jsx(x,{name:"email",label:"Email",wide:!0}),n.jsx(me,{})]}),Lk=`import { Form, Field, ResetSubmit } from '@/lib/index.js'

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
`,wx=()=>n.jsx(Ke,{menu:B2}),kk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"ResetSubmit"}),n.jsxs("p",{className:"intro wide",children:["Renders a ",n.jsx(ix,{})," button and a ",n.jsx(Au,{})," button."]}),n.jsx(y,{Component:Tk,code:Lk,caption:"ResetSubmit",expand:!0}),n.jsx(wx,{})]}),Rk=Object.freeze(Object.defineProperty({__proto__:null,default:kk},Symbol.toStringTag,{value:"Module"})),Nk=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"ResetSubmit Properties"}),n.jsx(_e,{}),n.jsx(wx,{})]}),Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Nk},Symbol.toStringTag,{value:"Module"})),Pk=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(me,{className:"flex space pad-2 bgc-90 bgd-10 border bdr-2"})]}),Ak=`import React from 'react'
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
`,Mk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be set to define your own CSS class for the container.  When this is defined the ",n.jsx(M7,{})," ","and ",n.jsx(I7,{})," properties have no effect."]}),n.jsxs("p",{children:["In this example we use ",n.jsx("code",{children:"flex space"})," to separate the buttons, along with ",n.jsx("code",{children:"pad-2"})," to add some padding.  The"," ",n.jsx("code",{children:"bgc-90"})," class sets the background color to ",n.jsx("code",{children:"grey-90"})," ","and ",n.jsx("code",{children:"bgd-10"})," sets it to ",n.jsx("code",{children:"grey-10"})," when the dark theme is selected.  The ",n.jsx("code",{children:"border"})," class adds a border and"," ",n.jsx("code",{children:"bdr-2"})," sets the border radius to 0.5em.  These are all utility classes provided by ",n.jsx("a",{href:"https://abw.github.io/badger-css/",children:"Badger CSS"}),", but it works equally well with your own styles or those provided by a different CSS toolkit."]})]}),n.jsx(y,{Component:Pk,code:Ak,caption:"className",undent:2,expand:!0})]}),Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Mk},Symbol.toStringTag,{value:"Module"})),Dk=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(me,{gap:8})]}),$k=`import React from 'react'
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
`,zk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"gap"}),n.jsxs("p",{children:["The default CSS class for the container uses flexbox and sets a gap of 1rem between the buttons (",n.jsx("code",{children:"flex gap-h-4"}),"). The ",n.jsx("code",{children:"gap"})," property can be passed to change the gap (in units of 0.25rem) between the buttons."]}),n.jsx(y,{Component:Dk,code:$k,caption:"gap",undent:2,expand:!0})]}),Bk=Object.freeze(Object.defineProperty({__proto__:null,default:zk},Symbol.toStringTag,{value:"Module"})),Vk=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(me,{reset:{className:"outline",text:"Undo Changes"}})]}),Uk=`import React from 'react'
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
`,qk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"reset"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"reset"})," property can be used to pass properties to the ",n.jsx(ix,{})," component."]}),n.jsx(y,{Component:Vk,code:Uk,caption:"reset",undent:2,expand:!0})]}),Hk=Object.freeze(Object.defineProperty({__proto__:null,default:qk},Symbol.toStringTag,{value:"Module"})),Yk=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(me,{space:!0})]}),Wk=`import React from 'react'
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
`,Zk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"space"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"space"})," property can be added to change the class to ",n.jsx("code",{children:"flex space controls"}),".  This will space the controls to either side of the container."]}),n.jsx(y,{Component:Yk,code:Wk,caption:"space",undent:2,expand:!0})]}),Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Zk},Symbol.toStringTag,{value:"Module"})),Kk=()=>n.jsxs(S,{children:[n.jsx(x,{name:"name",label:"Name"}),n.jsx(x,{name:"email",label:"Email"}),n.jsx(me,{submit:{className:"blue",text:"Save"}})]}),Qk=`import React from 'react'
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
`,Xk=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submit"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"submit"})," property can be used to pass properties to the ",n.jsx(Au,{})," component."]}),n.jsx(y,{Component:Kk,code:Qk,caption:"submit",undent:2,expand:!0})]}),Jk=Object.freeze(Object.defineProperty({__proto__:null,default:Xk},Symbol.toStringTag,{value:"Module"})),eR=()=>n.jsxs(S,{values:{three:"The third field"},onReset:()=>alert("You reset the form"),children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two with default value",default:"Badger"}),n.jsx(x,{name:"three",label:"Field three with pre-defined form value"}),n.jsx(ur,{})]}),tR=`import { Form, Field, Reset } from '@/lib/index.js'

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

export default ResetExample`,Cx=()=>n.jsx(Ke,{menu:z2}),nR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Reset"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Reset"})," component can be used to add a reset button which will reset the form to its initial state."]}),n.jsxs($,{children:[n.jsxs("p",{children:["Any"," ",n.jsx(nc,{})," defined on the ",n.jsx(ue,{})," will be restored. Any fields that have a ",n.jsx(C7,{})," value will be reset to that value.  You can also define a ",n.jsx(ue,{})," ",n.jsx(w7,{})," handler which will be called when the form is reset."]}),n.jsx(G,{children:"Try entering some values in the form below and then click on the reset button."})]}),n.jsx(y,{Component:eR,code:tR,caption:"Reset",expand:!0}),n.jsx(Cx,{})]}),rR=Object.freeze(Object.defineProperty({__proto__:null,default:nR},Symbol.toStringTag,{value:"Module"})),oR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Reset Properties"}),n.jsx(_e,{}),n.jsx(Cx,{})]}),sR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),iR=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(ur,{className:"outline"})]}),lR=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const ClassNameExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset className="outline"/>
  </Form>
  /* END */

export default ClassNameExample`,aR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a custom CSS class."]}),n.jsx(y,{Component:iR,code:lR,caption:"className",undent:2,expand:!0})]}),dR=Object.freeze(Object.defineProperty({__proto__:null,default:aR},Symbol.toStringTag,{value:"Module"})),cR=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(ur,{onClick:()=>alert("reset intercepted")})]}),uR=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const OnClickExample = () =>
  /* START */
  <Form>
    <Field name="field1" label="Field One"/>
    <Reset onClick={() => alert('reset intercepted')}/>
  </Form>
  /* END */

export default OnClickExample`,mR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onClick"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onClick"})," property to handle a click on the button."]}),n.jsx(y,{Component:cR,code:uR,caption:"onClick",undent:2,expand:!0})]}),pR=Object.freeze(Object.defineProperty({__proto__:null,default:mR},Symbol.toStringTag,{value:"Module"})),fR=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(ur,{text:"Undo Changes"})]}),hR=`import React from 'react'
import { Form, Field, Reset } from '@/lib/index.js'

const TextExample = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Reset text="Undo Changes"/>
  </Form>
  /* END */

export default TextExample`,xR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"text"})," property to change the text that's displayed on the button."]}),n.jsx(y,{Component:fR,code:hR,caption:"text",undent:2,expand:!0})]}),gR=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"})),bR=()=>n.jsx(S,{children:n.jsx(x,{name:"food",type:"select",label:"What is your favourite number?",placeholder:"Pick a number",options:[{value:11,text:"Eleven"},{value:42,text:"Forty-Two"},{value:69,text:"Sixty nine, dude!"}]})}),vR=`import { Form, Field } from '@/lib/index.js'

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
`,_x=()=>n.jsx(Ke,{menu:G2}),jR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"select"}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"select"})," for a drop-down select list."]}),n.jsx(y,{Component:bR,code:vR,caption:"select",expand:!0}),n.jsx(_x,{})]}),yR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),SR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Select Properties"}),n.jsx(_e,{}),n.jsx(_x,{})]}),FR=Object.freeze(Object.defineProperty({__proto__:null,default:SR},Symbol.toStringTag,{value:"Module"})),wR=()=>n.jsx(S,{children:n.jsx(x,{name:"animal",type:"select",label:"Pick an animal",options:["Badger","Ferret","Stoat","Weasel"],inline:!0})}),CR=`import React from 'react'
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

export default Inline`,_R=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["The default behaviour is for the select input to be displayed as blocks that extends to the full width of the container. You can set the ",n.jsx("code",{children:"inline"})," property on the field to display it inline."]}),n.jsx(y,{Component:wR,code:CR,caption:"inline",undent:2,expand:!0})]}),ER=Object.freeze(Object.defineProperty({__proto__:null,default:_R},Symbol.toStringTag,{value:"Module"})),TR=()=>n.jsx(S,{children:n.jsx(x,{type:"select",name:"animal",label:"Select Options",options:[{value:"badger",text:"Bobby Badger"},{value:"ferret",text:"Franky Ferret"},{value:"stoat",text:"Simon Stoat"},{value:"weasel",text:"Willy Weasel"}]})}),LR=`import React from 'react'
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

export default Options`,kR=()=>n.jsx(S,{children:n.jsx(x,{type:"select",name:"animal",label:"Simple Options",options:["Badger","Ferret","Stoat","Weasel"]})}),RR=`import React from 'react'
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

export default Options`,NR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"options"}),n.jsxs("p",{children:["Use the ",n.jsx("code",{children:"options"})," property to define the options for the select input.  It should be an array of objects that contain"," ",n.jsx("code",{children:"value"})," (used to set the field value) and ",n.jsx("code",{children:"text"})," ","(used as the text label) properties."]}),n.jsx(y,{Component:TR,code:LR,caption:"options",undent:2,expand:!0}),n.jsxs("p",{children:["In simple cases where the value and text are the same, you can define the ",n.jsx("code",{children:"options"})," as an array of strings."]}),n.jsx(y,{Component:kR,code:RR,caption:"options",undent:2,expand:!0})]}),OR=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),PR=()=>n.jsx(S,{children:n.jsx(x,{type:"select",name:"animal",label:"Select Options",placeholder:"Pick an animal",options:["Badger","Ferret","Stoat","Weasel"]})}),AR=`import React from 'react'
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

export default Placeholder`,MR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(y,{Component:PR,code:AR,caption:"placeholder",undent:2,expand:!0})]}),IR=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),DR=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(x,{name:"field2",label:"Field Two",value:"Hello World!"}),n.jsx(Rn,{changed:!0,children:n.jsx(me,{space:!0,reset:{className:"outline"},submit:{className:"blue"}})})]}),$R=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default ChangedExample`,Ex=()=>n.jsx(Ke,{menu:U2}),zR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Status"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Status"})," component will only render its child components when the form status matches a particular condition."]}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The component expects one or more properties relating to different form status conditions:"," ",n.jsx("code",{children:"changed"}),","," ",n.jsx("code",{children:"validating"}),","," ",n.jsx("code",{children:"valid"}),","," ",n.jsx("code",{children:"invalid"}),","," ",n.jsx("code",{children:"submitting"})," and"," ",n.jsx("code",{children:"submitted"}),". The default behaviour is to only render the children when all of the specified conditions are met.  The ",n.jsx("code",{children:"any"})," property can be provided to change that to match any condition."]}),n.jsxs("p",{children:['A simple example is shown below. The "Reset" and "Submit" buttons are only displayed once the user has made changes to a form field and the form ',n.jsx("code",{children:"changed"})," status flag is true."]})]}),n.jsxs(G,{children:["Edit one of the fields in the form and you should see the"," ",'"Reset" and "Submit" buttons appear as if by magic.  Try clicking on the "Reset" button and they will be hidden again.']})]}),n.jsx(y,{Component:DR,code:$R,caption:"Status",expand:!0}),n.jsx(Ex,{})]}),BR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),VR=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Status Properties"}),n.jsx(_e,{}),n.jsx(Ex,{})]}),UR=Object.freeze(Object.defineProperty({__proto__:null,default:VR},Symbol.toStringTag,{value:"Module"})),qR=()=>n.jsxs(S,{onSubmit:()=>({ok:!0}),children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Rn,{any:!0,valid:!0,invalid:!0,children:n.jsx("div",{className:"info alert",children:"Validation is complete"})}),n.jsx(me,{space:!0}),n.jsx(kt,{status:!0})]}),HR=`import React from 'react'
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

export default AnyExample`,YR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"any"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"any"})," property indicates that the child content should only be rendered when any of the specified conditions are true.  This changes the default behaviour which is to required that all specified conditions are met."]}),n.jsxs("p",{children:["The example below includes the ",n.jsx(zr,{})," component so that you can see the form status changing."]})]}),n.jsx(G,{children:"The field here is required.  If you enter a value and then click on the submit button the form will become valid.  If you don't enter a value then it will be invalid.  Either way the alert will be shown because it satisfied the condition that any of the valid or invalid states are true."})]}),n.jsx(y,{Component:qR,code:HR,caption:"any",undent:2,expand:!0})]}),WR=Object.freeze(Object.defineProperty({__proto__:null,default:YR},Symbol.toStringTag,{value:"Module"})),ZR=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsxs(Rn,{changed:!0,children:[n.jsx("div",{className:"info alert",children:"The form has changed!"}),n.jsx(ur,{})]})]}),GR=`import React from 'react'
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

export default ChangedExample`,KR=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"changed"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"changed"})," property indicates that the child content should only be rendered when a form field has been changed."]}),n.jsx(y,{Component:ZR,code:GR,caption:"changed",undent:2,expand:!0})]}),QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),XR=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Rn,{invalid:!0,children:n.jsx("div",{className:"warning alert",children:"The form is invalid!"})}),n.jsx(me,{space:!0})]}),JR=`import React from 'react'
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

export default InvalidExample`,eN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"invalid"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"invalid"})," property indicates that the child content should only be rendered when the form has been validated and found to be invalid."]}),n.jsx(G,{children:"The field here is required.  If you submit without entering a value you should see the form becomes invalid."})]}),n.jsx(y,{Component:XR,code:JR,caption:"invalid",undent:2,expand:!0})]}),tN=Object.freeze(Object.defineProperty({__proto__:null,default:eN},Symbol.toStringTag,{value:"Module"})),nN=()=>n.jsxs(S,{onSubmit:()=>({ok:!0}),children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(Rn,{submitted:!0,children:n.jsx("div",{className:"info alert",children:"The form has been submitted!"})}),n.jsx(me,{space:!0})]}),rN=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default SubmittedExample`,oN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submitted"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"submitted"})," property indicates that the child content should only be rendered after the form has been submitted."]}),n.jsxs(G,{children:["Try submitting the form.  You can see the form change to the ",n.jsx("code",{children:"submitted"})," state."]})]}),n.jsx(y,{Component:nN,code:rN,caption:"submitted",expand:!0})]}),sN=Object.freeze(Object.defineProperty({__proto__:null,default:oN},Symbol.toStringTag,{value:"Module"})),iN=()=>n.jsxs(S,{onSubmit:()=>mn(1e3).then(()=>({ok:!0})),children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(Rn,{submitting:!0,children:n.jsx("div",{className:"info alert",children:"The form is submitting!"})}),n.jsx(me,{space:!0})]}),lN=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default SubmittingExample`,aN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"submitting"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"submitting"})," property indicates that the child content should only be rendered while the form is submitting."]}),n.jsxs(G,{children:["Try submitting the form.  There's a dummy ",n.jsx(un,{})," function defined for the form which will wait for 1 second before returning so you can see the form change to the ",n.jsx("code",{children:"submitting"})," state."]})]}),n.jsx(y,{Component:iN,code:lN,caption:"submitting",expand:!0})]}),dN=Object.freeze(Object.defineProperty({__proto__:null,default:aN},Symbol.toStringTag,{value:"Module"})),cN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",required:!0}),n.jsx(Rn,{valid:!0,children:n.jsx("div",{className:"success alert",children:"The form is valid!"})}),n.jsx(me,{space:!0})]}),uN=`import React from 'react'
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

export default ValidatingExample`,mN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"valid"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"valid"})," property indicates that the child content should only be rendered when the form has successfully validated."]}),n.jsx(G,{children:"The field here is required.  If you enter a value and then click on the submit button you should see the form becomes valid."})]}),n.jsx(y,{Component:cN,code:uN,caption:"valid",undent:2,expand:!0})]}),pN=Object.freeze(Object.defineProperty({__proto__:null,default:mN},Symbol.toStringTag,{value:"Module"})),fN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One",validate:e=>mn(1e3).then(()=>e)}),n.jsx(Rn,{validating:!0,children:n.jsx("div",{className:"info alert",children:"The form is validating!"})}),n.jsx(me,{space:!0})]}),hN=`import { Form, Field, Status, ResetSubmit } from '@/lib/index.js'

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

export default ValidatingExample`,xN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"validating"}),n.jsxs($,{children:[n.jsxs("p",{children:["The ",n.jsx("code",{children:"validating"})," property indicates that the child content should only be rendered while the form is validating."]}),n.jsxs(G,{children:["Try submitting the form.  There's a dummy ",n.jsx(zt,{})," function defined for the field which will wait for 1 second before returning so you can see the form change to the ",n.jsx("code",{children:"validating"})," state."]})]}),n.jsx(y,{Component:fN,code:hN,caption:"validating",expand:!0})]}),gN=Object.freeze(Object.defineProperty({__proto__:null,default:xN},Symbol.toStringTag,{value:"Module"})),bN=()=>n.jsxs(S,{onSubmit:()=>alert("Form was submitted"),children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(W,{})]}),vN=`import { Form, Field, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/badger-form'

const SubmitExample = () =>
  <Form onSubmit={() => alert('Form was submitted')}>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit/>
  </Form>

export default SubmitExample`,Tx=()=>n.jsx(Ke,{menu:$2}),jN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submit"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"Submit"})," component can be used to add a button to submit the form. You can use the ",n.jsx(un,{})," form property to handle the submission."]}),n.jsx(y,{Component:bN,code:vN,caption:"Submit",expand:!0}),n.jsx(Tx,{})]}),yN=Object.freeze(Object.defineProperty({__proto__:null,default:jN},Symbol.toStringTag,{value:"Module"})),SN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submit Properties"}),n.jsx(_e,{}),n.jsx(Tx,{})]}),FN=Object.freeze(Object.defineProperty({__proto__:null,default:SN},Symbol.toStringTag,{value:"Module"})),wN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(W,{className:"blue"})]}),CN=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitClassName = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit className="blue"/>
  </Form>
  /* END */

export default SubmitClassName`,_N=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"className"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"className"})," property can be used to add a custom CSS class."]}),n.jsx(y,{Component:wN,code:CN,caption:"className",undent:2,expand:!0})]}),EN=Object.freeze(Object.defineProperty({__proto__:null,default:_N},Symbol.toStringTag,{value:"Module"})),TN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"field1",label:"Field One"}),n.jsx(W,{onClick:e=>{e.preventDefault(),alert("Submit button was clicked!")}})]}),LN=`import React from 'react'
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

export default OnClick`,kN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"onClick"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"onClick"})," property to handle a click on the button.  You will need to call ",n.jsx("code",{children:"preventDefault()"})," on the event if you want to stop the form from being submitted."]}),n.jsx(y,{Component:TN,code:LN,caption:"onClick",undent:2,expand:!0})]}),RN=Object.freeze(Object.defineProperty({__proto__:null,default:kN},Symbol.toStringTag,{value:"Module"})),NN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Field one"}),n.jsx(x,{name:"two",label:"Field two"}),n.jsx(W,{text:"Save Changes"})]}),ON=`import React from 'react'
import { Form, Field, Submit } from '@/lib/index.js'

const SubmitText = () =>
  /* START */
  <Form>
    <Field name="one" label="Field one"/>
    <Field name="two" label="Field two"/>
    <Submit text="Save Changes"/>
  </Form>
  /* END */

export default SubmitText`,PN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{children:["You can use the ",n.jsx("code",{children:"text"})," property to change the text that's displayed on the button and add a custom CSS class using ",n.jsx("code",{children:"className"}),"."]}),n.jsx(y,{Component:NN,code:ON,caption:"text",undent:2,expand:!0})]}),AN=Object.freeze(Object.defineProperty({__proto__:null,default:PN},Symbol.toStringTag,{value:"Module"})),MN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one"}),n.jsx(x,{name:"two",label:"A text input with a label"}),n.jsx(x,{name:"three",label:"Another text input",type:"text"}),n.jsx(x,{name:"four",label:"Text with placeholder",placeholder:"Hello World!"}),n.jsx(x,{name:"money",label:"Prefix/Suffix",prefix:"$",suffix:".00",prefixClass:"lined shaded",suffixClass:"lined shaded"})]}),IN=`import React from 'react'
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

export default InputExample`,Lx=()=>n.jsx(Ke,{menu:H2}),DN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"text"}),n.jsxs("p",{className:"intro wide",children:["The ",n.jsx("code",{children:"text"})," input is the default ",n.jsx(Tn,{})," for a ",n.jsx(X,{}),".  You can specify it explicitly if you like, but it's entirely optional."]}),n.jsx(y,{Component:MN,code:IN,caption:"text",undent:2,expand:!0}),n.jsx(Lx,{})]}),$N=Object.freeze(Object.defineProperty({__proto__:null,default:DN},Symbol.toStringTag,{value:"Module"})),zN=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Text Properties"}),n.jsx(_e,{}),n.jsx(Lx,{})]}),BN=Object.freeze(Object.defineProperty({__proto__:null,default:zN},Symbol.toStringTag,{value:"Module"})),VN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"An inline text field",inline:!0}),n.jsx(x,{name:"two",label:"Same with prefix and suffix",prefix:"£",suffix:".00",inline:!0}),n.jsx(x,{name:"two",label:"Default text field"})]}),UN=`import React from 'react'
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

export default Inline`,qN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsx("p",{children:"The default behaviour is to make the text fields extend to the full width of the container.  Bitter experience has taught me that it's generally easier to do this and constrain the width of the container than it is to try and get all inputs the same width, especially if you're using prefix and suffix elements."}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width.  The ",n.jsx($7,{})," can be used to set the input size."]}),n.jsx(y,{Component:VN,code:UN,caption:"inline",undent:2,expand:!0})]}),HN=Object.freeze(Object.defineProperty({__proto__:null,default:qN},Symbol.toStringTag,{value:"Module"})),YN=()=>n.jsx(S,{children:n.jsx(x,{name:"one",label:"Name",placeholder:"Your name"})}),WN=`import React from 'react'
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

export default Placeholder`,ZN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(y,{Component:YN,code:WN,caption:"placeholder",undent:2,expand:!0})]}),GN=Object.freeze(Object.defineProperty({__proto__:null,default:ZN},Symbol.toStringTag,{value:"Module"})),KN=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"An inline text field",inline:!0}),n.jsx(x,{name:"two",label:"With explicit size=25",size:"25",inline:!0}),n.jsx(x,{name:"two",label:"Same size with prefix and suffix",prefix:"£",suffix:".00",size:"25",inline:!0})]}),QN=`import React from 'react'
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

export default Inline`,XN=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"size"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"size"})," property can be used to set the size (in characters) of a text input.  This will only take effect when the ",n.jsx(D7,{})," property is set.  The default value is 20."]}),n.jsxs("p",{children:["Note that this controls the size of the input field.  If you have a ",n.jsx(nx,{})," or ",n.jsx(rx,{})," defined for the field then they will increase the overall width of the field.  If you want to control the overall width of the field then you can do so using the ",n.jsx(_7,{})," property."]}),n.jsx(y,{Component:KN,code:QN,caption:"inline",undent:2,expand:!0})]}),JN=Object.freeze(Object.defineProperty({__proto__:null,default:XN},Symbol.toStringTag,{value:"Module"})),eO=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",type:"number",label:"A number field"}),n.jsx(x,{name:"two",type:"date",label:"A date field"}),n.jsx(x,{name:"three",type:"password",label:"A password field"}),n.jsx(x,{name:"four",type:"color",label:"A color field"})]}),tO=`import React from 'react'
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

export default TypeExample`,nO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"type"}),n.jsxs("p",{children:["The ",n.jsx(Tn,{})," property can also be set to one of the other input types that are based on the text input: ",n.jsx("code",{children:"number"}),","," ",n.jsx("code",{children:"date"}),", ",n.jsx("code",{children:"password"}),", ",n.jsx("code",{children:"color"})," and so on."]}),n.jsx(y,{Component:eO,code:tO,caption:"type",undent:2,expand:!0})]}),rO=Object.freeze(Object.defineProperty({__proto__:null,default:nO},Symbol.toStringTag,{value:"Module"})),oO=()=>n.jsx(S,{children:n.jsx(x,{name:"one",label:"A text area input",type:"textarea"})}),sO=`import React from 'react'
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

export default InputExample`,kx=()=>n.jsx(Ke,{menu:Y2}),iO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Input Types"}),n.jsx("h2",{className:"font-mono",children:"textarea"}),n.jsxs("p",{className:"intro wide",children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"textarea"})," for a text area input."]}),n.jsx(y,{Component:oO,code:sO,caption:"textarea",undent:2,expand:!0}),n.jsx(kx,{})]}),lO=Object.freeze(Object.defineProperty({__proto__:null,default:iO},Symbol.toStringTag,{value:"Module"})),aO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Textarea Properties"}),n.jsx(_e,{}),n.jsx(kx,{})]}),dO=Object.freeze(Object.defineProperty({__proto__:null,default:aO},Symbol.toStringTag,{value:"Module"})),cO=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"12 Columns",type:"textarea",cols:12,inline:!0}),n.jsx(x,{name:"two",label:"30 Columns",type:"textarea",cols:30,inline:!0})]}),uO=`import React from 'react'
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

export default ColsExample`,mO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"cols"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"cols"})," property can be used to set the number of columns. This will only have any effect when the ",n.jsx(B7,{})," property is set."]}),n.jsx(y,{Component:cO,code:uO,caption:"cols",undent:2,expand:!0})]}),pO=Object.freeze(Object.defineProperty({__proto__:null,default:mO},Symbol.toStringTag,{value:"Module"})),fO=()=>n.jsx(S,{children:n.jsx(x,{name:"one",label:"An inline textarea field",type:"textarea",inline:!0})}),hO=`import React from 'react'
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

export default Inline`,xO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"inline"}),n.jsxs("p",{children:["You can set the ",n.jsx("code",{children:"inline"})," property on a field if you want the input to have fluid width.  ",n.jsx(V7,{})," property can be used to set the width as the number of columns.  The default width is 20."]}),n.jsx(y,{Component:fO,code:hO,caption:"inline",undent:2,expand:!0})]}),gO=Object.freeze(Object.defineProperty({__proto__:null,default:xO},Symbol.toStringTag,{value:"Module"})),bO=()=>n.jsx(S,{children:n.jsx(x,{name:"one",label:"Summary",type:"textarea",placeholder:"Enter a summary"})}),vO=`import React from 'react'
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

export default Placeholder`,jO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"placeholder"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"placeholder"})," property can be used to add some placeholder text to the input."]}),n.jsx(y,{Component:bO,code:vO,caption:"placeholder",undent:2,expand:!0})]}),yO=Object.freeze(Object.defineProperty({__proto__:null,default:jO},Symbol.toStringTag,{value:"Module"})),SO=()=>n.jsxs(S,{children:[n.jsx(x,{name:"one",label:"Two rows",type:"textarea",rows:2}),n.jsx(x,{name:"two",label:"Ten Rows",type:"textarea",rows:10})]}),FO=`import React from 'react'
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

export default RowsExample`,wO=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"rows"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"rows"})," property can be used to set the number of rows."]}),n.jsx(y,{Component:SO,code:FO,caption:"rows",undent:2,expand:!0})]}),CO=Object.freeze(Object.defineProperty({__proto__:null,default:wO},Symbol.toStringTag,{value:"Module"})),_O=()=>n.jsxs(S,{children:[n.jsx("h2",{children:"Login Form"}),n.jsx(x,{required:!0,name:"email",label:"Email Address"}),n.jsx(x,{required:!0,name:"password",type:"password",label:"Password"}),n.jsx(W,{text:"Login"})]}),EO=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default BasicLoginForm`,TO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"A Basic Form"}),n.jsxs("p",{className:"intro wide",children:["One of the underlying principles of this library is that it should be just as easy, if not easier, to create a form using"," ","Badger Form as it should be using vanilla HTML."]}),n.jsx("h2",{children:"Login Form"}),n.jsxs($,{align:"start",children:[n.jsx("div",{children:n.jsx("p",{children:"So without further ado, let's look at the one form that most websites will require: a user login form.  In this simple example there are fields for the user to enter their email address and password."})}),n.jsx("div",{children:n.jsx(lt,{children:`Try entering some values in the form below and click on the "Login" button. Also see what happens if you don't enter a value for either field.`})})]}),n.jsx(y,{Component:_O,code:EO,caption:"Basic Login Form",expand:!0}),n.jsxs($,{align:"start",children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Form"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Form"})," component can contain any content so you can intersperse form fields with other markup."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"onSubmit"})," property should be defined to handle the form submission.  If you don't define one then a window alert will be shown when the form is submitted, as demonstrated in this example."]})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Field"}),n.jsxs("p",{children:["The only mandatory property for all ",n.jsx("code",{children:"Field"})," components is"," ",n.jsx("code",{children:"name"}),".  The default ",n.jsx("code",{children:"type"})," is ",n.jsx("code",{children:"text"})," ","and must be provided if you want any other kind of field input type. Some additional properties may be required depending on the field type.  For example, a ",n.jsx("code",{children:"select"})," input will also require"," ",n.jsx("code",{children:"options"})," to be defined."]}),n.jsx("h3",{children:"Submit"}),n.jsxs("p",{children:['A button used to submit the form.  The default text displayed is "Submit" which you can change via the ',n.jsx("code",{children:"text"})," property as shown here."]})]})]}),n.jsx(Ke,{menu:Nu})]}),LO=Object.freeze(Object.defineProperty({__proto__:null,default:TO},Symbol.toStringTag,{value:"Module"})),On=()=>n.jsx(Ke,{menu:Nu}),kO=e=>new Promise((t,r)=>e.password===e.passcheck?t(e):r({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),RO=e=>Ut().trim().email().required("You must enter your email address!").validate(e),sf=e=>Ut().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),NO={name:{label:"Your name",required:!0},email:{label:"Email address",required:!0,validate:RO},password:{label:"Password",type:"password",required:!0,validate:sf},passcheck:{label:"Confirm",type:"password",required:!0,validate:sf},experience:{label:"What is your level of experience?",type:"radio",options:["Beginner","Intermediate","Expert"]},dob:{type:"date",label:"Date of Birth"},price:{type:"number",label:"Your donation?",prefix:"£",suffix:".00",min:11,max:100},animal:{label:"Your favourite animal?",type:"select",default:"Badger",options:["Badger","Ferret","Stoat"]},color:{label:"Your favourite color?",type:"select",default:"Red",options:[{value:null,text:"Select a color"},{value:"red",text:"Red"},{value:"orange",text:"Orange"},{value:"yellow",text:"Yellow"},{value:"violet",text:"Violet"},{value:"white",text:"White"}]},terms:{label:"Terms and conditions",type:"checkbox",text:"I accept the Terms and Conditions",className:"fluid",required:!0,requiredMessage:"You must accept the Terms and Conditions"}},OO=()=>{const[e,t]=T.useState();return n.jsxs(S,{fields:NO,validate:kO,showRequired:!0,children:[n.jsx(Ar,{legend:"Your Details",children:n.jsx(nt,{names:"name email password passcheck",grid:2,stack:"laptop"})}),n.jsx(Ve,{fieldErrors:!1}),n.jsxs(Ar,{legend:"Other Information",children:[n.jsx(nt,{names:"dob price",grid:2,stack:"laptop"}),n.jsx(x,{name:"experience"}),n.jsxs("div",{className:"grid-2 gap-v-none gap-h-4 stack-laptop",children:[n.jsx(x,{name:"animal"}),n.jsx(x,{name:"color",onChange:t})]}),(e==null?void 0:e.value)&&n.jsxs("div",{style:{color:e.value,backgroundColor:"#444",marginTop:"1em",padding:"0.25rem 0.5rem",textAlign:"center"},children:[e.value," is a great color!"]})]}),n.jsx(x,{name:"terms"}),n.jsx(W,{text:"Register"})]})},PO=`import { Form, Field, Fields, Fieldset, Errors, Submit } from '@/lib/index.js'

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

export default RegistrationForm`,AO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Complete Registration Form"}),n.jsx("p",{className:"intro wide",children:"Here's a more complete (albeit rather contrived) example of a user registration form."}),n.jsx("h2",{children:"Input Types"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsx("p",{children:"This example demonstrates some of the other fields input types."}),n.jsxs("p",{children:["Set the ",n.jsx(X,{})," ",n.jsx(Tn,{})," to ",n.jsx("code",{children:"radio"})," for a ",n.jsx(ax,{})," button input and provide some ",n.jsx(q7,{}),", as shown here for the ",n.jsx("code",{children:"experience"})," field."]}),n.jsxs("p",{children:["Or set it to ",n.jsx("code",{children:"select"})," for a ",n.jsx(dx,{})," input and provide some ",n.jsx(W7,{}),", as shown in the ",n.jsx("code",{children:"animal"})," field."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["Set it to ",n.jsx("code",{children:"checkbox"})," for a ",n.jsx(lx,{})," and provide some ",n.jsx(U7,{})," to go alongside it."]}),n.jsxs("p",{children:["You can also use the ",n.jsx(Tn,{})," to set other text input types, like ",n.jsx("code",{children:"number"})," and ",n.jsx("code",{children:"date"}),"."]})]})]}),n.jsx(y,{Component:OO,code:PO,caption:"Registration Form"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Components and Properties"}),n.jsxs("dl",{children:[n.jsxs("dt",{children:[n.jsx(Kp,{})," Component"]}),n.jsx("dd",{children:n.jsxs("p",{children:["The example includes the ",n.jsx(Kp,{})," component which can be used to group fields together in a set, complete with a ",n.jsx(A7,{}),"."]})}),n.jsxs("dt",{children:[n.jsx(Ln,{})," and ",n.jsx($r,{})]}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx($r,{})," and ",n.jsx(Ln,{})," properties can be set on the ",n.jsx(ue,{})," or individual ",n.jsx(X,{})," components to have an additional label displayed telling the user which fields they do and don't need to complete."]})}),n.jsx("dt",{children:n.jsx(or,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(or,{})," property can be added to a ",n.jsx(X,{})," to watch for changes in the field value.  You can see it in use above in the ",n.jsx("code",{children:"color"})," field."]})})]})]}),n.jsxs("div",{children:[n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"There's a lot to take in there.  For the next example we'll scale things back a bit and look at the common case where you want to edit some existing data using a form."})]})]}),n.jsx(On,{uri:"complete-registration"})]}),MO=Object.freeze(Object.defineProperty({__proto__:null,default:AO},Symbol.toStringTag,{value:"Module"})),IO={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",debug:!0,placeholder:"Select manufacturer",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},DO=()=>n.jsxs(S,{fields:IO,debug:!0,children:[n.jsx(x,{name:"name",debug:!0,wide:!0}),n.jsx(x,{name:"description",debug:!0,wide:!0}),n.jsx(nt,{names:"manufacturer price",grid:2,debug:!0,wide:!0}),n.jsx(me,{className:"flex space"}),n.jsx(kt,{status:!0})]}),$O=`import { Form, Field, Fields, ResetSubmit, Debug } from '@/lib/index.js'

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

export default DebuggingForm`,zO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Debugging"}),n.jsx("p",{className:"intro wide",children:"Let't face it, things don't always work right first time, so being able to debug your forms is an important requirement."}),n.jsxs("h2",{children:[n.jsx(zr,{})," Component and ",n.jsx(rc,{})," Property"]}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx(zr,{})," component can be added to a form to display information about the form values and other state variables.  By default it shows only the form values, but you can use the ",n.jsx("code",{children:"status"})," option to also show the form status.  If for some reason you don't want to see the values you can set ",n.jsx("code",{children:"values"})," to ",n.jsx("code",{children:"false"}),"."]}),n.jsxs("p",{children:["If you add the ",n.jsx(rc,{})," property to a ",n.jsx(ue,{})," or"," ",n.jsx(X,{})," then it will enable debugging messages for that component. These will be output to the Javascript console.  Any properties (like"," ",n.jsx("code",{children:"debug"}),") that are passed to the ",n.jsx(Bl,{})," component will be forwarded onto the respective ",n.jsx(X,{})," components, so it works there too."]})]}),n.jsx(lt,{children:"Try changing some of the values in the form.  Watch the form values and status change in the debugging panel.  Also check out the Javascript console for further debugging messages."})]}),n.jsx(y,{Component:DO,code:$O,caption:"Debugging"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"On the next page we'll look at how you can define your own field layout."}),n.jsx(On,{uri:"debugging"})]}),BO=Object.freeze(Object.defineProperty({__proto__:null,default:zO},Symbol.toStringTag,{value:"Module"})),VO={name:{label:"Product Name",required:!0},description:{label:"Description",type:"textarea",required:!0},manufacturer:{label:"Manufacturer",type:"select",options:[{value:"100",text:"Alan's Accessories"},{value:"101",text:"Brian's Bits"},{value:"102",text:"Charlie's Components"}]},price:{type:"number",label:"Price",prefix:"$"}},dc={id:"9876",version:123,name:"Widget-2000",description:"This is an awesome widget",manufacturer:"102",price:12.99},UO={id:dc.id,version:dc.version},qO=()=>n.jsxs(S,{fields:VO,values:dc,hidden:UO,children:[n.jsx(nt,{names:"name description",wide:!0}),n.jsx(nt,{names:"manufacturer price",grid:2,wide:!0}),n.jsx(me,{submit:{text:"Save Changes",className:"blue"},reset:{className:"outline"},className:"flex space"})]}),HO=`import { Form, Fields, ResetSubmit } from '@/lib/index.js'

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

export default EditForm`,YO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Edit Form"}),n.jsx("p",{className:"intro wide",children:"Another common use case for forms is in editing existing data records."}),n.jsx("h2",{children:n.jsx(nc,{})}),n.jsxs($,{children:[n.jsxs("p",{children:["You can pass the ",n.jsx(nc,{})," property to a ",n.jsx(ue,{})," to seed it with initial values for fields.  If there are additional hidden values that you want to include when you submit the form then you can provide them using the ",n.jsx(X2,{})," property."]}),n.jsxs(lt,{children:["Try changing some of the values in the form and then click on the ",n.jsx("b",{children:"Reset"})," button.  The fields will reset to their original values."]})]}),n.jsx(y,{Component:qO,code:HO,caption:"Edit Form"}),n.jsx("h2",{children:"Where Next?"}),n.jsxs("p",{children:["You've seen an example of the ",n.jsx(zr,{})," component in action. Now it's time to talk about debugging in a little more detail."]}),n.jsx(On,{uri:"edit-form"})]}),WO=Object.freeze(Object.defineProperty({__proto__:null,default:YO},Symbol.toStringTag,{value:"Module"})),ZO={email:{label:"Email Address",validate:e=>Ut().trim().email("That doesn't look like an email address").required("You must enter your email address!").validate(e)},password:{label:"Password",type:"password",validate:e=>Ut().trim().required("You must enter your password!").min(6,"Your password should be at least 6 characters").validate(e)}},GO=()=>n.jsxs(S,{fields:ZO,children:[n.jsx(x,{name:"email"}),n.jsx(x,{name:"password"}),n.jsx(W,{text:"Login"})]}),KO=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default LoginWithValidation`,QO=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Field Validation"}),n.jsxs("p",{className:"intro wide",children:["It's good practice to validate fields as thoroughly as possible.  On the client-side this is important to help draw the user's attention to any invalid fields ",n.jsx("i",{children:"before"})," the form is submitted.  Of course you'll also need some kind of server-side validation, but we'll look at that later."]}),n.jsx("h2",{children:"Login Form With Field Validation"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can add a ",n.jsx(zt,{})," property to a field to provide a function to validate the input.  This will be passed the field value and should return a Promise that resolves with the (possibly modified) value if the input is valid, or rejects with an error if not. In these examples we'll be using"," ",n.jsx("a",{href:"https://github.com/jquense/yup",children:"Yup"})," but you should be able to use any validation library or even roll your own validation functions for special cases."]}),n.jsxs("p",{children:["You can add the ",n.jsx(zt,{})," function to the ",n.jsx(X,{})," ","component if you like, but you may find that things quickly get a bit messy.  So this is a good opportunity to demonstrate the other way of defining form fields, using a schema.  This allows you to define your field properties separately and then pass them to the ",n.jsx(ue,{})," ","component as the ",n.jsx(Ct,{})," property.  When you include a ",n.jsx(X,{})," the ",n.jsx(Dr,{})," will be used to lookup the default properties for the field from the ",n.jsx(Ct,{})," you've provided."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["There are a number of benefits to defining a separate schema for your form fields.  For one, it means that all your field definitions are in a single place where you can easily inspect and edit them without having to wade through lots of markup.  It also means that your form markup remains free of all the functional code, allowing you to concentrate on layout, styling and other presentational aspects. If you decide to split a long form into multiple parts, change the order of some fields, or perhaps display some fields side-by-side instead of stacked vertically, then it's easier to move a single"," ",n.jsx(X,{})," element around, or just edit the ",n.jsx(Dr,{})," property than it is to cut and paste large blocks of code."]}),n.jsxs(lt,{children:["Try entering some values in the form below and click on the"," ",n.jsx("b",{children:"Login"})," button. If you don't provide a value, or if you provide an invalid value then you should see the validation errors."]})]})]}),n.jsx(y,{Component:GO,code:KO,caption:"Field Validation",expand:!0}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Validation Properties"}),n.jsxs("dl",{children:[n.jsx("dt",{children:n.jsx(Bt,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["By default, field validation happens when the form is submitted. You can add the ",n.jsx(Bt,{})," property to either the"," ",n.jsx(ue,{})," or individual ",n.jsx(X,{})," components if you want the validation to happen when a field is blurred."]})}),n.jsx("dt",{children:n.jsx(Vt,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["You can add the ",n.jsx(Vt,{})," property to either the"," ",n.jsx(ue,{})," or individual ",n.jsx(X,{})," components if you want validation to happen any time the field value changes, i.e. as the user types."]})}),n.jsx("dt",{children:n.jsx(li,{})}),n.jsx("dd",{children:n.jsxs("p",{children:["The ",n.jsx(li,{})," can be set if you only want validation to start after the user has entered a particular number of characters. The default values is ",n.jsx("code",{children:"1"}),"."]})})]})]}),n.jsxs("div",{children:[n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"If you need to perform some kind of validation where you have access to all of the submitted values then you can do that at the form level We'll look at that next."})]})]}),n.jsx(On,{uri:"field-validation"})]}),XO=Object.freeze(Object.defineProperty({__proto__:null,default:QO},Symbol.toStringTag,{value:"Module"})),JO=()=>{const[e,t]=T.useState(),r=o=>Promise.resolve(t(o));return n.jsxs(n.Fragment,{children:[n.jsxs(S,{onSubmit:r,debug:!0,children:[n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert border mar-t-4",children:[n.jsx("h4",{children:"Submitted Values"}),n.jsx("pre",{children:JSON.stringify(e)})]}):null]})},eP=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default DummySubmit`,tP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Submission"}),n.jsxs("p",{className:"intro wide",children:["To handle submission of a form we need to add an ",n.jsx(un,{})," ","handler to the ",n.jsx(ue,{})," component. In most cases this will be making a call to a back-end API but to demonstrate the basic principle let's start with something simpler."]}),n.jsx("h2",{children:n.jsx(un,{})}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["We'll create a function which stores the submitted"," ",n.jsx("code",{children:"values"})," in a state variable and displays them on the screen.  The ",n.jsx(un,{})," handler is passed an object containing the validated form values.  It should return a Promise which resolves on success.  If an error occurs then the Promise should reject, returning an object containing either an ",n.jsx("code",{children:"error"})," and/or an array of ",n.jsx("code",{children:"errors"}),".  These are handled the same as for client-side form validation."]}),n.jsx(lt,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the submitted values appear in a debugging window beneath the form.'})]}),n.jsx(y,{Component:JO,code:eP,caption:"Dummy Submission"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"When the form is submitted there are two possible outcomes.  Either the submission is successful, or there's an error (or errors) that need to be handled.  We'll look at these in the next few pages."}),n.jsx(On,{uri:"form-submission"})]}),nP=Object.freeze(Object.defineProperty({__proto__:null,default:tP},Symbol.toStringTag,{value:"Module"})),rP=e=>new Promise((t,r)=>e.password===e.passcheck?t(e):r({error:"Your passwords don't match!",errors:[{name:"password",message:"Please re-enter your password"},{name:"passcheck",message:"Please re-confirm your password"}]})),oP=e=>Ut().trim().email().required("You must enter your email address!").validate(e),lf=e=>Ut().trim().required("You must enter a password!").min(6,"Your password should be at least 6 characters").validate(e),sP={email:{label:"Email Address",validate:oP},password:{label:"Password",type:"password",validate:lf},passcheck:{label:"Confirm Password",type:"password",validate:lf}},iP=()=>n.jsxs(S,{fields:sP,validate:rP,children:[n.jsx(nt,{names:"email password passcheck"}),n.jsx(Ve,{title:"Registration Error",fieldErrors:!1}),n.jsx(W,{text:"Register"})]}),lP=`import { Form, Fields, Errors, Submit } from '@/lib/index.js'

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

export default LoginWithValidation`,aP={title:"Form Validation"},dP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Form Validation"}),n.jsx("p",{className:"intro wide",children:"Sometimes you need access to all the submitted field values to validate the form.  The classic example is a registration form where you ask the user to enter their password twice to make sure that they're sure about what they've entered.  Although this isn't necessarily considered good practice these days, it illustrates the principle well."}),n.jsx("h2",{children:"Registration Form With Validation"}),n.jsxs($,{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["You can add a ",n.jsx(S7,{})," property to a form to provide a function to validate the inputs from all fields.  The function will be called after the field-level validation, and only if all fields have validated successfully."]}),n.jsxs("p",{children:["The function will be passed a ",n.jsx("code",{children:"values"})," object containing the validated field values.  It should return a Promise that resolves with the (possibly modified) values if the input is valid, or rejects with an an ",n.jsx("code",{children:"error"})," and/or array of ",n.jsx("code",{children:"errors"})," if not."]}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"error"})," can be used to define an error for the form that isn't specific to any particular field.  In this case it's being used to raise an error indicating that the two passwords entered don't match."]}),n.jsxs("p",{children:["Each item in the ",n.jsx("code",{children:"errors"})," array should relate to a field identified by ",n.jsx("code",{children:"name"}),", with an additional ",n.jsx("code",{children:"message"})," ","indicating why it is invalid.  In this case we're also raising errors for both password fields."]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["The ",n.jsx(Mo,{})," component can used to insert a prominent alert anywhere in the form, warning the user about what's gone wrong.  By default it will display any generic ",n.jsx("code",{children:"error"})," ","and also a list of any field-specific ",n.jsx("code",{children:"errors"}),".  But here we're relying on the fact that the field errors will be displayed underneath each field input, so we're setting the "," ",n.jsx("code",{children:"fieldErrors"})," flag to ",n.jsx("code",{children:"false"})," to suppress the"," ",n.jsx("code",{children:"errors"})," list."]}),n.jsxs("p",{children:["We're also using this opportunity to introduce you to the"," ",n.jsx(Bl,{})," component which allows you to add multiple fields to a ",n.jsx(ue,{})," in one fell swoop."]}),n.jsxs(lt,{children:["Try entering some values in the form below and click on the"," ",n.jsx("b",{children:"Register"})," button. You should see the field level validation errors if you don't provide a valid value for any field. Or if you provide different values for the Password and Confirm Password fields then you should see the form validation errors."]})]})]}),n.jsx(y,{Component:iP,code:lP,caption:"Form Validation"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"Now that we've handled the validation of the form we can talk about how the form is submitted."}),n.jsx(On,{uri:"form-validation"})]}),cP=Object.freeze(Object.defineProperty({__proto__:null,default:dP,metadata:aP},Symbol.toStringTag,{value:"Module"})),uP={email:{label:"Email Address",required:!0}},mP=()=>n.jsxs(S,{fields:uP,children:[n.jsx(x,{name:"email",children:e=>n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:e.id,children:e.label}),n.jsx("div",{className:"inputs",children:n.jsx("input",{className:"input",ref:e.inputRef,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onChange:t=>e.onChange(t.target.value)})})]})}),n.jsx(W,{text:"Login"})]}),pP=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default HeadlessFields`,fP={email:{label:"Email Address"}},hP=()=>n.jsx(S,{fields:fP,children:n.jsx(x,{name:"email",children:e=>n.jsxs("div",{className:"border pad",children:["This is where you render the ",e.name,' field with an "',e.label,'" label']})})}),xP=`import { Form, Field } from '@/lib/index.js'

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

export default HeadlessBlank`,gP={email:{label:"Email Address",required:!0}},bP=()=>n.jsxs(S,{fields:gP,children:[n.jsx(x,{name:"email",children:e=>n.jsxs(cr,{children:[n.jsxs("h2",{className:"mar-t-none",children:["Custom Layout for ",e.name]}),n.jsx(Yr,{}),n.jsx(ei,{}),n.jsx(gi,{})]})}),n.jsx(W,{text:"Login"})]}),vP=`import {
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

export default HeadlessBuiltins`,jP={email:{label:"Email Address",required:!0}},yP=()=>n.jsxs(S,{fields:jP,children:[n.jsx(x,{name:"email",children:n.jsxs(cr,{children:[n.jsx("h2",{className:"mar-t-none",children:"Custom Layout for Email field"}),n.jsx(Yr,{}),n.jsx(ei,{}),n.jsx(gi,{})]})}),n.jsx(W,{text:"Login"})]}),SP=`import {
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

export default HeadlessBuiltins`,FP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Headless Fields"}),n.jsx("p",{className:"intro wide",children:'One of the problems with any UI library is that it forces you into using the styles provided, or requires you to customise the CSS to match your in-house brand.  This is the problem that "Headless" UI components are designed to solve.'}),n.jsx("h2",{children:"Field Render Function"}),n.jsx("p",{children:"Instead of using the default rendering components for a field you can provide a function as a child element.  The function will be passed the field context and can render the field any way it likes."}),n.jsx(y,{Component:hP,code:xP,caption:"Headless Fields"}),n.jsx("h2",{children:"Typical Render Function"}),n.jsx("p",{children:"Here's a more complete example showing how a field would typically be rendered using the builtin components."}),n.jsx(y,{Component:mP,code:pP,caption:"Headless Fields"}),n.jsx("h2",{children:"Builtin Components"}),n.jsxs("p",{children:["You can mix and match your own layout with the builtin components. This example shows how you can use the ",n.jsx(Wo,{}),", ",n.jsx(N7,{}),","," ",n.jsx(ic,{})," and ",n.jsx(ox,{})," components to build up the field content."]}),n.jsx(y,{Component:bP,code:vP,caption:"Builtin Components"}),n.jsx("h2",{children:"Child Components"}),n.jsxs("p",{children:["If you're using the default layout components and/or providing your own that can access the field context using ",n.jsx("code",{children:"useField"})," ","then you don't need to define a function for the ",n.jsx(X,{})," body. You can just include them as children of the field component."]}),n.jsx(y,{Component:yP,code:SP,caption:"Builtin Components"}),n.jsx(On,{uri:"headless-fields"})]}),wP=Object.freeze(Object.defineProperty({__proto__:null,default:FP},Symbol.toStringTag,{value:"Module"})),CP=()=>{const e=()=>{throw"Oh noes! An error occurred"};return n.jsx(n.Fragment,{children:n.jsxs(S,{onSubmit:e,children:[n.jsx(Ve,{}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]})})},_P=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default SubmitThrow`,EP=()=>{const e=()=>{throw new Error("Oh noes! An error occurred")};return n.jsx(n.Fragment,{children:n.jsxs(S,{onSubmit:e,debug:!0,children:[n.jsx(Ve,{}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]})})},TP=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default SubmitThrow`,LP=()=>{const e=()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]});return n.jsx(n.Fragment,{children:n.jsxs(S,{onSubmit:e,children:[n.jsx(Ve,{}),n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]})})},kP=`import { Form, Field, Submit, Errors } from '@/lib/index.js'

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

export default SubmitReject`,RP=()=>{const[e,t]=T.useState(),r=()=>Promise.reject({errors:[{name:"email",message:"Your email address is not valid"},{name:"password",message:"Your password is too easy to guess"}]});return n.jsxs(n.Fragment,{children:[n.jsxs(S,{onSubmit:r,onError:t,children:[n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert mar-t-4 mar-b-none",children:[n.jsx("h4",{children:"Submission Error"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]}):null]})},NP=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default SubmitThrow`,OP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submission Errors"}),n.jsxs("p",{className:"intro wide",children:["For a good user experience we should use client-side validation to try and catch all data entry errors ",n.jsx("i",{children:"before"})," they get submitted. However, it's not always possible to do that.  It may be the case that validating a field requires access to the database and is best handled on the server.  Or perhaps a field should be validated server-side for security reasons (e.g. validating a Captcha).  Or an API request could fail or otherwise be rejected for any number of other reasons.  So we must know how to handle these cases."]}),n.jsx("h2",{children:"Simple Error"}),n.jsxs($,{align:"end",children:[n.jsxs("p",{children:["If a submission throws an error or returns an error via a rejected Promise then the form submission handler will set the internal"," ",n.jsx("code",{children:"error"})," state variable. See the ",n.jsx(Mo,{})," component for more information about changing how and if errors are displayed."]}),n.jsx(lt,{children:"Try submitting this form to see what happens when an error is thrown. You should see the error displayed in the form header and also in a debugging window beneath the form."})]}),n.jsx(y,{Component:CP,code:_P,caption:"Error Thrown"}),n.jsxs("p",{children:["As well as calling the ",n.jsx("code",{children:"throw()"})," function with a string, you can ",n.jsx("code",{children:"throw"})," an ",n.jsx("code",{children:"Error"})," object."]}),n.jsx(y,{Component:EP,code:TP,caption:"Error Thrown"}),n.jsx("h2",{children:"Rejected Promise"}),n.jsxs($,{align:"start",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["In most cases a failed submission should return a rejected Promise. The data returned should be an objecting containing either a single"," ",n.jsx("code",{children:"error"})," string (or object containing a ",n.jsx("code",{children:"message"}),"), or an array of ",n.jsx("code",{children:"errors"}),".  Each element in the array can be an error string, but the more usual (and useful) case is for each element to be an object containing the error ",n.jsx("code",{children:"message"}),"."]}),n.jsxs("p",{children:["The benefit of this approach is that error objects can also contain the ",n.jsx("code",{children:"name"})," of the field that it relates to.  The corresponding field will be marked as invalid and have the error message set so that it can be displayed under the input.  Furthermore, the field label is copied into the error element so that it can be displayed in the error panel at the start of the form."]})]}),n.jsxs("div",{children:[n.jsx("p",{children:"This would be the typical way to handle a request that failed due to server-side validation errors."}),n.jsx(lt,{title:"Try it out",children:"Try submitting the form to see the errors generated."})]})]}),n.jsx(y,{Component:LP,code:kP,caption:"Error Thrown"}),n.jsx("h2",{children:n.jsx(Ao,{})}),n.jsxs($,{children:[n.jsxs("p",{children:["You can provide an ",n.jsx(Ao,{})," handler which will be called when an error response is received.  In this example we simply call a ",n.jsx("code",{children:"setError()"})," function to store the error in a React state variable and then display it beneath the form."]}),n.jsxs(lt,{children:["Try submitting the form to see the errors generated.  The "," ",n.jsx(Ao,{})," handler will store them in the state variable and display them beneath the form."]})]}),n.jsx(y,{Component:RP,code:NP,caption:"onError"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"We've now enough in place to look at a more complete example."}),n.jsx(On,{uri:"submission-errors"})]}),PP=Object.freeze(Object.defineProperty({__proto__:null,default:OP},Symbol.toStringTag,{value:"Module"})),AP=()=>{const[e,t]=T.useState(),r=s=>t(s.data),o=s=>Promise.resolve({status:200,data:{message:"Welcome back!",user:{id:12345,email:s.email,name:"Bobby Badger"}}});return n.jsxs(n.Fragment,{children:[n.jsxs(S,{onSubmit:o,onSuccess:r,children:[n.jsx(x,{name:"email",label:"Email Address",required:!0}),n.jsx(x,{name:"password",type:"password",label:"Password",required:!0}),n.jsx(W,{text:"Login"})]}),e?n.jsxs("div",{className:"info alert mar-t-4",children:[n.jsx("h4",{children:"Emulated Response"}),n.jsx("pre",{children:JSON.stringify(e,null,2)})]}):null]})},MP=`import { Form, Field, Submit } from '@/lib/index.js'

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

export default SubmitResponse`,IP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Submission Response"}),n.jsx("p",{className:"intro wide",children:"We now need to think about what happens in the real world where a form submission results in a call to a back-end API.  There are, broadly speaking, two possible outcomes: the call is successful, or it fails for some reason."}),n.jsx("h2",{children:n.jsx(si,{})}),n.jsxs($,{align:"end",children:[n.jsxs("div",{children:[n.jsxs("p",{children:["Let's start by looking at the case there the submission is successful.  In this example we define an ",n.jsx(un,{})," function which returns a resolved promise.  This is emulating how both"," ",n.jsx("a",{href:"https://axios-http.com/",children:"Axios"})," and the native"," ",n.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"Fetch API"})," ","work."]}),n.jsxs("p",{children:["The additional step is to define an ",n.jsx(si,{})," handler which can do something to handle the successful response.  In this case we're calling the ",n.jsx("code",{children:"setResponse"})," function to store the response data, much like in the previous example, except that this time we're emulating the full request and response cycle."]})]}),n.jsx(lt,{children:'Try entering some values in the form below and click on the "Login" button.  You should see the values returned by an emulated server response appear in a debugging window beneath the form.  Also note that the form is reset on a successful submission.'})]}),n.jsx(y,{Component:AP,code:MP,caption:"Submission Response"}),n.jsx("h2",{children:"Where Next?"}),n.jsx("p",{children:"What happens if the submission isn't successful?  We'll look at handling submission errors on the next page."}),n.jsx(On,{uri:"submission-response"})]}),DP=Object.freeze(Object.defineProperty({__proto__:null,default:IP},Symbol.toStringTag,{value:"Module"})),$P=()=>n.jsx(Ke,{menu:K2}),zP=()=>n.jsxs("div",{className:"prose flow",children:[n.jsx("h1",{children:"Utilities"}),n.jsx(_e,{}),n.jsx($P,{})]}),BP=Object.freeze(Object.defineProperty({__proto__:null,default:zP},Symbol.toStringTag,{value:"Module"})),Rx=()=>{const{value:e,onChange:t}=rt(),r=["red","green","blue"];return n.jsxs("div",{children:[n.jsx("div",{className:"flex gap-2",children:r.map(o=>n.jsx("button",{type:"button",className:`solid ${o}`,onClick:()=>t(o),children:o},o))}),e?n.jsxs("p",{children:["You have selected ",e]}):n.jsx("p",{children:"Select a color"})]})},VP=()=>n.jsx(S,{children:n.jsx(x,{name:"color",Input:Rx})}),UP=`import { Form, Field } from '@/lib/index.js'

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

export default UseInput`;k4("colorButton",Rx);const qP=()=>n.jsx(S,{children:n.jsx(x,{name:"color",type:"colorButton"})}),HP=`import { Form, Field, addInputType } from '@/lib/index.js'

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

export default AddInput`,YP=`import { useField } from '@/lib/index.js'

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

export default ColorButtonInput`,WP=()=>n.jsxs(n.Fragment,{children:[n.jsx("h2",{className:"font-mono",children:"addInputType()"}),n.jsxs("p",{className:"wide",children:["The ",n.jsx("code",{children:"addInputType()"})," function can be used to add your own custom ",n.jsx(sc,{})," components."]}),n.jsxs("p",{className:"wide",children:["Here's a trivial example where we implement a"," ",n.jsx("code",{children:"ColorButtonInput"})," input, allowing a user to click on a button to select a color."]}),n.jsx(Ze,{code:YP,caption:"ColorButtonInput.jsx"}),n.jsxs("h2",{children:["Using ",n.jsx("span",{className:"font-mono",children:"Input"})]}),n.jsxs("p",{className:"wide",children:["You can use the ",n.jsx(sc,{})," property on a field to directly reference the custom input component."]}),n.jsx(y,{Component:VP,code:UP,caption:"Input"}),n.jsxs("h2",{children:["Using ",n.jsx("span",{className:"font-mono",children:"addInput()"})]}),n.jsxs("p",{className:"wide",children:["The other approach is to use ",n.jsx("code",{children:"addInputType()"})," to register your component.  You can then use the ",n.jsx(Tn,{})," property to access it using the name you give it.  In this example we give it the name ",n.jsx("code",{children:"colorButton"}),"."]}),n.jsx(y,{Component:qP,code:HP,caption:"addInput()"})]}),ZP=Object.freeze(Object.defineProperty({__proto__:null,default:WP},Symbol.toStringTag,{value:"Module"})),GP=({render:e})=>{const[t,r]=T.useState({}),o=T.useRef();return e({tocs:t,addToc:(l,a,d,c)=>{const u=t[l]||(t[l]={});u[a]={text:d,ref:c},r({...t})},addTocHeading:(l,a,d,c)=>{const u=t[l]||(t[l]={});u[a]={heading:d,ref:c},r({...t})},contentRef:o})},$u=su(GP),Nx=({path:e,onClick:t,width:r=512,height:o=512,style:s,className:i="night-and-day--icon",fill:l="currentColor"})=>n.jsx("svg",{"aria-hidden":"true",focusable:"false",className:i,style:s,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${r} ${o}`,onClick:t,children:n.jsx("path",{d:e,fill:l})}),KP=e=>n.jsx(Nx,{path:"M289,23C160,23 56,127 56,256C56,385 160,489 289,489C352,489 409,464 451,423C456,418 457,411 454,404C451,397 444,394 436,395C426,397 416,397 405,397C304,397 222,316 222,214C222,146 260,86 315,55C322,51 325,44 323,37C322,30 316,25 309,24C302,23 295,23 289,23L289,23Z",...e}),Ox=({Icon:e,caption:t,onClick:r,iconClass:o,iconStyle:s,captionStyle:i,className:l="night-and-day--switcher",captionClass:a="night-and-day--caption",style:d={display:"inline-block"}})=>n.jsxs("div",{className:l,onClick:r,style:d,children:[n.jsx(e,{style:s,className:o}),!!t&&n.jsx("div",{className:a,style:i,children:t})]}),QP=e=>{const{setDark:t}=Ei();return n.jsx(Ox,{Icon:KP,onClick:t,...e})},XP=e=>n.jsx(Nx,{path:"M362,1.2C367,3 370,8 371,13L391,121L499,141C504,142 509,145 511,150C512,155 512,161 509,166L447,256L509,346C512,351 512,357 511,362C509,367 504,370 499,371L391,391L371,499C370,504 367,509 362,511C357,512 351,512 346,509L256,447L166,509C161,512 156,512 151,511C146,509 142,504 141,499L121,391L13,371C8,370 3,367 1,362C0,356 0,351 3,346L65,256L3,166C0,161 0,156 1,151C3,146 8,142 13,141L121,121L141,13C142,8 146,3 151,1C156,0 161,0 166,3L256,65L346,3C351,0 357,0 362,1ZM160,256C160,203 203,160 256,160C309,160 352,203 352,256C352,309 309,352 256,352C203,352 160,309 160,256ZM384,256C384,186 326,128 256,128C186,128 128,186 128,256C128,326 186,384 256,384C326,384 384,326 384,256Z",...e}),JP=e=>{const{setLight:t}=Ei();return n.jsx(Ox,{Icon:XP,onClick:t,...e})},eA=({sunrise:e={},nightfall:t={}})=>{const{isLight:r,setLight:o,setDark:s}=Ei();return r?n.jsx(JP,{onClick:s,...e}):n.jsx(QP,{onClick:o,...t})},Px=T.createContext(),Ei=()=>T.useContext(Px),Ji="dark",Qa="light",Ax="(prefers-color-scheme: dark)",tA=()=>{var e;return(e=window==null?void 0:window.matchMedia)==null?void 0:e.call(window,Ax).matches},so=window==null?void 0:window.localStorage,nA=e=>e.split(" "),af=(e,t="")=>`${e} ${t}`,rA=({storageKey:e,defaultVariant:t,children:r})=>{const o=e?so==null?void 0:so.getItem(e):null,[s,i=""]=o?nA(o):[tA(),null],[l,a]=T.useState(s===Ji),[d,c]=T.useState(i||t),u=_=>{a(_),e&&so&&so.setItem(e,af(_?Ji:Qa,d))},f=_=>{c(_),e&&so&&so.setItem(e,af(l?Ji:Qa,_))},g=_=>u(_.matches);T.useEffect(()=>{if(window&&window.matchMedia){const _=window.matchMedia(Ax);return _.addEventListener("change",g),()=>_==null?void 0:_.removeEventListener("change",g)}},[]);const C={isDark:l,isLight:!l,setDark:()=>u(!0),setLight:()=>u(!1),setIsDark:a,toggleTheme:()=>u(!l),theme:l?Ji:Qa,variant:d,setVariant:f};return n.jsx(Px.Provider,{value:C,children:r})},oA=e=>T.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C27.42 29.06 32 23.06 32 16C32 7.16 24.84 0 16 0V0Z",fill:"currentColor"})),df="sidebar",sA="no-sidebar",Mx="1.0.0",Ix="2024-04-04",cf="2018",Xa=Ix.match(/^(\d+)/)[1],iA=Xa===cf?Xa:`${cf} - ${Xa}`,lA=()=>{const{variant:e,setVariant:t}=Ei();return n.jsx("header",{children:n.jsxs("nav",{children:[n.jsxs("div",{children:[n.jsx(g2,{name:"bars",className:"toggle-sidebar action",onClick:()=>t(e===df?sA:df)}),n.jsx(Fi,{to:"/",className:"home mar-l-2",text:"Badger Form"}),n.jsxs("span",{className:"small mar-l-2",children:["v",Mx]})]}),n.jsxs("div",{children:[n.jsx("a",{href:"https://github.com/abw/badger-form",children:n.jsx(oA,{className:"night-and-day--icon mar-r-2"})}),n.jsx(eA,{})]})]})})},aA=({item:e,url:t})=>{if(Hr(e))return e.section?n.jsxs("li",{className:"section",children:[n.jsx("h4",{children:e.section}),n.jsx(Dx,{url:t,items:e.items})]}):(e.text||(e.text=e.code),n.jsx("li",{children:n.jsx(Fi,{className:`item ${e.code?"font-mono":""}`,...e})}));iu(`Invalid menu item: ${e}`)},Dx=({url:e,items:t=[]})=>n.jsx("ul",{className:"menu",children:t.map((r,o)=>n.jsx(aA,{item:r,url:e,open:!0},o))}),dA=({title:e,code:t,url:r,items:o})=>{const s=Si(),i=s.pathname===r||s.pathname.slice(0,r.length+1)===`${r}/`;return n.jsxs("details",{className:"menu",open:i,children:[n.jsx("summary",{className:t?"font-mono":"",children:t||e}),n.jsx(Dx,{url:r,items:o})]})},Ye=$u.Consumer(dA),cA=()=>n.jsxs("div",{children:[n.jsx(Ye,{...j7}),n.jsx(Ye,{...Nu}),n.jsx("h4",{className:"mar-b-none",children:"Components"}),n.jsx(Ye,{...A2}),n.jsx(Ye,{...M2}),n.jsx(Ye,{...I2}),n.jsx(Ye,{...D2}),n.jsx(Ye,{...$2}),n.jsx(Ye,{...z2}),n.jsx(Ye,{...B2}),n.jsx(Ye,{...V2}),n.jsx(Ye,{...U2}),n.jsx(Ye,{...q2}),n.jsx("h4",{className:"mar-b-none",children:"Input Types"}),n.jsx(Ye,{...H2}),n.jsx(Ye,{...Y2}),n.jsx(Ye,{...W2}),n.jsx(Ye,{...Z2}),n.jsx(Ye,{...G2}),n.jsx("h4",{className:"mar-b-none",children:"Miscellaneous"}),n.jsx(Ye,{...K2})]}),uA=()=>n.jsx("footer",{children:n.jsxs("div",{className:"flex space",children:[n.jsxs("div",{children:["© Copyright ",iA," Andy Wardley"]}),n.jsxs("div",{children:["Version ",Mx," ",Ix]})]})});function mA(){const{pathname:e}=Gr();return T.useEffect(()=>pA(document.getElementById("content")),[e]),null}function pA(e){e==null||e.scrollTo({top:0,left:0,behavior:"smooth"})}const fA=({contentRef:e})=>{const{theme:t,variant:r}=Ei(),o=[t,r].join(" ");return n.jsxs("div",{id:"site",className:o,children:[n.jsx(lA,{}),n.jsxs("div",{id:"app",children:[n.jsx(mA,{}),n.jsx("aside",{children:n.jsx(cA,{})}),n.jsx("main",{id:"content",ref:e,children:n.jsx("div",{className:"Xdesktop Xblock-center",children:n.jsx(_e,{})})})]}),n.jsx(uA,{})]})},hA=$u.Consumer(fA),xA=/\/_layout$/,gA=/\/_(examples|snippets)\//,bA=vA(Object.assign({"../pages/changed/index.jsx":z8,"../pages/checkbox/index.jsx":Q7,"../pages/checkbox/properties/_layout.jsx":J7,"../pages/checkbox/properties/border/index.jsx":ry,"../pages/checkbox/properties/inline/index.jsx":ly,"../pages/checkbox/properties/inputClass/index.jsx":uy,"../pages/checkbox/properties/text/index.jsx":hy,"../pages/debug/index.jsx":vy,"../pages/debug/properties/_layout.jsx":yy,"../pages/debug/properties/className/index.jsx":Cy,"../pages/debug/properties/color/index.jsx":Ly,"../pages/debug/properties/status/index.jsx":Py,"../pages/debug/properties/statusTitle/index.jsx":Dy,"../pages/debug/properties/title/index.jsx":Vy,"../pages/debug/properties/values/index.jsx":Yy,"../pages/debug/properties/valuesTitle/index.jsx":Ky,"../pages/errors/index.jsx":e9,"../pages/errors/properties/_layout.jsx":n9,"../pages/errors/properties/fieldErrors/index.jsx":i9,"../pages/errors/properties/prompt/index.jsx":f9,"../pages/errors/properties/title/index.jsx":F9,"../pages/field/components/Input/index.jsx":$9,"../pages/field/components/Label/index.jsx":U9,"../pages/field/components/Layout/index.jsx":cS,"../pages/field/components/Message/index.jsx":gS,"../pages/field/components/UseField/index.jsx":FS,"../pages/field/components/_layout.jsx":CS,"../pages/field/events/_layout.jsx":ES,"../pages/field/events/onBlur/index.jsx":RS,"../pages/field/events/onChange/index.jsx":AS,"../pages/field/events/onFocus/index.jsx":$S,"../pages/field/events/onInvalid/index.jsx":US,"../pages/field/events/onLoad/index.jsx":WS,"../pages/field/events/onValid/index.jsx":QS,"../pages/field/functions/Reset/index.jsx":tF,"../pages/field/functions/SetFocus/index.jsx":sF,"../pages/field/functions/SetInvalid/index.jsx":dF,"../pages/field/functions/SetValid/index.jsx":pF,"../pages/field/functions/SetValue/index.jsx":vF,"../pages/field/functions/_layout.jsx":yF,"../pages/field/index.jsx":CF,"../pages/field/properties/_layout.jsx":EF,"../pages/field/properties/children/index.jsx":RF,"../pages/field/properties/className/index.jsx":AF,"../pages/field/properties/default/index.jsx":$F,"../pages/field/properties/help/index.jsx":UF,"../pages/field/properties/label/index.jsx":KF,"../pages/field/properties/name/index.jsx":rw,"../pages/field/properties/placeholder/index.jsx":lw,"../pages/field/properties/prefix/index.jsx":uw,"../pages/field/properties/suffix/index.jsx":vw,"../pages/field/properties/type/index.jsx":_w,"../pages/field/validation/_layout.jsx":Tw,"../pages/field/validation/minValidateLength/index.jsx":Pw,"../pages/field/validation/optionalLabel/index.jsx":Dw,"../pages/field/validation/prepareValue/index.jsx":Uw,"../pages/field/validation/required/index.jsx":Ww,"../pages/field/validation/requiredLabel/index.jsx":Qw,"../pages/field/validation/requiredMessage/index.jsx":tC,"../pages/field/validation/showOptional/index.jsx":sC,"../pages/field/validation/showRequired/index.jsx":uC,"../pages/field/validation/validate/index.jsx":XC,"../pages/field/validation/validateOnBlur/index.jsx":r_,"../pages/field/validation/validateOnChange/index.jsx":a_,"../pages/field/validation/validateOnInvalid/index.jsx":c_,"../pages/fields/index.jsx":h_,"../pages/fields/properties/_layout.jsx":g_,"../pages/fields/properties/className/index.jsx":S_,"../pages/fields/properties/gap/index.jsx":E_,"../pages/fields/properties/grid/index.jsx":A_,"../pages/fields/properties/names/index.jsx":V_,"../pages/fields/properties/stack/index.jsx":W_,"../pages/fieldset/index.jsx":Q_,"../pages/fieldset/properties/_layout.jsx":J_,"../pages/fieldset/properties/className/index.jsx":sE,"../pages/fieldset/properties/fields/index.jsx":pE,"../pages/fieldset/properties/legend/index.jsx":gE,"../pages/form/events/_layout.jsx":vE,"../pages/form/events/onError/index.jsx":FE,"../pages/form/events/onLoad/index.jsx":EE,"../pages/form/events/onReset/index.jsx":RE,"../pages/form/events/onSubmit/index.jsx":WE,"../pages/form/events/onSuccess/index.jsx":QE,"../pages/form/functions/_layout.jsx":JE,"../pages/form/functions/reset/index.jsx":iT,"../pages/form/functions/setFocus/index.jsx":pT,"../pages/form/functions/setValues/index.jsx":yT,"../pages/form/functions/unvalidate/index.jsx":CT,"../pages/form/index.jsx":LT,"../pages/form/properties/_layout.jsx":RT,"../pages/form/properties/children/index.jsx":AT,"../pages/form/properties/debug/index.jsx":$T,"../pages/form/properties/fields/index.jsx":HT,"../pages/form/properties/hidden/index.jsx":GT,"../pages/form/properties/resetOnSuccess/index.jsx":JT,"../pages/form/properties/unvalidateOnSuccess/index.jsx":rL,"../pages/form/properties/values/index.jsx":lL,"../pages/form/validation/_layout.jsx":dL,"../pages/form/validation/focusInvalidField/index.jsx":uL,"../pages/form/validation/minValidateLength/index.jsx":pL,"../pages/form/validation/optionalLabel/index.jsx":hL,"../pages/form/validation/requiredLabel/index.jsx":gL,"../pages/form/validation/requiredMessage/index.jsx":vL,"../pages/form/validation/showOptional/index.jsx":yL,"../pages/form/validation/showRequired/index.jsx":FL,"../pages/form/validation/validate/index.jsx":RL,"../pages/form/validation/validateOnBlur/index.jsx":OL,"../pages/form/validation/validateOnChange/index.jsx":AL,"../pages/form/validation/validateOnInvalid/index.jsx":IL,"../pages/getting-started/installation.jsx":UL,"../pages/getting-started/why-use-it.jsx":HL,"../pages/index.jsx":GL,"../pages/radio/index.jsx":JL,"../pages/radio/properties/_layout.jsx":tk,"../pages/radio/properties/border/index.jsx":sk,"../pages/radio/properties/inline/index.jsx":dk,"../pages/radio/properties/inputClass/index.jsx":pk,"../pages/radio/properties/optionClass/index.jsx":gk,"../pages/radio/properties/options/index.jsx":Fk,"../pages/radio/properties/optionsClass/index.jsx":Ek,"../pages/reset-submit/index.jsx":Rk,"../pages/reset-submit/properties/_layout.jsx":Ok,"../pages/reset-submit/properties/className/index.jsx":Ik,"../pages/reset-submit/properties/gap/index.jsx":Bk,"../pages/reset-submit/properties/reset/index.jsx":Hk,"../pages/reset-submit/properties/space/index.jsx":Gk,"../pages/reset-submit/properties/submit/index.jsx":Jk,"../pages/reset/index.jsx":rR,"../pages/reset/properties/_layout.jsx":sR,"../pages/reset/properties/className/index.jsx":dR,"../pages/reset/properties/onClick/index.jsx":pR,"../pages/reset/properties/text/index.jsx":gR,"../pages/select/index.jsx":yR,"../pages/select/properties/_layout.jsx":FR,"../pages/select/properties/inline/index.jsx":ER,"../pages/select/properties/options/index.jsx":OR,"../pages/select/properties/placeholder/index.jsx":IR,"../pages/status/index.jsx":BR,"../pages/status/properties/_layout.jsx":UR,"../pages/status/properties/any/index.jsx":WR,"../pages/status/properties/changed/index.jsx":QR,"../pages/status/properties/invalid/index.jsx":tN,"../pages/status/properties/submitted/index.jsx":sN,"../pages/status/properties/submitting/index.jsx":dN,"../pages/status/properties/valid/index.jsx":pN,"../pages/status/properties/validating/index.jsx":gN,"../pages/submit/index.jsx":yN,"../pages/submit/properties/_layout.jsx":FN,"../pages/submit/properties/className/index.jsx":EN,"../pages/submit/properties/onClick/index.jsx":RN,"../pages/submit/properties/text/index.jsx":AN,"../pages/text/index.jsx":$N,"../pages/text/properties/_layout.jsx":BN,"../pages/text/properties/inline/index.jsx":HN,"../pages/text/properties/placeholder/index.jsx":GN,"../pages/text/properties/size/index.jsx":JN,"../pages/text/properties/type/index.jsx":rO,"../pages/textarea/index.jsx":lO,"../pages/textarea/properties/_layout.jsx":dO,"../pages/textarea/properties/cols/index.jsx":pO,"../pages/textarea/properties/inline/index.jsx":gO,"../pages/textarea/properties/placeholder/index.jsx":yO,"../pages/textarea/properties/rows/index.jsx":CO,"../pages/tutorial/basic-form.jsx":LO,"../pages/tutorial/complete-registration.jsx":MO,"../pages/tutorial/debugging.jsx":BO,"../pages/tutorial/edit-form.jsx":WO,"../pages/tutorial/field-validation.jsx":XO,"../pages/tutorial/form-submission.jsx":nP,"../pages/tutorial/form-validation.jsx":cP,"../pages/tutorial/headless-fields.jsx":wP,"../pages/tutorial/submission-errors.jsx":PP,"../pages/tutorial/submission-response.jsx":DP,"../pages/utils/_layout.jsx":BP,"../pages/utils/addInputType/index.jsx":ZP}));function vA(e){const r=Object.entries(e).map(jA).filter(s=>!s.path.match(gA)).reduce((s,i)=>(s[i.path]=i,s),{}),o=Object.keys(r).filter(s=>s.match(xA)).sort((s,i)=>i.length-s.length);for(let s of o){const i=r[s];delete r[s];const l=s.replace(/_layout$/,""),a=l.length;i.path=l,i.children=[];const d=r[l];d&&(delete d.path,d.index=!0,i.children.push(d),delete r[l]);const c=Object.keys(r).filter(u=>u.slice(0,a)===l);for(let u of c){const f=r[u];delete r[u],u=u.slice(a),f.path=u.length?u:"/",i.children.push(f)}r[l]=i}return Object.values(r)}function jA([e,t]){const r=e.replace(/^[./]*pages/,"").replace(/\.[jt]sx?$/,""),o=r.replace(/index$/,"").replace(/\[(\w+)\]/,":$1"),s=t.default,i=t.metadata||{};return i.source=e,i.stub=r,{path:o,Component:s,metadata:i}}const yA=r7([{path:"/",element:n.jsx(hA,{}),children:bA}],{basename:"/badger-form/"});Ja.createRoot(document.getElementById("root")).render(n.jsx(gt.StrictMode,{children:n.jsx(rA,{storageKey:"theme",children:n.jsx($u.Provider,{children:n.jsx(u7,{router:yA})})})}));
