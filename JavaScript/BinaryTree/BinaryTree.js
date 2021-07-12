const TreeNode = require('./TreeNode');

class Tree {
    constructor(data = null) {
        this.root = new TreeNode(data);
    }

    appendLeft(treeNode, data) {
        const newNode = new TreeNode(data);

        treeNode.left = newNode;

        return newNode;
    }

    appendRight(treeNode, data) {
        const newNode = new TreeNode(data);

        treeNode.right = newNode;

        return newNode;
    }

    clear() {
        this.root = null;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

module.exports = Tree