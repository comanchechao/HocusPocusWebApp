<template>
  <div
    class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
  >
    <LazyVideoOrderInfo></LazyVideoOrderInfo>
    <h3 class="text-darkPurple flex items-center space-x-2">
      <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

      <span>تحویل داده شده</span>
      <LazyChangeStatusDialog />
    </h3>
    <h3 class="text-darkPurple">{{ membership.fullname }}</h3>
    <h3 class="text-mainBrown text-center px-5">آموزش بر زدن ورق</h3>
  </div>
</template>

<script setup>
const props = defineProps(["membership"]);

import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = ref();

dayjs.extend(jalaliday);

onMounted(() => {
  console.log(props.membership);

  date.value = dayjs(props.membership.created_at)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});
</script>
