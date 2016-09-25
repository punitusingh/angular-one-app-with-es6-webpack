import './detail-modal.scss';
import angular from 'angular';
import detailDirective from './detail-modal.component';
import DetailModalController from './detail-modal.contoller';

/**
 * @ngInject
 */
export default angular.module('app.productDetail',[])
    .controller('DetailModalController',DetailModalController)
    .component("detail-modal",detailDirective)
    //.provider("DetailModalProvider",DetailModalProvider)
    .name;


/*
Module: when you define a module, you need to export it's name;
 */