const a = ["string", !1, , 0, ""],
  b = [
    [50, 51, 100],
    [99, -2, 0],
    [0, 101, 100],
    [500, -500, 0],
  ],
  c = [
    [-1e3, 0],
    [-5, 0],
  ],
  d = [
    ["cat", "cat", 6, "6"],
    ["five", 5, "dog", "dawg"],
    [0, !1, "horse", "horse"],
    ["eight", "eight", "ate", "ate"],
    [11, "eleven", "four", "for"],
    ["cake", "cake", "pie", "pie"],
  ],
  e = ($) =>
    $.map(($) => ($ ? !!$ : `the ${typeof $} is falsy`)).forEach(($) =>
      console.log($)
    ),
  i = ($, o, _) =>
    (m = $ + o) > _ ? "greater than" : m === _ ? "equal to" : "less than",
  n = ($, o) =>
    (q = $ + o) < 0 ? "a negative number" : q ? "a positive number" : "0",
  r = ($) => $.map(($) => console.log($[0] === $[1] || $[2] === $[3]));
e(a),
  b.forEach(([$, o, _]) => console.log(`${$ + o} is ${i($, o, _)} ${_}`)),
  c.forEach(([$, o]) => console.log(`${$ + o} is ${n($, o)}`)),
  [
    [5, 6],
    [10, 11],
    [0, 0],
    [1e3, -1e3],
    [6, 4],
    [5, 5],
  ].forEach(($) => console.log($[0] >= 5 && $[1] >= 5)),
  r(d);
