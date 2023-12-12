import { defineStore } from "pinia";
export const useMainManagement = defineStore("mainManagement", {
  state: () => ({
    membershipStat: false,
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
    setMembershipChange() {
      this.membershipStat = !this.membershipStat;
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
