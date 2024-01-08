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
for (let i = 0; i < arr.length; i++) {
const x = arr[i];
setTimeout(function() {
console.log(x);
}, i * 1000);
}