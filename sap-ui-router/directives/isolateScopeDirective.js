(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('isolateScope', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <div isolate-scope ></div>
        // Creates:
        //
        var directiveObject = {
            link: link,
            restrict: 'EA',
            template: '<h1>Inner Directive : {{innerval}}</h1>',
            // scope: {}
            scope: {
                innerval: '@getattrvalue'
            }

            // scope: {
            //     innerval: '=getattrvalue'
            // }

            scope: {
                innerval: '&getattrvalue'
            }
        };
        return directiveObject;

        function link(scope, element, attrs) {
            scope.innerval();
        }
    }

})();