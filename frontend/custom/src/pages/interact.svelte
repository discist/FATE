
<script>

import interact from "interactjs";

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

        console.log("dc")

    }
    console.log(currentpx)

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

 <main class="mt-14 mx-20 h-96">
    <div id="drag-1"  class="draggable fixed shadow-md bordered border-4 border-black font-mono  flex flex-col justify-center">
        <p> You can drajg one element </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div>
      <div id="drag-2" class=" fixed draggable shadow-md bordered border-4  font-mono  flex flex-col justify-center border-black ">
        <p> with each pointer </p>
      </div> 
     
    

 </main >

 

 <style>
     #drag-1, #drag-2 {
  width: 10rem;
  min-height: 20rem;
  margin: 1rem 0 0 1rem;
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 0.50em;
  padding: 4%;
  touch-action: none;
  user-select: none;
  transform: translate(0px, 0px);
}

 </style>