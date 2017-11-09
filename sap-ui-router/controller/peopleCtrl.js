(function (angular) {
    'use strict';

    angular.module('appModule')
        .controller("peopleCtrl", constructor);
/*
    constructor.$inject = ['peopleService'];

    function constructor(peopleService) {
        var vm = this;
        vm.peoples = [];
        getAvengers();

        function getAvengers() {
            return peopleService.getAllPeople()
                .then(function (data) {
                    vm.peoples = data;
                    return vm.peoples;
                });
        }
    }
*/
    constructor.$inject = ['peopleresolveSvc'];

    function constructor(peopleresolveSvc) {
        // var vm = this;
        // vm.peoples = [];
        var vm = this;
        vm.peoples = peopleresolveSvc;
    }

})(window.angular);