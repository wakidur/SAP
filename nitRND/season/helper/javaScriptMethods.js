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