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


// A linked list consists of nodes that know about the node they are connected to.

class Node {
  constructor( 
    public left,  
    public value 
    ) {}
}

// using such a structure as a Node, we can construct a linked list consisting of several linked nodes. 
// we can connect a set of node instances in the following 
const head = new Node(null, 1);
const firstNode = new Node(head, 2);
const secondNode = new Node(firstNode, 3);


// demo of how to find the head node, imperative style
const head = new Node(null, 1);
const firstNode = new Node(head, 2);
const secondNode = new Node(firstNode, 3);

function findHeadImperative(startNode) {
  while (startNode.left !== null) {
    startNode = startNode.left;
  }
  return startNode;
}