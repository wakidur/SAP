(function(){
    'use strict';

    angular
        .module('module')
        .service('MyService', service)

    service.$inject = ['$http'];

    function service($http) {
        this.getData = getData;
        this.swapPlayer = swap;

        // private data and function 

        var player = {
            name: 'Philip Rivers',
            number: 12
        };

        function getData() { 
            return player;

        }
        function swap() {
            player.name = 'Alshon Jeffery';
        }
    }
})();