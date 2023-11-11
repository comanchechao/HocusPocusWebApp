<template>
  <div class="h-full w-screen bg-mainBrown">
    <LazyNavbar />
    <div class="w-full h-full flex flex-col items-center px-5 lg:px-40 py-16">
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
                221,450,88
              </h1>
            </div>
            <h3 class="text-white text-lg">اشتراک های های خریداری شده</h3>
          </div>
          <div class="flex items-center flex-col space-y-10">
            <div
              class="w-72 h-32 bg-white Stat2 rounded-xl shadow-lg shadow-mainYellow flex p-4 items-center justify-around"
            >
              <PhVideo class="text-mainYellow" :size="90" weight="fill" />
              <div class="flex flex-col items-center space-y-3">
                <h3 class="text-mainBrown text-md">آموزش های موجود</h3>
                <h1 class="text-mainBrown text-5xl font-bold">
                  {{ coursesCount }}
                </h1>
              </div>
            </div>
            <LazyVideoManagement :courses="courses" />
          </div>
        </div>
      </div>
      <div class="w-full justify-center my-7 space-x-6 flex items-center">
        <LazyAddVideo class="Product" />
      </div>
      <div
        class="w-full mt-10 lg:mt-0 h-full lg:h-dialog flex flex-col items-end space-y-6"
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
          class="w-full h-auto border-t-8 border-mainYellow bg-white my-10 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple">اطلاعات تکمیلی</h3>
            <h3 class="text-mainPurple">وضعیت سفارش</h3>
            <h3 class="text-mainPurple">نام خریدار</h3>
            <h3 class="text-mainPurple">نام اشتراک</h3>
          </div>
          <LazySubscribtionItem
            v-for="membership in memberships"
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

const { coursesCount, stateChange } = storeToRefs(managementStore);

watch(stateChange, (cur, old) => {
  getCourses();
});

const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(false);
const courses = ref();

const getCourses = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/management/courses", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.courses);
      courses.value = response.courses;
      managementStore.setCoursesCount(response.courses.length);
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const memberships = ref();

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
      console.log(response.memberships, "watch this");
      memberships.value = response.memberships;
      loading.value = false;
      const sum = response.orders.reduce(
        (total: number, obj: any) => total + Number(obj.totalPrice),
        0
      );

      response.memberships.forEach((order) => {
        console.log(
          dayjs(order.created_at)
            .calendar("jalali")
            .locale("en")
            .format("DD MMMM YYYY")
        );
      });
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getCourses();
  getMemberships();
  TM.from(".Bread", { opacity: 0, duration: 1, delay: 0.5 });
  TM.from(".Stat1", { opacity: 0, duration: 1 });
  TM.from(".Stat2", { opacity: 0, duration: 1, stagger: 0.3 });

  TM.from(".Product", { opacity: 0, duration: 0.5 });
});
</script>

<style scoped></style>
