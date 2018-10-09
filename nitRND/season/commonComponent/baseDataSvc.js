
define(['CommonComponents/Services/services'], function (services) {
    'use strict';
    services.service('baseDataSvc', ['$http', '$window',

        function ($http, $window) {

            var currentAction = 0;
            var baseSvc = {
                executeQuery: executeQuery,
                save: save,
                remove: remove,
                removeEntity: removeEntity,
                currentAction: currentAction
            };
            var SAVE_START = false;
            return baseSvc;

            function _addHttpHeader() {

                try {

                    //make authentication object
                    var authentication = {
                        userPKID: userInfo.userPKID,
                        userID: userInfo.userName,
                        password: userInfo.password,
                        userName: userInfo.userName,
                        pageID: pageInfo.id,
                        pageName: pageInfo.moduleName ? pageInfo.moduleName.replace(/\'/g,"") : pageInfo.moduleName,
                        clientIPAddress: $window.location.href,
                        stateName: pageInfo.action,
                        PermissionType: pageInfo.currentAction
                    }

                    //encode authentication object
                    var objJson = angular.toJson(authentication);
                    var encodedData = window.btoa(objJson);

                    //var _pageInfo = angular.copy(pageInfo);
                    //_pageInfo.uRL = $window.location.href;
                    //var userData = angular.toJson(userInfo) + "#" + angular.toJson(_pageInfo);
                    //var encodedData = window.btoa(userData); // encode a string
                    $http.defaults.headers.common.Authorization = 'Basic ' + encodedData;
                } catch (e) {
                    throw e;
                }
            }
            function executeQuery(url, params, isPost) {
                try {
                    var config;
                    _addHttpHeader();
                    if (isPost) {
                        config = {
                            url: url,
                            method: "POST",
                            data: params
                        };
                    } else {
                        config = {
                            url: url,
                            method: "GET",
                            params: params
                        };
                    }

                    return $http(config).then(function (results) {
                        return results.data;
                    }).catch(function (ex) {
                        throw ex;
                    });
                } catch (ex) {
                    throw ex;
                }
            };

            function remove(url, entity, key, hasAction) {
                try {
                    _addHttpHeader();

                    if (!hasAction) {
                        url = url + 'Delete';
                    }

                    return $http({
                        url: url,
                        method: "post",
                        params: { pk: (typeof key === "undefined" ? entity.id : entity[key]) }
                    }).then(function (result) {
                        return result;
                    }).catch(function (ex) {
                        ex.entity = entity;
                        throw ex;
                    });
                } catch (ex) {
                    throw ex;
                }
            }

            function removeEntity(url, entity) {
                try {
                    _addHttpHeader();

                    return $http.post(url + 'Delete', entity).then(function (result) {
                        return result;
                    }).catch(function (ex) {
                        throw ex;
                    });

                } catch (ex) {
                    throw ex;
                }
            }


            //To perform Server side insert/update/delete operation (Post to BreezeWebApi)
            function save(url, data, hasAction) {
                if (!SAVE_START) {
                    SAVE_START = true;
                    _addHttpHeader();

                    if (!hasAction) {
                        url = url + 'saveChanges';
                    }
                    return $http.post(url, data).then(function (results) {
                        SAVE_START = false;
                        data = results.data;
                        return data;
                    }).catch(function (ex) {
                        SAVE_START = false;
                        throw ex;
                    });
                }
            }
        }
    ]);
});