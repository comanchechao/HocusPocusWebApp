<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-xl flex active:text-darkPurple active:bg-mainRed items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> ورود </span>
      <PhKeyhole :size="25" />
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '30vw', backgroundColor: '#10002b', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#10002b' }"
    >
      <div class="w-full h-full flex items-center p-16 flex-col space-y-10">
        <h2 class="text-6xl neonText">ورود</h2>
        <div class="flex flex-col items-center space-y-4">
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainRed" for="email">ایمیل</label>
            <InputText
              id="email"
              v-model="value"
              aria-describedby="username-help"
            />
            <small class="text-sm text-mainViolet" id="username-help"
              >ایمیل خودتون رو وارد کنید</small
            >
          </div>
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainRed" for="email">رمز عبور</label>
            <InputText
              id="email"
              v-model="value"
              aria-describedby="username-help"
            />
            <small class="text-sm text-mainViolet" id="username-help"
              >رمز عبور خودتون رو وارد کنید</small
            >
          </div>
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <button
            label="Show"
            @click="visible = false"
            class="text-xl flex items-center space-x-2 px-10 py-2 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-mainViolet hover:border-mainRed rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
          >
            <span> ورود </span>
            <PhKeyhole :size="25" />
          </button>
          <SignUp />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhKeyhole } from "@phosphor-icons/vue";
const visible = ref(false);
</script>
