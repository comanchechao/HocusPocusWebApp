import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    setLogState() {
      this.isLogged = true;
      console.log("this is log state : ", this.isLogged);
    },
  },
});
