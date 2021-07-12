class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    removeLeft() {
        const leftNode = this.left;

        this.left = null;

        return leftNode
    }

    removeRight() {
        const rightNode = this.right;

        this.right = null;

        return rightNode;
    }

    toString() {
        return JSON.stringify(this, null, 2);
    }
}

module.exports = TreeNode;