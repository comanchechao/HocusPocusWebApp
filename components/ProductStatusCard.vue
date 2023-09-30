<template>
  <div
    class="w-full h-full lg:h-20 py-5 grid grid-cols-5 place-items-center border-b border-mainRed"
  >
    <div class="flex textj-red-500 items-center space-x-3">
      <PhTrash @click="removeProductImage" :size="20" weight="fill" class="" />
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <h3 class="text-darkPurple text-center px-5">
      {{ product.title }}
    </h3>
  </div>
</template>
<script setup>
import { PhTrash } from "@phosphor-icons/vue";
const props = defineProps(["product"]);
import { ref } from "vue";
import { useManagementStore } from "~/stores/productManagement";

// register productmanagement store

const productManagement = useManagementStore();

const checked = ref(false);

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
        alert("deleted image");
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
        alert("deleted image");
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
        alert("deleted image");
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
        alert("deleted image");
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
      alert("deleted");
      productManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error.data);
    });
};
</script>
