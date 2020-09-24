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

// this function still has a mistake in which the last prime in 100 (97) doesn't
// show up in the results
var primeSieve = function (start, end) {
  // Input: a starting and ending value, inclusive
  var array = [];
  var results = [];

  // create an array of true values indexed by start to end integers
  for (var i = start; i <= end; i++) {
    array.push(true);
  }

  // for each number from 2 to the square root of the end
  for (var i = 2; i <= Math.sqrt(end); i++) {
    // if the number is marked as prime
    if (array[i]) {
      // mark its multiples as not prime
      for (var j = i * i; j <= end; j += i) {
        array[j] = false;
      }
    }
  }

  // push all of the still true indexes to a new array
  for (var i = 2; i < end; i++) {
    if (array[i]) {
      results.push(i);
    }
  }

  return results;
  // Output: an array of the prime numbers between the input values, inclusive
};

primeSieve(10, 100);
