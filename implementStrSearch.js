// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
  var i = 0;
  var j = 0;
  var matchFoundAt = undefined;

  if (needle === '') {
    return 0;
  }

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (matchFoundAt === undefined) {
        matchFoundAt = i;
      }

      if (j + 1 === needle.length) {
        return matchFoundAt;
      }

      i++;
      j++;
    } else {
      if (matchFoundAt !== undefined) {
        i = matchFoundAt + 1;
        matchFoundAt = undefined;
      } else {
        i++;
      }

      j = 0;
    }
  }

  return -1;
};
