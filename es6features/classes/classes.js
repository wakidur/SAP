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