<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar></LazyNavbar>

    <div
      class="h-full w-screen bg-darkPurple md:p-10 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full border-mainRed rounded-sm flex flex-col items-start"
      >
        <LazySortBy class="Sort"></LazySortBy>
        <LazyFilters class="lg:flex Filter md:flex hidden"></LazyFilters>
        <div
          class="h-full LazyCard w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 overscroll-y-scroll gap-4 justify-items-center"
        >
          <LazyCard
            v-show="!filteredProducts"
            v-for="product in products"
            :key="product"
            :product="product"
          ></LazyCard>
          <LazyCard
            v-show="filteredProducts"
            v-for="product in filteredProducts"
            :key="product"
            :product="product"
          ></LazyCard>
          <!-- <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" /> -->
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

// register filter store

const filterStore = useFilterStore();

const { brands, types } = storeToRefs(filterStore);

watch([types, brands], (cur, old) => {
  console.log(cur, "here is the shopping page for those who are lost");
  console.log(products.value);
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
    for (let filterObj of brands.value) {
      console.log("fied");
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

watch(filterOp, (cur, old) => {
  console.log(cur, "cur");
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

const loading = ref(false);

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
