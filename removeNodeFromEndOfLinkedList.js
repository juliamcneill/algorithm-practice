// Given a linked list, remove the n-th node from the end of list and return its head.

var removeNthFromEnd = function (head, n) {
  var node = head;
  var i = 0;
  var tracker = {};

  tracker[i] = node;

  while (node.next) {
    i++;
    node = node.next;
    tracker[i] = node;
  }

  var found = tracker[i + 1 - n];

  if (found && found.next) {
    found.val = found.next.val;
    found.next = found.next.next;
  } else if (tracker[i - n]) {
    var previous = tracker[i - n];
    previous.next = null;
  } else {
    head = null;
  }

  return head;
};
