import { defineStore } from "pinia";
export const useCourseStore = defineStore("courseStore", {
  state: () => ({
    products: [],
    shoppingCart: [],
    cartTotalPrice: 0,
  }),
  actions: {
    setProducts(products) {
      this.products = products;
    },
    addToShoppingCart(course) {
      const existingCourse = this.shoppingCart.find(
        (item) => item.id === course.id
      );

      if (existingCourse) {
        // If the product is already in the cart, increase its quantity
        existingCourse.quantity++;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        this.shoppingCart.push({ ...course, quantity: 1 });
      }
      console.log(this.shoppingCart);
      this.sumArrayOfObjectsPrice();
    },
    removeProduct(courseId) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].id === courseId) {
          this.shoppingCart.splice(i, 1);
          break;
        }
      }
    },
    increaseQuantity(courseId) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].id === courseId) {
          if (this.shoppingCart[i].quantity <= 5) {
            this.shoppingCart[i].quantity++;
            break;
          }
        }
      }
    },
    decreaseQuantity(courseId) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].id === courseId) {
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
