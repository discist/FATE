import { writable } from 'svelte/store';







const SelectedUser = writable(



    {

        id: "",
        username: "",
        joined : "", 
        profilpiclink :  '',
        state:     "",
        subject:  "",
        story: "",
        index: ""
       


    },


)







export default SelectedUser ;
