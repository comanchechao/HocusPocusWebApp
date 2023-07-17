<template>
  <div class="h-full w-screen bg-darkPurple">
    <Navbar />
    <div
      class="w-full h-screen px-28 py-6 flex items-center justify-center space-x-9"
    >
      <div class="h-full w-3/4 flex items-center justify-center">
        <transition name="fade">
          <div
            class="w-full h-full flex items-center py-10"
            v-if="currentTab === 'tab1'"
          >
            <ProfileInformation />
          </div>
        </transition>

        <transition name="fade">
          <div
            class="w-full h-full flex items-center p-10"
            v-if="currentTab === 'tab2'"
          >
            <ProfileOrders />
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
          <PhAlien :size="25" />

          اطلاعات کاربری
        </button>
        <button
          class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-72 justify-center px-8 py-4 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          @click="currentTab = 'tab2'"
        >
          <PhClipboardText :size="25" />
          سفارش ها
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { PhAlien, PhClipboardText } from "@phosphor-icons/vue";
export default {
  data() {
    return {
      currentTab: "tab1",
    };
  },
  setup() {
    return { PhAlien, PhClipboardText };
  },
};
</script>
<style>
.fade-enter-active {
  transition: all 0.3s ease-out;
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(300px);
  opacity: 0;
}
</style>
