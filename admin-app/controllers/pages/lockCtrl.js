(function(){
    'use strict';

    angular
        .module('adminApp')
        .controller('lockCtrl', constructor);

        constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.companyName = "Featured";
        vm.title = "Please login to unlock your screen.";

        activate();

        function activate() { }
    }
})();