(function() {
    'use strict';
    
        angular
            .module('appModule')
            .config(configConfig);

        configConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        function configConfig($stateProvider , $urlRouterProvider) {
            $stateProvider.state('root', {
                url: '/',
                template: '<h1>Home page </h1>'
            });
            $stateProvider.state('contacts', {
                // url: '/contacts/:a/:b',
                url: '/contacts/{a}/{b}',
                template: '<h1>My Contacts = {{a}} || {{b}}</h1>',
                controller: function($scope, $stateParams){
                    $scope.a = $stateParams.a;
                    $scope.b = $stateParams.b;
                }
            });
            $stateProvider.state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html'
            });
            $stateProvider.state('logout', {
                url: '/logout',
                templateUrl: 'views/logout.html'
            });
            // $stateProvider.state('nofound', {
            //     url: '*path',
            //     template: '<h2> No route found  </h2>'
            // });
            // Super Special
            $urlRouterProvider.otherwise('/');

        }

   /* angular
        .module('appModule')
        .config(function($stateProvider) {
            $stateProvider.state('contacts', {
                url: '/contacts',
                template: '<h1>My Contacts</h1>'
            });
            $stateProvider.state('nofound', {
                url: '*path',
                template: '<h2> No route found  </h2>'
            });

        });
*/
    // configConfig.$inject = ['$stateProvider'];

    // function configConfig($stateProvider) {
    //     $stateProvider.state('contacts', {
    //         template: '<h1>My Contacts</h1>'
    //     })

    // }

}());