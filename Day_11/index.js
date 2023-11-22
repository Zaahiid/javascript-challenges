// 14. Longest Common Prefix
// Easy   31%

//Write a function to find the longest common prefix string amongst an array of
//strings.

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return '';
    }
  
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
        if (i === strs[j].length || strs[j][i] !== char) {
          return strs[0].substring(0, i);
        }
      }
    }
  
    return strs[0];
  }
  
  // Examples:
  console.log(longestCommonPrefix(['flower', 'flow', 'flight']));  // Output: 'fl'
  console.log(longestCommonPrefix(['dog', 'racecar', 'car']));      // Output: ''
  