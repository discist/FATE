import { a as assign, n as now, l as loop, i as identity, c as create_ssr_component, v as validate_component } from "../../chunks/index-61c0bfc8.js";
import "../../chunks/AuthService-464778a4.js";
import { w as writable, a as app, b as auth } from "../../chunks/firebase-add68633.js";
import "firebase/firestore";
import "firebase/auth";
import { getStorage } from "firebase/storage";
import "uuid";
import "@capacitor/browser";
import "firebase/app";
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
getStorage(app);
var loginscreen_svelte_svelte_type_style_lang = "";
const Screen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="${""}" class="${"snap-start bg-transparent flex items-center justify-center w-screen h-screen "}"><div class="${"text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-10 "}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
var mobilelogin_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-t987hq-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-t987hq-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-t987hq-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-t987hq-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-t987hq,.twinkling.svelte-t987hq,.clouds.svelte-t987hq{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-t987hq{background:#000\n        url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top\n        center;z-index:-2}.twinkling.svelte-t987hq{background:transparent\n        url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat\n        top center;z-index:-1;-webkit-animation:svelte-t987hq-move-twink-back 200s linear infinite;animation:svelte-t987hq-move-twink-back 200s linear infinite}.clouds.svelte-t987hq{background:transparent\n        url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat\n        top center;z-index:-3;-webkit-animation:svelte-t987hq-move-clouds-back 200s linear infinite;animation:svelte-t987hq-move-clouds-back 200s linear infinite}",
  map: null
};
const Mobilelogin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  tweened(0, { duration: 1110, easing: sineIn });
  $$result.css.add(css);
  return `<main><h1 class="${"text-gray-300 font-serif text-5xl "}">FATE</h1>
  
    <p class="${"mt-10 text-gray-300 font-mono text-3xl font-extralightin"}">Let the universe find the one for you
    </p>
  
    <div class="${"stars -z-10 svelte-t987hq"}"></div>
    <div class="${"twinkling -z-10  svelte-t987hq"}"></div>
    <div class="${"clouds svelte-t987hq"}"></div>
  
    <h1 class="${"font-mono text-2xl mt-16 mb-10"}">Join</h1>
  
    <button class="${"btn font-mono text-white"}"><p class="${"mx-3"}">Google </p>
  
      <img src="${"/google.svg"}" alt="${""}"></button>
  
  </main>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(auth);
  return `<main>${validate_component(Screen, "Screen").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Mobilelogin, "Mobilelogin").$$render($$result, {}, {}, {})}`;
    }
  })}</main>`;
});
export { Main as default };
