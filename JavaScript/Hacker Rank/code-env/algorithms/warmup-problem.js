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

/**
 * Complete the miniMaxSum function below.
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

/**
 * // Complete the birthdayCakeCandles function below.
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


/*
 * Complete the timeConversion function below.
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