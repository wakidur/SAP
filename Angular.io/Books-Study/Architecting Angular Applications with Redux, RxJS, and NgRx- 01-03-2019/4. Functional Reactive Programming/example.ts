class Nodes {
    constructor(
        public left,
        public value
    ) {
        
    }
}

const headNode = new Nodes(null, 1);
const firstNodes  = new Nodes(headNode, 1);
const secondNodes = new Nodes(firstNodes, 1);

// demo of how to find the head node, imperative style

const radNodes = new Nodes(null, 1);
const yellowNodes = new Nodes(null, 1);
const greenNodes = new Nodes(null, 1);

function findHeadsImperative(startNode:any) {
    while (startNode) {
        startNode = startNode.left;
    }
    return startNode;
}

const foundImp = findHeadsImperative(greenNodes);
console.log('found', foundImp);
console.log(foundImp === radNodes)