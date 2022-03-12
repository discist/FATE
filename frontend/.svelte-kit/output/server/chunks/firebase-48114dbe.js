import { b as noop, d as safe_not_equal } from "./index-61c0bfc8.js";
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
  function subscribe(run, invalidate = noop) {
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
  return { set, update, subscribe };
}
const config = {
  apiKey: "AIzaSyBIVTZea4hrqE5GwuFiAJIh2MTpUL0lk8U",
  authDomain: "fateten.firebaseapp.com",
  projectId: "fateten",
  storageBucket: "fateten.appspot.com",
  messagingSenderId: "1022980228718",
  appId: "1:1022980228718:web:25698d8d9038c734f0487f"
};
const app = initializeApp(config, "CLIENT");
const auth = getAuth(app);
getFirestore(app);
setPersistence(auth, inMemoryPersistence);
export { auth as a, writable as w };
