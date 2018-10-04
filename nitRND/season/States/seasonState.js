import { ERP_MODULES, gsVersionNumber } from "../helper/javaScriptVariables";
import {  } from "../Controllers/seasonCtrl";
import {  } from "../Services/SeasonModelSvc";
import {  } from "../Services/seasonDataSvc";
import { season } from "./Services/Season";

define([], function() {
    'use strict';
    var stateConfigs = [];
    return {
        stateCtor: function(stateName) {
            if (stateConfigs.length === 0) {
                var accItemPlacement = {
                    name: statename,
                    templateUrl: '/' + ERP_MODULES.GS.name + '/Views/season' + gsVersionNumber + '.html',
                    lazyDependencies: [
                        ERP_MODULES.GS.name + '/Controllers/seasonCtrl' + gsVersionNumber,
                        ERP_MODULES.GS.name + '/Services/Season/SeasonModelSvc' + gsVersionNumber,
                        ERP_MODULES.GS.name + '/Services/Season/seasonDataSvc' + gsVersionNumber,
                        ERP_MODULES.GS.name + '/Models/Season' + gsVersionNumber,

                    ]
                };
                stateConfigs.push(accItemPlacement);
                resolveState(ERP_MODULES.APP.name, stateConfigs);

            }
            return stateConfigs;
            
        }
    }
    
});