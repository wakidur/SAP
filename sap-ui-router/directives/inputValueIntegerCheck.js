(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('integer', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <integer></integer>
        // Creates:
        //
        var integer_regexp = /^-?\d+$/;
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            ctrl.$validators.integer = function(moduleValue, viewValue) {
                if(ctrl.$isEmpty(moduleValue)){
                 return true;
                }
                if(integer_regexp.test(viewValue)){
                    return true;
                }
                // it is invalid
                return false;
            };

        }
    }

})();