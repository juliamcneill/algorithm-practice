/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  // Input: an array of numbers
  // without negatives, use the highest three integers
  // with negatives, use the highest three integers, but an even number should be negative
  // combinations: largest three positives (-1 * -2 * -3)
  //               largest one positive and largest two negatives (- 1 * 0 * 1)
  array.sort(function (a, b) {
    return a - b;
  });
  var n = array.length;

  if (n < 3) {
    return "String is not long enough to find largest product of three.";
  } else {
    var product = Math.max(
      array[n - 1] * array[n - 2] * array[n - 3],
      array[n - 1] * array[0] * array[1]
    );

    // Output: the highest product integer of three of those numbers
    return product;
  }
};

largestProductOfThree([-31, 41, 34, -37, -17, 29]); // 47027
