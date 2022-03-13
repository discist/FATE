<script>
import UserData from "../../stores/UserData";


import { pop ,push } from "svelte-spa-router";





console.log($UserData.State)


async function startlive(){

  console.log("cunt ")
  push("/yourair")

}







</script>


<main class="flex flex-col">
    <button
      class="backbutton btn btn-square btn-outline text-2xl mt-16 left-3 z-10   fixed font-mono text-gray-400"
      on:click={() => {
      pop()
      }}
    >
      👈🏼
    </button>
    <div class="mt-20 flex justify-center relative mx-auto w-full  ">
    <h1  class="font-bold text-xl fixed md:text-3xl "> GO AIR 💨 </h1>

</div>


<div>
    <div class="form-control mt-32 flex flex-col justify-center items-center w-full mx-auto  ">
        
          <span class="label-text text-xl mb-2 ">Name your Air </span>
        
        <input   type="text" placeholder="AirName" class="input input-primary input-bordered w-72 ">



        <span class="label-text text-xl mt-11 mb-2">About it</span>
        
        <input   type="text" placeholder="totally optional" class="input input-secondary input-bordered w-72 ">



        <button on:click={()=>{push("/yourair")}} class="btn btn-outline  mt-20 mx-auto w-32">  Start   💨   </button>


      </div> 


     


</div>
</main>