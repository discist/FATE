<script>
import OwnPosts from "../../stores/Ownposts";
import { push, pop , replace} from "svelte-spa-router";
import { Storage } from "@capacitor/storage";


import SelectedPost from "../../stores/Selectedpost";
import  Uri from "../../stores/URI";



    const index = $SelectedPost.index
    const post = $OwnPosts.ownPosts[index]


    



    console.log(post.id  ,"post")


    async function Deltepost() {
    

    const { value } = await Storage.get({ key: "SesionID" });
    let uuid = value;
    const res = await fetch(`${$Uri.BaseURi}/deletepost`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: uuid,
        postid: post.id
      }),
    });
    const result = await res.json();

    // console.log(result);

    // console.log(post.id);







   pop()



    

  }






    


</script>


<div class="flex flex-col justify-center ">
<div class=" mt-32 container">

   
     
      

    <img  class="w-full " src={post.mediaurl} alt="">
    
    

    <div class="bidinfo mt-3 mx-4 font-mono ">
      <h1 class="font-mono text-2xl md:text-4xl"> {post.username} </h1>

      <h2 class="font-light text-xl"> {post.subject} </h2>

      


        <p class="mt-2 flex-wrap font-extralight">
          {post.brief}
        </p>

        

       


    </div>

    
  </div>


  <div class=" mx-auto fixed flex flex-row justify-center  w-full h-12  bottom-6 ">

  <button on:click={pop}
  class="backbutton btn btn-square btn-outline text-2xl mx-5  font-mono text-gray-400"
 
>
  👈🏼
</button>

<button
on:click={Deltepost}
class="btn btn-md btn-error w-20 self-end  "


>
Delete
</button>
</div>





  

</div>




<style>
    img{
        width: 100vh;
        height: 50vh;
        object-fit: cover;
        overflow: hidden;
    }
</style>
