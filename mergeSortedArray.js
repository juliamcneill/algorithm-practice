// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively.

// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);

  var i = 0;
  var j = 0;

  while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else {
      i++;
    }
  }
};
