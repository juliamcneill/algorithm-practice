/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function (arr) {
  // Input: an array of numbers
  var storage = {};
  // iterate through array
  for (var i = 0; i < arr.length; i++) {
    // for each number, add to an object while updating its occurence
    if (storage[arr[i]] === undefined) {
      storage[arr[i]] = 1;
    } else {
      storage[arr[i]]++;
    }
  }
  // then start to iterate through the array again
  for (var i = 0; i < arr.length; i++) {
    // for each number, check if it occurs an even number of times using the object
    if (storage[arr[i]] % 2 == 0) {
      // return first number
      return arr[i];
    }
  }

  // handle case in which there are no even-occurrences
  return null;
  // Output: the first number that occurs an even number of times
};

evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]); // 4
