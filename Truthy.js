const evaluate = (values) =>
  values
    .map((value) => (value ? !!value : `the ${typeof value} is falsy`))
    .forEach((message) => console.log(message));

evaluate(["string", false, null, undefined, 0, ""]);
