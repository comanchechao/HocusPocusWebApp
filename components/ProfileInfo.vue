<template>
  <div class="h-full w-full flex items-center justify-center">
    <div
      class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-20 my-10 lg:my-0 flex items-end text-right justify-center space-y-7 lg:space-y-0 flex-col"
    >
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class=""
        >
          {{ data.city }}
        </h2>
        <h2 class="text-mainPurple">شهر</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          {{ data.region }}
        </h2>
        <h2 class="text-mainPurple">استان</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          {{ data.phonenumber }}
        </h2>
        <h2 class="text-mainPurple">شماره تلفن</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          {{ data.fullname }}
        </h2>
        <h2 class="text-mainPurple">نام و نام خانوادگی</h2>
      </div>
      <div class="flex items-center justify-center space-x-6 col-span-2">
        <div
          class="lg:text-xl text-lg flex items-center justify-center space-x-2 w-full"
        >
          <h2
            :class="{
              'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            {{ data.address }}
          </h2>
          <h2 class="text-mainPurple">آدرس کامل</h2>
        </div>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          {{ data.email }}
        </h2>
        <h2 class="text-mainPurple">ایمیل</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          {{ data.postalCode }}
        </h2>
        <h2 class="text-mainPurple">کد پستی</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useProfileStore } from "../stores/profileStore";

// register store profile

const profileStore = useProfileStore();

const { submitted, stateChange } = storeToRefs(profileStore);

watch(stateChange, (cur, old) => {
  getProfile();
});

watch(submitted, (current, old) => {
  profileStore.setSubmit();
});

// profile data

const data = ref({});

onMounted(() => {
  getProfile();
});

const getProfile = async () => {
  await $fetch("http://localhost:3333/user/profileinfo", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  }).then((response, error) => {
    data.value = response.data;
    console.log(response);
    console.log(error);
  });
};
</script>
<style></style>
