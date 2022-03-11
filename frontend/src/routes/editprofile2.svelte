<main class="font-mono bg-transparent">

    <div class="flex flex-col justify-center  items-center">


        


        <h1 class="mt-10 mb-5" >

            Pick your best 6 Photos  📷


    
        </h1>

        <div class="flex flex-row justify-between">


            <div class="photos object-fill w-52 h-52 rounded-md bg-slate-50 mx-5 my-5">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img  style='height: 100%; width: 100%; object-fit: contain' class="" src="https://api.lorem.space/image/face?hash=1500">
            </div>
            <div class="photos w-52 h-52 rounded-md bg-slate-50  mx-5 my-5">

                
    
                <img style='height: 100%; width: 100%; object-fit: contain' alt="" class="" src="https://api.lorem.space/image/face?hash=4444">
                
           </div>
    
           <div class="photos w-52 h-52 rounded-md bg-slate-50  mx-5 my-5">
    
            <img style='height: 100%; width: 100%; object-fit: contain'  alt="" class="" src="https://api.lorem.space/image/face?hash=69">
            
       </div>
              
    
            </div>



        <div class="flex flex-row justify-between">


            <div class="photos object-fill w-52 h-52 rounded-md bg-slate-50 mx-5 my-5">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img style='height: 100%; width: 100%; object-fit: contain'  class="" src="https://api.lorem.space/image/face?hash=3174">
            </div>
            <div class="photos w-52 h-52 rounded-md bg-slate-50  mx-5 my-5">

                <img  style='height: 100%; width: 100%; object-fit: contain'  alt="" class="" src="https://api.lorem.space/image/face?hash=314">
                
           </div>

           <div class="photos w-52 h-52 rounded-md bg-slate-50  mx-5 my-5">

            <img  style='height: 100%; width: 100%; object-fit: contain' alt="" class="" src="https://api.lorem.space/image/face?hash=4">
            
       </div>



       




       

    


    </div>


    <button class="btn mt-10 btn-outline "> <a href="/home"> Finish 🏁 </a> </button>

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
</style>