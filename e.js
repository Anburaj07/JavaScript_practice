function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
//   console.log('myCar:', myCar)
//   console.log(myCar.make);

(() => {
  let x = (y = 10);
  // console.log('x:', x)
})();

  console.log(typeof x);
  console.log(typeof y);
