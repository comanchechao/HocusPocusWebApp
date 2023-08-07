<template>
  <div class="">
    <Sidebar position="right" v-model:visible="visible">
      <div
        class="w-full h-full bg-darkPurple flex items-center justify-center flex-col pb-5"
      >
        <div class="w-full h-full flex items-center space-y-10 flex-col p-5">
          <div class="w-full flex flex-col items-center space-y-7 h-48">
            <div
              class="w-full h-24 border-y border-r rounded-md border-mainRed justify-between pr-8 flex items-center"
            >
              <div class="w-24 h-24 p-3 bg-white">
                <img
                  src="../assets/images/Psychonauts.webp"
                  class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
                  alt=""
                />
              </div>
              <h3 class="text-lg text-mainYellow flex flex-col items-center">
                <span> 1,299,000 </span>
                <span class="text-mainRed text-md">تومان</span>
              </h3>
              <!-- <div
                class="h-full flex flex-col items-center justify-center"
              ></div> -->
            </div>
            <div class="flex items-center space-x-3">
              <PhPlusSquare
                class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                :size="32"
              />

              <h4
                class="px-3 py-1 border-2 text-mainRed font-bold border-mainYellow rounded-full"
              >
                2
              </h4>
              <PhMinusSquare
                class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                :size="32"
              />
              <button
                class="text-red-500 px-5 py-1 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
              >
                <PhTrash :size="30" />
              </button>
            </div>
          </div>
        </div>
        <NuxtLink to="/shop/checkout">
          <button
            class="text-xl bg-mainRed active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          >
            <span>تکمیل خرید</span>
          </button>
        </NuxtLink>
      </div>
    </Sidebar>
    <button
      :class="{
        'hover:border-mainOrange text-mainYellow hover:shadow-mainOrange hover:text-mainOrange':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
        'hover:border-mainViolet text-mainRed hover:shadow-mainViolet hover:text-mainViolet':
          $route.path === '/' || $route.path.startsWith('/shop/'),
      }"
      class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-3 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
      @click="visible = true"
    >
      <PhShoppingBagOpen :size="30" />
    </button>
  </div>
</template>

<script setup>
import {
  PhShoppingBagOpen,
  PhMinusSquare,
  PhPlusSquare,
  PhTrash,
} from "@phosphor-icons/vue";
import { ref } from "vue";

const visible = ref(false);
</script>
