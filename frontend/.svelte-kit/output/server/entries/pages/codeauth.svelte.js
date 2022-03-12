import { c as create_ssr_component, f as subscribe, e as escape, v as validate_component } from "../../chunks/index-61c0bfc8.js";
import { U as UserStore, a as UserDbData } from "../../chunks/stores-a9692a1f.js";
import { S as Screen } from "../../chunks/screen-5015d571.js";
import "../../chunks/firebase-48114dbe.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var browserauth_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1ct01wu-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-1ct01wu-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-1ct01wu-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-1ct01wu-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-1ct01wu,.twinkling.svelte-1ct01wu,.clouds.svelte-1ct01wu{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-1ct01wu{background:#000\n      url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top\n      center;z-index:-2}.twinkling.svelte-1ct01wu{background:transparent\n      url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat\n      top center;z-index:-1;-webkit-animation:svelte-1ct01wu-move-twink-back 200s linear infinite;animation:svelte-1ct01wu-move-twink-back 200s linear infinite}.clouds.svelte-1ct01wu{background:transparent\n      url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat\n      top center;z-index:-3;-webkit-animation:svelte-1ct01wu-move-clouds-back 200s linear infinite;animation:svelte-1ct01wu-move-clouds-back 200s linear infinite}",
  map: null
};
const Browserauth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $UserStore, $$unsubscribe_UserStore;
  let $$unsubscribe_UserDbData;
  $$unsubscribe_UserStore = subscribe(UserStore, (value) => $UserStore = value);
  $$unsubscribe_UserDbData = subscribe(UserDbData, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_UserStore();
  $$unsubscribe_UserDbData();
  return `<main>${$UserStore.uid == "nil" ? `<h1 class="${"text-gray-300 font-serif text-5xl "}">FATE</h1>

    <p class="${"mt-10 text-gray-300 font-mono text-3xl font-extralightin"}">Let the universe find the one for you
    </p>

    <div class="${"stars -z-10 svelte-1ct01wu"}"></div>
    <div class="${"twinkling -z-10  svelte-1ct01wu"}"></div>
    <div class="${"clouds svelte-1ct01wu"}"></div>

    <h1 class="${"font-mono text-2xl mt-16 mb-1"}">Code auth </h1>

    <h1 class="${"font-mono text-xl mt-1 mb-10"}">copy code after authentication </h1>


    <button class="${"btn font-mono text-white"}"><p class="${"mx-3"}">Google</p>

      <img src="${"/google.svg"}" alt="${""}"></button>` : `${$UserStore.uid !== "nil" ? `<div class="${"font-mono flex flex-col mt-5 border px-4 rounded-lg py-10"}"><h1 class="${"font-mono text-cyan-100"}">Authenticated</h1>

      <div class="${"text-xl mt-5"}">${escape($UserStore.uid)}</div>

      <button class="${"btn btn-outline mt-6"}">Copy 
      </button></div>` : ``}`}

  ${``}
</main>`;
});
const Codeauth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Screen, "Screen").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Browserauth, "Browserauth").$$render($$result, {}, {}, {})}`;
    }
  })}</main>`;
});
export { Codeauth as default };
