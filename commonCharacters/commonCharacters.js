/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// Assumption: Uppercase and Lowercase letters are handled as different characters.
var commonCharacters = function (string1, string2) {
  // Input: two strings of characters

  // Create tracker, results string, and missing variable
  var tracker = {};
  var results = "";
  let missing;

  // Iterate through string1
  for (let i = 0; i < string1.length; i++) {
    // Check if character is found in results object
    if (tracker[string1[i]] !== true) {
      missing = false;
      // If not, check if found in all other strings, iterating through arguments and using indexOf
      for (let j = 1; j < arguments.length; j++) {
        if (arguments[j].indexOf(string1[i]) === -1) {
          missing = true;
          continue;
        }
      }
      // If character shows up in all other strings, add to tracker and results string
      if (missing === false) {
        tracker[string1[i]] = true;
        results += string1[i];
      }
    }
  }

  // Return results string
  return results;
  // Output: a string containing the common characters
};

commonCharacters("acexivou", "aegihobu"); // 'aeiou'
commonCharacters("Hello, my name is Julia!", "My name is Julia!"); // 'el mynaisJu!'
