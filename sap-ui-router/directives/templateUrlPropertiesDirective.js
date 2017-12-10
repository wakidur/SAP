(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('templateUrlPropertiesDirective', constructor);

    constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <template-url-properties-directive></template-url-properties-directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'views/directiveViews/template-url-properties-directive.html'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();

