import{af as e}from"./vendor.ab4e1ad1.js";class r extends e{async download(n){return console.log("Cannot download version in web",n),{version:""}}async set(n){console.log("Cannot set version in web",n)}async delete(n){console.log("Cannot delete version in web",n)}async list(){return console.log("Cannot list version in web"),{versions:[]}}async reset(){console.log("Cannot reset version in web")}async current(){return console.log("Cannot get current version in web"),{current:"default"}}}export{r as CapacitorUpdaterWeb};
