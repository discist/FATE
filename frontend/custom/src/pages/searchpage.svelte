<script>
import Uri from "../stores/URI";
import SearchResult from "../stores/Usersearchresults";


import { fade, slide, scale, fly } from "svelte/transition";
import { push } from "svelte-spa-router";
import SelectedUser from "../stores/SelectedUser";
import { onMount } from "svelte";

let temparr = []

onMount(async()=>{
 localStorage.setItem("activetab", "search")


 if ($SearchResult.users.length < 2){

  GetallUser()

}

 




})





async function GetallUser(value) {
 
  console.log("getting all users");

 
  const res = await fetch(`${$Uri.BaseURi}/getallusers`, {

  
    method: "POST",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uuid: value,
    }),
  });
  const json = await res.json();
  let result;
 //console.log(json, "get all data func ");




  json.alluserdata.forEach((item, index) => {

      

      let alusersjson = {
        id: item.id,
        username: item.username,
        joined : item.createdAt, 
        profilpiclink :  item.profilephotourl,
        state:     item.state,
        subject:  item.subject,
        story: item.story
      };
      
      temparr.push(alusersjson)
     
    });

    if ($SearchResult.users.length < 2){

      $SearchResult.users = temparr

    }

 



    

  
}



function gotouseracc(index){

 

  $SelectedUser.index = index

  push("/viewprofile")







}


onMount(async()=>{
 
  
})




    



</script>




<main class="mt-14  mx-auto flex flex-col   content-center">
   
  <div class="relative mx-5">
  <h1 class="mx-auto  mt-0 font-mono  sticky  font-bold text-2xl">
        Search
      </h1>


    </div>
  
  





    



    <div class="grid grid-cols-2 sm:grid sm:grid-cols-4">


    {#each  $SearchResult.users as { id, username, profilpiclink , state , subject}, i}


    <div>
    <div on:click={()=>{gotouseracc(i)}} in:fade|local class=" text-black flex mt-5 mx-3  mb-5  flex-col rounded-lg w-50  bg-gray-50">

      <div class="flex flex-col h-48 ">

        <div class="avatar relative  bottom-2">
          <div class="mb-2 roundtop w-full h-24 ">
            <img alt="profilepic" src={profilpiclink}>
          </div>

          {#if state == "teacher"}

          <div class="  ">
  
            <div class="  absolute  right-3  bg-gray-200 rounded-b-full">
            <p
              class="   text-2xl"
            >
              👩🏻‍🏫
            </p>
  
          </div>
          
          
          </div>
        
          {/if}

          
        </div> 
        <h1 class="mx-2 text-sm">{username}</h1>


        {#if state == "teacher"}

      <h1 class=" font-semibold mx-2 text-sm text-gray-600 ">{subject}</h1>
      
        
      {/if}


        

      

      </div>

    </div>

      

      
     


    </div>
    {/each}

   

  </div>

  <div class= "h-28">
    
  </div>
    

</main>

<style>
    .search{
        width: auto;
        bottom: 4.5rem;
        
    }

    .roundtop{
      border-radius: 0.5rem 0.5rem 0rem 0rem;
    }
</style>