import { writable } from 'svelte/store';







const UserStore = writable(



    {

        SessionID: "",
        Email: "email",    
        Autenticated: false,
        Location : "", 
        Device: ""


    },


)







export default UserStore ;
