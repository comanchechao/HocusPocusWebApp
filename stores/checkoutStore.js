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
  }),
  actions: {
    setCity(city) {
      this.city = city;
      console.log(this.city);
    },
    setRegion(region) {
      this.region = region;
      console.log(this.region);
    },
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
      console.log(this.phoneNumber);
    },
    setFullName(fullname) {
      this.fullname = fullname;
    },
    setAddress(address) {
      this.address = address;
      console.log(this.address);
    },
    setEmail(email) {
      this.email = email;
    },
    setPostalCode(postalCode) {
      this.postalCode = postalCode;
      console.log(this.postalCode);
    },
  },
});
