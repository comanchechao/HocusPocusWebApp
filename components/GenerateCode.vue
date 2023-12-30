<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div class="flex justify-around bg-darkPurple m-5 text-white p-5">
      <div
        class="flex rounded font-4xl items-center font-bold justify-around space-y-2 flex-col text-darkPurple p-3 w-full"
      >
        <input
          class="p-3 w-1/2 text-right"
          placeholder="کد تخفیف را تولید کنید"
          type="text"
          v-model="code"
        />
        <InputMask
          placeholder="درصد کد تخفیف"
          v-model="perc"
          mask="99"
          class="w-1/2 bg-white rounded-lg h-11"
          aria-describedby="username-help"
        />
      </div>
      <div class="flex w-full justify-around p-3">
        <button
          @click="submitCode"
          v-show="code"
          class="bg-red-500 p-2 rounded px-5"
        >
          ثبت
        </button>
        <button
          class="hover:bg-blue-500 bg-blue-800 p2 px-5"
          @click="generateRandomNumber"
        >
          دریافت کد
        </button>
      </div>
    </div>
    <div
      class="w-full text-center h-20 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">-</h3>
      <h3 class="text-mainPurple">درصد کد</h3>
      <h3 class="text-mainPurple">وضعیت کد</h3>
      <h3 class="text-mainPurple">نام کد</h3>
    </div>

    <div
      v-for="discount in discounts"
      :key="discount.id"
      class="w-full h-full lg:h-20 py-5 grid grid-cols-4 place-items-center border-b border-mainRed"
    >
      <div class="flex items-center space-x-3">=</div>
      <div class="flex items-center space-x-3">
        {{ discount.perc }}
      </div>
      <div class="flex items-center space-x-3">
        {{ discount.valid }}
      </div>
      <h3 class="text-darkPurple text-center px-5">
        {{ discount.code }}
      </h3>
      <Message
        class="w-96 text-right absolute"
        v-show="message"
        severity="success"
      >
        <span class="lg:text-xl text-md">تغییرات موفقیت آمیز بود</span>
      </Message>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useMainManagement } from "../stores/managementStore";

const mainManagement = useMainManagement();

const { discountChange } = storeToRefs(mainManagement);

watch(discountChange, (cur, old) => {
  console.log(cur);
  getDiscounts();
});

const code = ref();
function generateRandomNumber() {
  let min = 10000000; // The smallest 8-digit number
  let max = 99999999; // The largest 8-digit number
  code.value = Math.floor(Math.random() * (max - min + 1)) + min;
}

const perc = ref();
const discounts = ref();
const loading = ref();

const getDiscounts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/management/discounts", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      discounts.value = response.discounts;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const submitCode = async (status) => {
  const data = new URLSearchParams({});
  console.log(perc.value);
  data.append("code", code.value);
  data.append("perc", perc.value);

  await $fetch("http://localhost:3333/management/generatediscount", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      mainManagement.setDiscountChange();
      console.log(discountChange);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getDiscounts();
});
</script>

<style></style>
