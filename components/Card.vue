<template>
  <NuxtLink to="/shop/productDetail">
    <div
      class="h-rem28 rounded-sm duration-200 ease-in-out transition hover:shadow-xl cursor-pointer w-72 shadow-md shadow-transparent hover:shadow-mainRed my-10 border-mainRed"
    >
      <div class="w-full h-2/3 p-3 bg-white rounded-t-sm">
        <img
          src="../assets/images/Psychonauts.webp"
          class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
          alt=""
        />
      </div>
      <div
        class="w-full h-1/3 flex items-center flex-col px-7 pt-5 bg-white space-y-3"
      >
        <h3 class="text-center leading-snug title text-xl text-darkPurple">
          Seafarers: Commodore Edition Playing Cards
        </h3>
        <button
          class="px-8 py-2 flex items-center space-x-2 transition text-sm duration-200 ease-in-out bg-darkPurple text-mainRed hover:text-darkPurple shadow-mainRed hover:bg-mainRed rounded-sm"
        >
          <span> جزئیات بیشتر </span> <PhInfo :size="20" />
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { PhInfo } from "@phosphor-icons/vue";
</script>
<style>
@font-face {
  font-family: "Pocus";
  src: url("../assets/fonts/RobotoCondensed-Bold.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.title {
  font-family: "Pocus";
}
</style>
