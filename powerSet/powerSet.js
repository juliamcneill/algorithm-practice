/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function (str) {
  // Input: a string
  var tracker = {};
  var results = [];
  var temp = "";

  // push an empty string to the results
  results.push(temp);

  // use recursion to add on each new character to the string and return
  function allCombinations(temp, str) {
    // for all available characters
    for (let i = 0; i < str.length; i++) {
      // only continue if the character is already in the string
      if (temp.indexOf(str[i]) === -1) {
        // add the character to the string
        temp += str[i];
        // if this combination already exists, end here
        if (tracker[temp]) {
          return;
          // if this is a new combination
        } else {
          // add it to the tracker
          tracker[temp] = true;
          // add it to the results
          results.push(temp);
          // recursively call the function with the str starting at the next letter
          allCombinations(temp, str.slice(i + 1));
        }
      }
      // take off the letter just added and restart the loop to add a new letter
      temp = temp.slice(0, -1);
    }
  }

  // call the recursive function
  allCombinations(temp, str);

  return results;
  // Output: an array of strings that consist of all possible subsets of the original string
};

// test out the function
powerSet("jump"); // ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
