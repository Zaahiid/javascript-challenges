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
  