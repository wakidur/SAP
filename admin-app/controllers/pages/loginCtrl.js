(function(){
    'use strict';

    angular
        .module('adminApp')
        .controller('loginCtrl', constructor)

        constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.companyName = "Featured";
        vm.title = "SIGN IN TO CONTINUE.";

        activate();

        function activate() { }
    }
})();