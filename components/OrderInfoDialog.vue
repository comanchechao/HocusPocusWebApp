<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-sm flex active:text-mainRed active:bg-darkPurple items-center p-1 lg:px-4 px-2 lg:py-2 rounded-full transition duration-300 ease-in-out bg-mainPink hover:bg-darkPurple hover:text-mainPink text-darkPurple"
    >
      <span class=" ">اطلاعات سفارش</span>
      <PhInfo class="lg:ml-1" weight="fill" :size="23" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '50vw', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
    >
      <div
        class="h-full w-full flex flex-col space-y-4 items-center justify-center p-3 bg-mainWhite"
      >
        <div class="flex items-center justify-center w-full h-full p-2">
          <div
            class="w-full h-full grid grid-cols-2 place-items-center gap-3 text-darkPurple"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="flex items-center justify-end space-x-2 w-full col-span-2"
            >
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ product.quantity }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">تعداد کالا</h2>
              <h2
                class="text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ product.product.title }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">نام کالا</h2>
            </div>
            <div
              class="flex items-center justify-end space-x-2 w-full col-span-2"
            >
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md text-right"
              >
                {{ order.adderss }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">آدرس</h2>
            </div>

            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ order.phone_number }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">شماره تلفن</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ order.fullname }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">نام خریدار</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ order.city }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">شهر</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ order.province }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">استان</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ date }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">تاریخ خرید</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                v-show="order.payment === false"
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                پرداخت نشده
              </h2>
              <h2
                v-show="order.payment === true"
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                پرداخت شده
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">وضعیت سفارش</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 space-x-2 border-dashed border-mainPink rounded-md"
              >
                <span>(تومان)</span>
                <span> {{ order.totalPrice }} </span>
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">مجموع قیمت</h2>
            </div>
            <div class="flex items-center justify-end space-x-2 w-full">
              <h2
                class="lg:text-md md:text-md text-sm p-2 border-2 border-dashed border-mainPink rounded-md"
              >
                {{ products.length }}
              </h2>
              <h2 class="lg:text-md md:text-md text-sm">تعداد کالا</h2>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhInfo, PhCheckCircle } from "@phosphor-icons/vue";
const props = defineProps(["order"]);
const visible = ref(false);

import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = ref();

dayjs.extend(jalaliday);

onMounted(() => {
  date.value = dayjs(props.order.created_at)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});

const loading = ref(true);
const orderItems = ref();

watch(orderItems, (cur, old) => {
  let toArray = cur[0].items.split(" ");
});

const getOrderItems = async () => {
  const body = new URLSearchParams({
    orderId: props.order.id,
  });

  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/management/orderitems", {
    method: "Post",
    headers: {},
    credentials: "include",
    body: body,
    withCredentials: true,
  })
    .then(function (response) {
      orderItems.value = response.orderItems;
      loading.value = false;
      if (Array.isArray(response.orderItems[0].items)) {
        response.orderItems[0].items.forEach((itemId) => {
          if (itemId) {
            getProduct(itemId.split(",")[0], itemId.split(",")[1]);
          }
        });
      } else {
        getProduct(
          response.orderItems[0].items.split(",")[0],
          response.orderItems[0].items.split(",")[1]
        );
      }
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const products = ref([]);

const getProduct = async (productId, productQuantity) => {
  loading.value = true;
  const { data } = await $fetch(`http://localhost:3333/products/${productId}`, {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      products.value.push({
        product: response.product,
        quantity: productQuantity,
      });
      loading.value = false;
      // if (response.product) {
      //   getProductImage();
      // }
    })
    .catch(function (error) {
      console.error(error);
    });
  loading.value = false;
};
onMounted(() => {
  getOrderItems();
});

const checked = ref(false);
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f9fa;
}
</style>
