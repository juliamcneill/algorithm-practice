// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.

var longestPalindrome = function (s) {
  var longest = '';

  if (s.length === 0 || s.length === 1) {
    return s;
  }

  for (var i = 0; i < s.length; i++) {
    for (var j = 1; j < s.length; j++) {
      var substr = s.substring(i, j + 1);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }

  return longest;
};

var isPalindrome = function (s) {
  return s === s.split('').reverse().join('');
};
