(function(angular) {
    'use strict';

    angular.module('appModule')
        .controller("singleUserCtrl", constructor);

    constructor.$inject = ['singleUserSvc'];

    function constructor(singleUserSvc) {
        var vm = this;
        vm.singleUser = singleUserSvc;
    }

})(window.angular);