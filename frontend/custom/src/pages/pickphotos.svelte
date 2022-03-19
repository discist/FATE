<script>
  import Stars from "../components/bagrounds/stars.svelte";
  import Screen from "../components/Screen.svelte";
  import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
  import { Filesystem } from "@capacitor/filesystem";
  import { decode } from "base64-arraybuffer";
  import { Capacitor } from "@capacitor/core";
  import { pop, push, replace } from "svelte-spa-router";


  import { Storage } from '@capacitor/storage';







  import Uri from "../stores/URI"
import { FateUser } from "../stores/stores";
let image;

let imagedisplay;
let imagedisplay1;
let imagedisplay2;
let imagedisplay3;
let imagedisplay4;
let imagedisplay5;
let imagedisplay6;
let imageselected

  async function selectimage(number) {
    image = await Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      // width: 500,

      // height: 50,
      
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      

      preserveAspectRatio: false,
    });

    if (image) {
      console.log(image.webPath, "this is iamge ");

      
     

      switch(number) {
    case 1:
      console.log("img 1 ")
      imagedisplay1 = image.webPath
    
    break;
    case 2:
    imagedisplay2 = image.webPath;
    // code block
    break;
    break;
    case 3:
    imagedisplay3 = image.webPath;

    // code block
    break;
 
    case 4:
    
    imagedisplay4 = image.webPath;

    // dongle sick

    // code block
    break;

    
    case 5:
    imagedisplay5 = image.webPath;

    // code block
    break;
   
    case 6:
    imagedisplay6 = image.webPath;

    // code block
    break;
  default:
    // code block
}
      imageselected = true

      return image;
    } else {
      console.log("image picker failed");
    }
  }


  async function addpostdata(obj) {

    
    loading = true;

    const { value } = await Storage.get({ key: "SesionID" });
    let uuid = value;
    console.log(uuid , " uuid bro" )
    const res = await fetch(`${$Uri.BaseURi}/photourlsend`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uuid, 
        photourl: obj.postimageurl,
      }),
    });
    const result = await res.json();

    console.log(result);
    loading = false;
    if (result.msg == "postsuccess"){

        successprompt = "  👊🏻 "

       
        
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
    let loading = true;

    let formData = new FormData();

    let url = `${$Uri.CdnURi}/uploadpostimage`;

    formData.append("attachment", blob, `${$FateUser.name}`);
  

    formData.append("uuid", JSON.stringify($FateUser.uid));

    const res = await fetch(url, {
      method: "POST",

      body: formData,
    });

    const json = await res.json();

    let result = JSON.stringify(json);

    let obj = await JSON.parse(result);
     console.log(obj , " this is our shittt");


    if (obj.msg == "success") {
      console.log(obj);
      addpostdata(obj);
      loading = false;
    }
  }

  let loading;

  async function webupload() {
    let blob = await fetch((await image).webPath).then((r) => r.blob());

    console.log(blob);
    loading = true;

    let formData = new FormData();

    let url = `${$Uri.CdnURi}/uploadpostimage`;

    formData.append("attachment", blob, `${$FateUser.name}`);
    console.log($FateUser.uid , "fate uid bro");

    formData.append("uuid", JSON.stringify($FateUser.uid));

    const res = await fetch(url, {
      method: "POST",

      body: formData,
    });

    const json = await res.json();

    let result = JSON.stringify(json);

    let obj = await JSON.parse(result);

    if (obj.msg == "success") {
      console.log(obj , " this is our shittt");

      addpostdata(obj);
    }
  }
  




  async function photoupload(number){

   
   const img = await  selectimage(number)
   console.log(img ,  'retuened');
   uploadPut()

  }

  let successprompt ;




  

  async function uploadPut() {

    const { value } = await Storage.get({ key: "SesionID" });

        let sessionID = value;

        $FateUser.uid = value

        $FateUser.name = "cuntslimslam"

        console.log("uuid bro " , $FateUser);




successprompt = "upload started 🤞🏻 "



if (Capacitor.isNativePlatform()) {


  if (true) {
    nativeupload();
  }else{
      console.log("no")
    
  }


} else {
  if (true) {
    webupload();
  }else{
    console.log("no")
  }
}
}

  















  
</script>

<div class="flex flex-col justify-center items-center mt-10 w-full ">
  <h1 class="fixed mt-16">Pick six images of yourself</h1>
</div>

<div class="flex justify-center items-center">

<div class=" items-center grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 gap-4 mx-10 mt-32">


  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black  w-full h-32">
      <img

      src={imagedisplay1}
       
        alt=""
        
      />
    </div>

    <div
      
      on:click={()=>{photoupload(1)}}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>
  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black  w-full h-32">
      <img

      src={imagedisplay2}
       
        alt=""
        
      />
    </div>

    <div
    on:click={()=>{photoupload(2)}}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>
  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black w-full h-32">
      <img

      src={imagedisplay3}
       
        alt=""
        
      />
    </div>

    <div
      
    on:click={()=>{photoupload(3)}}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>
  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black  w-full h-32">
      <img

      src={imagedisplay4}
       
        alt=""
        
      />
    </div>

    <div
      
    on:click={()=>{photoupload(4)}}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>
  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black  w-full h-32">
      <img

      src={imagedisplay5}
       
        alt=""
        
      />
    </div>

    <div
      
    on:click={()=>{photoupload(5)}}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>
  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black  w-full h-32">
      <img

      src={imagedisplay6}
       
        alt=""
        
      />
    </div>

    <div
      
    on:click={()=>{photoupload(6)}}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>
 

 
</div>



</div>

<div class="justify-center items-center flex mt-10 ">

  <button on:click={()=>{push("/root")}} class="btn btn-outline w-52"> push </button>

</div>




<Stars />
