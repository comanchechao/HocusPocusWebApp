<template>
  <head>
    <title>خرید موفقیت آمیز بود</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="w-full h-screen lg:px-28 px-4 pt-28 flex lg:items-center justify-center"
    >
      <div
        class="h-rem30 w-rem28 bg-white rounded-md flex items-center flex-col justify-around"
      >
        <PhCheckCircle class="text-green-500" weight="fill" :size="230" />
        <h1 class="lg:text-4xl text-3xl md:text-4xl text-green-500">
          پرداخت موفقیت آمیز بود
        </h1>
        <h1
          class="text-xl text-green-500 p-3 rounded-md border-2 border-dashed border-green-600"
        >
          کد پرداخت <span class="text-darkPurple">25445</span>
        </h1>
        <div class="flex items-center space-x-3">
          <NuxtLink to="/shop/profile">
            <button
              class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
            >
              <span> پروفایل </span>
              <PhAlien :size="23" />
            </button>
          </NuxtLink>
          <h1 class="text-xl text-mainRed">پیگیری سفارش در</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCheckCircle, PhAlien } from "@phosphor-icons/vue";
</script>
