import { defineStore } from "pinia";
export const useMainManagement = defineStore("mainManagement", {
  state: () => ({
    stateChange: false,
    mode: false,
    productsCount: null,
    coursesCount: null,
    ordersCount: null,
  }),
  actions: {
    setStateChange() {
      this.stateChange = !this.stateChange;
    },
    setMode() {
      this.mode = true;
    },
    setProductCount(count) {
      this.productsCount = count;
      console.log(this.productsCount);
    },
    setOrdersCount(count) {
      this.ordersCount = count;
    },
    setCoursesCount(count) {
      this.coursesCount = count;
    },
  },
});
