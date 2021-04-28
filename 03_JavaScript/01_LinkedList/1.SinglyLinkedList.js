console.clear();
const Iterate = require('../iterate');
class SinglyNode {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

module.exports = class SinglyLinkedList extends Iterate {
  #length;
  #head;
  #tail;

  constructor() {
    super();
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
   * @param {Array<any>} data
   * @returns {this}
   */
  addLastAll(...data) {
    data = typeof data[0] === "object" ? data.flat() : data;

    return data.reduce((list, value) => {
      this.addLast = value;
      return list;
    }, this);
  }

  /**
   * @param {Array<any>} data
   * @returns {this}
   */
  addFirstAll(...data) {
    data = typeof data[0] === "object" ? data.flat() : data;

    return data.reduce((list, value) => {
      this.addFirst = value;
      return list;
    }, this);
  }

  set addFirst(data) {
    const newNode = new SinglyNode(data);
    this.#length++;

    newNode.next = this.getHead;

    this.#head = newNode;
  }

  set addLast(data) {
    const newNode = new SinglyNode(data);
    let headNode = this.getHead;

    this.#length++;

    if (headNode === null) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    this.#tail.next = newNode;
    this.#tail = newNode;
  }

  get pollFirst() {
    const firstData = this.getHead?.data;

    if (firstData === undefined) {
      return null;
    }

    this.#length--;

    this.#head = this.#head.next;

    return firstData;
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

  /**
   * @param {number} index 
   * @returns data
   */
  get(index) {
    const item = this.toArray()[index]

    if (item === undefined) {
      return null;
    }

    return item;
  }

  clear() {
    this.#length = 0;
    this.#head = null;
    this.#tail = null;
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