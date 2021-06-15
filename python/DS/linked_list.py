from DS import node
import json


class Linkedlist:

    def __init__(self):
        self.length = 0
        self.head: object = None
        self.tail: object = None

    def get_length(self) -> int:
        return self.length

    def get_head(self) -> object:
        return self.head

    def get_tail(self) -> object:
        return self.tail

    def add_first(self, data: any) -> object:
        new_node = node.Node(data)

        self.length += 1

        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return

        head = self.head
        new_node.next = head
        self.head = new_node

        return self

    def add_last(self, data: any) -> object:
        new_node = node.Node(data)

        self.length += 1

        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node

        self.tail = new_node

        return self

    def add(self, index: int, data: any) -> object:
        if index >= self.length:
            self.add_last(data)
        elif index <= 0:
            self.add_first(data)
        else:
            new_node = node.Node(data)
            i = 0
            head = self.head

            while i != index - 1:
                head = head.next
                i += 1

            remain_nodes = head.next
            head.next = new_node
            head.next.next = remain_nodes

            self.length += 1

        return self

    def pull_first(self) -> object:
        if self.head is None:
            return None

        head = self.head
        self.length -= 1

        if self.head.next is None:
            self.clear()
        else:
            self.head = self.head.next

        head.next = None
        return head

    def pull_last(self) -> object:
        if self.head is None:
            return None

        last_node: object = self.tail
        self.length -= 1

        if self.head.next is None:
            self.clear()
        else:
            each_node = self.head

            while each_node.next.next:
                each_node = each_node.next

            each_node.next = None
            self.tail = each_node

        return last_node

    def pull(self, index: int) -> object:
        if index <= 0:
            return self.pull_first()

        if index >= self.length:
            return self.pull_last()

        each_node = self.head

        i = 0
        while i != index - 1:
            each_node = each_node.next
            i += 1

        need_node = each_node.next
        remain_node = each_node.next.next

        each_node.next = remain_node

        need_node.next = None

        return need_node

    def clear(self) -> None:
        self.length = 0
        self.head = None
        self.tail = None

    # this method will return deep clone
    def clone(self) -> object:
        clone_linked_list: object = Linkedlist()
        items: list = self.to_list()

        for data in items:
            clone_linked_list.add_last(data)

        return clone_linked_list

    # this method will return shallow clone
    def copy(self):
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
