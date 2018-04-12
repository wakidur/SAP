(function (angular) {
    'use strict';
    angular.module('appModule')
        .controller("tableCtrl", constructor);

    constructor.$inject = ['$scope', '$stateParams', '$transition$', '$log', '$state'];

    function constructor($scope, $stateParams, $transition$, $log, $state) {
        $scope.state = $state.current.name;
        $log.log("State " + this.state);
        console.log("hello ");
        var statPra = 'hello';
        console.log(statPra);

    }

})(window.angular);