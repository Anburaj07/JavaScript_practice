function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
      console.log('Not the same!');
    } else {
      console.log('They are the same!');
    }
  }
  
  const person = { name: 'Lydia' };
  
  // compareMembers(person);

  const obj = {};

const key = "proto";
obj[key] = 13;

// console.log(obj[key]); // ???

let x = 5;

function foo() {
  console.log(x);
}

foo();

 x = 10;
