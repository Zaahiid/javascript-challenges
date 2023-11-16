// 10. Regular Expression Matching
// Hard   24%

// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") ? false
// isMatch("aa","aa") ? true
// isMatch("aaa","aa") ? false
// isMatch("aa", "a*") ? true
// isMatch("aa", ".*") ? true
// isMatch("ab", ".*") ? true
// isMatch("aab", "c*a*b") ? true

function isMatch(s, p) {
    const dp = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));
    dp[0][0] = true;
  
    // Handle patterns like 'a*' or '.*' at the beginning
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*' && dp[0][j - 2]) {
        dp[0][j] = true;
      }
    }
  
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= p.length; j++) {
        if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p[j - 1] === '*') {
          dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
        }
      }
    }
  
    return dp[s.length][p.length];
  }
  
  // Examples:
  console.log(isMatch("aa", "a"));       // Output: false
  console.log(isMatch("aa", "aa"));      // Output: true
  console.log(isMatch("aaa", "aa"));     // Output: false
  console.log(isMatch("aa", "a*"));      // Output: true
  console.log(isMatch("aa", ".*"));      // Output: true
  console.log(isMatch("ab", ".*"));      // Output: true
  console.log(isMatch("aab", "c*a*b"));  // Output: true

  // 11. Container With Most Water
// Medium   36%

// Given n non-negative integers a1, a2, ..., an, where each represents a point
// at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
// of line i is at (i, ai) and (i, 0). Find two lines, which together with
// x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;
  
    while (left < right) {
      const h = Math.min(height[left], height[right]);
      const w = right - left;
      const area = h * w;
  
      maxWater = Math.max(maxWater, area);
  
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxWater;
  }
  
  // Example:
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log(maxArea(height));  // Output: 49
  
  