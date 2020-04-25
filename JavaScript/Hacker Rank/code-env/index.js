const {
    compareTheTriplets
} = require('./algorithms/compare-the-triplets');
const {
    aVeryBigSum
} = require('./algorithms/aVeryBigSum');
const {
    diagonalDifference,
    plusMinus,
    staircase,
    miniMaxSum,
    birthdayCakeCandles,
    timeConversion,
    gradingStudents
} = require('./algorithms/warmup-problem');

const {
    greeting,
    performOperation,
    getAreaGetPerimeter,
    factorial,
    circle,
    getGrade,
    getLetter,
    vowelsAndConsonants,
    getSecondLargest,
    reverseString,
    isPositive,
    rectangle,
    getCount,
    sides,
    modifyArray,
    getDayName
} = require('./10-days-of-javascript/days-of-javascript');

const {controlFlow} = require('./JavaScript-Basics-for-Beginners/control-Flow')


// invoke function
// compareTheTriplets  3
/*
const array1 = [1, 28, 30];
const array2 = [99, 16, 1];
compareTheTriplets(array1, array2);
*/


// a Very Big Sum 4

// const ar = [10000000008, 1000000002, 1000000003, 1000000004, 1000000005];
// aVeryBigSum(ar);


// diagonalDifference 5
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9]
// ]
// diagonalDifference(arr);


//  plusMinus 6 
// arr = [-0, -0, -0, 0, -0, -2]
// plusMinus(arr);

//  staircase 7 
// staircase(3);


// Complete the miniMaxSum function below. 8 
// let arr = [256741038, 623958417, 467905213, 714532089, 938071625]
// miniMaxSum(arr);

// Complete the birthdayCakeCandles function below.. 9 
// let ar = [4, 2, 1, 4]
// birthdayCakeCandles(ar);


/*
 * Complete the timeConversion function below. 10
 */
// let s = "07:05:45PM"
// timeConversion(s);
/*
 * Complete the 'gradingStudents' function below. 11
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
// let grades = [73, 67, 38, 33]
// gradingStudents(grades);


/**
 * ------------------------------- 10 Days of Javascript ----------------------
 */
// 1  Day 0: Hello, World!
// const parameterVariable = "Welcome to 10 Days of JavaScript!"
// greeting(parameterVariable);

// 2 Day 0: Data Types
// const secondInteger = '12';
// const secondDecimal = '4.32';
// const secondString = 'is the best place to learn and practice coding!';
// performOperation(secondInteger, secondDecimal, secondString);

// 3 Day 1: Arithmetic Operators
// const length = '3';
// const width = '4.5';
// getAreaGetPerimeter(length, width);
// 4 Day 1: Functions
// const factorialNumber = 4;
// factorial(factorialNumber);


// 5 Day 1: Let and Const
// const radius = 2.6;
// circle(radius);

// 6 Day 2: Conditional Statements: If-Else
// const score = 15.99;
// getGrade(score);


// 7 Day 2: Conditional Statements: Switch
// const character  = 'j';
// getLetter(character);

// 8 Day 2: Loops
// const vowelConsonant  = 'javascriptloops';
// vowelsAndConsonants(vowelConsonant);

// 9. Day 3: Arrays
// const nums  =  [2,3,6,6,5];
// const nums  =  [10 ,9 ,9, 8, 8, 11, 8, 0, 9, 1];
// // const nums  = [256741038, 623958417, 467905213, 714532089, 938071625];
// getSecondLargest(nums);

// 10. Day 3: Try, Catch, and Finally
// const revStr = "1234"
// const revStr = Number(1234)
// reverseString(Number(1234));

/**
 * 11. Day 3: Throw
 */
// const a = -20
// isPositive(a);

/**
 * 12 Day 4: Create a Rectangle Object
 */
// const length = 4;
// const width = 5;
// rectangle(length, width);

/**
 * 13 Day 4: Count Objects
 */
// const obj = [{
//     x: 100,
//     y: 1
// }, {
//     x: 2,
//     y: 3
// },
// {
//     x: 1,
//     y: 3
// },
// {
//     x: 3,
//     y: 4
// },
// {
//     x: 4,
//     y: 5
// }]
// getCount(obj)


/**
 * 16
 */
// sides("a", 10,14);
/**
 * 16
 */
// const expressions = [10, 14]
// modifyArray([1, 2, 3, 2, 5]);

// getDayName('11/10/2010');


/* 
 ************************************ Control Flow ************************
*/
controlFlow();