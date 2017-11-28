(function (angular) {
    'use strict';

    angular.module('appModule')
        .controller("settingsCtrl", constructor);

    constructor.$inject = ['$scope', '$stateParams', '$log'];

    function constructor($scope, $stateParams, $log) {


        // $scope.grids = ['horizontal','Stacked'];
        /*
                $scope.formValidate = false;
                $scope.formValue = {};
                $scope.submitForm = function () {
                    $scope.formValidate = userForm.$valid;
                    $scope.formValue.name = $scope.user.name;
                    $scope.formValue.username = $scope.user.username;
                    $scope.formValue.email = $scope.user.email;


                    // check to make sure the form is completely valid
                    if ($scope.formValidate) {
                        alert('our form is amazing');
                    }

                };
                $scope.master = {};

                $scope.update = function (user) {
                    $scope.master = angular.copy(user);
                };

                $scope.reset = function () {
                    $scope.user = angular.copy($scope.master);
                };

                $scope.reset();

        */

        $scope.outerval = 'If you want to pass a read-only value to the directive';
        $scope.func = function () {
            $log.log('invoked!');
        };

    }

})(window.angular);


