import angular from 'angular';
import angularModal from 'meanie-angular-modal';
import SearchService from '../common/search.service.js';
import selectedProduct from './../common/selectedProduct.service.js';
import shoppingCart from '../common/shoppingCart.service.js';

import DetailModalController from './detail-modal.contoller';
import detailModalComponent from './detail-modal.component';
import detailModalConfig from './detail-modal.config';

/**
 * @ngInject
 */
export default angular.module('app.productDetail', ['Modal.Service'])
  .config(detailModalConfig)
  .service('SearchService', SearchService)
  .service('selectedProduct',selectedProduct)
  .service('shoppingCart', shoppingCart)
  .controller('DetailModalController', DetailModalController)
  .component('detail-modal', detailModalComponent)
  .name;

/*
Module: when you define a module, you need to export it's name;
 */
