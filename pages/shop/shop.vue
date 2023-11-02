<template>
  <div class="h-full w-screen from-mainPurple to-darkPurple bg-gradient-to-t">
    <LazyNavbar></LazyNavbar>

    <div
      class="h-full w-screen from-mainPurple to-darkPurple bg-gradient-to-t md:p-10 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full border-mainRed rounded-sm flex flex-col items-end"
      >
        <LazySortBy class="Sort"></LazySortBy>
        <LazyFilters class="lg:flex Filter md:flex hidden"></LazyFilters>
        <div
          class="h-full my-14 LazyCard w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:px-0 px-7 grid-rows-1 gap-x-10 overscroll-y-scroll gap-4 justify-items-center"
        >
          <Skeleton v-if="loading" width="18rem" height="25rem"></Skeleton>
          <Skeleton
            v-if="loading"
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
          <Skeleton
            v-if="loading"
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
          <Skeleton
            v-if="loading"
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
          <LazyCard
            v-if="!loading"
            v-show="!filteredProducts"
            v-for="product in products"
            :key="product"
            :product="product"
          ></LazyCard>
          <LazyCard
            v-if="!loading"
            v-show="filteredProducts"
            v-for="product in filteredProducts"
            :key="product"
            :product="product"
          ></LazyCard>
          <!-- <LazyCard></LazyCard>
          <LazyCard></LazyCard>
          <LazyCard></LazyCard>
          <LazyCard></LazyCard> <LazyCard></LazyCard> <LazyCard></LazyCard>
          <LazyCard></LazyCard>
          <LazyCard></LazyCard> -->
        </div>
        <div class="flex items-center justify-center w-full">
          <Paginator
            class="Paginator opacity-0"
            :rows="10"
            :totalRecords="120"
          ></Paginator>
        </div>
      </div>
    </div>

    <LazyFooter></LazyFooter>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../../stores/productStore";
import { useFilterStore } from "../../stores/filtersStore";
import { storeToRefs } from "pinia";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
const products = ref();
const filteredProducts = ref();
const filterOp = ref();
const loading = ref(true);
// constregister filter store

const filterStore = useFilterStore();

const { brands, types, designs, category, sortBy } = storeToRefs(filterStore);

watch([types, category, brands, designs], (cur, old) => {
  if (types.value.length === 0) {
    filteredProducts.value = products.value;
  }

  if (brands.value.length === 0) {
    filteredProducts.value = products.value;
  }

  let filteredArray = [];
  for (let obj of products.value) {
    for (let filterObj of types.value) {
      if (obj.type === filterObj.name) {
        const existingProduct = filteredArray.find(
          (item) => item.title === obj.title
        );
        if (!existingProduct) {
          filteredArray.push(obj);
          filteredProducts.value = filteredArray;
          break;
        }
      }
    }
  }

  for (let obj of products.value) {
    for (let filterObj of category.value) {
      if (obj.category === filterObj.name) {
        const existingProduct = filteredArray.find(
          (item) => item.title === obj.title
        );
        if (!existingProduct) {
          filteredArray.push(obj);
          filteredProducts.value = filteredArray;
          break;
        }
      }
    }
  }

  for (let obj of products.value) {
    for (let filterObj of designs.value) {
      if (obj.design === filterObj.name) {
        const existingProduct = filteredArray.find(
          (item) => item.title === obj.title
        );
        if (!existingProduct) {
          filteredArray.push(obj);
          filteredProducts.value = filteredArray;
          break;
        }
      }
    }
  }

  for (let obj of products.value) {
    for (let filterObj of brands.value) {
      if (obj.brand === filterObj.name) {
        const existingProduct = filteredArray.find(
          (item) => item.title === obj.title
        );
        if (!existingProduct) {
          filteredArray.push(obj);
          filteredProducts.value = filteredArray;
          break;
        }
      }
    }
  }
});

watch(sortBy, (cur, old) => {
  if (sortBy.value === "lowest") {
    filteredProducts.value = products.value.sort(
      (a: any, b: any) => Number(a.price) - Number(b.price)
    );
  }

  if (sortBy.value === "highest") {
    filteredProducts.value = products.value.sort(
      (a: any, b: any) => Number(b.price) - Number(a.price)
    );
  }
});

// register product store
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
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
  TM.from(".Sort", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Filter", { opacity: 0, duration: 1 });

  TM.from(".LazyCard", { opacity: 0, duration: 1.5, stagger: 0.4 });
  TM.to(".Paginator", { opacity: 1, duration: 1 });
});
</script>
<script></script>
<style>
.p-paginator {
  background-color: transparent;
  color: white;
}

.p-paginator .p-paginator-pages .p-paginator-page {
  color: white;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background-color: white;
  color: #150531;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background-color: gray;
  color: white;
}
</style>
