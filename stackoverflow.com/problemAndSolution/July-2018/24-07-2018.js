//https://stackoverflow.com/questions/51480540/how-to-replace-existing-array-objects-of-one-array-to-another-array-in-javascrip

//  How to replace existing array objects of one array to another array in javascript

var arr1 = [{
    id: '111',
    name: 'aaa'
}, {
    id: '222',
    name: 'bbb'
}, {
    id: '333',
    name: 'ccc'
}, {
    id: '444',
    name: 'ddd'
}];


var arr2 = [{
    id: '111',
    name: 'xyz'
}, {
    id: '333',
    name: 'abc'
}];

//my requirement: I need to replace aar1 with arr2 having same id in arr2 but different name value.

//Below Result i should get in arr1

var arr1 = [{
    id: '111',
    name: 'xyz'
}, {
    id: '222',
    name: 'bbb'
}, {
    id: '333',
    name: 'abc'
}, {
    id: '444',
    name: 'ddd'
}];

const result = arr1.map(item => 
    arr2.find(item2 => 
        item.id === item2.id
   ) || item
)