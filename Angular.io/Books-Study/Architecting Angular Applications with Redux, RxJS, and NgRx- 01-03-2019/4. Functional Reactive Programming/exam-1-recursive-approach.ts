class Links {
    constructor(
        public left,
        public value
    ) {
        
    }
}

// demo of how to find heads nods, declarative style using recursion
const heads = new Links(null, 1);
const firstLinks = new Links(null, 1);
const secondLinks = new Links(null, 1);

function findHeadsRecursive(startNode:any) {
    if (startNode.left !== null) {
        return findHeadsImperative(startNode.left);
    } else {
        return startNode;
    }
}

const found = findHeadsImperative(secondLinks);
console.log('found', found);
console.log(found === heads);