(function(){
    'use strict';

    angular
        .module('dataModelArchitecture')
        .factory('modelBuilderSvc', constructor);

        constructor.$inject = ['$http'];

    function constructor($http) {
        var service = {
            buildModelList: buildModelList
        };

        return service;

        function buildModelList(list, configObj) {
            try {
                var modelList = [];
                angular.forEach(forEach, function(item) {
                    var model = {}, key;
                    for(key in configObj) {
                        if(configObj.hasOwnProperty(key) && typeof configObj[key] === 'function'){
                            model[key] = configObj[key](item);
                        }
                    }
                    modelList.push(model);
                    
                });
                return modelList;
                
            } catch (error) {
                
            }
         }
    }
})();