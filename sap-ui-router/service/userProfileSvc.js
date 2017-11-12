(function(angular) {
    'use strict';

    angular.module('appModule')
        .service("userProfileSve", constructor);

    constructor.$inject = ['$http', '$q'];

    function constructor($http, $q) {
        // $scope.grids = ['horizontal','Stacked'];

        var service = {
            getAllUser: getAllUser,
            getUser: getUser
        };

        return service;

        // get All People
        function getAllUser() {
            return $http.get('data/people.json').then(function(response) {
                var deferred = $q.defer();
                var reponseData = response.data;
                deferred.resolve(reponseData);
                return reponseData;
            });
        }

        function getUser(id) {
            function personMatchesParam(person) {
                return person.id === id;
            }
            return service.getAllUser().then(function(people) {
                console.log(people);
                return people.find(personMatchesParam);
                console.log(people);
            });
            console.log(people);
        }



        // return {
        //     getAllUser : function(){
        //         return $http.get('data/people.json').then(function(response) {
        //             var deferred = $q.defer();
        //             var reponseData = response.data;
        //             deferred.resolve(reponseData);
        //             return reponseData;
        //         });
        //     }
        // }

    }

})(window.angular);