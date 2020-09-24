/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node
 * at which the intersection of two linked lists begins,
 * or null if there is no such intersection.
 *
 * Example:
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return D
 * as the node of intersection.
 *
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 *
 * Given the following two linked lists list1 and list2,
 * linkedListIntersection(list1,list2) should return NULL
 * as there is no point of intersection.
 *
 *    A → B → C → D
 *    X → Y → Z
 *
 */

function getLinkedListLength(list) {
  if (list.next === null) {
    return 1;
  } else {
    return 1 + getLinkedListLength(list.next);
  }
}

function linkedListIntersection(list1, list2) {
  var length1 = getLinkedListLength(list1);
  var length2 = getLinkedListLength(list2);

  var difference = Math.abs(length1 - length2);

  var longer = length1 >= length2 ? list1 : list2;
  var shorter = length1 >= length2 ? list2 : list1;

  while (longer && shorter) {
    if (difference > 0) {
      longer = longer.next;
      difference--;
      continue;
    }

    if (longer === shorter) {
      return longer;
    } else {
      longer = longer.next;
      shorter = shorter.next;
    }
  }

  return null;
}
