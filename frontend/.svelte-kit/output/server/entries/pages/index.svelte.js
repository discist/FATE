import { c as create_ssr_component, v as validate_component } from "../../chunks/index-61c0bfc8.js";
import Main from "./main.svelte.js";
import "../../chunks/AuthService-464778a4.js";
import "../../chunks/firebase-add68633.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "uuid";
import "@capacitor/browser";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Main, "Main").$$render($$result, {}, {}, {})}</main>`;
});
export { Routes as default };
