<template>
  <div class="h-full w-screen bg-darkPurple">
    <Navbar />

    <div class="lg:h-full h-auto w-screen p-8 lg:px-20">
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end my-10 space-x-2 lg:space-x-4"
      >
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span class="pb-2 border-b-2 border-mainRed"> تکمیل خرید </span>
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
        class="w-full h-full bg-white p-6 flex lg:flex-row flex-col-reverse items-center space-x-4 rounded-md"
      >
        <div class="lg:h-dialog h-full w-full lg:w-2/3 flex flex-col items-end">
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainRed text-darkPurple text-2xl"
          >
            <span> اطلاعات ارسال </span>
            <PhInfo :size="30" weight="fill" />
          </h3>
          <div class="h-full w-full flex items-center">
            <LazyCustomerInfo :isVisible="true" />
          </div>
          <button
            class="text-xl px-10 active:text-darkPurple active:bg-mainRed flex items-center space-x-2 self-center justify-center py-2 transition duration-300 bg-darkPurple ease-in-out border-2 hover:bg-mainRed hover:text-darkPurple border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet text-mainRed"
          >
            <span> تایید و ادامه به درگاه بانکی </span>
            <PhShoppingBagOpen :size="35" weight="fill" />
          </button>
        </div>
        <div
          class="h-dialog w-full lg:w-1/3 lg:border-l-2 border-mainRed flex flex-col items-end"
        >
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainRed text-darkPurple text-2xl"
          >
            <span> محصولات انتخاب شده </span>
            <PhBasket :size="30" weight="fill" />
          </h3>
          <div
            class="w-full h-full flex items-center flex-col px-9 pt-9 overscroll-y-scroll"
          >
            <div class="w-full flex flex-col items-center space-y-7 h-48">
              <div
                class="w-full h-24 justify-between pr-8 flex items-center border-2 rounded-sm border-mainRed"
              >
                <div class="w-24 h-full bg-white p-3">
                  <img
                    src="../../assets/images/Psychonauts.webp"
                    class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
                    alt=""
                  />
                </div>
                <h3 class="text-xl text-darkPurple flex flex-col items-center">
                  <span> 1,299,000 </span>
                  <span class="text-mainRed text-sm">تومان</span>
                </h3>
                <!-- <div
                class="h-full flex flex-col items-center justify-center"
              ></div> -->
              </div>
              <div class="flex items-center space-x-3">
                <PhPlusSquare
                  class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                  :size="32"
                />

                <h4
                  class="px-3 py-1 border-2 text-darkPurple font-bold border-mainYellow rounded-full"
                >
                  2
                </h4>
                <PhMinusSquare
                  class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                  :size="32"
                />
                <button
                  class="text-red-500 px-5 py-1 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
                >
                  <PhTrash :size="30" />
                </button>
              </div>
            </div>
            <div class="w-full flex flex-col items-center space-y-7 h-48">
              <div
                class="w-full h-24 justify-between pr-8 flex items-center border-2 rounded-sm border-mainRed"
              >
                <div class="w-24 h-full bg-white p-3">
                  <img
                    src="../../assets/images/Psychonauts.webp"
                    class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
                    alt=""
                  />
                </div>
                <h3 class="text-xl text-darkPurple flex flex-col items-center">
                  <span> 1,299,000 </span>
                  <span class="text-mainRed text-sm">تومان</span>
                </h3>
                <!-- <div
                class="h-full flex flex-col items-center justify-center"
              ></div> -->
              </div>
              <div class="flex items-center space-x-3">
                <PhPlusSquare
                  class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                  :size="32"
                />

                <h4
                  class="px-3 py-1 border-2 text-darkPurple font-bold border-mainYellow rounded-full"
                >
                  2
                </h4>
                <PhMinusSquare
                  class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                  :size="32"
                />
                <button
                  class="text-red-500 px-5 py-1 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
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
  PhMinusSquare,
  PhPlusSquare,
  PhTrash,
  PhCaretLeft,
  PhInfo,
  PhBasket,
} from "@phosphor-icons/vue";
</script>
