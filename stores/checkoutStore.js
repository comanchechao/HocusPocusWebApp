import { defineStore } from "pinia";
export const useCheckoutStore = defineStore("checkoutStore", {
  state: () => ({
    city: "",
    region: "",
    phoneNumber: "",
    fullname: "",
    address: "",
    email: "",
    postalCode: "",
    discountCode: "",
  }),
  actions: {
    setCity(city) {
      this.city = city;
    },
    setRegion(region) {
      this.region = region;
    },
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    },
    setFullName(fullname) {
      this.fullname = fullname;
    },
    setAddress(address) {
      this.address = address;
    },
    setEmail(email) {
      this.email = email;
    },
    setPostalCode(postalCode) {
      this.postalCode = postalCode;
    },
    setDiscountCode(discountCode) {
      this.discountCode = discountCode;
    },
  },
});
