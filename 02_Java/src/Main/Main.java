package Main;

import java.util.Scanner;
import LinkedList.SinglyLinkedList.*;
import Stack.*;

public class Main {

    public static void main(String[] args) {
	     // Singly linkedList
        /*Scanner scan = new Scanner(System.in);

        SinglyLinkedList singlyLinkedList = new SinglyLinkedList();

        singlyLinkedList.push(1);
        singlyLinkedList.push(2);
        singlyLinkedList.push(3);
        singlyLinkedList.push(4);

        SinglyNode lastNode = singlyLinkedList.pop();
        SinglyNode secondLast = singlyLinkedList.pop();

        System.out.println(singlyLinkedList.toString());
        System.out.println("last node = " + lastNode + '\n' + "second last = " + secondLast);*/

        // Stack
        Stack stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        StackNode lastNode = stack.pop();
        StackNode lastSecond = stack.pop();
        StackNode lastThird = stack.pop();


        stack.push(4);
        stack.push(5);

        System.out.println(stack.toString());
        System.out.println("last node = " + lastNode + "second last = " + lastSecond + "third last = " + lastThird);

    }
}
