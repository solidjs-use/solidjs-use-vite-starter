(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const b={};function ie(e){b.context=e}const oe=(e,t)=>e===t,L={equals:oe};let K=z;const x=1,M=2,Q={owned:null,cleanups:null,context:null,owner:null};var d=null;let A=null,a=null,p=null,w=null,F=0;function le(e,t){const n=a,s=d,i=e.length===0,o=i?Q:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>I(()=>U(o)));d=o,a=null;try{return T(r,!0)}finally{a=n,d=s}}function _(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Z(n,i));return[J.bind(n),s]}function W(e,t,n){const s=q(e,t,!1,x);$(s)}function re(e,t,n){K=pe;const s=q(e,t,!1,x);s.user=!0,w?w.push(s):$(s)}function ue(e,t,n){n=n?Object.assign({},L,n):L;const s=q(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,$(s),J.bind(s)}function I(e){const t=a;a=null;try{return e()}finally{a=t}}function fe(e,t,n){const s=Array.isArray(e);let i,o=n&&n.defer;return r=>{let l;if(s){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o){o=!1;return}const f=I(()=>t(l,i,r));return i=l,f}}function ce(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ae(){return d}function J(){const e=A;if(this.sources&&(this.state||e))if(this.state===x||e)$(this);else{const t=p;p=null,T(()=>P(this),!1),p=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function Z(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=A&&A.running;r&&A.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?p.push(o):w.push(o),o.observers&&ee(o)),r||(o.state=x)}if(p.length>1e6)throw p=[],new Error},!1)),t}function $(e){if(!e.fn)return;U(e);const t=d,n=a,s=F;a=d=e,he(e,e.value,s),a=n,d=t}function he(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=x,e.owned&&e.owned.forEach(U),e.owned=null),te(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Z(e,s):e.value=s,e.updatedAt=n)}function q(e,t,n,s=x,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==Q&&(d.owned?d.owned.push(o):d.owned=[o]),o}function B(e){const t=A;if(e.state===0||t)return;if(e.state===M||t)return P(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===x||t)$(e);else if(e.state===M||t){const i=p;p=null,T(()=>P(e,n[0]),!1),p=i}}function T(e,t){if(p)return e();let n=!1;t||(p=[]),w?n=!0:w=[],F++;try{const s=e();return de(n),s}catch(s){p||(w=null),p=null,te(s)}}function de(e){if(p&&(z(p),p=null),e)return;const t=w;w=null,t.length&&T(()=>K(t),!1)}function z(e){for(let t=0;t<e.length;t++)B(e[t])}function pe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:B(s)}for(b.context&&ie(),t=0;t<n;t++)B(e[t])}function P(e,t){const n=A;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||n?i!==t&&B(i):(i.state===M||n)&&P(i,t))}}function ee(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=M,s.pure?p.push(s):w.push(s),s.observers&&ee(s))}}function U(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)U(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ge(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function te(e){throw e=ge(e),e}function ye(e,t){return I(()=>e(t||{}))}function be(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,f=t[i-1].nextSibling,c=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const u=o<s?l?n[l-1].nextSibling:n[o-l]:f;for(;l<o;)e.insertBefore(n[l++],u)}else if(o===l)for(;r<i;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],u),t[i]=n[o]}else{if(!c){c=new Map;let h=l;for(;h<o;)c.set(n[h],h++)}const u=c.get(t[r]);if(u!=null)if(l<u&&u<o){let h=r,y=1,m;for(;++h<i&&h<o&&!((m=c.get(t[h]))==null||m!==u+y);)y++;if(y>u-l){const S=t[r];for(;l<u;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const V="_$DX_DELEGATE";function we(e,t,n,s={}){let i;return le(o=>{i=o,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function me(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function xe(e,t=window.document){const n=t[V]||(t[V]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,ve))}}function Ae(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function N(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return H(e,t,s,n);W(i=>H(e,t(),i,n),s)}function ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function H(e,t,n,s,i){for(b.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(b.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=v(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(b.context)return n;n=v(e,n,s)}else{if(o==="function")return W(()=>{let l=t();for(;typeof l=="function";)l=l();n=H(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],f=n&&Array.isArray(n);if(X(l,t,n,i))return W(()=>n=H(e,l,n,s,!0)),()=>n;if(b.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=v(e,n,s),r)return n}else f?n.length===0?k(e,l,s):be(e,n,l):(n&&v(e),k(e,l));n=l}else if(t instanceof Node){if(b.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=v(e,n,s,t);v(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],f=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=X(e,l,f)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=X(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||i}else e.push(l),i=!0;else{const c=String(l);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return i}function k(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function v(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const f=l.parentNode===e;!o&&!r?f?e.replaceChild(i,l):e.insertBefore(i,n):f&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const Se="/solidjs-use-vite-starter/assets/logo-123b04bc.svg";Promise.resolve();function Ee(e){return typeof e=="function"}var G;function Ce(e){return typeof e=="function"?e():e}const ne=typeof window<"u",_e=Object.prototype.toString,$e=e=>typeof e=="string",Te=e=>_e.call(e)==="[object Object]",je=()=>{};ne&&((G=window?.navigator)!=null&&G.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Oe(e){return ae()?(ce(e),!0):!1}function Ne(e,t){const n={};return Object.keys(e).forEach(s=>{n[s]=ue(()=>e[s]??t?.[s])}),n}function Le(e,t,n){const[s,i]=_(!0);return re(fe(Me(e),(r,l,f)=>{s()&&t(r,l,f)},n)),()=>{i(!1)}}function Me(e){return Array.isArray(e)?e:Te(e)?Object.values(Ne(e)):Ee(e)?e:()=>e}function Be(e=0,t={}){const[n,s]=_(e),{max:i=1/0,min:o=-1/0}=t,r=(u=1)=>s(Math.min(i,n()+u)),l=(u=1)=>s(Math.max(o,n()-u)),f=u=>s(Math.max(o,Math.min(i,u)));return{count:n,inc:r,dec:l,set:f,reset:(u=e)=>(e=u,f(u))}}const se=ne?window:void 0;function C(...e){let t,n,s,i;if($e(e[0])||Array.isArray(e[0])?([n,s,i]=e,t=se):[t,n,s,i]=e,!t)return je;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],r=()=>{o.forEach(u=>u()),o.length=0},l=(u,h,y)=>(u.addEventListener(h,y,i),()=>u.removeEventListener(h,y,i)),f=Le(()=>Ce(t),u=>{r(),u&&o.push(...n.flatMap(h=>s.map(y=>l(u,h,y))))}),c=()=>{f(),r()};return Oe(c),c}const D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y="__solidjs-use_ssr_handlers__";D[Y]=D[Y]??{};D[Y];function Pe(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:i={x:0,y:0},window:o=se,eventFilter:r}=e,[l,f]=_(i.x),[c,u]=_(i.y),[h,y]=_(null),m=g=>{t==="page"?(f(g.pageX),u(g.pageY)):t==="client"?(f(g.clientX),u(g.clientY)):t==="movement"&&(f(g.movementX),u(g.movementY)),y("mouse")},S=()=>{f(i.x),u(i.y)},E=g=>{if(g.touches.length>0){const O=g.touches[0];t==="page"?(f(O.pageX),u(O.pageY)):t==="client"&&(f(O.clientX),u(O.clientY)),y("touch")}},j=g=>r===void 0?m(g):r(()=>m(g),{}),R=g=>r===void 0?E(g):r(()=>E(g),{});return o&&(C(o,"mousemove",j,{passive:!0}),C(o,"dragover",j,{passive:!0}),n&&t!=="movement"&&(C(o,"touchstart",R,{passive:!0}),C(o,"touchmove",R,{passive:!0}),s&&C(o,"touchend",S,{passive:!0}))),{x:l,y:c,setX:f,setY:u,sourceType:h}}const He=me('<div id="app"><img alt="logo"><h1>Hello <a href="https://github.com/vuejs/vite" target="__blank">Vite</a> and <a href="https://github.com/solidjs-use/solidjs-use" target="__blank">solidjs-use</a></h1><h3>Mouse: <!> x </h3><h3>Counter: <!> <a style="margin-right: 10px">+</a><a style="margin-right: 10px">-</a></h3><br><br><p><a href="https://github.com/solidjs-use/solidjs-use-vite-starter" target="__blank">Source</a></p></div>'),Ie=()=>{const{x:e,y:t}=Pe(),{count:n,inc:s,dec:i}=Be();return(()=>{const o=He.cloneNode(!0),r=o.firstChild,l=r.nextSibling,f=l.nextSibling,c=f.firstChild,u=c.nextSibling;u.nextSibling;const h=f.nextSibling,y=h.firstChild,m=y.nextSibling,S=m.nextSibling,E=S.nextSibling,j=E.nextSibling;return Ae(r,"src",Se),N(f,e,u),N(f,t,null),N(h,n,m),E.$$click=()=>s(),j.$$click=()=>i(),o})()};xe(["click"]);we(()=>ye(Ie,{}),document.getElementById("root"));
