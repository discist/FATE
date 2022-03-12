<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import { UserStore , UserDbData } from "../stores";

  import { showGoogleSigninPop } from "../backendServices/AuthService";
  import { test } from "../backendServices/DbService";

  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

  import { auth } from "../firebase";

  import {
    bounceOut,
    cubicOut,
    elasticOut,
    sineIn,
    sineInOut,
  } from "svelte/easing";

  import { tweened } from "svelte/motion";
  import { fade, slide } from "svelte/transition";
  import { dataset_dev } from "svelte/internal";

  let textanime = tweened(0, {
    duration: 1110,
    easing: sineIn,
  });

  onMount(async () => {});
</script>

<main>
  <h1 class="text-gray-300 font-serif text-5xl ">FATE</h1>

  <p class="mt-10 text-gray-300 font-mono text-3xl font-extralightin">
    Let the universe find the one for you
  </p>

  <div class="stars -z-10" />
  <div class="twinkling  -z-10 " />
  <div class="clouds" />

  <h1 class="font-mono text-2xl mt-16 mb-10">Join</h1>

  <button
    on:click={async () => {
      let data = await showGoogleSigninPop();

      console.log(data);
      

      if (data.access) {
        $UserStore.uid = data.data.user.uid;
        $UserStore.name = data.data.user.displayName;
        $UserStore.token = data.data.user.accessToken;
        $UserStore.pfp = data.data.user.photoURL;


       
        $UserDbData.name = data.data.user.displayName;
        $UserDbData.email = data.data.user.email;
       

        






        
       

        // localStorage.setItem("token", data.data.user.accessToken);
        // localStorage.setItem("name", data.data.user.email);
        // localStorage.setItem("pfp", data.data.user.email);
        // localStorage.setItem("email", data.data.user.email);
        goto("/editprofile");
      } else {
      }
    }}
    class="btn  font-mono  text-white"
  >
    <p class="mx-3">Google</p>

    <img src="/google.svg" alt="" />
  </button>

  <button on:click={test} class="btn"> db </button>
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
