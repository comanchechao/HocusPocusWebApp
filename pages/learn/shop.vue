<template>
  <head>
    <title>اشتراک - هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-mainBrown">
    <LazyNavbar></LazyNavbar>

    <div
      class="h-full w-screen bg-mainBrown md:p-10 pt-28 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full border-mainYellow rounded-sm flex flex-col items-end"
      >
        <LazySortBy class="Sort"></LazySortBy>
        <div
          class="lg:h-full h-dialog my-14 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4 lg:px-14 gap-10 justify-items-center"
        >
          <Skeleton v-if="loading" width="35rem" height="25rem"></Skeleton>

          <Skeleton
            v-if="loading"
            class="lg:flex hidden"
            width="35rem"
            height="25rem"
          ></Skeleton>
          <Skeleton
            v-if="loading"
            class="lg:flex hidden"
            width="35rem"
            height="25rem"
          ></Skeleton>
          <LazyVideoCard
            v-if="!loading"
            v-for="course in courses"
            :key="course.id"
            :course="course"
            class=" "
          />
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
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from "../../stores/filtersStore";
import { storeToRefs } from "pinia";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const filterStore = useFilterStore();

const { category, sortBy, discount } = storeToRefs(filterStore);

const loading = ref(true);
const courses = ref();
const allCourses = ref();

const getCourses = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/videos", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      courses.value = response.courses;
      allCourses.value = response.courses;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

// pagination\

const router = useRouter();
const route = useRoute();
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
  router.push({ path: "/learn/shop", query: { page: page.value + 1 } });
  console.log(Number(route.query.page), " this should be page ");
});

watch(currentPage, (cur, old) => {
  // getPagination();
  // console.log("show me this", cur);
});

watch(sortBy, (cur, old) => {
  if (sortBy.value === "lowest") {
    courses.value = allCourses.value.sort(
      (a: any, b: any) => Number(a.price) - Number(b.price)
    );
  }

  if (sortBy.value === "highest") {
    courses.value = allCourses.value.sort(
      (a: any, b: any) => Number(b.price) - Number(a.price)
    );
  }
});

const getDiscounts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/videos/discounts", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      courses.value = response.products;
      console.log(response.products);
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getCourses();
  TM.from(".Sort", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Search", { opacity: 0, duration: 1 });

  TM.from(".VideoCard", { opacity: 0, duration: 1.5, stagger: 0.4 });
  TM.to(".Paginator", { opacity: 1, duration: 1 });
});
</script>
<style>
.p-paginator {
  background-color: transparent;
  color: #170800;
}

.p-paginator .p-paginator-pages .p-paginator-page {
  color: #e9e7e6;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background-color: #f2edeb;
  color: #150531;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background-color: #f36b31;
  color: #150531;
}
</style>
