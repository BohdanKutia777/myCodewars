const broken = (x) =>
  x.replace(/[01]/g, (el) => (el === '1' ? (el = '0') : '1'));
