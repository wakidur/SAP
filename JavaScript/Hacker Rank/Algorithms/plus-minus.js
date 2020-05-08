/**
 * Sat Apr 18 2020 23:31:05 GMT+0600 (Bangladesh Standard Time)
 * 
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
 * 
 * 
 * Function Description
 *  Complete the plusMinus function in the editor below. 
 * It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
 *  plusMinus has the following parameter(s): arr: an array of integers
 */



function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else if (arr[i] === 0) {
            zeroCount++
        }
    }
    console.log(positiveCount, negativeCount, zeroCount);
    console.log(arrLength);
    console.log(`${(parseInt(positiveCount)/parseInt(arrLength)).toFixed(6)}\n${(parseInt(negativeCount)/parseInt(arrLength)).toFixed(6)}\n${(parseInt(zeroCount)/parseInt(arrLength)).toFixed(6)}`)
    return `${(parseInt(positiveCount)/parseInt(arrLength)).toFixed(6)}\n${(parseInt(negativeCount)/parseInt(arrLength)).toFixed(6)}\n${(parseInt(zeroCount)/parseInt(arrLength)).toFixed(6)}`;

}