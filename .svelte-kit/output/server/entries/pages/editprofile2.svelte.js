import { c as create_ssr_component } from "../../chunks/index-7a80dc6d.js";
var editprofile2_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-17yssfa-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-17yssfa-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-17yssfa-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-17yssfa-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-17yssfa,.twinkling.svelte-17yssfa,.clouds.svelte-17yssfa{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-17yssfa{background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;z-index:-2}.twinkling.svelte-17yssfa{background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;z-index:-1;-webkit-animation:svelte-17yssfa-move-twink-back 200s linear infinite;animation:svelte-17yssfa-move-twink-back 200s linear infinite}.clouds.svelte-17yssfa{background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;z-index:-3;-webkit-animation:svelte-17yssfa-move-clouds-back 200s linear infinite;animation:svelte-17yssfa-move-clouds-back 200s linear infinite}",
  map: null
};
const Editprofile2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"font-mono bg-transparent"}"><div class="${"flex flex-col justify-center items-center"}"><h1 class="${"mt-10 mb-5"}">Pick your best 6 Photos  \u{1F4F7}


    
        </h1>

        <div class="${"flex flex-row justify-between"}"><div class="${"photos object-fill w-52 h-52 rounded-md bg-slate-50 mx-5 my-5"}">
                <img style="${"height: 100%; width: 100%; object-fit: contain"}" class="${""}" src="${"https://api.lorem.space/image/face?hash=1500"}"></div>
            <div class="${"photos w-52 h-52 rounded-md bg-slate-50 mx-5 my-5"}"><img style="${"height: 100%; width: 100%; object-fit: contain"}" alt="${""}" class="${""}" src="${"https://api.lorem.space/image/face?hash=4444"}"></div>
    
           <div class="${"photos w-52 h-52 rounded-md bg-slate-50 mx-5 my-5"}"><img style="${"height: 100%; width: 100%; object-fit: contain"}" alt="${""}" class="${""}" src="${"https://api.lorem.space/image/face?hash=69"}"></div></div>



        <div class="${"flex flex-row justify-between"}"><div class="${"photos object-fill w-52 h-52 rounded-md bg-slate-50 mx-5 my-5"}">
                <img style="${"height: 100%; width: 100%; object-fit: contain"}" class="${""}" src="${"https://api.lorem.space/image/face?hash=3174"}"></div>
            <div class="${"photos w-52 h-52 rounded-md bg-slate-50 mx-5 my-5"}"><img style="${"height: 100%; width: 100%; object-fit: contain"}" alt="${""}" class="${""}" src="${"https://api.lorem.space/image/face?hash=314"}"></div>

           <div class="${"photos w-52 h-52 rounded-md bg-slate-50 mx-5 my-5"}"><img style="${"height: 100%; width: 100%; object-fit: contain"}" alt="${""}" class="${""}" src="${"https://api.lorem.space/image/face?hash=4"}"></div></div>


    <button class="${"btn mt-10 btn-outline "}"><a href="${"/home"}">Finish \u{1F3C1} </a></button>

    <div class="${"stars -z-10 svelte-17yssfa"}"></div>
    <div class="${"twinkling -z-10  svelte-17yssfa"}"></div>
    <div class="${"clouds svelte-17yssfa"}"></div></div></main>`;
});
export { Editprofile2 as default };
