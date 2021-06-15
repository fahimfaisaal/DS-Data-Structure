class Set:
    def __init__(self, array: list):
        self.set = to_set(array)

    def get_set(self):
        return self.set

    def add(self, item) -> object:
        if item not in self.set:
            self.set.append(item)

        return self


def to_set(arr):
    set_arr: list = []

    for item in arr:
        if item not in set_arr:
            set_arr.append(item)

    return set_arr
