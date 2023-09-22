const truthArray = ["string", false, null, undefined, 0, ""];
const compArray = [
  [50, 51, 100],
  [99, -2, 0],
  [0, 101, 100],
  [500, -500, 0],
];

const signArray = [
  [-1000, 0],
  [-5, 0],
];

const paramArray = [
  ["cat", "cat", 6, "6"],
  ["five", 5, "dog", "dawg"],
  [0, false, "horse", "horse"],
  ["eight", "eight", "ate", "ate"],
  [11, "eleven", "four", "for"],
  ["cake", "cake", "pie", "pie"],
];

const truthyEval = (values) =>
  values
    .map((value) => (value ? !!value : `the ${typeof value} is falsy`))
    .forEach((message) => console.log(message));

const compEval = (num1, num2, target) =>
  num1 + num2 > target
    ? "greater than"
    : num1 + num2 === target
    ? "equal to"
    : "less than";

const signEval = (num1, num2) =>
  num1 + num2 < 0
    ? "a negative number"
    : num1 + num2 === 0
    ? "0"
    : "a positive number";

const pairEval = (paramArray) =>
  paramArray.map((pair) =>
    console.log(pair[0] === pair[1] || pair[2] === pair[3])
  );

console.log("----------IS TRUTHY----------");
truthyEval(truthArray);

console.log("----------NUMBER LINE----------");
compArray.forEach(([num1, num2, target]) =>
  console.log(`${num1 + num2} is ${compEval(num1, num2, target)} ${target}`)
);

signArray.forEach(([num1, num2]) =>
  console.log(`${num1 + num2} is ${signEval(num1, num2)}`)
);

console.log("----------GREATER THAN FIVE----------");
[
  [5, 6],
  [10, 11],
  [0, 0],
  [1000, -1000],
  [6, 4],
  [5, 5],
].forEach((pair) => console.log(pair[0] >= 5 && pair[1] >= 5));

console.log("----------PAIR AND COMPARE----------");

pairEval(paramArray);
