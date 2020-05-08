//

/**
 * Class declarations
 */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle.name);


/**
 * class expression
 */

let UnnamedRectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(`unnamed: ${UnnamedRectangle.name}`);


// Named 
let NamedRectangle = class NamedRectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

console.log(`Name Rectangle: ${NamedRectangle.name}`);


/**
 * Class body and method definitions
 * Strict mode
 * Constructor
 * Prototype methods
 * Static methods
 * 
 */

class PrototypeClass {
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

const square = new PrototypeClass(10, 3);
console.log(`prototype class : ${square.area}`);


// Static methods
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}


const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(`Point static class: ${Point.distance(p1, p2)}`);


// Boxing with prototype and static methods

class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let obj = new Animal();

console.log(`call speak : ${obj.speak()}`);

let speak = obj.speak; 

console.log(`obj.speak : ${speak()}`);
console.log(`Animal static eat method : ${Animal.eat()}`);

let eat = Animal.eat;

console.log(` Animal Eat: ${eat}`);


// Instance properties
// Instance properties must be defined inside of class methods:
class Rectangle3 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Static class-side properties and prototype data properties must be defined outside of the ClassBody declaration:

Rectangle3.staticWidth = 23;
Rectangle3.prototype.prototypeWidth = 25;


/**
 * 
 * Sub classing with extends
 * 
 * 
 */


