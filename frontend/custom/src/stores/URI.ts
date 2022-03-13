import { writable } from 'svelte/store';



// BaseURi : "http://112.133.192.241:3001",
// CdnURi :   "http://112.133.192.241:3002",


// BaseURi : "https://api.discist.com",
// CdnURi :   "https://cdn.discist.com",
// WebSocketUri :   "wss://ws.discist.com",
// WebRTCUri :   "https://wss.discist.com"






const Uri = writable(



    {

        
        BaseURi : "https://api.discist.com",
        CdnURi :   "https://cdn.discist.com",
  
         //unchanged
        WebSocketUri: "wss://ws.discist.com",
        WebRTCUri: "https://wss.discist.com"



    },






)









export default Uri;
