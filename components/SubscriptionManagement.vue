<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-md flex active:text-darkPurple active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
    >
      <span> مدیریت اشتراک ها </span>
      <PhVideo />
    </button>
    <Dialog
      v-model:visible="visible"
      :responsive="['md', 'lg', 'xl']"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col py-7">
        <h2 class="text-4xl text-mainYellow">مدیریت سفارش ها</h2>
        <div
          class="w-full h-full bg-white my-10 flex flex-col rounded-md text-xs lg:text-lg"
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
            <h3 class="text-mainPurple">تاریخ سفارش</h3>
            <h3 class="text-mainPurple">وضعیت سفارش</h3>
            <h3 class="text-mainPurple">نام خریدار</h3>
            <h3 class="text-mainPurple">نام کاربر</h3>
          </div>
          <LazySubscribtionItem
            v-show="!showSearch"
            v-for="membership in memberships"
            :key="membership.id"
            :membership="membership"
          />
          <LazySubscribtionItem
            v-show="showSearch"
            v-for="membership in searchedMemberships"
            :key="membership.id"
            :membership="membership"
          />
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <button
            label="Show"
            @click="visible = false"
            class="text-xl flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-mainViolet hover:border-mainYellow rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
          >
            <span> تایید تغییرات </span>
            <PhKeyhole :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["memberships"]);
const visible = ref(false);

const search = ref("");
const searchedMemberships = ref([]);
const searchedId = ref([]);

const showSearch = ref(false);

const searchMemberships = () => {
  const regex = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  const regexUsername = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  searchedMemberships.value = props.memberships.filter((membership) =>
    regex.test(membership.fullname)
  );

  showSearch.value = true;
};

watch(search, (cur, old) => {
  if (cur === "") {
    showSearch.value = false;
  }
});
</script>

<style></style>
