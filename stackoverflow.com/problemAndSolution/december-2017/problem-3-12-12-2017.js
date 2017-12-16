/**
 * https://stackoverflow.com/questions/47774696/javascript-counting-duplicates-in-object-array-in-es6
 * ***Javascript - Counting duplicates in object array in es6**
 */
//I have object array like this.
/*
const array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 12 }
];*/
//I want to count duplicates objects and store the count as new object field.
//I found this snippet and it work great but it not exactly what i need.
/*const names = [{
        _id: 1
    },
    {
        _id: 1
    },
    {
        _id: 2
    },
    {
        _id: 1
    },
];

const result = [...names.reduce((mp, o) => {
    if (!mp.has(o._id)) {
        mp.set(o._id, Object.assign({ count: 0 }, o));
        mp.get(o._id).count++;
    }
    return mp;
}, new Map).values()];
console.log(result);
*/

//It works with object with one field _id. In my case there are two, x and y

//How should I modify that code?

//In brief...I would like to receive the result:

// result = [
/*{ x: 1, y: 2, count: 3 }, { x: 3, y: 4, count: 2 }, { x: 3, y: 12, count: 1 }
]
*/
/*------------- end question section -----------------*/

// You can use Object.values() and reduce() methods to return new arrray of objects.
/*
const arrayOfObject = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 12 }
];

const resultOne = Object.values(arrayOfObject.reduce((newObject, e) => {
    console.log(newObject + "\n");
    console.log(e + "\n");
    let k = `${e.x}|${e.y}`;
    debugger
    console.log(!newObject[k]);
    console.dir(!newObject[k]);
    console.dir(newObject[k]);
    if (!newObject[k]) {
        newObject[k] = {...e, count: 1 }
    } else {
        newObject[k].count += 1;
    }
    debugger
    console.log(newObject);
    return newObject;
}, {}));
console.log(resultOne);

*/


/*You can use `Object.values()`
and `reduce()`
methods to
return new array of objects.
*/

// setp-1
/*
const array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 12 }
]

const result = Object.values(array.reduce((r, e) => {
    let k = `${e.x}|${e.y}`;
    if (!r[k]) r[k] = {...e, count: 1 }
    else r[k].count += 1;
    return r;
}, {}))

console.log(result)

*/
/*
Here is the solution with `Map`
and spread syntax `...`
*/
// setp-2
/*
const array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 12 }
]

const result = [...array.reduce((r, e) => {
    let k = `${e.x}|${e.y}`;
    if (!r.has(k)) r.set(k, {...e, count: 1 })
    else r.get(k).count++
        return r;
}, new Map).values()]

console.log(result)
*/
// step - 3
/*
One way to do it would be to create an index mapping both x and y to the result entry.
*/

let index = {};
let result = [];
const array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 12 }
];
array.forEach(point => {
    debugger
    let key = '' + point.x + '||' + point.y;
    if (key in index) {
        debugger
        index[key].count++;
    } else {
        let newEntry = {
            x: point.x,
            y: point.y,
            count: 1
        };
        index[key] = newEntry;
        debugger;
        result.push(newEntry);
        debugger;
    }
});
console.log(result);


function countDuplicatesObjects(arrayOfObject) {
    let index = {};
    let result = [];
    arrayOfObject.forEach(point => {
        let key = '' + point.x + '||' + point.y;
        if (key in index) {
            debugger
            index[key].count++;
        } else {
            let newEntry = {
                x: point.x,
                y: point.y,
                count: 1
            };
            index[key] = newEntry;
            debugger
            result.push(newEntry);
            debugger

        }
    });
    return result;
}
const array = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 1, y: 2 },
    { x: 3, y: 12 }
];
countDuplicatesObjects(array);