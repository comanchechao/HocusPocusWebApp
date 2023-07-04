<template>
  <div class="h-auto w-screen bg-darkPurple">
    <Navbar />
    <div class="h-screen w-screen p-20">
      <div
        class="w-full h-full bg-white p-6 flex items-center space-x-4 rounded-md"
      >
        <div class="h-full w-2/3 flex flex-col items-end">
          <h3
            class="border-b-4 pb-2 rounded-md border-mainRed text-darkPurple text-2xl"
          >
            اطلاعات ارسال
          </h3>
          <div class="h-full w-full flex items-center">
            <CustomerInfo />
          </div>
          <button
            class="text-xl px-10 active:text-darkPurple active:bg-mainRed flex items-center space-x-2 self-center justify-center py-2 transition duration-300 ease-in-out border-2 hover:bg-mainRed hover:text-darkPurple border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet text-mainRed"
          >
            <span> تایید و ادامه به درگاه بانکی </span>
            <PhShoppingBagOpen :size="35" weight="fill" />
          </button>
        </div>
        <div
          class="h-full w-1/3 border-l-2 border-mainRed flex flex-col items-end"
        >
          <h3
            class="border-b-4 pb-2 rounded-md border-mainRed text-darkPurple text-2xl"
          >
            محصولات انتخاب شده
          </h3>
          <div
            class="w-full h-full flex items-center flex-col px-9 pt-9 overscroll-y-scroll"
          >
            <div class="w-full flex flex-col items-center space-y-7 h-48">
              <div
                class="w-full h-24 justify-between pr-8 flex items-center border-2 rounded-sm border-darkPurple"
              >
                <div class="w-24 h-full bg-darkPurple"></div>
                <h3 class="text-xl text-mainYellow flex flex-col items-center">
                  <span> 1,299,000 </span>
                  <span class="text-darkPurple text-md">تومان</span>
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
                class="w-full h-24 justify-between pr-8 flex items-center border-2 rounded-sm border-darkPurple"
              >
                <div class="w-24 h-full bg-darkPurple"></div>
                <h3 class="text-xl text-mainYellow flex flex-col items-center">
                  <span> 1,299,000 </span>
                  <span class="text-darkPurple text-md">تومان</span>
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
} from "@phosphor-icons/vue";
</script>
