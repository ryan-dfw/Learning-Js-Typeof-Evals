const valuesArrayA = [
  [50, 51, 100],
  [99, -2, 0],
  [0, 101, 100],
  [500, -500, 0],
];

const valuesArrayB = [
  [-1000, 0],
  [-5, 0],
];

const compEval = (num1, num2, target) =>
  num1 + num2 > target
    ? "greater than"
    : num1 + num2 === target
    ? "equal to"
    : "less than";

const signTest = (num1, num2) =>
  num1 + num2 < 0
    ? "a negative number"
    : num1 + num2 === 0
    ? "0"
    : "a positive number";

valuesArrayA.forEach(([num1, num2, target]) =>
  console.log(`${num1 + num2} is ${compEval(num1, num2, target)} ${target}`)
);

valuesArrayB.forEach(([num1, num2]) =>
  console.log(`${num1 + num2} is ${signTest(num1, num2)}`)
);
