/*
 * Do not remove the return statement
 */

/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
    // Write your code here


    const maximalSubset = arr.slice().sort().reduce((subset, current) => {
        if (subset.reduce((s, c) => s + c, 0) + current <= arr.length) subset.push(current);
        return subset;
    }, []);

    return maximalSubset.length

}
