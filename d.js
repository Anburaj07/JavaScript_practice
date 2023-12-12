const numbers = [1, 2, 3];
numbers[10] = 11;
// console.log(numbers);

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }
  
  const person = { name: 'Sarah' };
  const birthYear = '1997';
  
  // getInfo(person, birthYear);
  
  // console.log(person, birthYear);
  
const num = parseInt("796,4534", 10);
// console.log("num:", num);
