<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن آموزش </span>
      <PhPlus weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="w-full h-full pt-10 pt flex items-center flex-col lg:p-10 space-y-10"
      >
        <h2 class="neonText text-3xl">اضافه کردن آموزش</h2>

        <div class="w-full flex items-center flex-col space-y-7">
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainYellow" for="email"
                >قیمت اشتراک <span class="text-sm">(به تومان)</span></label
              >
              <InputNumber
                id="email"
                v-model="productPrice"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainYellow" for="title"
                >عنوان ویدیو</label
              >
              <InputText
                id="title"
                v-model="productTitle"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainYellow" for="email"
                >تاریخ آپلود آموزش <span class="text-sm">(به شمسی)</span></label
              >
              <InputNumber
                id="email"
                v-model="productPrice"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainYellow" for="title"
                >نام مدرس</label
              >
              <InputText
                id="title"
                v-model="productTitle"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>
          <div class="flex items-end lg:col-span-2 flex-col space-y-4">
            <label class="text-2xl text-mainYellow" for="description"
              >توضیحات ویدیو
            </label>
            <Textarea
              class="w-full text-right text-2xl py-3"
              autoResize
              v-model="productDescription"
              rows="6"
              cols="90"
            />
          </div>
          <h2 class="neonText text-3xl">آپلود تصاویر ویدیو</h2>
          <div
            class="w-full h-full lg:flex items-center grid grid-cols-2 grid-rows-2 justify-items-center px-7 place-items-center gap-3 lg:space-x-0 lg:justify-center lg:flex-wrap"
          >
            <div
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhUpload weight="fill" :size="66" />
            </div>
            <div
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhUpload weight="fill" :size="66" />
            </div>
            <div
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out col-span-2 duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhUpload weight="fill" :size="66" />
            </div>
          </div>

          <LazyVideoFilter />
          <!-- {{ type }}
          {{ design }}
          {{ brand }}
          {{ rarity }} -->
          <div class="h-28 w-full flex flex-col items-center justify-center">
            <div>
              <Message v-show="success">کالا به انبار اضافه شد</Message>
            </div>
            <div v-if="Array.isArray(errorMessage)">
              <Message
                v-for="error in errorMessage"
                :key="error"
                v-show="faild"
                >{{ error }}</Message
              >
            </div>
            <button
              @click="handleProduct()"
              class="text-xl flex mb-10 active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
            >
              <span> آپلود ویدیو آموزش </span>
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
import { PhPlus, PhUpload } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/productManagement";
import { storeToRefs } from "pinia";
const visible = ref(false);

// product refs

const success = ref(false);
const faild = ref(false);

const errorMessage = ref("");

const productTitle = ref("");
const productDescription = ref("");
const productPrice = ref();

// regiter management store

const managementStore = useManagementStore();

const { type, brand, design, rarity, inStock } = storeToRefs(managementStore);

// handle adding product via submit

const handleProduct = async () => {
  const data = new URLSearchParams({
    title: productTitle.value,
    price: productPrice.value,
    type: type.value,
    brand: brand.value,
    design: design.value,
    rarity: rarity.value,
    inStock: inStock.value,
    description: productDescription.value,
  });

  await $fetch("http://localhost:3333/management/addproduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response);
      console.log(error);
      success.value = true;
      setTimeout(() => {
        success.value = false;
      }, 3000);
    })
    .catch((error) => {
      faild.value = true;
      errorMessage.value = error.data.message;
      setTimeout(() => {
        faild.value = false;
      }, 3000);
    });

  console.log(
    "type:",
    type.value,
    "brand:",
    brand.value,
    "design",
    design.value,
    "rarirty",
    rarity.value,
    "price",
    productPrice.value,
    "title",
    productTitle.value,
    "description",
    productDescription.value
  );
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(100% - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(100% - 46px) !important;
  }
}
</style>
