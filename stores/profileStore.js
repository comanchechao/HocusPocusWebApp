import { defineStore } from "pinia";
export const useProfileStore = defineStore("profileStore", {
  state: () => ({
    storeFullname: "",
    storePhoneNumber: "",
    storeAddress: "",
    storeEmail: "",
    storeCity: "",
    storeRegion: "",
    storePostalCode: "",
  }),
  actions: {
    setLogState() {
      this.isLogged = true;
      console.log("this is log state : ", this.isLogged);
    },
    setFullname(fullname) {
      this.storeFullname = fullname;
      console.log("this is fullname : ", this.storeFullname);
    },
    setPhoneNumber(phoneNumber) {
      this.storePhoneNumber = phoneNumber;
      console.log("this is phoneNumber : ", this.storePhoneNumber);
    },
    setAddress(address) {
      this.storeAddress = address;
      console.log("this is address : ", this.storeAddress);
    },
    setEmail(email) {
      this.storeEmail = email;
      console.log("this is email : ", this.storeEmail);
    },
    setCity(city) {
      this.storeCity = city;
      console.log("this is city : ", this.storeCity);
    },
    setRegion(region) {
      this.storeRegion = region;
      console.log("this is region : ", this.storeRegion);
    },
    setPostalCode(postalCode) {
      this.storePostalCode = postalCode;
      console.log("this is postalCode : ", this.storePostalCode);
    },

    async submitInformation() {
      const data = new URLSearchParams({
        email: this.storeEmail,
        address: this.storeAddress,
        fullname: this.storeFullname,
        phonenumber: this.storePhoneNumber,
        postalCode: this.postalCode,
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
        console.log(response);
        console.log(error);
      });
    },
  },
});
