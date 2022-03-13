<script>
import UserData from "../stores/UserData";

// @ts-nocheck

  import { onMount } from "svelte";
 
  import { pop, push } from "svelte-spa-router";


  onMount(async () => {
    localStorage.setItem("activetab", "post");
  });



  let subject = "";
  let description = "";
  let image;
  let imagedisplay;
 let loading = false




</script>

<main class="flex flex-col  sm:flex-col  justify-evenly items-start font-mono">
  <button class="btn btn-outline  mt-20 mx-auto w-32" on:click={()=>{push("/inbox")}}>  Inbox 📥  </button>


    <button class="btn btn-outline  mt-20 mx-auto w-32" on:click={()=>{push("/addpost")}}> Post 📸 </button>

    {#if $UserData.State == "learner"}

    <button class="btn btn-outline  mt-20 mx-auto w-32" on:click={()=>{push("/viewair")}}>  air 💨  </button>
      
    {/if}


    {#if $UserData.State == "teacher"}

    <button class="btn btn-outline  mt-20 mx-auto w-32" on:click={()=>{push("/goair")}}>  Go  Air 💨  </button>
      
    {/if}





   


</main>

<style>

</style>
