import{a as _,b as h}from"./DbService-234868e0.js";import{P as m,Q as g,S as v,i as $,s as x,F as y,e as d,c as f,a as p,d as i,b as c,g as S,J as w,G as b,H as G,I,q as P,o as D}from"./vendor-f5de7273.js";const j=new m;async function V(){console.log("Show Google Sign in popup called");let s={data:null,access:!1};try{let e=await g(_,j);s.data=e,s.access=!0;let l=await h(e.user.uid,{photoCount:0});if(!l.success)return s.data=l.data,s.access=!1,s}catch(e){s.data=e.message,s.access=!1}return s}function q(s){let e,l,n;const r=s[1].default,t=y(r,s,s[0],null);return{c(){e=d("div"),l=d("div"),t&&t.c(),this.h()},l(a){e=f(a,"DIV",{style:!0,class:!0});var o=p(e);l=f(o,"DIV",{class:!0});var u=p(l);t&&t.l(u),u.forEach(i),o.forEach(i),this.h()},h(){c(l,"class","text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-10 "),c(e,"style",""),c(e,"class","snap-start bg-transparent flex items-center justify-center w-screen h-screen ")},m(a,o){S(a,e,o),w(e,l),t&&t.m(l,null),n=!0},p(a,[o]){t&&t.p&&(!n||o&1)&&b(t,r,a,a[0],n?I(r,a[0],o,null):G(a[0]),null)},i(a){n||(P(t,a),n=!0)},o(a){D(t,a),n=!1},d(a){a&&i(e),t&&t.d(a)}}}function C(s,e,l){let{$$slots:n={},$$scope:r}=e;return s.$$set=t=>{"$$scope"in t&&l(0,r=t.$$scope)},[r,n]}class A extends v{constructor(e){super();$(this,e,C,q,x,{})}}export{A as S,V as s};