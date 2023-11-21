<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-sm flex active:text-mainRed active:bg-darkPurple items-center p-1 lg:px-4 px-2 lg:py-2 rounded-full transition duration-300 ease-in-out bg-mainPink hover:bg-darkPurple hover:text-mainPink text-darkPurple"
    >
      <span class="lg:flex hidden">ایجاد تخفیف</span>
      <PhInfo class="lg:ml-1" weight="fill" :size="23" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-10 space-y-10 flex flex-col items-center justify-center"
      >
        <h2
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-1 text-3xl"
        >
          ایجاد تخفیف
        </h2>
        <div class="flex items-center justify-center space-x-4 h-full w-full">
          <h2 class="text-mainPink text-2xl font-bold">درصد</h2>
          <InputMask
            placeholder="10"
            v-model="discount"
            mask="99"
            class="w-full rounded-lg h-11"
            aria-describedby="username-help"
          />
        </div>
        <button
          @click="setDiscount()"
          class="text-xl flex items-center mb-10 space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
        >
          <span> تایید تخفیف </span>
          <PhCheckCircle weight="fill" :size="23" />
        </button>
        <div>
          <Message severity="success" v-show="discountSuccess"
            >تخفیف ثبت شد</Message
          >
        </div>
        <Message
          class="space-x-4 flex items-center justify-center"
          severity="info"
          v-show="loading"
        >
          <span class="text-right mx-3"> درحال ثبت</span>
          <ProgressSpinner
            style="width: 20px; height: 20px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </Message>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhInfo, PhCheckCircle } from "@phosphor-icons/vue";
const props = defineProps(["productId"]);
const visible = ref(false);
const discount = ref();

const loading = ref(false);
const orderItems = ref();

watch(orderItems, (cur, old) => {
  let toArray = cur[0].items.split(" ");
});

const discountSuccess = ref(false);
const discountFailed = ref(false);

const setDiscount = async () => {
  const body = new URLSearchParams({
    discount: discount.value,
  });

  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/management/setdiscount/${props.productId}`,
    {
      method: "Post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: "include",
      body: body,
      withCredentials: true,
    }
  )
    .then(function (response) {
      if (response) {
        discountSuccess.value = true;
      }
      setTimeout(() => {
        discountSuccess.value = false;
      }, 3000);
      loading.value = false;
    })
    .catch(function (error) {
      discountFailed.value = true;
      setTimeout(() => {
        discount.value = false;
      }, 3000);
      console.error(error);
      loading.value = false;
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
</style>
