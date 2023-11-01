import { defineStore } from "pinia";
export const useOrderMainStore = defineStore("orderMainStore", {
  state: () => ({
    stateChange: false,
  }),
  actions: {
    setStateChange() {
      this.stateChange = !this.stateChange;
    },
  },
});
