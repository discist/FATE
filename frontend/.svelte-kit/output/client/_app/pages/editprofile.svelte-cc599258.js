import{S as Ie,i as Te,s as De,e as n,k as E,t as P,c as o,a as h,d as c,m as w,h as O,b as a,M as ve,a3 as ie,f as Ne,g as A,J as l,a4 as U,a5 as be,N as M,q as ge,K as z,a6 as ke,a1 as Ee,v as Ue,a7 as Ve,a8 as we,a9 as ye}from"../chunks/vendor-045929d2.js";import{r as Pe}from"../chunks/singletons-a6a7384f.js";import{a as j,U as Oe}from"../chunks/stores-874664d7.js";import{c as Se}from"../chunks/DbService-a5c53d3a.js";const Be=Me;async function Me(r,t){return Pe.goto(r,t,[])}function je(r){let t;return{c(){t=n("div")},l(e){t=o(e,"DIV",{});var u=h(t);u.forEach(c)},m(e,u){A(e,t,u)},i:z,o:z,d(e){e&&c(t)}}}function Fe(r){let t,e,u,s;return{c(){t=n("div"),e=n("h1"),u=P("Failed"),this.h()},l(i){t=o(i,"DIV",{class:!0});var d=h(t);e=o(d,"H1",{});var v=h(e);u=O(v,"Failed"),v.forEach(c),d.forEach(c),this.h()},h(){a(t,"class","w-28 flex flex-row justify-center items-center text-white py-3 rounded-md mt-10 bg-red-400 ")},m(i,d){A(i,t,d),l(t,e),l(e,u)},i(i){s||ie(()=>{s=we(t,ye,{}),s.start()})},o:z,d(i){i&&c(t)}}}function Ge(r){let t,e,u,s;return{c(){t=n("div"),e=n("h1"),u=P("Succes"),this.h()},l(i){t=o(i,"DIV",{class:!0});var d=h(t);e=o(d,"H1",{});var v=h(e);u=O(v,"Succes"),v.forEach(c),d.forEach(c),this.h()},h(){a(t,"class","w-28 flex flex-row justify-center items-center text-white rounded-md mt-5 py-3 bg-green-300 ")},m(i,d){A(i,t,d),l(t,e),l(e,u)},i(i){s||ie(()=>{s=we(t,ye,{}),s.start()})},o:z,d(i){i&&c(t)}}}function qe(r){let t,e,u,s,i,d,v,S,F,b,C,p,y,J,N,K,k,L,Q,T,R,I,W,B,Y,Z,D,$,V,ee,te,le,G,ae,q,se,x,re,ne;function oe(f,_){return f[0]=="success"?Ge:f[0]=="failed"?Fe:je}let H=oe(r),g=H(r);return{c(){t=n("main"),e=n("div"),u=n("div"),s=n("div"),i=n("div"),d=n("img"),F=E(),b=n("input"),C=E(),p=n("select"),y=n("option"),J=P("Gender"),N=n("option"),K=P("Male "),k=n("option"),L=P("Female"),Q=E(),T=n("input"),R=E(),I=n("input"),W=E(),B=n("p"),Y=P("Time of Birth"),Z=E(),D=n("input"),$=E(),V=n("button"),ee=P("NEXT \u2192"),te=E(),g.c(),le=E(),G=n("div"),ae=E(),q=n("div"),se=E(),x=n("div"),this.h()},l(f){t=o(f,"MAIN",{class:!0,style:!0});var _=h(t);e=o(_,"DIV",{class:!0});var m=h(e);u=o(m,"DIV",{class:!0});var ce=h(u);s=o(ce,"DIV",{class:!0});var ue=h(s);i=o(ue,"DIV",{class:!0});var de=h(i);d=o(de,"IMG",{class:!0,alt:!0,src:!0}),de.forEach(c),ue.forEach(c),ce.forEach(c),F=w(m),b=o(m,"INPUT",{type:!0,placeholder:!0,class:!0}),C=w(m),p=o(m,"SELECT",{class:!0});var X=h(p);y=o(X,"OPTION",{});var fe=h(y);J=O(fe,"Gender"),fe.forEach(c),N=o(X,"OPTION",{});var pe=h(N);K=O(pe,"Male "),pe.forEach(c),k=o(X,"OPTION",{});var _e=h(k);L=O(_e,"Female"),_e.forEach(c),X.forEach(c),Q=w(m),T=o(m,"INPUT",{type:!0,placeholder:!0,class:!0}),R=w(m),I=o(m,"INPUT",{type:!0,placeholder:!0,class:!0}),W=w(m),B=o(m,"P",{class:!0});var he=h(B);Y=O(he,"Time of Birth"),he.forEach(c),Z=w(m),D=o(m,"INPUT",{type:!0,placeholder:!0,class:!0}),$=w(m),V=o(m,"BUTTON",{class:!0});var me=h(V);ee=O(me,"NEXT \u2192"),me.forEach(c),te=w(m),g.l(m),m.forEach(c),le=w(_),G=o(_,"DIV",{class:!0}),h(G).forEach(c),ae=w(_),q=o(_,"DIV",{class:!0}),h(q).forEach(c),se=w(_),x=o(_,"DIV",{class:!0}),h(x).forEach(c),_.forEach(c),this.h()},h(){a(d,"class","bg-white"),a(d,"alt",v=r[1].name),ve(d.src,S=r[1].pfp)||a(d,"src",S),a(i,"class","w-24 rounded-xl"),a(s,"class","avatar relative "),a(u,"class","mt-10 mb-11"),a(b,"type","text"),a(b,"placeholder","Name"),a(b,"class","input input-bordered w-full max-w-xs mb-3"),y.disabled=!0,y.selected=!0,y.__value="Gender",y.value=y.__value,N.__value="male",N.value=N.__value,k.__value="female",k.value=k.__value,a(p,"class","select select-bordered w-full max-w-xs mb-5"),r[2].gender===void 0&&ie(()=>r[4].call(p)),a(T,"type","date"),a(T,"placeholder","Date of Birth"),a(T,"class","input input-bordered w-full max-w-xs mb-5"),a(I,"type","text"),a(I,"placeholder","Place of Birth"),a(I,"class","input input-bordered w-full max-w-xs mb-5"),a(B,"class","mt-5 mb-2 self-start"),a(D,"type","time"),a(D,"placeholder","Time of Birth"),a(D,"class","input input-bordered w-full max-w-xs mb-5"),a(V,"class","btn mt-5 btn-outline "),a(e,"class","flex flex-col justify-center bg-transparent items-center py-32 mb-3 font-mono"),a(G,"class","stars -z-10 svelte-1d76d2g"),a(q,"class","twinkling -z-10  svelte-1d76d2g"),a(x,"class","clouds svelte-1d76d2g"),a(t,"class","flex flex-col bg-transparent justify-center items-center"),Ne(t,"height","100vh")},m(f,_){A(f,t,_),l(t,e),l(e,u),l(u,s),l(s,i),l(i,d),l(e,F),l(e,b),U(b,r[2].name),l(e,C),l(e,p),l(p,y),l(y,J),l(p,N),l(N,K),l(p,k),l(k,L),be(p,r[2].gender),l(e,Q),l(e,T),U(T,r[2].dob),l(e,R),l(e,I),U(I,r[2].place),l(e,W),l(e,B),l(B,Y),l(e,Z),l(e,D),U(D,r[2].time),l(e,$),l(e,V),l(V,ee),l(e,te),g.m(e,null),l(t,le),l(t,G),l(t,ae),l(t,q),l(t,se),l(t,x),re||(ne=[M(b,"input",r[3]),M(p,"change",r[4]),M(T,"input",r[5]),M(I,"input",r[6]),M(D,"input",r[7]),M(V,"click",r[8])],re=!0)},p(f,[_]){_&2&&v!==(v=f[1].name)&&a(d,"alt",v),_&2&&!ve(d.src,S=f[1].pfp)&&a(d,"src",S),_&4&&b.value!==f[2].name&&U(b,f[2].name),_&4&&be(p,f[2].gender),_&4&&U(T,f[2].dob),_&4&&I.value!==f[2].place&&U(I,f[2].place),_&4&&U(D,f[2].time),H!==(H=oe(f))&&(g.d(1),g=H(f),g&&(g.c(),ge(g,1),g.m(e,null)))},i(f){ge(g)},o:z,d(f){f&&c(t),g.d(),re=!1,ke(ne)}}}function xe(r,t,e){let u,s;Ee(r,Oe,p=>e(1,u=p)),Ee(r,j,p=>e(2,s=p));let i="hidden";Ue(async()=>{});function d(){s.name=this.value,j.set(s)}function v(){s.gender=Ve(this),j.set(s)}function S(){s.dob=this.value,j.set(s)}function F(){s.place=this.value,j.set(s)}function b(){s.time=this.value,j.set(s)}return[i,u,s,d,v,S,F,b,async()=>{let p=await Se(u.uid,s);console.log(p),p.success==!0?(e(0,i="success"),setTimeout(function(){Be("/editprofile2")},2e3)):e(0,i="failed")}]}class Ae extends Ie{constructor(t){super();Te(this,t,xe,qe,De,{})}}export{Ae as default};
