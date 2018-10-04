
/**
 * Modified by Rasel Ahmed on 13/08/2017.
 */

"use strict";
define([ERP_MODULES.GS.name + '/gsModule'], function (services) {

    var injectParams = ['$rootScope', 'appConstants', 'appValues', 'miscCodesSvc', 'utilityModelSvc'];

    var modelSvc = function ($rootScope, appConstants, appValues, miscCodes, utilityModelSvc) {

        var modelServices = null;


        return function () {

            if (services.svcTools.isSvcInstance) {
                modelServices = null;

                // main object binding
                this.season = {}; // main object 
                this.seasonList = [];
                this.tempSeasonList = [];
                this.isReload = false;


                //method binding
                this.checkDuplicate = checkDuplicate;
                this.updateGridData = updateGridData;


                modelServices = this;
                services.svcTools.isSvcInstance = false;

                return this;
            }
            return modelServices;
        };

        // method implimentation
        function checkDuplicate() {
            try {

                var isDuplicateName = utilityModelSvc.checkDuplicateEntry(this.seasonList, this.season, 'name');
                var isDuplicateShortName = utilityModelSvc.checkDuplicateEntry(this.seasonList, this.season, 'shortName');

                if (isDuplicateName || isDuplicateShortName)
                    return true;

                return false;

            } catch (e) {
                throw e;
            }
        }


        function updateGridData(successData) {
            try {

                utilityModelSvc.updateCollection(this.seasonList, successData);
                utilityModelSvc.updateCollection(this.tempSeasonList, successData);

                this.tempSeasonList = Enumerable.From(this.tempSeasonList).Where(function (x) {
                    return x;
                }).OrderBy("$.name.toLowerCase()").ToArray();


            } catch (e) {
                throw e;
            }
        }


    };// end main method 
    //inject settings
    modelSvc.$inject = injectParams;
    services.factory('seasonModelSvc', modelSvc);
});