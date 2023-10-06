<template>
  <div
    class="w-full h-full lg:h-20 py-5 grid grid-cols-4 place-items-center border-b border-mainRed"
  >
    <LazyOrderInfoDialog :orderId="order.id" />
    <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
    <h3
      class="text-darkPurple flex lg:flex-row md:flex-row md:space-y-0 md:space-x-2 flex-col items-center lg:space-y-0 space-y-2 text-center lg:space-x-3"
    >
      <slot name="Status"></slot>
      <LazyChangeStatusDialog />
    </h3>
    <h3 class="text-darkPurple text-center px-5">
      Joker and the Thief: Blood Red Edition Playing Cards
    </h3>
  </div>
</template>

<script setup>
const props = defineProps(["order"]);

const orderItems = ref(props.order);

onMounted(() => {
  console.log(props.order.id);
});
</script>
