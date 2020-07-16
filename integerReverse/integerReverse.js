/*
 *
 * Integer Reverse
 *
 * Given a positive integer, return its digits reversed.
 *
 * - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
 * - Only use integers and math in your solution.
 *
 */

function reverseInteger(number) {
  // set a starting result
  var result = 0;

  function findModulo(number) {
    // continue the recursion until the given number hits 0
    if (number !== 0) {
      // multiple the result by 10
      result *= 10;
      // add the last digit on the number to the end of the result
      result += number % 10;

      // call this function again on the new number with the last digit taken off
      findModulo((number - (number % 10)) / 10);
    }
  }

  // start the inner recursive loop
  findModulo(number);

  // return the final result
  return result;
}

reverseInteger(123); // 321
