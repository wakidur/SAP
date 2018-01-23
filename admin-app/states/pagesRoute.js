(function () {
    'use strict';

    angular
        .module('adminApp')
        .config(configConfig);

    configConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider'];

    function configConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
        $stateProvider.state('userApps.login', {
            // loaded into ui-view of parent's template
            url: '/login',
            templateUrl: 'views/pages/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.login");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/loginCtrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps.register', {
            // loaded into ui-view of parent's template
            url: '/register',
            templateUrl: 'views/pages/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.register");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/registerCtrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps.recover', {
            // loaded into ui-view of parent's template
            url: '/recover',
            templateUrl: 'views/pages/recover.html',
            controller: 'recoverCtrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.recover");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/recoverCtrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps.template', {
            // loaded into ui-view of parent's template
            url: '/template',
            templateUrl: 'views/pages/template.html',
            controller: 'templateCtrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.template");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/templateCtrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps.lock', {
            // loaded into ui-view of parent's template
            url: '/lock',
            templateUrl: 'views/pages/lock.html',
            controller: 'lockCtrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.lock");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/lockCtrl.js']
                    });
                }]
            }
        });
        
        $stateProvider.state('userApps.maintenance', {
            // loaded into ui-view of parent's template
            url: '/maintenance',
            templateUrl: 'views/pages/maintenance.html',
            controller: 'maintenanceCtrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.maintenance");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/maintenanceCtrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps.404', {
            // loaded into ui-view of parent's template
            url: '/404',
            templateUrl: 'views/pages/404.html',
            controller: '404Ctrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.404");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/404Ctrl.js']
                    });
                }]
            }
        });
        $stateProvider.state('userApps.500', {
            // loaded into ui-view of parent's template
            url: '/500',
            templateUrl: 'views/pages/500.html',
            controller: '500Ctrl',
            controllerAs: 'vm',
            onEnter: function() {
                console.log("appSimple.500");
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['controllers/pages/500Ctrl.js']
                    });
                }]
            }
        });
    }
}());