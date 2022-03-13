<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import gsap from "gsap";
    import * as THREE from "three";
   import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
    // variable
  
  
    
  
    
    let canvas;
  
    
  
    let box;
  
    let scene;
  
    let gui;
  
    
  
    let parameterlight = {
      color: 0xbababa,
    };
  
    
  
    onMount(async () => {
  
      let sizes = {
      width : window.innerWidth ,
      height : window.innerHeight
    }
  
  
      const cursor  ={
        x :0 ,
        y : 0 
      }
  
  
  
      window.addEventListener("mousemove" , (e)=>{
        cursor.x = e.clientX / window.innerWidth - 0.5
        cursor.y = - (e.clientY / window.innerHeight - 0.5)
  
  
       
      })
  
  
      window.addEventListener('resize' , ()=>{
       
        sizes.width = window.innerWidth ;
        sizes.height = window.innerHeight
  
        renderer.setSize(sizes.width , sizes.height)
  
  
        //camera 
        camara.aspect =  sizes.width / sizes.height
        camara.updateProjectionMatrix()
        
      })
  
  
      window.addEventListener('dblclick' , ()=>{
  
        const fullscreenelement =  document.fullscreenElement || document.webkitFullscreenElement
  
        if(!fullscreenelement){
         if( canvas.requestFullscreen){
  
          canvas.requestFullscreen()
  
         }
         else if (canvas.webkitRequestFullscreen){
           canvas.webkitRequestFullscreen()
         }
        }else{
  
          if(document.exitFullscreen){
            document.exitFullscreen()
          }
  
          // @ts-ignore
          else if (document.webkitExitFullscreen){
  
            // @ts-ignore
            document.webkitExitFullscreen()
  
          }
         
          
        }
  
        //console.log("double")
  
      })
  
      // const dat = await import('dat.gui')
  
   
  
      let parameter = {
        color: 0xbaba,
        spin: () => {
          gsap.to(box.rotation, { duration: 1, y: box.rotation.y + 20 });
        },
      };
  
      let bgcol = {
        color: 0xffffff,
      };
  
      // gui = new dat.GUI();
      scene = new THREE.Scene();
  
      let camara = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      );
  
      
  
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha : true
      });
  
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio)
      camara.position.setZ(40);
      renderer.render(scene, camara);
  
  
      // orbit 
      const controls = new OrbitControls(camara, renderer.domElement);
      controls.enableDamping = true
  
  
      //objectos
  
      // const boxgeo = new THREE.BoxGeometry(5, 5, 5, 11 , 11 , 11 );
      const boxgeo = new THREE.TorusKnotGeometry( 35, 2, Math.random() * 100 + 1, Math.random() * 10 + 1 , 20 , Math.random() * 9 + 1, );
      
      
  
      //verts
      
      const boxshader = new THREE.MeshNormalMaterial
({

       
  
        wireframe: false,
      });
      const box = new THREE.Mesh(boxgeo, boxshader);
  
      // const grid = new THREE.GridHelper(10, 10, "black", "black" , );
      // scene.add(grid);
  
     
     
  
      
  
      // groupcube.add(cube1 , cube2 , cube3)
  
      box.position.set(0, 0, 0);
  
      const pointlight = new THREE.PointLight(parameterlight.color);
      scene.add(pointlight);
  
      const pointlighthelper = new THREE.PointLightHelper(pointlight);
      const axixhelper = new THREE.AxesHelper(10);
      //scene.add(axixhelper);
  
      //scene.background = new THREE.Color("white");
  
      
  
      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);
  
      //dat gui
      //gui.add(box.position, "x", -3, 30, 0.01);
      //gui.add(box.position, "y", -3, 30, 0.01);
      // gui.add(box.position, "z", -3, 30, 0.01);
  
      // gui.add(box, "visible");
      // gui.add(axixhelper, "visible").name("axis");
      // //gui.add(grid, "visible").name("grid");
      // gui.add(boxshader, "wireframe");
  
      // gui.add(parameter, "spin");
      // gui.add(pointlight, "intensity").min(0).max(5).step(0.1);
      // gui.close();
  
      // gui
      //   .addColor(parameter, "color")
      //   .name("Geomentry")
      //   .onChange(() => {
      //     boxshader.color.set(parameter.color);
      //   });
  
      // gui
      //   .addColor(bgcol, "color")
      //   .name("baground")
      //   .onChange(() => {
      //     scene.background = new THREE.Color(bgcol.color);
      //   });
  
      // gui
      //   .addColor(parameterlight, "color")
      //   .name("pointlight-color")
      //   .onChange(() => {
      //     pointlight.color.set(parameterlight.color);
      //   });
  
      scene.add(box);
  
      pointlight.position.set(5, 5, 5);
  
      //TIME
      let time = Date.now(); 
  
      let clock = new THREE.Clock()
  
      // on frame loop
  
      function animate() {
  
        const elapsedtime =  clock.getElapsedTime()
        const currenttime = Date.now();
        const deltatime = currenttime - time;
        time = currenttime;
        //console.log(deltatime);
        renderer.render(scene, camara);
  
          box.rotation.x =   elapsedtime;
          box.rotation.y =   elapsedtime;
          box.rotation.z =  elapsedtime ;
           
        
        controls.update();
  
        //  box.position.y = Math.random() * 1;
        //  box.position.x = Math.random() * 1;
          box.position.z = cursor.y * 50
        
  
        //??/ CAMARQ
         
          camara.position.x = cursor.x  * 30
          camara.position.y = cursor.y * 30

         // camara.position.z = cursor.y  * 10
         
          
          camara.lookAt(box.position)
   
        requestAnimationFrame(animate);
      }
  
      animate();
    });
  </script>
  
  <canvas bind:this={canvas} style="canvas" />
  <div class="fixed" />
  
  
  <style>
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: black;
    mix-blend-mode: exclusion;
      
    }
  </style>
  