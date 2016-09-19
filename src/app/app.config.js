/**
 *
 * @param $urlRouterProvider
 * @param $locationProvider
 * @param $stateProvider
 * @ngInject
 */
export default function routing($urlRouterProvider, $locationProvider,$stateProvider){
    "use strict";
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');



    $stateProvider.state('search',{
        url:'/search',
        template:require('./components/search/search.html'),
        controller:'SearchController',
        controllerAs:'search'
    });
}