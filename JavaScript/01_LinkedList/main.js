const SinglyLinkedList = require('./1.SinglyLinkedList');
const DoublyLinkedList = require('./2.DoublyLinkedList');

const singlyList = new SinglyLinkedList();
singlyList.addLastAll(0)
singlyList.addLastAll(1, 2, 3, 4, 5, 6);

console.log("last item: ", singlyList.pollLast)
console.log("last item: ", singlyList.pollLast)

console.log(singlyList.toString());

// const Iterator = singlyList.iterator();

// console.log(singlyList.pollFirst)
// console.log(singlyList.pollFirst)
// console.log(singlyList.pollLast)

// singlyList.addLast = 8;

// singlyList.addFirstAll(-1, -2, -3, -4)
// console.log(singlyList.get(8))
// console.log(singlyList.toArray())

// const doublyList = new DoublyLinkedList();

// doublyList.addLastAll(1, 2, 3, 4, 5);
// console.log(doublyList.toString());
// console.log(doublyList.toArray());

// doublyList.addFirstAll(-1, -2, -3, -4, -5);
// console.log(doublyList.toString());
// console.log(doublyList.toArray());

// console.log('first element', doublyList.pollFirst);
// console.log('last element', doublyList.pollLast);

// console.log('get element by index -> ', doublyList.get(0));
// doublyList.clear();

// console.log(doublyList.toString());