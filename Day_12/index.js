// 16. 3Sum Closest
// Medium 31% locked:false

// Given an array S of n integers, find three integers in S such that the sum is
// closest to a given number, target. Return the sum of the three integers. You
// may assume that each input would have exactly one solution.

// For example, given array S = {-1 2 1 -4}, and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
  
    let closestSum = Infinity;
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return closestSum;
  }
  
  // Example:
  const nums = [-1, 2, 1, -4];
  const target = 1;
  console.log(threeSumClosest(nums, target));  // Output: 2
  

  // 17. Letter Combinations of a Phone Number
// Medium   35%

// Given a digit string, return all possible letter combinations that the number
// could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given
// below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note: Although the above answer is in lexicographical order, your answer
// could be in any order you want.

function letterCombinations(digits) {
    if (digits.length === 0) {
      return [];
    }
  
    const digitMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
    };
  
    const result = [];
  
    function backtrack(index, current) {
      if (index === digits.length) {
        result.push(current);
        return;
      }
  
      const letters = digitMap[digits[index]];
  
      for (let i = 0; i < letters.length; i++) {
        backtrack(index + 1, current + letters[i]);
      }
    }
  
    backtrack(0, '');
  
    return result;
  }
  
  // Example:
  const digits = '23';
  console.log(letterCombinations(digits));
  // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
  