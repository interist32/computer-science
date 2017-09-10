function Node(value) {
    this.value = value;
    this.next = null;
}

function Queue() {
    this.head = null;
}

Queue.prototype.enqueue = function (value) {
    const newNode = new Node(value);

    if (!this.head) {
        this.head = newNode;

        return this;
    }

    let currentNode = this.head;

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;

    return this;
};

Queue.prototype.dequeue = function () {
    if (!this.head) {
        return null;
    }

    const node = this.head;

    if (node.next) {
        this.head = node.next;
    } else {
        this.head = null;
    }

    return node.value;
};

Queue.prototype.print = function () {
    let currentNode = this.head;
    const result = [];

    while (currentNode) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(result.reverse());
};

const queue = new Queue();

queue.enqueue(1).enqueue(2).enqueue(3);
queue.print();

console.log('Dequeue:', queue.dequeue());
queue.print();
console.log('Dequeue:', queue.dequeue());
queue.print();
console.log('Dequeue:', queue.dequeue());
queue.print();
console.log('Dequeue:', queue.dequeue());
queue.print();