<template>
  <div class="flex justify-center">
    <div
      @click="visible = true"
      class="w-72 h-32 bg-white transition text-darkPurple ease-in duration-200 hover:bg-mainYellow rounded-xl cursor-pointer shadow-lg shadow-mainRed flex p-4 items-center justify-around"
    >
      <PhMoney class="text-mainRed" :size="70" weight="fill" />
      <div class="flex flex-col items-center space-y-3">
        <h3 class="text-mainPurple text-sm">تراکنش ها</h3>
        <h1 class="text-darkPurple text-5xl font-bold">{{ records.length }}</h1>
      </div>
    </div>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '60vw', backgroundColor: '#150531', height: '80vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          لیست تراکنش ها
        </h2>
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
              @click.prevent="searchTransaction()"
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
            class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-4"
          >
            <h3 class="text-mainPurple text-sm">شماره سفارش</h3>
            <h3 class="text-mainPurple text-sm">وضعیت فروش</h3>
            <h3 class="text-mainPurple text-sm">تاریخ ثبت</h3>
            <h3 class="text-mainPurple text-sm">نام خریدار</h3>
          </div>

          <LazySoldCard
            v-show="!showSearch"
            v-for="record in records"
            :key="record.id"
            :record="record"
          />
          <LazySoldCard
            v-show="showSearch"
            v-for="record in searchedTranactions"
            :key="record.id"
            :record="record"
          />
          <LazySoldCard
            v-show="showSearch"
            v-for="record in searchedId"
            :key="record.id"
            :record="record"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhMoney } from "@phosphor-icons/vue";
const props = defineProps(["records"]);
const visible = ref(false);
const search = ref("");
const searchedTranactions = ref([]);
const searchedId = ref([]);

const showSearch = ref(false);

const searchTransaction = () => {
  const regex = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  const regexId = new RegExp(Number(search.value));
  searchedTranactions.value = props.records.filter((record) =>
    regex.test(record.name)
  );
  searchedId.value = props.records.filter((record) => regexId.test(record.order_id));
  console.log(searchedTranactions.value);
  showSearch.value = true;
};

watch(search, (cur, old) => {
  if (cur === "") {
    showSearch.value = false;
  }
});
</script>

<style scoped></style>
