(function () {
    'use strict';

    angular
        .module('appModule')
        .controller('chapterOneCtrl', constructor);

    constructor.$inject = ['$location', '$scope'];

    function constructor($location, $scope) {
        /* jshint validthis:true */
        var vm = this;
        //vm.showEmployeeModal = showEmployeeModal;
        vm.overwrite = false;
        vm.origin = 'parent controller';

        $scope.overwrite = false;
        $scope.origin = 'parnet controller';
        /*
                function showEmployeeModal() {
                    try {
                        var stateOpt = {
                            statePath: ERP_MODULES.HRM.name + '/States/piViewState',
                            stateIndex: 0,
                        };
                        modalSvc.showModal({ stateOptions: stateOpt }).then(function (modal) {
                            modal.closed.then(function (data) {
                                if (!isUndefinedOrNull(data)) {
                                    //vm.searchParams.employeeID = data.employeeID;
                                    vm.searchParams.employeeID = data.employeeID.replace(companyInfo.companyShortName, "");
                                    vm.searchParams.employeeName = data.name;
                                    vm.searchParams.unitID = data.unitID || null;
                                    vm.searchParams.deptID = data.deptID || null;
                                    vm.searchParams.secID = data.sectionID || null;
                                    vm.searchParams.flrID = data.floorID || null;
                                }
                            });
                        });
                    } catch (e) {
                        showError(e);
                    }
                }*/

        activate();

        function activate() {}
    }
})();