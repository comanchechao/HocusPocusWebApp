<template>
  <div
    class="w-screen h-20 flex items-center justify-center px-10 bg-darkPurple"
  >
    <div class="flex items-center justify-start space-x-3 w-full Navbar">
      <button
        class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
      >
        <span> تماس با ما </span> <PhCallBell />
      </button>
      <button
        class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
      >
        <span> درباره ما </span>
        <PhSpade />
      </button>
      <button
        class="text-xl active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
      >
        <span> آموزش </span>
        <PhCube />
      </button>

      <NuxtLink to="/shop/shop">
        <button
          class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        >
          <span> خرید </span> <PhStorefront />
        </button>
      </NuxtLink>
      <NuxtLink to="/">
        <button
          class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
        >
          <span> خونه </span>
          <PhHouseSimple />
        </button>
      </NuxtLink>
    </div>
    <div class="flex justify-end items-center space-x-3 Navbar">
      <Login />
      <ShoppingCart />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  PhHouseSimple,
  PhCube,
  PhCallBell,
  PhSpade,
  PhStorefront,
  PhKeyhole,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
onMounted(() => {
  $gsap.from(".Navbar", { opacity: 0, duration: 2 });
});
</script>
