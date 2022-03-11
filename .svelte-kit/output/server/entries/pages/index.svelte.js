import { c as create_ssr_component, v as validate_component } from "../../chunks/index-7a80dc6d.js";
import Main from "./main.svelte.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Main, "Main").$$render($$result, {}, {}, {})}</main>`;
});
export { Routes as default };
