<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-sm flex active:text-mainRed active:bg-darkPurple items-center px-1 py-1 rounded-full transition duration-300 ease-in-out bg-mainPink hover:bg-darkPurple hover:text-mainPink text-darkPurple"
    >
      <PhInfo weight="fill" :size="23" />
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
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          تغییر وضعیت سفارش
        </h2>
        <div class="w-full h-full justify-center flex items-center space-x-3">
          <span
            v-show="orderStatus === 'PROCESSING'"
            class="text-mainRed border-4 rounded-md p-2 border-mainPink"
            >در حال پردازش</span
          >
          <span
            v-show="orderStatus === 'SHIPPING'"
            class="text-mainRed border-4 rounded-md p-2 border-mainPink"
            >در حال ارسال</span
          >
          <span
            v-show="orderStatus === 'DELIVERED'"
            class="text-mainRed border-4 rounded-md p-2 border-mainPink"
            >تحویل داده شده</span
          >
          <h2 class="text-mainRed">وضعیت سفارش</h2>
        </div>
        <div
          class="flex items-center justify-center text-right flex-col space-y-9 lg:space-y-0 lg:space-x-7 w-full h-full"
        >
          <div class="flex items-center space-x-3">
            <InputSwitch v-model="proccessing"></InputSwitch>
            <h3 class="text-lg text-mainRed">در حال پردازش</h3>
          </div>
          <div class="flex items-center space-x-3">
            <InputSwitch v-model="shipping"></InputSwitch>
            <h3 class="text-lg text-mainRed">فرستاده شده</h3>
          </div>
          <div class="flex items-center space-x-3">
            <InputSwitch v-model="delivered"></InputSwitch>
            <h3 class="text-lg text-mainRed">تحویل داده شده</h3>
          </div>
        </div>
        <button
          @click="changeStatus()"
          class="text-xl flex items-center mb-10 space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
        >
          <span> تایید تغییرات </span>
          <PhCheckCircle weight="fill" :size="23" />
        </button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhInfo, PhCheckCircle } from "@phosphor-icons/vue";
import { useOrderMainStore } from "~/stores/orderMainStore";
const props = defineProps(["orderStatus", "orderId"]);

// register orderMain store

const ordermainStore = useOrderMainStore();

const proccessing = ref(false);
const shipping = ref(false);
const delivered = ref(false);

const loading = ref(false);

const changeStatus = () => {
  if (proccessing.value) {
    statusChange("PROCESSING");
  }
  if (shipping.value) {
    statusChange("SHIPPING");
  }
  if (delivered.value) {
    statusChange("DELIVERED");
  }
};

const statusChange = async (status) => {
  const data = new URLSearchParams({});

  data.append("orderId", props.orderId);
  data.append("status", status);

  await $fetch("http://localhost:3333/management/updateorderstatus", {
    method: "POST",
    headers: {},
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response);
      ordermainStore.setStateChange();
    })
    .catch((error) => {
      console.log(error);
    });
};

const status = ref("");

const visible = ref(false);

const checked = ref(false);
</script>

<style>
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto- 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto- 46px) !important;
  }
}
</style>
