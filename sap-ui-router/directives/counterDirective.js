(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('counterAttr', constructor);

        constructor.$inject = ['$window', '$log'];

    function constructor($window, $log) {
        // Usage:
        //     <div counter-attr></div>
        // Creates:
        //
        var dirObject = {
            link: link,
            restrict: 'A'
        };
        return dirObject;

        function link(scope, element, attrs) {
            // read element attribute if it exists
            var increase  = parseInt( attrs.increase );
            $log.log(increase);
            var startValue = 0;
            $log.log(startValue);
            element.bind( 'click', function(){
                element.html( startValue += increase );
            });
        }
    }

})();