<template>
  <head>
    <title>مدیریت آموزش</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-mainBrown">
    <LazyNavbar />
    <div
      class="w-full h-full flex flex-col items-center px-5 lg:px-40 py-16 pt-28"
    >
      <div class="flex Bread items-center w-full justify-end space-x-4">
        <h2
          class="text-mainYellow underline text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCoffee :size="20" weight="fill" />

          <span> مدیریت </span>
        </h2>
        <h2
          class="text-mainYellow text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
      <div
        class="flex lg:items-start justify-center items-center Stat1 lg:justify-start w-full flex-col my-9"
      >
        <div
          class="w-full h-auto md:flex-row lg:flex-row flex-col lg:space-y-0 space-y-7 flex items-center justify-around"
        >
          <div
            class="flex flex-col items-center rounded-md shadow-lg border border-mainPink shadow-mainPurple p-6"
          >
            <div class="flex items-center space-x-3 Stat1">
              <h4 class="text-white">تومان</h4>
              <h1 class="lg:text-6xl text-4xl text-mainYellow Text font-bold">
                {{ totalPrice }}
              </h1>
            </div>
            <h3 class="text-white text-lg">اشتراک های های خریداری شده</h3>
          </div>
          <div class="flex items-center flex-col space-y-10">
            <div
              class="w-72 h-32 bg-white Stat2 rounded-xl shadow-lg flex p-4 items-center justify-around"
            >
              <PhVideo class="text-mainPurple" :size="90" weight="fill" />
              <div class="flex flex-col items-center space-y-3">
                <h3 class="text-mainBrown text-md">آموزش های موجود</h3>
                <h1 v-if="!loading" class="text-mainBrown text-5xl font-bold">
                  {{ coursesCount }}
                </h1>
                <ProgressSpinner
                  v-if="loading"
                  style="width: 50px; height: 50px"
                  strokeWidth="8"
                  animationDuration=".5s"
                  aria-label="Custom ProgressSpinner"
                />
              </div>
            </div>
            <LazyVideoManagement :courses="courses" />
            <LazySoldDialog class="Stat2" :records="records" />
          </div>
        </div>
      </div>
      <div class="w-full justify-center my-7 space-x-6 flex items-center">
        <LazyAddVideo class="Product" />
      </div>
      <div
        class="w-full mt-10 lg:mt-0 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <div
          class="w-full flex items-center justify-center lg:flex-row flex-col-reverse space-y-3 lg:space-y-0 lg:justify-end lg:space-x-6 mb-10"
        >
          <LazySubscriptionManagement
            :memberships="memberships"
            class="lg:mt-0 mt-7"
          />
          <h2 class="text-4xl text-mainYellow">اشتراک ها</h2>
        </div>

        <div
          class="w-full h-dialog border-t-8 border-mainYellow bg-white my-10 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div class="Search self-end m-4">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
            </label>
            <div class="relative">
              <input
                dir="rtl"
                v-model="search"
                placeholder="جستجو بر اساس اسم و یا شماره سفارش"
                type="search"
                id="default-search"
                class="block w-96 bg-mainWhite p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <button
                @click.prevent="searchMemberships()"
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
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple">اطلاعات تکمیلی</h3>
            <h3 class="text-mainPurple">وضعیت سفارش</h3>
            <h3 class="text-mainPurple">نام خریدار</h3>
            <h3 class="text-mainPurple">نام کاربر</h3>
          </div>
          <LazySubscribtionItem
            v-show="!showSearch"
            v-for="membership in memberships"
            :key="membership"
            :membership="membership"
          />
          <LazySubscribtionItem
            v-show="showSearch"
            v-for="membership in searchedMemberships"
            :key="membership"
            :membership="membership"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  PhCaretLeft,
  PhCoffee,
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
  PhChartPieSlice,
  PhVideo,
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { useMainManagement } from "~/stores/managementStore";

// register managmentstore

const managementStore = useMainManagement();

const { coursesCount, stateChange, membershipStat } =
  storeToRefs(managementStore);

watch(stateChange, (cur, old) => {
  getCourses();
});
watch(membershipStat, (cur, old) => {
  getMemberships();
});

const userStore = useUserStore();
const { isLogged, isManager } = storeToRefs(userStore);

onMounted(() => {
  setTimeout(() => {
    if (isManager.value === false) {
      navigateTo({
        path: "/learn/learn",
      });
    }
  }, 2000);
});

const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(true);
const courses = ref();

const getCourses = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/management/courses", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      courses.value = response.courses;
      managementStore.setCoursesCount(response.courses.length);
      loading.value = false;
      getMemberships();
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
      getMemberships();
    });
};

const memberships = ref([]);
const totalPrice = ref(0);

const getMemberships = async () => {
  loading.value = true;
  const { data } = await $fetch(
    "http://localhost:3333/management/memberships",
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      memberships.value = response.memberships;
      loading.value = false;
      console.log(response.memberships);
      const sum = response.memberships.reduce(
        (total: number, obj: any) => total + Number(obj.totalPrice),
        0
      );
      totalPrice.value = sum;
      getRecords();
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

// get records

const records = ref([]);

const getRecords = async () => {
  loading.value = true;
  const { data } = await $fetch(
    "http://localhost:3333/payment-records/management/getrecords",
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      loading.value = false;
      records.value = response.records;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

// search function

const search = ref("");
const searchedMemberships = ref([]);
const searchedId = ref([]);

const showSearch = ref(false);

const searchMemberships = () => {
  const regex = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  searchedMemberships.value = memberships.value.filter((membership: any) =>
    regex.test(membership.fullname)
  );

  showSearch.value = true;
};

watch(search, (cur, old) => {
  if (cur === "") {
    showSearch.value = false;
  }
});

onMounted(() => {
  getCourses();
  TM.from(".Bread", { opacity: 0, duration: 1, delay: 0.5 });
  TM.from(".Stat1", { opacity: 0, duration: 1 });
  TM.from(".Stat2", { opacity: 0, duration: 1, stagger: 0.3 });

  TM.from(".Product", { opacity: 0, duration: 0.5 });
});
</script>

<style scoped></style>
