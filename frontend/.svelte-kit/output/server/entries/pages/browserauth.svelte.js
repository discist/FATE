import { c as create_ssr_component, f as subscribe } from "../../chunks/index-61c0bfc8.js";
import { U as UserStore, a as UserDbData } from "../../chunks/stores-36394365.js";
import "../../chunks/AuthService-464778a4.js";
import "../../chunks/firebase-add68633.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var browserauth_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-t987hq-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-t987hq-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-t987hq-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-t987hq-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-t987hq,.twinkling.svelte-t987hq,.clouds.svelte-t987hq{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-t987hq{background:#000\n        url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top\n        center;z-index:-2}.twinkling.svelte-t987hq{background:transparent\n        url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat\n        top center;z-index:-1;-webkit-animation:svelte-t987hq-move-twink-back 200s linear infinite;animation:svelte-t987hq-move-twink-back 200s linear infinite}.clouds.svelte-t987hq{background:transparent\n        url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat\n        top center;z-index:-3;-webkit-animation:svelte-t987hq-move-clouds-back 200s linear infinite;animation:svelte-t987hq-move-clouds-back 200s linear infinite}",
  map: null
};
const Browserauth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_UserStore;
  let $$unsubscribe_UserDbData;
  $$unsubscribe_UserStore = subscribe(UserStore, (value) => value);
  $$unsubscribe_UserDbData = subscribe(UserDbData, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_UserStore();
  $$unsubscribe_UserDbData();
  return `<main><h1 class="${"text-gray-300 font-serif text-5xl "}">FATE</h1>
  
    <p class="${"mt-10 text-gray-300 font-mono text-3xl font-extralightin"}">Let the universe find the one for you
    </p>
  
    <div class="${"stars -z-10 svelte-t987hq"}"></div>
    <div class="${"twinkling -z-10  svelte-t987hq"}"></div>
    <div class="${"clouds svelte-t987hq"}"></div>
  
    <h1 class="${"font-mono text-2xl mt-16 mb-10"}">Join</h1>
  
    <button class="${"btn font-mono text-white"}"><p class="${"mx-3"}">Google</p>
  
      <img src="${"/google.svg"}" alt="${""}"></button>


    ${``}



    
  
   

  </main>`;
});
export { Browserauth as default };
