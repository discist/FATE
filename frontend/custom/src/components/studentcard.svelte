<script>
  // target elements with the "draggable" class
</script>

<main class="mx-2 fixed draggable drag  ">
  <div class="mt-10 card bordered cardcss shadow-sm  mb-0">
    <figure>
      <img
        class="cardimg"
        alt="img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Einstein_blackboard.jpg/1200px-Einstein_blackboard.jpg"
      />
    </figure>
    <div class="card-body bg-white">
      <div class="flex flex-row justify-start w-full">
        <h2 class="card-title font-mono">
          Zen fionil

          <div class="  fixed  triangle   ">
            <svg
              width="83"
              height="74"
              viewBox="0 0 83 74"
              fill="#C4F9BC"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0433 5.75001C36.2772 -1.58333 46.8619 -1.58333 51.0958 5.75L80.9737 57.5C85.2076 64.8333 79.9152 74 71.4474 74H11.6917C3.22389 74 -2.06849 64.8333 2.16541 57.5L32.0433 5.75001Z"
              />
            </svg>
            <div class=" flex   flex-col rating justify-end">
              <h1>8</h1>
            </div>
            <div class="  flex   flex-col reviews justify-end">
              <h2>123</h2>
            </div>
          </div>
        </h2>
      </div>

      <h1 class="font-mono text-gray-700 font-semibold mb-4">Physics</h1>
      <p>I couldnt wrap my head around this equation Xd ... help 😭🤧</p>
    </div>
  </div>
</main>

<style>
  .triangle {
    top: 19rem;
    left: 16rem;
    position: absolute;
  }

  .cardcss {
    width: 22rem;
    height: auto;
  }

  .cardimg {
    height: 18rem;
  }

  .rating {
    left: 35px;
    top: 20px;
    position: absolute;
  }

  .reviews {
    left: 24px;
    top: 40px;
    position: absolute;
  }

  .drag {
    touch-action: none;
    top: 7rem;
    left: 0rem;
    user-select: none;
    transform: translate(0px, 0px);
  }
</style>
