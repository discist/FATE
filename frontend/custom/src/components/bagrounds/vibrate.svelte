<script>
    export let vibrate = "off"
     let x  ;
     let y
    
     function tick(){
    
    if(vibrate=="on"){
    
      
    
       x = Math.random() * 10 
       y =  Math.random() * 5
    
    
    }
    
    
    
    requestAnimationFrame(tick)
    }
    
    tick()
        
        
      
        
        
        
        
        </script>
    
    
        
        
        <div class="" style="top:{x}px ; left:{y}px">
        
      
            <slot></slot>
    
         
     
    
    
    
      </div>
    
    
    