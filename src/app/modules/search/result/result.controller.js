import { filter } from 'lodash';

export default class ResultController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
   */
	constructor($scope, $modal, selectedProduct, shoppingCart) {
    // console.log('result.controller has arguments', arguments);
    // console.log('result.controller this', this);
    this.modal = $modal;
    this.selectedProduct = selectedProduct;
    this.shoppingCart = shoppingCart;
  }

  productDetail(item) {
    // console.log('item that was clicked', item);
    this.selectedProduct.item = item;
    this.modal.open('productModal', {
      locals: {
        "item": item
      }
    });
  }
}
