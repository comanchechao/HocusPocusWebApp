<template>
  <div
    class="grid grid-rows-3 content-center space-x-3 gap-y-2 grid-cols-3 place-items-center justify-items-center shadow-mainRed h-full my-5"
  >
    <h2
      :class="{
        'text-mainYellow my-2':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="text-mainRed my-2 text-md justify-self-end col-span-3 flex items-center space-x-2"
    >
      <span> مرتب سازی بر اساس </span>
      <PhFadersHorizontal :size="30" weight="fill" />
    </h2>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-2   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-2 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> بیشترین امتیاز </span> <PhStar :size="18" weight="fill" />
    </button>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-2   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-2 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پرفروش ترین </span> <PhCoins :size="20" weight="fill" />
    </button>
    <button
      :class="{
        'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-2   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      }"
      class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-2 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> تخفیف دار </span>
      <PhEye :size="20" weight="fill" />
    </button>
    <div class="flex items-center col-span-3 space-x-3">
      <button
        @click="sortFunction('lowest')"
        :class="{
          'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-2   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
        }"
        class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-2 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
      >
        <span> ارزان ترین </span>
        <PhArrowDown :size="20" weight="fill" />
      </button>
      <button
        @click="sortFunction('highest')"
        :class="{
          'text-mainYellow hover:shadow-mainOrange hover:text-mainOrange  border-mainYellow active:text-mainBrown active:bg-mainYellow hover:border-mainOrange text-sm flex items-center space-x-2 px-8 py-2   transition duration-150 ease-in-out border-2  rounded-sm shadow-md shadow-transparent':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
        }"
        class="lg:text-sm text-xs flex items-center space-x-2 px-2 lg:px-8 py-2 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
      >
        <span> گران ترین </span> <PhCoins :size="20" weight="fill" />
      </button>
    </div>
  </div>
</template>
<script setup>
import {
  PhEye,
  PhCoins,
  PhStar,
  PhFadersHorizontal,
  PhArrowDown,
} from "@phosphor-icons/vue";
import { useFilterStore } from "../stores/filtersStore";
// register filter store

const filterStore = useFilterStore();

const sortFunction = (sort) => {
  filterStore.setSortBy(sort);
};
</script>
