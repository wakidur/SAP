(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('buildingSimpleElement', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        
        var directive = {
            restrict: 'EA',
            templateUrl: 'directive-template/building-a-simple-element-directive.html',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();

// directives that have '=' binding, changing scope value causes error if not specified(optional)
// https://github.com/angular/angular.js/issues/1435
(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('some', someConstructor);

        someConstructor.$inject = ['$window'];

    function someConstructor($window) {
        // Usage:
        //     <some ></some >
        // Creates:
        
        var directive = {
            restrict: 'EA',
            template: '<p> </p>',
            link: link,
            scope: {
                selected: '=?'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            if(attrs.selected) {
                getSelected = $parse(attrs.selected);
                setSelected = getSelected.assign;
                scope.$watch(
                    function watchSelected() {
                        return getSelected(scope.$parent);
                    },
                    function name(updateSelected) {
                        if(setSelected){
                            setSelected( scope.$parent, value);
                        }
                        scope.selected = value;
                        
                    }
                );
                scope.selected = getSelected ? getSelected(scope.$parent) : false;
            }
        }
    }

})();

(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('some', someConstructor);

        someConstructor.$inject = ['$window'];

    function someConstructor($window) {
        // Usage:
        //     <some ></some >
        // Creates:
        
        var directive = {
            restrict: 'EA',
            template: '<p> </p>',
            link: link,
            scope: {
                selected: '=?'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            if(attrs.selected) {
                getSelected = $parse(attrs.selected);
                setSelected = getSelected.assign;
                scope.$watch(
                    function watchSelected() {
                        return getSelected(scope.$parent);
                    },
                    function name(updateSelected) {
                        if(setSelected){
                            setSelected( scope.$parent, value);
                        }
                        scope.selected = value;
                        
                    }
                );
                scope.selected = getSelected ? getSelected(scope.$parent) : false;
            }
            scope.$watch('selected', function (value) {
                if (setSelected) {
                    setSelected(scop.$parent, value)
                    
                }
            })
        }
    }

})();