/**
 * 1 Solve Me First
 * solveMeFirst(2, 3)
 */
exports.solveMeFirst = (a, b) => {
    // Hint: Type return a+b below   
    let sum = 0;
    sum = parseInt(a) + parseInt(b);
    return sum;
}
// 
/**
 * 2 Simple Array Sum
 * let ar = [1, 2, 3, 4, 10, 11];
 * simpleArraySum(ar);
 * Sample Output:  31
 * 
 */
exports.simpleArraySum = (ar) => {
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


/**
 * 3 compareTheTriplets  
 * @param {*} arr1 
 * @param {*} arr2 
 * const array1 = [1, 28, 30];
 * const array2 = [99, 16, 1];
 * compareTheTriplets(array1, array2);
 * 
 */
exports.compareTheTriplets = (arr1, arr2) => {
    try {
        let resultArr = []
        let alice = 0;
        let bob = 0;
        if (arr1.length !== arr2.length && arr1.length !== 3 && arr2.length !== 3) return false;

        for (let i = 0; i < arr1.length; i++) {
            if (1 <= parseInt(arr1[i]) && parseInt(arr1[i]) <= 100 && 1 <= parseInt(arr2[i]) && parseInt(arr2[i]) <= 100) {
                if (parseInt(parseInt(arr1[i])) === parseInt(parseInt(arr2[i]))) {
                    alice += 0;
                    bob += 0;
                } else if (parseInt(arr1[i]) > parseInt(arr2[i])) {
                    alice += 1;
                    bob += 0;
                } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
                    alice += 0;
                    bob += 1;
                }

            } else {
                console.log(`Awarding points on a scale from 1 to 100`);
                resultArr = null;
            }

        }

        if (resultArr) {
            resultArr.push(parseInt(alice), parseInt(bob));
        } else {
            resultArr = [];
        }

        return resultArr;
    } catch (error) {
        console.error(error)
    }

}
// 
/**
 * 4 aVeryBigSum
 * const ar = [10000000008, 1000000002, 1000000003, 1000000004, 1000000005];
 * aVeryBigSum(ar);
 */
exports.aVeryBigSum = async (ar, arr2) => {
    try {
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
        console.log("Total: ", total)
        return parseInt(total);
    } catch (error) {
        console.error(error)
    }

}

/**
 * 5 diagonalDifference
 * const arr = [ [1, 2, 3], [4, 5, 6], [9, 8, 9] ]
 * diagonalDifference(arr);
 */
exports.diagonalDifference = async (arr, arr2) => {
    try {
        const arrLength = arr.length
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

        return Math.abs(d1 - d2);
    } catch (error) {
        console.error(error)
    }

}
// 6
exports.plusMinus = async (arr, name) => {
    try {
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

    } catch (error) {
        console.error(error);
    }
}
// 7
exports.staircase = async (n) => {
    try {
        let mainContain = "";
        const length = parseInt(n);
        for (let i = 0; i < length; i++) {
            let contain = '';
            for (let j = 0; j < length; j++) {
                if (j < n - i - 1) {
                    contain += " "
                } else {
                    contain += "#"
                }
            }
            mainContain += `${contain}\n`;
        }
        console.log(mainContain);
    } catch (error) {
        console.error(error);
    }
}
// 8
/**
 * Complete the miniMaxSum function below.
 * let arr = [256741038, 623958417, 467905213, 714532089, 938071625]
 * miniMaxSum(arr);
 */
exports.miniMaxSum = async (arr) => {
    try {
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


    } catch (error) {
        console.error(error);
    }
}
// 9
/**
 * Complete the birthdayCakeCandles function below.
 * let ar = [4, 2, 1, 4]
 * birthdayCakeCandles(ar);
 */
exports.birthdayCakeCandles = async (ar) => {
    try {
        // Step 1 
        // ar.sort((a, b) => a - b);
        // const maxs = ar[ar.length - 1];
        // return ar.filter(ch => ch === maxs).length;

        // step 2

        const max = Math.max.apply(null, ar);
        return ar.filter(ch => ch === max).length;

    } catch (error) {
        console.error(error);
    }
}

// 10
/*
 * Complete the timeConversion function below.
 * let s = "07:05:45PM"
 * ltimeConversion(s);
 */
exports.timeConversion = async (s) => {
    try {
        // step 2
        // Convert a string like 10:05:23 PM to 24h format, returns like [22,5,23]
        // const time = s.match(/(\d+):(\d+):(\d+)(\w)/);
        // let hours = time[1];
        // const minutes = time[2];
        // const seconds = time[3];
        // const meridian = time[4].toLowerCase();

        // if (meridian == 'p' && hours < 12) {
        //     hours += 12;
        // } else if (meridian == 'a' && hours == 12) {
        //     hours -= 12;
        // }
        // console.log(`${hours}:${minutes}:${seconds}`);
        // return `${hours}:${minutes}:${seconds}`;

        // step 2
        let time = s.toLowerCase().split(':');
        let hours = parseInt(time[0]);
        let ampm = time[2];
        if (ampm.indexOf('am') != -1 && hours == 12) {
            time[0] = '00';
        }
        if (ampm.indexOf('pm') != -1 && hours < 12) {
            time[0] = hours + 12;
        }

        return time.join(':').replace(/(am|pm)/, '');

    } catch (error) {
        console.error(error);
    }
}
// 11
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 * let grades = [73, 67, 38, 33]
 * gradingStudents(grades)
 */

exports.gradingStudents = async (grades) => {
    try {
        // step 1
        let gradesOutput = "";
        grades.forEach(integer => {
            if ((integer % 5) >= 3 && integer >= 38) {
                gradesOutput += `${integer + (5 - (integer % 5))}\n`
            } else {
                gradesOutput += `${integer}\n`;
            }
        });
        // print the rounded grade on a new line.
        console.log(gradesOutput);


        // step 2
        // let gradesOutput = "";
        let result = [];
        grades.forEach(integer => {
            if ((integer % 5) >= 3 && integer >= 38) {
                result.push(integer + (5 - (integer % 5)));
            } else {
                result.push(integer);
            }
        });
        // return array 
        return result



    } catch (error) {
        console.error(error);
    }
}

/**
 * 12
 * Complete the countApplesAndOranges function below.
 * countApplesAndOranges(7, 11, 5, 15, [-2, 3, 2], [1])
 */

exports.countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let fallsApple = 0;
    let fallsOrang = 0;
    apples.map(apple => ((a + apple) >= s && (a + apple) <= t) ? fallsApple++ : 0);
    oranges.map(orange => ((b + orange) >= s && (b + orange) <= t) ? fallsOrang++ : 0);
    console.log(fallsApple);
    console.log(fallsOrang);
}

/**
 * 13
 * Complete the kangaroo function below.
 * 
 */

exports.kangaroo = (x1, v1, x2, v2) => {
    if ((x2 > x1) && (v2 > v1)) return "NO";
    if (((x1 - x2) % (v2 - v1)) === 0) return "YES";
    else return "NO";
}

/**
 * 14: Between Two Sets
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 * 
 */

exports.getTotalX = (a, b) => {
    let res = [];
    let count = 0;
    let flag = true;
    let check = true;
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        for (let j = 0; j < a.length && check === true; j++) {
            if (i % a[j] !== 0)
                check = false;
        }
        if (check !== false)
            res.push(i)
        check = true;

    }

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < b.length && flag === true; j++) {
            if ((Math.max(res[i], b[j]) % Math.min(res[i], b[j])) !== 0) {
                flag = flag;
                res[i] = 0;
            }
        }
        flag = true;
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i] > 0)
            count++;
    }
    return count;
}

/**
 * 15: Breaking the Records
 * Complete the breakingRecords function below.
 * 
 */

exports.breakingRecords = () => {
    try {
        let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
        let max = scores[0];
        let min = scores[0];
        let maxCount = 0;
        let minCount = 0;

        for (const item of scores) {
            if (item > max) {
                max = item;
                maxCount += 1;
            } else if (item < min) {
                min = item;
                minCount += 1;
            }
        }

        console.log(maxCount, minCount)
        return [ maxCount, minCount];

    } catch (error) {

    }
}