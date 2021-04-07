package Main;

import java.util.Scanner;

class Node {
	public final int value;
	public Node next;

	public Node(int data) {
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

class LinkedList {
	private int listLength;
	private Node head;
	private final Scanner scan = new Scanner(System.in);

	public LinkedList(int listLength) {
		this.listLength = listLength;
	}

	public int getListLength() {
		Node temp = head;
		int length = 0;

		if (temp != null) while (temp.next != null) {
			length++;
			temp = temp.next;
		}

		return length;
	}

	public void setListLength(int length) {
		this.listLength = length;
	}

	public Node getLastNode() {
		Node lastNode = this.head;

		if (lastNode.next != null) while (lastNode.next.next != null) {
			lastNode = lastNode.next;
		}

		return lastNode;
	}

	public Node getFirstNode() {
		Node firstNode = this.head;

		this.head = firstNode.next;
		firstNode.next = null;

		return firstNode;
	}

	public void pushNode(Node node) {
		Node lastNode = this.getLastNode();
		lastNode.next = node;
	}

	public Node popNode() {
		Node lastNode = this.getLastNode().next;

		lastNode.next = null;

		return lastNode;
	}

	private void setNode(Node node, int len) {
		if (len != 0) {
			System.out.printf("Enter a node[%d] value: ", this.listLength - len + 1);
			int value = scan.nextInt();

			node.next = new Node(value);

			this.setNode(node.next, len - 1);
		}
	}

	public void setHead() {
		System.out.print("Enter the Head node value: ");
		int value = scan.nextInt();

		this.head = new Node(value);

		this.setNode(this.head, this.listLength - 1);
	}

	public void eachValue(int numOfValue) {
		int len = this.getListLength();

		if (numOfValue > len) {
			numOfValue = len;
		}

		Node temp = this.head;

		while(numOfValue != 0) {
			System.out.println("Value = " + temp.value);
			temp = temp.next;
			numOfValue--;
		}
	}

	public void clear() {
		this.head = null;
	}

	@Override
	public String toString() {
		return "LinkedList {" + '\n' +
			"head = " + (head != null ? head.toString() : null) + '\n' +
		'}';
	}
}

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.print("Enter The length of linked list: ");
		int len = scan.nextInt();

		LinkedList linkedList = new LinkedList(len);
		linkedList.setHead();

		System.out.println(linkedList.toString());

		Node lastNode = linkedList.popNode();
		System.out.println("pop node = " + lastNode);
		linkedList.pushNode(new Node(6));

		Node firstNode = linkedList.getFirstNode();
		System.out.println("shift node = " + firstNode);
		System.out.println(linkedList.toString());

		linkedList.eachValue(10);

		linkedList.clear();
		System.out.println(linkedList.toString());
	}
}