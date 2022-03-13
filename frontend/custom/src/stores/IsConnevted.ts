import { writable } from 'svelte/store';


export const IsConnected = writable({
    
    status: false,
    name : ""

  
})


export default IsConnected ;