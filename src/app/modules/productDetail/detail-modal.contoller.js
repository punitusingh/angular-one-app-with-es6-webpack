export default class DetailModalController {
  /**
   *
   * @param $scope
   * @param $modal
   * @param selectedProduct
   * @ngInject
     */
  constructor($scope, $modal, selectedProduct, shoppingCart, SearchService) {
    this.selectedProduct = selectedProduct;
    this.modal = $modal;
    this.shoppingCart = shoppingCart;
    this.relatedItems = SearchService.getRelatedItems(selectedProduct.item);
    console.log('detail-modal.controller this', this);
  }
  close() {
    this.modal.closeAll();
  }
}
