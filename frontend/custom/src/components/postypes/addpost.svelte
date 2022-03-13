<script>
  import { onMount } from "svelte";
  import { decode } from "base64-arraybuffer";
  import { Storage } from "@capacitor/storage";
  import { pop } from "svelte-spa-router";

  import UserData from "../../stores/UserData";
  import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
  import Uri from "../../stores/URI";
  import UserStore from "../../stores/stores";
  import Basicloader from "../loading/basicloader.svelte";
  import { Capacitor } from "@capacitor/core";
  import { Filesystem } from "@capacitor/filesystem";
  import { fly } from "svelte/transition";

  onMount(async () => {
    localStorage.setItem("activetab", "post");
  });



  let subject = "";
  let description = "";
  let valid;
  let image;
  let imageselected = false
  let imagedisplay;
  let loading = false;
 
  let successprompt =""

  let errprompt = "";

  async function addpostdata(obj) {
    loading = true;

    const { value } = await Storage.get({ key: "SesionID" });
    let uuid = value;
    const res = await fetch(`${$Uri.BaseURi}/addpost`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: value,

        type: "post",
        subject: subject,
        brief: description,
        mediaurl: obj.postimageurl,
      }),
    });
    const result = await res.json();

    console.log(result);
    loading = false;
    if (result.msg == "postsuccess"){

        successprompt = "  👊🏻 "

        setTimeout(()=>{


          localStorage.setItem("activetab", "discover");


            pop()


        } , 300)


        
    }
  }

  async function nativeupload() {
    const file = await Filesystem.readFile({
      path: image.path,
    });

    const blob = new Blob([new Uint8Array(decode(file.data))], {
      type: `image/${image.format}`,
    });

    console.log(blob);
    loading = true;

    let formData = new FormData();

    let url = `${$Uri.CdnURi}/uploadpostimage`;

    formData.append("attachment", blob, `${$UserData.Username}`);
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
      console.log(obj);
      addpostdata(obj);
      loading = false;
    }
  }

  async function webupload() {
    let blob = await fetch((await image).webPath).then((r) => r.blob());

    console.log(blob);
    loading = true;

    let formData = new FormData();

    let url = `${$Uri.CdnURi}/uploadpostimage`;

    formData.append("attachment", blob, `${$UserData.Username}`);
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
      console.log(obj);

      addpostdata(obj);
    }
  }

  async function uploadPut() {

    successprompt = "upload started 🤞🏻 "

    if (subject == "" || description == ""  || imageselected  == false){
        valid = false
        errprompt = "pick image and fill all the fields please"
    }else{
        valid = true
    }

   





    if (Capacitor.isNativePlatform()) {
    

      if (valid) {
        nativeupload();
      }else{
          console.log("no")
        
      }




    } else {
      if (valid) {
        webupload();
      }else{
        console.log("no")
      }
    }
  }

  async  function selectvideo(){
    let video = await Camera.getPhoto({
      quality:10,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
       
      
      



    })
  }

  async function selectimage() {
    image = await Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      width: 50,

      height: 50,
      
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      

      preserveAspectRatio: false,
    });

    if (image) {
      console.log(image.webPath, "this is iamge ");
      imagedisplay = image.webPath;
      imageselected = true

      return image;
    } else {
      console.log("image picker failed");
    }
  }
</script>

<main class="flex flex-col font-mono">
  <div class="mt-15 form-control h-auto flex flex-wrap flex-col ">
    {#if loading}
      <div class="absolute">
        <div>
          <Basicloader />
        </div>
      </div>
    {:else}
      <button
        class="backbutton btn btn-square btn-outline text-2xl mt-10 mx-2   fixed font-mono text-gray-400"
        on:click={() => {
        pop()
        }}
      >
        👈🏼
      </button>
    {/if}
  </div>

  <div class="container ">
   
    
    <img class="putimage" src={imagedisplay} alt="" />

    <h1 class=" mt-3 mb-2 mx-3 text-xl">{$UserData.Username}</h1>

    {#if !valid }
   
    <h1 class="text-red-500 text-xs w-full mx-3">{errprompt}</h1>
        
    {/if}

    {#if valid }
   
    <h1 class="text-green-500 text-xl w-full mx-3">{successprompt}</h1>
        
    {/if}

    <div class="form-control w-52 mx-3 z-10">
      <input
        bind:value={subject}
        type="text"
        placeholder="subject"
        class="input  input-bordered"
      />

      <textarea
        bind:value={description}
        class="textarea h-24 w-72 mt-3 textarea-bordered"
        placeholder="Bio"
      />
    
    </div>

   
    <div class="relative">
      <div class=" flex flex-col absolute w-full z-0 bottom-64">
        <button
          on:click={selectimage}
          class=" w-20 btn btn-neutral pickimage  self-end mx-2"
        >
          pick image
        </button>
      </div>

      <div class=" flex flex-col absolute w-full z-0 bottom-44">
        <button
          on:click={uploadPut}
          class=" w-28 btn btn-primary pickimage  self-end mx-2"
        >
          put ✉️
        </button>

       
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    width: auto;
  }

  .putimage {
    height: 65vh;
    width: 100vh;
    object-fit: cover;
  }

  .pickimage {
    left: 65%;
  }
</style>
