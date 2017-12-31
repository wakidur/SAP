(function () {
    'use strict';

    angular
        .module('module')
        .config(function (MyConstant) {
            // can't inject $log into config()
            console.log(MyConstant);
        })
        .controller('Ctrl', function ($scope, MyConstant) {
            $scope.data = MyConstant;
            $scope.update = function () {
                MyConstant.name = 'Brandon Marshall';
            };
        })
        .constant('MyConstant', {
            name: 'Tim Tebow',
            number: 15
        });

}());
/*
<div ng-app="myApp">
    <div ng-controller="Ctrl">
    <button ng-click="update()">Update</button>
    {{ data.name }} #{{ data.number }}
    </div>
</div>
*/