<template>
  <div
    class="h-auto w-full border-mainRed border-t py-3 place-items-center grid grid-cols-4"
  >
    <h3 class="text-darkPurple md:text-md lg:text-base text-sm">
      {{ record.order_id }}
    </h3>
    <h3 class="text-darkPurple md:text-md lg:text-base text-xs">
      <p v-if="!record.status">پرداخت ناموفق</p>
      <p v-if="record.status">پرداخت شده</p>
    </h3>
    <h3 class="text-darkPurple md:text-md lg:text-base text-xs text-center">
      {{ date }}
    </h3>
    <h3 class="text-darkPurple md:text-sm lg:text-sm text-xs text-center px-2">
      {{ record.name }}
    </h3>
  </div>
</template>

<script setup>
import { PhTrash } from "@phosphor-icons/vue";
const props = defineProps(["record"]);
import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = ref();

dayjs.extend(jalaliday);

onMounted(() => {
  date.value = dayjs(props.record.created_at)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});
</script>

<style lang="scss" scoped></style>
