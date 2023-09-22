const truthTest = (values) =>
  values
    .map((value) => (value ? !!value : `the ${typeof value} is falsy`))
    .forEach((message) => console.log(message));

truthTest(["string", false, null, undefined, 0, ""]);
