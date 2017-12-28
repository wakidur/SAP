(function(){
    'use strict';

    angular
        .module('module')
        .provider('Player', providerProvider)

    function providerProvider() {
        var configValue = false;
        this.setConfigValue = function (value) {
            configValue = value;
        };
        var player = {
            name: 'Aaron Rodgers',
            number: 12
        }
        function swap() {
            player.name = 'Tom Brady';
        }

        /* jshint validthis:true */
        this.$get = providerFactory;

        providerFactory.$inject = ['$http'];
        function providerFactory($http) {
            var service = {
                getData: getData,
                swapPlayer: swapPlayer
            };

            return service;


            function getData() {
                return player;
            }
            function swapPlayer() {
                swap();
            }
        }
    }
})();