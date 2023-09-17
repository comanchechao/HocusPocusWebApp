<template>
  <div class="h-auto w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="h-auto w-screen bg-darkPurple flex-col flex items-center px-7 lg:px-32 py-16"
    >
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end space-x-2 lg:space-x-4"
      >
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> کارت ها </span>
        </h2>
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
      <div
        class="w-full Product shadow-lg shadow-mainPurple lg:flex-row flex-col-reverse rounded-md h-full flex items-center my-6 lg:pl-4 lg:space-x-5 bg-white"
      >
        <div
          class="lg:w-1/2 w-full lg:px-0 h-full flex flex-col items-end space-y-6 justify-start"
        >
          <div class="flex items-center justify-center space-x-2">
            <h1
              class="text-2xl text-darkPurple p-2 rounded-sm bg-white text-right"
            >
              <span>
                Joker and the Thief : Blood Red Edition Playing Cards
              </span>
            </h1>
            <span class="text-mainRed not-italic text-2xl font-thin"
              >کارت بازی</span
            >
          </div>
          <h2
            class="bg-white font-bold rounded-sm flex items-center space-x-2 text-darkPurple p-2 text-3xl"
          >
            <span class="text-sm text-mainRed">تومان</span>
            <span> 1,200,000 </span>
          </h2>
          <div class="flex items-center space-x-3 justify-center p-3">
            <Rating class="rounded-sm" v-model="value" :cancel="false" />
            <h3
              class="font-bold rounded-sm flex items-center space-x-2 text-darkPurple text-lg"
            >
              : امتیاز
            </h3>
          </div>
          <div
            class="w-full h-full bg-white rounded-sm flex flex-col items-end justify-center"
          >
            <h1 class="text-2xl font-bold text-darkPurple">معرفی کالا</h1>
            <h1 class="text-darkPurple text-right text-مل">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              نیاز شامل حروفچینی دستاوردهای اصل میباشد
            </h1>
          </div>
          <button
            class="lg:text-lg text-md active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-12 justify-center py-2 transition duration-300 ease-in-out border-2 hover:bg-mainRed hover:text-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet text-mainRed"
          >
            <span> اضافه به سبد خرید </span>
            <PhShoppingBagOpen :size="35" weight="fill" />
          </button>
        </div>
        <div class="lg:w-1/2 w-full h-full flex items-center justify-center">
          <ImageGallery />
        </div>
      </div>
      <div
        class="h-full Comment w-full mb-11 bg-darkPurple flex flex-col space-y-4 py-5 items-end"
      >
        <Comments />
      </div>
      <div class="h-20 w-screen bg-mainRed flex items-center justify-center">
        <h2 class="text-darkPurple text-2xl flex">
          <PhCards class="mr-3" /> <span> کارت های پیشنهادی </span>
        </h2>
      </div>
      <div class="w-full px-10 flex items-center justify-center space-x-14">
        <Card /> <Card class="hidden lg:flex" />
        <Card class="hidden lg:flex" />
        <Card class="hidden lg:flex" />
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { PhCaretLeft, PhShoppingBagOpen, PhCards } from "@phosphor-icons/vue";

import { ref } from "vue";

const value = ref(null);
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

onMounted(() => {
  TM.from(".Bread", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Product", { opacity: 0, duration: 1 });

  TM.from(".Comment", { opacity: 0, duration: 1.5, stagger: 0.4 });
});
</script>

<style>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #f36b31;
}
.p-rating .p-rating-item .p-rating-icon.p-icon {
  width: 1.7rem;
  height: 1.7rem;
}
</style>
