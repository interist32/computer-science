function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

Node.prototype.print = function(){
    console.log(`${this.left && this.left.value}<-${this.value}->${this.right && this.right.value}`);
};

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.add = function (value) {
    if (!this.root) {
        this.root = new Node(value);
        return this;
    }

    let currentNode = this.root;

    while (currentNode) {
        if (value < currentNode.value) {
            if (currentNode.left) {
                currentNode = currentNode.left;
            } else {
                currentNode.left = new Node(value);
                break;
            }
        } else {
            if (currentNode.right) {
                currentNode = currentNode.right;
            } else {
                currentNode.right = new Node(value);
                break;
            }
        }
    }

    return this;
};

BinaryTree.prototype.find = function (value) {
    let operationsCount = 0;
    let currentNode = this.root;

    while(currentNode){
        operationsCount++;
        if(currentNode.value === value){
            console.info(`Performed ${operationsCount} operations`);
            return currentNode;
        }

        if(value < currentNode.value){
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }

    console.error(`Value ${value} is not found`);
    console.info(`Performed ${operationsCount} operations`);
};

BinaryTree.prototype.min = function(){
    return getMin(this.root);

    function getMin(node){
        if(node.left){
            return getMin(node.left);
        }
        return node;
    }
};

BinaryTree.prototype.max = function(){
    return getMax(this.root);

    function getMax(node){
        if(node.right){
            return getMax(node.right);
        }
        return node;
    }
};

BinaryTree.prototype.print = function(){
    printRecursively(this.root);

    function printRecursively(node){
        node.print();
        if(node.left){
            printRecursively(node.left);
        }
        if(node.right){
            printRecursively(node.right);
        }
    }
};

const binaryTree = new BinaryTree();
binaryTree.add(3)
    .add(2)
    .add(3)
    .add(42)
    .add(32)
    .add(76)
    .add(7)
    .add(1)
    .add(0)
    .add(27);

console.log('Tree printout:');
binaryTree.print();

console.log('Minimal value:');
binaryTree.min().print();

console.log('Maximum value:');
binaryTree.max().print();

console.log('Find existing value:');
binaryTree.find(32).print();
binaryTree.find(42).print();
binaryTree.find(1).print();

console.log('Find not existing value:');
binaryTree.find(-1);