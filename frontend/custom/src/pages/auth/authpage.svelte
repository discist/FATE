<script>
  import Tabs from "../../components/tabs.svelte";
  import Loginpage from "./Login.svelte";

  import logo from "../../assets/logodiscist.svg";
import SIgnup from "./SIgnup.svelte";
import Login from "./Login.svelte";

  function flipvalues(e) {
    activeitem = e.detail;
  }

  let items = ["Login", "Join"];
  let activeitem = "Login";
</script>

<main>
  <div class="flex justify-center flex-row mt-14 mb-5 ">
    <h1 class="  font-mono font-medium text-center text-4xl">Discist</h1>
    <img class="w-12" src={logo} alt="" />
  </div>

  <Tabs {items} {activeitem} on:tabchange={flipvalues} />

  

  {#if activeitem === "Login"}
   <Login></Login>
  {:else if activeitem === "Join"}
    
    <SIgnup  on:tabchange={flipvalues} />
  {/if}
</main>

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
