import { writable } from 'svelte/store';



// BaseURi : "http://112.133.192.241:3001",
// CdURi :   "http://112.133.192.241:3002",

// BaseURi : "https://api.discist.com",
// CdnURi :   "https://cdn.discist.com",
// WebSocketUri :   "wss://ws.discist.com",
// WebRTCUri :   "https://wss.discist.com"



//"https://api.fate.dating",





const Uri = writable(

  
   // https://api.fate.dating


    {

        
        BaseURi :"https://api.fate.dating",
        CdnURi :   "https://cdn.fate.dating",
  
         //unchanged
        WebSocketUri: "wss://ws.discist.com",
        WebRTCUri: "https://wss.discist.com"



    },






)









export default Uri;
