import { writable } from 'svelte/store';







const UserData = writable(



    {

        UserID : "",
        Email: "",    
        Password: "",
        CreatedAt: "",
        UpdatedAt: "",
        Sessions:  "",
        name: "",
        Profilephotourl :[]


    },


)







export default UserData ;
