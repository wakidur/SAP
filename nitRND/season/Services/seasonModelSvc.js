
/**
 * Modified by Rasel Ahmed on 13/08/2017.
 */

"use strict";
define([ERP_MODULES.GS.name + '/gsModule'], function (services) {


        services.factory('seasonModelSvc', ['$rootScope', 'appConstants', 'appValues', 'miscCodesSvc', 'utilityModelSvc', function($rootScope, appConstants, appValues, miscCodes, utilityModelSvc){
            var modelServices = null;
            return function () {
                if (services.svcTools.isSvcInstance) {
                    modelServices = null;

                    // Main object binding
                    this.season = {}; // main object
                    this.seasonList = [];
                    this.tempSeasonList = [];
                    this.isReload = false;

                    // method binding
                    this.checkDuplicate = checkDuplicate;
                    this.updateGridData = updateGridData;
                    modelServices = this;
                    services.svcTools.isSvcInstance = false;
                    return this;
                }
                return modelServices;
            }

            // Method implementation
            function checkDuplicate() {
                try {
                    var isDuplicateName = utilityModelSvc.checkDuplicateEntry(this.seasonList, this.season, 'name');
                    var isDuplicateShortName = utilityModelSvc.checkDuplicateEntry(this.seasonList, this.season, 'shortName');
                    if (isDuplicateName || isDuplicateShortName) {
                        return true;
                    }
                    return false;
                } catch (error) {
                    throw error;
                }
            }

            function updateGridData(successData) {
                try {
                    utilityModelSvc.updateCollection(this.seasonList, successData);
                    utilityModelSvc.updateCollection(this.tempSeasonList, successData);
                    this.tempSeasonList = Enumerable.From(this.tempSeasonList).where(function(x) {
                        return x;
                    }).OrderBy('$.name.toLowerCase()').ToArray();
                } catch (error) {
                    throw error;
                }
                
            }

        }]);


       
               
   
       


   
});