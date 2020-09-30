// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

var uniqueOccurrences = function (arr) {
  var tracker = {};

  for (let i = 0; i < arr.length; i++) {
    if (tracker[arr[i]] === undefined) {
      tracker[arr[i]] = 1;
    } else {
      tracker[arr[i]]++;
    }
  }

  let seen = new Set();

  for (let key in tracker) {
    if (seen.size === seen.add(tracker[key]).size) {
      return false;
    }
  }

  return true;
};
