<script>
  import { onMount } from "svelte";
  import { UserStore , UserDbData } from "../stores";
  import { addOrUpdateUser } from '../backendServices/DbService'

  onMount(async () => {
  
    
  });
</script>

<main
  class="flex flex-col bg-transparent justify-center items-center"
  style="height: 100vh;"
>
  <div
    class="flex flex-col justify-center bg-transparent items-center py-32 mb-3 font-mono"
  >
    <div class="mt-10 mb-11">
      <div class="avatar relative ">
        <div class="w-24 rounded-xl">
          <img class="bg-white" alt={$UserStore.name} src={$UserStore.pfp} />
        </div>
      </div>
    </div>

    <input
      bind:value={$UserDbData.name}
      type="text"
      placeholder="Name"
      class="input input-bordered w-full max-w-xs mb-3"
    />

    <select 
    bind:value={$UserDbData.gender}
    class="select select-bordered w-full max-w-xs mb-5">
        
      <option disabled selected>Gender</option>
      <option value="male"> Male </option>
      <option value="female">Female</option>
    </select>

    <input
      bind:value={$UserDbData.dob}
      type="date"
      placeholder="Date of Birth"
      class="input input-bordered w-full max-w-xs mb-5"
    />

    <input
      bind:value={$UserDbData.place}
      type="text"
      placeholder="Place of Birth"
      class="input input-bordered w-full max-w-xs mb-5"
    />

    <p class="mt-5 mb-2 self-start">Time of Birth</p>
    <input
      bind:value={$UserDbData.time}
      type="time"
      placeholder="Time of Birth"
      class="input input-bordered w-full max-w-xs mb-5"
    />

    <button
      on:click={() => { 
       
        addOrUpdateUser( $UserStore.uid, $UserDbData) 
        console.log($UserDbData);
        
       

      }}
      class="btn mt-5 btn-outline "
    >
      NEXT →
    </button>
  </div>

  <div class="stars -z-10" />
  <div class="twinkling  -z-10 " />
  <div class="clouds" />
</main>

<style>
  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-webkit-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-moz-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-ms-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-webkit-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-moz-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-ms-keyframes move-clouds-back {
    from {
      background-position: 0;
    }
    to {
      background-position: 10000px 0;
    }
  }

  .stars,
  .twinkling,
  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .stars {
    background: #000
      url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
      center;
    z-index: -2;
  }

  .twinkling {
    background: transparent
      url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat
      top center;
    z-index: -1;

    -moz-animation: move-twink-back 200s linear infinite;
    -ms-animation: move-twink-back 200s linear infinite;
    -o-animation: move-twink-back 200s linear infinite;
    -webkit-animation: move-twink-back 200s linear infinite;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    background: transparent
      url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat
      top center;
    z-index: -3;

    -moz-animation: move-clouds-back 200s linear infinite;
    -ms-animation: move-clouds-back 200s linear infinite;
    -o-animation: move-clouds-back 200s linear infinite;
    -webkit-animation: move-clouds-back 200s linear infinite;
    animation: move-clouds-back 200s linear infinite;
  }

 
</style>
