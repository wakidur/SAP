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

let sentenceEquivalent = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + ( age + 1) + "Years old next month.";

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
  
  x[3] = "world"; // ok, 'string' cna be assigned to 'string | number'
  
  console.log(x[5].toString()); // ok, 'string' and 'number' both have toString
  
  x[6] = true; // Error , 'boolean' isn't 'string | number'



// 9-4-18

// boolean
let isFalse: boolean = false;
let isTure: boolean = true;

// Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String 
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 36;
let sentence: string = `Hello, may name is ${fullName}. I'll be ${ age + 1 } years old next month.`;

// Array

let list: number[] = [1,5,6];

let list: Array<number> = [1,2,3];

// Tuple
let x: [string, number];
// Initialize it
x = ['hello', 10]; //ok

// Enum
enum Color {Rea, Green, Blue}
let c: Color = Color.Green;

// Any 
let notSure: any = 4;
    notSure = "maybe a string instand";
    notSure = false;// okay, definitely a boolea

let notSure: any = 4;
    notSure.isItExists();
    notSure.toFixed();

let prettySure: Object = 4;
    prettySure.toFixed(); // error property toFixed doesn't exist ion type object

let list: any[] = [1, true, "free"];
    list[1] = 100;

//Void

function warnUser(): void {
  alert("This is my warning massage");
}

let unusable: void = undefined;



