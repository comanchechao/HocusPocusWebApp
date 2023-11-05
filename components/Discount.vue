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
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          ایجاد تخفیف
        </h2>

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
const props = defineProps(["order"]);
const visible = ref(false);

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
  console.log("this is product quantity ", productQuantity);
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
      console.log(products.value, "product consoled");
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
  console.log(props, " this is props");
});

const checked = ref(false);
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
</style>
