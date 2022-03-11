<script>
import { onMount } from "svelte";

import {
    bounceOut,
    cubicOut,
   
    elasticOut,
    sineIn,
    sineInOut,
  } from "svelte/easing";

     import { tweened } from "svelte/motion";
     import { fade , slide } from 'svelte/transition';
     let textanime = tweened(0, {
    duration: 1110,
    easing: sineIn,
  });


  let emailtrue = false


  onMount(async()=>{


  
  
})



</script>


<main>



    <h1 class="text-gray-300 font-serif text-5xl "> FATE </h1>

    <p
   
     class="mt-10 text-gray-300 font-mono text-3xl font-extralightin">
     Let the universe  find the one for you  
    </p>





    <div class="form-control w-full max-w-xs mt-20 flex font-extralight font-mono  justify-center">


      {#if !emailtrue}
    
      <div in:fade class="email">

        <h1 class="text-xl text-gray-400 font-mono mb-3">
          Email 
      </h1>
  
      <div class="flex flex-row">
  
          <input type="text" placeholder="enter" class="input input-bordered w-full max-w-xs">
          <!-- svelte-ignore a11y-label-has-associated-control -->
  
          <button on:click={()=>{emailtrue = true}} class="btn btn-outline"><h2>  ENTER </h2></button>
  
      </div>
  

      </div>

    
    {:else }

    <div in:fade>

    <h1 in:fade class="text-xl text-gray-400 font-mono mb-3">
      Password 
  </h1>

  <div class="flex flex-row">

      <input type="text" placeholder="enter" class="input input-bordered w-full max-w-xs">
      <!-- svelte-ignore a11y-label-has-associated-control -->

      <button class="btn btn-outline"><a href="/editprofile"> JOIN </a></button>
      
  </div>

  <p  on:click={()=>{emailtrue = false}} in:slide class="text-xs mt-6 cursor-pointer"> go back  </p>

  </div>

 
 
    
    
   
        
      {/if}
    
        <!-- svelte-ignore a11y-label-has-associated-control -->
       
       
      
      </div>



    <div class="stars -z-10"></div>
    <div class="twinkling  -z-10 "></div>
    <div class="clouds"></div>
  
    
</main>


<style>
    

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:-2;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:-1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
    z-index:-3;

  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}
</style>