<template>
  <div
    class="h-screen overflow-hidden w-screen flex-col bg-darkPurple flex items-center space-y-8 justify-center"
  >
    <img
      src="../assets/images/MagicDivider2.webp"
      class="w-full h-28 object-contain"
      alt=""
    />
    <div class="flex w-full items-center justify-end px-20 h-full">
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
  </div>
</template>

<script setup>
import {
  PhFacebookLogo,
  PhGraduationCap,
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
