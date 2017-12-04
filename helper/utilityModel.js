// return index number from object array 
var arrayOfObj = [
    {
        id:1,
        name: 'wakidur'
    },
    {
        id: 2,
        name: 'Rahman'
    }
] ;

Array.prototype.getIndexBy = function(name , value){
    for (var i = 0; i < this.length; i++) {
        if(this[i][name] == value){
            return i;
        }         
    }
    return -1;
};
var data = tv[tb.getIndexBy("id", 3)];

function findIndexByKeyValue(arraytosearch, key, valuetosearch) {
    for( var i = 0 ; i < arraytosearch.length; i++ ) {
        if( arraytosearch[i][key] == valuetosearch ){
            return i;
        }
    }
    return -1;
}

function search(nameKey, array) {
    for (var index = 0; index < array.length; index++) {
        if(array[index].name === nameKey) {
            return array[index];
        }
    }
    return -1;
    
}

var array = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];


var dataObject = [
    {
        id:1,
        name: "Wakidur",
        
    },
    {
        id:2,
        name: "Rahman",
        
    },
    {
        id:3,
        name: "Written",
        
    }

];


var resultObject = search("string 1", array);

var newValue = findIndexByKeyValue(dataObject, "name", "Wakidur");
//*****Tree view related methods Start------

//  **** convert flat object array to treeview array object  start ---

function prepareFlatObjectToTreeView(dataList, nameProperty) {
    try {
        var rulesTreeViewList = angular.copy(flateListToTreeViewData(dataList, nameProperty));
        return rulesTreeViewList;
    } catch (e) {
        throw e;
    }  
}

// Return json format data
function flateListToTreeViewData(dataList, nameProperty) {
    try {
        var tree = [], 
            mappedArr = {},
            arrElem,
            mappedElem;
        if( typeof nameProperty === "undefined" ) {
            nameProperty = 'parentID';
        }
        // First map the nodes of the array to an object create a hash table.
        for( var i = 0, len = dataList.length; i < len; i++ ) {
            arrElem = dataList[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]['children'] = [];
            mappedArr[arrElem.id]['nodeDatails'] = [];
        }
        for(var id in mappedArr ) {
            if( mappedArr.hasOwnProperty(id) ) {
                mappedElem = mappedArr[id];
                // if the element is not at the root level, add it to its parent array of children.
                if(mappedElem[nameProperty]){
                    mappedArr[mappedElem[nameProperty]]['children'].push(mappedElem);
                } else {
                    //if the element is at the root level, add it to first level element array .
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
        
    } catch (e) {
        throw e;
    }
    
}
