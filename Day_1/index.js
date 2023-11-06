// 1. Print all even numbers from 0 – 10

// Solution:

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  

// 2.  Print a table containing multiplication tables using javascript

// Solution:

function multiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
      let row = '';
      for (let j = 1; j <= size; j++) {
        row += (i * j) + '\t';
      }
      console.log(row);
    }
  }
  
  // To display a multiplication table of size 10, call the function with 10 as an argument:
  multiplicationTable(10);
  