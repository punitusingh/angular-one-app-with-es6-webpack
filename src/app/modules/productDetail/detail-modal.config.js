function detailModalController ($modal) {
  console.log('detailModalController: hi!');
}

function detailModalConfig($modalProvider) {
  $modalProvider.modal('productModal', {
    template: require('./detail-modal.html'),
    controller: detailModalController
  });
}

export default detailModalConfig;
