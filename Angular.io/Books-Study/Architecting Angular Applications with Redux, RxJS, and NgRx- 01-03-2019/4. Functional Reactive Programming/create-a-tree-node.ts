// Create a tree node class
class CreateTreeNodeClass {
    constructor(
        public left, 
        public right,
        public value
    ) {
        this.left = left;
        this.right = right;
        this.value  = value
    }
}

const leftLeftLeftChild   = new CreateTreeNodeClass(null, null, 7);
const leftLeftChild  = new CreateTreeNodeClass(leftLeftLeftChild, null, 1);
const leftRightChild  = new CreateTreeNodeClass(null, null, 2);
const rightLeftChild  = new CreateTreeNodeClass(null, null, 4);
const rightRightChild  = new CreateTreeNodeClass(null, null, 2);
const left = new CreateTreeNodeClass(leftLeftChild, leftRightChild, 3);
const right = new CreateTreeNodeClass(rightLeftChild, rightRightChild, 5);
const root = new CreateTreeNodeClass(left, right, 2);

module.exports = root;
