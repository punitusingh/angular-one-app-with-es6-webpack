import 'angucomplete-alt/angucomplete-alt.css';

import angular from 'angular';
import 'angucomplete-alt';

import SearchController from './search.controller';
import searchComponent from './search.component';
import SearchService from './search.service';

import searchResult from './result/result';


/**
 * @ngInject
 */
export default angular.module('app.search',['angucomplete-alt',searchResult])
    .service('SearchService',SearchService)
    .component("search",searchComponent)
    .controller("SearchController",SearchController)
    .name;


/*
Module: when you define a module, you need to export it's name;
 */