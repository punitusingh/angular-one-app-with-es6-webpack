import angular from 'angular';
import ResultController from './result.controller';
import resultComponent from './result.component';
import detailModalService from '../../productDetail/detail-modal';
import './result.scss';


/**
 * @ngInject
 */
export default angular.module('app.search.result', [detailModalService.name])
  .config(detailModalService.modalConfig)
	.controller("ResultController", ResultController)
	.component("result", resultComponent)
	.name;

/*
Module: when you define a module, you need to export it's name;
 */
