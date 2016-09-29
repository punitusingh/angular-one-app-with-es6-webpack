export default class ResultController {
    /**
     *
     * @param $scope
     * @param $modal
     * @param selectedProduct
     * @ngInject
     */
	constructor($scope, $modal, selectedProduct, shoppingCart) {
    console.log('result.controller has arguments', arguments);
    this.modal = $modal;
    this.selectedProduct = selectedProduct;
  }

  productDetail(item) {
    console.log('item that was clicked', item);
    console.log('result.controller this is', this);
    this.selectedProduct.item=item;
    this.modal.open('productModal', item);
  }
}
