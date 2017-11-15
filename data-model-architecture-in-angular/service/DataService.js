(function () {
    'use strict';

    angular
        .module('dataModelArchitecture')
        .factory('dataService', constructor);

    constructor.$inject = ['$http', 'ajaxService'];

    function constructor($http, ajaxService) {
        /**
         * hashMap - each key refers to list
         */
        var categories = [];
        var products = [];
        var hashMap = {};
        var service = {
            // traversJSON: traversJSON,
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



        function traversJSON() {
            try {
                return ajaxService.getCategories().then(function (data) {
                    hashMap = data;
                    return hashMap;
                });
            } catch (error) {
                throw error;
            }
            // var json = ajaxService.makeRequest();
            // hashMap = json;

        }

     

        function getCategoryList() {
            try {

                return traversJSON().then(function(){
                    var categories = hashMap.categories;
                    return categories;
                });
            } catch (error) {
                throw error;
            }
        }


        function getProductList() {
            try {
                return traversJSON().then(function(){
                    var products = hashMap.products;
                    return products;
                });
            } catch (error) {
                throw error;

            }

        }
    }
})();