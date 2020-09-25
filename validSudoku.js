// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

var isValidSudoku = function (board) {
  let temp = {};
  let newColumn = [];
  let newBox = [];

  for (let i = 0; i < board.length; i++) {
    temp = {};
    for (let j = 0; j < board[i].length; j++) {
      if (temp[board[i][j]] !== undefined && board[i][j] !== '.') {
        return false;
      } else {
        temp[board[i][j]] = true;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    newColumn = [];
    temp = {};

    for (let j = 0; j < board.length; j++) {
      newColumn.push(board[j][i]);
    }

    for (let j = 0; j < newColumn.length; j++) {
      if (temp[newColumn[j]] !== undefined && newColumn[j] !== '.') {
        return false;
      } else {
        temp[newColumn[j]] = true;
      }
    }
  }

  for (var i = 0; i < board.length; i += 3) {
    for (var j = 0; j < board.length; j += 3) {
      newBox = [];
      temp = {};

      for (var k = 0; k < board.length / 3; k++) {
        newBox.push(board[i][k + j]);
        newBox.push(board[i + 1][k + j]);
        newBox.push(board[i + 2][k + j]);
      }

      for (var k = 0; k < newBox.length; k++) {
        if (temp[newBox[k]] !== undefined && newBox[k] !== '.') {
          return false;
        } else {
          temp[newBox[k]] = true;
        }
      }
    }
  }

  return true;
};
