const { firstName: myName } = { firstName: 'Lydia' };

// console.log(myName);

function sayHi(name='Raja') {
    return `Hi there, ${name}`;
  }
  
  // console.log(sayHi());
  const person = {
    name: 'Lydia',
    age: 21,
  };
// console.log(Object.entries(person))  
for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}