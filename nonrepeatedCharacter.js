/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // Input: a string of characters
  // for the character at each index, in order
  for (var i = 0; i < string.length; i++) {
    // check if that character exists more than once in the string by finding if it is at another location
    if (string.indexOf(string[i]) == i && string.indexOf(string[i], i + 1) == -1) {
      // if not, return that character
      return string[i];
    }
  }
  // Output: a string of the first non-repeated character
};

firstNonRepeatedCharacter('ABA'); // 'B'
firstNonRepeatedCharacter('AACBDB'); // 'C'
