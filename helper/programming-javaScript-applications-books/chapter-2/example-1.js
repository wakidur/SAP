/*
test('order with unintentional side effect.', function() {

    var cartProto = {
            items: [],
            addItem: function addItem(item) {
                this.items.push(item);

            }
        },
        createCart = function(items) {
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
*/
// setp-1;
var a = function x() {
    console.log("x() is usable inside the function.");
};
a();
try {
    x();
} catch (e) {
    console.log(e.message)
}

// step-2
var testDeclaration = false;
var foo;

// this function gets erroneousty overridden ins

function bar(arg1, bleed) {
    if (bleed) {
        console.log(false + " " + "Declaration bar() should NOT be callable form," + "inside the expression");
    } else {
        console.log(true + " " + "Declatind bar() should be called oustide the expression")
    }
    testDeclaration = true;
}

foo = function bar(declaration, recurse) {
    if (recurse) {
        console.log(true + " Expressin bar() should support scope safe recursion")
    } else if (declaration === true) {
        console.log(true + "Expression bar shuld be callable vai foo()");
        bar(false, true);
    } else {
        console.log(false + "Expression bar() should NOT be callable outside the expression ")
    }
};

bar();
foo(true);

//******************************** Lambdas------------
/*
A lambda is a function that is used as data. As such, it can be used the same way any
other expression can: as a parameter for another function, the return value of a function,
or anywhere you might use a literal value
*/


var sum = function sum() {
    var result = 0;
    [5, 5, 5].forEach(function addTo(number) {
        result += number;
    });
    return result;
};


//-----------------------
var lightbulb = function() {
    this.isOn = false;
}

lightbulb = new Lightbulb();

Lightbulb.prototype.toggle = function() {
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
    // Implementation....
}


(function() {
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