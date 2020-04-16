exports.compareTheTriplets = async (arr1, arr2) => {
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

