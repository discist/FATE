import { c as create_ssr_component, b as subscribe, g as add_attribute } from "../../chunks/index-1ba8bc78.js";
import { U as UserStore, a as UserDbData } from "../../chunks/firebase-4b4cf34d.js";
import "firebase/firestore";
import "firebase/app";
import "firebase/auth";
import "firebase/compat";
var editprofile_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1d76d2g-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-1d76d2g-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-1d76d2g-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-1d76d2g-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-1d76d2g,.twinkling.svelte-1d76d2g,.clouds.svelte-1d76d2g{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-1d76d2g{background:#000\n      url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top\n      center;z-index:-2}.twinkling.svelte-1d76d2g{background:transparent\n      url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat\n      top center;z-index:-1;-webkit-animation:svelte-1d76d2g-move-twink-back 200s linear infinite;animation:svelte-1d76d2g-move-twink-back 200s linear infinite}.clouds.svelte-1d76d2g{background:transparent\n      url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat\n      top center;z-index:-3;-webkit-animation:svelte-1d76d2g-move-clouds-back 200s linear infinite;animation:svelte-1d76d2g-move-clouds-back 200s linear infinite}",
  map: null
};
const Editprofile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $UserStore, $$unsubscribe_UserStore;
  let $UserDbData, $$unsubscribe_UserDbData;
  $$unsubscribe_UserStore = subscribe(UserStore, (value) => $UserStore = value);
  $$unsubscribe_UserDbData = subscribe(UserDbData, (value) => $UserDbData = value);
  $$result.css.add(css);
  $$unsubscribe_UserStore();
  $$unsubscribe_UserDbData();
  return `<main class="${"flex flex-col bg-transparent justify-center items-center"}" style="${"height: 100vh;"}"><div class="${"flex flex-col justify-center bg-transparent items-center py-32 mb-3 font-mono"}"><div class="${"mt-10 mb-11"}"><div class="${"avatar relative "}"><div class="${"w-24 rounded-xl"}"><img class="${"bg-white"}"${add_attribute("alt", $UserStore.name, 0)}${add_attribute("src", $UserStore.pfp, 0)}></div></div></div>

    <input type="${"text"}" placeholder="${"Name"}" class="${"input input-bordered w-full max-w-xs mb-3"}"${add_attribute("value", $UserDbData.name, 0)}>

    <select class="${"select select-bordered w-full max-w-xs mb-5"}"><option disabled selected value="${"Gender"}">Gender</option><option value="${"male"}">Male </option><option value="${"female"}">Female</option></select>

    <input type="${"date"}" placeholder="${"Date of Birth"}" class="${"input input-bordered w-full max-w-xs mb-5"}"${add_attribute("value", $UserDbData.dob, 0)}>

    <input type="${"text"}" placeholder="${"Place of Birth"}" class="${"input input-bordered w-full max-w-xs mb-5"}"${add_attribute("value", $UserDbData.place, 0)}>

    <p class="${"mt-5 mb-2 self-start"}">Time of Birth</p>
    <input type="${"time"}" placeholder="${"Time of Birth"}" class="${"input input-bordered w-full max-w-xs mb-5"}"${add_attribute("value", $UserDbData.time, 0)}>

    <button class="${"btn mt-5 btn-outline "}">NEXT \u2192
    </button></div>

  <div class="${"stars -z-10 svelte-1d76d2g"}"></div>
  <div class="${"twinkling -z-10  svelte-1d76d2g"}"></div>
  <div class="${"clouds svelte-1d76d2g"}"></div>
</main>`;
});
export { Editprofile as default };
