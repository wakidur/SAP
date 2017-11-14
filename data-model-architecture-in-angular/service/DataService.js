
(function(){
    'use strict';

    angular
        .module('dataModelArchitecture')
        .factory('dataService', constructor)

        constructor.$inject = ['$http', 'ajaxService'];

    function constructor($http, ajaxService) {
        var hashMap = {};
        var service = {
            getCategoryList: getCategoryList,
            getProductList: getProductList
        };

        return service;

        

        (function traversJSON(){
            var json = ajaxService.makeRequest();
            hashMap = json;
        }());

        function getCategoryList() {
            try {
                return hashMap.categories(;)
            } catch (error) {
                throw error;
            }
         }

         function getProductList() {
             try {
                return hashMap.products;
             } catch (error) {
                 throw error;
                 
             }
             
         }
    }
})();