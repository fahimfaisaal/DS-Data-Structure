console.clear();

class Node {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  #length;
  #head;
  #tail;

  constructor() {
    this.#length = 0;
    this.#head = null;
    this.#tail = null;
  }

  /**
   * @param {any} nodeData
   * @returns {undefined}
   */
  set setNode(nodeData) {
    const node = new Node(nodeData);

    if (this.#head) {
      this.#tail.next = node;
    }

    if (this.#head === null) {
      this.#head = node;
    }

    this.#tail = node;
    this.#length++;
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
   * @param {Array<any>} data
   * @returns {this}
   */
  insertNodes(...data) {
    data = typeof data[0] === "object" ? data.flat() : data;

    return data.reduce((list, value) => {
      this.setNode = value;
      return list;
    }, this);
  }

  shiftNode() {
    const nextNode = this.#head.next;

    if (nextNode) {
      this.#head = nextNode;
    } else {
      this.#head = nextNode;
      this.#tail = nextNode;
    }

    this.#length++;
  }

  clear() {
    this.#length = 0;
    this.#head = null;
    this.#tail = null;
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

  /**
   * @returns {this} in String format
   */
  toString() {
    return JSON.stringify({
      length: this.length,
      head: this.getHead,
      tail: this.getTail
    }, null, 2);
  }
}

const list = new SinglyLinkedList();
list.insertNodes(0)
list.insertNodes(1, 2, 3, 4, 5, 6);

list.eachData(data => {
  console.log(data);
})

console.log(list.toString());
list.clear()
console.log(list.toString());