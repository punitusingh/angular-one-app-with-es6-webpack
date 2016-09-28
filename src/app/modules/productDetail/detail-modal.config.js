/**
 *
 * @param $modalProvider
 * @ngInject
 */
export default function detailModalConfig($modalProvider) {
    $modalProvider.modal('productModal', {
        template: require('./detail-modal.html'),
        controller: 'DetailModalController',
        controllerAs: 'detailModalCtrl'
    })
};

