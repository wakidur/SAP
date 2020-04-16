/**
 * Wed Apr 15 2020 01:03:26 GMT+0600 (Bangladesh Standard Time)
 * Give an array of integers, find the sum of its elements.
 * 
 * For example, if the array ar=[1,2,3],1+2+3=6, so return .
 * 
 * Function Description
 * Complete the simpleArraySum function in the editor below. 
 * It must return the sum of the array elements as an integer.
 * simpleArraySum has the following parameter(s): ar: an array of integers
 * 
 * Input Format
 *  The first line contains an integer, n, denoting the size of the array.  (e.g 6 )
 *  The second line contains  space-separated integers representing the array's elements. (1 2 3 4 5 6)
 * 
 * Output Format
 * Print the sum of the array's elements as a single integer.
 */

const arrayOfInteger = [ 1, 2, 3, 4, 10, 11 ];

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let total = 0;
    const integerArrayLength = Array.isArray(ar) ? ar.length : false;
    if (integerArrayLength && 0 < integerArrayLength) {
        for (var i in ar) {
            if (ar[i] <= 1000) {
                total += ar[i];
            }
        }
    } else {
        console.log("Empty Array ");
    }

    return total;

}

simpleArraySum(arrayOfInteger);