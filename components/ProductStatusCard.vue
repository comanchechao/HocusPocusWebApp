<template>
  <div
    class="w-full h-full lg:h-20 py-5 grid grid-cols-4 place-items-center border-b border-mainRed"
  >
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="specialOffer"></InputSwitch>
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="weeksSelection"></InputSwitch>
    </div>
    <h3 class="text-darkPurple text-center px-5">
      {{ product.title }}
    </h3>
    <Message
      class="w-96 text-right absolute"
      v-show="message"
      severity="success"
    >
      <span class="lg:text-xl text-md">تغییرات موفقیت آمیز بود</span>
    </Message>
  </div>
</template>
<script setup>
import { PhTrash } from "@phosphor-icons/vue";
import Message from "primevue/message";
const props = defineProps(["product"]);
import { ref } from "vue";
import { useManagementStore } from "~/stores/productManagement";

// register productmanagement store

const productManagement = useManagementStore();
const message = ref(false);
const checked = ref(false);
const specialOffer = ref(false);
const weeksSelection = ref(false);

onMounted(() => {
  if (props.product.special_offer) {
    specialOffer.value = true;
  }
  if (props.product.weeksSelection) {
    weeksSelection.value = true;
  }
});

watch(specialOffer, (cur, old) => {
  if (cur === true) {
    checked.value = false;
    if (!props.product.special_offer) {
      updateSpecialOffer();
    }
  }
  if (cur === false) {
    deupdateSpecialOffer();
  }
});
watch(weeksSelection, (cur, old) => {
  if (cur === true) {
    checked.value = false;
    if (!props.product.weeksSelection) {
      updateWeekSelection();
    }
  }
  if (cur === false) {
    deupdateWeekSelection();
  }
});

const updateSpecialOffer = async function () {
  const data = new URLSearchParams({
    productId: props.product.id,
  });
  await $fetch(`http://localhost:3333/management/updateproductstatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((response, error) => {
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
      productManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error.data);
    });
};

const deupdateSpecialOffer = async function () {
  const data = new URLSearchParams({
    productId: props.product.id,
  });
  await $fetch(`http://localhost:3333/management/deupdateproductstatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((response, error) => {
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
      productManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error.data);
    });
};
const updateWeekSelection = async function () {
  const data = new URLSearchParams({
    productId: props.product.id,
  });
  await $fetch(`http://localhost:3333/management/updateweekselection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((response, error) => {
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
      productManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error.data);
    });
};

const deupdateWeekSelection = async function () {
  const data = new URLSearchParams({
    productId: props.product.id,
  });
  await $fetch(`http://localhost:3333/management/deupdateweekselection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((response, error) => {
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
      productManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error.data);
    });
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
        message.value = true;
        setTimeout(() => {
          message.value = false;
        }, 3000);
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
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
      productManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error.data);
    });
};
</script>
