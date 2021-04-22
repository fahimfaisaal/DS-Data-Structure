console.clear();

class Node {
    constructor(nodeData) {
        this.data = nodeData;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
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

    set setNode(data) {
        const node = new Node(data)

        if (this.#head) {
            this.#tail.next = node;
            this.#tail.next.previous = this.#head;
        }

        if (this.#head === null) {
            this.#head = node;
        }

        this.#tail = node;
        this.#length++;
    }
}

const list = new DoublyLinkedList();