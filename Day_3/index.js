// Create a function that reverses an array

function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  console.log('Original Array:', originalArray);
  
  const reversedArray = reverseArray(originalArray);
  console.log('Reversed Array:', reversedArray);
  

//Sort an array from lowest to highest

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Example usage:
  const unsortedArray = [5, 3, 9, 1, 7];
  console.log('Unsorted Array:', unsortedArray);
  
  const sortedArray = sortArray(unsortedArray);
  console.log('Sorted Array (Lowest to Highest):', sortedArray);
  

//Create a function that filters out negative numbers


function filterOutNegativeNumbers(arr) {
    return arr.filter(number => number >= 0);
  }
  
  // Example usage:
  const originalArr = [5, -3, 9, -1, 7, -10, 2];
  console.log('Original Array:', originalArr);
  
  const positiveNumbers = filterOutNegativeNumbers(originalArr);
  console.log('Filtered Positive Numbers:', positiveNumbers);
  