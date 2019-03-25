// 4.1.1. Imperative programming versus declarative programming

let sum = 0;
function updateSum(records) {
    for (let i = 0; i < records.length; i++) {
        sum += records[i];
    }
}

updateSum([1,2,3,4,5,6,7]);