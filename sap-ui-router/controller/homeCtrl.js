(function() {
    'use strict';

    angular
        .module('appModule')
        .controller('homeCtrl', constructor)

    constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;

        vm.hello = "hello world";
    }
})();