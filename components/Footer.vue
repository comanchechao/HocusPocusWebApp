<template>
  <div
    :class="{
      'bg-mainBrown':
        $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      'from-mainPurple to-darkPurple bg-gradient-to-b':
        $route.path === '/shop/shop' || $route.path.startsWith('/shop/'),
    }"
    class="lg:h-full h-full pt-24 overflow-hidden w-screen flex-col flex items-center space-y-8 justify-center"
  >
    <!-- <img
      src="../assets/images/MagicDivider2.webp"
      class="w-full lg:px-0 px-5 h-28 object-contain"
      alt=""
    /> -->
    <div
      class="flex w-full items-center justify-center text-center lg:justify-center h-full"
    >
      <div class="flex flex-col items-center justify-center space-y-6">
        <img
          src="../assets/images/MagicianLogo.webp"
          class="w-full h-44 object-contain"
          alt=""
        />
        <h2 class="text-lg text-mainRed">
          آنلاین شاپ و وبسایت آموزشی شعبده بازیِ
        </h2>
        <div class="w-full flex flex-col h-48 items-center justify-center">
          <div class="flex flex-col items-center justify-center">
            <div class="flex items-center absolute justify-center w-full">
              <img
                src="../assets/images/HocusUp1.webp"
                class="object-contain absolute Up w-96"
                alt=""
              />
              <img
                src="../assets/images/HocusUp2.webp"
                class="object-contain absolute Up2 w-96"
                alt=""
              />
            </div>
            <div class="flex items-center absolute justify-center w-full">
              <img
                src="../assets/images/HocusDownP.webp"
                class="object-contain w-96 absolute P"
                alt=""
              />
              <img
                src="../assets/images/HocusDownO.webp"
                class="object-contain w-96 absolute O"
                alt=""
              />
              <img
                src="../assets/images/HocusDownC.webp"
                class="object-contain w-96 absolute C"
                alt=""
              />
              <img
                src="../assets/images/HocusDownU.webp"
                class="object-contain w-96 absolute U"
                alt=""
              />
              <img
                src="../assets/images/HocusDownS.webp"
                class="object-contain w-96 absolute S"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-5">
          <a href="https://www.instagram.com/hocus_pocus.official/?hl=en">
            <button
              class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
            >
              <PhInstagramLogo :size="50" />
            </button>
          </a>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhWhatsappLogo :size="50" />
          </button>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhTelegramLogo :size="50" />
          </button>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPurple rounded-md"
          >
            <PhMapPin :size="50" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-screen relative h-44 md:h-rem26 overflow-hidden lg:h-screen SkullT flex items-end justify-center"
    >
      <img
        src="../assets/images/FooterM.webp"
        class="w-screen absolute Footer object-contain"
        alt=""
      />
      <img
        src="../assets/images/FooterF.webp"
        class="w-screen absolute Smoke object-contain"
        alt=""
      />
      <img
        src="../assets/images/FooterS.webp"
        class="w-screen Skull absolute object-contain"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import {
  PhWhatsappLogo,
  PhInstagramLogo,
  PhTelegramLogo,
  PhMapPin,
} from "@phosphor-icons/vue";
import { gsap } from "gsap";
onMounted(() => {
  gsap.fromTo(
    ".Smoke",
    { opacity: -1, duration: 0.7, delay: 0.5 },
    {
      yoyo: true,
      opacity: 1,
      duration: 0.7,
      ease: "back.out(1.7)",
      delay: 0.5,
      repeat: -1,
    }
  );
});
</script>
<style scoped>
.HocusText {
  font-family: "Hocus";
}
</style>
