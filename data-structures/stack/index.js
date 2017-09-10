function Node(value) {
    this.value = value;
    this.previous = null;
}

function Stack() {
    this.top = null;
}

Stack.prototype.push = function (value) {
    const newNode = new Node(value);

    if (!this.top) {
        this.top = newNode;
        return this;
    }

    newNode.previous = this.top;
    this.top = newNode;

    return this;
};

Stack.prototype.pop = function () {
    if (!this.top) {
        return null;
    }
    const poppingValue = this.top;
    this.top = this.top ? this.top.previous : null;

    return poppingValue.value;
};

Stack.prototype.print = function () {
    let currentNode = this.top;

    console.log('stack printout:');
    while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.previous;
    }

    console.log('***');
};

const stack = new Stack();

stack.push(42).push(32).push(-1);
stack.print();

console.log('popping:', stack.pop());
stack.print();

console.log('popping:', stack.pop());
stack.print();

console.log('popping:', stack.pop());
stack.print();

