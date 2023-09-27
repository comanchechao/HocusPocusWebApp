<template>
  <div class="h-auto w-screen from-mainPurple to-darkPurple bg-gradient-to-t">
    <LazyNavbar />
    <div class="h-auto w-screen flex-col flex items-center px-7 lg:px-32 py-16">
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
        class="w-full Product flex lg:flex-row flex-col-reverse items-start mt-9 rounded-md h-full lg:space-x-5"
      >
        <div class="lg:w-1/2 w-full h-full flex flex-col items-start">
          <div
            class="w-full h-full rounded-sm flex self-start flex-col items-end justify-center"
          >
            <h1
              class="text-4xl font-bold my-2 bg-white p-3 rounded-md text-darkPurple"
            >
              توضیحات کالا
            </h1>

            <h1
              class="text-darkPurple my-2 bg-white p-3 rounded-md flex flex-col space-y-6 text-right text-md"
            >
              <span
                class="text-xl font-bold pb-3 border-b-4 border-darkPurple rounded-xl flex justify-end"
                >لورم ایپسوم متن
              </span>
              <span
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                نیاز شامل حروفچینی دستاوردهای اصل میباشد</span
              >
            </h1>
            <h1
              class="text-darkPurple my-2 bg-white p-3 rounded-md flex flex-col space-y-6 text-right text-md"
            >
              <span
                class="text-xl font-bold pb-3 border-b-4 border-darkPurple rounded-xl flex justify-end"
                >لورم ایپسوم متن
              </span>
              <span
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                نیاز شامل حروفچینی دستاوردهای اصل میباشد</span
              >
            </h1>
          </div>
          <div class="w-full h-full flex items-center mt-7 justify-around">
            <div class="flex items-center justify-center space-x-3">
              <PhMinus
                class="text-mainRed cursor-pointer p-2 border-2 border-transparent duration-200 ease-in transition hover:border-mainPink"
                :size="55"
                weight="fill"
              />
              <h3 class="text-3xl font-bold text-mainRed font-SultanFont">6</h3>
              <PhPlus
                class="text-mainRed cursor-pointer p-2 border-2 border-transparent duration-200 ease-in transition hover:border-mainPink"
                :size="55"
                weight="fill"
              />
              <h3 class="text-xl text-mainRed">تعداد</h3>
            </div>
            <button
              class="text-xl flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه به سبد خرید </span>
              <PhShoppingBagOpen :size="35" weight="fill" />
            </button>
          </div>
        </div>
        <div class="flex items-start lg:w-1/2 w-full h-full flex-col">
          <div class="w-full h-full flex items-center mb-7 justify-center">
            <ImageGallery />
          </div>
          <div
            class="w-full lg:px-0 h-full flex flex-col items-end space-y-2 justify-between"
          >
            <div
              class="flex w-full h-full flex-col items-end justify-start space-y-2"
            >
              <h3
                class="text-sm text-darkPurple p-2 rounded-md bg-white text-right"
              >
                <span> دسته بندی کارت ها </span>
              </h3>
              <div class="flex items-center justify-center space-x-2">
                <h1
                  class="text-2xl text-darkPurple p-2 rounded-md bg-white text-right"
                >
                  <span>
                    Joker and the Thief : Blood Red Edition Playing Cards
                  </span>
                </h1>
              </div>
              <h2
                class="bg-white font-bold rounded-sm flex items-center space-x-2 text-darkPurple p-2 text-3xl"
              >
                <span class="text-sm text-mainRed">تومان</span>
                <span> 1,200,000 </span>
              </h2>
              <div
                class="flex items-center space-x-3 justify-center p-3 bg-mainWhite rounded-md"
              >
                <Rating class="rounded-sm" v-model="value" :cancel="false" />
                <h3
                  class="font-bold rounded-sm flex items-center space-x-2 text-darkPurple text-lg"
                >
                  : امتیاز
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-full mt-20 Comment w-full mb-11 flex flex-col space-y-4 py-5 items-end"
      >
        <Comments />
      </div>
      <div class="h-full flex flex-col items-end w-screen lg:px-24 px-5">
        <h2
          class="text-mainPink border-b-8 rounded-2xl border-mainPink pb-5 my-7 text-center text-3xl lg:text-3xl flex"
        >
          <PhCards :size="35" weight="fill" class="mr-3" />
          <span> جدیدترین محصولات </span>
        </h2>
        <LazyCardsCarousel :products="products" class="self-center" />
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  PhCaretLeft,
  PhShoppingBagOpen,
  PhCards,
  PhPlus,
  PhMinus,
} from "@phosphor-icons/vue";

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
