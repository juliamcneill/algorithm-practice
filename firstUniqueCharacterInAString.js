// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// You may assume the string contains only lowercase English letters.

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == i && s.indexOf(s[i], i + 1) == -1) {
      return i;
    }
  }

  return -1;
};

var firstUniqChar = function (s) {
  var tracker = {};

  for (let i = 0; i < s.length; i++) {
    if (tracker[s[i]] >= 1) {
      tracker[s[i]]++;
    } else {
      tracker[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (tracker[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
