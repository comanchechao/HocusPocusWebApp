import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    setLogState() {
      this.isLogged = true;
    },
    setNotLogged() {
      this.isLogged = false;
    },
  },
});
