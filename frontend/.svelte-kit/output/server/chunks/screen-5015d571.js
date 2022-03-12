import "./firebase-48114dbe.js";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { c as create_ssr_component } from "./index-61c0bfc8.js";
new GoogleAuthProvider();
const Screen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="${""}" class="${"snap-start bg-transparent flex items-center justify-center w-screen h-screen "}"><div class="${"text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-10 "}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export { Screen as S };
