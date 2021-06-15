from DS import node
import json


class Stack:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def push(self, data) -> object:
        new_node = node.Node(data)

        self.length += 1

        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return self

        new_node.next = self.head
        self.head = new_node

        return self

    def pop(self):
        if self.head is None:
            return None

        self.length -= 1

        pop_item = self.head
        self.head = self.head.next

        pop_item.next = None

        return pop_item.data

    def to_list(self) -> list:
        all_data: list = []

        if self.head is None:
            return all_data

        each_node: object = self.head

        while each_node:
            all_data.append(each_node.get_data())
            each_node = each_node.next

        all_data = all_data[::-1]

        return all_data

    def to_dictionary(self) -> object:
        return json.loads(
            json.dumps(
                self,
                default=lambda obj: obj.__dict__
            )
        )

    def to_string(self) -> str:
        return json.dumps(
            self,
            default=lambda obj: obj.__dict__,
            indent=2
        )
