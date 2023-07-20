<template>
  <div
    class="w-full h-full flex items-center justify-center flex-col space-y-6"
  >
    <div class="flex items-center justify-center space-x-5 h-14 w-full">
      <button
        @click="currentTab = 'tab1'"
        class="w-full h-14 text-xl justify-center flex items-center space-x-2 rounded-md shadow-md shadow-transparent active:bg-green-700 active:text-white hover:shadow-green-500 bg-green-500 text-white transition ease-in duration-150 hover:bg-white hover:text-green-500"
      >
        <span>تحویل داده شده</span>
        <PhCheckCircle weight="fill" :size="30" />
      </button>
      <button
        @click="currentTab = 'tab2'"
        class="w-full h-14 text-xl justify-center flex items-center space-x-2 rounded-md shadow-md shadow-transparent active:bg-blue-900 active:text-white hover:shadow-blue-700 bg-blue-700 text-white transition ease-in duration-150 hover:bg-white hover:text-blue-700"
      >
        <span>فرستاده شده</span>
        <PhAirplaneTakeoff weight="fill" :size="30" />
      </button>
      <button
        @click="currentTab = 'tab3'"
        class="w-full h-14 text-xl justify-center flex items-center space-x-2 rounded-md shadow-md shadow-transparent active:bg-Fuchsia-950 active:text-white hover:shadow-mainViolet bg-mainViolet text-white transition ease-in duration-150 hover:bg-white hover:text-mainViolet"
      >
        <span>در حال پردازش</span>
        <PhPackage weight="fill" :size="30" />
      </button>
    </div>
    <div
      class="h-full w-full shadow-mainPurple shadow-lg rounded-md bg-white flex flex-col items-center"
    >
      <transition name="slide-fade">
        <div
          class="flex w-full items-center h-full flex-col justify-around space-y-5 p-10"
          v-if="currentTab === 'tab3'"
        >
          <h2
            class="text-2xl flex self-end items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
          >
            <span>اطلاعات سفارش ها</span>
            <PhClipboardText weight="fill" :size="25" />
          </h2>
          <div
            class="h-full pt-6 w-full flex flex-col justify-center space-y-5 overflow-y-scroll items-center"
          >
            <Order /> <Order />
            <Order />
            <Order />
          </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div
          class="flex w-full items-center h-full flex-col justify-around space-y-5 p-10"
          v-if="currentTab === 'tab2'"
        >
          <h2
            class="text-2xl flex self-end items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
          >
            <span>اطلاعات سفارش ها</span>
            <PhClipboardText weight="fill" :size="25" />
          </h2>
          <div
            class="h-full pt-6 w-full flex flex-col justify-center space-y-5 overflow-y-scroll items-center"
          >
            <Order /> <Order />
            <Order />
            <Order />
          </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div
          class="flex w-full items-center h-full"
          v-if="currentTab === 'tab1'"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import {
  PhPackage,
  PhAirplaneTakeoff,
  PhCheckCircle,
  PhClipboardText,
} from "@phosphor-icons/vue";
</script>
<script>
export default {
  data() {
    return {
      currentTab: "tab1",
    };
  },
};
</script>
<style></style>
