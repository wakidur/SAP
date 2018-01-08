(function () {
    'use strict';

    angular
        .module('adminApp')
        .config(mainRouter);

    mainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider.state('adminApps', {
            name: 'adminApps',
            abstract: true, // To insert a template with its own ui-view for child states to populate
            templateUrl: 'views/common-layours/layouts/full-page-layouts.html'
            
        });
        $stateProvider.state('adminApps.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/dashboard.html'
        });
        $stateProvider.state('userApps', {
            abstract: true, // To insert a template with its own ui-view for child states to populate
            templateUrl: 'views/common-layours/layouts/simple-page-layouts.html',
            onEnter: function () {
                console.log("enter contacts");
            }
        });
        $stateProvider.state('userApps.login', {
            // loaded into ui-view of parent's template
            url: '/login',
            templateUrl: 'views/pages/login.html'
        });
    }

}());