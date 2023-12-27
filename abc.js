for(var i=0; i<5; i++) {
}
console.log(i);

let arr=[3,5,1,2,3,4,5];

// let max=-Infinity;
// let sec_grt=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }

// for(let i=0;i<arr.length;i++){
//     if(sec_grt<arr[i] && sec_grt<max){
//         sec_grt=arr[i];
//     }
// }
function findSecondLargest(arr) {
    if (arr.length < 2) {
      return "Array should have at least two elements";
    }
  
    let firstLargest = arr[0];
    let secondLargest = arr[1];
  
    if (secondLargest > firstLargest) {
      [firstLargest, secondLargest] = [secondLargest, firstLargest];
    }
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  const numbers = [10, 5, 8, 12, 7];
  const secondLargestNumber = findSecondLargest(numbers);
  console.log("Second Largest Number:", secondLargestNumber);
// console.log(max,sec_grt)

const x=34;
// console.log(x)