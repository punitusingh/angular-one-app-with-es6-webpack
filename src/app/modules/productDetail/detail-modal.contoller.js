export default class DetailModalController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
     */
  constructor($scope, $modal, selectedProduct, shoppingCart) {
    console.log('detal-modal.controller has args', arguments);
    this.selectedProduct = selectedProduct;
    this.modal = $modal;
    this.shoppingCart = shoppingCart;
  }
  close() {
    this.modal.closeAll();
  }
}
