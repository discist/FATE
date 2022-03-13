<script>
  import Uri from '../../stores/URI'

  import {fade} from "svelte/transition"



 

  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  //  variables
  let SignUpJson = {
    email: "",
    password: "",
  };

  let erorrx = "";
  let Signupresponse;
  let valid = false;
  let success = "";
  let errormessage = "";

  //functions
  function handleSignUp() {
    valid = true;
    if (SignUpJson.email.trim().length < 1) {
      console.log("email empty");
      erorrx = "email empty";
      valid = false;
    } else {
      erorrx = "";
    }
    if (SignUpJson.password.trim().length < 1) {
      erorrx = "password empty";
      valid = false;
    } else {
    }

    if (valid == true) {
      postsignup();
    }
  }

  async function postsignup() {
    console.log("post started");
    const res = await fetch(`${$Uri.BaseURi}/SignUp`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: SignUpJson.email,
        password: SignUpJson.password,
      }),
    });
    const json = await res.json();
    let result;
    console.log(res)
    let Signupresponse;

    result = JSON.stringify(json);

    Signupresponse = await JSON.parse(result);

    if (Signupresponse.error) {
      console.log("error:", Signupresponse.error);
      errormessage = Signupresponse.error;
      success = "";
    } else {
      // addtostore();
      console.log(Signupresponse);
      success = Signupresponse.usercreated;
      errormessage = "";

      localStorage.setItem("NewUser" , "true")












      setTimeout(function () {
        dispatch("tabchange", "Login");
      }, 500);
    }
  }
</script>

<main in:fade >
  <form on:submit|preventDefault={handleSignUp} action="">
    <div
      class="mt-12 form-control h-auto flex flex-wrap flex-col content-center"
    >
      <div>
        
        <h2 class="text-5xl mb-3">  🌙 </h2>
      </div>

      <input
        bind:value={SignUpJson.email}
        type="text"
        placeholder="email"
        class="mt-5 font-mono input input-bordered"
      />

      <input
        bind:value={SignUpJson.password}
        type="password"
        placeholder="password"
        class=" mt-5 font-mono input input-bordered"
      />

      <button class="btn-lg font-mono  btn-outline btn mt-14"> Join </button>
      <div class=" mt-3 text-red-400 font-mono font-extralight"> {errormessage} {erorrx}</div>
    </div>
  </form>

  <h1 class="text-green-500 text-3xl font-mono">{success}</h1>
 
</main>
