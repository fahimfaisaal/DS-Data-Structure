package Main;

import java.util.Scanner;
import LinkedList.SinglyLinkedList.*;

public class Main {

    public static void main(String[] args) {
	     // Singly linkedList
        Scanner scan = new Scanner(System.in);

        SinglyLinkedList singlyLinkedList = new SinglyLinkedList();

        singlyLinkedList.push(1);
        singlyLinkedList.push(2);
        singlyLinkedList.push(3);
        singlyLinkedList.push(4);

        SinglyNode lastNode = singlyLinkedList.pop();
        SinglyNode secondLast = singlyLinkedList.pop();

        System.out.println(singlyLinkedList.toString());
        System.out.println("last node = " + lastNode + '\n' + "second last = " + secondLast);

    }
}
