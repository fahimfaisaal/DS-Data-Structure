package BinaryTree;

public class Tree<T> {
	public TreeNode<T> root;

	public Tree() {
		this.root = null;
	}

	public Tree(T rootData) {
		this.root = new TreeNode<>(rootData);
	}

	public TreeNode<T> getRoot() {
		return this.root;
	}

	public TreeNode<T> appendLeft(TreeNode<T> treeNode, T data) {
		TreeNode<T> newNode = new TreeNode<>(data);
		treeNode.setLeft(newNode);

		return newNode;
	}

	public TreeNode<T> appendRight(TreeNode<T> treeNode, T data) {
		TreeNode<T> newNode = new TreeNode<>(data);
		treeNode.setRight(newNode);

		return newNode;
	}

	public Tree<T> clear() {
		this.root = null;

		return this;
	}

	@Override
	public String toString() {
		return "Tree {" + '\n' +
		" root = " + this.root + '\n' +
		'}';
	}
}
