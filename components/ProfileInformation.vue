<template>
  <div
    class="w-full h-full bg-white rounded-md flex items-center justify-center flex-col p-6"
  >
    <div class="w-full h-24 flex items-center justify-end lg:px-6">
      <h2
        :class="{
          'lg:text-4xl text-2xl flex items-center space-x-2 text-mainBrown border-b-4 border-mainYellow pb-2 rounded-md':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          'lg:text-4xl text-2xl flex items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md':
            $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
        class=""
      >
        <span> اطلاعات کاربری </span>
        <PhAlien weight="fill" />
      </h2>
    </div>
    <div class="flex w-full items-center h-full" id="Info" v-show="infoDiv">
      <CustomerInfo isVisible="true" />
    </div>
    <div class="flex w-full items-center h-full" id="edit" v-show="editDiv">
      <div class="h-full w-full flex items-center justify-center">
        <LazyProfileInfo />
      </div>
    </div>
    <div class="w-full flex items-center justify-center space-x-5">
      <button
        @click="
          toggleedit();
          handleForm();
        "
        :class="{
          'text-lg flex active:text-mainYellow active:bg-mainBrown items-center space-x-2 justify-center px-8 py-2   Transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange   text-darkPurple':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          'text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 justify-center px-8 py-2   Transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet   text-darkPurple':
            $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
      >
        تایید تغییرات
      </button>
      <button
        @click="toggleInfo"
        :class="{
          'text-lg flex active:text-mainYellow active:bg-mainBrown items-center space-x-2 justify-center px-8 py-2   Transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainOrange rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange   text-darkPurple':
            $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
          'text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 justify-center px-8 py-2   Transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet   text-darkPurple':
            $route.path === '/' || $route.path.startsWith('/shop/'),
        }"
      >
        ویرایش اطلاعات
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { PhAlien, PhClipboardText } from "@phosphor-icons/vue";
import { useProfileStore } from "../stores/profileStore";

// register store

const profileStore = useProfileStore();

const handleForm = async () => {
  profileStore.submitInformation();
};

const { $gsap } = useNuxtApp();
const infoDiv = ref(true);
const editDiv = ref();
function toggleInfo() {
  infoDiv.value = true;
  editDiv.value = false;
}

function toggleedit() {
  infoDiv.value = false;
  editDiv.value = true;
}

watch([infoDiv, editDiv], (values) => {
  const [InfoVisible, editVisible] = values;
  const TL = $gsap.timeline();
  if (InfoVisible) {
    TL.fromTo(
      "#Info",
      { opacity: 0, x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  } else if (editVisible) {
    TL.fromTo(
      "#edit",
      { opacity: 0, x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }
});
</script>
