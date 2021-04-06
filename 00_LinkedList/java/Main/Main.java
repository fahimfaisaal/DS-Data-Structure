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
	public Node nextNode;
	private final Scanner scan = new Scanner(System.in);

	public LinkedList(int listLength) {
		this.listLength = listLength;
	}

	public int getListLength() {
		return this.listLength;
	}

	public void setListLength(int length) {
		this.listLength = length;
	}

	public Node getLastNode() {
		return this.nextNode.next;
	}

	public void pushNode(Node node) {
		this.nextNode.next = node;
	}

	public Node popNode() {
		Node lastNode = this.getLastNode();

		this.nextNode.next = null;

		return lastNode;
	}

	private void setNode(Node node, int len) {
		if (len != 0) {
			System.out.printf("Enter a node[%d] value: ", this.listLength - len);
			int value = scan.nextInt();

			node.next = new Node(value);
			this.nextNode = node;

			this.setNode(node.next, len - 1);
		}
	}

	public void setHead() {
		System.out.print("Enter the Head node value: ");
		int value = scan.nextInt();

		this.head = new Node(value);

		this.setNode(this.head, this.listLength - 1);
	}

	@Override
	public String toString() {
		return "LinkedList {" + '\n' +
			"head = " + head.toString() + '\n' +
		'}';
	}
}

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.print("Enter The number of nodes: ");
		int len = scan.nextInt();

		LinkedList linkedList = new LinkedList(len);
		linkedList.setHead();

		System.out.println(linkedList.toString());

		Node lastNode = linkedList.popNode();
		linkedList.pushNode(new Node(6));

		System.out.println(linkedList.toString());
	}
}