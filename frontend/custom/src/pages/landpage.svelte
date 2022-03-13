
<script>
  import Dimebutton from "../components/dimebutton.svelte";
import logo from "../assets/logodiscist.svg";
import { replace, push } from "svelte-spa-router";

 

 
 
 
</script>


<main class="unsel ">

    <div class="flex  justify-center flex-row mt-14 mb-5 font-mono ">
        <h1 class="  font-mono font-medium text-center text-4xl">DISCIST</h1>
    
        <img class="w-12" src={logo} alt="" />
      </div>

      <div class="unsel mx-20 mt-20">


       
        
        
        

       



        <p class=" mt-10 text-green-900 text-2xl"> dev build </p>
       
      

    </div>
  


      <div class="font-mono  rounded-md mx-auto mt-32 text-center" style="padding: 20px;" >  


        <div on:click={()=>{
          setTimeout(function () {
            replace("/auth")
      }, 500);
          
          }}>
        <Dimebutton  >

          Get in 


        </Dimebutton>

       
      </div>

     

       
      </div> 

</main>


<style>
  .unsel{
    user-select: none;
  }
</style>