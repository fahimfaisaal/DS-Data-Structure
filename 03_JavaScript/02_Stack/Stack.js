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

        if (head === null) {
            this.#tail = node;
        }

        node.next = head;
        this.#head = node;
    }

    /**
     * @returns {Node}
     */
    pop() {
        let lastNode = null;
        const head = this.getHead;

        if (head === null) {
            return lastNode;
        }

        this.#length--;

        if (head.next === null) {
            lastNode = head;
            
            this.clear()
        }

        if (head !== null) {
            const remainNode = head.next;

            head.next = null;
            lastNode = head;

            this.#head = remainNode;
        }

        return lastNode;
    }

    
    iterator() {
        let iterate = this.getHead;
        
        return {
            next: () => {
                const node = iterate;
                
                iterate = node !== null ? iterate.next : this.getHead;
                
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
        }, null, 2);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log(stack.toString())

const lastNode = stack.pop();
const secondLastNode = stack.pop();
const thirdLastNode = stack.pop();

console.log(lastNode, secondLastNode, thirdLastNode);

console.log(stack.toString())

const iterate = stack.iterator()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

stack.clear();
console.log(stack.toString());