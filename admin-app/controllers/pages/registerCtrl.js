(function(){
    'use strict';

    angular
        .module('adminApp')
        .controller('registerCtrl', constructor);

        constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.companyName = "Featured";
        vm.title = "SIGNUP TO GET INSTANT ACCESS.";

        activate();

        function activate() { }
    }
})();