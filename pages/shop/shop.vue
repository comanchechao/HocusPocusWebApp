<template>
  <head>
    <title>خرید - هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen from-mainPurple to-darkPurple bg-gradient-to-t">
    <LazyNavbar class="NavbarTrigger"></LazyNavbar>
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
      class="h-full w-screen from-mainPurple to-darkPurple bg-gradient-to-t md:p-10 pt-28 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full lg:px-0 px-7 rounded-sm flex flex-col lg:items-end mt-16"
      >
        <LazySortBy class="Sort"></LazySortBy>
        <div
          dir="rtl"
          class="flex Filter md:grid-flow-row space-y-5 md:grid-cols-4 lg:px-0 px-4 md:place-items-center md:justify-items-center md:gap-5 items-center lg:justify-start space-x-3 flex-wrap lg:space-x-6 w-full lg:w-full h-full lg:h-full py-5 border-t-2 border-mainRed"
        >
          <div class="flex items-center lg:justify-start justify-around w-full">
            <h3
              @click="clearFilters()"
              class="lg:text-md lg:mx-4 cursor-pointer px-2 text-xs lg:px-4 py-1 border-2 border-mainRed rounded-full transition ease-in duration-200 hover:bg-mainRed hover:text-darkPurple text-mainRed"
            >
              پاک کردن فیلتر ها
            </h3>

            <div dir="ltr" class="flex items-center space-x-3">
              <InputSwitch v-model="checked"></InputSwitch>
              <h3 class="lg:text-lg text-sm text-center text-mainRed">
                موجودی کالا
              </h3>
            </div>
          </div>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedRarity"
            :options="rarity"
            optionLabel="name"
            placeholder="کمیابی"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedDesigns"
            :options="designs"
            optionLabel="name"
            placeholder="طرح ها"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedBrands"
            :options="brands"
            optionLabel="name"
            placeholder="برندها"
            :showToggleAll="false"
          >
          </MultiSelect>

          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedCategory"
            :options="categories"
            optionLabel="name"
            placeholder="دسته بندی"
            :showToggleAll="false"
          ></MultiSelect>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedTypes"
            :options="types"
            optionLabel="name"
            class="lg:col-span-1 md:col-span-1 col-span-2"
            placeholder="نوع"
            :showToggleAll="false"
          >
          </MultiSelect>
        </div>
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
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <button
              @click.prevent="getSearch()"
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
          class="h-full LazyCard mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-0 px-1 grid-rows-1 gap-x-10 overscroll-y-scroll gap-4 justify-items-center"
        >
          <div
            v-show="empty && !loading"
            class="flex h-full w-full col-span-4 justify-center items-center"
          >
            <h2
              class="text-mainRed text-3xl my-10 font-light p-6 border-dashed border-mainRed border-4 self-center w-full text-center"
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
        </div>
        <div
          class="w-full LazyCard h-full grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1"
          v-show="searchOn === false"
        >
          <LazyCard
            v-for="product in products"
            :key="product"
            :product="product"
          ></LazyCard>
        </div>

        <div
          class="w-full LazyCard h-full grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1"
          v-show="searchOn === true"
        >
          <LazyCard
            v-show="searchOn"
            v-for="product in searchProducts"
            :key="product"
            :product="product"
          ></LazyCard>
        </div>
        <div class="flex items-center justify-center w-full mt-16">
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
const allProducts = ref();

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
      allProducts.value = response.products;
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

// search function

const search = ref("");
const searchProducts = ref();
const searchOn = ref(false);

const getSearch = async () => {
  const body = new URLSearchParams({
    text: search.value,
  });
  loading.value = true;
  const { data } = await $fetch(`http://localhost:3333/products/search`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    withCredentials: true,
    credentials: "include",
    method: "POST",
    body: body,
  })
    .then(function (response) {
      searchProducts.value = response;
      console.log("search related ", searchProducts.value);
      loading.value = false;
      if (!searchProducts.value.length) {
        empty.value = true;
      } else {
        empty.value = false;
      }
      searchOn.value = true;
    })
    .catch(function (error) {
      console.error(error);
    });
};

// change page param

// constregister filter store

// fitlers

const allFilterItems = ref();
const allFilters = ref();
const categories = ref();
const filterLoading = ref(true);

const filtersOn = ref(false);

const types = ref([]);
const designs = ref([{ name: "کلاسیک" }, { name: "کاستوم" }]);
const rarity = ref([]);
const brands = ref([]);

const getFilters = async () => {
  const { data } = await $fetch("http://localhost:3333/filters", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      allFilters.value = response.filters;
      getFilterItems();
    })
    .catch(function (error) {});
};

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
      categories.value = [];
      allFilterItems.value = response.filters;
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
      filterLoading.value = false;
    })
    .catch(function (error) {});
};

const filterStore = useFilterStore();

const { category, sortBy, discount } = storeToRefs(filterStore);

watch(selectedBrands, (cur, old) => {
  const filteredProducts = products.value.filter((product: any) =>
    selectedBrands.value.includes(product.brand)
  );

  console.log(filteredProducts);
});

watch(selectedTypes, (cur, old) => {
  if (cur.length > 0) {
    filtersOn.value = true;
    const filtered = allProducts.value.filter((product: any) =>
      selectedTypes.value.some((type: any) => type.name === product.type)
    );
    products.value = filtered;
  }
  if (cur.length === 0) {
    products.value = allProducts.value;
  }
});

watch(selectedBrands, (cur, old) => {
  if (cur.length > 0) {
    filtersOn.value = true;
    const filtered = allProducts.value.filter((product: any) =>
      selectedBrands.value.some((brand: any) => brand.name === product.brand)
    );
    products.value = filtered;
  }
  if (cur.length === 0) {
    products.value = allProducts.value;
  }
});

watch(selectedCategory, (cur, old) => {
  if (cur.length > 0) {
    filtersOn.value = true;
    const filtered = allProducts.value.filter((product: any) =>
      selectedCategory.value.some(
        (category: any) => category.name === product.category
      )
    );
    products.value = filtered;
  }
  if (cur.length === 0) {
    products.value = allProducts.value;
  }
});

watch(selectedDesigns, (cur, old) => {
  if (cur.length > 0) {
    filtersOn.value = true;
    const filtered = allProducts.value.filter((product: any) =>
      selectedDesigns.value.some(
        (design: any) => design.name === product.design
      )
    );
    products.value = filtered;
  }
  if (cur.length === 0) {
    products.value = allProducts.value;
  }
});

// clear filters

const clearFilters = function () {
  searchOn.value = false;
  products.value = allProducts.value;
  selectedTypes.value = [];
  selectedBrands.value = [];
  selectedCategory.value = [];
  selectedDesigns.value = [];
};

// watch(
//   [selectedCategory, selectedBrands, selectedDesigns, selectedTypes],
//   (cur, old) => {
//     // if (selectedTypes.value.length === 0) {
//     //   filteredProducts.value = products.value;
//     // }

//     // if (selectedBrands.value.length === 0) {
//     //   filteredProducts.value = products.value;
//     // }
//     console.log("running ");
//     let filteredArray = [];
//     for (let obj of products.value) {
//       for (let filterObj of types.value) {
//         if (obj.type === filterObj.name) {
//           const existingProduct = filteredArray.find(
//             (item) => item.title === obj.title
//           );
//           if (!existingProduct) {
//             filteredArray.push(obj);
//             filteredProducts.value = filteredArray;
//             break;
//           }
//         }
//       }
//     }

//     for (let obj of products.value) {
//       for (let filterObj of categories.value) {
//         if (obj.category === filterObj.name) {
//           const existingProduct = filteredArray.find(
//             (item) => item.title === obj.title
//           );
//           if (!existingProduct) {
//             filteredArray.push(obj);
//             filteredProducts.value = filteredArray;
//             break;
//           }
//         }
//       }
//     }

//     for (let obj of products.value) {
//       for (let filterObj of designs.value) {
//         if (obj.design === filterObj.name) {
//           const existingProduct = filteredArray.find(
//             (item) => item.title === obj.title
//           );
//           if (!existingProduct) {
//             filteredArray.push(obj);
//             filteredProducts.value = filteredArray;
//             break;
//           }
//         }
//       }
//     }

//     for (let obj of products.value) {
//       for (let filterObj of brands.value) {
//         if (obj.brand === filterObj.name) {
//           const existingProduct = filteredArray.find(
//             (item) => item.title === obj.title
//           );
//           if (!existingProduct) {
//             filteredArray.push(obj);
//             filteredProducts.value = filteredArray;
//             break;
//           }
//         }
//       }
//     }

//     console.log(filteredProducts.value, "filtered array");
//   }
// );

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
  getFilters();
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
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
