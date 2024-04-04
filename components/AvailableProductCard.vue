<template>
  <div
    class="h-auto w-full border-mainRed border-t py-3 place-items-center grid grid-cols-5"
  >
    
    <button       @click="visible = true"

      class="text-blue-500 p-3 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
    >
      <ProgressSpinner
        v-if="loading"
        style="width: 30px; height: 30px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
      <PhNotePencil v-if="!loading" :size="30" />
    </button>
     
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '60vw', backgroundColor: '#150531', height: '80vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          ویرایش
        </h2>
       
        <div
          class="w-full h-full   rounded-md overflow-y-scroll lg:px-11 md:px-14"
        >
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
            dir="rtl"
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
            <span> ذخیره تغییرات </span>
            <PhPlus weight="fill" :size="23" />
          </button>
        </div>
      </div>

        
        </div>
      </div>
    </Dialog>
 
   
    <Message
      class="w-full text-right absolute top-40"
      v-show="message"
      severity="success"
    >
      <span class="lg:text-xl text-md">محصول با موفقیت پاک شد</span>
    </Message>
    <LazyDiscount :productId="product.id"></LazyDiscount>
    <h3 class="text-darkPurple md:text-md lg:text-lg text-xs">
      {{ product.quantity }}
    </h3>
    <h3 class="text-darkPurple md:text-md lg:text-lg text-xs text-center">
      دوشنبه 24 تیر 1402
    </h3>
    <h3 class="text-darkPurple md:text-sm lg:text-sm text-xs text-center px-2">
      {{ product.title }}
    </h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhNotePencil, PhTrash } from "@phosphor-icons/vue";
const props = defineProps(["product"]);
import { useManagementStore } from "~/stores/productManagement";
import { useMainManagement } from "~/stores/managementStore";
// register productManagement store
const mainManagement = useMainManagement();
const productManagement = useManagementStore();
const loading = ref(false);
const message = ref(false);
const visible = ref(false);

const removeComments = async function (product) {
  loading.value = true;
  if (props.product.Comments.length) {
    await $fetch(
      `http://localhost:3333/management/removecomment/${props.product.Comments[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeProductImage();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecomment/${props.product.Comments[1].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeProductImage();
        // loading.value = false;
        // message.value = true;
        // setTimeout(() => {
        //   message.value = false;
        // }, 3000);
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecomment/${props.product.Comments[2].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        alert("comment deleted");
        removeProductImage();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecomment/${props.product.Comments[3].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        alert("comment deleted");
        removeProductImage();
      })
      .catch((error) => {
        console.log(error.data);
      });
  } else {
    removeProductImage();
  }
};

const removeProductImage = async function () {
  if (props.product.ProductImages.length) {
    await $fetch(
      `http://localhost:3333/management/removeproductimage/${props.product.ProductImages[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeProduct();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removeproductimage/${props.product.ProductImages[1].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeProduct();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removeproductimage/${props.product.ProductImages[2].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeProduct();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removeproductimage/${props.product.ProductImages[3].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeProduct();
      })
      .catch((error) => {
        console.log(error.data);
      });
  } else {
    removeProduct();
  }
};

const removeProduct = async function () {
  await $fetch(
    `http://localhost:3333/management/removeproduct/${props.product.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
      credentials: "include",
    }
  )
    .then((response, error) => {
      mainManagement.setStateChange();
      loading.value = false;
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
    })
    .catch((error) => {
      console.log(error.data);
    });
};
</script>

<style lang="scss" scoped></style>
