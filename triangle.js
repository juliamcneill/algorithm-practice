// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

var minimumTotal = function (triangle) {
  for (var level = triangle.length - 2; level >= 0; level--) {
    for (var i = 0; i < triangle[level].length; i++) {
      triangle[level][i] += Math.min(
        triangle[level + 1][i],
        triangle[level + 1][i + 1]
      );
    }
  }

  return triangle[0][0];
};
