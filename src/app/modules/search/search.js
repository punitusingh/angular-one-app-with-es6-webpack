import angular from 'angular';
import 'angucomplete-alt';
import searchResult from './result/result';

import SearchController from './search.controller';
import searchComponent from './search.component';


/**
 * @ngInject
 */
export default angular.module('app.search', ['angucomplete-alt', searchResult])
	.component('search', searchComponent)
	.controller('SearchController', SearchController)
	.name;

/*
Module: when you define a module, you need to export it's name;
 */
