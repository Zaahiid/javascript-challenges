// 8. String to Integer (atoi)
// Medium  13%

// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge,
// please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given
// input specs). You are responsible to gather all the input requirements up
// front.

// Update (2015-02-10): The signature of the C++ function had been updated. If
// you still see your function signature accepts a const char * argument, please
// click the reload button to reset your code definition.

// spoilers alert... click to show requirements for atoi. Requirements for atoi:

// The function first discards as many whitespace characters as necessary until
// the first non-whitespace character is found. Then, starting from this
// character, takes an optional initial plus or minus sign followed by as many
// numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the
// integral number, which are ignored and have no effect on the behavior of this
// function.

// If the first sequence of non-whitespace characters in str is not a valid
// integral number, or if no such sequence exists because either str is empty or
// it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If the
// correct value is out of the range of representable values, INT_MAX
// (2147483647) or INT_MIN (-2147483648) is returned.


function myAtoi(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
  
    let i = 0;
    let sign = 1;
    let result = 0;
  
    // Skip leading whitespaces
    while (str[i] === ' ') {
      i++;
    }
  
    // Check for an optional sign
    if (str[i] === '+' || str[i] === '-') {
      sign = str[i] === '-' ? -1 : 1;
      i++;
    }
  
    // Parse numerical digits
    while (i < str.length && /\d/.test(str[i])) {
      const digit = parseInt(str[i], 10);
      
      // Check for overflow
      if (result > (INT_MAX - digit) / 10) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }
  
      result = result * 10 + digit;
      i++;
    }
  
    return result * sign;
  }
  
  // Examples:
  console.log(myAtoi("42"));          // Output: 42
  console.log(myAtoi("   -42"));      // Output: -42
  console.log(myAtoi("4193 with words"));  // Output: 4193
  console.log(myAtoi("words and 987"));    // Output: 0 (no valid conversion)
  console.log(myAtoi("-91283472332"));      // Output: -2147483648 (INT_MIN)
  

  // 9. Palindrome Number
// Easy   35%

// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers. Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction
// of using extra space.

// You could also try reversing an integer. However, if you have solved the
// problem "Reverse Integer", you know that the reversed integer might overflow.
// How would you handle such case?

// There is a more generic way of solving this problem.

function isPalindrome(x) {
    // Negative numbers and numbers ending with 0 are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
      return false;
    }
  
    let reversed = 0;
    let original = x;
  
    while (x > 0) {
      const digit = x % 10;
      reversed = reversed * 10 + digit;
      x = Math.floor(x / 10);
    }
  
    return original === reversed;
  }
  
  // Examples:
  console.log(isPalindrome(121));    // Output: true
  console.log(isPalindrome(-121));   // Output: false (negative number)
  console.log(isPalindrome(10));     // Output: false (ends with 0)
  