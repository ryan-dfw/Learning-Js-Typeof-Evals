const truthyEval = (paramArray) =>
  paramArray.map((pair) =>
    console.log(pair[0] === pair[1] || pair[2] === pair[3])
  );

const paramArray = [
  ["cat", "cat", 6, "6"],
  ["five", 5, "dog", "dawg"],
  [0, false, "horse", "horse"],
  ["eight", "eight", "ate", "ate"],
  [11, "eleven", "four", "for"],
  ["cake", "cake", "pie", "pie"],
];

truthyEval(paramArray);
