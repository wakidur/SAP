(function(angular) {
    'use strict';

    angular.module('appModule')
        .controller("settingsCtrl", constructor);

    constructor.$inject = ['$scope', '$stateParams'];

    function constructor($scope, $stateParams) {
        // $scope.grids = ['horizontal','Stacked'];
        $scope.submitForm = function(isValid) {
            
                // check to make sure the form is completely valid
                if (isValid) {
                  alert('our form is amazing');
                }
            
              };
       

    }

})(window.angular);