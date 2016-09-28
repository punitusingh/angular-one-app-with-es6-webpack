export default class ResultController {
    /**
     *
     * @param $scope
     * @param $modal
     * @param selectedProduct
     * @ngInject
     */
	constructor($scope, $modal, selectedProduct) {
    console.log('result.controller has arguments', arguments);
    // console.log('result.controller has $scope', $scope);
    // console.log('result.controller has $modal', $modal);
    this.modal = $modal;
    this.selectedProduct = selectedProduct;
    console.log('result.controller this', this);
  }

  productDetail(item) {
    console.log('item that was clicked', item);
    this.selectedProduct.item=item;
    this.modal.open('productModal', item);
  }
}
