(function () {
    'use strict';
    
    // Add Angular directive in DOM
    /*
    angular
        .module('appModule')
        .controller('datatableAdvanced', CustomElementCtrl)
        .directive('datatableWrapper', datatableWrapper)
        .directive('customElement', customElement);

    CustomElementCtrl.$inject = ['$location', 'DTOptionsBuilder', 'DTColumnBuilder'];

    function CustomElementCtrl($location, DTOptionsBuilder, DTColumnBuilder) {
        //  jshint validthis:true 
       var vm = this;
        vm.title = "Advanced usage";

        vm.dtOptions = DTOptionsBuilder.fromSource('data/withAjax.json')
            // Add your custom button in the DOM
            .withDOM('&lt;"custom-element"&gt;pitrfl');
        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name')
        ];

        activate();

        function activate() {}
    }

*/
/**
 * This wrapper is only used to compile your custom element
 */
/*
datatableWrapper.$inject = ['$timeout', '$compile'];
function datatableWrapper($timeout, $compile) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<ng-transclude></ng-transclude>',
        link: link
    };

    function link(scope, element) {
        // Using $timeout service as a "hack" to trigger the callback function once everything is rendered
        $timeout(function () {
            // Compiling so that angular knows the button has a directive
            $compile(element.find('.custom-element'))(scope);
        }, 0, false);
    }
}
*/
/**
 * Your custom element
 */

 /*
customElement.$inject = [];
function customElement() {
    return {
        restrict: 'C',
        template: '<h1>My custom element</h1>'
    };
}
*/

// Binding Angular directive to the DataTable=----------------------------------
angular
        .module('appModule')
        .controller('datatableAdvanced', BindAngularDirectiveCtrl);
        BindAngularDirectiveCtrl.$inject = ['$scope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder'];
        function BindAngularDirectiveCtrl($scope, $compile, DTOptionsBuilder, DTColumnBuilder) {
            var vm = this;
            vm.message = '';
            vm.edit = edit;
            vm.delete = deleteRow;
            vm.dtInstance = {};
            vm.persons = {};
            vm.dtOptions = DTOptionsBuilder.fromSource('data/withAjax.json')
                .withPaginationType('full_numbers')
                .withOption('createdRow', createdRow);
            vm.dtColumns = [
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('firstName').withTitle('First name'),
                DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
                DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
                    .renderWith(actionsHtml)
            ];
        
            function edit(person) {
                vm.message = 'You are trying to edit the row: ' + JSON.stringify(person);
                // Edit some data and call server to make changes...
                // Then reload the data so that DT is refreshed
                vm.dtInstance.reloadData();
            }
            function deleteRow(person) {
                vm.message = 'You are trying to remove the row: ' + JSON.stringify(person);
                // Delete some data and call server to make changes...
                // Then reload the data so that DT is refreshed
                vm.dtInstance.reloadData();
            }
            function createdRow(row, data, dataIndex) {
                // Recompiling so we can bind Angular directive to the DT
                $compile(angular.element(row).contents())($scope);
            }
            function actionsHtml(data, type, full, meta) {
                vm.persons[data.id] = data;
                return '<button class="btn btn-warning" ng-click="vm.edit(vm.persons[' + data.id + '])">' +
                    '   <i class="fa fa-edit"></i>' +
                    '</button>&nbsp;' +
                    '<button class="btn btn-danger" ng-click="vm.delete(vm.persons[' + data.id + '])" )"="">' +
                    '   <i class="fa fa-trash-o"></i>' +
                    '</button>';
            }
        }




})();