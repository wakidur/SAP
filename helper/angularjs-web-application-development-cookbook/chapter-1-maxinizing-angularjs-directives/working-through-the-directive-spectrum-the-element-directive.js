/*Working through the directive spectrum - The Element Directive*/
(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('spectrumElement', constructor);

    constructor.$inject = ['$window', '$log'];

    function constructor($window, $log) {
        /**
         * Usage:
         *    <spectrum-element></spectrum-element>
         * Creates:
         */

        var directive = {
            link: link,
            restrict: 'E',
            template: '<p>Ze template!</p>'
        };
        return directive;

        function link(scope, element, attrs) {
            $log.log(element.html());
            $log.log(attrs.someAttr);
        }
    }
})();
/*Working through the directive spectrum - The Element Directive - with "replace" property */
(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('spectrumElementReplace', elementReplace);

    elementReplace.$inject = ['$window', '$log'];

    function elementReplace($window, $log) {
        // Usage:
        //     <spectrum-element-replace></spectrum-element-replace>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            replace: true,
            template: '<p> Replace property true </p>'
        };
        return directive;

        function link(scope, element, attrs) {
            $log.log(element.html());
            $log.log(attrs.attrValue);
        }
    }

})();
/*Working through the directive spectrum - The Attribute Directive  */
(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('spectrumAttribute', attributeConstructor);

    attributeConstructor.$inject = ['$window', '$log'];

    function attributeConstructor($window, $log) {
        // Usage:
        //     <div spectrum-attribute></div spectrum-attribute>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            template: '<p> An attribute Directive </p>'
        };
        return directive;

        function link(scope, element, attrs) {
            $log.log(element.html());
            $log.log(attrs.spectrumAttribute);
            $log.log(attrs.attrDirValue);
        }
    }

})();

/* Working through the directive spectrum - The Class Directive */
(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('spectrumClass', classConstructor);

    classConstructor.$inject = ['$window', '$log'];

    function classConstructor($window, $log) {
        // Usage:
        //     <div class="spectrum-class: cval; normal-class" class-dir-value="myvalue"></div>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'C',
            template: '<p> A class directive </p>'
        };
        return directive;

        function link(scope, element, attrs) {
            $log.log(element.html()); // <p> a class directive</p>
            $log.log(element.hasClass('normal-class')); // true
            $log.log(attrs.spectrumClass);
            $log.log(attrs.classDirValue);
        }
    }

})();

/* Manipulating the DOM */
(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('counterDir', counterConstructor);

    counterConstructor.$inject = ['$window'];

    function counterConstructor($window) {
        // Usage:
        //     <div counter-dir incr="5"></div>
        // Creates:
        //
        let directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            // read element attribute of it exists
            let incr = parseInt(attrs.incr || 1);
            let value = 0;
            // define callback for vanilla DOM click event;
            element.bind('click', () => {
                element.html(value += incr);
            });
        }
    }

})();

/* Linking directives */
(function () {
    'use strict';

    angular
        .module('appModule')
        .directive('vectorText', vectorTextConstructor);

    vectorTextConstructor.$inject = ['$window', '$document', '$rootScope', '$log'];

    function vectorTextConstructor($window, $document, $rootScope, $log) {
        // Usage:
        //     <div buffer="300" vector-text></div>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            template: '<button>{{ heading }}</button>'
        };
        return directive;

        function link(scope, element, attrs) {
            $log.log(element.parent());
            $log.log(
                element.parent().hasClass('content')
            );
            $log.log("querySelector " + element[0].querySelector('button'));
            $log.log("child " + element.children().text());

            // initialize the cass
            element.css({
                'float': 'left',
                'background': '#09c',
                'padding': attrs.buffer + "px",
            });
            // initialize the scope variable
            $rootScope.heading = '';
            // set event listener and handler
           
            $document.on('mousemove', (event) => {
                // Mousemove event does not start $digest,
                // scope.$apply does this manually
                $rootScope.$apply( () => {
                    $log.log(event);
                    if( event.pageY < 300 ) {
                        //$log.log(event.pageY)
                        $rootScope.heading = 'N';
                    } else {
                        $rootScope.heading = 'S';
                    }
                    if ( event.pageX < 300 ) {
                        $rootScope.heading += 'W';
                    } else {
                        $rootScope.heading  += 'E';
                    }
                });
            });
            /*
            element.on('mousemove', (event) => {

                // Mousemove event does not start $digest,
                // scope.$apply does this manually
                $rootScope.$apply(() => {
                    if (event.pageY < 300) {
                        $log.log("child " + element.children().text());
                        $rootScope.heading = 'N';
                    } else {
                        $rootScope.heading = 'S';
                    }
                    if (event.pageX < 300) {
                        $rootScope.heading += 'W';
                    } else {
                        $rootScope.heading += 'E';
                    }
                });
            });
            */
        }
    }
})();

/*Interfacing with a directive using isolate scope -*/
(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('iso', isoConstructor);

        isoConstructor.$inject = ['$window'];

    function isoConstructor($window) {
        // Usage:
        //     <div iso></div>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            template: 'Inner: {{ innerval }}',
            scope: {
                /*Interfacing with a directive using isolate scope - @*/
                innerval: '@myattr'
                /*Interfacing with a directive using isolate scope - =*/
                //innerval: '=myattr'
                /*Interfacing with a directive using isolate scope - &*/
                //innerval: '&myattr'
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
            /*Interfacing with a directive using isolate scope - &*/
            //scope.innerval();
        }
    }

})();
/*Interaction between nested directives */

(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('parentDir', parentDirConstructor);

        parentDirConstructor.$inject = ['$window', '$log'];

    function parentDirConstructor($window, $log) {
        // Usage:
        //     <div parent-dir></div>
        // Creates:
        //
        var directive = {
            controller: constructor,
            link: link,
            restrict: 'EA',

            
        };
        return directive;

        function link(scope, element, attrs) {
        }
        function constructor() {

            this.identify = identify;

            function identify(params) {
                $log.log('Parent!');
                
            }
        }
    }

})();
(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('siblingDir', siblingDirConstructor);

        siblingDirConstructor.$inject = ['$window', '$log'];

    function siblingDirConstructor($window, $log) {
        // Usage:
        //     <div parent-dir></div>
        // Creates:
        //
        var directive = {
            controller: constructor,
            link: link,
            restrict: 'EA',

            
        };
        return directive;

        function link(scope, element, attrs) {
        }
        function constructor() {

            this.identify = identify;

            function identify(params) {
                $log.log('Sibling!');
                
            }
        }
    }

})();