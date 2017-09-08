function ListNode(value) {
    this.value = value;
    this.next = null;
}

function SinglyList() {
    this.head = null;
}

SinglyList.prototype.add = function (value) {
    if (!this.head) {
        this.head = new ListNode(value);
        return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(value);

    return this;
};

SinglyList.prototype.remove = function (value) {
    let currentNode = this.head;

    while(currentNode.next){
        if(currentNode.next.value === value){
            let removingNode = currentNode.next;
            currentNode.next = removingNode.next;
            break;
        }
        currentNode = currentNode.next;
    }
};

SinglyList.prototype.insertAfter = function (afterValue, newValue) {
    const afterNode = this.find(afterValue);

    if (afterNode) {
        const oldNextNode = afterNode.next;
        afterNode.next = new ListNode(newValue);
        afterNode.next.next = oldNextNode;
    }
};

SinglyList.prototype.find = function (value) {
    let operationsCount = 0;
    let currentNode = this.head;

    while (currentNode.next) {
        operationsCount++;
        if (currentNode.value === value) {
            console.info(`Performed ${operationsCount} operations`);
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    console.info(`Performed ${operationsCount} operations`);
    return null;
};

SinglyList.prototype.print = function () {
    if (!this.head) {
        console.log('List is empty');
    }

    const values = [];

    let currentNode = this.head;
    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(values);
};

const list = new SinglyList();

list.add(1)
    .add(4)
    .add(43)
    .add(12)
    .add(42)
    .add(111)
    .add(32)
    .add(0)
    .add(2);

console.log('List values printout: ');
list.print();

console.log('Find node with value');
const foundNode = list.find(42);
console.log(foundNode);

console.log('Find node with not existing value');
const notFoundNode = list.find(123);
console.log(notFoundNode);

console.log('Insert new value after existing');
list.insertAfter(42, 777);
list.print();

console.log('Remove value');
list.remove(777);
list.print();

console.log('Remove value from the end');
list.remove(2);
list.print();