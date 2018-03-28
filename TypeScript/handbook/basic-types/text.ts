// 27-03-2018
/**
 * Boolean
*/

let isDone: boolean = false;
let isDoneTrue: boolean = true;


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
    color = 'red';

    // Template strings

let fullName: string = `Bob Bobbington`;
let age:number = 32;
let sentence: string = `Hello, my name is ${ fullName }. I'will be ${ age + 1 } years old next month.`;

// this is equivalent to declaring sentence like.

let sentenceEquivalent = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + "Years old next month.";

/**
 * Array
 */

 let list: number[] = [1, 3, 4];

 let lists: Array<number> = [1, 2, 3];


 /**
  * Tuple
  */

  // declare a tuple type

  let x: [string, number];

  // initialize it
  x = ['hello', 100]; // ok

  x = [102, 'Hello']; // Error

  console.log(x[0].substr(1)); // ok
  console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'



