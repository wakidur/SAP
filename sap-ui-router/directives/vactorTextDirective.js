(function () {
    'use strict';
/**
 * The following directive will display NW, NE, SW, or SE depending on where the corsor is relative to it.
 */
    angular
        .module ('appModule')
        .directive ('appModule', constructor);

        constructor.$inject = ['$window', '$document'];

    function constructor($window, $document) {
        // Usage:
        //     <div buffer="300" vector-text></div>
        // Creates:
        //
        var directiveObject = {
            link: link,
            restrict: 'EA',
            template: '<span> {{heading}} </span>'
        };
        return directiveObject;

        function link(scope, element, attrs, controller) {
            ini
        }
    }

})();