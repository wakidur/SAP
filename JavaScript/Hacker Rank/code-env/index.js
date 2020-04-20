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
let grades = [73, 67, 38, 33]
gradingStudents(grades);