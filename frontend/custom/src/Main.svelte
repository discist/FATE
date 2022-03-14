<script>
import Authpage from "./pages/auth/authpage.svelte";

import Profile from "./pages/ownprofile.svelte";
import Router from "svelte-spa-router";
import Landpage from "./pages/landpage.svelte";
import UserStore from "./stores/stores";
import {push, pop, replace} from 'svelte-spa-router'
import { onMount } from "svelte";
import { Storage } from '@capacitor/storage';
import Editprofile from "./pages/editprofile.svelte";
import Homeroot from "./pages/homeroot.svelte";

import Interact from "./pages/interact.svelte";
import Versionupdate from "./pages/versionupdate.svelte";
import Newuserpage from "./pages/newuserpage.svelte";
import Viewprofiles from "./pages/profiles/viewprofiles.svelte";
import Dmlayout from "./pages/Dm/Dmlayout.svelte";
import Addpost from "./components/postypes/addpost.svelte";
import Postpage from "./pages/postpage.svelte";
import Openpost from "./components/postypes/openpost.svelte";
import UserData from "./stores/UserData";
import IsConnected from "./stores/IsConnevted";
import ReceivedEvent from "./stores/ReceivesEvent";
import Root from "./pages/ROOT.svelte";
import Inbox from "./pages/Dm/DmList.svelte";
import Betalaunch from "./pages/betalaunch.svelte";
import Pickphotos from "./pages/pickphotos.svelte";





let val
let valx
let newuser


onMount(async()=>{

  const { value } = await Storage.get({ key: 'isLogged' });

  newuser  =  localStorage.getItem("NewUser")
   val = value



  

  
})
//ws stuff


//ws stuff end


$: if ( newuser == "true"){
  console.log(newuser ," new user")

  
}





$: logged = val
$:if (logged == "true"){
   console.log("Logged")
  

  replace("/pickphotos")

 }else{


  
   
   
   UserStore.update((value)=>{
    
        let sendtostore = {
           SessionID: "",
           Email: "",    
           Autenticated: false,
           Location : "", 
           Device: ""

        }

        

        return sendtostore
        
      
      })

  replace('/')

 }






  

const routes = {
    "/": Landpage,
    "/profile": Profile,
    "/auth": Authpage,
    "/editprofile": Editprofile,
    "/nav": Homeroot,
    "/post": Postpage,
    "/addpost" :  Addpost,
    "/i":   Interact,
    "/versionupdate":   Versionupdate,
    "/newuser":       Newuserpage,
    "/viewprofile" :  Viewprofiles,
    "/dm" :  Dmlayout,
    "/openpost" :  Openpost,
   
    "/root"  : Root,
    "/inbox"  : Inbox,
    "/pickphotos"  : Pickphotos
    
    
  };
</script>


<main class="font-mono no-scrollbar">
  <Router {routes} />

  <!-- <Betalaunch></Betalaunch> -->

  <!-- <Authpage></Authpage>
  <Profile></Profile> -->
</main>



<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>