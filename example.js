function fun(name){
    this.name=name;
    this.printName=function(){
        return `Hi ${this.name}`
    }
}
let ex1= new fun("Blessmi")
// console.log('ex1:', ex1)

// console.log(ex1.printName())

let arr=[1,3,4,6,7,3,8,9];
let obj={}
// for(let item of arr){
//     if(item%2!=0){
//         obj[item]='odd'
//     }
// }
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        obj[arr[i]]=i
    }
}
console.log(obj)
