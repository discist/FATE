<script>
  import SearchResult from "../../stores/Usersearchresults";

  import SelectedUser from "../../stores/SelectedUser";
  import { push, pop , replace} from "svelte-spa-router";
  import UserData from "../../stores/UserData";

  let index = $SelectedUser.index;

  let user = $SearchResult.users[index];

 function dmlayout(){
     push("/dm")
 }




</script>


<main>
  <div
    class="  header  flex flex-row sticky mt-20 mx-10 justify-end text-center">

 
  </div>

  <div class=" flex flex-col">
    <div class="namecard flex flex-row mx-2">
      <div class="avatar ">
        <div class="mb-0 w-24 mx-auto h-24 mask mask-circle">
          <img alt="dsf" src={user.profilpiclink} />
        </div>

        {#if user.state == "teacher"}
          <div class="  ">
            <div class="  absolute  right-3  bg-green-50 rounded-b-full">
              <p class="   text-2xl">👩🏻‍🏫</p>
            </div>
          </div>
        {/if}
      </div>

      <div class="flex flex-col mx-0">
        <h1 class="font-mono text-xl font-bold mx-5">{user.username}</h1>

        {#if $UserData.State == "teacher"}
          <h1 class="font-mono mt-0 font-semibold mx-5">{user.subject}</h1>
        {/if}

      
      </div>
    </div>

    <div class=" w-96">
      <p class=" flex justify-start mx-4 mt-3  font-mono font-thin">
        {user.story}
      </p>
    </div>

    <!-- <div class="font-mono w-auto text-center  ">EMAIL :{$UserData.Email}</div> -->

    <!-- <div class="font-mono w-auto text-center  "> {$UserData.UpdatedAt} </div> -->
    <!-- <div class="font-mono w-auto text-center  "> {$UserData.CreatedAt} </div> -->
    <!-- <div class="font-mono w-auto text-center  "> {$UserData.Password} </div> -->

    <!--     
             {#each cats as { uuid, location, device }, i}
            <div class="  text-black flex  justify-center  mx-7 flex-col rounded-lg p-5 w-80  bg-gray-100">
    
             
              <p class="">{location.city}</p>
              <br>
              <p>{device.model}</p>
    
            </div>
            {/each}  -->

    <!-- <button class="btn btn-outline " on:click={Logout}> logout </button>
    
        <button class="btn btn-outline " on:click={Logooutall}> logout all </button> -->

    <div class="spacer h-20 font-mono mt-52 text-center">
      <h1>Happy your here 🫀</h1>

    </div>
  </div>
  <div class="spacer">

  </div>
  

  <div class="  fixed flex flex-row justify-center  w-full h-12  bottom-6 ">
    <button on:click={pop}
      class="backbutton btn btn-square btn-outline text-2xl mx-5  font-mono text-gray-400"
     
    >
      👈🏼
    </button>

    <button
    class="btn btn-md btn-outline w-20 self-end  "
    on:click={dmlayout}

  >
    Dm
  </button>
</div>
</main>


<style>
    .spacer{

        height: 10vh;

    }
</style>