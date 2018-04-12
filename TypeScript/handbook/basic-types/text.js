// 27-03-2018
/**
 * Boolean
*/
var isDone = false;
var isDoneTrue = true;
/**
 * Number
 */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
/**
 * String
 */
var color = "blue";
color = 'red';
// Template strings
var fullName = "Bob Bobbington";
var age = 32;
var sentence = "Hello, my name is " + fullName + ". I'will be " + (age + 1) + " years old next month.";
// this is equivalent to declaring sentence like.
var sentenceEquivalent = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + "Years old next month.";
/**
 * Array
 */
var list = [1, 3, 4];
var lists = [1, 2, 3];
/**
 * Tuple
 */
// declare a tuple type
var x;
// initialize it
x = ['hello', 100]; // ok
x = [102, 'Hello']; // Error
console.log(x[0].substr(1)); // ok
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // ok, 'string' cna be assigned to 'string | number'
console.log(x[5].toString()); // ok, 'string' and 'number' both have toString
x[6] = true; // Error , 'boolean' isn't 'string | number'
//# sourceMappingURL=text.js.map