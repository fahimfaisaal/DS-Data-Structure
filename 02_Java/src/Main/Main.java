package Main;

import Stack.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
	     // Singly linkedList
        /* Scanner scan = new Scanner(System.in);

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
/*      Stack stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        StackNode lastNode = stack.pop();
        StackNode lastSecond = stack.pop();
        StackNode lastThird = stack.pop();


        stack.push(4);
        stack.push(5);

        System.out.println(stack.toString());
        System.out.println("last node = " + lastNode + "second last = " + lastSecond + "third last = " + lastThird);*/

//        AbstractSet<java.io.Serializable> abstractSet = new AbstractSet<java.io.Serializable>()

        HashSet<Integer> hashSet = new HashSet<Integer>();

        hashSet.add(1000);
        hashSet.add(1);
        hashSet.add(100);
        hashSet.add(400);
        hashSet.add(10);

        System.out.println("HashSet = " + hashSet);

        LinkedHashSet<Integer> linkedHashSet = new LinkedHashSet<Integer>();

        linkedHashSet.add(1000);
        linkedHashSet.add(1);
        linkedHashSet.add(100);
        linkedHashSet.add(400);
        linkedHashSet.add(10);

        System.out.println("LinkedHashSet = " + linkedHashSet);


        Set<java.io.Serializable> treeSet = new TreeSet<java.io.Serializable>();

        treeSet.add(1000);
        treeSet.add(1);
        treeSet.add(100);
        treeSet.add(10);

        System.out.println("TreeSet = " + treeSet);

    }
}
