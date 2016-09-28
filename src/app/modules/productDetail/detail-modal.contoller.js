export default class DetailModalController {
  constructor($scope, $modal, selectedProduct) {
    this.selectedProduct=selectedProduct;
  }
  testClick() {
    console.log('DetailModalController testClick()');
  }
}
