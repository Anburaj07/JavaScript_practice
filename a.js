function foo() {
  a = 15;
  console.log(this.a);
}

var a = 10;

const bar = {
  a: "a",
  normal: function () {
    console.log(this.a);
  },
  arrow: () => console.log(this.a),
};

setTimeout(()=>{
    console.log(this.a++) //output
},0)
setTimeout(function() {
    console.log(++this.a) //output
},0)
foo() // output?

const tmpNormal = bar.normal;
const tmpArrow = bar.arrow;
tmpNormal() // output
tmpArrow() // output

