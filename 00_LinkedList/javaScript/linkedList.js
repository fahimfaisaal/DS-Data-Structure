console.clear()

class LinkedList {
    #list = new Object();

    constructor(...data) {
        this.data = typeof data[0] === 'object' ? data.flat() : data;
    }

    #listGenerator(next = null) {
        if (!this.data.length) {
            return {
                head: this.#list,
            };
        }

        if (!next) this.#list.value = this.data.shift();
      
        return this.#listGenerator(
            this.#list.next = {
                value: this.data.pop(),
                next: next,
            }
        );
    }

    get getList() {
        return this.#listGenerator();
    }

    #lengthGenerator(len = 0, node = this.getList.head) {
        if (!node) {
            return len;
        }

        return this.#lengthGenerator(len + 1, node.next)
    }

    get getLength() {
        return this.#lengthGenerator()
    }

    get getFirstNode() {
        return this.getList.head;
    }

    #lastNode(lastNode = this.getList.head) {
        if (lastNode.next) {
            return this.#lastNode(lastNode.next)
        }

        return lastNode
    }

    get getLastNode() {
        return this.#lastNode();
    }
    
    clear() {
        this.data.length = 0
    }

    toString() {
        return JSON.stringify(this.getList, null, 2);
    }

}

const linkedList = new LinkedList(1, 22, 23)
// linkedList.clear()
console.log(linkedList.getLastNode);