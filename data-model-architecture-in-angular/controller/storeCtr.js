(function(){
    'use strict';

    angular
        .module('dataModelArchitecture')
        .controller('storeCtr', constructor)

        constructor.$inject = ['$scope', 'dataService', 'modelBuilderSvc', 'categoryConfigSvc'];

    function constructor($scope, dataService, modelBuilderSvc, categoryConfigSvc) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
        try {
            var categoryList = dataService.getCategoryList();
            if(categoryList !== null ){
                $scope.categories =  modelBuilderSvc.buildModelList(categoryList, categoryConfigSvc);
            }
        } catch (error) {
            
        }
    }
})();