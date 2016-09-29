import angular from 'angular';
import ResultController from './result.controller';
import resultComponent from './result.component';
import detailModalComponent from '../../productDetail/detail-modal';
import shoppingCart from '../../common/shoppingCart.service.js';
import './result.scss';


/**
 * @ngInject
 */
export default angular.module('app.search.result', [detailModalComponent])
  // .config(detailModalService.modalConfig)
  .service('shoppingCart', shoppingCart)
	.controller("ResultController", ResultController)
	.component("result", resultComponent)
	.name;

/*
Module: when you define a module, you need to export it's name;
 */
