
<script>
  import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { onMount } from 'svelte';
import { Storage } from "@capacitor/storage";


let empty = false

import Uri from "../stores/URI";


  
  onMount(async()=>{


  getallposts()

   

  })


  async function getallposts() {
    

    const { value } = await Storage.get({ key: "SesionID" });
    let uuid = value;
    const res = await fetch(`${$Uri.BaseURi}/getallposts`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: value,
      }),
    });
    const result = await res.json();

    console.log(result);

    items = result.allposts

    if (result.allposts == null){
      empty = true
     // console.log("its empty")
    }else{
      items.reverse()
      empty =false

     // console.log("its not empty")
    }

  

  }


  
  let items = [
    
  
  

  ];

  
  let box;
  let height;
  
  let yScroll = 0
  let prevscroll

  const hapticsImpactMedium = async () => {
     await Haptics.impact({ style: ImpactStyle.Light });
     console.log("hap")
};

  $: if(yScroll < -50){
    console.log("minus bbb")
    hapticsImpactMedium.apply()
    getallposts()
   
  }

  function parseScroll() {
    
    yScroll=box.scrollTop
    

    
    
  }


 function setpriv(){

  prevscroll = yScroll
  console.log(prevscroll)

  }
 
  
</script>





<div 
  class="tab-panels-container   box  flex-col"
  
  bind:this={box}
  bind:clientHeight={height}
  
    on:scroll={parseScroll}
   
   
  
  on:click={()=>{console.log("clicked")}}
  
  
  
  
 

 
>

   {#if !empty}
     
   
  {#each items as item}
    <div class="tab-panel  flex flex-col justify-start">

     
      

      <img src={item.mediaurl} class="object-cover" alt="">
      
      

      <div class="bidinfo mt-3 mx-4 font-mono ">
        <h1 class="font-mono text-2xl md:text-4xl"> {item.username} </h1>

        <h2 class="font-light text-xl"> {item.subject} </h2>

        


          <p class="mt-2 flex-wrap font-extralight">
            {item.brief}
          </p>

          

         


      </div>

      
    </div>

       {/each}

       {:else}
       <div class=" flex flex-row  text-center justify-center  mx-auto  w-full  mt-72">
       <h1> nothing here today ⚡️🤧 </h1>
      </div>
       {/if}

       <div class="h-32">

        <br>
   
       </div>
       
</div>

<style>
  .tab-panels-container {
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    display: flex;
    
  }


  img{
    
    height: 65%;
    width: 100%;
    max-width: 500px;
  }



  

  

  

  .tab-panel {
    scroll-snap-align: start;
    /* only supported in Chrome */
    scroll-snap-stop: always;
    
    width: 100%;
    flex: 1 0 auto;
    height: 100%;
    display: flex;
  }


  


  
   
    


</style>
