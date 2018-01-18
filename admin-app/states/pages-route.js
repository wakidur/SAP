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
    }
}());