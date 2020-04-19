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