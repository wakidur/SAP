(function (angular) {
    'use strict';
    angular.module('appModule')
         .controller("scotchCtrl", constructor);

    constructor.$inject = ['$scope', '$stateParams'];
    function constructor($scope, $stateParams) {
        $scope.message = 'test';
        $scope.msg = 'hello, world.';
        
         $scope.scotches = [
             {
                 name: 'Macallan 12',
                 price: 50
             },
             {
                 name: 'Chivas Regal Royal Salute',
                 price: 10000
             },
             {
                 name: 'Glenfiddich 1937',
                 price: 20000
             }
         ];
 
    }

})(window.angular);