package LinkedList.SinglyLinkedList;

import java.util.Scanner;

public class SinglyLinkedList {
	private int length = 0;
	private SinglyNode head;
	private SinglyNode tail;
	private final Scanner scan = new Scanner(System.in);

	public SinglyLinkedList() {
		this.head = null;
		this.tail = null;
	}

	public int length() {
		return this.length;
	}

	public SinglyNode getLastNode() {
		return this.tail;
	}

	public SinglyNode getFirstNode() {
		return this.head;
	}

	private void pushNode(SinglyNode node) {
		SinglyNode lastNode = this.getLastNode();

		if (lastNode == null) {
			this.head = node;
		} else {
			lastNode.next = node;
		}

		this.tail = node;
	}

	public void push(int number) {
		SinglyNode node = new SinglyNode(number);

		this.pushNode(node);
		this.length++;
	}

	public SinglyNode pop() {
		SinglyNode head = this.head;
		if (this.length != 0) this.length--;

		if (head.next == null) {
			this.clear();
			return head;
		}

		while (head.next.next != null) {
			head = head.next;
		}

		SinglyNode lastNode = head.next;
		head.next = null;

		return lastNode;
	}

	public void eachValue(int numOfValue) {
		int len = this.length();

		if (numOfValue > len) {
			numOfValue = len;
		}

		SinglyNode temp = this.head;

		while(numOfValue != 0) {
			System.out.println("Value = " + temp.value);
			temp = temp.next;
			numOfValue--;
		}
	}

	public void clear() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	@Override
	public String toString() {
		return "LinkedList {" + '\n' +
		"length = " + this.length() + '\n' +
		"head = " + (this.head != null ? this.head.toString() : null) + '\n' +
		"tail = " + (this.tail != null ? this.tail.toString() : null) + '\n' +
		'}';
	}
}
