import { defineStore } from "pinia";
export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),
  actions: {
    setProducts(products) {
      this.products = products;
    },
  },
});
