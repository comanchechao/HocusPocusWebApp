<template>
  <div class="">
    <Sidebar position="right" v-model:visible="visible">
      <div
        class="h-full w-full bg-darkPurple flex flex-col items-center justify-start space-y-5 px-20"
      >
        <img
          src="../assets/images/MagicianLogo.webp"
          class="object-contain w-24"
          alt=""
        />
        <NuxtLink class="w-full" to="/">
          <button
            :class="{
              'text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
            class=""
          >
            <span> خونه </span>
            <PhHouseSimple :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/shop/profile">
          <button
            :class="{
              'text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            <span> پروفایل </span>
            <PhAlien :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/shop/admin">
          <button
            :class="{
              'text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            <span> مدیریت </span>
            <PhCoffee :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/shop/shop">
          <button
            :class="{
              'text-xl border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainViolet border-dashed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
            class=""
          >
            <span> خرید </span> <PhStorefront :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/learn/learn">
          <button
            class="text-xl border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
          >
            <span> آموزش </span>
            <PhCube :size="23" />
          </button>
        </NuxtLink>
        <button
          :class="{
            'text-xl border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainViolet border-dashed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          <span> تماس با ما </span> <PhCallBell :size="23" />
        </button>
        <button
          :class="{
            'text-xl border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainViolet border-dashed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          <span> درباره ما </span>
          <PhSpade :size="23" />
        </button>
      </div>
    </Sidebar>
    <button
      class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-3 py-2 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
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
  PhAlien,
} from "@phosphor-icons/vue";
const visible = ref(false);
</script>
<style>
.p-sidebar .p-sidebar-content {
  padding: 0;
}
.p-sidebar .p-sidebar-header {
  background-color: #0a001a;
}
</style>
