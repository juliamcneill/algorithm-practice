/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function (string) {
  // Input: a string
  // creates tracking object
  var tracking = {};

  // for character in string
  for (var character of string) {
    if (tracking[character]) {
      // if in tracking object, increment count
      tracking[character] += 1;
    } else {
      // if not in tracking object, add to tracking object
      tracking[character] = 1;
    }
  }

  // convert object to array
  var result = Object.entries(tracking);
  // sort array, first by number in index 1, then by name in index 0
  var sorted = result.sort(function (a, b) {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });

  // return result;
  return sorted;
  // Output: an array with a smaller array inside with each letter and its frequency, in the specified order 
};

characterFrequency('miaaiaaippi');

// [
//   ['a', 4],
//   ['i', 4],
//   ['p', 2],
//   ['m', 1]
//  ]