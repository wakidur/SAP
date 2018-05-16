// 27-03-2018
/**
 * Boolean
*/
let isDone = false;
let isDoneTrue = true;
/**
 * Number
 */
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
/**
 * String
 */
let color = "blue";
color = 'red';
// Template strings
let fullName = `Bob Bobbington`;
let age = 32;
let sentence = `Hello, my name is ${fullName}. I'will be ${age + 1} years old next month.`;
// this is equivalent to declaring sentence like.
let sentenceEquivalent = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + "Years old next month.";
/**
 * Array
 */
let list = [1, 3, 4];
let lists = [1, 2, 3];
/**
 * Tuple
 */
// declare a tuple type
let x;
// initialize it
x = ['hello', 100]; // ok
x = [102, 'Hello']; // Error
console.log(x[0].substr(1)); // ok
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world"; // ok, 'string' cna be assigned to 'string | number'
console.log(x[5].toString()); // ok, 'string' and 'number' both have toString
x[6] = true; // Error , 'boolean' isn't 'string | number'
// 9-4-18
// boolean
let isFalse = false;
let isTure = true;
// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//String 
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 36;
let sentence = `Hello, may name is ${fullName}. I'll be ${age + 1} years old next month.`;
// Array
let list = [1, 5, 6];
let list = [1, 2, 3];
// Tuple
let x;
// Initialize it
x = ['hello', 10]; //ok
// Enum
var Color;
(function (Color) {
    Color[Color["Rea"] = 0] = "Rea";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// Any 
let notSure = 4;
notSure = "maybe a string instand";
notSure = false; // okay, definitely a boolea
let notSure = 4;
notSure.isItExists();
notSure.toFixed();
let prettySure = 4;
prettySure.toFixed(); // error property toFixed doesn't exist ion type object
let list = [1, true, "free"];
list[1] = 100;
//Void
function warnUser() {
    alert("This is my warning massage");
}
let unusable = undefined;
//# sourceMappingURL=text.js.map