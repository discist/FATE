import { Storage } from '@capacitor/storage';
import { replace , push } from "svelte-spa-router";
import UserData from "../stores/UserData";
import UserStore from "../stores/stores";

import Uri from '../stores/URI'
import { get } from 'svelte/store';



let sessionID;
let DataResponse;

let rawuserdata;








 async function FetchAccData() {

    const  { value } = await Storage.get({ key: 'SesionID' });

    
   
    sessionID = value

    
    
   
    console.log("fetching ");
    const baseuri = get(Uri)
    const res = await fetch(`${baseuri.BaseURi}/getmydata`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: sessionID,
      }),
    });
    const json = await res.json();
    let result;

    result = JSON.stringify(json);

    DataResponse = await JSON.parse(result);

    if (DataResponse.error) {
      //localStorage.setItem("isLogged", "false");
      await Storage.set({key: 'isLogged',value: 'false',});


      replace("/auth");
    } else {
      rawuserdata = await DataResponse.userdata;

      

      
      
     

      console.log(rawuserdata , "enndder")

      UserStore.update((values)=>{
     
        let sendtostore = {
           SessionID: value,
           Email: "",    
           Autenticated: true,
           Location : "", 
           Device: ""
  
        }
  
        
  
        return sendtostore
        
      
      })

      UserData.update((values)=>{
     
        let sendtostore = {
          UserID : rawuserdata.id,
          Email: rawuserdata.Email,    
          Password: rawuserdata.Password,
          CreatedAt: rawuserdata.CreatedAt,
          UpdatedAt: rawuserdata.UpdatedAt,
          Sessions:  rawuserdata.session,
          name: rawuserdata.name,
          Profilephotourl :rawuserdata.photos
  
  
        }
  
        
  
        return sendtostore
        
      
      })

      

     
    }

    return rawuserdata
}




     

export default FetchAccData                       