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


class Rectangle1 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

/***********Hoisting**********/
var p = new Rectangle2(); // ReferenceEffor
class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}


/************ Class expressions **/

// unnamed
var Rectangle3 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// named
var Rectangle4 = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// 28-2-2018
/************ Prototype methods **/

class Rectangle5 {
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

const square = new Rectangle5(10, 10);

console.log(square.area);