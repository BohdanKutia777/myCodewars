const rowWeights = array => array.reduce((a, b, i) => ( a[i % 2] += b ,a), [0,0]);
