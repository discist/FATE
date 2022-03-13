import { replace } from "svelte-spa-router";
import { Storage } from "@capacitor/storage";
import UserData from "../stores/UserData";
import Uri from '../stores/URI'
import { get } from "svelte/store";

async function Logoout() {
  //localStorage.setItem("isLogged" , "false")
  const { value } = await Storage.get({ key: "SesionID" });
  await Storage.set({ key: "isLogged", value: "false" });

  





  replace("/auth");
  //uuidx = await localStorage.getItem("SesionID")

  Logoutpost(value);

  //localStorage.removeItem("SesionID")
  
  Storage.remove({ key: "SesionID" });
  UserData.update((val) => {
    let sendtodata = {
      UserID: "",
      Email: "",
      Password: " ",
      CreatedAt: "",
      UpdatedAt: "",
      Sessions: "",
      Username: "",
      Story:    "",
      State:    "",
      Subject  : "",
      Profilephotourl: ""
    };

   

    return sendtodata;
  });
}

export async function Logooutall() {
  //localStorage.setItem("isLogged" , "false")
  const { value } = await Storage.get({ key: "SesionID" });
  await Storage.set({ key: "isLogged", value: "false" });

  replace("/auth");
  //uuidx = await localStorage.getItem("SesionID")

  Logoutpostall(value);

  //localStorage.removeItem("SesionID")
  Storage.remove({ key: "SesionID" });
}



async function Logoutpost(value) {
  console.log("post started");

  console.log("this uis idx", value);
  const baseuri = get(Uri)
  const res = await fetch(`${baseuri.BaseURi}/logout`, {
    method: "POST",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uuid: value,
    }),
  });
  const json = await res.json();
  let result;
  console.log(res, "logout func");
}


async function Logoutpostall(value) {
  console.log("post started");

  console.log("this uis idx", value);
  const res = await fetch("http://112.133.192.241:8089/logoutall", {
    method: "POST",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uuid: value,
    }),
  });
  const json = await res.json();
  let result;
  console.log(res, "logout func");
}

export default Logoout;
