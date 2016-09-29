import { has, isString } from 'lodash';

export default class ShoppingCart {
  constructor() {
    this.products = {};
  }

  increment(product) {
    if (isString(product)) {
      if (this.products[product] === undefined) {
        this.products[product] = 0;
      }
      this.products[product]++;
    }
  }

  decrement(product) {
    if (isString(product) && this.products[product] && this.products[product] > 0) {
      this.products[product]--;
    }
  }

  getItemCount(product) {
    let count = 0;
    if (isString(product) && has(this.products, product)) {
      return this.products[product];
    }
    return count;
  }
}
