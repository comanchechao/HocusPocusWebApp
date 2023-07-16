<template>
  <div class="">
    <Sidebar position="left" v-model:visible="visible">
      <div
        class="h-full w-full bg-darkPurple flex flex-col items-center justify-start space-y-5"
      >
        <NuxtLink to="/">
          <button
            class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          >
            <span> خونه </span>
            <PhHouseSimple :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="flex lg:hidden" to="/shop/admin">
          <button
            class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          >
            <span> مدیریت </span>
            <PhCoffee :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink to="/shop/shop">
          <button
            class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
          >
            <span> خرید </span> <PhStorefront :size="23" />
          </button>
        </NuxtLink>
        <button
          class="text-xl active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
        >
          <span> آموزش </span>
          <PhCube :size="23" />
        </button>
        <button
          class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        >
          <span> تماس با ما </span> <PhCallBell :size="23" />
        </button>
        <button
          class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        >
          <span> درباره ما </span>
          <PhSpade :size="23" />
        </button>
      </div>
    </Sidebar>
    <button
      class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-3 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
      @click="visible = true"
    >
      <PhList :size="30" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhHouseSimple,
  PhCube,
  PhCallBell,
  PhSpade,
  PhStorefront,
  PhCoffee,
  PhList,
} from "@phosphor-icons/vue";
const visible = ref(false);
</script>
<style>
.p-sidebar .p-sidebar-content {
  padding: 0;
}
.p-sidebar .p-sidebar-header {
  background-color: #10002b;
}
</style>
