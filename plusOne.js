// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function (digits) {
  var results = [];

  var asString = (BigInt(digits.join('')) + 1n).toString();

  for (let i = 0; i < asString.length; i++) {
    results.push(asString[i]);
  }

  return results;
};
