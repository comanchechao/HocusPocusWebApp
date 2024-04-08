<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div
      class="flex justify-end lg:flex-row md:flex-row flex-col bg-darkPurple rounded-md m-5 text-white p-2 lg:p-5"
    >
      <div
        class="flex text-lg items-end justify-center text-darkPurple p-3 space-x-7"
      >
        <button
          @click="submitCode"
          v-show="code"
          class="text-lg flex h-10 items-center space-x-2 px-3 lg:px-5 transition duration-150 ease-in-out border-b-4 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg py-2 shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
        >
          ثبت
        </button>
        <div class="flex flex-col items-center space-y-2 justify-center">
          <input
            placeholder="درصد کد تخفیف"
            v-model="perc"
            mask="99"
            class="w-full bg-white rounded-lg text-sm h-11"
            aria-describedby="username-help"
          />
          <input
            placeholder="تعداد روزهای فعال"
            v-model="days"
            mask="999"
            class="w-full bg-white rounded-lg text-sm h-11"
            aria-describedby="username-help"
          />
        </div>
      </div>
      <div class="flex items-center flex-col justify-center p-3">
        <input
          class="p-3 lg:w-1/2 bg-darkPurple text-mainWhite w-full text-right text-lg"
          placeholder="کد تخفیف را تولید کنید"
          type="text"
          v-model="code"
        />
        <button
          class="text-lg flex h-10 items-center space-x-2 px-3 lg:px-5 transition duration-150 ease-in-out border-b-4 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg py-2 shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
          @click="generateRandomNumber"
        >
          دریافت کد
        </button>
      </div>
    </div>
    <div
      class="w-full text-center h-20 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">روزهای فعال</h3>
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
        <p v-show="discount.valid">معتبر</p>
        <p v-show="!discount.valid">منقضی شده</p>
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
const days = ref();
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
  data.append("days", days.value);

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
