/**
 * Created by Ashish on 7/23/2014.
 */

define(['CommonComponents/Services/services'], function (services) {
    'use strict';
    services.factory('utilityModelSvc', ['$rootScope',
    function ($rootScope) {

        var modelFactory = {
            updateCollection: updateCollection,
            getPropertyValueList: getPropertyValueList,
            checkDuplicateEntry: checkDuplicateEntry,
            checkDuplicateEntryByKey: checkDuplicateEntryByKey,
            getObjByPropertyValue: getObjByPropertyValue,
            checkBlankList: checkBlankList,

            getTreeviewRootNodeScope: getTreeviewRootNodeScope,
            expandTreeNode: expandTreeNode,
            getTreeNodeByID: getTreeNodeByID,
            prepareflatObjArrayToTreeView: prepareflatObjArrayToTreeView,
            findIndexByKeyValue: findIndexByKeyValue,
            //createDynamicGridHeader: createDynamicGridHeader,
            getOrgHeaderTitle: getOrgHeaderTitle,
            createGridDataList: createGridDataList,
            setOrgGroupLabel: setOrgGroupLabel,
            setOrgColumnLabel: setOrgColumnLabel,
            setOrgData: setOrgData,
            setCustomAddressValidation: setCustomAddressValidation,
            deletedDataPushInDdl: deletedDataPushInDdl
        };

        return modelFactory;

        //Public Methods

        // retrun index number from object array 
        function findIndexByKeyValue(arraytosearch, key, valuetosearch) {
            for (var i = 0; i < arraytosearch.length; i++) {
                if (arraytosearch[i][key] == valuetosearch) {
                    return i;
                }
            }
            return -1;
        }


        //*********************************************Tree view related methods Start---------------------------

        //  **************************  convert flat object array to treeview array object  start ---------------------- 
        function prepareflatObjArrayToTreeView(dataList, nameProperty) {
            try {
                var rulesTreeViewList = angular.copy(flatListToTreeViewData(dataList, nameProperty));
                return rulesTreeViewList;
            } catch (e) {
                throw e;
            }
        }

        // return json format data 
        function flatListToTreeViewData(dataList, nameProperty) {
            try {
                var tree = [],
                    mappedArr = {},
                    arrElem,
                    mappedElem;

                if (typeof nameProperty === "undefined") {
                    nameProperty = 'parentID';
                }

                // First map the nodes of the array to an object -> create a hash table.
                for (var i = 0, len = dataList.length; i < len; i++) {
                    arrElem = dataList[i];
                    mappedArr[arrElem.id] = arrElem;
                    mappedArr[arrElem.id]['children'] = [];
                    mappedArr[arrElem.id]['nodeDetails'] = [];
                }

                for (var id in mappedArr) {
                    if (mappedArr.hasOwnProperty(id)) {
                        mappedElem = mappedArr[id];

                        // If the element is not at the root level, add it to its parent array of children.
                        if (mappedElem[nameProperty] && mappedArr[mappedElem[nameProperty]]) {
                            mappedArr[mappedElem[nameProperty]]['children'].push(mappedElem);
                        }
                            // If the element is at the root level, add it to first level elements array.
                        else {
                            tree.push(mappedElem);
                        }
                    }
                }
                return tree;
            } catch (e) {
                throw e;
            }
        }
        //  ************************** convert flat object array to treeview array object  end ************** 



        // *********************** For angular ui  treeview **********************************************  

        /*
        Example code  for sepecific node expand 
            
            // expand only root  node  in user treeview 
            var rootScope = utilityModelSvc.getTreeviewRootNodeScope("userRoleTree-root");
            rootScope.collapseAll();

            //expand by group wise
            for (var i = 0; i < data.length; i++) {
                utilityModelSvc.expandTreeNode(data[i].groupID, "userRoleTree-root");
            }
            
        */

        function getTreeviewRootNodeScope(treeviewId) {
            try {
                return angular.element(document.getElementById(treeviewId)).scope().$nodesScope.childNodes()[0];
            } catch (e) {
                throw e;
            }
        }

        function expandTreeNode(nodeId, treenodeId) {
            try {
                // We need to get the whole path to the node to open all the nodes on the path
                var parentScopes = getScopePath(nodeId, treenodeId);
                if (parentScopes) {
                    for (var i = 0; i < parentScopes.length; i++) {
                        parentScopes[i].expand();
                    }
                }
            } catch (e) {
                throw e;
            }
        }

        function getScopePath(nodeId, treeViewId) {
            try {
                return getScopePathIter(nodeId, getTreeviewRootNodeScope(treeViewId), []);
            } catch (e) {
                throw e;
            }
        }

        function getScopePathIter(nodeId, scope, parentScopeList) {
            try {
                if (!scope) return null;

                var newParentScopeList = parentScopeList.slice();
                newParentScopeList.push(scope);

                if (scope.$modelValue && scope.$modelValue.id === nodeId) return newParentScopeList;

                var foundScopesPath = null;
                var childNodes = scope.childNodes();

                if (childNodes) {
                    for (var i = 0; foundScopesPath === null && i < childNodes.length; i++) {
                        foundScopesPath = getScopePathIter(nodeId, childNodes[i], newParentScopeList);
                    }
                }
                return foundScopesPath;
            } catch (e) {
                throw e;
            }
        }// *********************** For angular ui  treeview **********************************************  


        function getTreeNodeByID(treeViewList, id) {
            try {
                for (var i = 0; i < treeViewList.length; i++) {
                    if (treeViewList[i].id === id) {
                        return treeViewList[i];
                    }

                    if (treeViewList[i].children.length > 0) {
                        var node = _getTreeNode(treeViewList[i].children, id);
                        if (node) return node;


                    }
                }
            } catch (e) {
                throw e;
            }
        }

        function _getTreeNode(children, id) {
            try {

                for (var i = 0; i < children.length; i++) {
                    if (children[i].id === id) {
                        return children[i];
                    }
                    if (children[i].children.length > 0) {
                        var node = _getTreeNode(children[i].children, id);
                        if (node) return node;
                    }
                }
            } catch (e) {
                throw e;
            }
        }



        ////*******************************************Tree view related Methods End-----------------------------



        // update grid when edit completed 
        function updateCollection(entityList, data, isEdit, keyProperty) {
            try {

                var entity = angular.copy(data);

                //if entry then just unshifted
                if (isEdit === false) {
                    entityList.unshift(entity);
                } else {
                    //default key property is id
                    keyProperty = typeof keyProperty === "undefined" ? "id" : keyProperty;
                    //get old object and find index for replace if exists otherwise unshifted
                    var objData = Enumerable.From(entityList).FirstOrDefault(null, function (x) {
                        return x[keyProperty] == entity[keyProperty];
                    });
                    if (!objData) {
                        entityList.unshift(entity);
                    } else {
                        var index = entityList.indexOf(objData);
                        if (index > -1)
                            entityList[index] = entity; // splice(index, 1);
                    }
                }

            } catch (e) {
                throw e;
            }
        }


        /*Get a list of values of a specific property from a given Collection
            Mostly used in case of AutoComplete.
        */
        function getPropertyValueList(entityList, propertyName) {
            try {
                var propValList = [];

                for (var i = 0; i < entityList.length; i++) {

                    var objfield = Enumerable.From(propValList).FirstOrDefault(null, function (x) {

                        return x == entityList[i][propertyName];
                    });

                    if (objfield === null) {
                        propValList.push(entityList[i][propertyName]);
                    }
                }
                return propValList;
            } catch (e) {
                throw e;
            }
        }

        /*
        Check duplicate entry between an entityCollection and an Entity of same type
        based on some given properties of the Entity

        propertyName will be [brandName,itemName,itemType]
        ignoreIsModify is a boolean (true/false) to ignore a check on Modified EntityState
        */
        function checkDuplicateEntry(entityList, entity, propertyName, keyProperty) {
            try {

                keyProperty = typeof keyProperty === "undefined" ? "id" : keyProperty;

                var isDuplicate = false;
                var names = propertyName.split(',');
                var result = [];

                var keyValue = 0;

                //Check each value of corresponding given property name between each entity of the collection and the given entity. 
                for (var i = 0; i < entityList.length; i++) {
                    for (var index = 0; index < names.length; index++) {
                        entity[names[index]] = entity[names[index]] ? entity[names[index]] : ''; // code added by rasel 
                        if (!entityList[i][names[index]]) {
                            if (!entity[names[index]]) {
                                isDuplicate = true;
                                result.push(isDuplicate);
                            }
                        } else if (entityList[i][names[index]]) {
                            var src, desti;
                            if (Object.prototype.toString.call(entity[names[index]]) === '[object Array]') {
                                src = JSON.stringify(entityList[i][names[index]]);
                                desti = JSON.stringify(entity[names[index]]);
                            } else {
                                src = entityList[i][names[index]].toString().toLowerCase();
                                desti = entity[names[index]].toString().toLowerCase();
                            }

                            if (src === desti) {
                                isDuplicate = true;
                                result.push(isDuplicate);
                            }
                        }
                    }//end of Property Names iteration

                    /*if Number of given property names  and number of matched results are equal
                        then no need to iterate entityCollection. A matched entity must exist in the entityCollection 
                        and break the iteration.
                    */
                    if (result.length === names.length) {
                        keyValue = entityList[i][keyProperty]; //Store the key property value of the matched entity of the collection
                        break;
                    } else {
                        result = [];
                        isDuplicate = false;
                    }
                }//end of entityCollection iteration

                /*While the entityState is modified then the key property of the given entity will be checked with the matched entity from the collection.
                    If the flag isDuplicate is true then the key property will decide whether the matched entity is same or not.
                    If same it will not be a duplicate entry else isDuplicate will remain true.

                    In case of different business approach (like SET_Brand insert/update) developer can ignore this check by setting the flag ignoreIsModify 
                    true though the entity is in Update.
                */
                if (entity[keyProperty] > 0 && (!entity.isTagChanged() || entity.isModified())) {
                    if (isDuplicate === true && keyValue === entity[keyProperty])
                        isDuplicate = false;
                }

                return isDuplicate;

            } catch (e) {
                throw e;
            }
        }

        //// checkDuplicateEntry from array by keyProperty
        //// code added by Md Shahadul Islam
        function checkDuplicateEntryByKey(entityList, keyProperty) {
            var length = entityList.length;
            var result = false;
            for (var i = 0; i < length; i++) {

                var objList = Enumerable.From(entityList).Where(function (x) {
                    return x[keyProperty] == entityList[i][keyProperty];
                }).ToArray();

                if (objList.length > 1) {
                    result = true;
                    return result;
                }
            }
            return result;
        }
        function getObjByPropertyValue(value, dataList, propertyName) {
            try {

                propertyName = typeof propertyName === "undefined" ? "id" : propertyName;


                var obj = undefined;
                for (var i = 0; i < dataList.length; i++) {
                    if (dataList[i][propertyName] === value) {
                        obj = dataList[i];
                        break;
                    }
                }

                return obj;
            } catch (ex) {
                throw ex;
            }
        }
        function checkBlankList(targetList, blankObj) {
            try {
                /*
                 false :- not blank 
                 true  :- blank  

                if you don't get expected result please compare your object http://tlrobinson.net/projects/javascript-fun/jsondiff/ to make sure that no differences are exists

                */
                if (targetList.length === 1) {
                    var sourceList = [];
                    sourceList.entityPush(blankObj);
                    var t = angular.toJson(targetList[0]);
                    var s = angular.toJson(sourceList[0]);

                    return t == s;
                } else {
                    return false;
                }
            } catch (ex) {
                throw ex;
            }
        }

        function getOrgHeaderTitle(codeList) {
            var objHeaderTitle = {};

            var shortft = {
                org1Name: $rootScope.shortft.org1Name,
                org2Name: $rootScope.shortft.org2Name,
                org3Name: $rootScope.shortft.org3Name,
                org4Name: $rootScope.shortft.org4Name,
                org5Name: $rootScope.shortft.org5Name,
                bOrg1BName: $rootScope.shortft.bOrg1BName,
                bOrg2BName: $rootScope.shortft.bOrg2BName,
                bOrg3BName: $rootScope.shortft.bOrg3BName,
                bOrg4BName: $rootScope.shortft.bOrg4BName,
                bOrg5BName: $rootScope.shortft.bOrg5BName,
            };

            var longft = {
                org1Name: $rootScope.longft.org1Name,
                org2Name: $rootScope.longft.org2Name,
                org3Name: $rootScope.longft.org3Name,
                org4Name: $rootScope.longft.org4Name,
                org5Name: $rootScope.longft.org5Name,
                bOrg1BName: $rootScope.longft.bOrg1BName,
                bOrg2BName: $rootScope.longft.bOrg2BName,
                bOrg3BName: $rootScope.longft.bOrg3BName,
                bOrg4BName: $rootScope.longft.bOrg4BName,
                bOrg5BName: $rootScope.longft.bOrg5BName,
            };

            var longfht = {
                org1Name: $rootScope.longfht.org1Name,
                org2Name: $rootScope.longfht.org2Name,
                org3Name: $rootScope.longfht.org3Name,
                org4Name: $rootScope.longfht.org4Name,
                org5Name: $rootScope.longfht.org5Name,
                bOrg1BName: $rootScope.longfht.bOrg1BName,
                bOrg2BName: $rootScope.longfht.bOrg2BName,
                bOrg3BName: $rootScope.longfht.bOrg3BName,
                bOrg4BName: $rootScope.longfht.bOrg4BName,
                bOrg5BName: $rootScope.longfht.bOrg5BName,
            };
            var objHeader = {
                shortft: shortft,
                longfht: longfht,
                longft: longft
            };
            if (codeList && codeList.length > 0) {
                objHeader = {
                    shortft: {},
                    longfht: {},
                    longft: {}
                };
                for (var i = 0; i < codeList.length; i++) {
                    var code = codeList[i];
                    //admin office
                    if (code == 5) {
                        objHeader['shortft']['org1Name'] = shortft.org1Name;
                        objHeader['shortft']['bOrg1BName'] = shortft.bOrg1BName;

                        objHeader['longft']['org1Name'] = longft.org1Name;
                        objHeader['longft']['bOrg1BName'] = longft.bOrg1BName;

                        objHeader['longfht']['org1Name'] = longfht.org1Name;
                        objHeader['longfht']['bOrg1BName'] = longfht.bOrg1BName;

                    }
                        //Plan
                    else if (code == 6) {
                        objHeader['shortft']['org2Name'] = shortft.org2Name;
                        objHeader['shortft']['bOrg2BName'] = shortft.bOrg2BName;

                        objHeader['longft']['org2Name'] = longft.org2Name;
                        objHeader['longft']['bOrg2BName'] = longft.bOrg2BName;

                        objHeader['longfht']['org2Name'] = longfht.org2Name;
                        objHeader['longfht']['bOrg2BName'] = longfht.bOrg2BName;
                    }
                        //Department
                    else if (code == 8) {
                        objHeader['shortft']['org3Name'] = shortft.org3Name;
                        objHeader['shortft']['bOrg3BName'] = shortft.bOrg3BName;

                        objHeader['longft']['org3Name'] = longft.org3Name;
                        objHeader['longft']['bOrg3BName'] = longft.bOrg3BName;

                        objHeader['longfht']['org3Name'] = longfht.org3Name;
                        objHeader['longfht']['bOrg3BName'] = longfht.bOrg3BName;
                    }
                        //Section
                    else if (code == 13) {
                        objHeader['shortft']['org4Name'] = shortft.org4Name;
                        objHeader['shortft']['bOrg4BName'] = shortft.bOrg4BName;

                        objHeader['longft']['org4Name'] = longft.org4Name;
                        objHeader['longft']['bOrg4BName'] = longft.bOrg4BName;

                        objHeader['longfht']['org4Name'] = longfht.org4Name;
                        objHeader['longfht']['org4BName'] = longfht.bOrg4BName;
                    }
                        //Sub Section
                    else if (code == 14) {
                        objHeader['shortft']['org5Name'] = shortft.org5Name;
                        objHeader['shortft']['bOrg5BName'] = shortft.bOrg5BName;

                        objHeader['longft']['org5Name'] = longft.org5Name;
                        objHeader['longft']['bOrg5BName'] = longft.bOrg5BName;

                        objHeader['longfht']['org5Name'] = longfht.org5Name;
                        objHeader['longfht']['bOrg5BName'] = longfht.bOrg5BName;
                    }
                }
            }

            return objHeader;
        }

        //function createDynamicGridHeader(headerObject) {
        //    var orgColumns = [];
        //    var orgEleList = $rootScope.fixedIDs.getList($rootScope.fixedIDs.organizationElement);
        //    var obj = headerObject[0];
        //    var index = 1;
        //    for (var property in obj) {
        //        if (property.indexOf('col_') > -1) {
        //            var id = property.replace('col_', '');
        //            var colObj = Enumerable.From(orgEleList).FirstOrDefault(null, function (x) {
        //                return x.value == id;
        //            });
        //            var newColName = "Column" + index.toString();

        //            var objData = { colName: colObj.text, dbColHead: newColName };
        //            orgColumns.push(objData);
        //            index++;
        //        }
        //    }
        //    return orgColumns;
        //}

        function createGridDataList(listOfData) {
            var orgEleList = $rootScope.fixedIDs.getList($rootScope.fixedIDs.organizationElement);

            for (var i = 0; i < listOfData.length; i++) {
                var obj = listOfData[i];
                if (!obj.orgColumns) {
                    obj.orgColumns = [];
                }
                var index = 1;
                for (var property in obj) {
                    if (property.indexOf('col_') > -1) {
                        var id = property.replace('col_', '');
                        var colObj = Enumerable.From(orgEleList).FirstOrDefault(null, function (x) {
                            return x.value == id;
                        });
                        var newColName = "column" + index.toString();
                        obj[newColName] = obj[property];
                        var objData = { orgName: obj[property], colName: colObj.text };
                        obj.orgColumns.push(objData);
                        index++;
                    }
                }
            }
            return listOfData;
        }

        //prepare report data organization wise
        function setOrgGroupLabel(dataList, forBangla) {
            try {

                var tempList = [];
                var colKeys = ['Org1', 'Org2', 'Org3', 'Org4', 'Org5'];
                var keys = ['org1', 'org2', 'org3', 'org4', 'org5'];
                var fieldName = 'Name';

                if (forBangla) {
                    colKeys = ['BOrg1', 'BOrg2', 'BOrg3', 'BOrg4', 'BOrg5'];
                    keys = ['bOrg1', 'bOrg2', 'bOrg3', 'bOrg4', 'bOrg5'];
                    fieldName = 'BName';
                }

                for (var i = 0, len = dataList.length; i < len; i++) {

                    // step: 1
                    var tempData = angular.copy(dataList[i]);
                    var vals = keys.map(function (key) {
                        return tempData[key] = !tempData[key] ? null : eval('$rootScope.shortft.' + key + fieldName) + ': ' + tempData[key];
                    }).filter(function (val) {
                        return val;
                    });

                    // step: 2
                    for (var j = 0, leng = keys.length; j < leng; j++) {
                        var key = keys[j];
                        tempData[key] = vals[j] || null;
                    }
                    tempList.push(tempData);
                }

                return tempList;
            } catch (e) {
                throw e;
            }
        }

        //set organization column label and data
        function setOrgColumnLabel(dataList, columnHeaderList, forBangla) {
            try {

                var tempList = [];
                var colHeaderData = {};
                var colKeys = ['Org1', 'Org2', 'Org3', 'Org4', 'Org5'];
                var keys = ['org1', 'org2', 'org3', 'org4', 'org5'];
                var fieldName = 'Name';

                if (forBangla) {
                    colKeys = ['BOrg1', 'BOrg2', 'BOrg3', 'BOrg4', 'BOrg5'];
                    keys = ['bOrg1', 'bOrg2', 'bOrg3', 'bOrg4', 'bOrg5'];
                    fieldName = 'BName';
                }

                for (var i = 0, len = dataList.length; i < len; i++) {

                    // step: 1
                    var tempData = angular.copy(dataList[i]);
                    var vals = keys.map(function (key1) {
                        colHeaderData['' + key1 + ''] = !tempData[key1] ? null : eval('$rootScope.shortft.' + key1 + fieldName);
                        return tempData[key1];
                    }).filter(function (val) {
                        return val;
                    });

                    // step: update
                    var keyvals = keys.map(function (key1) {
                        return colHeaderData[key1];
                    }).filter(function (val) {
                        return val;
                    });

                    // step: 2
                    for (var j = 0, leng = keys.length; j < leng; j++) {
                        var key = keys[j];
                        tempData[key] = vals[j] || null;

                        //column head set
                        if (vals[j] && i === 0) {
                            var keyHead = { key: colKeys[j], value: keyvals[j] };
                            columnHeaderList.push(keyHead);
                        }
                    }
                    tempList.push(tempData);
                }
                return tempList;
            } catch (e) {
                throw e;
            }
        }

        //set organization column label and data
        function setOrgData(dataList, columnHeaderList, labelName, forBangla) {
            try {

                var tempList = [];
                var colHeaderData = {};
                var colKeys = ['Org1', 'Org2', 'Org3', 'Org4', 'Org5'];
                var keys = ['org1', 'org2', 'org3', 'org4', 'org5'];
                var fieldName = 'Name';

                if (forBangla) {
                    colKeys = ['BOrg1', 'BOrg2', 'BOrg3', 'BOrg4', 'BOrg5'];
                    keys = ['bOrg1', 'bOrg2', 'bOrg3', 'bOrg4', 'bOrg5'];
                    fieldName = 'BName';
                }

                for (var i = 0, len = dataList.length; i < len; i++) {

                    // step: 1
                    var tempData = angular.copy(dataList[i]);
                    var vals = keys.map(function (key1) {
                        colHeaderData['' + key1 + ''] = eval('labelName.' + key1 + fieldName);
                        return tempData[key1];
                    }).filter(function (val) {
                        return val;
                    });

                    // step: update
                    var keyvals = keys.map(function (key1) {
                        return colHeaderData[key1];
                    }).filter(function (val) {
                        return val;
                    });

                    // step: 2
                    for (var j = 0, leng = keys.length; j < leng; j++) {
                        var key = keys[j];
                        tempData[key] = vals[j] || null;

                        //column head set
                        if (keyvals[j] && i === 0) {
                            var keyHead = { key: colKeys[j], value: keyvals[j] };
                            columnHeaderList.push(keyHead);
                        }
                    }
                    tempList.push(tempData);
                }
                return tempList;
            } catch (e) {
                throw e;
            }
        }

        function setCustomAddressValidation(address, isAddressMandatory) {
            try {

                var isAnyPropertyValue = false;

                if (address.addressLine1 || address.addressLine2 || address.village || address.poBox || address.postOffice || address.zip || address.thana || address.subDistrict || address.district ||
                    address.division || address.city || address.state || address.countryID) {
                    isAnyPropertyValue = true;
                }

                if (isAddressMandatory) {
                    _setCustomAddressValidaton(address);
                } else {
                    if (!isAnyPropertyValue && !address.id) {
                        address.isAddressOneVal = false;
                        address.isAddressTwoVal = false;
                        address.isVillageVal = false;
                        address.isCountryVal = false;
                    } else {
                        _setCustomAddressValidaton(address);
                    }
                }
            } catch (e) {
                throw e;
            }
        }


        function _setCustomAddressValidaton(address) {
            try {

                address.isCountryVal = true;

                if (!address.addressLine1 && !address.addressLine2 && !address.village) {// 000
                    address.isAddressOneVal = true;
                    address.isAddressTwoVal = true;
                    address.isVillageVal = true;
                } else if (!address.addressLine1 && !address.addressLine2 && address.village) { // 001
                    address.isAddressOneVal = false;
                    address.isAddressTwoVal = false;
                    address.isVillageVal = true;
                } else if (!address.addressLine1 && address.addressLine2 && !address.village) {// 010
                    address.isAddressOneVal = false;
                    address.isAddressTwoVal = true;
                    address.isVillageVal = false;
                }
                else if (!address.addressLine1 && address.addressLine2 && address.village) {// 011
                    address.isAddressOneVal = false;
                    address.isAddressTwoVal = true;
                    address.isVillageVal = true;
                } else if (address.addressLine1 && !address.addressLine2 && !address.village) {// 100
                    address.isAddressOneVal = true;
                    address.isAddressTwoVal = false;
                    address.isVillageVal = false;
                } else if (address.addressLine1 && !address.addressLine2 && address.village) {// 101
                    address.isAddressOneVal = true;
                    address.isAddressTwoVal = false;
                    address.isVillageVal = true;
                } else if (address.addressLine1 && address.addressLine2 && !address.village) {// 110
                    address.isAddressOneVal = true;
                    address.isAddressTwoVal = true;
                    address.isVillageVal = false;
                } else if (address.addressLine1 && address.addressLine2 && address.village) {// 111
                    address.isAddressOneVal = true;
                    address.isAddressTwoVal = true;
                    address.isVillageVal = true;
                }
            } catch (e) {
                throw e;
            }
        }

        //Inactive data will be inserted into dropDownList that was chosen in transactional data. 
        //Required in Edit Mode

        //Value: ID/Code value bind in DropDown
        //Text: Text that has been shown in dropDown Selection
        //ValueProperty: On which property the value will be assigned in DropDownList (Name of Value Property in the DataList)
        //TextProperty: On which property the text will be assigned in DropDownList (Name of Text Property in the DataList)
        //DataList: Item Source for DorpDownList
        //ParentID: A value that has been used for filter. It is optional
        //ParentProperty: On which property the parent value will be assigned in DropDownList (Name of Filter Property in the DataList)
        //It depends on ParentID
        function deletedDataPushInDdl(value, text, valueProperty, textProperty, dataList, parentID, parentProperty) {
            if (!value) {
                return null;

            }
           var hasData = false;

            if (parentProperty  ) {
                hasData = Enumerable.From(dataList).Any(function (x) {
                    return x[valueProperty] === value && x[parentProperty] === parentID;
                });
            } else {
                hasData = Enumerable.From(dataList).Any(function (x) {
                    return x[valueProperty] === value;
                });
            }

            if (!hasData) {
                var newData = {};
                newData[valueProperty] = value;
                newData[textProperty] = text;
                newData[parentProperty] = parentID;
                dataList.push(newData);
                return newData;
            }

            return null;
        }

       

    }]);// end main method 
});