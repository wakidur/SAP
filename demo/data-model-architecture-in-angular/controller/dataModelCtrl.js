(function () {
    'use strict';

    angular
        .module('dataModelArchitecture')
        .controller('dataModelCtrl', constructor);

    constructor.$inject = ['$location', 'ajaxService', '$scope'];

    function constructor($location, ajaxService, $scope) {
        /* jshint validthis:true */
        $scope.hello = "hello";
        // block of code to try
        var vm = this;
        vm.categories = [];
        vm.config = '';
        vm.url = '';
        
        init();

        function init() {
            try {
                return ajaxService.getCategories().then(function (data) {
                    vm.categories = data.data;
                    vm.config = data.config;
                    vm.url = data.url;
                    return vm.categories;
                });
            } catch (error) {
                throw error;
            }
        }
    }
})();