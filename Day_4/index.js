// 8. Remove the spaces found in a string

function removeSpaces(str) {
    return str.replace(/\s/g, '');
  }
  
  //Example Usage:
  const stringWithSpaces = "This is an example string with spaces";
  console.log('String with spaces:', stringWithSpaces);
  
  const stringWithoutSpaces = removeSpaces(stringWithSpaces);
  console.log('String without spaces:', stringWithoutSpaces);
  

//9. Return a Boolean if a number is divisible by 10

function isDivisibleByTen(number) {
    return number % 10 === 0;
  }
  
  // Example usage:
  const num1 = 30;
  console.log(`${num1} is divisible by 10: ${isDivisibleByTen(num1)}`);
  
  const num2 = 17;
  console.log(`${num2} is divisible by 10: ${isDivisibleByTen(num2)}`);



//10. Return the number of vowels in a string

function countVowels(str) {
    const vowelRegex = /[aeiou]/gi; // Regular expression to match vowels (both lowercase and uppercase)
    const vowels = str.match(vowelRegex);
    return vowels ? vowels.length : 0;
  }
  
  // Example usage:
  const sentence = "This is a sample sentence to count vowels.";
  const vowelCount = countVowels(sentence);
  console.log(`The number of vowels in the sentence is: ${vowelCount}`);
  
  