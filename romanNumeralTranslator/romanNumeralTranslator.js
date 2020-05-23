
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
  // Input: a romanNumeral in string format
  var result = 0;
  // iterate through each character in the string
  for (var i = 0; i < romanNumeral.length; i++) {
    // compare the character's value to the next character's value
    // if its value is lower than the next character
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      // subtract the two values and add the results to the string
      result += DIGIT_VALUES[romanNumeral[i + 1]] - DIGIT_VALUES[romanNumeral[i]];
      // increment an extra i
      i++;
      // if its value is higher than or equal to the next character
    } else {
      // add the value to the string
      result += DIGIT_VALUES[romanNumeral[i]]
    }
  }
  // Output: an integer version of that romanNumeral
  return result;
};

translateRomanNumeral("MDCXLVII") // 1647
