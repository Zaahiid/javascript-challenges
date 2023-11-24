// 18. 4Sum
// Medium   27%

// Given an array S of n integers, are there elements a, b, c, and d in S such
// that a + b + c + d = target? Find all unique quadruplets in the array which
// gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]


function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicate elements
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicate elements
        }
  
        let left = j + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
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
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  console.log(fourSum(nums, target));
  // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  

  // 19. Remove Nth Node From End of List
// Medium   33%

// Given a linked list, remove the nth node from the end of list and return its
// head.

// For example,

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes
// 1->2->3->5.

// Note:
// Given n will always be valid.
//   Try to do this in one pass.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let fast = dummy;
    let slow = dummy;
  
    // Move fast pointer n nodes ahead
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }
  
    // Move both pointers until fast reaches the end
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  
    // Remove the nth node from the end
    slow.next = slow.next.next;
  
    return dummy.next;
  }
  
  // Example:
  const linkedList = new ListNode(1);
  linkedList.next = new ListNode(2);
  linkedList.next.next = new ListNode(3);
  linkedList.next.next.next = new ListNode(4);
  linkedList.next.next.next.next = new ListNode(5);
  
  const n = 2;
  const updatedList = removeNthFromEnd(linkedList, n);
  
  // Print the updated list
  let current = updatedList;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  