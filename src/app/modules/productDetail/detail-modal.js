import angular from 'angular';
import angularModal from 'meanie-angular-modal';
import DetailModalController from './detail-modal.contoller';
import detailModalComponent from './detail-modal.component';
// import modalConfig from './detail-modal.config';
import './detail-modal.scss';

function detailModalConfig($modalProvider) {
  console.log('detailModalConfig args', arguments);
  $modalProvider.modal('productModal', {
    template: require('./detail-modal.html'),
    controller: DetailModalController
  });
}
/**
 * @ngInject
 */
export default angular.module('app.productDetail', ['Modal.Service'])
  .config(detailModalConfig)
  .controller('DetailModalController', DetailModalController)
  .component('detail-modal', detailModalComponent)
  .name;

/*
Module: when you define a module, you need to export it's name;
 */
