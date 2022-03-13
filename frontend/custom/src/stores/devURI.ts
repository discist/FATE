import { writable } from 'svelte/store';







const DevUri = writable(



    {

        BaseURi : "http://112.133.192.241:3001",
        CdnURi :   "http://112.133.192.241:3002",
        WebSocketUri :   "wss://ws.discist.com",
        WebRTCUri :   "https://wss.discist.com"
       


    },


)







export default DevUri ;
