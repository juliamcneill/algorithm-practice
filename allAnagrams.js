/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function (string) {
  // Input: a string
  // create an empty tracker object to hold all combinations
  var tracker = {};
  // create an empty results array to hold all combinations
  var results = [];
  // create an empty temp string to build out the anagrams
  var temp = "";

  // recursively create the anagrams
  function buildAnagrams(temp, string) {
    // in each loop, iterate through all letters
    for (let i = 0; i < string.length; i++) {
      // if the letter is not already in the temp string, add it
      if (temp.indexOf(string[i]) === -1) {
        temp += string[i];
        // once a temp string reaches the length of the input string
        if (temp.length === string.length) {
          // check if the temp string already exists in the results object
          if (tracker[temp]) {
            return;
            // if not, add it to the results object and results array
          } else {
            tracker[temp] = true;
            results.push(temp);
          }
        }
        // and continue the recursive loop
        buildAnagrams(temp, string.slice(i, i + 1));
        // remove the letter that you just added to try again with a new letter
        temp = temp.slice(0, -1);
      }
    }
  }

  // trigger the first function iteration
  buildAnagrams(temp, string);

  return results;
  // Output: an array with all anagrams of that string
};

allAnagrams("abc"); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
