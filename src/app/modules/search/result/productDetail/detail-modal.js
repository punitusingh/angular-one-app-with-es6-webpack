import 'angucomplete-alt/angucomplete-alt.css';

import angular from 'angular';
import detailDirective from './detail-modal.directive';

/**
 * @ngInject
 */
export default angular.module('app.search.result.detail',[])
    .directive("detail-modal",detailDirective)
    .name;


/*
Module: when you define a module, you need to export it's name;
 */