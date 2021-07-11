package BinaryTree;

public class TreeNode<T> {
	public final T value;
	public TreeNode<T> left;
	public TreeNode<T> right;

	public TreeNode(T value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	public T getValue() {
		return this.value;
	}

	public TreeNode<T> getLeft() {
		return this.left;
	}

	public void setLeft(TreeNode<T> left) {
		this.left = left;
	}

	public TreeNode<T> getRight() {
		return this.right;
	}

	public void setRight(TreeNode<T> right) {
		this.right = right;
	}

	@Override
	public String toString() {
		return " TreeNode { \n" +
		" value = " + this.value + ",\n" +
		" left = " + this.left + '\n' +
		" right = " + this.right + '\n' +
		'}';
	}
}
