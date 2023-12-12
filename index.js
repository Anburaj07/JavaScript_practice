var arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => console.log(arr[i], i), i * 1000);
// }

// for(var i=0;i<arr.length;i++){
//     setTimeout(function(i){
//        return function(){
//         console.log(arr[i],i)
//        }
//     }(i),i*1000)
// }

var str = "key,value,pair,javascript";
// var arr = str.split(",");
var obj = {};

// obj[arr[arr.length-1]]={};
// for(let i=arr.length-2;i>=0;i--){
//     obj[arr[i]]={...obj}
//     delete obj[arr[i+1]]
// }
// console.log(obj)

function rec(arr, i = 0, obj = {}) {
  if (i === arr.length) {
    return obj;
  } else {
    return { [arr[i]]: rec(arr, i + 1) };
  }
}

// var rec=(arr,i=0,obj={})=> i==arr.length?obj:{[arr[i]]:rec(arr,i+1)} 
console.log(rec(arr));
