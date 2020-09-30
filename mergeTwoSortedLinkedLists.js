// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  var head;
  var node;

  if (l1 && l2) {
    if (l1.val < l2.val) {
      node = l1;
      head = node;
      l1 = l1.next;
    } else {
      node = l2;
      head = node;
      l2 = l2.next;
    }
  } else if (l1) {
    node = l1;
    head = node;
    l1 = l1.next;
  } else if (l2) {
    node = l2;
    head = node;
    l2 = l2.next;
  } else {
    head = null;
    return head;
  }

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        node.next = l1;
        node = node.next;
        l1 = l1.next;
      } else {
        node.next = l2;
        node = node.next;
        l2 = l2.next;
      }
    } else if (l1) {
      node.next = l1;
      node = node.next;
      l1 = l1.next;
    } else if (l2) {
      node.next = l2;
      node = node.next;
      l2 = l2.next;
    }
  }

  return head;
};
