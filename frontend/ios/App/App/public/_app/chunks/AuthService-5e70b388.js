import{b as s,c as t}from"./DbService-a5c53d3a.js";import{R as r,T as c}from"./vendor-045929d2.js";const n=new r;async function d(){console.log("Show Google Sign in popup called");let a={data:null,access:!1};try{let e=await c(s,n);a.data=e,a.access=!0;let o=await t(e.user.uid,{photoCount:0});if(!o.success)return a.data=o.data,a.access=!1,a}catch(e){a.data=e.message,a.access=!1}return a}export{d as s};