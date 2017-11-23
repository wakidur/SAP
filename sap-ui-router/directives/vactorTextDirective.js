(function () {
    'use strict';

    angular
        .module ('module')
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