const fiveTest = (values) => {
  values.forEach((pair) => console.log(pair[0] >= 5 && pair[1] >= 5));
};

fiveTest([
  [5, 6],
  [10, 11],
  [0, 0],
  [1000, -1000],
  [6, 4],
  [5, 5],
]);
