/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 */

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
 */

// Feel free to add helper functions if needed.

var bubbleSort = function (array) {
  // Input: an unsorted array
  var stillSwapping = true;
  // loop through the length of the array
  if (stillSwapping) {
    stillSwapping = false;
    // look at the first index of the array each time
    // iterate through the rest of the array, comparing this number to each other number
    for (let i = 0; i < array.length - 1; i++) {
      // when the first index is greater than a number, it places itself after this number
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        stillSwapping = true;
      }
    }
  }
  // Output: a sorted array
  return array;
};

bubbleSort([2, 1, 3]); // [1, 2, 3]
