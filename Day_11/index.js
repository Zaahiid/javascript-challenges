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

  // 15. 3Sum
// Medium  21%

// Given an array S of n integers, are there elements a, b, c in S such that a +
// b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


function threeSum(nums) {
    const result = [];
  
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        let left = i + 1;
        let right = nums.length - 1;
        const target = -nums[i];
  
        while (left < right) {
          const sum = nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[left], nums[right]]);
            
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
  
            left++;
            right--;
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  // Example:
  const nums = [-1, 0, 1, 2, -1, -4];
  console.log(threeSum(nums));
  // Output: [[-1, -1, 2], [-1, 0, 1]]
  
  