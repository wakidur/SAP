(function(){
    'use strict';

    angular
        .module('adminApp')
        .factory('fieldServiceSvc', constructor)

        constructor.$inject = ['$rootScope', '$http'];

    function constructor($rootScope , $http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() {

         }
    }
})();