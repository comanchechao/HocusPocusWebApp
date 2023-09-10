<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex items-center space-x-2 px-3 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن فیلتر </span>
      <PhSortAscending weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="w-full h-full flex items-center justify-center flex-col lg:p-4 space-y-3"
      >
        <div class="w-full flex items-center lg:items-end flex-col space-y-7">
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainRed" for="email">نام فیلتر</label>
              <InputText
                id="email"
                v-model="value"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="grid grid-cols-2 lg:grid-cols-4 place-items-stretch gap-4"
          >
            <div
              v-for="i in divs"
              :key="i"
              class="flex items-end flex-col space-y-4"
            >
              <label class="text-xl text-mainRed" for="email">
                گزینه ی فیلتر</label
              >
              <InputText
                id="email"
                v-model="value"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="h-full w-full flex items-center lg:flex-row flex-col lg:space-y-0 space-y-4 justify-center lg:space-x-7"
          >
            <button
              @click="visible = false"
              class="text-xl flex items-center space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن فیلتر </span>
              <PhPlus weight="fill" :size="23" />
            </button>
            <div class="flex items-center space-x-2">
              <button
                @click="removeDiv"
                class="text-xl flex items-center space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
              >
                <PhMinus weight="fill" :size="23" />
              </button>
              <button
                @click="addDiv"
                class="text-xl flex items-center space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
              >
                <PhPlus weight="fill" :size="23" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhMinus,
  PhPlus,
  PhSortAscending,
  PhUpload,
} from "@phosphor-icons/vue";
const visible = ref(false);
</script>
<script>
export default {
  data() {
    return {
      divs: [1],
    };
  },
  methods: {
    addDiv() {
      this.divs.push(this.divs.length + 1);
    },
    removeDiv() {
      this.divs.splice(this.divs.length - 1);
    },
  },
};
</script>
