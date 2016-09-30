export default class DetailModalController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
     */
  constructor($scope, $modal, selectedProduct, shoppingCart, relatedItems) {
    this.selectedProduct = selectedProduct;
    this.modal = $modal;
    this.shoppingCart = shoppingCart;
    this.relatedItems = relatedItems;
  }
  close() {
    this.modal.closeAll();
  }
}
