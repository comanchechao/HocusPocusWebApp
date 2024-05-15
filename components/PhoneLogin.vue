<template>
  <div class="card flex justify-center">
    <button
      @click="visible = true"
      class="text-sm text-mainRed px-3 flex items-center space-x-2 w-full justify-center py-1 transition duration-150 ease-in-out border-b-2 border-mainYellow hover:border-mainRed rounded-lg hover:shadow-darkPurple hover:text-mainRed"
    >
      ورود با شماره همراه
      <PhPhone class="ml-2" :size="25" />
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full justify-center flex items-center p-8 flex-col">
        <!-- <h2 class="text-6xl neonText">ورود</h2> -->
        <div class="grid place-items-center">
          <div class="flex items-end flex-col space-y-2">
            <label class="text-xl text-mainRed" for="username"
              >شماره همراه</label
            >
            <InputText
              id="username"
              v-model="loginUsername"
              aria-describedby="username-help"
            />
            <small class="text-sm text-mainViolet" id="username-help"
              >شماره همراه خودتون رو برای ثبت نام و ورود وارد کنید</small
            >
          </div>
        </div>
        <div
          class="flex mt-10 lg:flex-row w-full flex-col lg:px-20 items-center lg:space-y-0 space-y-4 lg:space-x-4"
        >
          <button
            label="Show"
            @click="visible = false"
            class="text-lg flex items-center space-x-2 w-full justify-center py-1 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
          >
            <ProgressSpinner
              v-if="loading"
              style="width: 30px; height: 30px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
            <span v-if="!loading"> تایید </span>
            <PhKeyhole v-if="!loading" :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPassword, PhPhone } from "@phosphor-icons/vue";

const visible = ref(false);
const loading = ref(false);
//set up store

// log state configuration
</script>
<style>
.p-dialog {
  max-height: 100% !important;
  max-width: 100% !important;
}
.p-message-wrapper {
  align-items: center;
  justify-content: center;
}
.p-message.p-message-error .p-message-close {
  margin-left: 0;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
</style>
