<template>
  <div
    :class="{
      'lg:grid lg:grid-cols-1 lg:place-items-end lg:gap-5 h-full w-full lg:p-10  my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col':
        $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      'lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-10  my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col':
        $route.path === '/' || $route.path.startsWith('/shop/'),
    }"
    class=""
  >
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      inputId="dd-city"
      placeholder="انتخاب شهر"
      class="w-full rounded-lg h-11"
    />
    <Dropdown
      v-model="selectedRegion"
      :options="provinces"
      optionLabel="name"
      placeholder="انتخاب استان"
      class="w-full rounded-lg h-11"
    />
    <InputMask
      placeholder="شماره تلفن"
      v-model="phoneNumber"
      mask="9999-999-9999"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="نام و نام خانوادگی"
      id="fullname"
      v-model="fullname"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="آدرس کامل"
      id="address"
      v-model="address"
      class="w-full rounded-lg h-11 col-span-2"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="ایمیل"
      id="email"
      v-model="email"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
    <InputMask
      placeholder="کد پستی"
      id="postalCode"
      mask="9999999999"
      v-model="postalCode"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="کد تخفیف"
      id="discount"
      v-model="discount"
      class="w-full rounded-lg h-11 col-span-2"
      aria-describedby="username-help"
    />
    <div class="w-full flex items-end">
      <button
        @click="validateCode"
        class="bg-darkPurple hover:bg-blue-900 transition text-white p-2 px-5"
      >
        ثبت کد تخفیف
      </button>
    </div>
    <Message
      class="space-x-4 flex items-center justify-center"
      severity="success"
      v-show="discountSucess"
    >
      <span class="text-white mx-3"> ثبت شد</span>
    </Message>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useProfileStore } from "../stores/profileStore";
import { useCheckoutStore } from "../stores/checkoutStore";
import { useProductStore } from "../stores/productStore";
import { storeToRefs } from "pinia";
import provinces from "../locations/provinces.json";
import iranCities from "../locations/cities.json";

// register profile store

const profileStore = useProfileStore();

const { storeFullname } = storeToRefs(profileStore);

// register checkout store

const checkoutStore = useCheckoutStore();
const productsStore = useProductStore();

const { cartTotalPrice } = storeToRefs(productsStore);

// customer information

const fullname = ref("");
const phoneNumber = ref("");
const selectedCity = ref();
const address = ref("");
const postalCode = ref("");
const email = ref("");
const selectedRegion = ref();
const discount = ref();

// set order information to checkout store to proccess inside checkout page

watch(selectedCity, (cur, old) => {
  checkoutStore.setCity(cur.name);
});

watch(selectedRegion, (cur, old) => {
  checkoutStore.setRegion(cur.name);
});

watch(address, (cur, old) => {
  checkoutStore.setAddress(cur);
});

watch(fullname, (cur, old) => {
  checkoutStore.setFullName(cur);
});

watch(phoneNumber, (cur, old) => {
  checkoutStore.setPhoneNumber(cur);
});
watch(email, (cur, old) => {
  checkoutStore.setEmail(cur);
});

watch(postalCode, (cur, old) => {
  checkoutStore.setPostalCode(cur);
});

watch(discount, (cur, old) => {
  checkoutStore.setDiscountCode(cur);
});

// values

const cities = ref([]);
watch(selectedRegion, (cur, old) => {
  console.log(cur);
  cities.value = [];
  iranCities.forEach((element) => {
    if (cur.id === element.province_id) {
      cities.value.push(element);
    }
  });
});

const loading = ref(false);
const discountSucess = ref(false);

const validateCode = async (status) => {
  loading.value = true;
  const data = new URLSearchParams({});
  data.append("code", discount.value);

  await $fetch("http://localhost:3333/products/validatecode", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response.perc);
      if (response.valid) {
        loading.value = false;
        let discount = cartTotalPrice.value * (Number(response.perc) / 100);
        let finalPrice = cartTotalPrice.value - discount;
        console.log(finalPrice);
        productsStore.setDiscount(finalPrice);
        discountSucess.value = true;
        setTimeout(() => {
          discountSucess.value = false;
        }, 3000);
      } else {
        console.log("is not valid");
      }
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
};

const regions = ref([
  { name: "آذربایجان غربی", code: "NY" },
  { name: "آذربایجان شرقی", code: "RM" },
  { name: "البرز", code: "LDN" },
  { name: "هرمزگان", code: "IST" },
]);

// handle information submit
</script>

<script>
export default {
  props: ["isVisible"],
};
</script>
<style>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #150531;
}
.p-dropdown .p-dropdown-label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-inputtext {
  text-align: end;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #e7e5e5;
  border-radius: 0.3rem;
}
.p-dropdown {
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
  flex-direction: row-reverse;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  background-color: #fbf8ff;
  color: #150531;
}

.p-dropdown-panel
  .p-dropdown-items
  .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #150531;
  color: #fbf8ff;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: #f36b31;
  color: #150531;
}
</style>
