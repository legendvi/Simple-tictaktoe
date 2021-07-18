res = function (a, b) {
  c = [];
  if (b !== undefined) {
    for (i = 0; i < b; i++) {
      c.push(a[i]);
    }
  } else {
    c = a[0];
  }

  return c;
};

a = [1, 2, 3, 4, 5];
console.log(res(a));

// 845b180d8d3512f806cbe2c92a4e15e9
