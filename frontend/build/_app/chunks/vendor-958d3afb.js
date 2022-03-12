function Ce(){}const Oa=t=>t;function wi(t,e){for(const n in e)t[n]=e[n];return t}function Pa(t){return t()}function mo(){return Object.create(null)}function un(t){t.forEach(Pa)}function Ma(t){return typeof t=="function"}function Ll(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Pn;function dv(t,e){return Pn||(Pn=document.createElement("a")),Pn.href=e,t===Pn.href}function xl(t){return Object.keys(t).length===0}function Ul(t,...e){if(t==null)return Ce;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fv(t,e,n){t.$$.on_destroy.push(Ul(e,n))}function pv(t,e,n,s){if(t){const i=La(t,e,n,s);return t[0](i)}}function La(t,e,n,s){return t[1]&&s?wi(n.ctx.slice(),t[1](s(e))):n.ctx}function gv(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|i[a];return r}return e.dirty|i}return e.dirty}function mv(t,e,n,s,i,r){if(i){const o=La(e,n,s,r);t.p(o,i)}}function yv(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function vv(t,e,n){return t.set(n),e}const xa=typeof window!="undefined";let Ua=xa?()=>window.performance.now():()=>Date.now(),Yi=xa?t=>requestAnimationFrame(t):Ce;const lt=new Set;function Va(t){lt.forEach(e=>{e.c(t)||(lt.delete(e),e.f())}),lt.size!==0&&Yi(Va)}function Fa(t){let e;return lt.size===0&&Yi(Va),{promise:new Promise(n=>{lt.add(e={c:t,f:n})}),abort(){lt.delete(e)}}}let _s=!1;function Vl(){_s=!0}function Fl(){_s=!1}function $l(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function Bl(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const l=e[u];l.claim_order!==void 0&&c.push(l)}e=c}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,l=(i>0&&e[n[i]].claim_order<=u?i+1:$l(1,i,d=>e[n[d]].claim_order,u))-1;s[c]=n[l]+1;const h=l+1;n[h]=c,i=Math.max(h,i)}const r=[],o=[];let a=e.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(r.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<r.length&&o[c].claim_order>=r[u].claim_order;)u++;const l=u<r.length?r[u]:null;t.insertBefore(o[c],l)}}function jl(t,e){t.appendChild(e)}function $a(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ql(t){const e=Ba("style");return Hl($a(t),e),e.sheet}function Hl(t,e){jl(t.head||t,e)}function Kl(t,e){if(_s){for(Bl(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wv(t,e,n){_s&&!n?Kl(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function zl(t){t.parentNode.removeChild(t)}function Ba(t){return document.createElement(t)}function Qi(t){return document.createTextNode(t)}function _v(){return Qi(" ")}function Ev(){return Qi("")}function Iv(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Tv(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Gl(t){return Array.from(t.childNodes)}function Wl(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ja(t,e,n,s,i=!1){Wl(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return s()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function Xl(t,e,n,s){return ja(t,i=>i.nodeName===e,i=>{const r=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||r.push(a.name)}r.forEach(o=>i.removeAttribute(o))},()=>s(e))}function Sv(t,e,n){return Xl(t,e,n,Ba)}function Jl(t,e){return ja(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>Qi(e),!0)}function bv(t){return Jl(t," ")}function Av(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Cv(t,e){t.value=e==null?"":e}function kv(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Nv(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Rv(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Yl(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const Xn=new Map;let Jn=0;function Ql(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Zl(t,e){const n={stylesheet:ql(e),rules:{}};return Xn.set(t,n),n}function eh(t,e,n,s,i,r,o,a=0){const c=16.666/s;let u=`{
`;for(let C=0;C<=1;C+=c){const L=e+(n-e)*r(C);u+=C*100+`%{${o(L,1-L)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Ql(l)}_${a}`,d=$a(t),{stylesheet:g,rules:m}=Xn.get(d)||Zl(d,t);m[h]||(m[h]=!0,g.insertRule(`@keyframes ${h} ${l}`,g.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${h} ${s}ms linear ${i}ms 1 both`,Jn+=1,h}function yo(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),Jn-=i,Jn||th())}function th(){Yi(()=>{Jn||(Xn.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),Xn.clear())})}let zt;function $t(t){zt=t}function Zi(){if(!zt)throw new Error("Function called outside component initialization");return zt}function Dv(t){Zi().$$.on_mount.push(t)}function Ov(t){Zi().$$.after_update.push(t)}function Pv(t,e){Zi().$$.context.set(t,e)}const Vt=[],vo=[],$n=[],wo=[],qa=Promise.resolve();let _i=!1;function Ha(){_i||(_i=!0,qa.then(Ka))}function Mv(){return Ha(),qa}function Yn(t){$n.push(t)}const ei=new Set;let Mn=0;function Ka(){const t=zt;do{for(;Mn<Vt.length;){const e=Vt[Mn];Mn++,$t(e),nh(e.$$)}for($t(null),Vt.length=0,Mn=0;vo.length;)vo.pop()();for(let e=0;e<$n.length;e+=1){const n=$n[e];ei.has(n)||(ei.add(n),n())}$n.length=0}while(Vt.length);for(;wo.length;)wo.pop()();_i=!1,ei.clear(),$t(t)}function nh(t){if(t.fragment!==null){t.update(),un(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Yn)}}let xt;function sh(){return xt||(xt=Promise.resolve(),xt.then(()=>{xt=null})),xt}function _o(t,e,n){t.dispatchEvent(Yl(`${e?"intro":"outro"}${n}`))}const Bn=new Set;let Fe;function Lv(){Fe={r:0,c:[],p:Fe}}function xv(){Fe.r||un(Fe.c),Fe=Fe.p}function ih(t,e){t&&t.i&&(Bn.delete(t),t.i(e))}function Uv(t,e,n,s){if(t&&t.o){if(Bn.has(t))return;Bn.add(t),Fe.c.push(()=>{Bn.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const rh={duration:0};function Vv(t,e,n){let s=e(t,n),i=!1,r,o,a=0;function c(){r&&yo(t,r)}function u(){const{delay:h=0,duration:d=300,easing:g=Oa,tick:m=Ce,css:b}=s||rh;b&&(r=eh(t,0,1,d,h,g,b,a++)),m(0,1);const C=Ua()+h,L=C+d;o&&o.abort(),i=!0,Yn(()=>_o(t,!0,"start")),o=Fa(X=>{if(i){if(X>=L)return m(1,0),_o(t,!0,"end"),c(),i=!1;if(X>=C){const ue=g((X-C)/d);m(ue,1-ue)}}return i})}let l=!1;return{start(){l||(l=!0,yo(t),Ma(s)?(s=s(),sh().then(u)):u())},invalidate(){l=!1},end(){i&&(c(),i=!1)}}}function Fv(t,e){const n={},s={},i={$$scope:1};let r=t.length;for(;r--;){const o=t[r],a=e[r];if(a){for(const c in o)c in a||(s[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[r]=a}else for(const c in o)i[c]=1}for(const o in s)o in n||(n[o]=void 0);return n}function $v(t){return typeof t=="object"&&t!==null?t:{}}function Bv(t){t&&t.c()}function jv(t,e){t&&t.l(e)}function oh(t,e,n,s){const{fragment:i,on_mount:r,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),s||Yn(()=>{const c=r.map(Pa).filter(Ma);o?o.push(...c):un(c),t.$$.on_mount=[]}),a.forEach(Yn)}function ah(t,e){const n=t.$$;n.fragment!==null&&(un(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ch(t,e){t.$$.dirty[0]===-1&&(Vt.push(t),Ha(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qv(t,e,n,s,i,r,o,a=[-1]){const c=zt;$t(t);const u=t.$$={fragment:null,ctx:null,props:r,update:Ce,not_equal:i,bound:mo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:mo(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...g)=>{const m=g.length?g[0]:d;return u.ctx&&i(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),l&&ch(t,h)),d}):[],u.update(),l=!0,un(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){Vl();const h=Gl(e.target);u.fragment&&u.fragment.l(h),h.forEach(zl)}else u.fragment&&u.fragment.c();e.intro&&ih(t.$$.fragment),oh(t,e.target,e.anchor,e.customElement),Fl(),Ka()}$t(c)}class Hv{$destroy(){ah(this,1),this.$destroy=Ce}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!xl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ot=[];function uh(t,e=Ce){let n;const s=new Set;function i(a){if(Ll(t,a)&&(t=a,n)){const c=!ot.length;for(const u of s)u[1](),ot.push(u,t);if(c){for(let u=0;u<ot.length;u+=2)ot[u][0](ot[u+1]);ot.length=0}}}function r(a){i(a(t))}function o(a,c=Ce){const u=[a,c];return s.add(u),s.size===1&&(n=e(i)||Ce),a(t),()=>{s.delete(u),s.size===0&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lh=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(za(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const m=u<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wa=function(t){const e=za(t);return Ga.encodeByteArray(e,!0)},hh=function(t){try{return Ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function Ja(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ya(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fh(){return $().indexOf("Electron/")>=0}function Qa(){const t=$();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ph(){return $().indexOf("MSAppHost/")>=0}function gh(){return typeof indexedDB=="object"}function mh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="FirebaseError";class tt extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=yh,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ln.prototype.create)}}class ln{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?vh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tt(i,a,s)}}function vh(t,e){return t.replace(wh,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wh=/\{\$([^}]+)}/g;function _h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Eo(r)&&Eo(o)){if(!Qn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Eo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Eh(t,e){const n=new Ih(t,e);return n.subscribe.bind(n)}class Ih{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Th(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ti),i.error===void 0&&(i.error=ti),i.complete===void 0&&(i.complete=ti);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Th(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ti(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t&&t._delegate?t._delegate:t}class Ke{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ah(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bh(t){return t===Ve?void 0:t}function Ah(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const kh={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Nh=N.INFO,Rh={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Dh=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Rh[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class er{constructor(e){this.name=e,this._logLevel=Nh,this._logHandler=Dh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}function Oh(t){return Array.prototype.slice.call(t)}function Za(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function tr(t,e,n){var s,i=new Promise(function(r,o){s=t[e].apply(t,n),Za(s).then(r,o)});return i.request=s,i}function Ph(t,e,n){var s=tr(t,e,n);return s.then(function(i){if(!!i)return new Gt(i,s.request)})}function bt(t,e,n){n.forEach(function(s){Object.defineProperty(t.prototype,s,{get:function(){return this[e][s]},set:function(i){this[e][s]=i}})})}function nr(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return tr(this[e],i,arguments)})})}function Es(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function ec(t,e,n,s){s.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return Ph(this[e],i,arguments)})})}function nt(t){this._index=t}bt(nt,"_index",["name","keyPath","multiEntry","unique"]);nr(nt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);ec(nt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Gt(t,e){this._cursor=t,this._request=e}bt(Gt,"_cursor",["direction","key","primaryKey","value"]);nr(Gt,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Gt.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Za(e._request).then(function(s){if(!!s)return new Gt(s,e._request)})})})});function pe(t){this._store=t}pe.prototype.createIndex=function(){return new nt(this._store.createIndex.apply(this._store,arguments))};pe.prototype.index=function(){return new nt(this._store.index.apply(this._store,arguments))};bt(pe,"_store",["name","keyPath","indexNames","autoIncrement"]);nr(pe,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);ec(pe,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Es(pe,"_store",IDBObjectStore,["deleteIndex"]);function dn(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}dn.prototype.objectStore=function(){return new pe(this._tx.objectStore.apply(this._tx,arguments))};bt(dn,"_tx",["objectStoreNames","mode"]);Es(dn,"_tx",IDBTransaction,["abort"]);function Is(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new dn(n)}Is.prototype.createObjectStore=function(){return new pe(this._db.createObjectStore.apply(this._db,arguments))};bt(Is,"_db",["name","version","objectStoreNames"]);Es(Is,"_db",IDBDatabase,["deleteObjectStore","close"]);function Ts(t){this._db=t}Ts.prototype.transaction=function(){return new dn(this._db.transaction.apply(this._db,arguments))};bt(Ts,"_db",["name","version","objectStoreNames"]);Es(Ts,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[pe,nt].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Oh(arguments),s=n[n.length-1],i=this._store||this._index,r=i[t].apply(i,n.slice(0,-1));r.onsuccess=function(){s(r.result)}})})});[nt,pe].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var s=this,i=[];return new Promise(function(r){s.iterateCursor(e,function(o){if(!o){r(i);return}if(i.push(o.value),n!==void 0&&i.length==n){r(i);return}o.continue()})})})});function Mh(t,e,n){var s=tr(indexedDB,"open",[t,e]),i=s.request;return i&&(i.onupgradeneeded=function(r){n&&n(new Is(i.result,r.oldVersion,i.transaction))}),s.then(function(r){return new Ts(r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xh(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ei="@firebase/app",Io="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new er("@firebase/app"),Uh="@firebase/app-compat",Vh="@firebase/analytics-compat",Fh="@firebase/analytics",$h="@firebase/app-check-compat",Bh="@firebase/app-check",jh="@firebase/auth",qh="@firebase/auth-compat",Hh="@firebase/database",Kh="@firebase/database-compat",zh="@firebase/functions",Gh="@firebase/functions-compat",Wh="@firebase/installations",Xh="@firebase/installations-compat",Jh="@firebase/messaging",Yh="@firebase/messaging-compat",Qh="@firebase/performance",Zh="@firebase/performance-compat",ed="@firebase/remote-config",td="@firebase/remote-config-compat",nd="@firebase/storage",sd="@firebase/storage-compat",id="@firebase/firestore",rd="@firebase/firestore-compat",od="firebase",ad="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="[DEFAULT]",cd={[Ei]:"fire-core",[Uh]:"fire-core-compat",[Fh]:"fire-analytics",[Vh]:"fire-analytics-compat",[Bh]:"fire-app-check",[$h]:"fire-app-check-compat",[jh]:"fire-auth",[qh]:"fire-auth-compat",[Hh]:"fire-rtdb",[Kh]:"fire-rtdb-compat",[zh]:"fire-fn",[Gh]:"fire-fn-compat",[Wh]:"fire-iid",[Xh]:"fire-iid-compat",[Jh]:"fire-fcm",[Yh]:"fire-fcm-compat",[Qh]:"fire-perf",[Zh]:"fire-perf-compat",[ed]:"fire-rc",[td]:"fire-rc-compat",[nd]:"fire-gcs",[sd]:"fire-gcs-compat",[id]:"fire-fst",[rd]:"fire-fst-compat","fire-js":"fire-js",[od]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map,Ii=new Map;function ud(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gt(t){const e=t.name;if(Ii.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Ii.set(e,t);for(const n of Zn.values())ud(n,t);return!0}function ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Oe=new ln("app","Firebase",ld);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=ad;function Kv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Oe.create("bad-app-name",{appName:String(s)});const i=Zn.get(s);if(i){if(Qn(t,i.options)&&Qn(n,i.config))return i;throw Oe.create("duplicate-app",{appName:s})}const r=new Ch(s);for(const a of Ii.values())r.addComponent(a);const o=new hd(t,n,r);return Zn.set(s,o),o}function nc(t=tc){const e=Zn.get(t);if(!e)throw Oe.create("no-app",{appName:t});return e}function ke(t,e,n){var s;let i=(s=cd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}gt(new Ke(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="firebase-heartbeat-database",fd=1,ze="firebase-heartbeat-store";let ni=null;function rr(){return ni||(ni=Mh(dd,fd,t=>{switch(t.oldVersion){case 0:t.createObjectStore(ze)}}).catch(t=>{throw Oe.create("storage-open",{originalErrorMessage:t.message})})),ni}async function pd(t){try{return(await rr()).transaction(ze).objectStore(ze).get(or(t))}catch(e){throw Oe.create("storage-get",{originalErrorMessage:e.message})}}async function si(t,e){try{const s=(await rr()).transaction(ze,"readwrite");return await s.objectStore(ze).put(e,or(t)),s.complete}catch(n){throw Oe.create("storage-set",{originalErrorMessage:n.message})}}async function gd(t){try{const n=(await rr()).transaction(ze,"readwrite");return await n.objectStore(ze).delete(or(t)),n.complete}catch(e){throw Oe.create("storage-delete",{originalErrorMessage:e.message})}}function or(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=1024,yd=30*24*60*60*1e3;class vd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ed(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(i=>i.date===s))return this._heartbeatsCache.push({date:s,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=yd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=_d(this._heartbeatsCache),s=Wa(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),s}}function wd(){return new Date().toISOString().substring(0,10)}function _d(t,e=md){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.userAgent===i.userAgent);if(r){if(r.dates.push(i.date),To(n)>e){r.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),To(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ed{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gh()?mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pd(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return si(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return si(this.app,{heartbeats:[...s,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return si(this.app,{heartbeats:s.filter(i=>!e.includes(i))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return gd(this.app)}}function To(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t){gt(new Ke("platform-logger",e=>new Lh(e),"PRIVATE")),gt(new Ke("heartbeat",e=>new vd(e),"PRIVATE")),ke(Ei,Io,t),ke(Ei,Io,"esm2017"),ke("fire-js","")}Id("");var Td="firebase",Sd="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(Td,Sd,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ar(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function sc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bd=sc,ic=new ln("auth","Firebase",sc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new er("@firebase/auth");function jn(t,...e){So.logLevel<=N.ERROR&&So.error(`Auth (${fn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,...e){throw cr(t,...e)}function le(t,...e){return cr(t,...e)}function rc(t,e,n){const s=Object.assign(Object.assign({},bd()),{[e]:n});return new ln("auth","Firebase",s).create(e,{appName:t.name})}function Ad(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&de(t,"argument-error"),rc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cr(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ic.create(t,...e)}function I(t,e,...n){if(!t)throw cr(e,...n)}function ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jn(e),new Error(e)}function we(t,e){t||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;function me(t){we(t instanceof Function,"Expected a class definition");let e=bo.get(t);return e?(we(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){const n=ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Qn(r,e!=null?e:{}))return i;de(i,"already-initialized")}return n.initialize({options:e})}function kd(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(me);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nd(){return Ao()==="http:"||Ao()==="https:"}function Ao(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nd()||Ja()||"connection"in navigator)?navigator.onLine:!0}function Dd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.shortDelay=e,this.longDelay=n,we(n>e,"Short delay should be less than long delay!"),this.isMobile=Xa()||Ya()}get(){return Rd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){we(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new pn(3e4,6e4);function Md(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ss(t,e,n,s,i={}){return ac(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),oc.fetch()(cc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function ac(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Od),e);try{const i=new xd(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ii(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ii(t,"email-already-in-use",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rc(t,l,u);de(t,l)}}catch(i){if(i instanceof tt)throw i;de(t,"network-request-failed")}}async function Ld(t,e,n,s,i={}){const r=await Ss(t,e,n,s,i);return"mfaPendingCredential"in r&&de(t,"multi-factor-auth-required",{_serverResponse:r}),r}function cc(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ur(t.config,i):`${t.config.apiScheme}://${i}`}class xd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(le(this.auth,"network-request-failed")),Pd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=le(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function Vd(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fd(t,e=!1){const n=ae(t),s=await n.getIdToken(e),i=lr(s);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Bt(ri(i.auth_time)),issuedAtTime:Bt(ri(i.iat)),expirationTime:Bt(ri(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ri(t){return Number(t)*1e3}function lr(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return jn("JWT malformed, contained fewer than 3 sections"),null;try{const i=hh(n);return i?JSON.parse(i):(jn("Failed to decode base64 JWT payload"),null)}catch(i){return jn("Caught error parsing JWT payload as JSON",i),null}}function $d(t){const e=lr(t);return I(e,"internal-error"),I(typeof e.exp!="undefined","internal-error"),I(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof tt&&Bd(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Bd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bt(this.lastLoginAt),this.creationTime=Bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wt(t,Vd(n,{idToken:s}));I(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Kd(r.providerUserInfo):[],a=Hd(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new uc(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function qd(t){const e=ae(t);await es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hd(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Kd(t){return t.map(e=>{var{providerId:n}=e,s=ar(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(t,e){const n=await ac(t,{},async()=>{const s=hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=cc(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken!="undefined","internal-error"),I(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):$d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zd(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Xt;return s&&(I(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(I(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,e){I(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class qe{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ar(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new uc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fd(this,e)}reload(){return qd(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await es(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wt(this,Ud(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,X=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ue,emailVerified:Ee,isAnonymous:Pt,providerData:Mt,stsTokenManager:Lt}=n;I(ue&&Lt,e,"internal-error");const Pl=Xt.fromJSON(this.name,Lt);I(typeof ue=="string",e,"internal-error"),Ie(h,e.name),Ie(d,e.name),I(typeof Ee=="boolean",e,"internal-error"),I(typeof Pt=="boolean",e,"internal-error"),Ie(g,e.name),Ie(m,e.name),Ie(b,e.name),Ie(C,e.name),Ie(L,e.name),Ie(X,e.name);const Zs=new qe({uid:ue,auth:e,email:d,emailVerified:Ee,displayName:h,isAnonymous:Pt,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:Pl,createdAt:L,lastLoginAt:X});return Mt&&Array.isArray(Mt)&&(Zs.providerData=Mt.map(Ml=>Object.assign({},Ml))),C&&(Zs._redirectEventId=C),Zs}static async _fromIdTokenResponse(e,n,s=!1){const i=new Xt;i.updateFromServerResponse(n);const r=new qe({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await es(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lc.type="NONE";const Co=lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e,n){return`firebase:${t}:${e}:${n}`}class ht{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=qn(this.userKey,i.apiKey,r),this.fullPersistenceKey=qn("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ht(me(Co),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||me(Co);const o=qn(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=qe._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ht(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ht(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gc(e))return"Blackberry";if(mc(e))return"Webos";if(hr(e))return"Safari";if((e.includes("chrome/")||dc(e))&&!e.includes("edge/"))return"Chrome";if(pc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hc(t=$()){return/firefox\//i.test(t)}function hr(t=$()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dc(t=$()){return/crios\//i.test(t)}function fc(t=$()){return/iemobile/i.test(t)}function pc(t=$()){return/android/i.test(t)}function gc(t=$()){return/blackberry/i.test(t)}function mc(t=$()){return/webos/i.test(t)}function bs(t=$()){return/iphone|ipad|ipod/i.test(t)}function Gd(t=$()){var e;return bs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Wd(){return Qa()&&document.documentMode===10}function yc(t=$()){return bs(t)||pc(t)||mc(t)||gc(t)||/windows phone/i.test(t)||fc(t)}function Xd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e=[]){let n;switch(t){case"Browser":n=ko($());break;case"Worker":n=`${ko($())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fn}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ic,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=me(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ht.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await es(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ln("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&me(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await ht.create(this,[me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function dr(t){return ae(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eh(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,n){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(t,e){return Ld(t,"POST","/v1/accounts:signInWithIdp",Md(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="http://localhost";class Ge extends wc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):de("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ar(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ge(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,dt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dt(e,n)}buildRequest(){const e={requestUri:Yd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends fr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends gn{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends gn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ge._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Se.credential(n,s)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends gn{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends gn{constructor(){super("twitter.com")}static credential(e,n){return Ge._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ae.credential(n,s)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await qe._fromIdTokenResponse(e,s,i),o=Ro(s);return new mt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ro(s);return new mt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ro(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends tt{constructor(e,n,s,i){var r;super(n.code,n.message);this.operationType=s,this.user=i,Object.setPrototypeOf(this,ts.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ts(e,n,s,i)}}function _c(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ts._fromErrorAndOperation(t,r,e,s):r})}async function Qd(t,e,n=!1){const s=await Wt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Wt(t,_c(s,i,e,t),n);I(r.idToken,s,"internal-error");const o=lr(r.idToken);I(o,s,"internal-error");const{sub:a}=o;return I(t.uid===a,s,"user-mismatch"),mt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&de(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(t,e,n=!1){const s="signIn",i=await _c(t,s,e),r=await mt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e){return ae(t).setPersistence(e)}const ns="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){const t=$();return hr(t)||bs(t)}const nf=1e3,sf=10;class Ic extends Ec{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tf()&&Xd(),this.fallbackToPolling=yc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Wd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sf):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ic.type="LOCAL";const rf=Ic;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Ec{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tc.type="SESSION";const Sc=Tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new As(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await of(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}As.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=pr("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function cf(t){he().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){return typeof he().WorkerGlobalScope!="undefined"&&typeof he().importScripts=="function"}async function uf(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hf(){return bc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="firebaseLocalStorageDb",df=1,ss="firebaseLocalStorage",Cc="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cs(t,e){return t.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function ff(){const t=indexedDB.deleteDatabase(Ac);return new mn(t).toPromise()}function Si(){const t=indexedDB.open(Ac,df);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ss,{keyPath:Cc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ss)?e(s):(s.close(),await ff(),e(await Si()))})})}async function Do(t,e,n){const s=Cs(t,!0).put({[Cc]:e,value:n});return new mn(s).toPromise()}async function pf(t,e){const n=Cs(t,!1).get(e),s=await new mn(n).toPromise();return s===void 0?null:s.value}function Oo(t,e){const n=Cs(t,!0).delete(e);return new mn(n).toPromise()}const gf=800,mf=3;class kc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Si(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>mf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=As._getInstance(hf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uf(),!this.activeServiceWorker)return;this.sender=new af(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Si();return await Do(e,ns,"1"),await Oo(e,ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Do(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>pf(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Cs(i,!1).getAll();return new mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kc.type="LOCAL";const yf=kc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=le("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",vf().appendChild(s)})}function _f(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e){return e?me(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends wc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ef(t){return ef(t.auth,new gr(t),t.bypassAuthState)}function If(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Zd(n,new gr(t),t.bypassAuthState)}async function Tf(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Qd(n,new gr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ef;case"linkViaPopup":case"linkViaRedirect":return Tf;case"reauthViaPopup":case"reauthViaRedirect":return If;default:de(this.auth,"internal-error")}}resolve(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new pn(2e3,1e4);async function Gv(t,e,n){const s=dr(t);Ad(t,e,fr);const i=Nc(s,n);return new $e(s,"signInViaPopup",e,i).executeNotNull()}class $e extends Rc{constructor(e,n,s,i,r){super(e,n,i,r);this.provider=s,this.authWindow=null,this.pollId=null,$e.currentPopupAction&&$e.currentPopupAction.cancel(),$e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const e=pr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Sf.get())};e()}}$e.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="pendingRedirect",oi=new Map;class Af extends Rc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const s=await Cf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cf(t,e){const n=Nf(e),s=kf(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function kf(t){return me(t._redirectPersistence)}function Nf(t){return qn(bf,t.config.apiKey,t.name)}async function Rf(t,e,n=!1){const s=dr(t),i=Nc(s,e),o=await new Af(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=10*60*1e3;class Of{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Dc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(le(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Df&&this.cachedEventUids.clear(),this.cachedEventUids.has(Po(e))}saveEventToCache(e){this.cachedEventUids.add(Po(e)),this.lastProcessedEventTime=Date.now()}}function Po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xf=/^https?/;async function Uf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mf(t);for(const n of e)try{if(Vf(n))return}catch{}de(t,"unauthorized-domain")}function Vf(t){const e=Ti(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!xf.test(n))return!1;if(Lf.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new pn(3e4,6e4);function Mo(){const t=he().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $f(t){return new Promise((e,n)=>{var s,i,r;function o(){Mo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mo(),n(le(t,"network-request-failed"))},timeout:Ff.get()})}if((i=(s=he().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((r=he().gapi)===null||r===void 0?void 0:r.load)o();else{const a=_f("iframefcb");return he()[a]=()=>{gapi.load?o():n(le(t,"network-request-failed"))},wf(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Hn=null,e})}let Hn=null;function Bf(t){return Hn=Hn||$f(t),Hn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new pn(5e3,15e3),qf="__/auth/iframe",Hf="emulator/auth/iframe",Kf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gf(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ur(e,Hf):`https://${t.config.authDomain}/${qf}`,s={apiKey:e.apiKey,appName:t.name,v:fn},i=zf.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hn(s).slice(1)}`}async function Wf(t){const e=await Bf(t),n=he().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:Gf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kf,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=le(t,"network-request-failed"),a=he().setTimeout(()=>{r(o)},jf.get());function c(){he().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jf=500,Yf=600,Qf="_blank",Zf="http://localhost";class Lo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ep(t,e,n,s=Jf,i=Yf){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Xf),{width:s.toString(),height:i.toString(),top:r,left:o}),u=$().toLowerCase();n&&(a=dc(u)?Qf:n),hc(u)&&(e=e||Zf,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(Gd(u)&&a!=="_self")return tp(e||"",a),new Lo(null);const h=window.open(e||"",a,l);I(h,t,"popup-blocked");try{h.focus()}catch{}return new Lo(h)}function tp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="__/auth/handler",sp="emulator/auth/handler";function xo(t,e,n,s,i,r){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fn,eventId:i};if(e instanceof fr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(r||{}))o[c]=u}if(e instanceof gn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ip(t)}?${hn(a).slice(1)}`}function ip({config:t}){return t.emulator?ur(t,sp):`https://${t.authDomain}/${np}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="webStorageSupport";class rp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=Rf}async _openPopup(e,n,s,i){var r;we((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=xo(e,n,s,Ti(),i);return ep(e,o,pr())}async _openRedirect(e,n,s,i){return await this._originValidation(e),cf(xo(e,n,s,Ti(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(we(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Wf(e),s=new Of(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ai,{type:ai},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ai];o!==void 0&&n(!!o),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Uf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yc()||hr()||bs()}}const op=rp;var Uo="@firebase/auth",Vo="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function up(t){gt(new Ke("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=s.options;return(o=>{I(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),I(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vc(t)},c=new Jd(o,a);return kd(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gt(new Ke("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(s=>new ap(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(Uo,Vo,cp(t)),ke(Uo,Vo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t=nc()){const e=ir(t,"auth");return e.isInitialized()?e.getImmediate():Cd(t,{popupRedirectResolver:op,persistence:[yf,rf,Sc]})}up("Browser");var lp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,mr=mr||{},E=lp||self;function is(){}function bi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hp(t){return Object.prototype.hasOwnProperty.call(t,ci)&&t[ci]||(t[ci]=++dp)}var ci="closure_uid_"+(1e9*Math.random()>>>0),dp=0;function fp(t,e,n){return t.call.apply(t.bind,arguments)}function pp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function H(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?H=fp:H=pp,H.apply(null,arguments)}function Ln(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function W(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function xe(){this.s=this.s,this.o=this.o}var gp=0,mp={};xe.prototype.s=!1;xe.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),gp!=0)){var t=hp(this);delete mp[t]}};xe.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Pc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function yp(t){e:{var e=cg;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Fo(t){return Array.prototype.concat.apply([],arguments)}function yr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function rs(t){return/^[\s\xa0]*$/.test(t)}var $o=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Q(t,e){return t.indexOf(e)!=-1}function ui(t,e){return t<e?-1:t>e?1:0}var Z;e:{var Bo=E.navigator;if(Bo){var jo=Bo.userAgent;if(jo){Z=jo;break e}}Z=""}function vr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Mc(t){const e={};for(const n in t)e[n]=t[n];return e}var qo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lc(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<qo.length;r++)n=qo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function wr(t){return wr[" "](t),t}wr[" "]=is;function vp(t){var e=Ep;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var wp=Q(Z,"Opera"),yt=Q(Z,"Trident")||Q(Z,"MSIE"),xc=Q(Z,"Edge"),Ai=xc||yt,Uc=Q(Z,"Gecko")&&!(Q(Z.toLowerCase(),"webkit")&&!Q(Z,"Edge"))&&!(Q(Z,"Trident")||Q(Z,"MSIE"))&&!Q(Z,"Edge"),_p=Q(Z.toLowerCase(),"webkit")&&!Q(Z,"Edge");function Vc(){var t=E.document;return t?t.documentMode:void 0}var os;e:{var li="",hi=function(){var t=Z;if(Uc)return/rv:([^\);]+)(\)|;)/.exec(t);if(xc)return/Edge\/([\d\.]+)/.exec(t);if(yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_p)return/WebKit\/(\S+)/.exec(t);if(wp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hi&&(li=hi?hi[1]:""),yt){var di=Vc();if(di!=null&&di>parseFloat(li)){os=String(di);break e}}os=li}var Ep={};function Ip(){return vp(function(){let t=0;const e=$o(String(os)).split("."),n=$o("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=ui(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ui(i[2].length==0,r[2].length==0)||ui(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Ci;if(E.document&&yt){var Ho=Vc();Ci=Ho||parseInt(os,10)||void 0}else Ci=void 0;var Tp=Ci,Sp=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",is,e),E.removeEventListener("test",is,e)}catch{}return t}();function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};function Jt(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Uc){e:{try{wr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jt.Z.h.call(this)}}W(Jt,Y);var bp={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),Ap=0;function Cp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Ap,this.ca=this.fa=!1}function ks(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ns(t){this.src=t,this.g={},this.h=0}Ns.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ni(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Cp(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};function ki(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Oc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ks(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ni(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}var _r="closure_lm_"+(1e6*Math.random()|0),fi={};function Fc(t,e,n,s,i){if(s&&s.once)return Bc(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Fc(t,e[r],n,s,i);return null}return n=Tr(n),t&&t[vn]?t.N(e,n,yn(s)?!!s.capture:!!s,i):$c(t,e,n,!1,s,i)}function $c(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=yn(i)?!!i.capture:!!i,a=Ir(t);if(a||(t[_r]=a=new Ns(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=kp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Sp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(qc(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kp(){function t(n){return e.call(t.src,t.listener,n)}var e=Np;return t}function Bc(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Bc(t,e[r],n,s,i);return null}return n=Tr(n),t&&t[vn]?t.O(e,n,yn(s)?!!s.capture:!!s,i):$c(t,e,n,!0,s,i)}function jc(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)jc(t,e[r],n,s,i);else s=yn(s)?!!s.capture:!!s,n=Tr(n),t&&t[vn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ni(r,n,s,i),-1<n&&(ks(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ir(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ni(e,n,s,i)),(n=-1<t?e[t]:null)&&Er(n))}function Er(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[vn])ki(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(qc(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ir(e))?(ki(n,t),n.h==0&&(n.src=null,e[_r]=null)):ks(t)}}}function qc(t){return t in fi?fi[t]:fi[t]="on"+t}function Np(t,e){if(t.ca)t=!0;else{e=new Jt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Er(t),t=n.call(s,e)}return t}function Ir(t){return t=t[_r],t instanceof Ns?t:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tr(t){return typeof t=="function"?t:(t[pi]||(t[pi]=function(e){return t.handleEvent(e)}),t[pi])}function B(){xe.call(this),this.i=new Ns(this),this.P=this,this.I=null}W(B,xe);B.prototype[vn]=!0;B.prototype.removeEventListener=function(t,e,n,s){jc(this,t,e,n,s)};function K(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(s,t),Lc(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=xn(o,s,!0,e)&&i}if(o=e.g=t,i=xn(o,s,!0,e)&&i,i=xn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=xn(o,s,!1,e)&&i}B.prototype.M=function(){if(B.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ks(n[s]);delete t.g[e],t.h--}}this.I=null};B.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};B.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function xn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ki(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Sr=E.JSON.stringify;function Rp(){var t=Kc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Dp{constructor(){this.h=this.g=null}add(e,n){const s=Hc.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Hc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Op,t=>t.reset());class Op{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Pp(t){E.setTimeout(()=>{throw t},0)}function br(t,e){Ri||Mp(),Di||(Ri(),Di=!0),Kc.add(t,e)}var Ri;function Mp(){var t=E.Promise.resolve(void 0);Ri=function(){t.then(Lp)}}var Di=!1,Kc=new Dp;function Lp(){for(var t;t=Rp();){try{t.h.call(t.g)}catch(n){Pp(n)}var e=Hc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Di=!1}function Rs(t,e){B.call(this),this.h=t||1,this.g=e||E,this.j=H(this.kb,this),this.l=Date.now()}W(Rs,B);y=Rs.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),K(this,"tick"),this.da&&(Ar(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ar(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){Rs.Z.M.call(this),Ar(this),delete this.g};function Cr(t,e,n){if(typeof t=="function")n&&(t=H(t,n));else if(t&&typeof t.handleEvent=="function")t=H(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function zc(t){t.g=Cr(()=>{t.g=null,t.i&&(t.i=!1,zc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xp extends xe{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zc(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){xe.call(this),this.h=t,this.g={}}W(Yt,xe);var Ko=[];function Gc(t,e,n,s){Array.isArray(n)||(n&&(Ko[0]=n.toString()),n=Ko);for(var i=0;i<n.length;i++){var r=Fc(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Wc(t){vr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Er(e)},t),t.g={}}Yt.prototype.M=function(){Yt.Z.M.call(this),Wc(this)};Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ds(){this.g=!0}Ds.prototype.Aa=function(){this.g=!1};function Up(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Vp(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ct(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$p(t,n)+(s?" "+s:"")})}function Fp(t,e){t.info(function(){return"TIMEOUT: "+e})}Ds.prototype.info=function(){};function $p(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sr(n)}catch{return e}}var st={},zo=null;function Os(){return zo=zo||new B}st.Ma="serverreachability";function Xc(t){Y.call(this,st.Ma,t)}W(Xc,Y);function Qt(t){const e=Os();K(e,new Xc(e,t))}st.STAT_EVENT="statevent";function Jc(t,e){Y.call(this,st.STAT_EVENT,t),this.stat=e}W(Jc,Y);function ee(t){const e=Os();K(e,new Jc(e,t))}st.Na="timingevent";function Yc(t,e){Y.call(this,st.Na,t),this.size=e}W(Yc,Y);function wn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var Ps={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function kr(){}kr.prototype.h=null;function Go(t){return t.h||(t.h=t.i())}function Zc(){}var _n={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Nr(){Y.call(this,"d")}W(Nr,Y);function Rr(){Y.call(this,"c")}W(Rr,Y);var Oi;function Ms(){}W(Ms,kr);Ms.prototype.g=function(){return new XMLHttpRequest};Ms.prototype.i=function(){return{}};Oi=new Ms;function En(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Yt(this),this.P=Bp,t=Ai?125:void 0,this.W=new Rs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var Bp=45e3,Pi={},as={};y=En.prototype;y.setTimeout=function(t){this.P=t};function Mi(t,e,n){t.K=1,t.v=xs(_e(e)),t.s=n,t.U=!0,tu(t,null)}function tu(t,e){t.F=Date.now(),In(t),t.A=_e(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),cu(n.h,"t",s),t.C=0,n=t.l.H,t.h=new eu,t.g=ku(t.l,n?e:null,!t.s),0<t.O&&(t.L=new xp(H(t.Ia,t,t.g),t.O)),Gc(t.V,t.g,"readystatechange",t.gb),e=t.H?Mc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qt(1),Up(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&ye(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=ye(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Ai||this.g&&(this.h.h||this.g.ga()||Yo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Qt(3):Qt(2)),Ls(this);var n=this.g.ba();this.N=n;t:if(nu(this)){var s=Yo(this.g);t="";var i=s.length,r=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Be(this),jt(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Vp(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rs(a)){var u=a;break t}}u=null}if(n=u)ct(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Li(this,n);else{this.i=!1,this.o=3,ee(12),Be(this),jt(this);break e}}this.U?(su(this,l,o),Ai&&this.i&&l==3&&(Gc(this.V,this.W,"tick",this.fb),this.W.start())):(ct(this.j,this.m,o,null),Li(this,o)),l==4&&Be(this),this.i&&!this.I&&(l==4?Su(this.l,this):(this.i=!1,In(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ee(12)):(this.o=0,ee(13)),Be(this),jt(this)}}}catch{}finally{}};function nu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function su(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=jp(t,n),i==as){e==4&&(t.o=4,ee(14),s=!1),ct(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Pi){t.o=4,ee(15),ct(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ct(t.j,t.m,i,null),Li(t,i);nu(t)&&i!=as&&i!=Pi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ee(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fr(e),e.L=!0,ee(11))):(ct(t.j,t.m,n,"[Invalid Chunked Response]"),Be(t),jt(t))}y.fb=function(){if(this.g){var t=ye(this.g),e=this.g.ga();this.C<e.length&&(Ls(this),su(this,t,e),this.i&&t!=4&&In(this))}};function jp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?as:(n=Number(e.substring(n,s)),isNaN(n)?Pi:(s+=1,s+n>e.length?as:(e=e.substr(s,n),t.C=s+n,e)))}y.cancel=function(){this.I=!0,Be(this)};function In(t){t.Y=Date.now()+t.P,iu(t,t.P)}function iu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wn(H(t.eb,t),e)}function Ls(t){t.B&&(E.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Fp(this.j,this.A),this.K!=2&&(Qt(3),ee(17)),Be(this),this.o=2,jt(this)):iu(this,this.Y-t)};function jt(t){t.l.G==0||t.I||Su(t.l,t)}function Be(t){Ls(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ar(t.W),Wc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Li(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||xi(n.i,t))){if(n.I=t.N,!t.J&&xi(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)hs(n),Fs(n);else break e;Vr(n),ee(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=wn(H(n.ab,n),6e3));if(1>=hu(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else je(n,11)}else if((t.J||n.g==t)&&hs(n),!rs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;!r.g&&(Q(m,"spdy")||Q(m,"quic")||Q(m,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Pr(r,r.h),r.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,P(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Cu(s,s.H?s.la:null,s.W),o.J){du(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ls(a),In(a)),s.g=o}else Iu(s);0<n.l.length&&$s(n)}else u[0]!="stop"&&u[0]!="close"||je(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?je(n,7):Ur(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Qt(4)}catch{}}function qp(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Dr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bi(t)||typeof t=="string")Pc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bi(t)||typeof t=="string"){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=qp(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function At(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof At)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}y=At.prototype;y.R=function(){Or(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return Or(this),this.g.concat()};function Or(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];We(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],We(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}y.get=function(t,e){return We(this.h,t)?this.h[t]:e};y.set=function(t,e){We(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};function We(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ru=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Hp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xe){this.g=e!==void 0?e:t.g,cs(this,t.j),this.s=t.s,us(this,t.i),ls(this,t.m),this.l=t.l,e=t.h;var n=new Zt;n.i=e.i,e.g&&(n.g=new At(e.g),n.h=e.h),Wo(this,n),this.o=t.o}else t&&(n=String(t).match(ru))?(this.g=!!e,cs(this,n[1]||"",!0),this.s=qt(n[2]||""),us(this,n[3]||"",!0),ls(this,n[4]),this.l=qt(n[5]||"",!0),Wo(this,n[6]||"",!0),this.o=qt(n[7]||"")):(this.g=!!e,this.h=new Zt(null,this.g))}Xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ft(e,Xo,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ft(e,Xo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ft(n,n.charAt(0)=="/"?Xp:Wp,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ft(n,Yp)),t.join("")};function _e(t){return new Xe(t)}function cs(t,e,n){t.j=n?qt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function us(t,e,n){t.i=n?qt(e,!0):e}function ls(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wo(t,e,n){e instanceof Zt?(t.h=e,Qp(t.h,t.g)):(n||(e=Ft(e,Jp)),t.h=new Zt(e,t.g))}function P(t,e,n){t.h.set(e,n)}function xs(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Kp(t){return t instanceof Xe?_e(t):new Xe(t,void 0)}function zp(t,e,n,s){var i=new Xe(null,void 0);return t&&cs(i,t),e&&us(i,e),n&&ls(i,n),s&&(i.l=s),i}function qt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ft(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Gp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xo=/[#\/\?@]/g,Wp=/[#\?:]/g,Xp=/[#\?]/g,Jp=/[#\?@]/g,Yp=/#/g;function Zt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ue(t){t.g||(t.g=new At,t.h=0,t.i&&Hp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=Zt.prototype;y.add=function(t,e){Ue(this),this.i=null,t=Ct(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ou(t,e){Ue(t),e=Ct(t,e),We(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,We(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Or(t)))}function au(t,e){return Ue(t),e=Ct(t,e),We(t.g.h,e)}y.forEach=function(t,e){Ue(this),this.g.forEach(function(n,s){Pc(n,function(i){t.call(e,i,s,this)},this)},this)};y.T=function(){Ue(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n};y.R=function(t){Ue(this);var e=[];if(typeof t=="string")au(this,t)&&(e=Fo(e,this.g.get(Ct(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Fo(e,t[n])}return e};y.set=function(t,e){return Ue(this),this.i=null,t=Ct(this,t),au(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function cu(t,e,n){ou(t,e),0<n.length&&(t.i=null,t.g.set(Ct(t,e),yr(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ct(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Qp(t,e){e&&!t.j&&(Ue(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(ou(this,s),cu(this,i,n))},t)),t.j=e}var Zp=class{constructor(t,e){this.h=t,this.g=e}};function uu(t){this.l=t||eg,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eg=10;function lu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hu(t){return t.h?1:t.g?t.g.size:0}function xi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pr(t,e){t.g?t.g.add(e):t.h=e}function du(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yr(t.i)}function Mr(){}Mr.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};Mr.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function tg(){this.g=new Mr}function ng(t,e,n){const s=n||"";try{Dr(t,function(i,r){let o=i;yn(i)&&(o=Sr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function sg(t,e){const n=new Ds;if(E.Image){const s=new Image;s.onload=Ln(Un,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ln(Un,n,s,"TestLoadImage: error",!1,e),s.onabort=Ln(Un,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ln(Un,n,s,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Un(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Tn(t){this.l=t.$b||null,this.j=t.ib||!1}W(Tn,kr);Tn.prototype.g=function(){return new Us(this.l,this.j)};Tn.prototype.i=function(t){return function(){return t}}({});function Us(t,e){B.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Lr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(Us,B);var Lr=0;y=Us.prototype;y.open=function(t,e){if(this.readyState!=Lr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,en(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=Lr};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function pu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):en(this),this.readyState==3&&pu(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,Sn(this))};y.Ta=function(t){this.g&&(this.response=t,Sn(this))};y.ha=function(){this.g&&Sn(this)};function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,en(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ig=E.JSON.parse;function V(t){B.call(this),this.headers=new At,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gu,this.K=this.L=!1}W(V,B);var gu="",rg=/^https?$/i,og=["POST","PUT"];y=V.prototype;y.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oi.g(),this.C=this.u?Go(this.u):Go(Oi),this.g.onreadystatechange=H(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Jo(this,r);return}t=n||"";const i=new At(this.headers);s&&Dr(s,function(r,o){i.set(o,r)}),s=yp(i.T()),n=E.FormData&&t instanceof E.FormData,!(0<=Oc(og,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vu(this),0<this.B&&((this.K=ag(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.pa,this)):this.A=Cr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Jo(this,r)}};function ag(t){return yt&&Ip()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function cg(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof mr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Jo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mu(t),Vs(t)}function mu(t){t.D||(t.D=!0,K(t,"complete"),K(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,K(this,"complete"),K(this,"abort"),Vs(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vs(this,!0)),V.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?yu(this):this.cb())};y.cb=function(){yu(this)};function yu(t){if(t.h&&typeof mr!="undefined"&&(!t.C[1]||ye(t)!=4||t.ba()!=2)){if(t.v&&ye(t)==4)Cr(t.Fa,0,t);else if(K(t,"readystatechange"),ye(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ru)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!rg.test(i?i.toLowerCase():"")}n=s}if(n)K(t,"complete"),K(t,"success");else{t.m=6;try{var o=2<ye(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",mu(t)}}finally{Vs(t)}}}}function Vs(t,e){if(t.g){vu(t);const n=t.g,s=t.C[0]?is:null;t.g=null,t.C=null,e||K(t,"ready");try{n.onreadystatechange=s}catch{}}}function vu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function ye(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ig(e)}};function Yo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ug(t){let e="";return vr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function xr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ug(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}function Ut(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wu(t){this.za=0,this.l=[],this.h=new Ds,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ut("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ut("baseRetryDelayMs",5e3,t),this.$a=Ut("retryDelaySeedMs",1e4,t),this.Ya=Ut("forwardChannelMaxRetries",2,t),this.ra=Ut("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new uu(t&&t.concurrentRequestLimit),this.Ca=new tg,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=wu.prototype;y.ma=8;y.G=1;function Ur(t){if(_u(t),t.G==3){var e=t.V++,n=_e(t.F);P(n,"SID",t.J),P(n,"RID",e),P(n,"TYPE","terminate"),bn(t,n),e=new En(t,t.h,e,void 0),e.K=2,e.v=xs(_e(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=ku(e.l,null),e.g.ea(e.v)),e.F=Date.now(),In(e)}Au(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Fs(t){t.g&&(Fr(t),t.g.cancel(),t.g=null)}function _u(t){Fs(t),t.u&&(E.clearTimeout(t.u),t.u=null),hs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function gi(t,e){t.l.push(new Zp(t.Za++,e)),t.G==3&&$s(t)}function $s(t){lu(t.i)||t.m||(t.m=!0,br(t.Ha,t),t.C=0)}function lg(t,e){return hu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=wn(H(t.Ha,t,e),bu(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new En(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Mc(r),Lc(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Eu(this,i,e),n=_e(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),bn(this,n),this.o&&r&&xr(n,this.o,r),Pr(this.i,i),this.Ra&&P(n,"TYPE","init"),this.ja?(P(n,"$req",e),P(n,"SID","null"),i.$=!0,Mi(i,n,null)):Mi(i,n,e),this.G=2}}else this.G==3&&(t?Qo(this,t):this.l.length==0||lu(this.i)||Qo(this))};function Qo(t,e){var n;e?n=e.m:n=t.V++;const s=_e(t.F);P(s,"SID",t.J),P(s,"RID",n),P(s,"AID",t.U),bn(t,s),t.o&&t.s&&xr(s,t.o,t.s),n=new En(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Eu(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Pr(t.i,n),Mi(n,s,e)}function bn(t,e){t.j&&Dr({},function(n,s){P(e,s,n)})}function Eu(t,e,n){n=Math.min(t.l.length,n);var s=t.j?H(t.j.Oa,t.j,t):null;e:{var i=t.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{ng(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Iu(t){t.g||t.u||(t.Y=1,br(t.Ga,t),t.A=0)}function Vr(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=wn(H(t.Ga,t),bu(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,Tu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=wn(H(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ee(10),Fs(this),Tu(this))};function Fr(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function Tu(t){t.g=new En(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=_e(t.oa);P(e,"RID","rpc"),P(e,"SID",t.J),P(e,"CI",t.N?"0":"1"),P(e,"AID",t.U),bn(t,e),P(e,"TYPE","xmlhttp"),t.o&&t.s&&xr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=xs(_e(e)),n.s=null,n.U=!0,tu(n,t)}y.ab=function(){this.v!=null&&(this.v=null,Fs(this),Vr(this),ee(19))};function hs(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function Su(t,e){var n=null;if(t.g==e){hs(t),Fr(t),t.g=null;var s=2}else if(xi(t.i,e))n=e.D,du(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Os(),K(s,new Yc(s,n,e,i)),$s(t)}else Iu(t);else if(i=e.o,i==3||i==0&&0<t.I||!(s==1&&lg(t,e)||s==2&&Vr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:je(t,5);break;case 4:je(t,10);break;case 3:je(t,6);break;default:je(t,2)}}}function bu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function je(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=H(t.jb,t);n||(n=new Xe("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||cs(n,"https"),xs(n)),sg(n.toString(),s)}else ee(2);t.G=0,t.j&&t.j.va(e),Au(t),_u(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ee(2)):(this.h.info("Failed to ping google.com"),ee(1))};function Au(t){t.G=0,t.I=-1,t.j&&((fu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,yr(t.l),t.l.length=0),t.j.ua())}function Cu(t,e,n){let s=Kp(n);if(s.i!="")e&&us(s,e+"."+s.i),ls(s,s.m);else{const i=E.location;s=zp(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&vr(t.aa,function(i,r){P(s,r,i)}),e=t.D,n=t.sa,e&&n&&P(s,e,n),P(s,"VER",t.ma),bn(t,s),s}function ku(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new V(new Tn({ib:!0})):new V(t.qa),e.L=t.H,e}function Nu(){}y=Nu.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function ds(){if(yt&&!(10<=Number(Tp)))throw Error("Environmental error: no available transport.")}ds.prototype.g=function(t,e){return new ce(t,e)};function ce(t,e){B.call(this),this.g=new wu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kt(this)}W(ce,B);ce.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),br(H(t.hb,t,e))),ee(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Cu(t,null,t.W),$s(t)};ce.prototype.close=function(){Ur(this.g)};ce.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,gi(this.g,e)}else this.v?(e={},e.__data__=Sr(t),gi(this.g,e)):gi(this.g,t)};ce.prototype.M=function(){this.g.j=null,delete this.j,Ur(this.g),delete this.g,ce.Z.M.call(this)};function Ru(t){Nr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}W(Ru,Nr);function Du(){Rr.call(this),this.status=1}W(Du,Rr);function kt(t){this.g=t}W(kt,Nu);kt.prototype.xa=function(){K(this.g,"a")};kt.prototype.wa=function(t){K(this.g,new Ru(t))};kt.prototype.va=function(t){K(this.g,new Du(t))};kt.prototype.ua=function(){K(this.g,"b")};ds.prototype.createWebChannel=ds.prototype.g;ce.prototype.send=ce.prototype.u;ce.prototype.open=ce.prototype.m;ce.prototype.close=ce.prototype.close;Ps.NO_ERROR=0;Ps.TIMEOUT=8;Ps.HTTP_ERROR=6;Qc.COMPLETE="complete";Zc.EventType=_n;_n.OPEN="a";_n.CLOSE="b";_n.ERROR="c";_n.MESSAGE="d";B.prototype.listen=B.prototype.N;V.prototype.listenOnce=V.prototype.O;V.prototype.getLastError=V.prototype.La;V.prototype.getLastErrorCode=V.prototype.Da;V.prototype.getStatus=V.prototype.ba;V.prototype.getResponseJson=V.prototype.Qa;V.prototype.getResponseText=V.prototype.ga;V.prototype.send=V.prototype.ea;var hg=function(){return new ds},dg=function(){return Os()},mi=Ps,fg=Qc,pg=st,Zo={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},gg=Tn,Vn=Zc,mg=V;const ea="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new er("@firebase/firestore");function ta(){return Je.logLevel}function v(t,...e){if(Je.logLevel<=N.DEBUG){const n=e.map($r);Je.debug(`Firestore (${Nt}): ${t}`,...n)}}function Pe(t,...e){if(Je.logLevel<=N.ERROR){const n=e.map($r);Je.error(`Firestore (${Nt}): ${t}`,...n)}}function na(t,...e){if(Je.logLevel<=N.WARN){const n=e.map($r);Je.warn(`Firestore (${Nt}): ${t}`,...n)}}function $r(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t="Unexpected state"){const e=`FIRESTORE (${Nt}) INTERNAL ASSERTION FAILED: `+t;throw Pe(e),new Error(e)}function D(t,e){t||S()}function T(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(te.UNAUTHENTICATED))}shutdown(){}}class wg{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Ne;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ne,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ne)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new yg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new te(e)}}class _g{constructor(e,n,s){this.type="FirstParty",this.user=te.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Eg{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new _g(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tg{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(D(typeof n.token=="string"),this.p=n.token,new Ig(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br.A=-1;class Ou{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Sg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function R(t,e){return t<e?-1:t>e?1:0}function vt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new oe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function it(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){n===void 0?n=0:n>e.length&&S(),s===void 0?s=e.length-n:s>e.length-n&&S(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class M extends tn{construct(e,n,s){return new M(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new M(n)}static emptyPath(){return new M([])}}const bg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends tn{construct(e,n,s){return new ne(e,n,s)}static isValidIdentifier(e){return bg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(n)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(ne.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new G(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new G(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Ag=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Me(t){if(D(!!t),typeof t=="string"){let e=0;const n=Ag.exec(t);if(D(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:U(t.seconds),nanos:U(t.nanos)}}function U(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wt(t){return typeof t=="string"?G.fromBase64String(t):G.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lu(t){const e=t.mapValue.fields.__previous_value__;return Mu(e)?Lu(e):e}function sn(t){const e=Me(t.mapValue.fields.__local_write_time__.timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class _t{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _t("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _t&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){return t==null}function fs(t){return t===0&&1/t==-1/0}function kg(t){return typeof t=="number"&&Number.isInteger(t)&&!fs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(M.fromString(e))}static fromName(e){return new _(M.fromString(e).popFirst(5))}static empty(){return new _(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return M.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new M(e.slice()))}}function Ye(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mu(t)?4:10:S()}function fe(t,e){if(t===e)return!0;const n=Ye(t);if(n!==Ye(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sn(t).isEqual(sn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Me(s.timestampValue),o=Me(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wt(s.bytesValue).isEqual(wt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=U(s.doubleValue),o=U(i.doubleValue);return r===o?fs(r)===fs(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return vt(t.arrayValue.values||[],e.arrayValue.values||[],fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(sa(r)!==sa(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!fe(r[a],o[a])))return!1;return!0}(t,e);default:return S()}}function rn(t,e){return(t.values||[]).find(n=>fe(n,e))!==void 0}function Et(t,e){if(t===e)return 0;const n=Ye(t),s=Ye(e);if(n!==s)return R(n,s);switch(n){case 0:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=U(i.integerValue||i.doubleValue),a=U(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ia(t.timestampValue,e.timestampValue);case 4:return ia(sn(t),sn(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(i,r){const o=wt(i),a=wt(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=R(U(i.latitude),U(r.latitude));return o!==0?o:R(U(i.longitude),U(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Et(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=Et(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(t.mapValue,e.mapValue);default:throw S()}}function ia(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return R(t,e);const n=Me(t),s=Me(e),i=R(n.seconds,s.seconds);return i!==0?i:R(n.nanos,s.nanos)}function ft(t){return Ui(t)}function Ui(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Me(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?wt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ui(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ui(s.fields[a])}`;return r+"}"}(t.mapValue):S();var e,n}function Vi(t){return!!t&&"integerValue"in t}function jr(t){return!!t&&"arrayValue"in t}function ra(t){return!!t&&"nullValue"in t}function oa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kn(t){return!!t&&"mapValue"in t}function Ht(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return it(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ht(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ht(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.value=e}static empty(){return new re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Kn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ht(n)}setAll(e){let n=ne.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ht(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Kn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){it(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new re(Ht(this.value))}}function xu(t){const e=[];return it(t.fields,(n,s)=>{const i=new ne([n]);if(Kn(s)){const r=xu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new J(e,0,A.min(),A.min(),re.empty(),0)}static newFoundDocument(e,n,s){return new J(e,1,n,A.min(),s,0)}static newNoDocument(e,n){return new J(e,2,n,A.min(),re.empty(),0)}static newUnknownDocument(e,n){return new J(e,3,n,A.min(),re.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof J&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function aa(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ng(t,e,n,s,i,r,o)}function qr(t){const e=T(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+ft(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Rt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ft(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ft(s)).join(",")),e.P=n}return e.P}function Rg(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ft(s.value)}`;var s}).join(", ")}]`),Rt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ft(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ft(n)).join(",")),`Target(${e})`}function Hr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Vg(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!fe(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ua(t.startAt,e.startAt)&&ua(t.endAt,e.endAt)}function Fi(t){return _.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class se extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,s):new Dg(e,n,s):n==="array-contains"?new Mg(e,s):n==="in"?new Lg(e,s):n==="not-in"?new xg(e,s):n==="array-contains-any"?new Ug(e,s):new se(e,n,s)}static v(e,n,s){return n==="in"?new Og(e,s):new Pg(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(Et(n,this.value)):n!==null&&Ye(this.value)===Ye(n)&&this.V(Et(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Dg extends se{constructor(e,n,s){super(e,n,s),this.key=_.fromName(s.referenceValue)}matches(e){const n=_.comparator(e.key,this.key);return this.V(n)}}class Og extends se{constructor(e,n){super(e,"in",n),this.keys=Uu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pg extends se{constructor(e,n){super(e,"not-in",n),this.keys=Uu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Uu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_.fromName(s.referenceValue))}class Mg extends se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jr(n)&&rn(n.arrayValue,this.value)}}class Lg extends se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rn(this.value.arrayValue,n)}}class xg extends se{constructor(e,n){super(e,"not-in",n)}matches(e){if(rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rn(this.value.arrayValue,n)}}class Ug extends se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>rn(this.value.arrayValue,s))}}class ps{constructor(e,n){this.position=e,this.inclusive=n}}class Kt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ca(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),n.key):s=Et(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ua(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function Fg(t,e,n,s,i,r,o,a){return new Bs(t,e,n,s,i,r,o,a)}function Kr(t){return new Bs(t)}function zn(t){return!Rt(t.limit)&&t.limitType==="F"}function $i(t){return!Rt(t.limit)&&t.limitType==="L"}function $g(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bg(t){for(const e of t.filters)if(e.S())return e.field;return null}function jg(t){return t.collectionGroup!==null}function on(t){const e=T(t);if(e.D===null){e.D=[];const n=Bg(e),s=$g(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Kt(n)),e.D.push(new Kt(ne.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Kt(ne.keyField(),r))}}}return e.D}function Qe(t){const e=T(t);if(!e.C)if(e.limitType==="F")e.C=aa(e.path,e.collectionGroup,on(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of on(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Kt(r.field,o))}const s=e.endAt?new ps(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new ps(e.startAt.position,!e.startAt.inclusive):null;e.C=aa(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.C}function qg(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function js(t,e){return Hr(Qe(t),Qe(e))&&t.limitType===e.limitType}function Vu(t){return`${qr(Qe(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${Rg(Qe(t))}; limitType=${t.limitType})`}function zr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):_.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ca(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,on(n),s)||n.endAt&&!function(i,r,o){const a=ca(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,on(n),s))}(t,e)}function Fu(t){return(e,n)=>{let s=!1;for(const i of on(t)){const r=Hg(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Hg(t,e,n){const s=t.field.isKeyField()?_.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Et(a,c):S()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(e)?"-0":e}}function Bu(t){return{integerValue:""+t}}function Kg(t,e){return kg(e)?Bu(e):$u(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this._=void 0}}function zg(t,e,n){return t instanceof gs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof an?qu(t,e):t instanceof cn?Hu(t,e):function(s,i){const r=ju(s,i),o=la(r)+la(s.k);return Vi(r)&&Vi(s.k)?Bu(o):$u(s.O,o)}(t,e)}function Gg(t,e,n){return t instanceof an?qu(t,e):t instanceof cn?Hu(t,e):n}function ju(t,e){return t instanceof ms?Vi(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class gs extends qs{}class an extends qs{constructor(e){super(),this.elements=e}}function qu(t,e){const n=Ku(e);for(const s of t.elements)n.some(i=>fe(i,s))||n.push(s);return{arrayValue:{values:n}}}class cn extends qs{constructor(e){super(),this.elements=e}}function Hu(t,e){let n=Ku(e);for(const s of t.elements)n=n.filter(i=>!fe(i,s));return{arrayValue:{values:n}}}class ms extends qs{constructor(e,n){super(),this.O=e,this.k=n}}function la(t){return U(t.integerValue||t.doubleValue)}function Ku(t){return jr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof an&&s instanceof an||n instanceof cn&&s instanceof cn?vt(n.elements,s.elements,fe):n instanceof ms&&s instanceof ms?fe(n.k,s.k):n instanceof gs&&s instanceof gs}(t.transform,e.transform)}class Xg{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hs{}function Jg(t,e,n){t instanceof Ks?function(s,i,r){const o=s.value.clone(),a=fa(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dt?function(s,i,r){if(!Gn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=fa(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(zu(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ji(t,e,n){t instanceof Ks?function(s,i,r){if(!Gn(s.precondition,i))return;const o=s.value.clone(),a=pa(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(da(i),o).setHasLocalMutations()}(t,e,n):t instanceof Dt?function(s,i,r){if(!Gn(s.precondition,i))return;const o=pa(s.fieldTransforms,r,i),a=i.data;a.setAll(zu(s)),a.setAll(o),i.convertToFoundDocument(da(i),a).setHasLocalMutations()}(t,e,n):function(s,i){Gn(s.precondition,i)&&i.convertToNoDocument(A.min())}(t,e)}function Yg(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ju(s.transform,i||null);r!=null&&(n==null&&(n=re.empty()),n.set(s.field,r))}return n||null}function ha(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vt(n,s,(i,r)=>Wg(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function da(t){return t.isFoundDocument()?t.version:A.min()}class Ks extends Hs{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Dt extends Hs{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function zu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fa(t,e,n){const s=new Map;D(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Gg(o,a,n[i]))}return s}function pa(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,zg(r,o,e))}return s}class Qg extends Hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Zg extends Hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,k;function tm(t){switch(t){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Gu(t){if(t===void 0)return Pe("GRPC error has no .code"),f.UNKNOWN;switch(t){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(k=x||(x={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.comparator=e,this.root=n||q.EMPTY}insert(e,n){return new j(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(e){return new j(this.comparator,this.root.remove(e,this.comparator).copy(null,null,q.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fn(this.root,e,this.comparator,!0)}}class Fn{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class q{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:q.RED,this.left=i!=null?i:q.EMPTY,this.right=r!=null?r:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new q(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return q.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,e,n,s,i){return this}insert(t,e,n){return new q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.comparator=e,this.data=new j(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ga(this.data.getIterator())}getIteratorFrom(e){return new ga(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof z)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new z(this.comparator);return n.data=e,n}}class ga{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new j(_.comparator);function Ze(){return nm}const sm=new j(_.comparator);function qi(){return sm}const im=new j(_.comparator),rm=new z(_.comparator);function O(...t){let e=rm;for(const n of t)e=e.add(n);return e}const om=new z(R);function Wu(){return om}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,An.createSynthesizedTargetChangeForCurrentChange(e,n)),new zs(A.min(),s,Wu(),Ze(),O())}}class An{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new An(G.EMPTY_BYTE_STRING,n,O(),O(),O())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,s,i){this.M=e,this.removedTargetIds=n,this.key=s,this.$=i}}class Xu{constructor(e,n){this.targetId=e,this.F=n}}class Ju{constructor(e,n,s=G.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ma{constructor(){this.B=0,this.L=va(),this.U=G.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=O(),n=O(),s=O();return this.L.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:S()}}),new An(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=va()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class am{constructor(e){this.nt=e,this.st=new Map,this.it=Ze(),this.rt=ya(),this.ot=new z(R)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:S()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,s=e.F.count,i=this.wt(n);if(i){const r=i.target;if(Fi(r))if(s===0){const o=new _(r.path);this.at(n,o,J.newNoDocument(o,A.min()))}else D(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Fi(a.target)){const c=new _(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,J.newNoDocument(c,e))}r.j&&(n.set(o,r.H()),r.J())}});let s=O();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(e));const i=new zs(e,n,this.ot,this.it,s);return this.it=Ze(),this.rt=ya(),this.ot=new z(R),i}ut(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,s){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ma,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new z(R),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new ma),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function ya(){return new j(_.comparator)}function va(){return new j(_.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),um=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class lm{constructor(e,n){this.databaseId=e,this.N=n}}function ys(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yu(t,e){return t.N?e.toBase64():e.toUint8Array()}function hm(t,e){return ys(t,e.toTimestamp())}function ve(t){return D(!!t),A.fromTimestamp(function(e){const n=Me(e);return new oe(n.seconds,n.nanos)}(t))}function Gr(t,e){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Qu(t){const e=M.fromString(t);return D(tl(e)),e}function Hi(t,e){return Gr(t.databaseId,e.path)}function yi(t,e){const n=Qu(e);if(n.get(1)!==t.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _(Zu(n))}function Ki(t,e){return Gr(t.databaseId,e)}function dm(t){const e=Qu(t);return e.length===4?M.emptyPath():Zu(e)}function zi(t){return new M(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zu(t){return D(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wa(t,e,n){return{name:Hi(t,e),fields:n.value.mapValue.fields}}function fm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.N?(D(u===void 0||typeof u=="string"),G.fromBase64String(u||"")):(D(u===void 0||u instanceof Uint8Array),G.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Gu(c.code);return new w(u,c.message||"")}(o);n=new Ju(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=yi(t,s.document.name),r=ve(s.document.updateTime),o=new re({mapValue:{fields:s.document.fields}}),a=J.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Wn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=yi(t,s.document),r=s.readTime?ve(s.readTime):A.min(),o=J.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Wn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=yi(t,s.document),r=s.removedTargetIds||[];n=new Wn([],r,i,null)}else{if(!("filter"in e))return S();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new em(i),o=s.targetId;n=new Xu(o,r)}}return n}function pm(t,e){let n;if(e instanceof Ks)n={update:wa(t,e.key,e.value)};else if(e instanceof Qg)n={delete:Hi(t,e.key)};else if(e instanceof Dt)n={update:wa(t,e.key,e.data),updateMask:Sm(e.fieldMask)};else{if(!(e instanceof Zg))return S();n={verify:Hi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof gs)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof an)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cn)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ms)return{fieldPath:r.field.canonicalString(),increment:o.k};throw S()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(t,e.precondition)),n}function gm(t,e){return t&&t.length>0?(D(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ve(s.updateTime):ve(i);return r.isEqual(A.min())&&(r=ve(i)),new Xg(r,s.transformResults||[])}(n,e))):[]}function mm(t,e){return{documents:[Ki(t,e.path)]}}function ym(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ki(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ki(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(oa(h.value))return{unaryFilter:{field:at(h.field),op:"IS_NAN"}};if(ra(h.value))return{unaryFilter:{field:at(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(oa(h.value))return{unaryFilter:{field:at(h.field),op:"IS_NOT_NAN"}};if(ra(h.value))return{unaryFilter:{field:at(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:at(h.field),op:Em(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:at(l.field),direction:_m(l.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.N||Rt(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function vm(t){let e=dm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){D(s===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];n.where&&(r=el(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Kt(ut(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Rt(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ps(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ps(d,h)}(n.endAt)),Fg(e,i,o,r,a,"F",c,u)}function wm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function el(t){return t?t.unaryFilter!==void 0?[Tm(t)]:t.fieldFilter!==void 0?[Im(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>el(e)).reduce((e,n)=>e.concat(n)):S():[]}function _m(t){return cm[t]}function Em(t){return um[t]}function at(t){return{fieldPath:t.canonicalString()}}function ut(t){return ne.fromServerFormat(t.fieldPath)}function Im(t){return se.create(ut(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}function Tm(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ut(t.unaryFilter.field);return se.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ut(t.unaryFilter.field);return se.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ut(t.unaryFilter.field);return se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ut(t.unaryFilter.field);return se.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}function Sm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Am{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,s)=>{n(e)})}static reject(e){return new p((n,s)=>{s(e)})}static waitFor(e){return new p((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=p.resolve(!1);for(const s of e)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Cn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Jg(r,e,s[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&ji(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&ji(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(A.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),O())}isEqual(e){return this.batchId===e.batchId&&vt(this.mutations,e.mutations,(n,s)=>ha(n,s))&&vt(this.baseMutations,e.baseMutations,(n,s)=>ha(n,s))}}class Wr{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){D(e.mutations.length===s.length);let i=im;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Wr(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,s,i,r=A.min(),o=A.min(),a=G.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new He(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.Ht=e}}function Rm(t){const e=vm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.xe=new Om}addToCollectionParentIndex(e,n){return this.xe.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n,s){return p.resolve(O())}getFieldIndex(e,n){return p.resolve(null)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}updateCollectionGroup(e,n,s){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class Om{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new z(M.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new z(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new It(0)}static Je(){return new It(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==bm)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(e){it(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Pu(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.changes=new Nn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,J.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,s){this.qn=e,this.gs=n,this.indexManager=s}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.ps(e,n,s))}ps(e,n,s){return this.qn.getEntry(e,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Is(e,n){e.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Es(e,n){return this.qn.getEntries(e,n).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Is(n,s))}As(e,n,s){return function(i){return _.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(e,n.path):jg(n)?this.Ps(e,n,s):this.bs(e,n,s)}Rs(e,n){return this.ys(e,new _(n)).next(s=>{let i=qi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ps(e,n,s){const i=n.collectionGroup;let r=qi();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Bs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.bs(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}bs(e,n,s){let i;return this.qn.getAll(e,n.path,s).next(r=>(i=r,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let u=i.get(c);u==null&&(u=J.newInvalidDocument(c),i=i.insert(c,u)),ji(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{zr(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.vs=s,this.Vs=i}static Ss(e,n){let s=O(),i=O();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Xr(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{Ds(e){this.Cs=e}As(e,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(A.min())?this.Ns(e,n):this.Cs.Es(e,i).next(r=>{const o=this.xs(n,r);return(zn(n)||$i(n))&&this.ks(n.limitType,o,i,s)?this.Ns(e,n):(ta()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bi(n)),this.Cs.As(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let s=new z(Fu(e));return n.forEach((i,r)=>{zr(e,r)&&(s=s.add(r))}),s}ks(e,n,s,i){if(s.size!==n.size)return!0;const r=e==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ns(e,n){return ta()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.Cs.As(e,n,A.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n,s,i){this.persistence=e,this.Os=n,this.O=i,this.Ms=new j(R),this.$s=new Nn(r=>qr(r),Hr),this.Fs=A.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new Mm(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Um(t,e,n,s){return new xm(t,e,n,s)}async function nl(t,e){const n=T(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.gs.getAllMutationBatches(s).next(r=>(i=r,n.Ls(e),n.gs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=O();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.Us.Es(s,c).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Vm(t,e){const n=T(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(m=>{const b=c.docVersions.get(g);D(b!==null),m.version.compareTo(b)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.gs.removeMutationBatch(a,l))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.gs.performConsistencyCheck(s)).next(()=>n.Us.Es(s,i))})}function sl(t){const e=T(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function Fm(t,e){const n=T(t),s=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(n.Un.removeMatchingKeys(r,u.removedDocuments,l).next(()=>n.Un.addMatchingKeys(r,u.addedDocuments,l)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(G.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(l,d),function(g,m,b){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,d,u)&&a.push(n.Un.updateTargetData(r,d))});let c=Ze();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push($m(r,o,e.documentUpdates).next(u=>{c=u})),!s.isEqual(A.min())){const u=n.Un.getLastRemoteSnapshotVersion(r).next(l=>n.Un.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.Us.Ts(r,c)).next(()=>c)}).then(r=>(n.Ms=i,r))}function $m(t,e,n){let s=O();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let r=Ze();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(A.min())?(e.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),r=r.insert(o,a)):v("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function Bm(t,e){const n=T(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(s,e)))}function jm(t,e){const n=T(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Un.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):n.Un.allocateTargetId(s).next(o=>(i=new He(e,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(e,s.targetId)),s})}async function Gi(t,e,n){const s=T(t),i=s.Ms.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(i.target)}function _a(t,e,n){const s=T(t);let i=A.min(),r=O();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=T(a),h=l.$s.get(u);return h!==void 0?p.resolve(l.Ms.get(h)):l.Un.getTargetData(c,u)}(s,o,Qe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Os.As(o,e,n?i:A.min(),n?r:O())).next(a=>({documents:a,Ks:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return p.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:ve(s.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(s){return{name:s.name,query:Rm(s.bundledQuery),readTime:ve(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.overlays=new j(_.comparator),this.Hs=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach(i=>{this.Yt(e,n,i)}),p.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(s)),p.resolve()}getOverlaysForCollection(e,n,s){const i=new Map,r=n.length+1,o=new _(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new j((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=new Map,r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=new Map,c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(l,u)),!(a.size>=i)););return p.resolve(a)}Yt(e,n,s){if(s===null)return;const i=this.overlays.get(s.key);i!==null&&this.Hs.get(i.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new km(n,s));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.Js=new z(F.Ys),this.Xs=new z(F.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const s=new F(e,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ei(new F(e,n))}ni(e,n){e.forEach(s=>this.removeReference(s,n))}si(e){const n=new _(new M([])),s=new F(n,e),i=new F(n,e+1),r=[];return this.Xs.forEachInRange([s,i],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new _(new M([])),s=new F(n,e),i=new F(n,e+1);let r=O();return this.Xs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new F(e,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class F{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return _.comparator(e.key,n.key)||R(e.oi,n.oi)}static Zs(e,n){return R(e.oi,n.oi)||_.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new z(F.Ys)}checkEmpty(e){return p.resolve(this.gs.length===0)}addMutationBatch(e,n,s,i){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Cm(r,n,s,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new F(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.hi(s),r=i<0?0:i;return p.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return p.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([s,i],o=>{const a=this.ai(o.oi);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new z(R);return n.forEach(i=>{const r=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{s=s.add(a.oi)})}),p.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;_.isDocumentKey(r)||(r=r.child(""));const o=new F(new _(r),0);let a=new z(R);return this.ui.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.oi)),!0)},o),p.resolve(this.li(a))}li(e){const n=[];return e.forEach(s=>{const i=this.ai(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){D(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return p.forEach(n.mutations,i=>{const r=new F(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,n){const s=new F(n,0),i=this.ui.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.gs.length,p.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.di=e,this.docs=new j(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():J.newInvalidDocument(n))}getEntries(e,n){let s=Ze();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():J.newInvalidDocument(i))}),p.resolve(s)}getAll(e,n,s){let i=Ze();const r=new _(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}_i(e,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Gm(this)}getSize(e){return p.resolve(this.size)}}class Gm extends Pm{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(e,i)):this.Tn.removeEntry(s)}),p.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.persistence=e,this.wi=new Nn(n=>qr(n),Hr),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.mi=0,this.gi=new Jr,this.targetCount=0,this.yi=It.He()}forEachTarget(e,n){return this.wi.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),p.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new It(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.Ze(n),p.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const s=this.wi.get(n)||null;return p.resolve(s)}addMatchingKeys(e,n,s){return this.gi.ti(n,s),p.resolve()}removeMatchingKeys(e,n,s){this.gi.ni(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),p.resolve()}getMatchingKeysForTargetId(e,n){const s=this.gi.ri(n);return p.resolve(s)}containsKey(e,n){return p.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.pi={},this.overlays={},this.Nn=new Br(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new Wm(this),this.indexManager=new Dm,this.qn=function(s){return new zm(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Nm(n),this.Kn=new qm(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.pi[e.toKey()];return s||(s=new Km(n,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,s){v("MemoryPersistence","Starting transaction:",e);const i=new Jm(this.Nn.next());return this.referenceDelegate.Ei(),s(i).next(r=>this.referenceDelegate.Ti(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ai(e,n){return p.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,n)))}}class Jm extends Am{constructor(e){super(),this.currentSequenceNumber=e}}class Yr{constructor(e){this.persistence=e,this.Ri=new Jr,this.Pi=null}static bi(e){return new Yr(e)}get vi(){if(this.Pi)return this.Pi;throw S()}addReference(e,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),p.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),p.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.vi.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.vi,s=>{const i=_.fromPath(s);return this.Vi(e,i).next(r=>{r||n.removeEntry(i,A.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return p.or([()=>p.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ea{constructor(){this.activeTargetIds=Wu()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ym{constructor(){this._r=new Ea,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,s){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Ea,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,s,i,r){const o=this.$r(e,n);v("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,i,r),this.Br(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw na("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,n,s,i,r){return this.Mr(e,n,s,i,r)}Fr(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Nt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}$r(e,n){const s=Zm[e];return`${this.kr}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,s,i){return new Promise((r,o)=>{const a=new mg;a.listenOnce(fg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case mi.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case mi.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case mi.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(m)>=0?m:f.UNKNOWN}(h.status);o(new w(d,h.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}Ur(e,n,s){const i=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=hg(),o=dg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new gg({})),this.Fr(a.initMessageHeaders,n,s),Xa()||Ya()||fh()||Qa()||ph()||Ja()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let l=!1,h=!1;const d=new ey({Ar:m=>{h?v("Connection","Not sending because WebChannel is closed:",m):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",m),u.send(m))},Rr:()=>u.close()}),g=(m,b,C)=>{m.listen(b,L=>{try{C(L)}catch(X){setTimeout(()=>{throw X},0)}})};return g(u,Vn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),g(u,Vn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.Cr())}),g(u,Vn.EventType.ERROR,m=>{h||(h=!0,na("Connection","WebChannel transport errored:",m),d.Cr(new w(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,Vn.EventType.MESSAGE,m=>{var b;if(!h){const C=m.data[0];D(!!C);const L=C,X=L.error||((b=L[0])===null||b===void 0?void 0:b.error);if(X){v("Connection","WebChannel received error:",X);const ue=X.status;let Ee=function(Mt){const Lt=x[Mt];if(Lt!==void 0)return Gu(Lt)}(ue),Pt=X.message;Ee===void 0&&(Ee=f.INTERNAL,Pt="Unknown error status: "+ue+" with message "+X.message),h=!0,d.Cr(new w(Ee,Pt)),u.close()}else v("Connection","WebChannel received:",C),d.Nr(C)}}),g(o,pg.STAT_EVENT,m=>{m.stat===Zo.PROXY?v("Connection","Detected buffering proxy"):m.stat===Zo.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Dr()},0),d}}function vi(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return new lm(t,!0)}class il{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Sn=e,this.timerId=n,this.qr=s,this.Kr=i,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,s,i,r,o,a,c){this.Sn=e,this.Xr=s,this.Zr=i,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new il(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Pe(n.toString()),Pe("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.no===n&&this.po(s,i)},s=>{e(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(i)})})}po(e,n){const s=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{s(()=>this.Io(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ny extends rl{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.O=r}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=fm(this.O,e),s=function(i){if(!("targetChange"in i))return A.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?A.min():r.readTime?ve(r.readTime):A.min()}(e);return this.listener.To(n,s)}Ao(e){const n={};n.database=zi(this.O),n.addTarget=function(i,r){let o;const a=r.target;return o=Fi(a)?{documents:mm(i,a)}:{query:ym(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Yu(i,r.resumeToken):r.snapshotVersion.compareTo(A.min())>0&&(o.readTime=ys(i,r.snapshotVersion.toTimestamp())),o}(this.O,e);const s=wm(this.O,e);s&&(n.labels=s),this.fo(n)}Ro(e){const n={};n.database=zi(this.O),n.removeTarget=e,this.fo(n)}}class sy extends rl{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.O=r,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=gm(e.writeResults,e.commitTime),s=ve(e.commitTime);return this.listener.Vo(s,n)}return D(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=zi(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>pm(this.O,s))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=s,this.O=i,this.Co=!1}No(){if(this.Co)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Mr(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}Lr(e,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Lr(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class ry{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Pe(n),this.Oo=!1):v("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{s.enqueueAndForget(async()=>{rt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=T(a);c.Ko.add(4),await Rn(c),c.Qo.set("Unknown"),c.Ko.delete(4),await Ws(c)}(this))})}),this.Qo=new ry(s,i)}}async function Ws(t){if(rt(t))for(const e of t.Go)await e(!0)}async function Rn(t){for(const e of t.Go)await e(!1)}function ol(t,e){const n=T(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),eo(n)?Zr(n):Ot(n).co()&&Qr(n,e))}function al(t,e){const n=T(t),s=Ot(n);n.qo.delete(e),s.co()&&cl(n,e),n.qo.size===0&&(s.co()?s.ho():rt(n)&&n.Qo.set("Unknown"))}function Qr(t,e){t.Wo.Z(e.targetId),Ot(t).Ao(e)}function cl(t,e){t.Wo.Z(e),Ot(t).Ro(e)}function Zr(t){t.Wo=new am({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),Ot(t).start(),t.Qo.Mo()}function eo(t){return rt(t)&&!Ot(t).oo()&&t.qo.size>0}function rt(t){return T(t).Ko.size===0}function ul(t){t.Wo=void 0}async function ay(t){t.qo.forEach((e,n)=>{Qr(t,e)})}async function cy(t,e){ul(t),eo(t)?(t.Qo.Bo(e),Zr(t)):t.Qo.set("Unknown")}async function uy(t,e,n){if(t.Qo.set("Online"),e instanceof Ju&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.qo.delete(o),s.Wo.removeTarget(o))}(t,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vs(t,s)}else if(e instanceof Wn?t.Wo.ct(e):e instanceof Xu?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(A.min()))try{const s=await sl(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Wo.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.qo.get(c);u&&i.qo.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.qo.get(a);if(!c)return;i.qo.set(a,c.withResumeToken(G.EMPTY_BYTE_STRING,c.snapshotVersion)),cl(i,a);const u=new He(c.target,a,1,c.sequenceNumber);Qr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await vs(t,s)}}async function vs(t,e,n){if(!Cn(e))throw e;t.Ko.add(1),await Rn(t),t.Qo.set("Offline"),n||(n=()=>sl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Ws(t)})}function ll(t,e){return e().catch(n=>vs(t,n,e))}async function Xs(t){const e=T(t),n=Le(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;ly(e);)try{const i=await Bm(e.localStore,s);if(i===null){e.Uo.length===0&&n.ho();break}s=i.batchId,hy(e,i)}catch(i){await vs(e,i)}hl(e)&&dl(e)}function ly(t){return rt(t)&&t.Uo.length<10}function hy(t,e){t.Uo.push(e);const n=Le(t);n.co()&&n.bo&&n.vo(e.mutations)}function hl(t){return rt(t)&&!Le(t).oo()&&t.Uo.length>0}function dl(t){Le(t).start()}async function dy(t){Le(t).Do()}async function fy(t){const e=Le(t);for(const n of t.Uo)e.vo(n.mutations)}async function py(t,e,n){const s=t.Uo.shift(),i=Wr.from(s,e,n);await ll(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xs(t)}async function gy(t,e){e&&Le(t).bo&&await async function(n,s){if(i=s.code,tm(i)&&i!==f.ABORTED){const r=n.Uo.shift();Le(n).ao(),await ll(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Xs(n)}var i}(t,e),hl(t)&&dl(t)}async function Ta(t,e){const n=T(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=rt(n);n.Ko.add(3),await Rn(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Ws(n)}async function my(t,e){const n=T(t);e?(n.Ko.delete(2),await Ws(n)):e||(n.Ko.add(2),await Rn(n),n.Qo.set("Unknown"))}function Ot(t){return t.zo||(t.zo=function(e,n,s){const i=T(e);return i.No(),new ny(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(t.datastore,t.asyncQueue,{Pr:ay.bind(null,t),vr:cy.bind(null,t),To:uy.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),eo(t)?Zr(t):t.Qo.set("Unknown")):(await t.zo.stop(),ul(t))})),t.zo}function Le(t){return t.Ho||(t.Ho=function(e,n,s){const i=T(e);return i.No(),new sy(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(t.datastore,t.asyncQueue,{Pr:dy.bind(null,t),vr:gy.bind(null,t),So:fy.bind(null,t),Vo:py.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Xs(t)):(await t.Ho.stop(),t.Uo.length>0&&(v("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new to(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function no(t,e){if(Pe("AsyncQueue",`${e}: ${t}`),Cn(t))return new w(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||_.comparator(n.key,s.key):(n,s)=>_.comparator(n.key,s.key),this.keyedMap=qi(),this.sortedSet=new j(this.comparator)}static emptySet(e){return new pt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new pt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.Jo=new j(_.comparator)}track(e){const n=e.doc.key,s=this.Jo.get(n);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(n):e.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):S():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,s)=>{e.push(s)}),e}}class Tt{constructor(e,n,s,i,r,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Tt(e,n,pt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&js(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.Xo=void 0,this.listeners=[]}}class vy{constructor(){this.queries=new Nn(e=>Vu(e),js),this.onlineState="Unknown",this.Zo=new Set}}async function wy(t,e){const n=T(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new yy),i)try{r.Xo=await n.onListen(s)}catch(o){const a=no(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.tc(n.onlineState),r.Xo&&e.ec(r.Xo)&&so(n)}async function _y(t,e){const n=T(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ey(t,e){const n=T(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ec(i)&&(s=!0);o.Xo=i}}s&&so(n)}function Iy(t,e,n){const s=T(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function so(t){t.Zo.forEach(e=>{e.next()})}class Ty{constructor(e,n,s){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Tt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=Tt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.key=e}}class pl{constructor(e){this.key=e}}class Sy{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=O(),this.mutatedKeys=O(),this.mc=Fu(e),this.gc=new pt(this.mc)}get yc(){return this.dc}Ic(e,n){const s=n?n.Ec:new Sa,i=n?n.gc:this.gc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=zn(this.query)&&i.size===this.query.limit?i.last():null,u=$i(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),g=zr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;d&&g?d.data.isEqual(g.data)?m!==b&&(s.track({type:3,doc:g}),C=!0):this.Tc(d,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.mc(g,c)>0||u&&this.mc(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),C=!0):d&&!g&&(s.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),r=b?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),zn(this.query)||$i(this.query))for(;o.size>this.query.limit;){const l=zn(this.query)?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{gc:o,Ec:s,ks:a,mutatedKeys:r}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const r=e.Ec.Yo();r.sort((u,l)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return g(h)-g(d)}(u.type,l.type)||this.mc(u.doc,l.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,r.length!==0||c?{snapshot:new Tt(this.query,e.gc,i,r,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Sa,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=O(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return e.forEach(s=>{this.wc.has(s)||n.push(new pl(s))}),this.wc.forEach(s=>{e.has(s)||n.push(new fl(s))}),n}vc(e){this.dc=e.Ks,this.wc=O();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return Tt.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class by{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ay{constructor(e){this.key=e,this.Sc=!1}}class Cy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new Nn(a=>Vu(a),js),this.Nc=new Map,this.xc=new Set,this.kc=new j(_.comparator),this.Oc=new Map,this.Mc=new Jr,this.$c={},this.Fc=new Map,this.Bc=It.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function ky(t,e){const n=Vy(t);let s,i;const r=n.Cc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Vc();else{const o=await jm(n.localStore,Qe(e));n.isPrimaryClient&&ol(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ny(n,e,s,a==="current")}return i}async function Ny(t,e,n,s){t.Uc=(l,h,d)=>async function(g,m,b,C){let L=m.view.Ic(b);L.ks&&(L=await _a(g.localStore,m.query,!1).then(({documents:Ee})=>m.view.Ic(Ee,L)));const X=C&&C.targetChanges.get(m.targetId),ue=m.view.applyChanges(L,g.isPrimaryClient,X);return Aa(g,m.targetId,ue.Pc),ue.snapshot}(t,l,h,d);const i=await _a(t.localStore,e,!0),r=new Sy(e,i.Ks),o=r.Ic(i.documents),a=An.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=r.applyChanges(o,t.isPrimaryClient,a);Aa(t,n,c.Pc);const u=new by(e,n,r);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),c.snapshot}async function Ry(t,e){const n=T(t),s=n.Cc.get(e),i=n.Nc.get(s.targetId);if(i.length>1)return n.Nc.set(s.targetId,i.filter(r=>!js(r,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Gi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),al(n.remoteStore,s.targetId),Wi(n,s.targetId)}).catch(kn)):(Wi(n,s.targetId),await Gi(n.localStore,s.targetId,!0))}async function Dy(t,e,n){const s=Fy(t);try{const i=await function(r,o){const a=T(r),c=oe.now(),u=o.reduce((h,d)=>h.add(d.key),O());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Us.Es(h,u).next(d=>{l=d;const g=[];for(const m of o){const b=Yg(m,l.get(m.key));b!=null&&g.push(new Dt(m.key,b,xu(b.value.mapValue),Re.exists(!0)))}return a.gs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.$c[r.currentUser.toKey()];c||(c=new j(R)),c=c.insert(o,a),r.$c[r.currentUser.toKey()]=c}(s,i.batchId,n),await Dn(s,i.changes),await Xs(s.remoteStore)}catch(i){const r=no(i,"Failed to persist write");n.reject(r)}}async function gl(t,e){const n=T(t);try{const s=await Fm(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Oc.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?D(o.Sc):i.removedDocuments.size>0&&(D(o.Sc),o.Sc=!1))}),await Dn(n,s,e)}catch(s){await kn(s)}}function ba(t,e,n){const s=T(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Cc.forEach((r,o)=>{const a=o.view.tc(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=T(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.tc(o)&&(c=!0)}),c&&so(a)}(s.eventManager,e),i.length&&s.Dc.To(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Oy(t,e,n){const s=T(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Oc.get(e),r=i&&i.key;if(r){let o=new j(_.comparator);o=o.insert(r,J.newNoDocument(r,A.min()));const a=O().add(r),c=new zs(A.min(),new Map,new z(R),o,a);await gl(s,c),s.kc=s.kc.remove(r),s.Oc.delete(e),io(s)}else await Gi(s.localStore,e,!1).then(()=>Wi(s,e,n)).catch(kn)}async function Py(t,e){const n=T(t),s=e.batch.batchId;try{const i=await Vm(n.localStore,e);yl(n,s,null),ml(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Dn(n,i)}catch(i){await kn(i)}}async function My(t,e,n){const s=T(t);try{const i=await function(r,o){const a=T(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.gs.lookupMutationBatch(c,o).next(l=>(D(l!==null),u=l.keys(),a.gs.removeMutationBatch(c,l))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,u))})}(s.localStore,e);yl(s,e,n),ml(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Dn(s,i)}catch(i){await kn(i)}}function ml(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function yl(t,e,n){const s=T(t);let i=s.$c[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.$c[s.currentUser.toKey()]=i}}function Wi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Nc.get(e))t.Cc.delete(s),n&&t.Dc.qc(s,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(s=>{t.Mc.containsKey(s)||vl(t,s)})}function vl(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(al(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),io(t))}function Aa(t,e,n){for(const s of n)s instanceof fl?(t.Mc.addReference(s.key,e),Ly(t,s)):s instanceof pl?(v("SyncEngine","Document no longer in limbo: "+s.key),t.Mc.removeReference(s.key,e),t.Mc.containsKey(s.key)||vl(t,s.key)):S()}function Ly(t,e){const n=e.key,s=n.path.canonicalString();t.kc.get(n)||t.xc.has(s)||(v("SyncEngine","New document in limbo: "+n),t.xc.add(s),io(t))}function io(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new _(M.fromString(e)),s=t.Bc.next();t.Oc.set(s,new Ay(n)),t.kc=t.kc.insert(n,s),ol(t.remoteStore,new He(Qe(Kr(n.path)),s,2,Br.A))}}async function Dn(t,e,n){const s=T(t),i=[],r=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=Xr.Ss(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.Dc.To(i),await async function(a,c){const u=T(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.vs,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Vs,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Cn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ms.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(h,m)}}}(s.localStore,r))}async function xy(t,e){const n=T(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await nl(n.localStore,e);n.currentUser=e,function(i,r){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dn(n,s.qs)}}function Uy(t,e){const n=T(t),s=n.Oc.get(e);if(s&&s.Sc)return O().add(s.key);{let i=O();const r=n.Nc.get(e);if(!r)return i;for(const o of r){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function Vy(t){const e=T(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Oy.bind(null,e),e.Dc.To=Ey.bind(null,e.eventManager),e.Dc.qc=Iy.bind(null,e.eventManager),e}function Fy(t){const e=T(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Py.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=My.bind(null,e),e}class $y{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Gs(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Um(this.persistence,new Lm,e.initialUser,this.O)}jc(e){return new Xm(Yr.bi,this.O)}Gc(e){return new Ym}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class By{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ba(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xy.bind(null,this.syncEngine),await my(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vy}createDatastore(e){const n=Gs(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ty(i));var i;return function(r,o,a,c){return new iy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ba(this.syncEngine,a,0),o=Ia.Vt()?new Ia:new Qm,new oy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,u){const l=new Cy(s,i,r,o,a,c);return u&&(l.Lc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=T(e);v("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await Rn(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=te.UNAUTHENTICATED,this.clientId=Ou.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=no(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hy(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await nl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ky(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zy(t);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Ta(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ta(e.remoteStore,r)),t.onlineComponents=e}async function zy(t){return t.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Hy(t,new $y)),t.offlineComponents}async function wl(t){return t.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Ky(t,new By)),t.onlineComponents}function Gy(t){return wl(t).then(e=>e.syncEngine)}async function Wy(t){const e=await wl(t),n=e.eventManager;return n.onListen=ky.bind(null,e.syncEngine),n.onUnlisten=Ry.bind(null,e.syncEngine),n}function Xy(t,e,n={}){const s=new Ne;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new jy({next:h=>{r.enqueueAndForget(()=>_y(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ty(Kr(o.path),u,{includeMetadataChanges:!0,uc:!0});return wy(i,l)}(await Wy(t),t.asyncQueue,e,n,s)),s.promise}const Ca=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jy(t,e,n,s){if(e===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ka(t){if(!_.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Na(t){if(_.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ro(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":S()}function et(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ro(t);throw new w(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Jy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1,e instanceof _t?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _t(i.options.projectId)}(e))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vg;switch(n.type){case"gapi":const s=n.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Eg(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ca.get(e);n&&(v("ComponentProvider","Removing Datastore"),Ca.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new De(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}}class ao{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ao(this.firestore,e,this._query)}}class De extends ao{constructor(e,n,s){super(e,n,Kr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new _(e))}withConverter(e){return new De(this.firestore,e,this._path)}}function Xv(t,e,...n){if(t=ae(t),_l("collection","path",e),t instanceof oo){const s=M.fromString(e,...n);return Na(s),new De(t,null,s)}{if(!(t instanceof ie||t instanceof De))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(M.fromString(e,...n));return Na(s),new De(t.firestore,null,s)}}function Yy(t,e,...n){if(t=ae(t),arguments.length===1&&(e=Ou.R()),_l("doc","path",e),t instanceof oo){const s=M.fromString(e,...n);return ka(s),new ie(t,null,new _(s))}{if(!(t instanceof ie||t instanceof De))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(M.fromString(e,...n));return ka(s),new ie(t.firestore,t instanceof De?t.converter:null,new _(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new il(this,"async_queue_retry"),this.yu=()=>{const n=vi();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=vi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=vi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new Ne;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!Cn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Pe("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const i=to.createAndSchedule(this,e,n,s,r=>this.Tu(r));return this.du.push(i),i}pu(){this._u&&S()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class On extends oo{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new Qy,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Il(this),this._firestoreClient.terminate()}}function Jv(t=nc()){return ir(t,"firestore").getImmediate()}function El(t){return t._firestoreClient||Il(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Il(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Cg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new qy(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(G.fromBase64String(e))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new St(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=/^__.*__$/;class ev{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ks(e,this.data,n,this.fieldTransforms)}}class Tl{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Dt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class lo{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.O=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:s,Cu:!1});return i.Nu(e),i}xu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:s,Cu:!1});return i.vu(),i}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return ws(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Sl(this.Vu)&&Zy.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class tv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=s||Gs(e)}Fu(e,n,s,i=!1){return new lo({Vu:e,methodName:n,$u:s,path:ne.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function ho(t){const e=t._freezeSettings(),n=Gs(t._databaseId);return new tv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bl(t,e,n,s,i,r={}){const o=t.Fu(r.merge||r.mergeFields?2:0,e,n,i);fo("Data must be an object, but it was:",o,s);const a=Al(s,o);let c,u;if(r.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=Xi(e,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kl(l,d)||l.push(d)}c=new nn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new ev(new re(a),c,u)}class Ys extends co{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ys}}function nv(t,e,n,s){const i=t.Fu(1,e,n);fo("Data must be an object, but it was:",i,s);const r=[],o=re.empty();it(s,(c,u)=>{const l=po(e,c,n);u=ae(u);const h=i.xu(l);if(u instanceof Ys)r.push(l);else{const d=Qs(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new nn(r);return new Tl(o,a,i.fieldTransforms)}function sv(t,e,n,s,i,r){const o=t.Fu(1,e,n),a=[Xi(e,s,n)],c=[i];if(r.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Xi(e,r[d])),c.push(r[d+1]);const u=[],l=re.empty();for(let d=a.length-1;d>=0;--d)if(!kl(u,a[d])){const g=a[d];let m=c[d];m=ae(m);const b=o.xu(g);if(m instanceof Ys)u.push(g);else{const C=Qs(m,b);C!=null&&(u.push(g),l.set(g,C))}}const h=new nn(u);return new Tl(l,h,o.fieldTransforms)}function Qs(t,e){if(Cl(t=ae(t)))return fo("Unsupported field value:",e,t),Al(t,e);if(t instanceof co)return function(n,s){if(!Sl(s.Vu))throw s.Ou(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Qs(o,s.ku(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kg(s.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=oe.fromDate(n);return{timestampValue:ys(s.O,i)}}if(n instanceof oe){const i=new oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ys(s.O,i)}}if(n instanceof uo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof St)return{bytesValue:Yu(s.O,n._byteString)};if(n instanceof ie){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ou(`Unsupported field value: ${ro(n)}`)}(t,e)}function Al(t,e){const n={};return Pu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):it(t,(s,i)=>{const r=Qs(i,e.Du(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Cl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof oe||t instanceof uo||t instanceof St||t instanceof ie||t instanceof co)}function fo(t,e,n){if(!Cl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ro(n);throw s==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+s)}}function Xi(t,e,n){if((e=ae(e))instanceof Js)return e._internalPath;if(typeof e=="string")return po(t,e);throw ws("Field path arguments must be of type string or ",t,!1,void 0,n)}const iv=new RegExp("[~\\*/\\[\\]]");function po(t,e,n){if(e.search(iv)>=0)throw ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Js(...e.split("."))._internalPath}catch{throw ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ws(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+t+c)}function kl(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rv extends Nl{data(){return super.data()}}function Rl(t,e){return typeof e=="string"?po(t,e):e instanceof Js?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dl extends Nl{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new av(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Rl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class av extends Dl{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{convertValue(e,n="none"){switch(Ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return U(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw S()}}convertObject(e,n){const s={};return it(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new uo(U(e.latitude),U(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Lu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(sn(e));default:return null}}convertTimestamp(e){const n=Me(e);return new oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=M.fromString(e);D(tl(s));const i=new _t(s.get(1),s.get(3)),r=new _(s.popFirst(5));return i.isEqual(n)||Pe(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){t=et(t,ie);const e=et(t.firestore,On);return Xy(El(e),t._key).then(n=>lv(e,t,n))}class uv extends cv{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,n)}}function Qv(t,e,n){t=et(t,ie);const s=et(t.firestore,On),i=Ol(t.converter,e,n);return go(s,[bl(ho(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function Zv(t,e,n,...s){t=et(t,ie);const i=et(t.firestore,On),r=ho(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof Js?sv(r,"updateDoc",t._key,e,n,s):nv(r,"updateDoc",t._key,e),go(i,[o.toMutation(t._key,Re.exists(!0))])}function ew(t,e){const n=et(t.firestore,On),s=Yy(t),i=Ol(t.converter,e);return go(n,[bl(ho(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Re.exists(!1))]).then(()=>s)}function go(t,e){return function(n,s){const i=new Ne;return n.asyncQueue.enqueueAndForget(async()=>Dy(await Gy(n),s,i)),i.promise}(El(t),e)}function lv(t,e,n){const s=n.docs.get(e._key),i=new uv(t);return new Dl(t,i,e._key,s,new ov(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Nt=n})(fn),gt(new Ke("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new On(i,new wg(n.getProvider("auth-internal")),new Tg(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),ke(ea,"3.4.5",t),ke(ea,"3.4.5","esm2017")})();function hv(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function tw(t){const e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}function Da(t){return Object.prototype.toString.call(t)==="[object Date]"}function Ji(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((i,r)=>Ji(t[r],i));return i=>s.map(r=>r(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Da(t)&&Da(e)){t=t.getTime(),e=e.getTime();const r=e-t;return o=>new Date(t+o*r)}const s=Object.keys(e),i={};return s.forEach(r=>{i[r]=Ji(t[r],e[r])}),r=>{const o={};return s.forEach(a=>{o[a]=i[a](r)}),o}}if(n==="number"){const s=e-t;return i=>t+i*s}throw new Error(`Cannot interpolate ${n} values`)}function nw(t,e={}){const n=uh(t);let s,i=t;function r(o,a){if(t==null)return n.set(t=o),Promise.resolve();i=o;let c=s,u=!1,{delay:l=0,duration:h=400,easing:d=Oa,interpolate:g=Ji}=wi(wi({},e),a);if(h===0)return c&&(c.abort(),c=null),n.set(t=i),Promise.resolve();const m=Ua()+l;let b;return s=Fa(C=>{if(C<m)return!0;u||(b=g(t,o),typeof h=="function"&&(h=h(t,o)),u=!0),c&&(c.abort(),c=null);const L=C-m;return L>h?(n.set(t=o),!1):(n.set(t=b(d(L/h))),!0)}),s.promise}return{set:r,update:(o,a)=>r(o(i,t),a),subscribe:n.subscribe}}function sw(t,{delay:e=0,duration:n=400,easing:s=hv,amount:i=5,opacity:r=0}={}){const o=getComputedStyle(t),a=+o.opacity,c=o.filter==="none"?"":o.filter,u=a*(1-r);return{delay:e,duration:n,easing:s,css:(l,h)=>`opacity: ${a-u*h}; filter: ${c} blur(${h*i}px);`}}export{Yv as $,$v as A,ah as B,wi as C,uh as D,Mv as E,pv as F,mv as G,yv as H,gv as I,Kl as J,Ce as K,Se as L,Gv as M,dv as N,Iv as O,un as P,fv as Q,nw as R,Hv as S,tw as T,vv as U,Kv as V,Wv as W,Jv as X,zv as Y,Co as Z,Yy as _,Gl as a,Zv as a0,Qv as a1,ew as a2,Xv as a3,Yn as a4,Cv as a5,Nv as a6,Rv as a7,Vv as a8,sw as a9,Tv as b,Sv as c,zl as d,Ba as e,kv as f,wv as g,Jl as h,qv as i,Av as j,_v as k,Ev as l,bv as m,Lv as n,Uv as o,xv as p,ih as q,Pv as r,Ll as s,Qi as t,Ov as u,Dv as v,Bv as w,jv as x,oh as y,Fv as z};
