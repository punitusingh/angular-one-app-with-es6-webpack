import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import AppController from './app.controller';
import appComponent from './app.component';

import search from './modules/search/search';


const MODULE_NAME = 'app';

export default angular.module(MODULE_NAME, [uirouter,  search])
    .config(config)
    .component('app', appComponent)
    .controller('AppCtrl', AppController).name;



/*
 Module: when you define a module, you need to export it's name;
 */