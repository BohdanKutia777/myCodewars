const uniqueSum = (lst) =>
  lst.length ? [...new Set(lst)].reduce((a, b) => a + b, 0) : null;
