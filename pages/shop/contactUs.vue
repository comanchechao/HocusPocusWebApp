<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="h-full lg:pt-24 flex-col w-full pb-36 lg:px-24 justify-start flex items-center"
    >
      <img
        src="../../assets/images/contactUsBg.webp"
        class="object-contain h-full lg:h-dialog"
        alt=""
      />

      <div class="flex flex-col lg:px-24 px-7 w-full h-full items-center">
        <h2
          class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-5 my-14 text-center text-2xl lg:text-4xl flex"
        >
          <PhGraduationCap :size="35" weight="fill" class="mr-3" />
          <span> راه های تماس با ما </span>
        </h2>
        <div
          class="w-full h-full lg:h-48 grid grid-cols-1 lg:grid-cols-2 place-items-end lg:place-items-center gap-5 lg:gap-2 rounded-md lg:shadow-lg shadow-mainPink"
        >
          <div
            class="flex lg:flex-row flex-col-reverse text-right items-end space-x-5"
          >
            <h2 class="flex items-center text-mainWhite text-2xl">
              <span
                class="px-3 py-2 shadow-sm border-b-8 shadow-darkPurple border-2 border-mainPink rounded-sm"
                >32124434</span
              >
            </h2>

            <h2 class="flex items-center text-mainWhite text-2xl">
              <span
                class="px-3 py-2 shadow-sm border-b-8 shadow-darkPurple border border-mainPink rounded-sm"
                >شماره تلفن</span
              >
              <PhPhoneCall :size="40" class="mx-1" weight="fill" />
            </h2>
          </div>
          <div
            class="flex lg:flex-row flex-col-reverse text-right items-end space-x-5"
          >
            <h2 class="flex items-center text-mainWhite text-2xl">
              <span
                class="px-3 py-2 shadow-sm border-b-8 shadow-darkPurple border border-mainPink rounded-sm"
                >Arvin.nikbin@gmail.com</span
              >
            </h2>
            <h2 class="flex items-center text-mainWhite text-2xl">
              <span
                class="px-3 py-2 shadow-sm border-b-8 shadow-darkPurple border border-mainPink rounded-sm"
                >ایمیل</span
              >
              <PhEnvelope :size="40" class="mx-1" weight="fill" />
            </h2>
          </div>
          <div
            class="flex lg:flex-row flex-col-reverse text-right items-end space-x-5 lg:col-span-2"
          >
            <h2 class="flex items-center text-mainWhite text-2xl">
              <span
                class="px-3 py-2 shadow-sm border-b-8 shadow-darkPurple border border-mainPink rounded-sm"
                >ارومیه - خیام جنوبی - مرکز خرید امیرکبیر - طبقه ی پایین -
                فروشگاه سرزمین عجایب</span
              >
            </h2>

            <h2 class="flex items-center text-mainWhite text-2xl">
              <span
                class="px-3 py-2 shadow-sm border-b-8 shadow-darkPurple border border-mainPink rounded-sm"
                >آدرس</span
              >
              <PhGlobeStand :size="40" class="mx-1" weight="fill" />
            </h2>
          </div>
        </div>
        <h2
          class="text-mainYellow border-b-8 rounded-2xl border-mainPink pb-5 my-14 text-center text-2xl lg:text-4xl flex"
        >
          <PhUsersThree :size="35" weight="fill" class="mr-3" />
          <span> و یا در شبکه های اجتماعی </span>
        </h2>
        <div class="flex items-center justify-center space-x-5">
          <button
            class="text-mainPink cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPink border-2 border-b-8 border-transparent hover:border-mainPink rounded-md"
          >
            <PhInstagramLogo weight="fill" :size="60" />
          </button>
          <button
            class="text-mainPink cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPink border-2 border-b-8 border-transparent hover:border-mainPink rounded-md"
          >
            <PhFacebookLogo weight="fill" :size="60" />
          </button>
          <button
            class="text-mainPink cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPink border-2 border-b-8 border-transparent hover:border-mainPink rounded-md"
          >
            <PhTelegramLogo weight="fill" :size="60" />
          </button>
          <button
            class="text-mainPink cursor-pointer transition ease-in-out duration-150 p-2 shadow-lg shadow-transparent hover:shadow-mainPink border-2 border-b-8 border-transparent hover:border-mainPink rounded-md"
          >
            <PhTwitterLogo weight="fill" :size="60" />
          </button>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import {
  PhEnvelope,
  PhGlobeStand,
  PhPhoneCall,
  PhUsersThree,
  PhFacebookLogo,
  PhInstagramLogo,
  PhTelegramLogo,
  PhTwitterLogo,
} from "@phosphor-icons/vue";
</script>
