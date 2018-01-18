(function(){
    'use strict';

    angular
        .module('adminApp')
        .controller('recoverCtrl', constructor);

        constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.companyName = "Featured";
        vm.title = "PASSWORD RESET";
        vm.dilog = "Fill with your mail to receive instructions on how to reset your password. "

        activate();

        function activate() { }
    }
})();