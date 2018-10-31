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

/**
 * Rest Parameters
 */
function buildNameWithRestParameters(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let employeeNameRestParameters = buildNameWithRestParameters("Joseph", "Samuel", "Lucas", "Mackinize");


// other exampl
function restParameters(firstName: string, ...restOfNameIs: string[]) {
  return firstName + " " + restOfNameIs.join(" ");
}

let buildNameFun: (fname: string, ...restName: string[]) => string = restParameters;

/**
 * this
 * this and arrow function
 */

let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    return function() {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {
        suit : this.suits[pickedSuit],
        card: pickedCard % 13
      };
    }
  }
}


let cardPicker  = deck.createCardPicker();
let pickedCard = cardPicker();
alert(`card: ${pickedCard.card} of ${pickedCard.suit}`);


// ECMAScript 6 arrow syntax

let deckArrowSyntax = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    // Note: the line below is now an arrow function, allowing us to capture "this" right here
    debugger
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard/ 13);
      debugger;
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      };
    }
  }
}

let cardPickerArrow = deckArrowSyntax.createCardPicker();
let pickedCardArrow = cardPickerArrow();

console.log(`card: ${pickedCardArrow.card} of ${pickedCardArrow.suit}`)
alert(`card: ${pickedCardArrow.card} of ${pickedCardArrow.suit}`);

var arr  = [1,2,3,4,5,6]
var n = 3;
function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  var y = "";
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
      debugger;
      y += arr[x].toString();
  }
  return y;
}

getRandom(arr, n);