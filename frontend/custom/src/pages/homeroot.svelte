<script>

import Nav from "../components/nav.svelte";
import Accountpage from "./accountpage.svelte";

import Discover from "./discover.svelte"

import Searchpage from "./searchpage.svelte";
import { Keyboard } from '@capacitor/keyboard'; 
import Postpage from "./postpage.svelte";
import { onMount } from "svelte";

 let activelasttab = localStorage.getItem("activetab")



let activetab = activelasttab
if (!activelasttab){

  activetab = "discover"
}

import FetchAccData from '../functions/fetchaccdata'
import UserData from "../stores/UserData";
import ReceivedEvent from "../stores/ReceivesEvent";
import IsConnected from "../stores/IsConnevted";


onMount(async()=>{

  
    
   


   


  // websockets init connection 





})




































function switchtab(e){
    activetab = e.detail
}

</script>
<main class="mx-auto flex flex-col content-center" on:click={()=>{Keyboard.hide}}>

    


    

    {#if activetab === "discover"}
    
    <Discover/>
  

    {:else if activetab === "account"}
    <Accountpage/>
    {:else if activetab === "post"}
    <Postpage/>
  {/if}


  <div  >
  <Nav on:tabchange={switchtab} ></Nav>

</div>
</main>



<style>
  
</style>