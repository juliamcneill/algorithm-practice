// Given two arrays, write a function to compute their intersection.

var intersect = function (nums1, nums2) {
  var results = [];
  var index;

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.indexOf(nums1[i]) !== -1) {
      results.push(nums1[i]);
      index = nums2.indexOf(nums1[i]);
      nums2 = nums2.slice(0, index).concat(nums2.slice(index + 1));
    }
  }

  return results;
};
