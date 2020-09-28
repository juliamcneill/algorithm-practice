// Given a string, sort it in decreasing order based on the frequency of characters.

var frequencySort = function (s) {
  var tracker = {};
  var sortable = [];
  var result = '';

  for (let i = 0; i < s.length; i++) {
    if (tracker[s[i]]) {
      tracker[s[i]]++;
    } else {
      tracker[s[i]] = 1;
    }
  }

  for (let key in tracker) {
    sortable.push([tracker[key], key]);
  }

  sortable.sort(function (a, b) {
    return b[0] - a[0];
  });

  for (let i = 0; i < sortable.length; i++) {
    for (let j = 0; j < sortable[i][0]; j++) {
      result += sortable[i][1];
    }
  }

  return result;
};
