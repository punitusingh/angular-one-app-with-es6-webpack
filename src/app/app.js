import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import AppCtrl from './app.controller';
import appDirective from './app.directive';

import search from './components/search/search';


const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, [uirouter,  search])
    .config(config)
    .directive('app', appDirective)
    .controller('AppCtrl', AppCtrl).name;



/*
 Module: when you define a module, you need to export it's name;
 */