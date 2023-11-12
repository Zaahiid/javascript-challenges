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
  