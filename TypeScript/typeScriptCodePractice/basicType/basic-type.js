/**
 * Boolean
 */
var isDone = false;
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
var fullName = "Bob Bobbington";
var age = 36;
var sentence = "Hello, my name is " + fullName + ". i will be " + (age + 1) + " years old next month.";
/**
 * Array
 * Array types can be written in one of two ways.
 * In the first, you use the type of the elements followed by []
 * The second way uses a generic array type, Array<elemType>:
 */
var listElements = [1, 2, 3];
var listGeneric = [1, 2, 3, 4];
/**
 * Tuple
 */
var tuple;
tuple = ['Hello', 10]; // okay
tuple = [10, "hello"]; // Error 
/**
 * Enum
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
/**
 * Any
 */
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
/**
 * Void
 */
//# sourceMappingURL=basic-type.js.map