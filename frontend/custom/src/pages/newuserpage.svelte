<script>
  import { decode } from "base64-arraybuffer";
  //import CheckUsername from "../functions/checkusername";
  import { pop, push, replace } from "svelte-spa-router";
  import { Storage } from "@capacitor/storage";
  import UserData from "../stores/UserData";
  import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
 
  import Basicloader from "../components/loading/basicloader.svelte";
  import UserStore from "../stores/stores";
  import {FateUser} from "../stores/stores";
  //anime
import { fade, slide, blur, scale, fly } from "svelte/transition";
import Uri from "../stores/URI";
import Stars from "../components/bagrounds/stars.svelte";
import Vibrate from "../components/bagrounds/vibrate.svelte";
import { Haptics, ImpactStyle } from '@capacitor/haptics';

import { onMount } from "svelte";

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

   onMount(async () => {

   hapticsImpactMedium()
   
      


  
  
  });

  // let teacher;
  // let username = $UserData.Username;
  // $: if (username) {
  //   checkusername();
  // }

  // async function checkusername() {
  //   nameavail = await CheckUsername(username);
  //   console.log("checking user name babey ", nameavail);
  // }
  let nameavail = true;
  
  let uuid = "";

  

  let file;
  let image;
  let state;
  let loading = false;

  let checked = true;

  let savedFile;
  let imgurl = $UserData.Profilephotourl;
  let unsaved = false;
  let visibleunsavedpromt = false;
 

  

  async function selectimage() {
    image = await Camera.getPhoto({
      quality: 10,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    if (image) {
      return image;
    } else {
      console.log("image picker failed");
    }
  }

  async function uploadprofilepic() {
    const image = await selectimage();
    loading = true;
    let formData = new FormData();
    let url = `${$Uri.CdnURi}/uploadprofilepicture`;

    const blob = new Blob([new Uint8Array(decode(image.base64String))], {
      type: `image/${image.format}`,
    });

    formData.append("attachment", blob, "propic");
    console.log($UserData.UserID);

    formData.append("uuid", JSON.stringify($UserStore.SessionID));

    const res = await fetch(url, {
      method: "POST",

      body: formData,
    });

    const json = await res.json();

    let result = JSON.stringify(json);

    let obj = await JSON.parse(result);
    console.log(obj.msg, "FROM OBJ");

    if (obj.msg == "success") {
      loading = false;

      imgurl = await obj.profilephotourl;
    }

    // @ts-ignore
  }

  $: if (!checked) {
    state = "learner";

    console.log(state);
  } else {
    state = "teacher";
    console.log(state);
  }

 

  async function up() {
    if (nameavail) {
      localStorage.removeItem("NewUser");
      UpdateData();
    } else {
      console.log("you need different name");
    }
  }

  async function UpdateData() {
    loading = true;

    
    const { value } = await Storage.get({ key: "SesionID" });
    uuid = value;
    const res = await fetch(`${$Uri.BaseURi}/updatedata`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uuid,
        name: $FateUser.name,
        gender : $FateUser.gender,
        place: $FateUser.place,
        dob : $FateUser.dob,
        time: $FateUser.time
      }),
    });
    const json = await res.json();
    let result;

    result = await JSON.stringify(json);

    console.log(result);

    // @ts-ignore

    setTimeout(function () {
      loading = false;
      replace("/pickphotos");
    }, 500); //
  }
</script>

<h1 class="font-serif text-3xl flex justify-center mt-16">
  FATE 
</h1>


<div class="flex justify-center  ">



 









<main in:fade class="editpage mt-0  flex flex-col content-center no-scrollbar">
  <div class="mt-15 form-control h-auto flex flex-wrap flex-col ">
    {#if loading}
      <div class="absolute">
        <div>
          <Basicloader />
        </div>
      </div>
    {/if}

  </div>

  
  
  <div class="p-10 card ">
    <form on:submit|preventDefault={up} action="">
      <div class="form-control">
        <div class=" flex flex-row content-center ">
        
        </div>

        {#if !nameavail}
        <div class="font-bold text-red-500 mt-5">
          oops someone has already got that username 🤧
        </div>
      {/if}

      <h1 class="my-3">
        Name
      </h1>

      <input
      bind:value={$FateUser.name}
      type="text"
      placeholder="Name"
      class="input input-bordered w-full max-w-xs mb-3"
    />

    <h1 class="my-3">
      Place of birth
    </h1>
  
    <input
      bind:value={$FateUser.place}
      type="text"
      placeholder="Place of Birth"
      class="input input-bordered w-full max-w-xs mb-5"
    />
  


    <h1 class="my-3">
      Gender
    </h1>


  <select 
  bind:value={$FateUser.gender}
  class="select select-bordered w-full max-w-xs mb-5">
      
    <option disabled selected>Gender</option>
    <option value="male"> Male </option>
    <option value="female">Female</option>
    <option value="Nonbinary">Nonbinary</option>
  </select>

 

  <div class="flex flex-row justify-between ">


    <div class="flex flex-col">

      <h1 class="my-3 text-2xs">
        Date of birth
      </h1>
    
        <input
          bind:value={$FateUser.dob}
          type="date"
          placeholder="Date of Birth"
          class="input input-bordered w-full  max-w-xs mb-5"
        />
  
      



    </div>
  
      <div class="flex flex-col">
      <p class="my-3 text-2xs ">Time of Birth</p>
      <input
        bind:value={$FateUser.time}
        type="time"
        placeholder="Time of Birth"
        class="input input-bordered w-full max-w-xs mb-5"
      />

    </div>
  
  


  </div>


 
   

   


        <!-- <button class="btn btn-accent mt-5 "> Push </button> -->
      <button class="btn btn-outline mt-10"> Push </button>
 
      </div>
    </form>
  </div>

  {#if visibleunsavedpromt}
    <div
      in:fly|local
      class="  text-center bottom-44 flex flex-col justify-center fixed mt-3 rounded-box bg-red-50 px-3  py-3"
    >
      <p>woah make sure you push those changes !</p>
      <div class="flex flex-row">
        <button
          class="btn mx-auto mt-3 btn-sm btn-outline  "
          on:click={() => {
            pop();
          }}>shove</button
        >
       

          <div>
        <button
          class="btn mx-auto mt-3 btn-sm btn-success  "
          on:click={() => {
            UpdateData();
          }}>push</button
          
        >
      </div>
    
      </div>
    </div>
  {/if}

  
 <Stars></Stars>


</main>


</div>



<style>
  .editpage {
    max-width: 700px;
    max-height: auto;
  }

 
</style>
