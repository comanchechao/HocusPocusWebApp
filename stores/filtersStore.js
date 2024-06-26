import { defineStore } from "pinia";
export const useFilterStore = defineStore("filterStore", {
  state: () => ({
    types: [],
    designs: [],
    brands: [],
    category: [],
    rarity: [],
    sortBy: "",
    discount: false,
  }),
  actions: {
    clearFilters() {
      this.types = [];
      this.designs = [];
      this.brands = [];
      this.category = [];
      this.rarity = [];
      this.sortBy = "";
      this.discount = false;
    },
    setTypes(category) {
      this.types = category;
      console.log(this.types);
    },
    setDiscount() {
      this.discount = !this.discount;
    },
    unSetDiscount() {
      this.discount = false;
    },
    setDesign(design) {
      this.designs = design;
      console.log(this.designs);
    },
    setBrand(brand) {
      this.brands = brand;
      console.log(this.brand);
    },
    setRarity(rarity) {
      this.rarity = rarity;
      console.log(this.rarity);
    },
    setCategory(category) {
      this.category = category;
      console.log(this.category);
    },
    setSortBy(sort) {
      this.sortBy = sort;
    },

    // setCategory(rarity) {
    //   const alreadyExists = this.shoppingCart.find(
    //     (item) => item === filterName
    //   );
    //   if (alreadyExists) {
    //     console.log("can't do this in here we are not getting shwifty");
    //   } else {
    //     this.rarity.push(rarity);
    //   }
    // },
    // setCategory(category) {
    //   const alreadyExists = this.shoppingCart.find(
    //     (item) => item === filterName
    //   );
    //   if (alreadyExists) {
    //     console.log("can't do this in here we are not getting shwifty");
    //   } else {
    //     this.isLogged.push(category);
    //   }
    // },
  },
});
