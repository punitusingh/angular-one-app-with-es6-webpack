import 'angucomplete-alt/angucomplete-alt.css';

import angular from 'angular';
import resultDir from './result.directive';
import detailModal from './productDetail/detail-modal';
import './result.scss';

/**
 * @ngInject
 */
export default angular.module('app.search.result',[detailModal])
    .directive("result",resultDir)
    .name;


/*
Module: when you define a module, you need to export it's name;
 */