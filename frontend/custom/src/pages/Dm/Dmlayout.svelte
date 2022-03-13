<script>
import SelectedUser from "../../stores/SelectedUser"

import SearchResult from "../../stores/Usersearchresults";
import { Storage } from '@capacitor/storage';
import Uri from "../../stores/URI";

import {  pop } from "svelte-spa-router";
import UserData from "../../stores/UserData";
import SocketStore from "../../stores/SocketStore";
import ReceivedEvent from "../../stores/ReceivesEvent";






async function getSenderProfile(username) {
 const { value } = await Storage.get({ key: "SesionID" });

        let sessionID = value;

        console.log("fetching ");

        const res = await fetch(`${$Uri.BaseURi}/getuserbyusername`, {
          method: "POST",

          headers: {
            Accept: "application/json",

            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uuid: sessionID,
            username : $ReceivedEvent.SenderUsername
          }),
        });
        const json = await res.json();
        let result;

        result = JSON.stringify(json);

        let DataResponse = await JSON.parse(result);

        console.log(DataResponse.userdata);
       
        return DataResponse.userdata
      }
















let queryname = ""
let profilephoto = ""
let index = $SelectedUser.index;
let userc = $SearchResult.users[index]





  if($ReceivedEvent.SenderUsername == ""){

   console.log(userc)
   queryname = userc.username
   profilephoto = userc.profilpiclink

   console.log("FROM ARRAY" ,  queryname);

}else{
  queryname = $ReceivedEvent.SenderUsername
  let senderdata = getSenderProfile(queryname)

  console.log(senderdata)
  // @ts-ignore
  profilephoto = $ReceivedEvent.Profilephotourl


  
}











let user =  "sket"
let message

let displaymsg = ""





function SendEvent(socket) {
    const data = {
      event: "message",
      sender_username: $UserData.Username,
      target_username: queryname,
      body: message,
    };
    message = "";
    console.log("->", data);

    socket.send(JSON.stringify(data));
    displaymsg = message
  }





</script>









<main class="flex flex-col  mt-1  ">


<button on:click={pop}
class="backbutton btn btn-square btn-outline fixed text-2xl mx-5   mt-2 font-mono text-gray-400"

>
👈🏼
</button>

<div class="flex flex-col justify-center items-center">

  <p class="font-bold text-xl mb-10">
    {queryname} 
</p>





    <div class="avatar online mb-10">
        <div class="rounded-full w-24 h-24">
          <img  alt="profilepic" src={profilephoto}>
        </div>
      </div> 


      <div class="mt-44">
        <h1 class="text-2xl  text-center">
          {$ReceivedEvent.Body} {displaymsg}
        </h1>


        <h1 class="text-xl text-center text-gray-500">

          {displaymsg}
          
        </h1>
      </div>


      <div on:submit|preventDefault = {()=>{SendEvent($SocketStore)}} class="form-control messagebox ">
      
         <div class="flex flex-row justify-center">
          <input  type="text" bind:value={message} placeholder="Type here" class="input inline input-accent input-bordered  ">
         
          <button class="btn btn-outline " role="button" on:click={()=>{SendEvent($SocketStore)}} aria-pressed="true">push</button> 


         </div>
        
      </div>


      

     
</div>


     






    

   




</main>


<style>

  .messagebox{
   
  position: absolute;
  top: 80%;
  left: 20vw
  }

</style>