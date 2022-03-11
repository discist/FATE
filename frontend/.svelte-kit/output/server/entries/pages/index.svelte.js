import { c as create_ssr_component, v as validate_component } from "../../chunks/index-1ba8bc78.js";
import Main from "./main.svelte.js";
import "../../chunks/stores-433ac25d.js";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Main, "Main").$$render($$result, {}, {}, {})}</main>`;
});
export { Routes as default };
