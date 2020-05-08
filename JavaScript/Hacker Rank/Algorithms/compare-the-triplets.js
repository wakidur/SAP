/**
 * Wed Apr 15 2020 01:03:26 GMT+0600 (Bangladesh Standard Time)
 * 
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100  for three categories: problem clarity, originality, and difficulty.
 * 
 * We define the rating for Alice's challenge to be the triplet a = (a[0], a[2], a[2]) , and the rating for Bob's challenge to be the triplet b = (b[0], b[2], b[2]).
 */

function compareTriplets(arr1, arr2) {
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
    console.log("2:" + resultArr);
    return resultArr;
}

function compareTriplets(a, b) {
    let resultArr = []
    let alice = 0;
    let bob = 0;
    if (a.length !== b.length && a.length !== 3 && b.length !== 3) return false;

    for (let i = 0; i < a.length; i++) {
        if (1 <= parseInt(a[i]) && parseInt(a[i]) <= 100 && 1 <= parseInt(b[i]) && parseInt(b[i]) <= 100) {
            if (parseInt(a[i]) === parseInt(b[i])) {
                alice += 0;
                bob += 0;
            } else if (parseInt(a[i]) > parseInt(b[i])) {
                alice += 1;
                bob += 0;
            } else if (parseInt(a[i]) < parseInt(b[i])) {
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
    console.log("1:" + resultArr);
    return resultArr;

}


var array1 = [1, 28, 30];
var array2 = [99, 16, 1];

compareTriplets(array1, array2);