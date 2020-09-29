// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.

// Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Only the space character ' ' is considered as whitespace character.

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

var myAtoi = function (str) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  var negative = false;
  var result = 0;

  var i = 0;

  while (i < str.length && str[i] === ' ') {
    i++;
  }

  if (i < str.length && str[i] === '+') {
    i++;
  } else if (i < str.length && str[i] === '-') {
    negative = true;
    i++;
  }

  while (i < str.length && numbers.includes(str[i])) {
    if (result > 2147483647 / 10 || result > (2147483647 - str[i]) / 10) {
      return negative === false ? 2147483647 : -2147483648;
    } else {
      result = result * 10 + str[i] * 1;
      i++;
    }
  }

  return negative === false ? result : result * -1;
};
