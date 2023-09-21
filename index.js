const evaluate = (values) =>
  values.forEach((value) =>
    console.log(value ? !!value : `the ${typeof value} is falsy`)
  );

evaluate(["string", false, null, undefined, 0, ""]);
