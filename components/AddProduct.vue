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
            v-model="productQuantity"
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
          <InputSwitch v-model="inStock"></InputSwitch>
          <h3 class="text-lg text-mainRed">موجودی کالا</h3>
        </div>
        <div
          class="flex items-center justify-center space-x-6 flex-wrap w-screen lg:w-full h-full lg:h-full py-5 border-t-2 border-mainRed"
        >
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedRarity"
            :options="rarity"
            optionLabel="name"
            display="chip"
            placeholder="کمیابی"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedDesigns"
            :options="designs"
            optionLabel="name"
            display="chip"
            placeholder="طرح ها"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedBrands"
            :options="brands"
            optionLabel="name"
            display="chip"
            placeholder="برندها"
            :showToggleAll="false"
          >
          </MultiSelect>

          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedCategory"
            :options="categories"
            optionLabel="name"
            display="chip"
            placeholder="دسته بندی"
            :showToggleAll="false"
          ></MultiSelect>
          <MultiSelect
            :maxSelectedLabels="2"
            v-model="selectedTypes"
            :options="types"
            optionLabel="name"
            display="chip"
            placeholder="نوع"
            :showToggleAll="false"
          >
          </MultiSelect>
        </div>
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
const inStock = ref();
const selectedTypes = ref();
const selectedBrands = ref();
const selectedRarity = ref();
const selectedDesigns = ref();
const selectedCategory = ref();
// watch(selectedTypes, (current, old) => {
//   managementStore.setType(current[0].name);
//   console.log(selectedTypes.value);
// });

// watch(selectedCategory, (current, old) => {
//   managementStore.setCategory(current[0].name);
// });

// watch(inStock, (current, old) => {
//   managementStore.setInStock(current);
// });

// watch(selectedBrands, (current, old) => {
//   managementStore.setBrand(current[0].name);
//   console.log(current[0].name);
// });

// watch(selectedRarity, (current, old) => {
//   managementStore.setRarity(current[0].name);
//   console.log(current[0].name);
// });

// watch(selectedDesigns, (current, old) => {
//   managementStore.setDesign(current[0].name);
//   console.log(current[0].name);
// });

const types = ref([
  {
    name: "کارت ها",
  },
  { name: "لوازم شعبده بازی" },
]);
const designs = ref([{ name: "کلاسیک" }, { name: "کاستوم" }]);
const rarity = ref([
  { name: "کمیاب" },
  { name: "لیمیتد" },
  { name: "کمتر از 500" },
]);
const brands = ref([
  { name: "بایسیکل", code: "NY" },
  { name: "جوکر", code: "RM" },
  { name: "تلی هو", code: "LDN" },
  { name: "کوپاگ", code: "NY" },
  { name: "کارتماندی", code: "RM" },
  { name: "کِم", code: "LDN" },
  { name: "پیانتیک", code: "NY" },
  { name: "بیی", code: "RM" },
  { name: "رافورد", code: "LDN" },
]);
const categories = ref([
  { name: "کلوس آپ مجیک", code: "NY" },
  { name: "جادو کودکان", code: "NY" },
  { name: "کارت مجیک", code: "RM" },
  { name: "سکه و پول", code: "LDN" },
  { name: "حرکت اجسام", code: "LDN" },
  { name: "منتالیسم", code: "LDN" },
  { name: "جادوی خیابانی", code: "LDN" },
  { name: "جادوی استند آپ", code: "LDN" },
  { name: "جادوی اجرا بزرگ", code: "LDN" },
  { name: "جادوی کافی شاپ", code: "LDN" },
]);
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
const productQuantity = ref();

const addedProductID = ref();

// regiter management store

const managementStore = useManagementStore();

// const { type, brand, design, rarity, inStock, category } =
//   storeToRefs(managementStore);

// handle adding product via submit

watch(selectedCategory, (cur, old) => {
  console.log(selectedBrands.value, selectedCategory.value[0].name);
});

const handleProduct = async () => {
  imageUploadLoading.value = true;
  const data = new URLSearchParams({
    title: productTitle.value,
    price: productPrice.value,
    type: selectedTypes.value[0].name,
    brand: selectedBrands.value[0].name,
    design: selectedDesigns.value[0].name,
    category: selectedCategory.value[0].name,
    rarity: rarity.value,
    inStock: inStock.value,
    quantity: productQuantity.value,
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

      console.log(selectedTypes.value, selectedBrands.value);

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
@font-face {
  font-family: "IranSans";
  src: url("../assets/fonts/IRYekan.woff");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
  .p-inputswitch-slider {
  background-color: #b10449;
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
  background-color: #d9065a;
}
.p-multiselect-items-wrapper {
  border: 0.2rem #090025;
}

.p-multiselect:not(.p-disabled).p-focus {
  box-shadow: 0 0 0 0.1rem #090025;
  border: 0;
}

.p-icon {
  color: #090025;
}

.p-checkbox .p-checkbox-box .p-checkbox-icon {
  color: #d9065a;
}
.p-multiselect .p-multiselect-label.p-placeholder {
  color: #090025;
}
.p-multiselect {
  font-family: "IranSans";
  border: 4px #090025;
  border-radius: 0rem;
  background-color: #d9065a;
  color: #090025;
  padding: 0px 0px;
  flex-direction: row-reverse;
}
.p-multiselect-label,
.p-multiselect-item,
.p-inputtext {
  font-family: "IranSans";

  color: #090025;
  font-size: 1rem;
  text-transform: uppercase;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  background-color: #fdf7fa;
  color: #090025;
}
.p-multiselect-panel
  .p-multiselect-header
  .p-multiselect-
  -container
  .p-inputtext {
  padding: 0;
}

.p-multiselect-panel .p-multiselect-header {
  background-color: #d9065a;
  color: #090025;
}
.p-multiselect-label-container {
  background-color: #d9065a;
  border: 0;
}
.p-multiselect-token {
  background-color: #d9065a;
  color: #090025;
}
.p-multiselect-panel .p-multiselect-items {
  background-color: #ffffff;
  color: #090025;
}

.p-checkbox {
  color: #090025;
}

.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  border-color: #090025;
}

.p-checkbox .p-checkbox-box {
  border-radius: 2rem;
  background-color: #d9065a;
}
.p-overlay-open {
  border: 20;
  border-color: #090025;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #090025;
  color: #d9065a;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background: #090025;
}

.p-checkbox .p-checkbox-box.p-highlight {
  background-color: #090025;
  border: 20;
  border-color: #d9065a;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  background-color: #090025;
  color: #d9065a;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item.p-highlight.p-focus {
  background: #090025;
}
</style>
