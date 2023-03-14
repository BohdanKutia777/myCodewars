const consonantCount = (str) =>
  str.split('').filter((v) => /[qzwsxdcrfvtgbyhnjmklp]/gi.test(v)).length;
