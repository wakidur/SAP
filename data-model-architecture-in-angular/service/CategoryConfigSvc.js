(function(){
    'use strict';

    angular
        .module('dataModelArchitecture')
        .factory('categoryConfigSvc', constructor);

        constructor.$inject = ['$http'];

    function constructor($http) {
        var service = {
            url: url,
            imagePath: imagePath,
            title: title,
            description: description,
            buttonText: buttonText
        };

        return service;

        function url(record) {
            try {
                return 'store' + record.properties['seoUrl'][0];
            } catch (error) {
                throw error;
            }
         }
        function imagePath(record) {
            try {
                return '//store.bbcomcdn.com/' + record.properties['category.largeImage'][0];
            } catch (error) {
                throw error;
            }
         }
        function title(record) {
            try {
                return record.label;
            } catch (error) {
                throw error;
            }
         }
        function description(record) {
            try {
                return record.properties["description.en_US"][0];
            } catch (error) {
                throw error;
            }
         }
        function buttonText(record) {
            try {
                return record.properties.parentDimension;
                
            } catch (error) {
                throw error;
            }
         }
    }
})();