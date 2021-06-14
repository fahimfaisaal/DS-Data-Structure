package Stack;

public class StackNode {
	public int data;
	public StackNode next;

	public StackNode(int data) {
		this.data = data;
		this.next = null;
	}

	@Override
	public String toString() {
		return "StackNode {" + '\n' +
		"  data=" + data + ",\n" +
		"  next=" + next + '\n' +
		'}';
	}
}
