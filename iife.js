(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();

  function print1(){
    return console.log("Hello")
  }

  function print2(x){
    return x;
  }

  console.log(print1()&&print2(4));