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
            this.identify = identify;
            function identify(){
                $log.log('Parent!');
            }
        }
    }

    

    angular
        .module('appModule')
        .directive('siblingDirective', siblingDirective);

    siblingDirective.$inject = ['$window', '$log'];

    function siblingDirective($window, $log) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directiveObj = {
            controller: constructor,
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {}
        function constructor() {
            this.identify = identify;
            function identify(){
                $log.log("Sibling!");
            } 
        }
    }


    angular
        .module('appModule')
        .directive('childDirective', childDirective);

    childDirective.$inject = ['$window', '$log'];

    function childDirective($window, $log) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directiveObj = {
            require: ['^parentDirective', '^siblingDirective', '^missingDirective'],
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs, ctrls) {
            ctrls[0].identify(); // parent!
            ctrls[1].identify(); // sibling!
            $log.log(ctrls[2]); // null
        }
    }

})();