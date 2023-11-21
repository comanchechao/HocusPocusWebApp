<template>
  <div
    ref="Navbar"
    class="w-screen h-20 flex fixed items-center justify-center lg:px-10 bg-transparent z-50"
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
          class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
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
          class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
        >
          <span> تماس با ما </span> <PhCallBell :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/learn/learn">
        <button
          class="text-xl active:text-mainBrown active:bg-mainOrange flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
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
          class="text-xl active:text-mainBrown active:bg-mainOrange flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainOrange text-mainYellow"
        >
          <span> خرید </span> <PhStorefront :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/shop/shop">
        <button
          :class="{
            hidden:
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
          }"
          class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        >
          <span> خرید </span> <PhStorefront :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink to="/" class="">
        <button
          :class="{
            'hover:shadow-mainOrange hover:text-mainBrown text-mainBrown bg-mainYellow hover:border-mainOrange':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'hover:shadow-mainViolet hover:text-darkPurple text-darkPurple bg-mainRed hover:border-mainViolet':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
        >
          <span> خونه </span>
          <img
            src="../assets/images/MagicianLogo.webp"
            class="w-7 object-contain"
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
          class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
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
          class="text-lg flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
        >
          <span> پروفایل </span>
          <PhAlien :size="23" />
        </button>
      </NuxtLink>
      <NuxtLink
        v-show="isLogged"
        v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
        class="hidden lg:flex"
        to="/shop/admin"
      >
        <button
          class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
        >
          <span> مدیریت </span>
          <PhCoffee :size="23" />
        </button> </NuxtLink
      ><NuxtLink
        v-show="isLogged"
        v-if="$route.path.startsWith('/learn')"
        class="hidden lg:flex"
        to="/learn/admin"
      >
        <button
          class="text-lg flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
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
        class="text-xl flex active:text-darkPurple active:bg-mainRed items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
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
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { ref } from "vue";

const { $gsap } = useNuxtApp();

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);
const Navbar = ref();

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
  $gsap.to(".Navbar", { opacity: 1, duration: 1 });
  $gsap.to(Navbar.value, {
    backgroundColor: "#150531",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".NavbarTrigger",
      onEnter: () => {
        Navbar.value.classList.add("fixed");
      },
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none none none",
    },
  });
});
</script>
