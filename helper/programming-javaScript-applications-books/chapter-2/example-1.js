/* ============Minimize Side Effects=============*/
test('order with unintentional side effect.', function () {

    var cartProto = {
            items: [],
            addItem: function addItem(item) {
                this.items.push(item);

            }
        },
        createCart = function (items) {
            var cart = Object.create(cartProto);
            cart.items = items;
            return cart;
        },
        // load cart with stored items.

        savedCart = createCart(["apple", "pear", "orange"]),
        session = {
            get: function get() {
                return this.cart;
            },
            // Grab the saved cart.
            cart: createCart(savedCart.items)
        };

    // additem gets triggered by an event handler somewhere
    session.cart.addItem('grapfruti');
    ok(session.cart.intes.indexOf('grapefruti') !== -1, "passes: session cart has grapfruit");
    ok(savedCart.items.indexOf('grapefruit') === -1)
});

/** ====================== Function Definition 23-1-2018 ================== */

//Function Expression
function foo() {
    /**
     * warning: arguments.callee id deprecated use with caution. Used here strictly for illustration
     */
    return arguments.callee;
}
foo();

//can’t declare a function conditionally

let score = 6;

if (score > 5) {
    function grade() {
        return "Pass";
    }
} else {
    function grade() {
        return "Fail";
    }
}
module('Pass or Fail');
test('Conditional function declaration.', function () {
    // Firefox: Pass
    // Chrome, Safari, IE, Opera : Faill
    equal(grade(), 'Pass', 'Grade should pass.');
});

// Function Expression.
let bar = () => {
    return arguments.callee;
}
bar();
// --------------
let enameFunction = () => {

    return "Hello world"
}
enameFunction()
// ---------------
let getIntergerValue = (x, y) => {
    let result = Number;
    if (Number.isInteger(x) && Number.isInteger(y)) {
        result = x + y;
        result += " Great!";
    } else {
        result = "Please enter a valid integer value ";
    }
    return result;
};

getIntergerValue(1, 3);

// -----------
let baz = {
    objproperty: function () {
        return arguments.callee;
    }
};
baz.functionPro(); // function also anonymous.

//---------------------- 24-1-2018

let lightBulbAPI = {
    toggle: function () {},
    getState: function () {},
    off: function () {},
    on: function () {},
    blink: function () {}

}

/** ================== Named Function Expressions============= */

let lightBulbAPIWithFunName = {
    toggle: function toggle() {},
    getState: function getState() {},
    off: function off() {},
    on: function on() {},
    blink: function blink() {}
}



test('Named function expressions. ', function () {
    let a = function x() {
        ok(x, 'x() is usable inside the function. ');
    };
    a();

    try {
        x();
    } catch (error) {
        ok(true, 'x() is undefined outside the function.');
    }
})

// 26-1-2018------------
//----
function test() {
    var testDeclaration = false;
    var foo;
    // this function gets erronesousty overridden in IE8;
    function bar(arg1, bleed) {
        if (bleed) {
            console.log(false + "Declaration bar() should NOT be callable from inside the expression. ");
        } else {
            console.log(true + "Declaration bar() should be called outside the expression ");
        }
        testDeclaration = true;
    }

    foo = function bar(declaration, recurse) {
        if (recurse) {
            console.log(true + "Expression bar() should suppor secope safe recusion");
        } else if (declaration === true) {
            console.log(true + "Expresson bar() should be callable via foo() ");
            bar(false, true);
        } else {
            // Fails in IE8 and older
            console.log(false + "expression bar() should NOT be callable outside the expression");
        }
    };
    bar();
    foo(true);
    console.log(testDeclaraion + "The bar() decatiaon shuld NOT get overridden by the expression bar()");
}


// 27-01-2018-------

//******************************** Lambdas------------
var sum = function sum() {
    var result = 0;
    [5, 5, 5].forEach(function addTo(number) {
        result += number;
    });
    return result;
};


//-----------------------
// Immediately Invoked Function Expressions
var Lightbulb = function () {
    this.isOn = false;
}

lightbulb = new Lightbulb();

Lightbulb.prototype.toggle = function () {
    this.isOn = !this.inOn;
    return this.inOn;
}

Lightbulb.prototype.getState = function getState() {
    // Implementation....
}

Linhtbulb.prototype.off = function off() {
    // Implementation....
}

Lightbulb.prototype.on = function on() {
    // Implementation....
}

Lightbulb.prototype.blink = function blink() {
    debugger;
    // Implementation....
}


(function () {
    var isOn = false;
    toggle = function toggle() {
            isOn = !isOn;
            return isOn;
        },
        getState = function getState() {
            // Implementation...
        },
        off = function off() {
            // Implementation...
        },
        on = function on() {
            // Implementation...
        },
        blink = function blink() {
            // Implementation...
        },
        lightbulb = {
            toggle: toggle,
            getState: getState,
            off: off,
            on: on,
            blink: blink
        };

}());

/*=========Method Context========*/
function highPass(number, cotoff) {
    cutoff = cutoff || this.cutoff;
    return (number >= cutoff);
}

var filte1 = {
        highPass: highPass,
        cutoff: 5
    },
    filte2 = {
        // no highPass here!
        cutoff: 3
    };

// function invocation 
var result = highPass(6, 5);

//It takes the form object.methodName() (dot notation) or object['methodName']() (square bracket notation)
var result1 = filte1.highPass(3); // '3 >= filter1.cutoff should be false.'
var result2 = highPass.call(filte2, 3); // '3 >= filter2.cutoff should be true.'
var result3 = filte1.highPass(6); // '6 >= filter1.cutoff should be true.'


// 28-1-2018---------------
/*-----Function.prototype.bind()-----------*/
var lightbulb = {
    toggle: function toggle() {
        this.isOn = !isOn;
        return this.isOn;
    },
    isOn: false
}
var toggle = lightbulb.toggle;
var lightswitch = document.getElementById('lightswitch');
var lightswitch = document.getElementById('lightswitch');
lightblightswitchulb.addEventListener('click', lightbulb.toggle, false);


//  29-1-2018
/*-----------------Function Scope--------------*/
var x = 1;
(function () {
    console.log(x);
    var x = 2;
}());

// How JavaScript interprets the code
var x = 1;
(function () {
    var x; // Declaration is hoisted and x is undefined.
    console.log(x);
    x = 2; // Initialization is still down here.
}());

function functionDeclarationHoisting() {
    function number() {
        return 1;
    }
    (function () {
        console.log(number() + 2 + "Inner scope wins. ");

        function number() {
            return 2;
        }
    }());
    console.log(number() + 1 + "outer scope still works.");
}


// This code is equivalent to
function fFunctionDeclarationHoisting() {
    function number() {
        return 1;
    }
    (function () {
        try {
            number();
        } catch (error) {
            console.log(true + "number() is undefined.");
        }
        var number = function number() {
            return 2;
        };
        console.log(number() + 2 + "number() is defined now. ");
    }());
    console.log(number() + 1 + "outer scope still works.");
}


// Function Expression Hoisted
function functionExpressionHoisted() {
    function number() {
        return 1;
    }
    (function () {
        var number; // Declaration initialized to undefined.
        try {
            number();
        } catch (e) {
            console.log(true + 'number() is undefined.');
        }
        number = function number() {
            return 2;
        }
        console.log(number() + 2 + 'number() is defined now.');
    }());
    console.log(number() + 1 +  'Outer scope still works.');
}











// Method Design
var userProto = {
    name: '',
    email: '',
    alias: '',
    showInSearch: true,
    colorScheme: 'light'
};

function createUser(name, email, alias, showInSearch, colorScheme) {
    return {
        name: name || userProto.name,
        email: email || userProto.email,
        alias: alias || userProto.alias,
        showInSearch: showInSearch,
        colorScheme: colorScheme || userProto.colorScheme
    };
}

var newUser = createUser('Tonya', '', '', '', 'dark');
newUser.colorScheme;


function createUser(optionas) {
    return $.extend({}, userProto, optionas);
}


//------------------------
var args = Array.prototype.slice.call(arguments, 0);

var args = [].slice.call(arguments, 0);


function sort() {
    var args = [].slice.call(arguments, 0);
    return args.sort();
}

var result = sort('b', 'a', 'c');
result // ['a', 'b', 'c']

var first = args.shift();

function morph(params) {
    var args = [].slice.call(arguments, 0);
    animals = 'turtles'; // set a default

    if (typeof options === "string") {
        animals = options;
        args.shift();
    }

    return ('The pet store has ' + args + ' ' + animals + '.');
}

var test1 = morph('cats', 3);
var test2 = morph('dogs', 4);
var test3 = morph(5);

//------------------------------
// Method dispatch
var methods = {
    init: function (args) {
        return 'initializing....';
    },
    hello: function (args) {
        return 'hello' + args;
    },
    goodbye: function (args) {
        return 'Goodbye, Creue ' + args;
    }
};

var greet = function greet(options) {
    var args = [].slice.call(arguments, 0);
    var initialized = false;
    var action = 'init'; // init will run by default

    if (typeof options === 'string' && typeof methods[options] === 'function') {
        action = options;
        args.shift();
    }
    return methods[action](args);
};

var test1 = greet();
var test2 = greet('hello', 'world!');
var test3 = greet('goodbye', 'world!');