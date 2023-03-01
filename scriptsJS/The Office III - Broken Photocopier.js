const broken = (x) => x.replace(/[01]/g, (n) => (n === '1' ? (n = '0') : '1'));
