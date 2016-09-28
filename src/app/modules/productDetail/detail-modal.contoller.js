export default class DetailModalController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
     */
  constructor($scope, $modal, selectedProduct) {
    this.selectedProduct=selectedProduct;
  }
  testClick() {
    console.log('DetailModalController testClick()');
  }
}
