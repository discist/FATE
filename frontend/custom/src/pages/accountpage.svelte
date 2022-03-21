<script>
  import UserData from "../stores/UserData";
  import { pop, push } from "svelte-spa-router";
  import Profile from "./ownprofile.svelte";
  import { onMount } from "svelte";
  import Viewownposts from "../components/postypes/viewownposts.svelte";

  onMount(async () => {
    localStorage.setItem("activetab", "account");
  });
</script>

<main class="mt-10  flex flex-col">
  <Profile />

  <div
    class="flex mt-11 py-2 flex-row justify-evenly text-center bordered border-1 rounded-lg border-gray-300 w-full "
  >
   

    <!-- <div class=" py-2 px-3  rounded-md  shadow-md">
            <h1 > classes </h1>
    
        </div>
     
        <div class=" py-2 px-3  rounded-md  shadow-md">
            <h1 > live </h1>
    
        </div>
       
        <div class=" py-2 px-3  rounded-md  shadow-md">
            <h1 > stats </h1>
    
        </div> -->
  </div>
  <!-- <Viewownposts /> -->
</main>


