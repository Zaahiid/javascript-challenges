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
  