(function (angular) {
    'use strict';

    angular.module('appModule')
        .controller("arnovCtrl", constructor);

        constructor.$inject = ['$scope', '$stateParams'];

    function constructor($scope, $stateParams) {
        // $scope.grids = ['horizontal','Stacked'];
        $scope.grids = ['horizontal-1','Stacked-2','horizontal-2','horizontal-3','horizontal-4','horizontal-5'];
        
    }

})(window.angular);