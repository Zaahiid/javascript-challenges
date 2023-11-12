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
  