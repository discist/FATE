import { c as create_ssr_component, v as validate_component } from "../../chunks/index-61c0bfc8.js";
import Main from "./main.svelte.js";
import "../../chunks/screen-5015d571.js";
import "../../chunks/firebase-48114dbe.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "@capacitor/browser";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Main, "Main").$$render($$result, {}, {}, {})}</main>`;
});
export { Routes as default };
