
<script>



import { replace, push } from "svelte-spa-router";
import Screen from "../components/Screen.svelte";
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { onDestroy } from "svelte";

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

const hapticsVibrate = async () => {
  await Haptics.vibrate();
};

onDestroy(async()=>{

  haptic = false



})

 
let vibrate = "off"
let haptic = false;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function joinbutton(){

  


  
   


 
 

  vibrate = "on"
  


  setTimeout(function(){

    vibrate = "off"
    



    
    
   
    

    

   
    replace("/auth")
 	
}, 1000);


}


 


 
 
 
</script>

<div  >

<Screen  vibrate={vibrate} >


<main>
  <h1 class="text-gray-300 font-serif text-5xl ">FATE</h1>

  <p class="mt-10 text-gray-300 font-mono text-3xl font-extralightin">
    Let the universe find the one for you
  </p>

 

 
  <button on:click={joinbutton} class="btn btn-outline  mt-16 mb-10">
    <h1 class="font-mono font-light text-2xl ">Join</h1>

  </button>
  


  

 
</main>

</Screen>

</div>




