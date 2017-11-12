(function(angular) {
    'use strict';

    angular.module('appModule')
        .controller("profileCtrl", constructor);

    constructor.$inject = ['userProfileSvc'];

    function constructor(userProfileSvc) {
        var vm = this;
        vm.allUsers = userProfileSvc;
    }

})(window.angular);