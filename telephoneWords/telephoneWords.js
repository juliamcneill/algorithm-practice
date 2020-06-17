/*
 * Each number key on a standard phone keypad has a set of Latin letters written on
 * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
 *
 * Businesses often try to come up with clever ways to spell out their phone number
 * in advertisements to make it more memorable. But there are a lot of combinations!
 *
 * Write a function that takes up to four digits of a phone number, and
 * returns a list of all of the words that can be written on the phone with
 * that number. (You should return all permutations, not only English words.)
 *
 * Example:
 *   telephoneWords('2745');
 *   => ['APGJ',
 *        'APGK',
 *        'APGL',
 *        ..., // many many more of these
 *        'CSIL']
 *
 * Tips:
 *   - Phone numbers are strings! (A phone number can start with a zero.)
 *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
 *   - Don't return every combination of those digits in any order, just the order given.
 *
 *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
 *  Why not filter your results to only return words contained in that file?
 *
 */

var phoneDigitsToLetters = {
  0: "0",
  1: "1",
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

var telephoneWords = function (digitString) {
  // Input: a string with up to four numbers
  // set up a results array
  var results = [];
  // set up an inner recursive function to keep track of each permutation
  function createPermutations(temp, digitString, phoneDigitsToLetters, index) {
    // for the number at given index, find the value for that key in phoneDigitsToLetters
    // for each index in the value
    for (var char of phoneDigitsToLetters[digitString[index]]) {
      // add each option onto a temp string
      temp += char;
      // if the length of the string is equal to the digitString
      if (temp.length === digitString.length) {
        // add to results
        results.push(temp);
        // if not
      } else {
        // recursively call the function again to deal with the next number
        createPermutations(temp, digitString, phoneDigitsToLetters, index + 1);
      }
      temp = temp.substring(0, temp.length - 1);
    }
  }
  // call the recursive function
  createPermutations("", digitString, phoneDigitsToLetters, 0);

  // return the results array
  return results;
  // Output: an array of string permutations
};

telephoneWords("2745");
