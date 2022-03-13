<script>
// @ts-nocheck




import { Client, LocalStream, Constraints   } from 'ion-sdk-js';
import { IonSFUJSONRPCSignal } from 'ion-sdk-js/lib/signal/json-rpc-impl';
import { pop } from "svelte-spa-router";
import { fade, slide, scale, fly } from "svelte/transition";


let pubVideo;

let source = false



const serverURL = "wss://wss.discist.com/ws";  


const signal = new IonSFUJSONRPCSignal(serverURL);   
const Configuration = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };

const client = new Client(signal , Configuration);




signal.onopen = () => client.join("testx")




const start = (type) => {

  source = true

  

    
    
  console.log("going in air")
    if (type){
      LocalStream.getUserMedia(
           {
            resolution: "vga",
            video: true,
            audio: true,
            codec: "vp8",

           } 
        ).then((media)=>{
            pubVideo.srcObject = media; 
            pubVideo.controls = false;
            pubVideo.muted = true;
           
            client.publish(media)

        }).catch(console.error)
    }else{
        LocalStream.getDisplayMedia({
        resolution: 'vga',
        simulcast: true,
        video: true,
        audio: true,
        codec: "vp8"
        }
         ).then((media)=>{
             pubVideo.srcObject = media;
             pubVideo.autoplay = true;
             pubVideo.controls = true;
             pubVideo.muted = true;
             client.publish(media)
         }).catch(console.error)

    }
}




</script>


<main class="fullscreen">

    <header class="flex h-16 justify-center items-center text-xl   mt-10">

      <button
      class="backbutton btn btn-square btn-outline text-2xl mt-10 left-3  top-0  fixed font-mono text-gray-400"
      on:click={() => {
      pop()
      }}
    >
      👈🏼
    </button>

    <h1 class="text-2xl  ml-5">    Discist AIR 💨 </h1>

       </header>
        <div class="flex flex-col  relative mt-16 justify-center ">

          <div >
   

            <div class="  flex flex-row ">
              <button 
      
              on:click={()=>{start(true)}}
              
              class=" btn  btn-outline text-2xl     font-mono text-gray-400"
            
            >
      
      
            
        
            Camera 📹
            </button>
        
      
      
            <button 
      
            on:click={()=>{start(false)}}
            
            class=" btn  btn-outline text-2xl   mx-10  font-mono text-gray-400"
          
          >
      
      
          
      
          Screen 📺
          </button>
      
        </div>
        
             
      
      
             
          
            </div>

            {#if source}

             <!-- svelte-ignore a11y-media-has-caption -->
             <video  in:fade playsinline autoplay=true bind:this={pubVideo}  class="bg-white w-96 h-72 mx-10 mt-10 rounded-lg" ></video>
              
            {/if}
         



           
           
          </div>



          
    
    
    
    
    
    
    
    
    </main>
    


    <style>
        .fullscreen{
            width: 100vw;
            height: 100vh;
        }
    </style>
