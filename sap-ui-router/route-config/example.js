(function (angular) {
    'use strict';
    angular
        .module('appModule', ['ui.router']);


    angular
        .module('appModule')
        .config(configFunc);


    //config.$inject = ['$stateProvider', '$urlRouteProvider'];

    function configFunc($stateProvider, $urlRouteProvider) {
        $stateProvider.state({
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
          });
          $stateProvider.state({
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
          });

/*
        $urlRouteProvider.otherwise('/');
        $stateProvider
            .state('deshboard', {
                url: '/',
                name: 'deshboard',
                template: '<h1>{{contact.title}}</h1>',
                controller: function () {
                    this.title = 'Dashboard';
                },
                controllerAs: 'contact'
            })
            .state('home', {
                name: 'home',
                url: '/home',
                templateUrl: 'home.html'
            })
            // nested list with custom controller
            .state('home.list', {
                name: 'home.list',
                url: '/list',
                template: 'views/home-list.html',
                controller: function () {
                    this.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                },
                controllerAs: 'partialContact'
            })
            // nested list with just some random string data
            .state('home.paragraph', {
                name: 'home.paragraph',
                url: '/paragraph',
                template: 'I could sure use a drink right now.'
            })
            .state('table', {
                name: 'table',
                url: '/table',
                templateUrl: 'views/tableView.html',
                controller: 'tableCtrl'
            })
            .state('lable', {
                name: 'lable',
                url: '/lable',
                templateUrl: 'views/lableView.html',
                controller: 'lableCtrl'
            })
            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('about', {
                name: 'about',
                url: '/about',
                views: {
                    '': {
                        templateUrl: 'about.html'
                    },
                    'columnOne@about': {
                        template: 'Look I am a column!'
                    },
                    'columnTwo@about': {
                        templateUrl: 'aboutTable.html',
                        controller: 'scotchController'
                    }
                }

            });
*/
    }


/*


    angular.module('appModule')
        .controller("scotchController", constructor);

    constructor.$inject = ['$scope', '$stateParams'];

    function constructor($scope, $stateParams) {
        $scope.message = 'test';

        $scope.scotches = [{
                name: 'Macallan 12',
                price: 50
            },
            {
                name: 'Chivas Regal Royal Salute',
                price: 10000
            },
            {
                name: 'Glenfiddich 1937',
                price: 20000
            }
        ];

    }



    angular.module('appModule')
        .controller("tableCtrl", tableCtrl);

    tableCtrl.$inject = ['$scope', '$stateParams'];

    function tableCtrl($scope, $stateParams) {
        var statPra = $stateParams;
        console.log(statPra);

    }
*/
})(window.angular);





angular
.module('appModule')
.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
      });
      $stateProvider.state({
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
      });
});