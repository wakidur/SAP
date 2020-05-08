(function () {
    'use strict';
    // http://jsfiddle.net/msfrisbie/ka46yx4u/
    angular
        .module ('appModule')
        .directive ('treeStructure', constructor);

        constructor.$inject = ['$window', '$compile', '$templateCache'];

    function constructor($window, $compile, $templateCache) {
        // Usage:
        //     <directive tree-directive></directive>
        // Creates:
        //
        // var directive = {
        //     scope: {
        //         val: '=',
        //         parentData: '='
        //     },
        //     link: link,
        //     restrict: 'EA'
        // };
        // return directive;

        // function link(scope, element, attrs) {
        //     scope.isParent = angular.isArray(scope.val.items);
        //     scope.deleteSubtree = deleteSubtree;
        //     element.replaceWith($compile($templateCache.get('views/directiveViews/chapterOne/treeDirective.html'))(scope));
        //     function deleteSubtree() {
        //         if( scope.parentData ) {
        //             scope.parentData.splice(scope.parentData.indexOf(scope.val), 1);
        //         }
        //         scope.val = {};
        //     }
        // }
        return {
            restrict: 'E',
            scope: {
                val: '=',
                parentData: '='
            },
            link: function(scope, el, attrs) {
                scope.isParent = angular.isArray(scope.val.items);
                scope.deleteSubtree = function() {
                    if(scope.parentData) {   
                        scope.parentData.splice(
                            scope.parentData.indexOf(scope.val),
                            1
                        );
                    }
                    scope.val={};
                }  ; 
                el.replaceWith(
                    $compile(
                        $templateCache.get('views/directiveViews/chapterOne/treeDirective.html')
                    )(scope)
                );
            }
        };
    }

})();