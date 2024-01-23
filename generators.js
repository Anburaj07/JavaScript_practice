function* simpleGenerator() {
    console.log('Start');
    yield 1;
    console.log('After first yield');
    yield 2;
    console.log('End');
  }
  
  // Creating a generator object
  const generator = simpleGenerator();
  
  // Executing the generator
  console.log(generator.next()); // Logs: Start, { value: 1, done: false }
  console.log(generator.next()); // Logs: After first yield, { value: 2, done: false }
  console.log(generator.next()); // Logs: End, { value: undefined, done: true }