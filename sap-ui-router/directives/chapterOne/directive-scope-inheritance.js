(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('dirScopeInheritance', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <directive directive-scope-inheritance></directive>
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            templateUrl: 'views/directiveViews/chapterOne/directive-scope-inheritance.html',
            link: link
           
        };
        return directive;

        function link(scope, element, attrs) {
            scope.overwrite = !!scope.origin;
            scope.origin = 'link function';
        }
    }

})();

