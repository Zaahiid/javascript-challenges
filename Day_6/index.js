// 3. Longest Substring Without Repeating Characters
// Medium  24%

// Given a string, find the length of the longest substring without repeating
// characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the
// answer must be a substring, "pwke" is a subsequence and not a substring.

// Given "dvdf", the answer is "vdf", which the length is 3.

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};
  
    for (let end = 0; end < s.length; end++) {
      const currentChar = s[end];
  
      if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
        start = charIndexMap[currentChar] + 1;
      }
  
      charIndexMap[currentChar] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  // Examples:
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
  console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
  console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3
  