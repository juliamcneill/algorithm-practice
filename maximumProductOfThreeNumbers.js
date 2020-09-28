// Given an integer array, find three numbers whose product is maximum and output the maximum product.

var maximumProduct = function (nums) {
  var sorted = nums.sort((a, b) => b - a);

  var negatives =
    sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[0];
  var positives = sorted[0] * sorted[1] * sorted[2];

  return negatives > positives ? negatives : positives;
};
