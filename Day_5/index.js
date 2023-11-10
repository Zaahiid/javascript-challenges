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


// 2. Add Two Numbers
// Medium  27%

// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
  
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      const x = l1 !== null ? l1.val : 0;
      const y = l2 !== null ? l2.val : 0;
      const sum = x + y + carry;
  
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  // Example usage:
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  const result2 = addTwoNumbers(l1, l2);
  
  // Print the result
  let current = result2;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  