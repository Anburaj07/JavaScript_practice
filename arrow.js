const getList=([x,...y])=>[x,y];
const getUser=user=>({name:user.name,age:user.age});

const list=[1,2,3,4,5];
const user={name:"lydia",age:21}
// console.log(getList(list))
// console.log(getUser(user));

const name = 'Lydia';

console.log(name());