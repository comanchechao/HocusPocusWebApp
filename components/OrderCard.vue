<template>
  <div
    class="w-full h-full lg:h-20 py-5 lg:p-0 p-10 grid grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 lg:justify-items-center place-items-center justify-items-center border-b border-mainRed"
  >
    <LazyOrderInfoDialog :order="order" />
    <div class="flex items-center justify-end space-x-2">
      <h3 class="text-darkPurple text-sm font-bold">دوشنبه 25 تیر</h3>

      <h3 class="text-darkPurple text-sm lg:hidden flex">تاریخ سفارش</h3>
    </div>
    <h3
      class="text-darkPurple space-x-3 flex md:space-y-0 md:space-x-2 items-center lg:space-y-0 space-y-2 text-center lg:space-x-3"
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
const props = defineProps(["order"]);

const orderItems = ref(props.order);

onMounted(() => {
  console.log(props.order.id);
});
</script>
