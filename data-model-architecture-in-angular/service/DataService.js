
(function(){
    'use strict';

    angular
        .module('dataModelArchitecture')
        .factory('dataService', constructor)

        constructor.$inject = ['$http', 'ajaxService'];

    function constructor($http, ajaxService) {
        /**
         * hashMap - each key refers to list
         */
        var hashMap = {};
        var service = {
            getCategoryList: getCategoryList,
            getProductList: getProductList
        };

        return service;

        
        /**
         * Fatches JSON, traveres it to build hash map 
         * of lists for each ui component form json data
         * object from serve. assigns hashMap where
         * each key refers to a list
         */
        (function traversJSON(){
            try {
                return ajaxService.getCategories().then(function (data) {
                    vm.hashMap = data;
                    return vm.hashMap;
                });
            } catch (error) {
                throw error;
            }
            // var json = ajaxService.makeRequest();
            // hashMap = json;
        }());

        function getCategoryList() {
            try {
                return hashMap.categories;
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