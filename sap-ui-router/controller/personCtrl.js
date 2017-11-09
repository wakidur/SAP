(function (angular) {
    'use strict';

    angular.module('appModule')
        .controller("personCtrl", constructor);

        constructor.$inject = ['peopleresolveSvc'];

    function constructor(peopleresolveSvc) {
       this.person = peopleresolveSvc;
    }

})(window.angular);