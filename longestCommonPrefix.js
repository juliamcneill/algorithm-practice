// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  var prefix = '';

  if (strs[0] === undefined) {
    return '';
  }

  var index = 0;

  while (index < strs[0].length) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][index] !== strs[0][index]) {
        return prefix;
      }
    }

    prefix += strs[0][index];

    index++;
  }

  return prefix;
};
