function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

// getAge();

const sum = eval("10*10+5");
// console.log('sum:', sum)

function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
