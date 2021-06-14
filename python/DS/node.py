import json


class Node:
    def __init__(self, data):
        self.data = data
        self.next: object = None

    def get_data(self) -> any:
        return self.data

    def set_data(self, data) -> None:
        self.data = data

    def get_next(self) -> object:
        return self.next

    def set_next_value(self, next_value: object) -> None:
        self.next: object = next_value

    def to_dictionary(self) -> object:
        return json.loads(
            json.dumps(
                self,
                default=lambda obj: obj.__dict__
            )
        )
