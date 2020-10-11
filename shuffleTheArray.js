// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
  var temp = [];

  for (let i = 0; i < n; i++) {
    temp.push(nums[i], nums[i + n]);
  }

  return temp;
};
