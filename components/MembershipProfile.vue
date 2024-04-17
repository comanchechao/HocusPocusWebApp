<template>
  <div
    class="lg:h-32 h-full w-full flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-around lg:space-x-10"
  >
    <div
      class="flex items-center flex-col justify-center space-y-3 w-full h-full"
    >
      <div
        class="w-full h-full hidden lg:grid grid-cols-3 place-items-center bmembership-b bmembership-mainRed"
      >
        <h2 class="text-mainPurple text-md">اطلاعات تکمیلی</h2>
        <h2 class="text-mainPurple text-md">تاریخ خرید</h2>
        <h2 class="text-mainPurple text-md">نام کالا</h2>
      </div>
      <div
        class="w-full h-full flex flex-col-reverse items-center lg:grid lg:grid-cols-3 lg:place-items-center text-center text-darkPurple"
      >
        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <LazyVideoOrderInfo :membership="membership"></LazyVideoOrderInfo>
          <h2 class="text-md lg:hidden">اطلاعات تکمیلی</h2>
        </div>
        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <h2 class="text-md">{{ date }}</h2>
          <h2 class="text-md lg:hidden">تاریخ خرید</h2>
        </div>

        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <h2 class="text-sm">{{ membership.fullname }}</h2>
          <h2 class="text-md lg:hidden">نام خریدار</h2>
        </div>
      </div>
    </div>
    <div class="lg:h-full h-auto w-24 lg:w-auto bg-white flex items-center">
      <!-- <img
        src="../assets/images/Psychonauts.webp"
        class="object-contain h-36 lg:h-full w-full"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = ref();

dayjs.extend(jalaliday);
const props = defineProps(["membership"]);

onMounted(() => {
  date.value = dayjs(props.membership.created_at)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});
</script>

<style lang="scss" scoped></style>
