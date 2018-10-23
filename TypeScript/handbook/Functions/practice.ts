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