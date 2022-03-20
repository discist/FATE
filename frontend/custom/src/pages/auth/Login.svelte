<script>
  import { Device } from "@capacitor/device";
  import { onMount } from "svelte";
  import UserStore from "../../stores/stores";
  import { createEventDispatcher } from "svelte";
  import { replace } from "svelte-spa-router";
  import { Storage } from '@capacitor/storage';
  import Uri from '../../stores/URI'
  import {fade , slide} from "svelte/transition"
import Basicloader from "../../components/loading/basicloader.svelte";


  const dispatch = createEventDispatcher();

  

  let LoginJson = {
    email: "",
    password: "",
    device: "",
    location: "",
  };
  let erorrx = "";
  let valid;
  let errormessage = "";
  let success = "";
  let location = "";
  let deviceInfo = "";
  let sessionID = "";
  let LoginResponse;

  onMount(async () => {
    getgeoip();
    getdevice();
    console.log($UserStore);
  });

  let loading = false

  function HandleLogin() {

   
   
    valid = true;
    if (LoginJson.email.trim().length < 1) {
      console.log("email empty");
      erorrx = "email empty";
      valid = false;
    } else {
      erorrx = "";
    }
    if (LoginJson.password.trim().length < 1) {
      erorrx = "password empty";
      valid = false;
    } else {
    }

    if (valid == true) {
      postlogin();
    }
  }

  

  async function postlogin() {
    
    loading = true
    const res = await fetch(`${$Uri.BaseURi}/login`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: LoginJson.email,
        password: LoginJson.password,
        device: deviceInfo,
        location: location,
      }),
    });
    const json = await res.json();
    let result;

    result = JSON.stringify(json);

    LoginResponse = await JSON.parse(result);

    if (LoginResponse.error) {
      console.log("error:", LoginResponse.error);
      errormessage = LoginResponse.error;
      success = "";
      loading =false
    } else {
      addtostore();
      loading = false

      success = "Authenticated";
      sessionID = LoginResponse.uuid;

      errormessage = "";
    }
  }

  async function addtostore() {
    let ses = await LoginResponse.uuid;

    if (ses != "") {
      UserStore.update((value) => {
        let sendtostore = {
          SessionID: sessionID,
          Email: LoginJson.email,
          Autenticated: true,
          Location:  location,
          Device: deviceInfo
        };

        return sendtostore;
      });
    } else {
      console.log("failed bad shit");
    }

    console.log($UserStore);
    //window.localStorage.setItem("SesionID", $UserStore.SessionID);
    //window.localStorage.setItem("isLogged", "true");
    await Storage.set({key: 'SesionID',value: $UserStore.SessionID,});
    await Storage.set({key: 'isLogged',value: 'true',});
    
   
    let newuser  =  localStorage.getItem("NewUser")
    if (newuser == "true"){
      replace("/newuser")

    }else{

      replace("/root");

    }
    
  }

  async function getgeoip() {
   
    const res = await fetch(
      "https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0",
      {
        method: "GET",
      }
    );
    const json = await res.json();
    let result;

    result = JSON.stringify(json);

    location = result;

    // console.log(location);
  }

  const getdevice = async () => {
    const info = await Device.getInfo();

    deviceInfo = JSON.stringify(info);

    // console.log(deviceInfo, info);
  };
</script>



<main in:fade >
  <form on:submit|preventDefault={HandleLogin} action="">
    <div
      class="  mt-12  form-control h-auto flex flex-wrap flex-col content-center   "
    >
      <div>
        <h2 class="text-5xl mb-3">  🌘  </h2>
      </div>

      <input
        bind:value={LoginJson.email}
        type="text"
        placeholder="email"
        class="mt-5 font-mono input input-bordered"
      />

      <input
        bind:value={LoginJson.password}
        type="password"
        placeholder="password"
        class=" mt-5 mb-14 font-mono input input-bordered"
      />

     
     
      <button class="btn  btn-outline" on:click={()=>{
       

      }} > ENTER </button>
     

      <div class=" mt-3 text-red-400 font-mono font-extralight">
        {errormessage}
        {erorrx}
      </div>
      <div
        class=" w-10 mt-3 text-green-400 text-center font-mono font-extralight"
      >
        {success}
      </div>
    </div>
  </form>

 {#if loading}

 <div in:fade class="flex flex-col justify-center w-full items-center mt-10">
  <Basicloader></Basicloader>
 </div>
   
 {/if}
 
  
</main>
