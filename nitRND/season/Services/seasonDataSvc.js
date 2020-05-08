
/**
 * Modified by Rasel Ahmed on 13/08/2017.
 */


"use strict";
define([ERP_MODULES.GS.name + '/gsModule'], function (services) {

    var injectParams = ['baseDataSvc', 'gsConstants', 'appValues'];

    var svc = function (baseDataSvc, gsConstants, appValues) {

        var dataSvc = null;

        var servicePath = gsConstants.url.gsLocalUrl + "Season/";

        return function () {
            if (services.svcTools.isSvcInstance) {
                dataSvc = null;

                // binding method 
                this.getSeason = getSeason;
                this.save = save;
                this.deleteSeason = deleteSeason;

                dataSvc = this;
                return this;
            }

            return dataSvc;
        };

        // method implementation
        function getSeason() {

            try {
                return baseDataSvc.executeQuery(servicePath + 'GetSeason');
            } catch (e) {
                throw e;
            }
        }

        function save(entity) {
            try {
                return baseDataSvc.save(servicePath, entity);
            } catch (e) {
                throw e;
            } 
        }

        function deleteSeason(entity) {
            try {
                return baseDataSvc.remove(servicePath, entity);
            } catch (e) {
                throw e;
            } 
        }

    };// end main method 

    svc.$inject = injectParams;
    services.factory('seasonDataSvc', svc);
});