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
 * this parameters
 * this parameters in callbacks
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

// this parameters

function f(this: void) {
  // make sure 'this' is unuable in this standalone function
}

interface CardInterface {
  suit: string;
  card: number;
}

interface DeckInterface {
  suits: string[];
  cards: number[];
  createCardPicker(this: DeckInterface): () => CardInterface;
}

let deckInterfaceObject: DeckInterface = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  // Note: The function now explicitly speciafied that its callee must be of type DeckInterface
  createCardPicker: function(this: DeckInterface) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPickerInterface = deck.createCardPicker();
let pickedCardInterface = cardPickerInterface();

console.log(`card: ${pickedCardInterface.card} of ${pickedCardInterface.suit}`);

// this parameters in callbacks

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  conClickBad( this: Handler, e: Event) {
    // oops, used this here . using this callback would crash at runtime
    this.info = e.message;
  }
}

let h = new Handler();

/**
 * Overloads
 */


let suits = ['hearts','spades', 'clubs', 'diamonds'];

function pickCard(x): any {
  // check to see if we're working with an object/array
  // if so, they gave us the deck  and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } 
  // Otherwise jist let them pick the card
  else if(typeof x ==  "number") {
    let pickedSuit = Math.floor(x / 13);
    return {
      suit: suits[pickedSuit],
      card: x % 13
    }
  }
}

let myDeckOver = [{
  suit: "diamonds",
  card: 2
}, {
  suit: "spades",
  card: 10
}, {
  suit: "hearts",
  card: 4
}];
let pickedCard1 = myDeckOver[pickCard(myDeckOver)];

let suitss = ["hearts", "spades", "clubs", "diamonds"];

function pickCards(x: {suit: string; card: number; }[]): number;
function pickCards(x: number): {suit: string; card: number; };
function pickCards(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suitss[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard2 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);