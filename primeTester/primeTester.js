/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function (n) {
  // Input: an integer
  if (typeof n !== "number" || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // we only need to test the divisors up to n**1/2 to determine if the number will be prime
  for (i = 2; i < n ** (1 / 2); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
  // Output: a boolean that states whether the integer is a prime
};

primeTester(18);

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  // Input: a starting and ending integer
  // Output: an array of prime numbers between the input integers
};
