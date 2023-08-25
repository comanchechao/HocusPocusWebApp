<template>
  <div class="w-screen h-full bg-mainBrown">
    <Navbar />
    <div class="flex items-center justify-center h-screen flex-col w-full">
      <div
        class="flex-col flex items-center Bread opacity-0 justify-center space-y-6"
      >
        <h2 class="text-2xl text-mainYellow">آموزش شعبده بازی و تردستی</h2>
        <h1 class="Pocused text-center">Hocus Pocus</h1>
      </div>
      <img
        src="../../assets/images/LearnDivider.webp"
        class="h-40 my-3 object-contain lg:px-0 px-3 Stat1 opacity-0"
        alt=""
      />
    </div>
    <div
      class="h-full w-full flex items-center justify-center flex-col space-y-20"
    >
      <div class="h-24 w-screen bg-mainYellow flex items-center justify-center">
        <h2 class="text-mainBrown text-3xl flex">
          <span> جدیدترین آموزش ها </span>
        </h2>
      </div>
      <div
        class="grid mb-12 grid-cols-1 space-y-9 lg:grid-cols-2 gap-2 px-14 place-items-center w-full"
      >
        <VideoCard></VideoCard> <VideoCard></VideoCard>
      </div>
      <img
        src="../../assets/images/MagicHat.webp"
        class="h-52 object-contain my-14"
        alt=""
      />
    </div>
    <div class="h-screen w-full bg-mainBrown"></div>
    <LazyFooter />
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

onMounted(() => {
  TM.to(".Bread", { opacity: 1, duration: 1, delay: 1 });
  TM.to(".Stat1", { opacity: 1, duration: 1.5 });
});
</script>

<style>
@font-face {
  font-family: "Pocused";
  src: url("../../assets/fonts/man.otf");
  font-style: normal;

  /* unicode-range: U+0020-007F; */
}

.Pocused {
  font-family: "Pocused";
  color: #fdbe39;
  font-size: 10rem;
  text-shadow: 2px 0px 1px #fb6107, 4px 0px 1px #fb6107, 6px 0px 1px #fb6107,
    8px 0px 1px #fb6107;
}

@media only screen and (max-width: 480px) {
  .Pocused {
    font-family: "Pocused";
    color: #fdbe39;
    font-size: 6rem;
    text-shadow: 7px 0px 1px #fb6107;
  }
}
@media only screen and (max-width: 768px) {
  .Pocused {
    font-family: "Pocused";
    color: #fdbe39;
    font-size: 6rem;
    text-shadow: 7px 0px 1px #fb6107;
  }
}
</style>
