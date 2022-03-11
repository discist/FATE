<script>
    import {onMount} from "svelte";

    import {showGoogleSigninPop} from "../backendServices/AuthService";

    import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";

    import {auth} from "../firebase";

    import {
        bounceOut,
        cubicOut,
        elasticOut,
        sineIn,
        sineInOut,
    } from "svelte/easing";

    import {tweened} from "svelte/motion";
    import {fade, slide} from "svelte/transition";

    let textanime = tweened(0, {
        duration: 1110,
        easing: sineIn,
    });


    function kukufunc() {
        console.log("kukucunt");

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
                // ...
            });
    }

    onMount(async () => {
    });
</script>

<main>
    <h1 class="text-gray-300 font-serif text-5xl ">FATE</h1>

    <p class="mt-10 text-gray-300 font-mono text-3xl font-extralightin">
        Let the universe find the one for you
    </p>


    <div class="stars -z-10"/>
    <div class="twinkling  -z-10 "/>
    <div class="clouds"/>

    <button on:click={()=>{
    showGoogleSigninPop()
  }} class="btn btn-info">Google
    </button>
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
        background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
        z-index: -2;
    }

    .twinkling {
        background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
        z-index: -1;

        -moz-animation: move-twink-back 200s linear infinite;
        -ms-animation: move-twink-back 200s linear infinite;
        -o-animation: move-twink-back 200s linear infinite;
        -webkit-animation: move-twink-back 200s linear infinite;
        animation: move-twink-back 200s linear infinite;
    }

    .clouds {
        background: transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
        z-index: -3;

        -moz-animation: move-clouds-back 200s linear infinite;
        -ms-animation: move-clouds-back 200s linear infinite;
        -o-animation: move-clouds-back 200s linear infinite;
        -webkit-animation: move-clouds-back 200s linear infinite;
        animation: move-clouds-back 200s linear infinite;
    }
</style>
