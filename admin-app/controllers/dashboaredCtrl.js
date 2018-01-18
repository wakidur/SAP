(function(){
    'use strict';

    angular
        .module('adminApp')
        .controller('dashboaredCtrl', constructor);

        constructor.$inject = ['$location'];

    function constructor($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.hello = "Hello deshboard";

        activate();

        function activate() { }
    }
})();