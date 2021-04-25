console.clear();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

class Stack {
    #length;
    #head;
    #tail;

    constructor() {
        this.#length = 0;
        this.#head = null;
        this.#tail = null;
    }

    get length() {
        return this.#length;
    }

    get getHead() {
        return this.#head;
    }

    get getTail() {
        return this.#tail;
    }

    /**
     * @param {any} data 
     */
    push(data) {
        const node = new Node(data);
        let head = this.getHead;
        this.#length++;

        if (head !== null) {
            while (head.next !== null) {
                head = head.next;
            }

            head.next = node;
        } else {
            this.#head = node;
        }

        this.#tail = node;
    }

    /**
     * @returns {Node}
     */
    pop() {
        let head = this.getHead;
        const lastNode = this.getTail;

        if (head === null) {
            return head;
        }

        this.#length--;

        if (head.next === null) {
            this.clear();
            return lastNode;
        }
        
        while (head.next.next !== null) {
            head = head.next;
        }

        this.#tail = head;
        head.next = null;

        return lastNode;
    }

    clear() {
        this.#length = 0;
        this.#head = null;
        this.#tail = null;
    }

    toString() {
        return JSON.stringify({
            length: this.length,
            head: this.getHead,
            tail: this.getTail
        }, null, 2);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(5);

console.log(stack.toString())

stack.pop();
stack.pop();
stack.pop();

console.log(stack.toString());