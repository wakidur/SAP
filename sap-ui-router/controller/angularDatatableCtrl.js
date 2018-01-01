(function () {
    'use strict';

    angular
        .module('appModule')
        .controller('angularDatatable', constructor)

    constructor.$inject = ['$location', '$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'DTColumnBuilder', '$http', '$q', '$resource'];

    function constructor($location, $scope, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, $http, $q, $resource) {
        /* jshint validthis:true */
        //var vm = this;


        var vm = this;
        vm.message = 'Hi from home';
        vm.hello = "Zero configuration";

        // With options----------------------------
        var vm = this;
        vm.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withDisplayLength(2)
            .withDOM('pitrfl');
        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1).notVisible(),
            DTColumnDefBuilder.newColumnDef(2).notSortable()
        ];


        // With ajax----------------
        vm.dtOptions = DTOptionsBuilder.fromSource('data/withAjax.json').withPaginationType('full_numbers');
        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name')
        ];


        // With a function that returns a promise--------------------------
        vm.dtOptions = DTOptionsBuilder.fromFnPromise( () => {
            let defer = $q.defer();
            $http.get('data/withAjax.json').then( (result) => {
                defer.resolve(result.data);
            });
            return defer.promise;
        }).withPaginationType('full_numbers');
        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name')
        ];


        // The Angular way
        $resource('data/withAjax.json').query().$promise.then( (persons) => {
            vm.persons =  persons;
        })
        // $resource('data/withAjax.json').query().$promise.then(function(persons) {
        //     vm.persons = persons;
        // });

        activate();

        function activate() {}
    }
})();