<template>
  <div class="w-screen">
    <Navbar></Navbar>
    <div
      class="h-screen text-9xl w-screen flex items-start pt-7 justify-center bg-darkPurple px-16"
    >
      <div class="w-1/2 h-dialog flex items-center justify-center py-3 px-14">
        <div
          class="transition h-full w-full duration-150 ease-in-out border-2 cursor-pointer border-mainViolet rounded-md shadow-xl shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        ></div>
      </div>
      <div
        class="w-1/2 h-dialog flex flex-col space-y-24 items-center justify-center"
      >
        <h1
          class="transition flex duration-150 ease-in-out text-2xl border-mainViolet drop-shadow-sm rounded-sm text-mainRed"
        >
          <PhMagicWand />
          <span>خوش اومدید به مجیک شاپِ </span>
        </h1>
        <h1
          class="transition HocusPocus duration-150 ease-in-out text-9xl rounded-sm text-white"
        >
          Hocus Pocus
        </h1>
      </div>
    </div>
    <div class="h-screen w-full bg-darkPurple flex flex-col items-center">
      <div class="h-24 w-screen bg-mainRed flex items-center justify-center">
        <h2 class="text-darkPurple text-3xl flex">
          <PhCards class="mr-3" /> <span> جدیدترین کارت ها </span>
        </h2>
      </div>
      <div class="w-screen px-10 flex items-center space-x-5">
        <Card /> <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "../components/Card.vue";
import { PhMagicWand, PhCards } from "@phosphor-icons/vue";
import { ref } from "vue";
const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
<style>
@font-face {
  font-family: "Hocus";
  src: url("../assets/fonts/Satisfy-Regular.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.HocusPocus {
  font-family: "Hocus";
  text-shadow: 0 0 1px #f72585, 0 0 4px #f72585, 0 0 10px #f72585,
    0 0 20px #f72585;
}

.neonText {
  color: #fff;
  text-shadow: 0 0 1px #f72585, 0 0 4px #f72585, 0 0 10px #f72585,
    0 0 20px #f72585;
}
</style>
