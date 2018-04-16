(function () {
    'use strict';

    angular
        .module('dataModelArchitecture')
        .controller('storeCtr', constructor);

    constructor.$inject = ['$scope', 'dataService' , 'modelBuilderSvc', 'categoryConfigSvc'];
    // 

    function constructor($scope, dataService , modelBuilderSvc, categoryConfigSvc) {
        // 
        /* jshint validthis:true */
        // vm.all = new dataService();

        var vm = this;
        vm.newCategoryList = [];
        vm.categoryList = [];
        vm.categories = [];
        vm.products = [];
        vm.allItem = {};
        vm.error = [];
       
        // vm.getCategoryList ;
        // vm.getProductList = getProductList();

        init();

        function init() {
            try {
                getCategoryList();
                getProductList();
            } catch (error) {

            }
        }

        function getCategoryList() {
            try {
                return dataService.getCategoryList().then(function (value) {
                    vm.categoryList = value;
                    vm.categories = value;
                    // return vm.categories = value;
                    if (vm.categoryList !== null) {
                        vm.newCategoryList = modelBuilderSvc.buildModelList(vm.categoryList, categoryConfigSvc);
                        console.log(vm.newCategoryList);
                    }
                });
                
            } catch (error) {
                console.log(error.message);
                vm.error = error.message;
                throw error;
            }
        }

        function getProductList() {
            try {
                return dataService.getProductList().then(function (value) {
                    return vm.products = value;
                });
            } catch (error) {
                throw error;
            }

        }
    }
})();