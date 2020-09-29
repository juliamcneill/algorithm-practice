// Given an integer, write a function to determine if it is a power of three.

var isPowerOfThree = function (n) {
  if (n === 0 || n === 2) {
    return false;
  }

  while (n !== 1) {
    if (n % 3 !== 0) {
      return false;
    }

    n = n / 3;
  }

  return true;
};
