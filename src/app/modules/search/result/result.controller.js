import { filter } from 'lodash';

export default class ResultController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
   */
	constructor($scope, $modal, selectedProduct, shoppingCart, relatedItems) {
    // console.log('result.controller has arguments', arguments);
    this.modal = $modal;
    this.selectedProduct = selectedProduct;
    this.shoppingCart = shoppingCart;
    this.relatedItems = relatedItems;
  }

  productDetail(item) {
    // console.log('item that was clicked', item);
    this.selectedProduct.item = item;
    this.relatedItems.setRelated(filter(this.items, (item) => {
      return item.name !== this.selectedProduct.item.name;
    }));
    this.modal.open('productModal', {
      locals: {
        "item": item
      }
    });
  }
}
