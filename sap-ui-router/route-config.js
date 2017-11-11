(function(angular) {
    'use strict';

    angular
        .module('appModule')
        .config(['$stateProvider', function($stateProvider) {

            //$urlRouteProvider.otherwise('');
            // deshboard route
            $stateProvider.state({
                name: 'deshboard',
                url: '/deshboard',
                template: '<h1>{{contact.title}}</h1>',
                controller: function() {
                    this.title = 'Dashboard';
                },
                controllerAs: 'contact'
            });
            // home Route
            $stateProvider.state({
                name: 'home',
                url: '/home',
                templateUrl: 'views/home.html'
            });
            // nested list with custom controller
            $stateProvider.state({
                name: 'home.list',
                url: '/list',
                templateUrl: 'views/home-list.html',
                controller: function() {
                    this.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                },
                controllerAs: 'partialContact'
            });
            // nested list with just some random string data
            $stateProvider.state('home.paragraph', {
                name: 'home.paragraph',
                url: '/paragraph',
                template: 'I could sure use a drink right now.'
            });

            // table
            $stateProvider.state({
                name: 'table',
                url: '/table',
                templateUrl: 'views/tableView.html',
                controller: 'tableCtrl'
            });

            // lable
            $stateProvider.state({
                name: 'lable',
                url: '/lable',
                templateUrl: 'views/lableView.html',
                controller: 'lableCtrl'
            });
            // arnov
            $stateProvider.state({
                name: 'arnov',
                url: '/arnov',
                templateUrl: 'views/arnov.html',
                controller: 'arnovCtrl'
            });
            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            $stateProvider.state({
                name: 'about',
                url: '/about',
                views: {
                    '': {
                        templateUrl: 'views/about.html'
                    },
                    'columnOne@about': {
                        template: 'Look I am a column!'
                    },
                    'columnTwo@about': {
                        templateUrl: 'views/aboutTable.html',
                        controller: 'scotchCtrl'
                    }
                }

            });

            // people
            $stateProvider.state({
                name: 'people',
                url: '/people',
                // This state defines a 'people' resolve
                // It delegates to the PeopleService to HTTP fetch (async)
                // The people component receives this via its `bindings: `
                resolve: {
                    peopleresolveSvc: function(peopleService) {
                        return peopleService.getAllPeople();
                    }
                },
                templateUrl: 'views/people.html',
                controller: 'peopleCtrl',
                controllerAs: 'vm'
            });
            // person 
            $stateProvider.state({
                name: 'person',
                // This state takes a URL parameter called personId
                url: '/people/{personId}',
                // This state defines a 'person' resolve
                // It delegates to the PeopleService, passing the personId parameter
                resolve: {
                    peopleresolveSvc: function(peopleService, $transition$) {
                        return peopleService.getPerson($transition$.params().personId);
                    }
                },
                templateUrl: 'views/person.html',
                controller: 'personCtrl',
                controllerAs: 'vm'
            });


            //profile 
            // people
            $stateProvider.state({
                name: 'profile',
                url: '/profile',
                // This state defines a 'people' resolve
                // It delegates to the PeopleService to HTTP fetch (async)
                // The people component receives this via its `bindings: `
                resolve: {
                    userProfileSvc: function(userProfileSve) {
                        return userProfileSve.getAllUser();
                    }
                },
                templateUrl: 'views/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            });
            $stateProvider.state({
                name: 'user',
                // This state takes a URL parameter called personId
                url: '/profile/{userID}',
                // This state defines a 'person' resolve
                // It delegates to the PeopleService, passing the personId parameter
                resolve: {
                    singleUserSvc: function(userProfileSve, $transition$) {
                        return userProfileSve.getUser($transition$.params().userID);
                    }
                },
                templateUrl: 'views/single-user.html',
                controller: 'singleUserCtrl',
                controllerAs: 'vm'
            });

            $stateProvider.state({
                name: 'nofound',
                url: '*path',
                template: '<h2> No route found  </h2>'
            });
        }]);





    angular.module('appModule').run(['$rootScope', '$state',
        function($rootScope, $state) {
            $rootScope.$state = $state;
            //   $rootScope.valueA = "hew value";
        }
    ]);
    angular.module('appModule').run(['$http',
        function($http) {
            $http.get('data/people.json', { cache: true });
            //   $rootScope.valueA = "hew value";
        }
    ]);







})(window.angular);