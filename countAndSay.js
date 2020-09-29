// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

var countAndSay = function (n) {
  var inner = function (times, string) {
    var count;
    var num;
    var temp = '';

    if (times === n) {
      return string;
    }

    for (let i = 0; i < string.length; ) {
      count = 0;
      num = string[i];

      while (string[i] === num) {
        count++;
        i++;
      }

      temp += count;
      temp += num;
    }

    times++;
    return inner(times, temp);
  };

  return inner(1, '1');
};
