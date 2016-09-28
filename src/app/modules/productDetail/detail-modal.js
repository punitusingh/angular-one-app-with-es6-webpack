import angular from 'angular';
import angularModal from 'meanie-angular-modal';
import DetailModalController from './detail-modal.contoller';
import detailModalComponent from './detail-modal.component';
import selectedProduct from './../common/selectedProduct.service.js';
import detailModalConfig from './detail-modal.config';
import './detail-modal.scss';

/**
 * @ngInject
 */
export default angular.module('app.productDetail', ['Modal.Service'])
  .config(detailModalConfig)
  .service('selectedProduct',selectedProduct)
  .controller('DetailModalController', DetailModalController)
  .component('detail-modal', detailModalComponent)
  .name;

/*
Module: when you define a module, you need to export it's name;
 */
