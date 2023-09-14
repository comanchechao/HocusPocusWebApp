import { defineStore } from "pinia";
export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    shoppingCart: [],
  }),
  actions: {
    setProducts(products) {
      this.products = products;
    },
    addToShoppingCart(product) {
      const existingProduct = this.shoppingCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        existingProduct.quantity++;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        this.shoppingCart.push({ ...product, quantity: 1 });
      }
      console.log(this.shoppingCart);
    },
  },
});
