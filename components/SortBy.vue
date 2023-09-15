<template>
  <div
    class="rounded-t-lg grid grid-cols-3 gap-3 px-5 place-items-center shadow-mainRed h-full my-5 w-auto"
  >
    <h2
      :class="{
        'text-mainYellow my-5':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="text-mainRed my-5 text-md justify-self-end col-span-3 flex items-center space-x-3"
    >
      <span> مرتب سازی بر اساس </span>
      <PhFadersHorizontal :size="30" weight="fill" />
    </h2>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-1   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-1 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> بیشترین امتیاز </span> <PhStar :size="18" weight="fill" />
    </button>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-1   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-1 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پرفروش ترین </span> <PhCoins :size="20" weight="fill" />
    </button>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-1   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-1 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پربازدید ترین </span>
      <PhEye :size="20" weight="fill" />
    </button>
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
