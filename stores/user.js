import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    isLogged: false,
    isManager: false,
  }),
  actions: {
    setLogState() {
      this.isLogged = true;
    },
    setNotLogged() {
      this.isLogged = false;
      this.isManager = false;
    },
    setManager() {
      this.isManager = true;
    },
  },
});
