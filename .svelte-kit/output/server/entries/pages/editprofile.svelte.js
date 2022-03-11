import { c as create_ssr_component } from "../../chunks/index-7a80dc6d.js";
var editprofile_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-kgb0f2-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-kgb0f2-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-kgb0f2-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-kgb0f2-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-kgb0f2,.twinkling.svelte-kgb0f2,.clouds.svelte-kgb0f2{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-kgb0f2{background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;z-index:-2}.twinkling.svelte-kgb0f2{background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;z-index:-1;-webkit-animation:svelte-kgb0f2-move-twink-back 200s linear infinite;animation:svelte-kgb0f2-move-twink-back 200s linear infinite}.clouds.svelte-kgb0f2{background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;z-index:-3;-webkit-animation:svelte-kgb0f2-move-clouds-back 200s linear infinite;animation:svelte-kgb0f2-move-clouds-back 200s linear infinite}.visuallyhidden.svelte-kgb0f2{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}",
  map: null
};
const Editprofile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main style="${"height: 100vh;"}" class="${"bg-transparent "}"><div class="${"flex flex-col justify-center bg-transparent items-center py-32 mb-3 font-mono"}"><div class="${"mb-3"}"><input class="${"visuallyhidden svelte-kgb0f2"}" type="${"file"}" id="${"myfile"}" name="${"myfile"}"></div>

          

          <input type="${"text"}" placeholder="${"Name"}" class="${"input input-bordered w-full max-w-xs mb-3"}">
         
          <select class="${"select select-bordered w-full max-w-xs mb-5"}"><option disabled selected value="${"Gender"}">Gender</option><option value="${"Male"}">Male</option><option value="${"Female"}">Female</option></select>

          

          <input type="${"text"}" placeholder="${"Date of Birth"}" class="${"input input-bordered w-full max-w-xs mb-5"}">

          <input type="${"text"}" placeholder="${"Place of Birth"}" class="${"input input-bordered w-full max-w-xs mb-5"}">

          <input type="${"number"}" placeholder="${"Time of Birth"}" class="${"input input-bordered w-full max-w-xs mb-5"}">




          <button class="${"btn mt-5 btn-outline "}"><a href="${"/editprofile2"}">NEXT \u2192 </a></button></div>



    <div class="${"stars -z-10 svelte-kgb0f2"}"></div>
    <div class="${"twinkling -z-10  svelte-kgb0f2"}"></div>
    <div class="${"clouds svelte-kgb0f2"}"></div>
  

    
</main>`;
});
export { Editprofile as default };
