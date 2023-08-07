<template>
  <div
    :class="{
      'bg-mainBrown':
        $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      'bg-darkPurple':
        $route.path === '/shop/shop' || $route.path.startsWith('/shop/'),
    }"
    class="lg:h-rem77 h-full overflow-hidden w-screen flex-col flex items-center space-y-8 justify-center"
  >
    <img
      src="../assets/images/MagicDivider2.webp"
      class="w-full lg:px-0 px-5 h-28 object-contain"
      alt=""
    />
    <div
      class="flex w-full items-center justify-center text-center lg:justify-center h-full"
    >
      <div class="flex flex-col items-center justify-center space-y-6">
        <img
          src="../assets/images/MagicianLogo.webp"
          class="w-full h-44 object-contain"
          alt=""
        />
        <h2 class="text-lg text-mainPurple neonText">
          فروشگاه لوازم شعبده بازی
        </h2>
        <h1 class="text-8xl neonText HocusText text-white">Hocus Pocus</h1>

        <div class="flex items-center justify-center space-x-5">
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhInstagramLogo :size="50" />
          </button>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhFacebookLogo :size="50" />
          </button>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhTelegramLogo :size="50" />
          </button>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhTwitterLogo :size="50" />
          </button>
        </div>
      </div>
    </div>
    <img
      src="../assets/images/FooterPic.webp"
      class="w-screen object-contain"
      alt=""
    />
  </div>
</template>

<script setup>
import {
  PhFacebookLogo,
  PhInstagramLogo,
  PhTelegramLogo,
  PhTwitterLogo,
} from "@phosphor-icons/vue";
</script>
<style scoped>
.HocusText {
  font-family: "Hocus";
}
</style>
