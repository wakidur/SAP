(function (angular) {
    'use strict';

    angular.module('appModule')
        .controller("lableCtrl", constructor);

        constructor.$inject = ['$scope', '$stateParams'];

    function constructor($scope, $stateParams) {
        var lableCtrl = 'hello';
        console.log(lableCtrl);

    }

})(window.angular);