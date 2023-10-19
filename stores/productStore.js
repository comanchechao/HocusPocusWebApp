import { defineStore } from "pinia";
export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    shoppingCart: [],
    cartTotalPrice: 0,
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
      this.sumArrayOfObjectsPrice();
    },
    removeProduct(productId) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].id === productId) {
          this.shoppingCart.splice(i, 1);
          break;
        }
      }
    },
    increaseQuantity(productId) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].id === productId) {
          if (this.shoppingCart[i].quantity <= 5) {
            this.shoppingCart[i].quantity++;
            break;
          }
        }
      }
    },
    decreaseQuantity(productId) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].id === productId) {
          if (this.shoppingCart[i].quantity > 1) {
            this.shoppingCart[i].quantity--;
            break;
          }
        }
      }
    },
    sumArrayOfObjectsPrice() {
      this.cartTotalPrice = this.shoppingCart.reduce(
        (total, obj) => total + obj.price,
        0
      );
      console.log(this.cartTotalPrice);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
