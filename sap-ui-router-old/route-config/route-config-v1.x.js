(function (angular) {
    'use strict';

    angular
        .module('appModule')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            //$urlRouteProvider.otherwise('');
            // deshboard route
            $stateProvider.state('settings', {
                url: '/settings',
                templateUrl: 'views/settings.html',
                controller: 'settingsCtrl'
    
            });
            $stateProvider.state('logout', {
                url: '/logout',
                templateUrl: 'views/logout.html'
            });
            
            $stateProvider.state({
                name: 'deshboard',
                url: '/deshboard',
                template: '<h1>{{contact.title}}</h1>',
                controller: function () {
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
                controller: function () {
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
                    peopleresolveSvc: function (peopleService) {
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
                    peopleresolveSvc: function (peopleService, $transition$) {
                        return peopleService.getPerson($transition$.params().personId);
                    }
                },
                templateUrl: 'views/person.html',
                controller: 'personCtrl',
                controllerAs: 'vm'
            });


            // nested 

            $stateProvider.state({
                name: 'profile',
                url: '/profile',
                // This state defines a 'people' resolve
                // It delegates to the PeopleService to HTTP fetch (async)
                // The people component receives this via its `bindings: `
                resolve: {
                    userProfileSvc: function (userProfileSve) {
                        return userProfileSve.getAllUser();
                    }
                },
                templateUrl: 'views/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            });
            $stateProvider.state({
                    name: 'profile.profileuser',
                    // This state takes a URL parameter called personId
                    url: '/{profileuserId}',
                    // This state defines a 'person' resolve
                    // It delegates to the PeopleService, passing the personId parameter
                    // resolve: {
                    //     singleUserSvc: function(userProfileSvc, $stateParams) {
                    //         var containervalu = [];
                    //         //return userProfileSve.getUser($stateParams.userId);
                    //         return userProfileSvc.find(function(profileuser) {
                    //             //console.log(person.id === $stateParams.profileuserId);
                    //             // return profileuser.id == $stateParams.profileuserId;
                    //             if( profileuser.id === $stateParams.profileuserId){
                    //                 return containervalu.push(profileuser);
                    //                 //this.profileuser;
                    //                 console.log(containervalu);
                    //             }
                    //             return containervalu;
                    //         });
                    //     }
                    // },
                    templateUrl: 'views/singleUser.html',
                    // controller: 'singleUserCtrl',
                    controller: function (userProfileSvc, $stateParams) {
                        // var vm = this;
                        var vm = this;
                        vm.singleUser = [];
                        getsingleUser();

                        function getsingleUser() {
                            //return userProfileSve.getUser($stateParams.userId);
                            userProfileSvc.find(function (profileuser) {
                                //console.log(person.id === $stateParams.profileuserId);
                                // return profileuser.id == $stateParams.profileuserId;
                                if (profileuser.id === $stateParams.profileuserId) {
                                    vm.singleUser.push(profileuser);
                                    //this.profileuser;

                                }

                            });
                            return vm.singleUser;
                        }

                    },
                    controllerAs: 'vm'
                }),

                $stateProvider.state({
                    name: 'directive',
                    url: '/directive',
                    templateUrl: 'views/directive.html',
                    controller: function ($scope, $http) {
                        $scope.jakob = {};
                        $scope.jakob.firstName = "Jakob";
                        $scope.jakob.lastName = "Jenkov";

                        $scope.john = {};
                        $scope.john.firstName = "John";
                        $scope.john.lastName = "Doe";
                    }
                }),
                $stateProvider.state({
                    name: 'angular-datatables',
                    url: '/angular-datatables',
                    templateUrl: 'views/angular-datatable/angular-datatable.html',
                    controller: 'angularDatatable',
                    controllerAs: 'vm'
                }),
                $stateProvider.state({
                    name: 'angular-datatables-advanced',
                    url: '/angular-datatables-advanced',
                    templateUrl: 'views/angular-datatable/angular-datatable-advance.html',
                    controller: 'datatableAdvanced',
                    controllerAs: 'vm'
                }),
                $stateProvider.state({
                    name: 'nofound',
                    url: '*path',
                    template: '<h2> No route found  </h2>'
                });
               // $urlRouterProvider.otherwise('/logout');
        }]);




/*
    angular.module('appModule').run(['$rootScope', '$state',
        function ($rootScope, $state) {
            $rootScope.$state = $state;
            //   $rootScope.valueA = "hew value";
        }
    ]);
    angular.module('appModule').run(['$http',
        function ($http) {
            $http.get('data/people.json', {
                cache: true
            });
            //   $rootScope.valueA = "hew value";
        }
    ]);



*/





})(window.angular);

(function(){
    'use strict';

    angular
        .module('appModule')
        .run(runRun);

    runRun.$inject = ['$rootScope', '$state', '$http' , 'DTDefaultOptions'];

    function runRun($rootScope, $state, $http, DTDefaultOptions){
        $rootScope.$state = $state;
        $http.get('data/people.json', { cache: true });
        DTDefaultOptions.setLoadingTemplate('<img src="dist/img/loading.gif">');
    }

}());