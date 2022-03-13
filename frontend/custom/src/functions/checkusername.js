import { get } from "svelte/store";
import Uri from '../stores/URI'

async function CheckUsername(value) {
    console.log("checking username");
  
    
    const baseuri = get(Uri)
    const res = await fetch(`${baseuri.BaseURi}/checkusernameavailablity`, {
      method: "POST",
  
      headers: {
        Accept: "application/json",
  
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: value,
      }),
    });
    const json = await res.json();
    
    //console.log( json ,  "check user name func ");
console.log(json)
    return json.avail
  }
  
  export default   CheckUsername;