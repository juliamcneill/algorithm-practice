// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  var start = 0;
  var end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};
