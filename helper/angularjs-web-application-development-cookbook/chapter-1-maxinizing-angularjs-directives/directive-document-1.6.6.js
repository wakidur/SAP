(function () {
    'use strict';

    angular
        .module ('module')
        .directive ('directive', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            priority: 0,
            template: '<div></div>', // or // function(tElement, tAttrs) { ... },
            // or
            // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
            transclude: false,
            restrict: 'A',
            templateNamespace: 'html',
            scope: false,
            controller: function($scope, $element, $attrs, $transclude, otherInjectables) {  },
            controllerAs: 'stringIdentifier',
            bindToController: false,
            require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
            multiElement: false,
            compile: function compile(tElement, tAttrs, transclude) {
              return {
                 pre: function preLink(scope, iElement, iAttrs, controller) {  },
                 post: function postLink(scope, iElement, iAttrs, controller) {  }
              }
              // or
              // return function postLink( ... ) { ... }
            },
            // or
            // link: {
            //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
            //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
            // }
            // or
            // link: function postLink( ... ) { ... }
        };
        return directive;
    }

})();