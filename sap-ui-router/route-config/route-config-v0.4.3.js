(function () {
    'use strict';
    /**
     * config function block
     */
    angular
        .module('appModule')
        .config(configConfig);

    configConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('root', {
            url: '/',
            template: '<h1>Home page </h1>'
        });
        $stateProvider.state('contacts', {
            // url: '/contacts/:a/:b',

            url: '/contacts/{a}/{b}',
            template: '<h1>My Contacts = {{a}} || {{b}}</h1>',
            controller: function ($scope, $stateParams) {
                $scope.a = $stateParams.a;
                $scope.b = $stateParams.b;
            }
        });
        $stateProvider.state('settings', {
            url: '/settings',
            templateUrl: 'views/settings.html',
            controller: 'settingsCtrl'
            
        });
        $stateProvider.state('logout', {
            url: '/logout',
            templateUrl: 'views/logout.html'
        });
        $stateProvider.state('chapter-1', {
            url: '/chapter-1',
            templateUrl: 'views/chapter-1-maxinizing-angularjs-directives.html',
            controller: "chapterOneCtrl",
            controllerAs: 'vm'
        });

        $urlRouterProvider.otherwise('/logout');

    }





    /**
     * runRun function block
     */
    angular
        .module('appModule')
        .run(runRun);

    runRun.$inject = ['$rootScope', '$state'];

    function runRun($rootScope, $state) {
        $rootScope.$state = $state;
    }



}());