// Step - 1;
var sales = 'Toyota';

function carTypes(name) {
    if (name === 'Honda') {
        return name;
    } else {
        return " Sorry, we don't sell " + name + ".";
    }
}

var car = {
    myCar :  "Saturn",
    getCar : carTypes("Honda"),
    special: sales 
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);


// Step - 2;
var car = {
    manyCars: {
        a: "Saab",
        "b" : "Jeep"
    },
    7: "Mazda"
};

console.log(car.manyCars.b);// Jeep
console.log(car[7]);// Mazda

// step - 3;


var unusualPropertyName = {
    '' : 'An empty string',
    '!' : 'Bang!'
};

//console.log(unusualPropertyName.''); // SyntaxError: Unexpected string
console.log(unusualPropertyName['']); // An empty string
//console.log(unusualPropertyName.!); // SyntaxError: Unexpected token !
console.log(unusualPropertyName['!']); // Bang!


var obj = {
    // __proto__
    __proto__: theProtoObj,
    
    // Shorthand for 'handler: headler'
    handler,
    // Methods
    toString() {
        // super Class
        return 'd ' + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)()] : 42
};