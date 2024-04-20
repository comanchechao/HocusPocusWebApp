<template>
  <div
    ref="Navbar"
    class="w-screen fixed bg-darkPurple h-20 flex items-center justify-center lg:px-10 z-50"
  >
    <div
      class="items-center justify-start space-x-2 w-full opacity-0 Navbar hidden lg:flex"
    >
      <NuxtLink to="/shop/aboutUs">
        <button
          :class="{
            'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange hover:border-mainOrange':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-mainRed hover:shadow-mainViolet hover:text-mainViolet hover:border-mainViolet':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class="text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
        >
          <span> درباره ما </span>
          <PhSpade :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/shop/contactUs">
        <button
          :class="{
            'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange hover:border-mainOrange':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-mainRed hover:shadow-mainViolet hover:text-mainViolet hover:border-mainViolet':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class="text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
        >
          <span> تماس با ما </span> <PhCallBell :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/shop/rules">
        <button
          :class="{
            'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange hover:border-mainOrange':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-mainRed hover:shadow-mainViolet hover:text-mainViolet hover:border-mainViolet':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class="text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
        >
          <span> قوانین و مقررات </span>
          <PhGavel :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/learn/learn">
        <button
          class="text-lg active:text-mainBrown active:bg-mainOrange flex items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
        >
          <span> آموزش </span>
          <PhCube :size="23" />
        </button>
      </NuxtLink>

      <NuxtLink to="/learn/shop">
        <button
          :class="{
            hidden: $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class="text-lg active:text-mainBrown active:bg-mainOrange flex items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
        >
          <span> خرید </span> <PhStorefront :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/shop/shop?page=1">
        <button
          :class="{
            hidden:
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
          }"
          class="text-lg active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent hover:border-mainPink rounded-sm shadow-md shadow-transparent hover:shadow-mainPink hover:text-mainPink text-mainRed"
        >
          <span> خرید </span> <PhStorefront :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/" class="">
        <button
          :class="{
            '  hover:text-mainBrown text-mainBrown bg-mainYellow hover:border-mainOrange':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            '    text-darkPurple hover:bg-darkPurple hover:text-mainRed bg-mainRed hover:border-mainPink transition duration-300 ease-in-out':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-4 py-1 border-2 border-transparent rounded-sm"
        >
          <img
            src="../assets/images/MagicianLogo.webp"
            class="w-10 object-contain"
            alt=""
          />
        </button>
      </NuxtLink>
    </div>
    <div
      class="flex justify-around lg:w-auto w-full items-center space-x-3 opacity-0 Navbar"
    >
      <NuxtLink
        v-show="isLogged"
        v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
        class="hidden lg:flex"
        to="/shop/profile"
      >
        <button
          class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
        >
          <span> پروفایل </span>
          <PhAlien :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink
        v-show="isLogged"
        v-if="$route.path.startsWith('/learn')"
        class="hidden lg:flex"
        to="/learn/profile"
      >
        <button
          class="text-lg flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
        >
          <span> پروفایل </span>
          <PhAlien :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink
        v-show="isManager"
        v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
        class="hidden lg:flex"
        to="/shop/admin"
      >
        <button
          class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
        >
          <span> مدیریت </span>
          <PhCoffee :size="23" />
        </button> </NuxtLink
      ><NuxtLink
        v-show="isManager"
        v-if="$route.path.startsWith('/learn')"
        class="hidden lg:flex"
        to="/learn/admin"
      >
        <button
          class="text-lg flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
        >
          <span> مدیریت </span>
          <PhCoffee :size="23" />
        </button>
      </NuxtLink>
      <LazyShoppingCart
        :class="{
          hidden:
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          ' flex': $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
      />
      <LazyShoppingCartLearn
        :class="{
          flex:
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          ' hidden': $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
      />
      <LazyLogin v-show="!isLogged" />
      <button
        @click="logout"
        v-show="isLogged"
        :class="{
          'hover:border-mainOrange text-mainYellow hover:shadow-mainOrange hover:text-mainOrange':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          'hover:border-mainViolet text-mainRed hover:shadow-mainViolet hover:text-mainViolet':
            $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
        class="text-lg flex active:text-darkPurple active:bg-mainRed items-center space-x-2 px-4 py-1 transition duration-300 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
      >
        <span> خروج </span>
        <PhLockKey weight="fill" :size="25" />
      </button>
      <LazyPhoneNavbar class="flex lg:hidden" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  PhLockKey,
  PhCube,
  PhCallBell,
  PhCoffee,
  PhSpade,
  PhStorefront,
  PhAlien,
  PhGavel,
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { ref } from "vue";

const { $gsap } = useNuxtApp();

const userStore = useUserStore();

const { isLogged, isManager } = storeToRefs(userStore);
const Navbar = ref();

async function isAuth() {
  await $fetch("http://localhost:3333/auth/authenticated", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCreadentials: true,
  })
    .then(function (response) {
      userStore.setLogState();
      if (response) {
        testFunction();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

async function testFunction() {
  await $fetch("http://localhost:3333/auth/ischeck", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  }).then(function (response) {
    console.log(response);
    if (response.check) {
      userStore.setManager();
    }
  });
}

async function logout() {
  await $fetch("http://localhost:3333/auth/logout", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCreadentials: true,
  })
    .then(function (response) {
      userStore.setNotLogged();
    })
    .catch(function (error) {
      console.error(error);
    });
}
onMounted(() => {
  isAuth();
  $gsap.to(".Navbar", { opacity: 1, duration: 1 });
});
</script>
