// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function (nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length - k));
};
