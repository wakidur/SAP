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


    } catch (error) {
        console.error(error);
    }
}