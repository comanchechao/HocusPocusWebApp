<template>
  <div
    v-if="loading"
    class="w-full h-full lg:h-20 py-5 p-10 grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 lg:justify-items-center place-items-center justify-items-center border-b border-mainRed"
  >
    <Skeleton height="2rem" width="10rem" class="mb-2"></Skeleton>
    <Skeleton height="2rem" width="10rem" class="mb-2"></Skeleton
    ><Skeleton height="2rem" width="10rem" class="mb-2"></Skeleton
    ><Skeleton height="2rem" width="10rem" class="mb-2"></Skeleton>
  </div>
  <div
    class="w-full h-full lg:h-20 py-5 p-10 grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 lg:justify-items-center place-items-center justify-items-center border-b border-mainRed"
  >
    <LazyOrderInfoDialog :order="order" />
    <div class="flex items-center justify-end space-x-2">
      <h3 class="text-darkPurple text-sm font-bold">{{ date }}</h3>

      <h3 class="text-darkPurple text-sm lg:hidden flex">تاریخ سفارش</h3>
    </div>
    <h3
      class="text-darkPurple space-x-3 text-md flex md:space-y-0 md:space-x-2 items-center lg:space-y-0 space-y-2 text-center lg:space-x-3"
    >
      <LazyChangeStatusDialog :orderStatus="order.status" :orderId="order.id" />
      <slot name="Status"></slot>
    </h3>
    <div class="flex items-center justify-end space-x-2">
      <h3 class="text-darkPurple text-center text-sm font-bold px-5">
        {{ order.fullname }}
      </h3>
      <h3 class="text-darkPurple text-sm lg:hidden flex">نام خریدار</h3>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = ref();

dayjs.extend(jalaliday);
const props = defineProps(["order"]);

const orderItems = ref(props.order);

onMounted(() => {
  date.value = dayjs(props.order.created_at)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});
</script>
