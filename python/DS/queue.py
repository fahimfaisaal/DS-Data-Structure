from DS import node
import json


class Queue:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def enqueue(self) -> any:
        if self.head is None:
            return None

        self.length -= 1

        first_node = self.head
        self.head = self.head.next

        return first_node.data

    def dequeue(self, data) -> object:
        new_node = node.Node(data)
        self.length += 1

        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return self

        self.tail.next = new_node
        self.tail = new_node

        return self

    def to_list(self) -> list:
        all_data: list = []

        if self.head is None:
            return all_data

        each_node: object = self.head

        while each_node:
            all_data.append(each_node.get_data())
            each_node = each_node.next

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
