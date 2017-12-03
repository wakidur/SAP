(function (angular) {
    'use strict';

    angular.module('appModule')
        .controller("settingsCtrl", constructor);

    constructor.$inject = ['$scope', '$stateParams', '$log'];

    function constructor($scope, $stateParams, $log) {
        var myObject = [{
                name: "Wakidur",
                itme: 120
            },
            {
                name: "most",
                itme: 2
            },
            {
                name: "reliable",
                itme: 12
            },
            {
                name: "technically ",
                itme: 172
            },
            {
                name: "correct ",
                itme: 0
            },
            {
                name: "approach ",
                itme: 1
            }
        ];

        function chunk(arr, size) {
            var newArr = [];
            for (var i=0; i<arr.length; i+=((arr.length)/size)) {
              newArr.push(arr.slice(i, i+((arr.length)/size)));
            }
            return newArr;
          }
         
        $scope.arrayOfObjectValude = [
            {
                name: "Wakidur",
                itme: 120
            },
            {
                name: "most",
                itme: 2
            },
            {
                name: "reliable",
                itme: 12
            },
            {
                name: "technically ",
                itme: 172
            },
            {
                name: "correct ",
                itme: 5
            },
            {
                name: "correct ",
                itme: 9
            },
            {
                name: "correct ",
                itme: 78
            },
            {
                name: "correct ",
                itme: 0
            },
            {
                name: "correct ",
                itme: 98
            },
            {
                name: "correct ",
                itme: 69
            },
            {
                name: "correct ",
                itme: 69
            },
            {
                name: "correct ",
                itme:78
            },
            {
                name: "correct ",
                itme: 45
            },
            {
                name: "correct ",
                itme: 36
            },
            {
                name: "correct ",
                itme: 33333
            },
            {
                name: "approach ",
                itme: 1
            }
        ];
        $scope.arrayOfObject = chunk($scope.arrayOfObjectValude, 2);


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