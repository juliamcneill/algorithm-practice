/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {
  // Input: an integer with a decimal place

  // stringify the integer
  var stringified = number.toString();

  // if the string doesn't have a decimal, return it over 1
  if (stringified.indexOf(".") === -1) {
    return stringified + "/1";
  }

  // split the string into whole and decimal parts
  var split = stringified.split(".");

  // calculate the unsimplified numerator and denominator of the decimal part
  var decimalNum = split[1];
  var decimalDenom = 10 ** split[1].length;

  // a helper function that uses Euclid's algorithm to calculate the greatest common divisor
  // and then returns the simplified fraction
  function reduce(num, denom) {
    var gcd = function gcd(num, denom) {
      return denom ? gcd(denom, num % denom) : num;
    };
    gcd = gcd(num, denom);
    // divide numerator and denominator by their greatest common divisor
    return [num / gcd, denom / gcd];
  }

  // call the helper function
  var simplifiedParts = reduce(decimalNum, decimalDenom);

  // multiple the whole number with the denominator and add into the numerator,
  // and then return the final string
  return (
    split[0] * simplifiedParts[1] +
    simplifiedParts[0] +
    "/" +
    simplifiedParts[1]
  );

  // Output: a string containing that integer as a fraction
};

toFraction(3.5); // "7/2"
