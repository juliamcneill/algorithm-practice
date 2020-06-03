/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

var rockPaperScissors = function (numRounds) {
  // Input: none
  // set up an array of all possible plays
  var options = ["R", "P", "S"];
  // set up a temporary string to build out combinations
  var temp = "";
  // set up an empty results array
  var results = [];

  // find all combinations of R, P, and S, non-repetitive and location sensitive
  // to do this, set up a recursive function that adds in each possible letter for each character
  function combinations(temp) {
    // if the length of a string reaches 3, add it to the results array
    if (temp.length === numRounds) {
      return results.push(temp);
    }
    // for each potential play, add to the algorithm and recall the function
    options.forEach((option) => {
      combinations(temp + option);
    });
  }

  // start the combinations function
  combinations(temp);

  // return the array of results
  return results;
  // Output: an array with strings, each three characters long, one for every combination of R, P, and S
};

rockPaperScissors(5);
