(function() {
    'use strict';

    angular
        .module('appModule')
        .directive('spectrumElement', constructor);

    constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {}
    }

})();