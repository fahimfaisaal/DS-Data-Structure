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

    insertNodes(...items) {
        items = typeof items[0] === 'object' ? items.flat() : items;

        return items.reduce((list, data) => {
            list.setNode = data;
            
            return list;
        }, this);
    }

    /**
   * @param {function} callBack 
   * @param {number} len 
   */
    eachData(callBack, len = this.length) {
        let node = this.getHead;
        len = len > this.length || len < 0 ? this.length : len;

        for (let i = 0; i < len; i++) {
            callBack(node.data);
            node = node.next;
        }
    }

  /**
   * @param {function} callBack 
   * @param {number} len 
   */
    eachNode(callBack, len = this.length) {
        let node = this.getHead;
        len = len > this.length || len < 0 ? this.length : len;
        
        for (let i = 0; i < len; i++) {
            callBack(node);
            node = node.next;
        }
    }

    clear() {
        this.#length = 0;
        this.#head = 0;
        this.#tail = 0;
    }
}

const list = new DoublyLinkedList();

list.insertNodes(1, 2, 3, 4, 5, 6, 7)

list.eachData(data => {
    console.log(data)
})

list.eachNode(node => {
    console.log(node)
})

console.log(list.getTail)

list.clear()