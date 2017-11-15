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
                return 'store' + record.url;
            } catch (error) {
                throw error;
            }
         }
        function imagePath(record) {
            try {
                return  record.image;
            } catch (error) {
                throw error;
            }
         }
        function title(record) {
            try {
                return record.title;
            } catch (error) {
                throw error;
            }
         }
        function description(record) {
            try {
                return record.description;
            } catch (error) {
                throw error;
            }
         }
        function buttonText(record) {
            try {
                return record.type;
                
            } catch (error) {
                throw error;
            }
         }
    }
})();