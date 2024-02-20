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
        <h2 class="text-lg text-mainRed lg:px-0 px-14">
          وبسایت آموزش و فروش محصولات شعبده بازی
        </h2>
        <div class="w-full flex flex-col h-48 items-center justify-center">
          <div class="flex flex-col items-center justify-center">
            <div class="flex items-center absolute justify-center w-full">
              <img
                src="../assets/images/HOCUSPOCUS.webp"
                class="object-contain absolute Up w-rem21"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-2">
          <a href="https://www.instagram.com/hocus_pocus.official.1/">
            <button
              class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-sm shadow-transparent hover:shadow-mainPurple rounded-md border border-transparent hover:border-mainPink"
            >
              <PhInstagramLogo :size="45" weight="fill" />
            </button>
          </a>
          <a href="tel:044-32254265">
            <button
              class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-sm shadow-transparent hover:shadow-mainPurple rounded-md border border-transparent hover:border-mainPink"
            >
              <PhPhoneCall :size="45" weight="fill" />
            </button>
          </a>
          <button
            class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-sm shadow-transparent hover:shadow-mainPurple rounded-md border border-transparent hover:border-mainPink"
          >
            <PhTelegramLogo :size="45" weight="fill" />
          </button>
          <a href="https://maps.app.goo.gl/7fx1snQoKMvV8kaL8">
            <button
              class="text-mainRed cursor-pointer transition ease-in-out duration-150 p-2 shadow-sm shadow-transparent hover:shadow-mainPurple rounded-md border border-transparent hover:border-mainPink"
            >
              <PhMapPin :size="45" weight="fill" />
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full flex items-center justify-center space-x-4">
      <div
        class="h-28 w-28 rounded-full flex items-center justify-center bg-white"
      >
        <a
          referrerpolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=435207&Code=DcYpzqb4nlQCt44A4YFztV9QSCxUfvoL"
          ><img
            class="h-24 w-24"
            referrerpolicy="origin"
            src="https://trustseal.enamad.ir/logo.aspx?id=435207&Code=DcYpzqb4nlQCt44A4YFztV9QSCxUfvoL"
            alt=""
            style="cursor: pointer"
            Code="DcYpzqb4nlQCt44A4YFztV9QSCxUfvoL"
        /></a>
      </div>
      <div class="h-28 w-28 rounded-full flex items-center justify-center">
        <img
          class="h-24 object-contain"
          referrerpolicy="origin"
          src="../assets/images/Zarin.webp"
          alt=""
          style="cursor: pointer"
        />
      </div>
    </div>
    <NuxtLink to="/shop/rules">
      <button
        :class="{
          'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange hover:border-mainOrange':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          'text-mainRed hover:shadow-mainViolet hover:text-mainViolet hover:border-mainViolet':
            $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
        class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transition duration-300 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
      >
        <span> قوانین و مقررات </span>
        <PhGavel :size="23" />
      </button>
    </NuxtLink>
    <div class="flex items-end justify-between flex-col px-6 pt-7">
      <h2 class="text-mainWhite text-right space-x-1 text-sm">
        <span>1402</span>
        <span>-</span>
        <span>
          .تمامی حقوق مادی و معنوی متعلق به فروشگاه اینترنتی هوکوس پوکوس میباشد
        </span>
      </h2>
      <h2 class="text-mainWhite space-x-2 py-2">
        <a
          href="https://www.instagram.com/acapulcoCrew/?hl=en"
          class="Chao text-sm text-mainWhite px-1 transition ease-in duration-300 border-2 border-dashed border-mainRed hover:bg-mainRed rounded-sm lg:px-2"
        >
          Acapulco Crew🌴
        </a>

        <span class="text-sm"> طراحی و پیاده سازی </span>
      </h2>
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
  PhGavel,
  PhPhoneCall,
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
