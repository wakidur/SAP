(function () {
    'use strict';

    angular
        .module('module')
        .directive('myDirective', constructor);

    constructor.$inject = ['$window'];

    function direconstructorctive($window) {
        // Usage:
        //     <my-directive></my-directive>
        // Creates:
        //
        var directiveObject = {
            link: link,
            restrict: 'EA',
            templateUrl: './directive-template/my-directive.html',
            // or
            template: '<span> {{heading}} </span>',

            scope: {},
            // to declare a directive with an isolate scope, simply pass an ampty object literal as th scope property
            // with this, there will be no inheritance from the parent scope in Contrller

            scope: {
                innerval: '@myattr'
            },
            // read-only value to the directive, you will use @ inside the isolate scope
            // declaration to indicate that a named attribute of the relevant HTML element contains a value
            // that should be incorporated into the directive's isolate scope
            scope: {
                innerval: '=myattr'
            },
            scope: {
                innerval: '&myattr'
            }

        };
        return directiveObject;

        function link(scope, element, attrs) {}
    }

})();

/**
 *  step-1
 */