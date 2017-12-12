

//javascript array - comparing elements with other elements within the same array
// https://stackoverflow.com/questions/47726004/javascript-array-comparing-elements-with-other-elements-within-the-same-array

var array = [
    ['LA', '2017-12-01'],
    ['LA', '2017-12-01'],
    ['NY', '2017-12-01'],
    ['NY', '2016-10-01'],
    ['LA', '2017-12-01'],
    ['KB', '2017-11-03'],
    ['LC', '2018-12-02']
];





var count = 1;
var key1, key2;

function getDynamicArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        key1 = arr[i][0] + '-' + arr[i][1];
        for (var j = 0; j < arr.length; j++) {
            key2 = arr[j][0] + '-' + arr[j][1];
            if (key1 === key2) {
                arr[i][2] = count;
            } else {
                count++;
                arr[j][2] = count;
            }
        }
    }
    return arr;
}
getDynamicArray(array);


function comparingElementsWitOther(arrayOfElements) {
    var n = 0;
    var newArray = [];
    var mymap = {};
    newArray = arrayOfElements.map(function(value) {
        var label = value[0] + "-" + value[1];
        if (!mymap[label]) {
            mymap[label] = ++n;
        }
        return value.concat([mymap[label]]);

    });
    return newArray;
}

var xs = [
    ['LA', '2017-12-01'],
    ['LA', '2017-12-01'],
    ['NY', '2017-12-01'],
    ['NY', '2016-10-01'],
    ['LA', '2017-12-01'],
    ['LA', '2017-12-01'],
    ['LA', '2017-12-01']
];

comparingElementsWitOther(xs);