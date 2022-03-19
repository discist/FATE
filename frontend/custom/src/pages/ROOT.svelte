<script>
  import FetchAccData from "../functions/fetchaccdata";

  import UserData from "../stores/UserData";
  import { Storage } from '@capacitor/storage';

  import { onDestroy, onMount } from "svelte";

  import IsConnected from "../stores/IsConnevted";
  import ReceivedEvent from "../stores/ReceivesEvent";

  import Homeroot from "./homeroot.svelte";
  import Inbox from "./Dm/DmList.svelte";
  import SocketStore from "../stores/SocketStore";
  import DmList from "./Dm/DmList.svelte";
  import Uri from "../stores/URI";
import Fateroot from "./fateroot.svelte";
import { FateUser } from "../stores/stores";

  async function getSenderProfile(username) {
 const { value } = await Storage.get({ key: "SesionID" });

        let sessionID = value;

        $FateUser.uid =  sessionID

        console.log("fetching ");

        const res = await fetch(`${$Uri.BaseURi}/getuserbyusername`, {
          method: "POST",

          headers: {
            Accept: "application/json",

            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uuid: sessionID,
            username : username
          }),
        });
        const json = await res.json();
        let result;

        result = JSON.stringify(json);

        let DataResponse = await JSON.parse(result);

        console.log(DataResponse.userdata);
       
        return DataResponse.userdata
      }


  let socket;
  onMount(async () => {
    let rawuserdata = await FetchAccData();

    UserData.update((val) => {
      let sendtodata = {
        UserID: rawuserdata.id,
        Email: rawuserdata.email,
        Password:
          "do you want your hashed password ? lmao cuz we dont even know it ",
        CreatedAt: rawuserdata.createdAt,
        UpdatedAt: rawuserdata.updatedAt,
        Sessions: rawuserdata.sessions,
        Username: rawuserdata.username,
        Story: rawuserdata.story,
        State: rawuserdata.state,
        Subject: rawuserdata.subject,
        Profilephotourl: rawuserdata.profilephotourl,
      };

      return sendtodata;
    });


    // websocket shitttt !!!!!

    // if (!$SocketStore){
    // socket = CreateSocket(rawuserdata.username);
    // Listeners(socket);
    // $SocketStore = socket;

    // }else{
    //   console.log("socket exist ");
    // }

    

    //console.log($SocketStore , " <- this is svelte store socket -> real" ,  socket)
  });

  onDestroy(async () => {
    //console.log("closed ws")
    // socket.close()
  });

  // ws stuff
  function CreateSocket(Username) {
    //let Username = Math.random();

    //let userID = "2343243";
    //let SocketURI = `${$Uri.WebSocketUri}/${Username}`;

    let SocketURI = `${$Uri.WebSocketUri}/ws/${Username}`;

    const socket = new WebSocket(SocketURI);

    return socket;
  }

   function Listeners(socket) {
    let Connected = {
      status: false,
      name: "",
    };
    socket.onopen = () => {
      console.log("Successfully Connected");
    };

    socket.onmessage = (event) => {
      console.log("message from SERVER", JSON.parse(event.data));

      let received = JSON.parse(event.data);
      

      // events start
      console.log("event is ", received.event);
      if (received.event == "onconnect") {
        console.log("on conn block ");
        IsConnected.update((val) => {
          let con = {
            status: true,
            name: received.body,
          };

          return con;
        });
        console.log($IsConnected, " is conn");
      }

      MessageListener()


      async function MessageListener(){
         if (received.event == "message") {
        console.log("event is message so doing this", received.event);
       let dataresp = await getSenderProfile(received.sender_username) 
        // @ts-ignore
        ReceivedEvent.update((value) => {
          let sendtostore = {
            ID: received.ID,
            Profilephotourl : dataresp.profilephotourl,
            Event: received.event,
            SenderUsername: received.sender_username,
            TargetUsername: received.target_username,
            Body: received.body,
            
           
          };

          return sendtostore;
        });

        console.log($ReceivedEvent.Profilephotourl , " from sttore");
      }
    };













      
      
    };

    socket.onclose = (event) => {
      console.log("Socket Closed Connection: ", event);
      $SocketStore = false
      IsConnected.update((val) => {
        let con = {
          status: false,
          name: "",
        };

        return con;
      });
      console.log($IsConnected, " is conn");
    };

    socket.onerror = (error) => {
      console.log("Socket Error: ", error);
    };
  }
</script>

<main>
 <Homeroot></Homeroot>
</main>
