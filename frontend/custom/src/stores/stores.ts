import { writable } from 'svelte/store';



export const FateUser = writable({
    uid: "9ff5b0ecd758443dbe8003edf617d151",
    name: "sex",
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
