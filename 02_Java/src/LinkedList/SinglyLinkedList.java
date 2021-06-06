package LinkedList;

import java.util.Scanner;

public class SinglyLinkedList<T> {
	private int length = 0;
	private SinglyNode<T> head;
	private SinglyNode<T> tail;
	private final Scanner scan = new Scanner(System.in);

	public SinglyLinkedList() {
		this.head = null;
		this.tail = null;
	}

	public int length() {
		return this.length;
	}

	public SinglyNode<T> getTail() {
		return this.tail;
	}

	public SinglyNode<T> getHead() {
		return this.head;
	}

	private void pushNode(SinglyNode<T> node) {
		SinglyNode<T> lastNode = this.getTail();

		if (lastNode == null) {
			this.head = node;
		} else {
			lastNode.next = node;
		}

		this.tail = node;
	}

	public void push(T number) {
		SinglyNode<T> node = new SinglyNode<>(number);

		this.pushNode(node);
		this.length++;
	}

	public SinglyNode<T> pop() {
		SinglyNode<T> head = this.head;
		SinglyNode<T> lastNode = this.tail;

		if (head == null) {
			return null;
		}

		this.length--;

		if (head.next != null) {
			while (head.next.next != null) {
				head = head.next;
			}

			head.next = null;
		} else {
			this.clear();
		}

		this.tail = head;
		return lastNode;
	}

	public void eachValue(int numOfValue) {
		int len = this.length();

		if (numOfValue > len) {
			numOfValue = len;
		}

		SinglyNode<T> temp = this.head;

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
