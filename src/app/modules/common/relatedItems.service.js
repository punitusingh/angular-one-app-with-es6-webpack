export default class RelatedItems {
  constructor() {}

  setRelated(items) {
    if (Array.isArray(items)) {
      this.items = items.concat();
    } else {
      console.log('cannot set items as related');
    }
  }
}
