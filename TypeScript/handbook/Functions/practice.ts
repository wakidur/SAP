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

let myFunctionType: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};


