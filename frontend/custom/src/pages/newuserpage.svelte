<script>
  import { Capacitor } from "@capacitor/core";
  import { decode } from "base64-arraybuffer";

  import CheckUsername from "../functions/checkusername";
  import Logout from "../functions/logout";


  import FetchAccData from "../functions/fetchaccdata";

  import { pop, push, replace } from "svelte-spa-router";
  import logo from "../assets/back.svg";
  import { Storage } from "@capacitor/storage";
  import UserData from "../stores/UserData";
  import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

  import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";
  import Basicloader from "../components/loading/basicloader.svelte";
  import UserStore from "../stores/stores";
  import Watermelonbutton from "../components/buttons/watermelonbutton.svelte";
  import Blackbutton from "../components/buttons/blackbutton.svelte";

  //anime
  import { fade, slide, scale, fly } from "svelte/transition";
  import { onMount } from "svelte";
import Uri from "../stores/URI";

//   onMount(async () => {FetchAccData()});

  let teacher;
  let username = $UserData.Username;
  $: if (username) {
    checkusername();
  }

  async function checkusername() {
    nameavail = await CheckUsername(username);
    console.log("checking user name babey ", nameavail);
  }
  let nameavail = true;
  let story = $UserData.Story;
  let subject = $UserData.Subject;

  let uuid = "";

  let session = {
    uuid: uuid,
    device: teacher,
    location: story,
  };

  let file;
  let image;
  let state;
  let loading = false;

  let checked = true;

  let savedFile;
  let imgurl = $UserData.Profilephotourl;
  let unsaved = false;
  let visibleunsavedpromt = false;
  $: if (username != $UserData.Username) {
    unsaved = true;
  }
  $: if (state != $UserData.State) {
    unsaved = true;
  }
  $: if (story != $UserData.Story) {
    unsaved = true;
  }

  $: if (subject != $UserData.Subject) {
    unsaved = true;
  }

  if ($UserData.State == "teacher") {
    checked = true;
  } else {
    checked = false;
  }

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

  console.log(session);

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

    if (checked) {
      state = "teacher";
    } else {
      state = "learner";
    }
    const { value } = await Storage.get({ key: "SesionID" });
    uuid = value;
    const res = await fetch(`${$Uri.BaseURi}/updatedata`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: value,
        username: username,
        story: story,
        subject: subject,
        state: state,
      }),
    });
    const json = await res.json();
    let result;

    result = await JSON.stringify(json);

    console.log(result);

    // @ts-ignore

    setTimeout(function () {
      loading = false;
      replace("/root");
    }, 500); //
  }
</script>

<main class="editpage mt-14  flex flex-col content-center">
  <div class="mt-15 form-control h-auto flex flex-wrap flex-col ">
    {#if loading}
      <div class="absolute">
        <div>
          <Basicloader />
        </div>
      </div>
    {/if}

    <h1 class="text-2xl font-mono  self-center">hi 🙋🏻‍♀️ your new</h1>
  </div>

  <div class="avatar ">
    <div class="mt-5 default w-24 mx-auto h-24 bg-gray-400 mask mask-circle">
      <img alt="." src={imgurl} />
    </div>
  </div>

  <button
    class="btn btn-sm mt-1  btn-outline w-50  mx-auto   "
    on:click={uploadprofilepic}
  >
    Add photo
  </button>

  <div class="p-10 card ">
    <form on:submit|preventDefault={up} action="">
      <div class="form-control">
        <div class=" flex flex-row content-center ">
          <h1 class="mx-1 font-mono text-2xl">Learner</h1>

          <input type="checkbox" bind:checked class="toggle" />

          <h1 class="mx-1 font-mono text-2xl">Teacher</h1>
        </div>

        {#if !nameavail}
        <div class="font-bold text-red-500 mt-5">
          oops someone has already got that username 🤧
        </div>
      {/if}

        <input
          type="text"
          bind:value={username}
          placeholder="username"
          class="input input-bordered  mt-5"
        />

        {#if checked}
          <input
            out:slide|local
            in:fade|local
            bind:value={subject}
            type="text"
            placeholder="what you teach"
            class="mt-4 input input-bordered "
          />
        {/if}

        <textarea
          bind:value={story}
          class=" mt-4 textarea textarea-bordered  h-24 textarea-ghost "
          placeholder="Your Story"
        />

        <!-- <button class="btn btn-accent mt-5 "> Push </button> -->
        <div class="mt-10  mx-auto">
          <Blackbutton>push</Blackbutton>
        </div>

       
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
        <button
          class="btn mx-auto mt-3 btn-sm btn-success  "
          on:click={() => {
            UpdateData();
          }}>push</button
        >
      </div>
    </div>
  {/if}
</main>

<style>
  .editpage {
    max-width: 700px;
    max-height: auto;
  }

  .default{
    background: url(data:image/png;base64,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);
    background-size: 100% 100%;
  }
</style>
