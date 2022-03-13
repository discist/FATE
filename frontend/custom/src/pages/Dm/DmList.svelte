<script>
  import SelectedUser from "../../stores/SelectedUser";

  import ReceivedEvent from "../../stores/ReceivesEvent";
  import {  pop , push } from "svelte-spa-router";

  
  let list = [];

  function openChat(){

    $SelectedUser.profilpiclink = $ReceivedEvent.Profilephotourl


   push("/dm")

  }



</script>

<main>
  <h1 class="text-3xl font-bold  mt-10 mx-5"> DMs</h1>

  <div class="mt-15 flex flex-col" />

  <div  on:click={openChat} class="chat   bg-gray-50 py-4 flex flex-row w-full mx-3">
    <div class="avatar">
      <div class="mb-0 rounded-full w-14 h-14">
        <img
          alt=""
         
          src={$ReceivedEvent.Profilephotourl}
        />
      </div>

      <div class="flex flex-col mx-10">
        <h1 class="mt-1 font-semibold text-xl">{$ReceivedEvent.SenderUsername}</h1>
        <h1 class="mt-0">{$ReceivedEvent.Body}</h1>
      </div>
    </div>
  </div>

  <button on:click={pop}
class="backbutton btn btn-square btn-outline text-2xl mx-5  mt-80 font-mono text-gray-400"

>
👈🏼
</button>
</main>
