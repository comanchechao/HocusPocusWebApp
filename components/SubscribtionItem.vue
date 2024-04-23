<template>
  <div
    class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
  >
    <LazyVideoOrderInfo :membership="membership"></LazyVideoOrderInfo>
    <h3 class="text-darkPurple flex items-center space-x-2">
      <span v-show="membership.status === 'PROCESSING'">درحال پردازش</span>
      <PhPackage
        v-show="status === 'PROCESSING'"
        class="text-mainYellow"
        :size="25"
        weight="fill"
      />
      <span v-show="membership.status === 'SHIPPING'">ارسال شده</span>
      <PhAirplaneTilt
        v-show="status === 'SHIPPING'"
        class="text-blue-700"
        :size="25"
        weight="fill"
      />
      <span v-show="membership.status === 'DELIVERED'">تحویل داده شده</span>
      <PhCheckCircle
        v-show="status === 'DELIVERED'"
        class="text-green-500"
        :size="25"
        weight="fill"
      />

      <LazyChangeStatusMembership
        :status="membership.status"
        :membershipId="membership.id"
      />
    </h3>
    <h3 class="text-darkPurple">{{ membership.fullname }}</h3>
    <h3 class="text-mainBrown text-center px-5">{{ username }}</h3>
  </div>
</template>

<script setup>
const props = defineProps(["membership"]);
import {
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
  PhX,
} from "@phosphor-icons/vue";

import dayjs from "dayjs";
import jalaliday from "jalaliday";

const username = ref();
const status = ref();

const getusername = async () => {
  const data = new URLSearchParams({
    userId: props.membership.user_id,
  });

  await $fetch("http://localhost:3333/user/username", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      username.value = response.username.username;
    })
    .catch((error) => {
      console.log(error);
    });
};
const date = ref();

dayjs.extend(jalaliday);

onMounted(() => {
  status.value = props.membership.status;
  getusername();
  date.value = dayjs(props.membership.created_at)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});
</script>
