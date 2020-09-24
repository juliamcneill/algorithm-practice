/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function (matrix) {
  // create empty array
  var results = [];

  // set minimum and maximum locations for each edge of the matrix
  var startRowIndex = 0;
  var endRowIndex = matrix.length - 1;
  var startColIndex = 0;
  var endColIndex = matrix[0].length - 1;

  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    // add entire first row
    for (var i = startColIndex; i <= endColIndex; i++) {
      results.push(matrix[startRowIndex][i]);
    }
    // reset minimum row location
    startRowIndex++;

    // add entire last column from second row onwards
    for (var j = startRowIndex; j <= endRowIndex; j++) {
      results.push(matrix[j][endColIndex]);
    }
    // reset maximum column location
    endColIndex--;

    // add entire last row backwards, from second to last integer onwards
    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      // reset maximum row location
      endRowIndex--;
    }

    // add entire first column, from second to last row to second row
    if (startColIndex <= endColIndex) {
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      // reset minimum column location
      startColIndex++;
    }
  }

  return results;
};

spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
