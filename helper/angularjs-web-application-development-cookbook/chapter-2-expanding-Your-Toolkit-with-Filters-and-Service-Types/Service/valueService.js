(function(){
    'use strict';

    angular
        .module('module')
        .value('valueService', {
            name: 'Tim Tebow',
            number: 15
        });

}());

(function(){
    'use strict';

    angular
        .module('module')
        .controller('myValue', controller);

    controller.$inject = ['$location', '$scope', 'valueService'];

    function controller($location, $scope, valueService) {
        /* jshint validthis:true */
        var vm = this;

        vm.data = valueService;
        vm.update = update;
        
        function update() {
            valueService.name = "Brandon Marshall";
        }


        activate();

        function activate() { }
    }
})();

/*
<div ng-app="myApp">
    <div ng-controller="vm as myValue">
        <button ng-click="update()">Update</button>
        {{ vm.data.name }} #{{ vm.data.number }}
    </div>
</div>
*/