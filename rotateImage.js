// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

var rotate = function (matrix) {
  var length = matrix.length;
  var temp = [];
  for (let i = 0; i < length; i++) {
    temp = [];
    for (let j = 0; j < length; j++) {
      temp.push(matrix[j][i]);
    }
    matrix.push(temp);
  }

  for (let i = 0; i < length; i++) {
    matrix.shift();
  }

  for (let i = 0; i < length; i++) {
    matrix[i].reverse();
  }
};
