/**
 * Modified by Rasel Ahmed on 13/08/2017.
 */


'use strict';

define([ERP_MODULES.GS.name + '/gsModule'], function (controllers) {

 

    controllers.controller('seasonCtrl', ['$scope', 'seasonModelSvc', 'seasonDataSvc', 'appConstants', 'modalSvc', 'appMsgSvc', 'utilityModelSvc', '$rootScope',

        function ($scope, seasonModelSvc, seasonDataSvc, appCnts, modalSvc, appMsgSvc, utilityModelSvc, $rootScope) {

        var vm = $scope; // rename $scope

        var dataSvc = new seasonDataSvc();
        var viewData = new seasonModelSvc();

        vm.model = viewData;

        // global variable
        var tempSeason = {};

        var message = {
            duplicateEntry: '896'
        }


        // set focus
        CONTROL.setFocus('season');

        // binding variable 
        vm.validationMsgs = {};

        vm.searchCriteria = {
            season: null,
            shortName: null
        };



        vm.gridOptions = {
            dataSource: "model.seasonList",
            refreshEvent: "getSeason()",
            isReload: 'model.isReload'
        };


        // binding method 
        vm.checkSeasonValidation = checkSeasonValidation;
        vm.checkSeasonShortNameValidation = checkSeasonShortNameValidation;
        vm.getSeason = getSeason;
        vm.onChangeSeason = onChangeSeason;
        vm.search = search;
        vm.searchReset = searchReset;

        vm.save = save;
        vm.reset = reset;
        vm.cancel = cancel;
        vm.editSeason = editSeason;
        vm.deleteSeason = deleteSeason;


        _init();

        function _init() {
            try {

                viewData.season = new season({
                    locationID: userInfo.locationID,
                    isActive: true
                });
                vm.validationMsgs = getSeasonVMsgs();
                vm.validationMsgs.season.name = {
                    customValidation: "checkSeasonValidation",
                    customMsg: validationMsg.season
                };
                vm.validationMsgs.season.shortName = {
                    customValidation: "checkSeasonShortNameValidation",
                    customMsg: validationMsg.seasonShortName
                };

                dataSvc.getSeason().then(function (data) {
                    viewData.seasonList = data;
                    viewData.tempSeasonList = angular.copy(viewData.seasonList);
                }).catch(function (e) {
                    _dispalyError(e);
                });

            } catch (e) {
                _dispalyError(e);
            }
        }

        function checkSeasonValidation() {
            try {
                if (viewData.season.name === '' || viewData.season.name === 'undefined' || viewData.season.name == null)
                    return false;

                return true;
            } catch (e) {
                _dispalyError(e);
            }
        }

        function checkSeasonShortNameValidation() {
            try {
                if (viewData.season.shortName === '' || viewData.season.shortName === 'undefined' || viewData.season.shortName == null)
                    return false;

                return true;
            } catch (e) {
                _dispalyError(e);
            }
        }

        function getSeason() {
            try {
                dataSvc.getSeason().then(function (data) {
                    viewData.seasonList = data;
                    viewData.tempSeasonList = angular.copy(viewData.seasonList);

                    if (vm.searchCriteria.season || vm.searchCriteria.shortName) vm.onChangeSeason();

                }).catch(function (e) {
                    _dispalyError(e);
                });
            } catch (e) {
                _dispalyError(e);
            }
        }


        function onChangeSeason() {
            try {
                var searchParams = [{
                    searchVal: vm.searchCriteria.season,
                    property: "name"
                }, {
                    searchVal: vm.searchCriteria.shortName,
                    property: "shortName"
                }];

                viewData.seasonList = getItemSearchByValue(viewData.tempSeasonList, searchParams);
            } catch (e) {
                _dispalyError(e);
            }
        }

        function search() {
            try {
                onChangeSeason();
            } catch (e) {
                _dispalyError(e);
            }
        }

        function searchReset() {
            try {
                vm.searchCriteria.season = null;
                vm.searchCriteria.shortName = null;
                viewData.seasonList = angular.copy(viewData.tempSeasonList);

            } catch (e) {
                _dispalyError(e);
            }
        }


        function save(vldRslt) {
            try {
                var validationObj = vldRslt.validateForm();

                if (validationObj.isValid) { //Check Validation
                    var isDuplicate = viewData.checkDuplicate();

                    if (isDuplicate) {
                        appMsgSvc.showMessage(message.duplicateEntry);
                        return;
                    }

                    var messageCode = viewData.season.id ? appCnts.messageCode.editCode : appCnts.messageCode.saveCode;

                    dataSvc.save(viewData.season).then(function (data) {

                        _afterSave(data, vldRslt, messageCode);

                    }).catch(_dispalyError);
                }
            } catch (e) {
                _dispalyError(e);
            }
        }

        function _afterSave(data, vldRslt, messageCode) {
            try {

                viewData.updateGridData(data);

                viewData.season = new season({
                    locationID: userInfo.locationID,
                    isActive: true
                });

                if (vm.searchCriteria.season || vm.searchCriteria.shortName) vm.onChangeSeason();

                vldRslt.resetForm();
                viewData.isReload = !viewData.isReload;
                appMsgSvc.showMessage(messageCode);
            } catch (e) {
                _dispalyError(e);
            }
        }


        function reset(vldRslt) {
            try {
                if (viewData.season.id) {
                    viewData.season = angular.copy(tempSeason);
                } else {
                    viewData.season = new season({
                        locationID: userInfo.locationID,
                        isActive: true
                    });
                    // set focus
                    CONTROL.setFocus('season');
                }

                vldRslt.resetForm();

            } catch (e) {
                _dispalyError(e);
            }
        }

        function cancel() {
            try {
                viewData.season = new season({
                    locationID: userInfo.locationID,
                    isActive: true
                });
                // set focus
                CONTROL.setFocus('season');
                vm.masterFormPristine();
            } catch (e) {
                _dispalyError(e);
            }
        }

        function editSeason(entity) {
            try {
                if (vm.checkFormDirty()) {
                    modalSvc.showConfirmModal('617').then(function (result) {
                        if (result === 'Yes') {
                            viewData.season = angular.copy(entity);
                            tempSeason = angular.copy(viewData.season);
                            vm.masterFormPristine();
                        }
                    });
                } else {
                    viewData.season = angular.copy(entity);
                    tempSeason = angular.copy(viewData.season);
                    vm.masterFormPristine();
                }
            } catch (e) {
                _dispalyError(e);
            }

        }

        function deleteSeason(entity) {
            try {
                modalSvc.showConfirmModal(appCnts.messageCode.confirmDelete).then(function (result) {
                    if (result === 'Yes') {
                        dataSvc.deleteSeason(entity).then(function () {
                            var index = viewData.seasonList.indexOf(entity);
                            if (index > -1)
                                viewData.seasonList.splice(index, 1);

                            // delete from tempList
                            var index1 = utilityModelSvc.findIndexByKeyValue(viewData.tempSeasonList, "id", entity.id);
                            if (index1 > -1) {
                                viewData.tempSeasonList.splice(index1, 1);
                            }


                            if (entity.id === viewData.season.id) {
                                viewData.season = new season({
                                    locationID: userInfo.locationID,
                                    isActive: true
                                });
                                vm.masterFormPristine();
                            }

                            appMsgSvc.showMessage(appCnts.messageCode.deleteCode);

                        }).catch(function (ex) {
                            _dispalyError(ex);
                        });
                    }
                });
            } catch (e) {
                _dispalyError(e);
            }
        }

        //error method
        function _dispalyError(e) {
            appMsgSvc.ShowExceptionMessage(e);
        }

    }]);

});