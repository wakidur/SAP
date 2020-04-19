/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 */

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

function diagonalDifference(arr) {
    const arrLength = arr.length
    //   console.log(arr);
    //   console.log(arr.length);
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            // Finding sum of primary diagonal
            if (i == j) {
                if (-100 <= arr[i][j] && arr[i][j] <= 100) {
                    d1 += arr[i][j]
                }
            }
            // Finding sum of secondary diagonal 
            if (i == arrLength - j - 1) {
                if (-100 <= arr[i][j] && arr[i][j] <= 100) {
                    d2 += arr[i][j]
                }
            }
        }
    }
    console.log(Math.abs(d1 - d2))
    return Math.abs(d1 - d2)
}