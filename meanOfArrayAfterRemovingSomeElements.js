// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

var trimMean = function (arr) {
  arr.sort((a, b) => a - b);
  var cut = Math.ceil(arr.length / 20);

  var sum = 0;
  var count = 0;

  for (let i = cut; i < arr.length - cut; i++) {
    count++;
    sum += arr[i];
  }

  return sum / count;
};
