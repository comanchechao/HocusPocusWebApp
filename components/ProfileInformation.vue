<template>
  <div
    class="w-full h-full bg-white rounded-md flex items-center justify-center flex-col p-6"
  >
    <div class="w-full h-24 flex items-center justify-end px-6">
      <h2
        class="text-4xl flex items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
      >
        <span> اطلاعات کاربری </span>
        <PhAlien weight="fill" />
      </h2>
    </div>
    <Transition name="slide-fade">
      <div
        class="flex w-full items-center h-full"
        v-show="currentTab === 'tab2'"
      >
        <ProfileInfo />
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div
        class="flex w-full items-center h-full"
        v-show="currentTab === 'tab1'"
      >
        <CustomerInfo />
      </div>
    </Transition>
    <div class="w-full flex items-center justify-center space-x-5">
      <button
        @click="currentTab = 'tab2'"
        class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 justify-center px-8 py-2 transform scale-100 hover:scale-105 Transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
      >
        تایید تغییرات
      </button>
      <button
        @click="currentTab = 'tab1'"
        class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 justify-center px-8 py-2 transform scale-100 hover:scale-105 Transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
      >
        ویرایش اطلاعات
      </button>
    </div>
  </div>
</template>

<script setup>
import { PhAlien } from "@phosphor-icons/vue";
</script>
<script>
export default {
  data() {
    return {
      currentTab: "tab2",
    };
  },
};
</script>
