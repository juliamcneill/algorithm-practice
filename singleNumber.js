// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums
        .slice(0, i)
        .concat(nums.slice(i + 1))
        .indexOf(nums[i]) === -1
    ) {
      return nums[i];
    }
  }
};
