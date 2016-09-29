export default class DetailModalController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
     */
  constructor($scope, $modal, selectedProduct) {
    this.selectedProduct = selectedProduct;
    this.modal = $modal;
  }
  close() {
    this.modal.closeAll();
  }
}
