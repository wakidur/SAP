(function () {
    'use strict';

    angular
        .module('dataModelArchitecture')
        .controller('storeCtr', constructor);

    constructor.$inject = ['$scope', 'dataService'];
    // , 'modelBuilderSvc', 'categoryConfigSvc'

    function constructor($scope, dataService) {
        // , modelBuilderSvc, categoryConfigSvc
        /* jshint validthis:true */
        // vm.all = new dataService();

        var vm = this;
        vm.categoryList = [];
        vm.categories = [];
        vm.products = [];
        vm.allItem = {};
        vm.error = [];
        vm.getProductList = [];
        // vm.getCategoryList ;
        // vm.getProductList = getProductList();

        init();

        function init() {
            try {
                getCategoryList();
                getProductList();
                // if (categoryList !== null) {
                //     //vm.categories =  modelBuilderSvc.buildModelList(vm.categoryList, categoryConfigSvc);
                // }
            } catch (error) {

            }
        }

        function getCategoryList() {
            try {
            return dataService.getCategoryList().then(function (value) {
               // vm.getProductList = value;
                return vm.categories = value;
            }); 
        } catch (error) {
            console.log(error.message);
            vm.error = error.message;
            throw error;

        }
        }
        function getProductList() {
            dataService.getProductList().then(function (value) {
                vm.products = value;
            });
        }
    }
})();