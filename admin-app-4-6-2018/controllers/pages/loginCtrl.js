(function(){
    'use strict';

    angular
        .module('adminApp')
        .controller('loginCtrl', constructor);

        constructor.$inject = ['$location', 'appsFieldServiceSvc', '$log'];

    function constructor( $location, appsFieldServiceSvc, $log)
     {
        /* jshint validthis:true */
        var vm = this;
        /* get field data from global place */
        vm.fieldName = appsFieldServiceSvc.getPagesFieldName();
        $log.log(vm.fieldName);

        activate();

        function activate() { }
    }
})();