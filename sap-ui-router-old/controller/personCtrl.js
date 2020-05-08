(function(angular) {
    'use strict';

    angular.module('appModule')
        .controller("personCtrl", constructor);

    constructor.$inject = ['peopleresolveSvc'];

    function constructor(peopleresolveSvc) {
        var vm = this;
        vm.person = peopleresolveSvc;
    }

})(window.angular);