let x = 0;
function increment() {
x++;
console.log(x);
if (x < 3) {
let x = 0;
increment();
}
}
// increment();
    
const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
// const x = arr[i];
// setTimeout(function() {
// console.log(arr[i]);
// }, i * 1000);
// }

function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
    }
    
    // sayHi();

    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i,arr[i]), i*1000);
      }
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i,arr[i]), i*1000);
      }