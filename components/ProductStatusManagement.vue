<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div class="Search p-5 flex justify-end">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium items-end text-gray-900 sr-only dark:text-white"
      >
      </label>
      <div class="relative">
        <input
          v-model="search"
          type="search"
          id="default-search"
          class="block w-96 bg-mainWhite p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <button
          @click.prevent="searchProduct()"
          type="submit"
          class="text-white top-0 absolute bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          جستجو
        </button>
        <div
          class="absolute inset-y-0 end-0 flex pr-4 items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      class="w-full text-center h-20 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">محصولات تخفیف دار</h3>
      <h3 class="text-mainPurple">محصولات پرطرفدار</h3>
      <h3 class="text-mainPurple">محصولات منتخب هفته</h3>
      <h3 class="text-mainPurple">نام کالا</h3>
    </div>

    <LazyProductStatusCard
      v-show="!showSearch"
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></LazyProductStatusCard>

    <LazyProductStatusCard
      v-show="showSearch"
      v-for="product in searchedProduct"
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
const props = defineProps(["products"]);

const search = ref("");
const searchedProduct = ref([]);

const showSearch = ref(false);

const searchProduct = () => {
  const regex = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  searchedProduct.value = props.products.filter((product) =>
    regex.test(product.title)
  );
  console.log(searchedProduct.value);
  showSearch.value = true;
};

watch(search, (cur, old) => {
  if (cur === "") {
    showSearch.value = false;
  }
});

// register productManagement store

const productManagement = useManagementStore();

const { stateChange } = storeToRefs(productManagement);

watch(stateChange, (cur, old) => {
  getProducts();
});
const loading = ref(false);

const getProducts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/products", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      products.value = response.products;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};
</script>

<style></style>
