<template>
  <div class="flex justify-center">
    <div
      @click="visible = true"
      class="w-72 h-32 bg-white transition text-darkPurple ease-in duration-200 hover:bg-mainYellow rounded-xl cursor-pointer shadow-lg shadow-mainRed flex p-4 items-center justify-around"
    >
      <PhStack class="text-mainRed" :size="60" weight="fill" />
      <div class="flex flex-col items-center space-y-3">
        <h3 class="text-mainPurple text-sm">مجموع کالاها در انبار</h3>
        <h1 v-show="productsCount" class="text-5xl font-bold">
          {{ productsCount }}
        </h1>
        <ProgressSpinner
          v-show="!productsCount"
          style="width: 50px; height: 50px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
      </div>
    </div>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '80vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          کالاهای موجود در انبار
        </h2>
        <div class="Search">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
          </label>
          <div class="relative">
            <input
              dir="rtl"
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
            ></div>
          </div>
        </div>
        <div
          class="w-full h-full bg-white rounded-md overflow-y-scroll lg:px-11 md:px-14"
        >
          <div
            class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-6"
          >
            <h3 class="text-mainPurple text-sm">ویرایش</h3>
            <h3 class="text-mainPurple text-sm">تخفیف</h3>
            <h3 class="text-mainPurple text-sm">تعداد کالا</h3>
            <h3 class="text-mainPurple text-sm">تاریخ ورود</h3>
            <h3 class="text-mainPurple text-sm">نام کالا</h3>
            <h3 class="text-mainPurple text-sm">انتخاب</h3>
          </div>

          <LazyAvailableProductCard
            v-show="!showSearch"
            :categories="categories"
            :types="types"
            :brands="brands"
            :rarity="rarity"
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
          <LazyAvailableProductCard
            v-show="showSearch"
            :categories="categories"
            :types="types"
            :brands="brands"
            :rarity="rarity"
            v-for="product in searchedProduct"
            :key="product.id"
            :product="product"
          />

          <!-- <LazyAvailableProductCard /> <LazyAvailableProductCard />
          <LazyAvailableProductCard />
          <LazyAvailableProductCard />
          <LazyAvailableProductCard /> <LazyAvailableProductCard /> -->
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhStack } from "@phosphor-icons/vue";
import { useMainManagement } from "~/stores/managementStore";
import { storeToRefs } from "pinia";
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

// register mainManagement store

const mainManagement = useMainManagement();

const { productsCount } = storeToRefs(mainManagement);

const visible = ref(false);

onMounted(() => {
  getFilterItems();
});

// getting filters

const categories = ref([]);
const rarity = ref([]);
const types = ref([]);
const brands = ref([]);

const getFilterItems = async () => {
  const { data } = await $fetch("http://localhost:3333/filters/filteritems", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      types.value = [];
      brands.value = [];
      rarity.value = [];
      categories.value = [];
      response.filters.forEach((item) => {
        if (item.filter_id === 2) {
          categories.value.push(item);
        }
        if (item.filter_id === 4) {
          brands.value.push(item);
        }
        if (item.filter_id === 3) {
          rarity.value.push(item);
        }
        if (item.filter_id === 1) {
          types.value.push(item);
          console.log(types.value);
        }
      });
    })
    .catch(function (error) {});
};
</script>

<style>
.p-dialog .p-dialog-content {
  padding: 0;
}
</style>
