// Given two strings s and t , write a function to determine if t is an anagram of s.

// You may assume the string contains only lowercase alphabets.

var isAnagram = function (s, t) {
  var tracker = {};

  for (let i = 0; i < s.length; i++) {
    if (tracker[s[i]] === undefined) {
      tracker[s[i]] = 1;
    } else {
      tracker[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tracker[t[i]] >= 1) {
      tracker[t[i]]--;
    } else {
      return false;
    }
  }

  for (let key in tracker) {
    if (tracker[key] !== 0) {
      return false;
    }
  }

  return true;
};
