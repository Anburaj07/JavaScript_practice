function sumValues(x, y, z) {
    return x + y + z;
  }

//   console.log(sumValues(...[1,2,3]))

const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);

//By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we're assigning the value "💀" to spookyItems[3]. This means that we're modifying the spookyItems array, we're adding the "💀" to it. When logging spookyItems, ["👻", "🎃", "🕸", "💀"] gets logged.