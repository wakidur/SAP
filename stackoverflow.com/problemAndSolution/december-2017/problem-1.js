//javascript array - comparing elements with other elements within the same array
// https://stackoverflow.com/questions/47726004/javascript-array-comparing-elements-with-other-elements-within-the-same-array

/*Am comparing javascript array of elements with other elements within the same array. If elements are same means, i have to give same number for all the common elements. If the elements are different i have to give some different number for all the non identical elements in another element.
 */


/*Array structure = [{Location, Date, Number}]

*/
var array = [
        ['LA', '2017-12-01', 1],
        ['LA', '2017-12-01', 1],
        ['NY', '2017-12-01', 2],
        ['NY', '2016-10-01', 3],
        ['LA', '2017-12-01', 1],
        ['LA', '2017-12-01', 1],
        ['LA', '2017-12-01', 1];
        /*         
        In this array 'Number' is dynamic element, It should be populate on the following rules.

        key1 = location + '-' +date;
        Consider Key1 is the first element ( combination of location + date ). If the same key1 is present in the array, then 'Number' is common for all the same Key1.

        In the above example {'LA','2017-12-01',1 } having the same number 1.

        { 'NY','2017-12-01',2} having the number 2. and  { 'NY','2016-10-01',3}, having the number  3 because eventhough location is common but date is different.

        */
        /**
         * -----------------------------------------------------------
         */
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
            console.log(mymap);
            newArray = arrayOfElements.map(function(value) {
                var label = value[0] + "-" + value[1];
                debugger
                console.log(mymap[label]);
                console.log(!mymap[label]);
                console.dir(mymap[label]);
                console.dir(!mymap[label]);

                if (!mymap[label]) {
                    mymap[label] = ++n;
                }
                console.log(value.concat([mymap[label]]))
                return value.concat([mymap[label]]);
                console.log(mymap);

            });
            debugger
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