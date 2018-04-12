(function() {
    'use strict';

    angular
        .module('appModule')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: "views/home.html",
            controller: "homeCtrl",
            controllerAs: "vm"
        });
    }
}());