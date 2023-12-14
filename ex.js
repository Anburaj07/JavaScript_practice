function getName(name) {
    const hasName = !!name;
    console.log('hasName:', hasName)
  }

//   getName('anbu')

// console.log('I want pizza'[0]);

function sum(num1, num2 = num1) {
    console.log(num1 + num2);
  }
  
  sum(12);