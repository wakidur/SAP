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
    something();
  } else {
    
  }
  return someValue;
}
