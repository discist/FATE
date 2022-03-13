<script>
  import Tabs from "../../components/tabs.svelte";
  import Loginpage from "./Login.svelte";
  import {fade} from "svelte/transition"

  import logo from "../../assets/logodiscist.svg";
import SIgnup from "./SIgnup.svelte";
import Login from "./Login.svelte";
import Screen from "../../components/Screen.svelte";

  function flipvalues(e) {
    activeitem = e.detail;
  }

  let items = ["Login", "Join"];
  let activeitem = "Join";
</script>

<Screen>

<main in:fade  >
  <div class="flex justify-center flex-row  mb-1">
    <h1 class="  font-serif  text-center text-4xl"> FATE </h1>
   
  </div>

  <Tabs {items} {activeitem} on:tabchange={flipvalues} />

  

  {#if activeitem === "Login"}
   <Login></Login>
  {:else if activeitem === "Join"}
    
    <SIgnup  on:tabchange={flipvalues} />
  {/if}
</main>
</Screen>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
