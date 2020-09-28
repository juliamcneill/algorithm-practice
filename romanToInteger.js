// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function (s) {
  var key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  var result = 0;

  var i = 0;

  while (i < s.length) {
    if (!key[s[i + 1]]) {
      result += key[s[i]];
    } else if (key[s[i]] >= key[s[i + 1]]) {
      result += key[s[i]];
    } else {
      result += key[s[i + 1]] - key[s[i]];
      i++;
    }

    i++;
  }

  return result;
};
