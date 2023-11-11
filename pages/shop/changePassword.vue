<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="w-full h-screen lg:px-28 px-4 flex lg:items-center justify-center"
    >
      <div
        class="lg:h-auto h-dialog lg:space-y-11 w-rem28 bg-darkPurple rounded-md flex items-center flex-col justify-around"
      >
        <div class="flex items-end flex-col space-y-2">
          <label class="text-xl text-mainPink" for="username"
            >رمز عبور جدید</label
          >
          <InputText
            id="username"
            v-model="loginUsername"
            aria-describedby="username-help"
          />
          <small class="text-sm text-mainViolet" id="username-help"
            >رمز عبور جدید خودتون رو وارد کنید</small
          >
        </div>
        <div class="flex items-end flex-col space-y-2">
          <label class="text-xl text-mainPink" for="email"
            >تایید رمز عبور</label
          >
          <InputText
            id="email"
            v-model="loginEmail"
            aria-describedby="username-help"
          />
          <small class="text-sm text-mainViolet" id="username-help">
            رمز عبور خودتون رو وارد کنید</small
          >
        </div>
        <button
          label="Show"
          class="text-xl flex items-center space-x-2 w-24 justify-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
        >
          <span> تایید </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCheckCircle, PhAlien } from "@phosphor-icons/vue";
</script>
