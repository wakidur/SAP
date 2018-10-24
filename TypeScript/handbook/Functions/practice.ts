// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function(x, y) {
  return x + y;
};

// outside of the function body
let z = 100;
function addToz(x, y) {
  return x + y + z;
}

/**
 * Function types
 * Typing the function
 */
function addTypes(x: number, y: number): number {
  return x + y;
}

let addMyType = function(x: number, y: number): number {
  return x + y;
};

/**
 * Writing the function type
 * @param x
 * @param y
 */
let myFunctionType: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

let myAddDifParm: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

/**
 * Inferring the types
 */

let addInference = function(x: number, y: number): number {
  return x + y;
}


let addInferenceVar: (baseValeu: number, increment: number) => number = function(x, y) { return x + y};


/**
 * Optional and Default Parameters
 */
function buildName1(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName1("hell", "worl"); // ah, just right
/**
 * let result2 = buildName1("hell"); // error, Expected 2 arguments, but got 1. 
 * let result3 = buildName1("hell", "worl", "ser"); // Error, Expected 2 arguments, but got 3. 
 */

function buildNameOptional(firstName: string, lastName?: string) {
  if(lastName) 
    return firstName + " " + lastName;
  else 
    firstName
}

function bulidNameDefaultInitialized(f: string, l: string = "Smith") {
  return f + " "  + l;
}


