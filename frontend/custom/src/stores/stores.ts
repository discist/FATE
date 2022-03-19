import { writable } from 'svelte/store';



export const FateUser = writable({
    uid: "",
    name: "x",
    gender:"",
    token: "",
    pfp: "",
    email: "",
    dob: "",
    place: "",
    time: ""

});






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
