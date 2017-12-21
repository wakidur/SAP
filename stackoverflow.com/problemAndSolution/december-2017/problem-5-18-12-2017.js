//https://stackoverflow.com/questions/47869461/print-duplicate-items-which-have-the-same-property

// print duplicate items which have the same property
// how can I get items duplicate properties and push it in the object for example I have

var exmapleObject = {
        "1": { "ip": 4 },
        "2": { "ip": 3 },
        "3": { "ip": 4 },
        "4": { "ip": 3 }
    }
    //I expect to have an object or array where I will have {[1,3], [2,4]}

// 3 Answers
// use reduce and Object.values
const object = {
    "1": { "ip": 4 },
    "2": { "ip": 3 },
    "3": { "ip": 4 },
    "4": { "ip": 3 }
};

// step - 1
let output = Object.values(Object.keys(object).reduce((a, b) => {
    let key = object[b].ip // key to be used for grouping the values
    a[key] = a[key] || [];
    a[key].push(b);
    return a;
}, {}));
console.log(output);


// setp-2
//ou can use array#reduce and JSON.stringify the values as key and add the key which have the same values.
const secondObject = {
    "1": { "ip": 4 },
    "2": { "ip": 3 },
    "3": { "ip": 4 },
    "4": { "ip": 3 }
};

let result = Object.keys(secondObject).reduce((map, key) => {
    let keys = JSON.stringify(secondObject[key]);
    map[keys] = map[keys] || [];
    map[keys].push(key);
    return map;
}, {});

let finalOutput = Object.values(result);
console.log(finalOutput);