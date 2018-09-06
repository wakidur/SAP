/**
 * 06-09-2018
 */
/**
 * Hoisting : An important difference between function declarations and class declarations is that function declarations are "hoisted" and class declarations are not. 
 * You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError 
 * Class expressions are subject to the same hoisting restrictions as described in the class declarations section
 */

/**
 * Class declarations
 */
class declRectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

/**
 * Class expressions
 */

// unnamed
let expreRectangle = class {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
};
// named
let NameRectangle = class retangle2{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

