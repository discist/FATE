<script>
  import Uri from "../../stores/URI";
  import { Storage } from "@capacitor/storage";
  import { onMount } from "svelte";
  import OwnPosts from "../../stores/Ownposts";
  import SelectedPost from "../../stores/Selectedpost";
  import { push } from "svelte-spa-router";
  import UserData from "../../stores/UserData";
  onMount(async () => {
    photoarr = $UserData.Profilephotourl;
    console.log();
  });

  let empty = false;

  let photoarr;

  // @ts-ignore
  if (photoarr) {
    empty = true;
    console.log("big");
  } else {
    console.log("not big");
  }

  let showninja = false;

  onMount(async () => {
    console.log("mount");

    Getallmyposts();
  });

  function openpost(i) {
    $SelectedPost.index = i;
    console.log($SelectedPost.index);
    push("/openpost");
  }

  async function Getallmyposts() {
    console.log("getting my posts /......");

    const { value } = await Storage.get({ key: "SesionID" });
    let uuid = value;
    const res = await fetch(`${$Uri.BaseURi}/getmydata`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: value,
      }),
    });
    const result = await res.json();

    if (result.userdata.photos.length > 2) {
      showninja = true;
    }

    $OwnPosts.ownPosts = await result.posts;

    if (result.userdata.photos == null) {
      console.log("its null");
    } else {
      empty = true;
    }
  }
</script>

<main>
  <div class="flex flex-col justify-center container">
    <div class="grid grid-cols-2 lg:grid-cols-4">
      {#if empty}
        <!-- {#each $UserData.Profilephotourl as item, i}
          <div
            on:click={() => {
              openpost(i);
            }}
            class=" text-black flex mt-5 mx-auto  mb-5  flex-col rounded-lg w-44 lg:w-72  bg-gray-50"
          >
            <div class="flex flex-col h-44 shadow-sm ">
              <div class="avatar relative  bottom-2">
                <div class="mb-2 roundtop w-full h-52 ">
                  <img alt="post img" src={item} />
                </div>
              </div>
            </div>
          </div>
        {/each} -->

        <div
        on:click={() => {
          openpost();
        }}
        class=" text-black flex mt-5 mx-auto  mb-5  flex-col rounded-lg w-44 lg:w-72  bg-gray-50"
      >
        <div class="flex flex-col h-44 shadow-sm ">
          <div class="avatar relative  bottom-2">
            <div class="mb-2 roundtop w-full h-52 ">
              <img alt="post img" src={photoarr[0]} />
            </div>
          </div>
        </div>
      </div>














      {:else}
        <div class="w-full">
          <h1 class="mx-5">😃</h1>
        </div>
      {/if}
    </div>

    {#if showninja}
      <div class="h-24 mx-auto">🥷🏻</div>
    {/if}
  </div>
</main>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
</style>
