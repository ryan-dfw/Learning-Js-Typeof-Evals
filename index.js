function evaluate(value) {
  console.log(value ? !!value : "the " + typeof value + " is falsy");
}

evaluate("string");
evaluate(false);
evaluate(null);
evaluate(undefined);
evaluate(0);
evaluate("");
