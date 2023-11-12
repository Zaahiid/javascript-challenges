// Longest Palindromic Substring
// Medium  25%

// Given a string s, find the longest palindromic substring in s. You may assume
// that the maximum length of s is 1000.

// Example:
// Input: "babad"
// Output: "bab"

// Note: "aba" is also a valid answer.

// Example:
// Input: "cbbd"
// Output: "bb"

function longestPalindrome(s) {
    if (s.length <= 1) {
      return s;
    }
  
    let start = 0;
    let maxLength = 1;
  
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          start = left;
          maxLength = currentLength;
        }
        left--;
        right++;
      }
    }
  
    for (let i = 0; i < s.length; i++) {
      expandAroundCenter(i, i);       // For odd-length palindromes
      expandAroundCenter(i, i + 1);   // For even-length palindromes
    }
  
    return s.substring(start, start + maxLength);
  }
  
  // Examples:
  console.log(longestPalindrome("babad"));   // Output: "bab" or "aba"
  console.log(longestPalindrome("cbbd"));     // Output: "bb"
  

  // 6. ZigZag Conversion
// Medium  26%

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
// of rows like this: (you may want to display this pattern in a fixed font for
// better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a
// number of rows:

// string convert(string text, int nRows);

// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

function convert(text, numRows) {
    if (numRows === 1 || numRows >= text.length) {
      return text;
    }
  
    const rows = Array.from({ length: numRows }, () => '');
    let direction = 1; // 1 for down, -1 for up
    let currentRow = 0;
  
    for (let char of text) {
      rows[currentRow] += char;
      currentRow += direction;
  
      if (currentRow === 0 || currentRow === numRows - 1) {
        direction *= -1; // Change direction when reaching the top or bottom row
      }
    }
  
    return rows.join('');
  }
  
  // Example:
  console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
  

  // 7. Reverse Integer
// Easy  24%

// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.
//   Have you thought about this?

// Here are some good questions to ask before coding. Bonus points for you if
// you have already thought through this!

// If the integer's last digit is 0, what should the output be? ie, cases such
// as 10, 100.

// Did you notice that the reversed integer might overflow? Assume the input is
// a 32-bit integer, then the reverse of 1000000003 overflows. How should you
// handle such cases?

// For the purpose of this problem, assume that your function returns 0 when the
// reversed integer overflows.

// Note: The input is assumed to be a 32-bit signed integer. Your function
// should return 0 when the reversed integer overflows.

function reverse(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
  
    let reversed = 0;
  
    while (x !== 0) {
      const pop = x % 10;
      x = Math.trunc(x / 10);
  
      if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && pop > 7)) {
        return 0; // Overflow, return 0
      }
  
      if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && pop < -8)) {
        return 0; // Overflow, return 0
      }
  
      reversed = reversed * 10 + pop;
    }
  
    return reversed;
  }
  
  // Examples:
  console.log(reverse(123));   // Output: 321
  console.log(reverse(-123));  // Output: -321
  console.log(reverse(120));   // Output: 21 (trailing zero is removed)
  console.log(reverse(1534236469));  // Output: 0 (overflow, returns 0)
  