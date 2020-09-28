// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

var reverseString = function (s) {
  return s.reverse();
};

var reverseString = function (s) {
  var temp;

  var reverseMechanism = function (s, start, end) {
    if (start >= end) {
      return;
    }

    temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    start++;
    end--;

    reverseMechanism(s, start, end);
  };

  reverseMechanism(s, 0, s.length - 1);
};
