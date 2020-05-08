(function () {
    'use strict';
    //restrict 
    //template
    angular
        .module ('appModule')
        .directive ('basicDirective', constructor);

        constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            template : 'My first directive {{textToInsert}}',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.textToInsert = "New value add ";
            console.log('Scope ' + scope + '\n' + 'element Name ' + element.context.localName  + '\n' + 'attrs ' + attrs);
        }
    }

})();