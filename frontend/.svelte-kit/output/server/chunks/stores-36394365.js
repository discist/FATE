import { w as writable } from "./firebase-add68633.js";
const UserStore = writable({
  uid: "",
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
