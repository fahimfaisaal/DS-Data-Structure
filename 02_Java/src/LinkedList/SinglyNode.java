package LinkedList;

public class SinglyNode<T> {
	public final T value;
	public SinglyNode<T> next;

	public SinglyNode(T data) {
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
