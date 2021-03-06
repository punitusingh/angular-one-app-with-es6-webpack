import angular from 'angular';
import ResultController from './result.controller';
import resultComponent from './result.component';
import detailModalComponent from '../../productDetail/detail-modal';


/**
 * @ngInject
 */
export default angular.module('app.search.result', [detailModalComponent])
	.controller("ResultController", ResultController)
	.component("result", resultComponent)
	.name;

/*
Module: when you define a module, you need to export it's name;
 */
