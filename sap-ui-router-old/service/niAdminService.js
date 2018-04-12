(function(){
    'use strict';

    angular
        .module('appModule')
        .factory('adminSvc', constructor)

        constructor.$inject = ['$http'];

    function constructor($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();