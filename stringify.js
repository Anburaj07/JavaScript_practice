const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);

const value = { number: 10 };

// const multiply = (x = { ...value }) => { // 20 20 20 40
    const multiply = (x = value) => { // 20 40 80 160
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);