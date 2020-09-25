// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function (nums) {
  var length = nums.length;

  for (let i = length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};
