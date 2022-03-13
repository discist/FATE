import { w as writable } from "./firebase-48114dbe.js";
const UserStore = writable({
  uid: "nil",
  name: "",
  gender: "",
  token: "",
  pfp: "",
  email: "",
  dob: "",
  place: "",
  time: ""
});
const UserDbData = writable({
  name: "",
  gender: "",
  email: "",
  dob: "",
  place: "",
  time: ""
});
export { UserStore as U, UserDbData as a };
