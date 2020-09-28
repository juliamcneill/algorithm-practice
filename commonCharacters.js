// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).
// For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

var commonChars = function (array) {
  let results = [];
  let tracker = {};

  for (let i = 0; i < array[0].length; i++) {
    let missing = false;

    if (tracker[array[0][i]] === undefined) {
      tracker[array[0][i]] = 1;
    } else {
      tracker[array[0][i]] = tracker[array[0][i]] + 1;
    }

    for (let j = 1; j < array.length; j++) {
      if (tracker[array[0][i]] > array[j].split(array[0][i]).length - 1) {
        missing = true;
      }
    }

    if (missing === false) {
      results.push(array[0][i]);
    }
  }

  return results;
};
