class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

class Queue {
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

    enqueue(data) {
        const node = new Node(data);
        this.#length++;

        if (this.getHead === null) {
            this.#tail = node;
        }

        node.next = this.getHead;

        this.#head = node;
    }

    dequeue() {
        const lastNode = this.getTail;
        let head = this.getHead;

        if (head === null) {
            return null;
        }

        this.#length--;

        if (head.next === null) {
            this.clear();
            
            return lastNode;
        }

        while (head.next.next !== null) {
            head = head.next;
        }

        head.next = null;
        this.#tail = head;

        return lastNode;
    }

   iterator() {
        let iterate = this.getHead;

        return {
            next: () => {
                const node = iterate;

                iterate = node ? iterate.next : this.getHead;

                return {
                    done: node === null,
                    data: node ? node.data : null
                }
            }
        }
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
        }, null, 2)
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.toString())

const firstNode = queue.dequeue(),
    secondNode = queue.dequeue(),
    thirdNode = queue.dequeue();

console.log(firstNode, secondNode, thirdNode);

console.log(queue.toString());

const iterateQueue = queue.iterator();

console.log(iterateQueue.next());
console.log(iterateQueue.next());
console.log(iterateQueue.next());
console.log(iterateQueue.next());
console.log(iterateQueue.next());
console.log(iterateQueue.next());
console.log(iterateQueue.next());

queue.clear();

console.log(queue.toString());