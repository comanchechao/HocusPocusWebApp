import { defineStore } from "pinia";
export const useCommentsStore = defineStore("commentsStore", {
  state: () => ({
    stateChange: false,
  }),
  actions: {
    setStateChange() {
      this.stateChange = !this.stateChange;
    },
  },
});
