import 'angucomplete-alt/angucomplete-alt.css';

import angular from 'angular';
import 'angucomplete-alt';

import SearchCtrl from './search.controller';
import searchDir from './search.directive';
import SearchService from './search.service';

import searchResult from './result/result';


/**
 * @ngInject
 */
export default angular.module('app.search',['angucomplete-alt',searchResult])
    .service('SearchService',SearchService)
    .directive("search",searchDir)
    .controller("SearchController",SearchCtrl)
    .name;


/*
Module: when you define a module, you need to export it's name;
 */