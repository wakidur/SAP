(function () {
    'use strict';

    angular
        .module('adminApp')
        .config(mainRouter);

    mainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider'];

    function mainRouter($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            //debug: $ocLazyLoad returns a promise that will be rejected when there is an error but if you set debug to true, $ocLazyLoad will also log all errors to the console.
            debug: true
        });
        $breadcrumbProvider.setOptions({
            prefixStateName: 'adminApps.dashboard',
            includeAbstract: true,
            template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
        });
        
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider.state('adminApps', {
            name: 'adminApps',
            abstract: true, // To insert a template with its own ui-view for child states to populate
            templateUrl: 'views/common-layours/layouts/full-page-layouts.html',
            onEnter: function () {
                console.log("appSimple.login");
            },
            //page title goes here
            ncyBreadcrumb: {
                label: 'Root',
                skip: true
            },
            resolve: {
                loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load CSS files
                    return $ocLazyLoad.load([{
                        serie: true,
                        name: 'Simple Line Icons',
                        files: ['node_modules/simple-line-icons/css/simple-line-icons.css']
                    }]);
                }],
                loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([{
                        serie: true,
                        name: 'chart.js',
                        files: [
                            'node_modules/chart.js/dist/Chart.min.js',
                            'node_modules/angular-chart.js/dist/angular-chart.min.js'
                        ]
                    }]);
                }],
            }

        });
        $stateProvider.state('adminApps.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/dashboard.html',
            controller: 'dashboaredCtrl',
            controllerAs: 'vm',
            //page title goes here
            ncyBreadcrumb: {
                label: 'Home',
            },
            resolve: {
                loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([{
                        serie: true,
                        name: 'chart.js',
                        files: [
                            'node_modules/chart.js/dist/Chart.min.js',
                            'node_modules/angular-chart.js/dist/angular-chart.min.js'
                        ]} 
                    ]);
                }],
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/dashboard/dashboaredCtrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps', {
            abstract: true, // To insert a template with its own ui-view for child states to populate
            templateUrl: 'views/common-layours/layouts/simple-page-layouts.html',
            onEnter: function () {
                console.log("enter contacts");
            },
            resolve: {
                loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([{
                        serie: true,
                        name: 'Simple Line Icons',
                        files: ['node_modules/simple-line-icons/css/simple-line-icons.css']
                    }]);
                }],
            }
        });
    }
}());