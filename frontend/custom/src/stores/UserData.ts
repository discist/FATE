import { writable } from 'svelte/store';







const UserData = writable(



    {

        UserID : "",
        Email: "",    
        Password: "",
        CreatedAt: "",
        UpdatedAt: "",
        Sessions:  "",
        Username: "",
          Story:    "",
          State:    "",
          Subject  :"",
        
        Profilephotourl :""


    },


)







export default UserData ;
