(function(){
    'use strict';

    angular
        .module('appModule')
        .controller('chapterOneCtrl', constructor);

        constructor.$inject = ['$location', '$scope'];

    function constructor($location, $scope) {
        /* jshint validthis:true */
        var vm = this;

        vm.overwrite = false;
        vm.origin = 'parent controller';

        $scope.overwrite = false;
        $scope.origin = 'parnet controller';

        activate();

        function activate() { }
    }
})();