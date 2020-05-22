/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string , the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
    // Input: a string
    palindrome = "";
    string = string.toLowerCase();

    // check that substring is a palindrome
    function isPalindrome(substring) {
        var reversed = substring.split("").reverse().join("");
        if (substring === reversed) {
            console.log("true")
            return true
        } else {
            return false
        }
    }

    // Iterate through the string twice using a nested loop
    for (var i = 0; i < string.length; i++) {
        for (var j = 1; j <= string.length + 1; j++) {
            // take out each substring
            var substring = string.substr(i, j);
            // if the substring is a palindrome and has a greater length than the last palindrome
            if (isPalindrome(substring) && (substring.length > palindrome.length)) {
                // make it the new palindrome
                palindrome = substring;
            }
        }
    }
    // Output: a string containing the longest palindrome in that string
    return palindrome;
};

// testing
longestPalindrome("My dad is a racecar athlete"); // "a racecar a"