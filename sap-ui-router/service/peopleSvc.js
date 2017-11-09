(function (angular) {
    'use strict';

    angular.module('appModule')
        .service("peopleService", constructor);

    constructor.$inject = ['$http', '$q'];

    function constructor($http, $q) {
        // $scope.grids = ['horizontal','Stacked'];

        var service = {
            getAllPeople: getAllPeople,
            getPerson: getPerson
        };

        return service;

        // get All People
        function getAllPeople() {
            return $http.get('data/people.json', {
                cache: true
            }).then(function (resp) {
                var deferred = $q.defer();
                var responseValue = resp.data;
                deferred.resolve(responseValue);
                return responseValue;
            });
        }

        // get Person
        function getPerson(id) {
            function personMatchesParam(person) {
                return person.id === id;
            }
            return service.getAllPeople().then(function (people) {
                return people.find(personMatchesParam);
            });
        }
    }

})(window.angular);

