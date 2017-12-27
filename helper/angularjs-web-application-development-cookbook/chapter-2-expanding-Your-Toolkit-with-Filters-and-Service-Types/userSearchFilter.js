(function () {
    'use strict';
    /*
    angular.forEach(obj, iterator, [context]);
    var values = {
        name: 'misko',
        gender: 'male'
    };
    var log = [];
    angular.forEach(values, function (value, key) {
        this.push(key + ': ' + value);
    }, log);
    */
    angular
        .module('module')
        .filter('userSearch', userSearchFilter);

    function userSearchFilter() {

        return filterFilter;

        function filterFilter(users, search) {
            let matches = [];
            angular.forEach(users, (user) => {
                if ( !angular.isDefined(users) || !angular.isDefined(search)) {
                    return false;
                }
                // initialize match conditions
                let nameMatch = false;
                let numberMatch = false;
                if (angular.isDefined(search.name) && search.name.length > 0) {
                    // substring of first or last name will match
                    if( angular.isDefined(user.firstName)){
                        nameMatch = nameMatch || user.firstName.indexOf(search.name) > -1;
                    }
                    if (angular.isDefined(user.lastname)) {
                        nameMatch = nameMatch || user.lastname.indexOf(search.name) > -1;
                    }
                }
                if ( angular.isDefined(user.number) && angular.isDefined(search.number) ) {
                    // only match if number is exact match
                    numberMatch = user.number === search.number;
                }
                // either match should populate the results with user
                if (nameMatch || numberMatch) {
                    matches.push(user);
                }

            });
            // this is the array that will be fed to the repater
            return matches;

        }
    }

}());