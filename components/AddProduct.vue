<template>
  <div
    class="flex flex-col w-full border-2 p-5 border-dashed border-mainPink rounded-md items-end my-28 justify-end"
  >
    <!-- <button
      @click="visible = true"
      class="text-xl flex items-center space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن کالا </span>
      <PhPlus weight="fill" :size="23" />
    </button> -->
    <h2
      class="lg:text-4xl text-xl font-bold text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
    >
      اضافه کردن کالا
    </h2>
    <div class="w-full h-full flex items-end flex-col p-10">
      <h2
        class="lg:text-2xl text-xl text-mainPink border-b-8 border-mainPurple rounded-xl pb-1"
      >
        آپلود تصاویر
      </h2>
      <div
        class="w-full h-full grid my-10 lg:grid-cols-4 grid-cols-2 justify-items-center px-7 place-items-center gap-3"
      >
        <label
          for="imageone"
          class="lg:w-40 lg:h-52 w-full h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
        >
          <PhUpload weight="fill" :size="66" />
          <input
            @change="
              (event) => {
                eventFileOne = event.target.files[0];
              }
            "
            type="file"
            id="imageone"
            class="hidden"
          />
        </label>
        <label
          for="imagetwo"
          class="lg:w-40 lg:h-52 w-full h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
        >
          <PhUpload weight="fill" :size="66" />
          <input
            @change="
              (event) => {
                eventFileTwo = event.target.files[0];
              }
            "
            type="file"
            id="imagetwo"
            class="hidden"
          />
        </label>
        <label
          for="imagethree"
          class="lg:w-40 lg:h-52 w-full h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
        >
          <PhUpload weight="fill" :size="66" />
          <input
            @change="
              (event) => {
                eventFileThree = event.target.files[0];
              }
            "
            type="file"
            id="imagethree"
            class="hidden"
          />
        </label>
        <label
          for="imagefour"
          class="lg:w-40 lg:h-52 w-full h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
        >
          <PhUpload weight="fill" :size="66" />
          <input
            @change="
              (event) => {
                eventFileFour = event.target.files[0];
              }
            "
            type="file"
            id="imagefour"
            class="hidden"
          />
        </label>
      </div>
      <div class="w-full flex items-center flex-col space-y-7">
        <div
          class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
        >
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainRed" for="email"
              >قیمت کالا <span class="text-sm">(به تومان)</span></label
            >
            <InputNumber
              id="email"
              v-model="productPrice"
              aria-describedby="username-help"
              class="w-full"
            />
          </div>
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainRed" for="title">نام کالا</label>
            <InputText
              id="title"
              v-model="productTitle"
              aria-describedby="username-help"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex items-end flex-col space-y-4">
          <label class="text-xl text-mainRed" for="email">تعداد کالا </label>
          <InputNumber
            id="email"
            v-model="productPrice"
            aria-describedby="username-help"
            class="w-full"
          />
        </div>
        <div class="flex items-end flex-col space-y-4">
          <label class="text-xl text-mainRed" for="description"
            >توضیحات کالا</label
          >
          <Textarea
            class="w-full text-darkPurple"
            autoResize
            v-model="productDescription"
            rows="1"
            cols="90"
          />
        </div>
        <div class="flex items-center space-x-3">
          <InputSwitch v-model="checked"></InputSwitch>
          <h3 class="text-lg text-mainRed">موجودی کالا</h3>
        </div>
        <LazyFiltersAdmin />
        <!-- {{ type }}
          {{ design }}
          {{ brand }}
          {{ rarity }} -->
        <div class="h-28 w-full flex flex-col items-center justify-center">
          <div>
            <Message severity="success" v-show="success"
              >کالا به انبار اضافه شد</Message
            >
          </div>
          <div>
            <Message severity="success" v-show="imageUploadLoading"
              >عکس ها درحال بارگذاری لطفا خارج نشوید
              <ProgressSpinner
                style="width: 50px; height: 50px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
            /></Message>
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
            class="text-xl flex items-center mb-10 space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
          >
            <span> اضافه کردن کالا </span>
            <PhPlus weight="fill" :size="23" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPlus, PhUpload } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/productManagement";
import { storeToRefs } from "pinia";
import { useMainManagement } from "../stores/managementStore";
const visible = ref(false);

// register main management

const mainManagement = useMainManagement();

// image from events

const eventFileOne = ref();
const eventFileTwo = ref();
const eventFileThree = ref();
const eventFileFour = ref();

// product refs

const success = ref(false);
const faild = ref(false);

const errorMessage = ref("");

const productTitle = ref("");
const productDescription = ref("");
const productPrice = ref();

const addedProductID = ref();

// regiter management store

const managementStore = useManagementStore();

const { type, brand, design, rarity, inStock, category } =
  storeToRefs(managementStore);

// handle adding product via submit

const handleProduct = async () => {
  imageUploadLoading.value = true;
  const data = new URLSearchParams({
    title: productTitle.value,
    price: productPrice.value,
    type: type.value,
    brand: brand.value,
    design: design.value,
    category: category.value,
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
      console.log(response.product);
      addedProductID.value = response.product.id;
      console.log(error);

      let images = [
        eventFileOne.value,
        eventFileTwo.value,
        eventFileThree.value,
        eventFileFour.value,
      ];
      success.value = true;

      setTimeout(() => {
        success.value = false;
      }, 3000);
      images.forEach((image) => {
        uploadImage(image);
      });
      mainManagement.setStateChange();
    })
    .catch((error) => {
      faild.value = true;
      errorMessage.value = error.data.message;
      setTimeout(() => {
        faild.value = false;
      }, 3000);
    });
};

// handling image upload

const imageUploadLoading = ref(false);

const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (image) {
  imageUploadLoading.value = true;
  const formData = new FormData();

  formData.append("file", image);
  formData.append("productId", addedProductID.value);
  console.log(image);
  await $fetch("http://localhost:3333/management/upload", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      if (response.data) {
        console.log(response);
        imageUploadLoading.value = false;
      }
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
    });
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
