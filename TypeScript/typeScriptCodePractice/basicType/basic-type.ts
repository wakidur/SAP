/**
 * Boolean
 */
let isDone: boolean = false;


/**
 * Number
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/**
 * String
 */

let color: string = "blue";

let fullName: string = `Bob Bobbington`;
let age: number = 36;
let sentence: string = `Hello, my name is ${ fullName }. i will be ${age + 1} years old next month.`;

/**
 * Array
 * Array types can be written in one of two ways.
 * In the first, you use the type of the elements followed by []
 * The second way uses a generic array type, Array<elemType>:
 */

let listElements : number[] = [1, 2, 3];
let listGeneric: Array<number> = [1,2,3,4];

/**
 * Tuple
 */

let tuple: [string, number];
    tuple = ['Hello', 10]; // okay
    tuple = [10, "hello"];// Error 

/**
 * Enum
 */
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

/**
 * Any
 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

/**
 * Void
 */
