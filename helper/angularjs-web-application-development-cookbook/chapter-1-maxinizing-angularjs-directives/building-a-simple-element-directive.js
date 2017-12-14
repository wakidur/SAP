(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('buildingSimpleElement', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        
        var directive = {
            restrict: 'EA',
            templateUrl: 'directive-template/building-a-simple-element-directive.html',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();