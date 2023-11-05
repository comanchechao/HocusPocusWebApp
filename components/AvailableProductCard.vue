<template>
  <div
    class="h-auto w-full border-mainRed border-t py-3 place-items-center grid grid-cols-5"
  >
    <button
      @click="removeComments(product)"
      class="text-red-500 p-3 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
    >
      <ProgressSpinner
        v-if="loading"
        style="width: 30px; height: 30px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
      <PhTrash v-if="!loading" :size="30" />
    </button>
    <Message
      class="w-full text-right absolute top-40"
      v-show="message"
      severity="success"
    >
      <span class="lg:text-xl text-md">محصول با موفقیت پاک شد</span>
    </Message>
    <LazyDiscount></LazyDiscount>
    <h3 class="text-darkPurple md:text-md lg:text-lg text-xs">65</h3>
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
import { PhTrash } from "@phosphor-icons/vue";
const props = defineProps(["product"]);
import { useManagementStore } from "~/stores/productManagement";
import { useMainManagement } from "~/stores/managementStore";
// register productManagement store
const mainManagement = useMainManagement();
const productManagement = useManagementStore();
const loading = ref(false);
const message = ref(false);
onMounted(() => {
  console.log(props.product);
});

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
      }
    )
      .then((response, error) => {
        removeProductImage();
        loading.value = false;
        message.value = true;
        setTimeout(() => {
          message.value = false;
        }, 3000);
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
