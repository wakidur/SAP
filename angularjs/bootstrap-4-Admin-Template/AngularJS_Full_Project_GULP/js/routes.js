(function() {
    'use strict';
    angular
        .module('app')
        .config(configConfig);

    configConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider'];

    function configConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            //debug: $ocLazyLoad returns a promise that will be rejected when there is an error but if you set debug to true, $ocLazyLoad will also log all errors to the console.
            debug: true
        });

        $breadcrumbProvider.setOptions({
            prefixStateName: 'app.main',
            includeAbstract: true,
            template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
        });

        $stateProvider
            .state('app', {
                name: 'app',
                abstract: true, // To insert a template with its own ui-view for child states to populate
                templateUrl: 'views/common/layouts/full.html',
                //page title goes here
                ncyBreadcrumb: {
                    label: 'Root',
                    skip: true
                },
                resolve: {
                    loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load CSS files
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'Font Awesome',
                            files: ['css/font-awesome.min.css']
                        }, {
                            serie: true,
                            name: 'Simple Line Icons',
                            files: ['css/simple-line-icons.css']
                        }]);
                    }],
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'chart.js',
                            files: [
                                'bower_components/chart.js/dist/Chart.min.js',
                                'bower_components/angular-chart.js/dist/angular-chart.min.js'
                            ]
                        }]);
                    }],
                }
            })
            .state('app.main', {
                url: '/dashboard',
                templateUrl: 'views/main.html',
                //page title goes here
                ncyBreadcrumb: {
                    label: 'Home',
                },
                //page subtitle goes here
                params: {
                    subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit'
                },
                resolve: {

                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'chart.js',
                            files: [
                                'bower_components/chart.js/dist/Chart.min.js',
                                'bower_components/angular-chart.js/dist/angular-chart.min.js'
                            ]
                        }, ]);
                    }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load controllers
                        return $ocLazyLoad.load({
                            files: ['js/controllers/main.js']
                        });
                    }]
                }
            })
            .state('appSimple', {
                abstract: true, // To insert a template with its own ui-view for child states to populate
                templateUrl: 'views/common/layouts/simple.html',
                onEnter: function() {
                    console.log("enter contacts");
                },
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'Font Awesome',
                            files: ['css/font-awesome.min.css']
                        }, {
                            serie: true,
                            name: 'Simple Line Icons',
                            files: ['css/simple-line-icons.css']
                        }]);
                    }],
                }
            })

        // Additional Pages
        .state('appSimple.login', {
                // loaded into ui-view of parent's template
                url: '/login',
                templateUrl: 'views/pages/login.html',
                onEnter: function() {
                    console.log("appSimple.login");
                }
            })
            .state('appSimple.register', {
                // loaded into ui-view of parent's template
                url: '/register',
                templateUrl: 'views/pages/register.html',
                onEnter: function() {
                    console.log("appSimple.register");
                }
            })
            .state('appSimple.404', {
                // loaded into ui-view of parent's template
                url: '/404',
                templateUrl: 'views/pages/404.html',
                onEnter: function() {
                    console.log("appSimple.404");
                }
            })
            .state('appSimple.500', {
                // loaded into ui-view of parent's template
                url: '/500',
                templateUrl: 'views/pages/500.html',
                onEnter: function() {
                    console.log("appSimple.500");
                }
            })
    }
}());

