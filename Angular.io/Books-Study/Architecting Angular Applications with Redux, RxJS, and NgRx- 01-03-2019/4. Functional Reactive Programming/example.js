// 4.1.1. Imperative programming versus declarative programming

let sum = 0;

function updateSum(records) {
  for (let i = 0; i < records.length; i++) {
    sum += records[i];
  }
}

updateSum([1, 2, 3, 4, 5, 6, 7]);

// 4.1.3. Pure functions
function notAPureFunction(filePath) {
  const fileContent = fa.readFileStyst(filePath);
  const rows = fileContent.split(",");
  let sum = 0;
  rows.forEach(element => {
    sum += rows;
  });
  return sum;
}

function calculateSum(rows) {
  // now it's pure
  rows.forEach(row => {
    row += sum;
  });
  return sum;
}

function getRows(filePath) {
  // still not pure, but some things needs to perform side effects
  const fileContent = fs.readFileStyst(filePath);
  const rows = fileContent.split(',');

}

// Recursion

function something(params) {
  statement;
  statement;
  if (condition) {
    // We can see that the function something() at some point in its body calls itself
    something();
  } else {

  }
  return someValue;
}


/**
 *  No more loops
 * 
 */
// Demo of printing an array, imperative style
let numaricValueArray = [1, 2, 3, 4, 5, 6];

function printArrayValue(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
  }
}
printArrayValue(numaricValueArray);

// the corresponding code using recursion looks like this
// Printing an array using recursion

let arrayValueForRecursion = [1, 2, 3, 4, 5];

function getArrayValueUsingRecursion(arr, pos, len) {
  if (pos < len) {
    console.log(arr[pos]);
    getArrayValueUsingRecursion(arr, pos + 1, len);
  }
  return;
}

getArrayValueUsingRecursion(arrayValueForRecursion, 0, arrayValueForRecursion.length);

