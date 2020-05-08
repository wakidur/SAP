(function () {
    'use strict';
/**
 * The following directive will display NW, NE, SW, or SE depending on where the corsor is relative to it.
 */
    angular
        .module ('appModule')
        .directive ('vectorText', constructor);

        constructor.$inject = ['$window', '$document', '$log'];

    function constructor($window, $document, $log) {
        // Usage:
        //     <div vector-text buffer="300"></div>
        // Creates:
        //
        var directiveObject = {
            link: link,
            restrict: 'EA',
            template: '<span> {{heading}} </span>'
        };
        return directiveObject;

        function link(scope, element, attrs, controller) {
            // initial
            $log.log("Scope " + scope + " \n");
            $log.log("Element " + element + " \n");
            $log.log("attrs " + attrs + " \n");
            $log.log("controller " + controller + " \n");

            // Initialize the CSS
            element.css({
                'float' : 'left',
                'padding' : attrs.buffer + "px"
            });

            //initalize the scope variable
            scope.heading = '';

            // Set event listener and handler
            $document.on('mousemove', vectorText);

            function vectorText(event) {
                // mousemove event does not start $digest,
                // scope.$apply does this manually
                scope.$apply(function(){
                    $log.log("pageY " + event.clientY + " \n");
                    $log.log("pageX " + event.clientX + " \n");
                    if(event.clientY > 300 ){
                        scope.heading = "N";
                    } else {
                        scope.heading = "S";
                    }
                    if(event.clientX > 300 ){
                        scope.heading += "W";
                    } else {
                        scope.heading += "E";
                    }
                });
            }
        }
    }

})();