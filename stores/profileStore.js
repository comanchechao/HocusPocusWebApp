import { defineStore } from "pinia";
export const useProfileStore = defineStore("profileStore", {
  state: () => ({
    stateChange: false,
    storeFullname: "",
    storePhoneNumber: "",
    storeAddress: "",
    storeEmail: "",
    storeCity: "",
    storeRegion: "",
    storePostalCode: "",
    submitted: false,
  }),
  actions: {
    setStateChange() {
      this.stateChange = !this.stateChange;
    },
    setSubmit() {
      this.submitted = true;
    },
    setFullname(fullname) {
      this.storeFullname = fullname;
    },
    setPhoneNumber(phoneNumber) {
      this.storePhoneNumber = phoneNumber;
    },
    setAddress(address) {
      this.storeAddress = address;
    },
    setEmail(email) {
      this.storeEmail = email;
    },
    setCity(city) {
      this.storeCity = city;
    },
    setRegion(region) {
      this.storeRegion = region;
    },
    setPostalCode(postalCode) {
      this.storePostalCode = postalCode;
    },

    async submitInformation() {
      const data = new URLSearchParams({
        email: this.storeEmail,
        address: this.storeAddress,
        fullname: this.storeFullname,
        phonenumber: this.storePhoneNumber,
        postalCode: this.storePostalCode,
        city: this.storeCity,
        region: this.storeRegion,
      });
      await $fetch("http://localhost:3333/user/submitinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        body: data,
        withCredentials: true,
      }).then((response, error) => {
        this.setStateChange();
        console.log(response);
        console.log(error);
      });
    },
  },
});
