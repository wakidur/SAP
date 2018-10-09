/* guide line ************************************** 
Created by Rasel Ahmed
    dataList contain all item, return deserved item from dataList,
     var searchParams = [
                    { searchVal: vm.searchCriteria.supplier, property: "supplierName" },
                    { searchVal: vm.searchCriteria.suppliershortname, property: "supplierShortName" }
                ];

    here searchVal contain serarch property value and property : dataList item Property thate match searchValue

*/
function getItemSearchByValue(items, searchParams) {
    try {

        var dataList = angular.copy(items);

        for (var k = 0; k < dataList.length; k++) {
            for (var n = 0; n < searchParams.length; n++) {
                if (dataList[k][searchParams[n].property] == null) {
                    dataList[k][searchParams[n].property] = "";
                }
            }
        }


        var evalText = null;
        var isFirstSearchProperty = false;

        for (var i = 0; i < searchParams.length; i++) {
            if (searchParams[i].searchVal) {
                var text = "'" + searchParams[i].searchVal.toLowerCase() + "'";
                if (!isFirstSearchProperty) {
                    evalText = 'if(item.' + searchParams[i].property + '.toLowerCase().indexOf(' + text + ') === 0';
                    isFirstSearchProperty = true;
                } else {
                    evalText = evalText + '&& item.' + searchParams[i].property + '.toLowerCase().indexOf(' + text + ') === 0';
                }
            }
        }

        if (isFirstSearchProperty) {
            var text1 = "){tempItemList.push(item)}";
            evalText = evalText + text1;

            var tempItemList = [];
            angular.forEach(dataList, function (item) {
                eval(evalText);
            });

            return tempItemList;
        } else {
            return dataList;
        }

    } catch (e) {
        showError(e);
    }
}


var CONTROL = {
    setFocus: setFocus
};


// This will focus the targeted control
// ni-control-focus='propery name'
// property name will be a string like id="bangladesh"
// property name must be unique
function setFocus(properyName, modalID, html, isPageModal) {
    try {

        var cntTimeOut = setTimeout(function () {

            var currentContainer;
            var _timeOut = 450;
            if (modalID) {
                currentContainer = getModal(modalID);
            } else {
                currentContainer = getTopMostWindow().$el;
                if (!isPageModal)
                    _timeOut = 100;
            }

            var timeout = setTimeout(function () {
                if (currentContainer) {
                    var element = properyName ? currentContainer.find("[ni-control-focus='" + properyName + "']") : $(html).find("[ni-control-focus]");
                    if (element.length > 0) {
                        element[0].focus();
                        if (element[0].type === 'text') {
                            element[0].select();
                        }
                    }
                }

                clearTimeout(timeout);
                clearTimeout(cntTimeOut);

            }, _timeOut);
        }, 0);

        //var timeout = setTimeout(function () {
        //    var currentContainer = getTopMostModal();

        //    if (currentContainer.length === 0)
        //        currentContainer = getTopMostWindow().$el;

        //    if (currentContainer) {
        //        var element = properyName ? currentContainer.find("[ni-control-focus='" + properyName + "']") : $(html).find("[ni-control-focus]");
        //        element.length > 0 && element[0].focus();
        //        clearTimeout(timeout);
        //    }

        //}, 100);
    } catch (ex) {
        throw ex;
    }
}