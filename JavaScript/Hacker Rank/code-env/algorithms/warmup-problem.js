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