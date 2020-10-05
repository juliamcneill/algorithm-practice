// Shuffle a set of numbers without duplicates.

var Solution = function (nums) {
  this.nums = nums;
  this.original = [];
  for (var i = 0; i < nums.length; i++) {
    this.original.push(nums[i]);
  }
};

Solution.prototype.reset = function () {
  return this.original;
};

Solution.prototype.shuffle = function () {
  var randomIndex;
  var temp;
  var currentIndex = this.nums.length;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = this.nums[currentIndex];
    this.nums[currentIndex] = this.nums[randomIndex];
    this.nums[randomIndex] = temp;
  }

  return this.nums;
};
