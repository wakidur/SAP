/**
 * 1. Day 0: Hello, World! 
 * A line of code that prints "Hello, World!" on a new line is provided in the editor. 
 * Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *  parameterVariable - A string of text.
 */
exports.greeting = async (parameterVariable) => {
    try {
        // This line prints 'Hello, World!' to the console:
        console.log('Hello, World!');
        // Write a line of code that prints parameterVariable to stdout using console.log:
        console.log(parameterVariable);

    } catch (error) {
        console.error(error);
    }
}

/**
 * 2. Day 0: Data Types
 * 
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/

exports.performOperation = async (secondInteger, secondDecimal, secondString) => {
    try {
        // Declare a variable named 'firstInteger' and initialize with integer value 4.
        const firstInteger = 4;
        // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
        const firstDecimal = 4.0;
        // Declare a variable named 'firstString' and initialize with the string "HackerRank".
        const firstString = 'HackerRank ';

        // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
        console.log(parseInt(firstInteger + parseInt(secondInteger)));


        // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
        console.log(parseFloat(firstDecimal + parseFloat(secondDecimal)));

        // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
        console.log(firstString + secondString);
    } catch (error) {
        console.error(error);
    }
}

/**
 * 3. Day 1: Arithmetic Operators
 * 
 */
exports.getAreaGetPerimeter = async (length, width) => {
    try {
        getPerimeter(length, width);
        getArea(length, width);
        /**
         *   Calculate the area of a rectangle.
         *
         *   length: The length of the rectangle.
         *   width: The width of the rectangle.
         *   
         *	Return a number denoting the rectangle's area.
         **/
        function getArea(length, width) {
            let area;
            // Write your code here
            area = parseFloat(length) * parseFloat(width);
            return area;
        }

        /**
         *   Calculate the perimeter of a rectangle.
         *	
         *	length: The length of the rectangle.
         *   width: The width of the rectangle.
         *   
         *	Return a number denoting the perimeter of a rectangle.
         **/
        function getPerimeter(length, width) {
            let perimeter;
            // Write your code here
            perimeter = 2 * (parseFloat(length) + parseFloat(width));
            return perimeter;
        }


    } catch (error) {
        console.error(error);
    }
}
/**
 * 4. Day 1: Functions
 * Create the function factorial here
 */
exports.factorial = async (n) => {
    try {
        factorial(n);

        function factorial(n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        }
        console.log(factorial(n));


    } catch (error) {
        console.error(error);
    }
}
/**
 * 5. Day 1: Let and Const
 * 
 */
exports.circle = async (radius) => {
    try {
        circle(radius);

        function circle(radius) {
            let area = 0;
            let perimeter = 0;
            const PI = Math.PI;
            area = PI * radius * radius;
            perimeter = 2 * PI * radius;
            console.log(area);
            console.log(perimeter);
        }
        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

        // Print the area of the circle:

        // Print the perimeter of the circle:
        let r = radius;
        const PI = Math.PI;

        // Print the area of the circle:
        console.log(PI * r * r);
        // Print the perimeter of the circle:
        console.log(PI * 2 * r);


    } catch (error) {
        console.error(error);
    }
}

/**
 * 6. Day 2: Conditional Statements: If-Else
 * 
 */
exports.getGrade = async (score) => {
    try {
        let grade;
        // Write your code here
        if (0 <= parseInt(score) && parseInt(score) <= 30) {
            if (0 <= parseInt(score) && parseInt(score) <= 5) {
                grade = 'F';
            } else if (5 < parseInt(score) && parseInt(score) <= 10) {
                grade = 'E';
            } else if (10 < parseInt(score) && parseInt(score) <= 15) {
                grade = 'D';
            } else if (15 < parseInt(score) && parseInt(score) <= 20) {
                grade = 'C';
            } else if (20 < parseInt(score) && parseInt(score) <= 25) {
                grade = 'B';
            } else if (25 < parseInt(score) && parseInt(score) <= 30) {
                grade = 'A';
            } else {
                grade = null;
            }
        } else {
            console.error(`score not fulfil the Constraints`)
        }
        return grade;
    } catch (error) {
        console.error(error);
    }
}

/**
 * 7. Day 2: Conditional Statements: Switch
 * 
 */
exports.getLetter = async (s) => {
    try {
        let letter;
        // Write your code here
        // Step 1
        switch (true) {
            case 'aeiou'.includes(s.charAt([0])):
                letter = 'A';
                break;
            case 'bcdfg'.includes(s.charAt([0])):
                letter = 'B';
                break;
            case 'hjklm'.includes(s.charAt([0])):
                letter = 'C';
                break;
            case 'npqrstvwxyz'.includes(s.charAt([0])):
                letter = 'D';
                break;
        }
        console.log(letter)
        return letter;

        // Step 2
        // switch (true) {
        //     case 'aeiou'.includes(s[0]):
        //         return 'A';
        //     case 'bcdfg'.includes(s[0]):
        //         return 'B';
        //     case 'hjklm'.includes(s[0]):
        //         return 'C';
        //     case 'npqrstvwxyz'.includes(s[0]):
        //         return 'D';
        //     default:
        //         return undefined;
        // }

    } catch (error) {
        console.error(error);
    }
}
/**
 * 8. Day 2: Loops
 * 
 */

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
exports.vowelsAndConsonants = async (s) => {
    try {
        let letter;
        // Write your code here
        // Step 1;
        [...s].forEach(c => 'aeiou'.includes(c) ? console.log(c) : null);
        [...s].forEach(c => 'aeiou'.includes(c) ? null : console.log(c));

        // step 2
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let consonants = [];
        for (let i = 0; i < s.length; i++) {
            if (vowels.includes(s.charAt(i))) {
                console.log(s.charAt(i));
            } else {
                consonants.push(s.charAt(i));
            }
        }
        consonants.forEach(val => console.log(val));

        // setp 3
        let vowel = [];
        let cons = [];
        [...s].map(item => {
            if ('aeiou'.includes(item)) {
                vowel.push(item);
            } else {
                cons.push(item);
            }
        });
        vowel.map(v => console.log(v));
        cons.map(c => console.log(c));


    } catch (error) {
        console.error(error);
    }
}

/**
 * 9. Day 3: Arrays
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
exports.getSecondLargest = (nums) => {
    try {
        // console.log(nums)
        // Step 1 (This function if number are not same )
        // let max = Math.max.apply(null, nums); // get the max of the array
        // console.log(max)
        // nums.splice(nums.indexOf(max), 1);
        // console.log(Math.max.apply(null, nums))
        // return Math.max.apply(null, nums); // get the 2nd max

        // step -2
        console.log(nums)
        let arrSort = nums.sort((a, b) => a - b);
        console.log(arrSort);
        let max = Math.max.apply(null, nums); // get the max of the array
        let arrReverse = arrSort.reverse();
        for (var i = 0; i < nums.length; i++) {
            if (arrReverse[i] < max) {
                console.log(arrReverse[i])
                return arrReverse[i];
            }
        }

        // console.log('re', rev)



    } catch (error) {
        console.error(error);
    }
}

/**
 * 10. Day 3: Try, Catch, and Finally
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 **/
exports.reverseString = (s) => {
    try {
        // Task
        /**
         * Complete the reverseString function; it has one parameter, s. 
         * You must perform the following actions:
         * 1. Try to reverse string S using the split, reverse, and join methods.
         * 2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
         * 3. Print S on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
         */



        var a = s.split("").reverse().join("");
        console.log(a);
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}


/**
 * 11. Day 3: Throw
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 **/
exports.isPositive = (a) => {
    try {
        // Step -1;
        switch (true) {
            case a > 0:
                return 'YES';
            case a === 0:
                throw Error('Zero Error');
            case a < 0:
                throw Error('Negative Error');
        }
        // step -2
        if (a > 0) {
            console.log('YES');
            return 'YES'
        } else if (a < 0) {
            throw Error('Negative Error')
        } else if (a === 0) {
            throw Error("Zero Error");
        }
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * 12. Day 4: Create a Rectangle Object
 * 
 * Complete the Rectangle function
 */

exports.rectangle = (a, b) => {
    try {
        // Step -1
        let rec = {
            length: a,
            width: b,
            perimeter: 2 * (a + b),
            area: a * b
        }
        return rec;
        // Step -2
        // let rec = {};
        // rec.length = a;
        // rec.width = b,
        //     rec.perimeter = (2 * (a + b)),
        //     rec.area = a * b
        // return rec

    } catch (error) {
        console.log(error.message);
    }
}

/*
 * 13. Day 4: Count Objects
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

exports.getCount = (objects) => {
    try {
        let count = 0;
        for (const object of objects) {
            if (object.x === object.y) {
                count++;
            }
        }
        return count;
        console.log(count);
    } catch (error) {
        console.error(error)
    }
}


/*
 * 14 Day 4: Classes
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(lengths) {
        this.lengths = lengths;
    }

    perimeter() {
        const result = this.lengths.reduce((a, b) => a + b, 0);
        return result;
    }
}
const rectangle = new Polygon([10, 20, 10, 20]);
console.log(rectangle.perimeter());


/*
 * 15 Day 5: Inheritance
 */
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return (this.h * this.w);
}


/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
};


const square = new Rectangle(10, 10)
console.log(square.area());