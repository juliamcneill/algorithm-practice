// Reverse a singly linked list.

var reverseList = function (head) {
  var previous = null;
  var current = head;
  var temp;

  while (current !== null) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
};
