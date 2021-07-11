package BinaryTree;

public class Tree<T> {
	public TreeNode<T> root;

	public Tree(T rootValue) {
		this.root = new TreeNode<>(rootValue);
	}

	public TreeNode<T> getRoot() {
		return this.root;
	}

	public TreeNode<T> appendLeft(TreeNode<T> treeNode, T value) {
		TreeNode<T> newNode = new TreeNode<>(value);
		treeNode.setLeft(newNode);

		return newNode;
	}

	public TreeNode<T> appendRight(TreeNode<T> treeNode, T value) {
		TreeNode<T> newNode = new TreeNode<>(value);
		treeNode.setRight(newNode);

		return newNode;
	}

	@Override
	public String toString() {
		return "Tree {" + '\n' +
		"root=" + this.root + '\n' +
		'}';
	}
}
