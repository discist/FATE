<style>
    .pushable {
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      position: relative;
      border: none;
      background: transparent;
      padding: 0;
      cursor: pointer;
      outline-offset: 4px;
      transition: filter 250ms;
    }
    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background: hsl(0deg 0% 0% / 0.25);
      will-change: transform;
      transform: translateY(1px);
      transition:
        transform
        600ms
        cubic-bezier(.3, .7, .4, 1);
    }
    .edge {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background: linear-gradient(
      to left,
      rgb(160, 160, 160) 0%,
      rgb(255, 255, 255) 8%,
      rgb(235, 235, 235) 92%,
      rgb(163, 163, 163) 100%
    );
  }
    
    .front {
      display: block;
      position: relative;
      padding: 12px 42px;
      border-radius: 12px;
      font-size: 1.25rem;
      
      background: rgb(209, 209, 209);
      will-change: transform;
      transform: translateY(-7px);
      transition:
        transform
        600ms
        cubic-bezier(.3, .7, .4, 1);
    }

   
    .pushable:hover {
      filter: brightness(110%);
    }
    .pushable:hover .front {
      transform: translateY(-10px);
      transition:
        transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
    }
    .pushable:active .front {
      transform: translateY(-3px);
      transition: transform 34ms;
    }
    .pushable:hover .shadow {
      transform: translateY(4px);
      transition:
        transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
    }
    .pushable:active .shadow {
      transform: translateY(1px);
      transition: transform 34ms;
    }
    .pushable:focus:not(:focus-visible) {
      outline: none;
    }
  </style>
  <button  on:click  class="pushable ">
    <span class="shadow"></span>
    <span class="edge"></span>
    <span  class="front text-black">
      <slot>
       
      </slot>
    </span>
  </button>
  