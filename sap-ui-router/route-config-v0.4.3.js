(function() {
    'use strict';
    
        angular
            .module('appModule')
            .config(configConfig);

        configConfig.$inject = ['$stateProvider'];

        function configConfig($stateProvider) {
            $stateProvider.state('contacts', {
                url: '/contacts',
                template: '<h1>My Contacts</h1>'
            });
            $stateProvider.state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html'
            });
            $stateProvider.state('logout', {
                url: '/logout',
                templateUrl: 'views/logout.html'
            });
            $stateProvider.state('nofound', {
                url: '*path',
                template: '<h2> No route found  </h2>'
            });

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