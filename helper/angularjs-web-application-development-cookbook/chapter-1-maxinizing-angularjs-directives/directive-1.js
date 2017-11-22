(function () {
    'use strict';

    angular
        .module ('module')
        .directive ('myDirective', constructor);

        constructor.$inject = ['$window'];

    function direconstructorctive($window) {
        // Usage:
        //     <my-directive></my-directive>
        // Creates:
        //
        var directiveObject = {
            link: link,
            restrict: 'EA',
            templateUrl: './directive-template/my-directive.html'
        };
        return directiveObject;

        function link(scope, element, attrs) {
        }
    }

})();

/**
 *  step-1
 */

 (function () {
     'use strict';
 
     angular
         .module ('module')
         .directive ('elementDirective', constructor);
 
         constructor.$inject = ['$window', '$log'];
 
     function constructor($window, $log) {
         // Usage:
         //     <element-directive></element-directive>
         // Creates:
         //
         var directiveObject = {
             link: link,
             restrict: 'E',
             template: '<p>Ze template! </p>'
         };
         return directiveObject;
 
         function link(scope, element, attrs) {
            $log.log(element.html());
            $log.log(attrs.someAttr);
         }

     }
 
 })();

