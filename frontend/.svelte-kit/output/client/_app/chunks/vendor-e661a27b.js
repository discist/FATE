function Le(){}const dl=t=>t;function Wi(t,e){for(const n in e)t[n]=e[n];return t}function Do(t){return t()}function Es(){return Object.create(null)}function zt(t){t.forEach(Do)}function fl(t){return typeof t=="function"}function pl(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let yn;function vm(t,e){return yn||(yn=document.createElement("a")),yn.href=e,t===yn.href}function gl(t){return Object.keys(t).length===0}function ml(t,...e){if(t==null)return Le;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wm(t,e,n){t.$$.on_destroy.push(ml(e,n))}function _m(t,e,n,i){if(t){const r=Oo(t,e,n,i);return t[0](r)}}function Oo(t,e,n,i){return t[1]&&i?Wi(n.ctx.slice(),t[1](i(e))):n.ctx}function Em(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Im(t,e,n,i,r,s){if(r){const o=Oo(e,n,i,s);t.p(o,r)}}function Tm(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function bm(t,e,n){return t.set(n),e}const Po=typeof window!="undefined";let yl=Po?()=>window.performance.now():()=>Date.now(),Lo=Po?t=>requestAnimationFrame(t):Le;const et=new Set;function Mo(t){et.forEach(e=>{e.c(t)||(et.delete(e),e.f())}),et.size!==0&&Lo(Mo)}function vl(t){let e;return et.size===0&&Lo(Mo),{promise:new Promise(n=>{et.add(e={c:t,f:n})}),abort(){et.delete(e)}}}let Zn=!1;function wl(){Zn=!0}function _l(){Zn=!1}function El(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Il(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,u=(r>0&&e[n[r]].claim_order<=l?r+1:El(1,r,g=>e[n[g]].claim_order,l))-1;i[c]=n[u]+1;const h=u+1;n[h]=c,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const u=l<s.length?s[l]:null;t.insertBefore(o[c],u)}}function Tl(t,e){if(Zn){for(Il(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Sm(t,e,n){Zn&&!n?Tl(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bl(t){t.parentNode.removeChild(t)}function Sl(t){return document.createElement(t)}function _r(t){return document.createTextNode(t)}function Am(){return _r(" ")}function Cm(){return _r("")}function km(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Nm(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Al(t){return Array.from(t.childNodes)}function Cl(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function xo(t,e,n,i,r=!1){Cl(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function kl(t,e,n,i){return xo(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Rm(t,e,n){return kl(t,e,n,Sl)}function Nl(t,e){return xo(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>_r(e),!0)}function Dm(t){return Nl(t," ")}function Om(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pm(t,e){t.value=e==null?"":e}function Lm(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let Rt;function bt(t){Rt=t}function Er(){if(!Rt)throw new Error("Function called outside component initialization");return Rt}function Mm(t){Er().$$.on_mount.push(t)}function xm(t){Er().$$.after_update.push(t)}function Um(t,e){Er().$$.context.set(t,e)}const It=[],Is=[],bn=[],Ts=[],Uo=Promise.resolve();let Xi=!1;function Fo(){Xi||(Xi=!0,Uo.then(Vo))}function Fm(){return Fo(),Uo}function Yi(t){bn.push(t)}const Ri=new Set;let vn=0;function Vo(){const t=Rt;do{for(;vn<It.length;){const e=It[vn];vn++,bt(e),Rl(e.$$)}for(bt(null),It.length=0,vn=0;Is.length;)Is.pop()();for(let e=0;e<bn.length;e+=1){const n=bn[e];Ri.has(n)||(Ri.add(n),n())}bn.length=0}while(It.length);for(;Ts.length;)Ts.pop()();Xi=!1,Ri.clear(),bt(t)}function Rl(t){if(t.fragment!==null){t.update(),zt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Yi)}}const Sn=new Set;let Re;function Vm(){Re={r:0,c:[],p:Re}}function $m(){Re.r||zt(Re.c),Re=Re.p}function Dl(t,e){t&&t.i&&(Sn.delete(t),t.i(e))}function Bm(t,e,n,i){if(t&&t.o){if(Sn.has(t))return;Sn.add(t),Re.c.push(()=>{Sn.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function jm(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(i[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);t[s]=a}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Hm(t){return typeof t=="object"&&t!==null?t:{}}function qm(t){t&&t.c()}function Km(t,e){t&&t.l(e)}function Ol(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||Yi(()=>{const c=s.map(Do).filter(fl);o?o.push(...c):zt(c),t.$$.on_mount=[]}),a.forEach(Yi)}function Pl(t,e){const n=t.$$;n.fragment!==null&&(zt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ll(t,e){t.$$.dirty[0]===-1&&(It.push(t),Fo(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gm(t,e,n,i,r,s,o,a=[-1]){const c=Rt;bt(t);const l=t.$$={fragment:null,ctx:null,props:s,update:Le,not_equal:r,bound:Es(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Es(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,g,...E)=>{const y=E.length?E[0]:g;return l.ctx&&r(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&Ll(t,h)),g}):[],l.update(),u=!0,zt(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){wl();const h=Al(e.target);l.fragment&&l.fragment.l(h),h.forEach(bl)}else l.fragment&&l.fragment.c();e.intro&&Dl(t.$$.fragment),Ol(t,e.target,e.anchor,e.customElement),_l(),Vo()}bt(c)}class zm{$destroy(){Pl(this,1),this.$destroy=Le}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!gl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Je=[];function Ml(t,e=Le){let n;const i=new Set;function r(a){if(pl(t,a)&&(t=a,n)){const c=!Je.length;for(const l of i)l[1](),Je.push(l,t);if(c){for(let l=0;l<Je.length;l+=2)Je[l][0](Je[l+1]);Je.length=0}}}function s(a){r(a(t))}function o(a,c=Le){const l=[a,c];return i.add(l),i.size===1&&(n=e(r)||Le),a(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}/**
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
 */const $o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let g=(a&15)<<2|l>>6,E=l&63;c||(E=64,o||(g=64)),i.push(n[u],n[h],n[g],n[E])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||h==null)throw Error();const g=s<<2|a>>4;if(i.push(g),l!==64){const E=a<<4&240|l>>2;if(i.push(E),h!==64){const y=l<<6&192|h;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jo=function(t){const e=$o(t);return Bo.encodeByteArray(e,!0)},Ul=function(t){try{return Bo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function x(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ho(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())}function qo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ko(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vl(){return x().indexOf("Electron/")>=0}function Go(){const t=x();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $l(){return x().indexOf("MSAppHost/")>=0}function Bl(){return typeof indexedDB=="object"}function jl(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hl="FirebaseError";class Ge extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Hl,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wt.prototype.create)}}class Wt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ql(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ge(r,a,i)}}function ql(t,e){return t.replace(Kl,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Kl=/\{\$([^}]+)}/g;function Gl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(bs(s)&&bs(o)){if(!Dn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function bs(t){return t!==null&&typeof t=="object"}/**
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
 */function Xt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zl(t,e){const n=new Wl(t,e);return n.subscribe.bind(n)}class Wl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Xl(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Di),r.error===void 0&&(r.error=Di),r.complete===void 0&&(r.complete=Di);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Di(){}/**
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
 */function ae(t){return t&&t._delegate?t._delegate:t}class Ue{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ne="[DEFAULT]";/**
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
 */class Yl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Fl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ql(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Jl(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jl(t){return t===Ne?void 0:t}function Ql(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const eu={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},tu=S.INFO,nu={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},iu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=nu[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ir{constructor(e){this.name=e,this._logLevel=tu,this._logHandler=iu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}function ru(t){return Array.prototype.slice.call(t)}function zo(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Tr(t,e,n){var i,r=new Promise(function(s,o){i=t[e].apply(t,n),zo(i).then(s,o)});return r.request=i,r}function su(t,e,n){var i=Tr(t,e,n);return i.then(function(r){if(!!r)return new Dt(r,i.request)})}function ft(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(r){this[e][i]=r}})})}function br(t,e,n,i){i.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return Tr(this[e],r,arguments)})})}function ei(t,e,n,i){i.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Wo(t,e,n,i){i.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return su(this[e],r,arguments)})})}function ze(t){this._index=t}ft(ze,"_index",["name","keyPath","multiEntry","unique"]);br(ze,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Wo(ze,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Dt(t,e){this._cursor=t,this._request=e}ft(Dt,"_cursor",["direction","key","primaryKey","value"]);br(Dt,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Dt.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),zo(e._request).then(function(i){if(!!i)return new Dt(i,e._request)})})})});function ue(t){this._store=t}ue.prototype.createIndex=function(){return new ze(this._store.createIndex.apply(this._store,arguments))};ue.prototype.index=function(){return new ze(this._store.index.apply(this._store,arguments))};ft(ue,"_store",["name","keyPath","indexNames","autoIncrement"]);br(ue,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Wo(ue,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ei(ue,"_store",IDBObjectStore,["deleteIndex"]);function Yt(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Yt.prototype.objectStore=function(){return new ue(this._tx.objectStore.apply(this._tx,arguments))};ft(Yt,"_tx",["objectStoreNames","mode"]);ei(Yt,"_tx",IDBTransaction,["abort"]);function ti(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Yt(n)}ti.prototype.createObjectStore=function(){return new ue(this._db.createObjectStore.apply(this._db,arguments))};ft(ti,"_db",["name","version","objectStoreNames"]);ei(ti,"_db",IDBDatabase,["deleteObjectStore","close"]);function ni(t){this._db=t}ni.prototype.transaction=function(){return new Yt(this._db.transaction.apply(this._db,arguments))};ft(ni,"_db",["name","version","objectStoreNames"]);ei(ni,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[ue,ze].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=ru(arguments),i=n[n.length-1],r=this._store||this._index,s=r[t].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})})});[ze,ue].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,r=[];return new Promise(function(s){i.iterateCursor(e,function(o){if(!o){s(r);return}if(r.push(o.value),n!==void 0&&r.length==n){s(r);return}o.continue()})})})});function ou(t,e,n){var i=Tr(indexedDB,"open",[t,e]),r=i.request;return r&&(r.onupgradeneeded=function(s){n&&n(new ti(r.result,s.oldVersion,r.transaction))}),i.then(function(s){return new ni(s)})}/**
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
 */class au{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function cu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",Ss="0.7.18";/**
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
 */const Sr=new Ir("@firebase/app"),lu="@firebase/app-compat",uu="@firebase/analytics-compat",hu="@firebase/analytics",du="@firebase/app-check-compat",fu="@firebase/app-check",pu="@firebase/auth",gu="@firebase/auth-compat",mu="@firebase/database",yu="@firebase/database-compat",vu="@firebase/functions",wu="@firebase/functions-compat",_u="@firebase/installations",Eu="@firebase/installations-compat",Iu="@firebase/messaging",Tu="@firebase/messaging-compat",bu="@firebase/performance",Su="@firebase/performance-compat",Au="@firebase/remote-config",Cu="@firebase/remote-config-compat",ku="@firebase/storage",Nu="@firebase/storage-compat",Ru="@firebase/firestore",Du="@firebase/firestore-compat",Ou="firebase",Pu="9.6.8";/**
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
 */const Xo="[DEFAULT]",Lu={[Ji]:"fire-core",[lu]:"fire-core-compat",[hu]:"fire-analytics",[uu]:"fire-analytics-compat",[fu]:"fire-app-check",[du]:"fire-app-check-compat",[pu]:"fire-auth",[gu]:"fire-auth-compat",[mu]:"fire-rtdb",[yu]:"fire-rtdb-compat",[vu]:"fire-fn",[wu]:"fire-fn-compat",[_u]:"fire-iid",[Eu]:"fire-iid-compat",[Iu]:"fire-fcm",[Tu]:"fire-fcm-compat",[bu]:"fire-perf",[Su]:"fire-perf-compat",[Au]:"fire-rc",[Cu]:"fire-rc-compat",[ku]:"fire-gcs",[Nu]:"fire-gcs-compat",[Ru]:"fire-fst",[Du]:"fire-fst-compat","fire-js":"fire-js",[Ou]:"fire-js-all"};/**
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
 */const On=new Map,Qi=new Map;function Mu(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ot(t){const e=t.name;if(Qi.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const n of On.values())Mu(n,t);return!0}function Ar(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Se=new Wt("app","Firebase",xu);/**
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
 */class Uu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
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
 */const Jt=Pu;function Wm(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xo,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Se.create("bad-app-name",{appName:String(i)});const r=On.get(i);if(r){if(Dn(t,r.options)&&Dn(n,r.config))return r;throw Se.create("duplicate-app",{appName:i})}const s=new Zl(i);for(const a of Qi.values())s.addComponent(a);const o=new Uu(t,n,s);return On.set(i,o),o}function Yo(t=Xo){const e=On.get(t);if(!e)throw Se.create("no-app",{appName:t});return e}function Te(t,e,n){var i;let r=(i=Lu[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(a.join(" "));return}ot(new Ue(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Fu="firebase-heartbeat-database",Vu=1,Fe="firebase-heartbeat-store";let Oi=null;function Cr(){return Oi||(Oi=ou(Fu,Vu,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Fe)}}).catch(t=>{throw Se.create("storage-open",{originalErrorMessage:t.message})})),Oi}async function $u(t){try{return(await Cr()).transaction(Fe).objectStore(Fe).get(kr(t))}catch(e){throw Se.create("storage-get",{originalErrorMessage:e.message})}}async function Pi(t,e){try{const i=(await Cr()).transaction(Fe,"readwrite");return await i.objectStore(Fe).put(e,kr(t)),i.complete}catch(n){throw Se.create("storage-set",{originalErrorMessage:n.message})}}async function Bu(t){try{const n=(await Cr()).transaction(Fe,"readwrite");return await n.objectStore(Fe).delete(kr(t)),n.complete}catch(e){throw Se.create("storage-delete",{originalErrorMessage:e.message})}}function kr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ju=1024,Hu=30*24*60*60*1e3;class qu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===i))return this._heartbeatsCache.push({date:i,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Hu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=Gu(this._heartbeatsCache),i=jo(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),i}}function Ku(){return new Date().toISOString().substring(0,10)}function Gu(t,e=ju){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.userAgent===r.userAgent);if(s){if(s.dates.push(r.date),As(n)>e){s.dates.pop();break}}else if(n.push({userAgent:r.userAgent,dates:[r.date]}),As(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class zu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?jl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $u(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Pi(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Pi(this.app,{heartbeats:[...i,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Pi(this.app,{heartbeats:i.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return Bu(this.app)}}function As(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wu(t){ot(new Ue("platform-logger",e=>new au(e),"PRIVATE")),ot(new Ue("heartbeat",e=>new qu(e),"PRIVATE")),Te(Ji,Ss,t),Te(Ji,Ss,"esm2017"),Te("fire-js","")}Wu("");var Xu="firebase",Yu="9.6.8";/**
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
 */Te(Xu,Yu,"app");/*! *****************************************************************************
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
***************************************************************************** */function Nr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Jo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ju=Jo,Qo=new Wt("auth","Firebase",Jo());/**
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
 */const Cs=new Ir("@firebase/auth");function An(t,...e){Cs.logLevel<=S.ERROR&&Cs.error(`Auth (${Jt}): ${t}`,...e)}/**
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
 */function ce(t,...e){throw Rr(t,...e)}function se(t,...e){return Rr(t,...e)}function Zo(t,e,n){const i=Object.assign(Object.assign({},Ju()),{[e]:n});return new Wt("auth","Firebase",i).create(e,{appName:t.name})}function Qu(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ce(t,"argument-error"),Zo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qo.create(t,...e)}function w(t,e,...n){if(!t)throw Rr(e,...n)}function he(t){const e="INTERNAL ASSERTION FAILED: "+t;throw An(e),new Error(e)}function ge(t,e){t||he(e)}/**
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
 */const ks=new Map;function de(t){ge(t instanceof Function,"Expected a class definition");let e=ks.get(t);return e?(ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ks.set(t,e),e)}/**
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
 */function Zu(t,e){const n=Ar(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Dn(s,e!=null?e:{}))return r;ce(r,"already-initialized")}return n.initialize({options:e})}function eh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(de);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Zi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function th(){return Ns()==="http:"||Ns()==="https:"}function Ns(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||qo()||"connection"in navigator)?navigator.onLine:!0}function ih(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Ho()||Ko()}get(){return nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dr(t,e){ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ea{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const sh=new Qt(3e4,6e4);function oh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ii(t,e,n,i,r={}){return ta(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Xt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ea.fetch()(na(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ta(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},rh),e);try{const r=new ch(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Li(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Li(t,"email-already-in-use",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Zo(t,u,l);ce(t,u)}}catch(r){if(r instanceof Ge)throw r;ce(t,"network-request-failed")}}async function ah(t,e,n,i,r={}){const s=await ii(t,e,n,i,r);return"mfaPendingCredential"in s&&ce(t,"multi-factor-auth-required",{_serverResponse:s}),s}function na(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Dr(t.config,r):`${t.config.apiScheme}://${r}`}class ch{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(se(this.auth,"network-request-failed")),sh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=se(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function lh(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function uh(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function St(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hh(t,e=!1){const n=ae(t),i=await n.getIdToken(e),r=Or(i);w(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:St(Mi(r.auth_time)),issuedAtTime:St(Mi(r.iat)),expirationTime:St(Mi(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mi(t){return Number(t)*1e3}function Or(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return An("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ul(n);return r?JSON.parse(r):(An("Failed to decode base64 JWT payload"),null)}catch(r){return An("Caught error parsing JWT payload as JSON",r),null}}function dh(t){const e=Or(t);return w(e,"internal-error"),w(typeof e.exp!="undefined","internal-error"),w(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ot(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ge&&fh(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function fh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ph{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ia{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=St(this.lastLoginAt),this.creationTime=St(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pn(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ot(t,uh(n,{idToken:i}));w(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?yh(s.providerUserInfo):[],a=mh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ia(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gh(t){const e=ae(t);await Pn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mh(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function yh(t){return t.map(e=>{var{providerId:n}=e,i=Nr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function vh(t,e){const n=await ta(t,{},async()=>{const i=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=na(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ea.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken!="undefined","internal-error"),w(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await vh(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Pt;return i&&(w(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(w(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function ve(t,e){w(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Me{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Nr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ph(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ia(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ot(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hh(this,e)}reload(){return gh(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Pn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ot(this,lh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,ne=(l=n.createdAt)!==null&&l!==void 0?l:void 0,ie=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Xe,emailVerified:Ye,isAnonymous:vt,providerData:wt,stsTokenManager:_t}=n;w(Xe&&_t,e,"internal-error");const ul=Pt.fromJSON(this.name,_t);w(typeof Xe=="string",e,"internal-error"),ve(h,e.name),ve(g,e.name),w(typeof Ye=="boolean",e,"internal-error"),w(typeof vt=="boolean",e,"internal-error"),ve(E,e.name),ve(y,e.name),ve(N,e.name),ve(Y,e.name),ve(ne,e.name),ve(ie,e.name);const Ni=new Me({uid:Xe,auth:e,email:g,emailVerified:Ye,displayName:h,isAnonymous:vt,photoURL:y,phoneNumber:E,tenantId:N,stsTokenManager:ul,createdAt:ne,lastLoginAt:ie});return wt&&Array.isArray(wt)&&(Ni.providerData=wt.map(hl=>Object.assign({},hl))),Y&&(Ni._redirectEventId=Y),Ni}static async _fromIdTokenResponse(e,n,i=!1){const r=new Pt;r.updateFromServerResponse(n);const s=new Me({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Pn(s),s}}/**
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
 */class ra{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ra.type="NONE";const Rs=ra;/**
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
 */function Cn(t,e,n){return`firebase:${t}:${e}:${n}`}class tt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Cn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Cn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new tt(de(Rs),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||de(Rs);const o=Cn(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Me._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new tt(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new tt(s,e,i))}}/**
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
 */function Ds(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(la(e))return"Blackberry";if(ua(e))return"Webos";if(Pr(e))return"Safari";if((e.includes("chrome/")||oa(e))&&!e.includes("edge/"))return"Chrome";if(ca(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sa(t=x()){return/firefox\//i.test(t)}function Pr(t=x()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oa(t=x()){return/crios\//i.test(t)}function aa(t=x()){return/iemobile/i.test(t)}function ca(t=x()){return/android/i.test(t)}function la(t=x()){return/blackberry/i.test(t)}function ua(t=x()){return/webos/i.test(t)}function ri(t=x()){return/iphone|ipad|ipod/i.test(t)}function wh(t=x()){var e;return ri(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function _h(){return Go()&&document.documentMode===10}function ha(t=x()){return ri(t)||ca(t)||ua(t)||la(t)||/windows phone/i.test(t)||aa(t)}function Eh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function da(t,e=[]){let n;switch(t){case"Browser":n=Ds(x());break;case"Worker":n=`${Ds(x())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jt}/${i}`}/**
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
 */class Ih{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Os(this),this.idTokenSubscription=new Os(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await tt.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pn(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ih()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await tt.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=da(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Lr(t){return ae(t)}class Os{constructor(e){this.auth=e,this.observer=null,this.addObserver=zl(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class fa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,n){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}/**
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
 */async function nt(t,e){return ah(t,"POST","/v1/accounts:signInWithIdp",oh(t,e))}/**
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
 */const Th="http://localhost";class Ve extends fa{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Nr(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ve(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,nt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nt(e,n)}buildRequest(){const e={requestUri:Th,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xt(n)}return e}}/**
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
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zt extends Mr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class we extends Zt{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com";we.PROVIDER_ID="facebook.com";/**
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
 */class _e extends Zt{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ve._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return _e.credential(n,i)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
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
 */class Ee extends Zt{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
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
 */class Ie extends Zt{constructor(){super("twitter.com")}static credential(e,n){return Ve._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ie.credential(n,i)}catch{return null}}}Ie.TWITTER_SIGN_IN_METHOD="twitter.com";Ie.PROVIDER_ID="twitter.com";/**
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
 */class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Me._fromIdTokenResponse(e,i,r),o=Ps(i);return new at({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ps(i);return new at({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ps(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ln extends Ge{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ln.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ln(e,n,i,r)}}function pa(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ln._fromErrorAndOperation(t,s,e,i):s})}async function bh(t,e,n=!1){const i=await Ot(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return at._forOperation(t,"link",i)}/**
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
 */async function Sh(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Ot(t,pa(i,r,e,t),n);w(s.idToken,i,"internal-error");const o=Or(s.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(t.uid===a,i,"user-mismatch"),at._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ce(i,"user-mismatch"),s}}/**
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
 */async function Ah(t,e,n=!1){const i="signIn",r=await pa(t,i,e),s=await at._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}/**
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
 */function Xm(t,e){return ae(t).setPersistence(e)}const Mn="__sak";/**
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
 */class ga{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mn,"1"),this.storage.removeItem(Mn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ch(){const t=x();return Pr(t)||ri(t)}const kh=1e3,Nh=10;class ma extends ga{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ch()&&Eh(),this.fallbackToPolling=ha(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);_h()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Nh):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ma.type="LOCAL";const Rh=ma;/**
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
 */class ya extends ga{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ya.type="SESSION";const va=ya;/**
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
 */function Dh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class si{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new si(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Dh(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}si.receivers=[];/**
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
 */function xr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Oh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=xr("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function oe(){return window}function Ph(t){oe().location.href=t}/**
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
 */function wa(){return typeof oe().WorkerGlobalScope!="undefined"&&typeof oe().importScripts=="function"}async function Lh(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xh(){return wa()?self:null}/**
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
 */const _a="firebaseLocalStorageDb",Uh=1,xn="firebaseLocalStorage",Ea="fbase_key";class en{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oi(t,e){return t.transaction([xn],e?"readwrite":"readonly").objectStore(xn)}function Fh(){const t=indexedDB.deleteDatabase(_a);return new en(t).toPromise()}function er(){const t=indexedDB.open(_a,Uh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(xn,{keyPath:Ea})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(xn)?e(i):(i.close(),await Fh(),e(await er()))})})}async function Ls(t,e,n){const i=oi(t,!0).put({[Ea]:e,value:n});return new en(i).toPromise()}async function Vh(t,e){const n=oi(t,!1).get(e),i=await new en(n).toPromise();return i===void 0?null:i.value}function Ms(t,e){const n=oi(t,!0).delete(e);return new en(n).toPromise()}const $h=800,Bh=3;class Ia{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await er(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Bh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=si._getInstance(xh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lh(),!this.activeServiceWorker)return;this.sender=new Oh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await er();return await Ls(e,Mn,"1"),await Ms(e,Mn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ls(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Vh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ms(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=oi(r,!1).getAll();return new en(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$h)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ia.type="LOCAL";const jh=Ia;/**
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
 */function Hh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qh(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=se("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Hh().appendChild(i)})}function Kh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qt(3e4,6e4);/**
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
 */function Ta(t,e){return e?de(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ur extends fa{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gh(t){return Ah(t.auth,new Ur(t),t.bypassAuthState)}function zh(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Sh(n,new Ur(t),t.bypassAuthState)}async function Wh(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),bh(n,new Ur(t),t.bypassAuthState)}/**
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
 */class ba{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gh;case"linkViaPopup":case"linkViaRedirect":return Wh;case"reauthViaPopup":case"reauthViaRedirect":return zh;default:ce(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Xh=new Qt(2e3,1e4);async function Ym(t,e,n){const i=Lr(t);Qu(t,e,Mr);const r=Ta(i,n);return new De(i,"signInViaPopup",e,r).executeNotNull()}class De extends ba{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,De.currentPopupAction&&De.currentPopupAction.cancel(),De.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,De.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(se(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xh.get())};e()}}De.currentPopupAction=null;/**
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
 */const Yh="pendingRedirect",xi=new Map;class Jh extends ba{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const i=await Qh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qh(t,e){const n=ed(e),i=Zh(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Zh(t){return de(t._redirectPersistence)}function ed(t){return Cn(Yh,t.config.apiKey,t.name)}async function td(t,e,n=!1){const i=Lr(t),r=Ta(i,e),o=await new Jh(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const nd=10*60*1e3;class id{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Sa(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(se(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nd&&this.cachedEventUids.clear(),this.cachedEventUids.has(xs(e))}saveEventToCache(e){this.cachedEventUids.add(xs(e)),this.lastProcessedEventTime=Date.now()}}function xs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sa({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sa(t);default:return!1}}/**
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
 */async function sd(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
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
 */const od=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ad=/^https?/;async function cd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sd(t);for(const n of e)try{if(ld(n))return}catch{}ce(t,"unauthorized-domain")}function ld(t){const e=Zi(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!ad.test(n))return!1;if(od.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const ud=new Qt(3e4,6e4);function Us(){const t=oe().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hd(t){return new Promise((e,n)=>{var i,r,s;function o(){Us(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Us(),n(se(t,"network-request-failed"))},timeout:ud.get()})}if((r=(i=oe().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=oe().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Kh("iframefcb");return oe()[a]=()=>{gapi.load?o():n(se(t,"network-request-failed"))},qh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kn=null,e})}let kn=null;function dd(t){return kn=kn||hd(t),kn}/**
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
 */const fd=new Qt(5e3,15e3),pd="__/auth/iframe",gd="emulator/auth/iframe",md={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vd(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dr(e,gd):`https://${t.config.authDomain}/${pd}`,i={apiKey:e.apiKey,appName:t.name,v:Jt},r=yd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Xt(i).slice(1)}`}async function wd(t){const e=await dd(t),n=oe().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:vd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:md,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=se(t,"network-request-failed"),a=oe().setTimeout(()=>{s(o)},fd.get());function c(){oe().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const _d={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ed=500,Id=600,Td="_blank",bd="http://localhost";class Fs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sd(t,e,n,i=Ed,r=Id){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_d),{width:i.toString(),height:r.toString(),top:s,left:o}),l=x().toLowerCase();n&&(a=oa(l)?Td:n),sa(l)&&(e=e||bd,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[E,y])=>`${g}${E}=${y},`,"");if(wh(l)&&a!=="_self")return Ad(e||"",a),new Fs(null);const h=window.open(e||"",a,u);w(h,t,"popup-blocked");try{h.focus()}catch{}return new Fs(h)}function Ad(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Cd="__/auth/handler",kd="emulator/auth/handler";function Vs(t,e,n,i,r,s){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Jt,eventId:r};if(e instanceof Mr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Zt){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Nd(t)}?${Xt(a).slice(1)}`}function Nd({config:t}){return t.emulator?Dr(t,kd):`https://${t.authDomain}/${Cd}`}/**
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
 */const Ui="webStorageSupport";class Rd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=va,this._completeRedirectFn=td}async _openPopup(e,n,i,r){var s;ge((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vs(e,n,i,Zi(),r);return Sd(e,o,xr())}async _openRedirect(e,n,i,r){return await this._originValidation(e),Ph(Vs(e,n,i,Zi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ge(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await wd(e),i=new id(e);return n.register("authEvent",r=>(w(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ui,{type:Ui},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ui];o!==void 0&&n(!!o),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ha()||Pr()||ri()}}const Dd=Rd;var $s="@firebase/auth",Bs="0.19.9";/**
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
 */class Od{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ld(t){ot(new Ue("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{w(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),w(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:da(t)},c=new Ih(o,a);return eh(c,n),c})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ot(new Ue("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(i=>new Od(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te($s,Bs,Pd(t)),Te($s,Bs,"esm2017")}/**
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
 */function Jm(t=Yo()){const e=Ar(t,"auth");return e.isInitialized()?e.getImmediate():Zu(t,{popupRedirectResolver:Dd,persistence:[jh,Rh,va]})}Ld("Browser");var Md=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},p,Fr=Fr||{},v=Md||self;function Un(){}function tr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function tn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xd(t){return Object.prototype.hasOwnProperty.call(t,Fi)&&t[Fi]||(t[Fi]=++Ud)}var Fi="closure_uid_"+(1e9*Math.random()>>>0),Ud=0;function Fd(t,e,n){return t.call.apply(t.bind,arguments)}function Vd(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function $(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=Fd:$=Vd,$.apply(null,arguments)}function wn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function j(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Ce(){this.s=this.s,this.o=this.o}var $d=0,Bd={};Ce.prototype.s=!1;Ce.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),$d!=0)){var t=xd(this);delete Bd[t]}};Ce.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Aa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ca=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function jd(t){e:{var e=Lf;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function js(t){return Array.prototype.concat.apply([],arguments)}function Vr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Fn(t){return/^[\s\xa0]*$/.test(t)}var Hs=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function q(t,e){return t.indexOf(e)!=-1}function Vi(t,e){return t<e?-1:t>e?1:0}var K;e:{var qs=v.navigator;if(qs){var Ks=qs.userAgent;if(Ks){K=Ks;break e}}K=""}function $r(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ka(t){const e={};for(const n in t)e[n]=t[n];return e}var Gs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Na(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Gs.length;s++)n=Gs[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Br(t){return Br[" "](t),t}Br[" "]=Un;function Hd(t){var e=Gd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qd=q(K,"Opera"),ct=q(K,"Trident")||q(K,"MSIE"),Ra=q(K,"Edge"),nr=Ra||ct,Da=q(K,"Gecko")&&!(q(K.toLowerCase(),"webkit")&&!q(K,"Edge"))&&!(q(K,"Trident")||q(K,"MSIE"))&&!q(K,"Edge"),Kd=q(K.toLowerCase(),"webkit")&&!q(K,"Edge");function Oa(){var t=v.document;return t?t.documentMode:void 0}var Vn;e:{var $i="",Bi=function(){var t=K;if(Da)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ra)return/Edge\/([\d\.]+)/.exec(t);if(ct)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Kd)return/WebKit\/(\S+)/.exec(t);if(qd)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bi&&($i=Bi?Bi[1]:""),ct){var ji=Oa();if(ji!=null&&ji>parseFloat($i)){Vn=String(ji);break e}}Vn=$i}var Gd={};function zd(){return Hd(function(){let t=0;const e=Hs(String(Vn)).split("."),n=Hs("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Vi(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Vi(r[2].length==0,s[2].length==0)||Vi(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var ir;if(v.document&&ct){var zs=Oa();ir=zs||parseInt(Vn,10)||void 0}else ir=void 0;var Wd=ir,Xd=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{v.addEventListener("test",Un,e),v.removeEventListener("test",Un,e)}catch{}return t}();function H(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};function Lt(t,e){if(H.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Da){e:{try{Br(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Yd[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lt.Z.h.call(this)}}j(Lt,H);var Yd={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),Jd=0;function Qd(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Jd,this.ca=this.fa=!1}function ai(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ci(t){this.src=t,this.g={},this.h=0}ci.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sr(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Qd(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function rr(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Aa(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ai(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sr(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var jr="closure_lm_"+(1e6*Math.random()|0),Hi={};function Pa(t,e,n,i,r){if(i&&i.once)return Ma(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Pa(t,e[s],n,i,r);return null}return n=Kr(n),t&&t[nn]?t.N(e,n,tn(i)?!!i.capture:!!i,r):La(t,e,n,!1,i,r)}function La(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=tn(r)?!!r.capture:!!r,a=qr(t);if(a||(t[jr]=a=new ci(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Zd(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Xd||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Ua(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zd(){function t(n){return e.call(t.src,t.listener,n)}var e=ef;return t}function Ma(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ma(t,e[s],n,i,r);return null}return n=Kr(n),t&&t[nn]?t.O(e,n,tn(i)?!!i.capture:!!i,r):La(t,e,n,!0,i,r)}function xa(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)xa(t,e[s],n,i,r);else i=tn(i)?!!i.capture:!!i,n=Kr(n),t&&t[nn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sr(s,n,i,r),-1<n&&(ai(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=qr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sr(e,n,i,r)),(n=-1<t?e[t]:null)&&Hr(n))}function Hr(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[nn])rr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ua(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=qr(e))?(rr(n,t),n.h==0&&(n.src=null,e[jr]=null)):ai(t)}}}function Ua(t){return t in Hi?Hi[t]:Hi[t]="on"+t}function ef(t,e){if(t.ca)t=!0;else{e=new Lt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Hr(t),t=n.call(i,e)}return t}function qr(t){return t=t[jr],t instanceof ci?t:null}var qi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kr(t){return typeof t=="function"?t:(t[qi]||(t[qi]=function(e){return t.handleEvent(e)}),t[qi])}function U(){Ce.call(this),this.i=new ci(this),this.P=this,this.I=null}j(U,Ce);U.prototype[nn]=!0;U.prototype.removeEventListener=function(t,e,n,i){xa(this,t,e,n,i)};function B(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new H(e,t);else if(e instanceof H)e.target=e.target||t;else{var r=e;e=new H(i,t),Na(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=_n(o,i,!0,e)&&r}if(o=e.g=t,r=_n(o,i,!0,e)&&r,r=_n(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=_n(o,i,!1,e)&&r}U.prototype.M=function(){if(U.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ai(n[i]);delete t.g[e],t.h--}}this.I=null};U.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};U.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function _n(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&rr(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Gr=v.JSON.stringify;function tf(){var t=Va;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nf{constructor(){this.h=this.g=null}add(e,n){const i=Fa.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Fa=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rf,t=>t.reset());class rf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sf(t){v.setTimeout(()=>{throw t},0)}function zr(t,e){or||of(),ar||(or(),ar=!0),Va.add(t,e)}var or;function of(){var t=v.Promise.resolve(void 0);or=function(){t.then(af)}}var ar=!1,Va=new nf;function af(){for(var t;t=tf();){try{t.h.call(t.g)}catch(n){sf(n)}var e=Fa;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ar=!1}function li(t,e){U.call(this),this.h=t||1,this.g=e||v,this.j=$(this.kb,this),this.l=Date.now()}j(li,U);p=li.prototype;p.da=!1;p.S=null;p.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),B(this,"tick"),this.da&&(Wr(this),this.start()))}};p.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}p.M=function(){li.Z.M.call(this),Wr(this),delete this.g};function Xr(t,e,n){if(typeof t=="function")n&&(t=$(t,n));else if(t&&typeof t.handleEvent=="function")t=$(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:v.setTimeout(t,e||0)}function $a(t){t.g=Xr(()=>{t.g=null,t.i&&(t.i=!1,$a(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cf extends Ce{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$a(this)}M(){super.M(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(t){Ce.call(this),this.h=t,this.g={}}j(Mt,Ce);var Ws=[];function Ba(t,e,n,i){Array.isArray(n)||(n&&(Ws[0]=n.toString()),n=Ws);for(var r=0;r<n.length;r++){var s=Pa(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ja(t){$r(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hr(e)},t),t.g={}}Mt.prototype.M=function(){Mt.Z.M.call(this),ja(this)};Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ui(){this.g=!0}ui.prototype.Aa=function(){this.g=!1};function lf(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function uf(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Qe(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+df(t,n)+(i?" "+i:"")})}function hf(t,e){t.info(function(){return"TIMEOUT: "+e})}ui.prototype.info=function(){};function df(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gr(n)}catch{return e}}var We={},Xs=null;function hi(){return Xs=Xs||new U}We.Ma="serverreachability";function Ha(t){H.call(this,We.Ma,t)}j(Ha,H);function xt(t){const e=hi();B(e,new Ha(e,t))}We.STAT_EVENT="statevent";function qa(t,e){H.call(this,We.STAT_EVENT,t),this.stat=e}j(qa,H);function G(t){const e=hi();B(e,new qa(e,t))}We.Na="timingevent";function Ka(t,e){H.call(this,We.Na,t),this.size=e}j(Ka,H);function rn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){t()},e)}var di={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ga={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yr(){}Yr.prototype.h=null;function Ys(t){return t.h||(t.h=t.i())}function za(){}var sn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Jr(){H.call(this,"d")}j(Jr,H);function Qr(){H.call(this,"c")}j(Qr,H);var cr;function fi(){}j(fi,Yr);fi.prototype.g=function(){return new XMLHttpRequest};fi.prototype.i=function(){return{}};cr=new fi;function on(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Mt(this),this.P=ff,t=nr?125:void 0,this.W=new li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wa}function Wa(){this.i=null,this.g="",this.h=!1}var ff=45e3,lr={},$n={};p=on.prototype;p.setTimeout=function(t){this.P=t};function ur(t,e,n){t.K=1,t.v=gi(me(e)),t.s=n,t.U=!0,Xa(t,null)}function Xa(t,e){t.F=Date.now(),an(t),t.A=me(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),nc(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Wa,t.g=Ic(t.l,n?e:null,!t.s),0<t.O&&(t.L=new cf($(t.Ia,t,t.g),t.O)),Ba(t.V,t.g,"readystatechange",t.gb),e=t.H?ka(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xt(1),lf(t.j,t.u,t.A,t.m,t.X,t.s)}p.gb=function(t){t=t.target;const e=this.L;e&&fe(t)==3?e.l():this.Ia(t)};p.Ia=function(t){try{if(t==this.g)e:{const u=fe(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||nr||this.g&&(this.h.h||this.g.ga()||eo(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?xt(3):xt(2)),pi(this);var n=this.g.ba();this.N=n;t:if(Ya(this)){var i=eo(this.g);t="";var r=i.length,s=fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Oe(this),At(this);var o="";break t}this.h.i=new v.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,uf(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fn(a)){var l=a;break t}}l=null}if(n=l)Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hr(this,n);else{this.i=!1,this.o=3,G(12),Oe(this),At(this);break e}}this.U?(Ja(this,u,o),nr&&this.i&&u==3&&(Ba(this.V,this.W,"tick",this.fb),this.W.start())):(Qe(this.j,this.m,o,null),hr(this,o)),u==4&&Oe(this),this.i&&!this.I&&(u==4?vc(this.l,this):(this.i=!1,an(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,G(12)):(this.o=0,G(13)),Oe(this),At(this)}}}catch{}finally{}};function Ya(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ja(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=pf(t,n),r==$n){e==4&&(t.o=4,G(14),i=!1),Qe(t.j,t.m,null,"[Incomplete Response]");break}else if(r==lr){t.o=4,G(15),Qe(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Qe(t.j,t.m,r,null),hr(t,r);Ya(t)&&r!=$n&&r!=lr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,G(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),as(e),e.L=!0,G(11))):(Qe(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),At(t))}p.fb=function(){if(this.g){var t=fe(this.g),e=this.g.ga();this.C<e.length&&(pi(this),Ja(this,t,e),this.i&&t!=4&&an(this))}};function pf(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?$n:(n=Number(e.substring(n,i)),isNaN(n)?lr:(i+=1,i+n>e.length?$n:(e=e.substr(i,n),t.C=i+n,e)))}p.cancel=function(){this.I=!0,Oe(this)};function an(t){t.Y=Date.now()+t.P,Qa(t,t.P)}function Qa(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=rn($(t.eb,t),e)}function pi(t){t.B&&(v.clearTimeout(t.B),t.B=null)}p.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hf(this.j,this.A),this.K!=2&&(xt(3),G(17)),Oe(this),this.o=2,At(this)):Qa(this,this.Y-t)};function At(t){t.l.G==0||t.I||vc(t.l,t)}function Oe(t){pi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wr(t.W),ja(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||dr(n.i,t))){if(n.I=t.N,!t.J&&dr(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)qn(n),vi(n);else break e;os(n),G(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=rn($(n.ab,n),6e3));if(1>=sc(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pe(n,11)}else if((t.J||n.g==t)&&qn(n),!Fn(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const g=l[5];g!=null&&typeof g=="number"&&0<g&&(i=1.5*g,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const E=t.g;if(E){const y=E.g?E.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=i.i;!s.g&&(q(y,"spdy")||q(y,"quic")||q(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ts(s,s.h),s.h=null))}if(i.D){const N=E.g?E.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(i.sa=N,k(i.F,i.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Ec(i,i.H?i.la:null,i.W),o.J){oc(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(pi(a),an(a)),i.g=o}else mc(i);0<n.l.length&&wi(n)}else l[0]!="stop"&&l[0]!="close"||Pe(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Pe(n,7):ss(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}xt(4)}catch{}}function gf(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(tr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Zr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(tr(t)||typeof t=="string")Ca(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(tr(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=gf(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function pt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof pt)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}p=pt.prototype;p.R=function(){es(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};p.T=function(){return es(this),this.g.concat()};function es(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];$e(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],$e(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}p.get=function(t,e){return $e(this.h,t)?this.h[t]:e};p.set=function(t,e){$e(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};p.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function $e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Za=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function mf(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Be){this.g=e!==void 0?e:t.g,Bn(this,t.j),this.s=t.s,jn(this,t.i),Hn(this,t.m),this.l=t.l,e=t.h;var n=new Ut;n.i=e.i,e.g&&(n.g=new pt(e.g),n.h=e.h),Js(this,n),this.o=t.o}else t&&(n=String(t).match(Za))?(this.g=!!e,Bn(this,n[1]||"",!0),this.s=Ct(n[2]||""),jn(this,n[3]||"",!0),Hn(this,n[4]),this.l=Ct(n[5]||"",!0),Js(this,n[6]||"",!0),this.o=Ct(n[7]||"")):(this.g=!!e,this.h=new Ut(null,this.g))}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tt(e,Qs,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tt(e,Qs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Tt(n,n.charAt(0)=="/"?Ef:_f,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tt(n,Tf)),t.join("")};function me(t){return new Be(t)}function Bn(t,e,n){t.j=n?Ct(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jn(t,e,n){t.i=n?Ct(e,!0):e}function Hn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Js(t,e,n){e instanceof Ut?(t.h=e,bf(t.h,t.g)):(n||(e=Tt(e,If)),t.h=new Ut(e,t.g))}function k(t,e,n){t.h.set(e,n)}function gi(t){return k(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yf(t){return t instanceof Be?me(t):new Be(t,void 0)}function vf(t,e,n,i){var r=new Be(null,void 0);return t&&Bn(r,t),e&&jn(r,e),n&&Hn(r,n),i&&(r.l=i),r}function Ct(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qs=/[#\/\?@]/g,_f=/[#\?:]/g,Ef=/[#\?]/g,If=/[#\?@]/g,Tf=/#/g;function Ut(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ke(t){t.g||(t.g=new pt,t.h=0,t.i&&mf(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}p=Ut.prototype;p.add=function(t,e){ke(this),this.i=null,t=gt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ec(t,e){ke(t),e=gt(t,e),$e(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,$e(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&es(t)))}function tc(t,e){return ke(t),e=gt(t,e),$e(t.g.h,e)}p.forEach=function(t,e){ke(this),this.g.forEach(function(n,i){Ca(n,function(r){t.call(e,r,i,this)},this)},this)};p.T=function(){ke(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};p.R=function(t){ke(this);var e=[];if(typeof t=="string")tc(this,t)&&(e=js(e,this.g.get(gt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=js(e,t[n])}return e};p.set=function(t,e){return ke(this),this.i=null,t=gt(this,t),tc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};p.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function nc(t,e,n){ec(t,e),0<n.length&&(t.i=null,t.g.set(gt(t,e),Vr(n)),t.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function gt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bf(t,e){e&&!t.j&&(ke(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(ec(this,i),nc(this,r,n))},t)),t.j=e}var Sf=class{constructor(t,e){this.h=t,this.g=e}};function ic(t){this.l=t||Af,v.PerformanceNavigationTiming?(t=v.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(v.g&&v.g.Ea&&v.g.Ea()&&v.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Af=10;function rc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sc(t){return t.h?1:t.g?t.g.size:0}function dr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ts(t,e){t.g?t.g.add(e):t.h=e}function oc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ic.prototype.cancel=function(){if(this.i=ac(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ac(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vr(t.i)}function ns(){}ns.prototype.stringify=function(t){return v.JSON.stringify(t,void 0)};ns.prototype.parse=function(t){return v.JSON.parse(t,void 0)};function Cf(){this.g=new ns}function kf(t,e,n){const i=n||"";try{Zr(t,function(r,s){let o=r;tn(r)&&(o=Gr(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Nf(t,e){const n=new ui;if(v.Image){const i=new Image;i.onload=wn(En,n,i,"TestLoadImage: loaded",!0,e),i.onerror=wn(En,n,i,"TestLoadImage: error",!1,e),i.onabort=wn(En,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=wn(En,n,i,"TestLoadImage: timeout",!1,e),v.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function En(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function cn(t){this.l=t.$b||null,this.j=t.ib||!1}j(cn,Yr);cn.prototype.g=function(){return new mi(this.l,this.j)};cn.prototype.i=function(t){return function(){return t}}({});function mi(t,e){U.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=is,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(mi,U);var is=0;p=mi.prototype;p.open=function(t,e){if(this.readyState!=is)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ft(this)};p.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||v).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=is};p.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ft(this)),this.g&&(this.readyState=3,Ft(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof v.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function cc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}p.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ln(this):Ft(this),this.readyState==3&&cc(this)}};p.Ua=function(t){this.g&&(this.response=this.responseText=t,ln(this))};p.Ta=function(t){this.g&&(this.response=t,ln(this))};p.ha=function(){this.g&&ln(this)};function ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ft(t)}p.setRequestHeader=function(t,e){this.v.append(t,e)};p.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ft(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Rf=v.JSON.parse;function O(t){U.call(this),this.headers=new pt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lc,this.K=this.L=!1}j(O,U);var lc="",Df=/^https?$/i,Of=["POST","PUT"];p=O.prototype;p.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cr.g(),this.C=this.u?Ys(this.u):Ys(cr),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Zs(this,s);return}t=n||"";const r=new pt(this.headers);i&&Zr(i,function(s,o){r.set(o,s)}),i=jd(r.T()),n=v.FormData&&t instanceof v.FormData,!(0<=Aa(Of,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dc(this),0<this.B&&((this.K=Pf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=Xr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zs(this,s)}};function Pf(t){return ct&&zd()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Lf(t){return t.toLowerCase()=="content-type"}p.pa=function(){typeof Fr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function Zs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,uc(t),yi(t)}function uc(t){t.D||(t.D=!0,B(t,"complete"),B(t,"error"))}p.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,B(this,"complete"),B(this,"abort"),yi(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yi(this,!0)),O.Z.M.call(this)};p.Fa=function(){this.s||(this.F||this.v||this.l?hc(this):this.cb())};p.cb=function(){hc(this)};function hc(t){if(t.h&&typeof Fr!="undefined"&&(!t.C[1]||fe(t)!=4||t.ba()!=2)){if(t.v&&fe(t)==4)Xr(t.Fa,0,t);else if(B(t,"readystatechange"),fe(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(Za)[1]||null;if(!r&&v.self&&v.self.location){var s=v.self.location.protocol;r=s.substr(0,s.length-1)}i=!Df.test(r?r.toLowerCase():"")}n=i}if(n)B(t,"complete"),B(t,"success");else{t.m=6;try{var o=2<fe(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",uc(t)}}finally{yi(t)}}}}function yi(t,e){if(t.g){dc(t);const n=t.g,i=t.C[0]?Un:null;t.g=null,t.C=null,e||B(t,"ready");try{n.onreadystatechange=i}catch{}}}function dc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(v.clearTimeout(t.A),t.A=null)}function fe(t){return t.g?t.g.readyState:0}p.ba=function(){try{return 2<fe(this)?this.g.status:-1}catch{return-1}};p.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Rf(e)}};function eo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}p.Da=function(){return this.m};p.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mf(t){let e="";return $r(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function rs(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Mf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):k(t,e,n))}function Et(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fc(t){this.za=0,this.l=[],this.h=new ui,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Et("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Et("baseRetryDelayMs",5e3,t),this.$a=Et("retryDelaySeedMs",1e4,t),this.Ya=Et("forwardChannelMaxRetries",2,t),this.ra=Et("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ic(t&&t.concurrentRequestLimit),this.Ca=new Cf,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}p=fc.prototype;p.ma=8;p.G=1;function ss(t){if(pc(t),t.G==3){var e=t.V++,n=me(t.F);k(n,"SID",t.J),k(n,"RID",e),k(n,"TYPE","terminate"),un(t,n),e=new on(t,t.h,e,void 0),e.K=2,e.v=gi(me(n)),n=!1,v.navigator&&v.navigator.sendBeacon&&(n=v.navigator.sendBeacon(e.v.toString(),"")),!n&&v.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ic(e.l,null),e.g.ea(e.v)),e.F=Date.now(),an(e)}_c(t)}p.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function vi(t){t.g&&(as(t),t.g.cancel(),t.g=null)}function pc(t){vi(t),t.u&&(v.clearTimeout(t.u),t.u=null),qn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&v.clearTimeout(t.m),t.m=null)}function Ki(t,e){t.l.push(new Sf(t.Za++,e)),t.G==3&&wi(t)}function wi(t){rc(t.i)||t.m||(t.m=!0,zr(t.Ha,t),t.C=0)}function xf(t,e){return sc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=rn($(t.Ha,t,e),wc(t,t.C)),t.C++,!0)}p.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new on(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=ka(s),Na(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gc(this,r,e),n=me(this.F),k(n,"RID",t),k(n,"CVER",22),this.D&&k(n,"X-HTTP-Session-Id",this.D),un(this,n),this.o&&s&&rs(n,this.o,s),ts(this.i,r),this.Ra&&k(n,"TYPE","init"),this.ja?(k(n,"$req",e),k(n,"SID","null"),r.$=!0,ur(r,n,null)):ur(r,n,e),this.G=2}}else this.G==3&&(t?to(this,t):this.l.length==0||rc(this.i)||to(this))};function to(t,e){var n;e?n=e.m:n=t.V++;const i=me(t.F);k(i,"SID",t.J),k(i,"RID",n),k(i,"AID",t.U),un(t,i),t.o&&t.s&&rs(i,t.o,t.s),n=new on(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=gc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ts(t.i,n),ur(n,i,e)}function un(t,e){t.j&&Zr({},function(n,i){k(e,i,n)})}function gc(t,e,n){n=Math.min(t.l.length,n);var i=t.j?$(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=s,0>l)s=Math.max(0,r[c].h-100),a=!1;else try{kf(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function mc(t){t.g||t.u||(t.Y=1,zr(t.Ga,t),t.A=0)}function os(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=rn($(t.Ga,t),wc(t,t.A)),t.A++,!0)}p.Ga=function(){if(this.u=null,yc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=rn($(this.bb,this),t)}};p.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,G(10),vi(this),yc(this))};function as(t){t.B!=null&&(v.clearTimeout(t.B),t.B=null)}function yc(t){t.g=new on(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=me(t.oa);k(e,"RID","rpc"),k(e,"SID",t.J),k(e,"CI",t.N?"0":"1"),k(e,"AID",t.U),un(t,e),k(e,"TYPE","xmlhttp"),t.o&&t.s&&rs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=gi(me(e)),n.s=null,n.U=!0,Xa(n,t)}p.ab=function(){this.v!=null&&(this.v=null,vi(this),os(this),G(19))};function qn(t){t.v!=null&&(v.clearTimeout(t.v),t.v=null)}function vc(t,e){var n=null;if(t.g==e){qn(t),as(t),t.g=null;var i=2}else if(dr(t.i,e))n=e.D,oc(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=hi(),B(i,new Ka(i,n,e,r)),wi(t)}else mc(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&xf(t,e)||i==2&&os(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Pe(t,5);break;case 4:Pe(t,10);break;case 3:Pe(t,6);break;default:Pe(t,2)}}}function wc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pe(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=$(t.jb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Bn(n,"https"),gi(n)),Nf(n.toString(),i)}else G(2);t.G=0,t.j&&t.j.va(e),_c(t),pc(t)}p.jb=function(t){t?(this.h.info("Successfully pinged google.com"),G(2)):(this.h.info("Failed to ping google.com"),G(1))};function _c(t){t.G=0,t.I=-1,t.j&&((ac(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Vr(t.l),t.l.length=0),t.j.ua())}function Ec(t,e,n){let i=yf(n);if(i.i!="")e&&jn(i,e+"."+i.i),Hn(i,i.m);else{const r=v.location;i=vf(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&$r(t.aa,function(r,s){k(i,s,r)}),e=t.D,n=t.sa,e&&n&&k(i,e,n),k(i,"VER",t.ma),un(t,i),i}function Ic(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new O(new cn({ib:!0})):new O(t.qa),e.L=t.H,e}function Tc(){}p=Tc.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Oa=function(){};function Kn(){if(ct&&!(10<=Number(Wd)))throw Error("Environmental error: no available transport.")}Kn.prototype.g=function(t,e){return new Q(t,e)};function Q(t,e){U.call(this),this.g=new fc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Fn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mt(this)}j(Q,U);Q.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),zr($(t.hb,t,e))),G(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ec(t,null,t.W),wi(t)};Q.prototype.close=function(){ss(this.g)};Q.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ki(this.g,e)}else this.v?(e={},e.__data__=Gr(t),Ki(this.g,e)):Ki(this.g,t)};Q.prototype.M=function(){this.g.j=null,delete this.j,ss(this.g),delete this.g,Q.Z.M.call(this)};function bc(t){Jr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}j(bc,Jr);function Sc(){Qr.call(this),this.status=1}j(Sc,Qr);function mt(t){this.g=t}j(mt,Tc);mt.prototype.xa=function(){B(this.g,"a")};mt.prototype.wa=function(t){B(this.g,new bc(t))};mt.prototype.va=function(t){B(this.g,new Sc(t))};mt.prototype.ua=function(){B(this.g,"b")};Kn.prototype.createWebChannel=Kn.prototype.g;Q.prototype.send=Q.prototype.u;Q.prototype.open=Q.prototype.m;Q.prototype.close=Q.prototype.close;di.NO_ERROR=0;di.TIMEOUT=8;di.HTTP_ERROR=6;Ga.COMPLETE="complete";za.EventType=sn;sn.OPEN="a";sn.CLOSE="b";sn.ERROR="c";sn.MESSAGE="d";U.prototype.listen=U.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.La;O.prototype.getLastErrorCode=O.prototype.Da;O.prototype.getStatus=O.prototype.ba;O.prototype.getResponseJson=O.prototype.Qa;O.prototype.getResponseText=O.prototype.ga;O.prototype.send=O.prototype.ea;var Uf=function(){return new Kn},Ff=function(){return hi()},Gi=di,Vf=Ga,$f=We,no={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Bf=cn,In=za,jf=O;const io="@firebase/firestore";/**
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
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let yt="9.6.7";/**
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
 */const je=new Ir("@firebase/firestore");function ro(){return je.logLevel}function m(t,...e){if(je.logLevel<=S.DEBUG){const n=e.map(cs);je.debug(`Firestore (${yt}): ${t}`,...n)}}function He(t,...e){if(je.logLevel<=S.ERROR){const n=e.map(cs);je.error(`Firestore (${yt}): ${t}`,...n)}}function so(t,...e){if(je.logLevel<=S.WARN){const n=e.map(cs);je.warn(`Firestore (${yt}): ${t}`,...n)}}function cs(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${yt}) INTERNAL ASSERTION FAILED: `+t;throw He(e),new Error(e)}function P(t,e){t||b()}function C(t,e){return t}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Hf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class Kf{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new xe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(P(typeof i.accessToken=="string"),new Hf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new z(e)}}class Gf{constructor(e,n,i){this.type="FirstParty",this.user=z.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class zf{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Gf(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xf{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const i=s=>{s.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(P(typeof n.token=="string"),this.p=n.token,new Wf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.I(i),this.T=i=>n.writeSequenceNumber(i))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function Yf(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */Ac.A=-1;class Cc{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Yf(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function A(t,e){return t<e?-1:t>e?1:0}function lt(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */class ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new ee(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?A(this.nanoseconds,e.nanoseconds):A(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new ee(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function oo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vt{constructor(e,n,i){n===void 0?n=0:n>e.length&&b(),i===void 0?i=e.length-n:i>e.length-n&&b(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Vt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vt?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class R extends Vt{construct(e,n,i){return new R(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new _(d.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new R(n)}static emptyPath(){return new R([])}}const Jf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Vt{construct(e,n,i){return new W(e,n,i)}static isValidIdentifier(e){return Jf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new _(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new _(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class fr{constructor(e){this.fields=e,e.sort(W.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return lt(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ye(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return A(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const Qf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qe(t){if(P(!!t),typeof t=="string"){let e=0;const n=Qf.exec(t);if(P(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:F(t.seconds),nanos:F(t.nanos)}}function F(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $t(t){return typeof t=="string"?ye.fromBase64String(t):ye.fromUint8Array(t)}/**
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
 */function Zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gn(t){const e=qe(t.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class ep{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Bt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function dn(t){return t==null}function zn(t){return t===0&&1/t==-1/0}function tp(t){return typeof t=="number"&&Number.isInteger(t)&&!zn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(R.fromString(e))}static fromName(e){return new I(R.fromString(e).popFirst(5))}static empty(){return new I(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return R.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new R(e.slice()))}}function ut(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zf(t)?4:10:b()}function le(t,e){if(t===e)return!0;const n=ut(t);if(n!==ut(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gn(t).isEqual(Gn(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=qe(i.timestampValue),o=qe(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return $t(i.bytesValue).isEqual($t(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return F(i.geoPointValue.latitude)===F(r.geoPointValue.latitude)&&F(i.geoPointValue.longitude)===F(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return F(i.integerValue)===F(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=F(i.doubleValue),o=F(r.doubleValue);return s===o?zn(s)===zn(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return lt(t.arrayValue.values||[],e.arrayValue.values||[],le);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(oo(s)!==oo(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!le(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function jt(t,e){return(t.values||[]).find(n=>le(n,e))!==void 0}function ht(t,e){if(t===e)return 0;const n=ut(t),i=ut(e);if(n!==i)return A(n,i);switch(n){case 0:return 0;case 1:return A(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=F(r.integerValue||r.doubleValue),a=F(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ao(t.timestampValue,e.timestampValue);case 4:return ao(Gn(t),Gn(e));case 5:return A(t.stringValue,e.stringValue);case 6:return function(r,s){const o=$t(r),a=$t(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=A(o[c],a[c]);if(l!==0)return l}return A(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=A(F(r.latitude),F(s.latitude));return o!==0?o:A(F(r.longitude),F(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ht(o[c],a[c]);if(l)return l}return A(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=A(a[u],l[u]);if(h!==0)return h;const g=ht(o[a[u]],c[l[u]]);if(g!==0)return g}return A(a.length,l.length)}(t.mapValue,e.mapValue);default:throw b()}}function ao(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return A(t,e);const n=qe(t),i=qe(e),r=A(n.seconds,i.seconds);return r!==0?r:A(n.nanos,i.nanos)}function it(t){return pr(t)}function pr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=qe(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$t(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=pr(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${pr(i.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function gr(t){return!!t&&"integerValue"in t}function ls(t){return!!t&&"arrayValue"in t}function Nn(t){return!!t&&"mapValue"in t}function kt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=kt(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kt(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class re{constructor(e){this.value=e}static empty(){return new re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Nn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kt(n)}setAll(e){let n=W.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=kt(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return le(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Nn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){hn(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new re(kt(this.value))}}function Nc(t){const e=[];return hn(t.fields,(n,i)=>{const r=new W([n]);if(Nn(i)){const s=Nc(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new fr(e)}/**
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
 */class te{constructor(e,n,i,r,s,o){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new te(e,0,M.min(),M.min(),re.empty(),0)}static newFoundDocument(e,n,i){return new te(e,1,n,M.min(),i,0)}static newNoDocument(e,n){return new te(e,2,n,M.min(),re.empty(),0)}static newUnknownDocument(e,n){return new te(e,3,n,M.min(),re.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class np{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function co(t,e=null,n=[],i=[],r=null,s=null,o=null){return new np(t,e,n,i,r,s,o)}function us(t){const e=C(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(r=i).field.canonicalString()+r.op.toString()+it(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),dn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>it(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>it(i)).join(",")),e.P=n}return e.P}function ip(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${it(i.value)}`;var i}).join(", ")}]`),dn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>it(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>it(n)).join(",")),`Target(${e})`}function hs(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!hp(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!le(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uo(t.startAt,e.startAt)&&uo(t.endAt,e.endAt)}class X extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,i):new rp(e,n,i):n==="array-contains"?new ap(e,i):n==="in"?new cp(e,i):n==="not-in"?new lp(e,i):n==="array-contains-any"?new up(e,i):new X(e,n,i)}static v(e,n,i){return n==="in"?new sp(e,i):new op(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(ht(n,this.value)):n!==null&&ut(this.value)===ut(n)&&this.V(ht(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class rp extends X{constructor(e,n,i){super(e,n,i),this.key=I.fromName(i.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.V(n)}}class sp extends X{constructor(e,n){super(e,"in",n),this.keys=Rc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class op extends X{constructor(e,n){super(e,"not-in",n),this.keys=Rc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Rc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>I.fromName(i.referenceValue))}class ap extends X{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ls(n)&&jt(n.arrayValue,this.value)}}class cp extends X{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jt(this.value.arrayValue,n)}}class lp extends X{constructor(e,n){super(e,"not-in",n)}matches(e){if(jt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jt(this.value.arrayValue,n)}}class up extends X{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ls(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>jt(this.value.arrayValue,i))}}class Wn{constructor(e,n){this.position=e,this.inclusive=n}}class Nt{constructor(e,n="asc"){this.field=e,this.dir=n}}function hp(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function lo(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),n.key):i=ht(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function uo(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!le(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _i{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function dp(t,e,n,i,r,s,o,a){return new _i(t,e,n,i,r,s,o,a)}function fp(t){return new _i(t)}function pp(t){return!dn(t.limit)&&t.limitType==="F"}function gp(t){return!dn(t.limit)&&t.limitType==="L"}function mp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yp(t){for(const e of t.filters)if(e.S())return e.field;return null}function vp(t){return t.collectionGroup!==null}function Ht(t){const e=C(t);if(e.D===null){e.D=[];const n=yp(e),i=mp(e);if(n!==null&&i===null)n.isKeyField()||e.D.push(new Nt(n)),e.D.push(new Nt(W.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Nt(W.keyField(),s))}}}return e.D}function Xn(t){const e=C(t);if(!e.C)if(e.limitType==="F")e.C=co(e.path,e.collectionGroup,Ht(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ht(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Nt(s.field,o))}const i=e.endAt?new Wn(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Wn(e.startAt.position,!e.startAt.inclusive):null;e.C=co(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.C}function wp(t,e,n){return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return hs(Xn(t),Xn(e))&&t.limitType===e.limitType}function Oc(t){return`${us(Xn(t))}|lt:${t.limitType}`}function ho(t){return`Query(target=${ip(Xn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):I.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=lo(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Ht(n),i)||n.endAt&&!function(r,s,o){const a=lo(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Ht(n),i))}(t,e)}function _p(t){return(e,n)=>{let i=!1;for(const r of Ht(t)){const s=Ep(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Ep(t,e,n){const i=t.field.isKeyField()?I.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ht(a,c):b()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return b()}}/**
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
 */function Lc(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zn(e)?"-0":e}}function Mc(t){return{integerValue:""+t}}function Ip(t,e){return tp(e)?Mc(e):Lc(t,e)}/**
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
 */class Ei{constructor(){this._=void 0}}function Tp(t,e,n){return t instanceof Yn?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof qt?Uc(t,e):t instanceof Kt?Fc(t,e):function(i,r){const s=xc(i,r),o=fo(s)+fo(i.k);return gr(s)&&gr(i.k)?Mc(o):Lc(i.O,o)}(t,e)}function bp(t,e,n){return t instanceof qt?Uc(t,e):t instanceof Kt?Fc(t,e):n}function xc(t,e){return t instanceof Jn?gr(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Yn extends Ei{}class qt extends Ei{constructor(e){super(),this.elements=e}}function Uc(t,e){const n=Vc(e);for(const i of t.elements)n.some(r=>le(r,i))||n.push(i);return{arrayValue:{values:n}}}class Kt extends Ei{constructor(e){super(),this.elements=e}}function Fc(t,e){let n=Vc(e);for(const i of t.elements)n=n.filter(r=>!le(r,i));return{arrayValue:{values:n}}}class Jn extends Ei{constructor(e,n){super(),this.O=e,this.k=n}}function fo(t){return F(t.integerValue||t.doubleValue)}function Vc(t){return ls(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Sp(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof qt&&i instanceof qt||n instanceof Kt&&i instanceof Kt?lt(n.elements,i.elements,le):n instanceof Jn&&i instanceof Jn?le(n.k,i.k):n instanceof Yn&&i instanceof Yn}(t.transform,e.transform)}class Ap{constructor(e,n){this.version=e,this.transformResults=n}}class rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ii{}function Cp(t,e,n){t instanceof Ti?function(i,r,s){const o=i.value.clone(),a=mo(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fn?function(i,r,s){if(!Rn(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=mo(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll($c(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function mr(t,e,n){t instanceof Ti?function(i,r,s){if(!Rn(i.precondition,r))return;const o=i.value.clone(),a=yo(i.fieldTransforms,s,r);o.setAll(a),r.convertToFoundDocument(go(r),o).setHasLocalMutations()}(t,e,n):t instanceof fn?function(i,r,s){if(!Rn(i.precondition,r))return;const o=yo(i.fieldTransforms,s,r),a=r.data;a.setAll($c(i)),a.setAll(o),r.convertToFoundDocument(go(r),a).setHasLocalMutations()}(t,e,n):function(i,r){Rn(i.precondition,r)&&r.convertToNoDocument(M.min())}(t,e)}function kp(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=xc(i.transform,r||null);s!=null&&(n==null&&(n=re.empty()),n.set(i.field,s))}return n||null}function po(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&lt(n,i,(r,s)=>Sp(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function go(t){return t.isFoundDocument()?t.version:M.min()}class Ti extends Ii{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}}class fn extends Ii{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}function $c(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function mo(t,e,n){const i=new Map;P(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,bp(o,a,n[r]))}return i}function yo(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,Tp(s,o,e))}return i}class Np extends Ii{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Rp extends Ii{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */var D,T;function Dp(t){switch(t){default:return b();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Op(t){if(t===void 0)return He("GRPC error has no .code"),d.UNKNOWN;switch(t){case D.OK:return d.OK;case D.CANCELLED:return d.CANCELLED;case D.UNKNOWN:return d.UNKNOWN;case D.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case D.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case D.INTERNAL:return d.INTERNAL;case D.UNAVAILABLE:return d.UNAVAILABLE;case D.UNAUTHENTICATED:return d.UNAUTHENTICATED;case D.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case D.NOT_FOUND:return d.NOT_FOUND;case D.ALREADY_EXISTS:return d.ALREADY_EXISTS;case D.PERMISSION_DENIED:return d.PERMISSION_DENIED;case D.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case D.ABORTED:return d.ABORTED;case D.OUT_OF_RANGE:return d.OUT_OF_RANGE;case D.UNIMPLEMENTED:return d.UNIMPLEMENTED;case D.DATA_LOSS:return d.DATA_LOSS;default:return b()}}(T=D||(D={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Z{constructor(e,n){this.comparator=e,this.root=n||V.EMPTY}insert(e,n){return new Z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,V.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,V.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tn(this.root,e,this.comparator,!0)}}class Tn{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class V{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:V.RED,this.left=r!=null?r:V.EMPTY,this.right=s!=null?s:V.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new V(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return V.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return V.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}V.EMPTY=null,V.RED=!0,V.BLACK=!1;V.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,i,r){return this}insert(t,e,n){return new V(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class J{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vo(this.data.getIterator())}getIteratorFrom(e){return new vo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof J)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new J(this.comparator);return n.data=e,n}}class vo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Pp=new Z(I.comparator);function wo(){return Pp}const Lp=new Z(I.comparator);function _o(){return Lp}const Mp=new Z(I.comparator),xp=new J(I.comparator);function Ke(...t){let e=xp;for(const n of t)e=e.add(n);return e}const Up=new J(A);function Fp(){return Up}class Vp{constructor(e,n){this.databaseId=e,this.N=n}}function yr(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $p(t,e){return t.N?e.toBase64():e.toUint8Array()}function Bp(t,e){return yr(t,e.toTimestamp())}function st(t){return P(!!t),M.fromTimestamp(function(e){const n=qe(e);return new ee(n.seconds,n.nanos)}(t))}function Bc(t,e){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jp(t){const e=R.fromString(t);return P(Qp(e)),e}function vr(t,e){return Bc(t.databaseId,e.path)}function Hp(t){const e=jp(t);return e.length===4?R.emptyPath():Kp(e)}function qp(t){return new R(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kp(t){return P(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Eo(t,e,n){return{name:vr(t,e),fields:n.value.mapValue.fields}}function Gp(t,e){let n;if(e instanceof Ti)n={update:Eo(t,e.key,e.value)};else if(e instanceof Np)n={delete:vr(t,e.key)};else if(e instanceof fn)n={update:Eo(t,e.key,e.data),updateMask:Jp(e.fieldMask)};else{if(!(e instanceof Rp))return b();n={verify:vr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Yn)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qt)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Kt)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Jn)return{fieldPath:s.field.canonicalString(),increment:o.k};throw b()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Bp(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:b()}(t,e.precondition)),n}function zp(t,e){return t&&t.length>0?(P(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?st(i.updateTime):st(r);return s.isEqual(M.min())&&(s=st(r)),new Ap(s,i.transformResults||[])}(n,e))):[]}function Wp(t){let e=Hp(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){P(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=jc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Nt(Ze(h.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,dn(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,g=u.values||[];return new Wn(g,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,g=u.values||[];return new Wn(g,h)}(n.endAt)),dp(e,r,o,s,a,"F",c,l)}function jc(t){return t?t.unaryFilter!==void 0?[Yp(t)]:t.fieldFilter!==void 0?[Xp(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>jc(e)).reduce((e,n)=>e.concat(n)):b():[]}function Ze(t){return W.fromServerFormat(t.fieldPath)}function Xp(t){return X.create(Ze(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yp(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ze(t.unaryFilter.field);return X.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ze(t.unaryFilter.field);return X.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ze(t.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ze(t.unaryFilter.field);return X.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function Jp(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const Zp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,i)=>{n(e)})}static reject(e){return new f((n,i)=>{i(e)})}static waitFor(e){return new f((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=f.resolve(!1);for(const i of e)n=n.next(r=>r?f.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tg{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&Cp(s,e,i[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&mr(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&mr(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(M.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&lt(this.mutations,e.mutations,(n,i)=>po(n,i))&&lt(this.baseMutations,e.baseMutations,(n,i)=>po(n,i))}}class ds{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){P(e.mutations.length===i.length);let r=Mp;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new ds(e,n,i,r)}}/**
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
 */class ng{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ig{constructor(e){this.Ht=e}}function rg(t){const e=Wp({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wp(e,e.limit,"L"):e}/**
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
 */class sg{constructor(){this.xe=new og}addToCollectionParentIndex(e,n){return this.xe.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n,i){return f.resolve(Ke())}getFieldIndex(e,n){return f.resolve(null)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}updateCollectionGroup(e,n,i){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class og{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new J(R.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new J(R.comparator)).toArray()}}/**
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
 */class dt{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new dt(0)}static Je(){return new dt(-1)}}/**
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
 */async function Hc(t){if(t.code!==d.FAILED_PRECONDITION||t.message!==Zp)throw t;m("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class pn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),!0;return!1}forEach(e){hn(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return kc(this.inner)}}/**
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
 */class ag{constructor(){this.changes=new pn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?f.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cg{constructor(e,n,i){this.qn=e,this.gs=n,this.indexManager=i}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.ps(e,n,i))}ps(e,n,i){return this.qn.getEntry(e,n).next(r=>{for(const s of i)s.applyToLocalView(r);return r})}Is(e,n){e.forEach((i,r)=>{for(const s of n)s.applyToLocalView(r)})}Es(e,n){return this.qn.getEntries(e,n).next(i=>this.Ts(e,i).next(()=>i))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.Is(n,i))}As(e,n,i){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Rs(e,n.path):vp(n)?this.Ps(e,n,i):this.bs(e,n,i)}Rs(e,n){return this.ys(e,new I(n)).next(i=>{let r=_o();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}Ps(e,n,i){const r=n.collectionGroup;let s=_o();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const c=function(l,u){return new _i(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.bs(e,c,i).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}bs(e,n,i){let r;return this.qn.getAll(e,n.path,i).next(s=>(r=s,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=te.newInvalidDocument(c),r=r.insert(c,l)),mr(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((s,o)=>{Pc(n,o)||(r=r.remove(s))}),r))}}/**
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
 */class fs{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.vs=i,this.Vs=r}static Ss(e,n){let i=Ke(),r=Ke();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new fs(e,n.fromCache,i,r)}}/**
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
 */class lg{Ds(e){this.Cs=e}As(e,n,i,r){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(M.min())?this.Ns(e,n):this.Cs.Es(e,r).next(s=>{const o=this.xs(n,s);return(pp(n)||gp(n))&&this.ks(n.limitType,o,r,i)?this.Ns(e,n):(ro()<=S.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ho(n)),this.Cs.As(e,n,i).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,n){let i=new J(_p(e));return n.forEach((r,s)=>{Pc(e,s)&&(i=i.add(s))}),i}ks(e,n,i,r){if(i.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ns(e,n){return ro()<=S.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",ho(n)),this.Cs.As(e,n,M.min())}}/**
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
 */class ug{constructor(e,n,i,r){this.persistence=e,this.Os=n,this.O=r,this.Ms=new Z(A),this.$s=new pn(s=>us(s),hs),this.Fs=M.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(i)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new cg(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function hg(t,e,n,i){return new ug(t,e,n,i)}async function qc(t,e){const n=C(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.gs.getAllMutationBatches(i).next(s=>(r=s,n.Ls(e),n.gs.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=Ke();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.Us.Es(i,c).next(l=>({qs:l,removedBatchIds:o,addedBatchIds:a}))})})}function dg(t,e){const n=C(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let g=f.resolve();return h.forEach(E=>{g=g.next(()=>l.getEntry(a,E)).next(y=>{const N=c.docVersions.get(E);P(N!==null),y.version.compareTo(N)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),g.next(()=>o.gs.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.gs.performConsistencyCheck(i)).next(()=>n.Us.Es(i,r))})}function fg(t){const e=C(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function pg(t,e){const n=C(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(i,e)))}/**
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
 */class gg{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return f.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var i;return this.Ws.set(n.id,{id:(i=n).id,version:i.version,createTime:st(i.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(i){return{name:i.name,query:rg(i.bundledQuery),readTime:st(i.readTime)}}(n)),f.resolve()}}/**
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
 */class mg{constructor(){this.overlays=new Z(I.comparator),this.Hs=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}saveOverlays(e,n,i){return i.forEach(r=>{this.Yt(e,n,r)}),f.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.Hs.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Hs.delete(i)),f.resolve()}getOverlaysForCollection(e,n,i){const r=new Map,s=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Z((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=s.get(l.largestBatchId);u===null&&(u=new Map,s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=new Map,c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(u,l)),!(a.size>=r)););return f.resolve(a)}Yt(e,n,i){if(i===null)return;const r=this.overlays.get(i.key);r!==null&&this.Hs.get(r.largestBatchId).delete(i.key),this.overlays=this.overlays.insert(i.key,new ng(n,i));let s=this.Hs.get(n);s===void 0&&(s=new Set,this.Hs.set(n,s)),s.add(i.key)}}/**
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
 */class ps{constructor(){this.Js=new J(L.Ys),this.Xs=new J(L.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const i=new L(e,n);this.Js=this.Js.add(i),this.Xs=this.Xs.add(i)}ti(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ei(new L(e,n))}ni(e,n){e.forEach(i=>this.removeReference(i,n))}si(e){const n=new I(new R([])),i=new L(n,e),r=new L(n,e+1),s=[];return this.Xs.forEachInRange([i,r],o=>{this.ei(o),s.push(o.key)}),s}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new I(new R([])),i=new L(n,e),r=new L(n,e+1);let s=Ke();return this.Xs.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new L(e,0),i=this.Js.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class L{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return I.comparator(e.key,n.key)||A(e.oi,n.oi)}static Zs(e,n){return A(e.oi,n.oi)||I.comparator(e.key,n.key)}}/**
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
 */class yg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new J(L.Ys)}checkEmpty(e){return f.resolve(this.gs.length===0)}addMutationBatch(e,n,i,r){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new tg(s,n,i,r);this.gs.push(o);for(const a of r)this.ui=this.ui.add(new L(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.hi(i),s=r<0?0:r;return f.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return f.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new L(n,0),r=new L(n,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([i,r],o=>{const a=this.ai(o.oi);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new J(A);return n.forEach(r=>{const s=new L(r,0),o=new L(r,Number.POSITIVE_INFINITY);this.ui.forEachInRange([s,o],a=>{i=i.add(a.oi)})}),f.resolve(this.li(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;I.isDocumentKey(s)||(s=s.child(""));const o=new L(new I(s),0);let a=new J(A);return this.ui.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.oi)),!0)},o),f.resolve(this.li(a))}li(e){const n=[];return e.forEach(i=>{const r=this.ai(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){P(this.fi(n.batchId,"removed")===0),this.gs.shift();let i=this.ui;return f.forEach(n.mutations,r=>{const s=new L(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=i})}Qe(e){}containsKey(e,n){const i=new L(n,0),r=this.ui.firstAfterOrEqual(i);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,f.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
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
 */class vg{constructor(e){this.di=e,this.docs=new Z(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.di(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return f.resolve(i?i.document.mutableCopy():te.newInvalidDocument(n))}getEntries(e,n){let i=wo();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():te.newInvalidDocument(r))}),f.resolve(i)}getAll(e,n,i){let r=wo();const s=new I(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(i)<=0||(r=r.insert(c.key,c.mutableCopy()))}return f.resolve(r)}_i(e,n){return f.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new wg(this)}getSize(e){return f.resolve(this.size)}}class wg extends ag{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(i)}),f.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
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
 */class _g{constructor(e){this.persistence=e,this.wi=new pn(n=>us(n),hs),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.mi=0,this.gi=new ps,this.targetCount=0,this.yi=dt.He()}forEachTarget(e,n){return this.wi.forEach((i,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.mi&&(this.mi=n),f.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new dt(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.Ze(n),f.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.wi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(s).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const i=this.wi.get(n)||null;return f.resolve(i)}addMatchingKeys(e,n,i){return this.gi.ti(n,i),f.resolve()}removeMatchingKeys(e,n,i){this.gi.ni(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),f.resolve()}getMatchingKeysForTargetId(e,n){const i=this.gi.ri(n);return f.resolve(i)}containsKey(e,n){return f.resolve(this.gi.containsKey(n))}}/**
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
 */class Eg{constructor(e,n){this.pi={},this.overlays={},this.Nn=new Ac(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new _g(this),this.indexManager=new sg,this.qn=function(i){return new vg(i)}(i=>this.referenceDelegate.Ii(i)),this.O=new ig(n),this.Kn=new gg(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mg,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.pi[e.toKey()];return i||(i=new yg(n,this.referenceDelegate),this.pi[e.toKey()]=i),i}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,i){m("MemoryPersistence","Starting transaction:",e);const r=new Ig(this.Nn.next());return this.referenceDelegate.Ei(),i(r).next(s=>this.referenceDelegate.Ti(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ai(e,n){return f.or(Object.values(this.pi).map(i=>()=>i.containsKey(e,n)))}}class Ig extends eg{constructor(e){super(),this.currentSequenceNumber=e}}class gs{constructor(e){this.persistence=e,this.Ri=new ps,this.Pi=null}static bi(e){return new gs(e)}get vi(){if(this.Pi)return this.Pi;throw b()}addReference(e,n,i){return this.Ri.addReference(i,n),this.vi.delete(i.toString()),f.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.vi.add(i.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),f.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(r=>this.vi.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.vi.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.vi,i=>{const r=I.fromPath(i);return this.Vi(e,r).next(s=>{s||n.removeEntry(r,M.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(i=>{i?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return f.or([()=>f.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Io{constructor(){this.activeTargetIds=Fp()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tg{constructor(){this._r=new Io,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,i){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Io,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class bg{mr(e){}shutdown(){}}/**
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
 */class To{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Sg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Ag{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
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
 */class Cg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,i,r,s){const o=this.$r(e,n);m("RestConnection","Sending: ",o,i);const a={};return this.Fr(a,r,s),this.Br(e,o,a,i).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw so("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",i),c})}Lr(e,n,i,r,s){return this.Mr(e,n,i,r,s)}Fr(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+yt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}$r(e,n){const i=Sg[e];return`${this.kr}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,i,r){return new Promise((s,o)=>{const a=new jf;a.listenOnce(Vf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Gi.NO_ERROR:const l=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Gi.TIMEOUT:m("Connection",'RPC "'+e+'" timed out'),o(new _(d.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const u=a.getStatus();if(m("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const g=function(E){const y=E.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(y)>=0?y:d.UNKNOWN}(h.status);o(new _(g,h.message))}else o(new _(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(d.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{m("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,i,15)})}Ur(e,n,i){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Uf(),o=Ff(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Bf({})),this.Fr(a.initMessageHeaders,n,i),Ho()||Ko()||Vl()||Go()||$l()||qo()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");m("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const g=new Ag({Ar:y=>{h?m("Connection","Not sending because WebChannel is closed:",y):(u||(m("Connection","Opening WebChannel transport."),l.open(),u=!0),m("Connection","WebChannel sending:",y),l.send(y))},Rr:()=>l.close()}),E=(y,N,Y)=>{y.listen(N,ne=>{try{Y(ne)}catch(ie){setTimeout(()=>{throw ie},0)}})};return E(l,In.EventType.OPEN,()=>{h||m("Connection","WebChannel transport opened.")}),E(l,In.EventType.CLOSE,()=>{h||(h=!0,m("Connection","WebChannel transport closed"),g.Cr())}),E(l,In.EventType.ERROR,y=>{h||(h=!0,so("Connection","WebChannel transport errored:",y),g.Cr(new _(d.UNAVAILABLE,"The operation could not be completed")))}),E(l,In.EventType.MESSAGE,y=>{var N;if(!h){const Y=y.data[0];P(!!Y);const ne=Y,ie=ne.error||((N=ne[0])===null||N===void 0?void 0:N.error);if(ie){m("Connection","WebChannel received error:",ie);const Xe=ie.status;let Ye=function(wt){const _t=D[wt];if(_t!==void 0)return Op(_t)}(Xe),vt=ie.message;Ye===void 0&&(Ye=d.INTERNAL,vt="Unknown error status: "+Xe+" with message "+ie.message),h=!0,g.Cr(new _(Ye,vt)),l.close()}else m("Connection","WebChannel received:",Y),g.Nr(Y)}}),E(o,$f.STAT_EVENT,y=>{y.stat===no.PROXY?m("Connection","Detected buffering proxy"):y.stat===no.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.Dr()},0),g}}function zi(){return typeof document!="undefined"?document:null}/**
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
 */function Si(t){return new Vp(t,!0)}class Kc{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Sn=e,this.timerId=n,this.qr=i,this.Kr=r,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),i=Math.max(0,Date.now()-this.Wr),r=Math.max(0,n-i);r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class kg{constructor(e,n,i,r,s,o,a,c){this.Sn=e,this.Xr=i,this.Zr=r,this.eo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Kc(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(He(n.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.no===n&&this.po(i,r)},i=>{e(()=>{const r=new _(d.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Io(r)})})}po(e,n){const i=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{i(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(r=>{i(()=>this.Io(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return m("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ng extends kg{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=zp(e.writeResults,e.commitTime),i=st(e.commitTime);return this.listener.Vo(i,n)}return P(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=qp(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Gp(this.O,i))};this.fo(n)}}/**
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
 */class Rg extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=i,this.O=r,this.Co=!1}No(){if(this.Co)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.eo.Mr(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(d.UNKNOWN,r.toString())})}Lr(e,n,i){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.eo.Lr(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new _(d.UNKNOWN,r.toString())})}terminate(){this.Co=!0}}class Dg{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(He(n),this.Oo=!1):m("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
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
 */class Og{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr(o=>{i.enqueueAndForget(async()=>{mn(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.Ko.add(4),await gn(c),c.Qo.set("Unknown"),c.Ko.delete(4),await Ai(c)}(this))})}),this.Qo=new Dg(i,r)}}async function Ai(t){if(mn(t))for(const e of t.Go)await e(!0)}async function gn(t){for(const e of t.Go)await e(!1)}function mn(t){return C(t).Ko.size===0}async function Gc(t,e,n){if(!bi(e))throw e;t.Ko.add(1),await gn(t),t.Qo.set("Offline"),n||(n=()=>fg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await Ai(t)})}function zc(t,e){return e().catch(n=>Gc(t,n,e))}async function Ci(t){const e=C(t),n=Ae(e);let i=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;Pg(e);)try{const r=await pg(e.localStore,i);if(r===null){e.Uo.length===0&&n.ho();break}i=r.batchId,Lg(e,r)}catch(r){await Gc(e,r)}Wc(e)&&Xc(e)}function Pg(t){return mn(t)&&t.Uo.length<10}function Lg(t,e){t.Uo.push(e);const n=Ae(t);n.co()&&n.bo&&n.vo(e.mutations)}function Wc(t){return mn(t)&&!Ae(t).oo()&&t.Uo.length>0}function Xc(t){Ae(t).start()}async function Mg(t){Ae(t).Do()}async function xg(t){const e=Ae(t);for(const n of t.Uo)e.vo(n.mutations)}async function Ug(t,e,n){const i=t.Uo.shift(),r=ds.from(i,e,n);await zc(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ci(t)}async function Fg(t,e){e&&Ae(t).bo&&await async function(n,i){if(r=i.code,Dp(r)&&r!==d.ABORTED){const s=n.Uo.shift();Ae(n).ao(),await zc(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ci(n)}var r}(t,e),Wc(t)&&Xc(t)}async function bo(t,e){const n=C(t);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const i=mn(n);n.Ko.add(3),await gn(n),i&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await Ai(n)}async function Vg(t,e){const n=C(t);e?(n.Ko.delete(2),await Ai(n)):e||(n.Ko.add(2),await gn(n),n.Qo.set("Unknown"))}function Ae(t){return t.Ho||(t.Ho=function(e,n,i){const r=C(e);return r.No(),new Ng(n,r.eo,r.authCredentials,r.appCheckCredentials,r.O,i)}(t.datastore,t.asyncQueue,{Pr:Mg.bind(null,t),vr:Fg.bind(null,t),So:xg.bind(null,t),Vo:Ug.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Ci(t)):(await t.Ho.stop(),t.Uo.length>0&&(m("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
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
 */class ms{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new ms(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yc(t,e){if(He("AsyncQueue",`${e}: ${t}`),bi(t))return new _(d.UNAVAILABLE,`${e}: ${t}`);throw t}class $g{constructor(){this.queries=new pn(e=>Oc(e),Dc),this.onlineState="Unknown",this.Zo=new Set}}function Bg(t){t.Zo.forEach(e=>{e.next()})}class jg{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new pn(a=>Oc(a),Dc),this.Nc=new Map,this.xc=new Set,this.kc=new Z(I.comparator),this.Oc=new Map,this.Mc=new ps,this.$c={},this.Fc=new Map,this.Bc=dt.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Hg(t,e,n){const i=zg(t);try{const r=await function(s,o){const a=C(s),c=ee.now(),l=o.reduce((h,g)=>h.add(g.key),Ke());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Us.Es(h,l).next(g=>{u=g;const E=[];for(const y of o){const N=kp(y,u.get(y.key));N!=null&&E.push(new fn(y.key,N,Nc(N.value.mapValue),rt.exists(!0)))}return a.gs.addMutationBatch(h,c,E,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.$c[s.currentUser.toKey()];c||(c=new Z(A)),c=c.insert(o,a),s.$c[s.currentUser.toKey()]=c}(i,r.batchId,n),await ki(i,r.changes),await Ci(i.remoteStore)}catch(r){const s=Yc(r,"Failed to persist write");n.reject(s)}}function So(t,e,n){const i=C(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Cc.forEach((s,o)=>{const a=o.view.tc(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=C(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.tc(o)&&(c=!0)}),c&&Bg(a)}(i.eventManager,e),r.length&&i.Dc.To(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function qg(t,e){const n=C(t),i=e.batch.batchId;try{const r=await dg(n.localStore,e);Qc(n,i,null),Jc(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ki(n,r)}catch(r){await Hc(r)}}async function Kg(t,e,n){const i=C(t);try{const r=await function(s,o){const a=C(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.gs.lookupMutationBatch(c,o).next(u=>(P(u!==null),l=u.keys(),a.gs.removeMutationBatch(c,u))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,l))})}(i.localStore,e);Qc(i,e,n),Jc(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ki(i,r)}catch(r){await Hc(r)}}function Jc(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function Qc(t,e,n){const i=C(t);let r=i.$c[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.$c[i.currentUser.toKey()]=r}}async function ki(t,e,n){const i=C(t),r=[],s=[],o=[];i.Cc.isEmpty()||(i.Cc.forEach((a,c)=>{o.push(i.Uc(c,e,n).then(l=>{if(l){i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=fs.Ss(c.targetId,l);s.push(u)}}))}),await Promise.all(o),i.Dc.To(r),await async function(a,c){const l=C(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(c,h=>f.forEach(h.vs,g=>l.persistence.referenceDelegate.addReference(u,h.targetId,g)).next(()=>f.forEach(h.Vs,g=>l.persistence.referenceDelegate.removeReference(u,h.targetId,g)))))}catch(u){if(!bi(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const g=l.Ms.get(h),E=g.snapshotVersion,y=g.withLastLimboFreeSnapshotVersion(E);l.Ms=l.Ms.insert(h,y)}}}(i.localStore,s))}async function Gg(t,e){const n=C(t);if(!n.currentUser.isEqual(e)){m("SyncEngine","User change. New user:",e.toKey());const i=await qc(n.localStore,e);n.currentUser=e,function(r,s){r.Fc.forEach(o=>{o.forEach(a=>{a.reject(new _(d.CANCELLED,s))})}),r.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ki(n,i.qs)}}function zg(t){const e=C(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kg.bind(null,e),e}class Wg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return hg(this.persistence,new lg,e.initialUser,this.O)}jc(e){return new Eg(gs.bi,this.O)}Gc(e){return new Tg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>So(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gg.bind(null,this.syncEngine),await Vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $g}createDatastore(e){const n=Si(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new Cg(r));var r;return function(s,o,a,c){return new Rg(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>So(this.syncEngine,a,0),o=To.Vt()?new To:new bg,new Og(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,l){const u=new jg(i,r,s,o,a,c);return l&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=C(e);m("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await gn(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
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
 */class Yg{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=z.UNAUTHENTICATED,this.clientId=Cc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{m("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(m("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Yc(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Jg(t,e){t.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await qc(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zg(t);m("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>bo(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>bo(e.remoteStore,s)),t.onlineComponents=e}async function Zg(t){return t.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await Jg(t,new Wg)),t.offlineComponents}async function em(t){return t.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Qg(t,new Xg)),t.onlineComponents}function tm(t){return em(t).then(e=>e.syncEngine)}const Ao=new Map;/**
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
 */function Zc(t,e,n){if(!n)throw new _(d.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nm(t,e,n,i){if(e===!0&&i===!0)throw new _(d.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Co(t){if(!I.isDocumentKey(t))throw new _(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ko(t){if(I.isDocumentKey(t))throw new _(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ys(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function im(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ys(t);throw new _(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class No{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vs{constructor(e,n,i){this._authCredentials=n,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new No({}),this._settingsFrozen=!1,e instanceof Bt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new _(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(r.options.projectId)}(e))}get app(){if(!this._app)throw new _(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new No(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qf;switch(n.type){case"gapi":const i=n.client;return P(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new zf(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new _(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ao.get(e);n&&(m("ComponentProvider","Removing Datastore"),Ao.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class pe{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new be(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}}class ws{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class be extends ws{constructor(e,n,i){super(e,n,fp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new I(e))}withConverter(e){return new be(this.firestore,e,this._path)}}function Qm(t,e,...n){if(t=ae(t),Zc("collection","path",e),t instanceof vs){const i=R.fromString(e,...n);return ko(i),new be(t,null,i)}{if(!(t instanceof pe||t instanceof be))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(R.fromString(e,...n));return ko(i),new be(t.firestore,null,i)}}function rm(t,e,...n){if(t=ae(t),arguments.length===1&&(e=Cc.R()),Zc("doc","path",e),t instanceof vs){const i=R.fromString(e,...n);return Co(i),new pe(t,null,new I(i))}{if(!(t instanceof pe||t instanceof be))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(R.fromString(e,...n));return Co(i),new pe(t.firestore,t instanceof be?t.converter:null,new I(i))}}/**
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
 */class sm{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Kc(this,"async_queue_retry"),this.yu=()=>{const n=zi();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=zi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new xe;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!bi(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(i=>{this._u=i,this.wu=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw He("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.wu=!1,i))));return this.hu=n,n}enqueueAfterDelay(e,n,i){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const r=ms.createAndSchedule(this,e,n,i,s=>this.Tu(s));return this.du.push(r),r}pu(){this._u&&b()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class el extends vs{constructor(e,n,i){super(e,n,i),this.type="firestore",this._queue=new sm,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||tl(this),this._firestoreClient.terminate()}}function Zm(t=Yo()){return Ar(t,"firestore").getImmediate()}function om(t){return t._firestoreClient||tl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tl(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new ep(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Yg(t._authCredentials,t._appCheckCredentials,t._queue,i)}/**
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
 */class nl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(ye.fromBase64String(e))}catch(n){throw new _(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class il{constructor(e){this._methodName=e}}/**
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
 */class rl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return A(this._lat,e._lat)||A(this._long,e._long)}}/**
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
 */const am=/^__.*__$/;class cm{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new fn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ti(e,this.data,n,this.fieldTransforms)}}function sl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class _s{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.O=i,this.ignoreUndefinedProperties=r,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new _s(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:i,Cu:!1});return r.Nu(e),r}xu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Su({path:i,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Qn(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(sl(this.Vu)&&am.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class lm{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=i||Si(e)}Fu(e,n,i,r=!1){return new _s({Vu:e,methodName:n,$u:i,path:W.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function um(t){const e=t._freezeSettings(),n=Si(t._databaseId);return new lm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hm(t,e,n,i,r,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,r);ll("Data must be an object, but it was:",o,i);const a=al(i,o);let c,l;if(s.merge)c=new fr(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const g=dm(e,h,n);if(!o.contains(g))throw new _(d.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);gm(u,g)||u.push(g)}c=new fr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cm(new re(a),c,l)}function ol(t,e){if(cl(t=ae(t)))return ll("Unsupported field value:",e,t),al(t,e);if(t instanceof il)return function(n,i){if(!sl(i.Vu))throw i.Ou(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ou(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=ol(o,i.ku(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ip(i.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ee.fromDate(n);return{timestampValue:yr(i.O,r)}}if(n instanceof ee){const r=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yr(i.O,r)}}if(n instanceof rl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gt)return{bytesValue:$p(i.O,n._byteString)};if(n instanceof pe){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Bc(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Ou(`Unsupported field value: ${ys(n)}`)}(t,e)}function al(t,e){const n={};return kc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hn(t,(i,r)=>{const s=ol(r,e.Du(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function cl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ee||t instanceof rl||t instanceof Gt||t instanceof pe||t instanceof il)}function ll(t,e,n){if(!cl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=ys(n);throw i==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+i)}}function dm(t,e,n){if((e=ae(e))instanceof nl)return e._internalPath;if(typeof e=="string")return pm(t,e);throw Qn("Field path arguments must be of type string or ",t,!1,void 0,n)}const fm=new RegExp("[~\\*/\\[\\]]");function pm(t,e,n){if(e.search(fm)>=0)throw Qn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nl(...e.split("."))._internalPath}catch{throw Qn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qn(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new _(d.INVALID_ARGUMENT,a+t+c)}function gm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function mm(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function ey(t,e){const n=im(t.firestore,el),i=rm(t),r=mm(t.converter,e);return ym(n,[hm(um(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,rt.exists(!1))]).then(()=>i)}function ym(t,e){return function(n,i){const r=new xe;return n.asyncQueue.enqueueAndForget(async()=>Hg(await tm(n),i,r)),r.promise}(om(t),e)}(function(t,e=!0){(function(n){yt=n})(Jt),ot(new Ue("firestore",(n,{options:i})=>{const r=n.getProvider("app").getImmediate(),s=new el(r,new Kf(n.getProvider("auth-internal")),new Xf(n.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC")),Te(io,"3.4.5",t),Te(io,"3.4.5","esm2017")})();function ty(t){const e=Math.cos(t*Math.PI*.5);return Math.abs(e)<1e-14?1:1-e}function Ro(t){return Object.prototype.toString.call(t)==="[object Date]"}function wr(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=e.map((r,s)=>wr(t[s],r));return r=>i.map(s=>s(r))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Ro(t)&&Ro(e)){t=t.getTime(),e=e.getTime();const s=e-t;return o=>new Date(t+o*s)}const i=Object.keys(e),r={};return i.forEach(s=>{r[s]=wr(t[s],e[s])}),s=>{const o={};return i.forEach(a=>{o[a]=r[a](s)}),o}}if(n==="number"){const i=e-t;return r=>t+r*i}throw new Error(`Cannot interpolate ${n} values`)}function ny(t,e={}){const n=Ml(t);let i,r=t;function s(o,a){if(t==null)return n.set(t=o),Promise.resolve();r=o;let c=i,l=!1,{delay:u=0,duration:h=400,easing:g=dl,interpolate:E=wr}=Wi(Wi({},e),a);if(h===0)return c&&(c.abort(),c=null),n.set(t=r),Promise.resolve();const y=yl()+u;let N;return i=vl(Y=>{if(Y<y)return!0;l||(N=E(t,o),typeof h=="function"&&(h=h(t,o)),l=!0),c&&(c.abort(),c=null);const ne=Y-y;return ne>h?(n.set(t=o),!1):(n.set(t=N(g(ne/h))),!0)}),i.promise}return{set:s,update:(o,a)=>s(o(r,t),a),subscribe:n.subscribe}}export{bm as $,Hm as A,Pl as B,Wi as C,Ml as D,Fm as E,_m as F,Im as G,Tm as H,Em as I,Tl as J,Le as K,Wm as L,Jm as M,Zm as N,Xm as O,Rs as P,_e as Q,Ym as R,zm as S,ey as T,Qm as U,vm as V,km as W,zt as X,wm as Y,ny as Z,ty as _,Al as a,Pm as a0,Nm as b,Rm as c,bl as d,Sl as e,Lm as f,Sm as g,Nl as h,Gm as i,Om as j,Am as k,Cm as l,Dm as m,Vm as n,Bm as o,$m as p,Dl as q,Um as r,pl as s,_r as t,xm as u,Mm as v,qm as w,Km as x,Ol as y,jm as z};
