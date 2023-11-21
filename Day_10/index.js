// 12. Integer to Roman
// Medium   45%

// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

function intToRoman(num) {
    const romanMap = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ];
  
    let result = '';
  
    for (let i = 0; i < romanMap.length; i++) {
      while (num >= romanMap[i].value) {
        result += romanMap[i].symbol;
        num -= romanMap[i].value;
      }
    }
  
    return result;
  }
  
  // Examples:
  console.log(intToRoman(3));    // Output: 'III'
  console.log(intToRoman(58));   // Output: 'LVIII'
  console.log(intToRoman(1994)); // Output: 'MCMXCIV'
  

  // 13. Roman to Integer
// Easy   46%

// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.