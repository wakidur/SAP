/**
 * 08-05-2015
 * destructuring assignment
 */

var a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [100, 34, 45, 67, 90, 90];

// Syntax
var a, b, rest;
[a, b] = [12, 44];
[a, b, ...rest] = ["wakidur", 'Rahman', 58, 34, 56, 23];

({
    a,
    b
} = {
    a: 10,
    b: 40
});

({
    a,
    b,
    ...rest
} = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
});

var x = [1, 2, 3, 4, 5];
var [y, z] = x;

/**
 * Array destructuring
 */

// Basic variable assignment
let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;

//Assignment separate from declaration
var a, b;
[a, b] = [1, 2];