console.clear();
const SinglyLinkedList = require('./1.SinglyLinkedList');
class DoublyNode {
    constructor(nodeData) {
        this.previous = null;
        this.data = nodeData;
        this.next = null;
    }
}

module.exports = class DoublyLinkedList extends SinglyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        super();
        this.#length = 0;
        this.#head = null;
        this.#tail = null;
    }

    get getHead() {
        return this.#head;
    }

    get getTail() {
        return this.#tail;
    }

    get length() {
       return this.#length;
    }

    set addFirst(data) {
        const newNode = new DoublyNode(data);
        this.#length++;

        
        newNode.next = this.getHead;
        this.#head = newNode;
        this.#head.next.previous = this.getHead
    }

    set addLast(data) {
        const newNode = new DoublyNode(data);
        this.#length++;

        if (this.getHead === null) {
            this.#head = newNode;
            this.#tail = newNode;
            return;
        }

        newNode.previous = this.getTail;

        this.#tail.next = newNode;        
        this.#tail = newNode;
    }

    get pollFirst() {
        const firstNode = this.getHead

        if (firstNode === null) {
            return null;
        }

        this.#length--;

        this.#head = this.#head.next;
        this.#head.previous = null;

        return firstNode.data;
    }

    get pollLast() {
        const lastData = this.getTail?.data;
        let headNode = this.getHead;

        if (!lastData) {
        return null;
        }

        this.#length--;

        if (headNode.next === null) {
            this.clear();
            return headNode.data;
        }

        while (headNode.next.next !== null) {
        headNode = headNode.next;
        }

        this.#tail = headNode;
        headNode.next = null;

        return lastData;
    }

    clear() {
        this.#length = 0;
        this.#head = 0;
        this.#tail = 0;
    }

    toString() {
        return JSON.stringify({
            length: this.length,
            head: this.getHead,
            tail: this.getTail
        }, (key, value) => {
            if (key == 'previous' && value !== null) {
                return value.data;
            }

            return value;
        }, 2)
    }
}