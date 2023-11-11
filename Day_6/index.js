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
  

  // 4. Median of Two Sorted Arrays
// Hard 22%

// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity
// should be O(log (m+n)).

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
    }
  
    const x = nums1.length;
    const y = nums2.length;
    const totalLength = x + y;
  
    let low = 0;
    let high = x;
  
    while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;
  
      const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
      const minX = partitionX === x ? Number.POSITIVE_INFINITY : nums1[partitionX];
      
      const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
      const minY = partitionY === y ? Number.POSITIVE_INFINITY : nums2[partitionY];
  
      if (maxX <= minY && maxY <= minX) {
        if (totalLength % 2 === 0) {
          return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else {
          return Math.max(maxX, maxY);
        }
      } else if (maxX > minY) {
        high = partitionX - 1;
      } else {
        low = partitionX + 1;
      }
    }
  
    throw new Error("Input arrays are not sorted.");
  }
  
  // Examples:
  console.log(findMedianSortedArrays([1, 3], [2]));      // Output: 2.0
  console.log(findMedianSortedArrays([1, 2], [3, 4]));   // Output: 2.5
  