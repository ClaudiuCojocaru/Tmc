(function(){
    "use strict";
    var tmc = angular.module('tmc');
        tmc.config([
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url : '/home',
                    templateUrl : '../components/home/home.html',
                    controller : 'homeController'
                })
                .state('products', {
                    url : '/products',
                    templateUrl : '../components/products/products.html',
                    controller : 'productsController'
                })
                .state('contact', {
                    url : '/contact',
                    templateUrl : '../components/contact/contact.html',
                    controller : 'contactController'
                })
            $locationProvider.hashPrefix('');
            $locationProvider.html5Mode(true);
        }]);
}());
