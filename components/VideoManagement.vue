<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-md flex active:text-mainBrown active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
    >
      <span> مدیریت ویدیوها </span>
      <PhVideo />
    </button>
    <Dialog
      v-model:visible="visible"
      :responsive="['md', 'lg', 'xl']"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col py-7">
        <h2 class="text-2xl neonText">مدیریت آموزش ها</h2>
        <LazySortBy />
        <div
          class="w-full h-full bg-white my-4 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple font-bold">تاریخ آپلود</h3>
            <h3 class="text-mainPurple font-bold">موجودی آموزش</h3>
            <h3 class="text-mainPurple font-bold">نام آپلود کننده</h3>
            <h3 class="text-mainPurple font-bold">نام آموزش</h3>
          </div>
          <div
            v-for="course in courses"
            :key="course.id"
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
            <div class="flex items-center space-x-3">
              <InputSwitch v-model="checked"></InputSwitch>
              <h3 class="text-lg text-darkPurple">موجود</h3>
            </div>
            <h3 class="text-darkPurple">{{ course.trainer }}</h3>
            <h3 class="text-mainBrown text-center px-5">{{ course.title }}</h3>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhCaretLeft,
  PhCoffee,
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
  PhVideo,
} from "@phosphor-icons/vue";
const visible = ref(false);
const checked = ref(false);
const props = defineProps(["courses"]);

onMounted(() => {
  console.log(props.courses);
});
</script>

<style></style>
