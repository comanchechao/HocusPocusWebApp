<template>
  <div class="h-full w-screen bg-darkPurple">
    <Navbar />
    <div
      class="w-full h-screen px-28 py-6 flex items-center justify-center space-x-9"
    >
      <div class="h-full w-full flex-col flex items-center justify-end">
        <transition name="slide-fade">
          <div
            class="w-full h-full flex items-center py-14"
            v-if="currentTab === 'tab2'"
          >
            <ProfileOrders />
          </div>
        </transition>
        <transition name="slide-fade">
          <div
            class="w-full h-full flex items-center py-14"
            v-if="currentTab === 'tab1'"
          >
            <ProfileInformation />
          </div>
        </transition>
      </div>
      <div
        class="h-full w-1/4 flex items-center justify-center flex-col space-y-2"
      >
        <button
          class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-72 justify-center px-8 py-4 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          @click="currentTab = 'tab1'"
        >
          <span>اطلاعات کاربری</span>
          <PhAlien weight="fill" :size="25" />
        </button>
        <button
          class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-72 justify-center px-8 py-4 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          @click="currentTab = 'tab2'"
        >
          <span> سفارش ها </span>
          <PhClipboardText weight="fill" :size="25" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhAlien, PhClipboardText } from "@phosphor-icons/vue";
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
<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 1s opacity;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}
</style>
