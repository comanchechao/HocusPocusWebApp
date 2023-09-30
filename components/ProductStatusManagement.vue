<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div
      class="w-full text-center h-96 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">محصولات تخفیف دار</h3>
      <h3 class="text-mainPurple">محصولات پرطرفدار</h3>
      <h3 class="text-mainPurple">محصولات منتخب هفته</h3>
      <h3 class="text-mainPurple">نام کالا</h3>
    </div>

    <LazyProductStatusCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></LazyProductStatusCard>
    <!-- <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard /> -->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useManagementStore } from "~/stores/productManagement";
// register productManagement store

const productManagement = useManagementStore();

const { stateChange } = storeToRefs(productManagement);

watch(stateChange, (cur, old) => {
  getProducts();
});
const loading = ref(false);
const products = ref();

const getProducts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/products", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.products);
      products.value = response.products;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getProducts();
});
</script>

<style></style>
