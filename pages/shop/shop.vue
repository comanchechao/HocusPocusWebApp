<template>
  <head>
    <title>خرید - هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen from-mainPurple to-darkPurple bg-gradient-to-t">
    <LazyNavbar></LazyNavbar>
    <div
      class="LoadingDiv h-screen w-screen flex items-center justify-center bg-darkPurple"
    >
      <ProgressSpinner
        class="bg-darkPurple"
        style="width: 80px; height: 80px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <div
      class="h-full NavbarTrigger w-screen from-mainPurple to-darkPurple bg-gradient-to-t md:p-10 pt-28 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full lg:px-0 px-7 rounded-sm flex flex-col lg:items-end"
      >
        <LazySortBy class="Sort"></LazySortBy>
        <div
          dir="rtl"
          class="lg:flex Filter grid grid-flow-row-dense md:grid-flow-row md:grid-cols-4 grid-cols-2 lg:px-0 px-4 place-items-center justify-items-center gap-5 lg:items-center lg:justify-start lg:space-x-6 w-full lg:w-full h-full lg:h-full py-5 border-t-2 border-mainRed"
        >
          <h3
            @click="clearFilters()"
            class="lg:text-md cursor-pointer px-2 text-xs lg:px-4 py-1 border-2 border-mainRed rounded-full transition ease-in duration-200 hover:bg-mainRed hover:text-darkPurple text-mainRed"
          >
            پاک کردن فیلتر ها
          </h3>

          <div dir="ltr" class="flex items-center space-x-3">
            <InputSwitch v-model="checked"></InputSwitch>
            <h3 class="lg:text-lg text-sm text-center text-mainRed">
              موجودی کالا
            </h3>
          </div>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedRarity"
            :options="rarity"
            optionLabel="name"
            placeholder="کمیابی"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedDesigns"
            :options="designs"
            optionLabel="name"
            placeholder="طرح ها"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedBrands"
            :options="brands"
            optionLabel="name"
            placeholder="برندها"
            :showToggleAll="false"
          >
          </MultiSelect>

          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedCategory"
            :options="categories"
            optionLabel="name"
            placeholder="دسته بندی"
            :showToggleAll="false"
          ></MultiSelect>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedTypes"
            :options="types"
            optionLabel="name"
            class="lg:col-span-1 md:col-span-1 col-span-2"
            placeholder="نوع"
            :showToggleAll="false"
          >
          </MultiSelect>
        </div>
        <LazySearchBar class="Search"></LazySearchBar>

        <div
          class="h-full my-14 LazyCard w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-0 px-1 grid-rows-1 gap-x-10 overscroll-y-scroll gap-4 justify-items-center"
        >
          <div class="flex absolute w-full justify-center items-center">
            <h2
              class="text-white self-center w-full font-bold text-center"
              v-show="empty && !loading"
            >
              محصولی برای نمایش وجود ندارد
            </h2>
          </div>
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
            v-model:first="page"
            class="Paginator opacity-0"
            :rows="1"
            :totalRecords="120"
          ></Paginator>
        </div>
      </div>
    </div>

    <LazyFooter></LazyFooter>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from "../../stores/filtersStore";
import { storeToRefs } from "pinia";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
const products = ref();
const filteredProducts = ref();
const filterOp = ref();
const loading = ref(true);
const checked = ref(false);
const selectedTypes = ref();
const selectedBrands = ref();
const selectedRarity = ref();
const selectedDesigns = ref();
const selectedCategory = ref();
const router = useRouter();
const route = useRoute();

// pagination\
const page = ref(Number(route.query.page) - 1);
const currentPage = ref(route.query.page);

watch(page, (cur, old) => {
  $gsap.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
  router.push({ path: "/shop/shop", query: { page: page.value + 1 } });
  console.log(Number(route.query.page), " this should be page ");
});

watch(currentPage, (cur, old) => {
  getPagination();
  console.log("show me this", cur);
});

// watch(
//   () => route.query.page,
//   async (currentPage) => {
//     console.log("watch" + currentPage);
//     page.value = Number(route.query.page) + 1;
//   },
//   {
//     immediate: true,
//   }
// );

watch(page, (cur, old) => {
  getPagination();

  console.log(page.value);
});

const empty = ref(false);

const getPagination = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/products/products/${page.value}`,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      filterStore.clearFilters();
      products.value = response.products;
      loading.value = false;
      if (!products.value.length) {
        empty.value = true;
      } else {
        empty.value = false;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

// change page param

// constregister filter store

const filterStore = useFilterStore();

const { brands, types, designs, category, sortBy, discount } =
  storeToRefs(filterStore);

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

watch(discount, (cur, old) => {
  getDiscounts();
});

// register product store
const getProducts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/products", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      products.value = response.products;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getDiscounts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/products/discounts", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      filteredProducts.value = response.products;
      console.log(response.products);
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getPagination();
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
  TM.to(".LoadingDiv", {
    display: "none",
  });
  TM.from(".Sort", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Filter", { opacity: 0, duration: 1 });
  TM.from(".Search", { opacity: 0, duration: 1 });

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
.p-multiselect {
  font-family: "IranSans";
  border: 4px #090025;
  border-radius: 0rem;
  color: #090025;
  padding: 0px 0px;
  flex-direction: row-reverse;
}
</style>
