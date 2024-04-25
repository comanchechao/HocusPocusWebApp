<template>
  <div
    class="flex flex-col w-full border-2 p-5 border-dashed border-mainPink rounded-md items-end lg:my-14 justify-end"
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
    <div class="w-full h-full flex items-end flex-col pt-8 lg:p-10">
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
          class="lg:w-40 lg:h-52 text-center flex-col space-y-3 w-full h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
        >
          <PhEye v-show="!eventFileOne" weight="fill" :size="66" />
          <PhCheckCircle
            v-show="eventFileOne"
            class="text-green-400"
            weight="fill"
            :size="66"
          />

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
          <PhUpload v-show="!eventFileTwo" weight="fill" :size="66" />
          <PhCheckCircle
            v-show="eventFileTwo"
            class="text-green-400"
            weight="fill"
            :size="66"
          />

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
          <PhUpload v-show="!eventFileThree" weight="fill" :size="66" />
          <PhCheckCircle
            v-show="eventFileThree"
            class="text-green-400"
            weight="fill"
            :size="66"
          />

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
          <PhUpload v-show="!eventFileFour" weight="fill" :size="66" />
          <PhCheckCircle
            v-show="eventFileFour"
            class="text-green-400"
            weight="fill"
            :size="66"
          />

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
            <input
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
            dir="ltr"
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
          class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 place-items-center justify-items-center gap-7 lg:px-28 lg:w-full h-full lg:h-full py-5 border-t-2 border-mainRed"
        >
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedRarity"
            :options="rarity"
            optionLabel="name"
            display="chip"
            placeholder="کمیابی"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedDesigns"
            :options="designs"
            optionLabel="name"
            display="chip"
            placeholder="طرح ها"
            :showToggleAll="false"
          >
          </MultiSelect>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedBrands"
            :options="brands"
            optionLabel="name"
            display="chip"
            placeholder="برندها"
            :showToggleAll="false"
          >
          </MultiSelect>

          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedCategory"
            :options="categories"
            optionLabel="name"
            display="chip"
            placeholder="دسته بندی"
            :showToggleAll="false"
          ></MultiSelect>
          <MultiSelect
            :maxSelectedLabels="1"
            v-model="selectedTypes"
            :options="types"
            optionLabel="name"
            display="chip"
            class="col-span-2 lg:col-span-1"
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
            <Message severity="error" v-show="addError">{{ error }}</Message>
            <Message severity="error" v-show="loginErr"
              >وارد حساب ادمین شوید</Message
            >
          </div>
          <div>
            <Message
              class="space-x-4 flex items-center justify-center"
              severity="info"
              v-show="imageUploadLoading"
            >
              <span class="text-right mx-3"> درحال بارگذاری عکس ها</span>
              <ProgressSpinner
                style="width: 20px; height: 20px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
            </Message>
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
            <span v-if="!addingLoading"> اضافه کردن کالا </span>
            <PhPlus v-if="!addingLoading" weight="fill" :size="23" />
            <ProgressSpinner
              v-if="addingLoading"
              style="width: 30px; height: 30px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col w-full border-2 p-5 border-dashed border-mainPink rounded-md items-end my-24 justify-end"
  >
    <h2
      class="lg:text-4xl text-xl font-bold text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
    >
      ویرایش فیلترها
    </h2>
    <div
      class="w-full h-full flex lg:flex-row flex-col-reverse lg:space-x-5 items-center justify-center lg:justify-end py-12"
    >
      <button
        @click="addFilter()"
        class="text-sm flex items-center space-x-2 px-3 lg:px-5 transition duration-150 ease-in-out border-b-4 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg py-2 shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
      >
        <ProgressSpinner
          v-if="updateFilter"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <span v-if="!updateFilter"> اضافه کردن فیلتر </span>
        <PhSortAscending v-if="!updateFilter" weight="fill" :size="23" />
      </button>
      <div>
        <Message severity="success" v-show="message2"
          >به فیلترها اضافه شد</Message
        >
        <Message severity="error" v-show="filterRemove"> فیلتر حذف شد</Message>
        <Message severity="error" v-show="authError">
          وارد حساب ادمین شوید</Message
        >
        <Message severity="error" v-show="selectedFilterError">
          یک فیلتر انتخاب کنید</Message
        >
      </div>

      <InputText
        placeholder="فیلتر جدید"
        id="fullname"
        v-model="newFilter"
        class="rounded-lg h-11 lg:my-0 my-7"
        aria-describedby="username-help"
      />

      <Dropdown
        v-model="selectedFilters"
        :options="allFilters"
        optionLabel="name"
        placeholder="فیلترها"
      />
    </div>
    <div
      class="flex flex-wrap lg:space-y-0 space-y-4 space-x-2 justify-center items-center"
    >
      <p
        class="p-2 flex items-center justify-center space-x-2 text-sm bg-white rounded-md"
        v-for="item in filterItems"
        :key="item.name"
      >
        <span> {{ item.name }} </span>
        <button
          class="text-mainRed duration-200 transition ease-in hover:bg-mainRed hover:text-mainWhite"
        >
          <PhX @click="removeFilter(item.id)" size="23" weight="fill" />
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhX,
  PhPlus,
  PhUpload,
  PhSortAscending,
  PhCheckCircle,
  PhEye,
} from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/productManagement";
import { storeToRefs } from "pinia";
import { useMainManagement } from "../stores/managementStore";

const message2 = ref(false);

const authError = ref(false);

// filter refs

const allFilters = ref([]);
const newFilter = ref();
const allFilterItems = ref([]);
const filterLoading = ref(true);

// products refs
const inStock = ref();
const selectedFilters = ref();
const filterItems = ref();

const selectedTypes = ref(null);
const selectedBrands = ref(null);
const selectedRarity = ref(null);
const selectedDesigns = ref(null);
const selectedCategory = ref(null);

watch(selectedFilters, (cur, old) => {
  console.log(cur.id);
  if (cur.name === "نوع") {
    filterItems.value = [];
    allFilterItems.value.forEach((item) => {
      if (item.filter_id === cur.id) {
        filterItems.value.push(item);
      }
    });
  }
  if (cur.name === "برند") {
    filterItems.value = [];
    allFilterItems.value.forEach((item) => {
      if (item.filter_id === cur.id) {
        filterItems.value.push(item);
      }
    });
  }
  if (cur.name === "دسته بندی") {
    filterItems.value = [];
    allFilterItems.value.forEach((item) => {
      if (item.filter_id === cur.id) {
        filterItems.value.push(item);
      }
    });
  }
  if (cur.name === "کمیت") {
    filterItems.value = [];
    allFilterItems.value.forEach((item) => {
      if (item.filter_id === cur.id) {
        filterItems.value.push(item);
      }
    });
  }
});

// watch(allFilterItems, (cur, old) => {
//   console.log(selectedFilters.value);
//   if (selectedFilters) {
//     if (selectedFilters.value.name === "نوع") {
//       filterItems.value = [];
//       allFilterItems.value.forEach((item) => {
//         if (item.filter_id === selectedFilters.value.id) {
//           filterItems.value.push(item);
//         }
//       });
//     }
//     if (selectedFilters.value.name === "برند") {
//       filterItems.value = [];
//       allFilterItems.value.forEach((item) => {
//         if (item.filter_id === selectedFilters.value.id) {
//           filterItems.value.push(item);
//         }
//       });
//     }
//     if (selectedFilters.value.name === "دسته بندی") {
//       filterItems.value = [];
//       allFilterItems.value.forEach((item) => {
//         if (item.filter_id === selectedFilters.value.id) {
//           filterItems.value.push(item);
//         }
//       });
//     }
//     if (selectedFilters.value.name === "کمیت") {
//       filterItems.value = [];
//       allFilterItems.value.forEach((item) => {
//         if (item.filter_id === selectedFilters.value.id) {
//           filterItems.value.push(item);
//         }
//       });
//     }
//   }
// });
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

const types = ref([]);
const designs = ref([{ name: "کلاسیک" }, { name: "کاستوم" }]);
const rarity = ref([]);
const brands = ref([]);
const categories = ref([]);
// register main management
const updateFilter = ref(false);
const mainManagement = useMainManagement();

// image from events

const eventFileOne = ref(null);
const eventFileTwo = ref(null);
const eventFileThree = ref(null);
const eventFileFour = ref(null);

// product refs

const success = ref(false);
const faild = ref(false);

const errorMessage = ref("");

const productTitle = ref("");
const productDescription = ref("");
const productPrice = ref(null);
const productQuantity = ref(null);

const addedProductID = ref();

// regiter management store

const managementStore = useManagementStore();

// const { type, brand, design, rarity, inStock, category } =
//   storeToRefs(managementStore);

// handle adding product via submit

const error = ref("");
const addError = ref(false);

const loginErr = ref(false);

watch(selectedCategory, (cur, old) => {
  console.log(selectedBrands.value, selectedCategory.value[0].name);
});

const addingLoading = ref(false);

const handleProduct = async () => {
  success.value = false;

  addingLoading.value = true;
  if (productTitle.value === "") {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "عنوان را وارد کنید";
  }
  if (productPrice.value === null) {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "قیمت را وارد کنید";
  }
  if (selectedTypes.value === null) {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "نوع را وارد کنید";
  }
  if (selectedBrands.value === null) {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "برند را وارد کنید";
  }
  if (selectedDesigns.value === null) {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "طراحی را وارد کنید";
  }
  if (selectedCategory.value === null) {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "دسته بندی را وارد کنید";
  }
  if (productQuantity.value === "") {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "کمیت را وارد کنید";
  }
  if (productDescription.value === "") {
    addError.value = true;
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
    error.value = "توضیحات را وارد کنید";
  }

  if (eventFileOne.value === null || eventFileTwo.value === null) {
    addError.value = true;
    error.value = "عکس کاور و دوم را وارد کنید";
    addingLoading.value = false;
    setTimeout(() => {
      addError.value = false;
    }, 2000);
  }

  if (
    productTitle.value !== "" &&
    eventFileOne.value !== null &&
    eventFileTwo.value !== null &&
    productPrice.value !== null &&
    selectedTypes.value !== null &&
    selectedBrands.value !== null &&
    selectedDesigns.value !== null &&
    selectedCategory.value !== null &&
    productQuantity.value !== null &&
    productDescription.value !== ""
  ) {
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
        addedProductID.value = response.product.id;
        addingLoading.value = false;
        uploadOrder();
        mainManagement.setStateChange();
      })
      .catch((error) => {
        faild.value = true;
        errorMessage.value = error.data.message;
        if (error.status === 403) {
          loginErr.value = true;
          addingLoading.value = false;
          setTimeout(() => {
            loginErr.value = false;
          }, 2000);
        }
        setTimeout(() => {
          faild.value = false;
        }, 3000);
      });
  }
};

// upload order

const uploadOrder = async function () {
  const formData = new FormData();
  formData.append("file", eventFileOne.value);
  formData.append("productId", addedProductID.value);
  if (eventFileOne.value !== null || eventFileTwo.value !== null) {
    imageUploadLoading.value = true;
    await $fetch("http://localhost:3333/management/cover", {
      method: "POST",
      headers: {},
      body: formData,
      withCredentials: true,
      credentials: "include",
    })
      .then((response) => {
        if (response.data) {
          imageUploadLoading.value = false;
          success.value = true;
        }
        setTimeout(() => {
          uploadImage(eventFileTwo.value);
          setTimeout(() => {
            if (eventFileThree.value !== null) {
              uploadImage(eventFileThree.value);
            }
            setTimeout(() => {
              if (eventFileFour.value !== null) {
                uploadImage(eventFileFour.value);
              }
            }, 2000);
          }, 3000);
        }, 1000);
      })
      .catch((error) => {
        imageUploadError.value = true;
        uploadErrorMessage.value = error.data.message;
      });
  }
};

// handling image upload

const imageUploadLoading = ref(false);

const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (image) {
  const formData = new FormData();

  formData.append("file", image);
  formData.append("productId", addedProductID.value);
  if (eventFileOne.value !== null || eventFileTwo.value !== null) {
    imageUploadLoading.value = true;
    await $fetch("http://localhost:3333/management/upload", {
      method: "POST",
      headers: {},
      body: formData,
      withCredentials: true,
      credentials: "include",
    })
      .then((response) => {
        if (response.data) {
          imageUploadLoading.value = false;
          success.value = true;
        }
      })
      .catch((error) => {
        imageUploadError.value = true;
        imageUploadLoading.value = false;
        uploadErrorMessage.value = error.data.message;
      });
  }
};

// handling filter addition

const getFilters = async () => {
  const { data } = await $fetch("http://localhost:3333/filters", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      allFilters.value = response.filters;
      getFilterItems();
    })
    .catch(function (error) {});
};

const getFilterItems = async () => {
  const { data } = await $fetch("http://localhost:3333/filters/filteritems", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      types.value = [];
      brands.value = [];
      categories.value = [];
      allFilterItems.value = response.filters;
      response.filters.forEach((item) => {
        if (item.filter_id === 2) {
          categories.value.push(item);
        }
        if (item.filter_id === 4) {
          brands.value.push(item);
        }
        if (item.filter_id === 3) {
          rarity.value.push(item);
        }
        if (item.filter_id === 1) {
          types.value.push(item);
          console.log(types.value);
        }
      });
      filterLoading.value = false;
    })
    .catch(function (error) {});
};

const selectedFilterError = ref(false);

const addFilter = async (userId, username) => {
  console.log(selectedFilters.value.id);
  const body = new URLSearchParams({
    filterId: selectedFilters.value.id,
    name: newFilter.value,
  });
  if (selectedFilters.value) {
    updateFilter.value = true;
    const { data } = await $fetch("http://localhost:3333/filters/newfilter", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
      body: body,
      credentials: "include",
    })
      .then(function (response) {
        message2.value = true;
        setTimeout(() => {
          message2.value = false;
        }, 2000);
        updateFilter.value = false;
        getFilterItems();
        if (selectedFilters.value.name === "نوع") {
          filterItems.value = [];
          allFilterItems.value.forEach((item) => {
            if (item.filter_id === selectedFilters.value.id) {
              filterItems.value.push(item);
            }
          });
        }
        if (selectedFilters.value.name === "برند") {
          filterItems.value = [];
          allFilterItems.value.forEach((item) => {
            if (item.filter_id === selectedFilters.value.id) {
              filterItems.value.push(item);
            }
          });
        }
        if (selectedFilters.value.name === "دسته بندی") {
          filterItems.value = [];
          allFilterItems.value.forEach((item) => {
            if (item.filter_id === selectedFilters.value.id) {
              filterItems.value.push(item);
            }
          });
        }
        if (selectedFilters.value.name === "کمیت") {
          filterItems.value = [];
          allFilterItems.value.forEach((item) => {
            if (item.filter_id === selectedFilters.value.id) {
              filterItems.value.push(item);
            }
          });
        }
      })
      .catch(function (error) {
        console.error(error);
        updateFilter.value = false;
        if (error.status === 403) {
          authError.value = true;
          setTimeout(() => {
            authError.value = false;
          }, 2000);
        }
      });
  } else {
    selectedFilterError.value = true;
    setTimeout(() => {
      selectedFilterError.value = false;
    }, 2000);
  }
};

const filterRemove = ref(false);

const removeFilter = async function (itemId) {
  const data = new URLSearchParams({
    id: itemId,
  });
  await $fetch(`http://localhost:3333/filters/remove/${itemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
    withCredentials: true,
    credentials: "include",
  })
    .then((response) => {
      filterRemove.value = true;
    })
    .catch((error) => {
      if (error.status === 403) {
        authError.value = true;
        setTimeout(() => {
          authError.value = false;
        }, 2000);
      }
    });
};

onMounted(() => {
  getFilters();
});
</script>

<style>
@font-face {
  font-family: "IranSans";
  src: url("../assets/fonts/IRYekan.woff");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
.p-inputtext {
  padding: 9px;
  text-align: end;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
}
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #090025;
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
  width: 1.4rem;
  height: 1.4rem;
}
.p-dialog .p-dialog-header {
  background-color: #150531;
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
  padding: 0px 0px;
  flex-direction: row-reverse;
}
.p-dropdown {
  font-family: "IranSans";
  border: 4px #090025;
  border-radius: 0rem;
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

.p-multiselect-panel .p-multiselect-header {
  background-color: #d9065a;
  color: #090025;
}
.p-multiselect-label-container {
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
.p-message .p-message-text {
  text-align: right;
}
</style>
