const { firstName: myName } = { firstName: 'Lydia' };

// console.log(myName);

function sayHi(name='Raja') {
    return `Hi there, ${name}`;
  }
  
  // console.log(sayHi());
  // const person = {
  //   name: 'Lydia',
  //   age: 21,
  // };
// console.log(Object.entries(person))  
// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y);
// }

// let obj={
//   name:'a',
//   age:251,
//  address:{
//   doorno:3,
//   city:"mdu"
//  }
// }
// let st=[]
// for(key in obj){
//   st.push(key)
// }
// console.log(st)

const person = {
  name: "blessmi",
  age: 22,
  address: {
    streetname: "ghdfychjdg",
    mobileno: 123456789
  },
  fathername: "Kumaradhas"
};

// Function to recursively convert keys to uppercase
function convertKeysToUppercase(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = key.toUpperCase();
      newObj[newKey] =
        typeof obj[key] === "object" && obj[key] !== null
          ? convertKeysToUppercase(obj[key])
          : obj[key];
    }
  }
  return newObj;
}

// Convert keys to uppercase
const personUppercase = convertKeysToUppercase(person);

// Output the result
console.log(personUppercase);