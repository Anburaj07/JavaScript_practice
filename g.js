const names = "Lydia";
age = 21;

// console.log(delete names);
// console.log(delete age);

function createIncrementFunctions() {
  var result = [];

  for (var i = 0; i < 5; i++) {
    result[i] = function () {
      return i;
    };
  }

  return result;
}

var incrementFunctions = createIncrementFunctions();
var sum = 0;

for (var i = 0; i < 5; i++) {
  sum += incrementFunctions[i]();
}

console.log(sum);
