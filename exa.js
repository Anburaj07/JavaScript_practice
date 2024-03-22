const x = 1;
// console.log(++x === x++);

const obj = { a: 10, b: 20 };
// console.log('a' in obj, 'c' in obj);

// const arr = [1, 2, 3];
// console.log(arr[10]);

const arr = [1, 2, 3];
console.log(arr instanceof Array);

// console.log(0.1 + 0.2 === 0.3); 

// const func = () => console.log(this);
// func();

const y = 1;
function foo() {
    console.log(y);
    const y = 2;
}
// foo();

// console.log(+'10' + 1);

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

console.log(Math.max());