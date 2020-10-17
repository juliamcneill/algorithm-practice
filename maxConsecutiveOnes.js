// Given a binary array, find the maximum number of consecutive 1s in this array.

var findMaxConsecutiveOnes = function (nums) {
  var max = 0;
  var temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++;
    } else {
      temp = 0;
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
};
