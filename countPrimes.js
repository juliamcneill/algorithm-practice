// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function (n) {
  var counter = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      counter++;
    }
  }

  return counter;
};

var isPrime = function (n) {
  for (let i = 2; i <= n ** (1 / 2); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
