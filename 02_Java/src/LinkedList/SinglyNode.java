package LinkedList;

public class SinglyNode {
	public final int value;
	public SinglyNode next;

	public SinglyNode(int data) {
		this.value = data;
		this.next = null;
	}

	@Override
	public String toString() {
		return "Node { \n" +
		" value = " + value + ",\n" +
		" next = " + next + '\n' +
		'}';
	}
}
