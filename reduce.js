[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
let arr=[1,2,3,4];
let ans=arr.reduce((acc,item,ind)=>{
    console.log('ind:', ind)
    console.log(acc,item)
    return acc+item
})