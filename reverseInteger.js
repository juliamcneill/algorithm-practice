// Given a 32-bit signed integer, reverse digits of an integer.

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].

// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function (x) {
  const limit = 2147483647;
  var s = x.toString();
  var negative = false;

  if (s[0] === '-') {
    negative = true;
    s = s.substring(1);
  }

  var r = s.split('').reverse().join('');

  if (r === '0') {
    return 0;
  }

  while (r[0] === '0') {
    r = r.substring(1);
  }

  if (negative === true) {
    return parseInt(r) > limit ? 0 : parseInt(r) * -1;
  } else {
    return parseInt(r) > limit ? 0 : parseInt(r);
  }
};
