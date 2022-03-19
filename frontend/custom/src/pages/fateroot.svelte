<script>
import Screen from "../components/Screen.svelte";
import { replace, push } from "svelte-spa-router";

</script>
<main>
  <Screen>

    <h1 class="text-center">

        This is where the magic happens 🪄

        <p on:click={()=>{push("/versionupdate")}} class="text-red-200 mt-60 flex justify-center items-center absolute">
            logout
        </p>

        <p on:click={()=>{push("/pickphotos")}} class="text-red-200 mt-52 flex justify-center items-center absolute">
            pick-img
        </p>
    </h1>

    
   
    

  </Screen>

 

</main>