<script>
  import UserStore from "../stores/stores";
  import { onMount } from "svelte";
  import UserData from "../stores/UserData";
  import { replace, push } from "svelte-spa-router";
  import { Logooutall } from "../functions/logout";
  import { Storage } from "@capacitor/storage";
import Uri from "../stores/URI";
import Stars from "../components/bagrounds/stars.svelte";
  let sessionID;
  let DataResponse;
  
  let rawuserdata;

  let cats = [];

  let errormessage;

  onMount(async () => {
    //sessionID = localStorage.getItem("SesionID");

    // @ts-ignore
    const { value } = await Storage.get({ key: "SesionID" });

    console.log(value, "ses");
    sessionID = value;

    getmydata();
    // console.log($UserData)
  });

  async function getmydata() {
    console.log("post started");
    const res = await fetch(`${$Uri.BaseURi}/getmydata`, {
      method: "POST",

      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: sessionID,
      }),
    });
    const json = await res.json();
    let result;

    result = JSON.stringify(json);

    DataResponse = await JSON.parse(result);

    if (DataResponse.error) {
      //localStorage.setItem("isLogged", "false");
      await Storage.set({ key: "isLogged", value: "false" });

      replace("/auth");
    } else {
      rawuserdata = await DataResponse.userdata;
      //console.log(DataResponse);
      UserData.update((val) => {
        let sendtodata = {
          UserID: rawuserdata.id,
          Email: rawuserdata.email,
          Password: "",
          CreatedAt: rawuserdata.createdAt,
          UpdatedAt: rawuserdata.updatedAt,
          Sessions: rawuserdata.sessions,
          Username: rawuserdata.username,
          Story: rawuserdata.story,
          State: rawuserdata.state,
          Subject: rawuserdata.subject,
          Profilephotourl: rawuserdata.profilephotourl,
        };

        return sendtodata;
      });
    }
    let location = "";
    let device = "";

    // @ts-ignore
    $UserData.Sessions.forEach((item, index) => {
      let uuid = item.uuid;
      try {
        location = JSON.parse(item.location);
        device = JSON.parse(item.device);
      } catch {
        console.log(console.error());
      }

      let sessionobj = {
        index: index,
        uuid: uuid,
        location: location,
        device: device,
      };
      cats.push(sessionobj);
    });
    cats = await cats;
  }
</script>

<main class="mt-1 mx-3 flex flex-col">
  <div class="  header  flex flex-row sticky mt-0 justify-end text-center">
    <div
      on:click={() => {
        push("/versionupdate");
      }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 29H4C3.73478 29 3.48043 28.8946 3.29289 28.7071C3.10536 28.5196 3 28.2652 3 28C3 27.7348 3.10536 27.4804 3.29289 27.2929C3.48043 27.1054 3.73478 27 4 27H32C32.2652 27 32.5196 27.1054 32.7071 27.2929C32.8946 27.4804 33 27.7348 33 28C33 28.2652 32.8946 28.5196 32.7071 28.7071C32.5196 28.8946 32.2652 29 32 29Z"
          fill="#545454"
        />
        <path
          d="M32 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H32C32.2652 17 32.5196 17.1054 32.7071 17.2929C32.8946 17.4804 33 17.7348 33 18C33 18.2652 32.8946 18.5196 32.7071 18.7071C32.5196 18.8946 32.2652 19 32 19Z"
          fill="#545454"
        />
        <path
          d="M32 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H32C32.2652 7 32.5196 7.10536 32.7071 7.29289C32.8946 7.48043 33 7.73478 33 8C33 8.26522 32.8946 8.51957 32.7071 8.70711C32.5196 8.89464 32.2652 9 32 9Z"
          fill="#545454"
        />
      </svg>
    </div>
  </div>

  <div  class=" flex flex-col">
    <div class="namecard flex flex-row mx-2">
      <div class="avatar ">
        <div class="mb-0 w-24  default group-hover:mx-auto h-24 mask mask-circle">
          <img alt="." src={$UserData.Profilephotourl} />
        </div>

        {#if $UserData.State == "teacher"}

        <div class="  ">

          <div class="  absolute  right-3  bg-green-50 rounded-b-full">
          <p
            class="   text-2xl"
          >
            👩🏻‍🏫
          </p>

        </div>
        </div>
      
        {/if}
      </div>

      <div class="flex flex-col mx-0">
        <h1 class="font-mono text-xl font-bold mx-5">{$UserData.Username}</h1>

        {#if $UserData.State == "teacher"}

        <h1 class="font-mono mt-0 font-semibold mx-5">{$UserData.Subject}</h1>
          
        {/if}

       

        <button
          class="btn btn-sm btn-outline w-20  mt-3 mx-4"
          on:click={() => {
            push("/newuser");
          }}
        >
          edit
        </button>
      </div>
    </div>

    <div class="bordered w-96">
      <p class=" flex justify-start mx-4 mt-3  font-mono font-thin">
        {$UserData.Story}
      </p>
    </div>

    <!-- <div class="font-mono w-auto text-center  ">EMAIL :{$UserData.Email}</div> -->

    <!-- <div class="font-mono w-auto text-center  "> {$UserData.UpdatedAt} </div> -->
    <!-- <div class="font-mono w-auto text-center  "> {$UserData.CreatedAt} </div> -->
    <!-- <div class="font-mono w-auto text-center  "> {$UserData.Password} </div> -->

    <!--     
         {#each cats as { uuid, location, device }, i}
        <div class="  text-black flex  justify-center  mx-7 flex-col rounded-lg p-5 w-80  bg-gray-100">

         
          <p class="">{location.city}</p>
          <br>
          <p>{device.model}</p>

        </div>
        {/each}  -->

    <!-- <button class="btn btn-outline " on:click={Logout}> logout </button>

    <button class="btn btn-outline " on:click={Logooutall}> logout all </button> -->

   

   
  </div>

  <Stars></Stars>
</main>

<style>
  .default{
    background: url(data:image/png;base64,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);
    background-size: 100% 100%;
  }
</style>
