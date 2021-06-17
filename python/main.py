from DS import linked_list
from DS import stack
from DS import queue
from DS import set
import os

os.system('cls' if os.name == 'nt' else 'clear')

if __name__ == '__main__':
    my_list = linked_list.Linkedlist()

    my_list.add_first(20)
    my_list.add_first(10)
    my_list.add_first(5)
    my_list.add_last(30).add_last(30)
    my_list.add_last(40).add_last(50).add_first(50).add_last(40).add_first(40).add_last(50)
    print(my_list.to_string())
    print(my_list.to_list())

    first_node = my_list.pull_first()
    last_node = my_list.pull_last()

    print("Pull first node:", first_node.to_dictionary())
    print("Pull last node:", last_node.to_dictionary())

    print(my_list.to_string())

    # shallow clone
    print("Shallow clone", my_list.copy() == my_list)

    # deep clone
    print("Deep clone:", my_list.clone() == my_list)

    my_list.add(3, 3)
    print(my_list.pull(2).data)
    print(my_list.to_list())
    print(set.Set(my_list.to_list()).get_set())

    # my_stack = stack.Stack()
    #
    # my_stack.push(10)
    # my_stack.push(20)
    # my_stack.push(30)
    #
    # print(my_stack.pop())
    # print(my_stack.pop())
    #
    # print(my_stack.to_list())

    my_queue = queue.Queue()

    my_queue.push(10)
    my_queue.push(20).push(30).push(40)

    print(my_queue.to_list())
    print("shift data:", my_queue.shift())
    print(my_queue.to_list())





