/**
 * Sun Apr 19 2020 23:27:00 GMT+0600 (Bangladesh Standard Time)
 * 
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * 
 * For example, arr =[1, 3, 5, 7, 9] . Our minimum sum is 1+3+4+7=16 and our maximum sum is 3+4+7+9=24 . We would print 16 24
 * 
 * Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
 */


// Complete the miniMaxSum function below.

let arr = [256741038, 623958417, 467905213, 714532089, 938071625];
let arr = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
    const length = arr.length;
    let minimumSum = 0;
    let maximumSum = 0;
    // Sort objects by date ascending order
    const arrSort = arr.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        if (i !== 0) {
            maximumSum += arrSort[i]
        }
        if (i !== length - 1) {
            minimumSum += arrSort[i]

        }
    }

    console.log(`${minimumSum} ${maximumSum}`);

}