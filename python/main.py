from DS import linked_list

if __name__ == '__main__':
    my_list = linked_list.Linkedlist()

    my_list.add_first(20)
    my_list.add_first(10)
    my_list.add_first(5)
    my_list.add_last(30)
    my_list.add_last(40)
    # print(my_list.to_string())
    # print(my_list.to_list())

    first_node = my_list.pull_first()
    last_node = my_list.pull_last()

    print("Pull first node:", first_node.to_dictionary())
    print("Pull last node:", last_node.to_dictionary())

    print(my_list.to_string())

    print(my_list.clone().to_string())
