<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-sm flex active:text-mainRed active:bg-darkPurple items-center px-4 py-2 rounded-full transition duration-300 ease-in-out bg-mainPink hover:bg-darkPurple hover:text-mainPink text-darkPurple"
    >
      اطلاعات سفارش
      <PhInfo class="ml-1" weight="fill" :size="23" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '50vw', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full flex flex-col space-y-4 items-center justify-around p-3"
      >
        <div class="flex items-center justify-center w-full h-full p-2">
          <div
            class="w-full h-full grid grid-cols-2 place-items-center gap-3 text-mainWhite"
          >
            <div
              class="flex items-center justify-end space-x-2 w-full col-span-2"
            >
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md text-right"
              >
                خیابان عمار - خیابان حج - مجتمع مسکونی ارم - بلوک یک - طبقه چهار
                - واحد سه
              </h2>
              <h2 class="text-md">آدرس</h2>
            </div>

            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                0913442233
              </h2>
              <h2 class="text-md">شماره تلفن</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                آروین نیک بین
              </h2>
              <h2 class="text-md">نام خریدار</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                ارومیه
              </h2>
              <h2 class="text-md">شهر</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                آذربایجان غربی
              </h2>
              <h2 class="text-md">استان</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                دوشنبه 19 تیر 1402
              </h2>
              <h2 class="text-md">تاریخ خرید</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                پرداخت شده
              </h2>
              <h2 class="text-md">وضعیت سفارش</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                <span>(تومان)</span>
                <span> 1,000,512 </span>
              </h2>
              <h2 class="text-md">مجموع قیمت</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="text-md p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                5
              </h2>
              <h2 class="text-md">تعداد کالا</h2>
            </div>

            <div
              class="flex items-center justify-end space-x-2 w-full col-span-2"
            >
              <h2
                class="text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                Bicycle: Batman Edition Playing Cards
              </h2>
              <h2 class="text-md">نام کالا</h2>
            </div>
          </div>
        </div>
        <div class="h-auto w-full flex items-end justify-end bg-mainWhite p-2">
          <img
            src="../assets/images/Psychonauts.webp"
            class="object-contain h-36"
            alt=""
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhInfo, PhCheckCircle } from "@phosphor-icons/vue";
const visible = ref(false);

const checked = ref(false);
</script>

<style scoped></style>
