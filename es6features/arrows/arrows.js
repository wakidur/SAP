// map
/*
syntax
var new_array = arr.map(function callback(currentValue, index, array){
    return Element fof new_array
}[, thisArg]);
*/
let numbers = [1, 4, 9];
let roots = number.map(Math.sqrt);
// roots is now [1,2,3];
// number is still [1,4,9];

let kvArray = [{
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    }
];
let feformatedArray = kvArray.map(obj => {
    var robj = {};
    robj[obj.key] = obj.value;
    return robj;
});

let newNumbers = [8, 16, 96];
let doubles = newNumbers.map(function(num) {
    return num * 2;
});
// doubles is now [16, 32, 192];
// newNumbers is still [8, 16, 96]

//Using amp generically 
let mapPro = Array.prototype.map;
let stringASCII = mapPro.call('Hello World', function(x) {
    return x.charCodeAt(0);
});
// short form
let charterCode = [].map.call("How are you ", function(y) {
    return y.charCodeAt(0);
});

// Using map generically querySelectorAll
let elemnets = document.querySelectorAll('select option:checked');
let values = [].map.call(elemnets, function(obj) {
    return obj.value;
});


// reformattedArray is now [{1:10}, {2: 20}, {3:30}];
//kvArray is still

// Arrows

// Expression bodies
let arrayFirst = [1, 3, 4, 5, 6];
let arraySecond = [2, 6, 68];
let arrayThird = [58, 6, 99, 87, 96];
let odds = arrayFirst.map(v => v + 1);
let nums = arraySecond.map((v, i) => v + i);
let pairs = arrayThird.map(v => ({ even: v, odd: v + 1 }));

// Statement bodies
let fives;
let numbersValud = [2, 3, 6, 9];
numbersValud.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

// Lexical this
let bob = {
    name: "Wakidur",
    friends: [],
    printFriends: function printFriends() {
        this.friends.forEach(f => {
            console.log(this.name + " knows " + f);
        });
    }

};

// Basic Syntax
(parameter1, parameter2, ..., parameterN) => { statements };
(parameter1, parameter2, ..., parameterN) => expression;
// equivalient to : => { return expression }

// Parentheses are optional when there's only one paramenter name: 
(singleparameter) => { statements };
singleparameter => { statements }

// The  parameter  list for a function  with no  parameters should be written with a pair of parentheses

// Advanced Syntax
// Parenthesize the body of function to return an object literal expression
parameter => ({ foo: bar });

// Rest parameters  and default paraments are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, ..., paramN = defaultValueN) => {
    statements;
};

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
f(); // 6