(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('parentDirective', parentDirective);

    parentDirective.$inject = ['$window'];

    function parentDirective($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directiveObj = {
            link: link,
            restrict: 'EA',
            controller: constructor
        };
        return directive;

        function link(scope, element, attrs) {}
        function constructor() {
            this.identify = function(){
                $log.log('Parent!');
            }
        }
    }

    

    angular
        .module('appModule')
        .directive('siblingDirective', siblingDirective);

    siblingDirective.$inject = ['$window'];

    function siblingDirective($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directiveObj = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {}
    }
    angular
        .module('appModule')
        .directive('childDirective', childDirective);

    childDirective.$inject = ['$window'];

    function childDirective($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directiveObj = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();