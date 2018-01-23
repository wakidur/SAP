(function () {
    'use strict';

    angular
        .module('adminApp')
        .controller('bottonsCtrl', constructor);

    constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;

        vm.global = userInfor.deg;
        console.log("valo of " + vm.global);

        activate();

        function activate() {}
    }
})();