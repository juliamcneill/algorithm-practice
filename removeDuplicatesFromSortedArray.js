// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function (nums) {
  var i = 1;

  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};
