import { writable } from 'svelte/store';







const SelectedPost = writable(



    {

        brief: "", 
        comments: "", 
        id: "", 
        interactions: 0 , 
        mediaurl: "" , 
        subject: "" , 
        time: "" , 
        type: "" , 
        username: "" , 
        uuid: "" , 
        index: ""
       


    },


)







export default SelectedPost ;
