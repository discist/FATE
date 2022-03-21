<script>
  import { createEventDispatcher, onMount } from "svelte";
 
import popnav from "../assets/popnav.mp3";
import Icon from '@iconify/svelte';
import Stars from "./bagrounds/stars.svelte";
import UserData from "../stores/UserData";

let pfp 


$: name = $UserData.name







 
  let dispatch = createEventDispatcher();
  let first = true

  let activenav = "";
</script>



{#if name}
  


<main class="flex justify-center bg-transparent  ">
 
<div
  class="w-full  py-5 fixed bottom-0  bg-black  flex flex-row  justify-evenly  items-center md:gap-0  lg:gap-0"
>
  <div
    id="explore"
    on:click={() => {
       if(first){
       
      first = false
     }
      
      console.log("discover");
      activenav = "discover";
      dispatch("tabchange", "discover");
    }}
   
  >

  <Icon width=36 height=36 icon="gis:compass-needle" color="#ccc"  />


  
    
   
  </div>

  
   

 
    

  <div
    id="account"
    on:click={() => {
       if(first){
       
      first = false
     }
      console.log("account");
      activenav = "account";
      dispatch("tabchange", "account");
    }}
  >




  <img class="object-cover h-8 w-8  rounded-xl" alt="" src={$UserData.Profilephotourl[0]}>
  
 
  </div>


  
 
</div>







</main>

{:else}
<main class="flex justify-center bg-transparent  ">
 
  <div
    class="w-full  py-5 fixed bottom-0  bg-black  flex flex-row  justify-evenly  items-center md:gap-0  lg:gap-0"
  >
    <div
      id="explore"
      on:click={() => {
         if(first){
         
        first = false
       }
        
        console.log("discover");
        activenav = "discover";
        dispatch("tabchange", "discover");
      }}
     
    >
  
    <Icon width=36 height=36 icon="gis:compass-needle" color="#ccc"  />
  
  
    
      
     
    </div>
  
    
     
  
   
      
  
    <div
      id="account"
      on:click={() => {
         if(first){
         
        first = false
       }
        console.log("account");
        activenav = "account";
        dispatch("tabchange", "account");
      }}
    >
  
  
  
  
    <img class="object-cover h-8 w-8 bg-gray-400  rounded-xl" alt="">
    
   
    </div>
  
  
    
   
  </div>
  
  
  
  
  
  
  
  </main>

{/if}

