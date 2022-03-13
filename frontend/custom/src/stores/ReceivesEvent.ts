import { writable  } from 'svelte/store';



  



export const ReceivedEvent = writable(


    
   {

       ID:"",
       Event:"nothing",
       SenderUsername: "",
       TargetUsername: "",
       Body:"",
       Profilephotourl : "",
       

   },
   

)




// type Event struct { // each event aka message
// 	Event          string `json:"event"`
// 	ID             int    `json:"id,omitempty"`
// 	SenderUsername string `json:"sender_username"`
// 	TargetUsername string `json:"target_username"`
// 	Body           string `json:"body"`
// }





export default ReceivedEvent;