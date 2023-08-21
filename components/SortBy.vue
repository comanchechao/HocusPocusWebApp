<template>
  <div
    class="rounded-t-lg shadow-mainRed h-auto space-y-4 my-5 lg:space-y-0 md:h-24 md:space-y-0 lg:h-24 w-full md:flex-row-reverse lg:flex-row flex-col flex md:justify-start md:space-x-4 lg:justify-end lg:space-x-4 px-8 items-center"
  >
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-1   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="text-sm flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> بیشترین امتیاز </span> <PhStar :size="18" weight="fill" />
    </button>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-1   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="text-sm flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پرفروش ترین </span> <PhCoins :size="20" weight="fill" />
    </button>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-1   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="text-sm flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پربازدید ترین </span>
      <PhEye :size="20" weight="fill" />
    </button>
    <h2
      :class="{
        'text-mainYellow':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="text-mainRed lg:order-1 text-md -order-4 flex items-center space-x-3"
    >
      <span> : </span>
      مرتب سازی بر اساس
      <PhFadersHorizontal :size="30" weight="fill" />
    </h2>
  </div>
</template>
<script setup>
import {
  PhEye,
  PhCoins,
  PhStar,
  PhFadersHorizontal,
} from "@phosphor-icons/vue";
</script>
