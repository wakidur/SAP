(function () {
    'use strict';

    angular
        .module('dataModelArchitecture')
        .service('ajaxService', constructor);

    constructor.$inject = ['$http', '$q'];

    function constructor($http, $q) {
        this.getCategories = getCategories;

        function getCategories() {
            try {
                return $http.get('model-data/modelData.json').then(function (response) {
                    var deferred = $q.defer();
                    if (response.data.categories.length) {
                        var reponseData = response.data;
                        deferred.resolve(reponseData);
                    } else {
                        deferred.reject(response);
                    }
                    return deferred.promise;
                });
            } catch (error) {
                console.log(error);
                throw error;

            }
        }
    }
})();

/*
(function () {
    'use strict';

    angular
        .module('dataModelArchitecture')
        .service('ajaxService', constructor);

    constructor.$inject = ['$http', '$q'];

    function constructor($http, $q) {
        this.getCategories = getCategories;

        function getCategories() {
            var reponseData = {};
            try {
                return $http.get('model-data/modelData.json').then(function (response) {
                    var deferred = $q.defer();
                    if (response.data.categories.length) {
                        reponseData.config = response.config.method;
                        reponseData.url = response.config.url;
                        reponseData.data = response.data.categories;
                        deferred.resolve(reponseData);
                    } else {
                        deferred.reject(response);
                    }
                    return deferred.promise;
                });
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    }
})();

*/