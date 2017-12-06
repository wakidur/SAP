(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('directiveScopeInheritance', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <directive directive-scope-inheritance></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.overwrite = !!scope.origin;
            scope.origin = 'link function';
        }
    }

})();