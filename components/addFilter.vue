<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex items-center space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن فیلتر </span>
      <PhSortAscending weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="w-full h-full flex items-center justify-center flex-col lg:p-10 space-y-10"
      >
        <div class="w-full flex items-center flex-col space-y-7">
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
          <div class="grid grid-cols-4 place-items-center gap-9">
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
          <div class="h-28 w-full flex items-center justify-center space-x-7">
            <button
              @click="addDiv"
              class="text-md flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن فیلد </span>
              <PhPlus weight="fill" :size="23" />
            </button>
            <button
              @click="visible = false"
              class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن فیلتر </span>
              <PhPlus weight="fill" :size="23" />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPlus, PhSortAscending, PhUpload } from "@phosphor-icons/vue";
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
  },
};
</script>
