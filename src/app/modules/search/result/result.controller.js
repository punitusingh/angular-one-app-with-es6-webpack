export default class ResultController {
	constructor($scope, $modal) {
    console.log('result.controller has arguments', arguments);
    // console.log('result.controller has $scope', $scope);
    // console.log('result.controller has $modal', $modal);
    this.modal = $modal;
    console.log('result.controller this', this);
  }

  productDetail(item) {
    console.log('item that was clicked', item);
    this.modal.open('productModal', {});
  }
}
