const Tree = require('./BinaryTree/BinaryTree');

const tree = new Tree(10);

const four = tree.appendLeft(tree.root, 4);
const six = tree.appendRight(tree.root, 6);
console.log(tree.toString())