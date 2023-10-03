import { defineStore } from "pinia";
export const useMainManagement = defineStore("mainManagement", {
  state: () => ({
    productsCount: null,
    coursesCount: null,
    ordersCount: null,
  }),
  actions: {
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
