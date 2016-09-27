let detailModal = {
  bindings: {
    product: "="
  },
  template: require('./detail-modal.html'),
  controller: 'DetailModalController',
  controllerAs: 'detailModalCtrl'  
};

export default detailModal;
