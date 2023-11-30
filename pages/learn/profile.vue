<template>
  <head>
    <title>پروفایل</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-mainBrown">
    <LazyNavbar />
    <div
      class="w-full h-full pt-28 lg:overflow-auto overflow-hidden lg:h-screen lg:px-28 px-4 py-6 lg:flex-row flex-col-reverse flex items-center justify-center lg:space-y-0 space-y-6 lg:space-x-9"
    >
      <div class="h-full w-full flex-col flex items-center justify-center">
        <div
          class="w-full h-full flex items-center py-14"
          id="div1"
          v-show="showDiv1"
        >
          <LazyProfileInformation :isVisible="false" />
        </div>
        <div
          class="w-full h-full flex items-center py-14"
          id="div2"
          v-show="showDiv2"
        >
          <LazyProfileOrders class="h-full w-full" />
        </div>
      </div>
      <div
        class="h-full w-full lg:w-1/4 flex items-center justify-center flex-col space-y-4"
      >
        <button
          @click="toggleDiv1"
          class="text-xl flex active:text-mainYellow active:bg-mainBrown items-center space-x-2 w-72 justify-center px-8 py-4 transition duration-300 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-md shadow-lg shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
        >
          <span>اطلاعات کاربری</span>
          <PhAlien weight="fill" :size="25" />
        </button>
        <button
          class="text-xl flex active:text-mainYellow active:bg-mainBrown items-center space-x-2 w-72 justify-center px-8 py-4 transition duration-300 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-md shadow-lg shadow-transparent hover:shadow-mainOrange hover:text-mainBrown text-mainBrown"
          @click="toggleDiv2"
        >
          <span> سفارش ها </span>
          <PhClipboardText weight="fill" :size="25" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { PhAlien, PhClipboardText } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const showDiv1 = ref(true);
const showDiv2 = ref();
function toggleDiv1() {
  showDiv1.value = true;
  showDiv2.value = false;
}

function toggleDiv2() {
  showDiv1.value = false;
  showDiv2.value = true;
}

watch([showDiv1, showDiv2], (values) => {
  const [div1Visible, div2Visible] = values;
  const TL = $gsap.timeline();
  if (div1Visible) {
    TL.fromTo(
      "#div1",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div2Visible) {
    TL.fromTo(
      "#div2",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  }
});
</script>

<style>
#div1,
#div2 {
  transition: opacity 0.2s;
}
</style>
