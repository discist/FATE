import{L as ie,M as ue,S as J,i as R,s as j,e as u,t as D,k as g,c as f,a as m,h as k,d as i,m as $,b as d,N as fe,g as z,J as o,O as se,K as F,P as de,Q as ae,R as me,v as pe,T as _e,U as w,F as he,G as ge,H as $e,I as ve,q as C,o as K,w as ne,x as re,y as le,B as oe}from"../chunks/vendor-958d3afb.js";import{a as ce,b as xe,t as be,U as S,c as H,g as ye}from"../chunks/DbService-fc3eeb94.js";import"../chunks/singletons-a6a7384f.js";const we=new ie;async function Ee(){console.log("Show Google Sign in popup called");let l={data:null,access:!1};try{let e=await ue(ce,we);l.data=e,l.access=!0;let s=await xe(e.user.uid,{});if(!s.success)return l.data=s.data,l.access=!1,l}catch(e){l.data=e.message,l.access=!1}return l}function Ie(l){let e,s,t,r,n,a,p,h,G,E,N,I,M,x,P,A,_,b,L,V,y,Q,O,v,q,B,W;return{c(){e=u("main"),s=u("h1"),t=D("FATE"),r=g(),n=u("p"),a=D("Let the universe find the one for you"),p=g(),h=u("div"),G=g(),E=u("div"),N=g(),I=u("div"),M=g(),x=u("h1"),P=D("Join"),A=g(),_=u("button"),b=u("p"),L=D("Google"),V=g(),y=u("img"),O=g(),v=u("button"),q=D("db"),this.h()},l(U){e=f(U,"MAIN",{});var c=m(e);s=f(c,"H1",{class:!0});var X=m(s);t=k(X,"FATE"),X.forEach(i),r=$(c),n=f(c,"P",{class:!0});var Y=m(n);a=k(Y,"Let the universe find the one for you"),Y.forEach(i),p=$(c),h=f(c,"DIV",{class:!0}),m(h).forEach(i),G=$(c),E=f(c,"DIV",{class:!0}),m(E).forEach(i),N=$(c),I=f(c,"DIV",{class:!0}),m(I).forEach(i),M=$(c),x=f(c,"H1",{class:!0});var Z=m(x);P=k(Z,"Join"),Z.forEach(i),A=$(c),_=f(c,"BUTTON",{class:!0});var T=m(_);b=f(T,"P",{class:!0});var ee=m(b);L=k(ee,"Google"),ee.forEach(i),V=$(T),y=f(T,"IMG",{src:!0,alt:!0}),T.forEach(i),O=$(c),v=f(c,"BUTTON",{class:!0});var te=m(v);q=k(te,"db"),te.forEach(i),c.forEach(i),this.h()},h(){d(s,"class","text-gray-300 font-serif text-5xl "),d(n,"class","mt-10 text-gray-300 font-mono text-3xl font-extralightin"),d(h,"class","stars -z-10 svelte-1ct01wu"),d(E,"class","twinkling -z-10  svelte-1ct01wu"),d(I,"class","clouds svelte-1ct01wu"),d(x,"class","font-mono text-2xl mt-16 mb-10"),d(b,"class","mx-3"),fe(y.src,Q="/google.svg")||d(y,"src",Q),d(y,"alt",""),d(_,"class","btn font-mono text-white"),d(v,"class","btn")},m(U,c){z(U,e,c),o(e,s),o(s,t),o(e,r),o(e,n),o(n,a),o(e,p),o(e,h),o(e,G),o(e,E),o(e,N),o(e,I),o(e,M),o(e,x),o(x,P),o(e,A),o(e,_),o(_,b),o(b,L),o(_,V),o(_,y),o(e,O),o(e,v),o(v,q),B||(W=[se(_,"click",l[2]),se(v,"click",be)],B=!0)},p:F,i:F,o:F,d(U){U&&i(e),B=!1,de(W)}}}function Ue(l,e,s){let t,r;return ae(l,S,a=>s(0,t=a)),ae(l,H,a=>s(1,r=a)),me(0,{duration:1110,easing:_e}),pe(async()=>{}),[t,r,async()=>{let a=await Ee();console.log(a),a.access&&(w(S,t.uid=a.data.user.uid,t),w(S,t.name=a.data.user.displayName,t),w(S,t.token=a.data.user.accessToken,t),w(S,t.pfp=a.data.user.photoURL,t),w(H,r.name=a.data.user.displayName,r),w(H,r.email=a.data.user.email,r),ye("/editprofile"))}]}class De extends J{constructor(e){super();R(this,e,Ue,Ie,j,{})}}function ke(l){let e,s,t;const r=l[1].default,n=he(r,l,l[0],null);return{c(){e=u("div"),s=u("div"),n&&n.c(),this.h()},l(a){e=f(a,"DIV",{style:!0,class:!0});var p=m(e);s=f(p,"DIV",{class:!0});var h=m(s);n&&n.l(h),h.forEach(i),p.forEach(i),this.h()},h(){d(s,"class","text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-10 "),d(e,"style",""),d(e,"class","snap-start bg-transparent flex items-center justify-center w-screen h-screen ")},m(a,p){z(a,e,p),o(e,s),n&&n.m(s,null),t=!0},p(a,[p]){n&&n.p&&(!t||p&1)&&ge(n,r,a,a[0],t?ve(r,a[0],p,null):$e(a[0]),null)},i(a){t||(C(n,a),t=!0)},o(a){K(n,a),t=!1},d(a){a&&i(e),n&&n.d(a)}}}function Se(l,e,s){let{$$slots:t={},$$scope:r}=e;return l.$$set=n=>{"$$scope"in n&&s(0,r=n.$$scope)},[r,t]}class Te extends J{constructor(e){super();R(this,e,Se,ke,j,{})}}function Ge(l){let e,s;return e=new De({}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){le(e,t,r),s=!0},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){K(e.$$.fragment,t),s=!1},d(t){oe(e,t)}}}function Ne(l){let e,s,t;return s=new Te({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),{c(){e=u("main"),ne(s.$$.fragment)},l(r){e=f(r,"MAIN",{});var n=m(e);re(s.$$.fragment,n),n.forEach(i)},m(r,n){z(r,e,n),le(s,e,null),t=!0},p(r,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:r}),s.$set(a)},i(r){t||(C(s.$$.fragment,r),t=!0)},o(r){K(s.$$.fragment,r),t=!1},d(r){r&&i(e),oe(s)}}}function Me(l){return console.log(ce),[]}class Ve extends J{constructor(e){super();R(this,e,Me,Ne,j,{})}}export{Ve as default};
