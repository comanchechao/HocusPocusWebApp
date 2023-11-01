import { defineStore } from "pinia";
export const useOrderMainStore = defineStore("orderMainStore", {
  state: () => ({
    orderStatus: false,
  }),
  actions: {
    setStateChange() {
      this.orderStatus = !this.orderStatus;
    },
  },
});
