import{S as Ie,i as Te,s as De,e as n,k as E,t as V,c as o,a as h,d as c,m as w,h as O,b as a,N as me,a4 as ie,f as Ne,g as A,J as l,a5 as U,a6 as be,O as M,q as ge,K as z,P as ke,Q as Ee,v as Ue,a7 as Pe,a8 as we,a9 as ye}from"../chunks/vendor-958d3afb.js";import{c as j,b as Ve,g as Oe,U as Se}from"../chunks/DbService-fc3eeb94.js";import"../chunks/singletons-a6a7384f.js";function Be(r){let t;return{c(){t=n("div")},l(e){t=o(e,"DIV",{});var u=h(t);u.forEach(c)},m(e,u){A(e,t,u)},i:z,o:z,d(e){e&&c(t)}}}function Me(r){let t,e,u,s;return{c(){t=n("div"),e=n("h1"),u=V("Failed"),this.h()},l(i){t=o(i,"DIV",{class:!0});var d=h(t);e=o(d,"H1",{});var m=h(e);u=O(m,"Failed"),m.forEach(c),d.forEach(c),this.h()},h(){a(t,"class","w-28 flex flex-row justify-center items-center text-white py-3 rounded-md mt-10 bg-red-400 ")},m(i,d){A(i,t,d),l(t,e),l(e,u)},i(i){s||ie(()=>{s=we(t,ye,{}),s.start()})},o:z,d(i){i&&c(t)}}}function je(r){let t,e,u,s;return{c(){t=n("div"),e=n("h1"),u=V("Succes"),this.h()},l(i){t=o(i,"DIV",{class:!0});var d=h(t);e=o(d,"H1",{});var m=h(e);u=O(m,"Succes"),m.forEach(c),d.forEach(c),this.h()},h(){a(t,"class","w-28 flex flex-row justify-center items-center text-white rounded-md mt-5 py-3 bg-green-300 ")},m(i,d){A(i,t,d),l(t,e),l(e,u)},i(i){s||ie(()=>{s=we(t,ye,{}),s.start()})},o:z,d(i){i&&c(t)}}}function Fe(r){let t,e,u,s,i,d,m,S,F,b,C,f,y,J,N,K,k,L,Q,T,R,I,W,B,Y,Z,D,$,P,ee,te,le,G,ae,q,se,x,re,ne;function oe(p,_){return p[0]=="success"?je:p[0]=="failed"?Me:Be}let H=oe(r),g=H(r);return{c(){t=n("main"),e=n("div"),u=n("div"),s=n("div"),i=n("div"),d=n("img"),F=E(),b=n("input"),C=E(),f=n("select"),y=n("option"),J=V("Gender"),N=n("option"),K=V("Male "),k=n("option"),L=V("Female"),Q=E(),T=n("input"),R=E(),I=n("input"),W=E(),B=n("p"),Y=V("Time of Birth"),Z=E(),D=n("input"),$=E(),P=n("button"),ee=V("NEXT \u2192"),te=E(),g.c(),le=E(),G=n("div"),ae=E(),q=n("div"),se=E(),x=n("div"),this.h()},l(p){t=o(p,"MAIN",{class:!0,style:!0});var _=h(t);e=o(_,"DIV",{class:!0});var v=h(e);u=o(v,"DIV",{class:!0});var ce=h(u);s=o(ce,"DIV",{class:!0});var ue=h(s);i=o(ue,"DIV",{class:!0});var de=h(i);d=o(de,"IMG",{class:!0,alt:!0,src:!0}),de.forEach(c),ue.forEach(c),ce.forEach(c),F=w(v),b=o(v,"INPUT",{type:!0,placeholder:!0,class:!0}),C=w(v),f=o(v,"SELECT",{class:!0});var X=h(f);y=o(X,"OPTION",{});var pe=h(y);J=O(pe,"Gender"),pe.forEach(c),N=o(X,"OPTION",{});var fe=h(N);K=O(fe,"Male "),fe.forEach(c),k=o(X,"OPTION",{});var _e=h(k);L=O(_e,"Female"),_e.forEach(c),X.forEach(c),Q=w(v),T=o(v,"INPUT",{type:!0,placeholder:!0,class:!0}),R=w(v),I=o(v,"INPUT",{type:!0,placeholder:!0,class:!0}),W=w(v),B=o(v,"P",{class:!0});var he=h(B);Y=O(he,"Time of Birth"),he.forEach(c),Z=w(v),D=o(v,"INPUT",{type:!0,placeholder:!0,class:!0}),$=w(v),P=o(v,"BUTTON",{class:!0});var ve=h(P);ee=O(ve,"NEXT \u2192"),ve.forEach(c),te=w(v),g.l(v),v.forEach(c),le=w(_),G=o(_,"DIV",{class:!0}),h(G).forEach(c),ae=w(_),q=o(_,"DIV",{class:!0}),h(q).forEach(c),se=w(_),x=o(_,"DIV",{class:!0}),h(x).forEach(c),_.forEach(c),this.h()},h(){a(d,"class","bg-white"),a(d,"alt",m=r[1].name),me(d.src,S=r[1].pfp)||a(d,"src",S),a(i,"class","w-24 rounded-xl"),a(s,"class","avatar relative "),a(u,"class","mt-10 mb-11"),a(b,"type","text"),a(b,"placeholder","Name"),a(b,"class","input input-bordered w-full max-w-xs mb-3"),y.disabled=!0,y.selected=!0,y.__value="Gender",y.value=y.__value,N.__value="male",N.value=N.__value,k.__value="female",k.value=k.__value,a(f,"class","select select-bordered w-full max-w-xs mb-5"),r[2].gender===void 0&&ie(()=>r[4].call(f)),a(T,"type","date"),a(T,"placeholder","Date of Birth"),a(T,"class","input input-bordered w-full max-w-xs mb-5"),a(I,"type","text"),a(I,"placeholder","Place of Birth"),a(I,"class","input input-bordered w-full max-w-xs mb-5"),a(B,"class","mt-5 mb-2 self-start"),a(D,"type","time"),a(D,"placeholder","Time of Birth"),a(D,"class","input input-bordered w-full max-w-xs mb-5"),a(P,"class","btn mt-5 btn-outline "),a(e,"class","flex flex-col justify-center bg-transparent items-center py-32 mb-3 font-mono"),a(G,"class","stars -z-10 svelte-1d76d2g"),a(q,"class","twinkling -z-10  svelte-1d76d2g"),a(x,"class","clouds svelte-1d76d2g"),a(t,"class","flex flex-col bg-transparent justify-center items-center"),Ne(t,"height","100vh")},m(p,_){A(p,t,_),l(t,e),l(e,u),l(u,s),l(s,i),l(i,d),l(e,F),l(e,b),U(b,r[2].name),l(e,C),l(e,f),l(f,y),l(y,J),l(f,N),l(N,K),l(f,k),l(k,L),be(f,r[2].gender),l(e,Q),l(e,T),U(T,r[2].dob),l(e,R),l(e,I),U(I,r[2].place),l(e,W),l(e,B),l(B,Y),l(e,Z),l(e,D),U(D,r[2].time),l(e,$),l(e,P),l(P,ee),l(e,te),g.m(e,null),l(t,le),l(t,G),l(t,ae),l(t,q),l(t,se),l(t,x),re||(ne=[M(b,"input",r[3]),M(f,"change",r[4]),M(T,"input",r[5]),M(I,"input",r[6]),M(D,"input",r[7]),M(P,"click",r[8])],re=!0)},p(p,[_]){_&2&&m!==(m=p[1].name)&&a(d,"alt",m),_&2&&!me(d.src,S=p[1].pfp)&&a(d,"src",S),_&4&&b.value!==p[2].name&&U(b,p[2].name),_&4&&be(f,p[2].gender),_&4&&U(T,p[2].dob),_&4&&I.value!==p[2].place&&U(I,p[2].place),_&4&&U(D,p[2].time),H!==(H=oe(p))&&(g.d(1),g=H(p),g&&(g.c(),ge(g,1),g.m(e,null)))},i(p){ge(g)},o:z,d(p){p&&c(t),g.d(),re=!1,ke(ne)}}}function Ge(r,t,e){let u,s;Ee(r,Se,f=>e(1,u=f)),Ee(r,j,f=>e(2,s=f));let i="hidden";Ue(async()=>{});function d(){s.name=this.value,j.set(s)}function m(){s.gender=Pe(this),j.set(s)}function S(){s.dob=this.value,j.set(s)}function F(){s.place=this.value,j.set(s)}function b(){s.time=this.value,j.set(s)}return[i,u,s,d,m,S,F,b,async()=>{let f=await Ve(u.uid,s);console.log(f),f.success==!0?(e(0,i="success"),setTimeout(function(){Oe("/editprofile2")},2e3)):e(0,i="failed")}]}class Ce extends Ie{constructor(t){super();Te(this,t,Ge,Fe,De,{})}}export{Ce as default};