
<script>

import interact from "interactjs";
import Stars from "../components/bagrounds/stars.svelte";

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictEdges({
        enabled: true,
        endOnly: false

      })

      
    ],
    // enable autoScroll
    autoScroll: false,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
    let currentpx = (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +  Math.pow(event.pageY - event.y0, 2) | 0))
    if (currentpx  > 200){

        

    }
   

    var textEl = event.target.querySelector('p')




        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +  Math.pow(event.pageY - event.y0, 2) | 0)).toFixed(2) + 'px')
                    
            
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  
  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos



</script>

 

  <div id="drag-1"  class="draggable fixed shadow-md bordered border-1 border-black font-mono  flex flex-col justify-center">
   <img class="object-cover h-96 w-full"  src="https://picsum.photos/2000/4000" alt="prop">


 


   <h1 class="name text-xl my-2 text-center">
    Mac aston
  </h1>

  <div class="flex flex-row  justify-center   mt-3"> 

    

  
    <div class="text-xl bordered border-2 py-2 px-3 rounded-md ">
      🔥
    </div>


    <div class="info flex flex-col justify-center items-center">



    <h1 class="text-gray-600 text-center px-5">
      Compatibility
    </h1>

    <h1 class="text-green-500  text-xl">
      98%
    </h1>

    </div>




    <div class="text-xl bordered border-2 py-2 px-3 rounded-md ">
      ❌
    </div>


  



  </div>




  

</div>




  
    
      
    

 

 

 <style>
     #drag-1 {
  width: 22rem;
  height: 35rem;
  
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 0.50em;
  padding: 5%;
  padding-bottom: 10%;
  touch-action: none;
  user-select: none;
  transform: translate(0px, 0px);
}

 </style>