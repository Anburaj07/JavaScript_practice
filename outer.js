// function boo(){
//     num=2;
//     console.log('inside'+num)
// }
// let num=5;
// boo();
// console.log("outside"+num)

function foo() {
    // a = 15
    console.log(this.a)
}
a = 15
// var a = 10

const bar = {
    a: "a",
    normal: function() {
        console.log(this.a)
    },
    arrow: () => console.log(this.a)
}


// setTimeout(()=>{
//     console.log(this.a) //output
//     console.log(this.a++) //output
// },0)
setTimeout(function() {
    // console.log(this.a) //output
    console.log(++this.a) //output
},0)
foo() // output?
const tmpNormal = bar.normal
const tmpArrow = bar.arrow
tmpNormal() // output
bar.arrow()
// tmpArrow() // outputfunction