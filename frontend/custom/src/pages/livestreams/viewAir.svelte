<script>
  // @ts-nocheck

  import { Client, LocalStream, RemoteStream } from "ion-sdk-js";
  import { IonSFUJSONRPCSignal } from "ion-sdk-js/lib/signal/json-rpc-impl";
  import Basicloader from "../../components/loading/basicloader.svelte";
  import { pop } from "svelte-spa-router";
  import { fade, slide, scale, fly } from "svelte/transition";

  let soureavail = "checking";

  setTimeout(function () {
    if (soureavail == "true"){
      console.log("air going on...")

    }else{
      soureavail = "false"
    }
    
  }, 4000); //

  const serverURL = "wss://wss.discist.com/ws";

  const signal = new IonSFUJSONRPCSignal(serverURL);
  const Configuration = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };

  const client = new Client(signal, Configuration);

  signal.onopen = () => client.join("testx");

  let subVideo;

  client.ontrack = (track, stream) => {

    
   
    console.log("got track", track.id, "for stream mfers:", stream.id);
    soureavail = "true"
    

    track.onunmute = () => {    
      subVideo.srcObject = stream;
      subVideo.autoplay = true;
      subVideo.muted = false;
      
     

      stream.onremovetrack = () => {
        subVideo.srcObject = null;
        soureavail = "false"
        
      };
    };
  };

  // client.ondatachannel = function (event) {
  //   var receiveChannel = event.channel;
  //   console.log(receiveChannel);

  //   receiveChannel.onmessage = function (event) {
  //     console.log("ondatachannel message:", event.data);
  //     receiveChannel.send("got it boi");
  //   };
  // };

  // client.ondatachannel = ({channel}) =>{
  //       channel.onmessage = ({data}) =>{
  //         console.log(data , 'from the data channel');
  //       }
  //     }
</script>

<main>
  <header class="flex h-16 justify-center items-center text-xl mt-10">
    <button
      class="backbutton btn btn-square btn-outline text-2xl mt-10 left-3   fixed font-mono text-gray-400"
      on:click={() => {
        pop();
      }}
    >
      👈🏼
    </button>

    <div>
      <h1 class="font-mono ">Discist</h1>
    </div>
  </header>
  <div class="flex flex-col relative mt-16">
    <!-- svelte-ignore a11y-media-has-caption -->

    {#if soureavail == "true"}
    <div class=" flex justify-center">
      <video
        in:fade
        bind:this={subVideo}
        playsinline
        controls
        autoplay="true"
        class="bg-white w-96 h-72  mt-10 rounded-lg"
      />
    </div>
    {/if}

    {#if soureavail == "false"}
      <h1 class=" text-center text-2xl mt-52">nothing up </h1>
    {/if}

    {#if soureavail == "checking"}
      <div class="flex justify-center text-center items-center">
        <h1 class=" text-center text-2xl mt-52">checking...<h1>
     <div class="flex flex-row"><Basicloader> </Basicloader>   <Basicloader> </Basicloader> <Basicloader> </Basicloader> </div> 
      </div>
    {/if}
  </div>

  {#if soureavail == "loaded" }

  <button class="btn btn-outline mx-10" on:click={()=>{soureavail = "true"}}> join </button>

    
  {/if}

</main>
