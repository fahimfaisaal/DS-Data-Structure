console.clear();

class LinkedList {
  #list = new Object();

  constructor(...data) {
    this.data = typeof data[0] === "object" ? data.flat() : data;
  }

  #listGenerator(next = null) {
    if (!this.data.length) {
      return {
        head: this.#list,
      };
    }

    if (!next) this.#list.value = this.data.shift();

    return this.#listGenerator(
      (this.#list.next = {
        value: this.data.pop(),
        next: next,
      })
    );
  }

  get getList() {
    return this.#listGenerator();
  }

  #lengthGenerator(len = 0, node = this.getList.head) {
    if (!node) {
      return len;
    }

    return this.#lengthGenerator(len + 1, node.next);
  }

  get getLength() {
    return this.#lengthGenerator();
  }

  get getFirstNode() {
    return this.getList.head;
  }

  #lastNode(lastNode = this.getList.head) {
    if (lastNode.next) {
      return this.#lastNode(lastNode.next);
    }

    return lastNode;
  }

  get getLastNode() {
    return this.#lastNode();
  }

  set pushNode(data) {
    if (!Object.keys(this.getList.head).length) {
      this.getList.head.value = data;
      this.getList.head.next = null;
    } else
      this.getLastNode.next = {
        value: data,
        next: null,
      };
  }

  get popNode() {
    const pop = {
      ...this.getLastNode,
    };

    delete this.getLastNode.value;
    delete this.getLastNode.next;

    let node = this.getFirstNode;

    while (Object.keys(node.next).length) {
      node = node.next;
    }

    node.next = null;

    return pop;
  }

  clear() {
    this.data.length = 0;
  }

  displayNodeValues(head = this.getList.head, nodes = "^-->") {
    if (head.value) nodes += `${head.value}-->`;

    if (!head.next) {
      return nodes + "$";
    }

    return this.displayNodeValues(head.next, nodes);
  }

  toString() {
    return JSON.stringify(this.getList, null, 2);
  }
}

const linkedList = new LinkedList(1, 2, 3);

linkedList.pushNode = 4;
linkedList.pushNode = 5;
linkedList.pushNode = 6;

console.log(linkedList.popNode);
linkedList.popNode;

console.log(linkedList.displayNodeValues());
console.log(linkedList.toString());