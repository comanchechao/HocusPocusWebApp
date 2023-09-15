import { defineStore } from "pinia";
export const useManagementStore = defineStore("managementStore", {
  state: () => ({
    type: "",
    brand: "",
    rarity: "",
    category: "",
    design: "",
    inStock: true,
  }),
  actions: {
    setType(type) {
      this.type = type;
    },
    setCategory(category) {
      this.category = category;
    },
    setBrand(brand) {
      this.brand = brand;
    },
    setRarity(rarity) {
      this.rarity = rarity;
    },
    setDesign(design) {
      this.design = design;
    },
    setInStock(inStock) {
      this.inStock = inStock;
    },
  },
});
