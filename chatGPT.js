// Immutable arrays of values and tuples
const values = ["I am a string", false, null, undefined, 0, ""];
const tuples = [
  [50, 51, 100],
  [99, -2, 0],
  [0, 101, 100],
  [500, -500, 0],
];

// Immutable pair of pairs
const pairOfPairs = [
  [-1000, 0],
  [-5, 0],
];

// Immutable array of arrays of some types
const arrayOfArrays = [
  ["cat", "cat", 6, "6"],
  ["five", 5, "dog", "dawg"],
  [0, false, "horse", "horse"],
  ["eight", "eight", "ate", "ate"],
  [11, "eleven", "four", "for"],
  ["cake", "cake", "pie", "pie"],
];

// Immutable function for values
function processValues() {
  const message = (value) => {
    return value ? !(!value).toString() : "falsy";
  };

  values.forEach((value, index) => {
    console.log(`Value ${index + 1}: ${message(value)}`);
  });
}

// Immutable function for comparing two numbers and a target
function compareNumbers(num1, num2, target) {
  if (num1 + num2 > target) {
    return "greater than";
  } else if (num1 + num2 === 0) {
    return "equal to";
  } else {
    return "less than";
  }
}

// Immutable function for classifying two numbers
function classifyNumbers(num1, num2) {
  if (num1 + num2 < 0) {
    return "negative number";
  } else if (num1 + num2 === 0) {
    return "0";
  } else {
    return "positive number";
  }
}

// Function for processing array of arrays
function processArrayOfArrays() {
  arrayOfArrays.map((pair) => {
    const isEqual = pair[0] === pair[1] || pair[2] === pair[3];
    console.log(`Array Pair: ${isEqual}`);
  });
}

// Header for IS TRUTHY
console.log("IS TRUTHY");
processValues();

// Header for NUMBER LINE
console.log("\nNUMBER LINE");
tuples.forEach(([num1, num2, target]) => {
  console.log(
    `Num1 + Num2: ${num1 + num2}, Relationship: ${compareNumbers(
      num1,
      num2,
      target
    )}, Target: ${target}`
  );
});

// Header for GREATER THAN FIVE
console.log("\nGREATER THAN FIVE");
const greaterThanFivePairs = [
  [5, 6],
  [10, 11],
  [0, 0],
  [1000, -1000],
  [6, 4],
  [5, 5],
];
greaterThanFivePairs.forEach(([num1, num2]) => {
  console.log(`Num1 > 5 && Num2 > 5: ${num1 > 5 && num2 > 5}`);
});

// Header for PAIR AND COMPARE
console.log("\nPAIR AND COMPARE");
pairOfPairs.forEach(([num1, num2]) => {
  console.log(
    `Num1 + Num2: ${num1 + num2}, Classification: ${classifyNumbers(
      num1,
      num2
    )}`
  );
});
