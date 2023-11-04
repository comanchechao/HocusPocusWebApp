<template>
  <div class="h-full w-full bg-mainBrown">
    <LazyNavbar />
    <div class="lg:h-full h-auto w-screen p-8 lg:px-20">
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end my-10 space-x-2 lg:space-x-4"
      >
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span class="pb-2 border-b-2 border-mainYellow"> تکمیل خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> آموزش </span>
        </h2>
      </div>
      <div
        class="w-full h-full bg-white p-6 flex lg:flex-row flex-col-reverse items-center space-x-4 rounded-md"
      >
        <div class="h-dialog w-full lg:w-2/3 flex flex-col items-end">
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainYellow text-darkPurple text-2xl"
          >
            <span> اطلاعات خرید </span>
            <PhInfo :size="30" weight="fill" />
          </h3>
          <div class="h-full w-full flex items-center">
            <CustomerInfo :isVisible="false" />
          </div>
          <button
            class="lg:text-xl text-md px-3 lg:px-10 active:text-darkPurple active:bg-mainYellow flex items-center space-x-2 self-center justify-center py-2 transition duration-300 ease-in-out bg-mainYellow text-darkPurple rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainYellow hover:bg-mainBrown"
          >
            <span> تایید و ادامه به درگاه بانکی </span>
            <PhShoppingBagOpen :size="35" weight="fill" />
          </button>
        </div>
        <div
          class="h-full lg:h-dialog w-full lg:w-1/3 lg:border-l-2 border-mainYellow flex flex-col items-end"
        >
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainYellow text-darkPurple text-lg lg:text-2xl"
          >
            <span> محصولات انتخاب شده </span>
            <PhBasket :size="30" weight="fill" />
          </h3>

          <div
            class="w-full h-full py-11 flex items-center flex-col px-9 pt-9 space-y-5 lg:overflow-y-scroll"
          >
            <div
              v-for="item in shoppingCart"
              :key="item.id"
              class="w-full flex flex-col items-center space-y-7 h-full"
            >
              <div
                class="w-full h-64 justify-center p-5 flex flex-col items-center border-2 rounded-md border-mainYellow"
              >
                <div
                  class="w-full flex items-center flex-col text-right space-y-6 justify-center h-full bg-white"
                >
                  <LazyVideoCardImage :courseId="item.CoursesImages" />
                  <h3 class="text-mainBrown text-md">
                    {{ item.title }}
                  </h3>
                  <h3 class="text-mainBrown text-center text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis ipsum consequuntur labore dolores voluptas. Totam
                    nostrum quisquam pariatur alias ipsum.
                  </h3>
                </div>

                <!-- <div
                class="h-full flex flex-col items-center justify-center"
              ></div> -->
              </div>
              <div class="flex items-center space-x-3">
                <h3
                  class="text-xl text-darkPurple border-2 border-mainOrange border-dashed p-3 rounded-md flex space-x-2 items-center"
                >
                  <span class="text-mainYellow text-sm">تومان</span>
                  <span class="text-2xl">{{ item.price }} </span>
                </h3>
                <button
                  @click="removeItem(item.id)"
                  class="text-red-500 px-5 py-2 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
                >
                  <PhTrash :size="30" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhShoppingBagOpen,
  PhTrash,
  PhCaretLeft,
  PhInfo,
  PhBasket,
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { useCourseStore } from "~/stores/coursesStore";

// register courseStore

const courseStore = useCourseStore();

const { shoppingCart } = storeToRefs(courseStore);

const increaseItem = (itemId) => {
  courseStore.increaseQuantity(itemId);
};
const decreaseItem = (itemId) => {
  courseStore.decreaseQuantity(itemId);
};

const removeItem = (itemId) => {
  courseStore.removeProduct(itemId);
};
</script>

<style lang="scss" scoped></style>
