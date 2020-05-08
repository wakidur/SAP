/**
 * The class syntax has two components
 * class expressions ( just as you can define function expressions)
 * class declarations ( just as you can define function declarations)
 */

//  Example function expressions and declarations
// function expression
var notHoisted = function() {
    console.log('bar');
};
//  Function declaration
function hoisted() {
    console.log('foo');
}

/****** Class declarations ***/


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

/***********Hoisting**********/
var p = new Rectangle(); // ReferenceEffor
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}


/************ Class expressions **/

// unnamed
var Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// named
var Rectangle = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// -----------01-03-2018--------------
// Prototype methods

class Rectangle {
    constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        // Getter
    get area() {
        return this.calcArea();
    }

    // Method

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area);

// Static methods

class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance() {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new point(5, 5);
const p2 = new point(10, 10);

console.log(point.distance(p1, p2));


//  Boxing with prototype and static methods

class Animal {
    speak() {
        return this;
    }

    static eat() {
        return this;
    }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat() // call Animal

let eat = Animal.eat;

eat(); // undefined


// Traditional function base classes

function Animals() {}

Animals.prototype.speak = function() {
    return this;
}

Animals.eat = function() {
    return this;
}

let objT = new Animals();
let sepek = objT.speak;
speak();

let eata = Animals.eat;
eata();

// Sub classing with extends

class AnimalParentCla {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends AnimalParentCla {
    speak() {
        console.log(this.name + " barks.");
    }
}

const d = new Dog('Mitzie');

d.speak();


// extend traditional function-based

function AnimalParent(name) {
    this.name = name;
}

AnimalParent.prototype.speak = function() {
    console.log(this.name + ' makes a noise.');
}

class Dogs extends AnimalParent {
    speak() {
        console.log(this.name + ' barks.');
    }
}
const dogss = new Dogs('Mitzie');
dogss.speak(); // mitzie barks.


// Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():
var myAnimal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};

class myDob {
    constructor(name) {
        this.name = name;
    }
};


// if you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(myDob.prototype, myAnimal);

// 8-3-2018
// Species (প্রজাতি, রকম)


class myArray extends Array {
    // Overwrite species to the parent Array constructor
    static get[symbol.species]() {
        return Array;
    }
}



var a = new myArray(1, 2, 3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof myArray); // false
console.log(mapped instanceof Array); // true


// Super class calls with super
// The super keyword is used to call corresponding methods of super class.

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + 'nakes a noise. ');
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(this.name + ' roars. ');
    }
}

var l = new Lion('Fuzzy');
l.speak();

// Mix-ins

var calculatorMixin = Base => class extends Base {
    calc() {}
};

var randomizerMixin = Base => class extends Base {
    rendomize() {}
};

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo))