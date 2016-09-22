import 'angucomplete-alt/angucomplete-alt.css';

import angular from 'angular';
import resultDir from './result.directive';
import './result.scss';

/**
 * @ngInject
 */
export default angular.module('app.search.result',[])
    .directive("result",resultDir)
    .name;


/*
Module: when you define a module, you need to export it's name;
 */