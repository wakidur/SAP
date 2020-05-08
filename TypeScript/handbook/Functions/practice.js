// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
// outside of the function body
var z = 100;
function addToz(x, y) {
    return x + y + z;
}
/**
 * Function types
 * Typing the function
 */
function addTypes(x, y) {
    return x + y;
}
var addMyType = function (x, y) {
    return x + y;
};
/**
 * Writing the function type
 * @param x
 * @param y
 */
var myFunctionType = function (x, y) {
    return x + y;
};
var myAddDifParm = function (x, y) {
    return x + y;
};
/**
 * Inferring the types
 */
var addInference = function (x, y) {
    return x + y;
};
var addInferenceVar = function (x, y) { return x + y; };
/**
 * Optional and Default Parameters
 */
function buildName1(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName1("hell", "worl"); // ah, just right
/**
 * let result2 = buildName1("hell"); // error, Expected 2 arguments, but got 1.
 * let result3 = buildName1("hell", "worl", "ser"); // Error, Expected 2 arguments, but got 3.
 */
function buildNameOptional(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        firstName;
}
function bulidNameDefaultInitialized(f, l) {
    if (l === void 0) { l = "Smith"; }
    return f + " " + l;
}
/**
 * Rest Parameters
 */
function buildNameWithRestParameters(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeNameRestParameters = buildNameWithRestParameters("Joseph", "Samuel", "Lucas", "Mackinize");
// other exampl
function restParameters(firstName) {
    var restOfNameIs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNameIs[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfNameIs.join(" ");
}
var buildNameFun = restParameters;
/**
 * this
 * this and arrow function
 */
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
//# sourceMappingURL=practice.js.map