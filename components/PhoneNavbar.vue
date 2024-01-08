<template>
  <div class="">
    <Sidebar position="right" v-model:visible="visible">
      <div
        class="h-full w-full bg-darkPurple pt-8 flex flex-col items-center justify-start space-y-5 px-20"
      >
        <!-- <img
          src="../assets/images/MagicianLogo.webp"
          class="object-contain w-10 mt-4 self-end"
          alt=""
        /> -->
        <NuxtLink class="w-full" to="/">
          <button
            :class="{
              'text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
            class=""
          >
            <span> خونه </span>
            <PhHouseSimple weight="fill" :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink
          v-show="isLogged"
          v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
          class="w-full"
          to="/shop/profile"
        >
          <button
            class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          >
            <span> پروفایل </span>
            <PhAlien weight="fill" :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink
          v-show="isLogged"
          v-if="$route.path.startsWith('/learn')"
          class="w-full"
          to="/learn/profile"
        >
          <button
            class="text-lg flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
          >
            <span> پروفایل </span>
            <PhAlien weight="fill" :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink
          v-show="isLogged"
          v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
          class="w-full"
          to="/shop/admin"
        >
          <button
            class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          >
            <span> مدیریت </span>
            <PhCoffee weight="fill" :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink
          v-show="isLogged"
          v-if="$route.path.startsWith('/learn')"
          class="w-full"
          to="/learn/admin"
        >
          <button
            class="text-lg flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
          >
            <span> مدیریت </span>
            <PhCoffee weight="fill" :size="23" />
          </button>
        </NuxtLink>

        <NuxtLink
          v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
          class="w-full"
          to="/shop/shop?page=1"
        >
          <button
            class="text-lg border-dashed active:text-darkPurple active:bg-mainViolet flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
          >
            <span> خرید </span> <PhStorefront :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink
          v-if="$route.path.startsWith('/learn')"
          class="w-full"
          to="/learn/shop"
        >
          <button
            class="text-lg border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
          >
            <span> خرید </span> <PhStorefront :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/learn/learn">
          <button
            class="text-lg border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
          >
            <span> آموزش </span>
            <PhCube :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/shop/rules">
          <button
            :class="{
              'text-lg border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainViolet border-dashed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            <span> قوانین و مقررات </span>
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/shop/contactUs">
          <button
            :class="{
              'text-lg border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainViolet border-dashed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            <span> تماس با ما </span> <PhCallBell :size="23" />
          </button>
        </NuxtLink>
        <NuxtLink class="w-full" to="/shop/aboutUs">
          <button
            :class="{
              'text-lg border-dashed active:text-darkPurple active:bg-mainOrange flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 w-full justify-center py-2   transition duration-150 ease-in-out border-2 border-mainViolet border-dashed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            <span> درباره ما </span>
            <PhSpade :size="23" />
          </button>
        </NuxtLink>
      </div>
    </Sidebar>
    <button
      :class="{
        'text-lg active:text-mainBrown active:bg-mainYellow flex items-center space-x-2 px-3 py-2 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
        'text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-3 py-2 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed':
          $route.path === '/' || $route.path.startsWith('/shop/'),
      }"
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

import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);
const visible = ref(false);
</script>
<style>
.p-sidebar .p-sidebar-content {
  padding: 0;
}
.p-sidebar .p-sidebar-header {
  background-color: #090025;
}
</style>
