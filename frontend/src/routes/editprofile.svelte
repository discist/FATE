<script>
import { onMount } from 'svelte';


   import {UserStore} from '../stores'



   onMount(async()=>{

    console.log($UserStore);

   })



</script>






<main style="height: 100vh;" class="bg-transparent ">

  

    <div class="flex flex-col justify-center bg-transparent items-center py-32 mb-3 font-mono">

       

        <div class="mb-3">
          
            <input class="visuallyhidden" type="file" id="myfile" name="myfile">
            
        </div>

          

          <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs mb-3">
         
          <select class="select select-bordered w-full max-w-xs mb-5">
            <option disabled selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          

          <input type="text" placeholder="Date of Birth" class="input input-bordered w-full max-w-xs mb-5">

          <input type="text" placeholder="Place of Birth" class="input input-bordered w-full max-w-xs mb-5">

          <input type="number" placeholder="Time of Birth" class="input input-bordered w-full max-w-xs mb-5">




          <button class="btn mt-5 btn-outline "> <a href="/editprofile2"> NEXT → </a> </button>






         
    

    </div>



    <div class="stars -z-10"></div>
    <div class="twinkling  -z-10 "></div>
    <div class="clouds"></div>
  

    
</main>


<style>


@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

.stars, .twinkling, .clouds {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:-2;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:-1;

  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}

.clouds{
    background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
    z-index:-3;

  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}






    .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
</style>




