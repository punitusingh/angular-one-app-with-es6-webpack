import productModalController from './detail-modal.controller';
// function productModalController ($modal) {
//   console.log('productModalController arguments', arguments);
//   console.log('productModalController: hi!');
// }

function detailModalConfig($modalProvider) {
  console.log('detailModalConfig args', arguments);
  $modalProvider.modal('productModal', {
    template: require('./detail-modal.html'),
    controller: productModalController
  });
}

export default detailModalConfig;
