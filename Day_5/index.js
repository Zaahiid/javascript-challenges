// 1. Two Sum
// Easy  35%

// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Solution:

function twoSum(nums, target) {
    const numIndexMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (numIndexMap.hasOwnProperty(complement)) {
        return [numIndexMap[complement], i];
      }
  
      numIndexMap[nums[i]] = i;
    }
  
    // If no solution is found
    return null;
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  
  if (result !== null) {
    console.log(`Indices of the two numbers that add up to ${target}: [${result}]`);
  } else {
    console.log("No solution found.");
  }
  