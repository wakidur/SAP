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


//exmaple-1;
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

materials.map( matarial => matarial.length );
// ------------------Shorter functions-----------------
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

var getMaterialLength = materials.map(function(material) {
    return material.length;
}); // [8,6,7,9]

var getMaterialLengthParm = materials.map((matarial) => {
    return matarial.length;
}); // [8,6,7,9]

var getMaterialLengthObj = materials.map(({length}) => length) // [8,6,7,9]

//  ------------------ No separate this--------------------

function Preson(params) {
    // the Person() constructor defineds 'this' as an instance of itself.
    this.age = 0;

    setInterval(function growUp() {
        // In non-strict mode, the growUp() function defines 'this'
        // as the global object, which is different from the 'this'
        // defined by the Person() constructor.
        this.age++;
    }, 1000);
}

var p = new Preson();


// exmaple - 1
function Person() {
    var that = this;
    that.age = 0;
    setInterval(function growUp() {
        // the callback refers to the 'that' variable of which
        // the value is the expected object
        that.age++;
    }, 1000);
}

// exmape -2 
function Preson() {
    this.age = 0;
    setInterval( () => {
        this.age ++;// |this| properly refers to the person object
    }, 1000);
}

var p = new Preson();


/**--------------------- Relation with strict mode-------------------- */
var f = () => {
    'use strict';
    return this;
}

f() === window; // or the global object

/**------------------------Invoked through call or apply-------------------*/
var adder = {
    base: 1,
    add: function (a) {
        var f = v => v + this.base;
        return f(a);
    },
    addThruCall: function (a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };
        return f.call(b,a);
    }
}

console.log(adder.add(1))// this would log to 2
console.log(adder.addThruCall(1));


/**---------------------No binding of arguments------------------*/
var arguments = [1,2,3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
    var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n 
    return f();
}
foo(1); // 2

// in most cases, using rest parameters is a good alternative to using an arguments object.

function foo(n) {
    var f = (...args) => args[0] + n;
    return f(10);
}
foo(1); // 11


/**------------------Arrow functions used as methods-----------------------*/

'use strict';
var obj = {
    i : 12,
    b : () => console.log(this.i, this),
    c : function() {
        console.log(this.i, this);
    } 
}

obj.b(); // prints undefined, Window {...} (or the global object )
boj.c(); // prints 10, Object {...}


'use strict';
var obj = {
    a: 10
};
Object.defineProperty(obj, 'b', {
    get: () => {
        console.log( this.a, typeof this.a, this);
        return this.a + 10; // represents global object 'Window' therefor 'this.a' returns 'undefined'
    }
});

/**------------------Use of the new operator---------------------*/
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor

/**------------------Use of prototype property-------------------- */
var Foo = () => {};
console.log(Foo.prototype); // undefined
/**----------------------- Use of the yield keyword------------------ */
var func = x => x * x;
// concise body syntax, implied "return"
var func = (x,y) => {
    return x + y;
}
// with block body, explicity "return" needed

/**-----------------Returning object literals----------------*/

var func = () => {
    foo : 1
};
// Calling func() returns undefined!

var func = () => {
    foo: function() {}
};
// SyntaxError: function statement requires a name

var func = () => ({foo: 1});

/**--------------------------Line breaks----------------------*/
var func = () 
            => 1;

// SyntaxError: expected expression, got '=>'


/*-------------------------Parsing order --------------------*/
let callback;
callback = callback || function() {} ; // ok
callback = callback || () => {};
// SyntaxError : invalid arrow-function arguments
callback = callback || (() => {}); // ok

/**-----------------More examples-------------------------*/
// An emply arrow function returns undefined
let empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an immediately invoke functio express)

var simple = a => a > 15 ? 15 : a;
simple(16);// 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array  filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter( v => v % 2 == 0 );
// [6, 0, 18];

var double = arr.map( v => v * 2 );
// [10, 12, 26, 0, 2, 36, 46]
// More concise promise chains
promise.then(a => {
    // ...
  }).then(b => {
    // ...
  });
  
  // Parameterless arrow functions that are visually easier to parse
  setTimeout( () => {
    console.log('I happen sooner');
    setTimeout( () => {
      // deeper code
      console.log('I happen later');
    }, 1);
  }, 1);