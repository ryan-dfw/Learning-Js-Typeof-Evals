const num1 = 50;
const num2 = 51;
const target = 100;

function compEval(num1, num2, target) {
  const result =
    num1 + num2 > target
      ? "greater than"
      : num1 + num2 === target
      ? "equal to"
      : "less than";
  return result;
}

const result = compEval(num1, num2, target);

console.log(`${num1 + num2} is ${result} ${target}`);
