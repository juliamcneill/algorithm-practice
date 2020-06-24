/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function (array) {
  // Input: unsorted array

  var test = {};
  // check if array can be sorted based on whether it includes unique values
  // if it cannot, return the array as it is
  for (let i = 0; i < array.length; i++) {
    test[array[i]] = true;
  }
  if (Object.keys(test).length <= 1) {
    return array;
  }

  // assign a random value in the array to be the pivot
  var pivot = array[Math.floor(Math.random() * array.length)];
  let higher = [];
  let lower = [];
  // for each value in the array
  for (let i = 0; i < array.length; i++) {
    // sort that value into the larger or smaller array
    if (array[i] >= pivot) {
      higher.push(array[i]);
    } else {
      lower.push(array[i]);
    }
  }

  // returning the result of this to the next function up in the
  // recursive stack, or to the text
  return splitArray(lower).concat(splitArray(higher));
  // Output: sorted array
};

quicksort([4, 1, 8, 4, 9, 10, 1, 4]);
