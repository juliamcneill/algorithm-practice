// Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function (head) {
  var array = [];

  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }

  return array.every((value, i) => value === array[array.length - i - 1]);
};
