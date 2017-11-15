(function(){
    'use strict';

    angular
        .module('dataModelArchitecture')
        .controller('storeCtr', constructor);

        constructor.$inject = ['$scope', 'dataService', 'modelBuilderSvc', 'categoryConfigSvc'];

    function constructor($scope, dataService, modelBuilderSvc, categoryConfigSvc) {
        /* jshint validthis:true */
        var vm = this;
        vm.categoryList = [];
        vm.categories = [];

        activate();

        function activate() { }
        try {
            vm.categoryList = dataService.getCategoryList();
            if(categoryList !== null ){
                vm.categories =  modelBuilderSvc.buildModelList(vm.categoryList, categoryConfigSvc);
            }
        } catch (error) {
            
        }
    }
})();