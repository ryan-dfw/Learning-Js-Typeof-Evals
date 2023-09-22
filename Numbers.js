const num1 = 50;
const num2 = 51;
const target = 100;

function compEval(num1, num2, target) {
  return num1 + num2 > target
    ? "greater than"
    : num1 + num2 === target
    ? "equal to"
    : "less than";
}

console.log(`${num1} + ${num2} is ${compEval(num1, num2, target)} ${target}`);
