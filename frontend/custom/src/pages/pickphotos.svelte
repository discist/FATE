<script>
  import Stars from "../components/bagrounds/stars.svelte";
  import Screen from "../components/Screen.svelte";
  import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
  import { Filesystem } from "@capacitor/filesystem";
  import { decode } from "base64-arraybuffer";
  import { Capacitor } from "@capacitor/core";



  import Uri from "../stores/URI"
import { FateUser } from "../stores/stores";
let image;
let imagedisplay;
let imageselected

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
    console.log(obj.msg, "FROM OBJ");

    if (obj.msg == "success") {
      console.log(obj);
    //   addpostdata(obj);
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
    console.log($FateUser.uid);

    formData.append("uuid", JSON.stringify($FateUser.uid));

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

    //   addpostdata(obj);
    }
  }




  async function photoupload(){

    console.log("uplaod")
   const img = await  selectimage()
   console.log(img ,  'retuened');
   uploadPut()

  }

  let successprompt ;


  async function uploadPut() {

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

<div class="flex flex-col justify-center items-center mt-10">
  <h1>Pick six images of yourself</h1>
</div>

<div class="grid grid-cols-3 gap-4 mx-10 mt-32">
  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black bg-red-100 w-full h-32">
      <img

      src={imagedisplay}
       
        alt=""
        
      />
    </div>

    <div
      
      on:click={photoupload}
      class=" text-xl flex justify-center hover:text-black py-0 text-white border-2 bg-black hover:bg-white w-full h-8"
    >
      +
    </div>
  </div>

  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black bg-red-200 w-full h-32" />

    <div
      class=" text-xl flex justify-center py-0 text-black bg-blue-200 w-full h-full"
    >
      +
    </div>
  </div>

  <div class="w-32 h-40 bg-white rounded-sm ">
    <div class=" text-black bg-red-200 w-full h-32" />

    <div
      class=" text-xl flex justify-center py-0 text-black bg-blue-200 w-full h-full"
    >
      +
    </div>
  </div>
</div>

<Stars />
