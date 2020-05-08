(function () {
    'use strict';

    angular
        .module ('appModule')
        .directive ('isolateScopeFromDirective', constructor);

    constructor.$inject = ['$window'];

    function constructor($window) {
        // Usage:
        //     <isolate-scope-from-directive></isolate-scope-from-directive>
        // Creates:
        //
        var directive = {
            //link: link,
            restrict: 'E',
            // templateUrl: 'views/directiveViews/isolate-scope-from-directive.html',
            template : "User : <b>{{user.firstName}}</b> <b>{{user.lastName}}</b>",
            scope: {
                user : "=user"
            }
            //,
            // controller: function ($scope, $http){
            //     $scope.jakob = {};
            //     $scope.jakob.firstName = "Jakob";
            //     $scope.jakob.lastName  = "Jenkov";
            
            //     $scope.john = {};
            //     $scope.john.firstName = "John";
            //     $scope.john.lastName  = "Doe";
            // }
        };
        return directive;

        // function link(scope, element, attrs) {
        //     scope.jakob = {};
        //     scope.jakob.firstName = "Jakob";
        //     scope.jakob.lastName  = "Jenkov";
        
        //     scope.john = {};
        //     scope.john.firstName = "John";
        //     scope.john.lastName  = "Doe";

        // }
    }

})();