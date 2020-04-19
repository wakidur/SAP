/**
 * Fri Apr 17 2020 10:02:49 GMT+0600 (Bangladesh Standard Time)
 * 
 * Calculate and print the sum of the elements in an array, Keeping in mind that some of those integers may be quite large
 * 
 * Function Description
 * 
 * Complete the aVeryBigSum funcation in the editor below. It must retun the sum of all array elements. 
 * aVaryBigSum has the following parameter(s) * ar: an array of integers .
 * 
 * Input Format
 * 
 * The first line of the input consists of an integer n. 
 * The next line contains n space-separated integers contained in the array.
 * 
 * Output Format
 * 
 * Print the integer sum of the elements in the array.
 * 
 * Constraints
 * 1 <= n <= 10
 * 0 <= a[i] <= 10 to the power 10 
 * 
 * Sample Input
 * 5
 * 1000000001 1000000002 1000000003 1000000004 1000000005
 * 
 * Output
 * 5000000015
 * 
 * 
 */



function aVeryBigSum(ar) {
    const largeLimit = 10000000000;
    let i, total = 0;
    for (i = 0; i < ar.length; i++) {
        console.log(ar[i]);
        if (0 <= parseInt(ar[i]) && parseInt(ar[i]) <= largeLimit) {
            total += ar[i];
        } else {
            console.error(`This Array of element does'n consider constraints range ${parseInt(ar[i])} `)
        }

    }
    return parseInt(total);
}



// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    const largeLimit = 10000000000;
    let i, total = 0;
    for (i = 0; i < ar.length; i++) {
        if (0 <= parseInt(ar[i]) && parseInt(ar[i]) <= largeLimit) {
            total += ar[i];
        } else {
            console.error(`This Array of element does'n consider constraints range ${parseInt(ar[i])} `)
        }

    }
    return parseInt(total);

}