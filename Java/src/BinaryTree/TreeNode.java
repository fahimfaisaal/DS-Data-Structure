package BinaryTree;

public class TreeNode<T> {
	public final T data;
	public int size;
	public TreeNode<T> left;
	public TreeNode<T> right;

	public TreeNode(T data) {
		this.size = 0;
		this.data = data;
		this.left = null;
		this.right = null;
	}

	public T getData() {
		return this.data;
	}

	public int getSize() {
		return this.size;
	}

	public TreeNode<T> getLeft() {
		return this.left;
	}

	public void setLeft(TreeNode<T> left) {
		this.size++;
		this.left = left;
	}

	public TreeNode<T> getRight() {
		return this.right;
	}

	public void setRight(TreeNode<T> right) {
		this.size++;
		this.right = right;
	}

	public TreeNode<T> removeLeft() {
		TreeNode<T> leftNode = this.getLeft();

		if (leftNode != null) {
			this.size--;
		}
		// clear left node
		this.left = null;

		return leftNode;
	}

	public TreeNode<T> removeRight() {
		TreeNode<T> rightNode = this.getRight();

		if (rightNode != null) {
			this.size--;
		}
		// clear right node
		this.right = null;

		return rightNode;
	}

	@Override
	public String toString() {
		return "TreeNode { \n" +
		"    size = " + this.getSize() + ",\n" +
		"    data = " + this.getData() + ",\n" +
		"    left = " + this.left + '\n' +
		"    right = " + this.right + '\n' +
		"  }";
	}
}
