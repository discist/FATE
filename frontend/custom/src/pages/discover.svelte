<script>
import Stars from "../components/bagrounds/stars.svelte";
import { onMount } from "svelte";

import Doubtvideo from "../components/doubtvideo.svelte";
import Interact from "./interact.svelte";


onMount(async()=>{
 localStorage.setItem("activetab", "discover")
})


</script>
<main class="flex  justify-center">
  


<div class="mt-24 flex   justify-center">


  <Interact></Interact>
  <Interact></Interact>
  <Interact></Interact>
  <Interact></Interact>

  <Stars></Stars>


 
</div>



  


    



 



  
  
  

  
  





  


  

  
</main>






<style>
    /**
 * How to make 3-corner-rounded triangle in CSS (SO)
 * http://stackoverflow.com/q/14446677/1397351
 */




</style>
