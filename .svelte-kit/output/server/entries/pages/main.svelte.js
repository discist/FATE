import { n as noop, a as safe_not_equal, b as assign, d as now, l as loop, i as identity, c as create_ssr_component, f as subscribe, v as validate_component } from "../../chunks/index-7a80dc6d.js";
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
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
var loginscreen_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-pg8d2y-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@-webkit-keyframes svelte-pg8d2y-move-twink-back{from{background-position:0 0}to{background-position:-10000px 5000px}}@keyframes svelte-pg8d2y-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}@-webkit-keyframes svelte-pg8d2y-move-clouds-back{from{background-position:0 0}to{background-position:10000px 0}}.stars.svelte-pg8d2y,.twinkling.svelte-pg8d2y,.clouds.svelte-pg8d2y{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;display:block}.stars.svelte-pg8d2y{background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;z-index:-2}.twinkling.svelte-pg8d2y{background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;z-index:-1;-webkit-animation:svelte-pg8d2y-move-twink-back 200s linear infinite;animation:svelte-pg8d2y-move-twink-back 200s linear infinite}.clouds.svelte-pg8d2y{background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;z-index:-3;-webkit-animation:svelte-pg8d2y-move-clouds-back 200s linear infinite;animation:svelte-pg8d2y-move-clouds-back 200s linear infinite}",
  map: null
};
let top = 0;
let bottom = 20;
const Loginscreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $textanime, $$unsubscribe_textanime;
  let textanime = tweened(0, { duration: 1110, easing: sineIn });
  $$unsubscribe_textanime = subscribe(textanime, (value) => $textanime = value);
  $$result.css.add(css);
  {
    if ($textanime == bottom) {
      console.log("bot", $textanime);
      textanime.set(top);
    }
  }
  {
    if ($textanime == top) {
      console.log("top");
      textanime.set(bottom);
    }
  }
  $$unsubscribe_textanime();
  return `<main><h1 class="${"text-gray-300 font-serif text-5xl "}">FATE </h1>

    <p class="${"mt-10 text-gray-300 font-mono text-3xl font-extralightin"}">Let the universe  find the one for you  
    </p>





    <div class="${"form-control w-full max-w-xs mt-20 flex font-extralight font-mono justify-center"}">
        <h1 class="${"text-xl text-gray-400 font-mono mb-3"}">phone 
        </h1>

        <div class="${"flex flex-row"}"><input type="${"text"}" placeholder="${"enter"}" class="${"input input-bordered w-full max-w-xs"}">
            
    
            <button class="${"btn btn-outline"}"><a href="${"/editprofile"}">join </a></button></div></div>



    <div class="${"stars -z-10 svelte-pg8d2y"}"></div>
    <div class="${"twinkling -z-10  svelte-pg8d2y"}"></div>
    <div class="${"clouds svelte-pg8d2y"}"></div>
  
    
</main>`;
});
const Screen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="${""}" class="${"snap-start bg-transparent flex items-center justify-center w-screen h-screen "}"><div class="${"text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-10 "}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Screen, "Screen").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Loginscreen, "Loginscreen").$$render($$result, {}, {}, {})}`;
    }
  })}</main>`;
});
export { Main as default };
