<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex items-center space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن کالا </span>
      <PhPlus weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col pb-24">
        <h2 class="neonText text-3xl">آپلود تصاویر</h2>
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
              class="text-xl flex items-center mb-10 space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن کالا </span>
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
      if (response.product) {
        addedProductID.value = response.product.id;
        productTitle.value = "";
        productPrice.value = "";
        type.value = "";
        brand.value = "";
        design.value = "";
        category.value = "";
        rarity.value = "";
        productDescription.value = "";
      }
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
    "category",
    category.value,
    "price",
    productPrice.value,
    "title",
    productTitle.value,
    "description",
    productDescription.value
  );
};

// handling image upload

const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (image) {
  const formData = new FormData();

  formData.append("file", image);
  formData.append("productId", addedProductID.value);
  console.log(image);
  await $fetch("http://localhost:3333/management/upload", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      console.log(response);
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
