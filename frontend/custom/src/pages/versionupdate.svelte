<script>
import {pop} from "svelte-spa-router"
import { CapacitorUpdater } from 'capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'
import Dimebutton from "../components/dimebutton.svelte";

import Logout from "../functions/logout";



let version = "v.00.06";
let dev = "Dev build HMR  👨🏻‍💻" 
let  alpha = "Alpha tester-build"

let production = "production build"

let recentupdates = "Alpha Launch Build"


let build = production



const updateNow = async () => {
  console.log("stating download")
  const version = await CapacitorUpdater.download({
    url: 'https://discist.com/dist.zip',
  })


  // show the splashscreen to let the update happen
  SplashScreen.show()
  await CapacitorUpdater.set(version)
  console.log(version)
  SplashScreen.hide() // in case the set fail, otherwise the new app will have to hide it
}


</script>


<main class="flex flex-col justify-center">

    <div class="backbutton mx-2 mt-10">
        <button  on:click={pop} class="btn btn-square btn-outline text-2xl">👈🏼</button>
    </div>


  


    <div class="mx-7 flex flex-col  mt-28">

      


        <div>

           $

            <h2  class="mb-10 ">
                pull the latest version of the app over the air  and load it   
                for iOS 📱 and android 🤖 users only  
            </h2>
            <h2  class="mb-10 text-red-300 ">
                Current build :  {build}   
            </h2>

            <p class="text-purple-600"> made with 💚 by discist team 🤟🏻</p>


            <p class="text-blue-300"> -sky 🌩 </p>

        </div>

        
    <div class="mt-28 mx-auto">
        <Dimebutton on:click={updateNow}>

             Update
 
         
        </Dimebutton>
    </div>

    <button class="btn btn-ghost text-red-400 " on:click={Logout}>
        Logout ✌🏻
      </button>
    

        <h1 class="mt-10 text-center text-green-400 text-2xl"> {version} </h1>
        <h1 class="mt-1 text-center text-yellow-400 text-xs"> {recentupdates} </h1>
       
 

    </div>


     
   
</main>