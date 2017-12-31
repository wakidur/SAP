(function(){
    'use strict';

    angular
        .module('module')
        .factory('MyFactory', factory);

    factory.$inject = ['$http'];

    function factory($http) {
        /*A common and useful pattern is to define private data and functions outside this
            object, and define an API to them through a returned object.*/

        // public API
        var service = {
            getData: getData,
            swapPlayer: swap
        };

        return service;

        //  private data and functions
        //  private variables and functions

        var player = {
            name : 'Payton Manning',
            number: 18
        };

        function getData() { 
            return player;
        }
        function swap() { 
            player.name = "A.J Green";
        }
    }
})();