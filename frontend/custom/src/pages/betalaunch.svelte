<script>
  import Logo from "../components/logo.svelte";
  import Three from "../components/three.svelte";

  import logo from "../assets/logodiscist.svg";
  import Login from "./auth/Login.svelte";
  import { onMount } from "svelte";

  let mobile = false;

  onMount(async () => {
    console.log(window.screen.width);
    if (window.screen.width < 900) {
      mobile = true;
    }
  });

  // let bggreen = "#f8fff5"
</script>

<div
  class="  z-10  flex items-center justify-center bg-black w-screen h-screen "
>
  <Three />

  <div
    class="text-xl sm:text-3xl md:text-4xl lg:text-5xl rounded-lg  text-white mx-10 font-mono px-10 "
  >
    <div class="flex flex-row top-10   rounded-lg  items-center justify-center">
      <h1 class="">Discist</h1>
      <!-- <img class="w-12" src={logo} alt="" /> -->
      <Logo />
    </div>
    <h1 class="my-3   rounded-lg  py-3 px-5 ">Beta coming soon</h1>
  </div>

  <div
    class="fixed    bottom-36 sm:bottom-96 text-white bg-gray-900 mx-3 px-2 rounded-md my-3"
  />

  <h2
    class="fixed text-xs sm:text-lg md:text-lg lg:text-xl bottom-10 text-white bg-gray-900 mx-3 px-2 rounded-md my-3"
  >
    refresh to see a new visual
  </h2>


  {#if mobile == false}

  <h2 class="fixed text-2xs sm:text-2xs md:text-2xs lg:text-xs bottom-4 text-white bg-gray-900 mx-3 px-2 rounded-md my-3"> double-click fullscreen </h2>

      
  {/if}
</div>
