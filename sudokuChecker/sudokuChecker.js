/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function sudokuChecker(board) {
  // Your code here.
  // Input: a string representing the sudoku board: nine parts with \n between each part
  // split the board into an array of rows

  // consider checking for sums before duplicates to save time
  var sum;

  // split the board into rows
  var rows = board.split("\n");

  // for each row, check that there is each number only once
  for (var row in rows) {
    sum = 0;
    for (var i = 0; i < row.length; i++) {
      sum += row[i];
    }
    if (sum !== 45) {
      return "invalid";
    }
  }
  // for each column, check that there is each number only once
  for (var i = 0; i < row.length; i++) {
    var newColumn = [];
    for (var j = 0; i < row.length; i++) {
      newColumn.push(row[j][i]);
    }
    sum = 0;
    for (var i = 0; i < newColumn.length; i++) {
      sum += newColumn[i];
    }
    if (sum !== 45) {
      return "invalid";
    }
  }

  // for each square, check that there is each number only once

  return "solved";
  // Output: a string, either 'solved' or 'invalid'
}

sudokuChecker(
  "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429"
);
