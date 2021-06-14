package Stack;

public class Stack {
	private int length;
	private StackNode head;
	private StackNode tail;

	public Stack() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	public int getLength() {
		return this.length;
	}

	public StackNode getHead() {
		return this.head;
	}

	public StackNode getTail() {
		return this.tail;
	}

	public void push(int data) {
		StackNode node = new StackNode(data);
		StackNode head = this.head;

		if (head != null) {
			while (head.next != null) {
				head = head.next;
			}

			head.next = node;
		} else this.head = node;

		this.tail = node;
		this.length++;
	}

	public StackNode pop() {
		StackNode lastNode = this.tail;
		StackNode head = this.head;

		if (head == null) {
			return null;
		}

		this.length--;

		if (head.next != null) {
			while (head.next.next != null) {
				head = head.next;
			}

			head.next = null;
		} else this.clear();


		this.tail = head;
		return lastNode;
	}

	public void clear() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	@Override
	public String toString() {
		return "Stack {" + '\n' +
		" length=" + length + ",\n" +
		" head=" + head + ",\n" +
		" tail=" + tail + '\n' +
		'}';
	}
}
