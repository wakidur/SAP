// (function(){
//     'use strict';

//     angular
//         .module('module')
//         .factory('factory', factory)

//     factory.$inject = ['$http'];

//     function factory($http) {
//         var service = {
//             getData: getData
//         };

//         return service;

//         function getData() { }
//     }
// })();

var serviceName = appConstants.url.adminRemoteUrl + 'Admin/';

function _addHttpHeader() {


    try {

        //make authentication object
        var authentication = {
            userPKID: userInfo.userPKID,
            userID: userInfo.userName,
            password: 'Admin',
            userName: userInfo.userName,
            pageID: pageInfo.id,
            pageName: pageInfo.moduleName,
            clientIPAddress: $window.location.href,
            stateName: pageInfo.action,
            PermissionType: ''
        }

        //encode authentication object
        var objJson = angular.toJson(authentication);
        var encodedData = window.btoa(objJson);
        $http.defaults.headers.common.Authorization = 'Basic ' + encodedData;
    } catch (e) {
        throw e;
    }
}

function getUserType(isRefresh) {
    try {
        _addHttpHeader();
        var deferred = $q.defer();
        //var userGroups = adminCache.get("HrEmployees");
        //if (!userGroups || userGroups.length == 0 || isRefresh) {
        $http({
            url: serviceName + 'GetUserType',
            method: "GET",
            params: {}
        }).then(function(results) {
            //adminCache.put("HrEmployees", results.data);
            deferred.resolve(results.data);
        }).catch(function(ex) {
            throw ex;
        });
        //}
        //else {
        //    deferred.resolve(userGroups);
        //}
        return deferred.promise;
    } catch (e) {
        throw e;
    }
}